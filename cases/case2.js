// CASO 2 — EL ÚLTIMO HUÉSPED
var CASE2 = {
  title: "El Ultimo Huesped",
  year: "1924",
  setting: "Hotel Beaumont, Lyon, Francia",
  tagline: "Lord Ashby muerto en su habitacion. La directora lo llama fallo cardiaco.",
  intro: "Diciembre de 1924. El Lord Edmund Ashby fue encontrado sin vida en su habitacion del Hotel Beaumont.\nEl medico de turno firmo un paro cardiaco. El caso fue cerrado en 24 horas.\nEl fiscal Renard no lo cree. Estos son los archivos que reunio antes de que se los arrebataran.\nLee los documentos. Interroga los testimonios. Descubre quien mato al Lord Ashby.",
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
    "cd recepcion → unlock carta_ashby.enc TUDOR — La carta de Havermill revela el alias MARFIL.",
    "Usa 'examine ashby' para entender por que Mourier actuo esa noche. Tenia una cita con el fiscal al dia siguiente.",
    "Usa 'examine havermill' para entender la cadena de informacion que llevo a Ashby a saber demasiado.",
    "Usa 'profile celeste' para ver su historial antes del hotel. El alias Marfil viene de sus actividades en Marsella.",
    "Usa 'search personal celeste' para ver el expediente de la Prefectura de Marsella de 1921. No fue la primera vez.",
    "Usa 'profile rene' para entender por que el botones es el testigo mas importante del caso.",
    "Usa 'examine vela' y 'examine llave'. La vela apagada y la llave maestra son los dos detalles que Rene vio.",
    "El botones Rene vio a Celeste salir de la habitacion 101. Su segundo testimonio esta en /testimonios.",
    "Usa 'search testimonio gautier' — el huesped de la habitacion 102 tambien vio a Mourier salir del 101 esa noche.",
    "Usa 'search entradas noche' para leer la nota del portero sobre los dos hombres con el baul a las 02:15.",
    "Usa 'search ingredientes amargo' para encontrar el pedido especial que Celeste hizo a cocina.",
    "Usa 'examine infusion' y 'examine cicuta' para entender como funciona el veneno y por que no lo detecto el medico oficial.",
    "Usa 'search medicina cicuta' para encontrar el informe real de la Dra. Strauss.",
    "Usa 'examine sotano' y 'examine tunel' para entender la ruta de salida de la mercancia por el rio Saone.",
    "Busca 'search contrabando bodega' y luego 'search grabacion marfil' para atar el caso.",
    "Usa 'examine brecht' y 'profile brecht' para entender que papel tenia el aleman en la operacion.",
    "Usa 'search cuentas hotel' para ver los ingresos no declarados. El hotel Beaumont era una fachada de contrabando.",
    "cd habitaciones → unlock nota_personal_ashby.enc CORNWALL para leer la nota que Ashby dejo bajo el colchon.",
    "Usa 'search carta havermill' para leer la carta que Havermill envio al fiscal despues de la muerte de Ashby.",
    "Usa 'timeline' para ver la cronologia del caso. La interceptacion de la carta de Havermill fue lo que destapo el crimen.",
    "El alias MARFIL es la contrasena del veredicto, pero necesitas todas las pruebas primero.",
    "Comandos extra: map, timeline, evidence, profile [nombre], examine [termino]."
  ],
  map: "HOTEL BEAUMONT — PLANO DE PLANTA\n" +
    "Lyon, Francia / Diciembre de 1924\n" +
    "═══════════════════════════════════════════════════\n" +
    "PLANTA BAJA:\n" +
    "  ┌────────────┐  ┌────────────┐  ┌──────────┐\n" +
    "  │ RECEPCION  │  │   SALON    │  │  COCINA  │\n" +
    "  │ (Celeste)  │  │ Principal  │  │ (Fabre)  │\n" +
    "  └─────┬──────┘  └────────────┘  └──────────┘\n" +
    "        │\n" +
    "  ┌─────┴──────┐  ┌────────────┐\n" +
    "  │  SOTANO B  │  │ BODEGA /   │\n" +
    "  │ (restringido)│ │  TUNELES  │\n" +
    "  └────────────┘  └────────────┘\n" +
    "\n" +
    "PLANTA 1:\n" +
    "  ┌──────────┐  ┌──────────┐  ┌──────────────┐\n" +
    "  │  101     │  │  102     │  │  SUITE       │\n" +
    "  │ Lord     │  │ Gautier  │  │  Brecht      │\n" +
    "  │ Ashby ✝  │  │ (arte)   │  │ (coleccion)  │\n" +
    "  └──────────┘  └──────────┘  └──────────────┘\n" +
    "  ┌──────────────────────────┐\n" +
    "  │ DESPACHO PRIVADO Celeste │\n" +
    "  └──────────────────────────┘",
  profiles: {
    ashby: "LORD EDMUND ASHBY — Victima\nEdad: 62. Nacionalidad: britanica. Casa solariega en Tudor, Cornwall.\nInvestigaba por cuenta propia una red de contrabando de arte y material biologico.\nContactaba con el fiscal Renard de forma confidencial.\nMurio la noche del 11 al 12 de diciembre de 1924 en la habitacion 101.",
    celeste: "CELESTE MOURIER — Directora del Hotel Beaumont\nEdad: 47. Alias de operacion: Marfil (contratos de Marsella, 1921).\nDirigió un club privado en Marsella hasta 1921, investigada por trafico de marfil africano.\nSe caso con Henri Mourier (fallecido 1923) y heredo el hotel.\nOrganizaba una red de contrabando de arte y material biologico usando el sotano del hotel.",
    rene: "RENE VALMONT — Botones del Hotel\nEdad: 19. Hijo de un trabajador local. Lleva 2 anos en el hotel.\nTestigo clave: entrego la infusion a Ashby y vio a Celeste salir de la habitacion a la 01:00.\nSabia del contrabando del sotano pero no entendia lo que implicaba.\nFue la fuente mas importante del fiscal Renard.",
    brecht: "VIKTOR BRECHT — Huesped, Suite Principal\nEdad: 53. Comerciante de arte de Berlín (fachada). En realidad, traficante internacional.\nSocio de Celeste: aportaba las 'obras de arte' que en realidad ocultaban material de contrabando.\nFirmo el contrato privado de 1923 con Celeste bajo el canal MARFIL.\nSabia del plan para eliminar a Ashby pero no participó directamente.",
    strauss: "DRA. IDA STRAUSS — Medica Residente del Hotel\nEdad: 36. Austriaca. Lleva 3 anos en el hotel sin contrato formal.\nVio signos claros de envenenamiento en el cuerpo de Ashby pero firmo paro cardiaco bajo presion.\nSu testimonio real fue tomado en secreto por el fiscal Renard.\nFue la primera en sospechar de la infusion de hierbas.",
    fabre: "CHEF JACQUES FABRE — Chef del Hotel\nEdad: 51. Franc\u00e9s. 20 anos en el hotel. Leal al anterior propietario.\nPreparo la cena de Ashby sin saber lo que habia en el ingrediente especial que Celeste le entrego.\nSu nota al margen del pedido fue la primera prueba fisica del envenenamiento."
  },
  examine: {
    infusion: "La infusion de hierbas que bebio Lord Ashby era una solicitud especial.\nCeleste Mourier la entrego personalmente al chef Fabre con instrucciones de incluirla.\nSi contenia extracto de cicuta (hemlock), el efecto seria: paresia progresiva, fallo respiratorio.\nEn bebida caliente, la cicuta se disuelve completamente y no deja residuo visible.",
    "habitacion 101": "La habitacion 101 era la favorita de Ashby en todas sus visitas al Beaumont.\nTenia vista al rio y una mesita junto al sillon donde Ashby solia leer por las noches.\nLa taza de infusion encontrada estaba a medio terminar. La vela del escritorio estaba apagada.\nAshby siempre dejaba la vela encendida toda la noche segun Rene Valmont.",
    llave: "La llave maestra del nivel B fue la que uso Celeste para entrar a la habitacion 101 a la 01:00.\nRene la vio salir con esa llave. Solo Celeste y el jefe de mantenimiento tenian copias.\nDespues del incidente, esa llave no fue incluida en el inventario de llaves entregado a la policia.",
    vela: "La vela del escritorio de Ashby estaba apagada cuando Rene vio a Celeste salir de la habitacion.\nAshby nunca la apagaba antes de dormir — eso era bien sabido por todo el personal.\nLa apagaron despues de que Ashby ya no pudiera encenderla. Detalle revelador.",
    cicuta: "La cicuta (Conium maculatum) produce paresia muscular ascendente y fallo respiratorio.\nEn dosis altas en bebida caliente actua en 2-4 horas. Imita un fallo cardiaco.\nEl medico legal que examino a Ashby era de confianza de Celeste y no hizo panel toxicologico.\nLa Dra. Strauss reconocio los signos aunque no los reporto en el informe oficial.",
    marfil: "El alias operativo de Celeste Mourier desde sus actividades en Marsella (1919-1921).\nEra el nombre de su canal de contrabando de marfil africano.\nReutilizo el mismo alias para sus operaciones en el hotel Beaumont con Viktor Brecht.\nEste nombre aparece en el contrato privado del sotano y en la grabacion de Renard.",
    brecht: "Viktor Brecht llegaba al hotel con 'obras de arte' de alto valor.\nEn realidad, las obras ocultaban material de contrabando que salia por el tunel C al rio Saone.\nEl beneficio era 60-40 a favor de Brecht. Celeste recibia el 40%.\nBrecht sabia que Ashby era una amenaza pero no queria mancharse las manos directamente.",
    sotano: "El sotano norte del Hotel Beaumont tenia tres tuneles excavados ilegalmente en 1922.\nCeleste financo las obras bajo el nombre Dupont. Tunel C llegaba al muelle privado del rio.\nViktotre Brecht usaba su suite en el primer piso como punto de inspeccion antes del traslado.\nRene Valmont firmaba los registros del nivel B sin saber lo que implicaba.",
    havermill: "Sir George Havermill era el contacto de Lord Ashby en Londres.\nLe envio una carta cifrada con informacion sobre el pasado de Celeste en Marsella.\nFue la carta la que alertó a Celeste de que Ashby sabia demasiado.\nEl contenido de la carta (cifrada con TUDOR) fue lo que desato el asesinato.",
    polvo: "El frasco sin etiqueta que Celeste entrego al chef contenia extracto concentrado de cicuta.\nLas instrucciones decian 'disolverlo completamente en infusion caliente sin dejar residuo visible'.\nEl chef Fabre lo mezco sin saber su naturaleza. Lo creyó un 'digestivo amargo europeo'.\nEl frasco nunca fue devuelto ni encontrado.",
    tunel: "El tunel C del sotano conectaba el hotel con el muelle privado del rio Saone.\nEra la via de salida de las mercancias de contrabando: obras de arte, objetos organicos, marfil.\nCeleste financio su construccion ilegalmente en 1922 bajo nombre falso (Dupont).\nRenard descubrio la existencia de los tuneles gracias a la nota oculta de Ashby.",
    rene: "Rene Valmont es el testimonio mas importante del caso.\nVio a Celeste salir de la habitacion 101 a la 01:00 con la llave maestra.\nLa vela del escritorio de Ashby estaba apagada. Eso era imposible si Ashby dormia.\nAdemas firmo registros del nivel B que implicaban el contrabando.",
    autopsia: "El medico que firmo la autopsia era un contacto de Celeste en Lyon.\nFirmo 'paro cardiaco' sin panel toxicologico y sin segunda opinion.\nLa Dra. Strauss hizo su propio examen privado y documento los signos reales: pupilas desiguales, espuma.\nEse informe fue el que el fiscal Renard guardo como prueba clave.",
    ashby: "Lord Ashby viajaba regularmente al Hotel Beaumont como parte de su investigacion confidencial.\nHabia encontrado la conexion entre Celeste, el contrabando y el canal MARFIL a traves de Havermill.\nLa noche de su muerte estaba a punto de reunirse con el fiscal Renard al dia siguiente.\nCeleste lo supo a traves de uno de sus empleados y actuo esa misma noche."
  },
  timeline: [
    { time: "03/1923", event: "Celeste y Brecht firman contrato privado MARFIL en el sotano del hotel.", trigger: "/sotano/contrato_oculto.enc" },
    { time: "09/1924", event: "Havermill comienza a investigar el pasado de Celeste en Marsella.", trigger: "/recepcion/carta_ashby.enc" },
    { time: "01/12/1924", event: "Lord Ashby llega al Hotel Beaumont. Solicita habitacion 101 como siempre.", trigger: "/recepcion/registro_huespedes.txt" },
    { time: "08/12/1924", event: "Havermill envia a Ashby la carta con informacion sobre el alias MARFIL.", trigger: "/recepcion/carta_ashby.enc" },
    { time: "09/12/1924", event: "Celeste intercepta o descubre que Ashby tiene la carta de Havermill.", trigger: "/testimonios/grabacion_celeste.enc" },
    { time: "10/12/1924", event: "Celeste entrega al chef Fabre un frasco sin etiqueta para la infusion especial del 101.", trigger: "/cocina/pedido_especial.txt" },
    { time: "11/12  22:10", event: "Rene Valmont entrega la cena y la infusion especial al Lord Ashby.", trigger: "/habitaciones/partes_servicio.txt" },
    { time: "11/12  22:45", event: "Ashby solicita agua caliente. Se le sirve normalmente.", trigger: "/habitaciones/partes_servicio.txt" },
    { time: "11/12  01:00", event: "Rene ve a Celeste salir de la habitacion 101 con la llave maestra. Vela apagada.", trigger: "/testimonios/testimonio_rene.txt" },
    { time: "12/12  07:00", event: "Ashby no baja al desayuno.", trigger: "/habitaciones/partes_servicio.txt" },
    { time: "12/12  09:15", event: "Puerta forzada. Lord Ashby hallado sin vida en su sillon.", trigger: "/habitaciones/partes_servicio.txt" },
    { time: "12/12  09:30", event: "Celeste llama al medico de confianza antes que a la policia.", trigger: "/testimonios/testimonio_ida.txt" },
    { time: "12/12  10:00", event: "Informe oficial firmado: paro cardiaco. Caso cerrado en 24 horas.", trigger: "/testimonios/testimonio_ida.txt" },
    { time: "14/12  1924", event: "Fiscal Renard graba a Celeste y Brecht hablando del 'canal MARFIL'.", trigger: "/testimonios/grabacion_celeste.enc" }
  ],
  filesystem: {
    type: "dir",
    children: {
      "bienvenida.txt": { type: "file", content: "HOTEL BEAUMONT / ARCHIVO INTERNO DEL CASO\nDiciembre, 1924 — Lyon, Francia\n\nHas accedido al archivo del fiscal D. Renard sobre la muerte del Lord Edmund Ashby.\nFue sellado en 1924 y enviado al tribunal de apelacion en 1926.\nEl caso no fue reabierto oficialmente hasta 1931.\n\nNota del fiscal Renard (prefacio del expediente):\n'Segun el medico fue un paro cardiaco.\nSegun yo, nadie muere asi despues de una cena ligera en un hotel de cinco estrellas.\nHabia algo en esa taza de infusion. Lo supe cuando vi la taza aun caliente.\nY habia algo en la forma en que la directora limpiaba ya la habitacion\nantes de que llegara la policia.'\nFirmado: D. Renard, Fiscal de Instruccion, Lyon.\n\nDirectorios: /recepcion  /habitaciones  /cocina  /sotano  /testimonios  /personal  /finanzas  /veredicto" },
      recepcion: {
        type: "dir",
        children: {
          "registro_huespedes.txt": { type: "file", content: "REGISTRO DE HUESPEDES — DICIEMBRE DE 1924\nHotel Beaumont, Lyon\n\nHabitacion 101: Lord Edmund Ashby / Reino Unido\n  Llegada: 1 de diciembre\n  Procedencia declarada: Casa solariega Tudor, Cornwall\n  Acompanante: ninguno (viaja solo esta vez; Lady Clara permanece en Londres)\n  Nota: huesped frecuente desde 1919. Solicita siempre la habitacion 101.\n  Paga en efectivo por adelantado. Nunca firma el libro con pluma de la recepcion.\n  Lleva una cartera de cuero negro con papeles. Nunca la deja en la habitacion.\n\nHabitacion 102: M. Pierre Gautier / Lyon\n  Comerciante de arte. Quinto viaje al hotel en este ano.\n\nSuite Principal: Sr. Viktor Brecht / Berlin\n  Comerciante y coleccionista. Lleva equipe voluminoso: cuatro cajas grandes.\n  Solicito acceso permanente a la bodega para 'catas privadas de vino'.\n\nNOTA DE C. MOURIER (directora):\n  'El Lord no debe ser molestado bajo ningun concepto.\n   Ninguna visita a su habitacion sin su solicitud expresa.\n   Dejad que el cuarto se airee despues de cada cena del servicio.'" },
          "nota_celeste.txt": { type: "file", content: "NOTA INTERNA — DIRECCION\nFirmada por: Celeste Mourier, Directora\n\nAl personal de noche (11 al 12 de diciembre):\n\nLa llave maestra del nivel B no debe usarse despues de las 22:00\nsalvo emergencia o autorizacion mia directa y por escrito.\n\nCiertos proveedores acceden por la puerta de servicio entre las 02:00 y las 04:00.\nNo se registra en el libro de entradas del turno nocturno.\nLa discrecion es parte del contrato de empleo en este hotel.\n\nRENE: la cena de la habitacion 101 debe servirse exactamente a las 22:10.\nLa infusion de hierbas es una solicitud especial del huesped. No la modifiques.\nDevuelveme la bandeja tu mismo, sin dejarla en el pasillo.\n\nC. Mourier" },
          "carta_ashby.enc": { type: "file", locked: true, password: "TUDOR", content: "[CARTA PERSONAL DE LORD ASHBY — DESCIFRADA]\nDe: Sir George Havermill, Londres / 8 de diciembre de 1924\n\nEdmund:\n\nHe encontrado lo que me pediste sobre la Mourier.\nAntes de venir al Beaumont dirigia un club privado en Marsella\nconocido por ser una cubierta para trafico de marfil africano de la colonia.\nFue investigada en 1921 pero nunca procesada. El testigo clave desaparecio tres dias antes del juicio.\n\nEl nombre que usaba entonces: Celeste Dupont.\nPero sus contratos mas antiguos (1919-1920) llevan otro nombre: Marfil.\nEra su alias de operacion. No es un apodo casual: es la firma de toda su red.\n\nActualmente usa el hotel como punto de transferencia con un aleman llamado Brecht.\nLas 'cajas de arte' que Brecht lleva al hotel salen por un tunel subterraneo que conecta\ncon el muelle privado del rio Saone. Nadie revisa el contenido.\n\nTen mucho cuidado, Edmund. Esa mujer sabe cubrir sus huellas.\nY si sabe que tu lo sabes, actuara.\n\nTe llamo en cuanto tenga mas detalles.\n\nGeorge" },
          "libro_entradas.txt": { type: "file", hidden: true, content: "LIBRO DE ENTRADAS — PUERTA DE SERVICIO\nHotel Beaumont / Turno de noche 11-12 de diciembre, 1924\n\nRegistro oficial:\n  23:30  Entrega de hielo para cocina. Proveedor habitual. Firmado: T. Mari\u00e9.\n  01:45  Sin entradas registradas.\n\nNOTA MANUSCRITA (letra del portero nocturno, F. Blanc):\n  'A las 02:15 entraron por puerta de servicio dos hombres con un baul grande.\n   La senora Mourier les acompano personalmente hasta el sotano.\n   No se registro porque ella me dijo que no era necesario.\n   Llevo siete anos en este hotel y eso nunca ha pasado antes de que ella llegara.'\n\nOtra nota al margen:\n  'Los mismos dos hombres salieron a las 03:40. Sin el baul.\n   Salieron por la misma puerta con una caja plana y envuelta en arpillera.'" }
        }
      },
      habitaciones: {
        type: "dir",
        children: {
          "partes_servicio.txt": { type: "file", content: "PARTES DE SERVICIO — HABITACION 101\nTurno del 11 al 12 de diciembre, 1924\n\n22:10  Entrega de cena y infusion especial — Rene Valmont\n22:45  Solicitud de agua caliente adicional desde habitacion 101 — servida por Rene\n23:30  Silencio confirmado en todo el pasillo\n01:00  Rene reporta haber visto luz bajo la puerta de habitacion 101 — INUSUAL\n        Vio a la Sra. Mourier salir de la habitacion con la llave maestra\n07:00  Lord Ashby no baja al desayuno\n09:15  Puerta forzada a peticion de Rene Valmont. Lord Ashby hallado sin vida en el sillon.\n        La taza de infusion: a medio terminar, sobre la mesita.\n        La vela del escritorio: APAGADA. Siempre la dejaba encendida.\n\nObservacion del encargado (J. Petit):\n  'La taza de infusion tenia un olor extrano cuando la recogi. No es el olor normal\n   de la menta o el jengibre. Mas amargo. No lo anote en el momento. Deberia haberlo hecho.'" },
          "informe_medico.txt": { type: "file", hidden: true, content: "INFORME MEDICO CONFIDENCIAL\nDra. Ida Strauss, medica residente Hotel Beaumont\nFecha: 12 de diciembre de 1924\n\nPACIENTE: Lord Edmund Ashby, 62 anos\nHora estimada de muerte: entre las 23:30 y las 01:00\n\nOBSERVACIONES CLINICAS:\n  Pupila derecha: dilatada de forma desigual respecto a la izquierda\n  (indicador toxicologico de primer orden)\n  Lividez corporal: consistente con posicion sentado-recostado, fija\n  Ligera espuma seca en comisura labial izquierda\n  Leve cianosis en puntas de dedos\n  Sin signos de lucha fisica\n\nDIAGNOSTICO OFICIAL: fallo cardiaco (cedido bajo presion de Mourier)\n\nNOTA PRIVADA DE LA DRA. STRAUSS:\n  El patron de pupila asimetrica y la espuma labial son marcadores clasicos de\n  envenenamiento por alcaloide vegetal. He visto este patron dos veces en Viena.\n  La dosis compatible seria: extracto de cicuta en bebida caliente.\n  El efecto: paresia muscular progresiva en 45-90 minutos, fallo respiratorio.\n  En personas de edad avanzada, imita perfectamente un paro cardiaco.\n\n  No puse esto en el informe oficial porque la Sra. Mourier me llamo antes de que llegara\n  la policia y me dijo que el hotel no necesitaba un escandalo.\n  Me recordo que llevo tres anos aqui sin contrato formal.\n  Eso fue una amenaza. Y yo la obedeci. Y lo lamentare siempre." },
          "nota_personal_ashby.enc": { type: "file", hidden: true, locked: true, password: "CORNWALL", content: "[NOTA PERSONAL DE LORD ASHBY — ENCONTRADA BAJO EL COLCHON]\nEscrita la noche del 11 de diciembre de 1924\n\nSi alguien lee esto antes que yo, ya se lo que significa.\n\nHe visto el libro de cuentas de Celeste en la bodega.\nLo encontre por accidente cuando sub\u00ed al salon la semana pasada\ny una de las puertas del sotano estaba mal cerrada.\n\nCeleste usa el sotano norte como punto de transferencia.\nBrecht llega con arte de coleccion y se va con cajas marcadas para envio diplomatico.\nNadie revisa el contenido. Nadie pregunta.\n\nHe visto el libro de cuentas oculto. Lo guarda detras del panel de roble de la bodega.\nEl acceso al panel esta codificado con el nombre del propio hotel: BEAUMONT.\n\nManana por la manana veo a Renard y le entrego todo lo que tengo.\nHavermill viene en tren desde Paris el 15.\n\nSi algo me sucede esta noche, buscad a Rene Valmont.\nEl botones sabe mas de lo que parece.\n\nEdmund, Lord Ashby" }
        }
      },
      cocina: {
        type: "dir",
        children: {
          "menu_noche.txt": { type: "file", content: "MENU DE CENA ESPECIAL — 11 DE DICIEMBRE, 1924\nPreparado por: Chef Jacques Fabre / Hotel Beaumont\n\nHabitacion 101 — Lord Ashby:\n  — Consomme de ave con verduras de temporada\n  — Filete de lenguado al vapor con mantequilla de alcaparras\n  — Queso manchego con mermelada de membrillo\n  — Infusion de hierbas (solicitud especial del huesped)\n    Preparada con extracto de flores secas enviado por la direccion\n    en un frasco sin etiqueta. Instruccion: disolver completamente en agua muy caliente.\n\nNota del chef:\n  'No es la primera vez que la directora me envia ingredientes para infusiones especiales.\n   Siempre para el mismo tipo de huespedes: los que hacen demasiadas preguntas.\n   Cuando le pregunte que era ese polvo, me dijo que era un digestivo europeo muy amargo.\n   No tenia color. No tenia olor notable. Se disolvio perfectamente.\n   Dios mio. Si hubiera sabido.'" },
          "pedido_especial.txt": { type: "file", hidden: true, content: "PEDIDO DE INGREDIENTES — EXTERNO\nDe: C. Mourier, Direccion del Hotel Beaumont\nPara: Uso exclusivo en servicio privado, habitacion 101, 11 de diciembre\n\n1 frasco (vidrio, 20 ml) de polvo blanco cristalino — SIN ETIQUETA\nInstruccion especifica:\n  Disolver completamente en infusion de hierbas caliente (70-80°C).\n  Sin dejar residuo visible en el fondo de la taza.\n  Frasco: devolver a la direccion inmediatamente tras su uso.\n\nObservacion de la directora al chef Fabre:\n  'Es un digestivo amargo de formula europea. Ayuda al corazon en personas mayores.'\n\nNota del chef al margen (rotulador azul):\n  'Cuando sali a buscar las hierbas, Voss... perdon, Mourier...\n   tuvo acceso a la infusion ya preparada durante al menos 3 minutos.\n   No me quede mirando. Fue su encargo. Confie en ella.\n   Ahora no confio en nada de lo que me dijo.'" },
          "receta_cicuta.txt": { type: "file", hidden: true, content: "NOTA DE INVESTIGACION — FISCAL RENARD\nFecha: 15 de diciembre de 1924\n\nHe consultado con el toxicologo Dr. Clements sobre el extracto encontrado en la taza.\n\nEl residuo recuperado del fondo de la taza de la habitacion 101\nes compatible con Conium maculatum (cicuta) en forma concentrada.\nEl Dr. Clements confirma:\n  — El extracto se disuelve completamente en agua a mas de 65°C\n  — No deja sabor en presencia de hierbas aromaticas fuertes\n  — En personas mayores de 60 anos con la dosis hallada: paresia en 45-90 minutos,\n    fallo respiratorio y paro cardiaco aparente en 2-3 horas\n  — No detectable en autopsia basica sin panel toxicologico especifico\n\nLa taza fue recogida por mi antes de que Mourier pudiera limpiarla.\nFue el mayor error que cometio: no inspeccionar la taza antes de que yo llegara." }
        }
      },
      sotano: {
        type: "dir",
        children: {
          "inventario_bodega.txt": { type: "file", hidden: true, content: "INVENTARIO PARCIAL — BODEGA B\nTurno nocturno del 7 al 13 de diciembre, 1924\n\nENTRADAS REGISTRADAS:\n  12 cajas de vino frances (proveedor legit. Gautier Bros.)\n  3 bultos sin etiqueta (acceso Beaumont norte, zona restringida)\n  1 baul grande marcado 'arte colonial — fragil' (entrada Brecht)\n\nSALIDAS NO REGISTRADAS EN LIBRO OFICIAL:\n  2 bultos marcados P.D. (valija diplomatica)\n  1 caja plana envuelta en arpillera (salida nocturna, 03:40)\n\nNota manuscrita encontrada en el inventario:\n  'El canal va por Brecht. El corte es 40-60.\n   Rene firma todos los registros del nivel B.'\n\nNOTA DE RENARD:\n  Rene Valmont firmaba esos registros sin saber lo que implicaban.\n  Celeste usaba su nombre para cubrir las entradas y salidas nocturnas." },
          "mapa_tuneles.enc": { type: "file", hidden: true, locked: true, password: "BEAUMONT", content: "[MAPA DE TUNELES — DESCIFRADO]\nInformacion obtenida de planos de obra clandestinos (1922)\n\nEl Hotel Beaumont tiene tres salidas subterraneas no declaradas:\n  Tunel A: hacia la lavanderia municipal (uso de carga)\n  Tunel B: hacia el garaje privado de Brecht (en la calle trasera)\n  Tunel C: hacia el muelle privado del rio Saone (uso principal de contrabando)\n\nEl tunel C fue ampliado en 1922 sin permiso de obra.\nCeleste financi\u00f3 los trabajos bajo el nombre falso 'C. Dupont'.\nLos obreros cobraron en efectivo y firmaron un acuerdo de silencio.\n\nRuta de contrabando operativa (diciembre 1924):\n  1. Mercancias entran como equipaje de Brecht (recepcion)\n  2. Contenido se reclasifica en bodega B (zona restringida)\n  3. Sale por tunel C al muelle. Embarcacion privada espera cada dos semanas.\n\nTestigo unico vivo de la ruta completa: Rene Valmont." },
          "contrato_oculto.enc": { type: "file", hidden: true, locked: true, password: "VALMONT", content: "[CONTRATO PRIVADO — DESCIFRADO]\nEntre Celeste Mourier (alias operativo: Marfil) y Viktor Brecht\nFecha: Marzo de 1923 / Lugar: Bodega B, Hotel Beaumont\n\nOBJETO:\nAcuerdo de transito de mercancias clasificadas a traves del Hotel Beaumont\nmediante el canal de tuneles del sotano norte.\n\nRETRIBUCION:\n  40% para Mourier (logistica, cobertura, personal, corrupcion de funcionarios)\n  60% para Brecht (mercancias, contactos de compra y venta, transporte fluvial)\n\nCLAUSULA DE CONFIDENCIALIDAD:\n  'Cualquier huesped, empleado o tercero que descubra esta operacion\n   sera neutralizado por las partes firmantes usando los medios que la situacion requiera.'\n\nFirma de Mourier: Celeste [rubricado con 'Marfil']\nFirma de Brecht: V. Brecht\n\nNota de Brecht (manuscrita al margen):\n  'Mourier ya neutralizo a un testigo incómodo en Marsella en 1921.\n   Cuando dice neutralizar, lo dice en serio.'" }
        }
      },
      testimonios: {
        type: "dir",
        children: {
          "testimonio_rene.txt": { type: "file", content: "TESTIMONIO DE RENE VALMONT\nBotones del Hotel Beaumont, 19 anos\nTranscripcion: D. Renard, Fiscal de Instruccion / 12 de diciembre, 1924\n\nRenard: Rene, a que hora sirvio la cena al Lord Ashby la noche del 11?\nRene:   A las 22:10, senor. La cena y la infusion especial. Como me habian indicado.\n\nRenard: Quien le indico servir esa infusion especial?\nRene:   La senora Mourier personalmente. Me la entrego ya preparada, en una taza de plata con tapa.\n        Me dijo que era una solicitud especial del huesped. Que no la tocara.\n\nRenard: Vio usted algo inusual despues?\nRene:   Hacia la una de la madrugada estaba en el pasillo de la primera planta.\n        Vi a la senora Mourier salir de la habitacion 101 con la llave maestra.\n\nRenard: Que dijo cuando usted la vio?\nRene:   Que el senor descansaba y no debia ser molestado. Que ya habia apagado la vela.\n        Pero la vela del escritorio de milord... el nunca la apagaba.\n        En seis visitas, jamas la apago antes de las tres de la manana.\n\nRenard: Esta usted seguro de que era la llave maestra?\nRene:   Completamente. Es la llave mas grande del hotel. La reconoceria en cualquier lugar." },
          "testimonio_ida.txt": { type: "file", hidden: true, content: "TESTIMONIO DE DRA. IDA STRAUSS\nMedica residente Hotel Beaumont / 14 de diciembre, 1924\nTranscripcion: D. Renard, Fiscal de Instruccion\n\nRenard: Dra. Strauss, por que su informe oficial dice paro cardiaco?\nStrauss: Porque la senora Mourier me llamo antes de que llegara la policia.\n         Me dijo que registrara paro cardiaco. Que 'el hotel no necesitaba esto'.\n\nRenard: Y usted accedio?\nStrauss: Llevo tres anos en este hotel sin contrato formal. Ella lo sabe.\n         Fue una amenaza velada pero perfectamente clara.\n\nRenard: Que observo usted realmente en el cuerpo del Lord?\nStrauss: Pupilas desiguales. Ligera espuma seca en la comisura labial.\n         Cianosis leve en las yemas de los dedos. Lividez fija en posicion sentada.\n         Ese patron no es un paro cardiaco natural.\n         Lo he visto en dos casos de envenenamiento por alcaloide en Viena.\n\nRenard: Puede ser mas especifica?\nStrauss: Con la infusion caliente y la edad del Lord... diria cicuta. Conium.\n         La dosis exacta dependeria del peso del sujeto. Pero el efecto es el mismo:\n         paresia progresiva. El victima no puede moverse ni pedir ayuda. Sigue consciente.\n         El corazon falla ultimo.\n\nRenard: Sabe usted si alguien mas vio el estado real del cuerpo?\nStrauss: El fiscal. Y Rene Valmont, cuando forzo la puerta." },
          "testimonio_gautier.txt": { type: "file", hidden: true, content: "TESTIMONIO DE PIERRE GAUTIER\nComercuante de arte, huesped habitacion 102 / 13 de diciembre, 1924\nTranscripcion: D. Renard, Fiscal de Instruccion\n\nRenard: Senor Gautier, escucho algo inusual la noche del 11 al 12?\nGautier: Oi pasos en el pasillo hacia la una de la madrugada. Muy silenciosos.\n         Mire por la rendija de mi puerta. Vi a la Mourier con una llave y una bolsa pequena.\n\nRenard: Podia ver a que habitacion entraba?\nGautier: A la del 101. No me cabe duda. Estuvo dentro unos cinco minutos.\n          Cuando salio, llevaba la misma bolsa pero mas llena.\n\nRenard: No le parecio extrano?\nGautier: Aqui pasan cosas extranas constantemente, fiscal. Las cajas de Brecht.\n          Los proveedores de madrugada. Pensaba que era parte del negocio de este hotel.\n\nRenard: Usted conoce a Brecht?\nGautier: Lo conozco de ferias de arte. Trafica con piezas cuyo origen prefiere no explicar.\n          Yo nunca hago negocios con el. Demasiado arriesgado." },
          "grabacion_celeste.enc": { type: "file", hidden: true, locked: true, password: "RENE", content: "[GRABACION INTERCEPTADA — CELESTE MOURIER Y VIKTOR BRECHT]\nGrabada por D. Renard con microfono oculto / 14 de diciembre de 1924\n\nCeleste: Todo fue limpio. El medico firmo lo que corresponde.\nBrecht:  Y el botones? Ese chico estuvo en el pasillo a la una.\nCeleste: Rene no sabe nada concreto. Solo llevo la taza. No sabe lo que habia dentro.\n          Si habla, sera su palabra contra la mia.\n\nBrecht:  Si alguien conecta al Lord con Havermill en Londres...\nCeleste: No podran. Tome los papeles de la cartera antes de que llegara la policia.\n          Los queme esa misma manana. No queda nada del lado de Ashby.\n\nBrecht:  El siguiente envio es el sabado. La embarcacion espera.\nCeleste: El sabado ya no es seguro. Hay que postponer dos semanas.\n          Pero la operacion sigue adelante.\n\nCeleste (en voz baja): La operacion siempre sigue adelante. Nombre limpio: MARFIL.\n          Como siempre. Como en Marsella.\n\n[Fin de grabacion]" }
        }
      },
      personal: {
        type: "dir",
        children: {
          "ficha_rene.txt": { type: "file", content: "FICHA DE EMPLEADO — RENE VALMONT\nCargo: Botones / Asistente nocturno\nEdad: 19 anos. Natural de Lyon.\nAntiguedad: 2 anos en el hotel.\n\nNOTA DEL ENCARGADO:\n  'Rene es el empleado mas confiable que hemos tenido en este turno.\n   Puntual, discreto, no hace preguntas innecesarias. Pero observa todo.'\n\nNOTA DEL FISCAL RENARD (adjunta):\n  'Valmont es el testigo clave del caso. Sin su testimonio, no hay caso.\n   La directora lo sabía. Por eso le ofreció un aumento la mañana del 12.\n   Él lo rechazó. Eso dice todo lo que necesito saber de este joven.'" },
          "expediente_celeste.txt": { type: "file", hidden: true, content: "EXPEDIENTE PREVIO — CELESTE MOURIER (alias Dupont / Marfil)\nFuente: Archivos de la Prefectura de Marsella, 1921\n\nINVESTIGACION DE 1921:\n  Mourier fue investigada por direccion de red de trafico de marfil africano\n  a traves del club 'Le Meridien' en el puerto de Marsella.\n  Acusacion formal presentada en octubre de 1921.\n\n  RESOLUCION: caso archivado por falta de pruebas.\n  Circunstancia: el testigo principal desaparecio tres dias antes del juicio.\n  Otro testigo retiro su declaracion sin explicacion.\n\nINFORMACION ADICIONAL (informe de inteligencia, confidencial):\n  'Mourier (alias Marfil) contaba con contactos en la prefectura de Marsella.\n   Se sospecha soborno de funcionarios y neutralizacion de testigos.\n   No se pudo probar. Se recomienda vigilancia discreta.'\n\nNOTA DEL FISCAL RENARD:\n  Este expediente confirma el patron. Marsella en 1921. Lyon en 1924.\n  El mismo metodo. El mismo silencio. El mismo nombre: Marfil." }
        }
      },
      finanzas: {
        type: "dir",
        children: {
          "cuentas_hotel.txt": { type: "file", hidden: true, content: "EXTRACTO DE CUENTAS — HOTEL BEAUMONT\nPeriodo: enero-diciembre de 1924\nFuente: libro de contabilidad incautado por el fiscal Renard\n\nINGRESOS DECLARADOS:\n  Hospedaje: 42.000 FFR\n  Restauracion: 18.000 FFR\n  Servicios varios: 6.500 FFR\n\nINGRESOS NO DECLARADOS (cuenta paralela, libro de tapa azul):\n  Enero:     12.000 FFR  — Comision B1\n  Marzo:      8.500 FFR  — Comision B1\n  Junio:     15.000 FFR  — Comision B2\n  Septiembre: 9.000 FFR  — Comision B2\n  Noviembre: 22.000 FFR  — Comision B2\n\nNOTA DEL FISCAL:\n  'Comision B1' y 'Comision B2' corresponden a los dos envios de contrabando\n  realizados en la primera y segunda mitad del ano.\n  La suma no declarada es mas del 50% del ingreso real del hotel.\n  El hotel Beaumont es, en la practica, una fachada." },
          "carta_havermill.txt": { type: "file", hidden: true, content: "CARTA COMPLEMENTARIA — SIR GEORGE HAVERMILL\nDe: Londres / 18 de diciembre de 1924 (dirigida al fiscal Renard)\n\nFiscal Renard:\n\nMe llego la noticia de la muerte del Lord Ashby.\nLe envie informacion seis dias antes que podia comprometer su seguridad.\nLamento no haberlo advertido con mas claridad del peligro inmediato.\n\nPuedo confirmarle todo lo que Edmund sospechaba:\nCeleste Mourier opero bajo el alias Marfil desde 1919 hasta 1921 en Marsella.\nDespues de la investigacion, se movio a Lyon y cambio de nombre (por matrimonio).\nPero el metodo es el mismo. El canal es el mismo. El alias es el mismo.\n\nHe contactado con un agente de la Surete Nacional.\nEste caso no puede cerrarse con un paro cardiaco.\n\nSir George Havermill\nP.D.: Guarde bien esta carta. Ya me han contactado dos personas preguntando por mi." }
        }
      },
      veredicto: {
        type: "dir",
        children: {
          "veredicto_ashby.evd": { type: "file", locked: true, password: "MARFIL", content: "VEREDICTO FINAL — CASO LORD ASHBY\nD. Renard, Fiscal de Instruccion, Lyon\nFecha de presentacion al tribunal: 22 de enero de 1925\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nRESPONSABLE PRINCIPAL: Celeste Mourier\n               Directora del Hotel Beaumont, Lyon\n               Alias de operacion: MARFIL\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nVICTIMA: Lord Edmund Ashby, 62 anos, Cornwall (Reino Unido)\n\nMETODO DEL CRIMEN:\n  Administracion de extracto concentrado de cicuta (Conium maculatum)\n  disuelto en infusion de hierbas caliente, entregada a la habitacion 101\n  a traves del botones Rene Valmont (intermediario inocente).\n\nMOTIVO:\n  Lord Ashby habia obtenido informacion suficiente (via Havermill en Londres)\n  para desmantelar la red de contrabando operada desde el sotano del hotel.\n  Tenia una cita con el fiscal Renard para el dia siguiente.\n  Celeste Mourier actuo esa misma noche para impedir esa entrega de informacion.\n\nCOMPLICE: Viktor Brecht (contrabando; complicidad en encubrimiento)\nMEDICO COACCIONADO: Dra. Ida Strauss (firmo informe falso bajo amenaza)\nTESTIGO CLAVE: Rene Valmont (entrega de la infusion; presencia en pasillo)\n\nPRUEBAS DETERMINANTES:\n  1. Grabacion de Mourier y Brecht (canal MARFIL confirmado de viva voz)\n  2. Informe medico real de la Dra. Strauss (cicuta; signos toxicologicos)\n  3. Testimonio de Rene Valmont (entrega de la infusion; Mourier en habitacion 101)\n  4. Residuo de cicuta en la taza recuperada por Renard\n  5. Nota personal de Ashby bajo el colchon (contrasena: CORNWALL)\n  6. Contrato privado de 1923 firmado bajo alias Marfil\n  7. Expediente de Marsella de 1921 (patron previo de Mourier)\n\nSENTENCIA:\n  Celeste Mourier detenida el 16 de diciembre de 1924.\n  Condenada a trabajos forzados perpetuos en enero de 1925.\n  Viktor Brecht extraditado desde Alemania en 1927. Condenado a 20 anos.\n  Dra. Ida Strauss: cargo suspendido por colaborar con la investigacion.\n\nEXPEDIENTE CERRADO." }
        }
      }
    }
  },
  databases: {
    medicina: {
      cicuta: { text: "Informe medico confidencial de la Dra. Strauss encontrado. Envenenamiento confirmado.", reveal: ["/habitaciones/informe_medico.txt"] },
      autopsia: { text: "Nota de investigacion del fiscal sobre el toxico encontrada.", reveal: ["/cocina/receta_cicuta.txt"] }
    },
    ingredientes: {
      amargo: { text: "Pedido especial de Celeste a cocina recuperado. Frasco sin etiqueta identificado.", reveal: ["/cocina/pedido_especial.txt"] }
    },
    contrabando: {
      bodega: { text: "Inventario de bodega B encontrado. Salidas sin registrar identificadas.", reveal: ["/sotano/inventario_bodega.txt"] },
      tuneles: { text: "Mapa de tuneles accesible (cifrado con el nombre del hotel).", reveal: ["/sotano/mapa_tuneles.enc"] }
    },
    doctor: {
      noche: { text: "Testimonio completo de la Dra. Strauss recuperado.", reveal: ["/testimonios/testimonio_ida.txt"] }
    },
    grabacion: {
      marfil: { text: "Grabacion de Mourier y Brecht accesible (cifrada). Clave: nombre del botones testigo.", reveal: ["/testimonios/grabacion_celeste.enc"] }
    },
    panel: {
      bodega: { text: "Mapa de tuneles del sotano accesible (cifrado con nombre del hotel).", reveal: ["/sotano/mapa_tuneles.enc"] }
    },
    carta: {
      havermill: { text: "Carta complementaria de Havermill al fiscal Renard recuperada.", reveal: ["/finanzas/carta_havermill.txt"] }
    },
    cuentas: {
      hotel: { text: "Extracto de cuentas del hotel con ingresos no declarados recuperado.", reveal: ["/finanzas/cuentas_hotel.txt"] }
    },
    testimonio: {
      gautier: { text: "Testimonio del huesped Gautier (habitacion 102) recuperado.", reveal: ["/testimonios/testimonio_gautier.txt"] }
    },
    personal: {
      celeste: { text: "Expediente previo de Celeste en Marsella (1921) recuperado.", reveal: ["/personal/expediente_celeste.txt"] }
    },
    entradas: {
      noche: { text: "Nota del portero nocturno sobre los hombres con el baul recuperada.", reveal: ["/recepcion/libro_entradas.txt"] }
    }
  }
};
