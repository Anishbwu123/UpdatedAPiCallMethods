import React from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {useResponsive} from '../../Hooks/useResponsive';
import {FontsVariant} from '../../Utils/fontsVariant';
import {textSize} from '../../Utils/textSize';
import {CustomImage} from './CustomImage';
import {images} from '../../Utils/ImagePath';

type Props = {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
  type: 'logout' | 'delete';
};

const ConfirmationModal: React.FC<Props> = ({
  visible,
  onClose,
  onConfirm,
  type,
}) => {
  const {wp, hp} = useResponsive();
  const isDelete = type === 'delete';

  const styles = StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: '#00000070',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalBox: {
      backgroundColor: '#fff',
      borderRadius: wp(5),
      width: wp(90),
      padding: wp(6),
    },
    title: {
      fontSize: textSize.medium_5x,
      fontFamily: FontsVariant.PoppinsSemiBold,
      marginTop: hp(2),
    //    width:wp(90),
      textAlign: 'center',
      color: '#000',
    },
    message: {
      fontSize: textSize.small_3x,
      fontFamily: FontsVariant.PoppinsRegular,
      color: '#333',
      textAlign: 'center',
    //   width:wp(90),
      marginTop: hp(1),
      marginBottom: hp(3),
      paddingHorizontal: wp(2),
    },
    buttonRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: wp(3),
    },
    primaryButton: {
      flex: 1,
      paddingVertical: hp(1.5),
      borderRadius: 50,
      alignItems: 'center',
      backgroundColor: isDelete ? '#FF3B30' : '#00C4FF',
    },
    primaryButtonText: {
      color: '#fff',
      fontFamily: FontsVariant.PoppinsSemiBold,
      fontSize: textSize.small_4x,
    },
    secondaryButton: {
      flex: 1,
      paddingVertical: hp(1.5),
      borderRadius: 50,
      alignItems: 'center',
      borderWidth: 1.5,
      borderColor: '#00C4FF',
    },
    secondaryButtonText: {
      color: '#00C4FF',
      fontFamily: FontsVariant.PoppinsSemiBold,
      fontSize: textSize.small_4x,
    },
  });

  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modalBox}>
          <View style={{alignItems: 'center'}}>
            <CustomImage
              source={isDelete ? images.error : images.logout}
              width={wp(13)}
              height={wp(13)}
              resizeMode="contain"
            />
            <Text style={styles.title}>
              {isDelete
                ? 'Are you sure?'
                : 'Do you want to log out of your account?'}
            </Text>
            <Text style={styles.message}>
              {isDelete
                ? 'Delete my account and all its contents with confirmation.'
                : "You'll be signed out from your account but can log in again anytime."}
            </Text>
          </View>

          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={onConfirm} style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>
                {isDelete ? 'Delete' : 'Log Out'}
              </Text>
            </TouchableOpacity>

            <Pressable onPress={onClose} style={styles.secondaryButton}>
              <Text style={styles.secondaryButtonText}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmationModal;
