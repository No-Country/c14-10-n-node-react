import Transaction from "../models/Transaction.js";

// Adding a new transaction
export async function addTransaction(req, res) {
  try {
    // Extracting transaction information from the request body
    const { userId, amount, description, operadora } = req.body;

    // Creating a new transaction instance
    const newTransaction = new Transaction({
      userId,
      amount,
      description,
      operadora,
    });

    // Saving the transaction to the database
    await newTransaction.save();

    // Responding with a success message
    res.status(201).json({ message: "Transaction added successfully" });
  } catch (error) {
    console.error("Error adding transaction:", error);
    res.status(500).json({ message: "Server error" });
  }
}

// Get transaction history
export async function getTransactionHistory(req, res) {
  try {
    const { userId } = req.params; // Extracting the userId from URL parameters

    // Querying the database for transactions by user ID
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
    const { transactionId } = req.params; // Extracting the transactionId from URL parameters

    console.log("Deleting transaction with ID:", transactionId);

    // Here we will use the transactionId to perform the deletion or any other necessary logic
    // For example, we can use Mongoose to delete a transaction from the database
    await Transaction.findByIdAndDelete(transactionId);

    console.log("Transaction deleted successfully");

    res.status(204).json({ message: "Transaction deleted successfully" });
  } catch (error) {
    console.error("Error deleting transaction:", error);
    res.status(500).json({ message: "Server error" });
  }
}
