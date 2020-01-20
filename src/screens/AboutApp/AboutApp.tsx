import React from "react";
import { ScrollView, View, Text, Image } from "react-native";
import { translate } from "../../i18n";
import { Button } from "../../components";

import styles from "./styles";

const logo = require("../../assets/logotype/logo.png");
const epamLogo = require("../../assets/logotype/epam-logo.png");

interface AboutAppProps {
  version: string,
  phone: string,
  email: string,
}

const AboutApp: React.FC<AboutAppProps> = ({ version, phone, email }) => (
  <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
    <View style={styles.margin}>
      <View style={styles.logo}>
        <Image resizeMode="contain" style={styles.image} source={logo}/>
        <Text style={styles.version}>
          {`${translate("aboutApp.version")} ${version}`}
        </Text>
      </View>
      <Text style={styles.text}>{translate("aboutApp.description")}</Text>
      <Button
        caption={translate("aboutApp.readMore")}
        appearance="Light"
        wrapperStyles={styles.buttonWrapper}
        onPress={() => {
          // TODO add logic when we will know what exactly should do current button
        }}
      />
      <View style={styles.article}>
        <Text style={styles.title}>{translate("aboutApp.aboutCenter")}</Text>
        <Text style={styles.text}>
          {translate("aboutApp.aboutCenterDescription")}
        </Text>
      </View>
    </View>
    <View style={styles.contactDetails}>
      <Text style={styles.contactDetailsTitle}>
        {translate("aboutApp.contactDetails")}
      </Text>
      <View style={styles.contactDetailsItem}>
        <Text style={styles.contactDetailsLabel}>
          {translate("aboutApp.phone")}
        </Text>
        <Text style={styles.contactDetailsInput}>{phone}</Text>
      </View>
      <View style={styles.contactDetailsItem}>
        <Text style={styles.contactDetailsLabel}>
          {translate("aboutApp.email")}
        </Text>
        <Text style={styles.contactDetailsInput}>{email}</Text>
      </View>
    </View>
    <View style={styles.developApp}>
      <View style={styles.article}>
        <Text style={styles.title}>
          {translate("aboutApp.developmentTitle")}
        </Text>
        <Text style={styles.text}>
          {translate("aboutApp.developmentDescription")}
        </Text>
      </View>
      <Image resizeMode="contain" style={styles.epamLogo} source={epamLogo}/>
    </View>
  </ScrollView>
);

// TODO should receive props from redux
AboutApp.defaultProps = {
  version: "1.1",
  phone: "+375 (29) 285-31-13",
  email: "sfsdfsdf@sdfsdf.bt"
};

export default AboutApp;
