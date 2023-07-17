import { Router } from "express";
import { logIn, logOut, profile, register } from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";

const router = new Router();


router.post("/register", register);
router.post("/login", logIn);
router.post("/logout", logOut);
router.get('/profile', authRequired ,profile)




export default router;
