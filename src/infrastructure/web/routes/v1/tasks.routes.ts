import { TasksController } from '@interfaces/controllers/tasks.controller';
import { Router } from 'express';

const router = Router();

const controller = new TasksController();

router.get('/:id', controller.getOne);
router.post('/', controller.create);

export default router;
