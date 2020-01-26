import React from 'react';
import PropTypes from 'prop-types';
import { View, ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';
import { styles } from '../styles';

const Gallery = props => {
  const { photos } = props;

  return (
    photos &&
    photos.length && (
      <View style={styles.images}>
        {photos.map(photoUri => (
          <Image
            style={styles.image}
            source={{ uri: photoUri }}
            key={photoUri}
            PlaceholderContent={<ActivityIndicator />}
          />
        ))}
      </View>
    )
  );
};

Gallery.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string),
};

export default Gallery;
