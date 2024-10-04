"use strict";

exports.__esModule = true;
exports.useQueryNormalizer = exports.VueQueryNormalizerPlugin = void 0;
var _vue = require("vue");
var _createQueryNormalizer = require("./create-query-normalizer");
// Define the options type

// Define the type for the normalizer result

// Augment the vue module directly

var VueQueryNormalizerPlugin = exports.VueQueryNormalizerPlugin = {
  install: function install(app, options) {
    var normalizer = (0, _createQueryNormalizer.createQueryNormalizer)(options.queryClient, options.normalizerConfig);
    normalizer.subscribe();
    app.provide('queryNormalizer', normalizer);
  }
};
var useQueryNormalizer = exports.useQueryNormalizer = function useQueryNormalizer() {
  var queryNormalizer = (0, _vue.inject)('queryNormalizer');
  if (!queryNormalizer) {
    throw new Error('No query normalizer provided, this method can only be called in setup script');
  }
  return queryNormalizer;
};