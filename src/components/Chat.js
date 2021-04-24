import Pictures from '../tools/Pictures';
import template from '../../static/templates/Chat.template';

export default class Chat {
  constructor() {
    this.data = this.createData();
    this.template = template;
  }

  createData() {
    return ({
      logo: Pictures.Brand,
      dots: Pictures.Dots,
      menu: Pictures.Menu,
      photo: Pictures.Photo,
      cancel: Pictures.Cancel,
      status: Pictures.Status,
      search: Pictures.Lens,
      user: Pictures.User,
      arrow: Pictures.Arrow,
      confirm: Pictures.Confirm,
      close: Pictures.Close,
      back: Pictures.Back,
      broom: Pictures.Broom,
      trash: Pictures.Trash,
      media: Pictures.Media,
      file: Pictures.File,
      location: Pictures.Location,
      attach: Pictures.Attach,
      smile: Pictures.Smile,
      send: Pictures.Send,
      action: 'Test-Action',
      name: 'Jason Bourne',
    });
  }
}
