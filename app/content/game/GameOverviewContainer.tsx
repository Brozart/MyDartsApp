import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { GameStackParamList, Screens } from 'navigation/types';
import { Alert } from 'react-native';

import GameOverview from './GameOverview';

type Props = NativeStackScreenProps<GameStackParamList, Screens.GAME_OVERVIEW>;

const GameOverviewContainer = ({ navigation }: Props) => {
  /** HANDLER FUNCTIONS */
  const handleNewGame = () => {
    navigation.navigate(Screens.GAME_FORM);
  };

  const handleContinueGame = () => {
    // TODO navigate to game screen
    Alert.alert('Continue game');
  };

  /** RENDER FUNCTIONS */
  return <GameOverview onNewGame={handleNewGame} onContinueGame={handleContinueGame} />;
};

export default GameOverviewContainer;
