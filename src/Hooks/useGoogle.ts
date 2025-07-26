import { useEffect, useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithCredential } from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const useGoogle = () => {
  const [idToken, setIdToken] = useState<string | null>(null);
  const [err, setErr] = useState<any>(null);

  async function onGoogleButtonPress() {
    try {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

      // Optional: Revoke access for a clean login
      // await GoogleSignin.revokeAccess();
      // await GoogleSignin.signOut();


      // Use correct property for idToken
      const signInResult = await GoogleSignin.signIn();
      // signInResult can be SignInSuccessResponse or SignInCancelledResponse
      // Only SignInSuccessResponse has idToken
      // @ts-ignore
      const googleIdToken = signInResult.idToken || (signInResult.user && signInResult.user.idToken);

      if (!googleIdToken) {
        throw new Error('Google ID token not found');
      }

      // Create Google credential
      const googleCredential = GoogleAuthProvider.credential(googleIdToken);

      // Sign in to Firebase with the credential
      const result = await signInWithCredential(getAuth(), googleCredential);

      // Get the Firebase ID token (valid for backend)
      const firebaseIdToken = await result.user.getIdToken();
      setIdToken(firebaseIdToken);

      console.log('✅ Firebase sign-in successful:', result);
      return result;
    } catch (error: any) {
      console.log('❌ Google Sign-In Error:', error);
      setErr(error);
    }
  }

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '82257685724-9kpv9lcj9luu9r0or3u55o0nokdosa6q.apps.googleusercontent.com',
      // offlineAccess: true,
      // forceCodeForRefreshToken: true,
    });
  }, []);

  return { onGoogleButtonPress, idToken, err };
};

export default useGoogle;
