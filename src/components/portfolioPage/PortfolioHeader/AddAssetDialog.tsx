"use client";

import { useState } from "react";
import { useScreenBreakpoint } from "@/hooks/useScreenBreakpoint";
import { PlusIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/shadcn/dialog";
import AddAssetForm from "./AddAssetForm";
import { Button } from "@/components/ui/shadcn/button";

const AddAssetDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const breakpoint = useScreenBreakpoint();

  const isMobile = breakpoint === "md";

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="absolute bottom-28 right-5 h-16 w-16 rounded-full bg-[var(--primary-foreground)] text-[var(--clr-light-perm)] shadow-lg md:static md:h-auto md:w-1/6 md:rounded-md">
          {isMobile ? <PlusIcon className="!size-8" /> : "Add Asset"}
        </Button>
      </DialogTrigger>
      <DialogContent className="w-1/2 p-10 text-[var(--clr-nav-text)]">
        <DialogHeader>
          <DialogTitle>Select coin</DialogTitle>
        </DialogHeader>
        <AddAssetForm closeDialog={() => setIsOpen(false)} />
      </DialogContent>
    </Dialog>
  );
};

export default AddAssetDialog;
