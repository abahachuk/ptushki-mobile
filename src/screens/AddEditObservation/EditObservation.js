import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import ObservationBase from "./ObservationBase";
import { translate } from "../../i18n";

const EditObservation = props => {
  return (
    <ObservationBase
      {...props}
      submitButtonText={translate("addEditObservation.updateObservation")}
    />
  );
};
EditObservation.navigationOptions = ({ navigation }) => {
  return {
    title: translate("addEditObservation.navHeaderTitleEdit"),
    headerLeft: (
      <Icon
        name="arrowleft"
        size={30}
        color="white"
        style={{ padding: 15 }}
        onPress={() => navigation.goBack()}
      />
    )
  };
};
export default EditObservation;
