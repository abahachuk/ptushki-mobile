import React from "react";
import PropTypes from "prop-types";
import { View, Text, Image } from "react-native";
import { propOr } from "ramda";
import Indicator from './Indicator';

import {
  FIRST_INTRO_SCREEN,
  SECOND_INTRO_SCREEN,
  THIRD_INTRO_SCREEN,
  FOURTH_INTRO_SCREEN
  // eslint-disable-next-line import/no-unresolved
} from "constants/introductionScreens";

// eslint-disable-next-line import/no-unresolved
import { Button } from "components";
import { translate } from "../../i18n";

import { styles } from "./styles";

// eslint-disable import/no-unresolved
const firstIntroImg = require("assets/introduction/intro-1.png");
const secondtIntroImg = require("assets/introduction/intro-2.png");
const thirdIntroImg = require("assets/introduction/intro-3.png");
const fourthIntroImg = require("assets/introduction/intro-4.png");

const getNavigationNextStep = introductionId =>
  propOr("auth", introductionId, {
    [FIRST_INTRO_SCREEN]: SECOND_INTRO_SCREEN,
    [SECOND_INTRO_SCREEN]: THIRD_INTRO_SCREEN,
    [THIRD_INTRO_SCREEN]: FOURTH_INTRO_SCREEN,
    [FOURTH_INTRO_SCREEN]: "login"
  });
const getNextBtnCaption = introductionId =>
  propOr("next", introductionId, {
    [FIRST_INTRO_SCREEN]: "next",
    [SECOND_INTRO_SCREEN]: "understandably",
    [THIRD_INTRO_SCREEN]: "clear",
    [FOURTH_INTRO_SCREEN]: "begin"
  });
const getScreenTitle = introductionId =>
  propOr("next", introductionId, {
    [FIRST_INTRO_SCREEN]: "firstScreenTitle",
    [SECOND_INTRO_SCREEN]: "secondScreenTitle",
    [THIRD_INTRO_SCREEN]: "thirdScreenTitle",
    [FOURTH_INTRO_SCREEN]: "fourthScreenTitle"
  });
const getScreenText = introductionId =>
  propOr("next", introductionId, {
    [FIRST_INTRO_SCREEN]: "firstScreenText",
    [SECOND_INTRO_SCREEN]: "secondScreenText",
    [THIRD_INTRO_SCREEN]: "thirdScreenText",
    [FOURTH_INTRO_SCREEN]: "fourthScreenText"
  });
const getImageSource = introductionId =>
  propOr("next", introductionId, {
    [FIRST_INTRO_SCREEN]: firstIntroImg,
    [SECOND_INTRO_SCREEN]: secondtIntroImg,
    [THIRD_INTRO_SCREEN]: thirdIntroImg,
    [FOURTH_INTRO_SCREEN]: fourthIntroImg
  });

// TODO: add navigation by swipe?
const Introduction = props => {
  const { navigation } = props;
  const {
    state: {
      params: { introductionId }
    }
  } = navigation;

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.imageContainer}>
          {/* TODO: Temporary solution until image assets will be provided */}
          <Image
            resizeMode="cover"
            style={styles.image}
            source={getImageSource(introductionId)}
          />
          <Indicator
            styles={{
              position: "absolute",
              bottom: 0
            }}
            selectedIndex={introductionId}
          />
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.screenTitle}>
            {translate(`introduction.${getScreenTitle(introductionId)}`)}
          </Text>
          <Text style={styles.screenText}>
            {translate(`introduction.${getScreenText(introductionId)}`)}
          </Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Button
          caption={translate("introduction.back")}
          onPress={() => {
            navigation.goBack();
          }}
          appearance="Borderless"
          wrapperStyles={styles.buttonBack}
        />
        <Button
          caption={translate(
            `introduction.${getNextBtnCaption(introductionId)}`
          )}
          onPress={() => {
            navigation.navigate(getNavigationNextStep(introductionId));
          }}
          appearance="Dark"
          wrapperStyles={styles.buttonNext}
        />
      </View>
    </View>
  );
};

Introduction.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    goBack: PropTypes.func,
    state: PropTypes.shape({
      params: PropTypes.shape({
        introductionId: PropTypes.string
      })
    })
  }).isRequired
};

export default Introduction;
