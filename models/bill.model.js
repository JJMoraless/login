import { DataTypes } from "sequelize";
import { sequelize } from "../config/sql/conectionDb.js";

export const Bill = sequelize.define("bill", {
  idBill: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  totalPerNightBill: {
    type: DataTypes.INTEGER,
  },
  totalPerServiceBill: {
    type: DataTypes.INTEGER,
  },
  discountBill: {
    type: DataTypes.INTEGER,
  },
  chargesBill : {
    type: DataTypes.INTEGER,
  },
  totalBruteBill: {
    type: DataTypes.INTEGER,
  },
  toPayBill: {
    type: DataTypes.INTEGER,
  },

});