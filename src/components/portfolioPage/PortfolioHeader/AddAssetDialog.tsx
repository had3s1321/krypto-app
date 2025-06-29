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
        <Button className="fixed bottom-28 right-5 z-50 h-16 w-16 rounded-full bg-[var(--primary-foreground)] text-[var(--clr-light-perm)] shadow-lg md:static md:h-auto md:w-1/6 md:rounded-md">
          {isMobile ? <PlusIcon className="!size-8" /> : "Add Asset"}
        </Button>
      </DialogTrigger>
      <DialogContent className="w-auto p-10 text-[var(--clr-nav-text)] md:w-1/2">
        <DialogHeader>
          <DialogTitle>Select coin</DialogTitle>
        </DialogHeader>
        <AddAssetForm closeDialog={() => setIsOpen(false)} />
      </DialogContent>
    </Dialog>
  );
};

export default AddAssetDialog;
