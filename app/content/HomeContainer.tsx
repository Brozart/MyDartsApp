import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, View } from 'react-native';

import { RootStackParamList, Screens } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, Screens.HOME>;

const HomeContainer = ({ navigation }: Props) => {
  const handleNewGame = () => {
    navigation.navigate(Screens.GAME);
  };

  return (
    <View>
      <Button title="New game" onPress={handleNewGame} />
    </View>
  );
};

export default HomeContainer;
