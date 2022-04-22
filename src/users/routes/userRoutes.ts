import { userLogin } from './../controller/userLoginController';
import { userValidationMiddleware } from './../middlewares/requestValidation';
import { getUsers, createUser, editUser, deleteUser } from './../controller/userController';
import {Router} from 'express';
import { bodyRequestValidator } from '../../shared/validators/bodyRequestValidators';

const router: Router = Router();

router.get('/users', getUsers);
router.post('/users',userValidationMiddleware, createUser);
router.post('/login', userLogin);
router.put('/users/:id', editUser);
router.delete('/users/:id', deleteUser);

export default router;