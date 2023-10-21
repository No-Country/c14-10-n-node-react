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
      required: true, // Store the password hash, not plain text
    },
    salt: {
      type: String,
      required: true, // Use this for generating unique password hashes
    },
    isActive: {
      type: Boolean,
      default: true, // Set to false to deactivate a user account
    },
    ubicacion: String,
    tarjetas: [String],
    transacciones: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Transaction" },
    ],
    dni: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
