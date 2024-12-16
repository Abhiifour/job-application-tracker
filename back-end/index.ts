import express from "express";
// Example for Express.js
const cors = require("cors");

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

// get Applications

app.get('/',async (req : any,res : any)=>{
    try {
        const data = await prisma.application.findMany()
        return res.json(data)
    } catch (error) {
        console.log(error)
    }
})


// create Application

app.post('/create', async(req:any,res:any)=>{
    try {
        await prisma.application.create({
            data:{
                position:req.body.position,
                company:req.body.company,
                compensation:req.body.compensation,
                location:req.body.location,
                status:"Applied"
            }
        })
        return res.json({
            msg:"Added Sucessfully"
        })
       
    } catch (error) {
       console.log(error)
    }
    
  
})

// find Application

app.post('/find',async (req : any,res : any)=>{
    try {
        const data = await prisma.application.findFirst({
            where:{
                id : req.body.id
            }
        })
        return res.json(data)
    } catch (error) {
        console.log(error)
    }
})


app.put('/update',async (req : any,res : any)=>{
    try {
        const data = await prisma.application.update({
            where : {
                id : req.body.id
            },
            data:{
                position:req.body.position,
                company:req.body.company,
                compensation:req.body.compensation,
                location:req.body.location,
                status:req.body.status
           }
        })
        return res.json(data)
    } catch (error) {
        console.log(error)
    }
})

// delete Application

app.post('/delete', async(req : any,res : any)=>{
   try {
    await prisma.application.delete({
        where:{
            id : req.body.id
        }
    })
   } catch (error) {
    console.log(error)
   }
})



app.listen(3000,()=>{
    console.log("server started on 3000");
})