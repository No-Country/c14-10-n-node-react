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
