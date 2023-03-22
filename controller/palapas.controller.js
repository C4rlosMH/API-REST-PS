const Palapas=require("../models/palapas.model");

function createPalapas(req,res){
    const palapas=new Palapas(req.body);

    palapas.save((error, palapasStored)=>{
        if(error){
            res.status(400).send({msg: "Error al guardar los datos"})
        }else{
            res.status(200).send(palapasStored)
        }
    })
}

function getPalapas(req,res){
    Palapas.find((error, palapasStored)=>{
        if(error){
            res.status(500).send({msg:"No hay datos que consultar"})
        }else{
            res.status(200).send(palapasStored)
        }
    })
}

 function deletePalapas(req,res){
    const {id}=req.params;

    Palapas.findByIdAndDelete(id, (error)=>{
        if(error){
            res.status(400).send({msg:"Error al eliminar la palapa"})
        }else{
            res.status(200).send({msg: "Palapa eliminada"})
        }
    })
}

function updatePalapas(req,res){
   const {id}=req.params;
   const datosPalapas=req.body;

   Palapas.findByIdAndUpdate({_id:id},datosPalapas, (error)=>{
    if(error){
        res.status(400).send({msg: "Datos no actualizados"})
    }else{
        res.status(200).send({msg: "Los datos fueron actualizados correctamente"})
    }
   })
}

async function getPalapa(req,res){
    console.log("Obtener los palapas");
}



module.exports={
    createPalapas,
    updatePalapas,
    
    deletePalapas,
    getPalapas,
    getPalapa
}