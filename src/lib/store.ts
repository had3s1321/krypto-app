import { configureStore } from "@reduxjs/toolkit";
import coinsReducer from "./features/coins/coinsSlice";
import userReducer from "./features/user/userSlice";

export const makeStore = () => {
  return configureStore({
    reducer: { coins: coinsReducer, user: userReducer },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
