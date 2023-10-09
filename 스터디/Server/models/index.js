'use strict';

import Sequelize from 'sequelize';
// const process = require('process');
const env = 'development';
import cfg from '../config/config.js';
const config = cfg[env]
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

import TodosTable from './todosTable.js';
const tempTodosTable = TodosTable(sequelize)
db.TodosTable = tempTodosTable

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db
