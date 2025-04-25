import { CarouselItemData } from "@/utils/types/CoinsListMarketData";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Currencies = "USD" | "EUR" | "GBP";

interface InitialUserSettings {
  currency: Currencies;
  locale: string;
  selectedCoins: CarouselItemData[];
}

export const initialState: InitialUserSettings = {
  currency: "USD",
  locale: "",
  selectedCoins: [],
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
    changeSelectedCoins: (state, action) => {
      state.selectedCoins = action.payload;
    },
  },
});

export const { changeCurrency, changeLocale, changeSelectedCoins } =
  userSlice.actions;

export default userSlice.reducer;
