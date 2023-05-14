import Button from 'common/components/Button';
import FlexContainer from 'common/components/FlexContainer';
import { useColorScheme } from 'nativewind';

type Props = {
  /** Invoked when the game button is pressed */
  onGamePressed(): void;
};

const Home = ({ onGamePressed }: Props) => {
  const { colorScheme, setColorScheme } = useColorScheme();

  return (
    <FlexContainer grow alignItems="center" justifyContent="center">
      <Button
        title={`Toggle theme ${colorScheme}`}
        onPress={() => {
          setColorScheme(colorScheme === 'light' ? 'dark' : 'light');
        }}
      />
      <Button title="Start game" onPress={onGamePressed} />
    </FlexContainer>
  );
};

export default Home;
