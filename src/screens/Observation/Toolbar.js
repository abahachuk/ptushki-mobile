import React from "react";
import { View, TouchableHighlight, Image, Text } from "react-native";
import PropTypes from "prop-types";

import { translate } from "../../i18n";
import { styles } from "./styles";

const backIcon = require("../../assets/arrow-pointing-to-left.png");

const Toolbar = props => {
  const { onBackPress } = props;

  return (
    <View style={styles.toolbar}>
      <TouchableHighlight style={styles.backButton} onPress={onBackPress}>
        <Image source={backIcon} />
      </TouchableHighlight>
      <Text style={styles.toolbarTitle}>
        {translate("editObservation.editing")}
      </Text>
    </View>
  );
};

Toolbar.propTypes = {
  onBackPress: PropTypes.func.isRequired
};

export default Toolbar;
