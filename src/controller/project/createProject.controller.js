// src/controller/project/createProject.controller.js

const { createProjectSchema } = require('../../validator/projectValidation');
const projectService = require('../../service/project');

const createProject = async (req, res) => {
  try {
    // Validate input data
    const { error } = createProjectSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    const result = await projectService.createProject(req,res)   
    res.status(201).json({
      message: 'Project created successfully',
      result,
    });
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong', error: err.message });
  }
};

module.exports = createProject