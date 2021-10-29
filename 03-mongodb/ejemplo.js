const mongoose = require("mongoose");


/* mongoose.connect(conexion).then(respuesta=>{
    //console.log(respuesta)
}).catch(error=>{
    //console.log(error);
}) */

(async () => {
    const estadoo = await mongoose.connect(conexion)

    const Usuario =  mongoose.model("Usuario", {nombre:String});

    const usuario1=  new Usuario({nombre:"Prueba 5"});

    const guardarUsuario = await usuario1.save()

    const resultado = await Usuario.find()
    console.log(resultado);
})();



/* usuario1.save();

Usuario.find().then(console.log); */




