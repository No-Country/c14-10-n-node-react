import mongoose from "mongoose";
import Tarjetas from "./Tarjetas.js";

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

export default User;
