var path=require('path');

//Cargar Modelo ORM
var Sequelize =require('sequelize');

//Usar BBDD SQLite:
var sequelize= new Sequelize (null,null,null,
	{dialect:"sqlite", storage:"consulta.sqlite"
	}
	);
//Importa la definición de la tabla Isodata en consulta.js
var Isodata=sequelize.import(path.join(__dirname,'consulta'));
exports.Isodata=Isodata;//exporta la definición de la tabla Isodata

//sequelize.sync crea e inicia la tabla
sequelize.sync().then(function(){
	//levanta manejador 
	Isodata.count().then(function(count) {
		if (count===0) { //solo si vacía
			Isodata.create( {param:"Cervantes",reparam:"Motor, Bambalinón"}
				)
				.then(function(){console.log('Base de datos iniciada')}
				);
		};
	});
});