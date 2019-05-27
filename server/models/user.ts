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

export = db.define("user", attributes);
