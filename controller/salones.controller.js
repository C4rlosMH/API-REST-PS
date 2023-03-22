const Salones=require("../models/salones.model");

function createSalones(req,res){
    const salones=new Salones(req.body);

    salones.save((error, salonesStored)=>{
        if(error){
            res.status(400).send({msg: "Error al guardar los datos"})
        }else{
            res.status(200).send(salonesStored)
        }
    })
}

function getSalones(req,res){
    Salones.find((error, salonesStored)=>{
        if(error){
            res.status(500).send({msg:"No hay datos que consultar"})
        }else{
            res.status(200).send(salonesStored)
        }
    })
}

 function deleteSalones(req,res){
    const {id}=req.params;

    Salones.findByIdAndDelete(id, (error)=>{
        if(error){
            res.status(400).send({msg:"Error al eliminar el salón"})
        }else{
            res.status(200).send({msg: "Salón eliminado"})
        }
    })
}

function updateSalones(req,res){
   const {id}=req.params;
   const datosSalones=req.body;

   Salones.findByIdAndUpdate({_id:id},datosSalones, (error)=>{
    if(error){
        res.status(400).send({msg: "Datos no actualizados"})
    }else{
        res.status(200).send({msg: "Los datos fueron actualizados correctamente"})
    }
   })
}

async function getSalon(req,res){
    console.log("Obtener los salones");
}



module.exports={
    createSalones,
    updateSalones,
    
    deleteSalones,
    getSalones,
    getSalon
}