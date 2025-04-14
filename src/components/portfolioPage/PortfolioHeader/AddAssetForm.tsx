"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { z } from "zod";
import { cn } from "@/utils/shadcn_utils";
import { useDebouncedSearch } from "@/hooks/useDebouncedSearch ";
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
import { DialogFooter } from "@/components/ui/shadcn/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/shadcn/popover";
import { Calendar } from "@/components/ui/shadcn/calendar";
import { CalendarIcon } from "lucide-react";
import { Coin } from "@/utils/types/SearchBarData";

const formSchema = z.object({
  coin: z.string().min(1, {
    message: "Please select a coin.",
  }),
  coinId: z.string(),
  amount: z.string(),
  purchaseDate: z.date(),
});

const AddAssetForm = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const { data, handleChange, clearSearchResults } = useDebouncedSearch(250);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      coin: "",
      coinId: "",
      amount: "0",
      purchaseDate: new Date(),
    },
  });

  const handleCoinSelect = (coin: Coin) => {
    form.setValue("coinId", coin.id);
    form.setValue("coin", coin.name, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
    clearSearchResults();
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cleanedInput = e.target.value.replace(/^0+(?=\d)/, "");
    const formattedAmount = cleanedInput;
    form.setValue("amount", formattedAmount);
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values); //eslint-disable-line no-console
  };

  return (
    <Form {...form}>
      <div className="flex">
        <div className="w-1/3">Image</div>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-4 font-grotesk"
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
                      }}
                      onBlur={clearSearchResults}
                    />
                    <SearchDropdown
                      data={data}
                      handleCoinSelect={handleCoinSelect}
                    />
                  </div>
                </FormControl>
                <FormDescription hidden>
                  This is the selected coin.
                </FormDescription>
                <FormMessage />
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
                    className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
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
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
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
          <DialogFooter className="w-full gap-2 pt-4">
            <Button className="w-1/2 text-[var(--clr-nav-text)]">Cancel</Button>
            <Button type="submit" className="w-1/2 text-[var(--clr-nav-text)]">
              Save and Continue
            </Button>
          </DialogFooter>
        </form>
      </div>
    </Form>
  );
};

export default AddAssetForm;
