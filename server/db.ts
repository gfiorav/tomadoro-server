import Sequelize from "sequelize";

const db: sequelize.Sequelize = new Sequelize(
  process.env.DATABASE_NAME || "tomadoro_dev",
  process.env.DATABASE_USERNAME || "tomadoro",
  process.env.DATABASE_PASSWORD || "tomadoro",
  {
    dialect: "postgres",
    host: process.env.DATABASE_HOST || "localhost",
  },
);

export = db;
