import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeContainer from './HomeContainer';
import GameContainer from './game/GameContainer';
import StatisticsContainer from './statistics/StatisticsContainer';
import { RootStackParamList, Screens } from '../navigation/types';

const MainNavigator = () => {
  const RootStack = createNativeStackNavigator<RootStackParamList>();

  return (
    <RootStack.Navigator initialRouteName={Screens.HOME}>
      <RootStack.Screen name={Screens.HOME} component={HomeContainer} />
      <RootStack.Screen name={Screens.GAME} component={GameContainer} />
      <RootStack.Screen name={Screens.STATISTICS} component={StatisticsContainer} />
    </RootStack.Navigator>
  );
};

export default MainNavigator;
