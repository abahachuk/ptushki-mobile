import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { getLocalizedText } from 'utils/localization';
import getInformationBlock from './sections/InformationBlock';
import DeleteObservation from '../DeleteObservation';
import HeaderImage from './sections/HeaderImage';
import Gallery from './sections/Gallery';
import { translate } from '../../i18n';
import { styles } from './styles';

const ObservationItem = props => {
  const {
    navigation,
    screenProps: { currentLocale },
  } = props;
  const {
    speciesMentioned: { species },
    ring: { identificationNumber },
    placeName,
    date,
    sexMentioned,
    ageMentioned,
    status,
    remarks,
    photos,
  } = navigation.state.params.ObservationItem;

  const sex = getLocalizedText(sexMentioned, currentLocale);
  const age = getLocalizedText(ageMentioned, currentLocale);
  const itemStatus = getLocalizedText(status, currentLocale);

  return (
    <View>
      <ScrollView style={styles.ObservationItem}>
        <HeaderImage photos={photos} />
        <View style={styles.wrap}>
          <Text style={styles.species}>{species}</Text>
        </View>
        <Gallery photos={photos} />
        <View style={styles.wrap}>
          <Text style={styles.header}>{translate('observationItem.rings')}</Text>
          <View style={styles.ring}>
            <Text style={styles.text}>{translate('observationItem.rightRing')}</Text>
            <View style={styles.rightNumberWrap}>
              <Text style={styles.rightNumber}>{identificationNumber}</Text>
            </View>
          </View>
          <View style={styles.ring}>
            <Text style={styles.text}>{translate('observationItem.leftRings')}</Text>
            <View style={styles.leftNumberWrap}>
              <Text style={styles.leftNumber}>{identificationNumber}</Text>
            </View>
          </View>
        </View>
        {getInformationBlock(translate('observationItem.dateHeader'), date)}
        {getInformationBlock(translate('observationItem.countryHeader'), placeName)}
        <View style={styles.line} />
        {getInformationBlock(translate('observationItem.genderHeader'), sex)}
        {getInformationBlock(translate('observationItem.ageHeader'), age)}
        {getInformationBlock(translate('observationItem.lifeStatusHeader'), itemStatus)}
        <View style={styles.line} />
        {getInformationBlock(translate('observationItem.commentHeader'), remarks)}
      </ScrollView>
    </View>
  );
};

ObservationItem.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.ObservationItem.speciesMentioned.species,
  headerRight: <DeleteObservation navigation={navigation} />,
  headerLeft: (
    <Icon
      name="arrowleft"
      size={30}
      color="white"
      style={{ padding: 15 }}
      onPress={() => navigation.goBack()}
    />
  ),
});

ObservationItem.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        ObservationItem: PropTypes.shape({
          speciesMentioned: PropTypes.objectOf(PropTypes.string),
          ring: PropTypes.shape({
            id: PropTypes.string,
            identificationNumber: PropTypes.string,
            date: PropTypes.string,
          }),
          placeName: PropTypes.string,
          date: PropTypes.string,
          sexMentioned: PropTypes.objectOf(PropTypes.string),
          ageMentioned: PropTypes.objectOf(PropTypes.string),
          status: PropTypes.objectOf(PropTypes.string),
          remarks: PropTypes.string,
          photos: PropTypes.arrayOf(PropTypes.string),
          colorRing: PropTypes.string,
        }),
      }),
    }),
  }).isRequired,
  screenProps: PropTypes.shape({
    currentLocale: PropTypes.string,
  }).isRequired,
};

export default ObservationItem;
