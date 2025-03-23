import { useAppSelector } from "@/lib/hooks";

export function useFormat() {
  const { locale, currency } = useAppSelector((state) => state.user);

  return (number: number, options?: Record<string, string | number>) =>
    new Intl.NumberFormat(locale, { ...options, currency: currency }).format(
      number,
    );
}
