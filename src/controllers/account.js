import prepareTemplate from '../../static/templates/account.hbs';
import account from '../../static/vector/Account.svg';
import upload from '../../static/vector/Upload.svg';
import back from '../../static/vector/Back.svg';
import edit from '../../static/vector/Edit.svg';
import password from '../../static/vector/Password.svg';

class Account {
  constructor() {
    this.context = {
      account,
      upload,
      edit,
      password,
      back,
    }

    this.template = prepareTemplate(this.context);
  }

  render(target) {
    target.innerHTML = this.template;
  }
}

export default Account;
