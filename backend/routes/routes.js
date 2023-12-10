const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs")
const express = require("express");
const router = express.Router();
require("dotenv").config({path: './.env'});

const { getProducts, getUserFavoritos, addFavorite, deleteUserFavorite, obtenerDatosUsuario, verificarCredenciales, registrarUsuario, crearProducto, modificarUsuario } = require("../queries/queries");
const {verificarToken, chequearCredenciales} = require("../middleware/middleware");



router.use(express.json());

router.get("/", async(req, res) => {
    try {
        const data = await getProducts();
        res.send(data);
    } catch (error){
        res.status(error.code || 500).send(error.message)
    }
}
);

router.get("/usuarios", verificarToken, async (req, res) => {
    try {
      const token = req.header("Authorization").split("Bearer ")[1];
      const { email } = jwt.decode(token);
      const usuario = await obtenerDatosUsuario(email);
      res.send(usuario);
    } catch (error) {
      res.status(500).send("Error al obtener los datos del usuario: " + error.message);
    }
  });

router.post("/Login", chequearCredenciales, async( req, res) => {
    try {
        const { email, password } = req.body;
        await verificarCredenciales(email, password)
        const token = jwt.sign({email}, process.env.TOKEN_SECRET)
        res.json({
            message: 'Autenticación exitosa',
            token: token
        })
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get("/usuarios/:id/favoritos", async(req, res) => {
    try{
        const {id} = req.params;
        const data = await getUserFavoritos(id);
        res.send(data);
    }   catch (error){
        res.status(error.code || 500).send(error.message);
        }
})

router.post("/favoritos", async (req, res) => {
    const { user_id, product_id } = req.body;
    await addFavorite(user_id, product_id);
    res.send("Producto agregado a favoritos");
});

router.delete("/favoritos/:user_id/:product_id", async (req, res) => {
      const { user_id, product_id } = req.params;
      await deleteUserFavorite(user_id, product_id);
      res.send("Producto eliminado de favoritos");
    }
  );


  router.post("/usuarios/registro", async (req, res) => {
    try {
        const { nombre, email, telefono,password, imagen } = req.body;
        await registrarUsuario(nombre, email, telefono,password, imagen);
        res.json({
            message: 'Usuario registrado exitosamente',
        });
    } catch (error) {
        res.status(error.code || 500).send(error.message || "Error en el registro de usuario");
    }
});

router.post("/productos/crear", async (req, res) => {
    try {
        const { titulo, descripcion, precio, imagen, user_id} = req.body;
        await crearProducto(titulo, descripcion, precio, imagen, user_id);
        res.json({
            message: 'Producto creado exitosamente',
        });
    } catch (error) {
        res.status(error.code || 500).send(error.message || "Error en la creación del producto");
    }
});

router.patch("/usuarios/modificar", async (req, res) => {
    try {
      const {user_id, password, imagen} = req.body;
      await modificarUsuario(user_id, password, imagen);
      res.json({
        message: 'Usuario actualizado exitosamente',
    });
    } catch (error) {
    res.status(error.code || 500).send(error.message || "Error en el registro de usuario");
}
});


module.exports = router;