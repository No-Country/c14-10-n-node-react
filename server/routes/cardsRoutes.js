import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import * as cardController from "../controllers/cardController.js";

const router = Router();

// Routes for card operations
router.post("/addCard", authRequired, cardController.addCard); // Add a card to a user
router.get("/allCards/:userId", authRequired, cardController.getAllCards); // Get all cards of a user
router.get("/getCard/:cardId", authRequired, cardController.getCard); // Get a specific card by its ID
router.put("/updateCard/:cardId", authRequired, cardController.updateCard); // Update a card
router.delete("/deleteCard/:cardId", authRequired, cardController.deleteCard); // Delete a card

export default router;
