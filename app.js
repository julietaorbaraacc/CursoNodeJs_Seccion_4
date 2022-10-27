const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");
require("./config/colors");

console.clear();

crearArchivo(argv.b, argv.h, argv.l)
	.then(nombreArchivo => console.log(nombreArchivo.warn, "creado"))
	.catch(error => console.log(error.error));