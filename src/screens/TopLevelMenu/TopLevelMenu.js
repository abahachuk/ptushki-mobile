import React, { useEffect, useState } from "react";
import { DrawerItems } from "react-navigation";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  AsyncStorage
} from "react-native";
import { Divider } from "react-native-elements";
import { translate } from "../../i18n";
import { styles } from "./styles";
import LogoutButton from "./LogoutButton";

const logo = require("./../../assets/logotype/logotype2x.png");

const TopLevelMenu = props => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  useEffect(() => {
    AsyncStorage.getItem("user").then(userData => {
      const { firstName, lastName } = JSON.parse(userData);
      setName(firstName);
      setSurname(lastName);
    });
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.imageContainer}>
        <Image resizeMode="contain" style={styles.image} source={logo} />
      </View>
      <View>
        <Text style={styles.userNameText}>{`${name} ${surname}`}</Text>
      </View>
      <View>
        <Text style={styles.userRoleText}>
          {translate("topLevelMenu.userRole")}
        </Text>
      </View>
      <Divider style={styles.divider} />
      <ScrollView>
        <DrawerItems {...props} />
        <LogoutButton {...props} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default TopLevelMenu;
