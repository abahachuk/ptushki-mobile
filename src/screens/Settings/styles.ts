import { StyleSheet } from 'react-native';
import { black087, black06 } from '../../constants/colors';

const styles = StyleSheet.create({
  scrollContainer: {
    width: '100%',
  },
  container: {
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
    paddingTop: 10,
    paddingBottom: 20,
  },
  header: {
    fontSize: 25,
    lineHeight: 30,
    color: black087,
    fontFamily: 'Lato-Semibold',
  },
  section: {
    marginTop: 10,
    marginBottom: 5,
  },
  title: {
    color: black087,
    fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15,
    marginBottom: 15,
  },
  label: {
    color: black06,
    fontFamily: 'Roboto',
    fontSize: 12,
    padding: 0,
    marginTop: 10,
  },
  input: {
    marginBottom: 13,
  },
  buttonContainer: {
    marginBottom: 10,
    marginTop: 15,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  buttonStyle: {
    width: 150,
  },
});

export default styles;
