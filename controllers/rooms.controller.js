import { RoomsService } from "../services/rooms.service.js";
const roomService = new RoomsService();

export class RoomController {
  async postRoom(req, res) {
    try {
      const createdRoom = await roomService.addRoom(req.body);
      res.status(200).json(createdRoom);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async getRoom(req, res) {
    try {
      const idRoom = req.params.id; 
      const roomFound = await roomService.fetchRoom({idRoom});
      res.send(roomFound);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async getRooms(req, res) {
    try {
      const roomsFound = await roomService.fetchRooms();
      res.json(roomsFound);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async putRoom(req, res) {
    try {
      const roomFound = await roomService()
      const roomUpdated = await roomService.updateRoom(1)
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async deleteRoom(req, res) {
    try {
      const idRoom = req.params.id;
      await roomService.removeRoom(idRoom);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async getTypeRooms(req, res) {
    try {
      const roomsTypes = await roomService.fetchTypesRoom();
      res.json(roomsTypes);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async getStatusesRooms(req, res){
    try {
      const roomsStatusesFound = await roomService.fetchStatusesRooms();
      res.json(roomsStatusesFound);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}
