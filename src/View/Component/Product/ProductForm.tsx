import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    ScrollView,
    Platform,
    TouchableOpacity,
    Image,
    PermissionsAndroid,
    Alert,
} from 'react-native';
import { textSize } from '../../../Utils/textSize';
import { FontsVariant } from '../../../Utils/fontsVariant';
import { CustomImage } from '../CustomImage';
import { images } from '../../../Utils/ImagePath';
import { ImageLibraryOptions, launchImageLibrary } from 'react-native-image-picker';
import RBSheetWrapper from '../../../Adapter/BottomSheet/RBSheetWraper';
import AppButton from '../AppButton';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useColor } from '../../../Model/Color/useColor';
import { useNavigation } from '@react-navigation/native';
import { Screen } from 'react-native-screens';
import { Screens } from '../../../Adapter/Navigation/screenTypes';

const MAX_DESCRIPTION_WORDS = 250;

const imageURL = [
    "https://m.media-amazon.com/images/I/61xtSilwdmL._AC_UF1000,1000_QL80_.jpg",
    "https://m.media-amazon.com/images/I/61xtSilwdmL._AC_UF1000,1000_QL80_.jpg",
    "https://m.media-amazon.com/images/I/61xtSilwdmL._AC_UF1000,1000_QL80_.jpg",
    "https://m.media-amazon.com/images/I/61xtSilwdmL._AC_UF1000,1000_QL80_.jpg",
    "https://m.media-amazon.com/images/I/61xtSilwdmL._AC_UF1000,1000_QL80_.jpg",
]

type GalleryProps = {
    onPress?: () => void,

}
const GalleryButton = (props: GalleryProps) => {
    return <>
        <TouchableOpacity
            onPress={props.onPress}
            style={{
                justifyContent: "center",
                alignItems: "center",
                flex: 1
            }}>
            <Image source={require("../../../Assets/Images/icons/gallery.png")}
                resizeMode='contain'
                style={{
                    height: 50,
                    width: 50
                }} />
            <Text>Gallery</Text>
        </TouchableOpacity>

    </>
}




