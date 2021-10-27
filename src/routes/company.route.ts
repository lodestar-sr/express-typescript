import { Router } from 'express';

import {
    list, create, remove, update,
} from '../controllers/company.controller';
import { validJWTNeeded } from '../middlewares/auth.middleware';
import * as companyValidation from '../validation/company.validation';
import validate from '../middlewares/validate.middleware';

const companyRouter = Router();

/**
 *  Company
 */
companyRouter.get('/', validJWTNeeded, validate(companyValidation.list), list);
companyRouter.post('/', validJWTNeeded, validate(companyValidation.create), create);
companyRouter.patch('/:id', validJWTNeeded, validate(companyValidation.update), update);
companyRouter.delete('/:id', validJWTNeeded, validate(companyValidation.remove), remove);

export default companyRouter;
