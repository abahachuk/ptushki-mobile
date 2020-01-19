import { StyleSheet } from 'react-native';

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
    marginTop: 20,
    aspectRatio: 290 / 153, // assets image size
    height: 80,
    alignSelf: 'center',
  },
  headerText: {
    paddingVertical: 18,
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 14,
    letterSpacing: 0.1,
    lineHeight: 18,
    textAlign: 'center',
    color: '#546e7a',
  },
  footer: {
    width: '100%',
  },
  passwordInput: {
    marginTop: 15,
  },
  signInBtn: {
    marginTop: 20,
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
