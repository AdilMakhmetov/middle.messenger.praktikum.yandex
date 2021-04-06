import prepareTemplate from '../../static/templates/error.hbs';

class Error {
  constructor() {
    this.context = {
      slogan: 'Keep In Touch',
      dotsPicture: '/static/vector/Dots.svg',
      logo: '/static/Brand.svg',
    }

    this.template = prepareTemplate(this.context);
  }

  render(target) {
    target.innerHTML = this.template;
  }
}

/src/
