function ola(nome){
	const texto1 = `Olá ${nome || 'web developer'}!`;
	console.log(texto1);
}

exports.ola = ola;