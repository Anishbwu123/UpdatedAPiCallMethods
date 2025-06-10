import { useWindowDimensions } from "react-native";

export const Responsive = () => {
    const { width, height } = useWindowDimensions();
  
    const guidelineBaseWidth = 390;
    const guidelineBaseHeight = 844;
    // const guidelineBaseHeight =12;
  
    const horizontalScale = (size: number) => (width / guidelineBaseWidth) * size;
    const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;
    const moderateScale = (size: number, factor = 0.5) =>
      size + (horizontalScale(size) - size) * factor;
  
    // Detect landscape mode
    const isLandscape = width > height;
  
    // Improved tablet detection (checking width OR height)
    const isTablet = () => width >= 1024 || height >= 1024;
  
    return { horizontalScale, verticalScale, moderateScale, isTablet, isLandscape };
  }