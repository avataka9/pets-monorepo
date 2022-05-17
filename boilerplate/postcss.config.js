module.exports = () => {
  const config = {
    parser: 'postcss-scss',
    plugins: {
      // from up to bottom direction
      'postcss-normalize': {},
      'postcss-import': {},
      'postcss-at-rules-variables': {},
      'postcss-custom-properties': {},
      'postcss-simple-vars': {},
      'postcss-mixins': {},
      precss: {},
    },
  };
  if (process.env.NODE_ENV === 'production') {
    config.plugins = { ...config.plugins, cssnano: {} };
  }
  return config;
};
