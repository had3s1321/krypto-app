"use client";

import { Button } from "@/components/ui/shadcn/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/shadcn/dialog";
import AddAssetForm from "./AddAssetForm";

const AddAssetDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-1/6 bg-[var(--primary-foreground)] text-[var(--clr-light-perm)] shadow-lg">
          Add Asset
        </Button>
      </DialogTrigger>
      <DialogContent className="w-1/2 p-10 text-[var(--clr-nav-text)]">
        <DialogHeader>
          <DialogTitle>Select coin</DialogTitle>
        </DialogHeader>
        <AddAssetForm />
      </DialogContent>
    </Dialog>
  );
};

export default AddAssetDialog;
