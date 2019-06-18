import React from "react";
import PropTypes from "prop-types";
import { View, Text, Image } from "react-native";
import Indicator from './Indicator';
import * as utils from './utils';
import { Button } from "components";
import { styles } from "./styles";

const Introduction = props => {
  const { navigation, screenProps } = props;
  const {
    state: {
      params: { introductionId }
    }
  } = navigation;
  const onBackPress = () => {
    if (screenProps.isFirstLaunch) {
      //TODO: create utils file with routes names
      navigation.navigate('LanguageSelect')
    } else {
      navigation.navigate('login');
    }
  };
  const onNextPress = () => {
    navigation.navigate(utils.getNavigationNextStep(introductionId));
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.imageContainer}>
          <Image
            resizeMode="cover"
            style={styles.image}
            source={utils.getImageSource(introductionId)}
          />
          <Indicator selectedIndex={introductionId} />
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.screenTitle}>
            {utils.getScreenTitle(introductionId)}
          </Text>
          <Text style={styles.screenText}>
            {utils.getScreenText(introductionId)}
          </Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Button
          caption={utils.getBackCaption()}
          onPress={onBackPress}
          appearance="Borderless"
          wrapperStyles={styles.buttonBack}
        />
        <Button
          caption={utils.getNextBtnCaption(introductionId)}
          onPress={onNextPress}
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
