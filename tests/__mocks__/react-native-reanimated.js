const { View: mockView, ScrollView: mockScrollView, Text: mockText } = require('react-native');

const reanimatedModule = {
  Value: jest.fn(),
  event: jest.fn(() => ({})),
  add: jest.fn(),
  eq: jest.fn(),
  set: jest.fn(),
  cond: jest.fn(),
  interpolate: jest.fn(),
  Clock: jest.fn(),
  greaterThan: jest.fn(),
  lessThan: jest.fn(),
  startClock: jest.fn(),
  stopClock: jest.fn(),
  clockRunning: jest.fn(),
  not: jest.fn(),
  or: jest.fn(),
  and: jest.fn(),
  spring: jest.fn(),
  timing: jest.fn(() => ({
    start: jest.fn(),
  })),
  decay: jest.fn(),
  defined: jest.fn(),
  call: jest.fn(),
  block: jest.fn(),
  abs: jest.fn(),
  greaterOrEq: jest.fn(),
  lessOrEq: jest.fn(),
  debug: jest.fn(),
  diffClamp: jest.fn(),
  multiply: jest.fn(),
  neq: jest.fn(),
  sub: jest.fn(),

  View: mockView,
  Code: mockView,
  ScrollView: mockScrollView,
  Text: mockText,
  Transitioning: {
    View: mockView,
  },
  Extrapolate: {
    CLAMP: jest.fn(),
  },
  Transition: {
    Out: 'Out',
  },
  Easing: {
    inOut: jest.fn(),
    out: jest.fn(),
  },
};

export default reanimatedModule;
