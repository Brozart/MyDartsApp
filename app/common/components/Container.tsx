import clsx from 'clsx';
import { View, ViewProps } from 'react-native';

export type ContainerProps = Omit<ViewProps, 'style'> & { level?: 1 | 2 | 3 };

const levelColors = {
  1: 'bg-stone-400 dark:bg-stone-600',
  2: 'bg-stone-200 dark:bg-stone-800',
  3: 'bg-stone-50 dark:bg-stone-950',
};

const Container = ({ level = 1, className, ...props }: ContainerProps) => {
  const classes = clsx(levelColors[level], className && className);

  return <View className={classes} {...props} />;
};

export default Container;
