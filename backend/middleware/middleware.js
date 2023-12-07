const jwt  = require("jsonwebtoken");

const chequearCredenciales = (req,res,next) => {
    const { email, password } = req.body;
    if( !email || !password) {
        res
          .status(401)
          .send({message: "No se recibieron las credenciales en esta consulta"})
    }
    next();
};

const verificarToken = (req, res, next) => {
        try {
          const auth = req.header("Authorization");
          if (!auth || !auth.startsWith("Bearer ")) {
            throw { code: 401, message: "Token no proporcionado" };
          }
          const token = auth.split("Bearer ")[1];
          const verificacion = jwt.verify(token, process.env.TOKEN_SECRET);
          if (!verificacion) throw { code: 401, message: "Token inválido" };

        next();
    }catch (error) {
        res.status(error.code || 500).send(error.message || "Error en la validación del token");
    }
}
module.exports = {chequearCredenciales, verificarToken};