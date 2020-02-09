module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['./tests/setup.js'],
  // verbose: true // to see all 'test' descriptions,
  // collectCoverage: true,
  modulePathIgnorePatterns: [
    '<rootDir>/node_modules/react-native/Libraries/react-native/',
    '<rootDir>/node_modules/react-native/packager/',
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tests/__mocks__/mediaFileTransformer.js',
  },
  transformIgnorePatterns: ['node_modules/?!(react-icons)'],
  globals: {
    window: true,
  },
  collectCoverageFrom: ['src/**/*.js'],
  coveragePathIgnorePatterns: [
    '(index|styles|actions|selectors|constants|config|colors|fonts|opacities|shadow|icons).js',
  ],
};
