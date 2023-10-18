import app from "./app.js";
import connectToDatabase from "./db.js"; // No cambies la extensión a .mjs

// Puerto en el que se ejecutará la aplicación
const PORT = process.env.PORT || 3000;

// Llamar a la función para conectar a la base de datos
connectToDatabase()
  .then(() => {
    // Iniciar el servidor
    app.listen(PORT, () => {
      console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error al conectar a la base de datos:", error);
  });
