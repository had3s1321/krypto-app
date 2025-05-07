import { useAppSelector } from "@/lib/hooks";

export function useFormat(): [
  // eslint-disable-next-line no-unused-vars
  (number: number, options?: Record<string, string | number>) => string,
  string,
] {
  const { locale, currency } = useAppSelector((state) => state.user);

  const format = (number: number, options?: Record<string, string | number>) =>
    new Intl.NumberFormat(locale, { ...options, currency: currency }).format(
      number,
    );

  return [format, currency];
}
