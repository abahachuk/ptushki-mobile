import React, { useState } from "react";
import PropTypes from "prop-types";
import { View, Text, Image, KeyboardAvoidingView, Alert } from "react-native";
import { propOr } from "ramda";

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

const getNavigationNextStep = introductionId =>
  propOr("auth", introductionId, {
    [FIRST_INTRO_SCREEN]: SECOND_INTRO_SCREEN,
    [SECOND_INTRO_SCREEN]: THIRD_INTRO_SCREEN,
    [THIRD_INTRO_SCREEN]: FOURTH_INTRO_SCREEN,
    [FOURTH_INTRO_SCREEN]: "auth"
  });

const getNextBtnCaption = introductionId =>
  propOr("next", introductionId, {
    [FIRST_INTRO_SCREEN]: "next",
    [SECOND_INTRO_SCREEN]: "understandably",
    [THIRD_INTRO_SCREEN]: "clear",
    [FOURTH_INTRO_SCREEN]: "begin"
  });

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
          {/*<Image style={styles.image} source={''} />*/}
        </View>
        <View style={styles.descriptionContainer}>
          <Text>{introductionId}</Text>
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
  introductionId: PropTypes.string,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    goBack: PropTypes.func
  }).isRequired
};

Introduction.defaultProps = {
  introductionId: ""
};

export default Introduction;
