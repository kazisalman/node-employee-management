const Joi = require('joi');

const createProjectSchema = Joi.object({
    name: Joi.string().min(3).required(),
    description: Joi.string().optional(),
    created_by: Joi.string().optional()
});

const updateProjectSchema = Joi.object({
    name: Joi.string().min(3).optional(),
    description: Joi.string().optional()
});

module.exports = {
    createProjectSchema,
    updateProjectSchema
};
