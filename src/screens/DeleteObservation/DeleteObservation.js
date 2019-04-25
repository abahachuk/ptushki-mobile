import React, { Component } from "react";
import { Text, View, KeyboardAvoidingView } from "react-native";
import { Overlay } from "react-native-elements";
import { styles } from "./styles";
import { Button, Input } from "../../components";
import { translate } from "../../i18n";
import Popup from "./Popup";

const DeleteObservationHeader = translate(
  "deleteObservation.deleteObservationHeader"
);
const deleteObservationReason = translate(
  "deleteObservation.deleteObservationReason"
);
const deleteObservationInputLabel = translate(
  "deleteObservation.deleteObservationInputLabel"
);
const undoAction = translate("deleteObservation.undoAction");
const deleteObservation = translate("deleteObservation.deleteObservation");
const editObservation = translate("deleteObservation.editObservation");

class DeleteObservation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };

    this.onPopupPress = this.onPopupPress.bind(this);
  }

  onPopupPress(event, index) {
    if (index !== 0) {
      this.setModalVisible(true);
    }
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    const { modalVisible } = this.state;
    const onBackPress = () => {
      this.setModalVisible(false);
    };
    const onDeletePress = () => {
      this.setModalVisible(false);
    };

    return (
      <View style={{ marginTop: 22 }}>
        <Overlay
          animationType="slide"
          isVisible={modalVisible}
          windowBackgroundColor="rgba(255, 255, 255, .5)"
        >
          <KeyboardAvoidingView style={styles.container} enabled>
            <Text style={styles.headerText}>{DeleteObservationHeader}</Text>
            <Text>{deleteObservationReason}</Text>
            <Input
              label={deleteObservationInputLabel}
              textContentType="emailAddress"
            />
            <Button
              caption={undoAction}
              onPress={onBackPress}
              appearance="Light"
            />
            <Button
              caption={deleteObservation}
              onPress={onDeletePress}
              appearance="Light"
            />
          </KeyboardAvoidingView>
        </Overlay>

        <Popup
          actions={[editObservation, deleteObservation]}
          onPress={this.onPopupPress}
        />
      </View>
    );
  }
}

export default DeleteObservation;
