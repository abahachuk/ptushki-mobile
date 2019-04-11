import I18N from "i18n-js";

import EventEmitter from "EventEmitter";
import ru from "./locales/ru.json";
import be from "./locales/be.json";

const defaultLocaleCode = "ru";

export const localeChangedEvent = "localeChanged";

export const translate = (key, config) => I18N.t(key, config);

export const setI18nConfig = locale => {
  I18N.translations = { ru, be };
  I18N.defaultLocale = defaultLocaleCode;
  // In case of lack of translation or locale, I18N will use default locale
  I18N.fallbacks = false;
  I18N.locale = locale || defaultLocaleCode;
};

export const emitter = new EventEmitter();

export const changeLocale = localeCode => {
  const availableLocales = Object.keys(I18N.translations);
  const isLocaleAvailable = availableLocales.includes(localeCode);
  I18N.locale = isLocaleAvailable ? localeCode : defaultLocaleCode;
  emitter.emit(localeChangedEvent, localeCode);
};
