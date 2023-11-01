import { Router } from "express";
import * as userController from "../controllers/userController.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validate } from "../middlewares/validatorMiddleware.js";
import * as transactionController from "../controllers/transactionController.js";

// Importa los esquemas de validación
import { registerSchema, loginSchema } from "../schemas/userSchema.js";

const router = Router();

// Ruta para el registro de usuario con validación
router.post("/signup", validate(registerSchema), userController.signup); // Route for user signup

// Ruta para iniciar sesión de usuario con validación
router.post("/login", validate(loginSchema), userController.login); // Route for user login

router.post("/logout", userController.logout); // Route for user logout (added)
router.get("/", userController.getAllUsers);

// Ruta protegida con el middleware de autenticación
router.get("/profile", authRequired, userController.getProfile);

// Ruta para modificacion de usuario con validación
router.put("/updateUser/:userId", authRequired, userController.updateUser);

// Ruta para transacciones aprobadas
router.put(
  "/approveTransaction/:transactionId",
  authRequired,
  transactionController.approveTransaction
);

export default router;
