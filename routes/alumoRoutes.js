const express = require("express");
const router = express.Router();

/* 
GET DE ALUMNO????

de que manera voy a ahcer el get


router.get("/alumno/:cedula",(req,res) => {

    const cedula = req.params.cedula;

    //a partir de cedula

    res.status(200).json({
        status: "succes",
        data:{
            alumno
        }
    })
})
*/

//Falta poner de donde saco los datos para el alumno
//De un form supongo, a partir de eso pum alumno
router.post("/alumnos", (req, res) => {
  const { nombre, edad, clase } = req.body;

  //Validar y guardar en case de datos

  res.send(201).json({
    status: "success",
    data: { nombre, edad, clase },
  });
});


router.delete("/alumnos/:cedula", async (req, res) => {
  try {
    const { cedula } = req.params;

    const alumnoEliminado = await Alumno.findOneAndDelete({ cedula: cedula });

    if (!alumnoEliminado) {
      return res.status(404).json({
        status: "fail",
        message: `No se encontró un alumno con la cédula ${cedula}`,
      });
    }

    return res.status(204).end();
  } catch (err) {
    console.error("Error al eliminar alumno:", err);
    return res.status(500).json({
      status: "error",
      message: "Error interno del servidor",
    });
  }
});

router.patch("/alumnos/:cedula", async (req, res) => {
  try {
    const { cedula } = req.params;
    const datosActualizados = req.body;

    // usar findOneAndUpdate para buscar por cedula y actualizar.
    // { new: true }

    // 404

    // 200
  } catch (error) {
  
  }
});