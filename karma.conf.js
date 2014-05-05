/* jshint strict: false */

module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['browserify', 'jasmine'],
    preprocessors: {
      '/**/*.browserify': ['browserify']
    },
    browserify: {
      files: [
        'src/javascripts/**/*.js',
        'src/templates/**/*.html',
        'test/unit/**/*.js'
      ],
      transform: ['partialify']
    }
  });
};
