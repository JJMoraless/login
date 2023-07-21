import { DataTypes } from "sequelize";
import { sequelize } from "../config/sql/conectionDb.js";
import { Costumer } from "./costumer.model.js";

export const City = sequelize.define("city", {
  idCity: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nameCity: {
    type: DataTypes.STRING(20),
    unique: true,
  },
});

City.hasMany(Costumer, {
  foreignKey: "idCity",
  sourceKey: "idCity",
});

Costumer.belongsTo(City, {
  foreignKey: "idCity",
  targetKey: "idCity"
})