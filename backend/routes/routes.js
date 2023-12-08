const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs")
const express = require("express");
const router = express.Router();
require("dotenv").config({path: './.env'});

const {getProducts, getUserFavoritos,obtenerDatosUsuario, verificarCredenciales} = require("../queries/queries")
const {verificarToken, chequearCredenciales} = require("../middleware/middleware")

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




module.exports = router;