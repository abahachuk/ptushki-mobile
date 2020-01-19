import React from 'react';
import { Text, View } from 'react-native';

import { styles } from '../styles';

const getDescriptionBlock = (headerText, descriptionText) => (
  <View>
    <Text style={styles.headerText}>{headerText}</Text>
    <Text style={styles.descriptionText}>{descriptionText}</Text>
  </View>
);
export default getDescriptionBlock;
