import Button from 'common/components/Button';
import FlexContainer from 'common/components/FlexContainer';
import { selectGame } from 'store/game/GameSelectors';
import { useAppSelector } from 'store/hooks';

type Props = {
  /** Invoked when a new game is started */
  onNewGame(): void;
  /** Invoked when a game is continued */
  onContinueGame(): void;
};

const GameOverview = ({ onNewGame, onContinueGame }: Props) => {
  const game = useAppSelector(selectGame);

  /** RENDER FUNCTIONS */
  return (
    <FlexContainer grow alignItems="center" justifyContent="center">
      <Button title="Start new game" onPress={onNewGame} />
      {game && <Button title="Continue current game" onPress={onContinueGame} />}
    </FlexContainer>
  );
};

export default GameOverview;
