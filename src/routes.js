import { Router } from 'express';
import UserController from './app/controllers/UserController';

const routes = Router();
routes.use(cors());

// Rotas de user.

routes.get('/', (req, res) => res.json('TEST-API'));

routes.post('/users', UserController.store);

routes.get('/users', UserController.index);

routes.get('/users/:uid', UserController.show);

routes.put('/users/:uid', UserController.update);

routes.delete('/users/:uid', UserController.delete);

//
export default routes;
