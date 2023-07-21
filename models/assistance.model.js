import { DataTypes } from "sequelize";
import { sequelize } from "../config/sql/conectionDb.js";
import UserHotel  from "./userHotel.model.js";

export const Assistance = sequelize.define("assistance", {
  idAssistance: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  idUser: {
    type: DataTypes.INTEGER,
  },
  loginTimeAssistance: {
    type: DataTypes.DATE,
  },
  logoutTimeAssistance: {
    type: DataTypes.DATE,
  },
  hourCountAssistance: {
    type: DataTypes.INTEGER,
    unique: true,
  },
});
