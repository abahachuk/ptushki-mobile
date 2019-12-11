import React from "react";
import Swiper from "react-native-swiper";
import HistorySlide from "./HistorySlide";
import InformationSlide from "./InformationSlide";

import styles from "./styles";
import ReasonSlide from "./ReasonSlide";
import TagsSlide from "./TagsSlide";

const Slides = ({ sliderRef, onSliderChanged }) => {
  return (
    <Swiper
      ref={sliderRef}
      showsButtons={false}
      loop={false}
      paginationStyle={styles.box}
      dotStyle={{ ...styles.dot, ...styles.background }}
      activeDotStyle={{ ...styles.dot, ...styles.backgroundActive }}
      onIndexChanged={onSliderChanged}
    >
      <HistorySlide />
      <InformationSlide />
      <ReasonSlide />
      <TagsSlide />
    </Swiper>
  );
};

export default Slides;
