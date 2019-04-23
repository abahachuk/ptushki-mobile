import React from "react";
import { FlatList, Text } from "react-native";
import Observation from "./Observation/Observation";

import { observations } from "./Observation/mockData/mockObservations";

const Observations = () => {
    // const { observations }  = props;

    renderItem = ({ item }) => {
        return <Observation { ...item }/>
    }

    return (
        <FlatList
            data = {observations}
            renderItem = {this.renderItem}
        />
    );
}

export default Observations;

