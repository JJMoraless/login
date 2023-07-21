import { DataTypes } from "sequelize";
import { sequelize } from "../config/sql/conectionDb.js";

const Stock = sequelize.define("stock", {
  amount: {
    type: DataTypes.STRING,
  },
});

