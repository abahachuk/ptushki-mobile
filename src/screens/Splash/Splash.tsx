import React, { useEffect } from 'react';
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';
import { View, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { AppSwitchNavigator } from '../../entities';

import styles from './styles';

const INTRODUCTION_STORAGE = 'isIntroductionWasOpened';
const splashImg = require('../../assets/splash/splash.png');

type SplashProps = {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
};

const getInitialRoute = async (): Promise<string> => {
  const isShowIntroduction: string | null = await AsyncStorage.getItem(INTRODUCTION_STORAGE);
  console.log('isShowIntroduction', isShowIntroduction)
  if (!isShowIntroduction || isShowIntroduction === 'false') {
    // AsyncStorage.setItem(INTRODUCTION_STORAGE, 'true');

    return AppSwitchNavigator.INTRODUCTION;
  }

  return AppSwitchNavigator.AUTH;
};

const Splash: React.FC<SplashProps> = ({ navigation }) => {
  useEffect(() => {
    const navigateToScreen = async (): Promise<void> => {
      const initialRoute: string = await getInitialRoute();
      navigation.navigate(initialRoute);
    };
    navigateToScreen();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={splashImg} style={styles.image} />
    </View>
  );
};

export default Splash;
