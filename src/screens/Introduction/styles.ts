import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import * as colors from '../../constants/colors';

interface Styles {
  container: ViewStyle;
  closeBtnContainer: ViewStyle;
  closeIcon: TextStyle;
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
    top: 20,
    right: 12,
    zIndex: 100,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeIcon: {
    fontSize: 24,
    color: colors.black054,
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
    color: colors.blue,
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
    color: colors.black087,
  },
  dot: {
    width: 6,
    height: 6,
    marginRight: 9,
    marginLeft: 9,
    borderRadius: 5,
    backgroundColor: colors.blueLight,
  },
  backgroundActive: {
    backgroundColor: colors.blue,
  },
  pagination: {
    bottom: 20,
  },
});

const hitSlop = { top: 10, bottom: 10, right: 10, left: 10 };

export { styles, hitSlop };
