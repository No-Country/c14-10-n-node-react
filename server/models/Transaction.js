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
    default: false,
  },
  approvalDate: {
    type: Date,
    default: null,
  },
  operadora: String, // Add the operadora field here
});

const Transaction = model("Transaction", transactionSchema);

export default Transaction;
