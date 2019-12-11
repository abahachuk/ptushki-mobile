// @flow
import React from "react";
import { translate } from "../../../i18n";
import { I18_NAMESPACE } from "../constants";
import SlideView from "./SlideView";

const image = require("../../../assets/introduction/reason_screen.png");

const ReasonSlide = () => (
  <SlideView
    image={image}
    title={translate(`${I18_NAMESPACE}reasonScreenTitle`)}
    description={translate(`${I18_NAMESPACE}reasonScreenText`)}
  />
);

export default ReasonSlide;
