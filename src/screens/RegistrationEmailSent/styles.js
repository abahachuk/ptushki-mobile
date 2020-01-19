import { StyleSheet } from 'react-native';

import * as colors from 'constants/colors';

/* eslint  import/prefer-default-export: 0 */
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 42,
    marginHorizontal: 15,
  },
  logoImg: {
    alignSelf: 'center',
    aspectRatio: 290 / 153, // assets image size
  },
  headerText: {
    marginVertical: 24,
    fontSize: 12,
    letterSpacing: 0.4,
    lineHeight: 16,
    textAlign: 'center',
    color: colors.black06,
  },
  registrationStatusText: {
    marginVertical: 16,
    fontSize: 20,
    fontFamily: 'sans-serif-medium',
    lineHeight: 24,
    letterSpacing: 0.25,
    color: '#375867',
    textAlign: 'center',
  },
  passwordRecoveryStatusText: {
    marginVertical: 16,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15,
    color: colors.black087,
    textAlign: 'center',
  },
  hintText: {
    marginHorizontal: 20,
    marginVertical: 24,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.25,
    color: colors.black06,
    textAlign: 'center',
  },
  backBtn: {
    marginTop: 4,
    paddingVertical: 1,
  },
  backBtnText: {
    letterSpacing: 1.25,
  },
});
