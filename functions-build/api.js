const express = require('express')
const serverless = require('serverless-http')
const cors = require("cors");

const dotenv = require("dotenv"); // Importez dotenv
dotenv.config(); // Chargez les variables d'environnement à partir du fichier .env
const publicdataRoutes = require('../routes/publicdataRoutes')


const app = express()
const router = express.Router()

app.use(
    cors({
      origin: process.env.FRONTEND_URL,
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type"],
      credentials: true,
    })
  );

router.get('/',(req,res) => {
    res.json([{
        'path':'HOME'
    },{'chek':router}])
})

app.use('/.netlify/functions/api/',publicdataRoutes)
module.exports.handler = serverless(app)