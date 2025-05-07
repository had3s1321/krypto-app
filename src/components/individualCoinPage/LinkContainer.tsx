"use client";

import { CopyIcon } from "./icons";
import { useCopyToClipboard } from "@/hooks/useClipboard";

const LinkContainer = ({ url }: { url: string }) => {
  const { copy, status } = useCopyToClipboard();

  return (
    <>
      <span className="relative flex items-center gap-2">
        {url}
        <CopyIcon onClick={() => copy(url)} />
      </span>
      <span className="absolute right-0 top-0 bg-red-500">
        {status && status}
      </span>
    </>
  );
};

export default LinkContainer;
