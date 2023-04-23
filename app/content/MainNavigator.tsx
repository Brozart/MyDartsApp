import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeContainer from './HomeContainer';
import GameContainer from './game/GameContainer';
import { RootStackParamList } from '../navigation/types';

const MainNavigator = () => {
  const RootStack = createNativeStackNavigator<RootStackParamList>();

  return (
    <RootStack.Navigator initialRouteName="Home">
      <RootStack.Screen name="Home" component={HomeContainer} />
      <RootStack.Screen name="Game" component={GameContainer} />
    </RootStack.Navigator>
  );
};

export default MainNavigator;
