import { DataTypes } from "sequelize";
import { sequelize } from "../config/sql/conectionDb.js";
import { Reservation } from "./reservation.model.js";

const Room = sequelize.define("room", {
  idRoom: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  pricePerNightRoom: {
    type: DataTypes.INTEGER,
  },
  floorRoom: {
    type: DataTypes.INTEGER,
  },
  avaibleRoom: {
    type: DataTypes.BOOLEAN,
  },
  capacityRoom: {
    type: DataTypes.INTEGER,
  },
  descriptionRoom: {
    type: DataTypes.TEXT
  }
});

Room.hasMany(Reservation, {
  foreignKey: "idRoom",
  sourceKey: "idRoom"
})

Reservation.belongsTo(Room, {
  foreignKey: "idRoom",
  targetKey: "idRoom"
})

export default Room