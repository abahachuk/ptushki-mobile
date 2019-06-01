import React from "react";
import PropTypes from "prop-types";
import { View, Text, Image, ScrollView } from "react-native";
import { styles } from "./styles";
import getInformationBlock from "./sections/InformationBlock";
import Toolbar from "./sections/Toolbar";

import { translate } from "../../i18n";

const img = require("../Observations/Observation/mockData/bird.jpg");

const ObservationItem = (props) => {
    const {
        speciesMentioned: { species },
        ring: { identificationNumber },
        placeName,
        date,
        sexMentioned: { desc_rus: sex },
        ageMentioned: { desc_rus: age },
        status: { desc_rus: status },
        remarks
    } = props.navigation.state.params.ObservationItem;

    const onBackPress = () => {
        props.navigation.goBack();
    };

    return (
        <View>
            <Toolbar onBackPress={onBackPress} title={species} />
            <ScrollView style={styles.ObservationItem}>
                {/* <View style={styles.backImageWrap}>
                <Image style={styles.backImage} source={img} />
            </View> */}
                <View style={styles.wrap}>
                    <Text style={styles.species}>{species}</Text>
                </View>
                <View style={styles.images}>
                    <Image style={styles.image} source={img} />
                    <Image style={styles.image} source={img} />
                </View>
                <View style={styles.wrap}>
                    <Text style={styles.header}>
                        {translate("observationItem.rings")}
                    </Text>
                    <View style={styles.ring}>
                        <Text style={styles.text}>
                            {translate("observationItem.rightRing")}
                        </Text>
                        <View style={styles.rightNumberWrap}>
                            <Text style={styles.rightNumber}>{identificationNumber}</Text>
                        </View>
                    </View>
                    <View style={styles.ring}>
                        <Text style={styles.text}>
                            {translate("observationItem.leftRings")}
                        </Text>
                        <View style={styles.leftNumberWrap}>
                            <Text style={styles.leftNumber}>{identificationNumber}</Text>
                        </View>
                    </View>
                </View>
                {getInformationBlock(
                    translate("observationItem.dateHeader"),
                    date
                )}
                {getInformationBlock(
                    translate("observationItem.countryHeader"),
                    placeName
                )}
                <View style={styles.line}></View>
                {getInformationBlock(
                    translate("observationItem.genderHeader"),
                    sex
                )}
                {getInformationBlock(
                    translate("observationItem.ageHeader"),
                    age
                )}
                {getInformationBlock(
                    translate("observationItem.lifeStatusHeader"),
                    status
                )}
                <View style={styles.line}></View>
                {getInformationBlock(
                    translate("observationItem.commentHeader"),
                    remarks
                )}
            </ScrollView>
        </View>
    );
};

ObservationItem.propTypes = {
    species: PropTypes.string,
    rightNumber: PropTypes.string,
    leftNumber: PropTypes.string,
    country: PropTypes.string,
    date: PropTypes.string,
    gender: PropTypes.string,
    age: PropTypes.string,
    lifeStatus: PropTypes.string,
    comment: PropTypes.string
};
// ObservationItem.defaultProps = {
//     species: "",
//     rightNumber: "",
//     leftNumber: "",
//     country: "",
//     date: "",
//     gender: "",
//     age: "",
//     lifeStatus: "",
//     comment: ""
// };

export default ObservationItem;