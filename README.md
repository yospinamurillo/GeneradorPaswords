# GeneradorPaswords
Generador de contraseñas seguras

[![Node.js](https://img.shields.io/badge/Node.js-≥v16.0-green?logo=node.js)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-MIT-blue)](LICENSE)
[![Open Source](https://img.shields.io/badge/Open%20Source-Yes-brightgreen)](https://opensource.org/)
[![npm](https://img.shields.io/badge/npm-install%20required-orange?logo=npm)](https://www.npmjs.com/)


<div class="md-render">

  <h1>
    <span>🔐</span> PassWords — generador de contraseñas seguras
  </h1>

  <div class="badges">
    <span class="badge badge-green">Node.js ≥ v16.0</span>
    <span class="badge badge-gray">MIT License</span>
    <span class="badge badge-blue">Open Source</span>
    <span class="badge badge-amber">npm install requerido</span>
  </div>

  <div class="desc-block">
    Módulo de código libre para la generación de contraseñas seguras desde la terminal. Diseñado para uso interno de funcionarios. Permite configurar longitud, inclusión de símbolos y números, y guardar las claves generadas en un archivo de texto.
  </div>

  <h2>📋 Requisitos previos</h2>
  <ul>
    <li>Node.js versión <code>v16.0</code> o superior instalada en el sistema.</li>
    <li>Conexión para la descarga inicial de dependencias (<code>npm install</code>).</li>
  </ul>

  <h2>⚙️ Instalación</h2>
  <p>Clona el repositorio e instala las dependencias:</p>

  <div class="pre-header"><span>bash</span><button class="copy-btn" onclick="navigator.clipboard.writeText('git clone https://github.com/xxxxx/generador-pass-node.git\ncd generador-pass-node\nnpm install')">copiar</button></div>
  <pre><span class="kw">git</span> clone https://github.com/xxxxx/generador-pass-node.git
<span class="kw">cd</span> generador-pass-node
<span class="kw">npm</span> install</pre>

  <div class="tip-box">
    <span class="tip-icon"><i class="ti ti-info-circle" aria-hidden="true"></i></span>
    <span>El paso <code>npm install</code> es obligatorio. El programa usa la librería <code>chalk</code> para los colores en terminal y no funcionará sin ella.</span>
  </div>

  <h2>🚀 Uso básico</h2>
  <p>Para ejecutar el generador con los valores por defecto:</p>

  <div class="pre-header"><span>bash</span></div>
  <pre><span class="kw">npm</span> start</pre>

  <p>Para pasar parámetros personalizados:</p>

  <div class="pre-header"><span>bash</span></div>
  <pre><span class="kw">npm</span> start <span class="flag">--</span> <span class="flag">--longitud</span>=12 <span class="flag">--simbolos</span>=false <span class="flag">--numeros</span>=true</pre>

  <p>Salida esperada en terminal:</p>
  <div class="output-box">
    &gt; Tu nueva clave es: aB3dE8fG9hI1
  </div>

  <h2>🛠️ Parámetros disponibles</h2>
  <table>
    <thead>
      <tr>
        <th>Parámetro</th>
        <th>Tipo</th>
        <th>Valor por defecto</th>
        <th>Descripción</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>--longitud</code></td>
        <td><span class="type-pill">number</span></td>
        <td><code>8</code></td>
        <td>Longitud de la contraseña. Mínimo: 1, máximo: 64.</td>
      </tr>
      <tr>
        <td><code>--simbolos</code></td>
        <td><span class="type-pill">boolean</span></td>
        <td><code>true</code></td>
        <td>Incluir símbolos especiales (<code>!@#$%</code>, etc.) en la contraseña.</td>
      </tr>
      <tr>
        <td><code>--numeros</code></td>
        <td><span class="type-pill">boolean</span></td>
        <td><code>true</code></td>
        <td>Incluir dígitos numéricos en la contraseña.</td>
      </tr>
      <tr>
        <td><code>--guardar</code></td>
        <td><span class="type-pill">flag</span></td>
        <td>—</td>
        <td>Guarda la contraseña generada en el archivo <code>mis_claves.txt</code>.</td>
      </tr>
    </tbody>
  </table>

  <h2>💾 Guardar contraseñas en archivo</h2>
  <p>Agrega la bandera <code>--guardar</code> al final del comando para que el programa cree (o actualice) el archivo <code>mis_claves.txt</code> con la contraseña generada:</p>

  <div class="pre-header"><span>bash</span></div>
  <pre><span class="kw">npm</span> start <span class="flag">--</span> <span class="flag">--longitud</span>=16 <span class="flag">--simbolos</span>=true <span class="flag">--guardar</span></pre>

  <div class="tip-box">
    <span class="tip-icon"><i class="ti ti-file-text" aria-hidden="true"></i></span>
    <span>El archivo <code>mis_claves.txt</code> se crea automáticamente en la raíz del proyecto. Cada ejecución con <code>--guardar</code> agrega la nueva contraseña al archivo.</span>
  </div>

  <h2>🧪 Scripts disponibles</h2>
  <table>
    <thead>
      <tr><th>Comando</th><th>Descripción</th></tr>
    </thead>
    <tbody>
      <tr>
        <td><code>npm start</code></td>
        <td>Inicia el generador de contraseñas con los parámetros indicados.</td>
      </tr>
      <tr>
        <td><code>npm run test</code></td>
        <td>Ejecuta los scripts de seguridad: verifica que no se generen contraseñas repetidas.</td>
      </tr>
    </tbody>
  </table>

  <h2>📄 Licencia</h2>
  <p>Distribuido bajo la licencia <strong>MIT</strong>. Consulta el archivo <code>LICENSE</code> para más información.</p>

</div>
