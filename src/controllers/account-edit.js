import prepareTemplate from '../../static/templates/account-edit.hbs';
import account from '../../static/vector/Account.svg';
import upload from '../../static/vector/Upload.svg';
import back from '../../static/vector/Back.svg';
import save from '../../static/vector/Save.svg';

class AccountEdit {
  constructor() {
    this.context = {
      account,
      upload,
      save,
      back,
    }

    this.template = prepareTemplate(this.context);
  }

  render(target) {
    target.innerHTML = this.template;
  }
}

export default AccountEdit;
