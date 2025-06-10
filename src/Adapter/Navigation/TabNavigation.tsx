import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Image,
  ImageSourcePropType,
  Platform,
  Pressable,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import {ScreenParamList, Screens} from './screenTypes';
import {images} from '../../Utils/ImagePath';
import {useColor} from '../../Model/Color/useColor';
import {useResponsive} from '../../Hooks/useResponsive';
import {CustomImage} from '../../View/Component/CustomImage';
import {HomeScreen} from '../../View/Screen/HomeScreen';
import {SearchResultScreen as SearchScreen} from '../../View/Screen/SearchResultScreen';
import {ProductScreen} from '../../View/Screen/ProductScreen';
import {ChatScreen} from '../../View/Screen/ChatScreen';
import {ProfileScreenSeller} from '../../View/Screen/ProfileScreenSeller';
import {FontsVariant} from '../../Utils/fontsVariant';
import {textSize} from '../../Utils/textSize';
import {CategoryScreen} from '../../View/Screen/CategoryScreen';

const Tab = createBottomTabNavigator<ScreenParamList>();
export const TabNavigation = () => {
  const {wp, hp} = useResponsive();
  const Colors = useColor();
  return (
    <Tab.Navigator
      initialRouteName={Screens.HomeScreen}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size, focused}) => {
          if (route.name === Screens.HomeScreen) {
            return (
              <View
                style={{
                  marginTop: hp(5),
                  width: wp(10),
                  height: hp(5),
                  alignItems: 'center',
                }}>
                <CustomImage
                  source={focused ? images.HomeBlue : images.Home}
                  resizeMode={'contain'}
                  width={wp(7)}
                  height={wp(7)}
                />
                <Text
                  style={{
                    fontFamily: FontsVariant.PoppinsRegular,
                    fontSize: textSize.small_2x,
                    color: focused ? Colors.default_001 : Colors.secondary_006,
                  }}>
                  Home
                </Text>
              </View>
            );
          } else if (route.name === Screens.SearchScreen) {
            return (
              <View
                style={{
                  marginTop: hp(5),
                  width: wp(13),
                  height: hp(5),
                  alignItems: 'center',
                }}>
                <CustomImage
                  source={focused ? images.SearchBlue : images.SearchFill}
                  resizeMode={'contain'}
                  width={wp(7)}
                  height={wp(7)}
                />
                <Text
                  style={{
                    fontFamily: FontsVariant.PoppinsRegular,
                    fontSize: textSize.small_2x,
                    color: focused ? Colors.default_001 : Colors.secondary_006,
                  }}>
                  Search
                </Text>
              </View>
            );
          } else if (route.name === Screens.CategoryScreen) {
            return (
              <View
                style={{
                  marginTop: hp(5),
                  width: wp(14),
                  height: hp(5),
                  alignItems: 'center',
                }}>
                <CustomImage
                  source={
                    focused ? images.ActiveMaterialBox : images.inactivetab
                  }
                  resizeMode={'contain'}
                  width={wp(7)}
                  height={wp(7)}
                />
                <Text
                  numberOfLines={1}
                  adjustsFontSizeToFit
                  // minimumFontScale={1}
                  style={{
                    fontFamily: FontsVariant.PoppinsRegular,
                    fontSize: textSize.small_2x,
                    color: focused ? Colors.default_001 : Colors.secondary_006,
                  }}>
                  Categories
                </Text>
              </View>
            );
          } else if (route.name === Screens.ChatScreen) {
            return (
              <View
                style={{
                  marginTop: hp(5),
                  width: wp(10),
                  height: hp(5),
                  alignItems: 'center',
                }}>
                <CustomImage
                  source={focused ? images.AtiveChat : images.Chat}
                  resizeMode={'contain'}
                  width={wp(7)}
                  height={wp(7)}
                />
                <Text
                  style={{
                    fontFamily: FontsVariant.PoppinsRegular,
                    fontSize: textSize.small_2x,
                    color: focused ? Colors.default_001 : Colors.secondary_006,
                  }}>
                  Chat
                </Text>
              </View>
            );
          } else if (route.name === Screens.ProfileScreenSeller) {
            return (
              <View
                style={{
                  marginTop: hp(5),
                  width: wp(10),
                  height: hp(5),
                  alignItems: 'center',
                }}>
                <CustomImage
                  source={focused ? images.ActiveProfile : images.profileFill}
                  resizeMode={'contain'}
                  width={wp(7)}
                  height={wp(7)}
                />
                <Text
                  style={{
                    fontFamily: FontsVariant.PoppinsRegular,
                    fontSize: textSize.small_2x,
                    color: focused ? Colors.default_001 : Colors.secondary_006,
                  }}>
                  Profile
                </Text>
              </View>
            );
          }
        },
        // tabBarBackground: () => (
        //   <CustomImage
        //     source={images.BackgroundTab}
        //     height={Platform.OS === 'ios' ? wp(20) : wp(30)}
        //     width={wp(100)}
        //     resizeMode="contain"
        //   />
        // ),
        tabBarStyle: {
          backgroundColor: Colors?.secondary_002,
          height: hp(12),
          justifyContent: 'center',
          alignItems: 'center',
          // position: 'absolute',
          borderTopWidth: 1,
          elevation: 0,
          bottom: 0,
        },
        tabBarActiveTintColor: Colors?.default_001,
        tabBarInactiveTintColor: Colors.secondary_006,
        tabBarShowLabel: false,
        headerShown: false,
      })}>
      <Tab.Screen
        name={Screens.HomeScreen}
        component={HomeScreen}
        options={{
          tabBarButton: props => (
            <Pressable android_ripple={{color: 'transparent'}} {...props}>
              {props.children}
            </Pressable>
          ),
        }}
      />
      <Tab.Screen
        name={Screens.SearchScreen}
        component={SearchScreen}
        options={{
          tabBarButton: props => (
            <Pressable android_ripple={{color: 'transparent'}} {...props}>
              {props.children}
            </Pressable>
          ),
        }}
      />
      <Tab.Screen
        name={Screens.CategoryScreen}
        component={CategoryScreen}
        options={{
          tabBarButton: props => (
            <Pressable android_ripple={{color: 'transparent'}} {...props}>
              {props.children}
            </Pressable>
          ),
        }}
      />
      <Tab.Screen
        name={Screens.ChatScreen}
        component={ChatScreen}
        options={{
          tabBarButton: props => (
            <Pressable android_ripple={{color: 'transparent'}} {...props}>
              {props.children}
            </Pressable>
          ),
        }}
      />
      <Tab.Screen
        name={Screens.ProfileScreenSeller}
        component={ProfileScreenSeller}
        options={{
          tabBarButton: props => (
            <Pressable android_ripple={{color: 'transparent'}} {...props}>
              {props.children}
            </Pressable>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
