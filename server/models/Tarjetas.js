import mongoose from "mongoose";

const tarjetasSchema = new mongoose.Schema({
  numero: {
    type: String,
    required: true,
    unique: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  fechaExpiracion: {
    type: String,
    required: true,
  },
  codigoCVC: {
    type: String,
    required: true,
  },
  operadora: String,
});

const Tarjetas = mongoose.model("Tarjetas", tarjetasSchema);

export default Tarjetas;
