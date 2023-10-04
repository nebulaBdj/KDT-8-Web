const { DataTypes } = require('sequelize');

const Model = (sequelize) => {
    const todo = sequelize.define(
        'todo',
        {
            id : {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            title : {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            done : {
                type: DataTypes.TINYINT(1),
                allowNull: false,
            },
        },
        {
            tableName: "todo",
            timestamps: false,
        }
    );

    return {
        todo,
    };

};

module.exports = Model;