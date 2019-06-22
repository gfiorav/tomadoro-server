import sequelize from "sequelize";
import db from "../db";

const attributes: sequelize.ModelAttributes = {
  uuid: {
    defaultValue: sequelize.UUIDV4,
    primaryKey: true,
    type: sequelize.UUID,
  },
};

export = db.define("session", attributes);
