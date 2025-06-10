import React, { useRef, useState } from 'react';
import {
  Animated,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ViewStyle,
  LayoutChangeEvent,
} from 'react-native';
import { useColor } from '../../Model/Color/useColor';
import { FontsVariant } from '../../Utils/fontsVariant';
import { textSize } from '../../Utils/textSize';
import { useResponsive } from '../../Hooks/useResponsive';

type TabSwitcherProps = {
  tabNames: [string, string];
  components: [React.ReactNode, React.ReactNode];
  containerStyle?: ViewStyle;
};

export const CustomTabSwitcher: React.FC<TabSwitcherProps> = ({
  tabNames,
  components,
  containerStyle,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [tabWidth, setTabWidth] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const slideAnim = useRef(new Animated.Value(0)).current;

  const Colors = useColor();
  const { wp } = useResponsive();
  const styles = makeStylesheet(Colors, wp);

  const onTabLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    setTabWidth(width / tabNames.length);
  };

  const handleTabChange = (index: number) => {
    if (index === activeIndex) return;

    // Fade out
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 150,
      useNativeDriver: true,
    }).start(() => {
      setActiveIndex(index);

      // Slide indicator
      Animated.spring(slideAnim, {
        toValue: index * tabWidth,
        useNativeDriver: false,
      }).start();

      // Fade in
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }).start();
    });
  };

  return (
    <View>
      <View
        style={[styles.tabContainer, containerStyle]}
        onLayout={onTabLayout}
      >
        {/* Sliding background indicator */}
        <Animated.View
          style={[
            styles.slidingBg,
            {
              width: tabWidth,
              transform: [{ translateX: slideAnim }],
              backgroundColor: Colors.default_001,
            },
          ]}
        />
        {tabNames.map((tab, index) => (
          <TouchableOpacity
            key={tab}
            style={styles.tab}
            onPress={() => handleTabChange(index)}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.tabText,
                activeIndex === index && { color: Colors.secondary_002 },
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

       <View>
       {components[activeIndex]}
      </View>
    </View>
  );
};

const makeStylesheet = (Colors: any, wp: any) =>
  StyleSheet.create({
    tabContainer: {
      flexDirection: 'row',
      position: 'relative',
      padding: 4,
      borderRadius: 30,
      marginHorizontal: wp(7),
      marginBottom: 10,
    },
    tab: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 10,
      zIndex: 1,
    },
    slidingBg: {
      position: 'absolute',
      height: '100%',
      borderRadius: 25,
      zIndex: 0,
    },
    tabText: {
      fontFamily: FontsVariant.PoppinsMedium,
      fontSize: textSize.small_4x,
      color: Colors.secondary_009,
    },
  });
