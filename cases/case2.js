// CASO 2 — EL ÚLTIMO HUÉSPED
var CASE2 = {
  title: "El Último Huésped",
  year: "1924",
  setting: "Hotel Beaumont, Lyon, Francia",
  tagline: "Lord Ashby muerto en su habitación. La directora lo llama fallo cardíaco.",
  intro: "Diciembre de 1924. El Lord Edmund Ashby fue encontrado sin vida en su habitaci\u00f3n del Hotel Beaumont.\nEl m\u00e9dico de turno firm\u00f3 un paro card\u00edaco. El caso fue cerrado en 24 horas.\nEl fiscal Renard no lo cree. Estos son los archivos que reuni\u00f3 antes de que se los arrebataran.\nLee los documentos. Interroga los testimonios. Descubre qui\u00e9n mat\u00f3 al Lord Ashby.",
  solveFile: "veredicto_ashby.evd",
  startFiles: [
    "/bienvenida.txt",
    "/recepcion/registro_huespedes.txt",
    "/recepcion/nota_celeste.txt",
    "/habitaciones/partes_servicio.txt",
    "/testimonios/testimonio_rene.txt",
    "/cocina/menu_noche.txt",
    "/personal/ficha_rene.txt",
    "/veredicto/veredicto_ashby.evd"
  ],
  hints: [
    "Lee registro_huespedes.txt. La procedencia de Ashby es la Casa Tudor de Cornwall. TUDOR es la primera clave.",
    "cd recepcion \u2192 unlock carta_ashby.enc TUDOR \u2014 La carta de Havermill revela el alias MARFIL.",
    "Usa 'examine ashby' para entender por qu\u00e9 Mourier actu\u00f3 esa noche. Ten\u00eda una cita con el fiscal al d\u00eda siguiente.",
    "Usa 'examine havermill' para entender la cadena de informaci\u00f3n que llev\u00f3 a Ashby a saber demasiado.",
    "Usa 'profile celeste' para ver su historial antes del hotel. El alias Marfil viene de sus actividades en Marsella.",
    "Usa 'search personal celeste' para ver el expediente de la Prefectura de Marsella de 1921. No fue la primera vez.",
    "Usa 'profile rene' para entender por qu\u00e9 el botones es el testigo m\u00e1s importante del caso.",
    "Usa 'examine vela' y 'examine llave'. La vela apagada y la llave maestra son los dos detalles que Ren\u00e9 vio.",
    "El botones Ren\u00e9 vio a Celeste salir de la habitaci\u00f3n 101. Su segundo testimonio est\u00e1 en /testimonios.",
    "Usa 'search testimonio gautier' \u2014 el hu\u00e9sped de la habitaci\u00f3n 102 tambi\u00e9n vio a Mourier salir del 101 esa noche.",
    "Usa 'search entradas noche' para leer la nota del portero sobre los dos hombres con el ba\u00fal a las 02:15.",
    "Usa 'search ingredientes amargo' para encontrar el pedido especial que Celeste hizo a cocina.",
    "Usa 'examine infusi\u00f3n' y 'examine cicuta' para entender c\u00f3mo funciona el veneno y por qu\u00e9 no lo detect\u00f3 el m\u00e9dico oficial.",
    "Usa 'search medicina cicuta' para encontrar el informe real de la Dra. Strauss.",
    "Usa 'examine s\u00f3tano' y 'examine t\u00fainel' para entender la ruta de salida de la mercanc\u00eda por el r\u00edo Sa\u00f4ne.",
    "Busca 'search contrabando bodega' y luego 'search grabaci\u00f3n marfil' para atar el caso.",
    "Usa 'examine brecht' y 'profile brecht' para entender qu\u00e9 papel ten\u00eda el alem\u00e1n en la operaci\u00f3n.",
    "Usa 'search cuentas hotel' para ver los ingresos no declarados. El hotel Beaumont era una fachada de contrabando.",
    "cd habitaciones \u2192 unlock nota_personal_ashby.enc CORNWALL para leer la nota que Ashby dej\u00f3 bajo el colch\u00f3n.",
    "Usa 'search carta havermill' para leer la carta que Havermill envi\u00f3 al fiscal despu\u00e9s de la muerte de Ashby.",
    "Usa 'timeline' para ver la cronolog\u00eda del caso. La interceptaci\u00f3n de la carta de Havermill fue lo que destap\u00f3 el crimen.",
    "El alias MARFIL es la contrase\u00f1a del veredicto, pero necesitas todas las pruebas primero.",
    "Comandos extra: map, timeline, evidence, profile [nombre], examine [t\u00e9rmino]."
  ],
  map: "HOTEL BEAUMONT — PLANO DE PLANTA\n" +
    "Lyon, Francia / Diciembre de 1924\n" +
    "═══════════════════════════════════════════════════\n" +
    "PLANTA BAJA:\n" +
    "  ┌────────────┐  ┌────────────┐  ┌──────────┐\n" +
    "  │ RECEPCIÓN  │  │   SALON    │  │  COCINA  │\n" +
    "  │ (Celeste)  │  │ Principal  │  │ (Fabre)  │\n" +
    "  └─────┬──────┘  └────────────┘  └──────────┘\n" +
    "        │\n" +
    "  ┌─────┴──────┐  ┌────────────┐\n" +
    "  │  SÓTANO B  │  │ BODEGA /   │\n" +
    "  │ (restringido)│ │  T�NELES  │\n" +
    "  └────────────┘  └────────────┘\n" +
    "\n" +
    "PLANTA 1:\n" +
    "  ┌──────────┐  ┌──────────┐  ┌──────────────┐\n" +
    "  │  101     │  │  102     │  │  SUITE       │\n" +
    "  │ Lord     │  │ Gautier  │  │  Brecht      │\n" +
    "  │ Ashby ✝  │  │ (arte)   │  │ (colecci�n)  │\n" +
    "  └──────────┘  └──────────┘  └──────────────┘\n" +
    "  ┌──────────────────────────┐\n" +
    "  │ DESPACHO PRIVADO Celeste │\n" +
    "  └──────────────────────────┘",
  profiles: {
    ashby: "LORD EDMUND ASHBY — Víctima\nEdad: 62. Nacionalidad: británica. Casa solariega en Tudor, Cornwall.\nInvestigaba por cuenta propia una red de contrabando de arte y material biológico.\nContactaba con el fiscal Renard de forma confidencial.\nMurió la noche del 11 al 12 de diciembre de 1924 en la habitación 101.",
    celeste: "CELESTE MOURIER — Directora del Hotel Beaumont\nEdad: 47. Alias de operación: Marfil (contratos de Marsella, 1921).\nDirigió un club privado en Marsella hasta 1921, investigada por tráfico de marfil africano.\nSe casó con Henri Mourier (fallecido 1923) y heredó el hotel.\nOrganizaba una red de contrabando de arte y material biológico usando el sótano del hotel.",
    rene: "RENE VALMONT — Botones del Hotel\nEdad: 19. Hijo de un trabajador local. Lleva 2 años en el hotel.\nTestigo clave: entregó la infusión a Ashby y vio a Celeste salir de la habitación a la 01:00.\nSabía del contrabando del sótano pero no entendía lo que implicaba.\nFue la fuente más importante del fiscal Renard.",
    brecht: "VIKTOR BRECHT — Huésped, Suite Principal\nEdad: 53. Comerciante de arte de Berlín (fachada). En realidad, traficante internacional.\nSocio de Celeste: aportaba las 'obras de arte' que en realidad ocultaban material de contrabando.\nFirmó el contrato privado de 1923 con Celeste bajo el canal MARFIL.\nSabía del plan para eliminar a Ashby pero no participó directamente.",
    strauss: "DRA. IDA STRAUSS — Médica Residente del Hotel\nEdad: 36. Austriaca. Lleva 3 años en el hotel sin contrato formal.\nVio signos claros de envenenamiento en el cuerpo de Ashby pero firmó paro cardíaco bajo presión.\nSu testimonio real fue tomado en secreto por el fiscal Renard.\nFue la primera en sospechar de la infusión de hierbas.",
    fabre: "CHEF JACQUES FABRE — Chef del Hotel\nEdad: 51. Francés. 20 años en el hotel. Leal al anterior propietario.\nPreparó la cena de Ashby sin saber lo que había en el ingrediente especial que Celeste le entregó.\nSu nota al margen del pedido fue la primera prueba física del envenenamiento."
  },
  examine: {
    infusion: "La infusión de hierbas que bebió Lord Ashby era una solicitud especial.\nCeleste Mourier la entregó personalmente al chef Fabre con instrucciones de incluirla.\nSi contenía extracto de cicuta (hemlock), el efecto sería: paresia progresiva, fallo respiratorio.\nEn bebida caliente, la cicuta se disuelve completamente y no deja residuo visible.",
    "habitacion 101": "La habitación 101 era la favorita de Ashby en todas sus visitas al Beaumont.\nTenía vista al río y una mesita junto al sillón donde Ashby solía leer por las noches.\nLa taza de infusión encontrada estaba a medio terminar. La vela del escritorio estaba apagada.\nAshby siempre dejaba la vela encendida toda la noche según René Valmont.",
    llave: "La llave maestra del nivel B fue la que usó Celeste para entrar a la habitación 101 a la 01:00.\nRené la vio salir con esa llave. Solo Celeste y el jefe de mantenimiento tenían copias.\nDespués del incidente, esa llave no fue incluida en el inventario de llaves entregado a la policía.",
    vela: "La vela del escritorio de Ashby estaba apagada cuando René vio a Celeste salir de la habitación.\nAshby nunca la apagaba antes de dormir — eso era bien sabido por todo el personal.\nLa apagaron después de que Ashby ya no pudiera encenderla. Detalle revelador.",
    cicuta: "La cicuta (Conium maculatum) produce paresia muscular ascendente y fallo respiratorio.\nEn dosis altas en bebida caliente actúa en 2-4 horas. Imita un fallo cardíaco.\nEl médico legal que examinó a Ashby era de confianza de Celeste y no hizo panel toxicológico.\nLa Dra. Strauss reconoció los signos aunque no los reportó en el informe oficial.",
    marfil: "El alias operativo de Celeste Mourier desde sus actividades en Marsella (1919-1921).\nEra el nombre de su canal de contrabando de marfil africano.\nReutilizó el mismo alias para sus operaciones en el hotel Beaumont con Viktor Brecht.\nEste nombre aparece en el contrato privado del sótano y en la grabación de Renard.",
    brecht: "Viktor Brecht llegaba al hotel con 'obras de arte' de alto valor.\nEn realidad, las obras ocultaban material de contrabando que salía por el túnel C al río Saône.\nEl beneficio era 60-40 a favor de Brecht. Celeste recibía el 40%.\nBrecht sabía que Ashby era una amenaza pero no quería mancharse las manos directamente.",
    sotano: "El sótano norte del Hotel Beaumont tenía tres túneles excavados ilegalmente en 1922.\nCeleste financió las obras bajo el nombre Dupont. Túnel C llegaba al muelle privado del río.\nViktor Brecht usaba su suite en el primer piso como punto de inspección antes del traslado.\nRené Valmont firmaba los registros del nivel B sin saber lo que implicaba.",
    havermill: "Sir George Havermill era el contacto de Lord Ashby en Londres.\nLe envió una carta cifrada con información sobre el pasado de Celeste en Marsella.\nFue la carta la que alertó a Celeste de que Ashby sabía demasiado.\nEl contenido de la carta (cifrada con TUDOR) fue lo que desató el asesinato.",
    polvo: "El frasco sin etiqueta que Celeste entregó al chef contenía extracto concentrado de cicuta.\nLas instrucciones decían 'disolverlo completamente en infusión caliente sin dejar residuo visible'.\nEl chef Fabre lo mezcló sin saber su naturaleza. Lo creyó un 'digestivo amargo europeo'.\nEl frasco nunca fue devuelto ni encontrado.",
    tunel: "El túnel C del sótano conectaba el hotel con el muelle privado del río Saône.\nEra la vía de salida de las mercancías de contrabando: obras de arte, objetos orgánicos, marfil.\nCeleste financió su construcción ilegalmente en 1922 bajo nombre falso (Dupont).\nRenard descubrió la existencia de los túneles gracias a la nota oculta de Ashby.",
    rene: "René Valmont es el testimonio más importante del caso.\nVio a Celeste salir de la habitación 101 a la 01:00 con la llave maestra.\nLa vela del escritorio de Ashby estaba apagada. Eso era imposible si Ashby dormía.\nAdemás firmó registros del nivel B que implicaban el contrabando.",
    autopsia: "El médico que firmó la autopsia era un contacto de Celeste en Lyon.\nFirmó 'paro cardíaco' sin panel toxicológico y sin segunda opinión.\nLa Dra. Strauss hizo su propio examen privado y documentó los signos reales: pupilas desiguales, espuma.\nEse informe fue el que el fiscal Renard guardó como prueba clave.",
    ashby: "Lord Ashby viajaba regularmente al Hotel Beaumont como parte de su investigación confidencial.\nHabía encontrado la conexión entre Celeste, el contrabando y el canal MARFIL a través de Havermill.\nLa noche de su muerte estaba a punto de reunirse con el fiscal Renard al día siguiente.\nCeleste lo supo a través de uno de sus empleados y actuó esa misma noche."
  },
  timeline: [
    { time: "03/1923", event: "Celeste y Brecht firman contrato privado MARFIL en el sótano del hotel.", trigger: "/sotano/contrato_oculto.enc" },
    { time: "09/1924", event: "Havermill comienza a investigar el pasado de Celeste en Marsella.", trigger: "/recepcion/carta_ashby.enc" },
    { time: "01/12/1924", event: "Lord Ashby llega al Hotel Beaumont. Solicita habitación 101 como siempre.", trigger: "/recepcion/registro_huespedes.txt" },
    { time: "08/12/1924", event: "Havermill envía a Ashby la carta con información sobre el alias MARFIL.", trigger: "/recepcion/carta_ashby.enc" },
    { time: "09/12/1924", event: "Celeste intercepta o descubre que Ashby tiene la carta de Havermill.", trigger: "/testimonios/grabacion_celeste.enc" },
    { time: "10/12/1924", event: "Celeste entrega al chef Fabre un frasco sin etiqueta para la infusión especial del 101.", trigger: "/cocina/pedido_especial.txt" },
    { time: "11/12  22:10", event: "René Valmont entrega la cena y la infusión especial al Lord Ashby.", trigger: "/habitaciones/partes_servicio.txt" },
    { time: "11/12  22:45", event: "Ashby solicita agua caliente. Se le sirve normalmente.", trigger: "/habitaciones/partes_servicio.txt" },
    { time: "11/12  01:00", event: "René ve a Celeste salir de la habitación 101 con la llave maestra. Vela apagada.", trigger: "/testimonios/testimonio_rene.txt" },
    { time: "12/12  07:00", event: "Ashby no baja al desayuno.", trigger: "/habitaciones/partes_servicio.txt" },
    { time: "12/12  09:15", event: "Puerta forzada. Lord Ashby hallado sin vida en su sillón.", trigger: "/habitaciones/partes_servicio.txt" },
    { time: "12/12  09:30", event: "Celeste llama al médico de confianza antes que a la policía.", trigger: "/testimonios/testimonio_ida.txt" },
    { time: "12/12  10:00", event: "Informe oficial firmado: paro cardíaco. Caso cerrado en 24 horas.", trigger: "/testimonios/testimonio_ida.txt" },
    { time: "14/12  1924", event: "Fiscal Renard graba a Celeste y Brecht hablando del 'canal MARFIL'.", trigger: "/testimonios/grabacion_celeste.enc" }
  ],
  filesystem: {
    type: "dir",
    children: {
      "bienvenida.txt": { type: "file", content: "HOTEL BEAUMONT / ARCHIVO INTERNO DEL CASO\nDiciembre, 1924 — Lyon, Francia\n\nHas accedido al archivo del fiscal D. Renard sobre la muerte del Lord Edmund Ashby.\nFue sellado en 1924 y enviado al tribunal de apelación en 1926.\nEl caso no fue reabierto oficialmente hasta 1931.\n\nNota del fiscal Renard (prefacio del expediente):\n'Según el médico fue un paro cardíaco.\nSegún yo, nadie muere así después de una cena ligera en un hotel de cinco estrellas.\nHabía algo en esa taza de infusión. Lo supe cuando vi la taza aún caliente.\nY había algo en la forma en que la directora limpiaba ya la habitación\nantes de que llegara la policía.'\nFirmado: D. Renard, Fiscal de Instrucción, Lyon.\n\nDirectorios: /recepcion  /habitaciones  /cocina  /sotano  /testimonios  /personal  /finanzas  /veredicto" },
      recepcion: {
        type: "dir",
        children: {
          "registro_huespedes.txt": { type: "file", content: "REGISTRO DE HUÉSPEDES — DICIEMBRE DE 1924\nHotel Beaumont, Lyon\n\nHabitación 101: Lord Edmund Ashby / Reino Unido\n  Llegada: 1 de diciembre\n  Procedencia declarada: Casa solariega Tudor, Cornwall\n  Acompañante: ninguno (viaja solo esta vez; Lady Clara permanece en Londres)\n  Nota: huésped frecuente desde 1919. Solicita siempre la habitación 101.\n  Paga en efectivo por adelantado. Nunca firma el libro con pluma de la recepción.\n  Lleva una cartera de cuero negro con papeles. Nunca la deja en la habitación.\n\nHabitación 102: M. Pierre Gautier / Lyon\n  Comerciante de arte. Quinto viaje al hotel en este año.\n\nSuite Principal: Sr. Viktor Brecht / Berlín\n  Comerciante y coleccionista. Lleva equipaje voluminoso: cuatro cajas grandes.\n  Solicitó acceso permanente a la bodega para 'catas privadas de vino'.\n\nNOTA DE C. MOURIER (directora):\n  'El Lord no debe ser molestado bajo ningún concepto.\n   Ninguna visita a su habitación sin su solicitud expresa.\n   Dejad que el cuarto se airee después de cada cena del servicio.'" },
          "nota_celeste.txt": { type: "file", content: "NOTA INTERNA — DIRECCIÓN\nFirmada por: Celeste Mourier, Directora\n\nAl personal de noche (11 al 12 de diciembre):\n\nLa llave maestra del nivel B no debe usarse después de las 22:00\nsalvo emergencia o autorización mía directa y por escrito.\n\nCiertos proveedores acceden por la puerta de servicio entre las 02:00 y las 04:00.\nNo se registra en el libro de entradas del turno nocturno.\nLa discreción es parte del contrato de empleo en este hotel.\n\nRENÉ: la cena de la habitación 101 debe servirse exactamente a las 22:10.\nLa infusión de hierbas es una solicitud especial del huésped. No la modifiques.\nDevuélveme la bandeja tú mismo, sin dejarla en el pasillo.\n\nC. Mourier" },
          "carta_ashby.enc": { type: "file", locked: true, password: "TUDOR", content: "[CARTA PERSONAL DE LORD ASHBY — DESCIFRADA]\nDe: Sir George Havermill, Londres / 8 de diciembre de 1924\n\nEdmund:\n\nHe encontrado lo que me pediste sobre la Mourier.\nAntes de venir al Beaumont dirigía un club privado en Marsella\nconocido por ser una cubierta para tráfico de marfil africano de la colonia.\nFue investigada en 1921 pero nunca procesada. El testigo clave desapareció tres días antes del juicio.\n\nEl nombre que usaba entonces: Celeste Dupont.\nPero sus contratos más antiguos (1919-1920) llevan otro nombre: Marfil.\nEra su alias de operación. No es un apodo casual: es la firma de toda su red.\n\nActualmente usa el hotel como punto de transferencia con un alemán llamado Brecht.\nLas 'cajas de arte' que Brecht lleva al hotel salen por un túnel subterráneo que conecta\ncon el muelle privado del río Saône. Nadie revisa el contenido.\n\nTen mucho cuidado, Edmund. Esa mujer sabe cubrir sus huellas.\nY si sabe que tú lo sabes, actuará.\n\nTe llamo en cuanto tenga más detalles.\n\nGeorge" },
          "libro_entradas.txt": { type: "file", hidden: true, content: "LIBRO DE ENTRADAS — PUERTA DE SERVICIO\nHotel Beaumont / Turno de noche 11-12 de diciembre, 1924\n\nRegistro oficial:\n  23:30  Entrega de hielo para cocina. Proveedor habitual. Firmado: T. Marié.\n  01:45  Sin entradas registradas.\n\nNOTA MANUSCRITA (letra del portero nocturno, F. Blanc):\n  'A las 02:15 entraron por puerta de servicio dos hombres con un baúl grande.\n   La señora Mourier les acompañó personalmente hasta el sótano.\n   No se registró porque ella me dijo que no era necesario.\n   Llevo siete años en este hotel y eso nunca ha pasado antes de que ella llegara.'\n\nOtra nota al margen:\n  'Los mismos dos hombres salieron a las 03:40. Sin el baúl.\n   Salieron por la misma puerta con una caja plana y envuelta en arpillera.'" }
        }
      },
      habitaciones: {
        type: "dir",
        children: {
          "partes_servicio.txt": { type: "file", content: "PARTES DE SERVICIO — HABITACIÓN 101\nTurno del 11 al 12 de diciembre, 1924\n\n22:10  Entrega de cena e infusión especial — René Valmont\n22:45  Solicitud de agua caliente adicional desde habitación 101 — servida por René\n23:30  Silencio confirmado en todo el pasillo\n01:00  René reporta haber visto luz bajo la puerta de habitación 101 — INUSUAL\n        Vio a la Sra. Mourier salir de la habitación con la llave maestra\n07:00  Lord Ashby no baja al desayuno\n09:15  Puerta forzada a petición de René Valmont. Lord Ashby hallado sin vida en el sillón.\n        La taza de infusión: a medio terminar, sobre la mesita.\n        La vela del escritorio: APAGADA. Siempre la dejaba encendida.\n\nObservación del encargado (J. Petit):\n  'La taza de infusión tenía un olor extraño cuando la recogí. No es el olor normal\n   de la menta o el jengibre. Más amargo. No lo anoté en el momento. Debería haberlo hecho.'" },
          "informe_medico.txt": { type: "file", hidden: true, content: "INFORME MÉDICO CONFIDENCIAL\nDra. Ida Strauss, médica residente Hotel Beaumont\nFecha: 12 de diciembre de 1924\n\nPACIENTE: Lord Edmund Ashby, 62 años\nHora estimada de muerte: entre las 23:30 y las 01:00\n\nOBSERVACIONES CLÍNICAS:\n  Pupila derecha: dilatada de forma desigual respecto a la izquierda\n  (indicador toxicológico de primer orden)\n  Lividez corporal: consistente con posición sentado-recostado, fija\n  Ligera espuma seca en comisura labial izquierda\n  Leve cianosis en puntas de dedos\n  Sin signos de lucha física\n\nDIAGNÓSTICO OFICIAL: fallo cardíaco (cedido bajo presión de Mourier)\n\nNOTA PRIVADA DE LA DRA. STRAUSS:\n  El patrón de pupila asimétrica y la espuma labial son marcadores clásicos de\n  envenenamiento por alcaloide vegetal. He visto este patrón dos veces en Viena.\n  La dosis compatible sería: extracto de cicuta en bebida caliente.\n  El efecto: paresia muscular progresiva en 45-90 minutos, fallo respiratorio.\n  En personas de edad avanzada, imita perfectamente un paro cardíaco.\n\n  No puse esto en el informe oficial porque la Sra. Mourier me llamó antes de que llegara\n  la policía y me dijo que el hotel no necesitaba un escándalo.\n  Me recordó que llevo tres años aquí sin contrato formal.\n  Eso fue una amenaza. Y yo la obedecí. Y lo lamentaré siempre." },
          "nota_personal_ashby.enc": { type: "file", hidden: true, locked: true, password: "CORNWALL", content: "[NOTA PERSONAL DE LORD ASHBY — ENCONTRADA BAJO EL COLCHÓN]\nEscrita la noche del 11 de diciembre de 1924\n\nSi alguien lee esto antes que yo, ya sé lo que significa.\n\nHe visto el libro de cuentas de Celeste en la bodega.\nLo encontré por accidente cuando subí al salón la semana pasada\ny una de las puertas del sótano estaba mal cerrada.\n\nCeleste usa el sótano norte como punto de transferencia.\nBrecht llega con arte de colección y se va con cajas marcadas para envío diplomático.\nNadie revisa el contenido. Nadie pregunta.\n\nHe visto el libro de cuentas oculto. Lo guarda detrás del panel de roble de la bodega.\nEl acceso al panel está codificado con el nombre del propio hotel: BEAUMONT.\n\nMañana por la mañana veo a Renard y le entrego todo lo que tengo.\nHavermill viene en tren desde París el 15.\n\nSi algo me sucede esta noche, buscad a René Valmont.\nEl botones sabe más de lo que parece.\n\nEdmund, Lord Ashby" }
        }
      },
      cocina: {
        type: "dir",
        children: {
          "menu_noche.txt": { type: "file", content: "MENÚ DE CENA ESPECIAL — 11 DE DICIEMBRE, 1924\nPreparado por: Chef Jacques Fabre / Hotel Beaumont\n\nHabitación 101 — Lord Ashby:\n  — Consommé de ave con verduras de temporada\n  — Filete de lenguado al vapor con mantequilla de alcaparras\n  — Queso manchego con mermelada de membrillo\n  — Infusión de hierbas (solicitud especial del huésped)\n    Preparada con extracto de flores secas enviado por la dirección\n    en un frasco sin etiqueta. Instrucción: disolver completamente en agua muy caliente.\n\nNota del chef:\n  'No es la primera vez que la directora me envía ingredientes para infusiones especiales.\n   Siempre para el mismo tipo de huéspedes: los que hacen demasiadas preguntas.\n   Cuando le pregunté qué era ese polvo, me dijo que era un digestivo europeo muy amargo.\n   No tenía color. No tenía olor notable. Se disolvió perfectamente.\n   Dios mío. Si hubiera sabido.'" },
          "pedido_especial.txt": { type: "file", hidden: true, content: "PEDIDO DE INGREDIENTES — EXTERNO\nDe: C. Mourier, Dirección del Hotel Beaumont\nPara: Uso exclusivo en servicio privado, habitación 101, 11 de diciembre\n\n1 frasco (vidrio, 20 ml) de polvo blanco cristalino — SIN ETIQUETA\nInstrucción específica:\n  Disolver completamente en infusión de hierbas caliente (70-80°C).\n  Sin dejar residuo visible en el fondo de la taza.\n  Frasco: devolver a la dirección inmediatamente tras su uso.\n\nObservación de la directora al chef Fabre:\n  'Es un digestivo amargo de fórmula europea. Ayuda al corazón en personas mayores.'\n\nNota del chef al margen (rotulador azul):\n  'Cuando salí a buscar las hierbas, Voss... perdón, Mourier...\n   tuvo acceso a la infusión ya preparada durante al menos 3 minutos.\n   No me quedé mirando. Fue su encargo. Confié en ella.\n   Ahora no confío en nada de lo que me dijo.'" },
          "receta_cicuta.txt": { type: "file", hidden: true, content: "NOTA DE INVESTIGACIÓN — FISCAL RENARD\nFecha: 15 de diciembre de 1924\n\nHe consultado con el toxicólogo Dr. Clements sobre el extracto encontrado en la taza.\n\nEl residuo recuperado del fondo de la taza de la habitación 101\nes compatible con Conium maculatum (cicuta) en forma concentrada.\nEl Dr. Clements confirma:\n  — El extracto se disuelve completamente en agua a más de 65°C\n  — No deja sabor en presencia de hierbas aromáticas fuertes\n  — En personas mayores de 60 años con la dosis hallada: paresia en 45-90 minutos,\n    fallo respiratorio y paro cardíaco aparente en 2-3 horas\n  — No detectable en autopsia básica sin panel toxicológico específico\n\nLa taza fue recogida por mí antes de que Mourier pudiera limpiarla.\nFue el mayor error que cometió: no inspeccionar la taza antes de que yo llegara." }
        }
      },
      sotano: {
        type: "dir",
        children: {
          "inventario_bodega.txt": { type: "file", hidden: true, content: "INVENTARIO PARCIAL — BODEGA B\nTurno nocturno del 7 al 13 de diciembre, 1924\n\nENTRADAS REGISTRADAS:\n  12 cajas de vino francés (proveedor legít. Gautier Bros.)\n  3 bultos sin etiqueta (acceso Beaumont norte, zona restringida)\n  1 baúl grande marcado 'arte colonial — frágil' (entrada Brecht)\n\nSALIDAS NO REGISTRADAS EN LIBRO OFICIAL:\n  2 bultos marcados P.D. (valija diplomática)\n  1 caja plana envuelta en arpillera (salida nocturna, 03:40)\n\nNota manuscrita encontrada en el inventario:\n  'El canal va por Brecht. El corte es 40-60.\n   René firma todos los registros del nivel B.'\n\nNOTA DE RENARD:\n  René Valmont firmaba esos registros sin saber lo que implicaban.\n  Celeste usaba su nombre para cubrir las entradas y salidas nocturnas." },
          "mapa_tuneles.enc": { type: "file", hidden: true, locked: true, password: "BEAUMONT", content: "[MAPA DE TÚNELES — DESCIFRADO]\nInformación obtenida de planos de obra clandestinos (1922)\n\nEl Hotel Beaumont tiene tres salidas subterráneas no declaradas:\n  Túnel A: hacia la lavandería municipal (uso de carga)\n  Túnel B: hacia el garaje privado de Brecht (en la calle trasera)\n  Túnel C: hacia el muelle privado del río Saône (uso principal de contrabando)\n\nEl túnel C fue ampliado en 1922 sin permiso de obra.\nCeleste financió los trabajos bajo el nombre falso 'C. Dupont'.\nLos obreros cobraron en efectivo y firmaron un acuerdo de silencio.\n\nRuta de contrabando operativa (diciembre 1924):\n  1. Mercancías entran como equipaje de Brecht (recepción)\n  2. Contenido se reclasifica en bodega B (zona restringida)\n  3. Sale por túnel C al muelle. Embarcación privada espera cada dos semanas.\n\nTestigo único vivo de la ruta completa: René Valmont." },
          "contrato_oculto.enc": { type: "file", hidden: true, locked: true, password: "VALMONT", content: "[CONTRATO PRIVADO — DESCIFRADO]\nEntre Celeste Mourier (alias operativo: Marfil) y Viktor Brecht\nFecha: Marzo de 1923 / Lugar: Bodega B, Hotel Beaumont\n\nOBJETO:\nAcuerdo de tránsito de mercancías clasificadas a través del Hotel Beaumont\nmediante el canal de túneles del sótano norte.\n\nRETRIBUCIÓN:\n  40% para Mourier (logística, cobertura, personal, corrupción de funcionarios)\n  60% para Brecht (mercancías, contactos de compra y venta, transporte fluvial)\n\nCLÁUSULA DE CONFIDENCIALIDAD:\n  'Cualquier huésped, empleado o tercero que descubra esta operación\n   será neutralizado por las partes firmantes usando los medios que la situación requiera.'\n\nFirma de Mourier: Celeste [rubricado con 'Marfil']\nFirma de Brecht: V. Brecht\n\nNota de Brecht (manuscrita al margen):\n  'Mourier ya neutralizó a un testigo incómodo en Marsella en 1921.\n   Cuando dice neutralizar, lo dice en serio.'" }
        }
      },
      testimonios: {
        type: "dir",
        children: {
          "testimonio_rene.txt": { type: "file", content: "TESTIMONIO DE RENÉ VALMONT\nBotones del Hotel Beaumont, 19 años\nTranscripción: D. Renard, Fiscal de Instrucción / 12 de diciembre, 1924\n\nRenard: René, ¿a qué hora sirvió la cena al Lord Ashby la noche del 11?\nRené:   A las 22:10, señor. La cena y la infusión especial. Como me habían indicado.\n\nRenard: ¿Quién le indicó servir esa infusión especial?\nRené:   La señora Mourier personalmente. Me la entregó ya preparada, en una taza de plata con tapa.\n        Me dijo que era una solicitud especial del huésped. Que no la tocara.\n\nRenard: ¿Vio usted algo inusual después?\nRené:   Hacia la una de la madrugada estaba en el pasillo de la primera planta.\n        Vi a la señora Mourier salir de la habitación 101 con la llave maestra.\n\nRenard: ¿Qué dijo cuando usted la vio?\nRené:   Que el señor descansaba y no debía ser molestado. Que ya había apagado la vela.\n        Pero la vela del escritorio de milord... él nunca la apagaba.\n        En seis visitas, jamás la apagó antes de las tres de la mañana.\n\nRenard: ¿Está usted seguro de que era la llave maestra?\nRené:   Completamente. Es la llave más grande del hotel. La reconocería en cualquier lugar." },
          "testimonio_ida.txt": { type: "file", hidden: true, content: "TESTIMONIO DE DRA. IDA STRAUSS\nMédica residente Hotel Beaumont / 14 de diciembre, 1924\nTranscripción: D. Renard, Fiscal de Instrucción\n\nRenard: Dra. Strauss, ¿por qué su informe oficial dice paro cardíaco?\nStrauss: Porque la señora Mourier me llamó antes de que llegara la policía.\n         Me dijo que registrara paro cardíaco. Que 'el hotel no necesitaba esto'.\n\nRenard: ¿Y usted accedió?\nStrauss: Llevo tres años en este hotel sin contrato formal. Ella lo sabe.\n         Fue una amenaza velada pero perfectamente clara.\n\nRenard: ¿Qué observó usted realmente en el cuerpo del Lord?\nStrauss: Pupilas desiguales. Ligera espuma seca en la comisura labial.\n         Cianosis leve en las yemas de los dedos. Lividez fija en posición sentada.\n         Ese patrón no es un paro cardíaco natural.\n         Lo he visto en dos casos de envenenamiento por alcaloide en Viena.\n\nRenard: ¿Puede ser más específica?\nStrauss: Con la infusión caliente y la edad del Lord... diría cicuta. Conium.\n         La dosis exacta dependería del peso del sujeto. Pero el efecto es el mismo:\n         paresia progresiva. La víctima no puede moverse ni pedir ayuda. Sigue consciente.\n         El corazón falla último.\n\nRenard: ¿Sabe usted si alguien más vio el estado real del cuerpo?\nStrauss: El fiscal. Y René Valmont, cuando forzó la puerta." },
          "testimonio_gautier.txt": { type: "file", hidden: true, content: "TESTIMONIO DE PIERRE GAUTIER\nComerciante de arte, huésped habitación 102 / 13 de diciembre, 1924\nTranscripción: D. Renard, Fiscal de Instrucción\n\nRenard: Señor Gautier, ¿escuchó algo inusual la noche del 11 al 12?\nGautier: Oí pasos en el pasillo hacia la una de la madrugada. Muy silenciosos.\n         Miré por la rendija de mi puerta. Vi a la Mourier con una llave y una bolsa pequeña.\n\nRenard: ¿Podía ver a qué habitación entraba?\nGautier: A la del 101. No me cabe duda. Estuvo dentro unos cinco minutos.\n          Cuando salió, llevaba la misma bolsa pero más llena.\n\nRenard: ¿No le pareció extraño?\nGautier: Aquí pasan cosas extrañas constantemente, fiscal. Las cajas de Brecht.\n          Los proveedores de madrugada. Pensaba que era parte del negocio de este hotel.\n\nRenard: ¿Usted conoce a Brecht?\nGautier: Lo conozco de ferias de arte. Trafica con piezas cuyo origen prefiere no explicar.\n          Yo nunca hago negocios con él. Demasiado arriesgado." },
          "grabacion_celeste.enc": { type: "file", hidden: true, locked: true, password: "RENE", content: "[GRABACIÓN INTERCEPTADA — CELESTE MOURIER Y VIKTOR BRECHT]\nGrabada por D. Renard con micrófono oculto / 14 de diciembre de 1924\n\nCeleste: Todo fue limpio. El médico firmó lo que corresponde.\nBrecht:  ¿Y el botones? Ese chico estuvo en el pasillo a la una.\nCeleste: René no sabe nada concreto. Solo llevó la taza. No sabe lo que había dentro.\n          Si habla, será su palabra contra la mía.\n\nBrecht:  Si alguien conecta al Lord con Havermill en Londres...\nCeleste: No podrán. Tomé los papeles de la cartera antes de que llegara la policía.\n          Los quemé esa misma mañana. No queda nada del lado de Ashby.\n\nBrecht:  El siguiente envío es el sábado. La embarcación espera.\nCeleste: El sábado ya no es seguro. Hay que posponer dos semanas.\n          Pero la operación sigue adelante.\n\nCeleste (en voz baja): La operación siempre sigue adelante. Nombre limpio: MARFIL.\n          Como siempre. Como en Marsella.\n\n[Fin de grabación]" }
        }
      },
      personal: {
        type: "dir",
        children: {
          "ficha_rene.txt": { type: "file", content: "FICHA DE EMPLEADO — RENÉ VALMONT\nCargo: Botones / Asistente nocturno\nEdad: 19 años. Natural de Lyon.\nAntigüedad: 2 años en el hotel.\n\nNOTA DEL ENCARGADO:\n  'René es el empleado más confiable que hemos tenido en este turno.\n   Puntual, discreto, no hace preguntas innecesarias. Pero observa todo.'\n\nNOTA DEL FISCAL RENARD (adjunta):\n  'Valmont es el testigo clave del caso. Sin su testimonio, no hay caso.\n   La directora lo sabía. Por eso le ofreció un aumento la mañana del 12.\n   Él lo rechazó. Eso dice todo lo que necesito saber de este joven.'" },
          "expediente_celeste.txt": { type: "file", hidden: true, content: "EXPEDIENTE PREVIO — CELESTE MOURIER (alias Dupont / Marfil)\nFuente: Archivos de la Prefectura de Marsella, 1921\n\nINVESTIGACIÓN DE 1921:\n  Mourier fue investigada por dirección de red de tráfico de marfil africano\n  a través del club 'Le Meridien' en el puerto de Marsella.\n  Acusación formal presentada en octubre de 1921.\n\n  RESOLUCIÓN: caso archivado por falta de pruebas.\n  Circunstancia: el testigo principal desapareció tres días antes del juicio.\n  Otro testigo retiró su declaración sin explicacion.\n\nINFORMACIÓN ADICIONAL (informe de inteligencia, confidencial):\n  'Mourier (alias Marfil) contaba con contactos en la prefectura de Marsella.\n   Se sospecha soborno de funcionarios y neutralización de testigos.\n   No se pudo probar. Se recomienda vigilancia discreta.'\n\nNOTA DEL FISCAL RENARD:\n  Este expediente confirma el patrón. Marsella en 1921. Lyon en 1924.\n  El mismo método. El mismo silencio. El mismo nombre: Marfil." }
        }
      },
      finanzas: {
        type: "dir",
        children: {
          "cuentas_hotel.txt": { type: "file", hidden: true, content: "EXTRACTO DE CUENTAS — HOTEL BEAUMONT\nPeríodo: enero-diciembre de 1924\nFuente: libro de contabilidad incautado por el fiscal Renard\n\nINGRESOS DECLARADOS:\n  Hospedaje: 42.000 FFR\n  Restauración: 18.000 FFR\n  Servicios varios: 6.500 FFR\n\nINGRESOS NO DECLARADOS (cuenta paralela, libro de tapa azul):\n  Enero:     12.000 FFR  — Comision B1\n  Marzo:      8.500 FFR  — Comision B1\n  Junio:     15.000 FFR  — Comision B2\n  Septiembre: 9.000 FFR  — Comision B2\n  Noviembre: 22.000 FFR  — Comisión B2\n\nNOTA DEL FISCAL:\n  'Comisión B1' y 'Comisión B2' corresponden a los dos envíos de contrabando\n  realizados en la primera y segunda mitad del año.\n  La suma no declarada es más del 50% del ingreso real del hotel.\n  El hotel Beaumont es, en la práctica, una fachada." },
          "carta_havermill.txt": { type: "file", hidden: true, content: "CARTA COMPLEMENTARIA — SIR GEORGE HAVERMILL\nDe: Londres / 18 de diciembre de 1924 (dirigida al fiscal Renard)\n\nFiscal Renard:\n\nMe llegó la noticia de la muerte del Lord Ashby.\nLe envié información seis días antes que podía comprometer su seguridad.\nLamento no haberlo advertido con más claridad del peligro inmediato.\n\nPuedo confirmarle todo lo que Edmund sospechaba:\nCeleste Mourier operó bajo el alias Marfil desde 1919 hasta 1921 en Marsella.\nDespués de la investigación, se movió a Lyon y cambió de nombre (por matrimonio).\nPero el método es el mismo. El canal es el mismo. El alias es el mismo.\n\nHe contactado con un agente de la Sûreté Nacional.\nEste caso no puede cerrarse con un paro cardíaco.\n\nSir George Havermill\nP.D.: Guarde bien esta carta. Ya me han contactado dos personas preguntando por mí." }
        }
      },
      veredicto: {
        type: "dir",
        children: {
          "veredicto_ashby.evd": { type: "file", locked: true, password: "MARFIL", content: "VEREDICTO FINAL — CASO LORD ASHBY\nD. Renard, Fiscal de Instrucción, Lyon\nFecha de presentación al tribunal: 22 de enero de 1925\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nRESPONSABLE PRINCIPAL: Celeste Mourier\n               Directora del Hotel Beaumont, Lyon\n               Alias de operación: MARFIL\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nVÍCTIMA: Lord Edmund Ashby, 62 años, Cornwall (Reino Unido)\n\nMÉTODO DEL CRIMEN:\n  Administración de extracto concentrado de cicuta (Conium maculatum)\n  disuelto en infusión de hierbas caliente, entregada a la habitación 101\n  a través del botones René Valmont (intermediario inocente).\n\nMOTIVO:\n  Lord Ashby había obtenido información suficiente (via Havermill en Londres)\n  para desmantelar la red de contrabando operada desde el sótano del hotel.\n  Tenía una cita con el fiscal Renard para el día siguiente.\n  Celeste Mourier actuó esa misma noche para impedir esa entrega de información.\n\nCOMPLICE: Viktor Brecht (contrabando; complicidad en encubrimiento)\nMÉDICO COACCIONADO: Dra. Ida Strauss (firmó informe falso bajo amenaza)\nTESTIGO CLAVE: René Valmont (entrega de la infusión; presencia en pasillo)\n\nPRUEBAS DETERMINANTES:\n  1. Grabación de Mourier y Brecht (canal MARFIL confirmado de viva voz)\n  2. Informe médico real de la Dra. Strauss (cicuta; signos toxicológicos)\n  3. Testimonio de René Valmont (entrega de la infusión; Mourier en habitación 101)\n  4. Residuo de cicuta en la taza recuperada por Renard\n  5. Nota personal de Ashby bajo el colchón (contraseña: CORNWALL)\n  6. Contrato privado de 1923 firmado bajo alias Marfil\n  7. Expediente de Marsella de 1921 (patrón previo de Mourier)\n\nSENTENCIA:\n  Celeste Mourier detenida el 16 de diciembre de 1924.\n  Condenada a trabajos forzados perpetuos en enero de 1925.\n  Viktor Brecht extraditado desde Alemania en 1927. Condenado a 20 años.\n  Dra. Ida Strauss: cargo suspendido por colaborar con la investigación.\n\nEXPEDIENTE CERRADO." }
        }
      }
    }
  },
  databases: {
    medicina: {
      cicuta: { text: "Informe médico confidencial de la Dra. Strauss encontrado. Envenenamiento confirmado.", reveal: ["/habitaciones/informe_medico.txt"] },
      autopsia: { text: "Nota de investigación del fiscal sobre el tóxico encontrada.", reveal: ["/cocina/receta_cicuta.txt"] }
    },
    ingredientes: {
      amargo: { text: "Pedido especial de Celeste a cocina recuperado. Frasco sin etiqueta identificado.", reveal: ["/cocina/pedido_especial.txt"] }
    },
    contrabando: {
      bodega: { text: "Inventario de bodega B encontrado. Salidas sin registrar identificadas.", reveal: ["/sotano/inventario_bodega.txt"] },
      tuneles: { text: "Mapa de túneles accesible (cifrado con el nombre del hotel).", reveal: ["/sotano/mapa_tuneles.enc"] }
    },
    doctor: {
      noche: { text: "Testimonio completo de la Dra. Strauss recuperado.", reveal: ["/testimonios/testimonio_ida.txt"] }
    },
    grabacion: {
      marfil: { text: "Grabación de Mourier y Brecht accesible (cifrada). Clave: nombre del botones testigo.", reveal: ["/testimonios/grabacion_celeste.enc"] }
    },
    panel: {
      bodega: { text: "Mapa de túneles del sótano accesible (cifrado con nombre del hotel).", reveal: ["/sotano/mapa_tuneles.enc"] }
    },
    carta: {
      havermill: { text: "Carta complementaria de Havermill al fiscal Renard recuperada.", reveal: ["/finanzas/carta_havermill.txt"] }
    },
    cuentas: {
      hotel: { text: "Extracto de cuentas del hotel con ingresos no declarados recuperado.", reveal: ["/finanzas/cuentas_hotel.txt"] }
    },
    testimonio: {
      gautier: { text: "Testimonio del huésped Gautier (habitación 102) recuperado.", reveal: ["/testimonios/testimonio_gautier.txt"] }
    },
    personal: {
      celeste: { text: "Expediente previo de Celeste en Marsella (1921) recuperado.", reveal: ["/personal/expediente_celeste.txt"] }
    },
    entradas: {
      noche: { text: "Nota del portero nocturno sobre los hombres con el baul recuperada.", reveal: ["/recepcion/libro_entradas.txt"] }
    }
  }
};
