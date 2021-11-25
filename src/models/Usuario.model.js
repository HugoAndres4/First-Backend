
const mongoose = require('mongoose');
const {Schema}=mongoose;

const UsuarioSchema = new Schema({

    nombres:String,
    apellidos:String,
    cedula:String,
    puesto:String,
    contrato:String,
    jefe:String

})

module.exports = mongoose.model('Usuario',UsuarioSchema)