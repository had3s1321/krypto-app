import { configureStore } from "@reduxjs/toolkit";
import { coingeckoApi } from "../services/coingeckoApi";
import coinsReducer from "./features/coins/coinsSlice";
import userReducer, {
  initialState as userInitialState,
} from "./features/user/userSlice";

export const makeStore = (preloadedLocale: string) => {
  return configureStore({
    reducer: {
      [coingeckoApi.reducerPath]: coingeckoApi.reducer,
      coins: coinsReducer,
      user: userReducer,
    },
    preloadedState: {
      user: {
        ...userInitialState,
        locale: preloadedLocale,
      },
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(coingeckoApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
