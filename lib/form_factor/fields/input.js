'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Input = function () {
  function Input(args, field) {
    _classCallCheck(this, Input);

    this.name = args.name;
    this.placeholder = args.placeholder;
    this.field = field;
  }

  _createClass(Input, [{
    key: 'render',
    value: function render() {
      var input = document.createElement('INPUT');
      input.id = this.name;
      input.placeholder = this.placeholder;
      this.element = input;
      this.prepareHandlers();
      return input;
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.element.value = null;
    }
  }, {
    key: 'prepareHandlers',
    value: function prepareHandlers() {
      this.prepareChangeHandler();
    }
  }, {
    key: 'prepareChangeHandler',
    value: function prepareChangeHandler() {
      var _this = this;

      this.element.addEventListener('keyup', function (event) {
        _this.field.handleChange(event);
      });
    }
  }, {
    key: 'value',
    value: function value() {
      return this.element.value;
    }
  }]);

  return Input;
}();

exports.default = Input;