import { configureStore } from '@reduxjs/toolkit';

import GameReducer from './game/GameSlice';

export const store = configureStore({
  reducer: {
    game: GameReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
