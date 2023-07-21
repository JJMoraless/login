import UserHotel from "../models/userHotel.model.js";
import { comparePass, encrypt } from "../utils/bcrypt.js";
import { createToken } from "../utils/jwt.js";

export class AuthService {
  async registerUser({ userHotel }) {
    const { passwordUser, ...restUser } = userHotel;
    const userFound = await UserHotel.findOne({
      where: {
        emailUser: userHotel.emailUser
      },
    });

    if (userFound) return "email || name || addres. ya estan  en uso";

    const passEncrypted = await encrypt(passwordUser);
    const userCreated = await UserHotel.create({
      passwordUser: passEncrypted,
      ...restUser,
    });

    return userCreated;
  }

  async logiUser({ emailUser, passwordUser }) {

    const userFound = await UserHotel.findOne({ emailUser });
    const isOkPass = await comparePass(passwordUser, userFound.passwordUser);

    if (!userFound) return "CREDENTIALS_INCORRET";
    if (!isOkPass) return "CREDENTIALS_INCORRET";

    const token = await createToken(userFound.idUser);
    return token;
  }
}
