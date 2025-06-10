import {object} from 'yup';
import {Validations} from './Validations';

export const Schemas = {
  createAccountSchema: object().shape({
    name: Validations.name,
    phoneNumber: Validations.phoneNumber,
    dob: Validations.dob,
  }),
  loginSchema: object().shape({
    phone: Validations.phoneNumber,
  }),
};

export const initialFormValues = {
  createAccountInitialValues: {
    name: '',
    phoneNumber: '',
    dob: '',
  },
  loginInitialValues: {
    phone: '',
  },
};
