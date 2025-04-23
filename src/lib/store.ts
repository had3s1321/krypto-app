import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { coingeckoApi } from "../services/coingeckoApi";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "./storage";
import portfolioReducer from "./features/portfolio/portfolioSlice";
import userReducer, {
  initialState as userInitialState,
} from "./features/user/userSlice";

const persistConfig = {
  key: "krypto-land",
  storage,
};

const combinedReducer = combineReducers({
  portfolio: persistReducer(persistConfig, portfolioReducer),
  user: userReducer,
  [coingeckoApi.reducerPath]: coingeckoApi.reducer,
});

export const makeStore = (preloadedLocale: string) => {
  return configureStore({
    reducer: combinedReducer,
    preloadedState: {
      user: {
        ...userInitialState,
        locale: preloadedLocale,
      },
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(coingeckoApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
