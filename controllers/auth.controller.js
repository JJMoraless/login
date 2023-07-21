import { createToken } from "../utils/jwt.js";
import { AuthService } from "../services/auth.service.js";
import UserHotel from "../models/userHotel.model.js";

const authService = new AuthService();

export class AuthController {
  async register(req, res) {
    try {
      const userHotel = req.body;
      const userRegistered = await authService.registerUser({ userHotel });
      res.status(200).json(userRegistered);
    } catch (error) {
      res.status(404).json({ error });
    }
  }

  async login(req, res) {
    try {
      const { emailUser, passwordUser } = req.body;
      const token = await authService.logiUser({ emailUser, passwordUser });

      if (token === "CREDENTIALS_INCORRET")
        return res.status(403).json(token);

      res.cookie("token", token);
      res.status(200).json({message: "autenticado correctamete"});

    } catch (error) {
      console.log("paso por aca");
      res.status(404).json(error);
    }
  }

  async logOut() {
    res.cookie("token", "", {
      expires: new Date(0),
    });
    res.sendStatus(200);
  }

  async profile() {
    const userFound = await User.findById(req.user.id);
    if (!userFound) return res.status(400).json({ message: "User not found" });
    const { password: excludePass, ...resUser } = userFound._doc;
    res.json(resUser);
  }
}
