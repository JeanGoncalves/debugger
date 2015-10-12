var parser = new DOMParser(); 
var xml = parser.parseFromString("<div><h3>Hello world.</h3></div>", "application/xml");
console.dirxml(xml);