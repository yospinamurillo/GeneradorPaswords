'use strict';

/**
 * Parsea los argumentos de la línea de comandos.
 * Soporta: --longitud=N  --simbolos=true|false  --numeros=true|false  --guardar
 */
function parse(argv) {
  const defaults = { longitud: 8, simbolos: true, numeros: true, guardar: false };

  argv.forEach(arg => {
    const [key, val] = arg.replace(/^--/, '').split('=');

    if (key === 'longitud') {
      const n = parseInt(val, 10);
      if (isNaN(n) || n < 1 || n > 64)
        throw new Error('--longitud debe ser un número entre 1 y 64.');
      defaults.longitud = n;
    }

    if (key === 'simbolos') defaults.simbolos = val !== 'false';
    if (key === 'numeros')  defaults.numeros  = val !== 'false';
    if (key === 'guardar')  defaults.guardar  = true;
  });

  return defaults;
}

module.exports = { parse };
