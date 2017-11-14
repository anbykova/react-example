if (!module.hot || process.env.NODE_ENV === 'production') {
    module.exports = require('./RootProd');
  } else {
    module.exports = require('./RootDev');
  }