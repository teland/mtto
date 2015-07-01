var models=require('../models/models.js')

//GET /quizes/question

exports.idG=function (req,res) {
	models.Isodata.findAll().then(function(consulta){
		res.render('consulta/idG',{param: consulta[0].param});
	})
 
};

//GET /quizes/answer

exports.lista=function (req,res) {
models.Isodata.findAll().then (function(consulta){
	if (req.query.ubi===consulta[0].param){
 res.render('consulta/lista',{reparam: 'En '+consulta[0].param+' hay un motor y un bambalinón'});
} else {
 res.render('consulta/lista',{reparam: 'No hay nada en tal ubicación'});
}
})

};

//GET /author

exports.autor=function (req,res) {
 res.render('autor',{title: 'Autoría'});
};