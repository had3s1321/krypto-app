"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
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
  const persistedStore = persistStore(storeRef.current);

  return (
    <Provider store={storeRef.current}>
      <PersistGate
        loading={<div className="text-[var(--clr-text)]">loading...</div>}
        persistor={persistedStore}
      >
        {children}
      </PersistGate>
    </Provider>
  );
}
