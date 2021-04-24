export default class {
  constructor() {
    throw new Error(`${this.constructor.name}: can not create instance of abstract class`);
  }

  static render(template, targetId) {
    const target = document.getElementById(targetId);
    if (!target) throw new Error('Templator: Cannot find target to render');
    target.innerHTML = template;
  }

  static compile(template, context) {
    const regExp = /({{\s*[\w]+\s*}})/gm;
    let _template = template;
    const _context = context;
    const match = _template.match(regExp);

    if (match) {
      match.forEach(param => {
        const key = param.replace(/[{}\s]*/g, '');
        if (!context.hasOwnProperty(key))
          throw new Error(`Templator: Parameter «${key}» Not Found`);
        _template = _template.replace(param, context[key]);
      });
    }
    return _template;
  }
}
