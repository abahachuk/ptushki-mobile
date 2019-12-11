// @flow
import React from "react";
import { translate } from "../../../i18n";
import { I18_NAMESPACE } from "../constants";
import SlideView from "./SlideView";

const image = require("../../../assets/introduction/tags_screen.png");

const TagsSlide = () => (
  <SlideView
    image={image}
    title={translate(`${I18_NAMESPACE}tagsScreenTitle`)}
    description={translate(`${I18_NAMESPACE}tagsScreenText`)}
  />
);

export default TagsSlide;
