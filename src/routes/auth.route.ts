import { Router } from 'express';

import {
    login, register,
} from '../controllers/auth.controller';
import validate from '../middlewares/validate.middleware';
import * as authValidation from '../validation/auth.validation';

const authRouter = Router();

/**
 *  Auth
 */
authRouter.post('/login', validate(authValidation.login), login);
authRouter.post('/register', validate(authValidation.register), register);

export default authRouter;
