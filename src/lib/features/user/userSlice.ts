import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Currencies = "USD" | "EUR" | "GBP";

interface InitialUserSettings {
  currency: Currencies;
}

const initialState: InitialUserSettings = { currency: "USD" };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeCurrency: (state, action: PayloadAction<Currencies>) => {
      state.currency = action.payload;
    },
  },
});

export const { changeCurrency } = userSlice.actions;

export default userSlice.reducer;
