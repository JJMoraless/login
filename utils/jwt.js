import jwt from "jsonwebtoken";
import { promisify } from "util";
import "dotenv/config";

const JWT_SECRET = process.env.JWT_SECRET;

export const createToken = async (payload) => {
  const asyncSign = promisify(jwt.sign);
  const token = await asyncSign({ id: payload }, JWT_SECRET, {
    expiresIn: "1d",
  });
  return token;
};

export const verifyToken = async (jwToken) => {
  try {
    const asyncVerify = promisify(jwt.verify);
    const dataToken = await asyncVerify(jwToken, JWT_SECRET);
    return dataToken;
  } catch (error) {
    return false
  }
};
