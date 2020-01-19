import React from 'react';
import renderer from 'react-test-renderer';

import PasswordRecovery from './PasswordRecovery';
/* eslint  no-undef: 0 */
describe('Login screen', () => {
  test('renders correctly', () => {
    const navigation = { navigate: jest.fn() };
    const tree = renderer.create(<PasswordRecovery navigation={navigation} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
