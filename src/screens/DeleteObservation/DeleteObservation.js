import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { View, KeyboardAvoidingView } from "react-native";
import { Overlay, Button, Text, Input } from "react-native-elements";
import Popup from "./Popup";
import { translate } from "../../i18n";
import { styles } from "./styles";
import { ObservationService  } from "api";

const service = new ObservationService();

const DeleteObservation = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteDescription, setDeleteDescription] = useState("none");

  const { navigation } = props;
  const onPopupPress = (event, index) => {
    if (index !== 0) {
      setModalVisible(true);
    }
  }

  const onBackPress = () => {
    setModalVisible(false);
  };

  const onDeletePress = () => {
    console.log(navigation.state.params.ObservationItem.id)

    service.deleteObservation(navigation.state.params.ObservationItem.id, deleteDescription).then((response) => {
      console.log(response)
      setModalVisible(false);
      navigation.navigate("Observations");
    })
    .catch((err) => {
      console.log(err)

    })
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
