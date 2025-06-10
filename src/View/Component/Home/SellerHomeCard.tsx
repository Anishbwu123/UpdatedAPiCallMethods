import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { BlankSpace } from '../BlankSpace';
import { useResponsive } from '../../../Hooks/useResponsive';
import { FontsVariant } from '../../../Utils/fontsVariant';
import { textSize } from '../../../Utils/textSize';
import { useColor } from '../../../Model/Color/useColor';
import AppButton from '../AppButton';

export const SellerHomeCard = ({
    itemWidth,
    spacer,
}: {
    itemWidth: number;
    spacer: number;
}) => {
    const { hp, wp } = useResponsive();
    const Colors = useColor();

    return (
        <View style={{ width: itemWidth, marginHorizontal: spacer,backgroundColor:"#f6f6f6" ,borderRadius:20,position:'relative' }}>
            <View style={{flexDirection:"row",padding:15}}>
                <View style={{ flexDirection: 'row',width:"100%",overflow:"hidden"}}>
                    <View style={{ width:"50%",justifyContent:"center"}}>

                        <Text
                            style={{
                                color: "#000",
                                fontFamily: FontsVariant.PoppinsBold,
                                fontSize: textSize.small_5x,
                            }}>
                            Sell your products
                        </Text>
                        <BlankSpace height={hp(0.5)} />


                        <AppButton borderWidth={1} backgroundColor='transparent' text='Shop now' color='#000'/>
                    </View>
                    <View style={{ width:"60%", alignItems: 'flex-end' }}>
                   
                     <Image 
                        source={require('../../../Assets/Images/seller.jpg')}
                        resizeMode='cover'
                        style={{
                            width:"100%",
                            height:160,
                            // position:"absolute"
                            // backgroundColor:"blue"
                        }}
                     />
                    </View>
                </View>

                {/* T&C in bottom-right corner */}
                
            </View>
        </View>
    );
};
