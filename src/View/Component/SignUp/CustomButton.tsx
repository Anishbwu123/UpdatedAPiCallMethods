import { ActivityIndicator, StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native";
import { FontsVariant } from "../../../Utils/fontsVariant";
import { textSize } from "../../../Utils/textSize";
import { ColorObject } from "../../../Model/Color/ColorName";
import { useColor } from "../../../Model/Color/useColor";
import React from 'react';

// Define the props interface
interface CustomButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
  loading?: boolean
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  disabled = false,
  buttonStyle,
  textStyle,
  leftComponent,
  rightComponent,
  loading
}) => {
  const Colors = useColor();
  const styles = makeStylesheet(Colors);

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.signInButton,
        buttonStyle,
        disabled && { opacity: 0.5 },
      ]}
    >
      <View style={styles.innerWrapper}>
        {leftComponent && <View style={styles.sideComponent}>{leftComponent}</View>}
        {loading ? <ActivityIndicator animating={true} color={"#fff"} /> : <Text style={[styles.signInButtonText, textStyle]}>{title}</Text>}
        {rightComponent && <View style={styles.sideComponent}>{rightComponent}</View>}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;


const makeStylesheet = (Colors: ColorObject) =>
  StyleSheet.create({
    signInButton: {
      height: 55,
      borderRadius: 30,
      width: '100%',
      backgroundColor: Colors.default_001,
      alignItems: 'center',
      justifyContent: 'center',
    },
    innerWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    sideComponent: {
      marginHorizontal: 8,
    },
    signInButtonText: {
      fontFamily: FontsVariant.PoppinsRegular,
      fontSize: textSize.small_4x,
      color: Colors.secondary_002,
    },
  });

