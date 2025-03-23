"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "../lib/store";

export default function StoreProvider({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) {
  const storeRef = useRef<AppStore>(undefined);
  if (!storeRef.current) {
    storeRef.current = makeStore(locale);
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
