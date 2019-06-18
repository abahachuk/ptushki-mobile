import React from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";
import { Overlay } from "react-native-elements";

import { Button } from "../../../components";
import { translate } from "../../../i18n";
import { styles } from "../styles";

const DeclineChangesPopup = props => {
  const { onExitHandler, onCancelHandler, descriptionText } = props;

  const onExit = () => {
    onExitHandler();
  };
  const onCancel = () => {
    onCancelHandler();
  };

  return (
    <Overlay
      isVisible
      height={218}
      width={280}
      borderRadius={6}
      overlayStyle={styles.declineChangesContent}
    >
      <View style={styles.declineChangesContainer}>
        <View style={styles.declineChangesMainContent}>
          <Text style={styles.declineChangesTitle}>
            {translate("addEditObservation.declineChangesTitle")}
          </Text>
          <Text style={styles.declineChangesDescription}>
            {descriptionText}
            {translate("addEditObservation.declineChangesDescription")}
          </Text>
        </View>
        <View style={styles.declineChangesButtonsBlock}>
          <Button
            wrapperStyles={styles.declineChangesExitButton}
            onPress={onExit}
            caption={translate("addEditObservation.applyDeclineChanges")}
            appearance="Borderless"
          />
          <Button
            wrapperStyles={styles.declineChangesCancelButton}
            onPress={onCancel}
            caption={translate("addEditObservation.cancelDeclineChanges")}
            appearance="Dark"
          />
        </View>
      </View>
    </Overlay>
  );
};
DeclineChangesPopup.propTypes = {
  descriptionText: PropTypes.string,
  onExitHandler: PropTypes.func,
  onCancelHandler: PropTypes.func
};
DeclineChangesPopup.defaultProps = {
  descriptionText: "",
  onExitHandler: () => {},
  onCancelHandler: () => {}
};
export default DeclineChangesPopup;
