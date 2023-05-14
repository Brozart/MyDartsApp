import { NativeStackScreenProps } from '@react-navigation/native-stack';
import FlexContainer from 'common/components/FlexContainer';
import Text from 'common/components/Text';
import { RootStackParamList, Screens } from 'navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, Screens.STATISTICS>;

const StatisticsContainer = ({}: Props) => {
  return (
    <FlexContainer grow alignItems="center" justifyContent="center">
      <Text>Statistics</Text>
    </FlexContainer>
  );
};

export default StatisticsContainer;
