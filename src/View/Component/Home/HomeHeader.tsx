import React, {JSX, PropsWithChildren} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {CustomImage} from '../CustomImage';
import {Responsive} from '../../../Hooks/Responsive';
import {images} from '../../../Utils/ImagePath';
import {CustomSearch} from '../CustomSearch';
import {useColor} from '../../../Model/Color/useColor';
import {textSize} from '../../../Utils/textSize';
import {FontsVariant} from '../../../Utils/fontsVariant';
import {useResponsive} from '../../../Hooks/useResponsive';
import {BlankSpace} from '../BlankSpace';
import {HeaderType} from '../../../Utils/constant';
import {useNavigation} from '@react-navigation/native';
import {NavigationTypes} from '../../../Types/CommonTypes';
import { Screens } from '../../../Adapter/Navigation/screenTypes';

type HeaderProps = {
  headerType: HeaderType;
  title?: string;
  hideSearchBar?: boolean;
  hideTitle?: boolean;
  hideLeftArrow?: boolean;
  serachBoxText?:string,
  menuBtnPress?:()=>void,
  tintColor?:string,
  hideIcon?: boolean;
};

const HomeHeader: React.FC<PropsWithChildren<HeaderProps>> = ({
  headerType,
  title,
  hideSearchBar = false,
  hideIcon = false,
  hideTitle = false,
  hideLeftArrow = false,
  serachBoxText = 'Search',
  menuBtnPress,
  tintColor,
}) => {
  const Colors = useColor();
  const {wp, hp} = useResponsive();
  const navigation: NavigationTypes = useNavigation();

  const HomeHeader = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: wp(7),
          alignItems: 'center',
        }}>
        <View style={{flex: 2}}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
            onPress={() => {
              navigation.goBack();
            }}>
            {!hideLeftArrow && (
              <CustomImage
                source={images.Back}
                height={24}
                width={24}
                onPress={() => {
                  navigation.goBack();
                }}
                style={{marginBottom: 3}}
              />
            )}
            <BlankSpace width={wp(4)} />
            {!hideTitle && (
              <Text
                style={{
                  fontSize: textSize.medium_3x,
                  fontFamily: FontsVariant.PoppinsMedium,
                  color: Colors.secondary_002,
                }}>
                {title}
              </Text>
            )}
          </TouchableOpacity>
        </View>

        {HeaderType.HOME == headerType && (
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'space-around',
            }}>
            <CustomImage
              source={images.Cart}
              resizeMode={'contain'}
              width={Responsive().horizontalScale(30)}
              height={Responsive().horizontalScale(30)}
            />
            <BlankSpace height={wp(3)} />
            <CustomImage
              source={images.Setting}
              resizeMode={'contain'}
              width={Responsive().horizontalScale(30)}
              height={Responsive().horizontalScale(30)}
            />
          </View>
        )}

        {HeaderType.SEARCH == headerType && (
          <View>
            <CustomImage
              source={images.Sort}
              resizeMode={'contain'}
              width={Responsive().horizontalScale(30)}
              height={Responsive().horizontalScale(30)}
            />
          </View>
        )}
        {HeaderType.CHAT == headerType && (
          <TouchableOpacity
            onPress={() => navigation.navigate(Screens.Settings)}>
            <CustomImage
              source={images.Setting}
              resizeMode={'contain'}
              width={Responsive().horizontalScale(30)}
              height={Responsive().horizontalScale(30)}
            />
          </TouchableOpacity>
        )}
        {HeaderType.PROFILE == headerType && (
          <TouchableOpacity
            onPress={() => navigation.navigate(Screens.Settings)}>
            <CustomImage
              source={images.Setting}
              resizeMode={'contain'}
              width={Responsive().horizontalScale(24)}
              height={Responsive().horizontalScale(24)}
            />
          </TouchableOpacity>
        )}
        {HeaderType.DEFAULT == headerType && (
          <TouchableOpacity onPress={menuBtnPress}>
            <CustomImage
              tintColor={tintColor}
              source={images.DotMenu}
              resizeMode={'contain'}
              width={Responsive().horizontalScale(24)}
              height={Responsive().horizontalScale(24)}
            />
          </TouchableOpacity>
        )}
        {HeaderType.REQUEST == headerType && (
          <TouchableOpacity onPress={menuBtnPress}>
            <CustomImage
            tintColor={tintColor}

              source={images.Sort}
              resizeMode={'contain'}
              width={Responsive().horizontalScale(24)}
              height={Responsive().horizontalScale(24)}
            />
          </TouchableOpacity>
        )}
        {HeaderType.EDIT == headerType && (
          <TouchableOpacity onPress={menuBtnPress}>
            <CustomImage
            tintColor={tintColor}

              source={images.Edit}
              resizeMode={'contain'}
              width={Responsive().horizontalScale(24)}
              height={Responsive().horizontalScale(24)}
            />
          </TouchableOpacity>
        )}
      </View>
    );
  };

  return (
    <>
      <HomeHeader />

      {!hideSearchBar && (
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            alignItems: 'center',
            width: '85%',
            alignSelf: 'center',
            position: 'absolute',
            bottom: -30,
            zIndex: 10,
          }}>
          <CustomSearch
          onPress={() => {
            navigation.navigate(Screens.SearchResultScreen);
          }
          }
          placeholder={serachBoxText}
            rightComponent={
              <CustomImage
                source={images.Search}
                resizeMode="contain"
                width={Responsive().horizontalScale(20)}
                height={Responsive().horizontalScale(20)}
                containerStyle={{
                  position: 'absolute',
                  right: 20,
                  top: '50%',
                  transform: [{translateY: -Responsive().horizontalScale(10)}],
                  zIndex: 1,
                }}
              />
            }
          />
        </View>
      )}
    </>
  );
};

export default HomeHeader;
