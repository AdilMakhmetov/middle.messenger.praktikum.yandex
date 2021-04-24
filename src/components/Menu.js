export default class Menu {
  constructor(routes) {
    this.routes = routes;
    this._template = this.buildRoutes();
    this.render('main');
  }

  buildRoutes() {
    const nav = document.createElement('nav');
    nav.id = 'nav';
    this.routes.forEach(route => {
      const link = document.createElement('a');
      link.href = route.path;
      link.textContent = route.name;
      nav.append(link);
    });
    return nav;
  }

  render(targetId) {
    const _target = document.getElementById(targetId);
    if (!_target) throw new Error('Templator: Cannot find target to render');
    _target.prepend(this._template);
  }
}
