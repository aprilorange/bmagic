'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var routes = {};

routes.index = function (req, res) {
  res.render('index', {
    title: _config2['default'].sitename,
    description: _config2['default'].description
  });
};

exports['default'] = routes;
module.exports = exports['default'];