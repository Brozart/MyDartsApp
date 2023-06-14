import * as Yup from 'yup';

import { FieldType, fieldTypeValues } from './Board';
import { Player, playerValidation } from './Player';

export enum GameType {
  XO1 = 'X01',
}
export const gameTypeValues = Object.values(GameType);

export enum LegsType {
  BEST_OF = 'BEST_OF',
  FIRST_TO = 'FIRST_TO',
}
export const legsTypeValues = Object.values(LegsType);

export interface Game {
  players: Player[];
  type: GameType;
  legs?: number;
  legsType?: LegsType;
  checkoutType?: FieldType;
  checkinType?: FieldType;
  scores: { player: Player; score: number }[];
}

export const defaultGame = (players: Player[], type = GameType.XO1): Game => ({
  players,
  type,
  scores: players.map((p) => ({ player: p, score: type === GameType.XO1 ? 501 : 0 })),
});

export const gameValidation: Yup.ObjectSchema<Game> = Yup.object().shape({
  players: Yup.array()
    .of(playerValidation)
    .min(1, 'At least one player needed to play a game')
    .required(),
  type: Yup.mixed<GameType>().oneOf(gameTypeValues).required('This field is required'),
  scores: Yup.array()
    .of(
      Yup.object({
        player: playerValidation,
        score: Yup.number().required('A start score is required'),
      })
    )
    .required(),
  legs: Yup.number().min(1, 'A minimum of 1 leg is required'),
  legsType: Yup.mixed<LegsType>().oneOf(legsTypeValues).required('This field is required'),
  checkoutType: Yup.mixed<FieldType>().oneOf(fieldTypeValues).required('This field is required'),
  checkinType: Yup.mixed<FieldType>().oneOf(fieldTypeValues).required('This field is required'),
});
