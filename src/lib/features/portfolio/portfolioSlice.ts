import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PortfolioCoinData } from "@/utils/types/IndividualCoinData";

const initialState = {
  assets: [] as PortfolioCoinData[],
};

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    addAsset: (state, action: PayloadAction<PortfolioCoinData>) => {
      state.assets.push(action.payload);
    },
    removeAsset: (state, action: PayloadAction<string>) => {
      state.assets = state.assets.filter(
        (asset) => asset.id !== action.payload,
      );
    },
    updateAsset: (state, action: PayloadAction<PortfolioCoinData>) => {
      const asset = state.assets.find((a) => a.id === action.payload.id);
      if (!asset) return;

      asset.amount += action.payload.amount;
      asset.equity += action.payload.equity;
      if (
        new Date(asset.lastPurchased) < new Date(action.payload.lastPurchased)
      )
        asset.lastPurchased = action.payload.lastPurchased;
    },
  },
});

export const { addAsset, removeAsset, updateAsset } = portfolioSlice.actions;

export default portfolioSlice.reducer;
