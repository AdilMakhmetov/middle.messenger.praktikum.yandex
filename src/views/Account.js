import template from '../templates/Account.template';

export default class Account {
  constructor() {
    this.data = this.createData();
    this.template = template;
  }

  createData() {
    return ({});
  }
}
