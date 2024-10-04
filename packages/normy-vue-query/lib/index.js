"use strict";

exports.__esModule = true;
exports.useQueryNormalizer = exports.getId = exports.createQueryNormalizer = exports.VueQueryNormalizerPlugin = void 0;
var _core = require("@normy/core");
exports.getId = _core.getId;
var _createQueryNormalizer = require("./create-query-normalizer");
exports.createQueryNormalizer = _createQueryNormalizer.createQueryNormalizer;
var _vueQueryNormalizerPlugin = require("./vueQueryNormalizerPlugin");
exports.VueQueryNormalizerPlugin = _vueQueryNormalizerPlugin.VueQueryNormalizerPlugin;
exports.useQueryNormalizer = _vueQueryNormalizerPlugin.useQueryNormalizer;