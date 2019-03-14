const path =require('path');
const express= require('express');
const morgan =require('morgan');
const mongoose=require('mongoose');
const config= require('./config');
const routes= require('./routes');

const app=express();

app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));
app.use(morgan('dev'));
app.use('/api',routes);

mongoose.connect(config.db_uri ,{useNewUrlParser:true})
.then(db => console.log('Conexión correcta a la BD'))
.catch(err=>console.log('Error en la conexión a la BD'));

app.listen(config.port ,()=>console.log('Servidor iniciado en puerto ' + config.port));
