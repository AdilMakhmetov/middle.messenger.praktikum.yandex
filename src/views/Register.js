import template from '../templates/Register.template';

export default class Register {
  constructor() {
    this.data = this.createData();
    this.template = template;
  }

  createData() {
    return ({
      slogan: 'Keep In Touch',
    });
  }
}
