import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {BlankSpace} from '../BlankSpace';
import {useResponsive} from '../../../Hooks/useResponsive';
import {FontsVariant} from '../../../Utils/fontsVariant';
import {textSize} from '../../../Utils/textSize';
import {useColor} from '../../../Model/Color/useColor';

export const HomeCarouselCard = ({
  itemWidth,
  spacer,
}: {
  itemWidth: number;
  spacer: number;
}) => {
  const {hp, wp} = useResponsive();
  const Colors = useColor();
  
  return (
    <View style={{width: itemWidth, marginHorizontal: spacer}}>
      <ImageBackground
        source={require('../../../Assets/Images/carousalImage.png')}
        resizeMode="cover"
        style={{
          height: 160,
          borderRadius: 20,
          overflow: 'hidden',
          padding: 15,
        }}>
        <View style={{flexDirection: 'row', flex: 1}}>
          <View style={{flex: 1.5}}>
            <Text
              style={{
                color: Colors.secondary_002,
                fontFamily: FontsVariant.PoppinsMedium,
                fontSize: textSize.small_5x,
              }}>
              Get special discount on Electronics
            </Text>
            <BlankSpace height={hp(0.5)} />
            <TouchableOpacity
              onPress={() => {}}
              style={{
                backgroundColor: 'transparent',
                borderWidth: 1,
                borderColor: Colors.secondary_002,
                height: 35,
                borderRadius: 35 / 2,
                width: '80%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: Colors.secondary_002,
                  fontFamily: FontsVariant.PoppinsMedium,
                  fontSize: textSize.small_2x,
                }}>
                Shop Now!
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 2, alignItems: 'flex-end'}}>
            <Text
              style={{
                color: Colors.secondary_002,
                fontFamily: FontsVariant.PoppinsRegular,
                fontSize: textSize.small_2x,
                width: '55%',
              }}>
              Get instant 10% discount.
            </Text>
          </View>
        </View>

        {/* T&C in bottom-right corner */}
        <Text
          style={{
            position: 'absolute',
            bottom: 15,
            right: 20,
            color: Colors.secondary_002,
            fontFamily: FontsVariant.PoppinsRegular,
            fontSize: textSize.extraSmall_4x,
          }}>
          *T&C applied.
        </Text>
      </ImageBackground>
    </View>
  );
};
