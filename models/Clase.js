const mongoose = require("mongoose");

const materiaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
  },
  horario: {
    type: String,
    required: true
  }
}, { _id: false });

const claseSchema = new mongoose.Schema({
    //_id: ???
    nombre: String,
    profesores: [{ type: mongoose.Schema.Types.ObjectId, ref: "Profesor" }],
    materias: [materiaSchema],
    alumnos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Alumno" }]
})

const Clase = mongoose.model("Clase", claseSchema);

module.exports = Clase;