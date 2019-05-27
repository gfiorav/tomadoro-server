import sequelize from "sequelize";
import db from "../db";

const attributes: sequelize.ModelAttributes = {
  email: {
    allowNull: false,
    type: sequelize.STRING,
    validate: {
      isEmail: true,
    },
  },
};

const options: sequelize.InitOptions = {};

export = db.define("session", attributes, options);
