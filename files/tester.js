'use strict';

const { generar } = require('./generator');

const INTENTOS   = 1000;
const LONG_TEST  = 12;

/**
 * Verifica que no se generen claves repetidas en N intentos.
 * npm run test
 */
function run() {
  console.log(`\n🔍 Ejecutando ${INTENTOS} generaciones (longitud=${LONG_TEST}, simbolos=true, numeros=true)...\n`);

  const generadas = new Set();
  let repetidas   = 0;

  for (let i = 0; i < INTENTOS; i++) {
    const c = generar({ longitud: LONG_TEST, simbolos: true, numeros: true });
    if (generadas.has(c)) {
      repetidas++;
      console.warn(`  ⚠️  Repetida: ${c}`);
    }
    generadas.add(c);
  }

  console.log(`✅ Claves únicas generadas : ${generadas.size}`);
  console.log(`❌ Claves repetidas        : ${repetidas}`);

  if (repetidas === 0) {
    console.log('\n✔  Test de unicidad: PASADO\n');
  } else {
    console.error('\n✖  Test de unicidad: FALLIDO\n');
    process.exit(1);
  }
}

module.exports = { run };
