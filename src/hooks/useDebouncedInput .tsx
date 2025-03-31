import { useEffect, useState } from "react";
import { getSearchBarData } from "@/actions/getSearchBarData";
import { SearchBarData } from "@/utils/types/SearchBarData";

export function useDebouncedInput(delay: number) {
  const [data, setData] = useState<SearchBarData>(null);
  const [value, setValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const clearSearchResults = () => setData(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  useEffect(() => {
    if (!debouncedValue) {
      setData(null);
      return;
    }

    getSearchBarData(debouncedValue).then((response) => setData(response));
  }, [debouncedValue]);

  return { data, value, handleChange, clearSearchResults };
}
