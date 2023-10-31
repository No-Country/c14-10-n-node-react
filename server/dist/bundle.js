'use strict';

var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var expressValidator = require('express-validator');

// Cadena de conexión a tu base de datos en MongoDB Atlas
const dbUri =
  "mongodb+srv://alekosescu:8CTCccLnCZS2llXB@cluster0.ec3slfa.mongodb.net/database?retryWrites=true&w=majority";

// Crear una función asincrónica para conectar a la base de datos
async function connectToDatabase() {
  try {
    await mongoose.mongoose.connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Conexión a MongoDB Atlas establecida con éxito!");
  } catch (err) {
    console.error("Error de conexión a MongoDB Atlas:", err);
  }
}

const tarjetasSchema = new mongoose.Schema({
  numero: {
    type: String,
    required: true,
    unique: true,
  },
  fechaExpiracion: {
    type: String,
    required: true,
  },
  codigoCVC: {
    type: String,
    required: true,
  },
  operadora: String,
});

mongoose.model("Tarjetas", tarjetasSchema);

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    salt: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    ubicacion: String,
    tarjetas: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tarjetas",
      },
    ],
    datosUsuario: {
      nombresCompletos: String,
      foto: String, // Almacenar la URL de Cloudinary para la foto
      direccion: {
        pais: String,
        region: String,
        zip: String,
      },
      numeroTelefonico: String,
      dni: String,
    },
    transacciones: [
      {
        de: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        para: String, // Correo Electrónico
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

const TOKEN_SECRET = 'tokenSecret';

function createAccessToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      TOKEN_SECRET,
      {
        expiresIn: "1h",
      },
      (err, token) => {
          if (err) reject(err);
          resolve(token);
      }
    );
  });
}

// Este módulo almacena tokens JWT que deben ser invalidados

const tokenBlacklist = new Set();

function removeFromBlacklist(token) {
  tokenBlacklist.delete(token);
}

async function signup(req, res) {
  try {
    const {
      username,
      email,
      password,
      ubicacion,
      datosUsuario,
      transacciones,
      dni,
      tarjetas, 
    } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const passwordHash = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      email,
      passwordHash,
      salt,
      ubicacion,
      datosUsuario,
      transacciones,
      dni,
      tarjetas, 
    });

    const userSaved = await newUser.save();
    const token = await createAccessToken({ id: userSaved._id });
    res.cookie("token", token);
    res.status(201).json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
      ubicacion,
      datosUsuario,
      transacciones,
      dni,
      tarjetas, 
    });
  } catch (error) {
    console.error("Error in user sign-up:", error);
    res.status(500).json({ message: "Server error" });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;

    const userFound = await User.findOne({ email });

    if (!userFound) {
      return res.status(404).json({ message: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(
      password,
      userFound.passwordHash
    );

    if (!passwordMatch) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    const token = await createAccessToken({ id: userFound._id });

    res.cookie("token", token);
    res.status(201).json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
      ubicacion: userFound.ubicacion,
      datosUsuario: userFound.datosUsuario,
      transacciones: userFound.transacciones,
      dni: userFound.dni,
      tarjetas: userFound.tarjetas, 
    });
  } catch (error) {
    console.error("Error in user sign-up:", error);
    res.status(500).json({ message: "Server error" });
  }
}

async function logout(req, res) {
  try {
    const token = req.cookies.token || req.headers.authorization;

    res.clearCookie("token");

    if (token) {
      removeFromBlacklist(token);
    }

    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.error("Error in logout:", error);
    res.status(500).json({ message: "Server error" });
  }
}

async function getProfile(req, res) {
  const userFound = await User.findById(req.user.id);

  if (!userFound) return res.status(400).json({ message: "User not found" });

  res.json({
    id: userFound._id,
    username: userFound.username,
    email: userFound.email,
    createdAt: userFound.createdAt,
    updatedAt: userFound.updatedAt,
    ubicacion: userFound.ubicacion,
    datosUsuario: userFound.datosUsuario,
    transacciones: userFound.transacciones,
    dni: userFound.dni,
    tarjetas: userFound.tarjetas, 
  });
}

async function getAllUsers(req, res) {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error getting all users:", error);
    res.status(500).json({ message: "Server error" });
  }
}

const authRequired = (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization;

  jwt.verify(token, TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    req.user = decoded;
    next();
  });
};

// Middleware de validación
function validate(schema) {
  return async (req, res, next) => {
    // Ejecuta las validaciones definidas en el esquema
    await Promise.all(schema.map((validation) => validation.run(req)));

    // Obtiene los resultados de la validación
    const errors = expressValidator.validationResult(req);

    // Si hay errores, envía una respuesta con los mensajes de error
    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map((error) => error.msg);
      return res.status(400).json({ errors: errorMessages });
    }

    // Si no hay errores, continúa con la siguiente función de middleware
    next();
  };
}

function validateTransaction(schema) {
  return async (req, res, next) => {
    // Ejecuta las validaciones definidas en el esquema de transacción
    await Promise.all(schema.map((validation) => validation.run(req)));

    // Obtiene los resultados de la validación
    const errors = expressValidator.validationResult(req);

    // Si hay errores, envía una respuesta con los mensajes de error
    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map((error) => error.msg);
      return res.status(400).json({ errors: errorMessages });
    }

    // Si no hay errores, continúa con la siguiente función de middleware
    next();
  };
}

