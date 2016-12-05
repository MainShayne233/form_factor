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