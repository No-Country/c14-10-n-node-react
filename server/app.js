import express from "express";
import connectToDatabase from "./db.js";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser"; 

const app = express();

// Middleware para manejar solicitudes JSON
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// Middleware para permitir solicitudes desde cualquier origen (CORS)
app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());

// Definir rutas de la aplicación (debes crear tus propias rutas)
import userRoutes from "./routes/userRoutes.js";
import transactionRoutes from "./routes/transactionRoutes.js";
app.use("/api/users", userRoutes);
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});
app.use("/api/transactions", transactionRoutes);

// Llamar a la función para conectar a la base de datos
connectToDatabase()
  .then(() => {
    console.log("Conexión a la base de datos establecida");
  })
  .catch((error) => {
    console.error("Error al conectar a la base de datos:", error);
  });

export default app;
