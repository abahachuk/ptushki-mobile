import React from 'react';
import { View, Text, Image, ImageSourcePropType } from 'react-native';

import styles from './styles';

type SlideProps = {
  image: ImageSourcePropType;
  title: string;
  description: string;
};

const SlideView: React.FC<SlideProps> = ({ image, title, description }) => (
  <View style={styles.slideContainer}>
    <View style={styles.slideImgContainer}>
      <Image resizeMode="cover" style={styles.slideImg} source={image} />
    </View>
    <View style={styles.article}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  </View>
);

export default SlideView;
