import { StyleSheet } from 'react-native';

import * as colors from 'constants/colors';

/* eslint  import/prefer-default-export: 0 */
export const styles = StyleSheet.create({
  scrollContainer: {
    paddingTop: 20,
    paddingBottom: 12,
    width: '100%',
  },
  container: {
    justifyContent: 'space-between',
    paddingRight: 18,
    paddingLeft: 18,
  },
  headerText: {
    fontFamily: 'Lato-Semibold',
    fontSize: 32,
    lineHeight: 39,
    letterSpacing: 0.24,
    paddingBottom: 20,
    color: colors.blue,
  },
  hintText: {
    marginTop: 15,
    marginBottom: 15,
    color: colors.black06,
    fontFamily: 'Roboto',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.4,
  },
  belowInput: {
    marginTop: 15,
  },
  lastInput: {
    marginBottom: 20,
  },
  footerBtn: {
    marginTop: 15,
    paddingVertical: 1,
  },
});
