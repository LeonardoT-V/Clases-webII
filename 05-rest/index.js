const express = require('express');
const cors = require('cors')

const app = express();
const PORT = 3000;


let estudiantes = [ ];

app.use('/public', express.static(__dirname+'/public'));
app.use(cors()).use(express.json());

//  http://localhost:3000/apisextob/v1/estudianes
    // verbos => GET, POST, PATCH, PUT, DELETE

app.get('/', (req, res) =>{
    res.status(200).send(estudiantes)
});
app.get('/:cedula', (req, res) =>{
    const {cedula} = req.params;
    let filtrado = estudiantes.filter(p=> p.cedula === cedula)
    if( filtrado.length > 0){
        res.status(200).send(filtrado[0])
    }
    res.status(404).send({"mensaje":"No se encontro al estudiante con ese n° de cedula"})
});
app.post('/', (req, res) =>{
    const {body} = req;
    //const {cedula, nombre, curso} = body

    estudiantes.push(body)

    res.status(200).send({
        msg: "El dato fue insertado correctamente",
        body
    })
});
app.put('/', (req, res) =>{
    const {cedula, nombre, curso} = req.body;
    let estudiante = estudiantes.filter(p => p.cedula === cedula)[0];
    estudiante.nombre = nombre;
    estudiante.curso = curso;
    res.status(200).send({
        msg: "El dato fue modificado correctamente",
        estudiante
    })
});
app.delete('/:cedula', (req, res) =>{
    const {cedula} = req.params;
    let resultado = estudiantes.filter(p => p.cedula !== cedula);
    res.status(200).send({
        msg: "El dato fue eliminado correctamente",
    })

});



app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
})