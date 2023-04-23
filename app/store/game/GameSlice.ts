import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Player } from '../../domain/Player';

export interface GameState {
  inProgress?: boolean;
  players?: Player[];
  type?: string;
  scores?: { player: Player; score: number }[];
}

const initialState: GameState = {};

const gameSlice = createSlice({
  name: 'ganme',
  initialState,
  reducers: {
    startGame: (state, { payload }: PayloadAction<{ players: Player[]; type: string }>) => {
      state.inProgress = true;
      state.players = payload.players;
      state.type = payload.type;
      state.scores = payload.players.map((p) => ({ player: p, score: 501 }));
    },
    updateScore: (state, { payload }: PayloadAction<{ player: Player; score: number }>) => {
      state.scores = state.scores.map((sc) => {
        if (sc.player === payload.player) {
          return {
            player: sc.player,
            score: payload.score,
          };
        } else {
          return sc;
        }
      });
    },
    stopGame: (state) => {
      state = initialState;
    },
  },
});

export const { startGame, updateScore, stopGame } = gameSlice.actions;

export default gameSlice.reducer;
