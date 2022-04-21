import { userValidationMiddleware } from './../middlewares/requestValidation';
import { getUsers, createUser } from './../controller/userController';
import {Router} from 'express';

const router: Router = Router();

router.get('/users', getUsers);
router.post('/users',userValidationMiddleware, createUser);

export default router;