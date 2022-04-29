import { refreshToken } from './../controllers/refreshTokenController';
import { refreshTokenValidation } from './../middleware/refreshTokenValidation';
import { authLogin } from './../controllers/authLoginController';
import { loginUserSchema } from './../utils/userSchemaValidator';
import { authSignup } from './../controllers/authSignupController';
import { Router } from 'express';
import { bodyRequestValidator } from '../../shared/validators/bodyRequestValidators';

const router: Router = Router();

router.route('/auth/local/signup').post(authSignup);
router.route('/auth/local/login').post(bodyRequestValidator(loginUserSchema), authLogin);
router.route('refreshtoken').post(refreshTokenValidation, refreshToken);

export default router;