// -----------------------SCREENS-------------------------------
export enum Screens {
  //--------------Auth Screen --------------------
  SignIn = 'SignIn',
  Home = 'Home',
  FingerPrintAuthScreen = 'FingerPrintAuthScreen',
}

export type ScreenParamList = {
  [Screens.SignIn]: undefined;
  [Screens.Home]: undefined;
  [Screens.FingerPrintAuthScreen]: undefined;
};
