import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { jwtSecret } from '../controllers/auth.controller';

export const validJWTNeeded = async (req: Request, res: Response, next: NextFunction) => {
    if (req.headers.authorization) {
        try {
            const authorization = req.headers.authorization.split(' ');
            if (authorization[0] !== 'Bearer') {
                return res.status(401).send();
            } else {
                req.user = jwt.verify(authorization[1], jwtSecret);
                return next();
            }
        } catch (err) {
            return res.status(403).send();
        }
    } else {
        return res.status(401).send();
    }
};
