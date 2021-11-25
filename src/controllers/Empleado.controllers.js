const EmpleadoCtrl={}

const Empleado = require('../models/Usuario.model')

EmpleadoCtrl.crear = async(req, res)=>{

    const{nombres, apellido, cedula, puesto, tcontratos, jefe}=req.body;
    const NuevoEmpleado = new Empleado ({
        nombres, 
        apellido, 
        cedula, 
        puesto, 
        tcontratos, 
        jefe
    })

    const respuesta = await NuevoEmpleado.save()

    res.json({

            mensaje:'Empleado creado',
            respuesta

    })

}

module.exports=EmpleadoCtrl