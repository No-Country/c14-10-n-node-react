import User from "../models/User.js";
import Tarjetas from "../models/Tarjetas.js";

// Función para limpiar tarjetas huérfanas
export async function cleanOrphanedCards() {
  try {
    // Encontrar todas las tarjetas que no tienen un usuario asociado
    const orphanedCards = await Tarjetas.find({ user: null });

    // Eliminar las tarjetas huérfanas de la colección
    await Tarjetas.deleteMany({ user: null });

    // Para cada tarjeta huérfana, buscar y eliminar su ID del usuario asociado
    for (const card of orphanedCards) {
      if (card.user) {
        const user = await User.findById(card.user);
        if (user) {
          user.tarjetas.pull(card._id);
          await user.save();
        }
      }
    }

    console.log("Tarjetas huérfanas limpiadas con éxito");
  } catch (error) {
    console.error("Error limpiando tarjetas huérfanas:", error);
  }
}

export default cleanOrphanedCards;
