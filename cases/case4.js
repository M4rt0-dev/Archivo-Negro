// CASO 4 — SEÑAL PERDIDA
var CASE4 = {
  title: "Señal Perdida",
  year: "2089",
  setting: "Estación orbital Helios-3, órbita baja terrestre",
  tagline: "Siete tripulantes muertos. Un experimento sin consentimiento. El científico escapó solo.",
  intro: "14 de enero de 2089. La estación Helios-3 fue declarada pérdida. Cero supervivientes.\nCausa oficial: fallo en cadena de soporte vital.\nSeis meses después, la sonda de recuperación Artemis encontro la caja negra.\nEsta sesión de recuperación contiene lo que queda. Descubre que hizo el Dr. Cassius.",
  solveFile: "registro_final.evd",
  startFiles: [
    "/bienvenida.txt",
    "/bitacoras/bitacora_general.txt",
    "/bitacoras/diario_tecnico.txt",
    "/experimentos/protocolo_helio.txt",
    "/comunicaciones/transmision_01.txt",
    "/tripulacion/ficha_oretz.txt",
    "/tripulacion/ficha_cassius.txt",
    "/conclusion/registro_final.evd"
  ],
  hints: [
    "Lee la bitácora de Oretz. Menciona a su hija de 9 años. El nombre de la hija es la primera clave.",
    "cd bitacoras → unlock ultimo_mensaje_oretz.enc LYRA — El mensaje revela el código admin de la estación.",
    "Usa 'examine dao' para entender por qué el orden de los apagados fue la primera pista. Un fallo real sigue el orden inverso.",
    "Usa 'profile oretz' y lee su bitácora completa. Supo lo que estaba pasando antes que nadie y lo documento todo.",
    "Usa 'examine oretz' para entender su cadena de decisiones. Envio alertas a Tierra, pero el Consorcio controló la respuesta.",
    "Usa 'cd bitacoras' y lee diario_tecnico.txt. Novak detectó que los sensores de O2 estaban falsificados el 8 de enero.",
    "Usa 'examine novak' para entender la cadena de descubrimientos. Ella fue la primera en ver la manipulacion de sensores.",
    "Usa 'examine ntx7' para entender el agente químico. Luego 'examine cero' para ver la diferencia entre el protocolo oficial y el real.",
    "cd experimentos → unlock resultados_ocultos.enc CERO — Los resultados muestran el plan de Cassius.",
    "Usa 'cd tripulacion' → usa 'search tripulación medico' para ver los sintomas dia a dia en cada miembro del modulo 3.",
    "Usa 'examine control tierra' para entender por qué las alertas de Oretz fueron ignoradas. El operador no sabía lo que transmitía.",
    "Usa 'search doctor experimento' para el perfil real de Cassius del Consorcio.",
    "Usa 'search consorcio contrato' para leer el contrato ORION. Exige datos de 'sujetos reales'. La tripulación era el experimento.",
    "Usa 'search consorcio transmisión' para leer el mensaje del Consorcio autorizando el protocolo PROMETEO. Es la prueba institucional del crimen.",
    "cd sistemas → unlock acceso_admin.enc HELIO para ver todos los accesos de Cassius.",
    "Usa 'search oxigeno fallo' para ver el log del crimen paso a paso.",
    "Usa 'examine 0322' para entender el momento exacto en que Cassius apago el reciclaje global de toda la estación.",
    "Usa 'cd comunicaciones' y lee alerta_interna.txt. La deshabilitacion del soporte vital requeria firma de DOS oficiales. Solo hay una.",
    "Usa 'search prometeo plan' para acceder al manifiesto de Cassius.",
    "Usa 'cd sistemas' → unlock manifiesto_cassius.enc PROMETEO para leer lo que escribio Cassius 13 minutos antes de matar a Oretz.",
    "Usa 'examine orion' — el nombre de la estación privada adonde huyo Cassius es la contraseña del veredicto final.",
    "El punto de destino de la capsula de Cassius es la última clave. Usa 'examine capsula'.",
    "Usa 'timeline' para ver la cronologia completa desde el dia 1 del experimento hasta la detencion de Cassius en julio de 2089.",
    "Comandos extra: map, timeline, evidence, profile [nombre], examine [termino]."
  ],
  map: "HELIOS-3 — ESTACION ORBITAL\n" +
    "Orbita: 387 km. Inclinación: 28.5°\n" +
    "═══════════════════════════════════════════════════\n" +
    "  ┌────────────────┐  ┌────────────────┐\n" +
    "  │  MODULO MANDO  │  │  LABORATORIO   │\n" +
    "  │  (Oretz)       │  │  (Cassius)     │\n" +
    "  └───────┬────────┘  └────────┬───────┘\n" +
    "          └──────────┬──────────┘\n" +
    "  ┌──────────────────┴─────────────────────┐\n" +
    "  │           NUCLEO CENTRAL               │\n" +
    "  │     (acceso a todos los modulos)       │\n" +
    "  └────┬──────────────────────┬────────────┘\n" +
    "       │                      │\n" +
    "  ┌────┴───────┐       ┌──────┴────────────┐\n" +
    "  │  MODULO 3  │       │  SISTEMAS SOPORTE │\n" +
    "  │  TRIPULACION│      │  VITAL / OPS      │\n" +
    "  │  (7 pers.) │       │                   │\n" +
    "  └────────────┘       └───────────────────┘\n" +
    "  ┌────────────┐       ┌───────────────────┐\n" +
    "  │  CÁPSULA   │       │  COMUNICACIONES   │\n" +
    "  │ EMERGENCIA │       │  (transm. Tierra) │\n" +
    "  └────────────┘       └───────────────────┘\n" +
    "  ★ ORION-447: Estación privada del Consorcio (destino de Cassius)",
  profiles: {
    oretz: "COMANDANTE YAEL ORETZ — Víctima (lider de la tripulación)\nEdad: 41. Israelita. Piloto de órbita. Comandante desde 2085.\nHija: Lyra Oretz, 9 años (en Tierra, en custodia del padre).\nDescubrio que el experimento CERO no era lo que les habian dicho.\nIntento cerrar el experimento manualmente la noche del 13 de enero.\nMurio en Helios-3 la madrugada del 14 de enero de 2089.",
    cassius: "DR. FENN CASSIUS — Principal responsable\nEdad: 48. Británico. Neurocientifico y farmacologista.\nEspecialidad declarada: adaptación del sistema nervioso en microgravedad.\nEspecialidad real: desarrollo de agentes neurotroficos para control militar.\nContratado por el Consorcio Artemis con pleno conocimiento de la metodología real.\nEvacu\u00f3 la estación en capsula personal a las 01:00. Fue detenido en ORION-447 en julio de 2089.",
    novak: "ING. PETRA NOVAK — Víctima (ingeniería de sistemas)\nEdad: 35. Checa. Especialidad: sistemas de soporte vital y monitorizacion atmosférica.\nDescubrio que alguien había falsificado las lecturas de O2 del modulo 3.\nInformo a Oretz el 12 de enero. No pudo impedirlo.\nMurio en Helios-3 la madrugada del 14 de enero de 2089.",
    dao: "OFICIAL SEREN DAO — Investigadora\nEdad: 29. Misión de recuperación Artemis, sonda enviada 6 meses después.\nFue la primera en revisar la caja negra y los archivos de la estación.\nDocumento el orden exacto de los apagados: sensores primero, reciclaje después, alarma al final.\nEse orden inverso al fallo técnico normal fue lo que la hizo sospechar.",
    consorcio: "CONSORCIO ARTEMIS — Complice institucional\nOrganizacion de investigacion privada con contratos de defensa con gobiernos de 12 naciones.\nFinanciaba el programa NTX-7 (agente neurotrofico) para uso militar.\nConocia y autorizo la metodología real del experimento CERO.\nFue procesado en 2090 bajo el Tratado de La Haya Espacial, articulo 32."
  },
  examine: {
    ntx7: "El agente NTX-7 es el compuesto neurotrofico sintetico que Cassius estaba probando en la tripulación.\nFue administrado vía el sistema de reciclaje atmosférico de la estación.\nEn el sistema de ventilación a dosis de 0.003 mg por metro cúbico, actúa de forma acumulativa.\nEfecto a los 6 dias: lentitud cognitiva. A los 10 dias: deterioro grave. Sin antídoto conocido.",
    cero: "El experimento CERO era el nombre de código de la investigacion de Cassius.\nEl protocolo oficial declaraba 'estudio de adaptación del SN en microgravedad'.\nEl protocolo real: administracion de NTX-7 a la tripulación sin su consentimiento.\nEl Consorcio lo sabía y lo aprobo con 'plena autorización ejecutiva'.",
    reciclaje: "El sistema de reciclaje atmosférico es el corazon de la supervivencia en la estación.\nRecicla el CO2 y mantiene los niveles de O2 en todos los modulos.\nCassius tuvo acceso completo a ese sistema como investigador principal.\nApagarlo es una sentencia de muerte para toda la tripulación.",
    capsula: "La capsula de emergencia personal fue activada por Cassius a las 01:00 del 14 de enero.\nEs la unica capsula de evacuación individual de la estación. Estaba reservada para el comandante.\nCassius la uso 15 minutos después de confirmar la muerte de todos los tripulantes.\nDestino de la capsula: estación privada ORION-447 del Consorcio Artemis.",
    prometeo: "El nombre de código del plan de Cassius para neutralizar a Oretz y matar a la tripulación.\nApareció en sus comunicaciones internas y en el manifiesto personal.\nIncluia: incapacitar a Oretz, apagar el soporte vital de forma gradual, borrar evidencias y evacuar.\nEl nombre de PROMETEO era conocido por el nivel ejecutivo del Consorcio Artemis.",
    orion: "ORION-447 es una estación privada del Consorcio Artemis en órbita geoestacionaria.\nFue el destino de evacuación de Cassius. Llegó ahi 6 horas después de abandonar Helios-3.\nPasó 6 meses ahi antes de que la sonda Artemis y las autoridades orbitales lo localizaran.\nFue detenido el 14 de julio de 2089. Actualmente en proceso ante el Tribunal de La Haya Espacial.",
    oretz: "La comandante Yael Oretz fue la primera en sospechar del experimento.\nEnvio alertas a Tierra el 10 de enero. La respuesta de Control fue filtrada por el Consorcio.\nDecidio cerrar el experimento manualmente la noche del 13 de enero.\nFue a confrontar a Cassius a las 21:00. No regreso en dos horas. Cassius la incapacitó.",
    novak: "Petra Novak fue la primera en detectar la manipulacion de los sensores de O2.\nEl 8 de enero notó que alguien había subido artificialmente la lectura del modulo 3 en un 5%.\nLo reportó a Oretz el 12 de enero. Juntas intentaron acceder al núcleo de sistemas.\nMurio el 14 de enero junto con el resto de la tripulación.",
    "0322": "Las 00:22 del 14 de enero es la hora en que Cassius apago el sistema de reciclaje global.\nEn ese momento, toda la estación empezó a perder O2.\nLos registros muestran que lo hizo 18 minutos después de que la tripulación del modulo 3 perdiera la consciencia.\nEsperó a estar seguro antes de apagar el sistema global.",
    helio: "HELIO es el código de acceso administrativo de la estación Helios-3.\nFue compartido por Oretz en su mensaje cifrado a su hija Lyra.\nPermite acceder a todos los logs de administrador de la estación.\nLos logs muestran el historial completo de accesos de Cassius en los 7 dias previos al crimen.",
    lyra: "Lyra Oretz tenia 9 años cuando su madre murio.\nVive con su padre en Tel Aviv.\nEl nombre de su hija fue el único código que Oretz uso para cifrar su último mensaje.\nEse mensaje contenía el código admin de la estación: HELIO.",
    dao: "Seren Dao llego a los restos de Helios-3 6 meses después como parte de la mision de recuperación.\nFue la primera en ver el orden de los apagados en los logs.\nSu intuición: un fallo técnico real empieza por los sistemas mas pequeños. Aquí empezó por los sensores.\nEsa observación fue lo que convirtio un accidente en una investigacion de homicidio.",
    antídoto: "No existe antídoto conocido para el NTX-7 en dosis elevadas.\nCassius lo sabía. Era una de las razones por las que lo eligió como agente de prueba.\nEn dosis bajas crónicas (como en el experimento) el efecto es reversible si se para la exposicion.\nPero en la concentracion final que Cassius aplicó, no había vuelta atrás.",
    "control tierra": "Control Tierra recibió las alertas de Oretz el 11 de enero.\nSu respuesta fue: 'No alteren el experimento sin autorización nuestra'.\nEsa respuesta fue redactada bajo influencia del Consorcio Artemis.\nEl operador de turno no sabía lo que estaba diciendo en realidad."
  },
  timeline: [
    { time: "01/01/2089", event: "Inicio de ciclo 7. Todo en parametros nominales. Tripulacion de 7 personas.", trigger: "/bitacoras/bitacora_general.txt" },
    { time: "04/01", event: "Cassius solicita ampliar el experimento CERO. Oretz lo deniega.", trigger: "/bitacoras/bitacora_general.txt" },
    { time: "06/01", event: "Cassius continúa el experimento sin autorización nueva. NTX-7 en reciclaje.", trigger: "/experimentos/resultados_ocultos.enc" },
    { time: "08/01", event: "Novak detecta que los sensores de O2 del modulo 3 han sido falsificados (+5%).", trigger: "/bitacoras/diario_tecnico.txt" },
    { time: "10/01  09:42", event: "Oretz envia alerta urgente a Control Tierra. Pide equipo medico independiente.", trigger: "/comunicaciones/transmision_01.txt" },
    { time: "11/01", event: "Control Tierra responde: 'No alteren el experimento'. Mensaje filtrado por el Consorcio.", trigger: "/comunicaciones/transmision_01.txt" },
    { time: "12/01", event: "Síntomas neurologicos graves en dos tripulantes del modulo 3. Novak informa a Oretz.", trigger: "/bitacoras/bitacora_general.txt" },
    { time: "13/01  20:00", event: "Oretz decide cerrar el experimento manualmente. Va al laboratorio de Cassius.", trigger: "/bitacoras/ultimo_mensaje_oretz.enc" },
    { time: "13/01  21:00", event: "Oretz entra al laboratorio. No regresa. Cassius la incapacita.", trigger: "/sistemas/log_oxigeno.txt" },
    { time: "13/01  23:31", event: "Cassius deshabilita la redundancia del soporte vital del modulo 3.", trigger: "/sistemas/log_oxigeno.txt" },
    { time: "14/01  00:04", event: "Tripulacion del modulo 3 pierde la consciencia.", trigger: "/sistemas/log_oxigeno.txt" },
    { time: "14/01  00:22", event: "Cassius apaga el sistema de reciclaje global. Toda la estación comienza a morir.", trigger: "/sistemas/log_oxigeno.txt" },
    { time: "14/01  00:45", event: "Cassius borra los logs primarios. Sin signos vitales en ningún modulo.", trigger: "/sistemas/acceso_admin.enc" },
    { time: "14/01  01:00", event: "Cassius activa la capsula personal y abandona la estación. Destino: ORION-447.", trigger: "/sistemas/acceso_admin.enc" },
    { time: "14/07/2089", event: "Cassius detenido en ORION-447 por la mision de recuperación Artemis.", trigger: "/conclusion/registro_final.evd" }
  ],
  filesystem: {
    type: "dir",
    children: {
      "bienvenida.txt": { type: "file", content: "HELIOS-3 / NUCLEO DE ARCHIVO\nMision de Recuperacion Artemis — Protocolo POST-EVENTO\nOficial a cargo: Seren Dao / Julio 2089\n\nESTACION HELIOS-3 declarada pérdida el 14 de enero de 2089.\nTRIPULACION: 7 personas. SUPERVIVIENTES: 0.\nCAUSA OFICIAL INICIAL: fallo en cadena de soporte vital.\n\nNota de la oficial Dao (registro personal):\n  'Los sistemas no fallan solos de esta manera.\n   El orden de los apagados es lo que me hizo sospechar:\n   primero los sensores, luego el reciclaje, luego la alarma.\n   Un fallo técnico real sigue el orden inverso.\n   Eso significa que alguien sabía exactamente lo que estaba haciendo.'\n\nDirectorios disponibles:\n  /bitacoras  /experimentos  /comunicaciones  /tripulación  /sistemas  /consorcio  /conclusion\nComandos: help, ls, cd, read, unlock, search, examine, profile, timeline, evidence, map, hint, clear, menú" },
      bitacoras: {
        type: "dir",
        children: {
          "bitacora_general.txt": { type: "file", content: "BITACORA GENERAL — COMANDANTE YAEL ORETZ\nPeriodo: 1 al 13 de enero de 2089\n\n01/01  Inicio del ciclo 7. Tripulacion completa y en buen estado.\n       7 miembros: Oretz (mando), Cassius (investigacion), Novak (sistemas),\n       Reyes (medicina), Park (operaciones), Lind (comunicaciones), Mara (soporte).\n\n04/01  El Dr. Cassius solicita ampliar el experimento CERO mas alla del protocolo aprobado.\n       Denegage. No firmare nada fuera del protocolo original.\n\n06/01  Cassius continúa con el experimento extendido sin mi autorización adicional.\n       Le llame al laboratorio. Me dijo que 'los resultados justifican cualquier riesgo'.\n\n08/01  Primera entrada preocupante de Novak: sensores de O2 del modulo 3 alterados.\n       Alguien subió la lectura un 5%. La tripulación del modulo 3 no lo sabe.\n\n10/01  Transmití alerta urgente a Control Tierra. Pido equipo medico independiente.\n       Respuesta: mínimo 72 horas.\n\n12/01  Síntomas neurologicos en dos tripulantes del modulo 3. Cassius dice que son\n       'reacciones esperadas al protocolo'. Reyes (medico) esta asustado.\n\n13/01  Decidi cerrar el experimento CERO esta noche manualmente.\n       Cassius no lo acepta. Discusión grave en el modulo de mando.\n       Voy al laboratorio ahora mismo. Son las 21:00.\n\n[ULTIMA ENTRADA]" },
          "diario_tecnico.txt": { type: "file", content: "DIARIO TECNICO — ING. PETRA NOVAK\nPeriodo: 8 al 12 de enero de 2089\n\n08/01:\n  Cassius me pidió 'ajustar' los monitores de O2 del modulo 3.\n  Me pregunto si era tecnicamente posible subir la lectura en un 5% sin cambiar el nivel real.\n  Le dije que era posible pero que equivalia a falsificar un sensor de seguridad.\n  Me dijo que era un 'parámetro de calibración experimental'.\n  No lo hice.\n\n09/01:\n  Alguien lo hizo de todas formas. Los monitores del modulo 3 muestran 21.2% de O2.\n  El sensor independiente que tengo en mi terminal muestra 20.2%.\n  La tripulación del modulo 3 cree que todo esta bien. No lo esta.\n\n11/01:\n  La tripulación del modulo 3 empieza a quejarse de fatiga inusual.\n  El Dr. Reyes lo atribuyo a 'desincronización del ritmo circadiano en microgravedad'.\n  Yo lo atribuyo a la exposicion prolongada a menos O2 del que creen tener.\n\n12/01:\n  Le conté todo a la comandante Oretz. Por fin.\n  Vamos a intentar acceder al núcleo de sistemas esta noche.\n  El protocolo de acceso admin lleva el nombre de la estación: HELIO.\n\n13/01:\n  Oretz fue al laboratorio a las 21:00. No ha vuelto en mas de dos horas.\n  La puerta del laboratorio esta cerrada desde dentro." },
          "ultimo_mensaje_oretz.enc": { type: "file", locked: true, password: "LYRA", content: "[MENSAJE PERSONAL — COMANDANTE YAEL ORETZ]\nCifrado el 13/01/2089 a las 20:47 (13 minutos antes de entrar al laboratorio)\nDestinatario: Lyra Oretz, 9 años, Tel Aviv\n\nLyra:\n\nSi lees esto algún día es que no regrese.\n\nEl experimento CERO no es lo que nos dijeron que era.\nNo estudiaba como se adapta el sistema nervioso a la microgravedad.\nEstaba probando un agente químico en nosotros sin decirnos nada.\nUn compuesto que Cassius llama NTX-7.\n\nAlgunos de mis compañeros ya tienen sintomas.\nVoy a cerrar el laboratorio esta noche, cueste lo que cueste.\nPero Cassius controla parte del soporte vital desde su laboratorio.\nSi alguien necesita entrar a los logs reales de la estación,\nel código de acceso administrativo es HELIO.\n\nDi a tu papa que le quiero.\nY Lyra: cuando seas mayor, si alguien te dice que el fin justifica los medios,\npiensa en esta noche.\n\nMama." }
        }
      },
      experimentos: {
        type: "dir",
        children: {
          "protocolo_helio.txt": { type: "file", content: "PROTOCOLO OFICIAL — EXPERIMENTO CERO\nInvestigador principal: Dr. Fenn Cassius\nAprobado por: Consorcio Artemis / Comité de Etica (firma del 15/12/2088)\n\nOBJETIVO DECLARADO:\n  Estudio de adaptación del sistema nervioso central humano\n  a condiciones de microgravedad prolongada.\n\nDURACION APROBADA: 30 dias (ciclo 7 completo)\nSUJETOS: tripulación completa, con consentimiento informado\nRIESGO DECLARADO: bajo — 'no se administrara ninguna sustancia activa sin consentimiento'\n\n[SEGMENTO CON CORRUPCION DE DATOS]\n\n...administracion de NTX-7 vía sistema de reciclaje atmosférico...\n...dosis diaria acumulativa: 0.003 mg por metro cúbico...\n...sujetos NO informados para evitar sesgo en la respuesta neuronalt...\n\n[FIN DEL SEGMENTO]\n\nNota de la oficial Dao:\n  'El protocolo oficial y el borrador real son documentos radicalmente distintos.\n   El Comité de Etica firmo el documento oficial, no el real.\n   Alguien presento un documento distinto al que realmente se ejecutaría.'" },
          "resultados_ocultos.enc": { type: "file", locked: true, password: "CERO", content: "RESULTADOS INTERNOS — EXPERIMENTO CERO\nDr. Fenn Cassius / Log de investigacion privado / Enero 2089\n\nDia  1 (01/01): Inicio de administracion de NTX-7 vía reciclaje. Dosis: 0.003 mg/m3.\n                Tripulacion sin reacciones visibles. Fase de acumulación.\n\nDia  4 (04/01): Oretz solicita información adicional. Deniega ampliar el protocolo.\n                Ajusto los parametros sin su conocimiento. La dosis sube a 0.004 mg/m3.\n\nDia  6 (06/01): Primeros efectos visibles en modulo 3: lentitud cognitiva, fatiga aumentada.\n                Es exactamente lo esperado. Resultados: EXCELENTES.\n\nDia  8 (08/01): Novak detectó la manipulacion de sensores. Demasiado rapida.\n                Le pedi que lo 'ajustara'. Se nego. Lo hice yo directamente.\n\nDia 10 (10/01): Oretz envió alerta a Tierra. El Consorcio controlara la respuesta.\n                Subo la dosis al 0.006 mg/m3 para acelerar los resultados.\n\nDia 12 (12/01): Efectos graves en el modulo 3. Demasiado rápido.\n                Oretz descubrirá todo si no actuó antes del 14.\n\nDia 13 (13/01): Oretz ha decidido cerrar el experimento esta noche.\n                Si CERO se cierra ahora, el Consorcio pierde los contratos ORION.\n                Mas de 1.000 millones en contratos de defensa. Tres años de trabajo.\n                Voy a activar PROMETEO. No tengo otra opcion razonable.\n\n[Día 14: vacio — sistema principal apagado a las 00:22]" },
          "cuaderno_ntx7.txt": { type: "file", hidden: true, content: "CUADERNO DE INVESTIGACION — NTX-7 / DR. FENN CASSIUS\nDocumento recuperado del laboratorio de Helios-3\n\nPROPIEDADES CONFIRMADAS DEL NTX-7:\n  — Clase: neuromodulador sintetico de segunda generacion\n  — Soluble en atmósferas de reciclaje aeróbico\n  — Indetectable mediante analisis de sangre estándar\n  — Dosis umbral efectiva: 0.002 mg/m3 (acumulación en 7-10 dias)\n\nEFECTOS DOCUMENTADOS EN FASE CERO:\n  Días 1-5:   Sin efectos detectables\n  Días 6-8:   Lentitud cognitiva, fatiga\n  Días 9-12:  Deterioro neurologico moderado, desorientación\n  Días 13+:   Incapacidad motora, pérdida de consciencia\n\nPOTENCIAL MILITAR CONFIRMADO:\n  El NTX-7 puede incapacitar una tripulación o unidad en 6-10 dias\n  sin signos externos de envenenamiento.\n  Aplicación: control de personal en instalaciones cerradas,\n  neutralización de tripulaciones enemigas, interrogatorio avanzado.\n\nNOTA DE CASSIUS (al margen):\n  'El Comité de Etica nunca habria aprobado esto si les hubiera dicho la verdad.\n   Por eso no les dije la verdad.'" }
        }
      },
      comunicaciones: {
        type: "dir",
        children: {
          "transmision_01.txt": { type: "file", content: "TRANSMISION 01 — HELIOS-3 A TIERRA\nFecha: 10/01/2089 — 09:42 UTC\nDE: Comandante Y. Oretz\n\n'Control Tierra, aquí Helios-3.\nSolicito revisión urgente del protocolo del investigador Cassius.\nDos tripulantes del modulo 3 presentan deterioro neurologico no previsto.\nSolicito envió de equipo medico independiente en próxima ventana de comunicación.\nOretz fuera.'\n\n[RESPUESTA DE CONTROL TIERRA — 11/01 — 06:18 UTC]\n'Recibido, Helios-3. Revisaremos los protocolos con el equipo científico del Consorcio.\nNo alteren el experimento en curso sin autorización del equipo de tierra.\nMas información en la próxima ventana. Fin.'\n\nNOTA DE DAO (mision de recuperación):\n  La respuesta fue redactada por personal del Consorcio Artemis,\n  no por el equipo medico independiente. El operador de turno en Tierra\n  no sabía lo que estaba transmitiendo en realidad.\n  La respuesta fue deliberadamente vaga para ganar tiempo." },
          "alerta_interna.txt": { type: "file", hidden: true, content: "ALERTA DE SISTEMA — 13/01/2089 — 23:47 UTC\nNivel: CRÍTICO\n\n  MODULO SOPORTE VITAL 3:      FALLO DE REDUNDANCIA\n  Sistema O2 principal modulo 3: OFFLINE\n  Sistema de respaldo modulo 3:  DESHABILITADO MANUALMENTE\n\nORIGEN DEL COMANDO DE DESHABILITATION:\n  Terminal: LAB-01 (Laboratorio principal — Dr. Cassius)\n  Usuario:  f.cassius\n  Hora:     23:31 UTC\n\nNOTA CRITICA:\n  La deshabilitation de la redundancia del soporte vital requiere\n  la confirmacion de DOS oficiales de mando (protocolo de seguridad orbital).\n  Solo se registro la firma de f.cassius.\n  El segundo oficial de confirmacion: CAMPO VACIO.\n\n[No hubo alarma sonora — el sistema de alarma fue silenciado por el mismo usuario]" },
          "transmision_consorcio.txt": { type: "file", hidden: true, content: "TRANSMISION CLASIFICADA — NIVEL EJECUTIVO\nDE: Consorcio Artemis, Directorio Ejecutivo\nPARA: Dr. Fenn Cassius\nFECHA: 12/01/2089 — 14:30 UTC\n\n[COPIA CONSERVADA POR ERROR EN SERVIDOR DE RESPALDO]\n\n'Fenn:\n\nLa situación con Oretz es un riesgo operativo serio.\nSi el experimento se interrumpe, los contratos ORION se cancelan.\nNo podemos permitir que el informe de Oretz llegue a los medicos independientes.\n\nTienes autorización de nivel MAXIMO para proteger el activo.\nActiva PROMETEO si es necesario.\n\nDesde Tierra no intervendremos. Es tu decisión.\n\nConsorcio, Nivel Ejecutivo — Protocolo Omega'\n\nNOTA DE DAO:\n  Este mensaje autoriza explicitamente el homicidio de siete personas.\n  'Proteger el activo' y 'PROMETEO' son el mismo eufemismo.\n  Este correo fue el que hundio al Consorcio en el tribunal." }
        }
      },
      tripulacion: {
        type: "dir",
        children: {
          "ficha_oretz.txt": { type: "file", content: "FICHA DE TRIPULACION — COMANDANTE YAEL ORETZ\nCargo: Comandante de estación, piloto orbital\nEdad: 41. Israelita. En el programa espacial desde 2070.\nMisiones previas: Apolo-L4 (2079), Hermes-2 (2083), Helios-2 (2086).\nFamilia: divorciada. Hija: Lyra Oretz, 9 años, bajo custodia del padre en Tel Aviv.\n\nEVALUACION (Consorcio, 2088):\n  'Oretz es una comandante capaz pero excesivamente rígida en protocolos.\n   Puede suponer un obstáculo para investigaciones que requieran flexibilidad operativa.'\n\nNOTA DE DAO:\n  'Esa evaluación la escribio el Consorcio. Lo que llaman flexibilidad operativa\n   es lo que nosotros llamamos violación de protocolos de seguridad.'" },
          "ficha_cassius.txt": { type: "file", content: "FICHA DE TRIPULACION — DR. FENN CASSIUS\nCargo: Investigador principal, experimento CERO\nEdad: 48. Británico. Formación: neurociencia avanzada y farmacología.\nMisiones previas: 4 misiones clasificadas del Consorcio Artemis.\n\nNOTA DEL CONSORCIO (nivel ejecutivo, confidencial):\n  'Cassius es nuestro activo mas valioso en el programa de control neurotrofico.\n   Ha completado con éxito tres protocolos experimentales sin objeciones éticas.\n   Lo consideramos un recurso irreemplazable para el programa ORION.'\n\nNOTA DE DAO:\n  El 'programa de control neurotrofico' es el nombre de cuatro experimentos\n  realizados en instalaciones cerradas sin consentimiento informado.\n  Cassius es el investigador principal de todos ellos." },
          "registro_medico_tripulacion.txt": { type: "file", hidden: true, content: "REGISTRO MÉDICO — TRIPULACION MODULO 3\nDr. Reyes, Medico de a bordo / Enero 2089\n\nPERSONAL AFECTADO (modulo 3):\n  Park, J.:  Días 1-5: normal. Día 6: fatiga. Día 10: coordinacion reducida. Día 12: grave.\n  Lind, E.:  Días 1-7: normal. Día 8: confusion leve. Día 11: desorientación severa.\n  Mara, S.:  Días 1-9: normal. Día 9: cefalea intensa. Día 12: imposibilidad de comunicarse.\n\nNOTA DEL DR. REYES:\n  'Estos sintomas no tienen explicacion clinica estándar en microgravedad.\n   El patron de aparicion es consistente con exposicion cronica a un agente neurotrofico.\n   Lo documente en la historia clinica pero Cassius me pidió que no lo reportara a Oretz.\n   Le dije que era mi obligacion reportarlo. Al dia siguiente tenia fiebre de 39.\n   No se si fue coincidencia.'" }
        }
      },
      sistemas: {
        type: "dir",
        children: {
          "log_oxigeno.txt": { type: "file", hidden: true, content: "LOG CRÍTICO — SISTEMAS DE OXÍGENO\nHelios-3 / 13 al 14 de enero de 2089\nRecuperado de caja negra (servidor de emergencia autónomo)\n\n21:03  Oretz entra al laboratorio de Cassius (sensor de movimiento)\n21:11  Puerta del laboratorio bloqueada desde el interior (usuario: f.cassius)\n21:19  Silencio en laboratorio — sin comunicaciones registradas durante 2 horas y 12 minutos\n\n23:31  Redundancia de soporte vital modulo 3: DESHABILITADA (usuario: f.cassius)\n23:44  O2 real modulo 3: 18.4% — nivel critico (19% es el umbral de alerta)\n23:52  O2 real modulo 3: 16.1% — tripulación en confusion severa\n00:04  Tripulacion modulo 3: PERDIDA DE CONSCIENCIA (sensores biometricos)\n00:18  Cassius sale del laboratorio (sensor de movimiento núcleo central)\n00:22  Sistema de reciclaje global: OFFLINE (usuario: f.cassius)\n00:31  O2 en todos los modulos: por debajo del 14% — nivel letal\n00:38  Sin signos vitales en modulo 3\n00:44  Sin signos vitales en ningún modulo de la estación\n00:45  Logs primarios: BORRADO INICIADO (usuario: f.cassius)\n00:47  Borrado completado — Logs de respaldo NO afectados (caja negra autónoma)\n01:00  Capsula de emergencia personal: LANZADA\n       Usuario: f.cassius / Destino declarado: ORION-447" },
          "acceso_admin.enc": { type: "file", locked: true, password: "HELIO", content: "LOG DE ACCESOS ADMINISTRADOR — NUCLEO HELIOS-3\nRecuperado de caja negra\n\nACCESOS DEL USUARIO f.cassius EN LOS ULTIMOS 7 DIAS:\n\n  08/01  02:14  Modificación de sensores O2 modulo 3 (lectura +5%)\n  08/01  02:31  Acceso a rutas de ventilación global\n  10/01  03:45  Consulta de protocolos de emergencia de toda la estación\n  12/01  15:00  Consulta de procedimiento de deshabilitation de redundancias\n  13/01  20:55  Accede al menú de soporte vital del modulo 3\n  13/01  23:31  Deshabilita redundancias vitales modulo 3\n  14/01  00:22  Apaga el sistema de reciclaje global\n  14/01  00:45  Borra logs primarios\n  14/01  01:00  Activa capsula personal\n\nPLAN DE CASSIUS (llamado PROMETEO en comunicaciones internas):\n  1. Incapacitar a Oretz antes de que cerrara el experimento (21:00-21:11)\n  2. Apagar el soporte vital del modulo 3 de forma gradual\n  3. Esperar a que toda la tripulación perdiera la consciencia\n  4. Apagar el reciclaje global\n  5. Borrar evidencias digitales\n  6. Evacuar en capsula personal a ORION-447" },
          "manifiesto_cassius.enc": { type: "file", hidden: true, locked: true, password: "PROMETEO", content: "MANIFIESTO PERSONAL — DR. FENN CASSIUS\nEscrito en el laboratorio de Helios-3 el 13/01/2089 — 20:48\nAntes de entrar en contacto con Oretz\n\nLo que hago esta noche lo hago por el avance de la ciencia.\n\nEl agente NTX-7 tiene el potencial de salvar millones de vidas:\npuede neutralizar una amenaza en un espacio cerrado sin fuego cruzado,\nsin bajas civiles, sin destruccion de infraestructura.\nEso es lo que este mundo necesita.\n\nUna tripulación de siete personas no puede ser el limite de ese potencial.\nOretz no entiende lo que esta en juego.\nEl Consorcio si lo entiende. Y me han dado luz verde.\n\nSi lo que hago esta noche resulta en que yo muero también,\npor lo menos los datos de NTX-7 estarán a salvo en los servidores de ORION.\nEl programa continuará.\n\nSi sobrevivo, estare en ORION-447 antes de que encuentren la estación.\n\nDr. Fenn Cassius — 13 de enero de 2089\n\n[NOTA DE DAO]\n  Cassius sobrevivio. Estuvo en ORION-447 durante seis meses.\n  Fue detenido el 14 de julio de 2089.\n  En ninguna pagina de este manifiesto menciona una sola vez a Oretz, Novak, Park, Lind,\n  Mara, Reyes o a ninguno de los siete que mato esa noche por nombre." }
        }
      },
      consorcio: {
        type: "dir",
        children: {
          "contrato_orion.txt": { type: "file", hidden: true, content: "EXTRACTO DE CONTRATO — PROGRAMA ORION\nConsorcio Artemis / Departamento de Defensa (clasificado)\nRecuperado de servidores del Consorcio por el Tribunal de La Haya Espacial\n\nOBJETO:\n  Desarrollo y entrega de un agente de neutralización neurotrofica (NTX-7)\n  para uso en operaciones especiales en entornos cerrados (órbita, submarinos, bases)\n\nVALOR DEL CONTRATO: 1.200 millones USD (en cuatro pagos)\nPLAZO DE ENTREGA: ciclo 7 de Helios-3 (enero 2089)\n\nCONDICION DE PAGO:\n  'Los datos de eficacia en sujetos reales deben incluir:\n   — Dosis umbral de incapacitacion\n   — Tiempo de onset hasta pérdida de consciencia\n   — Tasa de éxito en entorno cerrado (objetivo: 100%)'\n\nNOTA DEL TRIBUNAL:\n  El contrato exige 'sujetos reales'. El Consorcio sabía que eran humanos.\n  La tripulación de Helios-3 no era un efecto secundario del experimento.\n  Era el experimento." },
          "acta_ejecutiva.txt": { type: "file", hidden: true, content: "ACTA DE REUNION EJECUTIVA — CONSORCIO ARTEMIS\nNivel: Directorio. Clasificacion: OMEGA\nFecha: 28 de diciembre de 2088 (16 dias antes de Helios-3)\n\nPUNTO 3: Experimento CERO / Helios-3\n\n'El Directorio ha revisado el protocolo del Dr. Cassius.\nLa metodología real (NTX-7 sin consentimiento) es la unica forma\nde obtener datos de eficacia validados bajo las condiciones que el contrato ORION requiere.\n\nEl Directorio aprueba por unanimidad la metodología real.\nEl Comité de Etica aprobara el protocolo oficial (version publica).\nCassius opera bajo Protocolo Omega: autorización maxima, sin restricciones.\n\nEn caso de exposicion del experimento, se activara el protocolo de cierre PROMETEO.\nCassius ha sido briefeado sobre ese protocolo.'\n\nFIRMAS: [redactadas en el original — restauradas por el tribunal de La Haya]" }
        }
      },
      conclusion: {
        type: "dir",
        children: {
          "registro_final.evd": { type: "file", locked: true, password: "ORION", content: "VEREDICTO FINAL — HELIOS-3\nOficial Seren Dao / Misión de Recuperacion Artemis\nTribunal de La Haya Espacial, articulo 14 / 2090\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nRESPONSABLE DIRECTO: Dr. Fenn Cassius\nRESPONSABLE INSTITUCIONAL: Consorcio Artemis, Directorio Ejecutivo\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nVICTIMAS (7):\n  Cmd. Yael Oretz    — Comandante. Primera en ser incapacitada por Cassius.\n  Ing. Petra Novak   — Sistemas. Habia descubierto la falsificacion de sensores.\n  Dr. Reyes         — Medico. Habia documentado los sintomas del NTX-7.\n  Park, Lind, Mara  — Tripulacion modulo 3. Primeros en perder la consciencia.\n  [Septimo tripulante sin identificar en registros parciales]\n\nMETODO:\n  Cassius administró NTX-7 vía el sistema de reciclaje atmosférico durante 13 dias.\n  La noche del 13 de enero incapacitó fisicamente a Oretz cuando esta fue a cerrar el experimento.\n  Deshabilito el soporte vital del modulo 3 a las 23:31.\n  Apago el reciclaje global a las 00:22 cuando ya toda la tripulación había perdido la consciencia.\n  Borró los logs primarios a las 00:45. Evacuó a las 01:00.\n  La caja negra autónoma no fue afectada por el borrado.\n\nMOTIVO:\n  Preservar los datos del experimento NTX-7 y el contrato ORION del Consorcio Artemis\n  valorado en 1.200 millones de dólares.\n  Si Oretz cerraba el experimento, los datos eran inválidos y el contrato cancelado.\n\nPRUEBAS DETERMINANTES:\n  1. Log de accesos f.cassius (caja negra autónoma) — secuencia de apagados\n  2. Resultados internos del experimento CERO (log privado de Cassius)\n  3. Manifiesto personal de Cassius (PROMETEO)\n  4. Transmision del Consorcio autorizando PROMETEO\n  5. Contrato ORION del Consorcio (exige 'sujetos reales')\n  6. Acta ejecutiva del 28/12/2088 (aprobación unánime de la metodología real)\n  7. Diario técnico de Novak (testigo de la falsificacion de sensores)\n\nSENTENCIA:\n  Dr. Fenn Cassius: cadena perpetua sin beneficio de libertad condicional.\n  Directorio del Consorcio Artemis (8 miembros): penas de 20 a 40 años.\n  Consorcio Artemis: disuelto por orden del Tribunal de La Haya Espacial en 2091.\n  Contrato ORION: anulado. Material NTX-7: destruido.\n\nEXPEDIENTE CERRADO.\n\n— Seren Dao, Oficial de Recuperacion\n  'En nombre de Yael, Petra, y los cinco que no constan por su nombre.'" }
        }
      }
    }
  },
  databases: {
    doctor: {
      experimento: { text: "Cuaderno de investigacion NTX-7 de Cassius recuperado.", reveal: ["/experimentos/cuaderno_ntx7.txt"] }
    },
    soporte: {
      fallo: { text: "Alerta interna de sistema critico del 13/01 recuperada.", reveal: ["/comunicaciones/alerta_interna.txt"] }
    },
    oxigeno: {
      fallo: { text: "Log critico de sistemas de oxigeno de la caja negra recuperado.", reveal: ["/sistemas/log_oxigeno.txt"] }
    },
    consorcio: {
      contrato: { text: "Extracto del contrato ORION y acta ejecutiva recuperados.", reveal: ["/consorcio/contrato_orion.txt", "/consorcio/acta_ejecutiva.txt"] },
      transmisión: { text: "Transmision clasificada del Consorcio a Cassius recuperada.", reveal: ["/comunicaciones/transmision_consorcio.txt"] }
    },
    prometeo: {
      plan: { text: "Manifiesto personal de Cassius accesible (cifrado). Clave en el log de accesos admin.", reveal: ["/sistemas/manifiesto_cassius.enc"] }
    },
    tripulacion: {
      medico: { text: "Registro medico de la tripulación del modulo 3 recuperado.", reveal: ["/tripulacion/registro_medico_tripulacion.txt"] }
    }
  }
};
