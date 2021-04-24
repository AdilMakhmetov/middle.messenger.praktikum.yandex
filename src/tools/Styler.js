const STYLES_DIR = './css';

export default class Styler {
  constructor() {
    if (Styler.__instance) {
      return Styler.__instance;
    }
    this.styles = [];
    Styler.__instance = this;
  }

  includeStyles(styles) {
    styles.forEach(style => {
      const {name, path} = style;
      const el = document.createElement('link');
      el.setAttribute('rel', 'stylesheet');
      el.setAttribute('href', `${STYLES_DIR}/${path}`);
      el.dataset.name = name;
      document.head.append(el);
      this.styles.push({ name, path, el });
    });
  }

  removeStyle(name) {
    const i = this.styles.findIndex((style) => style.name === name);
    this.styles[i].el.remove();
    this.styles.splice(i, 1);
  }

  removeAllStyles() {
    this.styles.forEach((style, i) => {
      style.el.remove();
      this.styles.splice(i, 1);
    })
  }
}
