import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from 'react-native';
import {useResponsive} from '../../Hooks/useResponsive';
import {CustomImage} from './CustomImage';
import {images} from '../../Utils/ImagePath';
import {textSize} from '../../Utils/textSize';
import {FontsVariant} from '../../Utils/fontsVariant';
import {Colors} from 'react-native/Libraries/NewAppScreen';

type Props = {
  label: string;
  iconSource: ImageSourcePropType;
  iconColor?: string;
  onPress: () => void;
  isDelete?: boolean; 
};

const SettingsListItem: React.FC<Props> = ({
  label,
  iconSource,
  iconColor = '#39FF16',
  onPress,
  isDelete = false,
}) => {
  const {wp, hp} = useResponsive();

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          paddingVertical: hp(1.5),
          paddingHorizontal: wp(5),
        },
      ]}
      onPress={onPress}>
      <View
        style={[
          styles.iconWrapper,
          {
            backgroundColor: isDelete ? '#FF3B30' + '20' : iconColor + '20', 
            width: wp(10),
            height: wp(10),
            borderRadius: wp(50),
            marginRight: wp(4),
          },
        ]}>
        <Image
          source={iconSource}
          style={{
            width: wp(5),
            height: wp(5),
          }}
          resizeMode="contain"
        />
      </View>
      <Text
        style={[
          styles.label,
          {
            fontSize: textSize.small_4x,
            fontFamily: FontsVariant.PoppinsSemiBold,
            color: isDelete ? '#FF3B30' : Colors.secondary_007,
          },
        ]}>
        {label}
      </Text>
      <CustomImage
        source={images.leftarrow}
        resizeMode="contain"
        height={wp(5)}
        width={wp(5)}
        tintColor={'#444444'} 
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontWeight: '600',
    color: '#000',
    flex: 1,
  },
});

export default SettingsListItem;
