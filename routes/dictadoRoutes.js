const express = require("express");
const Clase = require("../models/Clase");
const Dictado = require("../models/Dictado");
const router = express.Router();

router.get("/clases/:id", async (req, res) => {
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
})

/*
POST REQUEST
-que validaciones necesito
    + los campos obligatorios (+ agregar defaults y campos obligatorios en dictado schema)
    + array listado??
    + formato de fecha?
-como se guarda el dictado
-que devuelvo como respuesta
*/

router.post("/clase/:id", async (req, res) => {
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
})




module.exports = router;