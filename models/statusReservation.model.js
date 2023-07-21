import { DataTypes } from "sequelize";
import { sequelize } from "../config/sql/conectionDb.js";
import { Reservation } from "./reservation.model.js";

const StatusReservation = sequelize.define("statusReservation", {
  idStatusReservation: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    unique: true,
  },
});

StatusReservation.hasMany(Reservation, {
  foreignKey: "idStatusReservation",
  sourceKey: "idStatusReservation",
});

Reservation.belongsTo(StatusReservation, {
  foreignKey: "idStatusReservation",
  sourceKey: "idStatusReservation"
})

export  default StatusReservation