import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";
import User from "../models/User.js";

export const authRequired = (req, res, next) => {
  const token = req.cookies.TOKEN_SECRET || req.headers.authorization;

  jwt.verify(token, TOKEN_SECRET, (err, decoded) => {
    if (err) {
      console.log(token)
      return res.status(401).json({ message: "Unauthorized" });
    }

    req.user = decoded;
    next();
  });
};
