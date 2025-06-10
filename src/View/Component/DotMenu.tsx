import { View, Text, TouchableOpacity, StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import { useColor } from '../../Model/Color/useColor'
import { useResponsive } from '../../Hooks/useResponsive'
import { useNavigation } from '@react-navigation/native'
import { Screens } from '../../Adapter/Navigation/screenTypes'



interface DotMenuProps {
    style?: ViewStyle,
    fields?: [menuFields]

}


const DotMenuItems = () => {
    const Color = useColor()
    const navigation = useNavigation()
    return <>
        <TouchableOpacity>
            <View style={{
                // backgroundColor:"#fff",
                padding: 8,
                borderBottomWidth: 1,
                borderBottomColor: "#DDDDDD"
            }}>
                <Text style={{ fontWeight: "bold", color: Color.default_001 }}>Edit</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={{
                // backgroundColor:"#fff",
                padding: 8,
                borderBottomWidth: 1,
                borderBottomColor: "#DDDDDD"
            }}>
                <Text style={{ fontWeight: "bold" }}>Mark As out of Stock</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate(Screens.PaymentScreen)}>
            <View style={{
                // backgroundColor:"#fff",
                padding: 8,
                borderBottomWidth: 1,
                borderBottomColor: "#DDDDDD"
            }}>
                <Text style={{ fontWeight: "bold" }}>Boost Product</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity>
            <View style={{
                // backgroundColor:"#fff",
                padding: 8,

            }}>
                <Text style={{ fontWeight: "bold", color: "red" }}>Delete</Text>
            </View>
        </TouchableOpacity>

    </>
}

const DynamicMenu = (props: [menuFields]) => {
    return (
        <>
            {props.map((item) => (
                <TouchableOpacity onPress={item.onPress}>
                    <View style={{
                        // backgroundColor:"#fff",
                        padding: 8,
                        borderBottomWidth: 1,
                        borderBottomColor: "#DDDDDD"
                    }}>
                        <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </>
    )
}

const DotMenu: React.FC<DotMenuProps> = (props) => {
    // const [fields,setFeilds]    
    const Color = useColor()
    const { wp, hp } = useResponsive()
    return (
        <View style={[{
            width: wp(50),
            minHeight: hp(15),
            backgroundColor: "#fff",
            position: "absolute",
            right: 28,
            top: 10,
            borderRadius: 15,
            zIndex: 100,
            padding: 20,
            elevation: 5

        }, props.style]}>

            <DotMenuItems />





        </View>
    )
}

export default DotMenu