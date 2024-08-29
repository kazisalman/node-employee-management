// // src/controller/project/createProject.controller.js

// const Model = require('../../model/index'); // Assuming you have a Project model



// const { validationResult } = require('express-validator');

// exports.createProject = async (req, res) => {
//   // Validate input data
//   const {Po} = Model
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }

//   const { name, description, created_by } = req.body;

//   try {
//     // Create a new project
//     const project = new Project({
//       name,
//       description,
//       created_by, // This should be the logged-in user's ID
//     });

//     // Save project to database
//     await project.save();

//     res.status(201).json({
//       message: 'Project created successfully',
//       project,
//     });
//   } catch (err) {
//     res.status(500).json({ message: 'Server error', error: err.message });
//   }
// };
