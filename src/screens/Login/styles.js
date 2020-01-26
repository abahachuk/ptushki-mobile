import { StyleSheet } from 'react-native';

import * as colors from 'constants/colors';

/* eslint  import/prefer-default-export: 0 */
export const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  loginContainer: {
    width: '100%',
  },
  headerContainer: {
    flexDirection: 'row',
  },
  infoImgContainer: {
    position: 'absolute',
    top: 20,
    left: 0,
  },
  infoImg: {
    width: 22,
    height: 22,
  },
  logoImg: {
    marginTop: 30,
    aspectRatio: 290 / 153, // assets image size
    height: 80,
    alignSelf: 'center',
  },
  headerText: {
    paddingVertical: 18,
    fontSize: 12,
    letterSpacing: 0.4,
    lineHeight: 16,
    textAlign: 'center',
    color: colors.black06,
  },
  footer: {
    width: '100%',
  },
  passwordInput: {
    marginTop: 15,
  },
  signInBtn: {
    marginTop: 20,
    paddingVertical: 1,
  },
  signInBtnText: {
    letterSpacing: 1.25,
  },
  signUpBtn: {
    marginTop: 15,
  },
  signUpBorder: {
    borderColor: 'rgba(0,0,0,0.12)',
  },
  restorePswBtn: {
    marginTop: 10,
  },
  buttonText: {
    letterSpacing: 0,
  },
});