// Esquema para validar el registro de usuarios
const registerSchema = [
  expressValidator.body('username')
    .notEmpty()
    .withMessage('El nombre de usuario es obligatorio')
    .isLength({ min: 4 })
    .withMessage('El nombre de usuario debe tener al menos 4 caracteres'),

  expressValidator.body('email')
    .notEmpty()
    .withMessage('El correo electrónico es obligatorio')
    .isEmail()
    .withMessage('El correo electrónico no es válido'),

  expressValidator.body('password')
    .notEmpty()
    .withMessage('La contraseña es obligatoria')
    .isLength({ min: 6 })
    .withMessage('La contraseña debe tener al menos 6 caracteres'),

  // Puedes agregar más validaciones según tus requisitos
];

// Esquema para validar el inicio de sesión de usuarios
const loginSchema = [
  expressValidator.body('email')
    .notEmpty()
    .withMessage('El correo electrónico es obligatorio')
    .isEmail()
    .withMessage('El correo electrónico no es válido'),

  expressValidator.body('password')
    .notEmpty()
    .withMessage('La contraseña es obligatoria'),

  // Puedes agregar más validaciones según tus requisitos
];

const router$1 = express.Router();

// Ruta para el registro de usuario con validación
router$1.post("/signup", validate(registerSchema), signup); // Route for user signup

// Ruta para iniciar sesión de usuario con validación
router$1.post("/login", validate(loginSchema), login); // Route for user login

router$1.post("/logout", logout); // Route for user logout (added)
router$1.get("/", getAllUsers);

// Ruta protegida con el middleware de autenticación
router$1.get("/profile", authRequired, getProfile);

// Define el esquema de validación para la creación de una transacción
const createTransactionSchema = [
  expressValidator.body("amount")
    .notEmpty()
    .withMessage("El campo 'amount' es obligatorio")
    .isNumeric()
    .withMessage("El campo 'amount' debe ser un número"),

  expressValidator.body("description")
    .notEmpty()
    .withMessage("El campo 'description' es obligatorio")
    .isString()
    .withMessage("El campo 'description' debe ser una cadena de texto"),

  // Puedes agregar más validaciones según tus necesidades
];

const { Schema, model } = mongoose;

const transactionSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  isApproved: {
    type: Boolean,
    default: false,
  },
  approvalDate: {
    type: Date,
    default: null,
  },
  operadora: String, // Add the operadora field here
});

const Transaction = model("Transaction", transactionSchema);

// Adding a new transaction
async function addTransaction(req, res) {
  try {
    // Extracting transaction information from the request body
    const { userId, amount, description, operadora } = req.body;

    // Creating a new transaction instance
    const newTransaction = new Transaction({
      userId,
      amount,
      description,
      operadora,
    });

    // Saving the transaction to the database
    await newTransaction.save();

    // Responding with a success message
    res.status(201).json({ message: "Transaction added successfully" });
  } catch (error) {
    console.error("Error adding transaction:", error);
    res.status(500).json({ message: "Server error" });
  }
}

// Get transaction history
async function getTransactionHistory(req, res) {
  try {
    const { userId } = req.params; // Extracting the userId from URL parameters

    // Querying the database for transactions by user ID
    const transactions = await Transaction.find({ userId });

    res.status(200).json(transactions);
  } catch (error) {
    console.error("Error in getTransactionHistory:", error);
    res.status(500).json({ message: "Server error" });
  }
}

// Delete a transaction
async function deleteTransaction(req, res) {
  try {
    const { transactionId } = req.params; // Extracting the transactionId from URL parameters

    console.log("Deleting transaction with ID:", transactionId);

    // Here we will use the transactionId to perform the deletion or any other necessary logic
    // For example, we can use Mongoose to delete a transaction from the database
    await Transaction.findByIdAndDelete(transactionId);

    console.log("Transaction deleted successfully");

    res.status(204).json({ message: "Transaction deleted successfully" });
  } catch (error) {
    console.error("Error deleting transaction:", error);
    res.status(500).json({ message: "Server error" });
  }
}

const router = express.Router();

// Define routes for transactions, including deposit

// Apply validateTransaction middleware to the addTransaction route
router.post(
  "/add",
  authRequired,
  validateTransaction(createTransactionSchema),
  addTransaction
);

router.get("/history/:userId", authRequired, getTransactionHistory); // Route for transaction history
router.delete("/delete/:transactionId", authRequired, deleteTransaction);

const app = express();

// Middleware para manejar solicitudes JSON
app.use(express.json());

// Middleware para permitir solicitudes desde cualquier origen (CORS)
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use("/api/users", router$1);
app.use("/api/transactions", router);

// Llamar a la función para conectar a la base de datos
connectToDatabase()
  .then(() => {
    console.log("Conexión a la base de datos establecida");
  })
  .catch((error) => {
    console.error("Error al conectar a la base de datos:", error);
  });

module.exports = app;
