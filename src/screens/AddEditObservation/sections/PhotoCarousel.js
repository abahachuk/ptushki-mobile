import React, { useState } from "react";
import {
  TouchableHighlight,
  Image,
  ScrollView,
  Text,
  View
} from "react-native";
import PropTypes from "prop-types";
import ImagePicker from "react-native-image-picker";
import { Overlay } from "react-native-elements";

import { Button } from "../../../components";
import { translate } from "../../../i18n";
import { styles } from "../styles";

const photoPlaceholder = require("../../../assets/photoPlaceholder.png");

const PhotoChooseWindow = props => {
  const { onPhotoChosen, onCloseHandler } = props;

  const onOpenGallery = () => {
    ImagePicker.launchImageLibrary({}, onPhotoChosen);
  };

  const onTakePhoto = () => {
    ImagePicker.launchCamera({}, onPhotoChosen);
  };

  const onClose = () => {
    onCloseHandler();
  };

  return (
    <Overlay
      height={400}
      width={280}
      borderRadius={6}
      contentContainerStyle={styles.overlay}
    >
      <Text style={styles.overlayTitle}>
        {translate("editObservation.addPhotoTitle")}
      </Text>
      <Text style={styles.overlayDescription}>
        {translate("editObservation.addPhotoDescription")}
      </Text>
      <Button
        wrapperStyles={styles.overlayGallery}
        onPress={onOpenGallery}
        caption={translate("editObservation.gallery")}
        appearance="Dark"
      />
      <Button
        wrapperStyles={styles.overlayTakePhoto}
        onPress={onTakePhoto}
        caption={translate("editObservation.makePhoto")}
        appearance="Light"
      />
      <View style={styles.overlayCloseWindowContainer}>
        <Button
          wrapperStyles={styles.overlayCloseWindow}
          onPress={onClose}
          caption={translate("editObservation.close")}
          appearance="Borderless"
        />
      </View>
    </Overlay>
  );
};
PhotoChooseWindow.propTypes = {
  onPhotoChosen: PropTypes.func,
  onCloseHandler: PropTypes.func
};
PhotoChooseWindow.defaultProps = {
  onPhotoChosen: () => {},
  onCloseHandler: () => {}
};

const PhotoCarousel = props => {
  const { photos, updateFieldValue, birdPhotos } = props;

  const [isUploadPhotoVisible, setUploadPhotoVisible] = useState(false);

  const onLoadPhotoPress = () => {
    setUploadPhotoVisible(true);
  };

  const onChoosePhotoWindowClose = () => {
    setUploadPhotoVisible(false);
  };

  const onPhotoChosen = response => {
    if (response.uri) {
      const imgSrc = { uri: response.uri };
      updateFieldValue({ birdPhotos: birdPhotos.concat(imgSrc) });
      onChoosePhotoWindowClose();
    }
  };

  return (
    <ScrollView
      enabled
      horizontal
      contentContainerStyle={styles.photosContainer}
    >
      {isUploadPhotoVisible ? (
        <PhotoChooseWindow
          onPhotoChosen={onPhotoChosen}
          onCloseHandler={onChoosePhotoWindowClose}
        />
      ) : null}
      {photos.map(photoPath => (
        <Image style={styles.birdPhoto} key={photoPath} source={photoPath} />
      ))}
      <TouchableHighlight onPress={onLoadPhotoPress}>
        <Image style={styles.birdPhoto} source={photoPlaceholder} />
      </TouchableHighlight>
    </ScrollView>
  );
};

PhotoCarousel.propTypes = {
  photos: PropTypes.array,
  updateFieldValue: PropTypes.func.isRequired,
  birdPhotos: PropTypes.array
};
PhotoCarousel.defaultProps = {
  photos: [],
  birdPhotos: []
};

export default PhotoCarousel;
