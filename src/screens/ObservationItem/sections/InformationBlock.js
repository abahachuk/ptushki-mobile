import React from "react";
import { Text, View } from "react-native";

import { styles } from "../styles";

const getInformationBlock = (headerText, value) => (
  <View style={styles.wrap}>
    <Text style={styles.header}>{headerText}</Text>
    <Text style={styles.text}>{value}</Text>
  </View>
);
export default getInformationBlock;
