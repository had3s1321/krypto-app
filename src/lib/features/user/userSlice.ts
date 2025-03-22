import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Currencies = "USD" | "EUR" | "GBP";

interface InitialUserSettings {
  currency: Currencies;
  locale: string;
}

export const initialState: InitialUserSettings = {
  currency: "USD",
  locale: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeCurrency: (state, action: PayloadAction<Currencies>) => {
      state.currency = action.payload;
    },
    changeLocale: (state, action: PayloadAction<string>) => {
      state.locale = action.payload;
    },
  },
});

export const { changeCurrency, changeLocale } = userSlice.actions;

export default userSlice.reducer;
