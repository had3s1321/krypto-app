"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { z } from "zod";
import { cn } from "@/utils/shadcn_utils";
import { useDebouncedSearch } from "@/hooks/useDebouncedSearch ";
import { useScreenBreakpoint } from "@/hooks/useScreenBreakpoint";
import { zodResolver } from "@hookform/resolvers/zod";
import SearchDropdown from "@/components/ui/SearchDropdown";
import { Input } from "@/components/ui/shadcn/input";
import { Button } from "@/components/ui/shadcn/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/shadcn/form";
import { DialogClose, DialogFooter } from "@/components/ui/shadcn/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/shadcn/popover";
import { Calendar } from "@/components/ui/shadcn/calendar";
import { CalendarIcon, SaveIcon, XIcon } from "lucide-react";
import { Coin } from "@/utils/types/SearchBarData";
import DialogImage from "./DialogImage";
import {
  useLazyGetHistoricalCoinDataQuery,
  useLazyGetIndividualCoinDataQuery,
} from "@/services/coingeckoApi";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addAsset, updateAsset } from "@/lib/features/portfolio/portfolioSlice";
import { PortfolioCoinData } from "@/utils/types/IndividualCoinData";

const formSchema = z.object({
  coin: z.string(),
  coinId: z.string().min(1, {
    message: "Invalid coin selection.",
  }),
  coinImage: z.string(),
  amount: z
    .string()
    .nonempty("Value is required")
    .refine(
      (val) => {
        const num = parseFloat(val);
        return !isNaN(num) && num > 0;
      },
      {
        message: "Value must be greater than 0",
      },
    ),
  purchaseDate: z.date(),
});

const AddAssetForm = ({ closeDialog }: { closeDialog: () => void }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const { data, handleChange, clearSearchResults } = useDebouncedSearch(250);
  const [individualCoinTrigger] = useLazyGetIndividualCoinDataQuery();
  const [historicalCoinTrigger] = useLazyGetHistoricalCoinDataQuery();
  const dispatch = useAppDispatch();
  const { assets } = useAppSelector((state) => state.portfolio);
  const { currency } = useAppSelector((state) => state.user);
  const breakpoint = useScreenBreakpoint();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      coin: "",
      coinId: "",
      coinImage: "",
      amount: "0",
      purchaseDate: new Date(),
    },
  });

  const handleCoinSelect = (coin: Coin) => {
    form.setValue("coinId", coin.id, {
      shouldValidate: true,
      shouldTouch: true,
      shouldDirty: true,
    });
    form.setValue("coin", coin.name, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
    form.setValue("coinImage", coin.large || "N/A");
    clearSearchResults();
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cleanedInput = e.target.value.replace(/^0+(?=\d)/, "");
    const formattedAmount = cleanedInput;
    form.setValue("amount", formattedAmount);
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const foundAsset = assets.find((asset) => asset.id === values.coinId);
    const { data: historicalCoinData } = await historicalCoinTrigger({
      coin: values.coinId,
      date: values.purchaseDate
        .toLocaleString("en-GB")
        .split(",")[0]
        .replace(/\//g, "-"),
    });

    if (foundAsset) {
      dispatch(
        updateAsset({
          ...foundAsset,
          equity:
            Number(values.amount) * (historicalCoinData?.price[currency] || 0),
          amount: Number(values.amount),
          lastPurchased: values.purchaseDate.toLocaleString(),
        }),
      );
      closeDialog();
    } else {
      const { data: individualCoinData } = await individualCoinTrigger({
        coin: values.coinId,
        path: "portfolio",
      });
      dispatch(
        addAsset({
          ...individualCoinData,
          amount: Number(values.amount),
          equity:
            Number(values.amount) * (historicalCoinData?.price[currency] || 1),
          lastPurchased: values.purchaseDate.toLocaleString(),
        } as PortfolioCoinData),
      );
      closeDialog();
    }
  };

  return (
    <Form {...form}>
      <div className="flex gap-8">
        {breakpoint === "xl" && (
          <DialogImage
            src={form.getValues("coinImage")}
            alt={form.getValues("coin")}
          />
        )}
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-4 font-grotesk xl:w-2/3"
        >
          <FormField
            control={form.control}
            name="coin"
            render={({ field }) => (
              <FormItem>
                <FormLabel hidden>Username</FormLabel>
                <FormControl>
                  <div className="relative w-full">
                    <Input
                      type="text"
                      placeholder="Select coin"
                      value={field.value}
                      onChange={(e) => {
                        field.onChange(e);
                        handleChange(e);
                        form.setValue("coinImage", "");
                      }}
                      onBlur={clearSearchResults}
                      className="border-none bg-[var(--clr-nav-foreground)] focus-visible:ring-0"
                    />
                    <SearchDropdown
                      data={data}
                      onBlur={() => form.setValue("coin", "")}
                      handleCoinSelect={handleCoinSelect}
                    />
                  </div>
                </FormControl>
                <FormDescription hidden>
                  This is the selected coin.
                </FormDescription>
                {form.formState.errors.coinId && (
                  <p className="text-sm font-medium text-destructive">
                    {form.formState.errors.coinId.message}
                  </p>
                )}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel hidden>Amount</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Purchased amount"
                    value={field.value}
                    min={0}
                    step="any"
                    type="number"
                    onChange={handleNumberChange}
                    className="border-none bg-[var(--clr-nav-foreground)] [appearance:textfield] focus-visible:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  />
                </FormControl>
                <FormDescription hidden>This is the amount.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="purchaseDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel hidden>Purchase Date</FormLabel>
                <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        className={cn(
                          "w-full justify-start bg-[var(--clr-nav-foreground)] text-left font-normal text-inherit shadow-none",
                          !field.value && "text-muted-foreground",
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Purchased date</span>
                        )}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={(date) => {
                        field.onChange(date);
                        setIsPopoverOpen(false);
                      }}
                      disabled={(date) => date > new Date()}
                      className="bg-[var(--primary-foreground)]"
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription hidden>
                  Pick when you bought the asset.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <DialogFooter className="w-full flex-row gap-2 pt-4">
            <DialogClose asChild>
              <Button className="w-1/2 bg-[var(--clr-nav-foreground)] text-[var(--clr-nav-text)] shadow-none">
                {breakpoint === "md" ? <XIcon /> : "Cancel"}
              </Button>
            </DialogClose>
            <Button
              type="submit"
              className="w-1/2 text-[var(--clr-nav-text)] shadow-none"
            >
              {breakpoint === "md" ? <SaveIcon /> : "Save and Continue"}
            </Button>
          </DialogFooter>
        </form>
      </div>
    </Form>
  );
};

export default AddAssetForm;
