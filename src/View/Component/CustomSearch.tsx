import {JSX} from 'react';
import {TextInput, TextInputProps, View, ViewStyle} from 'react-native';


export const CustomSearch = (props: {
  leftComponent?: JSX.Element;
  rightComponent?: JSX.Element;
  containerStyle?: ViewStyle;
  textInputStyle?: ViewStyle;
  onPress?: () => void;
  // onChangeText?: (text: string) => void;
  placeholder? : string
}) => {
  const {leftComponent, rightComponent, containerStyle, textInputStyle,placeholder} = props;
  return (
    <View 
      style={[{position: 'relative', flex: 1}, containerStyle]}>
      {leftComponent}
      <TextInput
        onPress={props.onPress}
        // onChangeText={onChangeText}
        style={[
          {
            height: 55,
            width: '100%',
            borderRadius: 30,
            paddingLeft: 20,
            paddingRight: 50,
            backgroundColor: 'white',
            elevation: 5,
            color: '#000',
          },
          textInputStyle,
        ]}
        placeholder={placeholder}
        placeholderTextColor="#999"
        onChangeText={() => {}}
        {...props}
      />

      {rightComponent}
      
    </View>
  );
};
