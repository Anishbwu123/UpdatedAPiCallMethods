import { Image, Modal, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"
import { useResponsive } from "../../Hooks/useResponsive"

interface ModalProps {
    visible: boolean,
    onClose?: () => void,
    cameraFun?: () => void,
    mediaFun?: () => void,
    visibleToggle?: () => void
}


const MediaModal: React.FC<ModalProps> = (props) => {
    const { wp, hp } = useResponsive()
    return <>
        <Modal
            visible={props.visible}
            transparent={true}
            animationType="fade"
            onRequestClose={props.onClose} // Handles Android back button press
        >
            <TouchableWithoutFeedback onPress={ props.visibleToggle }>
                <View style={styles.modalOverlay}>

                    <TouchableWithoutFeedback >
                        <View style={styles.modalContentView}>


                            <View style={{
                                width: wp(70),
                                height: hp(20),
                                borderRadius: 20,
                                backgroundColor: "#fff",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "row",
                                gap: 20
                            }}>

                                <TouchableOpacity
                                    onPress={props.cameraFun}
                                    style={{
                                        // backgroundColor:"red",
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}>
                                    <Image source={require("../../Assets/Images/icons/camera.png")} resizeMode='contain' style={{
                                        height: hp(8),
                                        width: hp(8)
                                    }} />
                                    <Text>Take a photo</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={props.mediaFun}
                                    style={{
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}>
                                    <Image source={require("../../Assets/Images/icons/gallery.png")} resizeMode='contain' style={{
                                        height: hp(8), width: hp(8)
                                    }} />
                                    <Text>Gallery</Text>
                                </TouchableOpacity>


                            </View>

                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>

    </>
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center"
    },
    modalContentView: {},
    modalOverlay: {
        flex: 1, // Take up the whole screen
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
        justifyContent: 'center', // Center content vertically
        alignItems: 'center',     // Center content horizontally
    },
})
export default MediaModal;