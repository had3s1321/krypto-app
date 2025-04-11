"use client";

import { Button } from "@/components/ui/shadcn/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/shadcn/dialog";
import AddAssetForm from "./AddAssetForm";

const AddAssetDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-1/6 bg-[var(--primary-foreground)] text-[var(--clr-light-perm)]">
          Add Asset
        </Button>
      </DialogTrigger>
      <DialogContent className="text-[var(--clr-nav-text)] sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Select coin</DialogTitle>
          <DialogDescription>
            Please select a coin, the amount and the purchase date
          </DialogDescription>
        </DialogHeader>
        <AddAssetForm />
      </DialogContent>
    </Dialog>
  );
};

export default AddAssetDialog;
