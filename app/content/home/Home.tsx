import { Button, View } from 'react-native';

type Props = {
  /** Invoked when the game button is pressed */
  onGamePressed(): void;
};

const Home = ({ onGamePressed }: Props) => {
  return (
    <View>
      <Button title="Start game" onPress={onGamePressed} />
    </View>
  );
};

export default Home;
