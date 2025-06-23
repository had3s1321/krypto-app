"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/shadcn/dialog";
import AddAssetForm from "./AddAssetForm";
import DialogButton from "./DialogButton";

const AddAssetDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <DialogButton />
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
