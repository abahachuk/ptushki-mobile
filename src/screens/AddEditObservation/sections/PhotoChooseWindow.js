import React from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";
import ImagePicker from "react-native-image-picker";
import { Overlay } from "react-native-elements";

import { Button } from "../../../components";
import { translate } from "../../../i18n";
import { styles } from "../styles";

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
export default PhotoChooseWindow;
