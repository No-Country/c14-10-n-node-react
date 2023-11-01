import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";
import User from "../models/User.js";

export const authRequired = (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization;

  if (!token) {
    console.log("No token found in headers or cookies");
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token, TOKEN_SECRET, (err, decoded) => {
    if (err) {
      console.log("Token verification failed:", err);
      return res.status(401).json({ message: "Unauthorized" });
    }

    req.user = decoded;
    next();
  });
};
