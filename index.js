//necesito requerir mi modulo
//la propiedad config lo que hace es buscar el archivo .env que contiene mis variables de entorno
const dotenv = require('dotenv').config();

console.log(process.env.PORT)
console.log(process.env.PASSWORD_DB)
console.log(process.env.TOKEN_FB)
