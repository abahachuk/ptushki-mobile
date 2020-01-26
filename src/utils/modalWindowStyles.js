import { StyleSheet } from 'react-native';

/* eslint  import/prefer-default-export: 0 */
export const modalWindowStyles = StyleSheet.create({
  modal: {
    borderRadius: 4,
    paddingTop: 15,
    paddingBottom: 15,
    marginTop: 10,
    height: 150,
    backgroundColor: '#000000',
  },
  modalText: {
    paddingLeft: 15,
    color: '#ffffff',
    fontSize: 18,
  },
  modalBtn: {
    position: 'absolute',
    bottom: 15,
    right: 10,
    width: 100,
    fontSize: 22,
  },
});
