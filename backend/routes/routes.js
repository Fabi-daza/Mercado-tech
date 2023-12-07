const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
require("dotenv").config({path: './.env'});

const {getProducts} = require("../queries/queries")

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
module.exports = router;