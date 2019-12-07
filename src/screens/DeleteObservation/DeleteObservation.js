import React, { useState } from "react";
import PropTypes from "prop-types";
import { View, KeyboardAvoidingView, Alert } from "react-native";
import { Overlay, Button, Text, Input } from "react-native-elements";
/* eslint-disable-next-line */
import { ObservationService } from "api";
import Popup from "./Popup";
import { translate } from "../../i18n";
import { styles } from "./styles";

const service = new ObservationService();

const DeleteObservation = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteDescription, setDeleteDescription] = useState("none");

  const { navigation } = props;
  const { ObservationItem } = navigation.state.params;

  const onPopupPress = (event, index) => {
    if (index === 0) {
      navigation.navigate("EditObservation", { ObservationItem });
    }

    if (index === 1) {
      this.setModalVisible(true);
    }
  };

  const onBackPress = () => {
    setModalVisible(false);
  };

  const onDeletePress = () => {
    service
      .deleteObservation(ObservationItem.id, deleteDescription)
      .then(response => {
        setModalVisible(false);
        navigation.navigate("Observations");
      })
      .catch(err => {
        console.log("DeleteObservation error: ", err);
        Alert.alert(translate("deleteObservation.errorOnDelete"));
      });
  };

  return (
    <View>
      <Overlay
        isVisible={modalVisible}
        windowBackgroundColor="rgba(0, 0, 0, .5)"
        overlayStyle={styles.overlay}
      >
        <KeyboardAvoidingView style={styles.container} enabled>
          <Text h4 style={styles.headerText}>
            {translate("deleteObservation.deleteObservationHeader")}
          </Text>
          <Text style={styles.hintText}>
            {translate("deleteObservation.deleteObservationReason")}
          </Text>
          <Input
            label={translate("deleteObservation.deleteObservationInputLabel")}
            onChangeText={setDeleteDescription}
            textContentType="none"
            containerStyle={styles.input}
          />
          <View style={styles.buttonsContainer}>
            <Button
              title={translate("deleteObservation.undoAction")}
              onPress={onBackPress}
              type="clear"
              titleStyle={styles.buttonText}
              buttonStyle={styles.dismissButtonStyle}
            />
            <Button
              title={translate("deleteObservation.deleteObservation")}
              onPress={onDeletePress}
              titleStyle={styles.actionButtonText}
              buttonStyle={styles.actionButtonStyle}
            />
          </View>
        </KeyboardAvoidingView>
      </Overlay>

      <Popup
        actions={[
          translate("deleteObservation.editObservation"),
          translate("deleteObservation.deleteObservation")
        ]}
        onPress={onPopupPress}
      />
    </View>
  );
};

DeleteObservation.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  }).isRequired
};

export default DeleteObservation;
