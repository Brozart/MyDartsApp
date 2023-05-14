import Button from 'components/Button';
import { useColorScheme } from 'nativewind';
import { View } from 'react-native';

type Props = {
  /** Invoked when the game button is pressed */
  onGamePressed(): void;
};

const Home = ({ onGamePressed }: Props) => {
  const { colorScheme, setColorScheme } = useColorScheme();

  return (
    <View className="flex-1 items-center justify-center dark:bg-stone-950">
      <Button
        title={`Toggle theme ${colorScheme}`}
        onPress={() => {
          setColorScheme(colorScheme === 'light' ? 'dark' : 'light');
        }}
      />
      <Button title="Start game" variant="secondary" onPress={onGamePressed} />
    </View>
  );
};

export default Home;
