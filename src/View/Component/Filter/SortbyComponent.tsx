import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import { useColor } from '../../../Model/Color/useColor';
import { FontsVariant } from '../../../Utils/fontsVariant';
import { textSize } from '../../../Utils/textSize';


interface SortModalProps {
  visible: boolean;
  onClose?: () => void;
  onSelect?: (sortOption: string) => void;
}

const SortModal = ({ visible, onClose, onSelect }: SortModalProps) => {
  const Colors = useColor();
  const styles = makeStyles(Colors);

  const sortOptions = [
    'High to Low Price',
    'Low to High Price',
    'A to Z',
    'Popular',
  ];

  return (
    <Modal
      
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}>
      <Pressable style={styles.overlay} onPress={onClose}>
        <View style={styles.modalContainer}>
          {sortOptions.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.optionButton}
              onPress={() => {}}>
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Pressable>
    </Modal>
  );
};

const makeStyles = (Colors: any) =>
  StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'flex-start',
    },
    modalContainer: {
      backgroundColor: Colors.secondary_002,
      marginTop: 110, // Adjust this value to position below the sort button
      marginHorizontal: 20,
      borderRadius: 10,
      padding: 10,
    },
    optionButton: {
      paddingVertical: 15,
      paddingHorizontal: 20,
      borderBottomWidth: 1,
      borderBottomColor: Colors.secondary_005,
    },
    optionText: {
      fontFamily: FontsVariant.PoppinsRegular,
      fontSize: textSize.small_4x,
      color: Colors.secondary_003,
    },
  });

export default SortModal;