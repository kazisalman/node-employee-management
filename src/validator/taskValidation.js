const Joi = require('joi');

const createTaskSchema = Joi.object({
    title: Joi.string().min(3).required(),
    description: Joi.string().optional(),
    projectId: Joi.string().required()
});

const updateTaskSchema = Joi.object({
    title: Joi.string().min(3).optional(),
    description: Joi.string().optional()
});

module.exports = {
    createTaskSchema,
    updateTaskSchema
};
