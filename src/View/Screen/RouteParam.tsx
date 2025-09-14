/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {BlankSpace} from '../Component/BlankSpace';
import {useResponsive} from '../../Hooks/useResponsive';
import { Screens } from '../../Adapter/Navigation/screenTypes';

const RouteParam = ({navigation}:any) => {
  const [name, setname] = useState<string>('');
  const {hp, wp} = useResponsive();
  const [email, setemail] = useState<string>('');
  const renderInputFields = () => {
    return (
      <>
        <TextInput
          placeholder="Enter name"
          onChangeText={setname}
          value={name}
          style={{borderWidth: 1, margin: 10, padding: 10, borderRadius: 5}}
        />

        <TextInput
          placeholder="Enter email"
          onChangeText={setemail}
          value={email}
          style={{borderWidth: 1, margin: 10, padding: 10, borderRadius: 5}}
        />
      </>
    );
  };
  return (
    <View>
      <BlankSpace height={hp(20)} />
      {renderInputFields()}
      <TouchableOpacity
        style={{
          width: wp(90),
          height: hp(6),
          backgroundColor: 'blue',
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          borderRadius: 10,
        }}
        onPress={() =>
          navigation.navigate(Screens.RouteParam2, {name: name, email: email})
        }>
        <View>
          <Text style={{color:'white',fontSize:20}}>Move to</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RouteParam;

const styles = StyleSheet.create({});
