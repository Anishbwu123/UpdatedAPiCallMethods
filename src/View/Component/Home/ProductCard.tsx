import { Dimensions, Image, Text, View } from 'react-native';
import { useColor } from '../../../Model/Color/useColor';
import { CustomImage } from '../CustomImage';
import { images } from '../../../Utils/ImagePath';
import { BlankSpace } from '../BlankSpace';
import { useResponsive } from '../../../Hooks/useResponsive';
import { FontsVariant } from '../../../Utils/fontsVariant';
import { textSize } from '../../../Utils/textSize';
import LinearGradient from 'react-native-linear-gradient';
import { CategoryItemType } from '../../../Types/CommonTypes';
import { useState } from 'react';

export const ProductCard = ({ item }: { item: CategoryItemType }) => {
  const { width } = Dimensions.get('window');
  const popularPoductWidth = width * 0.32;
  const Colors = useColor();
  const { hp, wp } = useResponsive();
  const [rating, setRating] = useState([1, 2, 3, 4, 5])

  return (
    <View
      style={{
        width: popularPoductWidth,
        alignItems: 'center',
        marginBottom: hp(0.8),
        marginRight: 15,
      }}>
      <View
        style={{
          backgroundColor: Colors.secondary_005,
          height: popularPoductWidth,
          width: popularPoductWidth,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: "center",
          position: 'relative'
        }}>
        <CustomImage
          containerStyle={{ alignSelf: 'center' }}
          source={item?.icon}
          resizeMode={'contain'}
          width={100}
          height={95}
        />
        <View style={{
          position: 'absolute',
          right: 3,
          top: 10,
          width: wp(15),
          height: hp(4),
          borderRadius: 100,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
          borderWidth: 2,
          borderColor: Colors.default_001
        }}>
          <Text style={{
            fontSize: textSize.small_2x,
            color: Colors.default_001,
            fontFamily: FontsVariant.PoppinsBold
          }}>Good</Text>
        </View>
      </View>
      <BlankSpace height={hp(1)} />
      <Text
        numberOfLines={2}
        style={{
          fontFamily: FontsVariant.PoppinsRegular,
          fontSize: textSize.small_2x,
          color: Colors.secondary_003,
          alignSelf: 'flex-start',
        }}>
        Lorem ipsum dolor sit ametwee then
      </Text>
      <BlankSpace height={hp(0.5)} />

      <View style={{
        flexDirection: "row",
        width:"100%",
        overflow:"hidden"
        // backgroundColor:'red'
        // gap: 3,
      }}>

        {rating.map((_,i) => (
          <Image source={require("../../../Assets/Images/star.png")} key = {i}resizeMode='contain' style={{
            width:15,
            height: 20,
            marginRight:1,
            // backgroundColor:"blue"
          }} />

        ))}

      </View>
      <Text
        numberOfLines={2}
        style={{
          // width: '80%',
          fontFamily: FontsVariant.PoppinsBold,
          fontSize: textSize.small_3x,
          color: Colors.secondary_003,
          alignSelf: 'flex-start',
        }}>
        $25.00
      </Text>
      <BlankSpace height={hp(0.8)} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flex: 1,
        }}>
        <View style={{ flex: 1 }}>
          <View style={{
            width: wp(20),
            height: hp(4),
            justifyContent: "center",
            alignItems: "center",
            // width:100,
            backgroundColor: "#D5F5FF",
            borderRadius: 100
          }}>

            {/* <Text>Hello</Text> */}
            <Image source={require("../../../Assets/Images/ebay.png")} resizeMode='contain' style={{
              width: "100%",
              height: 20,

            }} />
          </View>
        </View>


      </View>
    </View>
  );
};



// <LinearGradient
//       colors={[Colors.default_001, Colors.secondary_001]}
//       start={{x: 0, y: 0}}
//       end={{x: 1, y: 1}}
//       style={{
//         height: 37,
//         width: 37,
//         borderRadius: 37 / 2,
//         alignItems: 'center',
//         justifyContent: 'center',
//       }}>
//       <View
//         style={{
//           height: 35,
//           width: 35,
//           borderRadius: 35 / 2,
//           backgroundColor: 'white',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}>
//         <CustomImage
//           source={require('../../../Assets/Images/plus.png')}
//           resizeMode={'contain'}
//           width={20}
//           height={20}
//         />
//       </View>
//     </LinearGradient>