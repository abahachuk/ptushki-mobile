import React from "react";
import { View, Text, ActivityIndicator , ScrollView } from "react-native";
import { Image } from "react-native-elements";
import getInformationBlock from "./sections/InformationBlock";
import DeleteObservation from "../DeleteObservation";
import Icon from "react-native-vector-icons/AntDesign";

import { translate } from "../../i18n";
import { styles } from "./styles";

const ObservationItem = props => {
    const { navigation } = props;
    const {
        speciesMentioned: { species },
        ring: { identificationNumber },
        placeName,
        date,
        sexMentioned: { desc_rus: sex },
        ageMentioned: { desc_rus: age },
        status: { desc_rus: status },
        remarks,
        photos
    } = navigation.state.params.ObservationItem;

    getHeaderImage = () => {
        return (photos && photos.length &&
            <View style={styles.backImageWrap}>
                <Image 
                style={styles.backImage} 
                source={{uri: photos[0]}} 
                PlaceholderContent={<ActivityIndicator />}
                />
            </View>
        );
    };

    getGallery = () => {
        return (
            <View style={styles.images}>
                {
                    photos.map((photoUri, index) => (
                        <Image 
                        style={styles.image} 
                        source={{uri: photoUri}} 
                        key={photoUri + index} 
                        PlaceholderContent={<ActivityIndicator />}
                        />
                    ))
                }
            </View>
        );

    };

    return (
        <View>
            <ScrollView style={styles.ObservationItem}>
                {getHeaderImage()}
                <View style={styles.wrap}>
                    <Text style={styles.species}>{species}</Text>
                </View>
                {getGallery()}
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

};

ObservationItem.navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.ObservationItem.speciesMentioned.species,
    headerRight: (
        <DeleteObservation navigation={navigation} />
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

export default ObservationItem;