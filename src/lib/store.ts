import { configureStore } from "@reduxjs/toolkit";
import coinsReducer from "./features/coins/coinsSlice";
import userReducer, {
  initialState as userInitialState,
} from "./features/user/userSlice";

export const makeStore = (preloadedLocale: string) => {
  return configureStore({
    reducer: { coins: coinsReducer, user: userReducer },
    preloadedState: {
      user: {
        ...userInitialState,
        locale: preloadedLocale,
      },
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
