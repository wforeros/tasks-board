import { UsersController } from 'interfaces/controllers/users.controller';
import { Router } from 'express';

const router = Router();

const usersController = new UsersController();

router.get('/', usersController.getUsers);
router.post('/', usersController.create);

export default router;
