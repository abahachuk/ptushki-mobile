import React, { useState, useEffect } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import { createAppContainer, 
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
  StackActions,
  NavigationActions
} from "react-navigation";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

//placeholder components
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Кольца птушак</Text>
        <Button
          title="Войти"
          onPress={() => {
            this.props.navigation.navigate('registration')
          }}
        />
        <Button
          title="Регистрация"
          onPress={() => {
            this.props.navigation.navigate('registration')
          }}
        />
        <Button
          title="Забыли пароль"
          onPress={() => {
            this.props.navigation.navigate('passwordReset')
          }}
        />
      </View>
    );
  }  
}

class registrationScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Регистрация</Text>
        <Text>E-mail</Text>
        <Text>Следующие данные зачем-то нужны</Text>
        <Text>Имя</Text>
        <Button
          title="Зарегистрировать"
          onPress={()=>{
            this.props.navigation.navigate('registrationSuccess')
          }}
        />
        <Button
          title="Назад"
          onPress={() => {
            this.props.navigation.navigate('login')
          }}
        />
      </View>
      
    );
  }  
}
class passwordResetScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Восстановление пароля</Text>
        <Text>Введите ваш e-mail</Text>
        <Text>E-mail</Text>
        <Button
          title="Выслать новый пароль"
          onPress={()=>{
            this.props.navigation.navigate('passwordResetDone')
          }}
        />
        <Button
          title="Назад"
          onPress={() => {
            this.props.navigation.navigate('login')
          }}
        />
      </View>
    );
  }  
}
class passwordResetDoneScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Мы выслали вам новый пароль</Text>
        <Text>проверьте ваш e-mail</Text>
        <Button
          title="Перейти ко входу"
          onPress={()=>{
            this.props.navigation.navigate('login')
          }}
        />
      </View>
    );
  }  
}

class registrationSuccessScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Ура! Регистрация произошла</Text>
        <Text>проверьте ваш e-mail</Text>
        <Button
          title="Перейти ко входу"
          onPress={()=>{
            this.props.navigation.navigate('login')
          }}
        />
      </View>
    );
  }  
}

class mainPageScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Ура! Регистрация произошла</Text>
        <Text>проверьте ваш e-mail</Text>
        <Button
          title="Перейти ко входу"
          onPress={()=>{
            this.props.navigation.navigate('login')
          }}
        />
      </View>
    );
  }  
}
//createStackNavigator fails intermittently, investigating https://github.com/kmagiera/react-native-gesture-handler/issues/538
const AppNavigator = createStackNavigator({
  login: {
    screen: HomeScreen
  },
  registration: {
    screen: registrationScreen
  },
  registrationSuccess: registrationSuccessScreen,
  passwordReset: passwordResetScreen,
  passwordResetDone: passwordResetDoneScreen,
  mainPage: mainPageScreen
},
{
  initialRouteName: 'login'
})

export default createAppContainer(AppNavigator);