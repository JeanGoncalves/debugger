
var inteiro = 10;
var string = 'Usuário';
var floatter = 3.14;

console.log('Este é um inteiro: %i, este é uma string: %s, este é um float %f',inteiro,string,floatter);
	// Correto
console.log('Este é um inteiro: %i, este é uma string: %s, este é um float %f',floatter,inteiro,string);
	// Incorreto

var parser = new DOMParser(); 
var xml = parser.parseFromString("<div><h3>Hello world.</h3></div>", "application/xml");
console.log("%o, %O", xml,xml);

var css = "color:yellow; background:blue; font-size: 12pt";
console.log("User %s has %c%d points", string, css, inteiro);