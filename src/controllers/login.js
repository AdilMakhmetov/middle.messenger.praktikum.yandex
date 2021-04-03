import prepareTemplate from '../../static/templates/login.hbs';
import dotsPicture from '../../static/vector/Dots.svg';
import logo from '../../static/vector/Brand.svg';

class Login {
  constructor() {
    this.context = {
      slogan: 'Keep In Touch',
      dotsPicture,
      logo,
    }

    this.template = prepareTemplate(this.context);
  }

  addListeners() {
    const form = document.querySelector('form.inputs');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      for (const item of data.entries()) {
        console.log(item[0], item[1]);
      }
    });
  }

  render(target) {
    target.innerHTML = this.template;
  }
}

export default Login;
