import { View, Text, TouchableOpacity, ViewStyle, ActivityIndicator } from 'react-native'
import React from 'react'
import { FontsVariant } from '../../Utils/fontsVariant'
import { textSize } from '../../Utils/textSize'


interface ButtonProps {
    backgroundColor: string,
    borderWidth: number,
    color: string,
    text: string,
    onPress?: () => void,
    style?: ViewStyle,
    loading?: boolean
    // textSize: textSize
}

const AppButton: React.FC<ButtonProps> = (props) => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={[{
                backgroundColor: props.backgroundColor,
                borderWidth: 1,
                borderColor: props.color,
                height: 35,
                borderRadius: 1000,
                width: '80%',
                alignItems: 'center',
                justifyContent: 'center',
            }, props.style]}>

            {props.loading ? <ActivityIndicator animating={true} color={"#fff"} /> : <Text
                style={{
                    color: props.color,
                    fontFamily: FontsVariant.PoppinsBold,
                    fontSize: textSize.small_3x,
                }}>
                {props.text}
            </Text>}
        </TouchableOpacity>
    )
}

export default AppButton