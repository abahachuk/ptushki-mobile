/* eslint  import/prefer-default-export: 0 */
export const getLocalizedText = (obj, locale) => {
  let text = '';

  switch (locale) {
    case 'en':
      text = obj.desc_eng;
      break;
    case 'be':
      text = obj.desc_byn;
      break;
    case 'ru':
      text = obj.desc_rus;
      break;
    default:
      text = obj.desc_rus && obj.desc_eng && obj.desc_byn;
  }

  return text;
};
