'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _field = require('./form_factor/field');

var _field2 = _interopRequireDefault(_field);

var _submit = require('./form_factor/submit');

var _submit2 = _interopRequireDefault(_submit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FormFactor = function () {
  function FormFactor(args) {
    _classCallCheck(this, FormFactor);

    this.container = args.container;
    this.onChange = args.onChange;
    this.buildFields(args.fields);
    this.buildSubmit(args.submit);
    this.render();
  }

  _createClass(FormFactor, [{
    key: 'buildFields',
    value: function buildFields(fields) {
      var _this = this;

      this.fields = fields.map(function (field) {
        return new _field2.default(field, _this);
      });
    }
  }, {
    key: 'buildSubmit',
    value: function buildSubmit(submit) {
      this.submit = new _submit2.default(submit);
    }
  }, {
    key: 'renderFields',
    value: function renderFields() {
      return this.fields.map(function (field) {
        return field.render();
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var form = document.createElement('FORM');
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.fields[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var field = _step.value;
          form.appendChild(field.render());
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var submit = this.submit.render();
      if (submit) form.appendChild(submit);
      this.element = form;
      this.prepareHanlders();
      this.container.appendChild(form);
    }
  }, {
    key: 'prepareHanlders',
    value: function prepareHanlders() {
      this.prepareSubmitHandler();
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      this.onChange(this, event);
    }
  }, {
    key: 'prepareSubmitHandler',
    value: function prepareSubmitHandler() {
      var _this2 = this;

      var klass = this;
      this.element.addEventListener("submit", function (event) {
        _this2.submit.handle(klass, event);
      });
    }
  }, {
    key: 'fieldValues',
    value: function fieldValues() {
      var values = {};
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.fields[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var field = _step2.value;

          values[field.name] = field.value();
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return values;
    }
  }, {
    key: 'clearFields',
    value: function clearFields() {
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this.fields[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var field = _step3.value;

          field.clear();
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
  }, {
    key: 'fieldValidationErrors',
    value: function fieldValidationErrors() {
      var values = {};
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = this.fields[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var field = _step4.value;

          values[field.name] = field.validationErrors();
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      return values;
    }
  }]);

  return FormFactor;
}();

exports.default = FormFactor;