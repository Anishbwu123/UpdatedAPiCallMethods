import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Alert, Platform } from 'react-native';
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics';
import { images } from '../../Utils/ImagePath';

const rnBiometrics = new ReactNativeBiometrics();

const FingerPrintAuthScreen = () => {
  const [biometricError, setBiometricError] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  const handleBiometric = async () => {
    setBiometricError('');
    try {
      const { available, biometryType } = await rnBiometrics.isSensorAvailable();

      if (!available) {
        setBiometricError('Biometric sensor not available.');
        return;
      }

      // Show which type is detected
      if (biometryType === BiometryTypes.Biometrics) {
        console.log('Fingerprint sensor available');
      } else if (biometryType === BiometryTypes.FaceID) {
        console.log('FaceID available');
      } else {
        console.log('Other biometric type available');
      }

      // Trigger system biometric prompt (with PIN/Pattern fallback on Android)
      const result = await rnBiometrics.simplePrompt({
        promptMessage: 'Authenticate with Fingerprint',
        cancelButtonText: 'Cancel',
        allowDeviceCredentials: Platform.OS === 'android',
      });

      if (result.success) {
        Alert.alert('✅ Authenticated!', 'Biometric authentication successful.');
        setAuthenticated(true);
      } else {
        setBiometricError('Authentication cancelled.');
      }
    } catch (e: any) {
      console.log('Biometric error:', e);
      setBiometricError('Biometric authentication failed. Try again.');
    }
  };

  if (authenticated) {
    return (
      <View style={styles.successContainer}>
        <Text style={styles.successText}>Access Granted!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={images.Cart} style={styles.icon} />
      <Text style={styles.title}>Sign In with Fingerprint</Text>

      {biometricError ? <Text style={styles.error}>{biometricError}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleBiometric}>
        <Text style={styles.buttonText}>Scan Fingerprint</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' },
  title: { fontSize: 20, fontWeight: 'bold', marginVertical: 16 },
  icon: { width: 80, height: 80, marginBottom: 24 },
  button: { backgroundColor: '#2089dc', borderRadius: 8, padding: 16, marginTop: 20 },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  error: { color: 'red', marginTop: 12 },
  successContainer: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  successText: { fontSize: 28, color: 'green', fontWeight: 'bold' },
});

export default FingerPrintAuthScreen;
