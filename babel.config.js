module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          constants: './src/constants',
          // store: './app/store',
          // features: './app/features',
          // components: './app/components',
          // styles: './app/styles',
          // modules: './app/modules',
          // images: './app/images',
          // services: './app/services',
          // clients: './app/clients',
          // utils: './app/utils',
        },
      },
    ],
    '@babel/plugin-transform-runtime',
  ],
};
