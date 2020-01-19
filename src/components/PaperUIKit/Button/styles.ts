import { StyleSheet } from 'react-native';
import { black012, blue } from '../../../constants/colors';

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    lineHeight: 16,
    fontFamily: 'sans-serif-medium'
  },
  colorBlue: {
    color: blue,
  },
  border: {
    borderColor: black012,
    borderWidth: 1,
  },
});

export default styles;
