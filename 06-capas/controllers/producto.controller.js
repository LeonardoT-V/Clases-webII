const { Producto } = require('../models/index')
const {response} = require('express')

const obtenerProductos = async(req, res=response) => {
    // GET  /api/productos?limit=100
    const { limit = 10, init = 0 } = req.query;
    const query = {estado:true};

    const [total, producto] = await Promise.all([
        await Producto.countDocuments(query),
        await Producto.find(query).skip(init).limit(limit)
    ]);

    res.json({
        total,
        producto
    })
}
const obtenerProducto = async(req, res) => {

}
const crearProducto = async(req, res) => {

}
const actualizarProducto = async(req, res) => {

}
const borrarProducto = async(req, res) => {

}
module.exports = {
    obtenerProducto,
    obtenerProductos,
    crearProducto,
    actualizarProducto,
    borrarProducto
};