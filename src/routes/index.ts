import { Router } from 'express';

import authRouter from './auth.route';
import companyRouter from './company.route';
import employeeRouter from './employee.route';

const router = Router();

router.use('/auth', authRouter);
router.use('/employees', employeeRouter);
router.use('/companies', companyRouter);

export default router;
