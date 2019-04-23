import {
    StyleSheet
} from "react-native";

import * as colors from "../../../constants/colors"

/* eslint  import/prefer-default-export: 0 */
export const styles = StyleSheet.create({

    birdName: {
        fontSize: 28,
        color: colors.textBlack
    },
    serialNumber: {
        backgroundColor: "#FF1111",
        width: "40%"
    },
    image: {
        width: 100,
        height: 100
    },
    location: {
        fontSize: 21
    },
    date: {
        fontSize: 21
    }
});