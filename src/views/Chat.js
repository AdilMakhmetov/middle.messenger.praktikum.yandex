import template from '../templates/Chat.template';

export default class Chat {
  constructor() {
    this.data = this.createData();
    this.template = template;
  }

  createData() {
    return ({
      action: 'Test-Action',
      name: 'Jason Bourne',
    });
  }
}
