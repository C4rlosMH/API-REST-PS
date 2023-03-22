const express=require("express");
const SalonesController= require("../controller/salones.controller");

const api=express.Router();

api.post("/salones",SalonesController.createSalones);
api.get("/salones",SalonesController.getSalones);
api.delete("/salon/:id",SalonesController.deleteSalones);
api.patch("/salon/:id",SalonesController.updateSalones);
api.get("/salon/:id",SalonesController.getSalon);


module.exports=api;