import React, { useState, useRef } from 'react';
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import Button from '../../components/Button';
import Slides from './Slides';
import { translate } from '../../i18n';
import { AppScreens } from '../../entities';

import { styles, hitSlop } from './styles';

const MAX_COUNT_SLIDER_ITEMS = 4;

type IntroductionProps = {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
};

const Introduction: React.FC<IntroductionProps> = ({ navigation }): React.ReactElement => {
  const [sliderIndex, setSliderIndex] = useState<number>(0);
  const sliderRef = useRef<Swiper>(null);

  const onSliderChanged = (index: number): void => setSliderIndex(index);
  const onPressClose = () => navigation.navigate(AppScreens.LOGIN);

  const goNextSlide = (): void => {
    if (sliderRef && sliderRef.current) sliderRef.current.scrollBy(1);
  };

  const onPressNext = () => {
    if (sliderIndex >= MAX_COUNT_SLIDER_ITEMS - 1) {
      navigation.navigate(AppScreens.LOGIN);
    } else goNextSlide();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeBtnContainer} hitSlop={hitSlop} onPress={onPressClose}>
        <Icon name="md-close" style={styles.closeIcon} />
      </TouchableOpacity>
      <Slides sliderRef={sliderRef} onSliderChanged={onSliderChanged} />
      <View style={styles.footer}>
        <Button caption={translate('introduction.next')} onPress={onPressNext} appearance="Dark" />
      </View>
    </View>
  );
};

export default Introduction;
