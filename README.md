# ARCHIVO NEGRO — Juego de Detectives Terminal

Juego de detectives basado en texto, estilo terminal retro (sin ratón), para navegador.
La interfaz simula un monitor antiguo y toda la interacción se hace escribiendo comandos.

---

## Cómo jugar

1. Doble clic en `play_web_game.bat`
2. Se abre `index.html` en tu navegador
3. Elige un caso escribiendo su número (1-5)
4. Escribe `help` para ver todos los comandos disponibles

---

## Comandos

### Navegación y lectura
| Comando | Descripción |
|---|---|
| `ls` / `dir` | Lista los archivos del directorio actual |
| `cd [carpeta]` | Entra en una carpeta |
| `cd ..` | Sube al directorio anterior |
| `cd /` | Vuelve a la raiz |
| `read [archivo]` | Lee el contenido de un archivo |

### Investigación
| Comando | Descripción |
|---|---|
| `unlock [archivo] [clave]` | Desbloquea un archivo cifrado con su contraseña |
| `search [base] [termino]` | Busca en la base de datos del sistema para revelar archivos ocultos |
| `examine [termino]` | Examina en detalle un objeto, concepto o elemento del caso |
| `profile [nombre]` | Muestra el perfil de un sospechoso o personaje |
| `timeline` | Muestra la cronología del caso (se desbloquea leyendo archivos) |
| `evidence` | Lista todos los archivos que has leído en la investigación |
| `map` | Muestra el mapa de la ubicación del caso |

### Utilidades
| Comando | Descripcion |
|---|---|
| `hint` | Muestra la siguiente pista |
| `clear` | Limpia la pantalla |
| `menu` | Vuelve al selector de casos |

---

## Loop de investigación

1. **Explora** — usa `ls` y `cd` para moverte por los directorios.
2. **Lee** — usa `read` para leer archivos. Los archivos cifrados requieren `unlock`.
3. **Busca** — usa `search [base] [termino]` para revelar archivos ocultos. Las palabras clave están escondidas en los diálogos.
4. **Analiza** — usa `examine` y `profile` para profundizar en pistas y personajes.
5. **Sigue la cronología** — usa `timeline` para ver los eventos del caso a medida que lees más archivos.
6. **Revisa las pruebas** — usa `evidence` para ver todo lo que has recopilado.
7. **Cierra el caso** — encuentra la contraseña del veredicto final y usa `unlock`.

---

## Estructura de archivos

```
123/
├── index.html            Motor del juego (HTML/CSS/JS puro, sin dependencias)
├── play_web_game.bat     Abre el juego en el navegador (doble clic)
├── README.md             Este archivo
├── case5/
│   ├── index.html        Motor visual propio del Caso 5
│   ├── styles.css        Estilo ilustrado del Caso 5
│   └── game.js           Lógica, capítulos y puzles visuales del Caso 5
└── cases/
    ├── case1.js          Caso 1: Ecos Bajo Cuarentena
    ├── case2.js          Caso 2: El Último Huésped
    ├── case3.js          Caso 3: Estática
    ├── case4.js          Caso 4: Señal Perdida
    └── case5.js          Caso 5: El Mecanismo de Bronce
```

Los casos 1 a 4 siguen el motor terminal y cada archivo `caseN.js` define un objeto global con toda la
información del caso: archivos, bases de datos, perfiles, examinar, cronología y mapa.
El caso 5 usa un motor visual completamente distinto: `cases/case5.js` actúa como manifiesto de lanzamiento y abre `case5/index.html`.

---

## Los Casos

### Caso 1 — Ecos Bajo Cuarentena (2041)
**Ubicación:** Estación oceanográfica abisal Nereida-9  
**Tagline:** Tres muertes. Una red de tráfico biológico. Un apagón que borró las pruebas.  
**Personajes:** Dr. Elias Borda, Mara Voss, Lia Kern, Noel Aram, Sira Tellez, Ivo Raal  
**Nota:** La verdad está en los audios. El nombre del pez es la primera clave.

### Caso 2 — El Ultimo Huesped (1924)
**Ubicación:** Hotel Beaumont, Francia  
**Tagline:** Lord Ashby muerto en su habitación. La directora lo llama fallo cardíaco.  
**Personajes:** Celeste Mourier, Lord Edmund Ashby, Rene Valmont, Viktor Brecht, Ida Strauss, Jacques Fabre  
**Nota:** El contrabando está en el sótano. El botones lo vio todo.

### Caso 3 — Estatica (2024)
**Ubicación:** Comisaría 7, Brigada de Delitos Económicos  
**Tagline:** Una oficial muerta, un suicidio que no cuadra y un capitán que cerró el caso en 48 horas.  
**Personajes:** Carmen Vidal, Rodrigo Mest, A. Kowal, Dr. Parra, Sgt. Ibarra, Informante X7  
**Nota:** El apodo de Vidal entre sus compañeros es la primera clave. El codename de Mest cierra el caso.

### Caso 4 — Senal Perdida (2089)
**Ubicación:** Estación orbital Helios-3, órbita baja terrestre  
**Tagline:** Siete tripulantes muertos. Un experimento sin consentimiento. El científico escapó solo.  
**Personajes:** Dr. Fenn Cassius, Cmd. Yael Oretz, Ing. Petra Novak, Oficial Seren Dao, Consorcio Artemis  
**Nota:** El nombre de la hija de Oretz es la primera clave. El destino de la cápsula cierra el caso.

### Caso 5 — El Mecanismo de Bronce (1933)
**Ubicación:** Villa de San Teodoro, altiplano ibérico  
**Tagline:** Un inventor desaparecido. Un reloj imposible. Veinticuatro puzles que ocultan un crimen perfecto.  
**Personajes:** Prof. Aurelio Montes, Inés Galván, Emilio Bercial, Tomás Velasco, Elena Oria, Mateo Salcedo  
**Nota:** Caso largo inspirado en aventuras de profesor y aprendiz, con 24 puzles visuales, interfaz propia y una duración estimada de 3 a 4 horas.

---

## Detalles técnicos

- **Sin dependencias** — HTML5/CSS/JS puro, sin frameworks ni librerías externas.
- **Sin servidor** — se abre directamente en el navegador como archivo local.
- **Motor doble** — los casos 1 a 4 usan el motor terminal de `index.html`; el caso 5 usa un motor visual independiente en `case5/index.html`.
- **Integración** — `cases/case5.js` solo describe el caso y redirige al motor propio cuando se selecciona desde el menú general.
- **Estética terminal** — el motor clásico mantiene fondo oscuro `#020904`, texto verde `#00e676`, efecto de líneas de escaneo por CSS y fuente Consolas.
