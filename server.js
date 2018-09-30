const compression = require('compression');
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

/**
 * Gzip
 */
app.use(compression());

/**
 * Run the app by serving the static files in the dist directory
 */
app.use(express.static(__dirname + '/dist', { redirect: false }));
/**
 * If an incoming request uses a protocol other than HTTPS,
 * redirect that request to the same url but with HTTPS
 * @returns {Function}
 */
const forceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
        ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
};
app.use(forceSSL());

/**
 * Start the app by listening on the default port
 */
app.listen(port);

/**
 * For all GET requests, send back index.html so that PathLocationStrategy can be used
 */
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

console.log('Server listening on ' + port);
