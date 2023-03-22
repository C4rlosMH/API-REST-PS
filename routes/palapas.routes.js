const express=require("express");
const palapasController= require("../controller/palapas.controller");

const api=express.Router();

api.post("/palapas",palapasController.createPalapas);
api.get("/palapas",palapasController.getPalapas);
api.delete("/palapa/:id",palapasController.deletePalapas);
api.patch("/palapa/:id",palapasController.updatePalapas);
api.get("/palapa/:id",palapasController.getPalapa);


module.exports=api;