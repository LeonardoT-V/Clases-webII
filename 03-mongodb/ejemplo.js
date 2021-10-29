const mongoose = require("mongoose");
const conexion= "mongodb+srv://root:root123@cluster0.jcxnv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


mongoose.connect(conexion).then(respuesta=>{
    //console.log(respuesta)
}).catch(error=>{
    //console.log(error);
})

const Usuario =  mongoose.model("Usuario", {nombre:String});

const usuario1=  new Usuario({nombre:"Web2"});

usuario1.save();

Usuario.find().then(console.log);




