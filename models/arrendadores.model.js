const mongoose=require("mongoose");


const Arrendadores=mongoose.Schema({
    matricula:{
        type:String,
        unique:true
    },
    nombre: String,
    apellidos: String,
    fechana: Date,
    genero: String,
    telefono: Number,
    created_at:Date
})

module.exports=mongoose.model("Arrendador", Arrendadores);