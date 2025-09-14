import React, {JSX} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenParamList, Screens} from './screenTypes';
import Signin from '../../View/Screen/Signin';
import FingerPrintAuthScreen from '../../View/Screen/FingerPrintAuthScreen';
import RouteParam from '../../View/Screen/RouteParam';
import RouteParam2 from '../../View/Screen/RouteParam2';

const Stack = createNativeStackNavigator<ScreenParamList>();

export const StackNavigation = (): JSX.Element => {
  // const isAuth: boolean = useAppSelector(state => selectAuthentication(state));
  return (
    <Stack.Navigator
      initialRouteName={Screens.RouteParam}
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
      <Stack.Screen name={Screens.SignIn} component={Signin} />
      <Stack.Screen name={Screens.FingerPrintAuthScreen} component={FingerPrintAuthScreen} />
       <Stack.Screen name={Screens.RouteParam} component={RouteParam} />
      <Stack.Screen name={Screens.RouteParam2} component={RouteParam2} />
    </Stack.Navigator>
  );
};
