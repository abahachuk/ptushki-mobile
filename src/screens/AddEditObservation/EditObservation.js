import React, { useState } from "react";
import PropTypes from "prop-types";
import { ScrollView, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

import { translate } from "../../i18n";
import { styles } from "./styles";
import { Button } from "../../components";
import RingsSectionEdit from "./sections/RingsSectionEdit";
import BirdSectionEdit from "./sections/BirdSectionEdit";
import ObstacleSectionEdit from "./sections/ObstacleSectionEdit";
import ObservationService from "../../api/Observation.service";

const EditObservation = props => {
  const service = new ObservationService();
  const submitButtonText = translate("addEditObservation.updateObservation");
  const { navigation } = props;
  let refObject;

  if (navigation.getParam("ObservationItem")) {
    refObject = navigation.getParam("ObservationItem");
    // console.log(refObject);
  }

  // TODO: getLocalizedText() from /utils
  const birdSpecies = refObject.speciesMentioned.species;
  const birdSex = refObject.sexMentioned.desc_rus;
  const birdAge = refObject.ageMentioned.desc_rus;
  const birdObstacles = refObject.status.desc_rus;


  const coordinates = refObject.latitude ? refObject.latitude : "";

  const [rings, setRingsValues] = useState(refObject.ringMentioned);
  const [region, changeRegion] = useState(refObject.placeName);
  const [comment, updateComment] = useState(refObject.remarks);
  const [dateTime, updateDate] = useState( refObject.date)


  const valueFromChooseList = navigation.getParam("newValue");
  // TODO: it's not Text, it is Object
  //TODO: oh just ignore those labels and values, those are to refactor later
  let birdSpeciesText = { 
    value: birdSpecies,
    label: birdSpecies
  };
  let birdSexText = { 
    value: birdSex,
    label: birdSex
  };
  let birdAgeText = { 
    value: birdAge,
    label: birdAge
  };
  let birdObstaclesText = { 
    value: birdObstacles,
    label: birdObstacles
  };
  if (valueFromChooseList) {
    switch (valueFromChooseList.mod) {
      case "birdSpecies":
        birdSpeciesText = valueFromChooseList;
        break;
      case "birdSex":
        birdSexText = valueFromChooseList;
        break;
      case "birdAge":
        birdAgeText = valueFromChooseList;
        break;
      case "birdObstacles":
        birdObstaclesText = valueFromChooseList;
        break;
    }
  }

  const onSubmitPress = () => {
    sendEditObservation();
  };

  const onCurrentPositionPress = () => {
    props.onCurrentPosition();
  };
  const onSearchOnMapPress = () => {
    props.onSearchOnMap();
  };
  const onCurrentDateTimePress = () => {
    props.onCurrentDateTime();
  };

  const sendEditObservation = () => {
    // TODO: birdSpecies is readOnly property! What am I gonna dooo

    const body = {
      birdSpecies: birdSpeciesText.value,
      birdSex: birdSexText.value,
      birdAge: birdAgeText.value,
      birdObstacles: birdObstacles.value,
      region,
      coordinates,
      comment,
      dateTime,
      dateTimeInaccuracy
    };

    const id = "";

    service
      .editObservations(body, id)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <View style={styles.rootContainer}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          <BirdSectionEdit
            navigation={navigation}
            birdSexText={birdSexText}
            birdAgeText={birdAgeText}
            birdSpeciesText={birdSpeciesText}
            birdObstaclesText={birdObstaclesText}
          />
          <RingsSectionEdit 
          rings={rings} 
          setRingsValues={setRingsValues} 
          />
          <ObstacleSectionEdit
            onCurrentPositionPress={onCurrentPositionPress}
            onSearchOnMapPress={onSearchOnMapPress}
            region={region}
            coordinates={coordinates}
            onCurrentDateTimePress={onCurrentDateTimePress}
            dateTime={dateTime}
            comment={comment}

            changeRegion={changeRegion}
            updateComment={updateComment}
            updateDate={updateDate}
          />
          <Button
            wrapperStyles={styles.submitButton}
            onPress={onSubmitPress}
            appearance="Dark"
            caption={submitButtonText}
          />
        </View>
      </ScrollView>
    </View>
  );
};

EditObservation.propTypes = {
  submitButtonText: PropTypes.string,
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
    navigate: PropTypes.func
  }).isRequired
};

EditObservation.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state;
  const title =
    routeName === "AddObservation"
      ? translate("addEditObservation.navHeaderTitleAdd")
      : translate("addEditObservation.navHeaderTitleEdit");

  return {
    title,
    headerLeft: (
      <Icon
        name="arrowleft"
        size={30}
        color="white"
        style={{ padding: 15 }}
        onPress={() =>
          navigation.setParams({ isDeclineChangesPopupOpened: true })
        }
      />
    )
  };
};

export default EditObservation;

/* import React, { PureComponent } from "react";
import ObservationBase from "./ObservationBase";
import { translate } from "../../i18n";

class EditObservation extends PureComponent {
  render() {
    return (
      <ObservationBase
        {...this.props}
        submitButtonText={translate("addEditObservation.updateObservation")}
      />
    );
  }
}
EditObservation.navigationOptions = ObservationBase.navigationOptions;
export default EditObservation; */
