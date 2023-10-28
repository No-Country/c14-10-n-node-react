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
    datosUsuario: userFound.datosUsuario,
    transacciones: userFound.transacciones,
    dni: userFound.dni,
    tarjetas: userFound.tarjetas, 
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
