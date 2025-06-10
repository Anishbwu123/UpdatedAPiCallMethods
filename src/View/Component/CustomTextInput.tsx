import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  TextInputProps,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {textSize} from '../../Utils/textSize';
import {FontsVariant} from '../../Utils/fontsVariant';
import {useColor} from '../../Model/Color/useColor';

interface CustomTextInputProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
}

export const CustomTextInput: React.FC<CustomTextInputProps> = ({
  value,
  onChangeText,
  placeholder,
  containerStyle,
  inputStyle,
  ...restProps
}) => {
  const Colors = useColor();
  const styles = makeStylesheet(Colors);

  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        style={[styles.input, inputStyle]}
        placeholder={placeholder}
        placeholderTextColor="rgba(170, 170, 170, 1)"
        value={value}
        onChangeText={onChangeText}
        {...restProps}
      />
    </View>
  );
};

const makeStylesheet = (Colors: any) =>
  StyleSheet.create({
    container: {
      width: '100%',
    },
    input: {
      height: 55,
      borderWidth: 1,
      borderColor: 'rgba(238, 238, 238, 1)',
      borderRadius: 30,
      textAlign: 'center',
      fontSize: textSize.small_3x,
      fontFamily: FontsVariant.PoppinsRegular,
      color: Colors.secondary_007
    },
  });
