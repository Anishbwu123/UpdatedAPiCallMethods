import React, { useEffect, useRef } from 'react';
import { Dimensions, View, ViewStyle } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

interface RBSheetWrapperProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  height?: number;
}

const RBSheetWrapper: React.FC<RBSheetWrapperProps> = ({
  visible,
  onClose,
  children,
  height = Dimensions.get('window').height /2,
}) => {
  const refRBSheet = useRef<any>(null); // Use `any` because RBSheet doesn't export types

  useEffect(() => {
    if (visible) {
      refRBSheet.current?.open();
    } else {
      refRBSheet.current?.close();
    }
  }, [visible]);

  return (
    <RBSheet
      ref={refRBSheet}
      height={height}
      openDuration={250}
    //   closeOnDragDown={false}
      customStyles={{
        wrapper: {
          backgroundColor: 'rgba(0,0,0,0.5)',
        } as ViewStyle,
        container: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingHorizontal: 16,
        } as ViewStyle,
      }}
      onClose={onClose}
    >
      <View style={{ flex: 1 }}>
        {children}
      </View>
    </RBSheet>
  );
};

export default RBSheetWrapper;
