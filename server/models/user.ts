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
  uuid: {
    defaultValue: sequelize.UUIDV4,
    primaryKey: true,
    type: sequelize.UUID,
  },
};

export = db.define("user", attributes);
