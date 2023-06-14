import { NavigatorScreenParams } from '@react-navigation/native';

export enum Screens {
  HOME = 'Home',

  // Game module
  GAME = 'Game',

  GAME_OVERVIEW = 'Games',
  GAME_FORM = 'GameForm',

  // Statistics module
  STATISTICS = 'Statistics',
}

export type GameStackParamList = {
  [Screens.GAME_OVERVIEW]: undefined;
  [Screens.GAME_FORM]: undefined;
};

export type RootStackParamList = {
  [Screens.HOME]: undefined;
  [Screens.GAME]: NavigatorScreenParams<GameStackParamList>;
  [Screens.STATISTICS]: undefined;
};
