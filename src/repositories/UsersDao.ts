import crypto from 'crypto';
import Users from '../models/Users';

export const createUser = async (user: any): Promise<Users> => {
    const salt = crypto.randomBytes(16).toString('base64');
    const hash = crypto.createHmac('sha512', salt).update(user.password).digest('base64');
    user.password = salt + '$' + hash;

    return await Users.create(user);
};

export const findAll = async (): Promise<Users[]> => {
    const user: Users[] | null = await Users.findAll<Users>();
    return user;
};

export const findById = async (id: number): Promise<Users | null> => {
    const user: Users | null = await Users.findOne<Users>({
        where: {
            id,
            deletedAt: null,
        },
    });
    return user;
};

export const findLoginUser = async (email: string, password: string): Promise<Users | null> => {
    const user: Users | null = await Users.findOne<Users>({
        where: {
            email,
            deletedAt: null,
        },
    });
    if (user) {
        const passwordFields = user.password.split('$');
        const salt = passwordFields[0];
        const hash = crypto.createHmac('sha512', salt).update(password).digest('base64');
        if (hash === passwordFields[1]) {
            return user;
        } else {
            return null;
        }
    } else {
        return null;
    }

};
