import { Router, Request, Response } from 'express';
import RequestController from './controller/RequestController';
import AuthController from './controller/AuthController';
import AuthMidlleware from './middlewares/auth';

const routes = Router();

const requestController = new RequestController();
const authController = new AuthController();

routes.post('/login', authController.login);

//routes.use(AuthMidlleware);

routes.post('/requestsAWS', requestController.store);
routes.post('/requestsAll', requestController.store);

routes.get('/requests-aws', requestController.index);

routes.get('/requests-cinquenta-google', requestController.indexGoogle);
routes.get('/requests-cem-azure', requestController.indexAzure);

export default routes;
