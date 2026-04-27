// CASO 3 — ESTÁTICA
var CASE3 = {
  title: "Estatica",
  year: "2024",
  setting: "Comisaria 7, Brigada de Delitos Economicos",
  tagline: "Una oficial muerta, un suicidio que no cuadra y un capitan que cerro el caso en 48 horas.",
  intro: "3 de noviembre de 2024. La oficial Carmen Vidal fue encontrada muerta en su vehiculo.\nCausa oficial: suicidio. El caso fue cerrado en 48 horas por el capitan Rodrigo Mest.\nCopias de seguridad del servidor de emergencia sobrevivieron al borrado del sistema.\nEstas copias son lo que queda. Lee los archivos. Sigue el dinero. Encuentra la verdad.",
  solveFile: "dossier_final.evd",
  startFiles: [
    "/inicio.txt",
    "/expediente/caso_vidal.txt",
    "/expediente/autopsia.txt",
    "/expediente/informe_escena.txt",
    "/personal/perfil_mest.txt",
    "/archivos/turnos_mes.txt",
    "/personal/ficha_vidal.txt",
    "/conclusion/dossier_final.evd"
  ],
  hints: [
    "Lee la autopsia. El forense Parra documenta anomalias. El apodo de Vidal entre companeros es la primera clave.",
    "Usa 'examine disparo' y 'examine residuo' — el angulo del balazo y la ausencia de polvora en la mano derecha de Vidal lo demuestran todo.",
    "Usa 'examine arma' para entender el error que delata el homicidio. Alguien coloco el arma en su mano despues del disparo.",
    "cd expediente → unlock registro_llamadas.enc CARMELA — Las llamadas muestran que Mest sabia donde estaba Vidal.",
    "Usa 'examine parking' para entender por que Mest eligio ese lugar. El vehiculo estaba en el angulo muerto de la unica camara.",
    "Usa 'examine vidal' para ver el recorrido completo de 8 meses de investigacion en silencio que hizo la oficial.",
    "Usa 'profile parra' para entender por que el forense firmo paro cardiaco y que hizo luego para preservar la verdad.",
    "Usa 'search ia denuncia' — Vidal ya habia denunciado a Mest en 2022. El investigo su propia denuncia y la archivo en 3 dias.",
    "Usa 'cd archivos' y lee turnos_mes.txt. Las camaras del deposito de evidencias se apagaban siempre los lunes. Coincide con los accesos de Mest.",
    "Usa 'search evidencia cadena' para ver como Mest desviaba material del deposito.",
    "Usa 'examine nexo' para entender la empresa pantalla. Luego 'examine deposito' para ver el volumen total del desfalco.",
    "Usa 'search nexo transferencias' para ver las transferencias completas a Nexo Capital SL. La cuenta estaba a nombre de la madre de Mest.",
    "Usa 'search fotos agenda' para ver la descripcion de las 20 fotografias que Kowal tomo antes de entregar la agenda a Mest.",
    "Usa 'search correo seguro' para ver los correos borrados que delatan a Mest.",
    "Usa 'search informante x7' para encontrar el aviso que Vidal recibio esa noche.",
    "Usa 'examine fantasma' para entender el codename de Mest con sus contactos externos. Esa palabra aparece en la grabacion de X7.",
    "La reunion en calle Virgo fue grabada. Usa 'search red virgo' y luego unlockea con la clave en el mensaje de X7.",
    "Usa 'profile kowal' y 'profile ibarra' para entender como dos personas dentro del sistema se negaron a cubrir el crimen.",
    "Usa 'examine ibarra' para entender el papel del sargento. Cortó la llamada de Vidal con Mest de pie detras de el.",
    "Usa 'search ia informe' para leer el informe del juzgado anticorrupcion. Sin Kowal y X7, el caso habria quedado enterrado.",
    "El codename de Mest en comunicaciones externas desbloquea el dossier final.",
    "Usa 'timeline' para ver el caso completo desde el primer desfalco en 2022 hasta la detencion de Mest el 22 de noviembre.",
    "Comandos extra: map, timeline, evidence, profile [nombre], examine [termino]."
  ],
  map: "COMISARIA 7 — BRIGADA DELITOS ECONOMICOS\n" +
    "═══════════════════════════════════════════════════\n" +
    "  ┌──────────────┐  ┌──────────┐  ┌────────────────┐\n" +
    "  │  DESPACHO    │  │ SALA DE  │  │   DEPOSITO DE  │\n" +
    "  │  MEST        │  │REUNIONES │  │   EVIDENCIAS   │\n" +
    "  └──────────────┘  └──────────┘  └────────────────┘\n" +
    "  ┌──────────────┐  ┌──────────┐  ┌────────────────┐\n" +
    "  │  PUESTO      │  │ ARCHIVO  │  │  COMUNICACIONES│\n" +
    "  │  VIDAL       │  │ INTERNO  │  │  / RADIO       │\n" +
    "  └──────────────┘  └──────────┘  └────────────────┘\n" +
    "  ┌──────────────┐  ┌──────────────────────────────┐\n" +
    "  │  SALA TEC.   │  │  ENTRADA PRINCIPAL / ACCESOS │\n" +
    "  └──────────────┘  └──────────────────────────────┘\n" +
    "\n" +
    "  EXTERIOR:\n" +
    "  ★ Parking Poligono Norte — ESCENA DEL CRIMEN\n" +
    "  ★ Calle Virgo esquina norte — REUNION GRABADA",
  profiles: {
    vidal: "OFICIAL CARMEN VIDAL — Victima\nEdad: 34. Agente Primera, Brigada de Delitos Economicos, Comisaria 7.\nEspecialidad: rastreo de fondos y activos. 8 anos en el cuerpo.\nApodo entre companeros: Carmela.\nEstaba investigando de forma confidencial el desvio de fondos del deposito de evidencias.\nDescubrio que el capitan Mest era el principal responsable. Muerta el 4/11/2024.",
    mest: "CAPITAN RODRIGO MEST — Principal sospechoso\nEdad: 52. Jefe de la Brigada de Delitos Economicos desde 2018. 19 anos en el cuerpo.\nHistorial: dos investigaciones internas previas, ambas archivadas.\nDesviaba fondos y evidencias hacia la empresa pantalla Nexo Capital SL (registrada en Malta).\nCodname en comunicaciones externas: EL FANTASMA.\nDetenido el 22 de noviembre de 2024.",
    kowal: "AUDITOR A. KOWAL — Tecnico forense\nEdad: 41. Tecnico informatico forense adscrito a la comisaria.\nRecibio un mensaje de Vidal a las 23:50 diciendo que tenia las pruebas.\nFue el quien activo el proceso de auditoria interna tras la muerte de Vidal.\nGuardo una fotografia del contenido de la agenda de Vidal antes de entregarla a Mest.",
    parra: "DR. PARRA — Medico forense\nEdad: 58. Instituto Medico Legal. Forense oficial del caso.\nDocumento anomalias en el patron de disparo que contradicen el suicidio.\nSu solicitud de segunda pericia fue denegada por el capitan Mest.\nCollaborò con Kowal de forma confidencial para preservar las pruebas.",
    ibarra: "SGT. TOMAS IBARRA — Sargento de guardia\nEdad: 38. Llevaba 12 anos trabajando para Mest.\nSeguia ordenes sin cuestionar. Cortó la llamada de Vidal a las 00:07.\nDeclaro ante Kowal que Mest estaba detras de el cuando cortó la llamada.\nCollaborò con la auditoria interna por miedo a ser implicado directamente.",
    x7: "INFORMANTE X7 — Identidad no revelada en este expediente\nConocido por su alias en la comunicacion con Vidal.\nSabia de la empresa pantalla Nexo Capital SL y su conexion con Mest.\nGrabó la reunion en calle Virgo. Esa grabacion es la prueba mas directa del homicidio.\nSu identidad real fue protegida por el juez anticorrupcion."
  },
  examine: {
    disparo: "El angulo del disparo es el elemento mas importante de la autopsia.\nEn un suicidio con pistola en la sien derecha (diestra), el angulo esperado es horizontal o descendente.\nEl disparo real tenia un angulo de 15 grados por encima de la horizontal, desde abajo.\nEso es fisicamente imposible si la victima dispara con su propia mano.",
    residuo: "Los residuos de polvora son la segunda prueba clave.\nEn un disparo a quemarropa con la mano derecha (dominante de Vidal), los residuos son abundantes en esa mano.\nLa autopsia encontro ausencia de residuos en la mano derecha.\nEn la mano izquierda habia micropolvora secundaria, consistente con estar cerca del arma pero no dispararla.",
    arma: "El arma era la pistola reglamentaria de la oficial Vidal.\nLa encontraron en su mano derecha. Pero los residuos no coinciden con esa posicion.\nAlguien la coloco en la mano de Vidal despues del disparo.\nEste es el error tecnico mas grave del escenario montado.",
    nexo: "Nexo Capital SL es la empresa pantalla creada por Mest para recibir los fondos desviados.\nFue registrada en Malta en 2019. Titular: Estela Garzon (madre del capitan Mest).\nLas transferencias desde la brigada usaban el alias interno NEXO.\nLa cuenta de destino era una IBAN francesa con origen en las Islas Caiman.",
    "fantasma": "El codename EL FANTASMA era el alias de Mest en sus comunicaciones con contactos externos.\nAparece en el mensaje de X7 y en la grabacion de la reunion en calle Virgo.\nEra el nombre con el que se identificaba al contratar servicios de 'resolucion de problemas'.\nEs la ultima clave del caso.",
    deposito: "El deposito de evidencias de la brigada fue el origen del desfalco.\nMest tenia acceso permanente desde 2021 (solicitud aprobada por el mismo).\nDesviaba material y fondos en cantidades que parecian no notarse: 13.000 EUR en un caso, 900 gramos en otro.\nPero en cuatro anos sumaban mas de 150.000 EUR y varias kilos de material incautado.",
    vidal: "Carmen Vidal llevaba ocho meses investigando a Mest de forma confidencial.\nTenia documentos de los accesos al deposito, las transferencias y los correos.\nEnvio un mensaje a Kowal a las 23:50 diciendo 'tengo las pruebas'. Fue la ultima comunicacion antes de su muerte.\nSu agenda personal fue sustraida de la escena del crimen por el propio Mest.",
    agenda: "La agenda de cuero de Vidal fue encontrada bajo el asiento de su vehiculo.\nContenia notas sobre la conexion entre Mest, el deposito y la cuenta NEXO.\nTenia al menos 3 paginas arrancadas. Las paginas que quedaban mencionaban el nombre NEXO.\nKowal la fotografio antes de entregarsela a Mest. Las fotos son una prueba clave.",
    calle: "Calle Virgo, esquina norte, es el punto de encuentro donde X7 vio a Vidal a las 23:28.\nVidal fue al encuentro sola a pesar de la advertencia de X7.\nMest llego con al menos dos personas mas. Forcejeo y disparo.\nX7 grabo todo desde una posicion elevada (ventana de edificio contiguo).",
    est: "Estela Garzon es la madre del capitan Mest.\nFue la titular formal de Nexo Capital SL sin conocer exactamente para que se usaba la empresa.\nEn 2024, cuando Mest fue detenido, declaro que su hijo le habia pedido 'aparecer en unos documentos de empresa'.\nNo fue acusada de ningun delito.",
    kowal: "A. Kowal es el forense informatico que activo la investigacion.\nRecibio el ultimo mensaje de Vidal a las 23:50. Guardo la fotografia de la agenda.\nTrabajó en secreto durante dos semanas antes de contactar con el juzgado anticorrupcion.\nSin Kowal, el caso habria quedado enterrado.",
    ibarra: "El sargento Ibarra es el testimonio mas fragil pero mas valioso.\nCortó la llamada de Vidal a las 00:07 con Mest detras de el.\nSu declaracion es voluntaria: fue a Kowal por propia iniciativa.\nDecidio hablar porque no queria cargar con una muerte en su conciencia.",
    "parking": "El parking del poligono norte fue elegido porque tenia pocas camaras.\nLa unica camara del parking apuntaba hacia la entrada, no hacia el fondo donde estaba el vehiculo de Vidal.\nLa eleccion de ese lugar especifico sugiere conocimiento previo de la topografia del parking.",
    transferencia: "Las transferencias de Mest a Nexo Capital se hacian siempre los lunes.\nLos lunes era cuando el deposito de evidencias tenia menos supervision.\nLas firmas en las transferencias (R.M.) son de Mest pero aparecen como 'autorizacion de transferencia de material'.\nEn los libros de la brigada, aparecen como gastos operativos ordinarios."
  },
  timeline: [
    { time: "2021  (oct.)", event: "Mest solicita y aprueba su propio acceso permanente al deposito de evidencias.", trigger: "/personal/perfil_mest.txt" },
    { time: "2022  (ene.)", event: "Primera transferencia identificada a Nexo Capital SL. Importe: 12.000 EUR.", trigger: "/archivos/transferencias.enc" },
    { time: "2024  (feb.)", event: "Vidal empieza a investigar irregularidades en el deposito tras cerrar un caso.", trigger: "/personal/ficha_vidal.txt" },
    { time: "2024  (oct.)", event: "Vidal recibe material del informante X7 sobre Nexo Capital SL.", trigger: "/informante/mensaje_x7.txt" },
    { time: "02/11  23:17", event: "Mest envia correo cifrado pidiendo 'neutralizar el problema Vidal'.", trigger: "/personal/correos_internos.txt" },
    { time: "03/11  09:44", event: "Respuesta cifrada: 'protocolo del parking autorizado'.", trigger: "/personal/correos_internos.txt" },
    { time: "03/11  22:00", event: "X7 envía advertencia a Vidal: reunion en calle Virgo puede estar caliente.", trigger: "/informante/mensaje_x7.txt" },
    { time: "03/11  23:28", event: "Vidal acude a calle Virgo. Mest llega con dos acompanantes. X7 lo graba.", trigger: "/informante/reunion_grabada.enc" },
    { time: "03/11  23:50", event: "Vidal envia ultimo mensaje a Kowal: 'tengo las pruebas'. Llamada a las 00:02 cortada.", trigger: "/expediente/registro_llamadas.enc" },
    { time: "04/11  00:07", event: "Vidal llama a comisaria. Ibarra corta la llamada. Mest esta presente.", trigger: "/personal/ficha_ibarra.txt" },
    { time: "04/11  00:11", event: "Mest llama a Vidal 28 segundos. Sabe donde esta.", trigger: "/expediente/registro_llamadas.enc" },
    { time: "04/11  06:15", event: "Vehiculo de Vidal encontrado en parking del poligono norte.", trigger: "/expediente/caso_vidal.txt" },
    { time: "04/11  10:00", event: "Mest abre y cierra el caso en menos de 48 horas. Causa: suicidio.", trigger: "/expediente/caso_vidal.txt" },
    { time: "22/11  2024", event: "Juzgado anticorrupcion dicta orden de detencion contra Mest.", trigger: "/conclusion/dossier_final.evd" }
  ],
  filesystem: {
    type: "dir",
    children: {
      "inicio.txt": { type: "file", content: "COMISARIA 7 / SISTEMA INTERNO\nAcceso de auditoria — Caso 2024-0847\nUsuario de auditoria: A. Kowal, Tecnico Forense Informatico\n\nLA OFICIAL CARMEN VIDAL fue encontrada muerta en su vehiculo\nel 4 de noviembre de 2024 a las 06:15 en el parking del poligono norte.\nCausa oficial: suicidio por arma de fuego.\nEl sistema fue bloqueado 72 horas despues del hallazgo por orden del capitan Mest.\n\nEsta sesion de auditoria recupera las copias de seguridad del servidor de emergencia\nque sobrevivieron al borrado del sistema principal.\n\nNota del auditor (A. Kowal):\n  'Carmen me envio un mensaje a las 23:50 diciendo que tenia las pruebas.\n   Nadie que piensa en quitarse la vida manda ese tipo de mensaje.\n   Estoy guardando todo lo que encuentro antes de que lo borren tambien.'\n\nDirectorios: /expediente  /archivos  /personal  /informante  /ia  /conclusion\nComandos: help, ls, cd, read, unlock, search, examine, profile, timeline, evidence, map, hint, clear, menu" },
      expediente: {
        type: "dir",
        children: {
          "caso_vidal.txt": { type: "file", content: "EXPEDIENTE — CASO 2024-0847\nOficial: Carmen Vidal, Agente Primera, Brigada de Delitos Economicos\nInvestigador asignado: Capitan Rodrigo Mest\nFecha de cierre: 6 de noviembre de 2024 (48 horas)\n\nHALLAZGO:\n  Vehiculo personal de Vidal (Volkswagen Golf, matric. 4782-HJK) en parking poligono norte.\n  Disparo unico en sien derecha. Arma: pistola reglamentaria de la agente.\n  Vehiculo cerrado desde el exterior (cerradura sin huellas internas detectadas).\n  Movil de la agente: AUSENTE del escenario.\n  Agenda de cuero: encontrada bajo el asiento delantero.\n\nRESOLUCION OFICIAL (Mest):\n  'Caso cerrado como suicidio. Sin indicios de intervencion de terceros.\n   La oficial Vidal presentaba indicadores de estres severo por carga de trabajo.'\n\nNOTA DEL AUDITOR KOWAL:\n  La oficial Vidal era la investigadora del caso de corrupcion interna\n  en el que el capitan Mest era el principal sospechoso.\n  Mest cerro el caso de la muerte de su propia investigadora.\n  Eso es, como minimo, un conflicto de intereses absoluto." },
          "autopsia.txt": { type: "file", content: "AUTOPSIA — OFICIAL CARMEN VIDAL\nForense: Dr. Parra, Instituto Medico Legal\nFecha: 4 de noviembre de 2024\n\nHORA DE MUERTE: entre las 00:10 y las 00:40 del 4/11\n\nDISPARO:\n  Angulo: 15 grados por encima de la horizontal, desde la derecha y abajo.\n  En un suicidio de diestra disparandose en sien derecha, el angulo esperado\n  es horizontal o ligeramente descendente. Este angulo es INCOMPATIBLE con autoadministracion.\n\nRESIDUOS DE POLVORA:\n  Mano derecha (dominante): AUSENCIA TOTAL de residuos de disparo.\n  Mano izquierda: micropolvora secundaria, consistente con proximidad al arma sin dispararla.\n\nOTROS HALLAZGOS:\n  Hematoma contuso en hombro izquierdo (reciente, antemortem)\n  Leve abrasion en palma de la mano izquierda\n  Ambas lesiones sugieren forcejeo previo al disparo\n\nNOTA DEL FORENSE (marcada en rojo en el original):\n  'ESTE NO ES UN SUICIDIO. El angulo y la ausencia de residuos son determinantes.\n   Solicite segunda pericia. Me fue denegada por el capitan Mest.\n   Firm\u00e9 el informe oficial bajo protesta. Guardo este documento como registro privado.'" },
          "informe_escena.txt": { type: "file", content: "INFORME DE ESCENA — PARKING POLIGONO NORTE\nTecnico: A. Kowal, Laboratorio Forense\nFecha: 4 de noviembre de 2024\n\nHALLAZGOS:\n  Vehiculo cerrado desde el exterior (cerradura forzada brevemente, despues reestablecida)\n  Movil de la agente: AUSENTE\n  Agenda de cuero: encontrada bajo el asiento delantero, medio oculta\n  Una taza de cafe en el portavasos: fria, medio llena\n\nCONTENIDO PARCIAL DE LA AGENDA (photographied antes de entregar a Mest):\n  'Mest sabe que lo se. La reunion fue el viernes.\n   Vi el nombre: NEXO. Transferencia a cuenta de salida del deposito de evidencias.\n   Los accesos al deposito coinciden con las fechas de las transferencias.'\n\n  Paginas arrancadas: al menos 3\n\nNOTA DE KOWAL:\n  'El capitan Mest me pidio que no registrara la agenda en el inventario oficial.\n   Le dije que ya la habia fotografiado. Se quedo palido.\n   Esas fotografias estan ahora en un servidor externo al sistema de la comisaria.'" },
          "registro_llamadas.enc": { type: "file", locked: true, password: "CARMELA", content: "REGISTRO DE LLAMADAS — MOVIL OFICIAL DE VIDAL\nRecuperado por A. Kowal del operador telefónico\n\n23:50  Llamada saliente a A. Kowal — 2 min 14 seg\n       [Kowal: 'Me dijo que tenia las pruebas completas y que las entregaria manana.']\n\n00:02  Llamada entrante de numero desconocido (numero de prepago) — cortada a los 3 seg\n\n00:07  Llamada saliente al turno de guardia de comisaria — sin respuesta\n       [Ibarra la corto. Mest estaba detras de el.]\n\n00:08  Llamada saliente al movil personal de Kowal — sin respuesta\n       [Kowal: 'Estaba durmiendo. No la oi. Me despertó el mensaje de las 23:50.']\n\n00:11  Llamada entrante de R. Mest (movil personal) — 28 seg\n       [FRAGMENTO RECUPERADO DEL SERVIDOR DEL OPERADOR]\n       Mest:  Carmen, necesito que te calmes. Habla conmigo.\n       Vidal: No hay nada que hablar. Tengo el transfer completo, los accesos\n              al deposito y los numeros de cuenta. Todo.\n       Mest:  Donde estas ahora mismo?\n       Vidal: Parking del poligono, esperando a...\n       [Llamada cortada]\n\nNOTA CRITICA:\n  El capitan Mest conocia la ubicacion exacta de Vidal\n  entre 10 y 30 minutos antes de la hora de muerte estimada.\n  Mest no report\u00f3 haber llamado a Vidal esa noche en ningun informe." },
          "fotos_agenda.txt": { type: "file", hidden: true, content: "DESCRIPCION DE FOTOGRAFIAS — AGENDA DE VIDAL\nKowal, 4 de noviembre de 2024\n\n[20 fotografias tomadas antes de entregar la agenda a Mest]\n\nFOTO 1-3: Portada y primeras paginas. Sin contenido relevante.\nFOTO 4: Lista de accesos al deposito con fechas y firmas. Todas firmas de R. Mest.\nFOTO 5: Tabla comparativa: fechas de acceso al deposito vs. fechas de transferencias a NEXO.\n         Coincidencia perfecta en 12 de los 14 casos listados.\nFOTO 6: Nombre y IBAN de la cuenta destino: NEXO CAPITAL SL, cuenta offshore.\nFOTO 7: Anotacion de Vidal: 'Nexo = Estela Garzon. Nombre: madre de Mest.'\nFOTO 8: Mapa manuscrito con 'calle Virgo - X7 - 23:30' subrayado.\nFOTOS 9-11: Paginas en blanco con bordes rasgados — paginas arrancadas.\nFOTOS 12-16: Mas tablas de acceso. Total desvio estimado: 150.000+ EUR.\nFOTO 17: 'EL FANTASMA = codename de Mest en comun. ext.' — subrayado dos veces.\nFOTOS 18-20: Lista de testigos potenciales. Includes X7 como 'fuente confidencial activa'.\n\nNOTA DE KOWAL:\n  La foto 17 es la mas importante. El codename EL FANTASMA era desconocido para la brigada." }
        }
      },
      archivos: {
        type: "dir",
        children: {
          "turnos_mes.txt": { type: "file", content: "TURNOS DE OCTUBRE — NOVIEMBRE 2024\nBrigada 7 / Delitos Economicos\n\nVIDAL: turno diurno L-V, disponibilidad nocturna bajo pedido\nMEST:  turno flexible con acceso permanente al deposito de evidencias (desde 2021)\nIBARRA: turno nocturno D-V, puesto de guardia de comisaria\n\nACCESOS AL DEPOSITO (octubre 2024):\n  Mest:   14 accesos en 4 semanas (media habitual del resto del personal: 2-3 por semana)\n  Vidal:  2 accesos (ambos por investigacion activa del caso NEXO)\n\nINCIDENCIA DE CAMARAS:\n  La camara del deposito de evidencias estuvo offline los dias:\n  7, 14, 21 y 28 de octubre (siempre lunes)\n  Ningun parte de mantenimiento ampara esos apagados.\n  Los dias de apagado coinciden exactamente con los dias de mayores accesos de Mest." },
          "evidencia_log.txt": { type: "file", hidden: true, content: "LOG DE CUSTODIA DE EVIDENCIAS — BRIGADA 7\nAuditoria interna de Kowal / Noviembre 2024\n\nCASO 2022-0341 (narcoticos):\n  Peso en ingreso:    3.0 kg\n  Peso en cierre:     2.1 kg  [900 gramos sin justificar]\n  Firma de cierre:    R. Mest\n  Diferencia:         300.000 EUR estimados en mercado\n\nCASO 2023-0612 (efectivo incautado):\n  Importe en ingreso: 48.000 EUR\n  Importe en entrega: 35.000 EUR\n  Diferencia:         13.000 EUR desaparecidos\n  Firma de transferencia: R. Mest\n\nCASO 2024-0118 (joyeria):\n  Piezas en ingreso:  22 piezas\n  Piezas en cierre:   19 piezas\n  Firma:              R. Mest\n\nPATRON EN TODOS LOS CASOS:\n  Alias de cuenta receptora: NEXO\n  Cuenta de salida: no identificada en sistema oficial de la brigada\n\nTOTAL ESTIMADO DESVIADO:\n  Efectivo:    62.000 EUR\n  Material:    valor estimado 300.000 EUR\n  TOTAL:      ~362.000 EUR (periodo 2021-2024)" },
          "transferencias.enc": { type: "file", hidden: true, locked: true, password: "NEXO", content: "TRANSFERENCIAS IDENTIFICADAS — RED NEXO CAPITAL\nFuente: extractos bancarios obtenidos por juzgado anticorrupcion\n\nCUENTA ORIGEN: brigada 7 (cuenta operativa de material)\nCUENTA DESTINO: IBAN-FR902100... (offshore, Islas Caiman)\nTITULAR DECLARADA: Nexo Capital SL\nTITULAR REAL: Estela Garzon (madre del capitan Rodrigo Mest)\nREGISTRO: Malta, 2019\n\nTRANSFERENCIAS DOCUMENTADAS:\n  14/10/2024 — 12.000 EUR — Firma: R.M.\n  21/10/2024 —  8.500 EUR — Firma: R.M.\n  28/10/2024 — 15.000 EUR — Firma: R.M.\n  04/11/2024 —  4.200 EUR — Firma: R.M. [dia del hallazgo de Vidal]\n\nNOTA DEL JUZGADO:\n  La transferencia del 04/11 se realizo horas despues del hallazgo del cuerpo de Vidal.\n  Esto sugiere que Mest actuo con completa normalidad operativa ese mismo dia.\n\nNOTA DE VIDAL (copiada de su agenda, foto 7):\n  'Nexo Capital SL = Estela Garzon. Madre de Mest.'\n  'Total estimado desvio 2021-2024: +150.000 EUR en efectivo. Mas material.'" }
        }
      },
      personal: {
        type: "dir",
        children: {
          "ficha_vidal.txt": { type: "file", content: "FICHA DE PERSONAL — OFICIAL CARMEN VIDAL\nCargo: Agente Primera, Brigada 7, Delitos Economicos\nEdad: 34. Incorporacion al cuerpo: 2016.\nEspecialidad: rastreo de fondos, activos y patrimonio ilicito.\n\nEVALUACION (Mest, 2023):\n  'Vidal es meticulosa y eficiente. A veces demasiado persistente.'\n\nNOTA DEL AUDITOR KOWAL:\n  'Carmen lleva 8 meses documentando el desfalco de Mest en silencio.\n   No confio en nadie de la brigada por miedo a una fuga de informacion.\n   Solo me informo a mi, y solo el dia antes de que la mataran.\n   Apodo entre los companeros de brigada: Carmela.'" },
          "perfil_mest.txt": { type: "file", content: "PERFIL — CAPITAN RODRIGO MEST\nCargo: Capitan de la Brigada de Delitos Economicos, Comisaria 7\nEdad: 52. En el cuerpo desde 2005. Capitan desde 2018.\n\nINVESTIGACIONES INTERNAS PREVIAS:\n  2019: Irregularidad en deposito de evidencias. Archivada. Investigador: Mest.\n  2022: Denuncia formal de la oficial Vidal. Archivada. Investigador: Mest.\n\nNOTA CRITICA:\n  En 2022 Mest fue puesto a cargo de investigar su propia denuncia.\n  Ese proceso fue archivado en 72 horas. Sin documentacion disponible.\n\nNOTA DE RRHH:\n  'El capitan solicito acceso permanente al deposito en octubre de 2021.\n   La solicitud fue aprobada por el mismo en calidad de jefe de brigada.'" },
          "correos_internos.txt": { type: "file", hidden: true, content: "CORREOS INTERNOS RECUPERADOS\nServidor de copia de emergencia — no afectado por el borrado del 6/11\n\n[Correo 1]\nDE: r.mest@brigada7.es\nFECHA: 02/11/2024 — 23:17\n'Vidal esta demasiado cerca. Ha encontrado los registros de NEXO.\nNecesito resolver esto antes del viernes. Protocolo del parking.\nMisma forma que la vez anterior. Necesito tu apoyo para el 3 de noche.'\n\n[RESPUESTA]\nFECHA: 03/11/2024 — 09:44\n'Protocolo del parking autorizado. Sin marcas visibles.\nEl arma de ella es suficiente para el escenario.\nConfirma hora de contacto con ella.'\n\nNOTA: 'La vez anterior' es una referencia no identificada en este expediente.\nEl juzgado anticorrupcion abrió una linea de investigacion separada sobre ese punto." },
          "ficha_ibarra.txt": { type: "file", hidden: true, content: "DECLARACION — SGT. TOMAS IBARRA\nTranscripcion: A. Kowal, Auditoria Interna / 12 de noviembre, 2024\n\nKowal: La noche del 3 al 4 de noviembre, donde estaba usted?\nIbarra: De turno en comisaria, puesto de guardia. Puedo demostrarlo con la tarjeta de fichar.\n\nKowal: El capitan Mest le dio alguna instruccion especial ese dia?\nIbarra: Si. Me dijo que si la oficial Vidal llamaba a la comisaria por cualquier motivo\n         esa noche, que no le pasara la llamada y que la anotara como 'sin incidencia'.\n\nKowal: Ella llamo?\nIbarra: Llamo. A las 00:07. Colgue inmediatamente.\n         El capitan Mest estaba de pie detras de mi cuando lo hice.\n         Me dijo 'muy bien' y se fue a su despacho.\n\nKowal: Supo despues lo que le paso a la oficial Vidal?\nIbarra: Si. Al dia siguiente. Cuando vi el informe del parking...\n         Fui a vomitar al bano. Juro que no sabia que iba a pasar eso.\n         No lo sabia. Pero tampoco pregunte. Y eso me tiene que pesar.\n\nKowal: Esta dispuesto a ratificar esta declaracion ante el juzgado?\nIbarra: Si. Completamente. Yo no voy a cubrir un homicidio." }
        }
      },
      informante: {
        type: "dir",
        children: {
          "mensaje_x7.txt": { type: "file", hidden: true, content: "MENSAJE RECUPERADO — INFORMANTE X7\nRecibido por Vidal el 03/11/2024 a las 22:00\nCanal: aplicacion cifrada de mensajeria\n\n'Carmela:\n\nTengo el nombre de la empresa pantalla de Mest.\nEs Nexo Capital SL, registrada en Malta. Titular formal: Estela Garzon, su madre.\nEl rastro financiero es solido. Doce transferencias identificadas.\n\nPero la reunion en calle Virgo puede estar comprometida.\nMest tiene contactos fuera del cuerpo. Gente que hace trabajos sucios.\nSu codname con esos contactos es EL FANTASMA.\n\nNo vayas sola esta noche. Lleva a alguien de confianza fuera de la brigada.\n\nEl capitan ya sabe que estas cerca. Alguien te informo a ti... y alguien le informo a el.\n\nX7'" },
          "reunion_grabada.enc": { type: "file", hidden: true, locked: true, password: "VIRGO", content: "[GRABACION DE REUNION — CALLE VIRGO, ESQUINA NORTE]\nGrabada por X7 desde ventana del tercer piso del edificio contiguo\nFecha: 03/11/2024 — 23:28\n\n[Pasos sobre asfalto mojado. Farola norte encendida.]\n\nMest:  Carmen. Veo que eres puntual.\nVidal: Rodrigo. Tengo todo. Esto puede terminar ahora, de forma ordenada.\nMest:  No hay ninguna forma ordenada en la que esto termine bien para ti.\nVidal: Los transfers. Los accesos al deposito. Los numeros de cuenta. Los correos.\n       Si no aparezco manana, todo eso llega al juzgado automaticamente.\nMest:  Quien mas lo sabe?\nVidal: Nadie que tu puedas alcanzar antes que yo.\n\n[Ruido de pasos — tres personas mas entrando en cuadro]\n\nVidal: Espera... que hacen esos... suelta...\nMest:  No debiste venir sola, Carmen.\n\n[Forcejeo — golpe seco contra superficie metalica — silencio de 8 segundos]\n[Disparo unico]\n[Pasos rapidos alejandose]\n\nX7 (susurrando, en la grabacion):\n  'Llame a emergencias. Llame a Kowal. El que les acaba de hablar\n   es el Fantasma. Y acaba de matar a mi mejor informante.'" }
        }
      },
      ia: {
        type: "dir",
        children: {
          "expediente_ia_2022.txt": { type: "file", hidden: true, content: "EXPEDIENTE — ASUNTOS INTERNOS / CASO 2022-IAI-009\nDenuncia contra: Capitan Rodrigo Mest\nDenunciante: Oficial Carmen Vidal\nFecha: 14 de marzo de 2022\n\nCONTENIDO DE LA DENUNCIA:\n  Vidal denuncia irregularidades en el deposito de evidencias del caso 2022-0341.\n  Documenta discrepancias de 900 gramos de material y 13.000 EUR en efectivo.\n  Senala al capitan Mest como firmante de los documentos de cierre.\n\nRESOLUCION DE ASUNTOS INTERNOS:\n  Fecha de resolucion: 17 de marzo de 2022 (3 dias)\n  Responsable del informe: Capitan Rodrigo Mest [conflicto de intereses no declarado]\n  Resultado: 'Sin evidencias de conducta irregular. Caso archivado.'\n\nNOTA DEL AUDITOR KOWAL (2024):\n  'Mest investigo su propia denuncia. Le tomo 3 dias archivarlo.\n   La denuncia de Vidal en 2022 fue el inicio de todo.\n   El saba que ella iba a seguir buscando. Por eso actuo en 2024.'" },
          "informe_anticorrupcion.txt": { type: "file", hidden: true, content: "INFORME INICIAL — JUZGADO ANTICORRUPCION\nJuez: Hon. M. Quijano\nFecha: 8 de noviembre de 2024 (4 dias despues del asesinato)\n\nMATERIA:\n  Apertura de diligencias por homicidio y corrupcion policial.\n  Caso 2024-0847 (muerte de la oficial Carmen Vidal).\n\nFUENTES INICIALES:\n  1. Kowal, A. — Auditor forense. Entrego fotografias de la agenda de Vidal y el registro de llamadas.\n  2. Dr. Parra — Forense. Entrego su informe medico confidencial con observaciones reales.\n  3. X7 — Informante. Entrego la grabacion de la reunion en calle Virgo.\n\nORDEN DE DETENCION:\n  Emitida contra Rodrigo Mest el 22 de noviembre de 2024.\n  Ejecutada esa misma tarde en el domicilio del capitan.\n\nNOTA:\n  El caso se desestimaria como suicidio si Kowal no hubiera fotografiado la agenda\n  y si X7 no hubiera grabado la reunion. Esos dos hechos son los que cambian todo." }
        }
      },
      conclusion: {
        type: "dir",
        children: {
          "dossier_final.evd": { type: "file", locked: true, password: "FANTASMA", content: "DOSSIER FINAL — CASO 2024-0847\nAuditoria Interna / A. Kowal / Juzgado Anticorrupcion\nFecha de resolucion: 22 de noviembre de 2024\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nRESPONSABLE PRINCIPAL: Capitan Rodrigo Mest\n               Brigada 7, Delitos Economicos\n               Codename externo: EL FANTASMA\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nVICTIMA: Oficial Carmen Vidal, 34 anos, Agente Primera\n\nMETODO:\n  Homicidio simulado como suicidio.\n  Vidal fue incapacitada en calle Virgo por Mest y al menos dos colaboradores externos.\n  Trasladada al parking del poligono norte.\n  Disparo con su propia arma. Escena manipulada para simular suicidio.\n  Error del perpetrador: ausencia de residuo de polvora en mano dominante de Vidal.\n\nMOTIVO:\n  Vidal habia completado una investigacion que documentaba:\n  — Desvio sistematico de evidencias y fondos: ~362.000 EUR (2021-2024)\n  — Empresa pantalla: Nexo Capital SL (Malta, titular: Estela Garzon)\n  — Patron de accesos al deposito coincidente con transferencias\n\nCOMPLICES:\n  Autores materiales del homicidio: no identificados (codname: FANTASMA / contactos externos)\n  Cobertura interna: Sgt. Ibarra (sin conocimiento del homicidio)\n  Encubrimiento forense: bloqueado por el propio Mest (denegacion de segunda pericia)\n\nPRUEBAS DETERMINANTES:\n  1. Grabacion de X7 en calle Virgo (Mest presente, disparo grabado)\n  2. Autopsia real del Dr. Parra (angulo incompatible; sin residuos en mano derecha)\n  3. Registro de llamadas (Mest sabia la ubicacion de Vidal minutos antes de su muerte)\n  4. Correos cifrados 'protocolo del parking' (planificacion del homicidio)\n  5. Transferencias NEXO documentadas (motivo: preservar el desfalco)\n  6. Declaracion del Sgt. Ibarra (Mest en guardia cuando se corto la llamada de Vidal)\n  7. Fotografias de la agenda de Vidal (Kowal) — codigo FANTASMA identificado\n\nSENTENCIA:\n  Rodrigo Mest: 30 anos de prision por homicidio en primer grado y corrupcion policial.\n  Colaboradores externos: identificados y detenidos en 2025. Penas de 18 a 24 anos.\n  Sgt. Ibarra: 2 anos suspension y colaboracion forzosa. Pena suspendida.\n\nEXPEDIENTE CERRADO." }
        }
      }
    }
  },
  databases: {
    evidencia: {
      cadena: { text: "Log de custodia de evidencias con irregularidades de Mest recuperado.", reveal: ["/archivos/evidencia_log.txt"] }
    },
    correo: {
      seguro: { text: "Correos internos cifrados del servidor de emergencia recuperados.", reveal: ["/personal/correos_internos.txt"] }
    },
    informante: {
      x7: { text: "Mensaje del informante X7 con el codename EL FANTASMA recuperado.", reveal: ["/informante/mensaje_x7.txt"] }
    },
    red: {
      virgo: { text: "Grabacion de la reunion en calle Virgo accesible (cifrada). Clave: nombre de la calle.", reveal: ["/informante/reunion_grabada.enc"] }
    },
    testigo: {
      ibarra: { text: "Declaracion del Sgt. Ibarra recuperada. Testimonio clave.", reveal: ["/personal/ficha_ibarra.txt"] }
    },
    fotos: {
      agenda: { text: "Descripcion de las fotografias de la agenda de Vidal recuperada.", reveal: ["/expediente/fotos_agenda.txt"] }
    },
    nexo: {
      transferencias: { text: "Transferencias de Nexo Capital accesibles (cifradas). Clave: nombre de la empresa.", reveal: ["/archivos/transferencias.enc"] }
    },
    ia: {
      denuncia: { text: "Expediente de Asuntos Internos de 2022 recuperado. Denuncia original de Vidal.", reveal: ["/ia/expediente_ia_2022.txt"] },
      informe: { text: "Informe inicial del juzgado anticorrupcion recuperado.", reveal: ["/ia/informe_anticorrupcion.txt"] }
    }
  }
};
