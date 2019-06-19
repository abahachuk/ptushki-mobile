/* eslint-disable */
import React, { useState } from "react";
import { Alert, Text, View } from "react-native";
import { ListItem, Input, Button } from 'react-native-elements'
import Icon from "react-native-vector-icons/AntDesign";

// import { Button, Input } from "../../components";
import { translate } from "../../i18n";
import { styles } from "./styles";
import { AuthService } from "api";
/* eslint-enable */


const birdSpeciesValues = [
    { value: 'Botaurus stellaris', label: 'большая выпь' },
    { value: 'Ixobrychus minutus', label: 'малая выпь' },
    { value: 'Ardea cinerea', label: 'серая цапля' },
    { value: 'Ardea purpurea', label: 'рыжая цапля' },
    { value: 'Ardea alba', label: 'большая белая цапля' },
    { value: 'Egretta garzetta', label: 'малая белая цапля' },
];
const birdSexValues = [
    { value: 'NA', label: 'Не определен' },
    { value: 'F', label: 'Женский' },
    { value: 'M', label: 'Мужской' },
];

const birdAgeValues = [
    { value: 'NA', label: 'Не определен' },
    { value: '<1', label: '' },
    { value: '2', label: '' },
    { value: '3', label: ' ' },
]
const countryValues = [
    { label: "Брестская область", value: 'hi'},
    { label: "Витебская область", value: 'hi'},
    { label: "Гомельская область", value: 'hi'},
    { label: "Гродненская область", value: 'hi'},
    { label: "Минская область", value: 'hi'},
    { label: "Могилевская область", value: 'hi'},
    { label: "Брестская область",value: 'hi'}
  ]

const ListItemPicker = props => {
    const [option, changeOption] = useState({
        value: '',
        label: props.navigation.getParam('birdSpecies')
    });
    let refArray = [];

    switch (props.navigation.getParam('mod')) {
        case 'birdSpecies':
            refArray = birdSpeciesValues;
            break;
        case 'birdSex':
            refArray = birdSexValues
            break;
        case 'birdAge':
            refArray = birdAgeValues
            break;
    }

    //TODO: add sorting
    return (
        <View style={styles.container}>
            <Input
                placeholder={option.label}
                onChangeText={(text) => {
                    changeOption({
                        value: text,
                        label: text
                    }
                    )
                }}
            />
            <Button
                title="Выбрать"
                onPress={() => {
                    props.navigation.navigate('EditObservation', {
                        newValue: option
                    })
                }}
            />
            <View>
                {
                    refArray.map((l, i) => (
                        <ListItem
                        containerStyle={{
                            borderBottomColor: 'black'
                        }}
                            key={i}
                            title={l.label}
                            subtitle={l.value}
                            onPress={() => {
                                changeOption({
                                    value: l.value,
                                    label: l.label
                                })
                            }}
                        />
                    ))
                }
            </View>
        </View>
    );
};

ListItemPicker.navigationOptions = ({ navigation }) => ({
    title: "Выбрать все что угодно",
    headerLeft: (
        <Icon
            name="arrowleft"
            size={30}
            color="white"
            style={{ padding: 15 }}
            onPress={() =>
                navigation.goBack()
            }
        />
    )
})

export default ListItemPicker;
