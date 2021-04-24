import Pictures from '../tools/Pictures';
import template from '../../static/templates/Sandbox.template';

export default class Sandbox {
  constructor() {
    this.data = this.createData();
    this.template = template;
  }

  createData() {
    return ({
      slogan: 'Keep In Touch',
      brand: Pictures.Brand,
      dots: Pictures.Dots,
    });
  }
}
