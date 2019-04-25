import React, { Component } from "react";
import { View, KeyboardAvoidingView } from "react-native";
import { Overlay, Button, Text, Input } from "react-native-elements";
import Popup from "./Popup";
import { translate } from "../../i18n";
import { styles } from "./styles";

const deleteObservationHeader = "deleteObservation.deleteObservationHeader";
const deleteObservationReason = "deleteObservation.deleteObservationReason";
const deleteObservationInputLabel =
  "deleteObservation.deleteObservationInputLabel";
const undoAction = "deleteObservation.undoAction";
const deleteObservation = "deleteObservation.deleteObservation";
const editObservation = "deleteObservation.editObservation";

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
      <View>
        <Overlay
          isVisible={modalVisible}
          windowBackgroundColor="rgba(0, 0, 0, .5)"
        >
          <KeyboardAvoidingView style={styles.container} enabled>
            <Text h4 style={styles.headerText}>
              {translate(deleteObservationHeader)}
            </Text>
            <Text style={styles.hintText}>
              {translate(deleteObservationReason)}
            </Text>
            <Input
              label={translate(deleteObservationInputLabel)}
              textContentType="emailAddress"
              containerStyle={styles.input}
            />
            <View style={styles.buttonsContainer}>
              <Button
                title={translate(undoAction)}
                onPress={onBackPress}
                type="clear"
                titleStyle={styles.buttonsText}
              />
              <Button
                title={translate(deleteObservation)}
                onPress={onDeletePress}
                type="clear"
                titleStyle={styles.buttonsText}
              />
            </View>
          </KeyboardAvoidingView>
        </Overlay>

        <Popup
          actions={[translate(editObservation), translate(deleteObservation)]}
          onPress={this.onPopupPress}
        />
      </View>
    );
  }
}

export default DeleteObservation;
