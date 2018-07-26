
import {Router, Request, Response} from 'express';
import UsersController from './../Controllers/UsersController';

export class UsersRouter {
  router: Router

  /**
   * Initialize the HeroRouter
   */
  constructor() {
    this.router = Router();
    this.init();
  }

  /**
   * Take each handler, and attach to one of the Express.Router's endpoints.
   */
  init() {
    this.router.get('/since/:since', UsersController.since);
    this.router.get('/:username/details', UsersController.details);
    this.router.get('/:username/repos', UsersController.repos);
  }

}

// Create the ClientRouter, and export its configured Express.Router
const usersRoutes = new UsersRouter();
usersRoutes.init();

export default usersRoutes.router;