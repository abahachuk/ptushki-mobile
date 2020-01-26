import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import ImagePicker from 'react-native-image-picker';
import { Overlay } from 'react-native-elements';

import { Button } from '../../../components';
import { translate } from '../../../i18n';
import { styles } from '../styles';

const PhotoChooseWindowPopup = props => {
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
    <Overlay height={400} width={280} borderRadius={6} overlayStyle={styles.overlay}
    >
      <Text style={styles.overlayTitle}>{translate('addEditObservation.addPhotoTitle')}</Text>
      <Text style={styles.overlayDescription}>
        {translate('addEditObservation.addPhotoDescription')}
      </Text>
      <Button
        wrapperStyles={styles.overlayGallery}
        onPress={onOpenGallery}
        caption={translate('addEditObservation.gallery')}
        appearance="Dark"
      />
      <Button
        wrapperStyles={styles.overlayTakePhoto}
        onPress={onTakePhoto}
        caption={translate('addEditObservation.makePhoto')}
        appearance="Light"
      />
      <View style={styles.overlayCloseWindowContainer}>
        <Button
          wrapperStyles={styles.overlayCloseWindow}
          customTextStyles={styles.overlayCloseWindowText}
          onPress={onClose}
          caption={translate('addEditObservation.close')}
          appearance="Borderless"
        />
      </View>
    </Overlay>
  );
};
PhotoChooseWindowPopup.propTypes = {
  onPhotoChosen: PropTypes.func,
  onCloseHandler: PropTypes.func,
};
PhotoChooseWindowPopup.defaultProps = {
  onPhotoChosen: () => {},
  onCloseHandler: () => {},
};
export default PhotoChooseWindowPopup;
