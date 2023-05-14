import clsx from 'clsx';
import { PressableProps, Pressable } from 'react-native';

import Text from './Text';

type Props = Omit<PressableProps, 'style'> & {
  variant?: 'primary' | 'secondary';
  title?: string;
};

const buttonStyles = {
  primary: 'bg-red-300 p-3 m-3 rounded dark:bg-red-800 active:bg-red-500',
  secondary: 'bg-stone-200 p-3 m-3 rounded dark:bg-stone-700 active:bg-stone-500',
};

const Button = ({ variant = 'primary', title, className, ...props }: Props) => {
  const classes = clsx(buttonStyles[variant], className && className);

  return (
    <Pressable {...props} className={classes}>
      {title && <Text variant={variant}>{title}</Text>}
    </Pressable>
  );
};

export default Button;
