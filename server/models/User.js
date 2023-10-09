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
      required: true, // Debes almacenar el hash de la contraseña en lugar de la contraseña en texto claro
    },
    salt: {
      type: String,
      required: true, // Puedes usar esto para mejorar la seguridad al generar hashes de contraseña únicos
    },
    isActive: {
      type: Boolean,
      default: true, // Puedes establecer esto en false si deseas desactivar una cuenta de usuario
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
