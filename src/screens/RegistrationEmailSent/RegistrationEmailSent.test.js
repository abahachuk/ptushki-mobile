import React from "react";
import renderer from "react-test-renderer";

import RegistrationEmailSent from "./RegistrationEmailSent";
/* eslint  no-undef: 0 */
describe("Registration screen", () => {
  test("renders correctly", () => {
    const navigation = {
      navigate: jest.fn(),
      getParam: () => "succes"
    };
    const tree = renderer
      .create(<RegistrationEmailSent navigation={navigation} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
