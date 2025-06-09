const mongoose = require("mongoose");

const dictadoSchema = new mongoose.Schema({
    profesor: ObjectId(),

    materia: String,

    tema: String,

    Grupo: ObjectId(),
    
    fecha: String,

    listado: [{ type: mongoose.Schema.Types.ObjectId, ref: "Alumnos" }]
});

const Dictado = mongoose.model("Dictado", dictadoSchema);

module.exports = Dictado;
