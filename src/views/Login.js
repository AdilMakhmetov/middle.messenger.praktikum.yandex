import template from '../templates/Login.template';

export default class Login {
  constructor() {
    this.data = this.createData();
    this.template = template;
  }

  createData() {
    return ({
      slogan: 'Keep In Touch',});
  }
}
