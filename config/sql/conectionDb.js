import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("db_dreamSoft", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
