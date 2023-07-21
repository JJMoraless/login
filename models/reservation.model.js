
import { DataTypes } from "sequelize";
import { sequelize } from "../config/sql/conectionDb.js";
import { Service } from "./service.model.js";

export const Reservation = sequelize.define("reservation", {
  idReservation: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  checkInDateReservation: {
    type: DataTypes.DATE,
  },
  checkOutDateReservation: {
    type: DataTypes.DATE,
  },
  daysReservation: {
    type: DataTypes.INTEGER,
  },
  companionReservation: {
    type: DataTypes.BOOLEAN,
  },
  reasonReservation: {
    type: DataTypes.STRING(20),
  },
});

Reservation.belongsToMany(Service, { through: "reservations_x_services" });
Service.belongsToMany(Reservation, { through: "reservations_x_services" });


