// Generated by CoffeeScript 1.6.3
(function() {
  var ignoreFS, ignorePatterns, pathUtil;

  pathUtil = require('path');

  ignorePatterns = require('ignorepatterns');

  ignoreFS = {
    isIgnoredPath: function(path, opts) {
      var basename, ignorePath, result, _i, _len, _ref;
      if (opts == null) {
        opts = {};
      }
      result = false;
      basename = pathUtil.basename(path);
      if (opts.ignorePaths == null) {
        opts.ignorePaths = false;
      }
      if (opts.ignoreHiddenFiles == null) {
        opts.ignoreHiddenFiles = false;
      }
      if (opts.ignoreCommonPatterns == null) {
        opts.ignoreCommonPatterns = true;
      }
      if (opts.ignoreCustomPatterns == null) {
        opts.ignoreCustomPatterns = false;
      }
      if (opts.ignoreCommonPatterns === true) {
        opts.ignoreCommonPatterns = ignorePatterns;
      }
      if (opts.ignorePaths) {
        _ref = opts.ignorePaths;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          ignorePath = _ref[_i];
          if (path.indexOf(ignorePath) === 0) {
            result = true;
            break;
          }
        }
      }
      result = result || (opts.ignoreHiddenFiles && /^\./.test(basename)) || (opts.ignoreCommonPatterns && opts.ignoreCommonPatterns.test(basename)) || (opts.ignoreCommonPatterns && opts.ignoreCommonPatterns.test(path)) || (opts.ignoreCustomPatterns && opts.ignoreCustomPatterns.test(basename)) || (opts.ignoreCustomPatterns && opts.ignoreCustomPatterns.test(path)) || false;
      return result;
    }
  };

  module.exports = ignoreFS;

}).call(this);
