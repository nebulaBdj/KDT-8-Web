const { DataTypes } = require('sequelize');

const Model = (sequelize) => {
    return sequelize.define(
        '230824_user',
        {

            id : {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            userid: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING(10),
                allowNull: false,
            },
            pw: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
        }
        );
};

module.exports = Model;// 이렇게 작성하면 외부에서도 사용 가능하다.