const os = require('os');
/*importa o modulo customijzado */
const {converterByteToMb} = require('./util/conversor.js')
const tipo = os.type();
const plataforma = os.platform();
const memoria_livres = os.freemem(); // em bytes

console.log(`Tipo: ${plataforma}`)
console.log(`Tipo: ${tipo}`);
console.log(`Tipo: ${os.release}`)
console.log(`Tipo: ${memoria_livres} bytes`)
console.log(`Tipo: ${converterByteToMb(memoria_livres)} MB`)