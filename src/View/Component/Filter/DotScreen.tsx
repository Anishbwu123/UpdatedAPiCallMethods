import { Text, TouchableOpacity, View, ViewStyle } from "react-native"
import { useResponsive } from "../../../Hooks/useResponsive"
import { useColor } from "../../../Model/Color/useColor"
interface styleProps {
    style?: ViewStyle,
    onPress?: () => void
}
const DotScreen: React.FC<styleProps> = (props) => {
    const Color = useColor()
    const { wp, hp } = useResponsive()
    return (
        <View style={[{
            width: wp(50),
            minHeight: hp(15),
            backgroundColor: "#fff",
            position: "absolute",
            right: 50,
            top: 40,
            borderRadius: 15,
            zIndex: 100,
            padding: 20,
            elevation: 5

        }, props.style]}>

            <TouchableOpacity onPress={props.onPress}>
                <View style={{
                    // backgroundColor:"#fff",
                    padding: 8,
                    borderBottomWidth: 1,
                    borderBottomColor: "#DDDDDD"
                }}>
                    <Text style={{ fontWeight: "bold", color: Color.default_001 }}>High to Low Price</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={props.onPress}>
                <View style={{
                    // backgroundColor:"#fff",
                    padding: 8,
                    borderBottomWidth: 1,
                    borderBottomColor: "#DDDDDD"
                }}>
                    <Text style={{ fontWeight: "bold" }}>Low to High Price </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={props.onPress}>
                <View style={{
                    // backgroundColor:"#fff",
                    padding: 8,
                    borderBottomWidth: 1,
                    borderBottomColor: "#DDDDDD"
                }}>
                    <Text style={{ fontWeight: "bold" }}>A to Z</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={props.onPress}>
                <View style={{
                    padding: 8,
                }}>
                    <Text style={{ fontWeight: "bold" }}>Popular</Text>
                </View>
            </TouchableOpacity>

         

        </View>
    )
}
export default DotScreen;