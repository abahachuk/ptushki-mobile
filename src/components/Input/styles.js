import { StyleSheet } from 'react-native';
import { black087, black06, black032, black, firebrick, white } from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    paddingLeft: 15,
  },
  underlined: {
    borderBottomColor: black,
    borderBottomWidth: 1.5,
  },
  border: {
    borderColor: black032,
    borderWidth: 1,
    borderRadius: 4,
  },
  containerWithErrors: {
    borderColor: firebrick,
  },
  label: {
    position: 'absolute',
    top: 15,
    left: 15,
    fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15,
    color: black06,
  },
  labelFocused: {
    top: -9,
    fontFamily: 'Roboto',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.4,
    paddingHorizontal: 5,
    backgroundColor: white,
  },
  labelWithErrors: {
    color: firebrick,
  },
  textInput: {
    paddingVertical: 15,
    fontSize: 16,
    color: black087,
  },
  error: {
    paddingLeft: 15,
    fontFamily: 'Roboto',
    fontSize: 12,
    letterSpacing: 0.4,
    lineHeight: 16,
    color: firebrick,
    paddingTop: 2,
  },
  showHidePassIcon: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
  inputIcon: {
    width: 24,
    height: 24,
  },
});

export default styles;
