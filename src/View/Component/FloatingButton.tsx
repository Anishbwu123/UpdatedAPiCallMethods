import { View, Text, TouchableOpacity, Image, ViewStyle } from 'react-native'
import React from 'react'
import { textSize } from '../../Utils/textSize'
import { useColor } from '../../Model/Color/useColor'
import { useResponsive } from '../../Hooks/useResponsive'

interface StyleProps {
    style?: ViewStyle,
    text:string
    onPress?: () => void
}
const FloatingButton: React.FC<StyleProps> = (props) => {
    const Colors = useColor()
    const { wp, hp } = useResponsive()
    return (
        <TouchableOpacity
            onPress={props.onPress}
            activeOpacity={0.9}
            style={[{
                minWidth: wp(40),
                height: 60,
                backgroundColor: "#fff",
                elevation: 10,
                position: "absolute",
                bottom: 20,
                left: "30%",
                borderRadius: 400,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                gap: 10,
            }, props.style]}>
            <Image source={require("../../Assets/Images/plusgradient.png")} />
            <Text style={{ fontSize: textSize.small_5x, fontWeight: "bold", color: Colors.default_001 }}>{props.text}</Text>
        </TouchableOpacity>
    )
}

export default FloatingButton