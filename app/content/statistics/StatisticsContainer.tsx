import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList, Screens } from 'navigation/types';
import { Text, View } from 'react-native';

type Props = NativeStackScreenProps<RootStackParamList, Screens.STATISTICS>;

const StatisticsContainer = ({}: Props) => {
  return (
    <View>
      <Text>Statistics</Text>
    </View>
  );
};

export default StatisticsContainer;
