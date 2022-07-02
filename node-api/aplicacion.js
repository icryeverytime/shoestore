const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const puerto = 3500;

app.use(bodyParser.urlencoded({extedend:false}));
app.use(bodyParser.json());
const mongoose = require('mongoose');

/*Conexion a la base de datos de mongo*/
mongoose.connect('mongodb://localhost:27017',{useNewUrlParser:true,useUnifiedTopology:true})
                .then(()=>console.log('Base de datos conectada correctamente'))
                .catch(e=>console.log(e));

//Motor de templates (Plantillas)(Views)

app.use('/zapatos',require('./router/routZapatos'));

/*Cuando no ha encontado la página solicitada*/
app.use((req,res,next)=>{
});


app.listen(puerto,()=>{
	console.log("El servidor esta escuchando en el puerto ",puerto);
});