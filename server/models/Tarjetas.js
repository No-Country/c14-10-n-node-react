import mongoose from "mongoose";

const tarjetasSchema = new mongoose.Schema(
  {
    numero: {
      type: String,
      required: true,
      unique: true,
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
  },
  {
    versionKey: false, 
  }
);

const Tarjetas = mongoose.model("Tarjetas", tarjetasSchema);

export default Tarjetas;
