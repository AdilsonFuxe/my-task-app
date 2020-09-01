import { Router, Request, Response} from 'express';
import TasksController from './controller/TasksController';
import FinishedTaskController from './controller/FinishedTaskController';

const routes = Router();


routes.get('/tasks', TasksController.index);
routes.get('/tasks/:id', TasksController.show);
routes.post('/tasks', TasksController.store);
routes.put('/tasks/:id', TasksController.update);
routes.patch('/tasks/:id', FinishedTaskController.finisehd);
routes.delete('/tasks/:id', TasksController.remove);

export default routes;