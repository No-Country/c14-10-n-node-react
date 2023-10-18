import Transaction from "../models/Transaction.js";

// Add a new transaction
export async function addTransaction(req, res) {
  try {
    // Extract transaction information from the request body
    const { userId, amount, description } = req.body;

    // Create a new transaction instance
    const newTransaction = new Transaction({
      userId,
      amount,
      description,
    });

    // Save the transaction to the database
    await newTransaction.save();

    // Respond with a success message
    res.status(201).json({ message: "Transaction added successfully" });
  } catch (error) {
    console.error("Error adding transaction:", error);
    res.status(500).json({ message: "Server error" });
  }
}

// Get transaction history
export async function getTransactionHistory(req, res) {
  try {
    const { userId } = req.params; // Extract the userId from URL parameters

    // Query the database for transactions by user ID
    const transactions = await Transaction.find({ userId });

    res.status(200).json(transactions);
  } catch (error) {
    console.error("Error in getTransactionHistory:", error);
    res.status(500).json({ message: "Server error" });
  }
}

// Delete a transaction
export async function deleteTransaction(req, res) {
  try {
    const { transactionId } = req.params; // Extract the transactionId from URL parameters

    console.log("Deleting transaction with ID:", transactionId);

    // Use the transactionId to perform the deletion or any other necessary logic
    // For example, you can use Mongoose to delete a transaction from the database
    await Transaction.findByIdAndDelete(transactionId);

    console.log("Transaction deleted successfully");

    res.status(204).json({ message: "Transaction deleted successfully" });
  } catch (error) {
    console.error("Error deleting transaction:", error);
    res.status(500).json({ message: "Server error" });
  }
}


