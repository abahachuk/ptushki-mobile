import React, { PureComponent } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import getInformationBlock from "./sections/InformationBlock";
// import Toolbar from "./sections/Toolbar";
import DeleteObservation from "../DeleteObservation";
import Icon from "react-native-vector-icons/AntDesign";

import { translate } from "../../i18n";
import { styles } from "./styles";

const img = require("../Observations/Observation/mockData/bird.jpg");

export default class ObservationItem extends PureComponent {

    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.ObservationItem.speciesMentioned.species,
        headerRight: (
            <DeleteObservation />
        ),
        headerLeft: (
            <Icon
                name="arrowleft"
                size={30}
                color="white"
                style={{ padding: 15 }}
                onPress={() => navigation.goBack()}
            />
        )
    })

    render() {
        const {
            speciesMentioned: { species },
            ring: { identificationNumber },
            placeName,
            date,
            sexMentioned: { desc_rus: sex },
            ageMentioned: { desc_rus: age },
            status: { desc_rus: status },
            remarks
        } = this.props.navigation.state.params.ObservationItem;

        return (
            <View>
                {/* <Toolbar onBackPress={onBackPress} title={species} /> */}
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
        )
    }
}
