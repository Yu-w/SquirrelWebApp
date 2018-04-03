const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
  // config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }], config);
  config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);  // change importing css to less
  config = rewireLess.withLoaderOptions({
    modifyVars: { "@primary-color": "#FF8833" },
  })(config, env);
  return config;
};
