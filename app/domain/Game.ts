import { Player } from './Player';

export enum GameType {
  XO1,
}

export interface Game {
  players: Player[];
  type: GameType;
  scores: { player: Player; score: number }[];
}

export const defaultGame = (players: Player[], type = GameType.XO1): Game => ({
  players,
  type,
  scores: players.map((p) => ({ player: p, score: type === GameType.XO1 ? 501 : 0 })),
});
