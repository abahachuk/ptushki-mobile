import { StyleSheet } from 'react-native';
import { hexGray, blue } from '../../../constants/colors';

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
  },
  colorBlue: {
    color: blue,
  },
  border: {
    borderColor: hexGray,
    borderWidth: 1,
  },
});

export default styles;
