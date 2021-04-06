import prepareTemplate from '../../static/templates/register.hbs';
import dotsPicture from '../../static/vector/Dots.svg';
import logo from '../../static/vector/Brand.svg';

class Register {
  constructor() {
    this.context = {
      slogan: 'Keep In Touch',
      dotsPicture,
      logo,
    }

    this.template = prepareTemplate(this.context);
  }

  render(target) {
    target.innerHTML = this.template;
  }
}

export default Register;
