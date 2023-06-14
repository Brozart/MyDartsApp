import { ReactNode } from 'react';
import {
  useController,
  useFormContext,
  ControllerRenderProps,
  ControllerFieldState,
} from 'react-hook-form';
import { View } from 'react-native';

import Text from '../Text';

type Props = {
  label?: string;
  name: string;
  children: (field: ControllerRenderProps, fieldState: ControllerFieldState) => ReactNode;
};

const FormControl = ({ label, name, children }: Props) => {
  const { control } = useFormContext();
  const { field, fieldState } = useController({ control, name });
  const { error, isDirty } = fieldState;

  /** RENDER FUNCTIONS */
  return (
    <View>
      <Text>{label}</Text>
      {children(field, fieldState)}
      {isDirty && error?.message && <Text variant="danger">{error.message}</Text>}
    </View>
  );
};

export default FormControl;
