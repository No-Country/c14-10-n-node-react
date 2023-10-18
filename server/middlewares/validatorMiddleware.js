import { validationResult } from "express-validator";


// Middleware de validación
export function validate(schema) {
  return async (req, res, next) => {
    // Ejecuta las validaciones definidas en el esquema
    await Promise.all(schema.map((validation) => validation.run(req)));

    // Obtiene los resultados de la validación
    const errors = validationResult(req);

    // Si hay errores, envía una respuesta con los mensajes de error
    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map((error) => error.msg);
      return res.status(400).json({ errors: errorMessages });
    }

    // Si no hay errores, continúa con la siguiente función de middleware
    next();
  };
}

export function validateTransaction(schema) {
  return async (req, res, next) => {
    // Ejecuta las validaciones definidas en el esquema de transacción
    await Promise.all(schema.map((validation) => validation.run(req)));

    // Obtiene los resultados de la validación
    const errors = validationResult(req);

    // Si hay errores, envía una respuesta con los mensajes de error
    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map((error) => error.msg);
      return res.status(400).json({ errors: errorMessages });
    }

    // Si no hay errores, continúa con la siguiente función de middleware
    next();
  };
}
