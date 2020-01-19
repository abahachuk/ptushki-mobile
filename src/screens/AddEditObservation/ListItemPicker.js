/* eslint-disable */
import React, { useState } from "react";
import {  View } from "react-native";
import { ListItem, Input, Button } from 'react-native-elements'
import Icon from "react-native-vector-icons/AntDesign";

// import { Button, Input } from "../../components";
import { styles } from "./styles";
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
];

const birdObstaclesValues = [
  { value: 'NA', label: 'Не определен' },
  { value: '1', label: '' },
  { value: '2', label: '' },
  { value: '3', label: ' ' },
];
const countryValues = [
  { label: 'Брестская область', value: 'hi' },
  { label: 'Витебская область', value: 'hi' },
  { label: 'Гомельская область', value: 'hi' },
  { label: 'Гродненская область', value: 'hi' },
  { label: 'Минская область', value: 'hi' },
  { label: 'Могилевская область', value: 'hi' },
  { label: 'Брестская область', value: 'hi' },
];

const birdImg = require('./../../assets/bird/bird.png');

const ListItemPicker = props => {
  const mod = props.navigation.getParam('mod');
  const opt = props.navigation.getParam('option');

  const [option, changeOption] = useState({
    value: opt.value,
    label: opt.label,
    mod,
  });
  let refArray = [];

  switch (props.navigation.getParam('mod')) {
    case 'birdSpecies':
      refArray = birdSpeciesValues;
      break;
    case 'birdSex':
      refArray = birdSexValues;
      break;
    case 'birdAge':
      refArray = birdAgeValues;
      break;
    case 'birdObstacles':
      refArray = birdObstaclesValues;
  }

  // TODO: add sorting
  return (
    <View style={styles.container}>
      <Input
        placeholder={option.label}
        onChangeText={text => {
          changeOption({
            value: text,
            label: text,
            mod,
          });
        }}
      />
      <Button
        title="Выбрать"
        onPress={() => {
          props.navigation.navigate('EditObservation', {
            newValue: option,
          });
        }}
      />
      <View>
        {refArray.map((l, i) => (
          <ListItem
            containerStyle={{
              borderBottomColor: 'black',
            }}
            key={i}
            title={l.label}
            subtitle={l.value}
            leftAvatar={mod === 'birdSpecies' ? { source: birdImg } : null}
            onPress={() => {
              changeOption({
                value: l.value,
                label: l.label,
                mod,
              });
            }}
          />
        ))}
      </View>
    </View>
  );
};

ListItemPicker.navigationOptions = ({ navigation }) => ({
  title: 'Выбрать ',
  headerLeft: (
    <Icon
      name="arrowleft"
      size={30}
      color="white"
      style={{ padding: 15 }}
      onPress={() => navigation.goBack()}
    />
  ),
});

export default ListItemPicker;
