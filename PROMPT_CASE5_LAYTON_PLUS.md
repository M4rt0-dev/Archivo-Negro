# Prompt Maestro — Case5 estilo Profesor Layton (DS)

Eres un desarrollador senior en aventuras narrativas y puzles. Tu misión es transformar `case5` (El Mecanismo de Bronce) para acercarlo al máximo a la experiencia de Profesor Layton en Nintendo DS, sin romper la historia, personajes, puzles ni progreso existente.

## Objetivo de salida
- Dejar el juego totalmente funcional al abrir `case5/index.html` directamente (sin servidor, sin build, sin bundler).
- Mejorar narrativa, puzles, audio, mapa, progresión y pulido visual con acabado consistente.
- Mantener compatibilidad de partidas previas guardadas.

## Archivos obligatorios
Lee completos antes de modificar:
- `case5/game.js`
- `case5/index.html`
- `case5/styles.css`

Puedes añadir nuevos archivos dentro de `case5/assets/` (SVG, etc.) y nuevas secciones CSS/JS.

## Restricciones técnicas
- No borrar contenido existente (historia, puzles, diálogos, personajes).
- Mantener exactamente la clave de guardado: `mecanismo-bronce-save-v1`.
- Si amplías estado, hacerlo con migración retrocompatible (valores por defecto para saves antiguos).
- Si usas librerías, cargar por CDN en `case5/index.html` (sin npm).
- Todo debe funcionar en navegador moderno abriendo archivo local.

## Orden de implementación (obligatorio)
1. Bloque 1 (Diálogo y narrativa)
2. Bloque 2 (Sistema de puzles)
3. Bloque 4 (Audio)
4. Bloque 3 (Mapa y exploración)
5. Bloque 5 (Progreso y colección)
6. Bloque 6 (Pulido visual)

Si hay que recortar, prioridad estricta: 1 > 2 > 4 > 3 > 5 > 6.

---

## BLOQUE 1 — Diálogo y narrativa (estilo DS)

### 1. Retratos animados en cuadro inferior
- Cuadro de diálogo anclado abajo.
- Retrato del hablante a la izquierda.
- Retratos de:
  - Profesor Montes: sombrero de copa + monóculo.
  - Inés: coleta + lupa.
  - Narrador: pergamino.
- Implementación válida:
  - SVG inline dinámico, o
  - Canvas 2D con dibujo procedural.
- Expresiones mínimas por retrato:
  - normal
  - sorprendido
  - pensativo
- Cambiar expresión por palabras clave del texto.

### 2. Efecto máquina de escribir
- Velocidad objetivo: ~40ms/caracter.
- Sonido de clic por carácter (Web Audio API).
- Click/tap del usuario:
  - Si texto incompleto: mostrar línea completa al instante.
  - Si texto completo: avanzar a siguiente línea.

### 3. Voz sintetizada opcional
- Botón ON/OFF persistente en estado.
- Usar `speechSynthesis` en español (`es-ES` si está disponible).
- Profesor con pitch más grave.
- Inés con pitch más agudo.
- Cancelar locución al pasar línea o desactivar voz.

Criterio de aceptación Bloque 1:
- Intro y diálogos inter-puzle se leen con typewriter.
- Skip funciona sin romper avance.
- Retrato y expresión cambian según hablante/texto.
- Voz se mantiene tras recarga.

---

## BLOQUE 2 — Sistema de puzles (estilo Layton)

### 1. Pantalla de anuncio de puzle
- Al entrar en puzle no visto:
  - tarjeta animada 1.5s
  - número estilo `Puzle 001`
  - título
  - picarats actuales
  - frase de introducción del profesor

### 2. Picarats decrecientes por fallo
- Cada fallo: -5 picarats.
- Mínimo por puzle: 5.
- Mostrar valor actual en cabecera del puzle y en lista/mapa.
- Animación visual de bajada en rojo.
- Persistir fallos por puzle en estado.

### 3. FX de acierto/error
- Acierto:
  - Overlay 1s con `¡Correcto!` dorado.
  - Destellos/partículas (Canvas o CSS).
- Error:
  - Overlay corto `Incorrecto` en rojo.
  - Vibración visual del panel de puzle.
  - SFX de fallo con Web Audio API.

