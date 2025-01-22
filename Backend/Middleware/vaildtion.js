const Joi = require('joi');

const RegistrationSchema = Joi.object({

    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    
})
const LoginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
})

module.exports = {RegistrationSchema, LoginSchema}