import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GameStackParamList, Screens } from 'navigation/types';

import GameOverviewContainer from './GameOverviewContainer';

const GameNavigator = () => {
  const Game = createNativeStackNavigator<GameStackParamList>();

  return (
    <Game.Navigator initialRouteName={Screens.GAME_OVERVIEW}>
      <Game.Screen
        name={Screens.GAME_OVERVIEW}
        component={GameOverviewContainer}
        options={{ headerShown: false }}
      />
    </Game.Navigator>
  );
};

export default GameNavigator;
