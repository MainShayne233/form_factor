'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Input = function () {
  function Input(args) {
    _classCallCheck(this, Input);

    this.name = args.name;
  }

  _createClass(Input, [{
    key: 'render',
    value: function render() {
      var input = document.createElement('INPUT');
      input.id = this.name;
      this.element = input;
      return input;
    }
  }, {
    key: 'value',
    value: function value() {
      return this.element.value;
    }
  }]);

  return Input;
}();