import { createToken } from "../libs/jwt.js";
import { encrypt, verify } from "../libs/bcrypt.js";
import User from "../models/user.model.js";

export const register = async (req, res) => {
  try {
    const { email, password, username } = req.body;
    const passHash = await encrypt(password, 8);
    const newUser = new User({
      email,
      username,
      password: passHash,
    });

    const userSaved = await newUser.save();
    const token = await createToken(userSaved._id);
    res.cookie("token", token);

    const { password: escludePass, ...restUser } = userSaved._doc;
    res.json(restUser);
  } catch (error) {
    res.send(error);
  }
};

export const logIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userFound = await User.findOne({ email });
    if (!userFound) return res.status(401).json({ message: "user not found" });

    const isOkPass = await verify(password, userFound.password);
    if (!isOkPass) res.status(401).json({ message: "password mismatch" });

    const token = await createToken(userFound._id);
    res.cookie("token", token);

    const { password: passExclude, ...restUser } = userFound._doc;
    res.json(restUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const logOut = (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });
  res.sendStatus(200);
};

export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id);
  if (!userFound) return res.status(400).json({ message: "User not found" });
  const { password: excludePass, ...resUser } = userFound._doc;
  res.json(resUser);
};
