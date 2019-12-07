/* const jasmineReporters = require('jasmine-reporters');
const Adapter = require('enzyme-adapter-react-16');
const Enzyme = require('enzyme');

Enzyme.configure({ adapter: new Adapter() });

global.jasmine.VERBOSE = true;
global.jasmine.getEnv().addReporter(
  new jasmineReporters.JUnitXmlReporter({
    consolidateAll: false,
    savePath: 'tests/test-results',
  }),
); */

if (!console.debug) console.debug = console.log;

const { NativeModules, Platform } = require('react-native');

Platform.OS = 'android';

Object.assign(NativeModules, {
  RNCAsyncStorage: {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    mergeItem: jest.fn(),
    clear: jest.fn(),
    getAllKeys: jest.fn(),
    flushGetRequests: jest.fn(),
    multiGet: jest.fn(),
    multiSet: jest.fn(),
    multiRemove: jest.fn(),
    multiMerge: jest.fn(),
  },
});

jest.mock('NativeEventEmitter');
