import React from "react";
import { TouchableOpacity, Image, Text } from "react-native";
import PropTypes from "prop-types";
import { Overlay } from "react-native-elements";

import { translate } from "../../../i18n";
import { styles } from "../styles";

const PhotoResized = props => {
  const { onCloseResizedPhoto, onDeletePhoto, photoForResizing } = props;

  return (
    <Overlay overlayBackgroundColor="rgba(0, 0, 0, 0.6)" fullScreen>
      <TouchableOpacity
        onPress={onCloseResizedPhoto}
        style={styles.resizedPhotoButton}
      >
        <Text style={styles.resizedPhotoButtonText}>
          {translate("addEditObservation.close")}
        </Text>
      </TouchableOpacity>
      <Image style={styles.birdPhotoResized} source={photoForResizing} />
      <TouchableOpacity
        onPress={onDeletePhoto}
        style={styles.resizedPhotoButton}
      >
        <Text style={styles.resizedPhotoButtonText}>
          {translate("addEditObservation.delete")}
        </Text>
      </TouchableOpacity>
    </Overlay>
  );
};
PhotoResized.propTypes = {
  onCloseResizedPhoto: PropTypes.func,
  onDeletePhoto: PropTypes.func,
  photoForResizing: PropTypes.object
};
PhotoResized.defaultProps = {
  onCloseResizedPhoto: () => {},
  onDeletePhoto: () => {},
  photoForResizing: null
};
export default PhotoResized;
