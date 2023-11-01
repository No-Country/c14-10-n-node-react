import User from "../models/User.js";
import Tarjetas from "../models/Tarjetas.js";

// Function to add a card to a user
export async function addCard(req, res) {
  try {
    const userId = req.user.id;
    const { numero, fechaExpiracion, codigoCVC, operadora, nombre } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const card = new Tarjetas({
      numero,
      fechaExpiracion,
      codigoCVC,
      operadora,
      nombre
    });

    card.save();

    user.tarjetas.push(card);

    await user.save();

    res.status(201).json({ message: "Card added successfully" });
  } catch (error) {
    console.error("Error adding card:", error);
    res.status(500).json({ message: "Server error" });
  }
}

// Function to get all cards of a user
export async function getAllCards(req, res) {
  const userId = req.params.userId;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const cards = await Tarjetas.find({ _id: { $in: user.tarjetas } });

    res.status(200).json(cards);
  } catch (error) {
    console.error("Error getting user cards:", error);
    res.status(500).json({ message: "Server error" });
  }
}

// Function to get a specific card by its ID
export async function getCard(req, res) {
  const cardId = req.params.cardId;

  try {
    const card = await Tarjetas.findById(cardId);

    if (!card) {
      return res.status(404).json({ message: "Card not found" });
    }

    res.status(200).json(card);
  } catch (error) {
    console.error("Error getting card:", error);
    res.status(500).json({ message: "Server error" });
  }
}

// Function to update a card
export async function updateCard(req, res) {
  const cardId = req.params.cardId;
  const { numero, fechaExpiracion, codigoCVC, operadora, nombre } = req.body;

  try {
    const card = await Tarjetas.findById(cardId);

    if (!card) {
      return res.status(404).json({ message: "Card not found" });
    }

    card.numero = numero;
    card.fechaExpiracion = fechaExpiracion;
    card.codigoCVC = codigoCVC;
    card.operadora = operadora;
    card.nombre = nombre;

    await card.save();

    res.status(200).json({ message: "Card updated successfully" });
  } catch (error) {
    console.error("Error updating card:", error);
    res.status(500).json({ message: "Server error" });
  }
}

// Function to delete a card
export async function deleteCard(req, res) {
  const cardId = req.params.cardId;

  try {
    // Use the Mongoose model to delete the card by its ID
    const result = await Tarjetas.deleteOne({ _id: cardId });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Card not found" });
    }

    res.status(200).json({ message: "Card deleted successfully" });
  } catch (error) {
    console.error("Error deleting card:", error);
    res.status(500).json({ message: "Server error" });
  }
}
