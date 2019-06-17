import React from "react";
import PropTypes from "prop-types";
import { View, ActivityIndicator } from "react-native";
import { Image } from "react-native-elements";
import { styles } from "../styles";

const HeaderImage = props => {
  const { photos } = props;

  return (
    photos &&
    photos.length && (
      <View>
        <Image
          style={styles.backImage}
          source={{ uri: photos[0] }}
          PlaceholderContent={<ActivityIndicator />}
        />
      </View>
    )
  );
};

HeaderImage.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string)
};

export default HeaderImage;
