import { View, Text } from 'react-native'
import React from 'react'

interface ErrorProps {
    msg: string
}

const ErrorText: React.FC<ErrorProps> = (props) => {
    return (
        <View style={{ marginVertical: 2 }}>
            <Text style={{ color: 'red' }}>{props.msg}</Text>
        </View>
    )
}

export default ErrorText