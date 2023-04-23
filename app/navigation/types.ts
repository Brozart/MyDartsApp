export enum Screens {
  HOME = 'Home',
  GAME = 'Game',
}

export type RootStackParamList = {
  [Screens.HOME]: undefined;
  [Screens.GAME]: undefined;
};
