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

db.Student = require('./Students')(sequelize);
db.Classes = require('./Classes')(sequelize);
db.StudentProfile = require('./Studentprofile')(sequelize);

//관계형성
//1:1 학생과 프로필
db.Student.hasOne(db.StudentProfile);
db.StudentProfile.belongsTo(db.Student);

//1:다 학생과 강의
db.Student.hasMany(db.Classes);//, {foreignKey: 'student_id'}외래키 지정을 안하면 알아서 지정을해준다.
db.Classes.belongsTo(db.Student);//, {foreignKey: 'student_id'}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
