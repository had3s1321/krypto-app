"use client";

import { useEffect, useRef, useState } from "react";
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
  const [persistor, setPersistor] = useState<any>(null); //eslint-disable-line

  if (!storeRef.current) {
    storeRef.current = makeStore(locale);
  }

  useEffect(() => {
    const persistedStore = persistStore(storeRef.current!);
    setPersistor(persistedStore);
  }, []);

  if (!persistor) {
    return <div className="text-[var(--clr-text)]">loading...</div>;
  }
  return (
    <Provider store={storeRef.current}>
      <PersistGate
        loading={<div className="text-[var(--clr-text)]">loading...</div>}
        persistor={persistor}
      >
        {children}
      </PersistGate>
    </Provider>
  );
}
