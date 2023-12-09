const pool = require("../config")
const bcrypt = require("bcryptjs")
require("dotenv").config({path: './.env'}) 


const getProducts = async () =>{
    const consulta = "SELECT *  FROM productos";
    const { rows: productos, rowCount} = await pool.query(consulta);
    if(!rowCount) throw { code: 404, message: "Productos no encontrados"};
    return productos
}

const getUserFavoritos = async (user_id) =>{
    const values = [user_id];
    const consulta = "SELECT * FROM favoritos WHERE user_id = $1";
    const { rows: favoritos, rowCount} = await pool.query(consulta, values);
    if(!rowCount) throw { code: 404, message: "Favoritos no encontrados"};
    return favoritos
}

const addFavorite = async (user_id, product_id) => {
    const values = [user_id, product_id];
    const consulta =
      "INSERT INTO favoritos (user_id, product_id) values ($1, $2)";
    await pool.query(consulta, values);
  };

  const deleteUserFavorite = async (user, product) => {
    const values = [user, product];
    const consulta =
      "DELETE FROM favoritos WHERE user_id = $1 AND product_id = $2";
    await pool.query(consulta, values);
  };

const obtenerDatosUsuario = async(email) => {
    const values = [email];
    const consulta = "SELECT * FROM usuarios WHERE email = $1";
    const { rows: [usuario], rowCount,} = await pool.query(consulta, values);

    if(!rowCount) {
        throw{ code: 404, message: " No se encontró ningun usuario con ese email",};
    }
    delete usuario.password;
    return usuario;
};

const verificarCredenciales = async(email, password) => {
    const values = [email];
    const consulta = "SELECT * FROM usuarios WHERE email = $1";

    const { rows: [usuario], rowCount } = await pool.query(consulta, values);

    const {password: passwordEncriptada} = usuario

    const passwordCorrecta = bcrypt.compareSync(password, passwordEncriptada);

    if(!passwordCorrecta || !rowCount){
        throw{code: 401, message: "Email o contraseña incorrecta"}
    }
};

const registrarUsuario = async (username, email, password, image) => {
  // Agrega lógica para registrar al usuario en la base de datos
  // Puedes usar bcrypt para encriptar la contraseña antes de almacenarla
  const hashedPassword = bcrypt.hashSync(password, 10);
  // Luego, realiza la inserción en la base de datos con los datos proporcionados

};

const crearProducto = async (productName, description, price, image) => {
  // Agrega lógica para crear el producto en la base de datos
  // Puedes realizar la inserción en la base de datos con los datos proporcionados

};

module.exports = 
{
  getProducts, 
  getUserFavoritos,
  obtenerDatosUsuario, 
  verificarCredenciales, 
  addFavorite, 
  deleteUserFavorite, 
  registrarUsuario,
  crearProducto,
}