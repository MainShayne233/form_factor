import Field from './form_factor/field'
import Submit from './form_factor/submit'

export default class FormFactor {

  constructor(args) {
    this.container = args.container;
    this.onChange  = args.onChange
    this.buildFields(args.fields);
    this.buildSubmit(args.submit);
    this.render();
  }

  buildFields(fields) {
    this.fields = fields.map(field => new Field(field, this));
  }

  buildSubmit(submit) {
    this.submit = new Submit(submit)
  }

  renderFields() {
    return this.fields.map(field => field.render());
  }

  render() {
    let form = document.createElement('FORM')
    for (const field of this.fields) form.appendChild(field.render())
    const submit = this.submit.render()
    if (submit) form.appendChild(submit)
    this.element = form
    this.prepareHanlders()
    this.container.appendChild(form)
  }

  prepareHanlders() {
    this.prepareSubmitHandler()
  }

  handleChange(event) {
    this.onChange(this, event)
  }

  prepareSubmitHandler() {
    const klass = this;
    this.element.addEventListener("submit", (event) => {
      this.submit.handle(klass, event)
    })
  }

  fieldValues() {
    let values = {}
    for (const field of this.fields) {
      values[field.name] = field.value()
    }
    return values
  }

  clearFields() {
    for (const field of this.fields) {
      field.clear()
    }
  }

  fieldValidationErrors() {
    let values = {}
    for (const field of this.fields) {
      values[field.name] = field.validationErrors()
    }
    return values
  }

}
