import i18n from "i18n-js";

import EventEmitter from "EventEmitter";
import ru from "./locales/ru.json";
import be from "./locales/be.json";

const defaultLocaleCode = "ru";

export const localeChangedEvent = "localeChanged";

export const translate = (key, config) => i18n.t(key, config);

export const setI18nConfig = locale => {
  i18n.translations = { ru, be };
  i18n.defaultLocale = defaultLocaleCode;
  // In case of lack of translation or locale, i18n will use default locale
  i18n.fallbacks = false;
  i18n.locale = locale || defaultLocaleCode;
};

export const emitter = new EventEmitter();

export const changeLocale = localeCode => {
  const availableLocales = Object.keys(i18n.translations);
  const isLocaleAvailable = availableLocales.includes(localeCode);
  i18n.locale = isLocaleAvailable ? localeCode : defaultLocaleCode;
  emitter.emit(localeChangedEvent, localeCode);
};
