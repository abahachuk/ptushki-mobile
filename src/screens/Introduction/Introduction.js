import React, { useState, useRef } from "react";
import { View, Image, TouchableHighlight } from "react-native";
import Button from "../../components/Button";
import Slides from "./Slide/Slides";
import { translate } from "../../i18n";
import { I18_NAMESPACE, MAX_COUNT_SLIDER_ITEMS } from "./constants";

import styles from "./styles";

const imageClose = require("../../assets/cross.png");

const Introduction = ({ navigation }) => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const sliderRef = useRef(null);
  const captionNextStep = translate(`${I18_NAMESPACE}next`);
  const onSliderChanged = index => setSliderIndex(index);
  const onPressClose = () => navigation.navigate("mainPage");
  const onPressNext = () => {
    if (sliderIndex >= MAX_COUNT_SLIDER_ITEMS - 1) {
      navigation.navigate("mainPage");
    } else sliderRef.current.scrollBy(1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.closeBtnContainer}>
        <TouchableHighlight onPress={onPressClose}>
          <Image style={styles.closeBtnImage} source={imageClose} />
        </TouchableHighlight>
      </View>
      <Slides sliderRef={sliderRef} onSliderChanged={onSliderChanged} />
      <View style={styles.footer}>
        <Button
          caption={captionNextStep}
          onPress={onPressNext}
          appearance="Dark"
          wrapperStyles={styles.buttonNext}
        />
      </View>
    </View>
  );
};

export default Introduction;
