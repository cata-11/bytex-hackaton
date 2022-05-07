import { DataTypes, Sequelize } from "sequelize";
import db from "../util/database";


const User = db.define(
    "user", {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        email: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        first_name: {
            type: DataTypes.TEXT,
        },
        last_name: {
            type: DataTypes.TEXT,
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        is_active: {
            type: DataTypes.BOOLEAN,
        },
    }, {
        freezeTableName: true,
        timestamps: false,
    }
);

module.exports = db.model(User);