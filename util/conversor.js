// Funçao para converter bites para mb
const converterByteToMb = (bytes) => {
    return (bytes/1024/1024).toFixed(2);
}

/* exportando o módulo (função de conversão) para utilizar em qualquer outro arquivo */
module.exports = {converterByteToMb}