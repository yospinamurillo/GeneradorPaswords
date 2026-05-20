'use strict';

const crypto = require('crypto');

const MINUSCULAS = 'abcdefghijklmnopqrstuvwxyz';
const MAYUSCULAS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const NUMEROS    = '0123456789';
const SIMBOLOS   = '!@#$%^&*()_+-=[]{}|;:,.<>?';

/**
 * Genera una contraseña criptográficamente segura.
 * @param {object} opts - { longitud, simbolos, numeros }
 * @returns {string}
 */
function generar({ longitud, simbolos, numeros }) {
  let pool = MINUSCULAS + MAYUSCULAS;
  if (numeros)  pool += NUMEROS;
  if (simbolos) pool += SIMBOLOS;

  const bytes = crypto.randomBytes(longitud * 4);
  let clave   = '';

  for (let i = 0; i < longitud; i++) {
    const idx = bytes.readUInt32BE(i * 4) % pool.length;
    clave += pool[idx];
  }

  return clave;
}

module.exports = { generar };
