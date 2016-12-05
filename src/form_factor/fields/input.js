export default class Input {
  constructor(args, field) {
    this.name  = args.name
    this.placeholder = args.placeholder
    this.field = field
  }

  render() {
    let input = document.createElement('INPUT');
    input.id = this.name
    input.placeholder = this.placeholder
    this.element = input
    this.prepareHandlers()
    return input
  }

  clear() {
    this.element.value = null
  }

  prepareHandlers() {
    this.prepareChangeHandler()
  }

  prepareChangeHandler() {
    this.element.addEventListener('keyup', (event) => {
      this.field.handleChange(event)
    })
  }

  value() {
    return this.element.value
  }
}
