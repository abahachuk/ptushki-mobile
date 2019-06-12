/* eslint-disable */
import React, { PureComponent } from 'react';
import { FlatList, View, TouchableOpacity } from "react-native";
import Observation from "./Observation";
import { ObservationService } from "api";

import { translate } from "../../i18n";
import { styles } from "./styles";
import { Overlay, Button, Text, Input } from "react-native-elements";
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

  
  static navigationOptions () {
    title: translate("topLevelMenu.observationTitle")
  }
  
  render() {
    addObservation = () => {
      this.props.navigation.navigate("AddObservation");
    };
    showObservation = (ObservationItem) => {
      this.props.navigation.navigate("ObservationItem", { ObservationItem });
    };
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