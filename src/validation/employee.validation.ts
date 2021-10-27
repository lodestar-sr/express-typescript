import * as Joi from 'joi';

const list = {
    query: Joi.object(),
};

const create = {
    body: Joi.object().keys({
        firstname: Joi.string().required(),
        lastname: Joi.string().required(),
        email: Joi.string().email(),
        phone: Joi.string(),
        companyId: Joi.number(),
    }),
};

const remove = {
    params: Joi.object().keys({
        id: Joi.string().required(),
    }),
};

const update = {
    body: Joi.object().keys({
        firstname: Joi.string(),
        lastname: Joi.string(),
        email: Joi.string().email(),
        phone: Joi.string(),
        companyId: Joi.number(),
    }),
};

export { create, list, update, remove };
