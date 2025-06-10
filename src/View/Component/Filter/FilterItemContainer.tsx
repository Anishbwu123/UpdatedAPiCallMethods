import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {useColor} from '../../../Model/Color/useColor';
import {ColorObject} from '../../../Model/Color/ColorName';
import {textSize} from '../../../Utils/textSize';
import {FontsVariant} from '../../../Utils/fontsVariant';

type FilterItemContainerProps = {
  itemList: string[];
  selectedItemList: string[];
  setSelectedItemList: React.Dispatch<React.SetStateAction<string[]>>;
  title: string;
};

export const FilterItemContainer: React.FC<FilterItemContainerProps> = ({
  itemList,
  selectedItemList,
  setSelectedItemList,
  title,
}) => {
  const Colors: ColorObject = useColor();
  const styles = makeStyleSheet(Colors);

  const [expanded, setExpanded] = useState(false);

  const toggleSelection = (
    item: string,
    selectedList: string[],
    setList: React.Dispatch<React.SetStateAction<string[]>>,
  ) => {
    setList(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item],
    );
  };

  const visibleItems = expanded ? itemList : itemList.slice(0, 6);

  return (
    <View style={{marginVertical: 10}}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {visibleItems.map((item, idx) => (
        <View key={idx} style={styles.checkboxRow}>
          <CheckBox
            value={selectedItemList.includes(item)}
            onValueChange={() =>
              toggleSelection(item, selectedItemList, setSelectedItemList)
            }
          />
          <Text style={styles.itemStyle}>{item}</Text>
        </View>
      ))}
      {itemList.length > 6 && (
        <Pressable onPress={() => setExpanded(prev => !prev)}>
          <Text style={styles.seeMore}>
            {expanded ? 'See Less' : 'See More'}
          </Text>
        </Pressable>
      )}
    </View>
  );
};

const makeStyleSheet = (Colors: ColorObject) =>
  StyleSheet.create({
    sectionTitle: {
      fontSize: textSize.small_5x,
      fontWeight: '600',
      fontFamily: FontsVariant.PoppinsBold,
      color: Colors.secondary_007,
    },
    checkboxRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 4,
    },
    seeMore: {
      fontSize: textSize.small_3x,
      fontWeight: '600',
      fontFamily: FontsVariant.PoppinsMedium,
      color: Colors.default_001,
      marginTop: 4,
    },
    itemStyle: {
      fontSize: textSize.small_4x,
      fontWeight: '400',
      fontFamily: FontsVariant.PoppinsRegular,
      color: Colors.secondary_003,
    },
  });
