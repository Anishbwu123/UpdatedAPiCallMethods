import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native';
import useGoogle from '../../Hooks/useGoogle';
import {useNotifcation} from '../../Notification/useNotification';

const Signin = () => {
  useNotifcation();
  const [userInfo, setUserInfo] = useState<any>(null);
  const { onGoogleButtonPress, err } = useGoogle();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  

  // GoogleSignin configuration is handled in useGoogle hook

  const handleGoogleSignin = async () => {
    if (isLoading) return;
    setIsLoading(true);
    const result = await onGoogleButtonPress();
    setIsLoading(false);
    if (result && result.user) {
      setUserInfo({
        email: result.user.email,
        name: result.user.displayName,
        photo: result.user.photoURL,
      });
      Alert.alert('Success', 'You have successfully signed in with Google');
    } else if (err) {
      Alert.alert('Error', err.message || 'Failed to sign in with Google');
    }
  };

  const handleSignOut = async () => {
    setUserInfo(null);
    Alert.alert('Success', 'You have successfully signed out');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Google Authentication</Text>
      
      {userInfo ? (
        <View style={styles.userContainer}>
          {userInfo.photo && (
            <Image source={{uri: userInfo.photo}} style={styles.userImage} />
          )}
          <Text style={styles.userText}>Welcome, {userInfo.name}</Text>
          <Text style={styles.userText}>{userInfo.email}</Text>
          <TouchableOpacity
            style={styles.signOutButton}
            onPress={handleSignOut}>
            <Text style={styles.signOutButtonText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          style={[styles.googleButton, isLoading && styles.disabledButton]}
          onPress={handleGoogleSignin}
          disabled={isLoading}>
          {isLoading ? (
            <ActivityIndicator color="#000" />
          ) : (
            <>
              <Image
                source={{
                  uri: 'https://developers.google.com/identity/images/g-logo.png',
                }}
                style={styles.googleLogo}
              />
              <Text style={styles.googleButtonText}>Sign in with Google</Text>
            </>
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    alignSelf: 'center',
    color: '#333',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 2,
  },
  disabledButton: {
    opacity: 0.7,
  },
  googleLogo: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  googleButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  userContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  userText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
  signOutButton: {
    marginTop: 20,
    backgroundColor: '#f44336',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  signOutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});