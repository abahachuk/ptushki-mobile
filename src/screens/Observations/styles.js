import { StyleSheet, Dimensions } from 'react-native';
import { dimGray, white } from 'constants/colors';

const { width } = Dimensions.get('window'); // dirty solution

/* eslint  import/prefer-default-export: 0 */
export const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    height: '100%',
  },
  container: {
    width,
    paddingVertical: 5,
  },
  addObservation: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: dimGray,
    borderRadius: 50,
    height: 56,
    width: 56,
    position: 'absolute',
    bottom: 33,
    right: 18,
  },
  buttonTextStyle: {
    color: white,
    fontSize: 25,
    marginBottom: 5,
  },
});
