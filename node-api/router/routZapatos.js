const express = require('express');
const router = express.Router();

const Zapatos = require('../models/zapatos');
//var parametros={titulo:"Universidad Autonoma de Aguascalientes",grado:"8",grupo:"A y C",nombre:"Diego Ramon Rodriguez Padilla", cal1:"10",cal2:"7",cal3:"5",cal4:"9",cal5:"10"};


router.get('/zapato',async(req,res)=>{
	try{
		const arrayZapatoDB = await Zapatos.find();
		console.log(arrayZapatoDB);
		res.send(arrayZapatoDB);

	}catch(error){
		console.log(error);
	}
});
router.get('/buscar/:id',async(req,res)=>{
	var id=req.params.id
	console.log(id)
	try{
		const arrayZapatoDB = await Zapatos.find({_id:id});
		console.log(arrayZapatoDB);
		res.send(arrayZapatoDB);

	}catch(error){
		console.log(error);
	}
});
router.get('/buscamos/:id',async(req,res)=>{
	var id=req.params.id
	console.log(id)
	try{
		const arrayZapatoDB = await Zapatos.find({id:id});
		console.log(arrayZapatoDB);
		res.send(arrayZapatoDB);

	}catch(error){
		console.log(error);
	}
});
router.get('/buscamosmarca/:id',async(req,res)=>{
	var id=req.params.id
	console.log(id)
	try{
		const arrayZapatoDB = await Zapatos.find({Marca:id});
		console.log(arrayZapatoDB);
		res.send(arrayZapatoDB);

	}catch(error){
		console.log(error);
	}
});
router.post('/update/:id',async(req,res)=>{
	const id=req.params.id
	const body=req.body
	console.log(id+body)
	console.log(id)
	try{
		const arrayZapatoDB = await Zapatos.findByIdAndUpdate(id,body,{useFindAndModify: false});;
		console.log(arrayZapatoDB);
		res.json({
			estado:true,
			msg:'Zapato insertado'
		});

	}catch(error){
		console.log(error);
		res.json({
			estado:false,
			msg:'Zapato no insertado'
		});
	}
});
router.get('/delete/:id',async(req,res)=>{
	const id=req.params.id
	console.log(id)
	try{
		const zapatosDB= await Zapatos.findByIdAndDelete({_id:id})
		console.log(zapatosDB);
		res.json({
			estado:true,
			msg:'Zapato insertado'
		});

	}catch(error){
		console.log(error);
		res.json({
			estado:false,
			msg:'Zapato no insertado'
		});
	}
});
router.post('/insert',async(req,res)=>{
	console.log(req.body)
	const body=req.body
	try{
		const zapatosDB=new Zapatos(body)
		await zapatosDB.save();
		res.json({
			estado:true,
			msg:'Zapato insertado'
		});
	}
	catch(error){
		console.log(error)
		
	}
})
router.get('/numero1',async(req,res)=>{
	try{
		const zapatosDB= await Zapatos.find({id:"1"});
		console.log(zapatosDB);
		res.json(zapatosDB)

	}catch(error){
		console.log(error);
	

	}
})



router.post('/',async(req,res)=>{
	const body= req.body;
	try{
		const zapatosDB = new Zapatos(body);
		await zapatosDB.save();
		console.log(zapatosDB);
}catch(error)
	{
		console.log(error);
	}
	console.log(body);
});

router.get('/:num',async(req,res)=>{
	const num=req.params.num;
	console.log(num);
	try{
		const zapatosDB= await Zapatos.findOne({_id:num});
		console.log(zapatosDB);

	}catch(error){
		console.log(error);

	}
});
router.delete('/:num',async(req,res)=>{
	const num=req.params.num;
	try{
		const zapatosDB= await Zapatos.findByIdAndDelete({_id:num});
		if(zapatosDB)
		{
			res.json({
				estado: true,
				mensaje: 'Zapato eliminado!'
			});
		}else{
			res.json({
				estado: false,
				mensaje: 'No se pudo eliminar el Alumno!'
		});
	}


	}catch(error){
		console.log(error);
		res.render('modificar_id',{
			error:true,
			msg:'No se puede encontrar el id solicitado en la base de datos'
		});

	}

});

router.put('/:num', async(req,res)=>{
	const num=req.params.num;
	const body = req.body;
	console.log(body);
	try{

		const zapatosDB= await Zapatos.findByIdAndUpdate(num,body,{useFindAndModify: false});
		console.log(zapatosDB);
		res.json({
			estado:true,
			msg:'Alumno editado'
		});

	}catch(error){
		console.log(error);
		res.json({
			estado:false,
			msg:'Alumno no editado'
		});
	}
});
router.post('/insert', async(req,res)=>{
	console.log("inserted");
	const body = req.body;
	console.log(body);
	try{
		const zapatosDB = new Zapatos(body);
		await zapatosDB.save();
		res.json({
			estado:true,
			msg:'Zapato editado'
		});

	}catch(error){
		console.log(error);
		res.json({
			estado:true,
			msg:'Zapato editado'
		});
	}
});
module.exports = router;