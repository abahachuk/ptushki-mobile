import { StyleSheet } from 'react-native';

import * as colors from 'constants/colors';

/* eslint  import/prefer-default-export: 0 */
export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  drawerHeader: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderBottomColor: colors.black012,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  image: {
    height: 100,
    width: 150,
    marginTop: '2%',
    marginBottom: 12,
  },
  userNameText: {
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0.25,
    color: colors.black087,
  },
  userRoleText: {
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.25,
    color: colors.black087,
  },
  contentContainer: {
    paddingHorizontal: 4,
  },
  icon: {
    marginRight: 18,
    fontSize: 16,
    color: colors.blue,
  },
  iconText: {
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.25,
    color: colors.black06,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    paddingHorizontal: 22,
  },
});
