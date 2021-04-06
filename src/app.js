import { Router } from './router/router';
import EntryMixin from './mixins/entry.mixin.js';

const router = new Router();

const main = document.getElementById('main');
const controller = new router.controller;
controller.render(main);
EntryMixin.addListeners();
