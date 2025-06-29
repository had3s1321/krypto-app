"use client";

import { CopyIcon, RedirectIcon } from "./icons";
import { useCopyToClipboard } from "@/hooks/useClipboard";

const LinkContainer = ({ url }: { url: string }) => {
  const { copy, status } = useCopyToClipboard();

  return (
    <>
      <span className="relative flex items-center gap-2">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <RedirectIcon />
        </a>
        <span className="overflow-hidden text-ellipsis whitespace-nowrap">
          {url}
        </span>
        <CopyIcon onClick={() => copy(url)} />
      </span>
      <span className="absolute right-0 top-0 bg-red-500">
        {status && status}
      </span>
    </>
  );
};

export default LinkContainer;
