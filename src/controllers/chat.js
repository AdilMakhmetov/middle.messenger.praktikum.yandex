import prepareTemplate from '../../static/templates/chat.hbs';
import dotsPicture from '../../static/vector/Dots.svg';
import logo from '../../static/vector/Brand.svg';
import menuIcon from '../../static/vector/Menu.svg';
import photo from '../../static/images/Photo.png';
import searchIcon from '../../static/vector/Lens.svg';
import userPic from '../../static/vector/User.svg';
import arrow from '../../static/vector/Arrow.svg';
import confirm from '../../static/vector/Confirm.svg';
import close from '../../static/vector/Close.svg';
import back from '../../static/vector/Back.svg';
import broom from '../../static/vector/Broom.svg';
import trash from '../../static/vector/Trash.svg';
import media from '../../static/vector/Media.svg';
import file from '../../static/vector/File.svg';
import location from '../../static/vector/Location.svg';
import attach from '../../static/vector/attach-file-icon.svg';
import smile from '../../static/vector/smile-icon.svg';
import send from '../../static/vector/send-message-icon.svg';

class Chat {
  constructor() {
    this.context = {
      logo,
      dotsPicture,
      menuIcon,
      photo,
      searchIcon,
      userPic,
      arrow,
      confirm,
      close,
      back,
      broom,
      trash,
      media,
      file,
      location,
      attach,
      smile,
      send,
      accountName: 'Jason Bourne',
    }

    this.template = prepareTemplate(this.context);
  }

  render(target) {
    target.innerHTML = this.template;
  }
}

export default Chat;
