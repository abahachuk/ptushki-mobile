import React, { useState } from "react";
import { TouchableOpacity, Image, ScrollView } from "react-native";
import PropTypes from "prop-types";

import PhotoResized from "./PhotoResized";
import PhotoChooseWindowPopup from "./PhotoChooseWindowPopup";
import { styles } from "../styles";

const photoPlaceholder = require("../../../assets/photoPlaceholder.png");

const PhotoCarousel = props => {
  const { updateFieldValue, birdPhotos, setFieldValue } = props;

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
    const filteredPhotos = birdPhotos.filter(
      photo => photo !== photoForResizing
    );
    setFieldValue({ birdPhotos: filteredPhotos });
  };

  return (
    <ScrollView
      enabled
      horizontal
      contentContainerStyle={styles.photosContainer}
    >
      {isPhotoResized ? (
        <PhotoResized
          onCloseResizedPhoto={onCloseResizedPhoto}
          onDeletePhoto={onDeletePhoto}
          photoForResizing={photoForResizing}
        />
      ) : null}
      {isUploadPhotoVisible ? (
        <PhotoChooseWindowPopup
          onPhotoChosen={onPhotoChosen}
          onCloseHandler={onChoosePhotoWindowClose}
        />
      ) : null}
      {birdPhotos.map(photoPath => (
        <TouchableOpacity
          key={photoPath}
          onPress={() => resizePhoto(photoPath)}
        >
          <Image style={styles.birdPhoto} source={photoPath} />
        </TouchableOpacity>
      ))}
      <TouchableOpacity onPress={onLoadPhotoPress}>
        <Image style={styles.birdPhoto} source={photoPlaceholder} />
      </TouchableOpacity>
    </ScrollView>
  );
};

PhotoCarousel.propTypes = {
  updateFieldValue: PropTypes.func.isRequired,
  birdPhotos: PropTypes.array,
  setFieldValue: PropTypes.func
};
PhotoCarousel.defaultProps = {
  birdPhotos: [],
  setFieldValue: () => {}
};

export default PhotoCarousel;
