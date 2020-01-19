import { StyleSheet } from 'react-native';

/* eslint-disable-next-line */
import * as colors from "constants/colors";

const { dimGray, white, blue } = colors;

/* eslint  import/prefer-default-export: 0 */
export const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 36,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonDark: {
    backgroundColor: blue,
  },
  buttonLight: {
    backgroundColor: white,
    borderWidth: 1,
    borderColor: dimGray,
  },
  buttonBorderless: {},
  buttonText: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 1.25,
    lineHeight: 16,
    color: dimGray,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  buttonTextDark: {
    color: white,
  },
});
