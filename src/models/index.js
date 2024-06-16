const sequelize = require('../config/database');
const User = require('./user');
const Employee = require('./employee');
const Department = require('./department');

Department.hasMany(Employee, { foreignKey: 'departmentId' });
Employee.belongsTo(Department, { foreignKey: 'departmentId' });

sequelize.sync({ force: true })
  .then(() => console.log('Database & tables created!'));

module.exports = { User, Employee, Department };
