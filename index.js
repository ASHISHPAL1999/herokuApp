const express=require("express");
require('dotenv').config()
const port=process.env.PORT || 2000
const app=express();
const cors=require("cors");
app.use(cors());

const mydata=require('./data')

app.get("/newsapi",(req,res)=>{
    console.log(mydata)

    res.json(mydata);

})

app.listen(port,()=>{
    console.log(`running at ${port}`);
})