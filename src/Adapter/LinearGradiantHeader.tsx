import {JSX} from 'react';
import {StatusBar, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {BlankSpace} from '../View/Component/BlankSpace';
import { useResponsive } from '../Hooks/useResponsive';
import { useColor } from '../Model/Color/useColor';
const LinearGradiantHeader = ({children, gradiantStyle}: {children: JSX.Element,gradiantStyle?:ViewStyle}) => {
  const insets = useSafeAreaInsets();
  const {hp}= useResponsive();
  const Colors = useColor();
  return (
    <>
      <StatusBar backgroundColor={'transparent'} />
      <LinearGradient
        colors={[Colors.default_001, Colors.secondary_001]}
        style={[{height: hp(16), width: '100%', 
        paddingTop: insets.top, borderBottomLeftRadius:30,borderBottomRightRadius:30,},gradiantStyle]}>
        <BlankSpace height={20} />
        {children}
      </LinearGradient>
    </>
  );
};

export default LinearGradiantHeader;
