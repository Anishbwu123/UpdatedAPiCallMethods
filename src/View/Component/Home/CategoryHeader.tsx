import {Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import {FontsVariant} from '../../../Utils/fontsVariant';
import {textSize} from '../../../Utils/textSize';
import {useColor} from '../../../Model/Color/useColor';
import {JSX} from 'react';
import {BlankSpace} from '../BlankSpace';
import {useResponsive} from '../../../Hooks/useResponsive';

export const CategoryHeader = ({
  heading,
  component,
  containerStyle,
  onPress,
}: {
  heading?: string;
  component?: JSX.Element;
  containerStyle?: ViewStyle;
  onPress?: () => void;
}) => {
  const Colors = useColor();
  const {hp} = useResponsive();
  return (
    <>
      <View
        style={[
          {flexDirection: 'row', justifyContent: 'space-between'},
          containerStyle,
        ]}>
        <Text
          style={{
            fontFamily: FontsVariant.PoppinsBold,
            fontSize: textSize.small_5x,
            color: Colors.secondary_003,
          }}>
          {heading}
        </Text>
        <TouchableOpacity 
        activeOpacity={0.7}
        onPress={onPress}>
          <Text
            style={{
              fontFamily: FontsVariant.PoppinsRegular,
              fontSize: textSize.small_3x,
              color: Colors.secondary_001,
            }}>
            View all
          </Text>
        </TouchableOpacity>
      </View>
      <BlankSpace height={hp(1)} />
      {component}
    </>
  );
};
