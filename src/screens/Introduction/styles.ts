import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { blackOpacity, blueLight, blue } from '../../constants/colors';

interface Styles {
  container: ViewStyle;
  closeBtnContainer: ViewStyle;
  closeBtnImage: ImageStyle;
  footer: ViewStyle;
  slideContainer: ViewStyle;
  slideImgContainer: ViewStyle;
  slideImg: ImageStyle;
  article: ViewStyle;
  title: TextStyle;
  descriptionContainer: ViewStyle;
  description: TextStyle;
  pagination?: ViewStyle;
  dot: ViewStyle;
  backgroundActive: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  closeBtnContainer: {
    position: 'absolute',
    top: 30,
    right: 18,
    zIndex: 100,
  },
  closeBtnImage: {
    width: 16,
    height: 16,
  },
  footer: {
    width: '100%',
    paddingHorizontal: 20,
    paddingBottom: 25,
  },
  slideContainer: {
    flex: 1,
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 50,
  },
  slideImgContainer: {
    flex: 1,
    width: '100%',
    overflow: 'hidden',
  },
  slideImg: {
    width: 'auto',
    height: '100%',
  },
  article: {
    paddingTop: 2,
    width: '85%',
    minHeight: '27%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Lato-Semibold',
    fontSize: 24,
    lineHeight: 26,
    color: blue,
  },
  descriptionContainer: {
    paddingTop: 5,
    flex: 1,
    width: '82%',
    justifyContent: 'center',
  },
  description: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 12,
    letterSpacing: 0.4,
    lineHeight: 16,
    color: blackOpacity,
  },
  dot: {
    width: 6,
    height: 6,
    marginRight: 9,
    marginLeft: 9,
    borderRadius: 5,
    backgroundColor: blueLight,
  },
  backgroundActive: {
    backgroundColor: blue,
  },
  pagination: {
    bottom: 20,
  },
});

export default styles;
