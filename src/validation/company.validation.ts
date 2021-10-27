import * as Joi from 'joi';

const list = {
    query: Joi.object(),
};

const create = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().email(),
        phone: Joi.string(),
        website: Joi.string(),
    }),
};

const remove = {
    params: Joi.object().keys({
        id: Joi.string().required(),
    }),
};

const update = {
    body: Joi.object().keys({
        name: Joi.string(),
        email: Joi.string().email(),
        phone: Joi.string(),
        website: Joi.string(),
    }),
};

export { create, list, update, remove };
