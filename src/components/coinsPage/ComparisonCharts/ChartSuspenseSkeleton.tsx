import { FadeStaggerSquares } from "@/components/ui/icons";

const CoinsChartSuspenseSkeleton = ({
  type,
}: {
  type: "loading" | "error";
}) => {
  return (
    <div className="mb-5 flex aspect-video w-full items-center justify-center rounded-md bg-[var(--foreground)] shadow-lg md:mb-0">
      <div className="h-10 w-10 text-[var(--clr-text)]">
        {type === "loading" ? <FadeStaggerSquares /> : "Something went wrong"}
      </div>
    </div>
  );
};

export default CoinsChartSuspenseSkeleton;
