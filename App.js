import React from "react";
import { StatusBar } from "react-native";
import { Provider } from 'react-redux'
import store from './src/store';
import AppContainer from "./src";

StatusBar.setBackgroundColor("black");
StatusBar.setBarStyle("light-content", true);

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

export default App;
