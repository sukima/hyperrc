const path = require('path');

exports.decorateConfig = function(config) {
  if (!config.backgroundImage) { return config; }
  let imagePath = path.isAbsolute(config.backgroundImage)
    ? config.backgroundImage
    : path.resolve(process.env.HOME, config.backgroundImage);
  let backgroundColor = config.backgroundColor || 'transparent';
  let backgroundPosition = config.backgroundPosition || 'center';
  let backgroundSize = config.backgroundSize || 'cover';
  return Object.assign({}, config, {
    backgroundColor: 'transparent',
    css: `
      ${config.css || ''}
      .hyper_main {
        background: url(file://${imagePath}) ${backgroundPosition};
        background-size: ${backgroundSize};
      }
      .terms_terms {
        background-color: ${backgroundColor};
      }
    `
  });
};
