import { DataTypes } from "sequelize";
import { sequelize } from "../config/sql/conectionDb.js";

export const Costumer = sequelize.define("costumer", {
  idCostumer: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  typeIdCostumer: {
    type: DataTypes.STRING(20),
  },
  nameCostumer: {
    type: DataTypes.STRING(20),
  },  
  birthdateCustomer: {
    type: DataTypes.DATEONLY,
  },
  addressCustomer: {
    type: DataTypes.STRING(40),
  },
  emailCustomer: {
    type: DataTypes.STRING(20),
  },
  phoneCustomer: {
    type: DataTypes.INTEGER,
  },
  jobCustomer: {
    type: DataTypes.STRING(20),
  },
  companyCustomer: {
    type: DataTypes.STRING(40),
  },
});



