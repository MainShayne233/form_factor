export default class Submit {
  constructor(args) {
    this.buildInput(args.button)
    this.onSubmit = args.onSubmit
  }

  buildInput(buttonArgs) {
    let input = document.createElement('INPUT')
    if (!buttonArgs) input.hidden = true
    input.type = 'submit'
    this.input = input
  }

  render() {
    return this.input;
  }

  handle(form, event) {
    if (this.onSubmit) {
      this.onSubmit(form, event)
    } else {
      return true
    }
  }
}
