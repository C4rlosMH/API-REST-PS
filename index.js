const mongoose=require("mongoose");

const {
    DB_NAME,
    API_VERSION,
    DB_PORT,
    IP_SERVER,
}=require("./constants");

const app=require("./app");

const port =process.env.PORT || 2000;

mongoose.set("strictQuery",false);
mongoose.connect(`mongodb://${IP_SERVER}:${DB_PORT}/${DB_NAME}`, (error)=>{
    if(error) throw error;
})


app.listen(port, ()=>{
    console.log("API REST  DE LA APP FUNCIONANDO");
    console.log("-------------------------------");
    console.log(`http://${IP_SERVER}:${port}/api/${API_VERSION}`);
})