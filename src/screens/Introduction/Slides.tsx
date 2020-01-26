import React, { Fragment, RefObject } from 'react';
import Swiper from 'react-native-swiper';
import SlideView from './SlideView';
import { translate } from '../../i18n';
import { styles } from './styles';

interface SlidesProps {
  sliderRef: RefObject<Swiper>;
  onSliderChanged: (index: number) => void;
}

const Slides: React.FC<SlidesProps> = ({ sliderRef, onSliderChanged }) => {
  const slides = [
    {
      id: 'Slides/historyScreen',
      image: require('../../assets/introduction/history_screen.png'),
      title: translate('introduction.historyScreenTitle'),
      description: translate('introduction.historyScreenText'),
    },
    {
      id: 'Slides/informationScreen',
      image: require('../../assets/introduction/information_screen.png'),
      title: translate('introduction.informationScreenTitle'),
      description: translate('introduction.informationScreenText'),
    },
    {
      id: 'Slides/reasonScreen',
      image: require('../../assets/introduction/reason_screen.png'),
      title: translate('introduction.reasonScreenTitle'),
      description: translate('introduction.reasonScreenText'),
    },
    {
      id: 'Slides/tagsScreen',
      image: require('../../assets/introduction/tags_screen.png'),
      title: translate('introduction.tagsScreenTitle'),
      description: translate('introduction.tagsScreenText'),
    },
  ];

  return (
    <Swiper
      ref={sliderRef}
      showsButtons={false}
      loop={false}
      paginationStyle={styles.pagination}
      dotStyle={styles.dot}
      activeDotStyle={[styles.dot, styles.backgroundActive]}
      onIndexChanged={onSliderChanged}
    >
      {slides.map(slide => (
        <Fragment key={slide.id}>
          <SlideView image={slide.image} title={slide.title} description={slide.description} />
        </Fragment>
      ))}
    </Swiper>
  );
};

export default Slides;
