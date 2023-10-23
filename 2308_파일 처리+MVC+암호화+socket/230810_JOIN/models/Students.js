const { DataTypes } = require("sequelize")

const studentModel = (sequelize) => {
    const Stdent = sequelize.define(
        'Student',
        {
            id:{
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            userid: {
                type: DataTypes.STRING(31),
                allowNull: false,
            },
            email : {
                type: DataTypes.STRING(31),

            },
            password : {
                type: DataTypes.STRING(255),
                allowNull: false,
            }
        });
        return Stdent;
}

module.exports = studentModel; 