/* eslint-disable react/destructuring-assignment */
import React, { PureComponent } from "react";
import ObservationBase from "./ObservationBase";
import { translate } from "../../i18n";
import InitialDataService from "../../api/InitialData.service";
import extractDataByProperty from "./extractDataByProperty";

class EditObservation extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const initialDataService = new InitialDataService();
    initialDataService.getData().then(data => {
      this.setState({
        birdSexValues: extractDataByProperty(data.sex, "id"),
        birdAgeValues: extractDataByProperty(data.age, "id"),
        birdSpeciesValues: extractDataByProperty(data.species, "species")
      });
    });
  }

  render() {
    return (
      <ObservationBase
        birdSexValues={this.state.birdSexValues}
        birdAgeValues={this.state.birdAgeValues}
        birdSpeciesValues={this.state.birdSpeciesValues}
        {...this.props}
        submitButtonText={translate("addEditObservation.updateObservation")}
      />
    );
  }
}
EditObservation.navigationOptions = ObservationBase.navigationOptions;
export default EditObservation;
