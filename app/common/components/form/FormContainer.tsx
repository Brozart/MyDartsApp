import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import { DeepPartial, FormProvider, useForm } from 'react-hook-form';
import { View } from 'react-native';
import { ObjectSchema } from 'yup';

import Button from '../Button';
import FlexContainer, { FlexContainerProps } from '../FlexContainer';

type Props<T extends object> = Omit<
  FlexContainerProps,
  | 'flex'
  | 'grow'
  | 'direction'
  | 'wrap'
  | 'justifyContent'
  | 'alignContent'
  | 'alignItems'
  | 'alignSelf'
> & {
  defaultValues: DeepPartial<T>;
  schema?: ObjectSchema<T>;
  submitText?: string;
  cancelText?: string;
  onSubmit: (data: T) => void;
  onCancel?: () => void;
};

const FormContainer = <T extends object>({
  defaultValues,
  schema,
  submitText = 'Save',
  cancelText = 'Cancel',
  children,
  onSubmit,
  onCancel,
  ...viewProps
}: Props<T>) => {
  const methods = useForm<T>({
    defaultValues,
    resolver: schema ? yupResolver(schema as ObjectSchema<any>) : undefined,
  });
  const navigation = useNavigation();

  const { handleSubmit: hookFormSubmit } = methods;

  /** HANDLER FUNCTIONS */
  const handleSubmit = () => {
    hookFormSubmit(onSubmit, (errors) => alert(errors));
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    } else {
      navigation.goBack();
    }
  };

  /** RENDER FUNCTIONS */
  return (
    <FormProvider {...methods}>
      <FlexContainer {...viewProps} grow alignContent="center" className="px-5 py-5">
        <View className="grow">{children}</View>
        <View className="flex-1 flex-row justify-center items-center gap-5">
          <Button
            title={cancelText}
            variant="secondary"
            className="basis-1/4 grow"
            onPress={handleCancel}
          />
          <Button title={submitText} className="basis-1/4 grow" onPress={handleSubmit} />
        </View>
      </FlexContainer>
    </FormProvider>
  );
};

export default FormContainer;
