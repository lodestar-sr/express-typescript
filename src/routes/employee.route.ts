import { Router } from 'express';

import {
    list, create, update, remove,
} from '../controllers/employee.controller';
import { validJWTNeeded } from '../middlewares/auth.middleware';
import validate from '../middlewares/validate.middleware';
import * as employeeValidation from '../validation/employee.validation';

const employeeRouter = Router();

/**
 *  Employee
 */
employeeRouter.get('/', validJWTNeeded, validate(employeeValidation.list), list);
employeeRouter.post('/', validJWTNeeded, validate(employeeValidation.create), create);
employeeRouter.patch('/:id', validJWTNeeded, validate(employeeValidation.update), update);
employeeRouter.delete('/:id', validJWTNeeded, validate(employeeValidation.remove), remove);

export default employeeRouter;
