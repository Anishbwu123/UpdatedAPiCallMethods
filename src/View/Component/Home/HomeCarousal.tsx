import { Animated, Dimensions, ImageBackground, View, ViewStyle,FlatList } from "react-native";
import { images } from "../../../Utils/ImagePath";
import { useRef } from "react";

export const HomeCarousal = ({contentList,renderItem, itemWidth,space,containerStyle}:{
    contentList?:number[] ,
    renderItem?: any,
    itemWidth?:number,
    space?:number,
    containerStyle?:ViewStyle
})=>{
    const scrollX = useRef(new Animated.Value(0)).current;
    return (
        <View style = {containerStyle}>
          <Animated.FlatList
            data={contentList}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            snapToAlignment="center"
            snapToInterval={itemWidth + space}
            decelerationRate="fast"
            // contentContainerStyle={{
            //   paddingHorizontal: SPACER,
            // }}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {useNativeDriver: false},
            )}
            renderItem={renderItem}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 10,
            }}>
            {contentList.map((_, i) => {
              const inputRange = [
                (i - 1) * (itemWidth + space),
                i * (itemWidth + space),
                (i + 1) * (itemWidth + space),
              ];

              const dotColor = scrollX.interpolate({
                inputRange,
                outputRange: ['#EEEEEE', '#333333', '#EEEEEE'],
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
                    height: 6,
                    width: dotSize,
                    backgroundColor: dotColor,
                    margin: 5,
                    borderRadius: 5,
                  }}
                />
              );
            })}
          </View>
        </View>
    )
}