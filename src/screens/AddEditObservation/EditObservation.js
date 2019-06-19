import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { ScrollView, View, BackHandler } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { ListItem  } from 'react-native-elements'

import { translate } from "../../i18n";
import { styles } from "./styles";
import { Button } from "../../components";
import { pickerValuesArrayType } from "../../propTypes";
import {
  // BirdSection,
  RingsSection,
  ObstaclesSection,
  PhotoCarousel,
  DeclineChangesPopup,

  
} from "./sections";

import  BirdSectionEdit  from './sections/BirdSectionEdit'
import ObservationService from "../../api/Observation.service";



const EditObservation = props => {
  const { navigation } = props;
  let refObject;

  if (navigation.getParam('ObservationItem')) {
    refObject = navigation.getParam('ObservationItem')
  }

  //TODO: getLocalizedText() from /utils
  const birdSpecies = refObject.speciesMentioned.species;
  const birdSex = refObject.sexMentioned.desc_rus;

  const birdAge = refObject.ageMentioned.desc_rus;
  const birdAgeValues =  [];
  const birdObstacles = refObject.status.desc_rus;
  const setFieldsValue = () => {};
  const submitButtonText = 'hi'
  const birdPhotos = [];
  const country = "";
  const region = '';
      const coordinates = '';
      const comment = '';
      const dateTime = '';
      const dateTimeInaccuracy = '';
      const countryValues = [
        { label: "Брестская область", value: 'hi'},
        { label: "Витебская область", value: 'hi'},
        { label: "Гомельская область", value: 'hi'},
        { label: "Гродненская область", value: 'hi'},
        { label: "Минская область", value: 'hi'},
        { label: "Могилевская область", value: 'hi'},
        { label: "Брестская область",value: 'hi'}
      ]
  //some chaos

     let ringsDefaultValues;
     let ringTypeValues;
     let ringMaterialValues;
     let ringColorValues;
     let ringLocationValues;

     
     let valueFromChooseList = navigation.getParam('newValue');
     //TODO: it's not Text, it is Object
     let birdSpeciesText = birdSpecies;
     let birdSexText = birdSex;
     let birdAgeText = birdAge;
     let birdObstaclesText =birdObstacles;
     if (valueFromChooseList) {
      switch (valueFromChooseList.mod) {
        case 'birdSpecies':
            birdSpeciesText = valueFromChooseList;
            break;
        case 'birdSex':
            birdSexText = valueFromChooseList
            break;
        case 'birdAge':
            birdAgeText = valueFromChooseList
            break;
          case 'birdObstacles':
              birdObstaclesText = valueFromChooseList
            break;
    }
     }

  const updateFieldValue = fieldForMerge =>
    setFieldsValue(prevState => ({
      ...prevState,
      ...fieldForMerge
    }));

  const [rings, setRingsValues] = useState(ringsDefaultValues);
  const service = new ObservationService();

  const sendEditObservation = () => {
    const body = {
      birdSpecies,
      birdSex,
      birdAge,
      birdObstacles,
      country,
      region,
      coordinates,
      comment,
      dateTime,
      dateTimeInaccuracy,
      birdPhotos
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

  const onCancel = () => {
    navigation.setParams({ isDeclineChangesPopupOpened: false });
  };

  const onExit = () => {
    navigation.setParams({ isDeclineChangesPopupOpened: false });
    navigation.goBack();
  };

  // console.log(refObject, birdSpecies)

  //TODO: birdSpecies is readOnly! What am I gonna dooo
  return (
    <View style={styles.rootContainer}>
      {navigation.state.params &&
        navigation.state.params.isDeclineChangesPopupOpened ? (
          <DeclineChangesPopup
            onExitHandler={onExit}
            onCancelHandler={onCancel}
          />
        ) : null}
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          
          <BirdSectionEdit
            // birdSpecies={birdSpecies}
            // birdSex={birdSex}
            // birdAge={birdAge}
            // birdAgeValues={birdAgeValues}
            // birdObstacles={birdObstacles}
            navigation={navigation}
            birdSexText={birdSexText}
            birdAgeText ={birdAgeText}
            birdSpeciesText ={birdSpeciesText}
            birdObstaclesText ={birdObstaclesText}
          />
          <PhotoCarousel
            updateFieldValue={updateFieldValue}
            birdPhotos={birdPhotos}
            setFieldValue={updateFieldValue}
          />
          <RingsSection
            rings={rings}
            ringTypeValues={ringTypeValues}
            ringMaterialValues={ringMaterialValues}
            ringColorValues={ringColorValues}
            ringLocationValues={ringLocationValues}
            setRingsValues={setRingsValues}
          />
          <ObstaclesSection
            onCurrentPositionPress={onCurrentPositionPress}
            onSearchOnMapPress={onSearchOnMapPress}
            country={country}
            setFieldValue={updateFieldValue}
            countryValues={countryValues}
            region={region}
            coordinates={coordinates}
            onCurrentDateTimePress={onCurrentDateTimePress}
            dateTime={dateTime}
            dateTimeInaccuracy={dateTimeInaccuracy}
            comment={comment}
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
  birdSpeciesDefault: PropTypes.string,
  birdSpeciesValues: pickerValuesArrayType,
  birdSexDefault: PropTypes.string,
  birdSexValues: pickerValuesArrayType,
  birdAgeDefault: PropTypes.string,
  birdAgeValues: pickerValuesArrayType,
  birdObstaclesDefault: PropTypes.string,
  birdObstaclesValues: pickerValuesArrayType,
  ringsDefaultValues: PropTypes.object,
  ringTypeValues: pickerValuesArrayType,
  ringMaterialValues: pickerValuesArrayType,
  ringColorValues: pickerValuesArrayType,
  ringLocationValues: pickerValuesArrayType,
  birdPhotosDefault: PropTypes.array,
  countryDefault: PropTypes.string,
  countryValues: pickerValuesArrayType,
  regionDefault: PropTypes.string,
  coordinatesDefault: PropTypes.string,
  commentDefault: PropTypes.string,
  dateTimeDefault: PropTypes.string,
  dateTimeInaccuracyDefault: PropTypes.string,
  onCurrentPosition: PropTypes.func,
  onSearchOnMap: PropTypes.func,
  onCurrentDateTime: PropTypes.func,
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
    navigate: PropTypes.func
  }).isRequired
};
EditObservation.defaultProps = {
  submitButtonText: "",
  birdSpeciesDefault: "",
  birdSpeciesValues: [],
  birdSexDefault: "",
  birdSexValues: [],
  birdAgeDefault: "",
  birdAgeValues: [],
  birdObstaclesDefault: "",
  birdObstaclesValues: [],
  ringsDefaultValues: { "1": {} },
  ringTypeValues: [],
  ringMaterialValues: [],
  ringColorValues: [],
  ringLocationValues: [],
  birdPhotosDefault: [],
  countryDefault: "",
  countryValues: [],
  regionDefault: "",
  coordinatesDefault: "",
  commentDefault: "",
  dateTimeDefault: "",
  dateTimeInaccuracyDefault: "",
  onCurrentPosition: () => { },
  onSearchOnMap: () => { },
  onCurrentDateTime: () => { }
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


/*import React, { PureComponent } from "react";
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
export default EditObservation;*/
