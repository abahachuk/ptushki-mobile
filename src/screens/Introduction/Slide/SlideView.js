import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./styles";

const SlideView = ({ image, title, description }) => (
  <View style={styles.main}>
    <View style={styles.imageContainer}>
      <Image resizeMode="cover" style={styles.image} source={image} />
    </View>
    <View style={styles.article}>
      <Text style={styles.screenTitle}>{title}</Text>
      <View style={styles.description}>
        <Text style={styles.screenText}>{description}</Text>
      </View>
    </View>
  </View>
);

export default SlideView;
