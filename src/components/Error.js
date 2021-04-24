import template from '../../static/templates/Error.template';

export default class Error {
  constructor() {
    this.data = this.createData();
    this.template = template;
  }

  createData() {
    return ({});
  }
}
