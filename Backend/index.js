const express =require('express');
const cors = require('cors');
const app = express();

const conn = require('./db')



conn.connection.on("connected",(err)=>{

    if(err){
        console.log(err)
    }else{
        console.log("mongo is connected")
    }
}

)
app.use(cors());
app.use(express.json());
app.use("/",require('./route/user'))


app.listen(8000,()=>{

    console.log("server is connected")


})