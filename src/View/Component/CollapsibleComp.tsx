import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import {useResponsive} from '../../Hooks/useResponsive';
import {useColor} from '../../Model/Color/useColor';
import {CustomImage} from './CustomImage';
import {images} from '../../Utils/ImagePath';

type Props = {
  header: string;
  subheader: string;
};

const CollapsibleComp = ({header, subheader}: Props) => {
  const {wp, hp} = useResponsive();
  const Colors = useColor();
  const [expanded, setExpanded] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  const toggleExpand = () => {
    const toValue = expanded ? 0 : 1;
    Animated.timing(animation, {
      toValue,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start(() => {
      if (!expanded) setExpanded(true); // expand on animation end
      else setExpanded(false); // collapse immediately
    });
  };

  const scaleY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const opacity = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const rotateIcon = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const styles = StyleSheet.create({
    container: {
      marginHorizontal: wp(4),
      marginTop: hp(2),
      backgroundColor: '#FFFFFF',
      borderRadius: wp(10),
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: '#EEEEEE',
    },
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: wp(4),
      paddingVertical: hp(2),
    },
    headerText: {
      fontSize: wp(4),
      fontWeight: '600',
      color: '#000000',
      flex: 1,
    },
    subHeaderContainer: {
      paddingHorizontal: wp(4),
      backgroundColor: '#FAFAFA',
    },
    subHeaderText: {
      fontSize: wp(3.5),
      color: '#444444',
      paddingVertical: hp(1),
    },
    animatedContent: {
      transform: [{scaleY}],
      opacity,
    },
    iconWrapper: {
      marginLeft: wp(2),
    },
    icon: {
      transform: [{rotate: rotateIcon}],
    },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleExpand} activeOpacity={0.7}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>{header}</Text>
          <Animated.View style={[styles.iconWrapper, styles.icon]}>
            <CustomImage
              source={images.DownArrow}
              height={wp(4)}
              width={wp(4)}
              resizeMode="contain"
            />
          </Animated.View>
        </View>
      </TouchableOpacity>

      {expanded && (
        <Animated.View
          style={[styles.subHeaderContainer, styles.animatedContent]}>
          <Text style={styles.subHeaderText}>{subheader}</Text>
        </Animated.View>
      )}
    </View>
  );
};

export default CollapsibleComp;
