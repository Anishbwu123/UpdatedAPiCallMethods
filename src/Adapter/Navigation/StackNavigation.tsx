import React, {JSX} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenParamList, Screens} from './screenTypes';
import Signin from '../../View/Screen/Signin';

const Stack = createNativeStackNavigator<ScreenParamList>();

export const StackNavigation = (): JSX.Element => {
  // const isAuth: boolean = useAppSelector(state => selectAuthentication(state));
  return (
    <Stack.Navigator
      initialRouteName={Screens.SignIn}
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
      <Stack.Screen name={Screens.SignIn} component={Signin} />
    </Stack.Navigator>
  );
};
