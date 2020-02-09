import { StyleSheet } from 'react-native';

import * as colors from 'constants/colors';
/* eslint  import/prefer-default-export: 0 */
export const modalWindowStyles = StyleSheet.create({
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.transparent,
  },
  modal: {
    width: '90%',
    marginTop: 10,
    paddingTop: 16,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 4,
    borderRadius: 4,
    backgroundColor: colors.white,
  },
  modalHeaderText: {
    marginBottom: 12,
    fontSize: 18,
    lineHeight: 22,
    fontFamily: 'sans-serif-medium',
    color: colors.black,
  },
  modalText: {
    marginBottom: 12,
    paddingRight: 16,
    fontSize: 14,
    lineHeight: 20,
    color: colors.black,
  },
  modalBtn: {
    alignSelf: 'flex-end',
  },
  modalBtnText: {
    fontFamily: 'sans-serif-medium',
    fontSize: 12,
  },
});
