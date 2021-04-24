import Pictures from '../tools/Pictures';
import template from '../../static/templates/Login.template';

export default class Login {
  constructor() {
    this.data = this.createData();
    this.template = template;
  }

  createData() {
    return ({
      slogan: 'Keep In Touch',
      logo: Pictures.Brand,
      dots: Pictures.Dots,
    });
  }
}
