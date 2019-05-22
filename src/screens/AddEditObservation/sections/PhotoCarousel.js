import React from "react";
import { TouchableHighlight, Image, ScrollView } from "react-native";
import PropTypes from "prop-types";

import { styles } from "../styles";

const photoPlaceholder = require("../../../assets/photoPlaceholder.png");

const PhotoCarousel = props => {
  const { photos, onLoadPhotoPress } = props;
  return (
    <ScrollView
      enabled
      horizontal
      contentContainerStyle={styles.photosContainer}
    >
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
  onLoadPhotoPress: PropTypes.func.isRequired
};
PhotoCarousel.defaultProps = {
  photos: []
};

export default PhotoCarousel;
