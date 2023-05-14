module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      'nativewind/babel',
      [
        'module-resolver',
        {
          alias: {
            common: './app/common',
            components: './app/components',
            content: './app/content',
            domain: './app/domain',
            navigation: './app/navigation',
            store: './app/store',
          },
        },
      ],
    ],
  };
};
