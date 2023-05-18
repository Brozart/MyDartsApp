import { createDrawerNavigator } from '@react-navigation/drawer';
import { useColorScheme } from 'nativewind';
import DrawerHeader from 'navigation/DrawerHeader';
import { RootStackParamList, Screens } from 'navigation/types';
import colors from 'tailwindcss/colors';

import GameNavigator from './game/GameNavigator';
import HomeContainer from './home/HomeContainer';
import StatisticsContainer from './statistics/StatisticsContainer';

const MainNavigator = () => {
  const RootDrawer = createDrawerNavigator<RootStackParamList>();
  const { colorScheme } = useColorScheme();

  return (
    <RootDrawer.Navigator
      initialRouteName={Screens.HOME}
      screenOptions={{
        header: (props) => <DrawerHeader {...props} />,
        drawerActiveBackgroundColor: colorScheme === 'light' ? colors.stone[400] : colors.red[800],
        drawerActiveTintColor: colors.white,
        drawerContentStyle: {
          backgroundColor: colorScheme === 'light' ? colors.stone[200] : colors.stone[700],
        },
        drawerInactiveTintColor: colorScheme === 'light' ? undefined : colors.white,
      }}>
      <RootDrawer.Screen name={Screens.HOME} component={HomeContainer} />
      <RootDrawer.Screen name={Screens.GAME} component={GameNavigator} />
      <RootDrawer.Screen name={Screens.STATISTICS} component={StatisticsContainer} />
    </RootDrawer.Navigator>
  );
};

export default MainNavigator;
