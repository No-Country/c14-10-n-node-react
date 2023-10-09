import { body } from "express-validator";

// Define el esquema de validación para la creación de una transacción
export const createTransactionSchema = [
  body("amount")
    .notEmpty()
    .withMessage("El campo 'amount' es obligatorio")
    .isNumeric()
    .withMessage("El campo 'amount' debe ser un número"),

  body("description")
    .notEmpty()
    .withMessage("El campo 'description' es obligatorio")
    .isString()
    .withMessage("El campo 'description' debe ser una cadena de texto"),

  // Puedes agregar más validaciones según tus necesidades
];
