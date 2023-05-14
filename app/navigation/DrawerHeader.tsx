import { DrawerHeaderProps } from '@react-navigation/drawer';
import Text from 'common/components/Text';
import Drawer from 'common/icons/drawer.svg';
import { useColorScheme } from 'nativewind';
import { ViewProps, View, Pressable } from 'react-native';
import Colors from 'tailwindcss/colors';

type Props = ViewProps & DrawerHeaderProps;

const DrawerHeader = ({ route, navigation }: Props) => {
  const { colorScheme } = useColorScheme();

  /** RENDER FUNCTIONS */
  return (
    <View className="h-20 px-3 pt-5 flex-row items-center dark:bg-stone-700">
      <Pressable onPress={navigation.toggleDrawer} className="pl-1 pr-7">
        <Drawer
          height={30}
          width={30}
          fill={colorScheme === 'dark' ? Colors.white : Colors.stone[500]}
        />
      </Pressable>
      <Text fontSize="xl" fontWeight="bold">
        {route.name}
      </Text>
    </View>
  );
};

export default DrawerHeader;
