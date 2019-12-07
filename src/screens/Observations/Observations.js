import React, { PureComponent } from 'react';
import { FlatList, View, Text, TouchableOpacity } from "react-native";
import Observation from "./Observation";
import { ObservationService } from "api";

import { translate } from "../../i18n";
import { styles } from "./styles";

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
    this.props.navigation.navigate("AddObservation");
  };
  showObservation = (ObservationItem) => {
    this.props.navigation.navigate("ObservationItem", { ObservationItem });
  };

  static navigationOptions = () => ({
    title: translate("topLevelMenu.observationTitle")
  });

  render() {
    const { observations, loading } = this.state;
    return (!loading && 
      <View style={styles.wrapper}>
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