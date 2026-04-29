(function () {
  var STORAGE_KEY = "mecanismo-bronce-save-v1";
  var SAVE_MESSAGE_MS = 1400;

  var INTRO_DIALOGUE = [
    { speaker: "Narrador", text: "San Teodoro, otoño de 1912. Durante tres noches la torre del reloj marcó horas distintas según la calle desde la que se la mirara. El ayuntamiento lo llamó fenómeno óptico." },
    { speaker: "Profesor Montes", text: "Inés, este telegrama del alcalde Velasco es de lo más instructivo. Insiste cuatro veces en la palabra accidente sin haber completado una sola frase coherente." },
    { speaker: "Inés Galván", text: "¿Cuatro veces, profesor? Bercial apenas desapareció ayer..." },
    { speaker: "Profesor Montes", text: "Exactamente. Quien narra una versión antes de que se la pidan suele estar defendiendo algo, no recordándolo." },
    { speaker: "Inés Galván", text: "Entonces no nos ha llamado para investigar un accidente. Nos ha llamado para que demos credibilidad a una historia ya escrita." },
    { speaker: "Profesor Montes", text: "Y sin embargo alguien dejó preparados una serie de acertijos para quien llegara con ojos entrenados. Señalan directamente al mecanismo." },
    { speaker: "Inés Galván", text: "¿Cree usted que fue el propio Bercial quien los dejó, sabiendo que algo iba a ocurrir?" },
    { speaker: "Profesor Montes", text: "Eso tendremos que descubrirlo. Hay seis capítulos y veinticuatro enigmas por delante, más algún misterio menor que el tiempo nos depare." },
    { speaker: "Inés Galván", text: "Entonces empecemos ya, profesor. Por dónde comenzamos." }
  ];

  var CHAPTERS = [
    {
      id: "cap1",
      badge: "Capítulo I",
      title: "La Llegada a San Teodoro",
      subtitle: "El profesor descubre que el accidente ya venía escrito.",
      objective: "Inspecciona la carta del alcalde, la plaza del reloj y los primeros acertijos que Bercial dejó preparados para Inés.",
      backdrop: "Durante las últimas tres noches, la torre marcó horas distintas según la calle desde la que se la mirara. El ayuntamiento lo llamó fenómeno óptico, pero los comerciantes dejaron de abrir al anochecer y la villa quedó suspendida en una tensión muda.",
      gapFix: "Este bloque establece por qué el caso no empieza en la desaparición de Bercial, sino en una manipulación pública del tiempo que preparó el terreno social para aceptar cualquier versión oficial.",
      dialogue: [
        { speaker: "Profesor Montes", text: "Cuando un reloj falla de verdad, sus piezas discuten entre ellas. Aquí, en cambio, todas repiten la misma coartada." },
        { speaker: "Inés Galván", text: "Entonces no nos ha traído un accidente, sino una narración fabricada. Y Bercial nos dejó migas en forma de puzles." }
      ],
      locations: [
        { name: "Plaza del Reloj", tag: "Llegada", copy: "La torre domina la villa como una aguja clavada en la niebla. Los vecinos la miran con orgullo y desconfianza a la vez." },
        { name: "Ayuntamiento", tag: "Fachada", copy: "Velasco atiende con una cortesía impecable. Demasiado impecable para quien dice haber perdido a su maestro relojero la noche anterior." }
      ],
      clue: {
        title: "Carta Rasgada del Alcalde",
        copy: "Velasco insistió desde la primera línea en la palabra accidente. Quien narra tanto una versión antes de que se la pidan suele estar defendiendo algo, no recordándolo."
      },
      coins: [
        "La esfera del reloj presenta una grieta reciente en el borde oriental.",
        "El alcalde repite la palabra 'accidente' incluso cuando nadie la pronuncia primero."
      ],
      puzzles: ["p01", "p02", "p03", "p04"],
      bonusPuzzles: ["pb01"]
    },
    {
      id: "cap2",
      badge: "Capítulo II",
      title: "El Taller y la Deuda",
      subtitle: "Las piezas de bronce hablan mejor que los testigos.",
      objective: "Explora el taller de Bercial y reconstruye la geometría secreta con la que escondió su libro de deudas y el primer croquis alterado.",
      backdrop: "El taller no está desordenado por violencia, sino por prisa. Hay herramientas limpias junto a herramientas con grasa fresca: alguien trabajó aquí después de la supuesta noche del accidente y quiso simular abandono.",
      gapFix: "Este capítulo conecta la desaparición con el móvil económico: sin deuda y sobrecostes, no habría necesidad de sabotear el reloj ni de apartar a Bercial.",
      dialogue: [
        { speaker: "Inés Galván", text: "He encontrado limaduras nuevas en piezas que deberían estar detenidas desde hace días. Alguien afinó el mecanismo después de darlo por muerto." },
        { speaker: "Profesor Montes", text: "Y nadie pule metal de madrugada para conservarlo. Solo se pule para esconder la mano que lo forzó." }
      ],
      locations: [
        { name: "Taller Bercial", tag: "Mecánica fina", copy: "Engranajes abiertos, plantillas trianguladas y una libreta con gastos municipales cifrados. Cada forma esconde una relación contable." },
        { name: "Patio de carga", tag: "Huella", copy: "La gravilla conserva marcas de carros ligeros. Demasiado discretos para material de obra, perfectos para mover documentos y cilindros." }
      ],
      clue: {
        title: "Libro de Deudas Encubiertas",
        copy: "El reloj servía para justificar sobrecostes y pagar favores. La deuda del alcalde con el consorcio ferroviario ya estaba incrustada en el proyecto antes del sabotaje."
      },
      coins: [
        "La grasa nueva del torno no corresponde al aceite habitual del taller.",
        "Las marcas de silla del patio parecen un esquema, no una pausa para comer."
      ],
      puzzles: ["p05", "p06", "p07", "p08"],
      bonusPuzzles: ["pb02"]
    },
    {
      id: "cap3",
      badge: "Capítulo III",
      title: "La Biblioteca de los Reflejos",
      subtitle: "Lo importante no es la noticia, sino qué versión insiste en sobrevivir.",
      objective: "Contrasta hemeroteca, consejos municipales y testigos parciales para aislar el patrón económico detrás del caso.",
      backdrop: "Oria guarda los recortes en sobres fechados por clima y no por día. En su sistema, cada niebla intensa coincide con decisiones administrativas urgentes y contratos firmados sin licitación completa.",
      gapFix: "Aquí se cierra el vacío entre sospecha local y estructura criminal: la trama no es una traición aislada, sino la repetición de un modelo financiero en distintas ciudades.",
      dialogue: [
        { speaker: "Elena Oria", text: "Bercial buscaba accidentes de ferrocarril, pero no por morbo. Comparaba nombres de empresas, consejeros y fechas de inauguración." },
        { speaker: "Profesor Montes", text: "Quien repite un modelo en ciudades distintas ya no comete errores: ejecuta un método." }
      ],
      locations: [
        { name: "Biblioteca", tag: "Hemeroteca", copy: "Las carpetas de recortes forman un espejo incómodo: la misma financiación, los mismos nombres, las mismas inauguraciones apresuradas." },
        { name: "Sala del Consejo", tag: "Actas", copy: "En las votaciones de urgencia siempre aparecen los mismos brazos levantados. La prisa fue la coartada administrativa del crimen." }
      ],
      clue: {
        title: "Patrón de Inversión Repetido",
        copy: "Las obras municipales de San Teodoro siguen el mismo esquema que otros siniestros ferroviarios. El reloj no es un fin artístico: es una pantalla financiera."
      },
      coins: [
        "Oria archiva los recortes por niebla intensa, no por fecha exacta.",
        "En el consejo siempre falta alguien cuando las decisiones son urgentes."
      ],
      puzzles: ["p09", "p10", "p11", "p12"],
      bonusPuzzles: ["pb03"]
    },
    {
      id: "cap4",
      badge: "Capítulo IV",
      title: "El Campanario Oculto",
      subtitle: "Cada hueco del plano niega algo que sí existe en la piedra.",
      objective: "Resuelve los puzles que Bercial dejó para señalar el acceso secundario y entender por qué el sabotaje solo podía ejecutarse desde arriba.",
      backdrop: "La torre oficial y la torre real no son la misma. Los planos públicos omiten un tramo de escalera y una trampilla superior; quien no conoce ese detalle nunca podría explicar la secuencia exacta del fallo.",
      gapFix: "Este bloque une por fin medio y oportunidad: se identifica el recorrido físico del saboteador y se desmonta la coartada de accidente mecánico espontáneo.",
      dialogue: [
        { speaker: "Inés Galván", text: "El plano oficial elimina una escalera completa. No la borraron de la torre: la borraron del papel." },
        { speaker: "Profesor Montes", text: "Entonces el campanario no ocultaba una habitación. Ocultaba la ruta del culpable." }
      ],
      locations: [
        { name: "Campanario Antiguo", tag: "Acceso", copy: "Una compuerta mínima conduce a una galería de contrapesos. Desde allí se toca el eje celeste sin pasar por la sala principal." },
        { name: "Sala de Campanas", tag: "Resonancia", copy: "Cada paso arriba produce un temblor diferente. Bercial convirtió esa acústica en una firma para quien supiera escuchar." }
      ],
      clue: {
        title: "Ruta del Sabotaje",
        copy: "El saboteador subió por la escalera omitida, manipuló el eje celeste y descendió sin cruzar la estancia donde todos creían que debía verse a cualquiera." 
      },
      coins: [
        "La piedra nueva del tramo oculto absorbe la humedad de forma distinta.",
        "Una campana tarda un instante más en devolver el eco en el pasadizo secreto."
      ],
      puzzles: ["p13", "p14", "p15", "p16"],
      bonusPuzzles: ["pb04"]
    },
    {
      id: "cap5",
      badge: "Capítulo V",
      title: "Niebla sobre Valdeluna",
      subtitle: "La fuga ya estaba prevista antes incluso de que el reloj callara.",
      objective: "Recompón la logística de la huida: mapas, intervalos, copas marcadas y una estación que actúa como bisagra entre la villa y el consorcio.",
      backdrop: "Valdeluna funciona como aduana privada: no controla viajeros, controla tiempos. Los carros llegan sin carga visible y salen con documentación nueva, siempre en franjas de niebla y baja vigilancia.",
      gapFix: "Este capítulo resuelve el hueco de destino y beneficio. Ya no basta demostrar quién manipuló la torre; ahora se demuestra para quién y hacia dónde se movió el botín y al testigo clave.",
      dialogue: [
        { speaker: "Profesor Montes", text: "Todo crimen sofisticado necesita un segundo escenario: no el del hecho, sino el del beneficio." },
        { speaker: "Inés Galván", text: "Y Valdeluna es justo eso. Un lugar donde la niebla no solo es clima: también es contabilidad." }
      ],
      locations: [
        { name: "Estación de Valdeluna", tag: "Andén", copy: "Una estación pequeña, demasiado pequeña para el dinero que atraviesa sus almacenes. El consorcio la usa como punto ciego." },
        { name: "Camino de la cantera", tag: "Traslado", copy: "Los carros no iban cargados de piedra; iban lo bastante vacíos como para esconder a un hombre y un cilindro de registro." }
      ],
      clue: {
        title: "Ruta de Escape Confirmada",
        copy: "Los tiempos de la niebla, las salidas del campanario y los movimientos hacia la estación solo encajan si la fuga hacia Valdeluna estaba coordinada antes del supuesto accidente."
      },
      coins: [
        "Los carros giran junto al río antes de entrar a Valdeluna, como si evitasen ser vistos de frente.",
        "El reloj del jefe de estación nunca coincide con el de la plaza del reloj."
      ],
      puzzles: ["p17", "p18", "p19", "p20"],
      bonusPuzzles: ["pb05"]
    },
    {
      id: "cap6",
      badge: "Capítulo VI",
      title: "El Veredicto del Reloj Maestro",
      subtitle: "Los últimos puzles no esconden un culpable: esconden el modo exacto de demostrarlo.",
      objective: "Desbloquea la acusación final, identifica al autor intelectual y al ejecutor material, y devuelve a Bercial una verdad que no pueda manipularse otra vez.",
      backdrop: "El cilindro maestro no solo registra movimiento de engranajes; registra desajustes de carga y presión en momentos concretos. Es la clase de evidencia que no depende de testigos ni de memoria.",
      gapFix: "El cierre convierte todas las pistas previas en una acusación robusta y ordenada: móvil económico, ruta material, cronología exacta y cadena de mando entre Velasco y Salcedo.",
      dialogue: [
        { speaker: "Inés Galván", text: "Ya no nos falta una pista. Nos falta un escenario donde todas las pistas puedan oírse al mismo tiempo." },
        { speaker: "Profesor Montes", text: "Entonces haremos del propio reloj nuestro testigo. Que el mecanismo acuse a quienes quisieron usarlo como máscara." }
      ],
      locations: [
        { name: "Cámara del Reloj Maestro", tag: "Núcleo", copy: "Bronce, latón y un cilindro maestro preparado para registrar la mentira con precisión despiadada." },
        { name: "Plataforma de Acusación", tag: "Finale", copy: "La villa se reúne bajo la esfera celeste. Allí, donde todos miraban el reloj, por fin mirarán a quienes lo amañaron." }
      ],
      clue: {
        title: "El Reloj Acusa",
        copy: "Tomás Velasco diseñó la maniobra financiera; Mateo Salcedo ejecutó el sabotaje. Bercial sobrevivió porque previó la traición y dejó un motor de pruebas en forma de puzles encadenados."
      },
      coins: [
        "Una misma tinta aparece en cajas del consorcio y en actas corregidas del consejo.",
        "La muesca del cilindro maestro no es desgaste: es una inserción apresurada."
      ],
      puzzles: ["p21", "p22", "p23", "p24"],
      bonusPuzzles: ["pb06"]
    }
  ];

  var CHAPTER_ART = {
    cap1: "assets/chapter-cap1.svg",
    cap2: "assets/chapter-cap2.svg",
    cap3: "assets/chapter-cap3.svg",
    cap4: "assets/chapter-cap4.svg",
    cap5: "assets/chapter-cap5.svg",
    cap6: "assets/chapter-cap6.svg"
  };

  var ZONE_MAP_ART = {
    cap1: "assets/zone-cap1.svg",
    cap2: "assets/zone-cap2.svg",
    cap3: "assets/zone-cap3.svg",
    cap4: "assets/zone-cap4.svg",
    cap5: "assets/zone-cap5.svg",
    cap6: "assets/zone-cap6.svg"
  };

  var CHAPTER_ASCII = {
    cap1: "      |  |\n   ___||__||___\n  |  XII      |\n  | IX  \\  III|\n  |   VI      |\n  |___________|\n      |  |",
    cap2: "    -O-O-O-\n   / gears  \\\n  | [=====] |\n   \\ {   } /\n    -O-O-O-",
    cap3: "   _________\n  |_________|  \n  |_________|  \n  |_________|  \n  | ARCHIVO |\n  |_________|",
    cap4: "    /^^\\\n   / )) \\\n  |  ))  |\n  | (()) |\n  |______|\n  |  ||  |",
    cap5: "   ~~~~~~\n  [======]\n  |  __  |\n--O--()--O--\n   steam >>",
    cap6: "  .------.\n / .----. \\\n| | (O)  | |\n| |  \\   | |\n \\ '----' /\n  '------'"
  };

  var MAP_CHAPTER_PINS = {
    cap1: { x: 27, y: 57, label: "San Teodoro" },
    cap2: { x: 42, y: 50, label: "Taller" },
    cap3: { x: 53, y: 43, label: "Biblioteca" },
    cap4: { x: 68, y: 37, label: "Campanario" },
    cap5: { x: 82, y: 33, label: "Valdeluna" },
    cap6: { x: 90, y: 27, label: "Reloj Maestro" }
  };

  var ZONE_MAP_LOCATIONS = [
    [ // cap1
      { name: "Plaza del Reloj", tag: "Torre", icon: "🕐", x: 27, y: 57, puzzles: ["p01", "p02"], coinIndex: 0, coinX: 19, coinY: 64 },
      { name: "Ayuntamiento", tag: "Despacho", icon: "🏛", x: 66, y: 45, puzzles: ["p03", "p04"], coinIndex: 1, coinX: 72, coinY: 32 },
      { name: "Correo municipal", tag: "Bonus", icon: "📁", x: 50, y: 22, puzzles: ["pb01"], bonus: true }
    ],
    [ // cap2
      { name: "Taller Bercial", tag: "Mecanismos", icon: "⚙", x: 28, y: 56, puzzles: ["p05", "p06"], coinIndex: 0, coinX: 24, coinY: 42 },
      { name: "Patio de carga", tag: "Rastros", icon: "🔍", x: 69, y: 44, puzzles: ["p07", "p08"], coinIndex: 1, coinX: 76, coinY: 58 },
      { name: "Cuaderno cifrado", tag: "Bonus", icon: "📖", x: 50, y: 24, puzzles: ["pb02"], bonus: true }
    ],
    [ // cap3
      { name: "Biblioteca", tag: "Hemeroteca", icon: "📚", x: 25, y: 52, puzzles: ["p09", "p10"], coinIndex: 0, coinX: 17, coinY: 36 },
      { name: "Sala del Consejo", tag: "Actas", icon: "🗝", x: 72, y: 54, puzzles: ["p11", "p12"], coinIndex: 1, coinX: 64, coinY: 37 },
      { name: "Sótano archivo", tag: "Bonus", icon: "📜", x: 50, y: 23, puzzles: ["pb03"], bonus: true }
    ],
    [ // cap4
      { name: "Campanario Antiguo", tag: "Acceso", icon: "🔔", x: 30, y: 56, puzzles: ["p13", "p14"], coinIndex: 0, coinX: 22, coinY: 41 },
      { name: "Sala de Campanas", tag: "Acústica", icon: "🎵", x: 67, y: 39, puzzles: ["p15", "p16"], coinIndex: 1, coinX: 74, coinY: 26 },
      { name: "Galería contrapesos", tag: "Bonus", icon: "⚖", x: 50, y: 22, puzzles: ["pb04"], bonus: true }
    ],
    [ // cap5
      { name: "Estación Valdeluna", tag: "Andén", icon: "🚂", x: 27, y: 56, puzzles: ["p17", "p18"], coinIndex: 0, coinX: 19, coinY: 42 },
      { name: "Camino cantera", tag: "Traslado", icon: "🛤", x: 69, y: 44, puzzles: ["p19", "p20"], coinIndex: 1, coinX: 77, coinY: 55 },
      { name: "Almacén ferroviario", tag: "Bonus", icon: "📦", x: 50, y: 22, puzzles: ["pb05"], bonus: true }
    ],
    [ // cap6
      { name: "Cámara Reloj Maestro", tag: "Núcleo", icon: "⚗", x: 28, y: 57, puzzles: ["p21", "p22"], coinIndex: 0, coinX: 22, coinY: 42 },
      { name: "Plataforma Acusación", tag: "Finale", icon: "⚖", x: 69, y: 45, puzzles: ["p23", "p24"], coinIndex: 1, coinX: 78, coinY: 33 },
      { name: "Cilindro auxiliar", tag: "Bonus", icon: "🔧", x: 50, y: 22, puzzles: ["pb06"], bonus: true }
    ]
  ];

  var COLLECTIBLES = {
    cap1: [
      { id: "gear-fractured", name: "Engranaje Fracturado", copy: "Diente roto hallado junto al marco de la esfera.", source: "Plaza del Reloj" },
      { id: "mayor-letter", name: "Carta Rasgada", copy: "Fragmento del telegrama de Velasco con repeticiones sospechosas.", source: "Ayuntamiento" }
    ],
    cap2: [
      { id: "debt-ledger", name: "Libro de Deudas", copy: "Asientos contables duplicados en partidas distintas.", source: "Taller Bercial" },
      { id: "metal-filings", name: "Limaduras Frescas", copy: "Restos recientes de mecanizado posterior al supuesto accidente.", source: "Patio de carga" }
    ],
    cap3: [
      { id: "fog-index", name: "Indice de Niebla", copy: "Recortes archivados por clima en lugar de fecha.", source: "Biblioteca" },
      { id: "council-act", name: "Acta Urgente", copy: "Aprobaciones exprés sin licitación completa.", source: "Sala del Consejo" }
    ],
    cap4: [
      { id: "hidden-step", name: "Escalón Oculto", copy: "Piedra nueva en escalera ausente del plano oficial.", source: "Campanario Antiguo" },
      { id: "bell-rhythm", name: "Patrón de Campanas", copy: "Secuencia acústica usada como firma de paso.", source: "Sala de Campanas" }
    ],
    cap5: [
      { id: "train-ticket", name: "Billete Sin Sello", copy: "Registro de salida desfasado por reloj manipulado.", source: "Estación de Valdeluna" },
      { id: "river-route", name: "Croquis del Río", copy: "Desvío de carros para evitar la visión frontal del andén.", source: "Camino de la cantera" }
    ],
    cap6: [
      { id: "master-cylinder", name: "Cilindro Maestro", copy: "Registro mecánico de carga y presión alteradas.", source: "Cámara del Reloj Maestro" },
      { id: "ink-match", name: "Tinta Coincidente", copy: "Misma fórmula en actas corregidas y cajas del consorcio.", source: "Plataforma de Acusación" }
    ]
  };

  var PUZZLES = {
    p01: {
      id: "p01",
      chapter: 0,
      title: "Las Tres Lámparas",
      picarats: 25,
      intro: "Bercial dejó un panel con interruptores reales. El truco no está en ver la luz, sino en recordar que el calor también delata una historia.",
      instruction: "Profesor Montes: prepara una secuencia de encendido y apagado, entra una única vez en la sala y deduce qué interruptor corresponde a cada lámpara usando luz y temperatura.",
      type: "lamp"
    },
    p02: choicePuzzle(0, "p02", "Seis Sillas", 20, "El patio del taller conserva la colocación exacta que vio Inés.", "Inés movió solo dos sillas. Tu tarea es elegir la única figura final que puede obtenerse y que forma dos triángulos equiláteros superpuestos.", [
      option("a", "Dos triángulos superpuestos", "o   o\n  o\no   o\n  o", "Dos triángulos comparten centro visual."),
      option("b", "Hexágono abierto", "o o\no   o\no o", "Figura atractiva, pero no produce dos equiláteros."),
      option("c", "Escalera", "o\n  o\n    o\n  o\no", "Solo cambia el equilibrio, no la relación entre lados."),
      option("d", "Línea doble", "o o o\n\no o o", "No hay triángulos aquí, solo filas paralelas.")
    ], "a", "Las dos sillas movidas permiten superponer dos triángulos equiláteros. Bercial adoraba las figuras que cambian de significado con una mínima alteración."),
    p03: choicePuzzle(0, "p03", "La Carta Vista y No Vista", 10, "Una carta boca abajo, una frase rotunda y ninguna prueba real.", "No adivines la carta: marca la única conclusión lógicamente demostrable con la información disponible.", [
      option("a", "No es una figura", "🂠", "No puedes afirmarlo sin verla."),
      option("b", "No aporta ninguna información comprobable", "¿?", "La frase no reduce de forma fiable el conjunto."),
      option("c", "Pertenece a espadas", "♠", "La voz justamente niega algo no verificable."),
      option("d", "Es una carta roja", "♥", "Otra inferencia gratuita.")
    ], "b", "La pista es una trampa: sonar concreto no equivale a demostrar. El caso entero está lleno de frases así."),
    p04: choicePuzzle(0, "p04", "Las Nueve Rejas", 25, "Los nueve puntos del patio municipal se convierten en una advertencia sobre el plano oficial.", "Selecciona el recorrido válido que atraviesa los nueve puntos con cuatro líneas rectas continuas, permitiendo salir del marco si hace falta.", [
      option("a", "Salir del marco", "• • •\n• • •\n• • •\n↘→↗↘", "La solución obliga a desobedecer el borde imaginario."),
      option("b", "Cuadrado perfecto", "• • •\n• • •\n• • •\n□", "Queda corto: no cruza todos los puntos."),
      option("c", "Espiral interior", "• • •\n• • •\n• • •\n🌀", "Demasiados quiebros, no son cuatro líneas."),
      option("d", "Cruz simétrica", "• • •\n• • •\n• • •\n✚", "La simetría es bonita, pero no funciona.")
    ], "a", "Bercial usó este clásico para insistir en algo preciso: el acceso real al crimen estaba fuera del marco mental que imponía el plano público."),

    p05: choicePuzzle(1, "p05", "Siete Monedas", 20, "La libreta de Bercial dibuja monedas como si fueran nodos contables compartidos.", "El profesor pide una figura con 7 monedas que genere exactamente 6 líneas rectas de 3 monedas cada una; elige la opción que lo cumple.", [
      option("a", "Estrella de seis puntas", "  o\no o o\n o o\no o o\n  o", "Las líneas comparten monedas en las intersecciones."),
      option("b", "Cruz", "  o\n  o\no o o\n  o\n  o", "Solo crea cuatro líneas claras."),
      option("c", "Círculo", "o o o\no   o\n o o", "No forma seis rectas de tres."),
      option("d", "Escalera", "o\n o\n  o\n   o\n    o", "Se pierde la simultaneidad de líneas.")
    ], "a", "Una sola moneda pertenece a varios segmentos a la vez. Exactamente como un mismo pago escondía varias deudas distintas."),
    p06: choicePuzzle(1, "p06", "Las Dos Puertas", 15, "Los guardianes del taller hablan como testigos enfrentados.", "Formula mentalmente una sola pregunta que funcione tanto si te responde el que miente como el que dice la verdad, y elige esa opción.", [
      option("a", "¿Cuál de las dos abrirías tú?", "A / B", "No neutraliza la mentira."),
      option("b", "¿Qué puerta diría el otro que es la salida?", "X → ?", "La doble inversión te deja una única respuesta útil."),
      option("c", "¿Eres tú el que miente?", "¿?", "No resuelve qué puerta conviene elegir."),
      option("d", "¿La puerta A es segura?", "A", "Depende de a quién preguntes.")
    ], "b", "La verdad y la mentira se anulan cuando las fuerzas a describirse mutuamente. El profesor sonríe: por fin un testigo útil."),
    p07: numberPuzzle(1, "p07", "Peces en Pecera", 10, "El puzle parece infantil, pero en realidad examina tu disposición a aceptar premisas imposibles.", "Ignora el ruido del relato y marca el numero real de peces que permanecen en la pecera.", 0, 20, 10, "Quedan diez. Los peces no se ahogan ni se marchan en barco; el enunciado te pide que tragues disparates sin protestar."),
    p08: choicePuzzle(1, "p08", "Reloj del Tren", 20, "El andén de Valdeluna aparece por primera vez en un horario aparentemente inocente.", "Razonamiento de Layton: si el reloj del andén va 20 minutos atrasado, escoge la hora que vería un testigo cuando la salida real es a las 10:00.", [
      option("a", "09:20", "09:20", "Demasiado atraso."),
      option("b", "09:40", "09:40", "Eso verá quien confíe en el reloj atrasado."),
      option("c", "10:00", "10:00", "Sería la hora oficial, no la percibida."),
      option("d", "10:20", "10:20", "Esa es la hora real cuando el reloj marque las diez.")
    ], "b", "La estación entera funciona con tiempo desplazado. Perfecto para que una salida legal parezca invisible."),

    p09: numberPuzzle(2, "p09", "Espejos Gemelos", 15, "La bibliotecaria comparó tres versiones de la misma noche. Bercial lo resumió con dos espejos a noventa grados.", "Ajusta el contador con el numero maximo de imagenes que se forman con dos espejos colocados a 90 grados.", 1, 8, 3, "Con dos espejos a noventa grados aparecen tres imágenes. Dos directas y una por doble reflexión."),
    p10: choicePuzzle(2, "p10", "Orden de Naipes", 15, "Una nota sin firma pide ordenar los valores sin que se toquen sus vecinos naturales.", "Elige la unica fila en la que no quedan juntas las parejas prohibidas por el enunciado.", [
      option("a", "As - Rey - Reina - Jota", "A K Q J", "Rey y Reina quedan juntos."),
      option("b", "As - Reina - Rey - Jota", "A Q K J", "Es la única distribución válida de las cuatro."),
      option("c", "Jota - Reina - Rey - As", "J Q K A", "Jota y Reina están demasiado cerca."),
      option("d", "Rey - As - Jota - Reina", "K A J Q", "Jota y Reina vuelven a rozarse.")
    ], "b", "En la mesa del consejo nadie podía sentarse al lado de quien realmente le convenía. El truco estaba en los huecos intermedios."),
    p11: choicePuzzle(2, "p11", "Moneda Falsa", 20, "El esquema de pesadas del taller parece un presupuesto, pero describe una estrategia para aislar al eslabón débil.", "Selecciona el arbol de decision que garantiza encontrar la moneda falsa en solo dos pesadas.", [
      option("a", "4 vs 4 y después azar", "4|4", "Si se desequilibra, aún quedan demasiadas opciones."),
      option("b", "3 vs 3; luego subgrupo ligero", "3|3", "La primera pesada reduce el caso a dos o tres piezas."),
      option("c", "2 vs 2 y después 3 vs 3", "2|2", "Empieza demasiado pequeño."),
      option("d", "1 vs 1 repetido", "1|1", "No llega en dos movimientos.")
    ], "b", "Primero se pesa tres contra tres. Si empatan, la sospecha recae en las dos restantes; si no, en el lado ligero. Exactamente así aisló Bercial al ejecutor material."),
    p12: numberPuzzle(2, "p12", "Los Cuervos", 10, "Una cronología tramposa intenta hacerte viajar en el tiempo sin darte cuenta.", "Fija el reloj exactamente en las 18:02 y marca cuantos cuervos iban al este en ese instante, sin mezclar eventos posteriores.", 0, 20, 12, "A las 18:02 seguían siendo doce. El regreso ocurre más tarde. En el consejo también intentaron mover consecuencias hacia atrás para justificar decisiones previas."),

    p13: choicePuzzle(3, "p13", "Tablero Partido", 20, "El campanario y el tablero comparten una misma lección cromática: si falta una paridad, nada encaja aunque parezca posible.", "Decide si el tablero sin dos esquinas opuestas puede cubrirse por completo con dominoes de 2x1.", [
      option("a", "Sí, con una espiral", "Sí", "La forma engaña; el color manda."),
      option("b", "No, faltan dos casillas del mismo color", "No", "La cuenta cromática queda desequilibrada."),
      option("c", "Sí, si las fichas giran", "↻", "Girar no cambia el número de casillas negras y blancas."),
      option("d", "Solo si se empieza por el centro", "⊞", "No hay estrategia capaz de corregir la paridad." )
    ], "b", "No es posible: las dos esquinas opuestas pertenecen al mismo color. Cada dominó cubre un color de cada tipo, así que la cuenta jamás cerrará."),
    p14: choicePuzzle(3, "p14", "Velas de Tiempo", 20, "Un papel ennegrecido explica cómo medir un intervalo exacto sin confiar en una combustión regular.", "Elige el metodo de encendido que permite medir exactamente 45 minutos aunque las velas ardan de forma irregular.", [
      option("a", "Quemar una vela entera y media de otra", "60 + 30", "No puedes medirlo con precisión si arden de forma irregular."),
      option("b", "Encender una vela por ambos extremos y la otra por uno", "A⇄ / B→", "Cuando la primera termina han pasado 30 minutos; el resto cae en 15."),
      option("c", "Encender ambas por un extremo", "A→ / B→", "No produce una referencia intermedia exacta."),
      option("d", "Encender las dos por ambos extremos", "A⇄ / B⇄", "Eso solo da media hora.")
    ], "b", "El método correcto fuerza una mitad exacta con la primera vela y remata el cuarto restante con la segunda. La noche del sabotaje también se dividió en intervalos cuidadosamente medidos."),
    p15: choicePuzzle(3, "p15", "Cambio Mínimo", 15, "Inés dibujó la cruz de fichas tal como la encontró sobre una mesa de inspección.", "Imagina tres movimientos exactos y elige la figura final que forma un cuadrado valido.", [
      option("a", "Cuadrado con hueco central", "o o o\no   o\no o o", "El cuadrado aparece al pensar en el contorno, no en la masa."),
      option("b", "Rectángulo alargado", "o o o o\no     o", "No respeta el número mínimo de movimientos."),
      option("c", "Rombo", "  o\n o o\no   o\n o o\n  o", "Bonito, pero no es un cuadrado claro."),
      option("d", "Pequeña cruz", " o\nooo\n o", "Sigue siendo una cruz reducida.")
    ], "a", "El cuadrado correcto es hueco. De nuevo, la lección es la misma: el vacío también forma parte del diseño."),
    p16: choicePuzzle(3, "p16", "Retratos del Salón", 10, "El enunciado parece una broma privada, pero Bercial lo colocó justo al lado del acceso oculto.", "Lee literalmente el enunciado y pulsa el nombre del tercer hijo, sin dejarte distraer por el tono del texto.", [
      option("a", "Raúl", "[Raúl]", "La respuesta estaba a la vista desde la primera palabra."),
      option("b", "Tomás", "[Tomás]", "Eso sería seguir el tono del caso, no la lógica del enunciado."),
      option("c", "Bercial", "[Bercial]", "El relojero ya estaba demasiado presente."),
      option("d", "Ninguno", "[?]", "Aquí no falta información; sobra distracción.")
    ], "a", "El tercer hijo es Raúl. Inés resopla: el salón entero estaba diseñado para obligar al visitante a olvidar la primera mitad de cada frase."),

    p17: {
      id: "p17",
      chapter: 4,
      title: "Mapa Roto",
      picarats: 20,
      intro: "Cuatro fragmentos del camino a Valdeluna se solapan en el cuaderno de viaje. Esta vez no basta con señalar una respuesta: debes ordenar la lógica del mapa como lo haría un investigador que recompone una fuga.",
      instruction: "Ordena los cuatro criterios de reconstruccion como haria el profesor: primero la referencia geografica mas fija y despues los elementos que dependen de ella.",
      type: "sequence",
      tokens: [
        { id: "river", label: "Río", visual: "≈≈≈", caption: "El cauce fija el esqueleto del trayecto." },
        { id: "bridge", label: "Puente", visual: "═╬═", caption: "El puente solo tiene sentido después del río." },
        { id: "plaza", label: "Plaza", visual: "▣", caption: "La plaza se acomoda una vez fijados los rasgos físicos." },
        { id: "road", label: "Camino", visual: "···", caption: "El camino completa lo ya condicionado por el resto." }
      ],
      order: ["river", "bridge", "plaza", "road"],
      success: "Primero el río, luego puente, plaza y camino. El profesor anota que toda reconstrucción honesta debe empezar por el elemento menos flexible. La ruta ya no parece una conjetura: parece un trayecto probado."
    },
    p18: {
      id: "p18",
      chapter: 4,
      title: "Torre de Copas",
      picarats: 25,
      intro: "En el andén, diez copas de latón sirven como contador de cargamentos. Bercial convirtió su patrón en un puzle práctico.",
      instruction: "Selecciona exactamente tres copas, voltealas y deja toda la fila en una unica orientacion, localizando la frontera donde cambia el patron.",
      type: "cups",
      success: "La frontera entre copas boca arriba y boca abajo estaba en el centro. Al invertir justo ese tramo, la secuencia queda uniforme. Igual que en la huida: bastaba corregir el punto de cambio para que todo pareciera legal."
    },
    p19: numberPuzzle(4, "p19", "Niebla y Faros", 15, "Tres faros del corredor de mercancías laten con frecuencias distintas sobre la niebla.", "Calcula el primer instante en el que los tres faros vuelven a parpadear juntos y marca ese valor en segundos.", 0, 300, 180, "El mínimo común múltiplo es 180 segundos. La periodicidad del corredor ferroviario delata la ventana exacta utilizada para la fuga."),
    p20: numberPuzzle(4, "p20", "Agujas Superpuestas", 20, "En Valdeluna todo vuelve a hablar de relojes, pero ahora el problema ya es puro movimiento.", "Cuenta cuantas superposiciones reales tienen minutero y horario entre las 00:00 y las 12:00, sin asumir una por hora.", 0, 15, 11, "Se superponen once veces. No doce: la coincidencia inicial cuenta una vez y la última sucede antes de cerrar el intervalo."),

    p21: {
      id: "p21",
      chapter: 5,
      title: "Cartel Impar",
      picarats: 10,
      intro: "El almacén del consorcio clasifica las palabras como si fueran piezas de una misma máquina. Una no encaja y, precisamente por eso, es la que delata el maquillaje contable.",
      instruction: "Pulsa la palabra intrusa: debe ser la unica que no nombre una pieza o elemento mecanico real del caso.",
      type: "word",
      words: [
        { id: "tower", label: "TORRE", caption: "Pertenece al sistema físico del caso." },
        { id: "wheel", label: "RUEDA", caption: "También nombra una pieza mecánica." },
        { id: "clock", label: "RELOJ", caption: "Es el núcleo material del misterio." },
        { id: "cloud", label: "NUBE", caption: "No es un mecanismo; es una cortina poética." }
      ],
      answer: "cloud",
      success: "La intrusa es Nube. El profesor la señala con el bastón: por fin algo que solo servía para adornar, no para demostrar. Al retirar esa palabra, el resto del inventario vuelve a sonar como metal y no como humo."
    },
    p22: {
      id: "p22",
      chapter: 5,
      title: "Cajas Mal Etiquetadas",
      picarats: 20,
      intro: "Tres cajas del almacén ferroviario están deliberadamente mal rotuladas. No tienes varias pruebas: solo una extracción y tu capacidad de deducir desde una etiqueta mentirosa.",
      instruction: "Elige una sola caja para extraer muestra; debe ser la eleccion que permita deducir el contenido de las tres sabiendo que todas las etiquetas son falsas.",
      type: "boxes",
      boxes: [
        { id: "gold", label: "ORO", visual: "[ORO]", caption: "Podría contener oro o una mezcla si te fías del rótulo." },
        { id: "silver", label: "PLATA", visual: "[PLATA]", caption: "Tampoco descarta suficientes posibilidades por sí sola." },
        { id: "mixed", label: "MIXTO", visual: "[MIXTO]", caption: "Si todo está mal rotulado, esta caja no puede ser mixta." }
      ],
      answer: "mixed",
      success: "Debes sacar la moneda de la caja marcada como MIXTO. Si todas están mal rotuladas, esa caja no puede ser mixta, y a partir de ahí el resto cae por descarte. Inés sonríe: por fin una mentira administrativa que se derrumba al primer roce correcto."
    },
    p23: numberPuzzle(5, "p23", "Esfera Celeste", 15, "La cámara maestra conserva un regulador astronómico con una nota exacta en el margen.", "Convierte 15 grados por hora al avance exacto en 8 minutos y marca el resultado en grados.", 0, 12, 2, "En ocho minutos la esfera recorre dos grados. Inés apunta la cifra junto al cilindro maestro: el margen de error del sabotaje fue mínimo."),
    p24: {
      id: "p24",
      chapter: 5,
      title: "El Destino Final",
      picarats: 30,
      intro: "El último panel del reloj maestro no pide una palabra: pide señalar un lugar real sobre el tablero de fuga. Todo lo resuelto hasta ahora debe converger en un único punto geográfico.",
      instruction: "Recorre el mapa final y elige el unico lugar que concentra las cuatro claves del caso: movil, traslado, ocultacion y beneficio.",
      type: "map",
      nodes: [
        { id: "square", label: "Plaza del Reloj", caption: "Allí comenzó la puesta en escena pública." },
        { id: "tower", label: "Campanario", caption: "Allí se ejecutó la manipulación material." },
        { id: "valdeluna", label: "Valdeluna", caption: "Allí confluyen la ruta, el dinero y el escondite." },
        { id: "quarry", label: "Cantera cerrada", caption: "Solo fue un paso secundario del traslado." }
      ],
      answer: "valdeluna",
      success: "Valdeluna era el punto de reunión con los inversores y el escondite temporal de Bercial. El reloj por fin deja de señalar la hora para señalar a los culpables. La villa entera entiende entonces que el destino final siempre fue más importante que el primer escenario del crimen."
    },

    pb01: {
      id: "pb01", chapter: 0, title: "La Crónica Local", picarats: 10, bonus: true, bonusReward: 2,
      intro: "Opcional · Un corresponsal dejó en la posada un recorte sobre un incidente idéntico en Miravalles tres años atrás. Bercial lo tenía marcado con tinta roja.",
      instruction: "Compara ambos casos y señala el factor que realmente se repite; esa coincidencia estructural prueba que no fue un accidente aislado.",
      type: "choice",
      options: [
        option("a", "El modelo del reloj", "≠ modelo", "Los relojes son de distinto fabricante."),
        option("b", "El nombre del capataz", "≠ nombre", "Los capataces tienen nombres distintos, lo cual no implica nada."),
        option("c", "La financiación municipal", "= financiación", "Ambos casos comparten el mismo consorcio ferroviario como inversor oculto."),
        option("d", "La fecha de inauguración", "≠ fecha", "Las fechas son distintas pero el esquema financiero es idéntico.")
      ],
      answer: "c",
      success: "El consorcio ferroviario aparece en ambos casos. La diferencia de nombres y modelos es irrelevante: el patrón financiero idéntico convierte el accidente en un método replicable."
    },

    pb02: {
      id: "pb02", chapter: 1, title: "El Cuaderno de Claves", picarats: 10, bonus: true, bonusReward: 2,
      intro: "Opcional · Entre las herramientas de Bercial hay un cuadernillo con páginas numeradas de forma irregular. Las páginas 7, 14 y 21 contienen dibujos de ruedas dentadas. Bercial seguía un patrón.",
      instruction: "Observa la secuencia 7, 14, 21 y usa el contador para marcar la siguiente pagina que respeta el patron.",
      type: "number", min: 1, max: 60, answer: 28,
      success: "La siguiente página es la 28. El patrón es múltiplos de 7. Bercial codificó sus observaciones en progresiones aritméticas simples para que quien conociera la clave pudiera recuperarlas sin leer todo el cuaderno."
    },

    pb03: {
      id: "pb03", chapter: 2, title: "La Anotación de Oria", picarats: 10, bonus: true, bonusReward: 2,
      intro: "Opcional · La bibliotecaria Oria escribió en el margen de un acta cinco términos que aparecían con frecuencia anómala en los documentos municipales. Cuatro son tecnicismos administrativos reales. Uno es una invención de la defensa para oscurecer el expediente.",
      instruction: "Pulsa el termino que no pertenece al vocabulario administrativo real del periodo y que solo sirve para confundir auditorias.",
      type: "word",
      words: [
        { id: "licitacion", label: "LICITACIÓN", caption: "Término legal estándar para concursos públicos." },
        { id: "partida", label: "PARTIDA", caption: "Unidad contable habitual en presupuestos municipales." },
        { id: "consignacion", label: "CONSIGNACIÓN", caption: "Asignación de fondos a un fin específico." },
        { id: "reservamiento", label: "RESERVAMIENTO", caption: "No existe en la terminología administrativa del período." }
      ],
      answer: "reservamiento",
      success: "Reservamiento no existe como término legal. Alguien lo introdujo en los documentos para crear confusión terminológica en futuras auditorías. Oria lo había marcado con tres signos de interrogación."
    },

    pb04: {
      id: "pb04", chapter: 3, title: "Las Campanas y el Código", picarats: 10, bonus: true, bonusReward: 2,
      intro: "Opcional · El campanario tiene cinco campanas afinadas en intervalos precisos. Bercial dejó una nota: las campanas 1, 3 y 5 suenan a las horas pares; las 2 y 4 a las impares. Alguien cambió el orden para enviar una señal.",
      instruction: "Aplica la regla de campanas pares e impares: si a las 14:00 suenan 2 y 4, elige la conclusion correcta sobre el mecanismo.",
      type: "choice",
      options: [
        option("a", "Funcionamiento normal", "✓", "Las 14:00 son par, deberían sonar 1, 3 y 5."),
        option("b", "Fallo aleatorio", "?", "Los fallos aleatorios no producen patrones sistemáticos."),
        option("c", "Inversión deliberada", "⇄", "Alguien intercambió los grupos: la señal es intencional."),
        option("d", "Desgaste natural", "~", "El desgaste no distingue entre campanas pares e impares.")
      ],
      answer: "c",
      success: "La inversión es deliberada. Alguien reprogramó el orden de activación para comunicar que el mecanismo principal había sido alterado. Era la señal de alarma de Bercial."
    },

    pb05: {
      id: "pb05", chapter: 4, title: "El Horario Secreto", picarats: 10, bonus: true, bonusReward: 2,
      intro: "Opcional · Un mozo de andén conserva un horario manuscrito de Bercial con salidas de tren anotadas en código. Los trenes salen en intervalos de 15, 20 y 25 minutos desde tres andenes distintos. Bercial necesitaba saber cuándo coincidían los tres.",
      instruction: "Calcula el primer minuto en que vuelven a coincidir los trenes de 15, 20 y 25 minutos, partiendo todos ahora.",
      type: "number", min: 1, max: 400, answer: 300,
      success: "Los tres trenes coinciden a los 300 minutos (mínimo común múltiplo de 15, 20 y 25). Bercial usó esa coincidencia para organizar un traslado en el único momento de máxima actividad simultánea, cuando nadie prestaría atención a un carro más."
    },

    pb06: {
      id: "pb06", chapter: 5, title: "El Segundo Cilindro", picarats: 15, bonus: true, bonusReward: 2,
      intro: "Opcional · Inés descubre un segundo cilindro de registro oculto detrás del panel principal. A diferencia del oficial, este no fue alterado. Registra el momento exacto del sabotaje con una muesca en posición 8.",
      instruction: "Si el cilindro marca inicio a las 08:00 y la maniobra dura 45 minutos exactos, selecciona la hora real de finalizacion.",
      type: "choice",
      options: [
        option("a", "08:30", "08:30", "Solo media hora desde el inicio."),
        option("b", "08:45", "08:45", "Cuarenta y cinco minutos exactos desde las ocho."),
        option("c", "09:00", "09:00", "Una hora completa desde el inicio, no 45 minutos."),
        option("d", "08:15", "08:15", "Solo quince minutos, insuficiente para la operación.")
      ],
      answer: "b",
      success: "El sabotaje terminó a las 08:45. Eso sitúa al ejecutor ya fuera del campanario antes de que el primer trabajador llegara a las nueve. El segundo cilindro es la prueba más limpia de todo el caso."
    }
  };

  var PUZZLE_CONTEXT = {
    p01: {
      mural: "   ╔══════════ VESTÍBULO ══════════╗\n   ║  A  B  C   |   L1 L2 L3       ║\n   ║  ┃  ┃  ┃   |   ●  ●  ●        ║\n   ╚═══════════════════════════════╝",
      scene: "La noche anterior a la desaparición, Bercial pidió al conserje que no tocara el cuadro eléctrico. A primera hora, Inés encuentra dos interruptores con huellas recientes y uno limpio, como si alguien hubiera ensayado un recorrido en la oscuridad.",
      witness: "'No vi a nadie, pero olía a barniz caliente', declara una limpiadora. Esa frase, descartada por anecdótica, encaja con una lámpara recién apagada y aún templada.",
      reveals: "El puzle enseña la primera regla del caso: no basta ver, hay que medir rastros físicos. Luz y calor juntos desarman la versión del fallo espontáneo.",
      tension: "Si no distingues prueba visual de prueba térmica, el sabotaje puede seguir pareciendo una avería casual y toda la cadena técnica se debilita.",
      bridge: "Con esta lógica, el equipo avanza al taller para buscar qué más fue tocado después de declarar la escena cerrada."
    },
    p02: {
      mural: "      o   o\n    o   o   o\n      o\n    [patio de montaje]",
      scene: "En el patio del taller hay marcas de patas de silla en cal fresca. La disposición no corresponde a una reunión normal, sino a una plantilla de colocación usada para explicar posiciones y ángulos a operarios.",
      witness: "Un aprendiz recuerda que Bercial movía sillas para enseñar vectores de fuerza, no para sentarse. 'Decía que una mala posición rompe una torre antes de tocarla'.",
      reveals: "La superposición de triángulos revela coordinación entre dos agentes: uno ajusta y otro vigila. El sabotaje fue binario desde el principio.",
      tension: "Sin esta lectura geométrica, la defensa puede insistir en un único autor improvisando en solitario.",
      bridge: "La investigación salta del patio al despacho del alcalde, donde cada frase también parece colocada en su sitio exacto."
    },
    p03: {
      mural: "   ┌─────────┐\n   │    ?    │\n   │ carta   │\n   └─────────┘",
      scene: "Sobre la mesa de Velasco hay una baraja incompleta y una carta boca abajo junto al acta preliminar. No es un adorno: es un gesto de control narrativo, una forma de sugerir certezas sin entregar datos.",
      witness: "Inés anota: 'Nos hablan con frases cerradas y hechos abiertos'. El profesor responde que esa asimetría es la marca de todo encubrimiento administrativo.",
      reveals: "El puzle obliga a distinguir afirmación de evidencia. Esa separación metodológica sostendrá todas las acusaciones posteriores.",
      tension: "Si aceptas información no verificable, cada testimonio ambiguo puede usarse para neutralizar pruebas sólidas.",
      bridge: "Con el lenguaje depurado, el equipo vuelve al plano del patio para forzar una lectura fuera del marco oficial."
    },
    p04: {
      mural: "• • •\n• • •\n• • •\n↘ → ↗ ↘",
      scene: "El mapa mural del ayuntamiento muestra una cuadrícula perfecta, demasiado perfecta para una obra antigua. Bercial dejó una anotación en el borde: 'Si te obligan a no salir del cuadro, ya has perdido'.",
      witness: "Un capataz jubilado confirma que la torre tuvo una ampliación irregular hace años, jamás incorporada al plano público por orden del consejo.",
      reveals: "Salir del marco no es un truco abstracto: es la clave física para encontrar la escalera omitida del campanario.",
      tension: "Mantenerse en el plano oficial convierte la ausencia en verdad y hace invisible la ruta real del saboteador.",
      bridge: "Con el marco roto, la trama entra en el taller y en los libros de deuda que nadie quería volver a abrir."
    },
    p05: {
      mural: "   o\n o o o\n  o o\n o o o\n   o",
      scene: "En el libro de cuentas de Bercial aparecen estrellas dibujadas en los márgenes junto a pagos fraccionados. Lo que parece decoración es, en realidad, un mapa de transferencias que se cruzan.",
      witness: "Oria encuentra recibos con el mismo importe dividido en partidas distintas: hierro, transporte, ceremonia. El total siempre coincide con una cifra oculta mayor.",
      reveals: "La estrella demuestra cómo una sola pieza puede sostener varias líneas contables. El fraude no está en un pago, sino en la red.",
      tension: "Si no ves los cruces, las partidas infladas parecen meros errores de contabilidad municipal.",
      bridge: "El siguiente paso es filtrar testimonios contradictorios con la misma precisión con la que se separan líneas de pago."
    },
    p06: {
      mural: "[A] puerta\n[X] guardia\n[Y] guardia\n[B] puerta",
      scene: "En un almacén lateral dos serenos juran versiones opuestas sobre la madrugada del sabotaje. Ninguno admite mentir, y ambos señalan una puerta distinta.",
      witness: "Inés detecta un patrón: los dos serenos han ensayado respuestas, pero no ensayaron responderse entre ellos. Ahí está la grieta lógica.",
      reveals: "La inversión doble elimina la necesidad de confiar en personas concretas. Método antes que carisma.",
      tension: "Sin un filtro lógico, la causa dependería de intuiciones y no de procedimientos auditables.",
      bridge: "Con los testimonios depurados, queda enfrentar enunciados absurdos usados para cansar y desviar la investigación."
    },
    p07: {
      mural: "~ ~ ~\n<>< <><\n<>< <><",
      scene: "Bercial dejaba acertijos absurdos a sus aprendices para entrenar una habilidad concreta: detectar cuándo un problema está mal planteado desde la base.",
      witness: "El profesor explica que los encubrimientos se sostienen más por fatiga mental que por inteligencia criminal: a fuerza de ruido, la gente deja de verificar.",
      reveals: "El puzle fortalece la resistencia a premisas falsas, justo lo que necesitarán al revisar informes oficiales plagados de términos ambiguos.",
      tension: "Aceptar imposibles por costumbre normaliza expedientes técnicamente inválidos.",
      bridge: "Con el criterio afilado, el reloj de la estación aparece como siguiente foco de manipulación."
    },
    p08: {
      mural: "RELOJ ESTACIÓN\n  09:40\n[+20 min real]",
      scene: "En Valdeluna, la torre de andén atrasa de forma constante desde hace meses. Nadie lo corrige porque el desfase beneficia a los registros de salida de carga.",
      witness: "Un taquillero confiesa que recibía órdenes de no ajustar la hora en días de niebla. 'Decían que era para no alterar a los viajeros'.",
      reveals: "El tiempo manipulado permite encubrir desplazamientos reales bajo horarios aparentemente inocentes.",
      tension: "Si no corriges el desfase, la línea temporal del traslado de Bercial no se puede demostrar en juicio.",
      bridge: "Con el Bloque A cerrado, la investigación gana acceso a hemeroteca y testimonio nocturno."
    },
    p09: {
      mural: "\   *\n \  ╲\n  \ ╱ 90°\n   ╱",
      scene: "La sala de consulta tiene espejos inclinados para proteger documentos de luz directa. Bercial usaba ese rincón para explicar cómo un mismo hecho produce múltiples imágenes sin multiplicar su origen.",
      witness: "Oria subraya que tres vecinos dieron relatos distintos sobre la misma noche. No mintieron todos: miraron desde ángulos distintos y con intereses distintos.",
      reveals: "El puzle enseña a tratar versiones como reflejos de una fuente común, no como hechos independientes.",
      tension: "Confundir reflejo con fuente rompe la consistencia probatoria de todo el capítulo documental.",
      bridge: "Con ese criterio, el equipo analiza actas y banquetes donde la distancia entre personas importa más que los discursos."
    },
    p10: {
      mural: "[AS] [REY] [REINA] [JOTA]",
      scene: "Un protocolo de cena del consejo incluye un croquis de asientos tachado y rehecho tres veces. Las sillas no se distribuyeron por etiqueta, sino por conveniencia judicial.",
      witness: "Inés encuentra una nota lateral: 'No juntos'. Sin nombres, sin contexto. Solo esa advertencia repetida en tinta distinta.",
      reveals: "Ordenar cartas sin adyacencias modela la estrategia social del encubrimiento: evitar proximidades peligrosas entre cómplices y testigos.",
      tension: "Sin reconstruir esa mesa, se pierde el vínculo entre decisiones de obra y decisiones de silencio.",
      bridge: "La red de proximidades conduce al diagrama de pesadas donde Bercial codificó cómo aislar al eslabón débil."
    },
    p11: {
      mural: "A B C  |  D E F\n   G H  (reserva)",
      scene: "Junto al libro mayor aparece una balanza dibujada con ramas de decisión. No habla de monedas, habla de personas bajo sospecha y de cómo descartarlas sin sesgo.",
      witness: "El profesor admite que Bercial no dejaba acertijos para entretener: los dejaba como protocolos de análisis cuando él ya no pudiera declarar.",
      reveals: "Reducir el espacio de búsqueda en dos pasos replica la investigación real: primero bloque de acceso, luego autor material.",
      tension: "Sin estrategia de descarte, la defensa puede dispersar el caso en una multitud de hipótesis secundarias.",
      bridge: "Con el árbol de sospecha claro, queda fijar tiempos exactos para impedir manipulación retrospectiva de eventos."
    },
    p12: {
      mural: "18:00 >>>>>>> 12\n18:05 <<<<< 5",
      scene: "En la hemeroteca, un mural de aves marca rutas por minutos. Bercial lo usaba para entrenar cronología estricta: una secuencia bien contada no permite saltos oportunistas.",
      witness: "Oria recuerda que el consejo cambió tres veces la hora oficial del cierre de torre. Siempre hacia atrás, nunca hacia delante.",
      reveals: "El puzle obliga a respetar el orden temporal y detecta intentos de mover consecuencias para justificar decisiones previas.",
      tension: "Sin cronología rígida, cualquier acta editada puede parecer consistente por simple narrativa.",
      bridge: "Con el Bloque B concluido, se abre el perfil completo de Inés y el paso al campanario omitido."
    },
    p13: {
      mural: "X . . .\n. . . .\n. . . .\n. . . X",
      scene: "El suelo del tramo oculto alterna piedra clara y oscura igual que un tablero. Dos esquinas fueron sustituidas por placas nuevas durante la reforma nocturna.",
      witness: "Un albañil retirado afirma que le pidieron cerrar esa sección 'por estética'. Nunca volvió a verla en planos oficiales.",
      reveals: "La paridad rota demuestra que la intervención no fue ornamental: modificó la funcionalidad de tránsito hacia el eje.",
      tension: "Si esto queda como detalle arquitectónico, la ruta del saboteador pierde soporte material.",
      bridge: "Desde la estructura, el equipo pasa a medir tiempos de ejecución con herramientas de mantenimiento nocturno."
    },
    p14: {
      mural: "VELA A ⇄\nVELA B →",
      scene: "En el cuarto de velas hay marcas de cera en dos alturas distintas, señal de uso simultáneo por ambos extremos. Nadie en mantenimiento reconoce ese procedimiento.",
      witness: "Inés conecta la técnica con una nota de Bercial: 'la mitad exacta no se adivina, se fuerza'.",
      reveals: "La medición de 45 minutos encaja con la ventana entre corte de energía y sustitución del cilindro.",
      tension: "Perder esta precisión permitiría alegar improvisación y no premeditación coordinada.",
      bridge: "Con el intervalo fijado, queda demostrar cómo se redistribuyeron piezas y vacíos en el sistema de calibración."
    },
    p15: {
      mural: "  o\n  o\no o o\n  o\n  o",
      scene: "La mesa de calibración conserva una cruz de fichas y tres marcas de arrastre. La forma final no está en lo que se mueve, sino en el hueco que se decide conservar.",
      witness: "El profesor apunta: 'Los culpables no solo añadieron piezas; retiraron las que hacían visible su camino'.",
      reveals: "El contorno cuadrado con centro vacío traduce la lógica del sabotaje: ocultar el núcleo dejando un marco aparentemente estable.",
      tension: "Si se ignoran los vacíos, desaparecen evidencias de manipulación deliberada del plano operativo.",
      bridge: "Con la geometría cerrada, la galería de retratos ofrece el último filtro cognitivo antes de la acusación física."
    },
    p16: {
      mural: "[Juan] [Pablo] [?]",
      scene: "La galería de retratos funciona como antesala a la trampilla. Bercial dejó enigmas de lectura para obligar a mirar el inicio de cada frase, no su remate teatral.",
      witness: "Inés admite que casi cae en la trampa. El profesor responde que la mitad de los informes oficiales del caso usan ese mismo sesgo de atención.",
      reveals: "La respuesta evidente (Raúl) confirma que el dato crucial suele estar al principio, antes de que el lenguaje arrastre la mirada.",
      tension: "Si el equipo sigue mirando solo finales, perderá cláusulas clave en actas y contratos.",
      bridge: "Bloque C aún cerrado; la pista ahora migra a Valdeluna, donde la logística completa espera ser reconstruida."
    },
    p17: {
      mural: "[A][B][C][D]\n río / puente / plaza",
      scene: "El mapa de ruta hacia Valdeluna llega roto en cuatro fragmentos escondidos entre manifiestos de carga. Cada trozo omite una esquina, como si alguien quisiera impedir una lectura total.",
      witness: "Un mozo de andén recuerda que los carros nunca iban directos: siempre hacían una curva sin sentido junto al río antes de entrar a estación.",
      reveals: "Alinear primero el río fija el esqueleto geográfico y revela los puntos de transbordo donde pudo ocultarse a Bercial.",
      tension: "Sin base cartográfica sólida, la fuga queda en mera inferencia narrativa.",
      bridge: "Con la ruta dibujada, el equipo necesita determinar el instante exacto del cambio de control de carga."
    },
    p18: {
      mural: "^ ^ ^ ^ ^ v v v v v",
      scene: "Las copas de latón del andén marcaban estados de vagón: recepción y salida. Una secuencia invertida en el centro señala un cambio operativo no registrado oficialmente.",
      witness: "El jefe de estación declara que esa codificación solo la conocían dos personas: Salcedo y su ayudante de noche.",
      reveals: "Invertir el tramo frontera unifica la secuencia y marca la intervención exacta sobre la cadena de traslado.",
      tension: "Sin detectar ese umbral, la defensa puede alegar continuidad normal del servicio.",
      bridge: "La frontera hallada conduce a los ciclos de faros que abrían la ventana segura de movimiento."
    },
    p19: {
      mural: "20s / 30s / 45s\nmcm = ?",
      scene: "Tres faros del corredor ferroviario parpadean con ciclos distintos. Los contrabandistas usaban su coincidencia para cruzar zonas de vigilancia con visibilidad mínima.",
      witness: "Inés encuentra un parte de guardia con huecos justo cada tres minutos. Nadie los explicó en su momento.",
      reveals: "El encuentro en 180 segundos define la ventana logística exacta para mover persona y cilindro sin testigos fiables.",
      tension: "Sin periodicidad demostrada, la huida parecerá una concatenación fortuita de niebla y suerte.",
      bridge: "Tras fijar la ventana, falta sincronizarla con el reloj maestro para cerrar la acusación temporal."
    },
    p20: {
      mural: "minutero + horario\n00:00 — 12:00",
      scene: "El reloj auxiliar del jefe de estación muestra superposiciones anotadas en tinta roja. Bercial dejó una equivalencia entre esas coincidencias y los puntos ciegos del registro mecánico.",
      witness: "El profesor subraya que una única coincidencia mal contada basta para romper toda la cadena de coordinación en sala.",
      reveals: "Las once superposiciones validan el alineamiento entre sabotaje en torre y salida del convoy hacia Valdeluna.",
      tension: "Un desfase mínimo permite a la defensa separar hechos que en realidad fueron coordinados.",
      bridge: "Con cronología y logística sincronizadas, el bloque final se centra en depurar lenguaje y etiquetas de la trama financiera."
    },
    p21: {
      mural: "TORRE / RUEDA / RELOJ / NUBE",
      scene: "En el almacén, los listados mezclan términos mecánicos con palabras poéticas para hacer ilegibles los inventarios judiciales.",
      witness: "Inés detecta que 'Nube' aparece en documentos de pago donde deberían figurar piezas o servicios concretos.",
      reveals: "Separar la intrusa depura el expediente y evita que metáforas operen como pantalla contable.",
      tension: "Si no limpias el lenguaje, cualquier ambigüedad puede convertirse en agujero legal.",
      bridge: "Con el vocabulario depurado, el equipo aborda la lógica invertida de etiquetado en cajas de metales." 
    },
    p22: {
      mural: "[ORO] [PLATA] [MIXTO]",
      scene: "Las cajas del consorcio están mal rotuladas por sistema. No es torpeza: es un método para introducir denegación plausible en cada auditoría.",
      witness: "Un antiguo interventor confiesa que le enseñaron a leer 'al revés' los rótulos en operaciones sensibles.",
      reveals: "Tomar la muestra desde MIXTO rompe el truco y muestra la inversión contable que sostuvo pagos y traslados.",
      tension: "Sin este patrón, las cuentas del consorcio pueden presentarse como desorden burocrático y no como fraude deliberado.",
      bridge: "Con la máscara contable caída, solo falta el margen técnico que une mano humana y desajuste astronómico."
    },
    p23: {
      mural: "15° / hora\n8 min = ?°",
      scene: "La cámara del regulador conserva una libreta de microcálculos. Bercial escribió márgenes de error admisibles para distinguir fallo natural de intervención humana.",
      witness: "El profesor explica a Inés que un crimen mecánico se gana en decimales: quien domina el margen domina la narrativa del accidente.",
      reveals: "Los 2 grados en ocho minutos encajan con el desplazamiento medido en el cilindro maestro y sellan la manipulación del eje.",
      tension: "Sin cifra precisa, la defensa puede refugiarse en variaciones normales del sistema.",
      bridge: "Con el margen cerrado, la historia ya no pregunta cómo: pregunta dónde converge todo."
    },
    p24: {
      mural: "PLAZA / TORRE / VALDELUNA / CANTERA",
      scene: "El tablero final reúne rutas, horarios, etiquetas y actas. No es un acertijo aislado: es la síntesis completa del caso en una única decisión de destino.",
      witness: "Inés repasa en voz alta cada bloque resuelto. Cada línea vuelve al mismo punto ferroviario aunque cambien protagonistas, documentos y horas.",
      reveals: "Valdeluna concentra móvil, oportunidad, logística y encubrimiento. Elegirla cierra la arquitectura completa de la acusación.",
      tension: "Si el destino final se dispersa, el veredicto se fragmenta y la defensa puede romper la cadena causal.",
      bridge: "La resolución de este puzle activa la acusación final y convierte al reloj maestro en testigo principal del juicio." 
    },
    pb01: {
      mural: "MIRAVALLES / SAN TEODORO\nCONSORCIO = ?",
      scene: "En la hemeroteca aparece un recorte de Miravalles con un accidente casi idéntico: reloj público, reforma apresurada y acta cerrada en 48 horas.",
      witness: "Oria afirma que el texto está escrito por un redactor contratado por el mismo consorcio que financió San Teodoro.",
      reveals: "La comparación histórica confirma que el caso no es local ni espontáneo: sigue un patrón repetido con la misma arquitectura económica.",
      tension: "Sin esa conexión externa, la defensa puede presentar el caso como una suma de errores aislados y no como un método industrial.",
      bridge: "Con el patrón ya identificado, el equipo busca ahora dónde dejó Bercial codificadas las pruebas reutilizables."
    },
    pb02: {
      mural: "7 / 14 / 21 / ?",
      scene: "El cuaderno menor de Bercial parece desordenado, pero ciertos folios con croquis de engranajes aparecen en una progresión fija.",
      witness: "Inés detecta que las páginas con tinta azul siempre contienen datos verificables; las demás son señuelos para curiosos.",
      reveals: "La secuencia numérica demuestra que Bercial diseñó una ruta de lectura para aliados, no un diario casual.",
      tension: "Si no se descifra esta estructura, muchas pruebas secundarias quedarían enterradas entre ruido documental.",
      bridge: "Esa lógica de cifrado conduce al análisis léxico de actas manipuladas por el consejo."
    },
    pb03: {
      mural: "LICITACION / PARTIDA / CONSIGNACION / RESERVAMIENTO",
      scene: "En varias actas aparece una palabra administrativa inexistente insertada justo en los párrafos con transferencias más opacas.",
      witness: "Un antiguo secretario admite que usaban tecnicismos inventados para bloquear preguntas de interventores novatos.",
      reveals: "Detectar el término falso limpia el expediente y muestra que la ambigüedad legal fue planificada como barrera defensiva.",
      tension: "Si ese lenguaje se acepta como válido, cualquier auditoría posterior nacería desarmada por terminología ambigua.",
      bridge: "Con el vocabulario depurado, el equipo vuelve al campanario para interpretar señales técnicas de alarma."
    },
    pb04: {
      mural: "1-3-5 (pares) / 2-4 (impares)\n14:00 -> 2-4",
      scene: "El patrón de campanas registrado por Bercial se invierte en días clave. No es un fallo acústico, es una señal codificada.",
      witness: "El campanero suplente declara que solo Salcedo tenía permiso para recalibrar el orden de repiques fuera de ceremonia.",
      reveals: "La inversión deliberada prueba intervención humana y sugiere que Bercial dejó alarmas redundantes ante una traición inminente.",
      tension: "Sin distinguir señal de avería, la manipulación podría seguir interpretándose como simple desgaste mecánico.",
      bridge: "La última pieza logística exige ahora fijar ventanas exactas de movimiento en la estación de Valdeluna."
    },
    pb05: {
      mural: "15 / 20 / 25\nmcm = 300",
      scene: "El horario secreto de andén muestra tres ritmos de salida coordinados para generar un pico de confusión cada cierto intervalo.",
      witness: "Un mozo recuerda que en esos picos nadie revisaba manifiestos menores porque toda la plantilla corría entre plataformas.",
      reveals: "El punto de coincidencia en 300 minutos explica cuándo podían mover persona y cilindro sin inspección detallada.",
      tension: "Sin esta ventana temporal, la ruta de huida parecería depender solo de niebla y casualidad, debilitando la acusación.",
      bridge: "Con logística y cronología cerradas, la investigación encara el segundo cilindro que Bercial ocultó como seguro final."
    },
    pb06: {
      mural: "CILINDRO II\n08:00 + 45 min",
      scene: "Detrás del panel maestro aparece un cilindro auxiliar intacto con una muesca limpia en posición ocho y marcas de cierre apresurado.",
      witness: "Inés comprueba que ese cilindro no pasó por la sala de mantenimiento municipal; nadie del ayuntamiento lo registró.",
      reveals: "El cálculo de finalización fija un instante exacto e independiente de testimonios, sellando la cronología material del sabotaje.",
      tension: "Sin esta prueba autónoma, la defensa aún podría discutir márgenes horarios y sembrar duda razonable en el juicio.",
      bridge: "El hallazgo refuerza el cierre del caso y da soporte técnico definitivo al veredicto final."
    }
  };

  var PUZZLE_GUIDES = {
    p01: { prompt: "Ante ti hay tres interruptores en el vestíbulo y tres lámparas ocultas en una habitación cerrada. Solo podrás entrar una vez, así que debes planear una secuencia que te deje rastros visibles y térmicos al mismo tiempo.", goal: "Relacionar cada interruptor con su lámpara usando una única inspección.", steps: ["Decide qué interruptor dejarás encendido, cuál apagarás tras un rato y cuál no tocarás.", "Entra una sola vez en la habitación.", "Asigna cada lámpara según esté encendida, templada o fría."], win: "Cada lámpara queda emparejada con su interruptor correcto.", mentor: "El metal caliente recuerda incluso cuando la luz ya ha callado.", apprentice: "Si preparo bien la prueba antes de mirar, la habitación casi se resolverá sola.", hints: ["Una lámpara útil puede estar apagada cuando la mires.", "Necesitas tres estados distintos: encendida, caliente y fría.", "Deja una activa, apaga otra justo antes de entrar y no toques la tercera."] },
    p02: { prompt: "Las sillas del patio no forman un dibujo casual; Bercial las dejó como una lección sobre cómo una mínima alteración cambia por completo la lectura de una escena. Debes imaginar dos movimientos y visualizar la figura final.", goal: "Descubrir qué disposición aparece al mover exactamente dos sillas.", steps: ["Observa qué forma inicial sugieren las seis posiciones.", "Piensa qué dos sillas pueden reutilizarse para crear líneas compartidas.", "Elige la figura final correcta."], win: "La figura elegida permite dos triángulos equiláteros superpuestos.", mentor: "Cuando dos soluciones parecen muchas, suele faltar una intersección compartida.", apprentice: "No voy a contar sillas; voy a buscar qué líneas pueden reaprovecharse.", hints: ["La solución no crea una fila ni una escalera.", "Dos triángulos distintos comparten parte del dibujo final.", "La respuesta válida parece una estrella muy simplificada."] },
    p03: { prompt: "Velasco acompaña sus declaraciones con una carta boca abajo y frases rotundas. El puzle te pide resistirte al tono de seguridad y decidir qué puede afirmarse de verdad cuando falta la prueba principal.", goal: "Separar una conclusión verificable de varias inferencias gratuitas.", steps: ["Ignora cómo suena de convincente cada frase.", "Pregunta qué dato puede demostrarse sin ver la carta.", "Marca la única conclusión honesta."], win: "Se elige la única afirmación que no inventa información ausente.", mentor: "Una afirmación elegante sigue siendo una conjetura si no toca la evidencia.", apprentice: "Voy a desconfiar de cualquier opción que afirme más de lo que veo.", hints: ["No sabes ni el palo ni el color de la carta.", "La solución correcta no describe la carta, describe el valor de la pista.", "La mejor respuesta es admitir que no se ha demostrado nada útil."] },
    p04: { prompt: "Los nueve puntos del plano municipal parecen encerrarte en una cuadrícula. El reto consiste en romper ese marco imaginario con cuatro líneas rectas continuas, igual que tendrás que romper el marco oficial del caso.", goal: "Encontrar el recorrido de cuatro trazos que pase por los nueve puntos sin levantar la mano.", steps: ["Olvida el borde invisible del cuadrado.", "Busca líneas largas que puedan comenzar o terminar fuera del conjunto.", "Elige el único recorrido compatible con esa idea."], win: "El recorrido cruza los nueve puntos en cuatro segmentos rectos continuos.", mentor: "La trampa suele vivir en el límite que nadie te obligó realmente a respetar.", apprentice: "Si el plano me encierra, tendré que salirme de él para entenderlo.", hints: ["No intentes resolverlo quedándote dentro de la cuadrícula.", "Alguna línea debe prolongarse más allá del último punto.", "La respuesta correcta literalmente sale del marco."] },
    p05: { prompt: "El cuaderno de Bercial usa monedas como si fueran nudos de una red. Debes escoger la figura que permite que una misma pieza pertenezca a varias líneas a la vez, como ocurre con los pagos repartidos del fraude.", goal: "Identificar la disposición de siete monedas que produce seis líneas de tres.", steps: ["Piensa en una figura con cruces e intersecciones, no en una forma cerrada simple.", "Comprueba qué disposición permite reutilizar una misma moneda en varias rectas.", "Selecciona la figura correcta."], win: "La figura elegida genera seis líneas rectas de tres monedas.", mentor: "Una pieza compartida vale más que tres piezas aisladas.", apprentice: "La cuenta no saldrá si no encuentro dónde se cruzan las líneas.", hints: ["Ni la cruz ni el círculo dan suficientes rectas.", "La solución necesita intersecciones claras.", "Busca la figura de estrella, no la más compacta."] },
    p06: { prompt: "Dos guardianes vigilan dos puertas y ninguno puede tomarse al pie de la letra. Necesitas formular una sola pregunta que anule simultáneamente verdad y mentira para descubrir la salida segura.", goal: "Escoger la pregunta que neutraliza a ambos guardianes.", steps: ["No preguntes por la puerta directamente.", "Haz que uno describa lo que diría el otro.", "Elige la formulación que produzca una respuesta invertida y utilizable."], win: "La pregunta permite deducir la puerta correcta sin saber quién miente.", mentor: "Cuando la voz humana falla, haz que una mentira tropiece con otra.", apprentice: "No necesito saber quién engaña si consigo que se contradigan dentro de la misma respuesta.", hints: ["Preguntar '¿cuál abrirías?' no basta.", "La clave es preguntar por la respuesta del otro guardián.", "La doble inversión transforma la mentira en un dato aprovechable."] },
    p07: { prompt: "Este enunciado intenta cansarte con una situación absurda para ver si aceptas una premisa rota. El verdadero desafío no es contar peces, sino negarte a conceder que el lenguaje del problema pueda hacerlos desaparecer.", goal: "Introducir la cantidad real de peces que siguen en la pecera.", steps: ["Lee el enunciado con literalidad, no con dramatismo.", "Descarta cualquier consecuencia imposible en una pecera real.", "Ajusta el contador al número que nunca cambió."], win: "El contador conserva la cantidad inicial porque nada del relato altera realmente a los peces.", mentor: "Hay problemas que se resuelven detectando la trampa antes de hacer ninguna cuenta.", apprentice: "Si el enunciado me pide creer un disparate, esa ya es la pista principal.", hints: ["Los peces no se ahogan en su propio medio.", "Nadie ha sacado peces de la pecera.", "La cifra final coincide con la inicial."] },
    p08: { prompt: "La estación de Valdeluna vive veinte minutos atrasada por conveniencia. Debes ponerte en la piel de quien mira ese reloj falso y decidir qué hora ve cuando en realidad ocurre la salida oficial.", goal: "Determinar la hora aparente que muestra un reloj atrasado veinte minutos.", steps: ["Parte de la hora real indicada en el enunciado.", "Resta el desfase del reloj de la estación.", "Escoge la hora que vería un observador confiado."], win: "La hora elegida refleja el retraso exacto del reloj del andén.", mentor: "Un horario falso no cambia el tren; cambia a los testigos.", apprentice: "La pregunta no pide la hora real, sino la mentira que ve la estación.", hints: ["No debes sumar, sino restar el atraso.", "La salida real es a las diez, pero el reloj va por detrás.", "Diez menos veinte minutos llevan a las nueve y cuarenta."] },
    p09: { prompt: "Dos espejos se enfrentan en ángulo recto y multiplican una misma imagen. Debes contar cuántas apariciones máximas genera esa disposición, igual que contarás más tarde cuántas versiones dependen de un mismo hecho.", goal: "Calcular el número máximo de imágenes con dos espejos a 90 grados.", steps: ["Recuerda cómo se duplican las reflexiones en dos superficies perpendiculares.", "Cuenta las dos imágenes directas y la resultante combinada.", "Ajusta el contador al total."], win: "El contador muestra el número correcto de imágenes reflejadas.", mentor: "Un reflejo repetido no crea nuevos hechos; solo repite el mismo desde otro ángulo.", apprentice: "Voy a pensar en rebotes, no en personas distintas.", hints: ["Cada espejo aporta una imagen directa.", "Además aparece una imagen por doble reflexión.", "La suma total es tres."] },
    p10: { prompt: "El croquis de la mesa del consejo es una maniobra social disfrazada de protocolo. Debes elegir la única fila donde los valores no queden junto a sus vecinos naturales, reproduciendo así cómo los cómplices evitaban ciertas proximidades.", goal: "Encontrar la secuencia válida de cuatro naipes sin adyacencias prohibidas.", steps: ["Identifica qué cartas no pueden tocarse entre sí.", "Descarta las filas que dejan juntas parejas naturales como Rey-Reina o Reina-Jota.", "Marca la única combinación limpia."], win: "La secuencia elegida evita todas las adyacencias vetadas.", mentor: "En una mesa bien ordenada, los silencios también se sientan en sitios concretos.", apprentice: "Primero quitaré las combinaciones prohibidas; la correcta debería quedarse sola.", hints: ["Rey y Reina no pueden ser vecinos.", "Tampoco deben tocarse Reina y Jota.", "Solo una fila alterna esos valores con suficiente distancia."] },
    p11: { prompt: "La falsa moneda del cuaderno no representa metal: representa sospecha. Debes escoger la estrategia de dos pesadas que más rápido reduce el abanico de posibilidades hasta aislar la pieza problemática.", goal: "Elegir el árbol de decisión correcto para hallar una moneda falsa en dos pesadas.", steps: ["Busca una primera pesada que parta el problema en bloques equilibrados.", "Valora qué ocurre si la balanza empata y qué ocurre si no.", "Selecciona el esquema que deja un segundo movimiento decisivo."], win: "La estrategia elegida permite identificar la moneda falsa en dos pasos.", mentor: "Una buena investigación no persigue a todos a la vez; divide primero y aprieta después.", apprentice: "Si la primera pesada no reduce mucho, la segunda ya llega tarde.", hints: ["Empezar con 1 contra 1 o 2 contra 2 desperdicia información.", "Una primera pesada de 3 contra 3 deja un bloque sospechoso muy manejable.", "La solución correcta separa equilibrio y desequilibrio de forma útil desde el principio."] },
    p12: { prompt: "El consejo retoca las horas como si el tiempo pudiera moverse hacia atrás. Este puzle te pide mantener la cronología firme y decidir cuántos cuervos seguían yendo al este en un minuto concreto, sin mezclar tiempos posteriores.", goal: "Mantener el conteo correcto en el instante exacto de las 18:02.", steps: ["Ancla tu atención en la hora pedida y no en toda la historia.", "Descarta lo que sucede después de ese instante.", "Ajusta el contador al número que seguía vigente a las 18:02."], win: "El contador refleja la situación exacta antes del momento de regreso.", mentor: "Una cronología honesta no permite que el futuro contamine al pasado.", apprentice: "Voy a congelar el reloj justo en la hora indicada y leer solo esa imagen.", hints: ["El regreso de algunos cuervos ocurre más tarde.", "A las 18:02 todavía no ha cambiado el conteo inicial del este.", "La respuesta es doce."] },
    p13: { prompt: "El tablero mutilado del campanario parece casi normal, pero la paridad de sus colores ha quedado rota. Debes decidir si un dominó puede cubrirlo completo o si la propia estructura cromática lo vuelve imposible.", goal: "Determinar si el tablero sin dos esquinas opuestas admite cobertura total con dominós.", steps: ["Recuerda que cada dominó cubre siempre una casilla clara y una oscura.", "Piensa qué colores desaparecen al quitar dos esquinas opuestas.", "Elige la conclusión correcta."], win: "Se reconoce la imposibilidad por desequilibrio de colores.", mentor: "No toda forma imposible parece rota a primera vista; algunas fallan en la cuenta invisible.", apprentice: "Voy a mirar el color que falta, no el hueco que impresiona.", hints: ["Dos esquinas opuestas comparten color.", "Cada dominó necesita un par de colores distinto.", "Al faltar dos del mismo color, la cobertura completa es imposible."] },
    p14: { prompt: "En una noche sin cronómetros fiables, dos velas de combustión irregular pueden medir un intervalo exacto si las enciendes con astucia. Debes elegir la secuencia que produce cuarenta y cinco minutos sin confiar en que ardan uniformemente.", goal: "Seleccionar el método correcto para medir 45 minutos.", steps: ["Busca una forma de forzar una referencia exacta de 30 minutos.", "Después usa la segunda vela para obtener un cuarto de hora adicional.", "Escoge la secuencia compatible con esa lógica."], win: "La secuencia elegida permite medir exactamente 45 minutos.", mentor: "La irregularidad deja de ser un enemigo cuando la obligas a cerrarse por ambos extremos.", apprentice: "Primero necesito fabricar media hora exacta; luego el resto será sencillo.", hints: ["Encender ambas por un solo extremo no crea ninguna referencia intermedia.", "Una vela encendida por ambos extremos dura media hora.", "Cuando esa primera vela se consuma, la segunda ya habrá avanzado 30 minutos y le quedarán 30; si enciendes su otro extremo, caerá en 15."] },
    p15: { prompt: "Sobre la mesa quedan fichas formando una cruz. Debes mover exactamente tres para convertir ese dibujo en un cuadrado, aceptando que el centro vacío puede importar tanto como las fichas que permanezcan a la vista.", goal: "Identificar la figura final lograda con tres movimientos mínimos.", steps: ["No busques un cuadrado macizo por dentro.", "Piensa en el contorno completo que dejan las fichas al recolocarse.", "Elige la figura resultante correcta."], win: "La figura seleccionada es un cuadrado definido por su borde, con hueco central.", mentor: "El vacío bien colocado también dibuja una estructura.", apprentice: "Voy a pensar en marcos, no en rellenos.", hints: ["La solución no es una cruz más pequeña.", "El cuadrado correcto no está relleno por completo.", "Debes imaginar un contorno de ocho posiciones alrededor de un centro vacío."] },
    p16: { prompt: "Bercial dejó un retrato y un enunciado casi burlón junto a la trampilla. La trampa consiste en hacerte mirar el tono de la frase y no la información literal que ya contiene la respuesta en su arranque.", goal: "Señalar el nombre del tercer hijo atendiendo solo a la información explícita.", steps: ["Lee el enunciado sin añadir ironías ni dobles sentidos.", "Fíjate en el inicio, donde ya se ordenan los hijos.", "Marca el nombre que ocupa la tercera posición."], win: "Se elige el tercer nombre correcto sin dejarse arrastrar por el estilo del enunciado.", mentor: "Lo importante suele presentarse antes de que la frase empiece a adornarse.", apprentice: "No voy a perseguir el chiste; voy a atender al dato seco.", hints: ["No hace falta interpretar nada oculto.", "La frase ya contiene un orden implícito muy simple.", "El tercer hijo es Raúl."] },
    p17: { prompt: "Los fragmentos del mapa no deben montarse por estética, sino por dependencia lógica. Primero va lo que menos puede moverse; después, todo lo que se apoya en ello. Debes ordenar cuatro criterios como si reconstruyeras una escena real de traslado.", goal: "Colocar los criterios de reconstrucción del mapa del más rígido al más dependiente.", steps: ["Pulsa los cuatro fragmentos en el orden que usarías para recomponer la ruta.", "Fíjate en qué elemento impone restricciones físicas a los demás.", "Valida la secuencia cuando los cuatro huecos queden completos."], win: "La secuencia respeta la prioridad correcta de río, puente, plaza y camino.", mentor: "La topografía manda; el resto obedece.", apprentice: "Empezaré por lo que nadie puede negociar: el cauce.", hints: ["No empieces por símbolos urbanos ni direcciones abstractas.", "El puente depende del río, no al revés.", "La secuencia correcta es río, puente, plaza y camino."] },
    p18: { prompt: "Diez copas de latón registran el cambio de estado de los vagones. Puedes tocar exactamente tres y debes devolver toda la fila a una orientación uniforme, localizando el umbral preciso donde la rutina dejó de ser normal y pasó a ser manipulada.", goal: "Voltear tres copas para dejar las diez en la misma orientación.", steps: ["Observa dónde cambia la secuencia de copas boca arriba a boca abajo.", "Selecciona exactamente tres copas alrededor de esa frontera.", "Voltéelas y valida cuando toda la fila quede uniforme."], win: "Todas las copas acaban mirando en la misma dirección.", mentor: "Los sistemas se rompen en su borde, no en su centro aparente.", apprentice: "Buscaré el corte entre estados, no las copas más llamativas.", hints: ["La solución no está al principio ni al final de la fila.", "Debes trabajar sobre la frontera entre los dos grupos.", "Las tres copas correctas son las centrales que rodean ese cambio."] },
    p19: { prompt: "Tres faros laten a ritmos distintos y la huida solo era segura cuando todos coincidían. Debes calcular el siguiente instante común de destello, que es también la ventana exacta donde el corredor quedaba ciego.", goal: "Encontrar el siguiente momento en que coinciden los tres ciclos.", steps: ["Identifica las frecuencias de los faros.", "Busca su mínimo común múltiplo, no una suma ni una media.", "Ajusta el contador al instante compartido."], win: "El contador marca la primera coincidencia común posterior a cero.", mentor: "Cuando varios ritmos deben verse juntos, manda el mínimo común múltiplo.", apprentice: "No voy a probar números al azar; necesito el primer punto donde encajan todos los ciclos.", hints: ["Trabaja con 20, 30 y 45 segundos.", "Busca un número divisible por los tres.", "La primera coincidencia útil es a los 180 segundos."] },
    p20: { prompt: "Las agujas del reloj auxiliar vuelven a darte una prueba de coordinación. Debes contar cuántas veces se superponen minutero y horario entre medianoche y mediodía, sin caer en la tentación de contar doce por pura simetría visual.", goal: "Calcular las superposiciones reales entre las 00:00 y las 12:00.", steps: ["Recuerda que las coincidencias no ocurren exactamente una por hora.", "Cuenta la coincidencia inicial y cómo se desplazan las siguientes dentro del intervalo.", "Introduce el total correcto en el contador."], win: "El número marcado coincide con las superposiciones reales del intervalo.", mentor: "Los relojes parecen obedecer rutinas perfectas hasta que alguien les exige precisión.", apprentice: "La intuición me empuja a decir doce; precisamente por eso voy a desconfiar de ella.", hints: ["El minutero alcanza al horario algo después de cada hora, no en la hora exacta.", "La coincidencia de las 12 no vuelve a repetirse dentro del intervalo cerrado como una duodécima nueva.", "Entre las 00:00 y las 12:00 se superponen once veces."] },
    p21: { prompt: "El inventario del consorcio mezcla términos de máquina con una palabra nebulosa que solo sirve para dificultar auditorías. Debes pulsar la intrusa y dejar a la vista el vocabulario estrictamente mecánico del expediente.", goal: "Eliminar la palabra que no nombra una pieza ni un sistema real.", steps: ["Compara las cuatro palabras como si leyeras un inventario técnico.", "Descarta todo término que no pueda tocarse ni montarse en el mecanismo.", "Pulsa la palabra intrusa."], win: "La selección deja solo vocabulario material y técnico.", mentor: "La poesía en un libro de cargas suele ser una coartada.", apprentice: "Si una palabra no puede pesarse ni atornillarse, probablemente sobra.", hints: ["Tres palabras nombran elementos del sistema del caso.", "Solo una funciona como metáfora difusa.", "La intrusa es Nube."] },
    p22: { prompt: "Las tres cajas mienten en sus rótulos y solo podrás abrir una. Debes escoger la caja que, al revelar una sola moneda, haga caer por deducción la mentira de las otras dos sin necesidad de más pruebas.", goal: "Seleccionar la caja óptima para una única muestra decisiva.", steps: ["Recuerda que todas las etiquetas están mal.", "Elige la caja cuya falsa etiqueta elimine más posibilidades al instante.", "Pulsa la caja y confirma tu deducción."], win: "La caja elegida permite deducir el contenido real de las tres.", mentor: "Cuando todas las etiquetas mienten, la más prometedora suele ser justo la imposible.", apprentice: "Buscaré la caja cuyo rótulo se autodestruya en cuanto la abra.", hints: ["No te conviene una caja que todavía pueda corresponder a varios escenarios.", "Si todas están mal, la caja MIXTO seguro no es mixta.", "Esa imposibilidad inicial convierte a MIXTO en la mejor elección."] },
    p23: { prompt: "La esfera celeste gira quince grados por hora y el margen anotado en el cilindro maestro solo abarca ocho minutos. Debes convertir esa velocidad angular a un desplazamiento breve para medir si el desajuste fue natural o manipulado.", goal: "Traducir una velocidad de quince grados por hora al avance de ocho minutos.", steps: ["Convierte la hora completa en minutos para trabajar con la misma unidad.", "Calcula cuántos grados corresponden a un minuto.", "Multiplica por ocho e introduce el resultado."], win: "El contador muestra el desplazamiento angular exacto en ocho minutos.", mentor: "Los crímenes mecánicos se cierran en fracciones, no en discursos.", apprentice: "Si reduzco la hora a minutos, la cuenta deja de intimidar.", hints: ["Quince grados repartidos en sesenta minutos equivalen a un cuarto de grado por minuto.", "Multiplica esa fracción por ocho minutos.", "El resultado correcto es dos grados."] },
    p24: { prompt: "Todo el caso debe converger en un único lugar del tablero final. No buscas dónde empezó la mentira ni dónde se tocó el mecanismo, sino dónde coincidieron traslado, beneficio, ocultación y espera del siguiente movimiento financiero.", goal: "Señalar el lugar que concentra toda la arquitectura del crimen.", steps: ["Repasa mentalmente qué función cumplía cada lugar importante del caso.", "Distingue escenario inicial, punto técnico, lugar de paso y destino útil.", "Pulsa el nodo donde confluyen dinero, huida y escondite."], win: "El destino elegido resume correctamente toda la maniobra criminal.", mentor: "El final de un caso no siempre está en el primer escenario, sino en el lugar donde el crimen esperaba cobrar sentido.", apprentice: "La torre explica cómo; ahora necesito el sitio que explique para qué y para quién.", hints: ["La plaza y el campanario son escenarios del montaje, no del beneficio.", "La cantera solo funciona como tramo auxiliar del traslado.", "El destino final que reúne todo es Valdeluna."] },
    pb01: { prompt: "Este puzle opcional contrasta San Teodoro con Miravalles para detectar si hablamos de un accidente aislado o de un procedimiento replicado. Debes filtrar diferencias superficiales y quedarte con el factor estructural que se repite.", goal: "Identificar el elemento común que demuestra un patrón criminal entre ciudades.", steps: ["Compara cada opción y separa datos cosméticos de datos estructurales.", "Pregunta qué variable, si se repite, convierte dos casos distintos en un mismo método.", "Selecciona la opción que sostenga una conexión económica verificable."], win: "La respuesta elegida prueba que ambos casos comparten arquitectura financiera y no mera coincidencia estética.", mentor: "En investigación comparada, lo estable pesa más que lo llamativo.", apprentice: "No me distraeré con nombres ni fechas: buscaré la pieza que hace repetir el modelo.", hints: ["Modelos de reloj y nombres de capataz pueden cambiar sin alterar el plan.", "Lo decisivo es quién financia y se beneficia de las obras.", "El vínculo clave es el consorcio ferroviario compartido."] },
    pb02: { prompt: "Bercial ordenó sus pruebas en progresiones simples para que un aliado entrenado pudiera reconstruirlas sin revelar la clave en texto plano. Este puzle opcional mide si reconoces esa secuencia numérica.", goal: "Encontrar la siguiente página válida del cuaderno codificado.", steps: ["Observa la distancia constante entre páginas conocidas.", "Verifica si el salto se mantiene en toda la serie.", "Introduce el siguiente valor que conserve la progresión."], win: "La página elegida prolonga correctamente la secuencia y desbloquea la lectura técnica del cuaderno.", mentor: "Los cifrados prácticos suelen esconderse en regularidades humildes.", apprentice: "Si la diferencia no cambia, la ruta de lectura tampoco debería cambiar.", hints: ["La secuencia avanza con incrementos constantes.", "Del 7 al 14 y al 21 se repite el mismo salto.", "Suma siete otra vez: la siguiente página es 28."] },
    pb03: { prompt: "Las actas del consejo mezclan tecnicismos reales con términos inventados para bloquear auditorías. Debes detectar la palabra espuria y restaurar un lenguaje jurídicamente verificable.", goal: "Señalar el término inexistente dentro de la lista administrativa.", steps: ["Revisa qué palabras pertenecen a trámites públicos reales.", "Descarta la opción que suene técnica pero no tenga uso normativo.", "Pulsa el término que solo sirve para crear niebla legal."], win: "Eliminar la palabra falsa limpia el expediente y refuerza la trazabilidad de pagos y decisiones.", mentor: "Un documento corrupto se delata antes en su vocabulario que en su firma.", apprentice: "Voy a tratar cada palabra como una pieza legal: si no encaja en el sistema, sobra.", hints: ["Licitación, partida y consignación sí tienen uso administrativo documentado.", "La opción intrusa imita tono burocrático pero no existe como figura jurídica.", "La palabra falsa es Reservamiento."] },
    pb04: { prompt: "Las campanas del campanario funcionaban como canal de señalización encubierto. Si el patrón horario se invierte justo en una franja concreta, no estás ante avería sino ante intervención deliberada.", goal: "Determinar qué implica la inversión de repiques en una hora par.", steps: ["Recuerda qué grupo de campanas corresponde al horario normal.", "Compara el patrón esperado con el observado a las 14:00.", "Elige la interpretación compatible con una alteración intencional."], win: "La lectura correcta acredita manipulación humana del sistema de señal, no fallo natural.", mentor: "Cuando un código se invierte de forma coherente, alguien está hablando a través de la máquina.", apprentice: "Si la inversión respeta una regla, entonces no puede ser azar.", hints: ["A las horas pares deberían sonar 1, 3 y 5.", "Si suenan 2 y 4 en una hora par, el esquema está invertido.", "Eso indica inversión deliberada del mecanismo."] },
    pb05: { prompt: "Este puzle opcional cierra la logística de fuga: debes hallar cuándo coinciden tres ritmos ferroviarios para identificar la única ventana de traslado sin supervisión efectiva.", goal: "Calcular el primer instante común de salida de los tres andenes.", steps: ["Toma los intervalos 15, 20 y 25 como ciclos periódicos.", "Busca su mínimo común múltiplo para hallar la primera coincidencia real.", "Introduce ese valor en minutos."], win: "El resultado fija la ventana operativa donde el movimiento encubierto resultaba viable.", mentor: "La sincronía criminal casi siempre vive en el mínimo común múltiplo.", apprentice: "No necesito adivinar horarios: necesito el primer punto donde todos coinciden.", hints: ["No sumes intervalos: busca múltiplos compartidos.", "15 y 20 coinciden en 60, pero falta comprobar 25.", "El primer múltiplo común de 15, 20 y 25 es 300."] },
    pb06: { prompt: "El segundo cilindro ofrece una cronología inmune a testimonios. Debes traducir su marca inicial y el tiempo de ejecución para fijar la hora de cierre del sabotaje.", goal: "Calcular la hora exacta de finalización de la intervención mecánica.", steps: ["Parte del inicio indicado por la posición del cilindro.", "Suma el tiempo operativo sin redondear por intuición.", "Selecciona la hora que coincide exactamente con 45 minutos de trabajo."], win: "La hora elegida ancla técnicamente la acusación y neutraliza objeciones sobre márgenes temporales.", mentor: "Una cronología precisa vale más que diez testigos inseguros.", apprentice: "Si el cilindro marca el inicio, el final cae por aritmética pura.", hints: ["La posición 8 equivale a las 08:00.", "Debes añadir 45 minutos exactos, no media hora ni una hora.", "El sabotaje termina a las 08:45."] }
  };

  var references = {};
  var PUZZLE_DIALOGUES = {
    p01: [{ speaker: "Inés Galván", text: "Calor y luz como evidencia simultánea. No lo habría imaginado de otro modo." }, { speaker: "Profesor Montes", text: "El primer puzle de Bercial ya muestra su método: nunca una sola prueba cuando puedes obtener dos." }],
    p02: [{ speaker: "Inés Galván", text: "Dos triángulos superpuestos. El patio no era un desorden, era una lección de geometría coordinada." }, { speaker: "Profesor Montes", text: "Y ahora sabemos que el sabotaje requirió al menos dos personas actuando en sincronía." }],
    p03: [{ speaker: "Inés Galván", text: "El alcalde usó exactamente esa misma trampa. Frases rotundas sin evidencia detrás." }, { speaker: "Profesor Montes", text: "Distinguir afirmación de prueba será nuestra herramienta más valiosa en lo que resta del caso." }],
    p04: [{ speaker: "Inés Galván", text: "Salir del marco... Eso es exactamente lo que tendremos que hacer con el plano oficial de la torre." }, { speaker: "Profesor Montes", text: "Bercial lo dejó claro desde el primer enigma: la respuesta siempre está fuera de donde nos obligan a mirar." }],
    p05: [{ speaker: "Inés Galván", text: "Una moneda que pertenece a varias cuentas a la vez. Como ciertos consejeros que aparecen en demasiados contratos." }, { speaker: "Profesor Montes", text: "La red contable empieza a tomar forma. Avancemos al taller." }],
    p06: [{ speaker: "Inés Galván", text: "La doble inversión funciona con testimonios también. Dos testigos contradictorios pueden, juntos, apuntar a la misma verdad." }, { speaker: "Profesor Montes", text: "Método antes que carisma, Inés. Siempre." }],
    p07: [{ speaker: "Inés Galván", text: "¿Un enunciado así en un libro de investigación serio?" }, { speaker: "Profesor Montes", text: "El más útil de todos. El verdadero peligro en un caso es aceptar premisas rotas por simple cansancio mental." }],
    p08: [{ speaker: "Inés Galván", text: "El reloj atrasado convierte salidas ilegales en horarios perfectamente documentados. Un truco elegante." }, { speaker: "Profesor Montes", text: "Valdeluna empieza a dibujarse como un punto crucial en este mapa, Inés. Más crucial de lo que parece." }],
    p09: [{ speaker: "Inés Galván", text: "Tres testigos contradictorios mirando el mismo hecho desde ángulos distintos. No hay más fuentes, solo más reflejos." }, { speaker: "Profesor Montes", text: "Entremos en las actas. El patrón financiero espera." }],
    p10: [{ speaker: "Inés Galván", text: "Una mesa de consejo ordenada para evitar ciertas conversaciones. Qué detalle tan revelador." }, { speaker: "Profesor Montes", text: "Los silencios también se sientan en lugares concretos, Inés." }],
    p11: [{ speaker: "Inés Galván", text: "Bercial usó una moneda falsa para codificar cómo aislar al culpable. Es casi admirable." }, { speaker: "Profesor Montes", text: "Dividir primero, apretar después. Ese será nuestro método también." }],
    p12: [{ speaker: "Inés Galván", text: "El consejo movía las horas hacia atrás para justificar decisiones tomadas de antemano." }, { speaker: "Profesor Montes", text: "La cronología es sagrada en un proceso. Sin ella el pasado puede reescribirse indefinidamente." }],
    p13: [{ speaker: "Inés Galván", text: "La paridad rota del tablero refleja exactamente lo que ocurrió en el campanario: retiraron lo que hacía visible el recorrido." }, { speaker: "Profesor Montes", text: "Y lo ocultaron dejando la superficie casi perfecta. Casi." }],
    p14: [{ speaker: "Inés Galván", text: "Cuarenta y cinco minutos medidos con velas irregulares. El sabotaje requirió una precisión casi quirúrgica." }, { speaker: "Profesor Montes", text: "Premeditación total. Ningún improvisador mide tiempos así en la oscuridad." }],
    p15: [{ speaker: "Inés Galván", text: "El cuadrado con hueco central, como la coartada de Velasco: un marco sólido alrededor de un vacío deliberado." }, { speaker: "Profesor Montes", text: "Ya tenemos el esquema. Ahora falta encontrar quién entró por ese hueco." }],
    p16: [{ speaker: "Inés Galván", text: "Raúl. Estaba ahí desde la primera palabra. Solo había que dejar de mirar el final de cada frase." }, { speaker: "Profesor Montes", text: "Los datos más importantes siempre aparecen antes de que el lenguaje empiece a adornarse. Recuérdalo." }],
    p17: [{ speaker: "Inés Galván", text: "Primero el río, luego el puente. La lógica del mapa de fuga era la misma que la de cualquier investigación honesta." }, { speaker: "Profesor Montes", text: "Valdeluna ya no es una hipótesis, Inés. Es un destino probado." }],
    p18: [{ speaker: "Inés Galván", text: "Las copas marcaban el punto exacto donde la rutina oficial dejó de ser rutina." }, { speaker: "Profesor Montes", text: "Y solo Salcedo y su ayudante conocían ese código. El círculo se estrecha considerablemente." }],
    p19: [{ speaker: "Inés Galván", text: "Ciento ochenta segundos. La ventana fue brevísima pero suficiente para alguien que llevaba meses preparándola." }, { speaker: "Profesor Montes", text: "Sincronización perfecta entre faros, niebla y movimiento. Esto no fue un crimen de oportunidad." }],
    p20: [{ speaker: "Inés Galván", text: "Once superposiciones. Y la oncena coincidió exactamente con la salida del convoy hacia Valdeluna." }, { speaker: "Profesor Montes", text: "Todo encaja en el tiempo. Solo falta depurar el lenguaje contable que lo oculta aún." }],
    p21: [{ speaker: "Inés Galván", text: "Sin la Nube en el inventario los números vuelven a tener peso real. Hierro, madera, latón." }, { speaker: "Profesor Montes", text: "La poesía en un libro de cargas siempre es una coartada. Nunca lo olvides, Inés." }],
    p22: [{ speaker: "Inés Galván", text: "La caja MIXTO destapó todo. Una sola muestra bien elegida vale más que cien auditorías." }, { speaker: "Profesor Montes", text: "La elección correcta del punto de entrada derrumba toda la estructura del engaño." }],
    p23: [{ speaker: "Inés Galván", text: "Dos grados en ocho minutos. El margen de la manipulación no fue un error técnico: fue una firma." }, { speaker: "Profesor Montes", text: "Y ahora tenemos esa firma. El último puzle nos espera, Inés." }],
    p24: [{ speaker: "Inés Galván", text: "Valdeluna. Todo conducía ahí: la ruta, el dinero, el escondite, Bercial." }, { speaker: "Profesor Montes", text: "El reloj ya no oculta nada. Hemos terminado lo que Bercial comenzó. Ahora toca la acusación." }, { speaker: "Narrador", text: "Bajo la esfera restaurada, el profesor inclina el sombrero. No fue un milagro. Fue una deducción paciente, pieza por pieza." }],
    pb01: [{ speaker: "Inés Galván", text: "El mismo consorcio en dos ciudades distintas. Esto no es un modus operandi, es un negocio." }, { speaker: "Profesor Montes", text: "Y los negocios dejan contabilidad, Inés. Eso es lo que necesitamos encontrar." }],
    pb02: [{ speaker: "Inés Galván", text: "Múltiplos de siete. Bercial codificó sus pruebas en la estructura más simple posible." }, { speaker: "Profesor Montes", text: "Sencillo para quien sabe, impenetrable para quien no. Así es como se esconden verdades en campo abierto." }],
    pb03: [{ speaker: "Inés Galván", text: "Una palabra inventada en un documento oficial. Alguien quería que las auditorías fracasaran antes de empezar." }, { speaker: "Profesor Montes", text: "Bien detectado, Inés. El lenguaje corrupto es la primera línea de defensa de cualquier fraude." }],
    pb04: [{ speaker: "Inés Galván", text: "Las campanas como sistema de alarma. Bercial preparó varios niveles de señales por si alguno fallaba." }, { speaker: "Profesor Montes", text: "Un hombre muy metódico. Casi tanto como nosotros." }],
    pb05: [{ speaker: "Inés Galván", text: "Trescientos minutos. Bercial esperó exactamente ese momento de máxima distracción para actuar." }, { speaker: "Profesor Montes", text: "O para ser trasladado. Esa ventana temporal es ahora una coordenada precisa en nuestra reconstrucción." }],
    pb06: [{ speaker: "Inés Galván", text: "El segundo cilindro es una prueba limpia e inalterada. Bercial lo escondió sabiendo que sería la más difícil de refutar." }, { speaker: "Profesor Montes", text: "Precaución de maestro. Cuando lleguemos al juicio, este cilindro será la última palabra." }]
  };

  var references = {};
  var runtime = {
    drafts: {},
    feedback: null,
    saveTimer: null,
    pendingDialogue: null,
    typewriterTimer: null,
    typewriterText: "",
    typewriterKey: "",
    typewriterIndex: 0,
    typewriterDone: false,
    chapterTransition: null,
    mapTravelTarget: null,
    victoryPlayed: false,
    audio: { ctx: null, mode: "silence", seqTimer: null, noteIndex: 0, voiceEnabled: false }
  };
  var state = loadState();

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    references.chapterBadge = document.getElementById("chapterBadge");
    references.progressBadge = document.getElementById("progressBadge");
    references.scoreBadge = document.getElementById("scoreBadge");
    references.hintCoinBadge = document.getElementById("hintCoinBadge");
    references.progressFill = document.getElementById("progressFill");
    references.progressHat = document.getElementById("progressHat");
    references.viewNav = document.getElementById("viewNav");
    references.storyPanel = document.getElementById("storyPanel");
    references.puzzlePanel = document.getElementById("puzzlePanel");
    references.notebookPanel = document.getElementById("notebookPanel");
    references.mapPanel = document.getElementById("mapPanel");
    references.mapGrid = document.getElementById("mapGrid");
    references.dialogueOverlay = document.getElementById("dialogueOverlay");
    references.chapterTabs = document.getElementById("chapterTabs");
    references.sceneCard = document.getElementById("sceneCard");
    references.puzzleMeta = document.getElementById("puzzleMeta");
    references.puzzleList = document.getElementById("puzzleList");
    references.puzzleStage = document.getElementById("puzzleStage");
    references.locationDeck = document.getElementById("locationDeck");
    references.clueList = document.getElementById("clueList");
    references.finalCard = document.getElementById("finalCard");
    references.notesInput = document.getElementById("notesInput");
    references.notesStatus = document.getElementById("notesStatus");
    references.clearNotesButton = document.getElementById("clearNotesButton");
    references.hintCoinLedger = document.getElementById("hintCoinLedger");
    references.diaryList = document.getElementById("diaryList");
    references.collectibleGrid = document.getElementById("collectibleGrid");
    references.dialoguePortrait = document.getElementById("dialoguePortrait");
    references.puzzleAnnounce = document.getElementById("puzzleAnnounce");
    references.chapterTransition = document.getElementById("chapterTransition");
    references.fxOverlay = document.getElementById("fxOverlay");
    document.getElementById("resetButton").addEventListener("click", resetProgress);
    document.getElementById("dialogueNext").addEventListener("click", advanceDialogue);
    references.dialogueOverlay.addEventListener("click", function (event) {
      if (event.target && event.target.id === "dialogueNext") {
        return;
      }
      skipTypewriter();
    });
    document.getElementById("musicMystery").addEventListener("click", function () { setMusicMode("mystery"); });
    document.getElementById("musicTension").addEventListener("click", function () { setMusicMode("tension"); });
    document.getElementById("musicSilence").addEventListener("click", function () { setMusicMode("silence"); });
    document.getElementById("voiceToggle").addEventListener("click", toggleVoice);
    references.notesInput.addEventListener("input", persistNotes);
    references.clearNotesButton.addEventListener("click", clearNotes);
    normalizeSelection();
    render();
  }

  function option(id, label, visual, caption) {
    return { id: id, label: label, visual: visual, caption: caption };
  }

  function choicePuzzle(chapter, id, title, picarats, intro, instruction, options, answer, success) {
    return {
      id: id,
      chapter: chapter,
      title: title,
      picarats: picarats,
      intro: intro,
      instruction: instruction,
      type: "choice",
      options: options,
      answer: answer,
      success: success
    };
  }

  function numberPuzzle(chapter, id, title, picarats, intro, instruction, min, max, answer, success) {
    return {
      id: id,
      chapter: chapter,
      title: title,
      picarats: picarats,
      intro: intro,
      instruction: instruction,
      type: "number",
      min: min,
      max: max,
      answer: answer,
      success: success
    };
  }

  function loadState() {
    try {
      var raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        var parsed = JSON.parse(raw);
        return {
          solved: parsed.solved || {},
          selectedChapter: typeof parsed.selectedChapter === "number" ? parsed.selectedChapter : 0,
          selectedPuzzle: parsed.selectedPuzzle || {},
          clues: parsed.clues || [],
          activePage: parsed.activePage || "puzzle",
          notes: parsed.notes || "",
          foundCoins: parsed.foundCoins || {},
          spentCoins: parsed.spentCoins || {},
          unlockedHints: parsed.unlockedHints || {},
          introDone: typeof parsed.introDone !== "undefined" ? parsed.introDone : (Object.keys(parsed.solved || {}).length > 0),
          activeZoneMap: typeof parsed.activeZoneMap === "number" ? parsed.activeZoneMap : null,
          svgPuzzleAccess: parsed.svgPuzzleAccess || {},
          failCounts: parsed.failCounts || {},
          puzzleSeen: parsed.puzzleSeen || {},
          voiceEnabled: !!parsed.voiceEnabled,
          diaryEntries: parsed.diaryEntries || [],
          collectibles: parsed.collectibles || {},
          locationFinds: parsed.locationFinds || {}
        };
      }
    } catch (error) {
      console.warn("No se pudo cargar la partida", error);
    }
    return {
      solved: {},
      selectedChapter: 0,
      selectedPuzzle: {},
      clues: [],
      activePage: "puzzle",
      notes: "",
      foundCoins: {},
      spentCoins: {},
      unlockedHints: {},
      introDone: false,
      activeZoneMap: null,
      svgPuzzleAccess: {},
      failCounts: {},
      puzzleSeen: {},
      voiceEnabled: false,
      diaryEntries: [],
      collectibles: {},
      locationFinds: {}
    };
  }

  function saveState() {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function resetProgress() {
    window.localStorage.removeItem(STORAGE_KEY);
    runtime = {
      drafts: {}, feedback: null, saveTimer: null, pendingDialogue: null, typewriterTimer: null,
      typewriterText: "", typewriterKey: "", typewriterIndex: 0, typewriterDone: false, chapterTransition: null,
      mapTravelTarget: null, victoryPlayed: false,
      audio: { ctx: null, mode: "silence", seqTimer: null, noteIndex: 0, voiceEnabled: false }
    };
    state = {
      solved: {}, selectedChapter: 0, selectedPuzzle: {}, clues: [], activePage: "puzzle", notes: "",
      foundCoins: {}, spentCoins: {}, unlockedHints: {}, introDone: false, activeZoneMap: null, failCounts: {},
      puzzleSeen: {}, voiceEnabled: false, diaryEntries: [], collectibles: {}, locationFinds: {}, svgPuzzleAccess: {}
    };
    render();
  }

  function addDiaryEntry(author, text, chapterId) {
    var entry = {
      id: "d-" + Date.now() + "-" + Math.random().toString(16).slice(2, 8),
      date: "Otoño de 1912",
      author: author,
      text: text,
      chapterId: chapterId
    };
    state.diaryEntries.unshift(entry);
    if (state.diaryEntries.length > 80) {
      state.diaryEntries = state.diaryEntries.slice(0, 80);
    }
  }

  function collectItem(chapterId, index) {
    var chapterItems = COLLECTIBLES[chapterId] || [];
    var item = chapterItems[index];
    if (!item) {
      return;
    }
    if (state.collectibles[item.id]) {
      return;
    }
    state.collectibles[item.id] = {
      name: item.name,
      copy: item.copy,
      chapterId: chapterId,
      source: item.source
    };
    playSfx("coin");
    addDiaryEntry("Inés Galván", "Objeto registrado: " + item.name + ". " + item.copy, chapterId);
  }

  function basePicarats(puzzleId) {
    return PUZZLES[puzzleId].picarats;
  }

  function currentPicarats(puzzleId) {
    var fails = state.failCounts[puzzleId] || 0;
    return Math.max(basePicarats(puzzleId) - fails * 5, 5);
  }

  function totalPicarats() {
    return Object.keys(state.solved).reduce(function (sum, puzzleId) {
      return state.solved[puzzleId] ? sum + currentPicarats(puzzleId) : sum;
    }, 0);
  }

  function totalHintCoins() {
    return Object.keys(state.foundCoins).length - Object.keys(state.spentCoins).length;
  }

  function discoveredCoinsForChapter(chapterId) {
    return Object.keys(state.foundCoins).filter(function (key) {
      return key.indexOf(chapterId + ":") === 0;
    }).length;
  }

  function solvedCount() {
    return Object.keys(state.solved).filter(function (key) {
      return state.solved[key] && PUZZLES[key] && !PUZZLES[key].bonus;
    }).length;
  }

  function isSolved(puzzleId) {
    return !!state.solved[puzzleId];
  }

  function chapterSolved(chapterIndex) {
    return CHAPTERS[chapterIndex].puzzles.every(isSolved);
  }

  function unlockedChapterCount() {
    var count = 1;
    for (var i = 0; i < CHAPTERS.length - 1; i += 1) {
      if (chapterSolved(i)) {
        count += 1;
      } else {
        break;
      }
    }
    return count;
  }

  function normalizeSelection() {
    if (["puzzle", "story", "notebook", "map"].indexOf(state.activePage) === -1) {
      state.activePage = "puzzle";
    }
    var maxChapter = unlockedChapterCount() - 1;
    if (state.selectedChapter > maxChapter) {
      state.selectedChapter = maxChapter;
    }
    if (state.selectedChapter < 0) {
      state.selectedChapter = 0;
    }

    CHAPTERS.forEach(function (chapter, chapterIndex) {
      var selected = state.selectedPuzzle[chapter.id];
      var available = chapter.puzzles.filter(function (puzzleId, puzzleIndex) {
        return puzzleIndex === 0 || isSolved(chapter.puzzles[puzzleIndex - 1]);
      });
      var bonusAvailable = chapter.bonusPuzzles || [];
      if (!selected || (available.indexOf(selected) === -1 && bonusAvailable.indexOf(selected) === -1)) {
        var unsolved = available.find(function (puzzleId) {
          return !isSolved(puzzleId);
        });
        state.selectedPuzzle[chapter.id] = unsolved || chapter.puzzles[chapter.puzzles.length - 1];
      }
      if (chapterSolved(chapterIndex) && state.clues.indexOf(chapter.id) === -1) {
        state.clues.push(chapter.id);
      }
    });
    saveState();
  }

  function render() {
    normalizeSelection();
    renderHeader();
    renderPageTabs();
    applyPageVisibility();
    renderChapters();
    renderScene();
    renderLocations();
    renderNotes();
    renderHintCoinLedger();
    renderClues();
    renderDiary();
    renderCollectibles();
    renderPuzzleList();
    renderPuzzle();
    renderMap();
    renderFinale();
    renderDialogueOverlay();
  }

  function renderPageTabs() {
    references.viewNav.innerHTML = "";
    var tabs = [
      { key: "puzzle", title: "Puzles", subtitle: "Tablero visual y resolución" },
      { key: "story", title: "Historia", subtitle: "Capítulo, escenas y diálogos" },
      { key: "notebook", title: "Cuaderno", subtitle: "Claves, lugares y veredicto" },
      { key: "map", title: "Mapa", subtitle: "Todos los puzles del caso" }
    ];
    tabs.forEach(function (tab) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "view-tab" + (state.activePage === tab.key ? " active" : "");
      button.innerHTML = "<strong>" + tab.title + "</strong><small>" + tab.subtitle + "</small>";
      button.addEventListener("click", function () {
        state.activePage = tab.key;
        saveState();
        render();
      });
      references.viewNav.appendChild(button);
    });
  }

  function applyPageVisibility() {
    var storyActive = state.activePage === "story";
    var puzzleActive = state.activePage === "puzzle";
    var notebookActive = state.activePage === "notebook";
    var mapActive = state.activePage === "map";
    references.storyPanel.className = "panel story-panel" + (storyActive ? " active" : "");
    references.puzzlePanel.className = "panel puzzle-panel" + (puzzleActive ? " active" : "");
    references.notebookPanel.className = "panel side-panel" + (notebookActive ? " active" : "");
    references.mapPanel.className = "panel map-panel" + (mapActive ? " active" : "");
  }

  function ensureAudioContext() {
    if (runtime.audio.ctx) {
      return runtime.audio.ctx;
    }
    var Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) {
      return null;
    }
    runtime.audio.ctx = new Ctx();
    return runtime.audio.ctx;
  }

  function blip(freq, duration, type, gain) {
    var ctx = ensureAudioContext();
    if (!ctx) { return; }
    var osc = ctx.createOscillator();
    var amp = ctx.createGain();
    osc.type = type || "sine";
    osc.frequency.value = freq;
    amp.gain.value = gain || 0.03;
    osc.connect(amp);
    amp.connect(ctx.destination);
    osc.start();
    amp.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
    osc.stop(ctx.currentTime + duration + 0.01);
  }

  function blipChord(freq, duration, type, gain) {
    blip(freq, duration, type, gain);
    var ctx = ensureAudioContext();
    if (!ctx) { return; }
    var osc2 = ctx.createOscillator();
    var amp2 = ctx.createGain();
    osc2.type = "triangle";
    osc2.frequency.value = freq * 1.5;
    amp2.gain.value = (gain || 0.03) * 0.38;
    osc2.connect(amp2);
    amp2.connect(ctx.destination);
    osc2.start();
    amp2.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
    osc2.stop(ctx.currentTime + duration + 0.01);
  }

  function playSfx(kind) {
    if (kind === "type") { blip(680 + Math.random() * 80, 0.028, "square", 0.009); return; }
    if (kind === "coin") {
      blipChord(880, 0.09, "triangle", 0.038);
      setTimeout(function () { blipChord(1320, 0.07, "triangle", 0.028); }, 60);
      setTimeout(function () { blip(1760, 0.05, "triangle", 0.018); }, 130);
      return;
    }
    if (kind === "success") {
      blipChord(660, 0.09, "triangle", 0.038);
      setTimeout(function () { blipChord(880, 0.11, "triangle", 0.032); }, 75);
      setTimeout(function () { blipChord(1100, 0.14, "triangle", 0.026); }, 165);
      return;
    }
    if (kind === "fail") {
      blip(220, 0.08, "sawtooth", 0.03);
      setTimeout(function () { blip(185, 0.16, "sawtooth", 0.025); }, 70);
      return;
    }
    if (kind === "chapter") {
      blipChord(440, 0.09, "triangle", 0.038);
      setTimeout(function () { blipChord(660, 0.11, "triangle", 0.032); }, 80);
      setTimeout(function () { blipChord(880, 0.15, "triangle", 0.026); }, 180);
      return;
    }
    if (kind === "victory") {
      var notes = [523, 659, 784, 1047];
      notes.forEach(function (f, i) {
        setTimeout(function () { blipChord(f, 0.18, "triangle", 0.038 - i * 0.005); }, i * 110);
      });
    }
  }

  function stopMusic() {
    if (runtime.audio.seqTimer) {
      clearInterval(runtime.audio.seqTimer);
      runtime.audio.seqTimer = null;
    }
    runtime.audio.mode = "silence";
  }

  function setMusicMode(mode) {
    stopMusic();
    runtime.audio.mode = mode;
    if (mode === "silence") { return; }
    var ctx = ensureAudioContext();
    if (!ctx) { return; }
    // Mystery: Dorian modal melody, 70 BPM (857ms) — two-voice texture
    // Tension: fast chromatic arpeggio, 120 BPM (125ms)
    var mystery = [262, 0, 294, 311, 0, 349, 311, 0, 294, 262, 0, 233, 262, 0, 294, 0];
    var mystH   = [392, 0, 440, 466, 0, 523, 466, 0, 440, 392, 0, 349, 392, 0, 440, 0];
    var tension = [220, 277, 330, 415, 330, 277, 220, 185, 220, 277, 370, 440, 370, 277, 220, 185];
    var seq  = mode === "tension" ? tension : mystery;
    var harm = mode === "tension" ? null : mystH;
    var ms   = mode === "tension" ? 125 : 214;
    runtime.audio.noteIndex = 0;
    runtime.audio.seqTimer = setInterval(function () {
      var i = runtime.audio.noteIndex % seq.length;
      var freq = seq[i];
      if (freq > 0) {
        blip(freq, mode === "tension" ? 0.11 : 0.24, mode === "tension" ? "square" : "triangle", mode === "tension" ? 0.018 : 0.016);
        if (harm && harm[i] > 0) {
          blip(harm[i], 0.22, "triangle", 0.010);
        }
      }
      runtime.audio.noteIndex += 1;
    }, ms);
  }

  function toggleVoice() {
    state.voiceEnabled = !state.voiceEnabled;
    saveState();
    renderHeader();
    if (!state.voiceEnabled && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
  }

  function chooseVoice(speaker) {
    if (!window.speechSynthesis) {
      return null;
    }
    var voices = window.speechSynthesis.getVoices() || [];
    if (!voices.length) {
      return null;
    }
    var sorted = voices.slice().sort(function (a, b) {
      var an = a.name.toLowerCase();
      var bn = b.name.toLowerCase();
      return an.localeCompare(bn);
    });
    if (speaker.indexOf("Profesor") >= 0) {
      return sorted[0] || null;
    }
    if (speaker.indexOf("Inés") >= 0 || speaker.indexOf("Ines") >= 0) {
      return sorted[sorted.length - 1] || null;
    }
    return sorted[Math.floor(sorted.length / 2)] || null;
  }

  function speakLine(speaker, text) {
    if (!state.voiceEnabled || !window.speechSynthesis) {
      return;
    }
    window.speechSynthesis.cancel();
    var utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "es-ES";
    utterance.rate = 0.95;
    utterance.pitch = speaker.indexOf("Profesor") >= 0 ? 0.75 : (speaker.indexOf("Inés") >= 0 || speaker.indexOf("Ines") >= 0 ? 1.18 : 0.95);
    var voice = chooseVoice(speaker);
    if (voice) {
      utterance.voice = voice;
    }
    window.speechSynthesis.speak(utterance);
  }

  function renderHeader() {
    var chapter = CHAPTERS[state.selectedChapter];
    references.chapterBadge.textContent = chapter.badge + " · " + chapter.title;
    references.progressBadge.textContent = solvedCount() + " / 24";
    references.scoreBadge.textContent = totalPicarats();
    references.hintCoinBadge.textContent = totalHintCoins();
    if (references.progressFill && references.progressHat) {
      var ratio = Math.max(0, Math.min(1, solvedCount() / 24));
      references.progressFill.style.width = Math.round(ratio * 100) + "%";
      references.progressHat.style.left = Math.round(ratio * 100) + "%";
    }
    var voiceButton = document.getElementById("voiceToggle");
    if (voiceButton) {
      voiceButton.textContent = state.voiceEnabled ? "🗣️ Voz ON" : "🗣️ Voz OFF";
    }
  }

  function renderNotes() {
    references.notesInput.value = state.notes || "";
  }

  function persistNotes() {
    state.notes = references.notesInput.value;
    saveState();
    showNotesStatus("Guardado automático");
  }

  function clearNotes() {
    state.notes = "";
    references.notesInput.value = "";
    saveState();
    showNotesStatus("Cuaderno limpio");
  }

  function showNotesStatus(text) {
    references.notesStatus.textContent = text;
    if (runtime.saveTimer) {
      clearTimeout(runtime.saveTimer);
    }
    runtime.saveTimer = setTimeout(function () {
      references.notesStatus.textContent = "";
    }, SAVE_MESSAGE_MS);
  }

  function renderHintCoinLedger() {
    references.hintCoinLedger.innerHTML = "";
    var entries = Object.keys(state.foundCoins);
    if (!entries.length) {
      references.hintCoinLedger.innerHTML = "<article class=\"clue-card\"><strong>Aún no has hallado monedas</strong><p class=\"clue-copy\">Examina los lugares del capítulo actual para encontrar monedas de pista. Después podrás gastarlas en el puzle activo para desbloquear ayudas, igual que en una aventura de profesor y aprendiz.</p></article>";
      return;
    }
    entries.forEach(function (key) {
      var card = document.createElement("article");
      card.className = "clue-card";
      card.innerHTML = "<small>Moneda de pista</small><strong>" + key.replace(":", " · rincón ") + "</strong><p class=\"clue-copy\">" + state.foundCoins[key] + "</p>";
      references.hintCoinLedger.appendChild(card);
    });
  }

  function renderChapters() {
    references.chapterTabs.innerHTML = "";
    var unlocked = unlockedChapterCount();
    CHAPTERS.forEach(function (chapter, index) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "chapter-tab" + (index === state.selectedChapter ? " active" : "") + (index >= unlocked ? " locked" : "");
      button.innerHTML = "<strong>" + chapter.badge + "</strong><br><span>" + chapter.title + "</span>";
      if (index < unlocked) {
        button.addEventListener("click", function () {
          state.selectedChapter = index;
          render();
        });
      } else {
        button.disabled = true;
      }
      references.chapterTabs.appendChild(button);
    });
  }

  function renderScene() {
    var chapter = CHAPTERS[state.selectedChapter];
    var complete = chapterSolved(state.selectedChapter);
    var foundCoins = discoveredCoinsForChapter(chapter.id);
    var art = CHAPTER_ART[chapter.id];
    var html = "<p class=\"eyebrow\">" + chapter.subtitle + "</p>";
    html += "<h2>" + chapter.title + "</h2>";
    html += "<p class=\"scene-body\">" + chapter.subtitle + "</p>";
    if (art) {
      html += "<figure class=\"scene-illustration\"><img src=\"" + art + "\" alt=\"Ilustracion de " + chapter.title + "\"></figure>";
    }
    html += "<div class=\"speech\"><strong>Contexto del capítulo</strong><span>" + chapter.backdrop + "</span></div>";
    html += "<div class=\"scene-dialogue\">";
    chapter.dialogue.forEach(function (line) {
      html += "<div class=\"speech\"><strong>" + line.speaker + "</strong><span>" + line.text + "</span></div>";
    });
    html += "</div>";
    html += "<div class=\"story-objective\"><strong>Objetivo actual</strong><p class=\"scene-body\">" + chapter.objective + "</p></div>";
    html += "<div class=\"speech\"><strong>Conexión narrativa</strong><span>" + chapter.gapFix + "</span></div>";
    html += "<div class=\"feedback-card\"><p class=\"eyebrow\">Exploración</p><h3>Monedas de pista del capítulo</h3><p class=\"feedback-copy\">Has encontrado " + foundCoins + " de " + chapter.coins.length + " monedas de pista. Están ocultas en el mapa SVG de la zona junto a los accesos a puzles.</p></div>";
    if (complete) {
      html += "<div class=\"feedback-card\"><p class=\"eyebrow\">Capítulo resuelto</p><h3>" + chapter.clue.title + "</h3><p class=\"feedback-copy\">" + chapter.clue.copy + "</p></div>";
    }
    references.sceneCard.innerHTML = html;
  }

  function renderLocations() {
    var chapter = CHAPTERS[state.selectedChapter];
    references.locationDeck.innerHTML = "";
    chapter.locations.forEach(function (location, index) {
      var card = document.createElement("article");
      card.className = "location-card";
      card.innerHTML = "<small>" + location.tag + "</small><strong>" + location.name + "</strong><p class=\"location-copy\">" + location.copy + "</p>";

      var info = document.createElement("p");
      info.className = "location-copy";
      info.textContent = "Acceso y monedas ocultas disponibles en el mapa SVG de la zona.";
      card.appendChild(info);

      var mapBtn = document.createElement("button");
      mapBtn.type = "button";
      mapBtn.className = "tiny-button";
      mapBtn.textContent = "Abrir mapa de zona";
      mapBtn.addEventListener("click", function () {
        state.activePage = "map";
        state.activeZoneMap = state.selectedChapter;
        saveState();
        render();
      });
      card.appendChild(mapBtn);
      references.locationDeck.appendChild(card);
    });
  }

  function renderDiary() {
    if (!references.diaryList) {
      return;
    }
    references.diaryList.innerHTML = "";
    if (!state.diaryEntries || !state.diaryEntries.length) {
      references.diaryList.innerHTML = "<article class=\"clue-card\"><strong>Diario en blanco</strong><p class=\"clue-copy\">Cada resolución, hallazgo y transición importante añadirá aquí una entrada fechada por Inés.</p></article>";
      return;
    }
    state.diaryEntries.forEach(function (entry) {
      var card = document.createElement("article");
      card.className = "clue-card";
      card.innerHTML = "<small>" + entry.date + " · " + entry.author + "</small><strong>" + (entry.chapterId || "Registro") + "</strong><p class=\"clue-copy\">" + entry.text + "</p>";
      references.diaryList.appendChild(card);
    });
  }

  function renderCollectibles() {
    if (!references.collectibleGrid) {
      return;
    }
    references.collectibleGrid.innerHTML = "";
    var items = Object.keys(state.collectibles || {}).map(function (key) { return state.collectibles[key]; });
    if (!items.length) {
      references.collectibleGrid.innerHTML = "<article class=\"location-card\"><small>Colección</small><strong>Sin objetos todavía</strong><p class=\"location-copy\">Explora localizaciones y resuelve puzles para desbloquear piezas del caso.</p></article>";
      return;
    }
    items.forEach(function (item) {
      var card = document.createElement("article");
      card.className = "location-card";
      card.innerHTML = "<small>" + item.chapterId + " · " + item.source + "</small><strong>" + item.name + "</strong><p class=\"location-copy\">" + item.copy + "</p>";
      references.collectibleGrid.appendChild(card);
    });
  }

  function renderClues() {
    references.clueList.innerHTML = "";
    if (!state.clues.length) {
      references.clueList.innerHTML = "<article class=\"clue-card\"><strong>Cuaderno vacío</strong><p class=\"clue-copy\">Inés todavía no ha cerrado ningún bloque. Las conclusiones sólidas aparecerán aquí al finalizar cada capítulo.</p></article>";
      return;
    }
    state.clues.forEach(function (chapterId) {
      var chapter = CHAPTERS.find(function (item) { return item.id === chapterId; });
      var card = document.createElement("article");
      card.className = "clue-card";
      card.innerHTML = "<small>" + chapter.badge + "</small><strong>" + chapter.clue.title + "</strong><p class=\"clue-copy\">" + chapter.clue.copy + "</p>";
      references.clueList.appendChild(card);
    });
  }

  function renderPuzzleList() {
    var chapter = CHAPTERS[state.selectedChapter];
    references.puzzleList.innerHTML = "";

    var mapOnlyNotice = document.createElement("article");
    mapOnlyNotice.className = "feedback-card";
    mapOnlyNotice.innerHTML = "<p class=\"eyebrow\">Acceso restringido</p><h3>Puzles desde mapa SVG</h3><p class=\"feedback-copy\">Selecciona el siguiente puzle exclusivamente desde el mapa SVG de la zona.</p>";
    references.puzzleList.appendChild(mapOnlyNotice);

    var mapBtn = document.createElement("button");
    mapBtn.type = "button";
    mapBtn.className = "tiny-button";
    mapBtn.textContent = "Ir al mapa SVG";
    mapBtn.addEventListener("click", function () {
      state.activePage = "map";
      state.activeZoneMap = state.selectedChapter;
      saveState();
      render();
    });
    references.puzzleList.appendChild(mapBtn);

    chapter.puzzles.forEach(function (puzzleId, index) {
      var unlocked = index === 0 || isSolved(chapter.puzzles[index - 1]);
      var puzzle = PUZZLES[puzzleId];
      var button = document.createElement("button");
      button.type = "button";
      button.className = "puzzle-chip" + (state.selectedPuzzle[chapter.id] === puzzleId ? " active" : "") + (!unlocked ? " locked" : "");
      var label = puzzle.title + " · " + currentPicarats(puzzleId) + " picarats";
      if (isSolved(puzzleId)) {
        label += " · resuelto";
      }
      button.textContent = label;
      button.disabled = true;
      references.puzzleList.appendChild(button);
    });
    if (chapter.bonusPuzzles && chapter.bonusPuzzles.length) {
      var bonusHeader = document.createElement("div");
      bonusHeader.className = "puzzle-bonus-header";
      bonusHeader.textContent = "★ Puzles opcionales";
      references.puzzleList.appendChild(bonusHeader);
      chapter.bonusPuzzles.forEach(function (puzzleId) {
        var puzzle = PUZZLES[puzzleId];
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "puzzle-chip bonus-chip" + (state.selectedPuzzle[chapter.id] === puzzleId ? " active" : "");
        var lbl = "★ " + puzzle.title + " · +" + (puzzle.bonusReward || 2) + " monedas";
        if (isSolved(puzzleId)) { lbl += " · resuelto"; }
        btn.textContent = lbl;
        btn.disabled = true;
        references.puzzleList.appendChild(btn);
      });
    }
  }

  function renderPuzzle() {
    var chapter = CHAPTERS[state.selectedChapter];
    var puzzle = PUZZLES[state.selectedPuzzle[chapter.id]];
    if (!puzzle) {
      references.puzzleMeta.textContent = chapter.badge + " · Sin puzle seleccionado";
      references.puzzleStage.className = "puzzle-stage";
      references.puzzleStage.innerHTML = "<div class=\"feedback-card\"><p class=\"eyebrow\">Sin selección</p><h3>Abre un puzle desde el mapa SVG</h3><p class=\"feedback-copy\">Ve al mapa, entra en la zona del capítulo y selecciona un nodo de puzle en el SVG.</p></div>";
      return;
    }
    if (state.svgPuzzleAccess[chapter.id] !== puzzle.id) {
      references.puzzleMeta.textContent = chapter.badge + " · Acceso por mapa";
      references.puzzleStage.className = "puzzle-stage";
      references.puzzleStage.innerHTML = "<div class=\"feedback-card\"><p class=\"eyebrow\">Acceso restringido</p><h3>Este puzle se abre desde el mapa SVG</h3><p class=\"feedback-copy\">Para continuar, ve al mapa de la zona y pulsa el nodo del puzle dentro del SVG.</p></div>";
      return;
    }
    if (!state.puzzleSeen[puzzle.id] && !isSolved(puzzle.id)) {
      showPuzzleAnnouncement(puzzle);
      return;
    }
    var context = PUZZLE_CONTEXT[puzzle.id];
    var guide = buildGuideForPuzzle(puzzle);
    var sense = buildSenseCheck(puzzle);
    references.puzzleMeta.textContent = chapter.badge + " · " + puzzle.title;
    references.puzzleStage.className = "puzzle-stage" + (isSolved(puzzle.id) ? " solved" : "");
    references.puzzleStage.innerHTML = "";

    var header = document.createElement("div");
    header.className = "puzzle-header";
    var eyebrow = puzzle.bonus ? "★ Puzle opcional · " + (puzzle.bonusReward || 2) + " monedas de pista" : "Puzle visual";
    header.innerHTML = "<div><p class=\"eyebrow\">" + eyebrow + "</p><h2>" + puzzle.title + "</h2><p class=\"puzzle-intro\">" + puzzle.intro + "</p></div><div class=\"picarats\">" + currentPicarats(puzzle.id) + " picarats</div>";
    references.puzzleStage.appendChild(header);

    var instruction = document.createElement("p");
    instruction.className = "puzzle-instruction";
    instruction.textContent = guide && guide.prompt ? puzzle.instruction + " " + guide.prompt : puzzle.instruction;
    references.puzzleStage.appendChild(instruction);

    if (sense) {
      var senseCard = document.createElement("div");
      senseCard.className = "feedback-card";
      senseCard.innerHTML = "<p class=\"eyebrow\">Criterio de resolución</p><h3>Cómo se decide este puzle</h3><p class=\"feedback-copy\"><strong>Regla:</strong> " + sense.rule + "</p><p class=\"feedback-copy\"><strong>Evita esta trampa:</strong> " + sense.trap + "</p>";
      references.puzzleStage.appendChild(senseCard);
    }

    if (guide) {
      var guideCard = document.createElement("div");
      guideCard.className = "feedback-card";
      guideCard.innerHTML = "<p class=\"eyebrow\">Qué tienes que hacer</p><h3>Objetivo directo</h3><p class=\"feedback-copy\">" + guide.goal + "</p><h3>Cómo jugar paso a paso</h3><ol class=\"guide-list\">" + guide.steps.map(function (step) { return "<li>" + step + "</li>"; }).join("") + "</ol><h3>Cuándo cuenta como resuelto</h3><p class=\"feedback-copy\">" + guide.win + "</p><div class=\"context-grid\"><article class=\"context-card\"><h3>Consejo del profesor</h3><p class=\"feedback-copy\">" + guide.mentor + "</p></article><article class=\"context-card\"><h3>Apunte de Inés</h3><p class=\"feedback-copy\">" + guide.apprentice + "</p></article></div>";
      references.puzzleStage.appendChild(guideCard);
    }

    if (context) {
      var contextCard = document.createElement("div");
      contextCard.className = "feedback-card";
      contextCard.innerHTML = "<p class=\"eyebrow\">Contexto del puzle</p>" +
        "<div class=\"puzzle-mural\">" + escapeHtml(context.mural).replace(/\n/g, "<br>") + "</div>" +
        "<div class=\"context-grid\">" +
        "<article class=\"context-card\"><h3>Escena</h3><p class=\"feedback-copy\">" + context.scene + "</p></article>" +
        "<article class=\"context-card\"><h3>Testigo / ambiente</h3><p class=\"feedback-copy\">" + context.witness + "</p></article>" +
        "<article class=\"context-card\"><h3>Qué revela</h3><p class=\"feedback-copy\">" + context.reveals + "</p></article>" +
        "<article class=\"context-card\"><h3>Riesgo narrativo</h3><p class=\"feedback-copy\">" + context.tension + "</p></article>" +
        "<article class=\"context-card\"><h3>Transición</h3><p class=\"feedback-copy\">" + context.bridge + "</p></article>" +
        "</div>";
      references.puzzleStage.appendChild(contextCard);
    }

    renderHintPanel(puzzle, guide);

    var board = document.createElement("div");
    board.className = "puzzle-board";
    references.puzzleStage.appendChild(board);

    if (puzzle.type === "choice") {
      renderChoicePuzzle(board, puzzle);
    } else if (puzzle.type === "number") {
      renderNumberPuzzle(board, puzzle);
    } else if (puzzle.type === "lamp") {
      renderLampPuzzle(board, puzzle);
    } else if (puzzle.type === "cups") {
      renderCupPuzzle(board, puzzle);
    } else if (puzzle.type === "sequence") {
      renderSequencePuzzle(board, puzzle);
    } else if (puzzle.type === "word") {
      renderWordPuzzle(board, puzzle);
    } else if (puzzle.type === "boxes") {
      renderBoxesPuzzle(board, puzzle);
    } else if (puzzle.type === "map") {
      renderMapPuzzle(board, puzzle);
    }

    if (runtime.feedback && runtime.feedback.puzzleId === puzzle.id) {
      references.puzzleStage.appendChild(createFeedbackCard(runtime.feedback.title, runtime.feedback.copy));
    }
  }

  function buildGuideForPuzzle(puzzle) {
    return PUZZLE_GUIDES[puzzle.id] || {
      prompt: puzzle.intro,
      goal: puzzle.instruction,
      steps: ["Lee el problema con calma.", "Interactúa con el tablero.", "Valida cuando creas haber encontrado la solución."],
      win: "El puzle cuenta como resuelto cuando el estado final coincide con la lógica correcta del problema.",
      mentor: "Antes de mover nada, conviene entender la regla del problema.",
      apprentice: "Voy a separar lo importante del adorno.",
      hints: []
    };
  }

  function buildSenseCheck(puzzle) {
    var byType = {
      choice: {
        rule: "Solo una opción cumple todas las condiciones del enunciado al mismo tiempo.",
        trap: "Elegir la opción más vistosa o narrativa en vez de verificar cada restricción."
      },
      number: {
        rule: "La respuesta sale de una relación numérica concreta (proporción, secuencia o m.c.m.), no de aproximación.",
        trap: "Probar números al azar sin fijar antes la operación que manda el problema."
      },
      lamp: {
        rule: "Debes combinar evidencia de estado actual (encendida/apagada) con evidencia térmica (caliente/fría).",
        trap: "Quedarte solo con lo visible y olvidar que el calor conserva información pasada."
      },
      cups: {
        rule: "El movimiento correcto se hace sobre la frontera donde cambia la orientación de las copas.",
        trap: "Voltear extremos por intuición en lugar de localizar el punto de cambio."
      },
      sequence: {
        rule: "El orden válido respeta dependencia lógica: primero lo más rígido, luego lo que depende de ello.",
        trap: "Ordenar por estética del tablero y no por causalidad entre elementos."
      },
      word: {
        rule: "La intrusa es la única palabra que no pertenece al mismo campo semántico/técnico que las demás.",
        trap: "Descartar una palabra por estilo y no por pertenencia real al conjunto."
      },
      boxes: {
        rule: "Con una sola muestra debes elegir la caja que maximiza descarte lógico porque todas las etiquetas mienten.",
        trap: "Abrir una caja 'probable' en vez de la que reduce más escenarios posibles."
      },
      map: {
        rule: "El destino correcto debe concentrar móvil, ruta, ocultación y beneficio, no solo uno de ellos.",
        trap: "Confundir escenario del hecho con destino del beneficio."
      }
    };
    var sense = byType[puzzle.type];
    if (!sense) {
      return null;
    }
    if (puzzle.id === "p07") {
      return {
        rule: "Se resuelve validando premisas físicas: si la premisa es absurda, la cantidad no cambia.",
        trap: "Aceptar una narrativa imposible solo porque suena formal."
      };
    }
    if (puzzle.id === "p20") {
      return {
        rule: "Las superposiciones del reloj entre 00:00 y 12:00 son once, porque no ocurren exactamente una por hora.",
        trap: "Responder 12 por simetría visual sin analizar el desplazamiento real de las agujas."
      };
    }
    return sense;
  }

  function renderHintPanel(puzzle, guide) {
    if (!guide || !guide.hints || !guide.hints.length) {
      return;
    }
    var unlocked = state.unlockedHints[puzzle.id] || 0;
    var panel = document.createElement("div");
    panel.className = "feedback-card";
    var html = "<p class=\"eyebrow\">Pistas estilo Layton</p><h3>Monedas disponibles: " + totalHintCoins() + "</h3><p class=\"feedback-copy\">Puedes gastar una moneda de pista para desbloquear la siguiente ayuda del puzle actual.</p>";
    if (unlocked > 0) {
      html += "<div class=\"hint-stack\">" + guide.hints.slice(0, unlocked).map(function (hint, index) {
        return "<article class=\"context-card\"><h3>Pista " + (index + 1) + "</h3><p class=\"feedback-copy\">" + hint + "</p></article>";
      }).join("") + "</div>";
    }
    panel.innerHTML = html;
    if (unlocked < guide.hints.length) {
      var button = submitButton(function () {
        unlockHint(puzzle.id, guide.hints.length);
      }, "Desbloquear pista");
      button.disabled = totalHintCoins() <= 0;
      panel.appendChild(button);
    }
    references.puzzleStage.appendChild(panel);
  }

  function unlockHint(puzzleId, totalHints) {
    var currentUnlocked = state.unlockedHints[puzzleId] || 0;
    var cost = Math.min(currentUnlocked + 1, 3);
    if (totalHintCoins() < cost) {
      setFeedback(puzzleId, "Sin monedas de pista", "Explora la página Historia y examina más lugares antes de pedir otra pista.");
      render();
      return;
    }
    if (!window.confirm("Desbloquear pista " + (currentUnlocked + 1) + " por " + cost + " monedas de pista?")) {
      return;
    }
    var freeCoins = Object.keys(state.foundCoins).filter(function (key) {
      return !state.spentCoins[key];
    });
    if (freeCoins.length < cost) {
      setFeedback(puzzleId, "Sin monedas de pista", "No queda ninguna moneda libre para gastar.");
      render();
      return;
    }
    freeCoins.slice(0, cost).forEach(function (coinKey) {
      state.spentCoins[coinKey] = true;
    });
    state.unlockedHints[puzzleId] = Math.min(currentUnlocked + 1, totalHints);
    saveState();
    setFeedback(puzzleId, "Pista desbloqueada", "Inés ha añadido una nueva pista al margen del puzle. Coste: " + cost + " monedas.");
    render();
  }

  function registerPuzzleFail(puzzle) {
    state.failCounts[puzzle.id] = (state.failCounts[puzzle.id] || 0) + 1;
    saveState();
    showFx("wrong");
    playSfx("fail");
    if (references.scoreBadge) {
      references.scoreBadge.classList.add("score-drop");
      setTimeout(function () {
        references.scoreBadge.classList.remove("score-drop");
      }, 650);
    }
  }

  function showPuzzleAnnouncement(puzzle) {
    if (!references.puzzleAnnounce) {
      state.puzzleSeen[puzzle.id] = true;
      saveState();
      render();
      return;
    }
    references.puzzleAnnounce.className = "puzzle-announce-overlay visible";
    references.puzzleAnnounce.innerHTML = "<div class=\"puzzle-announce-card\"><p class=\"eyebrow\">Puzle " + formatPuzzleNumber(puzzle.id) + "</p><h2>" + puzzle.title + "</h2><p>" + currentPicarats(puzzle.id) + " picarats</p><p class=\"feedback-copy\">\"Inés, observa la regla con calma. La respuesta siempre obedece al método.\"</p></div>";
    clearTimeout(runtime.announceTimer);
    runtime.announceTimer = setTimeout(function () {
      state.puzzleSeen[puzzle.id] = true;
      references.puzzleAnnounce.className = "puzzle-announce-overlay";
      saveState();
      render();
    }, 1500);
  }

  function formatPuzzleNumber(puzzleId) {
    var all = Object.keys(PUZZLES).filter(function (id) { return !PUZZLES[id].bonus; });
    var index = all.indexOf(puzzleId);
    var n = index >= 0 ? (index + 1) : 0;
    return String(n).padStart(3, "0");
  }

  function showFx(kind) {
    if (!references.fxOverlay) {
      return;
    }
    var text = kind === "correct" ? "¡Correcto!" : "Incorrecto";
    references.fxOverlay.className = "fx-overlay visible " + (kind === "correct" ? "fx-correct" : "fx-wrong");
    references.fxOverlay.innerHTML = "<div class=\"fx-text\">" + text + "</div><div class=\"fx-particles\"></div>";
    if (kind === "correct") {
      var canvas = document.createElement("canvas");
      canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;pointer-events:none;";
      references.fxOverlay.appendChild(canvas);
      canvas.width = window.innerWidth || 800;
      canvas.height = window.innerHeight || 600;
      var ctx2d = canvas.getContext("2d");
      var cx = canvas.width / 2;
      var cy = canvas.height * 0.45;
      var colors = ["#d48b47", "#f2c27d", "#5f7650", "#406630", "#fff4dd", "#b5655b", "#9e5c2b"];
      var parts = [];
      for (var pi = 0; pi < 52; pi++) {
        var angle = (Math.random() * Math.PI * 2);
        var speed = 3 + Math.random() * 9;
        parts.push({
          x: cx, y: cy,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 4,
          r: Math.random() * 5 + 2,
          color: colors[Math.floor(Math.random() * colors.length)],
          life: 1.0
        });
      }
      var sched = window.requestAnimationFrame || function (cb) { return setTimeout(cb, 16); };
      function tick() {
        ctx2d.clearRect(0, 0, canvas.width, canvas.height);
        var any = false;
        for (var i = 0; i < parts.length; i++) {
          var p = parts[i];
          if (p.life <= 0) { continue; }
          any = true;
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.28;
          p.life -= 0.022;
          ctx2d.globalAlpha = Math.max(0, p.life);
          ctx2d.fillStyle = p.color;
          ctx2d.beginPath();
          ctx2d.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx2d.fill();
        }
        ctx2d.globalAlpha = 1;
        if (any) { sched(tick); }
      }
      sched(tick);
    }
    setTimeout(function () {
      references.fxOverlay.className = "fx-overlay";
      references.fxOverlay.innerHTML = "";
    }, 1000);
  }

  function renderChoicePuzzle(container, puzzle) {
    var draft = getDraft(puzzle.id, { selected: null });
    var grid = document.createElement("div");
    grid.className = "option-grid";

    puzzle.options.forEach(function (item) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "option-card" + (draft.selected === item.id ? " selected" : "");
      button.innerHTML = "<div class=\"option-visual\">" + escapeHtml(item.visual).replace(/\n/g, "<br>") + "</div><strong>" + item.label + "</strong><p class=\"option-caption\">" + item.caption + "</p>";
      button.addEventListener("click", function () {
        draft.selected = item.id;
        render();
      });
      grid.appendChild(button);
    });

    container.appendChild(grid);

    var row = actionRow();
    var answerButton = submitButton(function () {
      if (!draft.selected) {
        setFeedback(puzzle.id, "Falta una elección", "El profesor arquea una ceja: todavía no has marcado ninguna opción.");
        render();
        return;
      }
      if (draft.selected === puzzle.answer) {
        solvePuzzle(puzzle, puzzle.success);
      } else {
        registerPuzzleFail(puzzle);
        var wrong = puzzle.options.find(function (item) { return item.id === draft.selected; });
        setFeedback(puzzle.id, "Aún no", "Esa lectura resulta seductora, pero " + wrong.caption.toLowerCase());
        render();
      }
    });
    row.appendChild(answerButton);
    container.appendChild(row);
  }

  function renderNumberPuzzle(container, puzzle) {
    var draft = getDraft(puzzle.id, { value: puzzle.min });
    var display = document.createElement("div");
    display.className = "time-display";
    display.innerHTML = "<div class=\"digit-box\">" + draft.value + "</div><div class=\"digit-box\">objetivo</div>";
    container.appendChild(display);

    var controls = document.createElement("div");
    controls.className = "button-row";

    var minus = tinyButton("−", function () {
      draft.value = Math.max(puzzle.min, draft.value - 1);
      render();
    });
    var plus = tinyButton("+", function () {
      draft.value = Math.min(puzzle.max, draft.value + 1);
      render();
    });
    controls.appendChild(minus);
    controls.appendChild(plus);
    container.appendChild(controls);

    var row = actionRow();
    var answerButton = submitButton(function () {
      if (draft.value === puzzle.answer) {
        solvePuzzle(puzzle, puzzle.success);
      } else {
        registerPuzzleFail(puzzle);
        setFeedback(puzzle.id, "Cifra incorrecta", "La aritmética no cierra todavía. Revisa la escala temporal antes de volver a ajustar el contador.");
        render();
      }
    });
    row.appendChild(answerButton);
    container.appendChild(row);
  }

  function renderLampPuzzle(container, puzzle) {
    var draft = getDraft(puzzle.id, {
      switches: [false, false, false],
      lamps: [false, false, false],
      warmth: [0, 0, 0],
      inside: false,
      picks: [null, null, null]
    });
    var mapping = [1, 0, 2];

    if (!draft.inside) {
      var switchPanel = document.createElement("div");
      switchPanel.className = "lamp-layout";
      ["Interruptor A", "Interruptor B", "Interruptor C"].forEach(function (label, index) {
        var card = document.createElement("div");
        card.className = "switch-card";
        card.innerHTML = "<div class=\"lamp-bulb " + (draft.lamps[mapping[index]] ? "lit" : draft.warmth[mapping[index]] > 0 ? "warm" : "") + "\"></div><strong>" + label + "</strong><p class=\"option-caption\">" + (draft.switches[index] ? "Encendido" : "Apagado") + "</p>";
        var toggle = tinyButton(draft.switches[index] ? "Apagar" : "Encender", function () {
          applyLampAction(draft, mapping, index);
          render();
        });
        card.appendChild(toggle);
        switchPanel.appendChild(card);
      });
      container.appendChild(switchPanel);

      var row = actionRow();
      row.appendChild(submitButton(function () {
        draft.inside = true;
        render();
      }, "Entrar en la habitación"));
      container.appendChild(row);
      return;
    }

    var inspect = document.createElement("div");
    inspect.className = "inspector-grid";
    ["Lámpara I", "Lámpara II", "Lámpara III"].forEach(function (label, lampIndex) {
      var card = document.createElement("div");
      var statusClass = draft.lamps[lampIndex] ? "lit" : draft.warmth[lampIndex] > 0 ? "warm" : "";
      card.className = "inspector-card" + (draft.picks[lampIndex] !== null ? " selected" : "");
      card.innerHTML = "<div class=\"lamp-bulb " + statusClass + "\"></div><strong>" + label + "</strong><p class=\"option-caption\">" + lampStateLabel(draft, lampIndex) + "</p>";
      var answers = document.createElement("div");
      answers.className = "button-row";
      ["A", "B", "C"].forEach(function (value) {
        var button = tinyButton(value, function () {
          draft.picks[lampIndex] = value;
          render();
        });
        if (draft.picks[lampIndex] === value) {
          button.className += " selected";
        }
        answers.appendChild(button);
      });
      card.appendChild(answers);
      inspect.appendChild(card);
    });
    container.appendChild(inspect);

    var row = actionRow();
    row.appendChild(submitButton(function () {
      var expected = ["B", "A", "C"];
      if (draft.picks.some(function (item) { return item === null; })) {
        setFeedback(puzzle.id, "Aún falta una lámpara", "Debes asignar un interruptor a cada lámpara antes de validar la reconstrucción.");
        render();
        return;
      }
      if (expected.every(function (value, index) { return draft.picks[index] === value; })) {
        solvePuzzle(puzzle, "Has usado luz y calor para distinguir cada circuito. Bercial necesitaba exactamente este tipo de mirada: una que aceptara dos formas distintas de evidencia física.");
      } else {
        registerPuzzleFail(puzzle);
        setFeedback(puzzle.id, "Mapeo incorrecto", "La correspondencia no coincide. Recuerda: una lámpara está encendida, otra conserva calor y la tercera se ha quedado completamente fría.");
        render();
      }
    }, "Confirmar asignación"));
    container.appendChild(row);
  }

  function applyLampAction(draft, mapping, switchIndex) {
    draft.warmth = draft.warmth.map(function (value, lampIndex) {
      if (draft.lamps[lampIndex]) {
        return 2;
      }
      return Math.max(0, value - 1);
    });
    var lampIndex = mapping[switchIndex];
    if (draft.switches[switchIndex]) {
      draft.switches[switchIndex] = false;
      draft.lamps[lampIndex] = false;
      draft.warmth[lampIndex] = 2;
    } else {
      draft.switches[switchIndex] = true;
      draft.lamps[lampIndex] = true;
      draft.warmth[lampIndex] = 2;
    }
  }

  function lampStateLabel(draft, lampIndex) {
    if (draft.lamps[lampIndex]) {
      return "Encendida";
    }
    if (draft.warmth[lampIndex] > 0) {
      return "Templada";
    }
    return "Fría";
  }

  function renderCupPuzzle(container, puzzle) {
    var draft = getDraft(puzzle.id, {
      cups: [true, true, true, true, true, false, false, false, false, false],
      selected: []
    });
    var row = document.createElement("div");
    row.className = "cup-row";
    draft.cups.forEach(function (value, index) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "cup" + (value ? "" : " flipped");
      button.textContent = value ? "^" : "v";
      button.addEventListener("click", function () {
        toggleCupSelection(draft, index);
        render();
      });
      if (draft.selected.indexOf(index) !== -1) {
        button.style.borderColor = "rgba(158, 92, 43, 0.72)";
        button.style.boxShadow = "0 0 0 3px rgba(212, 139, 71, 0.18)";
      }
      row.appendChild(button);
    });
    container.appendChild(row);

    var controlRow = actionRow();
    controlRow.appendChild(tinyButton("Voltear las seleccionadas", function () {
      if (draft.selected.length !== 3) {
        setFeedback(puzzle.id, "Movimiento incompleto", "Debes seleccionar exactamente tres copas antes de ejecutar el giro.");
        render();
        return;
      }
      draft.selected.forEach(function (index) {
        draft.cups[index] = !draft.cups[index];
      });
      draft.selected = [];
      render();
    }));
    controlRow.appendChild(tinyButton("Reiniciar copas", function () {
      runtime.drafts[puzzle.id] = { cups: [true, true, true, true, true, false, false, false, false, false], selected: [] };
      render();
    }));
    container.appendChild(controlRow);

    var rowAction = actionRow();
    rowAction.appendChild(submitButton(function () {
      var allUp = draft.cups.every(Boolean);
      var allDown = draft.cups.every(function (value) { return !value; });
      if (allUp || allDown) {
        solvePuzzle(puzzle, puzzle.success);
      } else {
        registerPuzzleFail(puzzle);
        setFeedback(puzzle.id, "Patrón desigual", "Las copas aún no comparten una única orientación. Localiza el punto exacto donde cambia la secuencia original.");
        render();
      }
    }, "Validar orientación"));
    container.appendChild(rowAction);
  }

  function renderSequencePuzzle(container, puzzle) {
    var draft = getDraft(puzzle.id, { selected: [] });
    var slots = document.createElement("div");
    slots.className = "assignment-grid";
    puzzle.order.forEach(function (tokenId, index) {
      var slot = document.createElement("div");
      var chosenId = draft.selected[index];
      var chosen = puzzle.tokens.find(function (token) { return token.id === chosenId; });
      slot.className = "slot-card" + (chosen ? " filled" : "");
      slot.innerHTML = "<small>Paso " + (index + 1) + "</small><strong>" + (chosen ? chosen.label : "Vacío") + "</strong><p class=\"option-caption\">" + (chosen ? chosen.caption : "Selecciona un criterio de reconstrucción.") + "</p>";
      slots.appendChild(slot);
    });
    container.appendChild(slots);

    var tokens = document.createElement("div");
    tokens.className = "fragment-grid";
    puzzle.tokens.forEach(function (token) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "fragment-card" + (draft.selected.indexOf(token.id) !== -1 ? " active" : "");
      button.innerHTML = "<small>Fragmento</small><strong>" + token.label + "</strong><div class=\"option-visual\">" + token.visual + "</div><p class=\"option-caption\">" + token.caption + "</p>";
      button.disabled = draft.selected.indexOf(token.id) !== -1;
      button.addEventListener("click", function () {
        if (draft.selected.length < puzzle.order.length) {
          draft.selected.push(token.id);
          render();
        }
      });
      tokens.appendChild(button);
    });
    container.appendChild(tokens);

    var row = actionRow();
    row.appendChild(tinyButton("Vaciar secuencia", function () {
      runtime.drafts[puzzle.id] = { selected: [] };
      render();
    }));
    row.appendChild(submitButton(function () {
      if (draft.selected.length !== puzzle.order.length) {
        setFeedback(puzzle.id, "Secuencia incompleta", "Aún debes colocar los cuatro criterios antes de validar la reconstrucción del mapa.");
        render();
        return;
      }
      if (puzzle.order.every(function (tokenId, index) { return draft.selected[index] === tokenId; })) {
        solvePuzzle(puzzle, puzzle.success);
      } else {
        registerPuzzleFail(puzzle);
        setFeedback(puzzle.id, "Orden incorrecto", "La ruta todavía se apoya en un criterio secundario antes que en uno estructural. Revisa qué elemento del mapa impone el resto.");
        render();
      }
    }, "Validar secuencia"));
    container.appendChild(row);
  }

  function renderWordPuzzle(container, puzzle) {
    var draft = getDraft(puzzle.id, { selected: null });
    var grid = document.createElement("div");
    grid.className = "word-grid";
    puzzle.words.forEach(function (word) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "word-chip" + (draft.selected === word.id ? " selected" : "");
      button.innerHTML = "<strong>" + word.label + "</strong><p class=\"option-caption\">" + word.caption + "</p>";
      button.addEventListener("click", function () {
        draft.selected = word.id;
        render();
      });
      grid.appendChild(button);
    });
    container.appendChild(grid);

    var row = actionRow();
    row.appendChild(submitButton(function () {
      if (!draft.selected) {
        setFeedback(puzzle.id, "Falta una palabra", "Todavía no has marcado la palabra que rompe el inventario técnico.");
        render();
        return;
      }
      if (draft.selected === puzzle.answer) {
        solvePuzzle(puzzle, puzzle.success);
      } else {
        registerPuzzleFail(puzzle);
        setFeedback(puzzle.id, "Intrusa incorrecta", "Esa palabra sigue perteneciendo al mundo material del mecanismo. Busca la que solo sirve para enturbiar el expediente.");
        render();
      }
    }, "Depurar inventario"));
    container.appendChild(row);
  }

  function renderBoxesPuzzle(container, puzzle) {
    var draft = getDraft(puzzle.id, { selected: null, opened: null });
    var grid = document.createElement("div");
    grid.className = "assignment-grid";
    puzzle.boxes.forEach(function (box) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "slot-card" + (draft.selected === box.id ? " filled" : "");
      button.innerHTML = "<small>Caja</small><strong>" + box.label + "</strong><div class=\"option-visual\">" + box.visual + "</div><p class=\"option-caption\">" + box.caption + "</p>";
      button.addEventListener("click", function () {
        draft.selected = box.id;
        draft.opened = box.id;
        render();
      });
      grid.appendChild(button);
    });
    container.appendChild(grid);

    if (draft.opened) {
      var insight = document.createElement("div");
      insight.className = "speech";
      insight.innerHTML = "<strong>Muestra extraída</strong><span>Al abrir la caja marcada como " + draft.opened.toUpperCase() + ", Inés recuerda que todas las etiquetas están mal. La muestra importa menos por su metal que por la imposibilidad lógica que revela.</span>";
      container.appendChild(insight);
    }

    var row = actionRow();
    row.appendChild(submitButton(function () {
      if (!draft.selected) {
        setFeedback(puzzle.id, "Ninguna caja abierta", "Debes escoger primero una caja de la que extraer la muestra decisiva.");
        render();
        return;
      }
      if (draft.selected === puzzle.answer) {
        solvePuzzle(puzzle, puzzle.success);
      } else {
        registerPuzzleFail(puzzle);
        setFeedback(puzzle.id, "Muestra poco útil", "Esa elección todavía deja demasiadas combinaciones vivas. Busca la caja cuyo rótulo se contradiga de inmediato.");
        render();
      }
    }, "Resolver etiquetado"));
    container.appendChild(row);
  }

  function renderMapPuzzle(container, puzzle) {
    var draft = getDraft(puzzle.id, { selected: null });
    var map = document.createElement("div");
    map.className = "location-map";
    puzzle.nodes.forEach(function (node) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "location-node" + (draft.selected === node.id ? " selected" : "");
      button.innerHTML = "<strong>" + node.label + "</strong><p class=\"option-caption\">" + node.caption + "</p>";
      button.addEventListener("click", function () {
        draft.selected = node.id;
        render();
      });
      map.appendChild(button);
    });
    container.appendChild(map);

    var row = actionRow();
    row.appendChild(submitButton(function () {
      if (!draft.selected) {
        setFeedback(puzzle.id, "Falta un destino", "Debes señalar un lugar del tablero final antes de cerrar la acusación.");
        render();
        return;
      }
      if (draft.selected === puzzle.answer) {
        solvePuzzle(puzzle, puzzle.success);
      } else {
        registerPuzzleFail(puzzle);
        setFeedback(puzzle.id, "Destino insuficiente", "Ese lugar explica una parte del caso, pero no concentra beneficio, ocultación y traslado al mismo tiempo.");
        render();
      }
    }, "Cerrar acusación"));
    container.appendChild(row);
  }

  function toggleCupSelection(draft, index) {
    var current = draft.selected.indexOf(index);
    if (current >= 0) {
      draft.selected.splice(current, 1);
      return;
    }
    if (draft.selected.length >= 3) {
      draft.selected.shift();
    }
    draft.selected.push(index);
  }

  function actionRow() {
    var row = document.createElement("div");
    row.className = "button-row";
    return row;
  }

  function tinyButton(label, handler) {
    var button = document.createElement("button");
    button.type = "button";
    button.className = "tiny-button";
    button.textContent = label;
    button.addEventListener("click", handler);
    return button;
  }

  function submitButton(handler, label) {
    var button = document.createElement("button");
    button.type = "button";
    button.className = "answer-button";
    button.textContent = label || "Responder";
    button.addEventListener("click", handler);
    return button;
  }

  function getDraft(puzzleId, fallback) {
    if (!runtime.drafts[puzzleId]) {
      runtime.drafts[puzzleId] = clone(fallback);
    }
    return runtime.drafts[puzzleId];
  }

  function solvePuzzle(puzzle, successText) {
    state.solved[puzzle.id] = true;
    runtime.feedback = null;
    var chapter = CHAPTERS[puzzle.chapter];
    var earned = currentPicarats(puzzle.id);
    showFx("correct");
    playSfx("success");

    // Diary entry for puzzle resolution
    addDiaryEntry(
      "Inés Galván",
      "Puzle resuelto: «" + puzzle.title + "». " + successText.slice(0, 120) + (successText.length > 120 ? "…" : ""),
      chapter.id
    );

    if (puzzle.bonus) {
      var bk1 = "bonus:" + puzzle.id + ":1";
      var bk2 = "bonus:" + puzzle.id + ":2";
      if (!state.foundCoins[bk1]) {
        state.foundCoins[bk1] = "Puzle opcional «" + puzzle.title + "» completado · primera moneda.";
        state.foundCoins[bk2] = "Puzle opcional «" + puzzle.title + "» completado · segunda moneda.";
      }
      saveState();
      var bonusLines = [{ speaker: "Resolución", text: successText + " Has ganado " + earned + " picarats y 2 monedas de pista." }].concat(PUZZLE_DIALOGUES[puzzle.id] || []);
      runtime.pendingDialogue = { lines: bonusLines, lineIndex: 0, meta: { type: "bonus" } };
      render();
      return;
    }

    var chapterJustCompleted = chapterSolved(puzzle.chapter) && state.clues.indexOf(chapter.id) === -1;
    var nextChapter = null;
    var nextPuzzle = null;

    if (chapterJustCompleted) {
      state.clues.push(chapter.id);
      awardChapterCoin(chapter);
      addDiaryEntry(
        "Profesor Montes",
        chapter.badge + " concluido. " + chapter.clue.title + ": " + chapter.clue.copy.slice(0, 100) + "…",
        chapter.id
      );
      if ((COLLECTIBLES[chapter.id] || [])[0]) {
        collectItem(chapter.id, 0);
      }
      if (puzzle.chapter < CHAPTERS.length - 1) {
        nextChapter = puzzle.chapter + 1;
        nextPuzzle = CHAPTERS[nextChapter].puzzles[0];
        state.selectedChapter = nextChapter;
      }
    } else {
      var puzzleIds = chapter.puzzles;
      var currentIndex = puzzleIds.indexOf(puzzle.id);
      if (currentIndex < puzzleIds.length - 1) {
        nextChapter = puzzle.chapter;
        nextPuzzle = puzzleIds[currentIndex + 1];
      }
    }

    saveState();

    var lines = [{ speaker: "Resolución", text: successText + " +" + earned + " picarats." }];
    lines = lines.concat(PUZZLE_DIALOGUES[puzzle.id] || []);
    if (chapterJustCompleted) {
      lines.push({ speaker: "Narrador", text: chapter.badge + " completado · " + chapter.clue.title + ". " + chapter.clue.copy });
      if (nextChapter !== null) {
        lines.push({ speaker: "Profesor Montes", text: "Bien hecho. El siguiente capítulo aguarda." });
      }
    }

    runtime.pendingDialogue = { lines: lines, lineIndex: 0, meta: { type: "afterSolve", nextChapter: nextChapter, nextPuzzle: nextPuzzle } };
    render();
  }

  function awardChapterCoin(chapter) {
    var rewardKey = "reward:" + chapter.id;
    if (state.foundCoins[rewardKey]) {
      return;
    }
    state.foundCoins[rewardKey] = "Recompensa de capítulo: el profesor entrega una moneda de pista por cerrar " + chapter.badge + " y resumir la deducción principal en voz alta.";
    playSfx("coin");
  }

  function setFeedback(puzzleId, title, copy) {
    runtime.feedback = { puzzleId: puzzleId, title: title, copy: copy };
  }

  function createFeedbackCard(title, copy) {
    var card = document.getElementById("feedbackTemplate").content.firstElementChild.cloneNode(true);
    card.querySelector("h3").textContent = title;
    card.querySelector(".feedback-copy").textContent = copy;
    return card;
  }

  function advanceDialogue() {
    var dlg = runtime.pendingDialogue;
    if (!dlg) {
      state.introDone = true;
      saveState();
      render();
      return;
    }
    if (!runtime.typewriterDone) {
      skipTypewriter();
      return;
    }
    if (dlg.lineIndex < dlg.lines.length - 1) {
      dlg.lineIndex += 1;
      runtime.typewriterDone = false;
      renderDialogueOverlay();
      return;
    }
    var meta = dlg.meta || {};
    runtime.pendingDialogue = null;
    if (meta.type === "intro") {
      state.introDone = true;
      state.activePage = "map";
      state.activeZoneMap = 0;
      saveState();
    } else if (meta.type === "afterSolve") {
      if (typeof meta.nextChapter === "number") {
        runtime.chapterTransition = CHAPTERS[meta.nextChapter];
        showChapterTransition(runtime.chapterTransition);
        state.selectedChapter = meta.nextChapter;
      }
      if (meta.nextPuzzle) {
        state.selectedPuzzle[CHAPTERS[state.selectedChapter].id] = meta.nextPuzzle;
      }
      state.activePage = "map";
      state.activeZoneMap = state.selectedChapter;
      saveState();
    }
    render();
  }

  function startTypewriter(speaker, text) {
    runtime.typewriterText = text;
    runtime.typewriterIndex = 0;
    runtime.typewriterDone = false;
    clearInterval(runtime.typewriterTimer);
    document.getElementById("dialogueText").textContent = "";
    speakLine(speaker, text);
    runtime.typewriterTimer = setInterval(function () {
      runtime.typewriterIndex += 1;
      document.getElementById("dialogueText").textContent = runtime.typewriterText.slice(0, runtime.typewriterIndex);
      playSfx("type");
      if (runtime.typewriterIndex >= runtime.typewriterText.length) {
        clearInterval(runtime.typewriterTimer);
        runtime.typewriterDone = true;
      }
    }, 40);
  }

  function skipTypewriter() {
    if (runtime.typewriterDone) {
      return;
    }
    clearInterval(runtime.typewriterTimer);
    runtime.typewriterDone = true;
    document.getElementById("dialogueText").textContent = runtime.typewriterText;
  }

  function portraitExpression(text) {
    var low = String(text || "").toLowerCase();
    if (/(\?|sorpresa|imposible|alarma|urgente|inconcebible)/.test(low)) { return "surprised"; }
    if (/(piensa|deduce|analiza|tal vez|quiz[aá]|reflexion|interesante)/.test(low)) { return "thinking"; }
    return "normal";
  }

  function renderPortrait(speaker, expression) {
    if (!references.dialoguePortrait) { return; }
    var eyeY  = expression === "surprised" ? 100 : 108;
    var browY = expression === "surprised" ? 88 : (expression === "thinking" ? 96 : 94);
    var browOff = expression === "surprised" ? -14 : (expression === "thinking" ? -6 : -9);
    var mouth = expression === "thinking"
      ? "M108 148 Q130 144 152 148"
      : (expression === "surprised"
        ? "M124 148 Q130 158 136 148"
        : "M106 148 Q130 158 154 148");

    if (speaker.indexOf("Profesor") >= 0) {
      // Top hat · monocle over right eye · mustache
      references.dialoguePortrait.innerHTML =
        "<svg viewBox='0 0 260 220' xmlns='http://www.w3.org/2000/svg'>" +
        // Top hat
        "<rect x='90' y='12' width='80' height='46' rx='3' fill='#1c2540'/>" +
        "<rect x='62' y='56' width='136' height='13' rx='6' fill='#243055'/>" +
        "<rect x='90' y='53' width='80' height='8' fill='#9e5c2b'/>" +
        // Face
        "<ellipse cx='130' cy='128' rx='54' ry='54' fill='#d8c4a2'/>" +
        // Neck + collar
        "<rect x='112' y='174' width='36' height='28' rx='4' fill='#cab898'/>" +
        "<path d='M80 202 Q106 188 130 186 Q154 188 180 202' fill='#e8e2d6' stroke='#c8b898' stroke-width='1'/>" +
        // Jacket lapels
        "<path d='M80 202 L108 172 L130 186 L152 172 L180 202' fill='#253050' stroke='none'/>" +
        // Eyebrows
        "<path d='M100 " + browY + " Q113 " + (browY + browOff) + " 124 " + browY + "' stroke='#3a2a1a' stroke-width='3' fill='none' stroke-linecap='round'/>" +
        "<path d='M136 " + browY + " Q149 " + (browY + browOff) + " 162 " + browY + "' stroke='#3a2a1a' stroke-width='3' fill='none' stroke-linecap='round'/>" +
        // Left eye
        "<ellipse cx='112' cy='" + eyeY + "' rx='5' ry='5.5' fill='#283046'/>" +
        "<circle cx='114' cy='" + (eyeY - 2) + "' r='1.5' fill='rgba(255,255,255,0.4)'/>" +
        // Right eye + monocle
        "<ellipse cx='148' cy='" + eyeY + "' rx='5' ry='5.5' fill='#283046'/>" +
        "<circle cx='150' cy='" + (eyeY - 2) + "' r='1.5' fill='rgba(255,255,255,0.4)'/>" +
        "<circle cx='148' cy='" + eyeY + "' r='12.5' fill='rgba(200,175,110,0.15)' stroke='#c7a25f' stroke-width='2.5'/>" +
        "<path d='M160 " + (eyeY + 8) + " Q164 120 168 130' stroke='#c7a25f' stroke-width='2' fill='none'/>" +
        // Mustache
        "<path d='M106 138 C114 148 122 150 130 147 C138 150 146 148 154 138 C148 142 140 144 130 142 C120 144 112 142 106 138 Z' fill='#4a3625'/>" +
        // Mouth
        "<path d='" + mouth + "' stroke='#7a4f3f' stroke-width='3' fill='none' stroke-linecap='round'/>" +
        "</svg>";
      return;
    }
    if (speaker.indexOf("Inés") >= 0 || speaker.indexOf("Ines") >= 0) {
      // Ponytail · magnifying glass · blouse
      references.dialoguePortrait.innerHTML =
        "<svg viewBox='0 0 260 220' xmlns='http://www.w3.org/2000/svg'>" +
        // Hair back / ponytail strand
        "<path d='M80 114 Q58 90 68 62 Q92 20 152 30 Q198 44 194 114 Q188 56 152 42 Q100 32 80 114 Z' fill='#3a2a20'/>" +
        "<path d='M174 120 Q192 148 188 178 Q182 192 174 186 Q168 170 172 148 Q174 136 174 120' fill='#3a2a20'/>" +
        // Face
        "<ellipse cx='130' cy='122' rx='54' ry='54' fill='#e2ca9e'/>" +
        // Neck + blouse
        "<rect x='112' y='168' width='36' height='30' rx='4' fill='#d4b88e'/>" +
        "<path d='M80 200 Q108 182 130 178 Q152 182 180 200' fill='#c8d8e8' stroke='#a0b8cc' stroke-width='1'/>" +
        // Blouse collar detail
        "<path d='M108 178 L130 196 L152 178' fill='none' stroke='#8aaabb' stroke-width='1.5'/>" +
        // Front hair wisps
        "<path d='M80 114 Q74 94 78 76' fill='none' stroke='#4a3830' stroke-width='8' stroke-linecap='round'/>" +
        "<path d='M86 100 Q82 82 86 66' fill='none' stroke='#4a3830' stroke-width='5' stroke-linecap='round'/>" +
        // Eyebrows
        "<path d='M100 " + browY + " Q112 " + (browY + browOff) + " 124 " + browY + "' stroke='#3a2a1a' stroke-width='2.5' fill='none' stroke-linecap='round'/>" +
        "<path d='M136 " + browY + " Q148 " + (browY + browOff) + " 160 " + browY + "' stroke='#3a2a1a' stroke-width='2.5' fill='none' stroke-linecap='round'/>" +
        // Eyes
        "<ellipse cx='112' cy='" + eyeY + "' rx='5' ry='5.5' fill='#2d3852'/>" +
        "<circle cx='114' cy='" + (eyeY - 2) + "' r='1.5' fill='rgba(255,255,255,0.4)'/>" +
        "<ellipse cx='148' cy='" + eyeY + "' rx='5' ry='5.5' fill='#2d3852'/>" +
        "<circle cx='150' cy='" + (eyeY - 2) + "' r='1.5' fill='rgba(255,255,255,0.4)'/>" +
        // Nose (subtle)
        "<path d='M126 120 Q130 126 134 120' stroke='#b8956a' stroke-width='1.5' fill='none'/>" +
        // Mouth
        "<path d='" + mouth + "' stroke='#8a4f44' stroke-width='3' fill='none' stroke-linecap='round'/>" +
        // Magnifying glass (held lower right)
        "<circle cx='196' cy='152' r='18' fill='rgba(200,220,235,0.32)' stroke='#7a5e3a' stroke-width='4'/>" +
        "<circle cx='196' cy='152' r='18' fill='none' stroke='rgba(255,255,255,0.25)' stroke-width='2'/>" +
        "<line x1='210' y1='166' x2='228' y2='186' stroke='#7a5e3a' stroke-width='5' stroke-linecap='round'/>" +
        "</svg>";
      return;
    }
    // Narrator — parchment / scroll
    references.dialoguePortrait.innerHTML =
      "<svg viewBox='0 0 260 220' xmlns='http://www.w3.org/2000/svg'>" +
      "<path d='M64 40 Q72 30 80 40 L80 186 Q72 196 64 186 Z' fill='#e0cfa8' stroke='#9b7f5a' stroke-width='3'/>" +
      "<path d='M196 40 Q188 30 180 40 L180 186 Q188 196 196 186 Z' fill='#e0cfa8' stroke='#9b7f5a' stroke-width='3'/>" +
      "<rect x='80' y='36' width='100' height='154' fill='#f4e8cc' stroke='#9b7f5a' stroke-width='2'/>" +
      "<line x1='92' y1='78' x2='168' y2='78' stroke='#9e8868' stroke-width='3' stroke-linecap='round'/>" +
      "<line x1='92' y1='100' x2='168' y2='100' stroke='#9e8868' stroke-width='3' stroke-linecap='round'/>" +
      "<line x1='92' y1='122' x2='168' y2='122' stroke='#9e8868' stroke-width='3' stroke-linecap='round'/>" +
      "<line x1='92' y1='144' x2='155' y2='144' stroke='#9e8868' stroke-width='2' stroke-linecap='round'/>" +
      "<line x1='92' y1='160' x2='140' y2='160' stroke='#9e8868' stroke-width='2' stroke-linecap='round'/>" +
      "</svg>";
  }

  function showChapterTransition(chapter) {
    if (!references.chapterTransition || !chapter) { return; }
    playSfx("chapter");
    var art = CHAPTER_ASCII[chapter.id] || "  /\\\n /  \\\n| [] |\n|_||_|";
    var imgSrc = CHAPTER_ART[chapter.id];
    var imgHtml = imgSrc
      ? "<img src=\"" + imgSrc + "\" alt=\"" + chapter.title + "\" class=\"chapter-transition-img\">"
      : "";
    references.chapterTransition.className = "chapter-transition-overlay visible";
    references.chapterTransition.innerHTML =
      "<div class=\"chapter-transition-card\">" +
      "<p class=\"eyebrow\">" + chapter.badge + "</p>" +
      "<h2>" + chapter.title + "</h2>" +
      imgHtml +
      "<pre class=\"chapter-ascii\">" + escapeHtml(art) + "</pre>" +
      "<p class=\"feedback-copy\">" + chapter.objective + "</p>" +
      "</div>";
    setTimeout(function () {
      references.chapterTransition.className = "chapter-transition-overlay";
      references.chapterTransition.innerHTML = "";
    }, 2800);
  }

  function renderZoneMap(chapterIndex) {
    var chapter = CHAPTERS[chapterIndex];
    var locs = ZONE_MAP_LOCATIONS[chapterIndex];
    var unlocked = unlockedChapterCount();
    var chUnlocked = chapterIndex < unlocked;

    references.mapGrid.innerHTML = "";

    // ── Header ──
    var hdr = document.createElement("div");
    hdr.className = "zone-map-header";
    hdr.innerHTML =
      "<button class=\"zone-back-btn tiny-button\" type=\"button\">← Mapa regional</button>" +
      "<div><p class=\"eyebrow\">" + chapter.badge + "</p><h3>" + chapter.title + "</h3>" +
      "<p class=\"feedback-copy\">" + chapter.subtitle + "</p></div>";
    hdr.querySelector(".zone-back-btn").addEventListener("click", function () {
      state.activeZoneMap = null;
      saveState();
      renderMap();
    });
    references.mapGrid.appendChild(hdr);

    // ── Canvas ──
    var card = document.createElement("div");
    card.className = "map-real-card zone-map-card";

    var canvas = document.createElement("div");
    canvas.className = "zone-map-canvas";

    var bg = document.createElement("img");
    bg.className = "zone-map-bg";
    bg.src = ZONE_MAP_ART[chapter.id] || CHAPTER_ART[chapter.id] || "";
    bg.alt = chapter.title;
    canvas.appendChild(bg);

    locs.forEach(function (loc) {
      var pin = document.createElement("div");
      pin.className = "zone-pin" + (loc.bonus ? " zone-pin-bonus" : "");
      pin.style.left = loc.x + "%";
      pin.style.top  = loc.y + "%";

      var pinHdr = document.createElement("div");
      pinHdr.className = "zone-pin-header";
      pinHdr.innerHTML =
        "<span class=\"zone-pin-icon\">" + loc.icon + "</span>" +
        "<span class=\"zone-pin-name\">" + loc.name + "</span>";
      pin.appendChild(pinHdr);

      var puzzleRow = document.createElement("div");
      puzzleRow.className = "zone-pin-puzzles";

      loc.puzzles.forEach(function (puzzleId) {
        var puzzle = PUZZLES[puzzleId];
        if (!puzzle) { return; }
        var solved = isSolved(puzzleId);
        var isActive = state.selectedPuzzle[chapter.id] === puzzleId && state.selectedChapter === chapterIndex;
        var prevIndex = chapter.puzzles.indexOf(puzzleId);
        var isPuzzleUnlocked = chUnlocked && (
          loc.bonus ? true :
          (prevIndex <= 0 || isSolved(chapter.puzzles[prevIndex - 1]))
        );

        var chip = document.createElement("button");
        chip.type = "button";
        chip.className = "zone-puzzle-chip" +
          (solved ? " solved" : "") +
          (!isPuzzleUnlocked ? " locked" : "") +
          (isActive ? " active" : "");
        chip.innerHTML =
          (solved ? "✓ " : "") + puzzle.title +
          "<span class=\"zone-chip-pts\">" +
            (solved ? currentPicarats(puzzleId) + "pt" : puzzle.picarats + "pt") +
            (loc.bonus ? " ★" : "") +
          "</span>";

        if (isPuzzleUnlocked) {
          (function (ci, pid) {
            chip.addEventListener("click", function () {
              state.activeZoneMap = null;
              saveState();
              travelToChapter(ci, pid);
            });
          }(chapterIndex, puzzleId));
        } else {
          chip.disabled = true;
        }
        puzzleRow.appendChild(chip);
      });

      pin.appendChild(puzzleRow);
      canvas.appendChild(pin);
    });

    // Monedas ocultas dentro del SVG de zona
    locs.forEach(function (loc) {
      if (typeof loc.coinIndex !== "number") {
        return;
      }
      var coinKey = chapter.id + ":" + loc.coinIndex;
      var found = !!state.foundCoins[coinKey];

      var coin = document.createElement("button");
      coin.type = "button";
      coin.className = "zone-coin-spot" + (found ? " found" : "");
      coin.style.left = (loc.coinX || loc.x) + "%";
      coin.style.top = (loc.coinY || loc.y) + "%";
      coin.title = found ? "Moneda ya encontrada" : "Buscar moneda de pista";
      coin.setAttribute("aria-label", coin.title);
      coin.textContent = found ? "✓" : "?";
      if (!found) {
        (function (l, key, idx) {
          coin.addEventListener("click", function () {
            state.foundCoins[key] = chapter.coins[idx] || "Has encontrado una observación útil.";
            addDiaryEntry("Inés Galván", "Moneda de pista hallada en " + l.name + ".", chapter.id);
            collectItem(chapter.id, idx);
            playSfx("coin");
            saveState();
            setFeedback("coin-" + key, "Moneda de pista conseguida", state.foundCoins[key]);
            renderMap();
          });
        }(loc, coinKey, loc.coinIndex));
      } else {
        coin.disabled = true;
      }
      canvas.appendChild(coin);
    });

    card.appendChild(canvas);
    references.mapGrid.appendChild(card);
  }

  function renderMap() {
    if (!references.mapGrid) { return; }

    // If a zone map is active, delegate to renderZoneMap
    if (typeof state.activeZoneMap === "number") {
      renderZoneMap(state.activeZoneMap);
      return;
    }

    references.mapGrid.innerHTML = "";
    var unlocked = unlockedChapterCount();

    var mapCard = document.createElement("div");
    mapCard.className = "map-real-card";
    mapCard.innerHTML = "<h3>Mapa regional de San Teodoro</h3><p class=\"feedback-copy\">Selecciona una zona del mapa para explorar los puzles de cada capítulo.</p>";
    var mapCanvas = document.createElement("div");
    mapCanvas.className = "map-real-canvas";
    var mapImage = document.createElement("img");
    mapImage.className = "map-real-image";
    mapImage.src = "assets/san-teodoro-region-map.svg";
    mapImage.alt = "Mapa regional de San Teodoro";
    mapCanvas.appendChild(mapImage);
    CHAPTERS.forEach(function (chapter, chapterIndex) {
      var pin = MAP_CHAPTER_PINS[chapter.id];
      if (!pin) { return; }
      var button = document.createElement("button");
      button.type = "button";
      var isUnlocked = chapterIndex < unlocked;
      button.className = "map-hub" + (chapterIndex === state.selectedChapter ? " active" : "") + (!isUnlocked ? " locked" : "");
      button.style.left = pin.x + "%";
      button.style.top = pin.y + "%";
      button.innerHTML = "<strong>" + chapter.badge + "</strong><span>" + pin.label + "</span>";
      if (isUnlocked) {
        (function (ci) {
          button.addEventListener("click", function () {
            // Show zone map for this chapter
            state.selectedChapter = ci;
            state.activeZoneMap = ci;
            saveState();
            renderMap();
          });
        }(chapterIndex));
      } else {
        button.disabled = true;
      }
      mapCanvas.appendChild(button);
    });
    mapCard.appendChild(mapCanvas);
    references.mapGrid.appendChild(mapCard);

    CHAPTERS.forEach(function (chapter, chapterIndex) {
      var section = document.createElement("div");
      section.className = "map-chapter-section" + (chapterIndex === state.selectedChapter ? " active" : "");
      var hdr = document.createElement("div");
      hdr.className = "map-chapter-header";
      hdr.innerHTML = "<strong>" + chapter.badge + "</strong><span>" + chapter.title + "</span>";
      section.appendChild(hdr);

      var openBtn = document.createElement("button");
      openBtn.type = "button";
      openBtn.className = "tiny-button";
      openBtn.textContent = chapterIndex < unlocked ? "Abrir mapa SVG de zona" : "Bloqueado";
      if (chapterIndex < unlocked) {
        (function (ci) {
          openBtn.addEventListener("click", function () {
            state.selectedChapter = ci;
            state.activeZoneMap = ci;
            saveState();
            renderMap();
          });
        }(chapterIndex));
      } else {
        openBtn.disabled = true;
      }
      section.appendChild(openBtn);
      references.mapGrid.appendChild(section);
    });
  }

  function renderDialogueOverlay() {
    if (!references.dialogueOverlay) { return; }
    var shouldShow = !state.introDone || !!runtime.pendingDialogue;
    if (!shouldShow) {
      references.dialogueOverlay.className = "dialogue-overlay";
      return;
    }
    if (!state.introDone && !runtime.pendingDialogue) {
      runtime.pendingDialogue = { lines: INTRO_DIALOGUE, lineIndex: 0, meta: { type: "intro" } };
    }
    var dlg = runtime.pendingDialogue;
    var line = dlg.lines[dlg.lineIndex];
    var isLast = dlg.lineIndex === dlg.lines.length - 1;
    references.dialogueOverlay.className = "dialogue-overlay visible";
    document.getElementById("dialogueSpeaker").textContent = line.speaker;
    renderPortrait(line.speaker, portraitExpression(line.text));
    var lineKey = dlg.lineIndex + "::" + line.speaker + "::" + line.text;
    if (runtime.typewriterKey !== lineKey) {
      runtime.typewriterKey = lineKey;
      startTypewriter(line.speaker, line.text);
      if (references.dialoguePortrait) {
        references.dialoguePortrait.classList.remove("portrait-enter");
        var schedPortrait = window.requestAnimationFrame || function (cb) { return setTimeout(cb, 16); };
        schedPortrait(function () {
          references.dialoguePortrait.classList.add("portrait-enter");
        });
      }
    }
    document.getElementById("dialogueCounter").textContent = (dlg.lineIndex + 1) + " / " + dlg.lines.length;
    var btnLabel = !runtime.typewriterDone ? "Mostrar todo" : (isLast ? (dlg.meta && dlg.meta.type === "intro" ? "¡Comenzar la investigación!" : "Continuar investigando") : "Siguiente →");
    document.getElementById("dialogueNext").textContent = btnLabel;
  }

  function travelToChapter(chapterIndex, puzzleId) {
    var currentChapter = state.selectedChapter;
    if (!references.mapGrid) {
      state.selectedChapter = chapterIndex;
      if (puzzleId) {
        state.selectedPuzzle[CHAPTERS[chapterIndex].id] = puzzleId;
        state.svgPuzzleAccess[CHAPTERS[chapterIndex].id] = puzzleId;
      }
      state.activePage = puzzleId ? "puzzle" : "map";
      saveState();
      render();
      return;
    }
    animateMapTravel(currentChapter, chapterIndex, function () {
      state.selectedChapter = chapterIndex;
      if (puzzleId) {
        state.selectedPuzzle[CHAPTERS[chapterIndex].id] = puzzleId;
        state.svgPuzzleAccess[CHAPTERS[chapterIndex].id] = puzzleId;
        state.activePage = "puzzle";
      }
      saveState();
      render();
    });
  }

  function animateMapTravel(fromChapterIndex, toChapterIndex, onDone) {
    var mapCanvas = references.mapGrid.querySelector(".map-real-canvas");
    var fromChapter = CHAPTERS[fromChapterIndex];
    var toChapter = CHAPTERS[toChapterIndex];
    var fromPin = fromChapter ? MAP_CHAPTER_PINS[fromChapter.id] : null;
    var toPin = toChapter ? MAP_CHAPTER_PINS[toChapter.id] : null;
    if (!mapCanvas || !fromPin || !toPin || fromChapterIndex === toChapterIndex) {
      references.mapGrid.classList.add("traveling");
      setTimeout(function () {
        references.mapGrid.classList.remove("traveling");
        onDone();
      }, 500);
      return;
    }

    var overlay = document.createElement("svg");
    overlay.className = "map-travel-svg";
    overlay.setAttribute("viewBox", "0 0 100 100");
    overlay.setAttribute("preserveAspectRatio", "none");
    overlay.innerHTML = "<line class=\"map-travel-line\" x1=\"" + fromPin.x + "\" y1=\"" + fromPin.y + "\" x2=\"" + toPin.x + "\" y2=\"" + toPin.y + "\"></line>";

    var traveler = document.createElement("div");
    traveler.className = "map-traveler";
    traveler.style.left = fromPin.x + "%";
    traveler.style.top = fromPin.y + "%";

    mapCanvas.appendChild(overlay);
    mapCanvas.appendChild(traveler);

    var schedule = window.requestAnimationFrame || function (cb) { return setTimeout(cb, 16); };
    schedule(function () {
      traveler.classList.add("moving");
      traveler.style.left = toPin.x + "%";
      traveler.style.top = toPin.y + "%";
    });

    setTimeout(function () {
      if (overlay.parentNode) {
        overlay.parentNode.removeChild(overlay);
      }
      if (traveler.parentNode) {
        traveler.parentNode.removeChild(traveler);
      }
      onDone();
    }, 700);
  }

  function renderFinale() {
    var allSolved = solvedCount() === 24;
    if (!allSolved) {
      runtime.victoryPlayed = false;
      var remaining = 24 - solvedCount();
      references.finalCard.innerHTML =
        "<p class=\"eyebrow\">Acusación pendiente</p>" +
        "<h2>El reloj aún calla</h2>" +
        "<p>Quedan <strong>" + remaining + " puzle" + (remaining !== 1 ? "s" : "") + "</strong> por resolver para reconstruir la maniobra completa y desbloquear la acusación final.</p>" +
        "<div class=\"progress-rail\" style=\"margin:16px 0;height:8px;\"><div class=\"progress-fill\" style=\"width:" + Math.round(solvedCount() / 24 * 100) + "%\"></div></div>";
      return;
    }
    if (!runtime.victoryPlayed) {
      playSfx("victory");
      runtime.victoryPlayed = true;
      addDiaryEntry("Narrador", "Los veinticuatro enigmas de Bercial han sido descifrados. El mecanismo de bronce guarda silencio por primera vez en meses.", "cap6");
      saveState();
    }
    var total = 0;
    var max = 0;
    var rows = Object.keys(PUZZLES).filter(function (id) { return !PUZZLES[id].bonus; }).map(function (id) {
      var p = PUZZLES[id];
      var earned = state.solved[id] ? currentPicarats(id) : 0;
      total += earned;
      max += p.picarats;
      var pct = Math.round(earned / p.picarats * 100);
      return "<li><span class=\"final-score-title\">Puzle " + formatPuzzleNumber(id) + " · " + p.title + "</span>" +
             "<span class=\"final-score-pts\">" + earned + " / " + p.picarats + " pts" +
             (earned === p.picarats ? " ★" : "") + "</span></li>";
    }).join("");
    var rank, rankIcon, rankCopy;
    if (total >= 400) {
      rank = "Maestro Layton"; rankIcon = "🎩";
      rankCopy = "El profesor apenas sonríe: no solo cerraste el caso, lo hiciste con elegancia metódica. Bercial estaría orgulloso.";
    } else if (total >= 350) {
      rank = "Inspector"; rankIcon = "🔍";
      rankCopy = "La acusación es sólida y la villa recupera la calma. El inspector deja algunos márgenes por pulir, pero la verdad prevalece.";
    } else if (total >= 200) {
      rank = "Detective"; rankIcon = "📋";
      rankCopy = "El detective cierra el caso, aunque el cuaderno muestra algunas vacilaciones. Una segunda pasada lo perfeccionaría.";
    } else {
      rank = "Aprendiz"; rankIcon = "📖";
      rankCopy = "El aprendiz tenaz llega al final, pero el expediente pide una segunda vuelta para alcanzar la precisión del maestro.";
    }
    references.finalCard.innerHTML =
      "<p class=\"eyebrow\">Ceremonia final · Veredicto</p>" +
      "<h2>Velasco y Salcedo</h2>" +
      "<p><strong>Autor intelectual:</strong> Tomás Velasco, alcalde de San Teodoro. Diseñó el fraude, infló contratos y necesitaba que el reloj fallara para justificar sobrecostes.</p>" +
      "<p><strong>Ejecutor material:</strong> Mateo Salcedo, capataz de obras. Subió por la escalera omitida, alteró el eje celeste y organizó el traslado de Bercial hacia Valdeluna.</p>" +
      "<p><strong>Resultado:</strong> Emilio Bercial fue localizado con vida. El reloj maestro dejó de mentir cuando todas las pruebas se vieron juntas.</p>" +
      "<div class=\"rank-badge\">" +
        "<span class=\"rank-star\">" + rankIcon + "</span>" +
        "<div><p class=\"eyebrow\">Rango conseguido</p><strong class=\"rank-title\">" + rank + "</strong><p class=\"feedback-copy rank-desc\">" + rankCopy + "</p></div>" +
      "</div>" +
      "<details><summary>Desglose de picarats (" + total + " / " + max + ")</summary>" +
        "<ul class=\"final-score-list\">" + rows + "</ul>" +
      "</details>" +
      "<details><summary>Créditos</summary>" +
        "<p>Investigación: Profesor Aurelio Montes e Inés Galván.<br>Archivo municipal: Elena Oria.<br>Reconstrucción mecánica: equipo técnico de San Teodoro, 1912.</p>" +
      "</details>" +
      "<div class=\"solved-banner\">24 puzles resueltos · Veredicto completo</div>";
  }

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }
})();