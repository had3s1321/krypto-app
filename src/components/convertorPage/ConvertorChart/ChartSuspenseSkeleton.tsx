import { FadeStaggerSquares } from "@/components/ui/icons";
import ChartSuspenseContainer from "./ChartSuspenseContainer";
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
        <ChartSuspenseContainer>
          <div>An error has occurred:</div>
          <div>{errMsg}</div>
        </ChartSuspenseContainer>
      );
    }
    return <ChartSuspenseContainer>{error.message}</ChartSuspenseContainer>;
  }

  if (type === "no-data")
    return (
      <ChartSuspenseContainer>Please select 2 coins</ChartSuspenseContainer>
    );

  if (type === "loading")
    return (
      <ChartSuspenseContainer>
        <div className="h-10 w-10">
          <FadeStaggerSquares />
        </div>
      </ChartSuspenseContainer>
    );
};

export default ChartSuspenseSkeleton;
