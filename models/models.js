var path=require('path');

// match(/(.*)\:\/\/(.*?)\:(.*)@(.*)\:(.*)\/(.*)/)

var url = process.env.DATABASE_URL.match(/(.*)\:\/\/(.*?)\:(.*)@(.*)\:(.*)\/(.*)/);

var DB_name= (url[6]||null);
var user= (url[2]||null);
var pwd= (url[3]||null);
var protocol= (url[1]||null);
var dialect= (url[1]||null);
var port= (url[5]||null);
var host= (url[4]||null);
var storage= process.env.DATABASE_STORAGE;


//Cargar Modelo ORM
var Sequelize =require('sequelize');


//Usar BBDD SQLite o Postgres

var sequelize= new Sequelize (DB_name,user,pwd,
	{dialect:protocol, 
	 protocol:protocol,
	 port:port,
	 storage: storage, // solo SQLite (.env)
	 omitNull:true // solo Postgres
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
