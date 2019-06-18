import {
    FIRST_INTRO_SCREEN,
    SECOND_INTRO_SCREEN,
    THIRD_INTRO_SCREEN,
    FOURTH_INTRO_SCREEN
} from "constants/introductionScreens";
import { propOr } from "ramda";
import { translate } from "../../i18n";

const firstIntroImg = require("assets/introduction/intro-1.png");
const secondtIntroImg = require("assets/introduction/intro-2.png");
const thirdIntroImg = require("assets/introduction/intro-3.png");
const fourthIntroImg = require("assets/introduction/intro-4.png");

export const getNavigationNextStep = introductionId =>
    propOr("auth", introductionId, {
        [FIRST_INTRO_SCREEN]: SECOND_INTRO_SCREEN,
        [SECOND_INTRO_SCREEN]: THIRD_INTRO_SCREEN,
        [THIRD_INTRO_SCREEN]: FOURTH_INTRO_SCREEN,
        [FOURTH_INTRO_SCREEN]: "login"
    });

export const getNextBtnCaption = introductionId =>
    propOr("next", introductionId, {
        [FIRST_INTRO_SCREEN]: translate("introduction.next"),
        [SECOND_INTRO_SCREEN]: translate("introduction.understandably"),
        [THIRD_INTRO_SCREEN]: translate("introduction.clear"),
        [FOURTH_INTRO_SCREEN]: translate("introduction.begin")
    });

export const getScreenTitle = introductionId =>
    propOr("next", introductionId, {
        [FIRST_INTRO_SCREEN]: translate("introduction.firstScreenTitle"),
        [SECOND_INTRO_SCREEN]: translate("introduction.secondScreenTitle"),
        [THIRD_INTRO_SCREEN]: translate("introduction.thirdScreenTitle"),
        [FOURTH_INTRO_SCREEN]: translate("introduction.fourthScreenTitle")
    });

export const getScreenText = introductionId =>
    propOr("next", introductionId, {
        [FIRST_INTRO_SCREEN]: translate("introduction.firstScreenText"),
        [SECOND_INTRO_SCREEN]: translate("introduction.secondScreenText"),
        [THIRD_INTRO_SCREEN]: translate("introduction.thirdScreenText"),
        [FOURTH_INTRO_SCREEN]: translate("introduction.fourthScreenText")
    });

/* TODO: Temporary solution until image assets will be provided */
export const getImageSource = introductionId =>
    propOr("next", introductionId, {
        [FIRST_INTRO_SCREEN]: firstIntroImg,
        [SECOND_INTRO_SCREEN]: secondtIntroImg,
        [THIRD_INTRO_SCREEN]: thirdIntroImg,
        [FOURTH_INTRO_SCREEN]: fourthIntroImg
    });

export const getBackCaption = () => translate("introduction.back");