import React from "react";
import { translate } from "../../../i18n";
import { I18_NAMESPACE } from "../constants";
import SlideView from "./SlideView";

const image = require("../../../assets/introduction/history_screen.png");

const HistorySlide = () => (
  <SlideView
    image={image}
    title={translate(`${I18_NAMESPACE}historyScreenTitle`)}
    description={translate(`${I18_NAMESPACE}historyScreenText`)}
  />
);

export default HistorySlide;
