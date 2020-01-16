import React, { Fragment, RefObject } from "react";
import Swiper from "react-native-swiper";
import SlideView from "./SlideView";
import { translate } from "../../i18n";
import styles from "./styles";

interface SlidesProps {
  sliderRef: RefObject<Swiper>,
  onSliderChanged: (index: number) => void
}

const slides = [
  {
    id: "Slides/historyScreen",
    image: require("../../assets/introduction/history_screen.png"),
    title: "introduction.historyScreenTitle",
    description: "introduction.historyScreenText"
  },
  {
    id: "Slides/informationScreen",
    image: require("../../assets/introduction/information_screen.png"),
    title: "introduction.informationScreenTitle",
    description: "introduction.informationScreenText"
  },
  {
    id: "Slides/reasonScreen",
    image: require("../../assets/introduction/reason_screen.png"),
    title: "introduction.reasonScreenTitle",
    description: "introduction.reasonScreenText"
  },
  {
    id: "Slides/tagsScreen",
    image: require("../../assets/introduction/tags_screen.png"),
    title: "introduction.tagsScreenTitle",
    description: "introduction.tagsScreenText"
  }
];

const Slides: React.FC<SlidesProps> = ({ sliderRef, onSliderChanged }) => {

  return (
    <Swiper
      ref={sliderRef}
      showsButtons={false}
      loop={false}
      paginationStyle={styles.pagination}
      dotStyle={styles.dot}
      activeDotStyle={[ styles.dot, styles.backgroundActive ]}
      onIndexChanged={onSliderChanged}
    >
      {slides.map(slide => (
        <Fragment key={slide.id}>
          <SlideView
            image={slide.image}
            title={translate(slide.title)}
            description={translate(slide.description)}
          />
        </Fragment>
      ))}
    </Swiper>
  );
};

export default Slides;
