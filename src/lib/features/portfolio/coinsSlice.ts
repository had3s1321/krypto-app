import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PortfolioAsset } from "@/utils/types/PortfolioAsset";

const initialState: PortfolioAsset[] = [];

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    addAsset: (state, action: PayloadAction<PortfolioAsset>) => [
      ...state,
      action.payload,
    ],
    removeAsset: (state, action: PayloadAction<PortfolioAsset>) =>
      state.filter((asset) => asset.id !== action.payload.id),
    updateAsset: (state, action: PayloadAction<PortfolioAsset>) => {
      const asset = state.find((a) => a.id === action.payload.id);
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
