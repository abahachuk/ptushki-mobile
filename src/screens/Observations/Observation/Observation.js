import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";

const Observation = props => {
    const {
        name,
        serialNumber,
        location,
        dataOfObservation
    } = props

    return (
        <View>
            <Text style={styles.birdName}>{name}</Text>
            <Text style={styles.serialNumber}>{serialNumber}</Text>
            <Image
                style={styles.image}    
                source={require('./mockData/bird.jpg')}
            />
            <Text style={styles.location}>{location}</Text>
            <Text style={styles.date}>{dataOfObservation}</Text>
        </View>
    )
}

export default Observation