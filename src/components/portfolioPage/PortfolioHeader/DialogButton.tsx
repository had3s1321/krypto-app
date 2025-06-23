import { useScreenBreakpoint } from "@/hooks/useScreenBreakpoint";
import { Button } from "@/components/ui/shadcn/button";
import { PlusIcon } from "lucide-react";

const DialogButton = () => {
  const breakpoint = useScreenBreakpoint();

  const isMobile = breakpoint === "md";

  return (
    <Button className="absolute bottom-20 right-5 h-12 w-12 rounded-full bg-[var(--primary-foreground)] text-[var(--clr-light-perm)] shadow-lg md:static md:h-auto md:w-1/6 md:rounded-md">
      {isMobile ? <PlusIcon /> : "Add Asset"}
    </Button>
  );
};

export default DialogButton;
