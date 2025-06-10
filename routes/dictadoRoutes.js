const express = require("express");
const Clase = require("../models/Clase");
const Dictado = require("../models/Dictado");
const { default: mongoose } = require("mongoose");

const app = express();
app.use(express.json());

const getDictado = async (req, res) => {
    try {
        const idClase = req.params.id;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                status: "fail",
                message: "ID inválido",
            });
        }

        const dictado = await Dictado.findById(idClase);

        if (!dictado) {
            return res.status(404).json({
                status: "fail",
                message: `No se encontró un dictado con el ID ${idClase}`

            });
        }

        res.status(200).json({
            status: "succes",
            data: {
                materia: dictado.materia,
                tema: dictado.tema,
                listado: dictado.listado,
            }
        })

    } catch (error) {
        console.error("Error al obtener dictado:", error);
        res.status(400).json({
            status: "error",
            message: "ID inválido o error en la solicitud",
        });
    }
};

const getTodosDictados = async (req, res) => {
  try {
    const dictados = await Dictado.find();

    res.status(200).json({
      status: "success",
      results: dictados.length,
      data: {
        dictados,
      },
    });
  } catch (error) {
    console.error("Error al obtener dictados:", error);
    res.status(500).json({
      status: "error",
      message: "Error interno al obtener los dictados",
    });
  }
}

const postDictado = async (req, res) => {
    /*
    datos que necesito
    profesor
    materia
    tema
    grupo
    fecha
    listado
    */
    try {
        const profesor = sesion.profesor;
        const materia = sesion.materia;
        const tema = form.tema;
        const grupo = grupoElegido;
        const fecha = fechaElegida;
        const listado = form.listado;

        if (!tema || tema.trim() == "") {
            res.status(400).json({
                status: "fail",
                message: "Es necesario incluir el tema de la clase"
            })
        }

        const nuevoDictado = new Dictado({
            profesor,
            materia,
            tema,
            Grupo: grupo,
            fecha,
            listado
        });

        await nuevoDictado.save();

        res.status(201).json({
            status: "success",
            data: {
                dictado: nuevoDictado,
            }
        });
    } catch (error) {
        console.error("Error al guardar dictado:", error);
        return res.status(500).json({
            status: "error",
            message: "No se pudo guardar el dictado en la base de datos"
        });
    }
}

const patchDictado = async (req, res) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            status: "fail",
            message: "ID invalido"
        })
    }

    try {
        const datosActualizados = req.body;

        const dictado = await Dictado.findByIdAndUpdate(id, datosActualizados, {
            new: true,
            runValidators: true,
        })

        if (!dictado) {
            return res.status(404).json({
                status: "fail",
                message: "No se encontro dictado con ID"
            })
        }

        return res.status(200).json({
            status: "success",
            data: {
                dictado,

            },
        });
    } catch (error) {
        console.error("Error al actualizar el dictado:", error);
        return res.status(500).json({
            status: "error",
            message: "Error interno del servidor al actualizad el dictado",
        })
    }
}

const deleteDictado = async (req, res) => {

    const idDictado = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(idDictado)) {
        return res.status(400).json({
            status: "fail",
            message: "ID invalido"
        })
    }

    try{
        const dictadoEliminado = await Dictado.findByIdAndDelete(id);

        if (!dictadoEliminado) {
            return res.status(404).json({
                status: "fail",
                message: "No se encontro un dictado con el ID"
            })
        }

        res.status(204).json({
            status: "success",
            data: null
        })
    }catch(error){
        console.error("Error al actualizar el dictado:", error);
        return res.status(500).json({
            status: "error",
            message: "Error interno del servidor al actualizad el dictado",
        })
    }
}

app
    .get("/clases/:id", getDictado)
    .get("/clase", getTodosDictados)
    .post("/clase/:id", postDictado)
    .patch("/clase/:id", patchDictado)
    .delete("/clase/:id", deleteDictado)

/*
    falta agregar mas validaciones
*/


module.exports = app;