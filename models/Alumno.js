const mongoose = require("mongoose");

const asistenciaSchema = new mongoose.Schema({
    fecha: {
        type: String,
        required: true
    },
    presente: {
        type: Boolean,
        required: true
    }
})

const historialNotasSchema = new mongoose.Schema({
    fecha: {
        type: String,
        required: true
    },
    materia: {
        type: String,
        required: true
    },
    nota: {
        type: Number,
        required: true
    }
})

const alumnoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    edad: Number,
    clase: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Clase"
    },
    historialNotas: [historialNotasSchema],
    asistencias: [asistenciaSchema],
    datosExtra: {
        direccion: {
            type: String,
            default: "Sin comentarios"
        },
        responsable: {
            type: String,
            default: "Sin comentarios"
        },
        observaciones: {
            type: String,
            default: "Sin comentarios"
        }
    }
});

const Alumno = mongoose.model("Alumno", alumnoSchema);

module.exports = Alumno;