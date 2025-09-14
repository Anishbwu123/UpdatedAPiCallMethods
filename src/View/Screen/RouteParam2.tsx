import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {BlankSpace} from '../Component/BlankSpace';
import {useResponsive} from '../../Hooks/useResponsive';

const RouteParam2 = () => {
  const {wp, hp} = useResponsive();
  const route = useRoute();
  const {name, email} = route.params;
  return (
    <View style={{alignItems: 'center',justifyContent:'center',flex:1}}>
      <BlankSpace height={hp(15)} />
      <Text>The value is :{name}</Text>
      <Text>The value is :{email}</Text>
    </View>
  );
};

export default RouteParam2;

const styles = StyleSheet.create({});
