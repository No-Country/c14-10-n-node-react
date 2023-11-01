import express from "express";
import connectToDatabase from "./db.js";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { authRequired } from "./middlewares/validateToken.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

import userRoutes from "./routes/userRoutes.js";
import transactionRoutes from "./routes/transactionRoutes.js";
import cardsRoutes from "./routes/cardsRoutes.js";

// Use the authRequired middleware for routes that require authentication
app.use("/api/users/profile", authRequired, userRoutes);
app.use("/api/transactions", authRequired, transactionRoutes);
app.use("/api/cards", authRequired, cardsRoutes);
app.use("/api/users", userRoutes);
app.use("/api/transactions", transactionRoutes);

connectToDatabase()
  .then(() => {
    console.log("Connection to the database established");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });

export default app;
