import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList, Screens } from 'navigation/types';

import Home from './Home';

type Props = NativeStackScreenProps<RootStackParamList, Screens.HOME>;

const HomeContainer = ({ navigation }: Props) => {
  /** HANDLER FUNCTIONS */
  const handleGamePressed = () => {
    navigation.navigate(Screens.GAME, { screen: Screens.GAME_OVERVIEW });
  };

  /** RENDER FUNCTIONS */
  return <Home onGamePressed={handleGamePressed} />;
};

export default HomeContainer;
