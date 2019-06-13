import { StyleSheet } from "react-native";
import * as colors from "../../constants/colors";

/* eslint  import/prefer-default-export: 0 */
export const styles = StyleSheet.create({
    ObservationItem: {
        backgroundColor: colors.white,
        fontFamily: "Roboto",
    },
    species: {
        marginVertical: 15,
        color: colors.textBlack,
        fontSize: 24,
        lineHeight: 24,
    },
    backImage: {
        height: 220
    },
    images: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginHorizontal: 16
    },
    image: {
        height: 120,
        width: 120,
        marginRight: 10
    },
    wrap: {
        marginBottom: 10,
        marginHorizontal: 16
    },
    header: {
        marginVertical: 5,
        color: colors.textBlack,
        fontSize: 16,
        letterSpacing: 0.15,
        lineHeight: 24
    },
    text: {
        color: colors.hexGray,
        fontSize: 14,
        letterSpacing: 0.25,
        lineHeight: 20
    },
    ring: {
        marginVertical: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    rightNumberWrap: {
        marginLeft: 16,
        marginTop: 5,
        paddingHorizontal: 5,
        paddingVertical: 2,
        backgroundColor: colors.firebrick, // example color
        alignSelf: "flex-end",
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4
    },
    leftNumberWrap: {
        marginLeft: 16,
        marginTop: 5,
        paddingHorizontal: 5,
        paddingVertical: 2,
        backgroundColor: colors.firebrick, // example color
        alignSelf: "flex-end",
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4
    },
    rightNumber: {
        color: colors.hexGray,
        fontSize: 14,
        letterSpacing: 0.25,
        lineHeight: 20
    },
    line: {
        borderBottomColor: colors.textBlack,
        borderBottomWidth: 1,
    },
    toolbar: {
        flexDirection: "row",
        alignItems: "center",
        height: 56,
        backgroundColor: "#546e7a",
        paddingLeft: 16
      },
      toolbarTitle: {
        fontSize: 20,
        fontFamily: "Roboto",
        color: "white"
      },
      backButton: {
        marginRight: 32
      },
});
