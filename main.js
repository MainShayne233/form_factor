(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{"./form_factor/field":2,"./form_factor/submit":4}],2:[function(require,module,exports){
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
},{"./fields/input":3}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Submit = function () {
  function Submit(args) {
    _classCallCheck(this, Submit);

    this.buildInput(args.button);
    this.onSubmit = args.onSubmit;
  }

  _createClass(Submit, [{
    key: 'buildInput',
    value: function buildInput(buttonArgs) {
      var input = document.createElement('INPUT');
      if (!buttonArgs) input.hidden = true;
      input.type = 'submit';
      this.input = input;
    }
  }, {
    key: 'render',
    value: function render() {
      return this.input;
    }
  }, {
    key: 'handle',
    value: function handle(form, event) {
      if (this.onSubmit) {
        this.onSubmit(form, event);
      } else {
        return true;
      }
    }
  }]);

  return Submit;
}();

exports.default = Submit;
},{}],5:[function(require,module,exports){
'use strict';

var _form_factor = require('./form_factor');

var _form_factor2 = _interopRequireDefault(_form_factor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var formTarget = document.getElementById('form_target');

var formSchema = {
  container: formTarget,
  fields: [{
    name: 'first_name',
    placeholder: 'First Name',
    fieldType: 'input',
    dataType: 'string',
    validations: [{
      description: 'Should be a minimum of 5 characters',
      func: function func(fieldValue) {
        return fieldValue.length > 4;
      }
    }]
  }, {
    name: 'last_name',
    placeholder: 'Last Name',
    fieldType: 'input',
    dataType: 'string'
  }, {
    name: 'age',
    placeholder: 'Age',
    fieldType: 'input',
    dataType: 'integer'
  }],
  submit: {
    button: true,
    onSubmit: function onSubmit(form, event) {
      event.preventDefault();
      console.log(form.clearFields());
    }
  },
  onChange: function onChange(form, event) {
    console.log(form.fieldValues());
  }
};

var form = new _form_factor2.default(formSchema);
},{"./form_factor":1}]},{},[5]);
