// Import your models if needed
import User from "../models/User.js";
import Transaction from "../models/Transaction.js";

// Controller function for making a deposit
export async function makeDeposit(req, res) {
  try {
    // Extract deposit data from the request body
    const { userId, amount } = req.body;

    // Validate the amount
    if (typeof amount !== "number" || amount <= 0) {
      return res.status(400).json({ message: "Invalid deposit amount" });
    }

    // Find the user by their ID
    const user = await User.findById(userId);

    if (!user) {
      console.log("User not found:", userId); // Log when the user is not found
      return res.status(404).json({ message: "User not found" });
    }

    // Update the user's balance with the deposit amount
    user.balance += amount;

    // Create a transaction record for the deposit
    const transaction = new Transaction({
      userId: user._id,
      amount,
      description: "Deposit",
    });

    // Save the updated user and the transaction to the database
    await user.save();
    await transaction.save();

    // Respond with a success message
    res.status(201).json({ message: "Deposit successful" });
  } catch (error) {
    console.error("Error in makeDeposit:", error); // Log the error
    res.status(500).json({ message: "Internal server error" });
  }
}
