const express=require("express");
const app=express();
const cors=require("cors");
app.use(cors());
const mydata=require('./data')

app.get("/newsapi",(req,res)=>{
    console.log(mydata)

    res.json(mydata);

})

app.listen(2000,()=>{
    console.log(`running at 2000`);
})