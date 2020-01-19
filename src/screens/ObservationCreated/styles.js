import { StyleSheet } from 'react-native';

/* eslint  import/prefer-default-export: 0 */
export const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  descriptionBlock: {
    marginLeft: 18,
    marginTop: 20,
  },
  title: {
    fontFamily: 'sans-serif-medium',
    fontSize: 24,
    color: 'black',
  },
  description: {
    marginTop: 10,
    fontSize: 16,
    lineHeight: 20,
  },
  birdSpecies: {
    color: 'black',
    fontFamily: 'sans-serif-medium',
    fontSize: 24,
  },
  buttonsBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    marginBottom: 14,
  },
  observationInfoContainer: {
    marginTop: 12,
    paddingHorizontal: 14,
  },
  observationInfoUnit: {
    marginTop: 8,
  },
  observationInfoTitle: {
    color: 'black',
    fontSize: 20,
  },
  observationInfoDescription: {
    marginTop: 4,
  },
  button: {
    height: 36,
    width: 158,
  },
});
