import { configureStore } from "@reduxjs/toolkit";
import { coingeckoApi } from "../services/coingeckoApi";
import portfolioReducer from "./features/portfolio/coinsSlice";
import userReducer, {
  initialState as userInitialState,
} from "./features/user/userSlice";

export const makeStore = (preloadedLocale: string) => {
  return configureStore({
    reducer: {
      [coingeckoApi.reducerPath]: coingeckoApi.reducer,
      user: userReducer,
      portfolio: portfolioReducer,
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
