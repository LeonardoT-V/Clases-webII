const mongoose = require("mongoose");
const { Schema } = mongoose

const usuarioSchema = new Schema(
    {
        nombre: String,
        rick: { type: String }
    },
    {
        timestamp: { createdAt: true, updatedAt: true }
    }
)

mongoose.model('Usuarios', {nombre:String})

