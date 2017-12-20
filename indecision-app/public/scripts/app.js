'use strict';

var _utils = require('./utils.js');

var _utils2 = _interopRequireDefault(_utils);

var _person = require('./person.js');

var _person2 = _interopRequireDefault(_person);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import './utils.js';
console.log('app js is running');
console.log((0, _utils.squared)(3));
console.log((0, _utils.add)(23, 6));
console.log((0, _person.isAdult)(80));
console.log((0, _person.canDrink)(1));
console.log((0, _utils2.default)(21, 2));
console.log((0, _person2.default)(62));
