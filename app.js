const express = require("express");
const cors=require("cors");
const bodyParser=require("body-parser");
const {
    API_VERSION
}=require("./constants");

const app=express();

//importaciones de las rutas de la aplicacio
const arrendadorRoutes=require("./routes/arrendador.routes");
const salonesRoutes=require("./routes/salones.routes");
const palapasRoutes=require("./routes/palapas.routes");
const albercasRoutes=require("./routes/albercas.routes");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());


//Configuración de las rutas
app.use(`/api/${API_VERSION}`, arrendadorRoutes);
app.use(`/api/${API_VERSION}`, salonesRoutes);
app.use(`/api/${API_VERSION}`,palapasRoutes);
app.use(`/api/${API_VERSION}`, albercasRoutes);

module.exports=app;



