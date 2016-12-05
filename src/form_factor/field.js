import Input from './fields/input'

export default class Field {

  constructor(args, form) {
    this.name        = args.name
    this.validations = args.validations
    this.dataType    = args.dataType
    this.form        = form
    switch(args.fieldType) {
      case 'input': this.interface = new Input(args, this)
    }
  }

  value() {
    const rawValue       = this.rawValue()
    const castedValue    = this.castValue(rawValue)
    const sanitizedValue = this.sanitizeValue(castedValue)
    return sanitizedValue
  }

  clear() {
    this.interface.clear()
  }

  rawValue() {
    return this.interface.value()
  }

  validationErrors() {
    if (!this.validations) return []
    return this.validations.filter(validation => {
      return !validation.func(this.value())
    }).map(validation => {
      return validation.description
    })
  }

  handleChange(event) {
    this.form.handleChange(event)
  }

  castValue(value) {
    switch(this.dataType) {
      case('string'):  return value
                       break
      case('integer'): return parseInt(value)
                       break
      case('float'):   return parseFloat(value)
                       break
    }
  }

  sanitizeValue(value) {
    return (value || value === 0) ? value : undefined
  }

  render() {
    return this.interface.render();
  }

}
