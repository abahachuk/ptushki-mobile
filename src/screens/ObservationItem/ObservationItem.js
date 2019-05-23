import React from "react";
import PropTypes from "prop-types";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./styles";
import { Button } from "components";
import getInformationBlock from "./sections/InformationBlock";
import observationItem from "../Observations/Observation/mockData/mockObservationItem";

import { translate } from "../../i18n";

const img = require("../Observations/Observation/mockData/bird.jpg");

const ObservationItem = props => {
    const { species, rightNumber, leftNumber, country, date, gender, age, lifeStatus, comment } = observationItem;

    const addSameBird = () => { };
    const addSameBirdObservation = () => { };

    return (
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
                        <Text style={styles.rightNumber}>{rightNumber}</Text>
                    </View>
                </View>
                <View style={styles.ring}>
                    <Text style={styles.text}>
                        {translate("observationItem.leftRings")}
                    </Text>
                    <View style={styles.leftNumberWrap}>
                        <Text style={styles.leftNumber}>{leftNumber}</Text>
                    </View>
                </View>
            </View>
            {getInformationBlock(
                translate("observationItem.dateHeader"),
                date
            )}
            {getInformationBlock(
                translate("observationItem.countryHeader"),
                country
            )}
            <View style={styles.line}></View>
            {getInformationBlock(
                translate("observationItem.genderHeader"),
                gender
            )}
            {getInformationBlock(
                translate("observationItem.ageHeader"),
                age
            )}
            {getInformationBlock(
                translate("observationItem.lifeStatusHeader"),
                lifeStatus
            )}
            <View style={styles.line}></View>
            {getInformationBlock(
                translate("observationItem.commentHeader"),
                comment
            )}
            <Button
                caption={translate("observationItem.addSameBird")}
                onPress={addSameBird}
                appearance="Light"
            />
            <Button
                caption={translate("observationItem.addSameBirdObservation")}
                onPress={addSameBirdObservation}
                appearance="Dark"
            />

        </ScrollView>
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
ObservationItem.defaultProps = {
    species: "",
    rightNumber: "",
    leftNumber: "",
    country: "",
    date: "",
    gender: "",
    age: "",
    lifeStatus: "",
    comment: ""
};

export default ObservationItem;