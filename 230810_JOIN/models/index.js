'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};
const  sequelize = new Sequelize(config.database, config.username, config.password, config);


//모델

db.Student = require('./Students')(sequelize)
db.Classes = require('./Classes')(sequelize)

//관계형성
db.Student.hasMany(db.Classes, {foreignKey: 'student_id'});
db.Classes.belongsTo(db.Student, {foreignKey: 'student_id'});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
