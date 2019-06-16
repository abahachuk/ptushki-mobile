import React, { PureComponent } from "react";
import ObservationBase from "./ObservationBase";
import { translate } from "../../i18n";

class EditObservation extends PureComponent {
  render() {
    return (
      <ObservationBase
        {...this.props}
        submitButtonText={translate("addEditObservation.updateObservation")}
      />
    );
  }
}
EditObservation.navigationOptions = ObservationBase.navigationOptions;
export default EditObservation;
