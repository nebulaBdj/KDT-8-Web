const { DataTypes } = require("sequelize")

const studentModel = (sequelize) => {
    const Stdent = sequelize.define(
        'student',
        {
            id:{
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncreament: true,
            },
            name: {
                type: DataTypes.STRING(15),
                allowNull: false,
            },
            major:{
                type: DataTypes.STRING(31),
                allowNull: false,
            },
            enroll: {
                type: DataTypes.INTEGER,
                allowNull: false,
            }
        });
        return Stdent;
}

module.exports = studentModel; 