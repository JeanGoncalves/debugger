var brightness = function() {
	debugger;

	var x = Math.floor((Math.random() * 100) + 1);
	var y = Math.floor((Math.random() * 100) + 1);
	var z = Math.floor((Math.random() * 100) + 1);

	var response = (x+y+z);
	return response;

};

var b = brightness();