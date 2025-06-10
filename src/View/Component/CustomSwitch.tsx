import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, Animated} from 'react-native';
import {useColor} from '../../Model/Color/useColor';
import {useResponsive} from '../../Hooks/useResponsive';

type CustomSwitch = {
  onToggeleMain?: () => void;
  enabled?:boolean
};

const CustomSwitch = ({onToggeleMain,enabled=false}: CustomSwitch) => {
  const [isEnabled, setIsEnabled] = useState(enabled);
  const toggleSwitch = () => setIsEnabled(previous => !previous);
  const Colors = useColor();
  const {wp, hp} = useResponsive();

  const styles = StyleSheet.create({
    switchContainer: {
      width: wp(15),
      height: wp(8),
      borderRadius: wp(50),
      backgroundColor: Colors.secondary_001,
      justifyContent: 'center',
      paddingHorizontal: isEnabled ? -wp(3) : wp(1),
    },
    thumb: {
      width: wp(5),
      height: wp(5),
      borderRadius: wp(50),
      backgroundColor: Colors.secondary_002,
    },
  });

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        toggleSwitch();
        if (onToggeleMain) onToggeleMain();
      }}
      style={[
        styles.switchContainer,
        {
          backgroundColor: isEnabled
            ? Colors.default_001
            : Colors.secondary_010,
        },
      ]}>
      <Animated.View
        style={[styles.thumb, {transform: [{translateX: isEnabled ? 34 : 0}]}]}
      />
    </TouchableOpacity>
  );
};

export default CustomSwitch;
