import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';

import { RootStackParamList, Screens } from '../../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, Screens.STATISTICS>;

const StatisticsContainer = ({}: Props) => {
  return (
    <View>
      <Text>Statistics</Text>
    </View>
  );
};

export default StatisticsContainer;
