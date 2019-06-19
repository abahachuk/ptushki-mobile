/* eslint-disable react/destructuring-assignment */
import React, { PureComponent } from "react";
import ObservationBase from "./ObservationBase";
import { translate } from "../../i18n";
import InitialDataService from "../../api/InitialData.service";
import extractDataByProperty from "./extractDataByProperty";

class AddObservation extends PureComponent {
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
        birdSpeciesValues: extractDataByProperty(data.species, "species"),
        birdObstaclesValues: extractDataByProperty(data.condition, "desc_eng"),
        ringTypeValues: extractDataByProperty(data.ringingScheme, "id"),
        countryValues: extractDataByProperty(data.placeCode, "country")
      });
    });
  }

  render() {
    return (
      <ObservationBase
        birdSexValues={this.state.birdSexValues}
        birdAgeValues={this.state.birdAgeValues}
        birdSpeciesValues={this.state.birdSpeciesValues}
        birdObstaclesValues={this.state.birdObstaclesValues}
        ringTypeValues={this.state.ringTypeValues}
        countryValues={this.state.countryValues}
        {...this.props}
        submitButtonText={translate("addEditObservation.sendObservation")}
      />
    );
  }
}
AddObservation.navigationOptions = ObservationBase.navigationOptions;
export default AddObservation;
