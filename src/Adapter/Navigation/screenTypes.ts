// -----------------------SCREENS-------------------------------
export enum Screens {
  //--------------Auth Screen --------------------
  SignIn = 'SignIn',
  Home = 'Home',
  FingerPrintAuthScreen = 'FingerPrintAuthScreen',
  RouteParam = 'RouteParam',
  RouteParam2 = 'RouteParam2',
}

export type ScreenParamList = {
  [Screens.SignIn]: undefined;
  [Screens.Home]: undefined;
  [Screens.FingerPrintAuthScreen]: undefined;
  [Screens.RouteParam]: undefined;
  [Screens.RouteParam2]: undefined;
};
