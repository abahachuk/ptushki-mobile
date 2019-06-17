import React, { PureComponent } from "react";
import ObservationBase from "./ObservationBase";
import { translate } from "../../i18n";

class AddObservation extends PureComponent {
  render() {
    return (
      <ObservationBase
        {...this.props}
        submitButtonText={translate("addEditObservation.sendObservation")}
      />
    );
  }
}
AddObservation.navigationOptions = ObservationBase.navigationOptions;
export default AddObservation;
