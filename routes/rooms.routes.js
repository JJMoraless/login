import { Router } from "express";
import { RoomController } from "../controllers/rooms.controller.js";
import { authRequired } from "../middlewares/auth/validateToken.js";

const roomController = new RoomController();

const router = Router();

router.get("/rooms/statuses", authRequired, roomController.getStatusesRooms);
router.get("/rooms/types", authRequired, roomController.getTypeRooms);
router.post("/rooms", authRequired, roomController.postRoom);
router.get("/rooms", authRequired, roomController.getRooms);
router.get("/rooms/:id", authRequired, roomController.getRoom);

export default router;
