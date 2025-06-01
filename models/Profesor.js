const mongoose = require("mongoose");

const profesorSchema = new mongoose.Schema({
  nombre: String,
  clases: [{ type: mongoose.Schema.Types.ObjectId, ref: "Clase" }]
});

const Profesor = mongoose.model("Profesor", profesorSchema);

module.exports = Profesor;
