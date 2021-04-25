import Router from './router/router';
import Styler from './tools/Styler';
import Templator from './tools/Templator';
import EntryMixin from './mixins/entry.mixin';
import Menu from "./components/Menu";

class App {
  constructor(containerId) {
    this.$router = new Router();
    this.$styler = new Styler();
    this.$menu = new Menu(this.$router.routes);
    this.$pageController = new this.$router.activeRoute.controller();
    this.$pageStyles = this.$router.activeRoute.styles;

    const { template, data } = this.$pageController;
    const markup = Templator.compile(template, data);
    Templator.render(markup, containerId);
    this.$styler.includeStyles(this.$pageStyles);
    this.$menu.render('root');
    EntryMixin.addListeners();
  }
}

const app = new App('main');