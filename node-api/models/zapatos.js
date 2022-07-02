const mongoose = require('mongoose');
mongoose.pluralize(null)
const Schema = mongoose.Schema;
const subSchema= new Schema({
    _id:false,
    proveedor:{
        type:Number
    },
    mayoreo:{
        type:Number
    },
    menudeo:{
        type:Number
    }
})
const zapatoSchema = new Schema({
	id:{
        type:String
    },
    Marca:{
        type:String
    },
	Color:[{
        type:String
    }],
	Costo:[subSchema],
    Tamanio:{
        type:String
    },
    Tipo:[{
        type:String
    }],
    Num_zapato:[{
        type:Number
    }],
    Precio:{
        type:Number
    },
    Material:{
        type:String
    }
});

/*Creamos el modelo*/
const Zapato = mongoose.model('examen',zapatoSchema);
module.exports= Zapato;