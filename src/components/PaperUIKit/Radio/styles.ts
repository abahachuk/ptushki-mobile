import { StyleSheet } from 'react-native';
// import { black087 } from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    height: 48,
  },
  row: {
    minHeight: 48,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxContainer: {
    paddingRight: 8,
  },
  label: {
    flex: 1,
    flexWrap: 'wrap',
    // color: black087,
    fontFamily: 'Roboto',
    fontSize: 16,
    letterSpacing: 0.15,
    lineHeight: 24,
  },
});

export default styles;
