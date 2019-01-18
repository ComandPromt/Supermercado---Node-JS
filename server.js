const path =require('path');
const express= require('express');
const morgan =require('morgan');
const routes= require('./routes');
const mongoose=require('mongoose');

const app=express();

app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));
app.use(morgan('dev'));
app.use('/api',routes);

mongoose.connect('mongodb://localhost:27017/supermercado',{useNewUrlParser:true})
.then(db => console.log('Conexión correcta a la BD'))
.catch(err=>console.log('Error en la conexión a la BD'));
app.listen(3000,()=>console.log('Servidor iniciado en puerto 3000'));
