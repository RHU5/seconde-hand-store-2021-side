import express from 'express';
import {
  getHome,
  getJoin,
  getLogin,
  getLogout,
  postJoin,
  postLogin
} from '../controllers/globalController';
import routes from '../routes';

const globalRouter = express.Router();

globalRouter.get(routes.home, getHome);

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin, postLogin);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.logout, getLogout);

export default globalRouter;