const ProductForm = () => {
    const [priceRange, setPriceRange] = useState('');
    const [condition, setCondition] = useState('');
    const [description, setDescription] = useState('');
    const [rbModal, setRBModal] = useState(false)
    const [productImages, setProductImages] = useState(imageURL)
    const Colors = useColor()

    const navigation = useNavigation()

    const removeImage = (index: number) => {
        const updatedImages = [...productImages];
        updatedImages.splice(index, 1);
        setProductImages(updatedImages);
    };


    const wordCount = description.trim().split(/\s+/).filter(Boolean).length;


    const askGalleryPermission = async () => {
        if (Platform.OS === 'android') {
            if (Platform.Version >= 33) {
                const res = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
                );
                return res === PermissionsAndroid.RESULTS.GRANTED;
            } else {
                const res = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
                );
                return res === PermissionsAndroid.RESULTS.GRANTED;
            }
        }
    }

    const addImage = async () => {
        console.log("Add image")

        const permission = await askGalleryPermission()
        console.log("Permission of gallery ", permission)
        if (!permission) {
            Alert.alert("Gallery permission not provided")

        }
        else {
            const options: ImageLibraryOptions = {
                mediaType: 'photo',
                selectionLimit: 1,
            }
            const result = await launchImageLibrary(options)
            if (result.didCancel) {
                // Alert.alert("Image picker cancelled")

            }
            else if (result.errorCode) {
                // Alert.alert("Can not oepn image picker")
                console.log("Error occured while accesing imagae picker ", result.errorMessage)
            }
            else {
                console.log(result.assets)
                if (result.assets) {

                    const uri: any = result.assets[0].uri
                    console.log("The URI ", uri)
                    setProductImages(prev => [...prev, uri])
                    setRBModal(!rbModal)
                }
            }
        }

    }





    return (<>
        <ScrollView contentContainerStyle={styles.container}>
            <RBSheetWrapper visible={rbModal} children={<GalleryButton onPress={addImage} />} onClose={() => { }} height={200} />
            <View style={styles.inputGroup}>
                <Text style={styles.label}>Product Name</Text>
                <TextInput style={styles.input} placeholder="Enter product name" />
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>Product Quantity</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter product quantity"
                    keyboardType="numeric"
                />
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>Preferred Price Range</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Select price range"
                    value={priceRange}
                    onChangeText={setPriceRange}
                />
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>Category</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter product category"
                />
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>Condition</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Select product condition"
                    value={condition}
                    onChangeText={setCondition}
                />
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>Description</Text>
                <TextInput
                    style={[styles.input, styles.textArea]}
                    placeholder="Write product description..."
                    multiline
                    numberOfLines={5}
                    value={description}
                    onChangeText={setDescription}
                />
                <Text style={styles.wordCounter}>{wordCount} words</Text>
            </View>




            <View style={styles.fieldContainer}>
                <View style={styles.fieldHeader}>
                    <Text style={styles.label}>Refrence Image</Text>
                    <TouchableOpacity onPress={()=>setRBModal(!rbModal)} style={styles.uploadButton}>
                        {/* <Text style={styles.uploadText}>Upload</Text> */}
                        <CustomImage source={images.Upload} width={40} height={40} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.imagesContainer}>
                {productImages.map((image, index) => (
                    <View key={index} style={styles.imageWrapper}>
                        <Image
                            source={{
                                uri: image
                            }}
                            style={styles.productImage}
                        />
                        <TouchableOpacity
                            style={styles.removeImageButton}
                            onPress={() => removeImage(index)}
                        >
                            <Text style={styles.removeImageText}>✕</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
            <Text style={styles.label}>Needed By</Text>
            {/* Date Picker add */}
            <TextInput
                style={styles.input}
                placeholder="DD/MM/YYYY"
                value={condition}
                onChangeText={setCondition}
            />

            <AppButton backgroundColor={Colors.default_001} text='Request' borderWidth={1} color='white' style={{
                width: "100%",
                height: 50
            }}
                onPress={() => navigation.navigate(Screens.RequestedProducts)}
            />

        </ScrollView>

    </>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 60,
    },
    inputGroup: {
        marginBottom: 18,
    },
    label: {
        fontWeight: '600',
        fontSize: textSize.medium_1x,
        marginBottom: 6,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 30,
        paddingHorizontal: 16,
        paddingVertical: Platform.OS === 'ios' ? 12 : 15,
        fontSize: 14,
        backgroundColor: '#fff',
        marginVertical: 10,
    },
    textArea: {
        borderRadius: 16,
        height: 120,
        textAlignVertical: 'top',
        paddingTop: 14,
    },
    wordCounter: {
        textAlign: 'right',
        marginTop: 4,
        fontSize: 12,
        color: 'gray',
    },
    imagesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 10,
    },
    imageWrapper: {
        width: '25%',
        aspectRatio: 1,
        padding: 5,
        position: 'relative',
    },
    productImage: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
        backgroundColor: '#F5F5F5',
    },
    removeImageButton: {
        position: 'absolute',
        top: '30%',
        left: '35%',
        height: 35,
        width: 35,
        borderRadius: 100,
        backgroundColor: 'rgba(0,0,0,0.7)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    removeImageText: {
        color: '#FFF',
        fontSize: 16,
    },
    fieldContainer: {
        marginBottom: 20,
    },
    fieldHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    fieldLabel: {
        fontFamily: FontsVariant.PoppinsSemiBold,
        fontSize: textSize.small_4x,
        color: '#333',
        marginBottom: 10,
    },
    uploadButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    uploadText: {
        fontFamily: FontsVariant.PoppinsMedium,
        fontSize: textSize.small_3x,
        color: '#00C4FF',
        marginRight: 5,
    },
});

export default ProductForm;
