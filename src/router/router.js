import Login from '../views/Login';
import Register from '../views/Register';
import Account from '../views/Account';
import AccountEdit from '../views/AccountEdit';
import AccountPassword from '../views/AccountPassword';
import Chat from '../views/Chat';
import Sandbox from '../views/Sandbox';
import Error from '../views/Error';

export default class Router {
  constructor() {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.routes = [
      {
        path: '/',
        name: 'Главная',
        controller: Login,
        styles: [
          { name: 'main', path: 'welcome-pages.css'},
        ]
      },
      {
        path: '/login',
        name: 'Вход',
        controller: Login,
        styles: [
          { name: 'entry', path: 'welcome-pages.css'},
        ]
      },
      {
        path: '/register',
        name: 'Регистрация',
        controller: Register,
        styles: [
          { name: 'register', path: 'welcome-pages.css'},
        ]
      },
      {
        path: '/chat',
        name: 'Чат',
        controller: Chat,
        styles: [
          { name: 'chat', path: 'chat.css'},
        ]
      },
      {
        path: '/account',
        name: 'Аккаунт',
        controller: Account,
        styles: [
          { name: 'account', path: 'account.css'},
        ]
      },
      {
        path: '/account-edit',
        name: 'Редактировать Аккаунт',
        controller: AccountEdit,
        styles: [
          { name: 'account-edit', path: 'account.css'},
        ]
      },
      {
        path: '/account-password',
        name: 'Сменить пароль',
        controller: AccountPassword,
        styles: [
          { name: 'account-password', path: 'account.css'},
        ]
      },
      {
        path: '/sandbox',
        name: 'Песочница',
        controller: Sandbox,
        styles: [
          { name: 'sandbox', path: 'welcome-pages.css'},
        ]
      },
    ];

    this.errorRoute = {
      path: '/*',
      name: 'Ошибка 404',
      controller: Error,
      styles: [
        { name: 'Ошибка', path: 'error.css'},
      ]
    },

    this.potentialMatches = this.routes.map(route => {
      return {
        ...route,
        isActive: location.pathname === route.path,
      }
    });

    this.activeRoute = this.potentialMatches.find(potentialMatch => potentialMatch.isActive);
    if (!this.activeRoute) this.activeRoute = this.errorRoute;

    Router.__instance = this;
  }
};
