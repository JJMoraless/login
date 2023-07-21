import Room from "../models/room.model.js";
import RoomType from "../models/roomType.model.js";
import RoomStatus from "../models/roomStatus.js";

export class RoomsService {
  async fetchRooms() {
    const roomsFound = await Room.findAll({
      include: [
        {
          model: RoomType,
          attributes: ["nameRoomType"],
        },
      ],
    });
    return roomsFound;
  }

  async addRoom({ room }) {
    const createdRoom = await Room.create(room);
    return createdRoom;
  }

  async fetchRoom({ idRoom }) {
    const roomFound = await Room.findByPk(idRoom, {
      include: [
        {
          model: RoomType,
          attributes: ["nameRoomType"],
        },
      ],
    });
    return roomFound;
  }


  //TODO: falta 
  async updateRoom({ idRoom, room }) {
    const roomFound = await Room.findByPk(idRoom);
    const roomSaved = roomFound.set(room).save();
    return roomSaved;
  }

  //TODO: falta 
  async removeRoom({ idRoom }) {
    await Room.destroy({
      where: {
        id: idRoom,
      },
    });
    return true;
  }

  async fetchTypesRoom() {
    const roomsTypes = await RoomType.findAll();
    return roomsTypes;
  }

  async fetchStatusesRooms() {
    const statuses = RoomStatus.findAll({
      include: [Room],
    });
    return statuses;
  }
}
