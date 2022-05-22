var colors = require ('colors');
function ola(nome){
	const texto = `Bem vindo ${nome || 'a materia de desenvolvimento voltado a web 3'}!`.random;
	console.log(texto);
}

exports.ola = ola;