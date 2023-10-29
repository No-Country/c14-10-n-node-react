import { mongoose } from "mongoose";

// Cadena de conexión a tu base de datos en MongoDB Atlas
const dbUri =
  "mongodb+srv://alekosescu:8CTCccLnCZS2llXB@cluster0.ec3slfa.mongodb.net/database?retryWrites=true&w=majority";

// Crear una función asincrónica para conectar a la base de datos
async function connectToDatabase() {
  try {
    await mongoose.connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Conexión a MongoDB Atlas establecida con éxito!");
  } catch (err) {
    console.error("Error de conexión a MongoDB Atlas:", err);
  }
}

// Exportar la función de conexión a la base de datos
export default connectToDatabase;
