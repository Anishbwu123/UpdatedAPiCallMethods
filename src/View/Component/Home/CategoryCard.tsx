import {Dimensions, Text, TextStyle, View, ViewStyle} from 'react-native';
import {CustomImage} from '../CustomImage';
import {BlankSpace} from '../BlankSpace';
import {FontsVariant} from '../../../Utils/fontsVariant';
import {textSize} from '../../../Utils/textSize';
import {useColor} from '../../../Model/Color/useColor';
import {useResponsive} from '../../../Hooks/useResponsive';
import {images} from '../../../Utils/ImagePath';
import {CategoryItemType} from '../../../Types/CommonTypes';
import { DataItems } from '../../../Adapter/Redux/slices/categorySlice';

export const CategoryCard = ({
  item,
  numColumns,
  cardMainViewStyle,
  titleStyle,
}: {
  item: DataItems;
  numColumns: number;
  cardMainViewStyle?: ViewStyle;
  titleStyle?: TextStyle;
}) => {
  const Colors = useColor();
  const {hp, wp} = useResponsive();
  const {width} = Dimensions.get('window');
  const categoryItemWidth = (width - wp(14)) / numColumns;
  return (
    <View
      style={{
        width: categoryItemWidth,
        alignItems: 'center',
        marginBottom: hp(0.8),
      }}>
      <View
        style={[
          {
            backgroundColor: Colors.secondary_005,
            height: categoryItemWidth - 10,
            width: categoryItemWidth - 10,
            borderRadius: categoryItemWidth - 10 / 2,
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          },
          cardMainViewStyle,
        ]}>
        <CustomImage
          // containerStyle={{alignSelf: 'center'}}
          source={item?.image ? item?.image :images.laptop }
          resizeMode={'contain'}
          width={categoryItemWidth - 30}
          height={categoryItemWidth - 30}
        />
      </View>
      <BlankSpace height={hp(1)} />
      <Text
        style={[
          {
            fontFamily: FontsVariant.PoppinsRegular,
            fontSize: textSize.small_2x,
            color: Colors.secondary_003,
          },
          titleStyle,
        ]}>
        {item?.name}
      </Text>
    </View>
  );
};
