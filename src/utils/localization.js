import { AppLanguages } from 'src/entities.ts';

/* eslint  import/prefer-default-export: 0 */
export const getLocalizedText = (obj, locale) => {
  let text = '';

  switch (locale) {
    case AppLanguages.ENGLISH:
      text = obj.desc_eng;
      break;
    case AppLanguages.RUSSIAN:
      text = obj.desc_rus;
      break;
    default:
      text = obj.desc_rus && obj.desc_eng && obj.desc_byn;
  }

  return text;
};
