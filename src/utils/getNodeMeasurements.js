import { findNodeHandle } from "react-native";

export default function getNodeMeasurements(parentNode, node) {
  return new Promise((resolve, reject) => {
    if (!parentNode || !node) return reject({ error: "incorrect data" }); // eslint-disable-line prefer-promise-reject-errors
    node.measureLayout(
      findNodeHandle(parentNode),
      (offsetX, offsetY, width, height) => {
        resolve({
          offsetX,
          offsetY,
          width,
          height
        });
      },
      error => console.log("measuments error:", error)
    );
  })
    .then(
      data =>
        new Promise(resolve => {
          node.measure((x, y, width, height, pageX, pageY) => {
            resolve({ ...data, pageY });
          });
        })
    )
    .catch(error => {
      console.log("measuments error:", error);

      return error;
    });
}
