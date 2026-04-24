# ARCHIVO NEGRO — Juego de Detectives Terminal

Juego de detectives basado en texto, estilo terminal retro (sin raton), para navegador.
La interfaz simula un monitor antiguo y toda la interaccion se hace escribiendo comandos.

---

## Como jugar

1. Doble clic en `play_web_game.bat`
2. Se abre `index.html` en tu navegador
3. Elige un caso escribiendo su numero (1-4)
4. Escribe `help` para ver todos los comandos disponibles

---

## Comandos

### Navegacion y lectura
| Comando | Descripcion |
|---|---|
| `ls` / `dir` | Lista los archivos del directorio actual |
| `cd [carpeta]` | Entra en una carpeta |
| `cd ..` | Sube al directorio anterior |
| `cd /` | Vuelve a la raiz |
| `read [archivo]` | Lee el contenido de un archivo |

### Investigacion
| Comando | Descripcion |
|---|---|
| `unlock [archivo] [clave]` | Desbloquea un archivo cifrado con su contrasena |
| `search [base] [termino]` | Busca en la base de datos del sistema para revelar archivos ocultos |
| `examine [termino]` | Examina en detalle un objeto, concepto o elemento del caso |
| `profile [nombre]` | Muestra el perfil de un sospechoso o personaje |
| `timeline` | Muestra la cronologia del caso (se desbloquea leyendo archivos) |
| `evidence` | Lista todos los archivos que has leido en la investigacion |
| `map` | Muestra el mapa de la ubicacion del caso |

### Utilidades
| Comando | Descripcion |
|---|---|
| `hint` | Muestra la siguiente pista |
| `clear` | Limpia la pantalla |
| `menu` | Vuelve al selector de casos |

---

## Loop de investigacion

1. **Explora** — usa `ls` y `cd` para moverte por los directorios.
2. **Lee** — usa `read` para leer archivos. Los archivos cifrados requieren `unlock`.
3. **Busca** — usa `search [base] [termino]` para revelar archivos ocultos. Las palabras clave estan escondidas en los dialogos.
4. **Analiza** — usa `examine` y `profile` para profundizar en pistas y personajes.
5. **Sigue la cronologia** — usa `timeline` para ver los eventos del caso a medida que lees mas archivos.
6. **Revisa las pruebas** — usa `evidence` para ver todo lo que has recopilado.
7. **Cierra el caso** — encuentra la contrasena del veredicto final y usa `unlock`.

---

## Estructura de archivos

```
123/
├── index.html            Motor del juego (HTML/CSS/JS puro, sin dependencias)
├── play_web_game.bat     Abre el juego en el navegador (doble clic)
├── README.md             Este archivo
└── cases/
    ├── case1.js          Caso 1: Ecos Bajo Cuarentena
    ├── case2.js          Caso 2: El Ultimo Huesped
    ├── case3.js          Caso 3: Estatica
    └── case4.js          Caso 4: Senal Perdida
```

Cada archivo de caso (`caseN.js`) es independiente y define un objeto global con toda la
informacion del caso: archivos, bases de datos, perfiles, examinar, cronologia y mapa.

---

## Los Casos

### Caso 1 — Ecos Bajo Cuarentena (2041)
**Ubicacion:** Estacion oceanografica abisal Nereida-9  
**Tagline:** Tres muertes. Una red de trafico biologico. Un apagon que borro las pruebas.  
**Personajes:** Dr. Elias Borda, Mara Voss, Lia Kern, Noel Aram, Sira Tellez, Ivo Raal  
**Nota:** La verdad esta en los audios. El nombre del pez es la primera clave.

### Caso 2 — El Ultimo Huesped (1924)
**Ubicacion:** Hotel Beaumont, Francia  
**Tagline:** Lord Ashby muerto en su habitacion. La directora lo llama fallo cardiaco.  
**Personajes:** Celeste Mourier, Lord Edmund Ashby, Rene Valmont, Viktor Brecht, Ida Strauss, Jacques Fabre  
**Nota:** El contrabando esta en el sotano. El botones lo vio todo.

### Caso 3 — Estatica (2024)
**Ubicacion:** Comisaria 7, Brigada de Delitos Economicos  
**Tagline:** Una oficial muerta, un suicidio que no cuadra y un capitan que cerro el caso en 48 horas.  
**Personajes:** Carmen Vidal, Rodrigo Mest, A. Kowal, Dr. Parra, Sgt. Ibarra, Informante X7  
**Nota:** El apodo de Vidal entre sus companeros es la primera clave. El codename de Mest cierra el caso.

### Caso 4 — Senal Perdida (2089)
**Ubicacion:** Estacion orbital Helios-3, orbita baja terrestre  
**Tagline:** Siete tripulantes muertos. Un experimento sin consentimiento. El cientifico escapo solo.  
**Personajes:** Dr. Fenn Cassius, Cmd. Yael Oretz, Ing. Petra Novak, Oficial Seren Dao, Consorcio Artemis  
**Nota:** El nombre de la hija de Oretz es la primera clave. El destino de la capsula cierra el caso.

---

## Detalles tecnicos

- **Sin dependencias** — HTML5/CSS/JS puro, sin frameworks ni librerias externas.
- **Sin servidor** — se abre directamente en el navegador como archivo local.
- **Modular** — cada caso es un archivo `.js` independiente. Anadir un caso nuevo es tan simple como crear `cases/case5.js` con el objeto `CASE5` y anadir `<script src="cases/case5.js"></script>` y `CASE5` al array en `index.html`.
- **Estetica** — fondo oscuro `#020904`, texto verde `#00e676`, efecto de lineas de escaneo por CSS, fuente Consolas.
