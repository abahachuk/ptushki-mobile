export default function extractDataByProperty(arr, property) {
  if (property) {
    return arr.map(item => {
      return {
        id: item.id,
        label: item[property],
        value: item[property],
      };
    });
  }

  return arr.map(item => {
    return {
      id: item,
      label: item,
      value: item,
    };
  });
}
