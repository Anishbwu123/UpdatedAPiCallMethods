import { View, Text, ViewStyle, TouchableOpacity } from 'react-native'
import React from 'react'
import { useResponsive } from '../../Hooks/useResponsive'
import { useColor } from '../../Model/Color/useColor'

export type menuFields = {
    title: string,
    onPress: () => void,
    color?:string
}
export interface DotMenuProps {
    style?: ViewStyle,
    fields?: menuFields[]

}

const DynamicMenu: React.FC<DotMenuProps> = (props) => {
    const { wp, hp } = useResponsive()

    const Color = useColor()
    return (
        <View style={[{
            width: wp(50),
            height:"auto",
            // minHeight: hp(15),
            backgroundColor: "#fff",
            position: "absolute",
            right: 28,
            top: 10,
            borderRadius: 15,
            zIndex: 100,
            padding: 20,
            elevation: 5

        }, props.style]}>

            {props.fields?.map((item, index) => (
                <>
                    <TouchableOpacity onPress={item.onPress}>
                        <View style={{
                            // backgroundColor:"#fff",
                            padding: 8,
                            borderBottomWidth: (props.fields?.length && (index === props.fields?.length - 1 ? 0 : 1)),
                            borderBottomColor: "#DDDDDD"
                        }}>
                            <Text style={{ fontWeight: "bold",color:item.color }}>{item.title}</Text>
                        </View>
                    </TouchableOpacity>
                </>
            ))}





        </View>
    )

}

export default DynamicMenu