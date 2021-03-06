import React from 'react';
import { KeyboardAvoidingView, Text, Linking, View } from 'react-native';
import PropTypes from 'prop-types';
import { ListItem } from 'react-native-elements';

import getDescriptionBlock from './DescriptionBlock';
import { translate } from '../../../i18n';
import { styles } from '../styles';
import { pickerValuesArrayType } from '../../../propTypes';

const birdsGuideAppLink = 'market://details?id=com.apbbirdsguide.app';
const birdImg = require('./../../../assets/bird/bird.png');

const BirdSectionEdit = props => {
  const { navigation, birdSexText, birdAgeText, birdSpeciesText, birdObstaclesText } = props;

  const onOpenBirdsGuideApp = () => {
    Linking.openURL(birdsGuideAppLink);
  };

  const getItem2 = (title, obj, mod) => {
    const label = obj.length ? obj : obj.label;
    const value = obj.length ? obj : obj.value;

    return (
      <View style={{ marginTop: 10 }}>
        <Text style={styles.toolbarSubTitle}>{title}</Text>
        <ListItem
          title={label}
          subtitle={value}
          onPress={() => {
            navigation.navigate('chooseOption', {
              option: obj,
              mod,
            });
          }}
          chevronColor="black"
          chevron
          leftAvatar={mod === 'birdSpecies' ? { source: birdImg } : null}
        />
      </View>
    );
  };

  return (
    <KeyboardAvoidingView>
      {getDescriptionBlock(
        translate('addEditObservation.birdHeader'),
        translate('addEditObservation.birdDescription'),
      )}

      {getItem2('Bird species', birdSpeciesText, 'birdSpecies')}
      <Text style={styles.appLinkBlock}>
        <Text>{`${translate('addEditObservation.linkToAppFirstPart')} `}</Text>
        <Text style={styles.appLinkBlockLink} onPress={onOpenBirdsGuideApp}>
          {`${translate('addEditObservation.linkToAppSecondPart')} `}
        </Text>
        <Text>{translate('addEditObservation.linkToAppThirdPart')}</Text>
      </Text>

      {getItem2('Bird sex', birdSexText, 'birdSex')}

      {getItem2('Bird age', birdAgeText, 'birdAge')}

      {getItem2('Состояние птица ', birdObstaclesText, 'birdObstacles')}
    </KeyboardAvoidingView>
  );
};

BirdSectionEdit.propTypes = {
  birdSpecies: PropTypes.string,
  birdSpeciesValues: pickerValuesArrayType,
  birdSex: PropTypes.string,
  birdSexValues: pickerValuesArrayType,
  birdAge: PropTypes.string,
  birdAgeValues: pickerValuesArrayType,
  birdObstacles: PropTypes.string,
  birdObstaclesValues: pickerValuesArrayType,
  setFieldValue: PropTypes.func,
};
BirdSectionEdit.defaultProps = {
  birdSpecies: '',
  birdSpeciesValues: [],
  birdSex: '',
  birdSexValues: [],
  birdAge: '',
  birdAgeValues: [],
  birdObstacles: '',
  birdObstaclesValues: [],
  setFieldValue: () => {},
};

export default BirdSectionEdit;
