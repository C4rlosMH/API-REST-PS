const express=require("express");
const ArrendadoresController= require("../controller/arrendadores.controller");

const api=express.Router();

api.post("/arrendador",ArrendadoresController.createArrendadores);
api.get("/arrendadores",ArrendadoresController.getArrendadores);
api.delete("/arrendador/:id",ArrendadoresController.deleteArrendador);
api.patch("/arrendador/:id",ArrendadoresController.updateArrendadores);
api.get("/arrendador/:id",ArrendadoresController.getArrendador);


module.exports=api;