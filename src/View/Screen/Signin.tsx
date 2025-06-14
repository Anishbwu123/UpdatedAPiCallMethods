import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNotifcation} from '../../Notification/useNotification';

const Signin = () => {
  useNotifcation();

  return (
    <View>
      <Text>Signin</Text>
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({});
