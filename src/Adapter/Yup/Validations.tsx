import { useTranslation } from 'react-i18next';
import { string, ref, number } from 'yup';


export const Validations = {


  name: string()
    .matches(
      /^[A-Za-z0-9 !"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]+$/,
      'Please enter valid name',
    )
    .required('Name is required')
    .min(3, 'Minimum 3 charecters required')
    .max(100, 'Name is under 100 charecters ')
    .trim(),

  phoneNumber: string()
    .required('Phone number is required')
    .matches(/^\d+$/, 'Phone number contains only number')
    .min(10, 'Phone number contains only 10 digits')
    .max(10, 'Phone number contains only 10 digits'),

  dob: string().required('Date of birth is required'),
};
