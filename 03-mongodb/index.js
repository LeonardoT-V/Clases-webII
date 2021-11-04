const cheerio = require('cheerio');
const axios = require('axios').default;
const mongoose = require('mongoose');
const cron = require('node-cron');


//const Noticias = require('./models/noticias.model')
const { MONGO_URI } = require('./config');
const { Noticias, Usuarios } = require('./models');

cron.schedule("* * * * *", async () => {

    try {
        //coneccion a la base de datos
        const respuesta = await mongoose.connect(MONGO_URI)
        //obtener html de la pagina
        const html = await axios.get('https://cnnespanol.cnn.com/')
        //console.log(html.data);

        //noticias cheerio
        const $ = cheerio.load(html.data)
        const titulos = $('.news__title')
        //console.log(titulos);

        //recorrer nodos para agregarlos a la base de datos
        let arregloNoticias = [];
        titulos.each(( index, titulo ) => {
            const noticias = {
                titulo: $(titulo).text().toString(),
                enlace: $(titulo).children().attr('href')
            }
            //arregloNoticias.push(noticias)
            arregloNoticias = [...arregloNoticias, noticias]
        })

        //agregar a la base de datos
        await Noticias.create(arregloNoticias)
    } catch(error) {
        console.log(error);

    }
});

