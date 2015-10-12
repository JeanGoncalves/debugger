
function authentication(name) {
	console.log('Limpando cache');
	console.log('Autenticando como "%s"',name);
	console.error('Falha ao autenticar');
}

console.group('Iniciando autenticação');
authentication('Jean');
console.groupEnd();
