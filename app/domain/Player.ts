import * as Yup from 'yup';

export interface Player {
  name: string;
}

export const playerValidation: Yup.ObjectSchema<Player> = Yup.object().shape({
  name: Yup.string().required('This field is required'),
});
