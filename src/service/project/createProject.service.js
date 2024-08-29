// src/controller/project/createProject.controller.js

const Model = require('../../model/index'); // Assuming you have a Project model

exports.createProject = async (req, res) => {
  const { Project } = Model

  const { name, description } = req.body;
  const { userId } = req.user

  try {
    // Create a new project
    const project = new Project({
      name,
      description,
      created_by: userId,
    });

    await project.save();
    return project

  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
