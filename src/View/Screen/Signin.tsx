import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import {useFormik} from 'formik';
import {useDispatch} from 'react-redux';
import {initialFormValues, Schemas} from '../../Adapter/Yup/Schemas';
import { useMutation } from '@tanstack/react-query';
import { ApiQueryKeys } from '../../Adapter/Tanstack/ApiQueryKeys';
import { authAction } from '../../Adapter/Redux/slices/authSlice';
import { AsyncStorageController, PersistanceStorageKey } from '../../Adapter/AsyncStorage/AsyncStorageController';
import { Screens } from '../../Adapter/Navigation/screenTypes';

const Signin = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [email, setEmail] = useState<boolean>(false);
  const [password, setPassword] = useState<boolean>(false);

  const {
    values,
    handleSubmit,
    handleBlur,
    errors,
    touched,
    handleChange,
  } = useFormik({
    initialValues: initialFormValues.signinInitialFormValues,
    validationSchema: Schemas.signInSchema,
    onSubmit: (values: SigninUserInformationTypes) => {
      Keyboard.dismiss();
      console.log('asycn problem', values);
      console.log('values', values);
      mutate({
        email: values.email,
        password: values.password,
      });
    },
  });

   const {mutate} = useMutation({
    mutationKey: [ApiQueryKeys.login],
    mutationFn: async (body: SigninUserInformationTypes): Promise<any> => {
      return await apiServices.postCall(ApiQueryKeys.login, body);
    },
    onSuccess: async (data: SigninUserResponseType) => {
      // oncSuccess:async(data:any)=>{}
      console.log(data?.message);
      // const {refresh_token, access_token} = data.data;

      // if (rememberMe) {
      //   setTokenLocalStorage({
      //     refresh_token: refresh_token,
      //     access_token: access_token,
      //   });
      // }

      //Set details to reducer
      dispatch(authAction.setToken(data.data.data.token))
      console.log("Set token action ", authAction.setToken(data.data.data.token))
      dispatch(authAction.setRefreshToken(data.data.data.refreshToken))
      dispatch(authAction.setData(data.data.data))

      // setToAsyncStorage("loginInfo", data.data.data)
      AsyncStorageController.SET_DATA(PersistanceStorageKey.LOGIN_INFO, data.data.data).then(() => console.log("data saved properly to AStorage"))
      AsyncStorageController.SET_DATA(PersistanceStorageKey.TOKEN, data.data.data.token).then(() => console.log("Token saved properly to AStorage"))
      AsyncStorageController.SET_DATA(PersistanceStorageKey.REFRESH_TOKEN, data.data.data.refreshToken).then(() => console.log("Refresh token saved properly to AStorage"))
      navigation.navigate(Screens.Home);
    },
    onError: (error: errorTypes) => {
      ErrorMethods.errorHandler(error);
    },
  });


  // const handleSignin = () => {
  //   if (!email || !password) {
  //     Alert.alert('Error', 'Please fill in all fields');
  //     return;
  //   }
  //   // Add your login logic here
  //   Alert.alert('Success', `Logged in with\nEmail: ${email}`);
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sign In</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        onBlur={handleBlur('email')}
        keyboardType="email-address"
        autoCapitalize="none"
        value={values.email ?? ''}
        onChangeText={handleChange('email')}
      />
      {touched.email && errors.email && (
        <Text style={{color: 'red', fontSize: 12}}>{errors.email}</Text>
      )}

      <TextInput
        placeholder="Password"
        style={styles.input}
        onBlur={handleBlur('password')}
        keyboardType="default"
        autoCapitalize="none"
        value={values.password ?? ''}
        onChangeText={handleChange('password')}
      />
      {touched.password && errors.password && (
        <Text style={{color: 'red', fontSize: 12}}>{errors.password}</Text>
      )}

      <TouchableOpacity style={styles.button} onPress={()=>handleSubmit()}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 15,
    borderRadius: 8,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});
