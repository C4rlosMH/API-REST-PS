const mongoose=require("mongoose");


const Salones=mongoose.Schema({
    id_salones:{
        type:String,
        unique:true
    },
    nombre: String,
    duenio: String,
    address: Date,
    precio: Number,
    telefono: Number,
    email: String,
    Horario: String,
    created_at:Date
})

module.exports=mongoose.model("Salones", Salones);