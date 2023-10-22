import User from "../models/User.js";
import bcrypt from "bcrypt";
import { createAccessToken } from "../libs/jwt.js";
import {
  addToBlacklist,
  removeFromBlacklist,
  isTokenBlacklisted,
} from "./blacklist.js";

// User sign-up logic
export async function signup(req, res) {
  try {
    // Extract user information from the request body
    const { username, email, password } = req.body;

    // Check if a user with the same email already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    // Generate a salt
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);

    // Hash the password
    const passwordHash = bcrypt.hashSync(password, salt);

    // Create a new user instance with salt and hashed password
    const newUser = new User({
      username,
      email,
      passwordHash, // Store the hashed password
      salt, // Store the salt
    });

    // Save the user to the database
    const userSaved = await newUser.save();
    const token = await createAccessToken({ id: userSaved._id });
    res.cookie("token", token);
    res.status(201).json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
    });
  } catch (error) {
    console.error("Error in user sign-up:", error);
    res.status(500).json({ message: "Server error" });
  }
}

// User login logic
export async function login(req, res) {
  try {
    // Extract user information from the request body
    const { email, password } = req.body;

    // Find the user with the provided email
    const userFound = await User.findOne({ email });

    if (!userFound) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the password is correct
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
    });
  } catch (error) {
    console.error("Error in user sign-up:", error);
    res.status(500).json({ message: "Server error" });
  }
}

// Logout logic
export async function logout(req, res) {
  try {
    // Obtén el token del usuario desde las cookies o el encabezado de autorización
    const token = req.cookies.token || req.headers.authorization;

    // Verifica si el token está en la lista negra
    if (token && isTokenBlacklisted(token)) {
      return res.status(401).json({ message: "Token already invalidated" });
    }

    // Puedes eliminar la cookie del token almacenada en el cliente
    res.clearCookie("token");

    // Si estás almacenando tokens en una lista negra, agrega el token actual a la lista
    if (token) {
      removeFromBlacklist(token);
    }

    // Respond con un mensaje de éxito
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.error("Error in logout:", error);
    res.status(500).json({ message: "Server error" });
  }
}

export async function getProfile(req, res) {
  const userFound = await User.findById(req.user.id);

  if (!userFound) return res.status(400).json({ message: "User not found" });

  return res.json({
    id: userFound._id,
    username: userFound.username,
    email: userFound.email,
    createdAt: userFound.createdAt,
    updatedAt: userFound.updatedAt,
  });
}
import User from "../models/User.js";
import bcrypt from "bcrypt";
import { createAccessToken } from "../libs/jwt.js";
import { removeFromBlacklist } from "./blacklist.js";

export async function signup(req, res) {
  try {
    const {
      username,
      email,
      password,
      ubicacion,
      tarjetas,
      transacciones,
      dni,
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
      tarjetas,
      transacciones,
      dni,
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
      ubicacion, // Include the new fields in the response
      tarjetas,
      transacciones,
      dni,
    });
  } catch (error) {
    console.error("Error in user sign-up:", error);
    res.status(500).json({ message: "Server error" });
  }
}

export async function login(req, res) {
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
    });
  } catch (error) {
    console.error("Error in user sign-up:", error);
    res.status(500).json({ message: "Server error" });
  }
}

export async function logout(req, res) {
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

export async function getProfile(req, res) {
  const userFound = await User.findById(req.user.id);

  if (!userFound) return res.status(400).json({ message: "User not found" });

  res.json({
    id: userFound._id,
    username: userFound.username,
    email: userFound.email,
    createdAt: userFound.createdAt,
    updatedAt: userFound.updatedAt,
    ubicacion: userFound.ubicacion,
    tarjetas: userFound.tarjetas,
    transacciones: userFound.transacciones,
    dni: userFound.dni,
  });
}

export async function getAllUsers(req, res) {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error getting all users:", error);
    res.status(500).json({ message: "Server error" });
  }
}

// Get all users
export async function getAllUsers(req, res) {
  try {
    // Query the database to fetch all users
    const users = await User.find();

    // Respond with the list of users
    res.status(200).json(users);
  } catch (error) {
    console.error("Error getting all users:", error);
    res.status(500).json({ message: "Server error" });
  }
}
