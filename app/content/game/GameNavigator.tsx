import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GameStackParamList, Screens } from 'navigation/types';

import GameFormContainer from './GameFormContainer';
import GameOverviewContainer from './GameOverviewContainer';

const GameNavigator = () => {
  const Game = createNativeStackNavigator<GameStackParamList>();
  const defaultScreenOptions = { headerShown: false };

  return (
    <Game.Navigator initialRouteName={Screens.GAME_OVERVIEW}>
      <Game.Screen
        name={Screens.GAME_OVERVIEW}
        component={GameOverviewContainer}
        options={defaultScreenOptions}
      />
      <Game.Screen
        name={Screens.GAME_FORM}
        component={GameFormContainer}
        options={defaultScreenOptions}
      />
    </Game.Navigator>
  );
};

export default GameNavigator;
