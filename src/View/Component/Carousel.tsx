import React, { useRef } from 'react';
import {
  View,
  Animated,
  FlatList,
  Dimensions,
} from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const Carousel = ({ data, itemWidth, space, renderItem,containerStyle }:any) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const itemsPerPage = Math.floor(screenWidth / (itemWidth + space));
  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <View style={containerStyle}>
      <Animated.FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled={false}
        showsHorizontalScrollIndicator={false}
        snapToAlignment="start"
        decelerationRate="fast"
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        renderItem={renderItem}
        getItemLayout={(_, index) => ({
          length: itemWidth + space,
          offset: (itemWidth + space) * index,
          index,
        })}
        contentContainerStyle={{
          paddingHorizontal: space / 2,
        }}
      />

      {/* Dot Indicator */}
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
        {[...Array(totalPages).keys()].map((_, i) => {
          const inputRange = [
            (i - 1) * (itemWidth + space) * itemsPerPage,
            i * (itemWidth + space) * itemsPerPage,
            (i + 1) * (itemWidth + space) * itemsPerPage,
          ];

          const dotColor = scrollX.interpolate({
            inputRange,
            outputRange: ['#ccc', '#333', '#ccc'],
            extrapolate: 'clamp',
          });

          const dotSize = scrollX.interpolate({
            inputRange,
            outputRange: [8, 12, 8],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={i}
              style={{
                width: dotSize,
                height: 6,
                backgroundColor: dotColor,
                margin: 5,
                borderRadius: 5,
              }}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Carousel;
