import { body } from 'express-validator';

// Esquema para validar el registro de usuarios
export const registerSchema = [
  body('username')
    .notEmpty()
    .withMessage('El nombre de usuario es obligatorio')
    .isLength({ min: 4 })
    .withMessage('El nombre de usuario debe tener al menos 4 caracteres'),

  body('email')
    .notEmpty()
    .withMessage('El correo electrónico es obligatorio')
    .isEmail()
    .withMessage('El correo electrónico no es válido'),

  body('password')
    .notEmpty()
    .withMessage('La contraseña es obligatoria')
    .isLength({ min: 6 })
    .withMessage('La contraseña debe tener al menos 6 caracteres'),

  // Puedes agregar más validaciones según tus requisitos
];

// Esquema para validar el inicio de sesión de usuarios
export const loginSchema = [
  body('email')
    .notEmpty()
    .withMessage('El correo electrónico es obligatorio')
    .isEmail()
    .withMessage('El correo electrónico no es válido'),

  body('password')
    .notEmpty()
    .withMessage('La contraseña es obligatoria'),

  // Puedes agregar más validaciones según tus requisitos
];
