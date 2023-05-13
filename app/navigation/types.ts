export enum Screens {
  HOME = 'Home',
  GAME_OVERVIEW = 'Games',
  STATISTICS = 'Statistics',
}

export type RootStackParamList = {
  [Screens.HOME]: undefined;
  [Screens.GAME_OVERVIEW]: undefined;
  [Screens.STATISTICS]: undefined;
};
