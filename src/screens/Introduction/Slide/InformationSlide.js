// @flow
import React from "react";
import { translate } from "../../../i18n";
import { I18_NAMESPACE } from "../constants";
import SlideView from "./SlideView";

const image = require("../../../assets/introduction/information_screen.png");

const InformationSlide = () => (
  <SlideView
    image={image}
    title={translate(`${I18_NAMESPACE}informationScreenTitle`)}
    description={translate(`${I18_NAMESPACE}informationScreenText`)}
  />
);

export default InformationSlide;
