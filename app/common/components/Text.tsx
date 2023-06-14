import clsx from 'clsx';
import { TextProps, Text as RNText } from 'react-native';

type Props = Omit<TextProps, 'style'> & {
  variant?: 'primary' | 'secondary' | 'danger';
  fontWeight?: 'thin' | 'ligth' | 'normal' | 'medium' | 'bold';
  fontSize?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  italic?: boolean;
};

const textStyles = {
  primary: 'text-stone-700 dark:text-white',
  secondary: 'text-stone-700 dark:text-white',
  danger: 'text-red-500',
};

const Text = ({
  variant = 'primary',
  fontWeight = 'normal',
  fontSize = 'base',
  italic,
  className,
  ...props
}: Props) => {
  const classes = clsx(
    `${textStyles[variant]} font-${fontWeight} text-${fontSize}`,
    italic && 'italic',
    !!className && className
  );

  return <RNText {...props} className={classes} />;
};

export default Text;
