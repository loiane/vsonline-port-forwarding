const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'http://localhost:3000/',
    secure: false,
    logLevel: 'debug',
    pathRewrite: { '^/api': '' }
  }
];

module.exports = PROXY_CONFIG;
