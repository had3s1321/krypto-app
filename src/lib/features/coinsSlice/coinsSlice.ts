import { createSlice } from '@reduxjs/toolkit';

const initialState: unknown[] = [];

const coinsSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		placeholder: (state) => state
	}
});

export const { placeholder } = coinsSlice.actions;

export default coinsSlice.reducer;
