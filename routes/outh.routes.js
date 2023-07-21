import { Router } from "express";
import { AuthController } from "../controllers/auth.controller.js";
// import { logIn, logOut, profile, register } from "../controllers/auth.controller.js";
// import { authRequired } from "../middlewares/validateToken.js";

const router = new Router();
const authController = new AuthController();

router.post("/register", authController.register);
router.post("/login", authController.login);

// router.post("/logout", logOut);
// router.get('/profile', authRequired ,profile)

export default router;
