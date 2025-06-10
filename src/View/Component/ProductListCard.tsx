import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { BlankSpace } from './BlankSpace'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { FontsVariant } from '../../Utils/fontsVariant';
import { textSize } from '../../Utils/textSize';
import { useResponsive } from '../../Hooks/useResponsive';
import { useColor } from '../../Model/Color/useColor';
import DotMenu from './DotMenu';
import DynamicMenu, { DotMenuProps } from './DynamicMenu';

export interface SearchResult {
    id: string;
    title: string;
    price: string;
    image: any;
    pill?: string,
    qty?: string,
    menuContent?: DotMenuProps,
    onPress?: () => void
}

const ProductListCard = ({ item }: { item: SearchResult }) => {

    const { wp, hp } = useResponsive()
    const Color = useColor()

    const [dotAction, setDotAction] = useState(false)
    return (
        <View style={{ position: "relative" }}>

            {dotAction && (item.menuContent ? <DynamicMenu fields={item.menuContent?.fields} style={item.menuContent?.style} /> : <DotMenu />)}
            <TouchableOpacity
                style={styles.itemContainer}
                onPress={item.onPress}>
                <View style={styles.imageContainer}>
                    <Image source={item.image} style={styles.productImage} />
                </View>
                <View style={styles.productInfo}>
                    <Text style={styles.productTitle}>{item.title}</Text>
                    <View style={{
                        width: "80%",
                        minHeight: 20,
                        padding: 5,
                        backgroundColor: "#D5F5FF",
                        borderRadius: 100,
                        justifyContent: "center",
                        alignItems: "center",
                        marginVertical: 5
                    }}>
                        <Text style={{ fontFamily: FontsVariant.PoppinsSemiBold, color: Color.default_001, fontSize: textSize.small_2x }}>Needed By: 20/06/2025</Text>
                    </View>
                    <Text style={styles.productPrice}>${item.price}</Text>
                    <TouchableOpacity style={styles.buyButton}>
                        {item.qty ? <Text style={styles.buyButtonText}>Qty: {item.qty}</Text> : <Text style={styles.buyButtonText}>Item:15</Text>}
                        <BlankSpace width={20} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => setDotAction(prev => !prev)} style={styles.dots}>

                    <Image source={require("../../Assets/Images/icons/dots.png")} resizeMode='contain' style={{
                        height: 20
                    }} />
                </TouchableOpacity>
            </TouchableOpacity>

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
        fontFamily: FontsVariant.PoppinsRegular,
        fontSize: textSize.small_5x,
        color: Colors.secondary_003,
        marginBottom: 5,
    },
    productPrice: {
        fontFamily: FontsVariant.PoppinsSemiBold,
        fontSize: textSize.small_5xl,
        color: Colors.secondary_003,
        marginBottom: 10,
    },
    buyButton: {},
    buyButtonText: {},
    addButton: {},
})
export default ProductListCard