import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList, Screens } from 'navigation/types';

import Home from './Home';

type Props = NativeStackScreenProps<RootStackParamList, Screens.HOME>;

const HomeContainer = ({ navigation }: Props) => {
  /** HANDLER FUNCTIONS */
  const handleNewGame = () => {
    navigation.navigate(Screens.GAME_OVERVIEW);
  };

  /** RENDER FUNCTIONS */
  return <Home onGamePressed={handleNewGame} />;
};

export default HomeContainer;
