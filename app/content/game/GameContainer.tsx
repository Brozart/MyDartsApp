import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';

import { RootStackParamList, Screens } from '../../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, Screens.GAME>;

const GameContainer = ({ navigation }: Props) => {
  return (
    <View>
      <Text>Game container</Text>
    </View>
  );
};

export default GameContainer;
