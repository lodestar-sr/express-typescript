import { Request, Response } from 'express';
import { createEmployee, deleteEmployee, find, updateEmployee } from '../repositories/EmployeesDao';

export const list = async (req: Request, res: Response) => {
    try {
        const employees = await find(req.query);
        res.send(employees);
    } catch (err) {
        res.status(500).send({ errors: err });
    }
};

export const create = async (req: Request, res: Response) => {
    try {
        const employee = req.body;
        const result = await createEmployee(employee);
        res.send(result);
    } catch (err) {
        if (err.name === 'SequelizeUniqueConstraintError') {
            res.status(400).send({ message: 'This email is already connected' });
        }
        res.status(500).send({ errors: err });
    }
};

export const update = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const employee = req.body;
        const result = await updateEmployee(+id, employee);
        result
            ? res.status(200).send({})
            : res.status(404).send({
                errors: 'Employee not found',
            });
    } catch (err) {
        if (err.name === 'SequelizeUniqueConstraintError') {
            res.status(400).send({ message: 'This email is already connected' });
        }
        res.status(500).send({ errors: err });
    }
};

export const remove = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await deleteEmployee(+id);
        result
            ? res.status(200).send({})
            : res.status(404).send({
                errors: 'Employee not found',
            });
    } catch (err) {
        res.status(500).send({ errors: err });
    }
};
