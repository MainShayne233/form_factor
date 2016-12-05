# Form-Factor

Create complex, dynamic forms with simple, intuitive objects.

```javascript
import FormFactor from './form_factor'

const formTarget = document.getElementById('form_target');

const formSchema = {
  container: formTarget,
  fields: [
    {
      name: 'first_name',
      placeholder: 'First Name',
      fieldType: 'input',
      dataType: 'string',
      validations: [
        {
          description: 'Should be a minimum of 5 characters',
          func: (fieldValue) => {
            return fieldValue.length > 4
          }
        }
      ]
    },
    {
      name: 'last_name',
      placeholder: 'Last Name',
      fieldType: 'input',
      dataType: 'string',
    },
    {
      name: 'age',
      placeholder: 'Age',
      fieldType: 'input',
      dataType: 'integer',
    },
  ],
  submit: {
    button: true,
    onSubmit: (form, event) => {
      event.preventDefault()
      console.log(form.clearFields())
    },
  },
  onChange: (form, event) => {
    console.log(form.fieldValues())
  },
}

const form = new FormFactor(formSchema);
```
