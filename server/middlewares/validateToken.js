import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";
import User from "../models/User.js";

export const authRequired = (req, res, next) => {
  // Check if the user is authenticated, typically by verifying the JWT token

  // You can access the token from the request headers, cookies, or wherever it's stored
  const token = req.cookies.token || req.headers.authorization; 

  // Verify the token using your JWT verification logic here
  // For example, you can use the `jsonwebtoken` library to verify the token
  // Replace 'your-secret-key' with your actual JWT secret key
  jwt.verify(token, TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    // If the token is valid, you can access the decoded user data in `decoded`
    // You can attach the user data to the request object for use in subsequent middleware or route handlers
    req.user = decoded;
    next();
  });
};
