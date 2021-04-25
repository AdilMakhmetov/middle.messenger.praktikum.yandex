import template from '../templates/Sandbox.template';

export default class Sandbox {
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
