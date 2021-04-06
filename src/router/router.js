import Login from '../controllers/login';
import Register from '../controllers/register';
import Account from '../controllers/account';
import AccountEdit from '../controllers/account-edit';
import AccountPassword from '../controllers/account-password';
import Chat from '../controllers/chat';
import Error from '../controllers/error';

export class Router {
  constructor() {
    this.routes = [
      { path: '/', controller: Login },
      { path: '/index.html', controller: Login },
      { path: '/register.html', controller: Register },
      { path: '/chat.html', controller: Chat },
      { path: '/account.html', controller: Account },
      { path: '/account-edit.html', controller: AccountEdit },
      { path: '/account-password.html', controller: AccountPassword },
    ];

    this.potentialMatches = this.routes.map(route => {
      return {
        route: route,
        isMatch: location.pathname === route.path,
      }
    });

    this.match = this.potentialMatches.find(potentialMatch => potentialMatch.isMatch);
    this._controller = this.match ? this.match.route.controller : Error;
  }

  get controller() {
    return this._controller;
  }
};
