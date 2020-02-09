import React from 'react';
import renderer from 'react-test-renderer';

import Login from './Login';

jest.useFakeTimers();

/* eslint  no-undef: 0 */
describe('Login screen', () => {
  test('renders correctly', () => {
    const navigation = { navigate: jest.fn() };
    const tree = renderer.create(<Login navigation={navigation} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
