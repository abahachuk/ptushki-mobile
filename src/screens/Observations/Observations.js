import React, { PureComponent } from 'react';
import PropTypes from "prop-types";
import { FlatList, View, Text, TouchableOpacity } from "react-native";
import Observation from "./Observation";
import { styles } from "./styles";
import observations2 from "./Observation/mockData/mockObservations";
import { translate } from "../../i18n";
import { ObservationService } from "api";

const service = new ObservationService();
export default class Observations extends PureComponent {
  constructor() {
    super();

    this.state = {
      observations: [],
      loading: true
    }
  }
  componentDidMount() {
    service.getObservations()
      .then(response => {
        this.setState({
        observations: response.content,
        loading: false
        })
      })
      .catch(err => console.log(err));
  }

  addObservation = () => {
    this.props.navigation.navigate("AddEditObservation");
  };
  showObservation = (ObservationItem) => {
    this.props.navigation.navigate("ObservationItem", { ObservationItem });
  };

  static navigationOptions = () => ({
    title: translate("topLevelMenu.observationTitle")
  })

  render() {
    const { observations, loading } = this.state;
    return (!loading && 
      <View>
        <FlatList
          contentContainerStyle={styles.container}
          data={observations}
          renderItem={
            ({ item }) =>
              <Observation
                observationItem={item}
                showObservation={this.showObservation}
              />
          }
          keyExtractor={item => item.id}
        />
        <TouchableOpacity
          style={styles.addObservation}
          onPress={this.addObservation}>
          <Text style={styles.buttonTextStyle}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// Observations.propTypes = {
//   navigation: PropTypes.shape({
//     navigate: PropTypes.func
//   }).isRequired
// };
