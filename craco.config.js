
module.exports = {
    webpack: {
      configure: (webpackConfig) => {
       
        const sourceMapRule = webpackConfig.module.rules.find(
          (rule) =>
            rule.enforce === 'pre' &&
            rule.use &&
            rule.use.includes('source-map-loader')
        );
  
        if (sourceMapRule) {
       
          sourceMapRule.exclude = [/@firebase/];
        }
  
        return webpackConfig;
      },
    },
  };
  