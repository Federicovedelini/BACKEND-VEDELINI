"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_mongoose["default"].connect("mongodb://127.0.0.1/companydb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function (db) {
  return console.log('db is connected');
})["catch"](function (error) {
  return console.log(error);
});