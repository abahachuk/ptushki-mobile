import { StyleSheet } from 'react-native';

import * as colors from 'constants/colors';

/* eslint  import/prefer-default-export: 0 */
export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  main: {
    width: '100%',
  },
  logoImg: {
    width: 300,
    height: 280,
    alignSelf: 'center',
  },
  headerText: {
    fontFamily: 'Lato-Semibold',
    fontSize: 32,
    lineHeight: 39,
    letterSpacing: 0.24,
    color: colors.blue,
    textAlign: 'left',
  },
  hintText: {
    marginTop: 20,
    marginBottom: 25,
  },
  resetPswBtn: {
    marginTop: 15,
    paddingVertical: 1,
  },
  resetPswBtnText: {
    letterSpacing: 1.25,
  },
  footer: {
    width: '100%',
  },
  backButton: {
    marginBottom: 10,
  },
});
