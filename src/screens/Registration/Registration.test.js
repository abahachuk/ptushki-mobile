import React from 'react';
import renderer from 'react-test-renderer';

import Registration from './Registration';
/* eslint  no-undef: 0 */
describe('Registration screen', () => {
  test('renders correctly', () => {
    const navigation = { navigate: jest.fn() };
    const tree = renderer.create(<Registration navigation={navigation} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
