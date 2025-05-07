import { useCallback, useEffect, useState } from "react";

type CopiedValue = string | null;
type Status = string | null;
export type CopyFn = (text: string) => Promise<boolean>; //eslint-disable-line

interface CopyToClipboardHook {
  copiedText: CopiedValue;
  copy: CopyFn;
  status: Status;
}

export function useCopyToClipboard(): CopyToClipboardHook {
  const [copiedText, setCopiedText] = useState<CopiedValue>(null);
  const [status, setStatus] = useState<Status>(null);

  const copy: CopyFn = useCallback(async (text) => {
    if (!navigator?.clipboard) {
      setStatus("Clipboard not supported");
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      setStatus("Text copied");
      return true;
    } catch (error: unknown) {
      setCopiedText(null);
      if (error instanceof Error) {
        setStatus(error.message);
      } else {
        setStatus("Copy failed");
      }
      return false;
    }
  }, []);

  useEffect(() => {
    let timeout = undefined;
    if (status)
      timeout = setTimeout(() => {
        setStatus(null);
      }, 2000);

    return () => clearTimeout(timeout);
  }, [status]);

  return { copiedText, copy, status };
}
