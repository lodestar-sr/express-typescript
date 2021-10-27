import { Request, Response } from 'express';
import { createCompany, deleteCompany, find, updateCompany } from '../repositories/CompaniesDao';

export const list = async (req: Request, res: Response) => {
    try {
        const companies = await find(req.query);
        res.send(companies);
    } catch (err) {
        res.status(500).send({ errors: err });
    }
};

export const create = async (req: Request, res: Response) => {
    try {
        const company = req.body;
        const result = await createCompany(company);
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
        const result = await updateCompany(+id, employee);
        result
            ? res.status(200).send({})
            : res.status(404).send({
                errors: 'Company not found',
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
        const result = await deleteCompany(+id);
        result
            ? res.status(200).send({})
            : res.status(404).send({
                errors: 'Company not found',
            });
    } catch (err) {
        res.status(500).send({ errors: err });
    }
};
