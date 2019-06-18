export default function extractDataByProperty(arr, property) {
  return arr.map(item => {
    return {
      id: item.id,
      label: item[property],
      value: item[property]
    };
  });
}
