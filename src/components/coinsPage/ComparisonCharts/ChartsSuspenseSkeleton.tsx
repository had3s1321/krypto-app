import { FadeStaggerSquares } from "@/components/ui/icons";

const ChartsSuspenseSkeleton = ({ type }: { type: "loading" | "error" }) => {
  return (
    <div className="mb-5 flex w-full justify-between gap-16 font-grotesk">
      <div className="flex aspect-video w-full items-center justify-center rounded-md bg-[var(--foreground)]">
        <div className="h-10 w-10">
          {type === "loading" ? <FadeStaggerSquares /> : "Something went wrong"}
        </div>
      </div>
      <div className="flex aspect-video w-full items-center justify-center rounded-md bg-[var(--foreground)]">
        <div className="h-10 w-10">
          {type === "loading" ? <FadeStaggerSquares /> : "Something went wrong"}
        </div>
      </div>
    </div>
  );
};

export default ChartsSuspenseSkeleton;
