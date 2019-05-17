import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator
} from "react-navigation";
import {
  Login,
  Registration,
  PasswordRecovery,
  RegistrationEmailSent,
  Observations
} from "../../screens";
import React, { Component } from "react";
import { Button, View, Text, StyleSheet } from "react-native";

let DashboardScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>DashboardScreen</Text>
  </View>
);


let Feed = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Feed</Text>
  </View>
);

const ObservationStackNavigator = createStackNavigator(
  {
    Observations
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      return {
        headerLeft: (
          <Button 
          title="Menu" 
          onPress={() => navigation.openDrawer()} 
          />
        )
      }
    }
  }
)

const FeedStackNavigator = createStackNavigator(
  {
    Feed
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      return {
        headerLeft: (
          <Button 
          title="Menu" 
          onPress={() => navigation.openDrawer()} 
          />
        )
      }
    }
  }
)

const AppDrawerNavigator = createDrawerNavigator(
  {
    Observations: {
      screen: ObservationStackNavigator
    },
    Feed: {
      screen: FeedStackNavigator
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      return {
        headerLeft: (
          <Button 
          title="Menu" 
          onPress={() => navigation.openDrawer()} 
          />
        )
      }
    }
  }

)

const RegistrationStackNavigator = createStackNavigator({
  login: {
    screen: Login
  },
  registration: {
    screen: Registration
  },
  passwordReset: {
    screen: PasswordRecovery
  },
  passwordResetDone: {
    screen: RegistrationEmailSent
  },
  registrationSuccess: {
    screen: RegistrationEmailSent
  },
})

const AppSwitchNavigator = createSwitchNavigator({
  login: {
    screen: RegistrationStackNavigator
  },
  mainPage: {
    screen: AppDrawerNavigator
  }
})

const AppContainer = createAppContainer(AppSwitchNavigator);

export default AppContainer;


// class MyHomeScreen extends React.Component {
//   static navigationOptions = {
//     drawerLabel: 'Home',
//   };

//   render() {
//     return (
      
//       <View>
//       <Button
//         onPress={() => this.props.navigation.navigate('Notifications')}
//         title="Go to notifications"
//       />
//       <Button
//         onPress={() => this.props.navigation.toggleDrawer()}
//         title="toggle me"
//         />
//     </View>
//     );
//   }
// }

// class MyNotificationsScreen extends React.Component {
//   static navigationOptions = {
//     drawerLabel: 'Notifications'
//   };

//   render() {
//     return (
//       <View>
//         <Button
//           onPress={() => this.props.navigation.goBack()}
//           title="Go back home"
//           />
//         <Button
//           onPress={() => this.props.navigation.toggleDrawer()}
//           title="toggle me"
//           />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   icon: {
//     width: 24,
//     height: 24,
//   },
// });

// const MyDrawerNavigator = createDrawerNavigator({
//   Home: {
//     screen: MyHomeScreen,
//   },
//   Notifications: {
//     screen: MyNotificationsScreen,
//   },
// });

// const MyApp = createAppContainer(MyDrawerNavigator);

// export default MyApp