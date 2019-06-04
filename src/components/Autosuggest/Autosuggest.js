import React, { useState, useCallback, useEffect, useRef } from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  TouchableNativeFeedback,
  Keyboard
} from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";

const valuePropType = {
  id: PropTypes.number,
  label: PropTypes.string,
  value: PropTypes.string
};

const Autosuggest = ({ onChangeText, onSelect, items, value, ...props }) => {
  const [isOpened, setOpen] = useState(false);
  const [collection, setCollection] = useState(items);

  const inputRef = useRef();

  const hideList = useCallback(() => {
    setOpen(false);
    inputRef.current.blur();
  }, [isOpened]);

  useEffect(() => {
    Keyboard.addListener("keyboardDidHide", hideList);
    return () => Keyboard.removeListener("keyboardDidHide", hideList);
  }, [isOpened]);

  const onSelectValue = useCallback(
    val => {
      onSelect(val);
      setCollection(items);
      Keyboard.dismiss();
      setOpen(false);
    },
    [isOpened]
  );

  const onChangeValue = useCallback(
    text => {
      onChangeText(text);
      setCollection(
        items.filter(
          item => item.value.toLowerCase().indexOf(text.toLowerCase()) !== -1
        )
      );
    },
    [collection, onChangeText, value]
  );

  const handleFocus = useCallback(() => setOpen(true), [isOpened]);

  const renderItem = ({ item }) => (
    <TouchableNativeFeedback
      value={item.value}
      onPress={() => onSelectValue(item.value)}
    >
      <View style={styles.listItem}>
        <Text style={styles.itemText}>{item.label}</Text>
      </View>
    </TouchableNativeFeedback>
  );

  renderItem.propTypes = {
    item: PropTypes.shape(valuePropType).isRequired
  };

  const keyExtractor = item => `${item.id}`;

  return (
    <View>
      <TextInput
        style={styles.input}
        onFocus={handleFocus}
        ref={inputRef}
        onChangeText={onChangeValue}
        onSubmitEditing={hideList}
        value={value}
        {...props}
      />
      {isOpened && (
        <FlatList
          style={styles.list}
          data={collection}
          extraData={collection}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          keyboardShouldPersistTaps="handled"
          nestedScrollEnabled
        />
      )}
    </View>
  );
};

Autosuggest.propTypes = {
  onChangeText: PropTypes.func,
  onSelect: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.shape(valuePropType)),
  value: PropTypes.string
};

Autosuggest.defaultProps = {
  onSelect: () => {},
  onChangeText: () => {},
  value: "",
  items: []
};

export default Autosuggest;
