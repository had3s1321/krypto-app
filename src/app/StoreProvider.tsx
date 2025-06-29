"use client";

import { useEffect, useRef, useState } from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { makeStore, AppStore } from "../lib/store";
import Loading from "@/components/ui/Loading";

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
    return <Loading />;
  }
  return (
    <Provider store={storeRef.current}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
