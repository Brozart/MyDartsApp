import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Alert } from 'react-native';

import GameOverview from './GameOverview';
import { RootStackParamList, Screens } from '../../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, Screens.GAME_OVERVIEW>;

const GameOverviewContainer = ({ navigation }: Props) => {
  /** HANDLER FUNCTIONS */
  const handleNewGame = () => {
    // TODO navigate to new game form
    Alert.alert('New game start');
  };

  const handleContinueGame = () => {
    // TODO navigate to game screen
    Alert.alert('Continue game');
  };

  /** RENDER FUNCTIONS */
  return <GameOverview onNewGame={handleNewGame} onContinueGame={handleContinueGame} />;
};

export default GameOverviewContainer;
