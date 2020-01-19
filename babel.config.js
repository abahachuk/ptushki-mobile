module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          constants: './src/constants',
          navigation: './src/navigation',
          src: './src',
          // store: './src/store',
          // features: './src/features',
          // components: './src/components',
          // styles: './src/styles',
          // modules: './src/modules',
          // images: './src/images',
          // services: './src/services',
          // clients: './src/clients',
          // utils: './src/utils',
        },
      },
    ],
    '@babel/plugin-transform-runtime',
  ],
};
