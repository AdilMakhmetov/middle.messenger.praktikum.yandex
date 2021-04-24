import Pictures from '../tools/Pictures';
import template from '../../static/templates/Register.template';

export default class Register {
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
