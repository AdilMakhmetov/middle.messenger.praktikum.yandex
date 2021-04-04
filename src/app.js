import { Router } from './router/router';

const router = new Router();

const main = document.getElementById('main');
router.controller.render(main);
router.controller.addListeners();
