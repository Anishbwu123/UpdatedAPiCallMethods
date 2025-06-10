// -----------------------SCREENS-------------------------------
export enum Screens {
  //--------------Auth Screen --------------------
  SignIn = 'SignIn',
  Home = 'Home',
}

export type ScreenParamList = {
  [Screens.SignIn]: undefined;
  [Screens.Home]: undefined;
};
