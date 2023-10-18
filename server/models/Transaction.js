import mongoose from "mongoose";

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
    default: false, // Puedes establecer esto en true cuando se apruebe la transacción
  },
  approvalDate: {
    type: Date,
    default: null, // Puedes establecer aquí la fecha de aprobación de la transacción
  },
  // Agrega más campos según tus necesidades
});

const Transaction = model("Transaction", transactionSchema);

export default Transaction;
