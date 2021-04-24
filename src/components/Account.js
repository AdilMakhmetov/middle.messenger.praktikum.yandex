import Pictures from '../tools/Pictures';
import template from '../../static/templates/Account.template';

export default class Account {
  constructor() {
    this.data = this.createData();
    this.template = template;
  }

  createData() {
    return ({
      account: Pictures.Account,
      upload: Pictures.Upload,
      edit: Pictures.Edit,
      password: Pictures.Password,
      back: Pictures.Back,
    });
  }
}
