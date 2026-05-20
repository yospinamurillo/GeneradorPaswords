#!/usr/bin/env node

const fs   = require('fs');
const path = require('path');
const args = require('./lib/args');
const gen  = require('./lib/generator');
const test = require('./lib/tester');

// Modo test
if (process.argv.includes('--test') || process.env.npm_lifecycle_event === 'test') {
  test.run();
  process.exit(0);
}

const opts = args.parse(process.argv.slice(2));
const clave = gen.generar(opts);

// Salida en terminal (simulando chalk en verde brillante)
const VERDE = '\x1b[92m';
const RESET = '\x1b[0m';
console.log(`${VERDE}> Tu nueva clave es: ${clave}${RESET}`);

// --guardar: persiste en mis_claves.txt
if (opts.guardar) {
  const archivo = path.join(process.cwd(), 'mis_claves.txt');
  const linea   = `${new Date().toISOString()} | longitud=${opts.longitud} | ${clave}\n`;
  fs.appendFileSync(archivo, linea, 'utf8');
  console.log(`${VERDE}> Clave guardada en mis_claves.txt${RESET}`);
}
