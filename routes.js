const express=require('express');
const{Cliente,Articulo} = require('./model');
const router = express.Router();

router.get('/clientes',(req,res)=>{
    Cliente.find({},(err,data) =>{
        if(err) res.json({error:err});
        else res.json(data);
    })
});

module.exports=router;