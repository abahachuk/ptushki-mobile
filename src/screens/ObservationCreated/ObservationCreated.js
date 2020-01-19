import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import { Button } from '../../components';
import { translate } from '../../i18n';
import { styles } from './styles';

const navigationPropType = PropTypes.shape({
  state: PropTypes.shape({
    params: PropTypes.object.isRequired,
  }).isRequired,
}).isRequired;

const observationInfoBlock = (title, description) => (
  <View style={styles.observationInfoUnit}>
    <Text style={styles.observationInfoTitle}>{title}</Text>
    <Text style={styles.observationInfoDescription}>{description}</Text>
  </View>
);

class ObservationCreated extends PureComponent {
  constructor(props) {
    super(props);
    this.onComplete = this.onComplete.bind(this);
  }
  // TODO: make navigating to created observation
  // onMoveToRecord() {

  // }

  onComplete() {
    const { navigation } = this.props;
    navigation.navigate('Observations');
  }

  render() {
    const {
      navigation: {
        state: {
          params: { birdSpecies, dateTime, observationLocation, birdSex, birdAge, birdObstacles },
        },
      },
    } = this.props;

    return (
      <View style={styles.mainContent}>
        <View style={styles.descriptionBlock}>
          <Text style={styles.title}>
            {translate('observationCreated.observationCreatedTitle')}
          </Text>
          <Text style={styles.description}>
            {translate('observationCreated.observationCreatedDescription')}
          </Text>
        </View>
        <View style={styles.observationInfoContainer}>
          <Text style={styles.birdSpecies}>{birdSpecies}</Text>
          {observationInfoBlock(translate('observationCreated.observationCreatedDate'), dateTime)}
          {observationInfoBlock(
            translate('observationCreated.observationLocation'),
            observationLocation,
          )}
          {observationInfoBlock(translate('observationCreated.birdSex'), birdSex)}
          {observationInfoBlock(translate('observationCreated.birdAge'), birdAge)}
          {observationInfoBlock(translate('observationCreated.birdObstacles'), birdObstacles)}
        </View>
        <View style={styles.buttonsBlock}>
          <Button
            wrapperStyles={styles.button}
            // onPress={this.onMoveToRecord}
            caption={translate('observationCreated.moveToRecord')}
            appearance="Borderless"
          />
          <Button
            wrapperStyles={styles.button}
            onPress={this.onComplete}
            caption={translate('observationCreated.complete')}
            appearance="Dark"
          />
        </View>
      </View>
    );
  }
}
ObservationCreated.propTypes = {
  navigation: navigationPropType.isRequired,
};
ObservationCreated.navigationOptions = ({ navigation }) => {
  return {
    title: translate('observationCreated.creatingObservation'),
    headerLeft: (
      <Icon
        name="arrowleft"
        size={30}
        color="white"
        style={{ padding: 15 }}
        onPress={() => navigation.goBack()}
      />
    ),
  };
};

export default ObservationCreated;
