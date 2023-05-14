import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerHeader from 'navigation/DrawerHeader';
import { RootStackParamList, Screens } from 'navigation/types';

import GameOverviewContainer from './game/GameOverviewContainer';
import HomeContainer from './home/HomeContainer';
import StatisticsContainer from './statistics/StatisticsContainer';

const MainNavigator = () => {
  const RootDrawer = createDrawerNavigator<RootStackParamList>();

  return (
    <RootDrawer.Navigator
      initialRouteName={Screens.HOME}
      screenOptions={{ header: (props) => <DrawerHeader {...props} /> }}>
      <RootDrawer.Screen name={Screens.HOME} component={HomeContainer} />
      <RootDrawer.Screen name={Screens.GAME_OVERVIEW} component={GameOverviewContainer} />
      <RootDrawer.Screen name={Screens.STATISTICS} component={StatisticsContainer} />
    </RootDrawer.Navigator>
  );
};

export default MainNavigator;