### 4. Pistas con coste progresivo
- Pista 1: 1 moneda.
- Pista 2: 2 monedas.
- Pista 3: 3 monedas.
- Mostrar coste antes de gastar.
- Confirmación explícita antes de descontar.
- Pista 3 casi-resolutiva.

Criterio de aceptación Bloque 2:
- Fallar reduce picarats y persiste.
- Coste de pistas respeta 1/2/3.
- Overlay correcto/error se ve y no rompe flujo.

---

## BLOQUE 4 — Audio procedural (sin archivos externos)

Implementa motor de audio con Web Audio API:
- `Misterio`: tempo 70 BPM, color menor, loop suave.
- `Tensión`: tempo 120 BPM, arpegios rápidos.
- `Victoria`: fanfarria corta al resolver puzle.
- `Silencio`: detiene loops activos.

SFX adicionales:
- clic de typewriter
- moneda
- resolver
- fallar
- transición de capítulo

Botonera de audio en cabecera.

Criterio de aceptación Bloque 4:
- Cambiar de modo detiene/activa correctamente.
- No quedan loops solapados.
- SFX suenan en eventos correctos.

---

## BLOQUE 3 — Mapa y exploración

### 1. Movimiento en mapa
- En pestaña Mapa, al seleccionar nodo:
  - animación de desplazamiento visible entre origen y destino.
  - válido con punto viajero sobre línea SVG o similar.

### 2. Transición de capítulo
- Al abrir nuevo capítulo:
  - overlay 2s con badge, objetivo y arte ASCII del escenario.

### 3. Exploración en localizaciones
- Cada localización de Historia incluye 3 puntos `?` interactivos.
- Al pulsar:
  - revela observación
  - posible recompensa: moneda, objeto o fragmento narrativo
- Evitar doble recompensa del mismo punto.

Criterio de aceptación Bloque 3:
- Viaje y transición son visibles y fluidos.
- Los 3 hallazgos por localización existen y persisten.

---

## BLOQUE 5 — Progreso y colección

### 1. Diario de Inés
- Entradas automáticas por:
  - resolver puzles
  - explorar
  - completar capítulos
- Cada entrada con:
  - fecha diegética (`Otoño de 1912`)
  - autor (Inés/Profesor/Narrador)
  - texto breve

### 2. Colección de objetos
- Grid de tarjetas con:
  - nombre
  - descripción
  - capítulo origen
- Recompensas desde exploración y puzles clave.

### 3. Ceremonia final
Al completar 24 puzles obligatorios:
- pantalla de veredicto animada
- rango por picarats totales:
  - Aprendiz (<200)
  - Detective (200-350)
  - Inspector (350-450)
  - Maestro Layton (>450)
- lista scrollable puzle a puzle (ganados vs máximos)
- mensaje final según rango
- botón/accordion de créditos con scroll

Criterio de aceptación Bloque 5:
- Diario y colección se llenan automáticamente.
- Ranking final varía según rendimiento real.

---

## BLOQUE 6 — Pulido visual

- Cursor lupa SVG (data URI) global.
- Transición cruzada de pestañas ~200ms.
- Cuadro de diálogo con papel envejecido:
  - textura/noise CSS
  - border-radius asimétrico
  - sombra interior
- Barra `X/24` convertida en progreso animado con sombrero desplazándose.

Criterio de aceptación Bloque 6:
- UI consistente en desktop y móvil.
- Sin solapamientos ni jank visual notable.

---

## SVG obligatorios
Asegúrate de que existan y estén conectados:
- mapa regional principal
- ilustraciones por capítulo (cap1..cap6)
- cualquier SVG adicional de UI que use el render

Si falta alguno, créalo en `case5/assets/` y enlázalo desde JS/HTML.

---

## Validación obligatoria por bloque
Al terminar cada bloque, ejecutar boot test Node (smoke test) sin navegador visual.

Comando base recomendado:
- Cargar `case5/game.js` con DOM mock y validar `boot-ok`.

Además:
- revisar errores de editor/diagnóstico tras cambios.
- confirmar que no se rompió migración de `localStorage`.

---

## Checklist final de entrega
- [ ] Sin regressions narrativas ni pérdida de contenido.
- [ ] Guardado retrocompatible con partidas previas.
- [ ] Mapa coherente con historia y capítulos.
- [ ] Todos los SVG referenciados existen.
- [ ] UI y animaciones funcionales en móvil y desktop.
- [ ] Boot test final: `boot-ok`.
