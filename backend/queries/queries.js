const pool = require("../config")
const bcrypt = require("bcryptjs")
require("dotenv").config({path: './.env'}) 


const getProducts = async () =>{
    const consulta = "SELECT *  FROM productos";
    const { rows: productos, rowCount} = await pool.query(consulta);
    if(!rowCount) throw { code: 404, message: "Productos no encontrados"};
    return productos
}

module.exports = {getProducts}