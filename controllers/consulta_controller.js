//GET /quizes/question

exports.idG=function (req,res) {
 res.render('consulta/idG',{param: 'Ubicación:'});
};

//GET /quizes/answer

exports.lista=function (req,res) {
if (req.query.ubi==='Cervantes'){
 res.render('consulta/lista',{reparam: 'En el Cervantes hay un motor y un bambalinón'});
} else {
 res.render('consulta/lista',{reparam: 'No hay nada en tal ubicación'});
}
};

//GET /author

exports.autor=function (req,res) {
 res.render('autor',{title: 'Autoría'});
};