'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _nunjucks = require('nunjucks');

var _nunjucks2 = _interopRequireDefault(_nunjucks);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var app = (0, _express2['default'])();

var server = function server(root) {

  // define middlewares
  app.use('/static', _express2['default']['static']('assets'));
  app.use(_bodyParser2['default'].json());
  app.use(_bodyParser2['default'].urlencoded({
    extended: false
  }));

  // use nunjucks to render templates
  app.set('view engine', 'html');
  var viewsDir = root + '/src/views';
  _nunjucks2['default'].configure(viewsDir, {
    autoescape: true,
    express: app
  });

  // define routers
  app.get('/', _routes2['default'].index);

  // listen
  app.listen(_config2['default'].port, function () {
    console.log('Site is running at http://localhost:' + _config2['default'].port);
  });
};

exports['default'] = server;
module.exports = exports['default'];