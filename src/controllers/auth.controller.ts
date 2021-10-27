import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { findLoginUser, createUser } from '../repositories/UsersDao';

export const jwtSecret = 'jwt-secrete';

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;

        const user = await findLoginUser(email, password);
        if (!user) {
            res.status(404).send({
                message: 'User not found'
            });
        } else {
            const token = jwt.sign(req.body, jwtSecret, {expiresIn: '1h'});
            res.status(201).send({ accessToken: token });
        }
    } catch (err) {
        res.status(500).send({ errors: err });
    }
};

export const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await createUser(req.body);
        res.status(200).send({});
    } catch (err) {
        res.status(500).send({ errors: err });
    }
};
