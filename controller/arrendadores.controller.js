const Arrendadores=require("../models/arrendadores.model");

function createArrendadores(req,res){
    const arrendadores=new Arrendadores(req.body);

    arrendadores.save((error, arrendadorStored)=>{
        if(error){
            res.status(400).send({msg: "Error al guardar los datos"})
        }else{
            res.status(200).send(arrendadorStored)
        }
    })
}

function getArrendadores(req,res){
    Arrendadores.find((error, arrendadoresStored)=>{
        if(error){
            res.status(500).send({msg:"No hay datos que consultar"})
        }else{
            res.status(200).send(arrendadoresStored)
        }
    })
}

 function deleteArrendador(req,res){
    const {id}=req.params;

    Arrendadores.findByIdAndDelete(id, (error)=>{
        if(error){
            res.status(400).send({msg:"Error al eliminar el arrendador"})
        }else{
            res.status(200).send({msg: "Arrendador eliminado"})
        }
    })
}

function updateArrendadores(req,res){
   const {id}=req.params;
   const datosArrendador=req.body;

   Arrendadores.findByIdAndUpdate({_id:id},datosArrendador, (error)=>{
    if(error){
        res.status(400).send({msg: "Datos no actualizados"})
    }else{
        res.status(200).send({msg: "Los datos fueron actualizados correctamente"})
    }
   })
}

async function getArrendador(req,res){
    console.log("Obtener los arrendadores");
}



module.exports={
    createArrendadores,
    updateArrendadores,
    
    deleteArrendador,
    getArrendador,
    getArrendadores
}