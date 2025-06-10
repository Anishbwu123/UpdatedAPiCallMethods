import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { BlankSpace } from '../BlankSpace'
import { FontsVariant } from '../../../Utils/fontsVariant'
import { useColor } from '../../../Model/Color/useColor'
import { textSize } from '../../../Utils/textSize'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Description from './Description'
import { images } from '../../../Utils/ImagePath'
import { useResponsive } from '../../../Hooks/useResponsive'
import Comment from '../Comment'
import BuyerInfoCard from './BuyerInfoCard'



const desc = {
    title: "Description",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    icon: images.down
}
const ProductInfo = () => {
    const Color = useColor()
    const { hp, wp } = useResponsive()
    let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    return (
        <View>


            <FlatList 
            data={data}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{flexGrow:1,paddingBottom:200 }}
            showsVerticalScrollIndicator={false}
            renderItem={() => <Comment />} 
             ListHeaderComponent={() => (<>


                <View
                    style={styles.itemContainer} >
                    <View style={styles.imageContainer}>
                        <Image source={require("../../../Assets/Images/headphone.png")} style={styles.productImage} />
                    </View>
                    <View style={styles.productInfo}>
                        <View style={{ flexDirection: "row", gap: 10, alignItems: "center",marginBottom:10 }}>
                       
                        <Text style={{
                            width:100,
                            backgroundColor:"#E3FFDD",
                            padding:5,
                            textAlign: "center",
                            borderRadius:5,
                            color:"#39FF14"
                        }}>Electronics</Text>

                        <Text style={{
                            width:100,
                            backgroundColor:"#fff",
                            padding:5,
                            textAlign: "center",
                            borderRadius:500,
                            color:"#00C4FF",
                            borderWidth:1,
                            borderColor:"#00C4FF"
                        }}>Good</Text>

     
                        </View>
                        <Text style={styles.productTitle}>{"Sony WH-CH520 Wireless Bluetooth Headphones"}</Text>

                        <Text style={styles.productPrice}>$500.00-$800.00</Text>
                        <View style={{
                            flexDirection: "row",
                            gap: 10,
                            alignItems: "center",
                        }}>
                            <View style={{
                                flexDirection: "row",
                                gap: 10,
                                alignItems: "center",
                            }}>
                                <Text>Brand</Text>
                                <View style={styles.pill}>
                                    <Text style={[styles.pillText, { color: Color.default_001 }]}>Sony</Text>
                                </View>
                            </View>

                            <Text style={{
                                fontSize: textSize.small_3x,
                                fontFamily: FontsVariant.PoppinsRegular
                            }}>Qty</Text>
                            <Text style={{
                                fontSize: textSize.small_3x,
                                fontFamily: FontsVariant.PoppinsSemiBold,
                                color: Color.default_001,
                            }}>30</Text>
                        </View>
                        <BlankSpace height={10} />
                        <View style={{ flexDirection: "row", alignItems: 'center', gap: "10" }} >
                            <Text>Needed By:</Text>
                            <View style={[styles.pill, { paddingHorizontal: 10, marginLeft: 5 }]}>
                                <Text style={[styles.pillText, { color: Color.default_001 }]}>20/06/2025</Text>
                            </View>
                        </View>
                    </View>

                </View>

                <Description content={desc.content} title={desc.title} icon={desc.icon} />

                <BlankSpace height={hp(2)} />
                <BuyerInfoCard/>
                <BlankSpace height={hp(3)} />
                <View style={{ width: "100%", height: 1, backgroundColor: "#ddd" }}></View>
                <Text style={{
                    marginVertical:20,
                    fontSize: textSize.medium_1x
                    }}>Comments (50)</Text>

            </>)} />

     
        </View>
    )
}

const styles = StyleSheet.create({
    dots: {
        // backgroundColor:"red",
        width: 20,
        // justifyContent:"center",
        alignItems: "center"
    },

    pill: {
        minWidth: "40%",
        alignItems: "center",
        backgroundColor: "#D5F5FF",
        borderRadius: 100,
        padding: 8,
    },
    pillText: { fontFamily: FontsVariant.PoppinsSemiBold, color: Colors.default_001 },
    itemContainer: {
        flexDirection: 'row',
        // backgroundColor: "red",
        borderRadius: 10,
        marginBottom: 15,
        padding: 10,
        shadowColor: Colors.secondary_007,

    },
    imageContainer: {

        width: 100,
        height: 100,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: "#F5F5F5",
        justifyContent: 'center',
        alignItems: 'center',
    },
    productImage: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
        mixBlendMode: "darken"
    },
    productInfo: {
        flex: 1,
        justifyContent: "center",
        marginLeft: 15,
        // justifyContent: 'space-between',
    },
    productTitle: {
        fontFamily: FontsVariant.PoppinsSemiBold,
        fontSize: textSize.small_3x,
        color: Colors.secondary_003,
        marginBottom: 5,
    },
    productPrice: {
        fontFamily: FontsVariant.PoppinsSemiBold,
        fontSize: textSize.small_5x,
        color: Colors.secondary_003,
        marginBottom: 10,
    },
    buyButton: {},
    buyButtonText: {},
    addButton: {},
})
export default ProductInfo