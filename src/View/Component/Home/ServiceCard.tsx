import {Dimensions, ImageBackground, Text, View} from 'react-native';
import {images} from '../../../Utils/ImagePath';
import {BlankSpace} from '../BlankSpace';
import {FontsVariant} from '../../../Utils/fontsVariant';
import {textSize} from '../../../Utils/textSize';
import {useCallback} from 'react';
import {useColor} from '../../../Model/Color/useColor';
import {useResponsive} from '../../../Hooks/useResponsive';
import { CategoryItemType } from '../../../Types/CommonTypes';

export const ServiceCard = ({item}: {item: CategoryItemType}) => {
  const {width} = Dimensions.get('window');
  const Colors = useColor();
  const {hp} = useResponsive();
  const serviceImgWidth = width * 0.4;
  return (
    <View style={{width: serviceImgWidth, marginRight: 15}}>
      <ImageBackground
        source={item?.icon}
        resizeMode="cover"
        style={{
          height: 124,
          borderRadius: 20,
          overflow: 'hidden',
        }}
      />
      <BlankSpace height={hp(1)} />
      <Text
        style={{
          fontFamily: FontsVariant.PoppinsRegular,
          fontSize: textSize.small_3x,
          color: Colors.secondary_003,
          alignSelf: 'center',
        }}>
        {item?.name}
      </Text>
    </View>
  );
};
