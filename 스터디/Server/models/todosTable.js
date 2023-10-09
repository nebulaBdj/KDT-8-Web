import { DataTypes } from 'sequelize';

const TodosTable = (sequelize) => {
    return sequelize.define('TodosTable', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        progress: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'todo'
        }
    });
};

export default TodosTable;
