import { verifyToken } from "../libs/jwt.js";

export const authRequired = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token)
      return res
        .status(401)
        .json({ message: "no token, authorization denied" });

    const dataToken = await verifyToken(token);
    if (!dataToken)
      return res
        .status(401)
        .json({ message: "token invalid, authorization denied" });

    req.user = dataToken;
    next();
  } catch (error) {
    res.status(501).json(error);
  }
};
