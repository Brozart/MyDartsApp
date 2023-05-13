import { Game } from 'domain/Game';

import { GameState } from './GameSlice';
import { RootState } from '..';

const gameState = (state: RootState): GameState => state.game;

export const selectGame = (state: RootState): Game | undefined => gameState(state).game;
