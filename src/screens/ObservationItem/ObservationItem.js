import React from "react";
import PropTypes from "prop-types";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./styles";
import { Button } from "components";
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
            <Text style={styles.species}>{species}</Text>
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
            <View style={styles.wrap}>
                <Text style={styles.header}>
                    {translate("observationItem.dateHeader")}
                </Text>
                <Text style={styles.text}>{date}</Text>
            </View>
            <View style={styles.wrap}>
                <Text style={styles.header}>
                    {translate("observationItem.countryHeader")}
                </Text>
                <Text style={styles.text}>{country}</Text>
            </View>
            <View style={styles.line}></View>
            <View style={styles.wrap}>
                <Text style={styles.header}>
                    {translate("observationItem.genderHeader")}
                </Text>
                <Text style={styles.text}>{gender}</Text>
            </View>
            <View style={styles.wrap}>
                <Text style={styles.header}>
                    {translate("observationItem.ageHeader")}
                </Text>
                <Text style={styles.text}>{age}</Text>
            </View>
            <View style={styles.wrap}>
                <Text style={styles.header}>
                    {translate("observationItem.lifeStatusHeader")}
                </Text>
                <Text style={styles.text}>{lifeStatus}</Text>
            </View>
            <View style={styles.line}></View>
            <View style={styles.wrap}>
                <Text style={styles.header}>
                    {translate("observationItem.commentHeader")}
                </Text>
                <Text style={styles.text}>{comment}</Text>
            </View>
            <View style={styles.buttonBlock}>
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
            </View>
            
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
    species: "underfined",
    rightNumber: "underfined",
    leftNumber: "underfined",
    country: "underfined",
    date: "underfined",
    gender: "underfined",
    age: "underfined",
    lifeStatus: "underfined",
    comment: "underfined"
};

export default ObservationItem;