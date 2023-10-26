import mongoose from "mongoose";

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
      },
    ],
    datosUsuario: {
      nombresCompletos: String,
      foto: String, // Store the Cloudinary URL for the photo
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

export default mongoose.model("User", userSchema);
