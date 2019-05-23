import React, { useState } from "react";
import {
  TouchableHighlight,
  TouchableOpacity,
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
  const { photos, updateFieldValue, birdPhotos, setFieldValue } = props;

  const [isUploadPhotoVisible, setUploadPhotoVisible] = useState(false);
  const [isPhotoResized, setPhotoResized] = useState(false);
  const [photoForResizing, setPhotoForResizing] = useState(null);

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

  const resizePhoto = photoPath => {
    setPhotoForResizing(photoPath);
    setPhotoResized(true);
  };
  const onCloseResizedPhoto = () => {
    setPhotoResized(false);
  };
  const onDeletePhoto = () => {
    setPhotoResized(false);
    const filteredPhotos = photos.filter(photo => photo !== photoForResizing);
    setFieldValue({ birdPhotos: filteredPhotos });
  };

  return (
    <ScrollView
      enabled
      horizontal
      contentContainerStyle={styles.photosContainer}
    >
      <Overlay
        isVisible={isPhotoResized}
        overlayBackgroundColor="rgba(0, 0, 0, 0.6)"
        fullScreen
      >
        <TouchableOpacity
          onPress={onCloseResizedPhoto}
          style={styles.resizedPhotoButton}
        >
          <Text style={styles.resizedPhotoButtonText}>
            {translate("editObservation.close")}
          </Text>
        </TouchableOpacity>
        <Image style={styles.birdPhotoResized} source={photoForResizing} />
        <TouchableOpacity
          onPress={onDeletePhoto}
          style={styles.resizedPhotoButton}
        >
          <Text style={styles.resizedPhotoButtonText}>
            {translate("editObservation.delete")}
          </Text>
        </TouchableOpacity>
      </Overlay>
      {isUploadPhotoVisible ? (
        <PhotoChooseWindow
          onPhotoChosen={onPhotoChosen}
          onCloseHandler={onChoosePhotoWindowClose}
        />
      ) : null}
      {photos.map(photoPath => (
        <TouchableHighlight
          key={photoPath}
          onPress={() => resizePhoto(photoPath)}
        >
          <Image style={styles.birdPhoto} source={photoPath} />
        </TouchableHighlight>
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
  birdPhotos: PropTypes.array,
  setFieldValue: PropTypes.func
};
PhotoCarousel.defaultProps = {
  photos: [],
  birdPhotos: [],
  setFieldValue: () => {}
};

export default PhotoCarousel;
