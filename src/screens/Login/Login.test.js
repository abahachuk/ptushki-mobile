import React from "react";
import renderer from "react-test-renderer";

import Login from "./Login";
/* eslint  no-undef: 0 */
describe("Login screen", () => {
  test("renders correctly", () => {
    const tree = renderer.create(<Login />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
