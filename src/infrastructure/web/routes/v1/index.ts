import { Router } from 'express';
import usersRouter from './users.routes';
import tasksRouter from './tasks.routes'; // Import the tasksRouter module

const router = Router();

router.use('/users', usersRouter);
router.use('/tasks', tasksRouter);

export default router;
