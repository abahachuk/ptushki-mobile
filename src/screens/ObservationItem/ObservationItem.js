import React from "react";
import PropTypes from "prop-types";
import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import { Image } from "react-native-elements";
import Icon from "react-native-vector-icons/AntDesign";
import getInformationBlock from "./sections/InformationBlock";
import DeleteObservation from "../DeleteObservation";

import { translate } from "../../i18n";
import { styles } from "./styles";

const ObservationItem = props => {
  const { navigation } = props;
  const {
    speciesMentioned: { species },
    ring: { identificationNumber },
    placeName,
    date,
    sexMentioned: { desc_rus: sex },
    ageMentioned: { desc_rus: age },
    status: { desc_rus: status },
    remarks,
    photos
  } = navigation.state.params.ObservationItem;

  const getHeaderImage = () => {
    return (
      photos &&
      photos.length && (
        <View style={styles.backImageWrap}>
          <Image
            style={styles.backImage}
            source={{ uri: photos[0] }}
            PlaceholderContent={<ActivityIndicator />}
          />
        </View>
      )
    );
  };

  const getGallery = () => {
    return (
      photos &&
      photos.length && (
        <View style={styles.images}>
          {photos.map((photoUri) => (
            <Image
              style={styles.image}
              source={{ uri: photoUri }}
              key={photoUri}
              PlaceholderContent={<ActivityIndicator />}
            />
          ))}
        </View>
      )
    );
  };

  return (
    <View>
      <ScrollView style={styles.ObservationItem}>
        {getHeaderImage()}
        <View style={styles.wrap}>
          <Text style={styles.species}>{species}</Text>
        </View>
        {getGallery()}
        <View style={styles.wrap}>
          <Text style={styles.header}>
            {translate("observationItem.rings")}
          </Text>
          <View style={styles.ring}>
            <Text style={styles.text}>
              {translate("observationItem.rightRing")}
            </Text>
            <View style={styles.rightNumberWrap}>
              <Text style={styles.rightNumber}>{identificationNumber}</Text>
            </View>
          </View>
          <View style={styles.ring}>
            <Text style={styles.text}>
              {translate("observationItem.leftRings")}
            </Text>
            <View style={styles.leftNumberWrap}>
              <Text style={styles.leftNumber}>{identificationNumber}</Text>
            </View>
          </View>
        </View>
        {getInformationBlock(translate("observationItem.dateHeader"), date)}
        {getInformationBlock(
          translate("observationItem.countryHeader"),
          placeName
        )}
        <View style={styles.line} />
        {getInformationBlock(translate("observationItem.genderHeader"), sex)}
        {getInformationBlock(translate("observationItem.ageHeader"), age)}
        {getInformationBlock(
          translate("observationItem.lifeStatusHeader"),
          status
        )}
        <View style={styles.line} />
        {getInformationBlock(
          translate("observationItem.commentHeader"),
          remarks
        )}
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
  )
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
            date: PropTypes.string
          }),
          placeName: PropTypes.string,
          date: PropTypes.string,
          sexMentioned: PropTypes.objectOf(PropTypes.string),
          ageMentioned: PropTypes.objectOf(PropTypes.string),
          status: PropTypes.objectOf(PropTypes.string),
          remarks: PropTypes.string,
          photos: PropTypes.arrayOf(PropTypes.string),
          colorRing: PropTypes.string
        })
      })
    })
  }).isRequired
};

export default ObservationItem;
