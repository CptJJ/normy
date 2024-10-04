import { inject } from 'vue';
import { createQueryNormalizer } from './create-query-normalizer';

// Define the options type

// Define the type for the normalizer result

// Augment the vue module directly

export var VueQueryNormalizerPlugin = {
  install: function install(app, options) {
    var normalizer = createQueryNormalizer(options.queryClient, options.normalizerConfig);
    normalizer.subscribe();
    app.provide('queryNormalizer', normalizer);
  }
};
export var useQueryNormalizer = function useQueryNormalizer() {
  var queryNormalizer = inject('queryNormalizer');
  if (!queryNormalizer) {
    throw new Error('No query normalizer provided, this method can only be called in setup script');
  }
  return queryNormalizer;
};