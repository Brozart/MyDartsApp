import { GameState } from './GameSlice';
import { RootState } from '..';

const gameState = (state: RootState): GameState => state.game;

export const selectGameInProgress = (state: RootState): boolean => gameState(state).inProgress;
