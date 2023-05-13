export enum Screens {
  HOME = 'Home',
  GAME = 'Game',
  STATISTICS = 'Statistics',
}

export type RootStackParamList = {
  [Screens.HOME]: undefined;
  [Screens.GAME]: undefined;
  [Screens.STATISTICS]: undefined;
};
