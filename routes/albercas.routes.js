const express=require("express");
const AlbercasController= require("../controller/albercas.controller");

const api=express.Router();

api.post("/albercas",AlbercasController.createAlbercas);
api.get("/albercas",AlbercasController.getAlbercas);
api.delete("/alberca/:id",AlbercasController.deleteAlbercas);
api.patch("/alberca/:id",AlbercasController.updateAlbercas);
api.get("/alberca/:id",AlbercasController.getAlberca);


module.exports=api;