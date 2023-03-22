const Albercas=require("../models/albercas.model");

function createAlbercas(req,res){
    const albercas=new Albercas(req.body);

    albercas.save((error, albercasStored)=>{
        if(error){
            res.status(400).send({msg: "Error al guardar los datos"})
        }else{
            res.status(200).send(albercasStored)
        }
    })
}

function getAlbercas(req,res){
    Albercas.find((error, salonesStored)=>{
        if(error){
            res.status(500).send({msg:"No hay datos que consultar"})
        }else{
            res.status(200).send(albercasStored)
        }
    })
}

 function deleteAlbercas(req,res){
    const {id}=req.params;

    Albercas.findByIdAndDelete(id, (error)=>{
        if(error){
            res.status(400).send({msg:"Error al eliminar la alberca"})
        }else{
            res.status(200).send({msg: "Alberca eliminada"})
        }
    })
}

function updateAlbercas(req,res){
   const {id}=req.params;
   const datosAlbercas=req.body;

   Albercas.findByIdAndUpdate({_id:id},datosAlbercas, (error)=>{
    if(error){
        res.status(400).send({msg: "Datos no actualizados"})
    }else{
        res.status(200).send({msg: "Los datos fueron actualizados correctamente"})
    }
   })
}

async function getAlberca(req,res){
    console.log("Obtener las albercas");
}



module.exports={
    createAlbercas,
    updateAlbercas,
    
    deleteAlbercas,
    getAlbercas,
    getAlberca
}