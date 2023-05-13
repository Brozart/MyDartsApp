import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Game, GameType, defaultGame } from '../../domain/Game';
import { Player } from '../../domain/Player';

export interface GameState {
  game?: Game;
}

const initialState: GameState = {};

const gameSlice = createSlice({
  name: 'ganme',
  initialState,
  reducers: {
    startGame: (state, { payload }: PayloadAction<{ players: Player[]; type: GameType }>) => {
      state.game = defaultGame(payload.players, payload.type);
    },
    updateScore: (state, { payload }: PayloadAction<{ player: Player; score: number }>) => {
      if (state.game) {
        state.game.scores = state.game.scores.map((sc) => {
          if (sc.player === payload.player) {
            return {
              player: sc.player,
              score: payload.score,
            };
          } else {
            return sc;
          }
        });
      } else {
        throw Error('Game not yet started');
      }
    },
    stopGame: (state) => {
      state = initialState;
    },
  },
});

export const { startGame, updateScore, stopGame } = gameSlice.actions;

export default gameSlice.reducer;
