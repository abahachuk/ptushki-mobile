import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/AntDesign";

import { styles } from "../styles";

const Toolbar = props => {
  const { onBackPress, title } = props;

  return (
    <View style={styles.toolbar}>
      <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
        <Icon name="arrowleft" size={30} color="white" />
      </TouchableOpacity>
      <Text style={styles.toolbarTitle}>
        {title}
      </Text>
    </View>
  );
};

Toolbar.propTypes = {
  onBackPress: PropTypes.func
};
Toolbar.defaultProps = {
  onBackPress: () => { }
};

export default Toolbar;