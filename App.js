import React from "react";
import { StatusBar } from "react-native";

import AppContainer from "./src";

StatusBar.setBackgroundColor("black");
StatusBar.setBarStyle("light-content", true);

const App = () => <AppContainer />;

export default App;
