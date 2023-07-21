import { DataTypes } from "sequelize";
import { sequelize } from "../config/sql/conectionDb.js";
import { Note } from "./note.model.js";
import { Reservation } from "./reservation.model.js";
import { Assistance } from "./assistance.model.js";

const UserHotel = sequelize.define("userHotel", {
  idUser: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  nameUser: {
    type: DataTypes.STRING(100),
  },
  groupUser: {
    type: DataTypes.INTEGER,
  },
  addressUser: {
    type: DataTypes.STRING(40),
  },
  emailUser: {
    type: DataTypes.STRING,
    unique: true,
  },
  passwordUser: {
    type: DataTypes.STRING,
  },
  activeUser: {
    type: DataTypes.BOOLEAN,
  },
});

// Notas
UserHotel.hasMany(Note, {
  foreignKey: "idUser",
  sourceKey: "idUser",
});

// Reservas
UserHotel.hasMany(Reservation, {
  foreignKey: "idUser",
  sourceKey: "idUser",
});

// Asistencia
UserHotel.hasMany(Assistance, {
  foreignKey: "idUser",
  sourceKey: "idUser",
});

Note.belongsTo(UserHotel, {
  foreignKey: "idUser",
  targetKey: "idUser",
});

Reservation.belongsTo(UserHotel, {
  foreignKey: "idUser",
  targetKey: "idUser",
});

Assistance.belongsTo(UserHotel, {
  foreignKey: "idUser",
  targetKey: "idUser",
});


export default  UserHotel
