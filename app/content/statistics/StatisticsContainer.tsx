import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Text from 'components/Text';
import { RootStackParamList, Screens } from 'navigation/types';
import { View } from 'react-native';

type Props = NativeStackScreenProps<RootStackParamList, Screens.STATISTICS>;

const StatisticsContainer = ({}: Props) => {
  return (
    <View>
      <Text>Statistics</Text>
    </View>
  );
};

export default StatisticsContainer;
