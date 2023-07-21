import { DataTypes } from "sequelize";
import { sequelize } from "../config/sql/conectionDb.js";
// import { UserHotel } from "./userHotel.model.js";

export const Note = sequelize.define("note", {
  idNote: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  titleNote: {
    type: DataTypes.STRING(20),
  },
  contentNote: {
    type: DataTypes.STRING(200),
  },
  createAtNote: {
    type: DataTypes.DATE,
  },
  modifyAtNote: {
    type: DataTypes.DATE,
  },
});
