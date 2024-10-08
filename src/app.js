const express = require("express");

const app=express();

app.use('/',(req,res)=>{
    res.send('Hello from the dashboard !!')
  })

app.use('/test',(req,res)=>{
  res.send('You are connected to Tinder Server')
})

app.listen(8000,()=>console.log('server running successful at 8000'))