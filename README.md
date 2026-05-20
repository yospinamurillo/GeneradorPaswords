# GeneradorPaswords
Generador de contraseñas seguras

[![Node.js](https://img.shields.io/badge/Node.js-≥v16.0-green?logo=node.js)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-MIT-blue)](LICENSE)
[![Open Source](https://img.shields.io/badge/Open%20Source-Yes-brightgreen)](https://opensource.org/)
[![npm](https://img.shields.io/badge/npm-install%20required-orange?logo=npm)](https://www.npmjs.com/)


## 🔐 PassWords — generador de contraseñas seguras

**Módulo de código libre para la generación de contraseñas seguras desde la terminal.** Diseñado para uso interno de funcionarios. Permite configurar longitud, inclusión de símbolos y números.

## 📋 Requisitos previos

- Node.js versión `v16.0` o superior instalada en el sistema.
- Conexión para la descarga inicial de dependencias (`npm install`).

## ⚙️ Instalación

Clona el repositorio e instala las dependencias:

```bash
git clone https://github.com/yospinamurillo/GeneradorPaswords.git
cd GeneradorPaswords
npm install
```

> **ℹ️ Nota:** El paso `npm install` es obligatorio. El programa usa la librería `chalk` para los colores en terminal y no funcionará sin ella.

## 🚀 Uso básico

Para ejecutar el generador con los valores por defecto:

```bash
npm start
```

Para pasar parámetros personalizados:

```bash
npm start -- --longitud=12 --simbolos=false --numeros=true
```

**Salida esperada en terminal:**
```
> Tu nueva clave es: aB3dE8fG9hI1
```

## 🛠️ Parámetros disponibles

| Parámetro | Tipo | Valor por defecto | Descripción |
|-----------|------|-------------------|-------------|
| `--longitud` | number | `8` | Longitud de la contraseña. Mínimo: 1, máximo: 64. |
| `--simbolos` | boolean | `true` | Incluir símbolos especiales (`!@#$%`, etc.) en la contraseña. |
| `--numeros` | boolean | `true` | Incluir dígitos numéricos en la contraseña. |
| `--guardar` | flag | — | Guarda la contraseña generada en el archivo `mis_claves.txt`. |

## 💾 Guardar contraseñas en archivo

Agrega la bandera `--guardar` al final del comando para que el programa cree (o actualice) el archivo `mis_claves.txt` con la contraseña generada:

```bash
npm start -- --longitud=16 --simbolos=true --guardar
```

> **📝 Información:** El archivo `mis_claves.txt` se crea automáticamente en la raíz del proyecto. Cada ejecución con `--guardar` agrega la nueva contraseña al archivo.

## 📊 Flujo de funcionamiento

```
graph TD
    A["🚀 Inicio del programa"] --> B["📥 Lectura de parámetros"]
    B --> C{"¿Parámetros válidos?"}
    C -->|No| D["⚠️ Mostrar error"]
    D --> E["❌ Finalizar"]
    C -->|Sí| F["🔧 Configurar opciones"]
    F --> G["🎲 Generar contraseña"]
    G --> H{"¿Incluir números?"}
    H -->|Sí| I["➕ Añadir dígitos"]
    H -->|No| J["➡️ Continuar"]
    I --> K{"¿Incluir símbolos?"}
    J --> K
    K -->|Sí| L["🔣 Añadir símbolos"]
    K -->|No| M["➡️ Continuar"]
    L --> N["🔀 Mezclar caracteres"]
    M --> N
    N --> O["🖨️ Mostrar contraseña"]
    O --> P{"¿Guardar en archivo?"}
    P -->|Sí| Q["💾 Guardar en mis_claves.txt"]
    P -->|No| R["✅ Finalizar"]
    Q --> R
```

## 🏗️ Arquitectura del módulo

```
graph LR
    subgraph "Entrada"
        A["📥 CLI Arguments"]
    end
    
    subgraph "Procesamiento"
        B["⚙️ Validación"]
        C["🔧 Configuración"]
        D["🎲 Generador"]
        E["🔀 Mezclador"]
    end
    
    subgraph "Salida"
        F["🖨️ Consola"]
        G["💾 Archivo"]
    end
    
    A --> B
    B --> C
    C --> D
    D --> E
    E --> F
    E --> G
```

## 🧪 Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm start` | Inicia el generador de contraseñas con los parámetros indicados. |
| `npm run test` | Ejecuta los scripts de seguridad: verifica que no se generen contraseñas repetidas. |

## 📄 Licencia

Distribuido bajo la licencia **MIT**. Consulta el archivo `LICENSE` para más información.
