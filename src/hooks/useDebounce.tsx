import { useEffect, useState } from "react";

export function useDebounce(delay: number) {
  const [value, setValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);
  return { value, debouncedValue, handleChange };
}
