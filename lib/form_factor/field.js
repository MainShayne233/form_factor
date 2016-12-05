'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _input = require('./fields/input');

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Field = function () {
  function Field(args, form) {
    _classCallCheck(this, Field);

    this.name = args.name;
    this.validations = args.validations;
    this.dataType = args.dataType;
    this.form = form;
    switch (args.fieldType) {
      case 'input':
        this.interface = new _input2.default(args, this);
    }
  }

  _createClass(Field, [{
    key: 'value',
    value: function value() {
      var rawValue = this.rawValue();
      var castedValue = this.castValue(rawValue);
      var sanitizedValue = this.sanitizeValue(castedValue);
      return sanitizedValue;
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.interface.clear();
    }
  }, {
    key: 'rawValue',
    value: function rawValue() {
      return this.interface.value();
    }
  }, {
    key: 'validationErrors',
    value: function validationErrors() {
      var _this = this;

      if (!this.validations) return [];
      return this.validations.filter(function (validation) {
        return !validation.func(_this.value());
      }).map(function (validation) {
        return validation.description;
      });
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      this.form.handleChange(event);
    }
  }, {
    key: 'castValue',
    value: function castValue(value) {
      switch (this.dataType) {
        case 'string':
          return value;
          break;
        case 'integer':
          return parseInt(value);
          break;
        case 'float':
          return parseFloat(value);
          break;
      }
    }
  }, {
    key: 'sanitizeValue',
    value: function sanitizeValue(value) {
      return value || value === 0 ? value : undefined;
    }
  }, {
    key: 'render',
    value: function render() {
      return this.interface.render();
    }
  }]);

  return Field;
}();

exports.default = Field;