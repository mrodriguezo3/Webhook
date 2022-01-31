//Importa las librerías necesarias para utilizarlas e el archivo

const express = require("express")
const mongoose = require("mongoose")
const path = require("path")
const config = require("config")

//Se invoca a la aplicación express y se configura para la aplicación
const app = express()
app.use(express.json())

// Se usa en producción, preguntar a Diego si es necesario Incluirlo
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"))
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  })
}

// Configuración para que la aplicación corra en el puerto 3001
const dbURI = config.get("dbURI")
const port = process.env.PORT || 3001
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then((result) => {
    app.listen(port)
    console.log("Conectado")
  })
  .catch((err) => console.log(err))
