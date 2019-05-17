import React from "react";
import { DrawerItems } from "react-navigation";
import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import { translate } from "../../i18n";

// const dotsIcon = require("assets/three-dots-menu/dots-vertical-black.png");
const logo = require("./../../assets/logotype/logotype2x.png");

const TopLevelMenu = props => (
  <SafeAreaView style={{ flex: 1 }}>
    <View
      style={{
        height: 120,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Image style={{ height: 120, width: 220 }} source={logo} />
    </View>
    <View>
      <Text>Иван Иванов</Text>
    </View>
    <View>
      <Text>{translate("topLevelMenu.userRole")}</Text>
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);

export default TopLevelMenu;
