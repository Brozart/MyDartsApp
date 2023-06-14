import { NativeStackScreenProps } from '@react-navigation/native-stack';
import FormContainer from 'common/components/form/FormContainer';
import FormControl from 'common/components/form/FormControl';
import { Game, GameType, defaultGame, gameValidation } from 'domain/Game';
import { GameStackParamList, Screens } from 'navigation/types';
import { TextInput } from 'react-native';

type Props = NativeStackScreenProps<GameStackParamList, Screens.GAME_FORM>;

const GameFormContainer = ({ navigation }: Props) => {
  /** HANDLER FUNCTIONS */
  const handleSubmit = (data: Game) => {
    // TODO save game in store and start game
    alert(JSON.stringify(data));
    navigation.canGoBack();
  };

  /** RENDER FUNCTIONS */
  return (
    <FormContainer
      defaultValues={defaultGame([{ name: 'Tom' }], GameType.XO1)}
      schema={gameValidation}
      onSubmit={handleSubmit}>
      <FormControl name="legs" label="Amount of legs">
        {(field, fieldState) => <TextInput {...field} className="bg-white" />}
      </FormControl>
    </FormContainer>
  );
};

export default GameFormContainer;
