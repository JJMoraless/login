import { DataTypes } from "sequelize";
import { sequelize } from "../config/sql/conectionDb.js";
import Room from "./room.model.js";

const RoomType = sequelize.define(
  "roomType",
  {
    idRoomType: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nameRoomType: {
      type: DataTypes.STRING(20),
      unique: true,
    },
  },
  {
    timestamps: false,
  }
);

RoomType.hasMany(Room, {
  foreignKey: "idRoomType",
  sourceKey: "idRoomType",
});

Room.belongsTo(RoomType, {
  foreignKey: "idRoomType",
  targetKey: "idRoomType",
});

export default RoomType