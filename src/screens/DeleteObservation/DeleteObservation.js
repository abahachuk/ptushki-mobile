import React, { Component } from "react";
import { View, KeyboardAvoidingView } from "react-native";
import { Overlay, Button, Text, Input } from "react-native-elements";
import Popup from "./Popup";
import { translate } from "../../i18n";
import { styles } from "./styles";

class DeleteObservation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };

    this.onPopupPress = this.onPopupPress.bind(this);
  }

  onPopupPress(event, index) {
    if (index === 0) {
      // eslint-disable-next-line react/destructuring-assignment, react/prop-types
      this.props.navigation.navigate("EditObservation");
    }

    if (index === 1) {
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
              {translate("deleteObservation.deleteObservationHeader")}
            </Text>
            <Text style={styles.hintText}>
              {translate("deleteObservation.deleteObservationReason")}
            </Text>
            <Input
              label={translate("deleteObservation.deleteObservationInputLabel")}
              textContentType="emailAddress"
              containerStyle={styles.input}
            />
            <View style={styles.buttonsContainer}>
              <Button
                title={translate("deleteObservation.undoAction")}
                onPress={onBackPress}
                type="clear"
                titleStyle={styles.buttonsText}
              />
              <Button
                title={translate("deleteObservation.deleteObservation")}
                onPress={onDeletePress}
                type="clear"
                titleStyle={styles.buttonsText}
              />
            </View>
          </KeyboardAvoidingView>
        </Overlay>

        <Popup
          actions={[
            translate("deleteObservation.editObservation"),
            translate("deleteObservation.deleteObservation")
          ]}
          onPress={this.onPopupPress}
        />
      </View>
    );
  }
}

export default DeleteObservation;
