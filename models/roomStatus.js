import { DataTypes } from "sequelize";
import { sequelize } from "../config/sql/conectionDb.js";
import Room from "./room.model.js";

const RoomStatus = sequelize.define("roomStatus", {
  idRoomStatus: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  nameStatusRoom: {
    type: DataTypes.STRING(60),
    unique: true,
  },
});

RoomStatus.hasMany(Room, {
  foreignKey: "idRoomStatus",
  sourceKey: "idRoomStatus",
});

Room.belongsTo(RoomStatus, {
  foreignKey: "idRoomStatus",
  targetKey: "idRoomStatus",
})

export default RoomStatus;
