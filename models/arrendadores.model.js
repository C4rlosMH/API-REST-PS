const mongoose=require("mongoose");


const Arrendadores=mongoose.Schema({
    id_arrendador:{
        type:String,
        unique:true
    },
    nombre: String,
    apellidos: String,
    telefono: Number,
    email: String,
    created_at:Date
})

module.exports=mongoose.model("Arrendador", Arrendadores);