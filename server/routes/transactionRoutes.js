import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { createTransactionSchema } from "../schemas/transactionSchema.js";
import { validateTransaction } from "../middlewares/validatorMiddleware.js";

const router = Router();

// Import the deposit controller
import { makeDeposit } from "../controllers/addFundsController.js";

// Import the transaction controller
import {
  getTransactionHistory,
  deleteTransaction,
  addTransaction,
} from "../controllers/transactionController.js"; // Import the transaction controller

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

export default router;
