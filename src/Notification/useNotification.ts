import {useEffect} from 'react';
import {PermissionsAndroid} from 'react-native';
import messaging from '@react-native-firebase/messaging';

const requestUserPemission = async () => {
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
  );
  if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    console.log('granted-------');
  } else {
    console.log('denied--------');
  }
};

const getToken = async () => {
  try {
    const token = await messaging().getToken();
    console.log('FCM Token:', token);
    // 👉 You can now send this token to your backend to save it
  } catch (error) {
    console.error('Failed to get FCM token:', error);
  }
};

export const useNotifcation = () => {
  useEffect(() => {
    requestUserPemission();
    getToken();
  }, []);
};
