import React, { useState } from "react";
import PropTypes from "prop-types";
import { ScrollView, KeyboardAvoidingView, View } from "react-native";
import ImagePicker from "react-native-image-picker";

import { styles } from "./styles";
import { Button, Input } from "../../components";
import { translate } from "../../i18n";
import { pickerValuesArrayType } from "../../propTypes";
import BirdSection from "./BirdSection";
import RingsSection from "./RingsSection";
import ObstaclesSection from "./ObstaclesSection";
import Toolbar from "./Toolbar";
import PhotoCarousel from "./PhotoCarousel";

const photoPlaceholder = require("../../assets/photoPlaceholder.png");

const EditObservation = props => {
  const {
    birdSpeciesDefault,
    birdSpeciesValues,
    birdSexDefault,
    birdSexValues,
    birdAgeDefault,
    birdAgeValues,
    birdObstaclesDefault,
    birdObstaclesValues,
    ringsDefaultValues,
    ringTypeValues,
    ringMaterialValues,
    ringColorValues,
    ringLocationValues,
    birdPhotosDefault,
    countryDefault,
    countryValues,
    regionDefault,
    coordinatesDefault,
    commentDefault,
    dateTimeDefault,
    dateTimeInaccuracyDefault
  } = props;
  const [
    {
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
    },
    setFieldsValue
  ] = useState({
    birdSpecies: birdSpeciesDefault,
    birdSex: birdSexDefault,
    birdAge: birdAgeDefault,
    birdObstacles: birdObstaclesDefault,
    birdPhotos: birdPhotosDefault,
    country: countryDefault,
    region: regionDefault,
    coordinates: coordinatesDefault,
    comment: commentDefault,
    dateTime: dateTimeDefault,
    dateTimeInaccuracy: dateTimeInaccuracyDefault
  });

  const updateFieldValue = fieldForMerge =>
    setFieldsValue(prevState => ({
      ...prevState,
      ...fieldForMerge
    }));

  const [rings, setRingsValues] = useState(ringsDefaultValues);

  const onSubmitPress = () => {
    props.onSubmit();
  };
  const onBackPress = () => {
    props.onBackNavigation();
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
  const onLoadPhotoPress = () => {
    ImagePicker.showImagePicker({}, response => {
      if (response.uri) {
        const imgSrc = { uri: response.uri };
        updateFieldValue({ birdPhotos: birdPhotos.concat(imgSrc) });
      }
    });
  };

  return (
    <View>
      <Toolbar onBackPress={onBackPress} />
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        enabled
      >
        <KeyboardAvoidingView style={styles.container} enabled>
          <BirdSection
            birdSpecies={birdSpecies}
            birdSpeciesValues={birdSpeciesValues}
            birdSex={birdSex}
            birdSexValues={birdSexValues}
            birdAge={birdAge}
            birdAgeValues={birdAgeValues}
            birdObstacles={birdObstacles}
            birdObstaclesValues={birdObstaclesValues}
            setFieldValue={updateFieldValue}
          />
          <PhotoCarousel
            photos={birdPhotos}
            onLoadPhotoPress={onLoadPhotoPress}
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
          />
          <Input
            onChangeText={value => updateFieldValue({ comment: value })}
            customLabel={styles.customLabel}
            customViewStyles={styles.commentField}
            customTextStyles={styles.customText}
            value={comment}
            label={translate("editObservation.comment")}
          />
          <Button
            onPress={onSubmitPress}
            appearance="Dark"
            caption={translate("editObservation.sendObservation")}
          />
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

// TODO: update defaultProps to contain isReuiqred where it's need and get
// rid of mocks
EditObservation.propTypes = {
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
  onBackNavigation: PropTypes.func,
  onSubmit: PropTypes.func,
  onCurrentPosition: PropTypes.func,
  onSearchOnMap: PropTypes.func,
  onCurrentDateTime: PropTypes.func
};
EditObservation.defaultProps = {
  birdSpeciesDefault: "",
  birdSpeciesValues: [
    {
      label: "Лебедь Шипун",
      value: "swanMute"
    },
    {
      label: "Беркут",
      value: "goldenEagle"
    }
  ],
  birdSexDefault: "",
  birdSexValues: [
    {
      label: "Не определен",
      value: "notDetermined"
    },
    {
      label: "Самец",
      value: "male"
    },
    {
      label: "Самка",
      value: "female"
    }
  ],
  birdAgeDefault: "",
  birdAgeValues: [
    {
      label: "Старше 1 года",
      value: "olderOneYear"
    },
    {
      label: "Младше месяца",
      value: "earlierOneMonth"
    }
  ],
  birdObstaclesDefault: "",
  birdObstaclesValues: [
    {
      label: "Птица была запутана в естественных условиях",
      value: "tangledNaturally"
    },
    {
      label: "Пила водичку из лужи",
      value: "drinkWater"
    }
  ],
  ringsDefaultValues: { "1": {} },
  ringTypeValues: [
    {
      label: "Кольцо",
      value: "ring"
    },
    {
      label: "Большое кольцо",
      value: "bigRing"
    }
  ],
  ringMaterialValues: [
    {
      label: "Алюминиевое кольцо",
      value: "alumineum"
    },
    {
      label: "Стальное кольцо",
      value: "steel"
    }
  ],
  ringColorValues: [
    {
      label: "Серебристый",
      value: "#d7d7d7"
    },
    {
      label: "Темный шифер",
      value: "#242a3b"
    }
  ],
  ringLocationValues: [
    {
      label: "Левая нога ниже колена",
      value: "leftLegBelowKnee"
    },
    {
      label: "Шея",
      value: "neck"
    }
  ],
  birdPhotosDefault: [photoPlaceholder, photoPlaceholder, photoPlaceholder],
  countryDefault: "",
  countryValues: [
    {
      label: "Беларусь",
      value: "belarus"
    },
    {
      label: "Россия",
      value: "russian"
    }
  ],
  regionDefault: "",
  coordinatesDefault: "",
  commentDefault: "",
  dateTimeDefault: "",
  dateTimeInaccuracyDefault: "",
  onBackNavigation: () => {},
  onSubmit: () => {},
  onCurrentPosition: () => {},
  onSearchOnMap: () => {},
  onCurrentDateTime: () => {}
};

export default EditObservation;
