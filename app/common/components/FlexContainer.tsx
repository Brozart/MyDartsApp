import clsx from 'clsx';

import Container, { ContainerProps } from './Container';

type Props = ContainerProps & {
  flex?: '1' | 'auto' | 'initial' | 'none';
  grow?: boolean;
  direction?: 'row' | 'row-reverse' | 'col' | 'col-reverse';
  wrap?: 'wrap' | 'wrap-reverse' | 'nowrap';
  justifyContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  alignContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  alignItems?: 'start' | 'end' | 'center' | 'basline' | 'stretch';
  alignSelf?: 'auto' | 'start' | 'end' | 'center' | 'stretch' | 'baseline';
};

const FlexContainer = ({
  flex = '1',
  grow,
  direction,
  wrap,
  justifyContent,
  alignContent,
  alignItems,
  alignSelf,
  className,
  ...props
}: Props) => {
  const classes = clsx(
    `flex flex-${flex}`,
    grow && 'grow',
    direction && `flex-${direction}`,
    wrap && `flex-${wrap}`,
    justifyContent && `justify-${justifyContent}`,
    alignContent && `content-${alignContent}`,
    alignItems && `items-${alignItems}`,
    alignSelf && `self-${alignSelf}`,
    className && className
  );

  return <Container className={classes} {...props} />;
};

export default FlexContainer;
