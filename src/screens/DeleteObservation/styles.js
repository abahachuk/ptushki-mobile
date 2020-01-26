import { StyleSheet } from 'react-native';

/* eslint  import/prefer-default-export: 0 */
export const styles = StyleSheet.create({
  overlay: {
    height: 300,
    padding: 20,
  },
  container: {
    flex: 1,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
    letterSpacing: 1,
  },
  hintText: {
    color: '#626262',
    fontFamily: 'Roboto',
    fontSize: 20,
    lineHeight: 30,
  },
  input: {
    marginTop: 20,
    marginBottom: 20,
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  buttonText: {
    fontFamily: 'sans-serif-medium',
    color: '#5A737F',
    textTransform: 'uppercase',
  },
  actionButtonText: {
    color: 'white',
    textTransform: 'uppercase',
    fontFamily: 'sans-serif-medium',
  },
  actionButtonStyle: {
    backgroundColor: '#546E7A',
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 10,
    paddingBottom: 10,
  },
  dismissButtonStyle: {
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 10,
    paddingBottom: 10,
  },
});
