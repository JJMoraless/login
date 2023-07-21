import { DataTypes } from "sequelize";
import { sequelize } from "../config/sql/conectionDb.js";
import { City } from "./city.model.js";

const Country = sequelize.define("country", {
  idCountry: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nameCountry: {
    type: DataTypes.STRING(20),
    unique: true,
  }
});

Country.hasMany(City, {
  foreignKey: "idCountry",
  sourceKey: "idCountry",
})

City.belongsTo(Country, {
  foreignKey: "idCountry",
  targetKey: "idCountry",
})


export {Country}