import React from "react";
import PropTypes from "prop-types";
import { FlatList, View, Text, TouchableOpacity } from "react-native";
import Observation from "./Observation";
import { styles } from "./styles";
import observations from "./Observation/mockData/mockObservations";
import { translate } from "../../i18n";

const Observations = props => {
  const addObservation = () => {
    props.navigation.navigate("AddEditObservation");
  };
  const showObservation = () => {
    props.navigation.navigate("ObservationItem");
  };

  return (
    <View>
      <FlatList
        contentContainerStyle={styles.container}
        data={observations}
        renderItem={({ item }) => <Observation {...item} showObservation={showObservation}/>}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity style={styles.addObservation} onPress={addObservation}>
        <Text style={styles.buttonTextStyle}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

Observations.navigationOptions = () => ({
  title: translate("topLevelMenu.observationTitle")
});
Observations.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  }).isRequired
};

export default Observations;
