const mongoose = require("mongoose");

const dictadoSchema = new mongoose.Schema({
    profesor: ObjectId(),

    materia: String,
    
    fecha: String,

    listado: [{ type: mongoose.Schema.Types.ObjectId, ref: "Alumnos" }]
});

const Dictado = mongoose.model("Dictado", dictadoSchema);

module.exports = Dictado;