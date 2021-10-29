const libros=[
    {
        id:1,
        titulo:"Node Js Aplicaciones distribuidas",
        idautor:1
    },
    {
        id:2,
        titulo: "Codigo limpio con JavaScript",
        idautor:1
    },
    {
        id:3,
        titulo: "Patrones de diseño con JavaScript",
        idautor:2
    },
]
const autores=[
    {
        id:1,
        nombre:"Autor 1",
        idpais:1
    },
    {
        id:2,
        nombre:"Autor 2",
        idpais:2
    },
    {
        id:3,
        nombre:"Autor 3",
        idpais:2
    }
]
const paises=[
    {
        id:1,
        descripcion:"Ecuador"
    },
    {
        id:2,
        descripcion:"Peru"
    },
]

function buscarLibroPorId(id){
    return new Promise((resolve, reject)=>{
        const libro = libros.find((libro)=> libro.id===id );
        if (!libro)
        {
            const error= new Error();
            error.message="El libro no fue encontrado";
            reject(error);
        }
        resolve(libro);

    })

}

function buscarAutorPorId(id){
    return new Promise((resolve, reject)=>{
        const autor =  autores.find((autor)=>{
            return autor.id===id;
        });
        if (!autor)
        {
            const error =  new Error();
            error.message="No se encontro el autor";
            reject(error);
        }
        //libro.autor = autor;
        resolve(autor);
    })
}
function buscarPaisPorIdAutor(idAutor){

    return new Promise((resolve, reject)=>{

    })
}


buscarLibroPorId(1).then((libro)=>{
    return buscarAutorPorId(libro.idautor);
}).then((autor)=>{
    //return buscarPaisPorIdAutor(libro.idautor);
    console.log(autor)
})
// .then((pais)=>{
//     console.log(pais)
// })
.catch((error)=>{
    console.log(error.message)
})
