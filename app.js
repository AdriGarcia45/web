const express = require("express");
const cors =require("cors");
const app = express();
const mongoose =require("mongoose");

require("dotenv").config();
const port =process.env.PORT ||  3100;

app.use(cors());
app.use(express.json());

async function conexion(){
    await mongoose.connect(process.env.CONEXION_MDB);
    console.log("Se conecto a MDB");
} conexion().catch(console.error);


app.use("/Route/main",require("./Route/main"));
app.use("/Route/crearuser",require("./Route/crearuser"));
app.use("/Route/iniciosesion",require("./Route/iniciosesion"));

app.get("/",(req,res)=> {
    res.send("Hello wmed")
});

app.listen(port,()=>{

    console.log(`server esta en el pueto : ${port}`);
    
});