import { FadeStaggerSquares } from "@/components/ui/icons";
import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

const ChartSuspenseSkeleton = ({
  type,
  error,
}: {
  type: "error" | "loading" | "no-data";
  error?: FetchBaseQueryError | SerializedError;
}) => {
  if (type === "error" && error) {
    if ("status" in error) {
      const errMsg =
        "error" in error ? error.error : JSON.stringify(error.data);

      return (
        <div className="mb-8 flex h-64 min-h-[200px] w-full items-center justify-center rounded-md bg-[var(--foreground)] text-[var(--clr-text)]">
          <div>An error has occurred:</div>
          <div>{errMsg}</div>
        </div>
      );
    }
    return (
      <div className="mb-8 flex h-64 min-h-[200px] w-full items-center justify-center rounded-md bg-[var(--foreground)] text-[var(--clr-text)]">
        {error.message}
      </div>
    );
  }

  if (type === "no-data")
    return (
      <div className="mb-8 flex h-64 min-h-[200px] w-full items-center justify-center rounded-md bg-[var(--foreground)] text-[var(--clr-text)]">
        Please select 2 coins
      </div>
    );

  if (type === "loading")
    return (
      <div className="mb-8 flex h-64 min-h-[200px] w-full items-center justify-center rounded-md bg-[var(--foreground)]">
        <div className="h-10 w-10">
          <FadeStaggerSquares />
        </div>
      </div>
    );
};

export default ChartSuspenseSkeleton;
