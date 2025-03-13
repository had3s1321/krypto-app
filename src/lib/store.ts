import { configureStore } from '@reduxjs/toolkit';
import coinsReducer from './features/coinsSlice/coinsSlice';

export const makeStore = () => {
	return configureStore({
		reducer: { coins: coinsReducer }
	});
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
