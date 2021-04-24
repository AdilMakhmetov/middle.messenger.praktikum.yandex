import Pictures from '../tools/Pictures';
import template from '../../static/templates/AccountEdit.template';

export default class AccountEdit {
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
      save: Pictures.Save,
    });
  }
}
