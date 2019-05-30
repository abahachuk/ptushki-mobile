import React from "react";
import PropTypes from "prop-types";
import { View, Text, AsyncStorage, Alert } from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import { translate } from "../../i18n";
import { styles } from "./styles";
import { AuthService } from "../../api";

const LogoutButton = props => {
  const onLogout = () => {
    AuthService.logOut()
      .then(data => {
        if (data) {
          AsyncStorage.clear();
          props.navigation.navigate("auth");
        }
      })
      .catch(error => {
        console.info("Logout failed: ", error.message);
        Alert.alert(`Sorry, there's a problem with your data`);
      });
  };

  return (
    <View style={styles.iconContainer}>
      <Icon.Button
        name="login"
        color="black"
        backgroundColor="white"
        size={23}
        onPress={onLogout}
        style={styles.icon}
      >
        <Text style={styles.iconText}>{translate("topLevelMenu.exit")}</Text>
      </Icon.Button>
    </View>
  );
};

LogoutButton.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  }).isRequired
};

export default LogoutButton;
