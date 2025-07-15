window.bossDetails = {
  "Demonio del Refugio": {
    stats: {
      ng0: 813,
      ng1: 2195,
      ng2: 2349,
      ng3: 2414,
      ng4: 2502,
      ng5: 2612,
      ng6: 2744,
      almas0: 2000,
      almas1: 10000,
      almas2: 10700,
      almas3: 11000,
      almas4: 11400,
      almas5: 11900,
      almas6: 12500
    },
    summoning: "No puedes invocar a ningún NPC para esta batalla.",
    weaknesses:["Fuego", "Sangrado", "Armas de Caballero Negro"],
    dropsDetailed: [
      { item: "Humanidad", percentage: "100%" },
      { item: "Llave del Gran Peregrino", percentage: "Solo en el segundo encuentro, después de hablar con Oscar" },
      { item: "Espada del Refugio", percentage: "Solo en el primer encuentro" }
    ],
    moves: [
      { name: "Golpe de trasero", description: "El demonio se eleva, para después caer, causando daño masivo alrededor suyo al impacto." },
      { name: "Impulso del martillo", description: "Cuando el jugador esté defrente del demonio, este lanzara un ataque de corto rango imposible de bloquear." },
      { name: "Golpe de martillo", description: "Un barrido horizontal amplio con el martillo, es facil de evitar debido a su deficiente seguimiento." },
      { name: "Retroceso del martillo", description: "Cuando el jugador esté a su derecha, hara una balanceo de retroceso, puede esquivarse si se rueda en el ultimo momento." },
      { name: "Barrido lateral del martillo", description: "Misma idea del retroceso del martillo, pero se activa cuando el jugador este a su izquierda." },
      { name: "Martillazo", description: "Un golpe descendente con gran alcance, abarca una zona amplia, se puede esquivar con facilidad." },
      { name: "Martillazo saltante", description: "Cuando el jugador este lejos, el demonio vuela lentamente para luego dejar caer un golpe devastador, debido a su movimiento es facil de esquivar." },
      { name: "Doble balanceo del martillo", description: "Una secuencia de dos balanceos seguidos, tiene un movimiento facil de predecir, pero pueden ir seguidos de un martillazo adicional." }
    ],
    bestStrategies: `
              El primer enfrentamiento con el <a href="">Demonio del Refugio</a> es opcional, y para aquellos que inician su primera partida, se recomienda encarecidamente evitar el combate saliendo de la sala. Sin embargo, si el jugador ha recibido las Bombas Fuego Negras como obsequio inicial, estas pueden emplearse para derrotar al demonio de forma rápida.
              Para el segundo encuentro, una vez atravesada la niebla, equípate el arma a dos manos y salta de la plataforma, 
              atacando para hacerle mucho daño.
              El demonio es lento y predecible. Lo ideal es rodear al jefe y atacarlo después de que haya ejecutado alguno de sus ataques lentos.
              Si tienes dificultad para quedarte cerca de él, siempre puedes optar por usar piromancia o magia.
              `,
    lore: `
      <a href="">El Demonio del Refugio</a> es un demonio menor que emergió del <a href="">Lecho del Caos</a>, la entidad que apareció tras el intento de la <a href="">Bruja de Izalith</a> de generar un poder similar a la Primera Llama utilizando su <a href="">Alma de Señor</a>. Dicho experimento tuvo éxito, dando lugar a la Llama del Caos, mientras que <a href="">Izalith</a> y su poderosa alma se convirtieron en el semillero de una nueva forma de vida: la madre y origen de todos los demonios.
      <br><br>
      Tras su nacimiento, el <a href="">Demonio del Refugio</a> sobrevivió a la guerra librada por los <a href="">Caballeros Plateados</a> de <a href="">Gwyn, Señor de la Luz Solar</a>, contra su propia especie, y logró escapar de las ruinas de Izalith Perdida llevándose consigo su imponente <a href="">Gran Martillo Demoníaco</a>, forjado a partir de arboledas de piedra.
      <br><br>
      Deambuló por <a href="">Lordran</a> hasta establecerse en el <a href="">Refugio de los No Muertos</a>, la prisión concebida para mantener encerrados a los No Muertos hasta el final de los tiempos, transformándola en su dominio.
    `,
    curiosities: [
      { 
        description: "El Demonio Salvaje es una variante opcional del jefe, que se enfrenta en el sótano del mismo escenario al regresar al Asilo." 
      },
      { 
        description: "Tiene la misma banda sonora que el Demonio de Tauro y el Sabio del Fuego Demoníaco." 
      },
      { 
        description: "Este combate es el único en el que puedes escapar, usando la puerta que se encuentra a la izquierda." 
      }
    ],
  },
  "Demonio Salvaje": {
    stats: {
      ng0: 5250,
      ng1: 8242,
      ng2: 8819,
      ng3: 9066,
      ng4: 9396,
      ng5: 9808,
      ng6: 10302,
      almas0: 20000,
      almas1: 40000,
      almas2: 42800,
      almas3: 44000,
      almas4: 45600,
      almas5: 47600,
      almas6: 50000,
    },
    summoning: "No puedes invocar a ningún NPC para esta batalla.",
    weaknesses:["Sangrado", "Armas de Caballero Negro"],
    dropsDetailed: [
      { item: "Humanidad", percentage: "100%" },
      { item: "Hueso de Regreso", percentage: "100%" },
      { item: "Losa de Titanita", percentage: "100%" }
    ],
    moves: [
      { name: "Golpe de trasero", description: "El demonio se eleva, para despues caer, causando daño masivo alrededor suyo al impacto." },
      { name: "Golpe Demoledor", description: "Un poderoso ataque descendente con su arma que abarca una enorme distancia. Se puede esquivar rodando a la izquierda o derecha." },
      { name: "Doble Golpe Demoledor", description: "Ocurre despues de haber usado Golpe Demoledor. El Demonio Salvaje levanta su arma y lo vuelva a estampar, se esquiva rodando a la izquierda o derecha." },
      { name: "Explosión de Llama", description: "El demonio balancea su arma hacia la izquierda, produciendo una enorme explosión frontal que inflige daño mágico, lo diferente de este ataque es que no afecta la zona trasera, haciendolo posible esquivarlo situándose detrás o por debajo del demonio." },
      { name: "Explosión con Martillo", description: "Empuñando el catalizador con ambas manos, el demonio lo clava en el suelo, lo que desencadena una explosión masiva en el punto de impacto que se extiende también hacia la parte posterior." },
      { name: "Martillazo saltante", description: "Cuando el jugador este lejos, el demonio vuela lentamente para luego dejar caer un golpe devastador, debido a su movimiento es facil de esquivar." },
      { name: "Doble balanceo del martillo", description: "Parecido al Demonio del Refugio, hara una secuencia de dos balanceos seguidos, tiene un movimiento facil de predecir, pero pueden ir seguidos de un golpe adicional, puede ser bloqueado a costo de mucha estamina." },
    ],
    bestStrategies: `
              El jugador caerá a través del suelo, recibiendo algo de daño y quedando frente al <a href="">Demonio Salvaje</a>. Es crucial usar el hechizo Controlar caida antes del combate. 
              A diferencia del <a href="">Demonio del Refugio</a>, el <a href="">Demonio Salvaje</a> empuña un arma tipo catalizador que desata poderosas explosiones mágicas.<br> <br>
              Dispone de dos ataques de área: uno consiste en un barrido horizontal que lanza una explosión frontal difícil de evadir, y el otro se anuncia al clavar el catalizador en el suelo, generando una explosión centrada que también impacta la zona trasera. 
              En este contexto, el Escudo con Emblema (obtenido de Oscar de Astora) resulta muy útil para mitigar el daño. <br><br>
              Lo ideal es atacar al demonio desde atrás y mantenerse pegado a él, ya que así se evitan sus golpes y explosiones, especialmente el ataque descendente que puede afectar incluso su cola. 
              Además, el <a href="">Demonio Salvaje</a> es vulnerable al daño por sangrado y recibe daño extra de las armas del <a href="">Caballero Negro</a>, lo que lo hace más fácil de derribar si se emplean armas de sangrado.`,
    lore: `
      <a href="">El Demonio Salvaje</a> es un demonio superior nacido del Lecho de Caos tras el audaz experimento de la <a href=""><a href="">Hechicera de Izalith</a>, quien intentó emular el poder de la Primera Llama utilizando su <a href="">Alma de Señor</a>. 
      Su experimento dio origen a la Llama del Caos y convirtió a <a href="">Izalith</a> en el caldo de cultivo que engendró la madre y origen de todos los demonios.
      <br><br>
      Tras su nacimiento, el <a href="">Demonio Salvaje</a> sobrevivió a la brutal guerra librada por los <a href="">Caballeros de Plata</a> de <a href="">Gwyn, Señor de la Luz Solar</a>, contra su especie. 
      Finalmente, escapó de las ruinas de <a href="">Izalith Perdida</a> y deambuló por <a href="">Lordran</a> hasta establecer su dominio en el <a href="">Refugio de los No Muertos</a>, la prisión destinada a encerrar a los <a href="">No Muertos</a> hasta el fin de los tiempos.
    `,
    curiosities: [
      { 
        description: "El Demonio Salvaje utiliza la misma pieza musical que el Golem de Hierro." 
      },
      { 
        description: "En caso quieras el martillo, se necesitaría matarlo la primera vez que lo ves; si no se puede conseguir, le puedes intercambiar un Saco a Snuggly el Cuervo." 
      },
      { 
        description: "Comparte su apariencia con el Demonio del Refugio y el Sabio del Fuego Demoniaco. Sin embargo, se asemeja más a este último, ya que ambos tienen el mismo patrón de movimientos, diferenciándose únicamente por el fuego que rodea al Sabio." 
      },
    ],
  },
  "Demonio de Tauro": {
    stats: {
      ng0: 1215,
      ng1: 3162,
      ng2: 3383,
      ng3: 3478,
      ng4: 3605,
      ng5: 3763,
      ng6: 3953,
      almas0: 3000,
      almas1: 15000,
      almas2: 16050,
      almas3: 16500,
      almas4: 17100,
      almas5: 17850,
      almas6: 18750
    },
    summoning: "No puedes invocar a ningún NPC para esta batalla.",
    weaknesses:["Fuego", "Electricidad"],
    dropsDetailed: [
      { item: "Humanidad", percentage: "100%" },
      { item: "Hueso Regreso", percentage: "100%" },
      { item: "Gran Hacha del Demonio", percentage: "5%" },
    ],
    moves: [
      { name: "Columpio Gigante", description: "El demonio retrae brevemente su arma antes de lanzar un ataque horizontal en arco. Su alcance es limitado, por lo que puede evadirse retrocediendo al ver la preparación del golpe. Otra opción es rodar hacia él, pasando por debajo del ataque y aprovechando para golpear rápidamente." },
      { name: "Libra Saltadora", description: "Si estás demasiado lejos, el Demonio Tauro usará un salto para acortar la distancia rápidamente. Se agachará antes de saltar y lanzará un ataque vertical de largo alcance. Para esquivarlo, corre hacia él y rueda, o sigue retrocediendo para salir de su alcance." },
      { name: "Puñalada Rápida del Suelo", description: "El Demonio Tauro usa este ataque solo a corta distancia y es uno de los más rápidos, por lo que debes estar alerta. Su inicio se parece al Salto Masivo, pero el golpe es mucho más veloz. Puedes intentar moverte hacia su espalda, pero si no llegas a tiempo, prepárate para rodar hacia un lado." },
      { name: "Libra de Pie", description: "Esta versión de corto alcance del golpe ocurre solo si estás muy cerca del Demonio Tauro y es más fácil de esquivar. Cuando levante lentamente su martillo, muévete hacia su espalda antes de que inicie el ataque. Desde ahí, podrás golpear con seguridad antes de que se recupere." },
      { name: "Salto Masivo", description: "Si permaneces demasiado tiempo en la almena donde estaban los ballesteros, el Demonio Tauro saltará y se estrellará contra la torre, causándose daño y ganando acceso a la parte superior. Este ataque es sorpresivo y puede empujarte al borde, haciéndote caer al vacío y morir." },
    ],
    bestStrategies: `
            Aplicar <a href="">Resina de Pino Dorada</a>, encontrada en el <a href="">Burgo de los No Muertos</a>, facilita el combate, ya que el jefe es muy vulnerable al rayo. Es recomendable usarla si la pelea resulta complicada.<br><br>
            Los ataques a distancia no son muy efectivos, ya que el <a href="">Demonio Tauro</a> cierra la distancia rápidamente. Además, quedarse mucho tiempo en la torre hará que salte hacia ti. 
            Sus pies pueden dañarte si estás demasiado cerca mientras se mueve. Aunque el daño es bajo, puede ser molesto si tienes poco aplomo. <br><br>
            El <a href="">Demonio Tauro</a> puede tambalearse si recibe suficiente daño por equilibrio, lo que interrumpe sus ataques. Esto suele ocurrir con armas grandes en una cadena de golpes, pero depender de esta estrategia es arriesgado. <br><br>
            Un método rápido para derrotar al <a href="">Demonio Tauro</a> es subir la torre junto a la entrada y realizar un ataque en picado desde arriba. Antes de activar al jefe, es crucial eliminar a los dos soldados no muertos en la torre para evitar interferencias.
            Es importante ser rápido al subir, ya que el <a href="">Demonio Tauro</a> puede golpear al jugador en la escalera. Si se permanece demasiado tiempo en la torre, el jefe puede saltar hasta ella, lo que puede aprovecharse para descender y prepararse para otro ataque.
            Una estrategia efectiva es esperar a que el Demonio baje, subir rápidamente y lanzar bombas incendiarias para acabar con él rápidamente. Durante la carrera de regreso, atacar sus piernas puede causar daño adicional. Además, aplicar resina de pino dorado potenciará el daño de esta táctica.<br><br>
            Es posible hacer que el <a href="">Demonio Tauro</a> salte de la pared si usas un buen escudo para bloquear y posicionarte estratégicamente.`,
    lore: `
      Los <a href="">Demonios Tauro</a> son criaturas menores nacidas del <a href="">Lecho del Caos</a>, la entidad surgida tras el fallido intento de la <a href="">Bruja de Izalith</a> por recrear la Primera Llama con su <a href="">Alma de Señor</a>. Aunque logró crear la Llama del Caos, <a href="">Izalith</a> y su alma se convirtieron en el origen de todos los demonios.
      <br><br>
      A pesar de la guerra contra los <a href="">Caballeros Plateados</a> de <a href="">Gwyn</a>, muchos Demonios Tauro lograron sobrevivir. En algún momento, uno de ellos escapó de <a href="">Izalith Perdida</a>, llevando consigo una <a href="">Gran Hacha de Demonio</a>, forjada con los huesos de otros demonios. 
      Este demonio llegó hasta la zona alta del <a href="">Burgo de los No Muertos<a/>, una ciudad fortificada que cayó en ruinas, convirtiéndola en su dominio. <br><br>
      Mientras tanto, otros <a href="">Demonios Tauro</a> continuaron habitando las ruinas de su antiguo hogar, a pesar de su decadencia.
    `,
    curiosities: [
      { 
        description: "Si optas por la Llave Maestra como regalo inicial, podrás evitar este encuentro. Al abrir la puerta inferior de la torre envuelta en neblina, accederás a la Cuenca de la Raíz Oscura. Ten cuidado, ya que Havel te estará esperando en la base de la torre." 
      },
      { 
        description: "Si atacas rápidamente al Demonio Tauro justo después de que aterrice tras saltar de la torre, existe la posibilidad de que realice un ataque de salto o un salto hacia atrás, lo que puede hacer que caiga de la muralla y muera instantáneamente." 
      },
      { 
        description: "Este jefe comparte su tema musical con el Demonio del Refugio y el Demonio Sabio de Fuego." 
      },
    ],
  },
  "Demonio de Aries": {
    stats: {
      ng0: 1178,
      ng1: 2940,
      ng2: 3146,
      ng3: 3234,
      ng4: 3352,
      ng5: 3499,
      ng6: 3675,
      almas0: 6000,
      almas1: 30000,
      almas2: 32100,
      almas3: 33000,
      almas4: 34200,
      almas5: 35700,
      almas6: 37500
    },
    summoning: "No puedes invocar a ningún NPC para esta batalla.",
    weaknesses:["Fuego"],
    dropsDetailed: [
      { item: "Humanidad", percentage: "100%" },
      { item: "Hueso de Regreso", percentage: "100%" },
      { item: "Llave Profundidades", percentage: "100%" },
      { item: "Machete demoníaco", percentage: "5%" }
    ],
    moves: [
      { name: "Corte Simple", description: "El Demonio de Aries ejecuta un golpe sencillo con una de sus espadas, el cual se puede evitar rodando." },
      { name: "Doble Corte", description: "Realiza dos golpes consecutivos con una espada, provocando un gran daño o drenando fuertemente la resistencia si el ataque es bloqueado." },
      { name: "Golpe Saltante", description: "Cuando el jugador está a distancia, salta hacia él y, al aterrizar, aplasta el suelo con ambas espadas. Este ataque se puede contrarrestar con un escudo robusto o esquivándolo rodando." },
      { name: "Golpe con la Espada Izquierda", description: "Lanza un ataque rápido desde su flanco izquierdo; si se bloquea, agota la resistencia, aunque es posible evadirlo rodando hacia él." },
      { name: "Corte Dual", description: "Junta ambas espadas y las arrastra hacia atrás para segar el suelo, causando un severo drenaje de resistencia al bloquearse, aunque se puede esquivar con facilidad." },
      { name: "Golpe Demoledor", description: "Su ataque más poderoso consiste en elevar ambas espadas y bajarlas en un golpe vertical demoledor. Aunque no se puede bloquear y causa un daño considerable, su larga preparación y animación evidente lo hacen fácil de esquivar." },
    ],
    bestStrategies: `
              La batalla contra el <a href="">Demonio de Aries</a> se desarrolla en una sala pequeña y confinada, lo que dificulta la recuperación de salud y estamina. 
              Es crucial eliminar rápidamente a los dos <a href="">Perros Hueco</a>, ya que pueden aturdir a jugadores con bajo <a href="">Equilibrio</a> y atraparlos en una esquina.<br> <br>
              Subir las escaleras permite utilizar ataques a distancia y recuperarse, ya que el jefe, aunque lo sigue, se ve frenado por la barandilla, lo que facilita esquivar sus ataques. 
              Los usuarios de hechizos pueden aprovechar una posición en el arco sobre la puerta para atacar sin exponerse a su ataque de salto, que tiene un largo tiempo de recuperación.<br><br>
              Una vez neutralizados los perros, retrocede hacia el estrecho puente en la parte superior de las escaleras. 
              Desde esa posición, atrae al <a href="">Demonio de Aries</a> hasta la cima y, usando el escudo para bloquear, espera el momento en que pierda el equilibrio al caer para contraatacar con golpes rápidos. 
              Además, dado que el <a href="">Demonio de Aries</a> es débil al fuego, aplicar <a href="">Resina de Pino Negra</a> a tus armas potenciará tu daño en combate cuerpo a cuerpo. <br><br>
              Si prefieres evitar el combate directo, puedes optar por atacar desde fuera de la arena: utiliza un arco junto con bombas de fuego para dañar al <a href="">Demonio de Aries</a> sin exponerte demasiado. 
              Alternativamente, si optas por una táctica de tanque, equipa un escudo de alta estabilidad, armadura pesada y anillos defensivos para bloquear sus ataques y contraatacar cuando se presente la oportunidad, asegurándote de mantener siempre un buen manejo de la estamina.`,
    lore: `
      Los Demonios de Aries son seres infernales menores surgidos del <a href="">Lecho del Caos</a>. 
      Se originaron tras el intento de la <a href="">Bruja de Izalith</a> de emular el poder de la Primera Llama utilizando su <a href="">Alma de Señor</a>, lo que dio lugar a la creación de la Llama del Caos y convirtió a <a href="">Izalith</a> en el semillero de una nueva forma de vida: la madre y fuente de todos los demonios.
      <br><br>
      A pesar de la implacable guerra librada por los <a href="">Caballeros de Plata</a> de <a href="">Gwyn</a> contra estos seres, muchos lograron sobrevivir. 
      Uno de ellos escapó de las ruinas de <a href="">Izalith Perdida</a> portando dos enormes <a href="">Machetes Demoníacos</a> de hierro fundido y se estableció en la sección inferior del Burgo de los No Muertos, una ciudad fortificada en decadencia que se convirtió en su dominio, llegando incluso a someter a dos Perros Hueco. 
      Otros persistieron en habitar los vestigios de su antigua morada, aun en medio de la ruina.
    `,
    curiosities: [
      { 
        description: "El Demonio de Aries utiliza la misma pieza musical que el Demonio Ciempiés." 
      },
      { 
        description: "En Dark Souls 3, se pueden encontrar numerosos cadáveres de estos demonios en el Lago Ardiente." 
      },
      { 
        description: "Si cuentas con la Llave Maestra, puedes evitar esta pelea bajando por las Ruinas de Nuevo Londo y abriendo la puerta que te conduce al Valle de Dragones." 
      },
      { 
        description: "Derrotar este jefe es imprescindible para que aparezca Reah de Thorolund en el Santuario de Enlace de Fuego tras tocar la primera Campana del Despertar." 
      },
      { 
        description: "Es posible vencer al Demonio de Aries sin entrar a la arena, lanzando Pastel Bosta desde el borde del puente." 
      },
    ],
  },
  "Gárgolas Campana": {
    stats: {
      ng0: "1000/480",
      ng1: "2500/1200",
      ng2: "2675/1284",
      ng3: "2750/1320",
      ng4: "2850/1368",
      ng5: "2975/1428",
      ng6: "3125/1500",
      almas0: 10000,
      almas1: 50000,
      almas2: 53500,
      almas3: 55000,
      almas4: 57000,
      almas5: 59500,
      almas6: 62500
    },
    summoning: "Se pueden invocar a Solaire de Astora y Lautrec de Carim para la pelea. Para invocar a Lautrec, primero hay que liberarlo de su celda y hablar con él en el Santuario de Enlace de Fuego. Ambas señales están antes de la puerta de niebla.",
    weaknesses:["Fuego", "Electricidad"],
    dropsDetailed: [
      { item: "Humanidades Gemelas", percentage: "100%" },
      { item: "Hueso de Regreso", percentage: "100%" },
      { item: "Hacha Cola de Gárgola", percentage: "Solo obtenible al cortar la cola." },
      { item: "Alabarda Gárgola", percentage: "3%" },
      { item: "Escudo de Gárgola", percentage: "3%" },
      { item: "Yelmo de Gárgola", percentage: "3%" },
    ],
    moves: [
      { name: "Combo Horizontal", description: "Realiza hasta tres cortes horizontales con su alabarda en rápida sucesión." },
      { name: "Estocada con Alabarda", description: "Lanza una estocada directa hacia el jugador con su alabarda." },
      { name: "Golpe con Escudo", description: "Arremete con su escudo, impactando al jugador y causando daño." },
      { name: "Golpe Aplastante", description: "Asesta un golpe descendente con su alabarda, ya sea con una o ambas manos." },
      { name: "Vuelo con Golpe Aplastante", description: "Se eleva en el aire y se lanza en picada hacia el jugador, atacando con su alabarda." },
      { name: "Coletazo", description: "Se eleva en el aire y golpea con su cola al jugador. Solo la primera gárgola puede ejecutar este ataque, y una vez que su cola es cortada, ya no podrá usarlo." },
      { name: "Ataque con Alabarda", description: "Se eleva en el aire y arremete con su alabarda contra el jugador." },
      { name: "Vuelo con Golpe Fuerte", description: "Se eleva y se desplaza hacia el jugador, intentando aterrizar a su espalda. Durante el descenso, gira en el aire y, al tocar el suelo, ejecuta un golpe potente con su alabarda." },
      { name: "Aliento con Fuego Barrido", description: "Lanza una bocanada de fuego en un arco frente al jugador. Ambas gárgolas pueden realizar este ataque, pero la primera solo comenzará a usarlo después de que aparezca la segunda." },
      { name: "Vuelo con Aliento de Fuego", description: "Se eleva en el aire y exhala fuego en dirección al jugador. Ambas gárgolas pueden realizar este ataque, pero la primera solo lo hará una vez que aparezca la segunda." },
    ],
    bestStrategies: `
              Utiliza un buen escudo para bloquear ataques físicos, aunque el fuego seguirá causando daño. Mantente fuera de su alcance cuando aparezca la segunda gárgola y prioriza derrotar a la primera para reducir la presión del combate. 
              Las <a href="">Gárgolas Campana</a> son vulnerables al fuego y a la electricidad, por lo que las bombas incendiarias y la resina pino dorada pueden ser muy efectivas. <br><br>
              Aprovecha su frecuente uso del fuego para golpear sus costados. Aunque los pasillos laterales puedan parecer una ruta segura, ten cuidado, ya que allí las gárgolas podrían acorralarte con sus llamas. Además, lo ideal es cortarle la cola a la primera gárgola para recortar sus ataques a larga distancia.`,
    lore: `
      <a href="">Las Gárgolas Campana</a> son criaturas de piedra creadas por los dioses mediante magia para patrullar <a href="">Anor Londo</a> y otros sitios de gran importancia. 
      Poseen una piel dura y resistente, pueden escupir fuego o rayos y están equipadas con una <a href="">alabarda</a> de bronce como arma, junto con un escudo y un casco decorativo.
      <br><br>
      Tras el sacrificio del <a href="">Gwyn</a> para prolongar la Era del Fuego, varias Gárgolas fueron asignadas a la vigilancia de la Campana del Despertar en la <a href="">Iglesia de los No Muertos</a> en el <a href="">Burgo de los No Muertos</a>. 
      Su propósito era servir como prueba para los No Muertos que aspiraban a seguir el destino de <a href="">Gwyn</a>. Superar este desafío otorgaba acceso a la <a href="">Fortaleza de Sen</a>, el siguiente obstáculo en su camino.`,
    curiosities: [
      { 
        description: "La batalla contra las Gárgolas de Campana está inspirada en el enfrentamiento contra los Desolladores de Demon’s Souls." 
      },
      { 
        description: "En Dark Souls 2, el enfrentamiento contra las Gárgolas del Campanario guarda notables similitudes con la batalla contra las Gárgolas de la Campana en Dark Souls 1. En ambos juegos, el combate se desarrolla en un techo, donde te ves rodeado por más de una gárgola a la vez." 
      },
    ],
  },
  "Dragón Boquiabierto": {
    stats: {
      ng0: 4401,
      ng1: 15550,
      ng2: 16637,
      ng3: 17105,
      ng4: 17727,
      ng5: 18505,
      ng6: 19438,
      almas0: 25000,
      almas1: 75000,
      almas2: 80250,
      almas3: 82500,
      almas4: 85500,
      almas5: 89250,
      almas6: 93750
    },
    summoning: "Se puede invocar a Solaire de Astora y a Lautrec de Carim (si fue liberado y hablado en el Santuario del Enlace de Fuego). La señal de Solaire está junto a las escaleras hacia la puerta de niebla, mientras que la de Lautrec se encuentra detrás de un pilar, frente a la de Solaire.",
    weaknesses:["Fuego, Electricidad"],
    dropsDetailed: [
      { item: "Humanidad", percentage: "100%" },
      { item: "Hueso de Regreso", percentage: "100%" },
      { item: "Llave Ciudad Infestada", percentage: "100%" },
      { item: "Hacha Gigante del Rey Dragon", percentage: "Solo obtenible al cortar la cola." }
    ],
    moves: [
      { name: "Golpe de Derecha", description: "El Dragón Boquiabierto lanza un puñetazo con su brazo derecho, con alcance corto. Puede esquivarse fácilmente corriendo hacia la izquierda." },
      { name: "Triple Pisotón", description: "El Dragón Boquiabierto levanta una pierna y ejecuta tres pisotones rápidos consecutivos, concentrando el ataque en el área frontal." },
      { name: "Deslizamiento con la Pierna Izquierda", description: "El Dragón Boquiabierto levanta lentamente su pierna izquierda antes de lanzar un ataque frontal de gran alcance. Para evitarlo, lo mejor es huir o mantenerse cerca de su lado derecho." },
      { name: "Golpe de Estómago", description: "El Dragón Boquiabierto arquea su estómago hacia arriba antes de estrellarlo contra el suelo con gran fuerza. La mejor opción es huir para evitar el impacto. Tras el ataque, sus dientes quedan atascados en el suelo por unos instantes, dejándolo vulnerable a contraataques." },
      { name: "Cargar", description: "Junta ambas espadas y las arrastra hacia atrás para segar el suelo, causando un severo drenaje de resistencia al bloquearse, aunque se puede esquivar con facilidad." },
      { name: "Látigo de cola", description: "El Dragón Boquiabierto balancea su cola hacia un lado. Es un ataque difícil de esquivar, pero puede evitarse corriendo hacia su frente. Si se corta su cola, el alcance del ataque se reduce, aunque aún puede golpear." },
      { name: "Saltar", description: "El Dragón Boquiabierto salta brevemente y aterriza sobre el jugador. Usará este movimiento cuando esté atascado o flanqueado, girándose en el proceso. También puede activarlo si el jugador ataca desde lejos, intentando caer sobre él de un solo salto. Ambas variantes pueden evitarse huyendo, aunque la segunda requiere mayor precisión en el tiempo." },
      { name: "Ácido Corrosivo", description: "Al llegar a menos de 50% de salud el Dragón Boquiabierto inclina su estómago hacia el suelo y, tras una breve pausa, expulsa ácido sobre un área amplia. Este ataque degrada el equipo y, si el jugador permanece demasiado tiempo en el ácido, puede romper todo su equipo." },
      { name: "Garganta", description: "El Dragón Boquiabierto agarra al jugador si está demasiado cerca y lo aplasta con sus fauces verticales, causando daño físico masivo." },
    ],
    bestStrategies: `
              Por ser un dragón, es vulnerable al daño de <a href="">Electricidad</a>. Los ataques a distancia son efectivos, especialmente cuando el <a href="">Dragón Boquiabierto</a> ejecuta una carga hacia adelante. 
              Con un buen posicionamiento, bloquear o esquivar no es necesario. Usar armas a dos manos es una excelente opción para maximizar el daño en combate cuerpo a cuerpo.<br> <br>
              Tras su ataque de carga, el <a href="">Dragón Boquiabierto</a> queda momentáneamente inmóvil, permitiendo un ataque seguro. La carga siempre sigue a un golpe de estómago, por lo que este movimiento puede usarse como señal para acercarse a su lado o cola y preparar un contraataque. 
              Atacar la cabeza del <a href="">Dragón Boquiabierto</a> inflige tres veces más daño que golpear su cuerpo, pero solo es accesible tras un golpe al suelo y antes de su carga. Para acortar la pelea, ataca su cabeza rápidamente tras el impacto, luego aléjate antes de que inicie la carga.<br><br>
              Cuando su salud cae por debajo del 50%, el <a href="">Dragón Boquiabierto</a> gana un nuevo ataque: <a href="">Ácido Corrosivo</a>, que reduce la durabilidad del equipo e incluso puede romperlo. Su animación inicial es similar a la del golpe de estómago, por lo que es crucial no confundirlos. <br><br>
              La cola del <a href="">Dragón Boquiabierto</a> puede cortarse, otorgando como recompensa el <a href="">Gran Hacha Rey Dragón</a>. Además, al perder la cola, su ataque de golpeo trasero tendrá un alcance mucho menor, facilitando el resto del combate. 
              Para obtener la <a href=""> Gran Hacha del Rey Dragon</a>, es recomendable golpear el centro o el extremo de la cola, ya que atacar la base puede hacer que el dragón muera antes de que la cola reciba suficiente daño. <br><br>
              Fijar el objetivo dificulta esquivar los ataques del Dragón Boquiabierto, ya que reduce la movilidad del jugador y su capacidad para alejarse rápidamente. Mantente junto a las patas del <a href="">Dragón Boquiabierto</a>, atacándolo constantemente y moviéndote solo cuando comience a caminar o volar. <br><br>
              Un fantasma invocado puede apoyar a distancia y distraer al <a href="">Dragón Boquiabierto</a> desde el balcón, siempre que no cruce la puerta de niebla.`,
    lore: `
      El <a href="">Dragón Boquiabierto</a> es un descendiente lejano de los <a href="">Archidragones Primordiales</a>, una especie parcialmente mineral que existió mucho antes de la humanidad. Es el último de su linaje.
      <br><br>
      Tras sobrevivir a la guerra contra los portadores de las <a href="">Almas de Señor</a>, quedó solo y obligado a luchar por su supervivencia. 
      Con el tiempo, terminó en las profundidades del <a href="">Burgo de los No Muertos</a>, en <a href="">Ciudad Infestada</a>, un lugar tan infestado y temido que incluso los parias de las <a href="">Profundidades</a> lo evitan. <br><br>
      La oscuridad lo corrompió, transformándolo en una abominación deformada, donde su caja torácica mutó en una gigantesca boca que rezuma ácido. 
      En su desesperación, devoró la llave de la puerta construida por los habitantes de las <a href="">Profundidades</a>, quienes la usaban para mantenerse a salvo de la plaga de la <a href="">Ciudad Infestada</a>, mientras el dragón intentaba derribarla para resurgir.
    `,
    curiosities: [
      { 
        description: "El Dragón Boquiabierto fue diseñado por Hiroshi Nakamura, basándose en el concepto de codicia como tema principal." 
      },
      { 
        description: "El Dragón Boquiabierto puede causar ligero daño al jugador simplemente pisando cerca mientras se desplaza." 
      },
      { 
        description: "Derrotar al Canalizador situado sobre la arena del Dragón Boquiabierto evitará que este reciba una bonificación de daño. Además, el Canalizador puede atacar al jugador y a cualquier fantasma invocado con hechicerías a distancia." 
      },
    ],
  },

  "Quelaag la Bruja del Caos": {
    stats: {
      ng0: 3139,
      ng1: 6027,
      ng2: 6449,
      ng3: 6630,
      ng4: 6871,
      ng5: 7172,
      ng6: 7534,
      almas0: 20000,
      almas1: 60000,
      almas2: 64200,
      almas3: 66000,
      almas4: 68400,
      almas5: 71400,
      almas6: 75000
    },
    summoning: "Puedes invocar a Mildred Devorahombres para este combate. Su señal de invocación estara en frente de la niebla.",
    weaknesses:["Electricidad", "Armas de Caballero Negro"],
    dropsDetailed: [
      { item: "Humanidades Gemelas", percentage: "100%" },
      { item: "Alma de Quelaag", percentage: "100%" },
    ],
    moves: [
      { name: "Corte de Triple Furia", description: "Quelaag carga brevemente y ejecuta dos amplios cortes diagonales que culminan en un ataque frontal; se evita rodando hacia la izquierda." },
      { name: "Puñalada del Caos", description: "Tras una carga prolongada, lanza una estocada sostenida que conecta múltiples golpes de manera precisa." },
      { name: "Pisotón de Pierna", description: "Levanta cuatro patas y las estampa contra el suelo, generando ondas de choque incendiarias; su prolongado arranque facilita su evasión." },
      { name: "Oleada de Lava", description: "Genera pozos de lava de diversas formas: dispara globulitos que se condensan en pequeños charcos, acumula lava en un ataque extendido (dejándola vulnerable) o se lanza desde la distancia mientras expulsa lava." },
      { name: "Explosión de Fuego", description: "Envuelve su cuerpo arácnido y, tras un rugido, desata una explosión devastadora." },
      { name: "Vómito de Lava", description: "Emite ráfagas de fuego desde su cuerpo arácnido." },
      { name: "Saltar y Escupir Lava", description: "Quelaag se lanza agresivamente hacia el jugador, liberando múltiples gotas de lava que caen en el área de impacto y causan un daño devastador. Además, en su variante lateral, salta hacia un costado mientras escupe lava, infligiendo un leve daño al impactar." },
    ],
    bestStrategies: `
              Al entrar en la arena, es fundamental evitar quedar atrapado en la entrada, ya que <a href="">Quelaag</a> puede embestir o saltar hacia ti. 
              Lo ideal es posicionarse en los laterales frontales, prestando atención a sus señales de ataque, para tener tiempo de contraatacar sin quedar expuesto. <br> <br>
              Sus movimientos están claramente anunciados, lo que facilita esquivar sus cortes y estocadas con tiempo preciso: por ejemplo, rueda hacia la derecha cuando empuñe la espada y ajusta tu posición si detectas que se prepara para usar su oleada de lava. <br><br>
              Se aconseja equipar armadura y escudos con alta resistencia física y al fuego (por ejemplo, el <a href="">Escudo del Caballero Negro</a> o el <a href="">Escudo de Araña</a>) y usar la piromancia <a href="">Sudor Relámpago</a> para reducir el daño de los charcos de lava. Un arma con al menos 180 de daño base ayuda a bajar su salud con rapidez. 
              En cuerpo a cuerpo, un arma de ataque vertical, como la <a href="">Alabarda Gárgola</a>, puede hacerla tambalearse, dejándola vulnerable tras cada golpe. <br><br>
              Para aquellos que encuentran dificultades al enfrentarse a <a href="">Quelaag</a>, una estrategia eficaz es transformarse en humano en los pantanos de lo profundo de <a href="">Ciudad Infestada</a>. Al hacerlo, se activará la invasión de un espectro conocido como <a href="">Mildred Devorahombres</a>. 
              Sus ataques, lentos y carentes de la protección de una armadura, la hacen un enemigo sencillo de vencer. Una vez eliminada, su señal de invocación aparecerá frente a la puerta de niebla que conduce a <a href="">Quelaag</a>.`,
    lore: `
      <a href="">Quelaag</a> es la hermana mayor de la <a href="">Dama Blanca</a>. Cuando su madre, la <a href="">Bruja de Izalith</a>, junto con sus otras hermanas, se fusionó con el <a href="">Lecho del Caos</a>, <a href="">Quelaag</a> y su hermana huyeron y se convirtieron en medias arañas demoníacas. 
      Aunque conservó su cordura, la mitad inferior de su cuerpo adquirió la forma de una araña infernal.
      <br><br>
      Ambas se establecieron a las afueras de las <a href="">Ruinas de los Demonios</a>, en una sección de la <a href="">Ciudad Infestada</a> conocida como el <a href="">Dominio de Quelaag</a>, donde comenzaron a criar insectos demoníacos ofreciendo <a href="">Humanidad</a> a la <a href="">Dama Blanca</a>. 
      Los habitantes del lugar veneraban a las dos brujas y se ofrecían gustosamente para alojar los huevos de la hermana menor. Sin embargo, estos embarazos debilitaron y cegaron a la <a href="">Dama Blanca</a>, lo que llevó a <a href="">Quelaag</a> a convertirse en su protectora y principal cazadora.
    `,
    curiosities: [
      { 
        description: "Según se reveló en una entrevista con Miyazaki, la idea de Quelaag surgió a partir de la Cragspider, una unidad presente en el juego de mesa de fantasía Dragon Pass." 
      },
      { 
        description: "En uno de los contenidos eliminados se insinuaba que Quelaag ostentaría un estatus matriarcal dentro del pacto Sirvientes del Caos, junto a su hermana." 
      },
    ],
  },
  "Mariposa Lunar": {
    stats: {
      ng0: 1506,
      ng1: 2500,
      ng2: 2675,
      ng3: 2750,
      ng4: 2850,
      ng5: 2975,
      ng6: 3125,
      almas0: 10000,
      almas1: 40000,
      almas2: 42800,
      almas3: 44000,
      almas4: 45600,
      almas5: 47600,
      almas6: 50000
    },
    summoning: "Se puede invocar a Beatrice la Bruja, cuyo símbolo de invocación está oculto tras un arbusto en la base de la escalera.",
    weaknesses:["Fuego"],
    dropsDetailed: [
      { item: "Humanidad", percentage: "100%" },
      { item: "Alma de Mariposa Lunar", percentage: "100%" },
    ],
    moves: [
      { name: "Lanza de Energía", description: "Lanza de 6 a 8 proyectiles rápidos con daño medio. Para esquivarlos, rueda justo cuando la Mariposa Lunar cargue energía en su boca." },
      { name: "Orbes de Energía", description: "Dispara de 3 a 5 orbes teledirigidos con alto daño, pero movimiento lento. Se cargan igual que las lanzas, por lo que pueden esquivarse en el mismo momento." },
      { name: "Bomba de Energía", description: "Cuando la Mariposa Lunar cae por debajo del 50% de salud, sus ataques se vuelven más rápidos. Desde el puente, cargará y disparará una gran bomba de energía azul en la dirección de su cuerno. Es difícil de bloquear, por lo que lo mejor es moverse detrás de ella para esquivarla." },
      { name: "Haz de Rayos", description: "Nito solo usa este ataque cuando el jugador está lejos o fuera de su alcance visual. Tras un grito, clava su espada en el suelo, haciendo que emerja bajo el jugador, infligiendo daño considerable y acumulación de toxicidad. Su efecto es similar al milagro Danza de la Espada del Señor de la Tumba." },
      { name: "Bomba Facial", description: "La Mariposa Lunar apoyará su cabeza en el puente para beber néctar, recuperando alrededor de 50 de vida. Antes de volver a volar, se carga y genera una pequeña explosión. Para evitar daño, aléjate cuando comience a cargar." },
    ],
    bestStrategies: `
            Esquivar es clave en esta pelea, así que asegúrate de llevar un equipo ligero que te permita rodar rápidamente. 
            Mantente pegado a la pared al esquivar los ataques de la <a href="">Mariposa Lunar</a>, ya que esto facilita evitar el daño. Un escudo con alta resistencia mágica ayuda a bloquear las lanzas de energía con poco daño. Una buena opción es el <a href="">Escudo con Cresta</a>. <br><br>
            Lanza tus mejores hechizos o piromancias cuando la <a href="">Mariposa Lunar</a> descanse en el borde. 
            No es recomendable atacarla mientras vuela, ya que su movimiento constante dificulta acertar los proyectiles. Si eres de combate cercano, sostén tu arma con ambas manos para maximizar el daño.`,
    lore: `
      La <a href="">Mariposa Lunar</a> es una criatura mística cuya alma fue creada por <a href="">Seath el Descamado</a>. Como resultado, posee un poder cristalino puro y domina la magia de Luz de Luna, ambas características de <a href="">Seath</a>. Su capacidad para lanzar hechicerías de cristal y energía lunar la convierte en un ser formidable.
      <br><br>
      <a href="">Seath</a> creó varias de estas mariposas, las cuales permanecieron en su <a href="">Cueva de Cristal</a>, pero una de ellas abandonó el lugar y se estableció en el <a href="">Jardín Tenebroso</a>, donde protege su territorio de intrusos. Estas criaturas raras y enigmáticas solo aparecían en las noches de luna llena durante el invierno. 
      Su ecología sigue siendo un misterio, ya que nunca se han visto sus larvas, lo que llevó a especulaciones de que fueron creadas a través de la misma magia que impregna sus cuerpos.
    `,
    curiosities: [
      { 
        description: "Se puede teorizar que Seath utilizó a un humano como base para crear a la Mariposa Lunar. Su historial de experimentos con humanos respalda esta idea, ya que fue responsable de la creación de criaturas como los Pisacas, los Soldados Serpiente y el Soldado de Cristal No-Muerto." 
      },
      { 
        description: "A pesar de la muerte de Seath, varias Mariposas Lunar lograron sobrevivir a lo largo de los siglos, migrando a Drangleic, donde evolucionaron en Grandes Polillas y desarrollaron habilidades de envenenamiento." 
      },
      { 
        description: "Existe un error que puede ocurrir si no se elimina al Gigante de Piedra Durmiente junto a las escaleras del jefe. Esto puede hacer que la Mariposa Lunar lo ataque desde arriba y luego desaparezca, interrumpiendo el combate." 
      },
      { 
        description: "La Mariposa Lunar puede verse flotando cerca de las ruinas cuando te aproximas a la puerta con sello brillante, anticipando la próxima batalla. Sin embargo, desde esta posición, no se le puede hacer daño." 
      },
    ],
  },

  "Sif, el Gran Lobo Gris": {
    stats: {
      ng0: 3432,
      ng1: 5800,
      ng2: 6206,
      ng3: 6380,
      ng4: 6612,
      ng5: 6902,
      ng6: 7250,
      almas0: 40000,
      almas1: 120000,
      almas2: 128400,
      almas3: 132000,
      almas4: 136800,
      almas5: 142800,
      almas6: 150000
    },
    summoning: "No puedes invocar a ningún NPC para esta batalla.",
    weaknesses:["Magia"],
    dropsDetailed: [
      { item: "Alma Sif", percentage: "100%" },
  	  { item: "Pacto Artorias", percentage: "100%" },
  	  { item: "Humanidad", percentage: "100%" },
  	  { item: "Hueso Regreso", percentage: "100%" },
    ],
    moves: [
      { name: "Oscilación Horizontal", description: "Sif blande su espada en un doble ataque, con un segundo golpe en la dirección opuesta. Es un movimiento predecible que puede esquivarse rodando, pero si impacta, puede derribar al jugador. Es su ataque más frecuente durante la pelea." },
      { name: "Giro de Espada de 360 Grados", description: "Sif realiza un giro con su espada, a veces repitiendo el ataque en rápida sucesión. Su ejecución comienza con un movimiento en la dirección opuesta, lo que lo hace fácil de anticipar. Ante esta animación, lo ideal es retroceder o colocarse debajo de ella, ya que el impacto derriba y causa gran daño. Bloquearlo puede desestabilizar al jugador, por lo que la mejor opción es rodar para esquivarlo." },
      { name: "Balanceo por Encima de la Cabeza", description: "Sif se alza sobre sus patas traseras por un instante antes de golpear el suelo con su espada, causando gran daño. Para evitar el impacto, se recomienda rodar en el momento preciso en la dirección de la espada." },
      { name: "Carga", description: "El ataque final de Sif es un golpe cargado, que aunque rara vez lo utiliza, sigue siendo importante tenerlo en cuenta." },
      { name: "Voltereta hacia Atrás", description: "Sif realiza un corte en diagonal antes de impulsarse hacia atrás con un salto. Para evitar el impacto, lo más recomendable es rodar hacia un costado, manteniendo la distancia y evitando quedar vulnerable ante su siguiente ataque." },
    ],
    bestStrategies: `
            Mantente cerca del lobo, ya que su peligro radica en el alcance de sus ataques. Si te colocas debajo de <a href="">Sif</a>, muchos de sus golpes fallarán por completo. Aprovecha este momento para asestar varios golpes antes de que se recupere y repite la estrategia. La mejor forma de colocarse bajo ella es esperar su ataque y rodar debajo de sus patas delanteras. 
            Fijar el objetivo y moverse en círculos facilita esquivar su ataque giratorio, que siempre inicia por la izquierda. Golpear sus patas repetidamente la volverá más lenta, limitando su movilidad.<br><br>
            Si no tienes un escudo con alta estabilidad, el doble giro de Sif puede romper tu guardia. Una estrategia efectiva es bloquear el primer golpe y rodar en la dirección del segundo. El <a href="">Escudo de Águila</a>, ubicado después de la hoguera superior de <a href="">Ciudad Infestada</a>, es una excelente opción para esta pelea. <br><br>
            Cuando su salud esté al mínimo, <a href="">Sif</a> cojeará y sus ataques serán más lentos. Aunque se ha rumoreado que romper su espada en este punto la haría huir, no existe tal mecánica. <br><br>
            Esta pelea puede ser un desafío extremo o sorprendentemente sencilla, dependiendo del enfoque que tomes. Si juegas como mago, mantén siempre el escudo en alto cuando no estés lanzando hechizos y procura retroceder lo suficiente para evitar la mayoría de sus ataques, ya que aunque su espada tiene gran alcance, mantener la distancia reducirá el peligro. 
            Es recomendable evitar las <a href="">Grandes Flechas del Alma Pesadas</a>, ya que su tiempo de lanzamiento es demasiado largo, y en su lugar usar <a href="">Lanzas del Alma</a> o <a href="">Grandes Flechas del Alma</a>, que son más rápidas y efectivas. Gestionar bien la resistencia y la curación es clave, ya que beber Estus en el momento equivocado puede ser fatal; esta pelea es una prueba de paciencia, no de rapidez. Aprovecha los momentos de vulnerabilidad de Sif, pero evita quedarte debajo de ella; en su lugar, incítala a atacar, esquiva y lanza hechizos cuando haya una apertura. Si se acerca demasiado, Combustión puede ser una excelente opción para castigarla.`,
    lore: `
      <a href="">Sif</a>, el leal compañero de <a href="">Artorias, el Caminante del Abismo</a>, luchó junto a él en su misión para contener la expansión del <a href="">Abismo en Oolacile</a>. Sin embargo, al verse superados por la corrupción, <a href="">Artorias</a> sacrificó su escudo para crear una barrera mágica que protegiera a <a href="">Sif</a>, evitando que sucumbiera a la oscuridad.
      Tras la caída de su maestro, <a href="">Sif</a> asumió el papel de guardián de su tumba en el <a href="">Jardín Tenebroso</a>, impidiendo que otros aventureros siguieran el mismo trágico destino de <a href="">Artorias</a>.
    `,
    curiosities: [
      { 
        description: "Durante el combate contra el No Muerto Elegido, Sif empuña el Espadón de Artorias, el arma de su antiguo compañero, quien se sacrificó para protegerlo." 
      },
      { 
        description: "Si deseas explotar una ventaja, tras la escena inicial, sal del juego y recarga. Es posible subir a las rocas a la izquierda de la niebla del jefe y atacar a Sif con un arco desde una posición segura. Para maximizar el daño, se recomienda usar el Anillo de Piedra Lágrima Roja, Flechas de Plumas, el Arco Negro de Pharis y el Anillo de Halcón." 
      },
      { 
        description: "En el DLC Artorias del Abismo, Sif aparece protegida por una barrera mágica creada por Artorias con su Gran Escudo para resguardarla del Abismo. El jugador la encuentra tras un Muro Ilusorio después de ser guiado por Alvina en el Abismo. Al derrotar a los Fantasmas de la Humanidad, Sif desaparece, dejando atrás el escudo de Artorias. Posteriormente, puede ser invocada en la batalla contra Manus, Padre del Abismo, si el jugador la ha rescatado." 
      },
      { 
        description: "Si el No Muerto Elegido la salva en el Abismo antes de enfrentarse a ella en el Jardín de la Raíz Oscura, se activa una escena única. En esta, Sif reconoce al jugador, gime y se aleja con tristeza antes de tomar la Gran Espada de Artorias, tras lo cual la pelea inicia como de costumbre. Sin embargo, rescatar a Sif antes de enfrentarla impide encontrarse con Kaathe, ya que acceder al DLC requiere colocar el Vasija del Señor y visitar los Archivos del Duque." 
      },
    ],
  },

  "Golem de Hierro": {
    stats: {
      ng0: 2880,
      ng1: 5270,
      ng2: 5639,
      ng3: 5797,
      ng4: 6008,
      ng5: 6271,
      ng6: 6588,
      almas0: 40000,
      almas1: 120000,
      almas2: 128400,
      almas3: 132000,
      almas4: 136800,
      almas5: 142800,
      almas6: 150000
    },
    summoning: "Se puede invocar al Fantasma Blanco y Tarkus Hierro Negro, para que asista en la batalla. Su señal de invocación está al otro lado del puente, a la derecha de la puerta de niebla.",
    weaknesses:["Magia"],
    dropsDetailed: [
      { item: "Núcleo del Gólem de Hierro", percentage: "100%" },
    ],
    moves: [
      { name: "Hoja de Viento", description: "A distancia, el Gólem de Hierro carga su arma y lanza un proyectil de viento cortante hacia el jugador." },
      { name: "Combo de Hacha", description: "A corta distancia, el Gólem de Hierro puede balancear su hacha hasta tres veces en un ataque horizontal." },
      { name: "Pisotón de Hierro", description: "Si te quedas demasiado cerca de sus pies, el Gólem de Hierro pisoteará tres veces con su pie izquierdo o dos veces con el derecho." },
      { name: "Golpe de Tierra", description: "El Gólem de Hierro levanta lentamente su mano antes de golpear el suelo con fuerza. Puede evitarse rodando entre sus piernas y aprovechando su recuperación para atacarlo." },
      { name: "Golpe de Hacha", description: "El Gólem de Hierro golpea el suelo con su hacha con gran fuerza. Bloquear el ataque hará que el jugador retroceda, pero puede evitarse corriendo o rodando a tiempo." },
      { name: "Agarrar y Lanzar", description: "El Gólem de Hierro intentará agarrar al jugador con su mano, con una hitbox frontal y entre sus piernas. Si lo consigue, lo arrojará al suelo o por la cornisa, causando gran daño o incluso la muerte." },
      { name: "Barrer", description: "Si el jugador permanece demasiado tiempo detrás del Gólem de Hierro, este moverá su pie hacia atrás para intentar golpearlo." },
      { name: "Barra Lateral", description: "El Gólem de Hierro balancea su hacha verticalmente hacia el suelo, impactando cerca de sus piernas. El ataque tiene un amplio alcance, lo que dificulta atravesarlo." },
    ],
    bestStrategies: `
            Derrotar al <a href="">Gigante</a> que lanza <a href="">Bombas Incendiarias</a>, ubicado en la cima de la <a href="">Fortaleza de Sen</a> (accesible por las escaleras opuestas a la niebla del jefe), evitará que su ataque de fuego interfiera en el combate contra el <a href="">Gólem de Hierro</a>. Es fundamental prestar atención al entorno, ya que se corre el riesgo de caer de los bordes de la plataforma. 
            La pasarela principal, que conecta la entrada con el <a href="">Gólem de Hierro</a>, es generalmente más segura que las laterales, y en sus extremos diagonales existen pequeñas zonas protegidas ideales para curarse, pues bloquean la onda de choque del enemigo.<br><br>
            Al atravesar la puerta de niebla, el <a href="">Gólem de Hierro</a> lanza una onda expansiva con su hacha; este ataque puede esquivarse o bloquearse posicionándose detrás de una barrera. Su patrón de ataque es lento y predecible, siendo su agarre a corta distancia el más peligroso, aunque es posible esquivarlo rodando. 
            Durante un pisotón, lo mejor es moverse para atacar la pierna contraria, y si se golpea repetidamente una de sus piernas, el <a href="">Gólem de Hierro</a> perderá el equilibrio y quedará indefenso durante unos segundos; si tropieza cerca del borde, puede caer fuera de la arena sin que su núcleo se pierda. Debido al movimiento de la cámara al enfocar su rostro y al riesgo de caer, no se recomienda fijar el objetivo durante el combate. <br><br>
            <a href="">Hechiceros</a> y personajes a distancia pueden posicionarse en zonas seguras donde el <a href="">Gólem de Hierro</a> se vea forzado a emplear ataques cuerpo a cuerpo, quedando estos fuera de alcance. Potenciar armas contundentes (como martillos, garrotes o gran martillos) aplicándoles <a href="">Resina de Pino Dorado</a> o una <a href="">Espada de Luz Solar</a> resulta muy efectivo, ya que el <a href="">Gólem de Hierro</a> es vulnerable a golpes contundentes y al daño de relámpago. Sostener el arma a dos manos aumenta el daño y facilita hacerlo tambalear y derribar. 
            Además, el fantasma invocable <a href="">Tarkus Hierro Negro</a> es lo suficientemente fuerte como para derrotar al <a href="">Gólem de Hierro</a> por sí solo, y los fantasmas invocados pueden atacar desde los puentes laterales con arcos, aunque esta estrategia requiere más tiempo. <br><br>
            Una estrategia efectiva consiste en rodar bajo las piernas del Gólem tras cada ataque y golpear sus talones, aprovechando armas de amplio alcance (como las alabardas) para impactar ambas piernas y facilitar que pierda el equilibrio. Todos los ataques del Gólem pueden esquivarse o evitarse caminando, por lo que una adecuada sincronización y posicionamiento resultan claves para dominar el combate.`,
    lore: `
      El <a href="">Gólem de Hierro</a> fue creado por los Dioses como guardián de <a href="">Anor Londo</a>. Su cuerpo es un bloque macizo de hierro, formando una armadura de enorme peso, y está equipado con un hacha pesada capaz de desatar <a href="">Hoja de Viento</a>. Este constructo cobra vida gracias a un núcleo místico, forjado por los dioses al infundir el hueso de un <a href="">Archidragón</a> derrotado con el poder de las almas.
      <br><br>
      Tras el sacrificio de <a href="">Lord Gwyn</a> para prolongar la Era del Fuego, el <a href="">Gólem de Hierro</a> fue colocado como el último desafío de la <a href="">Fortaleza de Sen</a>. Los <a href="">No Muertos</a> que aspiraban a seguir los pasos de <a href="">Gwyn</a> debían superar múltiples pruebas antes de obtener la <a href="">Vasija del Señor</a> y buscar almas poderosas. <br><br>
      Hacer sonar las Campanas del Despertar era solo el primer obstáculo; quienes lograban avanzar eran puestos a prueba en la <a href="">Fortaleza de Sen</a>, donde el <a href="">Gólem de Hierro</a> representaba la última barrera para acceder a <a href="">Anor Londo</a>, la ciudad de los dioses. A lo largo de los siglos, este constructo cumplió su propósito, eliminando a innumerables héroes en su intento de alcanzar la legendaria ciudad.
    `,
    curiosities: [
      { 
        description: "El Gólem de Hierro tiene sus raíces en el libro Greyhawk (1975) de Dungeons & Dragons, donde Gary Gygax se inspiró en Talos, el autómata de bronce de la mitología griega. El término gólem proviene de un mito hebreo sobre una criatura de arcilla creada por el hombre, que Dungeons & Dragons amplió para incluir variantes como el gólem de carne, piedra e hierro." 
      },
      { 
        description: "Después de derrotar al Gólem de Hierro, Domhnall de Zena comenzará a vender su armadura." 
      },
      { 
        description: "Aunque Tarkus Hierro Negro es de gran ayuda, no esquivará el ataque de agarre del Gólem. Durante esta animación, el Gólem es invulnerable, por lo que cualquier golpe en ese momento será un desperdicio." 
      },
    ],
  },
  "Gwyndolin el Sol Oscuro": {
    stats: {
      ng0: 2000,
      ng1: 6000,
      ng2: 6420,
      ng3: 6600,
      ng4: 6840,
      ng5: 7140,
      ng6: 7500,
      almas0: 40000,
      almas1: 120000,
      almas2: 128400,
      almas3: 132000,
      almas4: 136800,
      almas5: 142800,
      almas6: 150000
    },
    summoning: "No puedes invocar a ningún NPC para esta batalla.",
    weaknesses:["Ninguna"],
    dropsDetailed: [
      { item: "Alma de Gwyndolin", percentage: "100%" },
    ],
    moves: [
      { name: "Disparo de Flechas", description: "Gwyndolin se eleva ligeramente para disparar una lluvia de flechas hacia el jugador. Estas proyectiles, que consumen muy poca resistencia al bloquearse, pueden ser detenidas con facilidad. Otra opción es posicionarse detrás de las columnas para que las flechas se desvíen al impactar contra ellas." },
      { name: "Disparo de Orbes", description: "Cargando su catalizador, Gwyndolin lanza un grupo de orbes azules que persiguen al jugador. Estos orbes, capaces de infligir un daño devastador al conectar, se pueden evitar refugiándose tras las columnas, ya que estas impiden su avance, o bien esquivándolos rodando por debajo." },
      { name: "Lanzamiento de Esfera", description: "Una vez más, tras cargar su catalizador, Gwyndolin expulsa una gigantesca esfera mágica que se desplaza a gran velocidad. Esta amenaza puede ser esquivada rodando hacia los lados o directamente por debajo, o bloqueada con un escudo mágico de calidad. Sin embargo, puesto que la esfera atraviesa las columnas, esconderse detrás de ellas no resulta una estrategia eficaz." },
    ],
    bestStrategies: `
            La batalla contra <a href="">Gwyndolin</a> se desarrolla en un corredor interminable. Aunque no resulta excesivamente difícil para quienes dominan la esquiva, el reto principal es alcanzarlo, ya que se teletransporta al detectar la cercanía del jugador. Equipar el <a href="">Anillo de Niebla</a> puede ampliar el margen de tiempo para atacar antes de que se retire, siendo fundamental para coordinar el asalto.<br><br>
            La clave está en aprovechar que tanto la lluvia de flechas como la esfera no tienen seguimiento, lo que permite evitarlas corriendo en diagonal. Una estrategia efectiva es avanzar de columna en columna hasta quedar a dos pilares de <a href="">Gwyndolin</a> y esperar a que concluya su <a href="">Disparo de Flechas</a> (que puede incluir dos a cuatro oleadas) para atacar en su breve ventana de vulnerabilidad. 
            Además, es posible dañarlo durante su animación de teletransporte o justo al terminarla. <br><br>
            Como alternativa, tras el primer teletransporte del jefe al ingresar a la cripta, el jugador puede acercarse hasta quedar justo fuera de su rango de agresión. Equipando el <a href="">Anillo del Halcón</a> y utilizando el <a href="">Gran Arco Asesino de Dragones</a>, se puede infligir daño considerable desde la distancia sin riesgo de recibir represalias directas.`,
    lore: `
      <a href="">Gwyndolin</a> es el hijo menor de <a href="">Gwyn, Señor de la Luz Solar</a>, y uno de los dioses que habitó <a href="">Anor Londo</a> durante la Edad del Fuego, si bien su legitimidad radica únicamente en su linaje. 
      Adorado como el "Dios de la Luna Oscura" y ostentando el título de "Dios del Sol Oscuro", nació imbuido de un poderoso don lunar, aunque presentaba un aspecto débil y repulsivo, marcado especialmente por las serpientes en su parte inferior.
      <br><br>
      Debido a su afinidad con la magia lunar, <a href="">Gwyndolin</a> fue criado con rasgos femeninos: <a href="">Gwyn</a> le impuso vestimentas de mujer y le otorgó un anillo mágico que inducía un comportamiento delicado y efímero, asemejándolo a una diosa oscura. 
      A pesar de las adversidades y de haber aceptado una imagen considerada frágil por los otros dioses, desarrolló una profunda admiración por su padre y aspiró a emular su grandeza, llegando a portar una corona adornada con un sol impregnado de su magia lunar. <br><br>
      Con el tiempo, <a href="">Gwyndolin</a> se consolidó como un poderoso hechicero. Empuñó un arco dorado imbuido de magia capaz de disparar flechas de luz lunar y utilizó un catalizador que canalizaba la fe del usuario, demostrando su gran dominio en las artes arcanas. 
      Su figura trascendió <a href="">Anor Londo</a>, siendo representada en múltiples estatuas en <a href="">Oolacile</a>, donde incluso se erigió un colosal anfiteatro para rituales de combate, evidenciando su influencia en los estudios de la hechicería. <br><br>
      Tras la caída del primogénito de <a href="">Gwyn</a> destituido por aliarse con los dragones y la posterior partida de casi todos los dioses, <a href="">Gwyndolin</a> quedó como el único representante de la divinidad en <a href="">Anor Londo</a>. 
      Consciente de su apariencia y de no ser apto para reinar abiertamente, ideó una astuta estrategia: creó la ilusión de su hermana <a href="">Gwynevere</a>, cuya imagen venerada le permitió gobernar el reino y liderar a los <a href="">Caballeros de Plata</a> sin pretender el trono para sí mismo. Asimismo, colaboró con <a href="">Frampt el Buscarreyes</a> para mantener viva la llama primordial y perpetuar la Edad del Fuego, guiando a los elegidos a través de desafíos sagrados. <br><br>
      No permaneciendo inactivo, <a href="">Gwyndolin</a> fundó el Pacto de la <a href="">Espada de la Luna Oscura</a>, reclutando a un selecto grupo de caballeros cuya misión era cazar y castigar a quienes cometieran pecados contra los dioses. Estos guerreros, equipados con los Orbes del Ojo Azul, podían invadir el tiempo y el espacio para ejecutar la justicia divina. 
      En alianza con <a href="">Velka, Diosa del Pecado</a>, establecieron un sistema en el que los infractores eran marcados en el Libro de los Culpables para que, en el futuro, enfrentaran la furia de las <a href="">Espadas de la Luna Oscura</a>. Los seguidores de <a href="">Gwyndolin</a>, como prueba de su deber cumplido, recolectaban una oreja de cada pecador derrotado, recibiendo a cambio anillos, talismanes y el conocimiento para forjar espadas imbuidas con la luz oscura. <br><br>
      <a href="">Gwyndolin</a> se mantuvo oculto en el mausoleo vacío de su padre, administrando <a href="">Anor Londo</a> y llevando a cabo la voluntad de <a href="">Gwyn</a>. Así, a través de su maestría en la hechicería, el uso de ilusiones y la instauración de pactos divinos, consolidó un legado que perdura en la memoria de aquellos que aún veneran la Edad del Fuego, combinando el poder del sol con la magia enigmática de la luna oscura.
    `,
    curiosities: [
      { 
        description: "El pasillo en el que se enfrenta a Gwyndolin no es infinito, sino que posee una longitud definida. Si el jefe se ve forzado a llegar al final del corredor, perderá la capacidad de teletransportarse y quedará vulnerable a los ataques del jugador." 
      },
      { 
        description: "Al derrotar a Gwyndolin, su armadura pasará a estar disponible para su compra a través de Domhnall de Zena." 
      },
      { 
        description: "El Caballero de la Luna Oscura se volverá hostil si entras por la niebla, sin importar si es vencido o no. De igual forma, la muerte de Gwynevere se considerará una afrenta hacia Gwyndolin, lo que provocará la hostilidad del mismo Caballero." 
      },
      { 
        description: "Si el enfrentamiento contra Gwyndolin se inicia antes de derrotar a Ornstein y Smough, es posible invocar al Caballero Solaire desde su ubicación habitual; aunque no intervendrá directamente, al finalizar la pelea se obtendrá una Medalla de Luz Solar." 
      },
      { 
        description: "En Dark Souls III, debilitado por una enfermedad y tras ser encarcelado por el Pontífice Sulyvahn, Gwyndolin es devorado por Aldrich." 
      },
      { 
        description: "En Dark Souls 3 se revela que Gwyndolin tiene una hermana, Yorshka, quien emerge como figura central al asumir el liderazgo del convento de la Luna Oscura." 
      },
      { 
        description: "En Dark Souls 3, un material eliminado sugería la posibilidad de obtener un dedo consumido de Gwyndolin, posiblemente tras vencer a Aldrich, para entregárselo a Yorshka como recuerdo." 
      },
    ],
  },
  "Ornstein & Smough": {
    stats: {
      ng0: "1642/2981/2645/4094",
      ng1: "2873/5218/4630/7166",
      ng2: "3074/5583/4954/7668",
      ng3: "3160/5740/5093/7883",
      ng4: "3275/5949/5278/8169",
      ng5: "3419/6209/5510/8528",
      ng6: "3591/6523/5788/8958",
      almas0: 50000,
      almas1: 150000,
      almas2: 160500,
      almas3: 165000,
      almas4: 171000,
      almas5: 178500,
      almas6: 187500
    },
    summoning: "Puedes invocar a Solaire de Astora para la batalla. Su señal de invocación está en una plataforma pequeña, conectada a las escaleras de la izquierda antes de la puerta de niebla, justo debajo del Caballero Arquero.",
    weaknesses:["Fuego (Ornstein), Rayo (Smough Fase 1), Fuego(Smough Fase 2), Sangrado(Smough Fase 2)"],
    dropsDetailed: [
      { item: "Anillo del Leon", percentage: "si derrotas a Ornstein al final"},
  	  { item: "Alma Ornstein", percentage: "si derrotas a Ornstein al final" },
  	  { item: "Alma Smough", percentage: "si derrotas a Smough al final" },
    ],
    moves: {
      ornstein: [
        {
          name: "Combo Balanceo",
          description: "Ornstein realiza hasta cuatro cortes en arco, tanto verticales como horizontales. Es una buena oportunidad para rodearlo y atacar entre golpes o acercarse a Smough. Sus ataques tienen buen alcance y seguimiento, pero son fáciles de bloquear."
        },
        {
          name: "Golpe de Lanza",
          description: "Ornstein ejecuta hasta cuatro cortes en arco, tanto verticales como horizontales. Aprovecha para rodearlo y atacar entre golpes o acercarte a Smough. Sus ataques tienen buen alcance y seguimiento, pero son fáciles de bloquear."
        },
        {
          name: "Rayo",
          description: "Ornstein lanza un rayo arrojadizo con un tiempo de carga prolongado. Aprovecha este momento para atacar a él o a Smough si están cerca. Te seguirá hasta lanzarlo, así que prepárate para esquivarlo. El rayo es lento pero teledirigido, por lo que esquivarlo demasiado pronto puede hacer que te alcance. Usa los pilares para bloquearlo estratégicamente."
        },
        {
          name: "Puñalada de Relámpago",
          description: "Si estás demasiado cerca, en lugar de lanzar el rayo, Ornstein te apuñalará con su lanza."
        },
        {
          name: "Puñalada de Planeo",
          description: "Ornstein se deslizará por la habitación para intentar apuñalarte. La señal de este ataque es cuando se arrodilla y se prepara para atacar. En cuanto lo haga, prepárate para rodar y esquivarlo. Si choca contra un obstáculo, continuará el ataque hasta alcanzarte, así que mantente alerta y observa si sigue deslizándose después de impactar contra un pilar."
        },
      ],
      superOrnstein: [
        {
          name: "Balanceo de Lanza",
          description: "Ornstein girará su lanza de un lado a otro si permaneces cerca. Aprovecha el momento para esquivar y deslizarte bajo sus piernas para atacarlo."
        },
        {
          name: "Barrido con Paso Atrás",
          description: "Ornstein salta hacia atrás y ejecuta un barrido que daña un área amplia frente a él. Para evitarlo, mantente debajo de él. Si tu arma es rápida, podrás contraatacar tras su aterrizaje."
        },
        {
          name: "Golpe de Lanza",
          description: "Similar al ataque de la primera fase, pero con un área de impacto mayor. Anticípalo y ajusta tu movimiento en consecuencia."
        },
        {
          name: "Puñalada inferior con Lanza",
          description: "Ornstein clava su lanza en el suelo; si impacta, puede romper tu guardia y seguir con una carga, infligiendo un daño considerable."
        },
        {
          name: "Puñalada de Planeo",
          description: "Solo usará este ataque cuando estés lejos, de manera similar a su primera fase, obviamente con más dano respecto la primera fase."
        },
        {
          name: "Choque Eléctrico",
          description: "Ornstein salta y aterriza con una gran explosión eléctrica en el área debajo de él. Si lo ves salir de la pantalla, rueda o corre para alejarte. Tras aterrizar, es posible atacarlo, pero ten cuidado, ya que el área de impacto del rayo permanece un momento. Un escudo con alta resistencia eléctrica, como el Escudo de Águila o el Escudo de Efigie, puede mitigar parte del daño, aunque lo más seguro es esquivar fuera del alcance."
        },
        {
          name: "Empalamiento de Iluminación",
          description: "El ataque más letal de Ornstein. Si estás cerca, cargará su lanza y la clavará frente a él con un seguimiento errático. Esquiva rodando hacia un costado o, si es posible, pasa por debajo de él mientras carga. Rodar demasiado pronto puede resultar en un empalamiento. Si te atrapa, te atravesará con su lanza, te levantará en el aire y te golpeará con un poderoso rayo antes de arrojarte al suelo, infligiendo un gran daño. Durante la animación de este ataque, Ornstein es invulnerable, pero también queda bloqueado en su movimiento, lo que permite a otros jugadores curarse sin riesgo."
        },
      ],
      smough: [
        {
          name: "Golpe de Martillo",
          description: "Smough levanta su martillo con ambas manos y lo estrella frente a él. Es un ataque lento con mal seguimiento, fácil de esquivar rodando hacia un lado o moviéndose rápidamente. Sin embargo, atraviesa pilares rotos, por lo que no confíes demasiado en ellos como cobertura. Su tiempo de recuperación es lo suficientemente largo como para permitirte contraatacar con seguridad."
        },
        {
          name: "Salto con Martillo Aplastante",
          description: "Smough salta hacia adelante y golpea el suelo con su martillo. Para evitarlo, aléjate o rueda hacia un lado. La zona de impacto es difícil de predecir, por lo que rodar hacia adelante o intentar esquivar a través del ataque no es recomendable, ya que podrías ser alcanzado por el martillo o el propio Smough."
        },
        {
          name: "Barrido de Martillo",
          description: "Smough balanceará su martillo de un lado a otro antes de impactarlo contra el suelo. Debido a su amplio radio y área de impacto impredecible, lo mejor es alejarse o posicionarse detrás de él. Otra opción es correr hacia su pecho y dejar que el golpe pase detrás de ti. Como el mango del martillo no causa daño, puedes aprovechar para atacar con cuerpo a cuerpo o hechizos de corto alcance."
        },
        {
          name: "Barrido de Martillo Doble",
          description: "Este ataque poco común comienza con un barrido de martillo, pero después del impacto inicial, Smough lo revierte en la dirección opuesta. Puede sorprender a quienes atacan tras el primer golpe. Para evitar daño, presiona contra Smough o mantente alejado. No intentes bloquearlo ni absorber el impacto, ya que el daño es considerable."
        },
        {
          name: "Carga de Pisoteo",
          description: "Smough tiene un ataque letal en el que suelta el martillo frente a él y se lanza hacia el jugador; si te atrapa, sufres daño tanto por el martillo como por su cuerpo, rematando con un devastador golpe ascendente. Para esquivarlo, lo ideal es anticipar el movimiento y rodar hacia un lado antes de que te alcance. Usar una columna como escudo es otra opción: si Smough choca contra ella, su carga se interrumpe, aunque seguirás teniendo que evitar su golpe ascendente, que puede atravesar la columna. Si no dispones de un pilar, correr directamente hacia Smough y continuar moviéndote tras el ataque te colocará fuera de su alcance; alternativamente, rodar en círculo hacia la derecha con el objetivo fijado también puede ayudarte. En su forma normal, bloquear el ataque con un escudo de alta estabilidad (70+ recomendado) es posible, pero existe el riesgo de que se rompa la guardia, permitiendo que Smough encadene más golpes. En modo cooperativo, un aliado puede forzar a Smough a tambalearse desde un costado o por detrás, cancelando por completo su carga."
        },
        {
          name: "Golpe de Trasero",
          description: "Smough salta verticalmente y se estrella con su trasero mientras sostiene su martillo de lado. Puedes recibir daño tanto por el impacto directo como por el área debajo del martillo. Para evitarlo, retrocede ligeramente o muévete hacia la derecha. Este ataque tiene un largo tiempo de recuperación mientras Smough se reincorpora, lo que brinda una buena oportunidad para atacar."
        },
      ],
      superSmough: [
        {
          name: "Martillo Electrico Aplastante",
          description: "Smough realiza un golpe descendente cargado de rayos para derribar a los jugadores. Es recomendable esquivar hacia un lado, ya que bloquearlo o resistirlo resulta difícil debido a su gran poder."
        },
        {
          name: "Barrido de Martillo Eléctrico",
          description: "Smough ejecutará un amplio barrido horizontal con su martillo imbuido de rayos, similar a su ataque de barrido habitual."
        },
        {
          name: "Salto con Martillo Eléctrico Aplastante",
          description: "Smough se lanzará hacia adelante con su martillo imbuido de rayos. Para evitarlo, muévete hacia los costados o usa una columna como escudo."
        },
        {
          name: "Golpe de Trasero Eléctrico",
          description: "Uno de los ataques más peligrosos de Smough. Saltará al aire acumulando una gran carga eléctrica y, al aterrizar, liberará una descarga de 360 grados. Su radio es mucho mayor que el ataque similar de Ornstein y causa un daño devastador. Si te atrapa en el impacto, recibirás tanto el golpe del cuerpo de Smough como la electricidad, lo que suele ser letal. Tan pronto como lo veas saltar, retrocede rápidamente o rueda varias veces para salir del área de explosión."
        },
        {
          name: "Carga de Pisoteo Eléctrico",
          description: "Smough realiza un golpe descendente cargado de rayos para derribar a los jugadores. Es recomendable esquivar hacia un lado, ya que bloquearlo o resistirlo resulta difícil debido a su gran poder."
        },
      ]
    },
    bestStrategies: `
            El jugador debe luchar contra ambos jefes simultáneamente. Al derrotar a uno, el otro absorberá su poder, recuperando toda su salud y aumentando su vida, daño y resistencia. Además, <a href="">Ornstein</a> crecerá en tamaño si sobrevive, mientras que <a href="">Smough</a> será imbuido con electricidad. Invocar a Solaire facilita el combate al permitir dividir la atención de los jefes. 
            Sin embargo, no es útil dañar a ambos en la primera fase, ya que el sobreviviente recuperará toda su salud en la segunda. La mejor estrategia es que el fantasma distraiga a un jefe mientras el jugador se enfoca en derrotar al otro. <br><br>
            Al luchar en solitario, una estrategia segura es moverse alrededor del perímetro de la sala, usando los pilares para bloquear los ataques de carga. Esto suele llevar a que Ornstein sea derrotado primero, ya que su velocidad le permite alcanzar al jugador antes que <a href="">Smough</a>, quien quedará rezagado intentando rodear los obstáculos.<br><br>
            El estilo de combate de <a href="">Ornstein</a> se basa en ataques rápidos y estocadas, por lo que esquivar hacia los lados es más efectivo que rodar hacia atrás. Su velocidad y agilidad lo hacen difícil de golpear, y su capacidad para lanzar rayos a distancia lo convierte en una amenaza en cualquier rango. <a href="">Smough</a> es el más resistente de los dos y su martillo inflige un daño devastador si conecta. Como su hitbox se centra en la cabeza del martillo, lo ideal es esquivar hacia él o alejarse. Sin embargo, hay que estar atento a su ataque de carga, que puede ser letal si el jugador se mantiene fuera de su alcance cuerpo a cuerpo. Derrotar primero a <a href="">Ornstein</a> facilita el combate, ya que <a href="">Smough</a> es más predecible y tiene más debilidades en la segunda fase. <br><br>
            Los personajes cuerpo a cuerpo pueden aprovechar armas de gran alcance, como lanzas, alabardas o espadas con estocadas rápidas, para atacar a los jefes cerca de los pilares. Sin embargo, deben tener precaución, ya que ambos jefes pueden ejecutar ataques que atraviesan los obstáculos. Los personajes a distancia pueden usar los pilares para manejar los movimientos de los jefes, pero deben tener en cuenta que no todos tienen la misma altura. Algunos bloquearán proyectiles, mientras que otros permitirán que los ataques los atraviesen. <br><br>
            Segunda Fase (Ornstein): Si <a href="">Smough</a> es el primero en caer, <a href="">Ornstein</a> crecerá en tamaño, aumentará su daño y obtendrá nuevos ataques. La mejor estrategia es mantenerse debajo de él, atacando entre sus piernas y siguiéndolo cuando se aleje. Al igual que Smough, al saltar generará una explosión de rayos, por lo que hay que alejarse rápidamente. También puede empalar al jugador con su lanza y causar una explosión devastadora; este ataque debe bloquearse o esquivarse para evitar un daño masivo. <br><br>
            Segunda Fase (Smough): Si <a href="">Ornstein</a> cae primero, <a href="">Smough</a> lo aplastará con su martillo, ganando poder eléctrico. La mejor estrategia es usar los pilares como cobertura, atacar después de que realice un movimiento y mantenerse alerta. Cuando salte, aléjate con el escudo en alto para reducir el impacto de la explosión de rayos.`,
    lore: `
      <a href="">Ornstein</a>, capitán de los Cuatro Caballeros de <a href="">Gwyn</a>, luchó junto a <a href="">Artorias</a>, <a href="">Ciaran</a> y <a href="">Gough</a> como un cazador de dragones honorario. Empuñaba la <a href="">Lanza Matadragones</a>, inspirada en el arma del Primogénito de <a href="">Gwyn</a>, y dominaba el poder del rayo. Se cree que permaneció en <a href="">Anor Londo</a> junto a <a href="">Smough</a> para proteger la catedral tras la partida de los dioses.
      <br><br>
      Sin embargo, existen indicios de que su presencia en <a href="">Anor Londo</a> podría ser una ilusión, al igual que Gwynevere y la luz de la ciudad, todo mantenido por <a href="">Gwyndolin</a>. Su aparición en la Torre de la Llama de Heide sugiere que podría haber huido con <a href="">Gwynevere</a>. Además, la presencia de su armadura en el Pico del Archidragón insinúa que siguió al Primogénito de <a href="">Gwyn</a> tras su traición. Algunas teorías sugieren incluso que Ornstein abandonó su armadura y cuerpo para convertirse en un dragón, reflejado en el Rey Sin Nombre, quien, al igual que Ornstein, absorbe el poder del rayo a través de su vínculo con los dragones. 
      <br><br>
      <a href="">Smough</a>, el verdugo de la familia real de <a href="">Anor Londo</a>, aspiraba a convertirse en un caballero de <a href="">Gwyn</a>. Sin embargo, su brutal entusiasmo lo llevó a devorar los huesos de sus víctimas, lo que provocó el rechazo de la realeza y le impidió alcanzar dicho rango. Tras la huida de los dioses de <a href="">Anor Londo</a>, continuó protegiendo la ilusión de <a href="">Gwynevere</a>. No está claro si su lealtad era hacia <a href="">Gwyndolin</a> o si él mismo fue engañado por la falsa luz del sol que envolvía la ciudad. 
    `,
    curiosities: [
      { 
        description: "La Catedral de Anor Londo es su dominio. Una vez dentro, los No Muertos deben enfrentarse a Ornstein y Smough, los guardianes de la catedral, quienes aseguran que solo los más fuertes sean dignos de una audiencia con Gwynevere, Princesa de la Luz del Sol." 
      },
      { 
        description: "Ornstein, el capitán de los Cuatro Caballeros de Gwyn, era un cazador de dragones que empuñaba la Lanza Matadragones, un arma inspirada en la del Primogénito de Gwyn. Poseía el poder del rayo y se cree que permaneció en Anor Londo junto a Smough para proteger la catedral tras la partida de los dioses." 
      },
      { 
        description: "Existen teorías sobre la verdadera presencia de Ornstein. Algunos creen que la versión de Ornstein en Anor Londo es una ilusión creada por Gwyndolin, similar a la luz artificial de la ciudad y a Gwynevere. Su presencia en Drangleic y la aparición de su armadura en el Pico del Archidragón sugieren que pudo haber seguido al Primogénito de Gwyn tras su traición, e incluso algunos especulan que se despojó de su armadura y cuerpo para convertirse en un dragón." 
      },
      { 
        description: "Smough, el verdugo de la familia real de Anor Londo, soñaba con ser un caballero de Gwyn, pero su hábito de devorar los huesos de sus víctimas lo llevó a ser rechazado por la realeza." 
      },
      { 
        description: "Tras la partida de los dioses, siguió defendiendo Anor Londo. Protegía la ilusión de Gwynevere, aunque no se sabe si por lealtad a Gwyndolin o porque él mismo fue engañado por la falsa luz del sol." 
      },
      { 
        description: "En Dark Souls 2 se enfrenta a un enigmático jefe conocido como el Viejo Matadragones. Este adversario luce una armadura y ejecuta ataques casi idénticos a los de Ornstein, pero su origen y trasfondo siguen siendo un misterio, ya que hasta el momento no se ha revelado nada acerca de su historia." 
      },
    ],
  },
  "Priscilla la Mestiza": {
    stats: {
      ng0: 2300,
      ng1: 3611,
      ng2: 3864,
      ng3: 3972,
      ng4: 4117,
      ng5: 4297,
      ng6: 4514,
      almas0: 30000,
      almas1: 60000,
      almas2: 64200,
      almas3: 66000,
      almas4: 68400,
      almas5: 71400,
      almas6: 75000
    },
    summoning: "No puedes invocar a ningún NPC para esta batalla.",
    weaknesses:["Fuego"],
    dropsDetailed: [
      { item: "Humanidades Gemelas", percentage: "100%" },
      { item: "Alma de Priscilla", percentage: "100%" },
      { item: "Daga de Priscilla", percentage: "Solo obtenible al cortar la cola."},
    ],
    moves: [
      { name: "Invisibilidad", description: "Priscilla inicia el combate con una tormenta helada que la vuelve completamente invisible." },
      { name: "Balanceo de Guadaña", description: "Priscilla blande su guadaña con un amplio balanceo y, en ocasiones, encadena uno o dos golpes adicionales. Sus ataques tienen un alcance considerable y pueden causar sangrado severo si logran impactar." },
      { name: "Ventisca", description: "Priscilla desata una ventisca de alcance medio, que se puede esquivar fácilmente corriendo hacia un lado. Además, este ataque acumula sangrado en el jugador." },
    ],
    bestStrategies: `
            Cortarle la cola es sencillo; unos cuantos golpes rápidos bastarán para desprenderla.<br> <br>
            Al recibir daño, <a href="">Priscilla</a> se vuelve invisible. Para localizarla, sigue las grandes huellas que deja en la nieve. Sin embargo, ten cuidado, ya que casi la mitad del área carece de cobertura nevada.<br><br>
            <a href="">Priscilla</a> se volverá visible al perder el equilibrio. Golpearla con piromancias o armas de fuego acelerará su reaparición. Además, una flecha o cuchillo arrojadizo quedará adherido a su cuerpo por un tiempo, revelando su posición. <br><br>
            Los ataques de <a href="">Priscilla</a> acumulan sangrado rápidamente, por lo que es recomendable llevar equipo que reduzca este efecto. El <a href="">Anillo Mordisco Sangriento</a> es especialmente útil, además de contar con musgo rojo sangre para contrarrestarlo.`,
    lore: `
      <a href="">Priscilla</a> es el resultado de la unión entre el dragón <a href="">Seath</a> y una mujer, producto de los experimentos de <a href="">Seath</a> en su incesante búsqueda de la inmortalidad. 
      Esta híbrida, de origen incierto, destaca por su imponente estatura y su cuerpo cubierto de un espeso pelaje, lo que la asemeja a los auténticos <a href="">Dragones Eternos</a>.
      <br><br>
      Dotada de un poder oculto capaz de desafiar a los dioses de <a href="">Anor Londo</a>, <a href="">Priscilla</a> fue considerada una abominación. 
      Su capacidad para cazar la vida y su linaje, en directa oposición al orden divino, la convirtieron en un ser temido por las deidades. <br><br>
      Para proteger al mundo de su poder, <a href="">Priscilla</a> fue sellada en el frío y solitario <a href="">Mundo Pintado de Ariamis</a>, un reino creado para aislarla. Este dominio, custodiado por los <a href="">Guardianes de la Pintura</a>, sirvió como prisión para artefactos peligrosos y seres abominables. 
      Con el tiempo, <a href="">Velka, la Diosa del Pecado</a>, extendió su influencia en este lugar, atrayendo a numerosos seguidores que, en cierta medida, se esforzaron por resguardar a <a href="">Priscilla</a> del rechazo de los dioses. <br><br>
      Al adentrarse en el <a href="">Mundo Pintado de Ariamis</a>, el <a href="">No Muerto Elegido</a> encontró a <a href="">Priscilla</a>, quien había optado por convertirse en la protectora de ese reino. 
      Aunque tenía la capacidad de abandonar la pintura, ella prefería permanecer en ese lugar que consideraba pacífico y habitado por almas amables, mostrando compasión hacia aquellos que, al igual que ella, habían sido relegados por el mundo exterior.
    `,
    curiosities: [
      { 
        description: "En una entrevista, un desarrollador reveló que Priscilla estaba originalmente destinada a ser la heroína principal, en un rol similar al de la Dama de Negro en Demon's Souls o la Heraldo de Esmeralda en Dark Souls II. Sin embargo, este concepto fue descartado y su papel fue reemplazado por las Guardianas del Fuego." 
      },
      { 
        description: "Priscilla tiene animaciones no utilizadas donde se sienta y se levanta, lo que sugiere que originalmente estaba destinada a ser una aliada del jugador." 
      },
      { 
        description: "Dado que la Daga de Priscilla inflige daño Oculto y el Mundo Pintado de Ariamis alberga varias reliquias asociadas con Velka, la diosa del pecado, es posible que Priscilla tuviera algún vínculo con ella. Esto podría haber sido una de las razones principales por las que fue encerrada en el Mundo Pintado." 
      },
      { 
        description: "El uso de Neblina Tóxica o Venenosa hace que Priscilla adquiera un estado tóxico o venenoso. Mientras permanece oculta, la neblina que la envuelve revelará su posición." 
      },
      { 
        description: "Al absolver los pecados junto a Oswald de Carim, Priscilla retorna a un estado neutral." 
      },
      {
        description: "La interpretación vocal de Priscilla está a cargo de Clare Corbett, quien también da voz a la Mercadera No Muerta y a Gwynevere, la Princesa de la Luz Solar."
      },
      {
        description: "En Dark Souls 3 se dice que Priscilla tuvo una hija que heredó tanto sus rasgos dracónicos como su profundo conocimiento de la Primera Llama y del Alma Oscura, lo que le permitió canalizar estos poderes para pintar múltiples Mundos Pintados, siendo uno de ellos el enigmático Mundo Pintado de Ariandel."
      }
    ],
  },
  "Seath el Descamado": {
    stats: {
      ng0: 5525,
      ng1: 8674,
      ng2: 9281,
      ng3: 9541,
      ng4: 9888,
      ng5: 10323,
      ng6: 10842,
      almas0: 60000,
      almas1: 120000,
      almas2: 128400,
      almas3: 132000,
      almas4: 136800,
      almas5: 142800,
      almas6: 150000
    },
    summoning: "No puedes invocar a ningún NPC para esta batalla.",
    weaknesses:["Electricidad", "Cristal Primordial (Seath es invulnerable hasta que destruyas el cristal, ubicado al final de la arena)"],
    dropsDetailed: [
      { item: "Humanidad", percentage: "100%" },
      { item: "Fragmento alma Señor legada", percentage: "100%" },
      { item: "Espadón de luz de luna", percentage: "Corta la cola larga situada detrás de Seath" }
    ],
    moves: [
      { name: "Aliento de Cristal Maldito", description: "Seath exhala una niebla blanca en arco que deja cristales causantes de daño mágico y maldición; se anticipa cuando su cabeza se inclina levemente a la izquierda, por lo que rodar hacia atrás es la clave; en variantes, puede inclinar la cabeza hacia atrás o girarla manteniendo la mirada al frente, lo que implica correr lejos o lateralmente." },
      { name: "Explosion de Cristal", description: "Seath se acurruca y envuelve en niebla para liberar una explosión devastadora con cristales, infligiendo daño físico y mágico sin posibilidad de bloqueo; evita quedarte atrapado corriendo en dirección opuesta en cuanto notes que se acurruca y se forma la niebla, y utiliza el escudo para mitigar el daño si es necesario." },
      { name: "Ataque de Cola", description: "Al permanecer cerca, Seath levanta su cola más grande y golpea con las tres, encadenando ataques que pueden aturdir; para esquivarlo, rueda hacia atrás tan pronto como observes la señal de ataque, y si buscas cortar la cola, estate atento a la animación; en su variante de golpe y barrido, las colas permanecen en el suelo, lo que también se contrarresta rodando hacia atrás." },
      { name: "Bofetada", description: "Cuando ha recibido demasiados golpes, Seath levanta una mano y lanza una bofetada de gran impacto físico; evita este ataque observando cuál mano se levanta y rodando en la dirección opuesta mientras te alejas." },
    ],
    bestStrategies: `
              Durante el primer encuentro con <a href="">Seath el Descamado</a> en los <a href="">Archivos del Duque</a>, la derrota es inevitable, perdiendo almas y humanidad a menos que se use un <a href="">Anillo de Sacrificio</a> (o su variante rara). 
              Resistirse solo retrasa ese desenlace y puede provocar una maldición, por lo que lo mejor es aceptar la muerte y volver para enfrentarlo en mejores condiciones.<br> <br>
              Antes del segundo encuentro, ten cuidado con las <a href="">Almejas Gigantes</a> que pueden seguirte y empujarte durante la cinemática, alterando tu posición inicial y obligándote a enfrentarlas junto a <a href="">Seath</a>; por ello, es recomendable eliminarlas antes de cruzar la niebla del jefe. 
              Además, en esta entrada inicial no hay puerta de niebla, lo que permite que caparazones devoradores de hombres ingresen y compliquen el combate. <br><br>
              Aprovecha su lentitud utilizando diversas tácticas: mantente a su izquierda o derecha para evitar sus ataques frontales y golpear sus colas, o emplea armas a distancia, hechizos, piromancias y milagros para atacarlo de forma segura. 
              Los <a href="">piromantes</a> y <a href="">magos</a> pueden circunvalar y lanzar rápidamente hechizos como <a href="">Gran Bola de Fuego del Caos</a> o <a href="">Lanza de Alma de Cristal</a>, curándose cuando sea necesario, mientras que los combatientes cuerpo a cuerpo pueden posicionarse en la punta de su cola izquierda para forzar un patrón de ataque predecible, aunque este método no permite obtener la espada.`,
    lore: `
      Envidia. Amargura. Dos palabras que sellaron el destino de <a href="">Seath el Descamado</a>, el dragón que traicionó a su propia especie. A diferencia de sus hermanos, <a href="">Seath nació</a> sin las impenetrables escamas de piedra que conferían a los <a href="">Dragones Eternos</a> su aparente inmortalidad. Privado de ese don, su corazón se llenó de resentimiento. 
      Cuando <a href="">Gwyn, el Señor de la Luz Solar</a>, declaró la guerra contra los dragones, <a href="">Seath</a> no dudó en aliarse con él, junto a la <a href="">Bruja de Izalith</a> y el <a href="">Señor de la Tumba Nito</a>. Con su conocimiento y traición, llevó a su propia raza al borde de la extinción, hasta que solo él quedó.
      <br><br>
      Su recompensa no fue menor. <a href="">Gwyn</a> lo elevó al título de "Duque" y le concedió un lugar donde pudiera entregarse sin límites a su verdadera obsesión: el conocimiento prohibido. 
      Así nacieron los <a href="">Archivos del Duque</a>, un templo de sabiduría retorcida en el que <a href="">Seath</a> desentrañó los secretos de la inmortalidad. Como muestra de su favor, el <a href="">Señor de la Luz Solar</a> también le otorgó un fragmento de su propia <a href="">Alma de Señor</a>. <br><br>
      La respuesta que <a href="">Seath</a> buscaba llegó con el <a href="">Cristal Primordial</a>, la clave de la eternidad que tanto anhelaba. Pero la inmortalidad no vino sin consecuencias. Consumido por su propia ambición, su mente se fragmentó y <a href="">Seath</a> cayó en la locura. En su paranoia, se atrincheró en los Archivos, temiendo que los otros señores intentaran arrebatarle su preciado hallazgo. 
      Desde su fortaleza de conocimiento prohibido, envió a sus canalizadores a recorrer la tierra en busca de víctimas: hermosas doncellas y desafortunados <a href="">No Muertos</a>, condenados a ser sujetos de sus experimentos enloquecidos. Lo que fue un gran dragón se convirtió en un monstruo demente, atrapado en la jaula de su propia creación.
    `,
    curiosities: [
      { 
        description: "En el primer encuentro, su aliento de cristal puede atravesar la niebla y herir al jugador. Si mueres fuera de la sala cristalizada, reaparecerás en la última hoguera usada, en lugar de la prisión." 
      },
      { 
        description: "Puedes regresar a la arena del primer encuentro para recoger la Ascua Mágica Gigante y el Alma de Gran Héroe, y encontrarás a Logan hueco (si completaste su misión)." 
      },
      { 
        description: "Si Logan de Sombrero Grande mata al jugador en la sala del primer encuentro, este será enviado a la prisión en lugar de la última hoguera." 
      },
      { 
        description: "Si el jugador corta la cola de Seath, esta no desaparecerá, permaneciendo en el suelo incluso después de su muerte." 
      },
      { 
        description: "A pesar de ser ciego, Seath detecta al jugador incluso con habilidades de sigilo como el Anillo Dragón Dormido." 
      },
      { 
        description: "El nombre Seath ya había aparecido en la saga King's Field de FromSoftware." 
      },
    ],
  },
  "Molinete": {
    stats: {
      ng0: 1326,
      ng1: 2691,
      ng2: 2879,
      ng3: 2960,
      ng4: 3068,
      ng5: 3202,
      ng6: 3364,
      almas0: 15000,
      almas1: 25000,
      almas2: 26750,
      almas3: 27500,
      almas4: 28500,
      almas5: 29750,
      almas6: 31250
    },
    summoning: "Se puede invocar a Paladín Leeroy para este combate. Su señal de invocación está en un borde elevado, justo antes de la puerta de niebla, sobre el área de los esqueletos rueda.",
    weaknesses:["Fuego"],
    dropsDetailed: [
      { item: "Rito del Avivado", percentage: "100%" },
      { item: "Máscara del Niño", percentage: "34%" },
      { item: "Máscara del Padre", percentage: "33%" },
      { item: "Máscara de la Madre", percentage: "33%" },
    ],
    moves: [
      { name: "Bola de Fuego del Molinete", description: "El enemigo tiene dos variantes de su ataque de bola de fuego. En la versión habitual, tras una breve carga lanza una rápida bola de fuego que causa daño considerable; se puede anticipar el disparo observando sus manos, que brillan y giran en sentido horario. En una variante alterna, sus manos giran en sentido antihorario para cargar una bola de fuego más grande y lenta, la cual inflige mayor daño y abarca un área mayor, aunque resulta más fácil de esquivar. En ambos casos, un giro en el momento adecuado permite evadir el ataque." },
      { name: "Lanzallamas del Molinete", description: "Aunque se asemeja al ataque anterior, este es continuo, causando daño sostenido si permaneces en su trayectoria. Su alto daño lo hace peligroso, pero es fácil de evitar si te apartas a tiempo." },
      { name: "Sirvientes del Molinete", description: "Molinete puede desaparecer y crear múltiples copias de sí mismo, normalmente de forma sucesiva. Se desvanece tras recibir varios golpes y no reaparece por unos segundos. Su desaparición es inminente cuando flota y une sus brazos antes de explotar en el aire, pero deja un clon activo para continuar el combate." },
    ],
    bestStrategies: `
            <a href="">Molinete</a> es uno de los jefes más débiles del juego. Puede invocar clones ilimitados, que infligen el mismo daño que él. 
            La mejor estrategia es cargar contra él al inicio del combate y causarle el mayor daño posible. Si se teletransporta tras invocar clones, hay una breve oportunidad para atacarlo antes de que desaparezca.<br><br>
            Los clones de Molinete son réplicas casi idénticas, con la única diferencia de que su tela es ligeramente más clara. Se limitan a lanzar rápidas bolas de fuego y desaparecen al ser golpeados. Para invocarlos, agita sus brazos y los genera a través de un pequeño portal morado.`,
    lore: `
      Se sabe poco sobre <a href="">Molinete</a>, pero hay indicios de su naturaleza y propósito. Parece estar formado por tres individuos distintos, y al notar la presencia del <a href="">No Muerto Elegido</a>, sus tres máscaras se miran entre sí y se contraen levemente, como si deliberaran sobre cómo actuar ante el intruso.
      <br><br>
      Por la cantidad de tomos y esqueletos encadenados en su guarida, incluidos los de su mesa de operaciones, se puede deducir que <a href="">Molinete</a> no es un Hueco y que está llevando a cabo algún tipo de investigación nigromántica. Se dice que robó el poder del <a href="">Rey del Cementerio</a> y que ahora reina en las <a href="">Catacumbas</a>. 
    `,
    curiosities: [
      { 
        description: "Se pueden encontrar otros Molinetes más adelante en la Tumba de los Gigantes, en la zona previa al enfrentamiento contra Nito." 
      },
    ],
  },
  "Nito el Rey del Cementerio": {
    stats: {
      ng0: 4717,
      ng1: 7076,
      ng2: 7571,
      ng3: 7784,
      ng4: 8067,
      ng5: 8420,
      ng6: 8835,
      almas0: 60000,
      almas1: 120000,
      almas2: 128400,
      almas3: 132000,
      almas4: 136800,
      almas5: 142800,
      almas6: 150000
    },
    summoning: "No puedes invocar a ningún NPC para esta batalla.",
    weaknesses:["Rayo", "Fuego", "Milagros"],
    dropsDetailed: [
      { item: "Alma Señor", percentage: "100%" },
    ],
    moves: [
      { name: "Golpe", description: "Nito levanta lentamente su arma antes de estrellarla contra el suelo. Es difícil de bloquear, pero fácil de esquivar. Tras el ataque, queda inmóvil por unos instantes, dejándolo vulnerable a golpes." },
      { name: "Empuje", description: "Nito avanza con su espada, un ataque que puede bloquearse o esquivarse sin mucha dificultad." },
      { name: "Balancearse", description: "Nito balancea su espada en un arco horizontal. Puede bloquearse o esquivarse rodando hacia abajo." },
      { name: "Espadón del Señor de la Tumba", description: "Nito solo usa este ataque cuando el jugador está lejos o fuera de su alcance visual. Tras un grito, clava su espada en el suelo, haciendo que emerja bajo el jugador, infligiendo daño considerable y acumulación de toxicidad. Su efecto es similar al milagro Danza de la Espada del Señor de la Tumba." },
      { name: "Miasma", description: "Nito carga brevemente antes de liberar una ola de oscuridad en todas direcciones, infligiendo daño mágico y acumulación de toxicidad." },
      { name: "Agarre de la Muerte", description: "La mano de Nito brilla de color rojo mientras intenta agarrar al jugador. Si lo logra, le inflige una gran cantidad de daño." },
    ],
    bestStrategies: `
            Al caer en el dominio de <a href="">Nito</a>, recibirás daño, pero puedes evitarlo con <a href="">Control de Caída</a>. Si no lo tienes, cúrate rápido con Estus para evitar quedar vulnerable a su ataque a distancia.<br><br>
            <a href="">Nito</a> es un jefe grande y lento con regular vida, lo que lo hace vulnerable a armas pesadas y hechizos lentos. Sus ataques suelen causar toxicidad y ser peligrosos, pero tienen un inicio lento y son fáciles de esquivar. Todos pueden bloquearse, excepto la <a href="">Danza de Espadas</a>. <br><br>
            Al inicio del combate, <a href="">Nito</a> es acompañado por <a href="">Esqueletos Menores</a> y, si el jugador se aleja demasiado, por <a href="">Esqueletos Gigantes</a>. Estos reviven tras ser derrotados, a menos que se usen armas divinas, pero solo el anfitrión puede matarlos de forma permanente. 
            Aunque no son más resistentes que los esqueletos de <a href="">Las Catacumbas</a> o la <a href="">Tumba de los Gigantes</a>, pueden ser una distracción peligrosa. <br><br>
            Debido a la lentitud de <a href="">Nito</a>, lo ideal es eliminar primero a los esqueletos con un arma divina para evitar interrupciones. Mientras no estés cerca de <a href="">Nito</a>, solo debes preocuparte por su <a href="">Gran Espada del Señor de la Tumba</a>v; escucha su grito y corre para esquivarlo.
            Usar el <a href="">Anillo Cresta del Dragón Durmiente</a> te ayudará a evitar a los esqueletos gigantes en la parte trasera de la caverna. <br><br>
            <a href="">Nito</a> es vulnerable a ataques por la espalda, lo que permite asestar golpes gratis y causar gran daño. Su debilidad al fuego hace que las piromancias y armas ígneas sean especialmente efectivas contra él.`,
    lore: `
      <a href="">Nito</a> es una de las criaturas primordiales que emergieron bajo tierra con la aparición de la <a href="">Primera Llama</a>, trayendo vida, muerte y disparidad. Fue uno de los primeros en encontrar una de las cuatro <a href="">Almas de Señor</a>, junto a <a href="">Gwyn</a>, la <a href="">Bruja de Izalith</a> y, posteriormente, el <a href="">Furtivo Pigmeo</a>.
      <br><br>
      <a href="">Nito</a> eventualmente murió, pero gracias al poder de su <a href="">Alma de Señor</a>, regresó a la vida a través de la nigromancia, convirtiéndose en una masa viviente de esqueletos y el primero de los muertos. 
      Dominó el poder oscuro de su alma para traer la muerte a todo ser vivo, infundiéndolo en su <a href="">Espada del Rey del Cementerio</a>, forjada con los huesos de los caídos y envuelta en un miasma letal. <br><br>
      <a href="">Nito</a> se alió con <a href="">Gwyn</a> e <a href="">Izalith</a> en la guerra contra los <a href="">Dragones Eternos</a>, luchando aparentemente en solitario. Mientras <a href="">Gwyn</a> destruía sus escamas con rayos e <a href="">Izalith</a> y sus brujas desataban tormentas de fuego, <a href="">Nito</a> liberó su miasma de muerte, pudriendo los archtrees e infectando a los dragones. 
      Tras una larga batalla, los Señores triunfaron, exterminando a la mayoría de los dragones y conquistando el mundo. <br><br>
      Tras la guerra, mientras <a href="">Gwyn</a> y <a href="">Izalith</a> construían sus civilizaciones, <a href="">Nito</a> regresó a las profundidades de las <a href="">Catacumbas</a>, estableciéndose en la <a href="">Tumba de los Gigantes</a>, una necrópolis donde yacían los esqueletos de enormes bestias. Allí, convirtió las cuevas en su dominio de muerte y oscuridad.
      En este lugar también descansaban dioses y sacerdotes de <a href="">Anor Londo</a>, lo que sugiere que <a href="">Nito</a> siguió colaborando con <a href="">Gwyn</a>, ofreciendo su reino como tumba para su gente. Con el tiempo, asumió el rol de señor de la muerte, cediendo gran parte de su <a href="">Alma de Señor</a> para continuar propagando la muerte, ganándose el título de <a href="">Rey de la Tumba</a>. <br><br>
      <a href="">Nito</a> no cumplió su labor en soledad; aceptó a humanos valientes que visitaron su tumba y juraron servirle, formando el <a href="">Pacto Siervo del Rey del Cementerio</a>. Estos seguidores recibían una <a href="">Espada del Rey del Cementerio</a> infundida con una toxina letal y usaban los Ojos de la Muerte para esparcir el desastre a través del tiempo y el espacio, atrayendo invasores hostiles y propagando aún más la muerte. 
      <a href="">Nito</a> recompensaba a sus sirvientes exitosos con milagros que invocaban copias mágicas de su <a href="">Espada del Rey del Cementerio</a>. A su seguidor más leal, le concedía un ritual más poderoso, realizado con una gran ofrenda de muerte y <a href="">Ojos de la Muerte</a>. <br><br>
      En algún momento, <a href="">Nito</a> creó un ritual para reforzar las hogueras con leña, permitiendo que los <a href="">No Muertos</a> obtuvieran más <a href="">Frascos de Estus</a>. Este ritual fue adoptado por los clérigos del <a href="">Camino del Blanco</a>, y los <a href="">No Muertos</a> pueden replicarlo consumiendo <a href="">Humanidad</a> en las hogueras. 
      Esto sugiere que <a href="">Nito</a> tenía un papel en el sistema religioso de los dioses, participando en la búsqueda de un "elegido" capaz de vincular la <a href="">Primera Llama</a> y continuar el sacrificio de <a href="">Gwyn</a>. <br><br>
      En algún momento, el nigromante <a href="">Molinete</a>, una fusión de padre, madre e hijo, llegó a las <a href="">Catacumbas</a> y logró robar el <a href="">Rito de Encendido</a> de <a href="">Nito</a>, junto con parte de su poder. Usó este conocimiento para estudiar la nigromancia, consolidando su dominio sobre las <a href="">Catacumbas</a> y liderando un ejército de <a href="">Nigromantes</a> y <a href="">Esqueletos</a>. <br><br>
      En un intento de robar el poder de <a href="">Nito</a> para usarlo en un complot contra los dioses, seguidores de poderes ocultos descendieron a las <a href="">Catacumbas</a>, equipados con escudos para resistir armas divinas y rayos. Sin embargo, fracasaron y perecieron en su oscuro dominio.
    `,
    curiosities: [
      { 
        description: "Con modificaciones, se puede ver la verdadera forma de Nito bajo su capa: un esqueleto masivo que utiliza los demás cuerpos óseos como una armadura viviente." 
      },
      { 
        description: "La pierna izquierda de Nito tiene una estructura similar a la pata trasera de un animal cuadrúpedo, como un pájaro o un perro. Debido a esto, cojea al caminar." 
      },
      { 
        description: "Aunque Nito otorga los milagros de Sirviente del Señor de la Tumba a sus seguidores, es el único Señor sin una escuela de magia específica. Mientras Gwyn está vinculado a los milagros, la Bruja de Izalith a la piromancia, y el Pigmeo a las hechicerías oscuras y maleficios, Nito no posee una clasificación mágica definida." 
      },
    ],
  },
  "Cuatro Reyes": {
    stats: {
      ng0: 9604,
      ng1: 16200,
      ng2: 17334,
      ng3: 17820,
      ng4: 18468,
      ng5: 19278,
      ng6: 20250,
      almas0: 60000,
      almas1: 180000,
      almas2: 192600,
      almas3: 198000,
      almas4: 205200,
      almas5: 214200,
      almas6: 225000
    },
    summoning: "Para este combate, solo se puede invocar a Beatriz la Bruja si, usando su ayuda, derrotas a la Mariposa Lunar. Su señal de invocación se encuentra detrás de un pilar, justo antes de la niebla.",
    weaknesses:["Ninguna"],
    dropsDetailed: [
      { item: "Fragmento Alma Señor Legada", percentage: "100%" },
      { item: "4 Humanidades", percentage: "100%" },
    ],
    moves: [
      { name: "Doble Corte Horizontal", description: "El Rey ejecuta dos amplios y veloces cortes horizontales con su espada. Estos ataques, con gran capacidad de seguimiento, resultan muy dañinos si impactan de forma crítica. Bloquear ambos golpes consecutivamente drena notablemente la resistencia, aunque es posible evadirlos rodando o desplazándose lateralmente sin sufrir daño." },
      { name: "Corte Vertical", description: "Con un golpe ascendente y contundente, el Rey lanza un corte vertical que, a pesar de no seguir al jugador, genera un gran consumo de resistencia si se intenta bloquear." },
      { name: "Estocada Frontal", description: "Este es un empuje directo y poderoso con la espada, destacándose por tener el mayor alcance de los ataques cuerpo a cuerpo. Se activa cuando el jugador se encuentra a distancia y sin posibilidad de moverse lateralmente; aunque su seguimiento es limitado y puede ser esquivado, impactarlo de frente ocasiona un daño devastador." },
      { name: "Doble Corte Diagonal", description: "Consiste en dos golpes diagonales que, en ocasiones, pueden presentarse como un único ataque. Bloquearlos exige un gran esfuerzo de resistencia." },
      { name: "Ira de los Reyes", description: "Este ataque de gran envergadura hace que el Rey gire mientras se cubre con su ala izquierda, emanando un aura púrpura a su alrededor. Para contrarrestarlo, lo ideal es usar un escudo de alta estabilidad con excelente reducción mágica; de lo contrario, se recomienda desengancharse y retirarse rápidamente al iniciarse la animación." },
      { name: "Disparo Múltiple de Flechas Energéticas", description: "El Rey dispara seis proyectiles mágicos que persiguen al jugador. Aunque son más rápidos que otros ataques similares, su capacidad de seguimiento es moderada, lo que permite esquivarlos rodando o desplazándose; sin embargo, recibir varios de estos golpes puede ocasionar un daño considerable." },
      { name: "Flechas Teledirigidas del Abismo", description: "Se trata de un gran proyectil púrpura, de movimiento lento pero con alta precisión y un daño mágico devastador. No puede evadirse mediante maniobras y solo puede bloquearse con un escudo muy estable y con alta resistencia mágica, lo que drena la barra de resistencia. La única alternativa es huir hasta que el proyectil desaparezca, momento en el que podría aparecer otro nuevo." },
      { name: "Sifón Vital", description: "Este movimiento consiste en un agarre que roba la humanidad del jugador y es inbloqueable. Su animación recuerda a la de Ira de los Reyes: el Rey gira, se detiene y extiende su ala o brazo mientras emana un aura incolora. Si el jugador reacciona con lentitud, el embiste será ineludible. Curiosamente, acercarse al Rey antes de que inicie la embestida puede hacer que el ataque pase por encima, permitiendo evitarlo. Además, si se cuenta con la ayuda de fantasmas, es posible dañar la salud colectiva de los Cuatro Reyes durante este asalto." },
    ],
    bestStrategies: `
              La ausencia de puntos de referencia en el <a href="">Abismo</a> exige mantener la cámara en constante rotación, ya que los <a href="">Cuatro Reyes</a> pueden aparecer desde cualquier dirección. Al ingresar, tendrás tiempo para lanzar tus mejoras o hechizos, durante los cuales aparecerá el primer Rey. 
              El segundo se unirá 45 segundos después y los dos restantes aparecerán otros 45 segundos más tarde. Es crucial eliminar cada uno rápidamente para evitar quedar rodeado. Recuerda que el <a href="">Pacto de Artorias</a> debe permanecer equipado durante todo el combate; desequiparlo provocará la muerte inmediata. Una vez finalizada la pelea, ya no será necesario conservarlo.<br> <br>
              Mantén siempre suficiente estamina para bloquear o rodar, y asegúrate de que tu salud no baje del 50% utilizando <a href="">Frascos de Estus</a>. 
              La clave está en concentrar tus ataques en un Rey a la vez, aprovechando cualquier ventana de vulnerabilidad: incluso durante sus animaciones de muerte, se puede infligir daño adicional.<br><br>
              Si eres mago, utiliza hechizos como el <a href="">Gran Escudo Mágico</a>, idealmente combinado con un escudo robusto, por ejemplo, el <a href="">Escudo con Emblema</a>, para minimizar el daño. 
              Complementa tu estrategia con el <a href="">Anillo Emblema Dragón Eterno</a>, que extiende la duración de tus defensas, y lanza hechizos potentes, como <a href="">Masa de Alma de Cristal Dirigida</a>, o piromancias (<a href="">Gran Combustión</a> o <a href="">Gran Bola de Fuego</a>) para derribar a cada Rey de forma individual. Es vital esquivar los ataques físicos, especialmente la combinación de dos cortes horizontales, que pueden ser mortales si se encadenan, y bloquear las ofensivas mágicas con tu escudo. <br><br>
              Si eres de combate cuerpo a cuerpo, equípate con armadura ligera de alta movilidad y armas de animación rápida (como espadas o hachas). Acércate lo máximo posible a un Rey para forzar que sus golpes se realicen con la parte inferior de la espada, la cual inflige menos daño. 
              Utiliza elementos que incrementen la recuperación de estamina—por ejemplo, el <a href="">Escudo con Emblema de Hierba</a>, la <a href="">Máscara del Niño</a> o el <a href="">Anillo de Cloranthy</a>, para poder rodar y esquivar sin perder ritmo. Mantenerte cerca del enemigo reduce el impacto de sus ataques, impidiendo que utilicen ciertos ataques a distancia y facilitando un combate cuerpo a cuerpo más controlado. <br><br>`,
    lore: `
      Los <a href="">Cuatro Reyes</a> fueron, en un tiempo, los grandes líderes de una nación humana. Durante la <a href="">Edad del Fuego</a>, <a href="">Gwyn, Señor de la Luz Solar</a>, reconoció su talento y visión, recompensándolos con un fragmento de su poderosa <a href="">Alma de Señor</a> y el título de reyes. 
      Con su bendición, se les permitió erigir la civilización de <a href="">Nuevo Londo</a>, un territorio dependiente de <a href="">Anor Londo</a>, que con el tiempo se transformó en una vibrante cultura, incluso cuando la <a href="">Primera Llama</a> comenzó a extinguirse y la Maldición de la No-Muerte se instauró.
      <br><br>
      Tras el sacrificio de <a href="">Gwyn</a> para enlazar el menguante <a href="">Primera Llama</a>, la <a href="">Serpiente Primigenia Kaathe</a> buscó a un humano lo suficientemente fuerte para convertirse en el <a href="">Señor Oscuro</a> y encabezar la llegada de la <a href="">Era de la Oscuridad</a>. <a href="">Kaathe</a> sedujo a los <a href="">Cuatro Reyes</a>, enseñándoles el arte del <a href="">Drenaje de Vida</a> para que conservaran su humanidad a pesar de su condición no-muerta. 
      Bajo esta influencia, no solo los reyes, sino también su ejército, se transformaron: los caballeros de <a href="">Nuevo Londo</a> se convirtieron en <a href="">Espectros Oscuros</a>, mutando tanto en forma como en armadura, y empleando los <a href="">Orbes del Ojo Rojo</a> para absorber humanidad y adentrarse más en los poderes oscuros. <br><br>
      Una nación humana liberada de las ataduras de la <a href="">Marca Oscura</a>, respaldada por un ejército imbuido del poder del Alma Oscura, supuso una amenaza sin precedentes para los dioses de <a href="">Anor Londo</a>. 
      Los <a href="">Espectros Oscuros</a> fueron considerados enemigos abominables de la vida, lo que llevó a enviar a <a href="">Artorias</a>, uno de los Cuatro Caballeros de Gwyn, a combatirlos. Dotado de un <a href="">Colgante de Plata</a> que desviaba la oscuridad del <a href="">Abismo</a> y forjando un pacto con las "bestias del Abismo" que le otorgó un anillo para cruzar el vacío (a costa de maldecir su Gran Espada), <a href="">Artorias</a>, el "Caminante del Abismo", se lanzó a cazar a los , aunque no logró eliminar a los <a href="">Cuatro Reyes</a> ni erradicar el <a href="">Abismo</a> que se había instalado en <a href="">Nuevo Londo</a>. <br><br>
      Al no poder sofocar la amenaza oscura, se tomó la dolorosa decisión de inundar <a href="">New Londo</a>, sellando a los <a href="">Cuatro Reyes</a>, sus <a href="">Espectros Oscuros</a> y a toda la población en las profundidades. Quedaron así malditos, convertidos en fantasmas errantes que deambulan por las ruinas, en busca de venganza contra todo lo que esté vivo.
    `,
    curiosities: [
      { 
        description: "Aunque se les denomine Cuatro Reyes, en ocasiones pueden aparecer más de cuatro simultáneamente en el escenario." 
      },
      { 
        description: "Se planificó que se pudiera usar la espada de los Cuatro Reyes, pero finalmente fue eliminada en la versión final." 
      },
      { 
        description: "Aunque en el abismo nada es distinguible, la arena está delimitada por muros invisibles que casi nunca ocasionan inconvenientes." 
      },
      { 
        description: "Los Cuatro Reyes son los únicos poseedores de un Alma de Señor  que no aparece en la cinemática de apertura." 
      },
      { 
        description: "Además, el nombre del jefe podría aludir a un grupo de leyendas del boxeo de los años 80, también conocidos como los Cuatro Reyes." 
      },
    ],
  },
  "Descarga Incesante": {
    stats: {
      ng0: 4200,
      ng1: 6720,
      ng2: 7190,
      ng3: 7392,
      ng4: 7661,
      ng5: 7997,
      ng6: 8400,
      almas0: 20000,
      almas1: 40000,
      almas2: 42800,
      almas3: 44000,
      almas4: 45600,
      almas5: 47600,
      almas6: 50000
    },
    summoning: "No puedes invocar a ningún NPC para esta batalla.",
    weaknesses:["Rayo"],
    dropsDetailed: [
      { item: "Humanidad", percentage: "100%" },
      { item: "hueso de Regreso", percentage: "100%" },
    ],
    moves: [
      { name: "Golpe Aplastante", description: "Emite gemido amenazador y la elevación de una extremidad, para luego lanzar un golpe frontal de gran alcance. Este ataque se puede evadir con un giro lateral en el instante justo, cuando alcanza su máxima extensión, o corriendo a máxima velocidad si la estamina lo permite. Además, en ocasiones se encadena un segundo golpe que ajusta su dirección hacia el jugador, de modo que, si la evasión inicial resulta imprecisa, el siguiente impacto tendrá efecto." },
      { name: "Oleada de Arañas", description: "Golpea el suelo repetidamente con sus garras, de 6 a 10 veces de forma aleatoria. La mejor opción es evitar quedar atrapado en la ráfaga. Si no es posible, corre y busca cobertura para minimizar el daño." },
      { name: "Corte Lateral", description: "Balancea una enorme extremidad de izquierda a derecha, cubriendo un amplio arco. Antes del ataque, el jefe gira lentamente su cuerpo, señalando el momento ideal para rodar hacia abajo." },
      { name: "Golpe de Fuego", description: "Si te alejas demasiado, Descarga Incensante golpeará el suelo con una extremidad, generando una ola de fuego masiva en la dirección del impacto."}
    ],
    bestStrategies: `
            Es recomendable no tomar la vestimenta de su hermana que se encuentra en el altar a la derecha antes de iniciar el combate. Si la robas, el jefe se volverá más fuerte y, al regresar, se mostrará hostil desde el momento en que cruces la niebla, lanzando ondas de fuego masivas incluso atravesando paredes debido a un bug. 
            En cambio, si esperas a derrotarlo antes de recogerla, solo se volverá hostil si tú lo atacas primero, aunque ya hayas peleado con él anteriormente.<br> <br>
            Puedes utilizar la piromancia Sudor Relámpago para disminuir el daño por fuego, reduciendo así el impacto de los ataques de <a href="">Descarga Incensante</a>.<br><br>
            Observa siempre sus extremidades y sincroniza el momento exacto para rodar de lado. 
            La mayoría de sus ataques son de tipo aplastante y, al ejecutarlos, deja una de sus extremidades en el suelo durante unos segundos, ofreciendo una ventana ideal para contraatacar o curarte. <br><br>
            Si huyes hasta la puerta de niebla, Descarga Incesante te seguirá y, al llegar, saltará y se aferrará al borde cercano con una mano. Ataca esa extremidad de manera repetida y el jefe caerá al abismo, muriendo al instante. 
            Este método solo es efectivo si el jefe se vuelve agresivo tras recoger el <a href="">Conjunto con Remates Dorados</a>. En caso de fallo, deberás regresar al cadáver donde se encontraba el conjunto y luego volver a la puerta de niebla; de lo contrario, el jefe no se aferrará al borde.`,
    lore: `
      La <a href="">Descarga Incesante</a> fue el único hijo conocido de la <a href="">Bruja de Izalith</a>, pero su existencia estuvo marcada por el sufrimiento. Desde su nacimiento, su cuerpo estaba cubierto de llagas ardientes de lava, y sus hermanas le entregaron el <a href="">Anillo Calcinado Naranja</a>, presumiblemente para aliviar su dolor. Sin embargo, al perderlo, provocó el nacimiento del <a href="">Demonio Ciempiés</a> en el lugar donde cayó.
      <br><br>
      Cuando la <a href="">Bruja de Izalith</a> intentó recrear la <a href="">Primera Llama</a> con un <a href="">Alma de Señor</a>, dio origen a la <a href="">Llama del Caos</a>, transformando a <a href="">Descarga Incensante</a> en una bestia colosal, considerada el primer demonio. 
      Sus hermanas sufrieron destinos similares y su madre se convirtió en el <a href="">Lecho del Caos</a>, el origen de todos los demonios. <br><br>
      Tras estos eventos, la <a href="">Descarga Incensante</a> se estableció en las <a href="">Ruinas de los Demonios</a>, custodiando el cadáver de una de sus hermanas, sepultada junto a su <a href="">Conjunto con Remates Dorados</a>. 
      Su único consuelo era la creencia de que sus hermanas, aún en la caída <a href="">Izalith</a>, seguían cuidando de él. 
    `,
    curiosities: [
      { 
        description: "Su diseño sugiere que sufrió una mutación extrema debido a la Llama del Caos, convirtiéndose en el primer demonio." 
      },
      { 
        description: "El Anillo Calcinado Naranja, que solía aliviar su sufrimiento, cayó de su cuerpo y dio origen al Demonio Ciempiés." 
      },
      { 
        description: "En los Dominios de Quelaag, el sirviente Eingyi se refiere a él como el gigante fundido." 
      },
      { 
        description: "El nombre de Descarga Incesante evoca la constante cascada de lava que mana de las heridas en su cuerpo, inundando las zonas inferiores de las Ruinas Demoníacas." 
      },
    ],
  },
  
  "Sabio del Fuego Demoníaco": {
    stats: {
      ng0: 5448,
      ng1: 8716,
      ng2: 9326,
      ng3: 9588,
      ng4: 9936,
      ng5: 10372,
      ng6: 10895,
      almas0: 20000,
      almas1: 40000,
      almas2: 42800,
      almas3: 44000,
      almas4: 45600,
      almas5: 47600,
      almas6: 50000
    },
    summoning: "No puedes invocar a ningún NPC para esta batalla.",
    weaknesses:["Sangrado", "Armas de Caballero Negro"],
    dropsDetailed: [
      { item: "Humanidad", percentage: "100%" },
      { item: "Catalizador Demonio", percentage: "100%" },
    ],
    moves: [
      { name: "Golpe de trasero", description: "El Sabio se eleva, para despues caer, causando daño masivo alrededor suyo al impacto." },
      { name: "Golpe Demoledor", description: "Lanza un potente ataque descendente con su arma que abarca una amplia zona; este asalto se puede evadir rodando hacia la izquierda o la derecha." },
      { name: "Doble Golpe Demoledor", description: "Tras ejecutar el Golpe Demoledor, el Sabio Demoníaco de Fuego alza su arma para repetir el embate, el cual se esquiva rodando hacia cualquiera de los lados." },
      { name: "Explosión de Llama", description: "Mediante un movimiento de barrido hacia la izquierda con su arma, provoca una inmensa explosión frontal de daño mágico, que no alcanza la retaguardia y permite esquivarla posicionándose detrás o por debajo."},
      { name: "Explosión con Martillo", description: "Empuñando el catalizador con ambas manos, lo estampa en el suelo, desencadenando una explosión imponente en el punto de impacto que se extiende también hacia la parte trasera." },
      { name: "Martillazo saltante", description: "Cuando el jugador está a distancia, el Sabio Demoníaco de Fuego se eleva lentamente para luego descender con un golpe devastador, movimiento que resulta relativamente fácil de evadir." },
      { name: "Doble balanceo del martillo", description: "Ejecuta dos balanceos consecutivos con su catalizador en movimientos predecibles, aunque en ocasiones se suma un golpe adicional que, aunque bloqueable, exige una considerable cantidad de estamina." },
    ],
    bestStrategies: `
            El <a href="">Sabio Demoníaco de Fuego</a> comparte gran parte de su repertorio de movimientos y ataques con el <a href="">Demonio Salvaje</a>. Es fundamental mantenerse detrás de él y usar un escudo para mitigar el daño, ya que sus ataques superiores, aunque bloqueables, agotan considerablemente la estamina. Si te alejas demasiado, ejecutará saltos que culminan en un golpe descendente, ataques que no persiguen al jugador y se pueden evadir rodando en el momento preciso. 
            Además, es muy vulnerable a la acumulación de sangrado. Debido a su mayor velocidad y poder, resulta aconsejable no mantener el bloqueo permanente, ya que deberás correr frecuentemente para reposicionarte.<br> <br>
            Equipa un escudo de gran estabilidad junto a tu arma cuerpo a cuerpo preferida. Mantén el escudo en alto, espera a que ataque y contraataca con uno o dos golpes; si se prepara para su ataque explosivo, retrocede o gira para esquivarlo. 
            Como alternativa, emplea un arma rápida que induzca sangrado, como la <a href="">Espada Pintura Guardiana</a>, combinada con la piromancia <a href="">Sudor Relámpag</a> o y potenciadores de regeneración de estamina. <br><br>
            Si optas por utilizar magia, equipa un escudo de gran estabilidad, como el <a href="">Escudo con Emblema</a>, imbuido preferiblemente con el hechizo <a href="">Escudo Mágico Fuerte</a> (o Escudo Mágico), y mantén tu equipo lo más ligero posible. Al ingresar a la puerta de niebla, lanza Masa de <a href="">Alma Dirigida</a> (o su versión cristalina) y eleva tu escudo de inmediato para contrarrestar su potente ataque de salto. 
            Sin perder tiempo, desplázate hacia su retaguardia para evadir su embestida de onda y continúa lanzando hechizos, alternando entre <a href="">Masa de Alma Dirigida</a> y <a href="">Lanza de Alma</a> o <a href="">Gran Flecha de Alma</a>. Permanece alerta y a una distancia prudente, ya que alejarte demasiado podría hacer que recurra a su salto, un ataque sumamente difícil de esquivar y que debe ser bloqueado.`,
    lore: `
      <a href="">El Sabio Demoníaco de Fuego</a> surge como parte de la primera generación de demonios engendrados a partir del <a href="">Lecho del Caos</a>. Cuando la <a href="">Bruja de Izalith</a> intentó duplicar la <a href="">Primera Llama</a> usando su <a href="">Alma de Señor</a>, su experimento dio lugar a la creación de la <a href="">Llama del Caos</a> y transformó a <a href="">Izalith</a> en el semillero de una nueva forma de vida: la madre y fuente de todos los demonios. 
      Mientras que el primer demonio resultó ser una aberración inestable, tras que Izalith y sus hijas lograran estabilizar la llama, emergió el <a href="">Sabio Demoníaco de Fuego</a>, dotado de un cuerpo definido y control sobre el poder caótico.
      <br><br>
      Estos nuevos demonios se integraron a la sociedad de <a href="">Izalith</a>, asumiendo el rol de sacerdotes demoníacos de la <a href="">Llama del Caos</a> y dominando las artes primordiales del fuego. 
      Con el tiempo, cuando Izalith perdió el control sobre la llama que arrasó su ciudad, el <a href="">Sabio Demoníaco de Fuego</a> sobrevivió a la guerra de los <a href="">Caballeros de Plata de Gwyn</a> y se consolidó como guardián de las ruinas de su antiguo hogar, conservando tanto su <a href="">Catalizador Demoníaco</a> como el conocimiento de las hechicerías flameantes.
    `,
    curiosities: [
      { 
        description: "Aunque luce como un demonio en llamas, sus ataques no infligen daño de fuego y su defensa elemental es baja, haciendo muy efectivas las armas de fuego contra él." 
      },
      { 
        description: "Puedes evitar la pelea contra el jefe si alcanzas el nivel 2 (o superior) en el pacto de Sirvientes del Caos y utilizas el atajo ubicado a la derecha de la niebla que te lleva hasta Izalith Perdida." 
      },
      { 
        description: "El Sabio de Fuego Demoníaco utiliza la misma pieza musical que el Demonio del Refugio y el Demonio de Tauro, y sus ataques son muy similares al Demonio Salvaje." 
      },
      { 
        description: "Utilizar el Voto de Silencio evita que el Sabio de Fuego Demoníaco ejecute sus ataques de área." 
      },
    ],
  },
  "Demonio Ciempiés": {
    stats: {
      ng0: 3432,
      ng1: 5941,
      ng2: 6357,
      ng3: 6535,
      ng4: 6773,
      ng5: 7070,
      ng6: 7426,
      almas0: 40000,
      almas1: 80000,
      almas2: 86500,
      almas3: 88000,
      almas4: 91200,
      almas5: 95200,
      almas6: 100000
    },
    summoning: "Se puede invocar a Solaire de Astora, cuyo símbolo de invocación se halla en el centro de una raíz, hacia la izquierda, junto al muro de niebla.",
    weaknesses:["Electricidad", "Magia", "Armas de Caballero Negro"],
    dropsDetailed: [
      { item: "Humanidad", percentage: "100%" },
      { item: "Hueso de Regreso", percentage: "100%" },
      { item: "Anillo Calcinado Naranja", percentage: "100% o cortar una de sus extremidades" },
    ],
    moves: [
      { name: "Golpe Extendida", description: "Desde la distancia, arroja con furia su brazo derecho como si se tratara de un puñetazo devastador. Aunque su seguimiento se detiene a mitad de carga, un buen movimiento lateral permite esquivarlo sin dificultad." },
      { name: "Embate Preparatorio", description: "En un ataque de alcance medio, salta y gira en el aire mientras se prepara para aplastar el suelo con una de sus cabezas. Con una rodadura perfectamente sincronizada, es posible evitar este arremetido." },
      { name: "Barrera de Desgarrón", description: "El demonio barre el suelo con su mano, buscando desestabilizar al adversario. Este movimiento se puede eludir rodando por debajo o retirándose rápidamente." },
      { name: "Abrazo Devastador", description: "Con su brazo izquierdo, intenta atrapar al jugador para luego devorarlo con su vientre en llamas. Este golpe, de gran peligrosidad, puede ser mitigado por un jugador diligente que, con rápidos y coordinados ataques ligeros, logre liberarse del agarre." },
      { name: "Salto Demoledor", description: "Se eleva y desciende con la fuerza de su inmenso peso, cayendo casi exactamente en el mismo sitio de despegue. Este ataque, aunque de alto impacto, resulta sencillo de evadir si se se aparta en el preciso instante del salto, dejando al demonio vulnerable tras su estruendoso rugido." },
      { name: "Pisotón de Lava", description: "Si el jugador insiste en mantenerse cerca de su talón de Aquiles o en la parte trasera, el demonio procede a alternar pisadas firmes, infligiendo un daño moderado." },
      { name: "Salto Explosivo", description: "Cuando su salud se debilita, se lanza al aire y al caer, convoca una enorme bola de fuego que estalla al impactar, extendiendo su letal alcance ígneo." },
      { name: "Giro Frenético", description: "En un ataque caótico, despliega su brazo y cola en un amplio arco, buscando golpear a todo lo que se encuentre a su alrededor." },
      { name: "Disparo Ígneo", description: "Desde la espalda, lanza dos proyectiles de fuego cuando el jugador se mantiene a gran distancia, añadiendo una amenaza adicional a su repertorio ofensivo." },
      { name: "Cabezas Errantes", description: "Finalmente, si se logra decapitar alguna de sus extremidades, el fragmento desprendido cobra vida y se desplaza en busca del jugador. Aunque por sí solo no representa un peligro letal, la persecución de hasta cinco cabezas puede convertirse en una distracción mortal si no se neutraliza con prontitud." },
    ],
    bestStrategies: `
            En primer lugar, cruza la lava y gira a la derecha; tras esa esquina se abre un extenso campo ideal para combatir en condiciones óptimas. 
            Cuando el demonio se acerque, esquiva con precisión su ataque de brazo extendido y acércate rápidamente. Posiciónate por debajo y centra tus golpes en su caja torácica, área menos protegida para los luchadores cuerpo a cuerpo.  <br><br>
            Conforme su vida baje, el <a href="">Demonio Ciempiés</a> recurre a embestidas de efecto en área. Es crucial estar atento a sus movimientos en estos momentos, y disponer de un escudo de gran estabilidad aumentará notablemente tus posibilidades de supervivencia. Durante el combate, podrás amputar su cola o brazo hasta en cinco ocasiones, ya que se regeneran lentamente. 
            Las partes desprendidas se comportan como enemigos que te persiguen. La primera de ellas te dará el <a href="">Anillo Calcinado Naranja</a> de forma anticipada, mientras que las sucesivas, aunque no brindan recompensa, reducen temporalmente el alcance de sus ataques. <br><br>
            Si posees alta resistencia, buena defensa y protección contra el fuego, el combate se vuelve más manejable. Tras varios embates extensos, el demonio suele cargar con un golpe aplastante, aproximándose peligrosamente a la <a href="">Puerta de Niebla</a>. Colocarte entre sus patas obligará al enemigo a ejecutar saltos altos y explosivos. 
            En ocasiones intentará devorar al jugador; sin embargo, mantenerse cerca de sus extremidades inferiores tras el aterrizaje y bloquear mientras se eleva te permitirá subsistir y asestar golpes consecutivos a su rodilla, aunque los saltos explosivos sigan siendo letales. <br><br>
            Una táctica particularmente eficaz consiste en cortar su cabeza derecha, lo que la convierte en un adversario independiente. Al eliminarla, obtendrás el <a href="">Anillo Calcinado Naranja</a>. Posteriormente, puedes abandonar la arena (mediante un <a href="">Hueso Regreso</a> o el <a href="">Sello Oscuro</a>) y reingresar con el anillo equipado. 
            Esta maniobra te brinda acceso a toda la zona del enfrentamiento, permitiéndote cargar contra el demonio mientras sólo recibes daños mínimos por la lava, facilitando así una mayor movilidad.`,
    lore: `
      <a href="">Descarga Incesante</a>, único hijo de la <a href="">Bruja de Izalith</a>, recibió el <a href="">Anillo Calcinado Naranja</a> de sus hermanas con la esperanza de aliviar el dolor de sus llagas ígneas. No obstante, en un descuido, lo dejó caer, y fue en ese preciso instante cuando emergió el <a href="">Demonio Ciempiés</a>, quizá como consecuencia de la creación de la <a href="">Llama del Caos</a> por su propia madre.
    `,
    curiosities: [
      { 
        description: "Puedes evitar la pelea contra el jefe si alcanzas al menos el nivel 2 en el pacto de Sirvientes del Caos y usas el atajo situado a la derecha de la niebla del Sabio Demoníaco de Fuego, que te conduce hasta Izalith Perdida. Aunque no es lo más aconsejable, ya que el Ciempiés te recompensa con el Anillo Calcinado Naranja." 
      },
      { 
        description: "Si te sitúas cerca de la pared en la entrada del combate y el enemigo te agarra para ejecutar su devastador ataque, podría lanzarse hacia el techo y quedar atrapado en la azotea. En ese caso, acércate a la puerta de salida y espera: eventualmente caerá al vacío del juego, muriendo y otorgándote las almas del jefe junto al Anillo Calcinado Naranja." 
      },
      { 
        description: "En Dark Souls III, el cadáver del Demonio Ciempiés yace en la arena del jefe del Antiguo Rey Demonio, enclavada en el Lago Ardiente." 
      },
    ],
  },

  "Lecho del Caos": {
    stats: {
      ng0: 2,
      ng1: 3,
      ng2: 3,
      ng3: 3,
      ng4: 3,
      ng5: 4,
      ng6: 4,
      almas0: 60000,
      almas1: 120000,
      almas2: 128400,
      almas3: 132000,
      almas4: 136800,
      almas5: 142800,
      almas6: 150000
    },
    summoning: "No puedes invocar a ningún NPC para esta batalla.",
    weaknesses:["Ninguna"],
    dropsDetailed: [
      { item: "Humanidad", percentage: "100%" },
      { item: "Alma de Señor", percentage: "100%" },
    ],
    moves: [
      { name: "Doble Barrida", description: "Al aproximarse a la zona central, el Lecho del Caos ejecuta un ataque en el que primero barre el suelo con su mano izquierda y, de inmediato, repite el movimiento con la derecha. Aunque es posible bloquearlo, la considerable exigencia de energía en el segundo golpe lo hace especialmente complejo de contrarrestar." },
      { name: "Golpe Aplastante", description: "El enemigo levanta su mano hacia el cielo para luego estamparla contra el suelo con gran fuerza. La clave para evadir este embate es moverse rápidamente, alejándose del área de impacto antes de que el golpe se concrete." },
      { name: "Pico Ígneo", description: "Una vez aniquilada una de las raíces, el jefe despliega un brazo forjado en fuego que golpea el suelo y se lanza en línea recta hacia sí mismo. La solución radica en desplazarse lateralmente, ya sea corriendo o rodando, para esquivar este ataque, recomendándose además el uso de un escudo con alta resistencia ígnea." },
      { name: "Doble Pico Ígneo", description: "Al destruir la segunda raíz, el enemigo obtiene un segundo brazo flamígero y utiliza ambos simultáneamente para atacar. La evasión se mantiene similar, aprovechando el desplazamiento lateral para evitar la trayectoria directa del fuego." },
      { name: "Caos Volcánico", description: "Una vez eliminadas ambas raíces, el jefe desata un torrente de llamas en la zona, generando erupciones que infligen severos daños ígneos. La estrategia consiste en posicionarse en áreas que permanezcan libres de fuego mientras el entorno se inunda de llamas." },
      { name: "Expansión de Masa Llameante", description: "Con una frecuencia menor, y tras la destrucción de una o ambas raíces, el enemigo se lanza hacia el centro y se expande, enviando múltiples proyectiles ardientes en dirección al jugador y en su entorno inmediato." },
      { name: "Aura de Llamas", description: "Si el jugador se demora en la entrada de la bestia arbórea, el aspecto ígneo se manifiesta al cruzar sus brazos para luego abrirlos de golpe, tras un chillido característico, envolviendo toda la zona en un manto de fuego que impacta repetidamente." },
    ],
    bestStrategies: `
            A diferencia de otros encuentros, aquí no se trata de reducir progresivamente la salud del jefe, sino de atacar tres puntos vulnerables: dos raíces encapsuladas en esferas resplandecientes, ubicadas a ambos lados del jefe al inicio y el <a href="">Bicho del Caos</a> en su corazón. 
            Dañar las raíces incrementa el abanico de ataques del jefe y abre el acceso a su núcleo.  <br><br>
            Es importante destacar que el avance obtenido al dañar una o ambas raíces se conserva incluso tras morir, lo que permite ir sumando progresos en múltiples intentos sin perder lo logrado. 
            El jugador debe enfrentarse a los amplios y poderosos ataques de barrido del jefe, así como a los enormes y abismales huecos que se abren en diferentes zonas de la arena. <br><br>
            Una vez eliminadas ambas raíces, es imprescindible llegar al corazón del jefe para combatir y eliminar al <a href="">Bicho del Caos</a>. 
            Sin embargo, justo enfrente del jefe se halla un gran precipicio; la ruta principal consiste en una ancha rama que se extiende desde el jefe hacia el inicio del encuentro, situada ligeramente por debajo del nivel del suelo. <br><br>
            Una táctica relativamente segura consiste en mantenerse pegado a las paredes exteriores de la arena, sobre los salientes detrás de los huecos y fuera del alcance de los ataques del jefe (salvo el ataque de Caos Volcánico). 
            Desde estas posiciones, el jugador puede lanzarse a cruzar los precipicios, si su peso se lo permite o atacar a distancia con magia o arco contra las ramas y raíces. <br><br>
            El hechizo <a href="">Gran Escudo Mágico</a> o su versión inferior resultan de gran utilidad, ya que permiten bloquear fácilmente el barrido, sin quebrantar la guarda. 
            Esto abre una ventana para que, usando el estamina restante, el jugador corra hacia el corazón o el orbe y aseste el golpe final. Se recomienda el uso del <a href="">Anillo Emblema Dragon Eterno</a> para compensar la corta duración de estos hechizos defensivos.`,
    lore: `
      <a href="">Izalith</a> es una de las primeras criaturas humanoides surgidas en las profundidades tras la aparición de la <a href="">Primera Llama</a>, marcando el inicio de la vida, la muerte y la dualidad del ser. Junto a <a href="">Gwyn</a>, <a href="">Nito</a> y, posteriormente, el <a href="">Furtivo Pigneo</a>, fue una de las que halló los <a href="">Almas del Señor</a>, almas de poder inconmensurable.
      <br><br>
      Con el poder de su alma, <a href="">Izalith</a> estableció una civilización oculta bajo tierra. En su entorno se gestó una sociedad que combinaba el estudio de la esencia de las almas y la <a href="">Primera Llama</a>. Con el tiempo, engendró al menos a siete hijos, quienes, ataviados con túnicas negras adornadas con ribetes dorados, se protegían de los letales incendios y venenos del entorno. 
      Juntas, <a href="">Izalith</a> y sus descendientes se convirtieron en poderosas hechiceras ígneas y chamanes, en perfecta comunión con la naturaleza y el fuego.
      <br><br>
      Impulsadas por el anhelo de dominar el mundo, <a href="">Izalith</a> y sus hijas se unieron a otros portadores de <a href="">Almas de Señor</a> en una épica contienda contra los dragones. Mientras <a href="">Izalith</a> canalizaba las llamas mediante el poder de su alma, sus hijas utilizaban sus bastones de fuego para tejer tormentas ardientes. 
      Las fuerzas combinadas de fuego, muerte y relámpagos arrasaron con los arboledas ancestrales y abatieron a la mayoría de los dragones, permitiendo a estos seres conquistar la superficie.
      <br><br>
      Tras la victoria, <a href="">Izalith</a> y su progenie optaron por retirarse al subsuelo, construyendo su capital en una inmensa caverna de roca fundida, donde un colosal <a href="">Arbol Primordial</a> marcaba el centro de su dominio. Sin embargo, en su afán por dominar la llama primordial, <a href="">Izalith</a> intentó crear una nueva <a href="">Primera Llama</a> a partir de su propio alma. 
      El experimento derivó en la creación de una inestable <a href="">Llama del Caos</a>, que la consumió a ella y a dos de sus hijas, transformándolas en una aberración ardiente conocida como el <a href="">Lecho del Caos</a>, origen de la nueva raza: los demonios.
      <br><br>
      El primer demonio emergió en forma de un hijo menor, cuya transformación fue sellada por el incontrolable fuego del caos. Con el tiempo, <a href="">Izalith</a> y sus hijas lograron estabilizar este poder, dando paso a demonios con cuerpos definidos y la capacidad de dominar la <a href="">Llama del Caos</a>. Estos seres no eran meramente bestiales, sino que se integraron en la sociedad de Izalith como sacerdotes ígneos, adoptando y perfeccionando las antiguas artes pirotécnicas. 
      La fascinación por la nueva fuerza llevó a la creación de rituales y hechicerías de fuego, en los cuales se canalizaba la esencia del caos para encender y controlar la llama, aun cuando su dominio resultara siempre esquivo. Así, surgieron las ascuas caóticas, utilizadas por los herreros para imbuir armas con el poder del fuego salvaje. 
      <br><br>
      A medida que la <a href="">Primera Llama</a> comenzaba a desaparecer, Gwyn se sacrificó para reavivarla y prolongar la <a href="">Era del Fuego</a>. <a href="">Izalith</a> colaboró en este plan, erigiendo una de las <a href="">Campanas del Despertar</a> en su ciudad. No obstante, en un nuevo intento por dominar el fuego, la <a href="">Llama del Caos</a> volvió a desbordarse, dejando a Izalith y a parte de sus hijas marcadas para siempre. 
      Quedó reducida a una criatura quimérica, fusionada con sus raíces y convertida en un insecto caótico, mientras que sus descendientes se dispersaron: algunas se transformaron en arañas demoníacas y otras, como <a href="">Quelana</a>, se exiliaron. El colapso de <a href="">Izalith</a> y la embestida incontrolada de sus demonios llevaron a <a href="">Gwyn</a> a emprender una última guerra contra ellos, enviando a sus caballeros para sofocar el caos. 
    `,
    curiosities: [
      { 
        description: "En la cinemática inicial se muestra a la madre Izalith acompañada de dos hijas que portan una vara cada una. Al adentrarse en la arena del Lecho de Caos se distinguen, en los laterales, dos secciones de ramas rodeadas por una barrera encantada que exhiben un montículo carnoso; en cada una, una enorme vara roja lo atraviesa, reforzando el simbolismo de las hijas. En el centro se alza una figura femenina que representa a la madre Izalith." 
      },
    ],
  },

  "Gwyn, Señor de la Ceniza": {
    stats: {
      ng0: 4250,
      ng1: 6745,
      ng2: 7217,
      ng3: 7420,
      ng4: 7689,
      ng5: 8027,
      ng6: 8431,
      almas0: 70000,
      almas1: 140000,
      almas2: 149800,
      almas3: 154000,
      almas4: 159600,
      almas5: 166600,
      almas6: 175000
    },
    summoning: "Puedes invocar a Solaire para este combate. Su señal se encuentra a la izquierda de las escaleras, pegada a las rocas, pero solo estará disponible si has completado su historia.",
    weaknesses:["Parry"],
    dropsDetailed: [
      { item: "Alma de Gwyn, Señor de Ceniza", percentage: "100%" },
    ],
    moves: [
      { name: "Embestida Acelerada", description: "Gwyn se lanza a toda velocidad para asestar un empuje lineal, aunque en ocasiones transita hacia una combinación de cortes, demostrando una notable capacidad para seguir los movimientos del jugador. Este ataque es de los más sencillos para realizar parry, pero a la vez es el que más daño inflige." },
      { name: "Combo de Cuatro Cortes", description: "En una serie de ataques consecutivos, comienza con un corte en ángulo, seguido de un horizontal, repitiendo la alternancia. Los cortes angulados pueden ser esquivados si se actúa con precisión en el momento oportuno." },
      { name: "Patada Desestabilizadora", description: "Cuando el jugador se encuentra bloqueando a corta distancia, Gwyn lanza una patada que, si conecta, agota considerablemente la resistencia del defensor." },
      { name: "Corte y Estocada", description: "En ocasiones, Gwyn interrumpe su combo habitual con una rápida estocada. Este ataque, si impacta, deja al jugador aturdido y vulnerable a posteriores combinaciones." },
      { name: "Combo Ascendente", description: "El ataque comienza con un corte horizontal contundente que demanda gran gasto de resistencia, seguido de dos golpes adicionales, siendo los primeros especialmente difíciles de evadir." },
      { name: "Corte Cargado", description: "Gwyn utiliza un poderoso corte con carga para forzar la ruptura de la guarda del jugador, buscando abrir una brecha en su defensa." },
      { name: "Deslizamiento Relámpago con Doble Corte", description: "Este movimiento, de ejecución fulminante, se activa con un deslizamiento rápido en el que Gwyn se acerca al jugador para, a continuación, asestar dos cortes consecutivos." },
      { name: "Mano Explosiva", description: "Se trata de un ataque de agarre inbloqueable que inflige severo daño ígneo. Posee un amplio alcance horizontal, lo que permite evitarlo rodando o retrocediendo. Tras conectar, Gwyn continúa con un corte de salto o de carrera, quedando momentáneamente expuesto." },
    ],
    bestStrategies: `
              La táctica más directa consiste en emplear la habilidad <a href="">Carne Férrea</a> junto con el set de <a href="">Havel</a> para maximizar la defensa y centrarte en el parry de sus ataques. Comienza bloqueando su primer embiste y, a continuación, realiza un parry en el ataque de seguimiento para abrir una ventana de riposte. 
              Aprovecha esta oportunidad para beber un <a href="">Estus</a>, ya que <a href="">Gwyn</a>, al percibir la apertura, suele lanzar su característico ataque a dos manos, el cual resulta predecible y se puede hacer parry con constancia. Repite el ciclo de Parry (Contraataque) y Estus para vencerlo. <br><br>
              Si prefieres la magia, utiliza hechizos como Masa de <a href="">Alma Dirigida</a> o <a href="">Masa Alma Cristal Dirigida</a> cuando logres mantener una distancia prudente del jefe. Sin embargo, cuida no abrir demasiado el espacio, pues podrías desencadenar su ataque en picado. Para contrarrestar esto, acércate con el escudo en alto de modo que, al lanzar tus hechizos, <a href="">Gwyn</a> se vea forzado a responder, impidiéndole evadir fácilmente tus orbes. 
              Además, si necesitas mayor espacio para curarte, utiliza las formaciones rocosas laterales del área para ganar respiro y continuar con tus ataques a distancia. <br><br>
              Para una aproximación más conservadora, equipa tu mejor armadura pesada (como la de <a href="">Smough</a> o la de <a href="">Havel</a>), junto con el <a href="">Anillo de Havel</a> y un <a href="">Gran Escudo Hierro Negro</a> bien mejorado. La clave aquí es mantenerte lo suficientemente cerca para evitar su ataque en picado, pero a la vez lo bastante lejos para evadir sus embestidas y agarres. Observa sus movimientos: si percibes que se lanza con el hombro, retrocede rápidamente y, tras fallar, acércate para asestar un golpe contundente. 
              Es fundamental gestionar bien la barra de estamina, dejando que se recupere entre cadenas de ataque para mantener la defensa. <br><br>
              Si cuentas con la piromancia <a href="">Carne Férrea</a> (disponible en Laurentius) y un arma pesada poderosa, puedes optar por una ofensiva implacable. Al ingresar a la fogata, avanza unos pasos y activa <a href="">Carne Férrea</a>, levantando el escudo para enfrentar el ataque de salto de <a href="">Gwyn</a>. En ese momento, cambia a tu arma a dos manos y ataca sin cesar. 
              Con un arma como el <a href="">Gran Hacha de Caballero Negro</a>, cada dos golpes pueden aturdir a <a href="">Gwyn</a>, permitiéndote situarte estratégicamente y continuar el asalto hasta vencerlo. Prevé el final del efecto de <a href="">Carne Férrea</a>, pues al desvanecerse, tu vulnerabilidad aumentará.`,
    lore: `
      <a href="">Gwyn</a> es uno de los seres primigenios surgidos bajo tierra tras la aparición de la <a href="">Primera Llama</a>, portadora de vida, muerte y disparidad. Junto a <a href="">Nito el Rey del Cementerio</a>, la <a href="">Bruja de Izalith</a> y, posteriormente, el <a href="">Furtivo Pigmeo</a>, fue quien halló los cuatro <a href="">Almas de Señor</a>, almas de poder inconmensurable. 
      Con la magnitud de su propio alma, considerado el mayor entre los Señores, estableció una civilización subterránea, se autoproclamó rey y formó un ejército de <a href="">Caballeros de Plata</a>. Además, de su unión con una enigmática mujer nacieron su primogénito y su mayor hija, <a href="">Gwynevere</a>.
      <br><br>
      Una vez organizado su ejército, armado con lanzas y grandes arcos cuyos proyectiles eran tan macizos como lanzas de hierro, <a href="">Gwyn</a> salió a la superficie con la intención de librar una sangrienta contienda contra los dragones. La batalla fue cruentísima: por cada majestuosa bestia abatida, numerosos soldados de <a href="">Gwyn</a> perecían. 
      La difícil tarea de derribar a estos seres, con escamas tan duras como la piedra y resistentes tanto al fuego como a la magia, llevó al Señor a integrar en sus filas a los antiguos humanos, descendientes del <a href="">Furtivo Pigmeo</a>, quienes ya habían descubierto la enigmática Alma Oscura y forjado sus propias armas impregnadas del poder del <a href="">Abismo</a>. <br><br>
      El equilibrio se inclinó a favor de los Señores cuando <a href="">Seath</a>, un dragón pálido carente de escamas debido a su disparidad, traicionó a los suyos y se alió con <a href="">Gwyn</a>, robando su <a href="">Cristal Primordial</a>. La vulnerabilidad de <a href="">Seath</a> reveló el secreto de la inmortalidad de los dragones, permitiendo a <a href="">Gwyn</a> transformar los rayos solares en relámpagos capaces de penetrar sus escudos naturales. 
      Así, empleó lanzas de luz para descuartizar las escamas de los dragones, mientras sus caballeros utilizaban armas impregnadas de electricidad. Paralelamente, la <a href="">Bruja de Izalith</a> y sus hijas desataron tormentas de fuego, y <a href="">Nito</a> sembró la muerte, completando la victoria que selló el dominio sobre la superficie. <br><br>
      Sin embargo, la victoria fue empañada por el descubrimiento de la <a href="">Alma Oscura</a> por parte del <a href="">Furtivo Pigmeo</a> cuyo poder, aun fragmentado, seguía generando vida a través del <a href="">Abismo</a>. 
      Consciente de la amenaza que esto suponía, <a href="">Gwyn</a> actuó con diplomacia: entregó a los <a href="">Señores Pigmeos</a> una majestuosa ciudad anillada en el borde del mundo para que la gobernasen, junto con su hija menor, <a href="">Filianore</a>, sellando así un pacto que los subyugó y apartó su potencial de la historia. No obstante, temeroso del poder inherente a la humanidad, <a href="">Gwyn</a> marcó sus almas con el <a href="">Sello Oscuro</a>, una literal corona de fuego que limitó sus facultades y los condenó a una existencia efímera. <br><br>
      Con el dominio absoluto asegurado, <a href="">Gwyn</a> instauró la <a href="">Era del Fuego</a>, un periodo de prosperidad regido por el poder de la <a href="">Primera Llama</a>. Se autoproclamó "Dios del Sol" y su clan se erigió como deidades sobre la humanidad, que veneraba a estos seres y edificaba su cultura en torno a las almas. 
      <a href="">Gwyn</a> delegó en los otros dos Señores sus propios dominios: <a href="">Izalith</a> se retiró al subsuelo para estudiar la magia ígnea, mientras que <a href="">Nito</a> se confinó a las <a href="">Catacumbas</a> para vigilar a los muertos. Además, estableció el orden de sus <a href="">Cuatro Caballeros</a>, entre ellos el legendario <a href="">Ornstein</a>, para mantener el control y ejecutar sus designios.
      Con el tiempo, la <a href="">Primera Llama</a> comenzó a menguar, lo que amenazaba con dar paso a una <a href="">Era de la Oscuridad</a>. Consciente de que el ocaso del fuego implicaría el surgimiento de un nuevo orden liderado por un <a href="">Señor Oscuro</a>, <a href="">Gwyn</a> tomó la drástica decisión de enlazar la llama moribunda con el poder de su alma. 
      Repartió su <a href="">Alma de Señor</a> entre sus descendientes y encargó a sus hijos y a <a href="">Frampt</a> la tarea de guiar a la humanidad en la continuidad del fuego, asegurando así su legado. Sin embargo, al dirigirse al <a href="">Horno de la Primera Llama</a> con solo sus vestiduras, su gran espada y su corona vacía, <a href="">Gwyn</a> se consumió en el fuego, convirtiéndose en una sombra de cenizas que custodiaba el núcleo del Horno. <br><br>
      El acto de <a href="">Gwyn</a> generó controversia entre figuras como Kaathe y Aldia, quienes vieron en su sacrificio una prolongación antinatural de la <a href="">Era del Fuego</a> que limitaba el potencial humano. Las repercusiones de su decisión se dejaron sentir, por ejemplo, en la ciudad sumergida bajo el Santuario de Enlace de Fuego, una consecuencia directa de haber detenido el avance del <a href="">Abismo</a> en la superficie.`,
    curiosities: [
      { 
        description: "En Dark Souls 3, el Alma de Ceniza es la encarnación de Gwyn junto con todas las almas de aquellos que, a lo largo del tiempo, han enlazado su destino a la Primera Llama, incluido el propio protagonista de Dark Souls." 
      },
      { 
        description: "Gwyn es el único jefe de Dark Souls al que se le puede realizar parry." 
      },
      { 
        description: "El diseño y la historia de Gwyn parecen estar fuertemente inspirados en Zeus, la deidad suprema de la mitología griega." 
      },
      { 
        description: "El nombre Gwyn, traducido del galés, significa Blanco, Puro o Sagrado." 
      },
      { 
        description: "La vestimenta de Gwyn, conocida como el Conjunto del Gran Señor, puede adquirirse en la siguiente partida a través de Domhnall de Zena." 
      },
      { 
        description: "La melodía de Gwyn se interpreta al piano usando únicamente las teclas blancas, lo que hace alusión de forma sutil al Señor de la Luz Solar." 
      },
    ],
  },

  "Guardián del Santuario": {
    stats: {
      ng0: 2560,
      ng1: 4019,
      ng2: 4300,
      ng3: 4421,
      ng4: 4582,
      ng5: 4783,
      ng6: 5024,
      almas0: 30000,
      almas1: 60000,
      almas2: 64200,
      almas3: 66000,
      almas4: 68400,
      almas5: 71400,
      almas6: 75000
    },
    summoning: "No puedes invocar a ningún NPC para esta batalla.",
    weaknesses:["Sangrado", "Físico"],
    dropsDetailed: [
      { item: "Humanidad", percentage: "100%" },
      { item: "Alma del Guardián", percentage: "100%" },
      { item: "Cola del Guardían", percentage: "Solo obtenible al cortar la cola." },
    ],
    moves: [
      { name: "Furia Salvaje", description: "El Guardián ataca en ráfagas combinadas de 2 o 4 golpes con patas y cuernos. Dos ataques consecutivos con la pata o el cuerno constituyen una serie corta, mientras que alternar entre ambos da lugar a una secuencia más larga." },
      { name: "Pisotón", description: "Tras erguirse sobre sus patas traseras, baja bruscamente las delanteras para impactar al jugador." },
      { name: "Carga", description: "Realiza una carga veloz y, al final, eleva su cabeza en un empuje ascendente que puede levantar al jugador. Tras este asalto, su cola se posa brevemente en el suelo, ofreciendo una ventana para un contraataque." },
      { name: "Oleada de Viento", description: "Despliega sus alas para lanzar una combinación letal de agua y viento hacia el jugador. Bloquear este asalto agota notablemente la estamina o, en escudos inestables, incluso puede romper la defensa. Si no es posible rodar para evadirlo, resulta preferible absorber el golpe en lugar de intentar bloquearlo. Además, si el jugador se mantiene en la línea de fuego, el enemigo ocasionalmente seguirá con un ataque de carga." },
      { name: "Carga Voladora", description: "Se eleva en el aire y se lanza en picada con sus cuernos, con la misma mecánica de oportunidad al bajar la cola."},
      { name: "Salto de Embestida", description: "El Guardián se impulsa hacia arriba y, tras una breve pausa, se lanza directamente a gran velocidad. Si logras esquivar este asalto, quedará vulnerable durante un corto lapso; de lo contrario, su ataque provocará un giro acrobático que lo alejará considerablemente." },
      { name: "Disparo de Rayo", description: "Baja la cabeza para cargar y luego libera una gran esfera eléctrica en el objetivo, con una señal de advertencia similar a la del siguiente movimiento." },
      { name: "Repétidor de Rayo", description: "Lanza cuatro proyectiles eléctricos en rápida sucesión, los cuales se pueden evitar desplazándose lateralmente." },
      { name: "Ráfaga Eléctrica", description: "Mientras se desplaza volando, efectúa una maniobra de strafing, lanzando un potente proyectil eléctrico." },
      { name: "Ataque Aéreo Eléctrico", description: "Sobrevuela al jugador y, al finalizar su trayectoria, suelta una pesada bola de rayos que se puede esquivar rodando hacia atrás una vez que pase." },
      { name: "Barrido de Cola", description: "Barre la cola de derecha a izquierda, acumulando un nivel moderado de veneno."},
      { name: "Giro de Cola", description: "Realiza un giro de 360 grados ligeramente por encima del suelo, generando una acumulación considerable de veneno." },
      { name: "Disparo de Rayo", description: "Si el jugador se sitúa demasiado cerca de su retaguardia, lanza una patada con sus patas traseras." },
      { name: "Repliegue", description: "El Guardián se aleja volando a gran velocidad, lo que provoca que el jugador pierda el bloqueo del objetivo." },
    ],
    bestStrategies: `
            El <a href="">Guardian del Santuario</a> posee alta resistencia a la magia y a los ataques eléctricos, resistencia media al fuego y es vulnerable a los golpes físicos. Su combate se compone de rápidas combinaciones de ataques físicos, proyectiles de rayos y ofensivas venenosas. 
            Aunque la mayoría de sus ataques se pueden evadir rodando, bloquearlos consume mucha estamina, y sus combos de cuatro golpes pueden dejar a los jugadores con baja estabilidad sin capacidad para rodar, atacar o curarse. Además, es susceptible a las armas que provocan sangrado, siempre que se encadenen hasta cuatro golpes consecutivos.<br> <br>
            Se aconseja utilizar un escudo ligero y de alta estabilidad con 100% de protección física y buena resistencia a los rayos como el <a href="">Escudo de Caballero Negro</a> o de Plata, junto con un conjunto de armadura liviano que ofrezca alta defensa contra los rayos. 
            Para cortar la cola en uno o dos golpes, es ideal contar con un arma potente y de rápida recuperación, empleada a dos manos, como hachas, espadas grandes o alabardas. <br><br>
            El combate se caracteriza por la rapidez de los ataques. Al inicio, el <a href="">Guardián del Santuario</a> suele lanzar una ráfaga de rayos tras un rugido, por lo que es crucial moverse ágilmente, rodar o correr hacia un lateral para evadirlo sin agotar la estamina. 
            Se recomienda mantener el bloqueo en momentos críticos y contraatacar de forma precisa cuando el jefe se detiene o recupera, especialmente aprovechando sus pausas tras ataques de área o cargas. <br><br>
            La cola del Guardian se vuelve vulnerable únicamente tras ciertos ataques de carga, cuando se posa brevemente en el suelo. La táctica más efectiva es provocar su ataque de <a href="">Oleada de Viento</a> sin bloquearlo, rodando lateralmente para forzar que baje la cabeza y deje expuesta la cola, abriendo así una ventana para un golpe rápido. 
            Alternativamente, se pueden emplear ataques a distancia, como disparos con arco desde posiciones estratégicas, aunque hay que tener cuidado con sus proyectiles eléctricos. En combate cuerpo a cuerpo, mantener la carga de equipo por debajo del 25% facilita rodar con rapidez para evadir sus embestidas y permite asestar golpes a la cola en el momento oportuno sin agotar la estamina.`,
    lore: `
      <a href="">Los Guardianes del Santuario</a> son seres compuestos por rasgos de diversas criaturas, como leones, cabras, escorpiones y aves. 
      Fueron forjados por los hechiceros de <a href="">Oolacile</a>, maestros en manipular las fuerzas de la naturaleza con conocimientos y métodos que ni siquiera los hechiceros de Vinheim pudieron replicar, con el propósito de salvaguardar el <a href="">Jardín del Santuario</a> de su tierra.
      <br><br>
      Aunque no fueron creados a partir del <a href="">Lecho del Caos</a>, por lo que técnicamente no son demonios, el proceso mediante el cual se mezclaron atributos de distintos animales a través de la hechicería de almas y vida les confiere una notable semejanza con los demonios del caos, originados por la imitación de la <a href="">Primera Llama</a> a través de la <a href="">Llama del Caos</a>. <br><br>
      Entre estas criaturas sobresale el <a href="">Guardián</a>, un vigilante con rasgos que superan los del mero león, acercándose a la esencia de lo demoníaco. Este león alado, portador de una mirada fiera, fue temido por su capacidad para contener la expansión del Abismo, evidenciando su naturaleza extraordinaria y su rol protector.
    `,
    curiosities: [
      { 
        description: "Tras derrotar a Artorias el Caminante del Abismo, reaparecerán dos Guardianes del Santuario en una versión más débil." 
      },
      { 
        description: "Este jefe posee una apariencia que recuerda a una mantícora, evocando las enigmáticas criaturas de la mitología griega." 
      },
    ],
  },

  "Caballero Artorias": {
    stats: {
      ng0: 3750,
      ng1: 5887,
      ng2: 6299,
      ng3: 6476,
      ng4: 6712,
      ng5: 7006,
      ng6: 7359,
      almas0: 50000,
      almas1: 100000,
      almas2: 107000,
      almas3: 110000,
      almas4: 114000,
      almas5: 119000,
      almas6: 125000
    },
    summoning: "No puedes invocar a ningún NPC para esta batalla.",
    weaknesses:["Ninguna"],
    dropsDetailed: [
      { item: "Alma de Artorias", percentage: "100%" },
    ],
    moves: [
      { name: "Golpe de Salto Salvaje", description: "Artorias aúlla y salta hacia el jugador, intentando clavarle su espada, causando gran daño. Puede bloquearse moviéndose lateralmente o evadirse rodando hacia adelante o a un costado justo antes de su aterrizaje. Este es un buen momento para contraatacar con un golpe." },
      { name: "Carga Punzante", description: "Artorias se lanza hacia el jugador en un intento de atravesarlo, golpeando dos veces si no se esquiva. Bloquearlo sin un escudo adecuado puede agotar gran parte de la resistencia. Si logras bloquear el ataque, es un buen momento para contraatacar, ya que retrocederá al recibir un golpe. Sin embargo, si lo atacas por la espalda, puede responder con un Esquive Cortante." },
      { name: "Esquive Cortante", description: "A corta distancia, Artorias puede ejecutar un rápido golpe de revés mientras salta hacia atrás. Este ataque es muy veloz, por lo que siempre es recomendable tener el escudo listo cuando estés cerca de él y no estés atacando o recuperando resistencia." },
      { name: "Puñalada Ligera", description: "Artorias suele seguir su ataque previo con una rápida puñalada ligera al acercarse al jugador." },
      { name: "Corte Deslizante", description: "Artorias se desliza una corta distancia y ejecuta un corte horizontal frente a él. En otra variante, realiza un golpe descendente tras acercarse con un movimiento desarticulado de la parte superior del cuerpo. Ambos ataques pueden bloquearse o esquivarse rodando hacia los lados. También puede seguir con una puñalada ligera." },
      { name: "Combo Cortante", description: "Artorias blande su espada entre 1 y 3 veces, seguido generalmente de dos golpes de Golpe Huracán o una Puñalada Ligera." },
      { name: "Golpe Huracán Doble", description: "Artorias ejecuta un giro de 720° con su espada, golpeando dos veces en el proceso. Puede bloquearse o esquivarse. Suele usar este ataque si el jugador permanece cerca por demasiado tiempo o tras un ataque cuerpo a cuerpo." },
      { name: "Salto Mortal con Golpe Aplastante", description: "A media distancia, Artorias salta con agilidad hacia el jugador para asestar un contundente golpe descendente con su espada, repitiendo el ataque hasta tres veces mientras se adapta a la posición del oponente. Es fundamental esquivar o bloquear el primer impacto, ya que los golpes posteriores dejan aturdido al jugador y, si su peso supera la mitad de su carga, pueden derribarlo, dificultando la huida. No se recomienda atacar tras evadir el primer golpe, pues Artorias podría replicar con una contragolpe similar a su Carga Puñalada. Sin embargo, bloquear los tres saltos permite aprovechar el tiempo en que recupera lentamente su postura. Cabe resaltar que este ataque ignora por completo la invulnerabilidad, lo que implica que la espada dañará al jugador incluso durante una esquiva o estando en el suelo; la mejor defensa es rodar lateralmente." },
      { name: "Oscuridad Rezumante", description: "Cuando Artorias pierde aproximadamente un tercio de su salud, inicia una canalización de Oscuridad que culmina en una explosión de área, incrementando el daño de sus ataques. Durante este proceso, un tenue rastro de Oscuridad lo sigue sin representar una amenaza. Si vuelve a canalizar antes de que el beneficio se disipe, este se acumula, haciéndolo aún más peligroso. La explosión abarca una zona intermedia, susceptible de bloqueo o evasión. Este poderoso ataque se puede interrumpir golpeándolo repetidamente durante la canalización, lo que lo desequilibra. La cantidad de impactos necesarios varía según el arma utilizada: algunas facilitan la interrupción, mientras que con otras resulta casi imposible, y los disparos precisos a la cabeza con arco logran cortar la canalización, aunque las oportunidades son escasas. Resulta crucial frenar este empoderamiento, ya que de completarse, el Golpe de Salto Salvaje mejorado de Artorias puede destrozar la barra de vida o resistencia, incluso si se utiliza un gran escudo. Además, durante la canalización, el daño que recibe se reduce notablemente, haciendo que desbaratar su concentración sea una estrategia mucho más eficaz que atacar de forma directa." },
    ],
    bestStrategies: `
            Una estrategia efectiva contra Artorias se basa en leer sus patrones de ataque y esquivar con precisión. Es fundamental anticipar sus movimientos y mantener una distancia prudente, aproximadamente el doble de su alcance, para reaccionar con mayor eficacia. Cuando Artorias realice su <a href="">Salto Mortal</a>, gira hacia la derecha mientras la cámara se eleva, lo que te permitirá aprovechar la apertura para asestar uno o dos golpes según la velocidad de tu arma. Es preferible no atacar inmediatamente después de su Salto Firme; en cambio, úsalo para curarte o para crear la distancia necesaria. Ante sus ataques de carga, si se trata de una embestida normal, retrocede para evadir el impacto y contraataca con uno o dos golpes; si se trata de una embestida pesada, esquiva lateralmente en sentido opuesto a su carga y, tras su largo periodo de recuperación, asesta dos o tres golpes decisivos. 
            Además, si te posicionas detrás de él, ten en cuenta el ataque de lodo abismal, que aunque inflige poco daño, puede aturdirte; en el momento adecuado, una rápida esquiva seguida de un contraataque puede ser la clave para mantener el control de la situación. Finalmente, cuando Artorias comience a potenciarse tras perder una parte considerable de su salud, acércate rápidamente y ataca de forma incesante para interrumpir la canalización, ya sea con un arma contundente o mediante disparos precisos a la cabeza, evitando que desate una explosión de área devastadora.<br><br>
            <a href="">Artorias</a> se caracteriza por cambiar rápidamente entre ataque y defensa, utilizando su velocidad y agilidad para esquivar y contraatacar. Su estilo agresivo, similar al de Gwyn, se centra en presionar a los oponentes heridos para impedirles recuperarse, por lo que es imprescindible mantenerse en constante movimiento y desplazarse lateralmente para evitar que tome la iniciativa. En situaciones cooperativas, los aliados deben adoptar una postura ofensiva que obligue al jefe a alejarse del anfitrión, evitando así que se beneficie de su capacidad para cerrar distancias de forma rápida mediante ataques de salto. Interrumpir su canalización es crucial; cuando <a href="">Artorias</a> se arrodilla para cargar poder, es el momento perfecto para atacar con armas de gran impacto o lanzar hechizos que lo desequilibren, ya que si logra potenciarse, sus ataques podrán destrozar tanto la barra de vida como la de resistencia, complicando aún más la lucha. 
            Emplear armas de largo alcance, como la Lanza del Caballero Plateado, te permitirá golpearlo de forma segura después de ataques como el Salto Salvaje o el <a href="">Combo Aplastante</a>, mientras que rodar hacia atrás y utilizar un escudo de alta estabilidad te ayudará a mitigar sus ataques, los cuales requieren una gestión cuidadosa de la resistencia para evitar recibir un daño devastador. <br><br>
            Para un piromántico bien preparado, la lucha contra Artorias se torna más manejable si se optimiza el poder de la Llama de Piromancia y se equipan hechizos esenciales como Poder Interior, <a href="">Gran Bola de Fuego del Caos</a> y <a href="">Gran Bola de Fuego</a>. Es aconsejable complementar el equipamiento con un escudo que ofrezca completa reducción del daño físico y alta estabilidad, como el <a href="">Escudo de Cometa del Caduceo</a>, además de accesorios que potencien tanto la habilidad piromántica como la regeneración de resistencia. Antes de iniciar el combate, activa Poder Interior para aumentar tu daño y provocar a Artorias, forzándolo a utilizar su <a href="">Salto Alto</a>. Durante este ataque, esquiva lateralmente y contraataca de inmediato, aprovechando el momento en que el jefe se encuentra vulnerable. 
            Cuando intente canalizar su poder, acércate con rapidez y lanza dos ataques de fuego o emplea hechizos precisos para interrumpir su concentración, asegurándote de tener siempre a la mano al menos dos hechizos para contrarrestar su potenciación. Si por alguna razón no logras detener su canalización, mantén la calma y continúa esquivando y provocándolo hasta que el efecto desaparezca, evitando que inicie una segunda potenciación antes de que la primera concluya, ya que esto lo haría aún más peligroso. Aprovecha el largo periodo de recuperación tras su <a href="">Salto Alto</a> para lanzar tus hechizos con precisión, ya que durante ese breve lapso Artorias es menos ágil y vulnerable a tus ataques.`,
    lore: `
      Sir <a href="">Artorias</a> fue uno de los caballeros más leales al servicio de <a href="">Gwyn</a>, Señor de la Luz del Sol. Su maestría con el mandoble y su voluntad indomable lo convirtieron en un guerrero de máxima confianza, siendo recompensado con un fragmento del Alma del Señor de Gwyn. Junto a <a href="">Ornstein</a>, <a href="">Ciaran</a> y <a href="">Gough</a>, formó parte de los Cuatro Caballeros de Gwyn. Como símbolo de su posición dentro de la orden, obtuvo un<a href=""> Anillo del Lobo</a>, el cual fortalecía su aplomo, mejorando su efectividad en combate con el mandoble.<br><br>
      <a href="">Artorias</a> vestía su icónica armadura azul celeste, un símbolo de orgullo y gloria. Portaba su Gran Espada y un Gran Escudo, reflejando su destreza en combate. Era un cercano amigo de <a href="">Ciaran</a>, su compañero entre los Cuatro Caballeros de <a href="">Gwyn</a>. En algún momento, <a href="">Artorias</a> conoció a <a href="">Sif</a>, un gran lobo gris, con quien forjó un vínculo profundo. Lucharon codo a codo como verdaderos compañeros hasta que el lobo aprendió a manejar su gran espada y heredó parte del poder del <a href="">Alma de Artorias</a>. <br><br>
      Tras el sacrificio de <a href="">Lord Gwyn</a> para prolongar la <a href="">Era del Fuego</a>, la <a href="">Serpiente Primordial Kaathe</a> comenzó a buscar un humano lo suficientemente fuerte para convertirse en el <a href="">Señor Oscuro</a> y liderar a la humanidad hacia la <a href="">Era de la Oscuridad</a>. En su búsqueda, La <a href="">Serpiente Primordial Kaathe</a> llegó a <a href="">Nuevo Londo</a>, donde sedujo a los <a href="">Cuatro Reyes</a>, antiguos humanos poderosos que habían recibido un fragmento del <a href="">Alma del Señor</a> de <a href="">Gwyn</a>. Los convenció de abrazar la Oscuridad, enseñándoles el arte del <a href="">Drenaje Vida</a>, lo que les permitió preservar su humanidad incluso como <a href="">No Muertos</a> y liberarse del yugo de los dioses. <br><br>
      Sin embargo, su influencia no se limitó a los reyes, sino que corrompió a todo su ejército, transformando a los caballeros de Nuevo Londo en Espectros Oscuros, sirvientes de la Oscuridad que usaban Drenaje de Vida para absorber humanidad. Cuando los Cuatro Reyes abrieron un Abismo en el corazón de la ciudad, su propia forma fue mutada por la influencia de su Alma Oscura liberada, al igual que la armadura de los Espectros Oscuros. Además, comenzaron a utilizar los Orbes de Ojos Rojos, un regalo de Kaathe, para cazar humanidad y hundirse aún más en los poderes de la Oscuridad. <br><br>
      Una nación de humanos liberados del <a href="">La Marca Oscura</a>, capaces de comprender y aprovechar los poderes de su Alma Oscura, y con un ejército entero compartiendo ese poder, representaba una amenaza sin precedentes para los dioses de Anor Londo. La creciente influencia de los <a href="">Espectros Oscuros</a> fue vista como una abominación, catalogándolos como enemigos de la humanidad y de toda forma de vida. Para contener esta amenaza, <a href="">Artorias</a>, como uno de los Cuatro Caballeros de Gwyn, fue enviado a enfrentar a los soldados oscuros de <a href="">Nueva Londo</a>. Para protegerse, se le otorgó un <a href="">Colgante de Plata</a>, diseñado para desviar la Oscuridad del Abismo en sus formas mágicas. Sin embargo, el colgante resultó insuficiente para permitirle cruzar el Abismo de los Cuatro Reyes, obligándolo a forjar un pacto con las bestias del Abismo. Como resultado, obtuvo un anillo que le permitió adentrarse en el <a href="">Abismo</a>, pero a costa de maldecir su espada en el proceso.<br><br>
      Así, <a href="">Artorias</a> fue reconocido como el Caminante del Abismo, persiguiendo y cazando a los <a href="">Espectros Oscuros</a>. Sin embargo, falló en su intento de eliminar a los <a href="">Cuatro Reyes</a> y cerrar el <a href="">Abismo</a> de <a href="">Nuevo Londo</a>. Ante la imposibilidad de erradicar la amenaza, se tomó una decisión desgarradora: inundar todo <a href="">Nuevo Londo</a>, a pesar de que ello significaba la aniquilación de incontables vidas y la destrucción de su cultura. Los hechiceros de <a href="">Anor Londo</a> fueron convocados para ejecutar la catástrofe, sellando a los <a href="">Cuatro Reyes<</a>, sus <a href="">Espectros Oscuros</a> y a toda la población inocente junto con ellos. No hubo evacuaciones; la ciudad fue sumergida sin dar oportunidad a sus habitantes de escapar. Aquellos que murieron malditos, regresaron como <a href="">Fantasmas</a>, condenados a vagar eternamente por las ruinas de su hogar perdido. <br><br>
      Tras el fracaso con los Cuatro Reyes, Kaathe llegó a Oolacile, donde manipuló a la nación para que profanara la tumba de Manus, un hombre primordial con un Alma Oscura excepcional y habilidades en hechicería oscura. Manus había sido enterrado bajo las mazmorras de Oolacile, pero fue despertado de su letargo por la interferencia de Kaathe. Sin embargo, la familia real de Oolacile tomó posesión de su colgante roto, entregándolo a la princesa Anochecer de Oolacile. La obsesión de Manus por recuperar su preciado objeto lo llevó a una desesperación creciente, sumergiéndolo en la locura absoluta. Su Alma Oscura se descontroló, transformándolo en una bestia oscura que vagaba eternamente en busca de su colgante perdido. La humanidad fuera de control de Manus provocó la expansión del Abismo, amenazando con devorar toda Oolacile. 
      Su influencia no solo generó Fantasmas de Humanidad con voluntad propia, sino que también corrompió y mutó a los habitantes de la ciudad. Sus cuerpos fueron deformados, sus cabezas hinchadas y desgarradas, revelando una masa de ojos rojos diminutos y partes cerebrales protuberantes, signos del horror en el que se habían convertido. <br><br>
      Mientras el Abismo consumía la tierra de Oolacile, Artorias llegó con la misión de detener su expansión y enfrentar a Manus. Su experiencia previa luchando contra el Abismo en Nuevo Londo y la protección de su Colgante de Plata le dieron confianza para la batalla. Acompañado de su leal compañera, Sif, Artorias desafió al Padre del Abismo, pero su fuerza fue insuficiente para derrotarlo. Manus lo superó, y el caballero sucumbió a la Oscuridad. Gravemente herido, usó su Gran Escudo Purificador para crear una barrera mágica, resguardando a Sif del Abismo antes de que él mismo fuera corrompido por completo. 
      Con su alma consumida, su armadura deteriorada y su voluntad destrozada, <a href="">Artorias</a> se quedó atrás, combatiendo en solitario contra las criaturas deformadas de <a href="">Oolacile</a>, en una lucha sin esperanza contra la Oscuridad que lo había devorado. <br><br>
      En un momento, <a href="">Manus</a> logró recuperar su colgante perdido, secuestrando a la princesa <a href="">Anochecer de Oolacile</a> y llevándola a su Abismo. Sin embargo, una distorsión temporal lo llevó a perseguir otra versión de su colgante, esta vez ubicada en el futuro. Usando su poder oscuro, <a href="">Manus</a> atrajo al <a href="">No Muerto Elegido</a> desde el futuro hasta el pasado de <a href="">Oolacile</a>, arrastrándolo a su dominio. Este guerrero, destinado a cambiar la historia, derrotó al corrompido Artorias, continuando su misión y enfrentándose a Manus en una batalla definitiva. Tras su victoria, impidió que <a href="">Oolacile</a> cayera en una corrupción aún mayor. 
      Para proteger el honor de <a href="">Artorias</a>, <a href="">Elizabeth</a> difundió la versión oficial en la que el caballero <a href="">Artorias</a> había sido quien derrotó al <a href="">Abismo</a> y a <a href="">Manus</a>, ocultando la verdad sobre el <a href="">No Muerto Elegido</a>. <a href="">Ciaran</a>, quien llegó después de la batalla, solicitó el <a href="">Alma de Artorias</a> al <a href="">No Muerto Elegido</a>, con la intención de rendir tributo a su querido amigo caído. <br><br>
      <a href="">Artorias</a> y <a href="">Sif</a> también contaban con la amistad de <a href="">Alvina</a>, una Gran Felina blanca que había vivido desde los primeros días de la <a href="">Era del Fuego</a>. Tras la muerte de <a href="">Artorias</a>, <a href="">Alvina</a> fundó el pacto de los <a href="">Cazadores del Bosque</a>, un clan de guerreros dedicados a proteger Darkroot de los aventureros que intentaban profanar la tumba del legendario caballero. Con el tiempo, <a href="">Alvina</a> trató de disuadir a quienes se aventuraban en la región, asegurando que la tumba de Artorias era solo un mito y que las historias sobre él no eran más que leyendas y cuentos de hadas.
    `,
    curiosities: [
      { 
        description: "Artorias tiene líneas de diálogo no utilizadas ocultas en los archivos del juego." 
      },
      { 
        description: "El Gran Lobo Gris Sif blande la Gran Espada de Artorias al enfrentar a los No Muertos Elegidos." 
      },
      { 
        description: "Dado que Berserk es uno de los mangas favoritos de Hidetaka Miyazaki, no es sorprendente que la saga Dark Souls contenga múltiples referencias a la obra. En el caso de Artorias, su diseño y estilo de combate parecen estar inspirados en Guts, el Espadachín Negro." 
      },
    ],
  },

  "Kalameet, el Dragón Negro": {
    stats: {
      ng0: 5400,
      ng1: 8478,
      ng2: 9071,
      ng3: 9326,
      ng4: 9665,
      ng5: 10089,
      ng6: 10598,
      almas0: 60000,
      almas1: 120000,
      almas2: 128400,
      almas3: 132000,
      almas4: 136800,
      almas5: 142800,
      almas6: 150000
    },
    summoning: "No puedes invocar a ningún NPC para esta batalla.",
    weaknesses:["Ninguna"],
    dropsDetailed: [
      { item: "Anillo de Calamidad", percentage: "100%" },
  	  { item: "Espadón de Obsidiana", percentage: "100%" },
    ],
    moves: [
      { name: "Barrido Infernal", description: "Si te aventuras a adentrarte en el desfiladero antes de que Gough, el Ojo de Halcón derribe al dragón, Kalameet surca el firmamento y desata un manto de llamas sobre la zona. Este ataque se repite incesantemente mientras te mantengas en ese lugar, obligándote a replantear tu avance. " },
      { name: "Llama Directa", description: "A distancia, el dragón concentra su furia en un chorro de fuego que, sin seguir tus movimientos, puede dejarte vulnerable. Ser sorprendido por estas llamas te expone a un parálisis devastadora, mientras que intentar bloquearlas sin la protección adecuada podría llevar a un quiebre de defensa fatal." },
      { name: "Fuego Barrido", description: "En un rango medio, Kalameet libera un amplio arco de fuego que se desplaza de un lado a otro. Este movimiento, aunque amenazante, te brinda la oportunidad de contraatacar en el instante en que el dragón se expone, o incluso de defenderte hábilmente." },
      { name: "Fuego Cercano", description: "Cuando te sitúas directamente bajo la majestuosa cabeza del dragón, este se impulsa sobre sus patas traseras para esparcir un incendio que abarca gran parte del frente. Sin embargo, desplazarse rápidamente hacia sus flancos o incluso internarse bajo su cabeza puede ofrecerte una ruta de escape." },
      { name: "Infierno Ascendente", description: "En situaciones de proximidad extrema, Kalameet se eleva majestuoso para, en un instante, liberar una explosión de llamas que se irradia en forma circular. Esta maniobra, de altísima letalidad, exige una retirada inmediata o, en su defecto, la utilización de escudos robustos, pues la inestabilidad del bloqueo puede volverse en tu contra." },
      { name: "Falso Fuego", description: "Con astucia, el dragón se abalanza más allá de ti y, al reposicionarse, envuelve el área que tienes delante en un resplandor ardiente. Este engaño te puede brindar un respiro para curarte o lanzar tus hechizos, aunque si te interpides en su camino, el impacto puede ser severo. Además, un obstáculo tras de ti puede impedir su desplazamiento, colocándote en una posición extremadamente comprometida." },
      { name: "Golpe de Cabeza", description: "En combate cercano, Kalameet utiliza el peso de su masiva cabeza como arma, ejecutando un barrido desde un flanco al otro. Su largo cuello hace que, en ocasiones, un segundo golpe pueda impactar de forma sorpresiva, especialmente si te encuentras demasiado cerca. No obstante, su flanco derecho queda momentáneamente desprotegido, ofreciendo una oportunidad para contraatacar." },
      { name: "Pisotón", description: "Si te acercas demasiado por debajo de su parte delantera, el dragón estampa sus pies con tal fuerza que, aunque el golpe no se extiende, la proximidad lo convierte en un riesgo considerable. La clave está en evitar estar justo en el centro de su embestida." },
      { name: "Mazo y Barrido de Cola", description: "Cuando permaneces debajo o detrás del dragón, Kalameet recurre a aplastarte con su poderosa cola. Este ataque, que se prolonga durante varios instantes, te brinda la posibilidad de desmontarla, siendo una de las ocasiones más oportunas para infligir un daño decisivo." },
      { name: "Embate Acelerado", description: "En una maniobra que combina velocidad y furia, el dragón se lanza hacia adelante, golpeándote con cabeza y garra en un movimiento sorpresivo y extendido. Aunque es posible defenderte, la fuerza del impacto te empujará hacia atrás, dejando a la defensiva." },
      { name: "Látigo de Cola Evasivo", description: "Con una rotación vertiginosa, Kalameet se aleja mientras ejecuta un barrido de cola en un amplio arco. La sincronización del ataque hace que esquivarlo sea un verdadero desafío, recordando a las ágiles embestidas de otros enemigos legendarios." },
      { name: "Embate Aéreo", description: "El dragón se eleva antes de cargar con violencia, ocasionando daño tanto en su ascenso como al impactar con el suelo. Generalmente, este movimiento es seguido por un contundente golpe de cola, lo que intensifica la amenaza para quien se encuentre en su trayectoria." },
      { name: "Sello de la Calamidad", description: "La firma inconfundible de Kalameet: al erguirse sobre sus patas traseras, el brillo intenso en su cresta y un chillido penetrante anuncian este ritual. Si quedas atrapado, te verás obligado a flotar frente a él mientras recibes daño adicional, quedando marcado y siendo más susceptible a futuros ataques. La única salvación consiste en huir tan pronto como percibas los inicios de este letal hechizo." },
    ],
    bestStrategies: `
            Uno de los aspectos cruciales al enfrentarse a <a href="">Kalameet</a> es comprender que su aliento de fuego es, en realidad, una manifestación de hechicería oscura. Este ataque inflige daño físico y mágico, acompañado de un notable deterioro en la estabilidad del adversario. Por ello, en lugar de buscar resistencia al fuego, resulta esencial reforzar la defensa física y mágica. 
            Intentar bloquear este aliento suele ser contraproducente, ya que la componente mágica traspasa escudos de menor calidad y, si estos fallan, pueden romper la guarda y aumentar el daño recibido. En este contexto, sólo los grandes escudos son efectivos—idealmente el Gran Escudo de Havel, aunque el <a href="">Escudo Grande Purificador</a> o el <a href="">Gran Escudo de Piedra</a> pueden ser alternativas viables si se gestionan con cautela los recursos de resistencia.<br><br>
            Además, <a href="">Kalameet</a> posee una resistencia notable a todos los elementos, incluida la electricidad, lo que desaconseja el uso de armas o milagros basados en rayos. La estrategia más prudente es emplear armamento puramente físico y aprovechar la agilidad para evadir sus ataques mediante rápidas esquivas. Desplazarse hacia su flanco izquierdo es generalmente la opción más segura, pues reduce la probabilidad de ser alcanzado por sus embestidas frontales, como el golpe de cabeza. <br><br>
            Para aquellos que decidan enfrentar al dragón sin el auxilio de <a href="">Gough</a>, es imprescindible contar con una armadura imponente que ofrezca gran poise, junto a escudos de alta defensa tanto física como mágica. Arcos legendarios, como el de Gough o el <a href="">Arco Grande Asesino de Dragones</a> complementados con accesorios que potencien la distancia y la estabilidad, pueden marcar la diferencia en combate. 
            Hechizos defensivos como <a href="">Gran Escudo Mágic</a>o y <a href="">Gran Barrera Mágica</a> también son de gran ayuda para mitigar el daño residual, aunque requieren un manejo meticuloso y, en ocasiones, el intercambio de armas. <br><br>
            Por último, desmembrar la cola de <a href="">Kalameet</a> para obtener el codiciado <a href="">Espadón de Obsidiana</a> se presenta como un desafío mayúsculo, ya que su cola, habitualmente inaccesible, se muestra vulnerable únicamente tras ciertos movimientos, como el devastador Mazo y <a href="">Barrido de Cola</a> o durante el ataque de fuego a corta distancia. 
            En esos breves instantes, resulta fundamental emplear ataques de alto poder, o incluso utilizar alabardas para asegurar el corte, dado que se disponen de pocas oportunidades para asestar golpes efectivos. Contar con la ayuda de un fantasma puede facilitar enormemente esta arriesgada empresa.`,
    lore: `
      <a href="">Kalameet</a>, descendiente de los archidragones primigenios, surgió tras la irrupción de la Disparidad y el despertar de la <a href="">Primera Llama</a> que posibilitó la evolución de la vida. A diferencia de sus antecesores, ostentaba un único ojo naranja y era capaz de emitir un agudo sonido de alta frecuencia que duplicaba la vulnerabilidad de sus víctimas, además de contar con una piel de obsidiana que le otorgaba una inusual resistencia, superando incluso la debilidad habitual de los dragones frente a la electricidad. <br><br>
      Su fuerza descomunal le permitió sobrevivir a la aniquilación de su especie por los Señores en tiempos de guerra, persistiendo a lo largo de la Era del Fuego. Con la corrupción de <a href="">Oolacile</a> a manos del Abismo de <a href="">Manus</a>, se estableció en la región, imponiéndose de tal forma que ni los más renombrados guerreros de <a href="">Anor Londo</a> osaban provocarlo. <br><br>
      Finalmente, un <a href="">Elegido No Muerto</a> se atrevió a desafiar al dragón negro, entablando una batalla legendaria que culminó con su derrota. De su cola se forjó la <a href="">Espadón de Obsidiana</a>, imbuida del poder místico del dragón, mientras que su singular ojo naranja se transformó en un anillo encantado, el <a href="">Anillo de la Calamidad</a>, capaz de duplicar el daño infligido a quien lo portara.
    `,
    curiosities: [
      { 
        description: "Si Kalameet es abatido sin la intervención de Gough, este último expresará un discurso notablemente distinto." 
      },
      { 
        description: "En Dark Souls 2, un grupo de caballeros encontró el cuerpo de Kalameet y aprovechó sus escamas para forjar armaduras que reflejaban la grandeza del dragón, sus garras para confeccionar robustos escudos y su cola para crear armas de leyenda." 
      },
      { 
        description: "En Dark Souls 3 se encuentra el Anillo de la Calamidad, forjado a partir del ojo de Kalameet. A pesar de su origen legendario, este anillo no otorga beneficios y, por el contrario, resulta perjudicial para su portador." 
      },
    ],
  },

  "Manus, Padre del Abismo": {
    stats: {
      ng0: 6665,
      ng1: 10464,
      ng2: 11196,
      ng3: 11510,
      ng4: 11929,
      ng5: 12452,
      ng6: 13080,
      almas0: 60000,
      almas1: 120000,
      almas2: 128400,
      almas3: 132000,
      almas4: 136800,
      almas5: 142800,
      almas6: 150000
    },
    summoning: "Puedes invocar al Gran Lobo Gris, Sif, para esta batalla. Su sello se encuentra en la arena de Manus, justo a la izquierda del punto de aparición del jugador, pero solo podrá utilizarse si se reactiva en la Sima del Abismo.",
    weaknesses:["Colgante de Plata"],
    dropsDetailed: [
      { item: "10 Humanidad", percentage: "100%" },
      { item: "Alma de Manus", percentage: "100%" },
    ],
    moves: [
      { name: "Golpe de Brazo Corto y Largo", description: "Manus levanta brevemente su extremidad sombría para descargar un poderoso golpe descendente que abarca gran parte de la arena. Este movimiento rompe la defensa de la mayoría de los escudos de estabilidad media y puede ser evitado rodando en cualquier dirección durante su bajada, anunciándose por un rápido movimiento del brazo." },
      { name: "Barrido Trasero", description: "Si te posicionas detrás de Manus, él es capaz de girar su brazo de forma sorpresiva para proteger su espalda, castigando a quien se descuide." },
      { name: "Uppercut, Barrido Extendido y Triple Balanceo", description: "Entre otros ataques, Manus utiliza un uppercut ascendente y variados barridos —incluso lanzando una serie de golpes consecutivos— que combinan agilidad y fuerza para desestabilizar al adversario." },
      { name: "Golpe con Catalizador y Salto Desgarrador", description: "De manera fulminante, Manus golpea el suelo con su catalizador, acción que suele ir seguida por un golpe de brazo corto. Además, en un arranque espectacular, se eleva antes de descender con un ataque combinado de mano y catalizador, haciendo que el jugador pierda el control del objetivo." },
      { name: "Combo de Furia", description: "mpulsado por un breve grito de ira, Manus desata una serie de rápidos deslices y contundentes golpes descendentes, atacando al jugador en sucesión y drenando considerablemente la resistencia si se intenta bloquear."},
      { name: "Ráfaga de Orbes Oscuros", description: "Con su catalizador, lanza una serie de orbes que se extienden en abanico, obligando al jugador a moverse con rapidez para esquivarlos." },
      { name: "Lluvia del Abismo", description: "Convoca orbes que caen desde lo alto, creando una amplia zona de peligro en la que es crucial aprovechar breves momentos de invulnerabilidad al rodar." },
      { name: "Jaula del Abismo", description: "Los orbes se concentran alrededor de Manus, formando una barrera casi total en la arena, dejando únicamente un pequeño espacio junto a él para que el jugador se desplace y evite el ataque." },
    ],
    bestStrategies: `
            Si lograste liberar a <a href="">Sif</a> antes de la sala del jefe, tendrás la opción de llamarlo a tu lado durante el combate. Para ello, busca un signo de invocación blanco, ubicado cerca del centro de la estancia, detrás y a la izquierda de tu punto de partida. 
            Este emblema activará la llegada de Sif en forma de cachorro, quien, a pesar de su lentitud y daño moderado, servirá como distracción, permitiéndote recuperar salud o lanzar un contraataque. Ten en cuenta que alcanzarlo puede resultar complicado por la voracidad de los ataques de <a href="">Manus</a>.<br> <br>
            Antes de enfrentar a <a href="">Manus</a>, equipa objetos que recarguen tu estamina, como la <a href="">Flor Verde</a>, o utiliza anillos y escudos de alta estabilidad (por ejemplo, el <a href="">Gran Escudo de Artorias</a> o escudos mejorados) para soportar sus embestidas. 
            La clave reside en mantenerte cerca para bloquear sus ataques y contraatacar en los breves intervalos tras cada asalto. <br><br>
            Cuando <a href="">Manus</a> se prepara para lanzar un hechizo de energía oscura, la zona a su alrededor se ilumina. Esto te permite anticipar si vendrá una ola, lluvia o círculo de oscuridad, y reposicionarte: mueve a los costados para esquivar la ola, retrocede ante la lluvia, o acércate para evitar el círculo. 
            Existen momentos seguros para golpear, como cuando extiende su mano para un golpe horizontal, tras un salto o durante una pausa entre combos. Mantén siempre un escudo en alto y cuida tu estamina, ya que sus rápidas secuencias pueden dejarte vulnerable si no administras bien tu energía. <br><br>
            Para bloquear proyectiles oscuros, fija la mira en Manus y mantén el escudo levantado sin avanzar, evitando que la energía te alcance directamente. Si recibes varios golpes, retrocede diagonalmente para que el impacto se vea reducido. No olvides reparar tu equipo tras varios enfrentamientos, ya que los ataques sucesivos pueden desgastarlo considerablemente. <br><br>
            Si prefieres un estilo más evasivo, utiliza un arma a distancia y armadura ligera para moverte con agilidad. El bloqueo del <a href="">Colgante de Plata</a> es esencial en la segunda fase para neutralizar los ataques mágicos. Además, invocar a Sif te brindará el respiro necesario para disparar algunos tiros o curarte tras recibir daño.`,
    lore: `
      <a href="">Manus</a> era un humano primordial dotado de un alma extraordinaria: una masa viscosa y tibia de humanidad que encarnaba un inmenso <a href="">Alma Oscura</a>. Además de ser un hechicero, utilizaba un antiguo catalizador de madera, rústico pero imponente, capaz de funcionar como arma. Sus artes oscuras manipulaban esa Alma Oscura, otorgándole voluntad propia para lanzarla contra sus enemigos. 
      <a href="">Manus</a> también guardaba la mitad de un antiguo colgante de piedra imbuido de una poderosa magia negra, un objeto de incalculable valor que evocaba en él una dolorosa nostalgia por un ser querido perdido. Con el tiempo, <a href="">Manus</a> falleció y su cuerpo fue sepultado en las cuevas de la región, donde más tarde surgiría la civilización de Oolacile.
      <br><br>
      Tras el sacrificio de Gwyn para encender la <a href="">Primera Llama</a>, la serpiente primordial Kaathe llegó a <a href="">Oolacile</a> y, manipulando el destino del lugar, resucitó a <a href="">Manus</a> desde las profundidades de las mazmorras. <a href="">Kaathe</a>, en busca de forjar un potencial <a href="">Señor Oscuro</a>, encontró en <a href="">Manus</a> la clave para sus oscuros designios, transformándolo en el progenitor del <a href="">Abismo</a>. <br><br>
      La tragedia se profundizó cuando la familia real de Oolacile se apropió del preciado colgante, entregándoselo a la Princesa Anochecer de Oolacile. La obsesión y el desesperado anhelo de recuperarlo hicieron que Manus enloqueciera, desatando su Alma Oscura y transformándose en una bestia sombría, condenada a buscar eternamente su perdido tesoro. 
      La humanidad desbordada y fuera de control de Manus dio origen a un Abismo que se extendió amenazando con devorar la tierra, generando no solo incontables fantasmas con voluntad propia, sino también mutaciones grotescas en los habitantes de <a href="">Oolacile</a>, quienes se vieron consumidos por una corrupción inhumana. Los hechiceros del lugar, al borde de la locura, descubrieron artes abisales que infligían daño físico, una manifestación tangible de ese poder oscuro. <br><br>
      Para detener la expansión del Abismo, el Caballero Artorias se alzó en defensa de Oolacile. Con experiencia en la lucha contra esas fuerzas y protegido por un Colgante de Plata, Artorias y su leal compañero Sif se enfrentaron a Manus. Sin embargo, la imponente fuerza del Padre del Abismo resultó ser demasiado, y tras una encarnizada batalla, Artorias se vio consumido por la corrupción, dejando tras de sí un heroico legado marcado por su sacrificio y su esfuerzo por proteger a Sif. <br><br>
      En un giro fatal del destino, Manus llegó a recuperar su colgante secuestrando a la <a href="">Princesa Anochecer de Oolacile</a> y sumergiéndola en su Abismo. Sin embargo, una distorsión temporal lo llevó a perseguir una réplica del colgante ubicada en el futuro, de la cual extrajo a un no-muerto elegido. Este guerrero, transportado al pasado de <a href="">Oolacile</a>, se convirtió en el salvador destinado a enfrentar y derrotar a <a href="">Manus</a>, liberando así la tierra de la corrupción. 
      Tras rescatar a la <a href="">Princesa Anochecer de Oolacile</a>, ella se encontró en el futuro junto a su colgante, generándose una paradoja que, con el tiempo, sellaría su propia redención. Así, la leyenda llegó a contar que fue Artorias quien venció a <a href="">Manus</a> y su Abismo, preservando la memoria del caballero en un halo de honor y misterio.
    `,
    curiosities: [
      { 
        description: "En Dark Souls 2, la inmensa alma de Manus se fragmentó en esencias que, al fusionarse con la humanidad, dieron origen a cuatro hijas: Elana, personificación de la ira; Alsanna, del temor; Nadalia, de la soledad; y Nashandra, encarnación del deseo." 
      },
      { 
        description: "Manu es un concepto en el hinduismo que representa al hombre arquetípico y el progenitor de la humanidad, similar a la figura de Adán en la tradición bíblica." 
      },
    ],
  }
};
window.contentMappingHTML = window.contentMappingHTML || {};

document.addEventListener("DOMContentLoaded", function() {

  function updateContent(section) {
    const contentArea = document.getElementById("content-area");
    if (section === "jefes") {
      contentArea.innerHTML = `
      <h1>Jefes</h1>
      
      <!-- Grupo 1: Refugio de los no muertos -->
      <section class="boss-group">
        <h2 style="margin-bottom: 20px;">Refugio de los no muertos</h2>
        <hr style="border: 1px solid gold; width: 100%; margin-bottom: 20px;">
        <div class="cards-container">
          <div class="card">
            <!-- Asegúrate de usar la ruta correcta -->
            <img src="images/asilo.jpg" alt="Demonio del Refugio">
            <div class="card-overlay"></div>
            <div class="card-info">
              <h3>Demonio del Refugio</h3>
            </div>
          </div>
          <div class="card">
            <img src="images/salvaje.png" alt="Demonio Salvaje">
            <div class="card-overlay"></div>
            <div class="card-info">
              <h3>Demonio Salvaje</h3>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Grupo 2: Burgo de los no muertos/Parroquia de los no muertos -->
      <section class="boss-group">
        <h2 style="margin-bottom: 20px;">Burgo de los no muertos/Parroquia de los no muertos</h2>
        <hr style="border: 1px solid gold; width: 100%; margin-bottom: 20px;">
        <div class="cards-container">
          <div class="card">
            <img src="images/tauro.png" alt="Demonio de Tauro">
            <div class="card-overlay"></div>
            <div class="card-info">
              <h3>Demonio de Tauro</h3>
            </div>
          </div>
          <div class="card">
            <img src="images/aries.png" alt="Demonio de Aries">
            <div class="card-overlay"></div>
            <div class="card-info">
              <h3>Demonio de Aries</h3>
            </div>
          </div>
          <div class="card">
            <img src="images/campana.png" alt="Gárgolas Campana">
            <div class="card-overlay"></div>
            <div class="card-info">
              <h3>Gárgolas Campana</h3>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Grupo 3: Profundidades -->
      <section class="boss-group">
        <h2 style="margin-bottom: 20px;">Profundidades</h2>
        <hr style="border: 1px solid gold; width: 100%; margin-bottom: 20px;">
        <div class="cards-container">
          <div class="card">
            <img src="images/boquiabierto.png" alt="Dragón Boquiabierto">
            <div class="card-overlay"></div>
            <div class="card-info">
              <h3>Dragón Boquiabierto</h3>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Grupo 4: Ciudad Infestada / Dominios de Quelaag -->
      <section class="boss-group">
        <h2 style="margin-bottom: 20px;">Ciudad Infestada / Dominios de Queelag</h2>
        <hr style="border: 1px solid gold; width: 100%; margin-bottom: 20px;">
        <div class="cards-container">
          <div class="card">
            <img src="images/queelag.png" alt="Quelaag la Bruja del Caos">
            <div class="card-overlay"></div>
            <div class="card-info">
              <h3>Quelaag la Bruja del Caos</h3>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Grupo 5: Jardín tenebroso -->
      <section class="boss-group">
        <h2 style="margin-bottom: 20px;">Jardín tenebroso</h2>
        <hr style="border: 1px solid gold; width: 100%; margin-bottom: 20px;">
        <div class="cards-container">
          <div class="card">
            <img src="images/lunar.png" alt="Mariposa Lunar">
            <div class="card-overlay"></div>
            <div class="card-info">
              <h3>Mariposa Lunar</h3>
            </div>
          </div>
          <div class="card">
            <img src="images/sif.png" alt="Sif, el Gran Lobo Gris">
            <div class="card-overlay"></div>
            <div class="card-info">
              <h3>Sif, el Gran Lobo Gris</h3>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Grupo 6: Fortaleza de Sen -->
      <section class="boss-group">
        <h2 style="margin-bottom: 20px;">Fortaleza de Sen</h2>
        <hr style="border: 1px solid gold; width: 100%; margin-bottom: 20px;">
        <div class="cards-container">
          <div class="card">
            <img src="images/golem.png" alt="Golem de Hierro">
            <div class="card-overlay"></div>
            <div class="card-info">
              <h3>Golem de Hierro</h3>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Grupo 7: Anor Londo -->
      <section class="boss-group">
        <h2 style="margin-bottom: 20px;">Anor Londo</h2>
        <hr style="border: 1px solid gold; width: 100%; margin-bottom: 20px;">
        <div class="cards-container">
          <div class="card">
            <img src="images/gwyndolin.png" alt="Gwyndolin el Sol Oscuro">
            <div class="card-overlay"></div>
            <div class="card-info">
              <h3>Gwyndolin el Sol Oscuro</h3>
            </div>
          </div>
          <div class="card">
            <img src="images/ornstein.png" alt="Ornstein & Smough">
            <div class="card-overlay"></div>
            <div class="card-info">
              <h3>Ornstein & Smough</h3>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Grupo 8: Mundo pintado de Ariamis -->
      <section class="boss-group">
        <h2 style="margin-bottom: 20px;">Mundo pintado de Ariamis</h2>
        <hr style="border: 1px solid gold; width: 100%; margin-bottom: 20px;">
        <div class="cards-container">
          <div class="card">
            <img src="images/priscilla.png" alt="Priscilla la Mestiza">
            <div class="card-overlay"></div>
            <div class="card-info">
              <h3>Priscilla la Mestiza</h3>
            </div>
          </div>
        </div>
      </section>

      <!-- Grupo 8: Cueva de cristal -->
      <section class="boss-group">
        <h2 style="margin-bottom: 20px;">Los Archivos del duque / Cueva de cristal</h2>
        <hr style="border: 1px solid gold; width: 100%; margin-bottom: 20px;">
        <div class="cards-container">
          <div class="card">
            <img src="images/seath.png" alt="Seath el Descamado">
            <div class="card-overlay"></div>
            <div class="card-info">
              <h3>Seath el Descamado</h3>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Grupo 9: Las catacumbas -->
      <section class="boss-group">
        <h2 style="margin-bottom: 20px;">Las catacumbas</h2>
        <hr style="border: 1px solid gold; width: 100%; margin-bottom: 20px;">
        <div class="cards-container">
          <div class="card">
            <img src="images/molinete.png" alt="Molinete">
            <div class="card-overlay"></div>
            <div class="card-info">
              <h3>Molinete</h3>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Grupo 10: Tumba de los gigantes -->
      <section class="boss-group">
        <h2 style="margin-bottom: 20px;">Tumba de los gigantes</h2>
        <hr style="border: 1px solid gold; width: 100%; margin-bottom: 20px;">
        <div class="cards-container">
          <div class="card">
            <img src="images/nito.png" alt="Nito el Rey del Cementerio">
            <div class="card-overlay"></div>
            <div class="card-info">
              <h3>Nito el Rey del Cementerio</h3>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Grupo 11: Ruinas de Nuevo Londo -->
      <section class="boss-group">
        <h2 style="margin-bottom: 20px;">Ruinas de Nuevo Londo</h2>
        <hr style="border: 1px solid gold; width: 100%; margin-bottom: 20px;">
        <div class="cards-container">
          <div class="card">
            <img src="images/reyes.png" alt="Cuatro Reyes">
            <div class="card-overlay"></div>
            <div class="card-info">
              <h3>Cuatro Reyes</h3>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Grupo 12: Ruinas de los demonios -->
      <section class="boss-group">
        <h2 style="margin-bottom: 20px;">Ruinas de los demonios</h2>
        <hr style="border: 1px solid gold; width: 100%; margin-bottom: 20px;">
        <div class="cards-container">
          <div class="card">
            <img src="images/incesante.png" alt="Descarga Incesante">
            <div class="card-overlay"></div>
            <div class="card-info">
              <h3>Descarga Incesante</h3>
            </div>
          </div>
          <div class="card">
            <img src="images/sabio.png" alt="Sabio del Fuego Demoníaco">
            <div class="card-overlay"></div>
            <div class="card-info">
              <h3>Sabio del Fuego Demoníaco</h3>
            </div>
          </div>
          <div class="card">
            <img src="images/ciempies.png" alt="Demonio Ciempiés">
            <div class="card-overlay"></div>
            <div class="card-info">
              <h3>Demonio Ciempiés</h3>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Grupo 13: Izalith perdida -->
      <section class="boss-group">
        <h2 style="margin-bottom: 20px;">Izalith perdida</h2>
        <hr style="border: 1px solid gold; width: 100%; margin-bottom: 20px;">
        <div class="cards-container">
          <div class="card">
            <img src="images/bed.png" alt="Lecho del Caos">
            <div class="card-overlay"></div>
            <div class="card-info">
              <h3>Lecho del Caos</h3>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Grupo 14: Horno de la Llama original -->
      <section class="boss-group">
        <h2 style="margin-bottom: 20px;">Horno de la Llama original</h2>
        <hr style="border: 1px solid gold; width: 100%; margin-bottom: 20px;">
        <div class="cards-container">
          <div class="card">
            <img src="images/gwyn.png" alt="Gwyn, Señor de la ceniza">
            <div class="card-overlay"></div>
            <div class="card-info">
              <h3>Gwyn, Señor de la Ceniza</h3>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Grupo 15: Jardín del Santuario -->
      <section class="boss-group">
        <h2 style="margin-bottom: 20px;">Jardín del Santuario</h2>
        <hr style="border: 1px solid gold; width: 100%; margin-bottom: 20px;">
        <div class="cards-container">
          <div class="card">
            <img src="images/santuario.png" alt="Guardián del Santuario">
            <div class="card-overlay"></div>
            <div class="card-info">
              <h3>Guardián del Santuario</h3>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Grupo 16: Bosque Real -->
      <section class="boss-group">
        <h2 style="margin-bottom: 20px;">Bosque Real</h2>
        <hr style="border: 1px solid gold; width: 100%; margin-bottom: 20px;">
        <div class="cards-container">
          <div class="card">
            <img src="images/artorias.png" alt="Caballero Artorias">
            <div class="card-overlay"></div>
            <div class="card-info">
              <h3>Caballero Artorias</h3>
            </div>
          </div>
          <div class="card">
            <img src="images/kalameet.png" alt="Kalameet, el Dragón Negro">
            <div class="card-overlay"></div>
            <div class="card-info">
              <h3>Kalameet, el Dragón Negro</h3>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Grupo 17: Sima del Abismo -->
      <section class="boss-group">
        <h2 style="margin-bottom: 20px;">Sima del Abismo</h2>
        <hr style="border: 1px solid gold; width: 100%; margin-bottom: 20px;">
        <div class="cards-container">
          <div class="card">
            <img src="images/manus.png" alt="Manus, Padre del Abismo">
            <div class="card-overlay"></div>
            <div class="card-info">
              <h3>Manus, Padre del Abismo</h3>
            </div>
          </div>
        </div>
      </section>
    `
    addCardClickListeners();
    } else if (section === "lugares") {
    document.getElementById("content-area").innerHTML = window.contentMappingHTML.lugares || "";
    if (typeof window.addAreaCardListeners === "function") window.addAreaCardListeners();
    } else if (section === "armas") {
      loadWeaponsScript();
    } else {
      contentArea.innerHTML = `<p>Contenido no disponible para la sección ${section}.</p>`;
    }
}

let currentIndex = 0;
let isTransitioning = false;
const bossList = [
  "Demonio del Refugio",
  "Demonio Salvaje",
  "Demonio de Tauro",
  "Demonio de Aries",
  "Gárgolas Campana",
  "Dragón Boquiabierto",
  "Quelaag la Bruja del Caos",
  "Mariposa Lunar",
  "Sif, el Gran Lobo Gris",
  "Golem de Hierro",
  "Gwyndolin el Sol Oscuro",
  "Ornstein & Smough",
  "Priscilla la Mestiza",
  "Seath el Descamado",
  "Molinete",
  "Nito el Rey del Cementerio",
  "Cuatro Reyes",
  "Descarga Incesante",
  "Sabio del Fuego Demoníaco",
  "Demonio Ciempiés",
  "Lecho del Caos",
  "Gwyn, Señor de la Ceniza",
  "Guardián del Santuario",
  "Caballero Artorias",
  "Kalameet, el Dragón Negro",
  "Manus, Padre del Abismo"
];

function openBossModal(bossName, direction = 'next') {
  if (isTransitioning) return;
  isTransitioning = true;

  currentIndex = bossList.indexOf(bossName);
  const modal = document.getElementById("boss-modal");
  const bossDetailsContainer = document.getElementById("boss-details");
  const details = window.bossDetails[bossName];
  const existingDetail = bossDetailsContainer.querySelector('.boss-detail');

  if (!details) {
    bossDetailsContainer.innerHTML = `<p>No hay información disponible para ${bossName}.</p>`;
    modal.classList.add("active");
    isTransitioning = false;
    return;
  }

  let statsTable = "";
  if (bossName === "Ornstein & Smough") {
    const levels = ["NG", "NG+1", "NG+2", "NG+3", "NG+4", "NG+5", "NG+6"];
    let ornsteinLife = [], superOrnsteinLife = [], smoughLife = [], superSmoughLife = [];
    for (let i = 0; i < levels.length; i++) {
      const statKey = "ng" + i;
      const lifeStat = details.stats[statKey];
      if (lifeStat) {
        const parts = lifeStat.split("/");
        ornsteinLife.push(parts[0] || "-");
        superOrnsteinLife.push(parts[1] || "-");
        smoughLife.push(parts[2] || "-");
        superSmoughLife.push(parts[3] || "-");
      } else {
        ornsteinLife.push("-");
        superOrnsteinLife.push("-");
        smoughLife.push("-");
        superSmoughLife.push("-");
      }
    }
    statsTable = `
      <table>
        <tr>
          <th></th>
          ${levels.map(level => `<th>${level}</th>`).join("")}
        </tr>
        <tr>
          <th>Vida (Ornstein)</th>
          ${ornsteinLife.map(val => `<td>${val}</td>`).join("")}
        </tr>
        <tr>
          <th>Vida (Super Ornstein)</th>
          ${superOrnsteinLife.map(val => `<td>${val}</td>`).join("")}
        </tr>
        <tr>
          <th>Vida (Smough)</th>
          ${smoughLife.map(val => `<td>${val}</td>`).join("")}
        </tr>
        <tr>
          <th>Vida (Super Smough)</th>
          ${superSmoughLife.map(val => `<td>${val}</td>`).join("")}
        </tr>
        <tr>
          <th>Almas</th>
          <td>${details.stats.almas0 || 0}</td>
          <td>${details.stats.almas1 || 0}</td>
          <td>${details.stats.almas2 || 0}</td>
          <td>${details.stats.almas3 || 0}</td>
          <td>${details.stats.almas4 || 0}</td>
          <td>${details.stats.almas5 || 0}</td>
          <td>${details.stats.almas6 || 0}</td>
        </tr>
      </table>
    `;
  } else {
    statsTable = `
      <table>
        <tr>
          <th></th>
          <th>NG</th>
          <th>NG+1</th>
          <th>NG+2</th>
          <th>NG+3</th>
          <th>NG+4</th>
          <th>NG+5</th>
          <th>NG+6</th>
        </tr>
        <tr>
          <th>Vida</th>
          <td>${details.stats.ng0 || 0}</td>
          <td>${details.stats.ng1 || 0}</td>
          <td>${details.stats.ng2 || 0}</td>
          <td>${details.stats.ng3 || 0}</td>
          <td>${details.stats.ng4 || 0}</td>
          <td>${details.stats.ng5 || 0}</td>
          <td>${details.stats.ng6 || 0}</td>
        </tr>
        <tr>
          <th>Almas</th>
          <td>${details.stats.almas0 || 0}</td>
          <td>${details.stats.almas1 || 0}</td>
          <td>${details.stats.almas2 || 0}</td>
          <td>${details.stats.almas3 || 0}</td>
          <td>${details.stats.almas4 || 0}</td>
          <td>${details.stats.almas5 || 0}</td>
          <td>${details.stats.almas6 || 0}</td>
        </tr>
      </table>
    `;
  }

  const summoningSection = details.summoning
    ? `<div class="boss-summoning"><h3 style="font-size: 28px;">Invocación</h3><hr class="section-divider">${
         Array.isArray(details.summoning)
           ? `<ul>${details.summoning.map(inv => `<li>${inv}</li>`).join('')}</ul>`
           : `<p>${details.summoning}</p>`
       }</div>`
    : '';

  const weakTable = details.weaknesses && details.weaknesses.length > 0
    ? `<ul class="weaknesses-list">${details.weaknesses.map(weak => `<li>${weak}</li>`).join("")}</ul>`
    : `<p>Ninguna</p>`;

  const dropsList = details.dropsDetailed
    ? `<ul>${details.dropsDetailed.map(drop => `<li>${drop.item} (${drop.percentage})</li>`).join("")}</ul>`
    : `<p>${details.drop || "Sin drop específico"}</p>`;

  let movesList = "";
  if (bossName === "Ornstein & Smough") {
    const bossMoves = details.moves;
    movesList += `<div class="boss-moves-divisions">`;
    movesList += `<div class="boss-move-division" style="margin-bottom: 20px;">
                    <h4 style="font-size: 28px; text-align: left; margin-bottom: 10px;">Ornstein</h4>
                    <ul style="list-style-position: inside; text-align: left;">${
                      bossMoves.ornstein
                        ? bossMoves.ornstein.map(move => `<li><strong class="move-name">${move.name}:</strong> ${move.description}</li>`).join("")
                        : `<li>Sin movimientos definidos para Ornstein</li>`
                    }</ul>
                  </div>`;
    movesList += `<div class="boss-move-division" style="margin-bottom: 20px;">
                    <h4 style="font-size: 28px; text-align: left; margin-bottom: 10px;">Super Ornstein</h4>
                    <ul style="list-style-position: inside; text-align: left;">${
                      bossMoves.superOrnstein
                        ? bossMoves.superOrnstein.map(move => `<li><strong class="move-name">${move.name}:</strong> ${move.description}</li>`).join("")
                        : `<li>Sin movimientos definidos para Super Ornstein</li>`
                    }</ul>
                  </div>`;
    movesList += `<div class="boss-move-division" style="margin-bottom: 20px;">
                    <h4 style="font-size: 28px; text-align: left; margin-bottom: 10px;">Smough</h4>
                    <ul style="list-style-position: inside; text-align: left;">${
                      bossMoves.smough
                        ? bossMoves.smough.map(move => `<li><strong class="move-name">${move.name}:</strong> ${move.description}</li>`).join("")
                        : `<li>Sin movimientos definidos para Smough</li>`
                    }</ul>
                  </div>`;
    movesList += `<div class="boss-move-division" style="margin-bottom: 20px;">
                    <h4 style="font-size: 28px; text-align: left; margin-bottom: 10px;">Super Smough</h4>
                    <ul style="list-style-position: inside; text-align: left;">${
                      bossMoves.superSmough
                        ? bossMoves.superSmough.map(move => `<li><strong class="move-name">${move.name}:</strong> ${move.description}</li>`).join("")
                        : `<li>Sin movimientos definidos para Super Smough</li>`
                    }</ul>
                  </div>`;
    movesList += `</div>`;
  } else {
    movesList = details.moves && Array.isArray(details.moves)
      ? `<ul>${details.moves.map(move => `<li><strong class="move-name">${move.name}:</strong> ${move.description}</li>`).join("")}</ul>`
      : `<p>No se han especificado movimientos.</p>`;
  }

  const strategiesSection = details.bestStrategies 
    ? `<p>${details.bestStrategies}</p>`
    : `<p>No se han especificado estrategias.</p>`;

  const loreSection = `
    <div class="boss-lore">
      <h3 style="font-size: 28px;">Lore</h3>
      <hr class="section-divider">
      ${details.lore ? `<p>${details.lore}</p>` : `<p>No hay información de lore.</p>`}
    </div>
  `;

  const curiositiesSection = details.curiosities && details.curiosities.length > 0
    ? `<div class="boss-curiosities">
         <h3 style="font-size: 28px;">Curiosidades</h3>
         <hr class="section-divider">
         <ul>${details.curiosities.map(curiosity => `<li>${curiosity.description}</li>`).join('')}</ul>
       </div>`
    : `<div class="boss-curiosities">
         <h3 style="font-size: 28px;">Curiosidades</h3>
         <hr class="section-divider">
         <p>No hay información de curiosidades.</p>
       </div>`;

  const newBossHTML = `
    <div class="boss-detail">
      <img src="${getBossImgSrc(bossName)}" alt="${bossName}" class="boss-detail-img">
      <div class="boss-detail-info">
        <h2 style="text-align: center; font-size: 40px;">${bossName}</h2>
        <div class="boss-stats">
          <h3 style="font-size: 28px;">Estadísticas</h3>
          <hr class="section-divider">
          ${statsTable}
        </div>
        ${summoningSection}
        <div class="boss-immunities">
          <h3 style="font-size: 28px;">Debilidades</h3>
          <hr class="section-divider">
          ${weakTable}
        </div>
        <div class="boss-drops">
          <h3 style="font-size: 28px;">Drops</h3>
          <hr class="section-divider">
          ${dropsList}
        </div>
        <div class="boss-moves">
          <h3 style="font-size: 28px;">Movimientos</h3>
          <hr class="section-divider">
          ${movesList}
        </div>
        <div class="boss-strategies">
          <h3 style="font-size: 28px;">Estrategias</h3>
          <hr class="section-divider">
          ${strategiesSection}
        </div>
        ${loreSection}
        ${curiositiesSection}
      </div>
    </div>
  `;

  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = newBossHTML;
  const newDetail = tempDiv.firstElementChild;
  const existingDetail2 = bossDetailsContainer.querySelector('.boss-detail');

  if (!modal.classList.contains("active") || !existingDetail2) {
    bossDetailsContainer.innerHTML = newBossHTML;
    const newElem = bossDetailsContainer.querySelector('.boss-detail');
    newElem.classList.add('fade-in');
    newElem.addEventListener("animationend", function handleAnimationEnd() {
      newElem.removeEventListener("animationend", handleAnimationEnd);
      isTransitioning = false;
    });
    setTimeout(() => { isTransitioning = false; }, 600);
  } else {
    bossDetailsContainer.appendChild(newDetail);
    void newDetail.offsetWidth;
    const exitClass = direction === 'next' ? 'slide-out-left' : 'slide-out-right';
    const enterClass = direction === 'next' ? 'slide-in-right' : 'slide-in-left';
    requestAnimationFrame(() => {
      newDetail.classList.add(enterClass);
    });
    existingDetail2.classList.add(exitClass);
    newDetail.addEventListener("animationend", function handleAnimationEnd() {
      if (existingDetail2) existingDetail2.remove();
      newDetail.removeEventListener("animationend", handleAnimationEnd);
      isTransitioning = false;
    });
    setTimeout(() => { isTransitioning = false; }, 600);
  }
  modal.classList.add("active");
}

function getBossImgSrc(bossName) {
  if (bossName === "Demonio del Refugio") return "images/asilo.jpg";
  if (bossName === "Demonio Salvaje") return "images/salvaje.png";
  if (bossName === "Demonio de Tauro") return "images/tauro.png";
  if (bossName === "Demonio de Aries") return "images/aries.png";
  if (bossName === "Gárgolas Campana") return "images/campana.png";
  if (bossName === "Dragón Boquiabierto") return "images/boquiabierto.png";
  if (bossName === "Quelaag la Bruja del Caos") return "images/queelag.png";
  if (bossName === "Mariposa Lunar") return "images/lunar.png";
  if (bossName === "Sif, el Gran Lobo Gris") return "images/sif.png";
  if (bossName === "Golem de Hierro") return "images/golem.png";
  if (bossName === "Gwyndolin el Sol Oscuro") return "images/gwyndolin.png";
  if (bossName === "Ornstein & Smough") return "images/ornstein.png";
  if (bossName === "Priscilla la Mestiza") return "images/priscilla.png";
  if (bossName === "Seath el Descamado") return "images/seath.png";
  if (bossName === "Molinete") return "images/molinete.png";
  if (bossName === "Nito el Rey del Cementerio") return "images/nito.png";
  if (bossName === "Cuatro Reyes") return "images/reyes.png";
  if (bossName === "Descarga Incesante") return "images/incesante.png";
  if (bossName === "Sabio del Fuego Demoníaco") return "images/sabio.png";
  if (bossName === "Demonio Ciempiés") return "images/ciempies.png";
  if (bossName === "Lecho del Caos") return "images/bed.png";
  if (bossName === "Gwyn, Señor de la Ceniza") return "images/gwyn.png";
  if (bossName === "Guardián del Santuario") return "images/santuario.png";
  if (bossName === "Caballero Artorias") return "images/artorias.png";
  if (bossName === "Kalameet, el Dragón Negro") return "images/kalameet.png";
  if (bossName === "Manus, Padre del Abismo") return "images/manus.png";
  return "";
}

function closeBossModal() {
  const modal = document.getElementById("boss-modal");
  modal.classList.remove("active");
}

document.querySelector(".close-button").addEventListener("click", closeBossModal);
window.addEventListener("click", function(event) {
  const modal = document.getElementById("boss-modal");
  if (event.target === modal) closeBossModal();
});

function loadWeaponsScript() {
  if (window.weaponsScriptLoaded) {
    document.getElementById("content-area").innerHTML = window.contentMappingHTML.armas;
    if (typeof window.addWeaponCardListeners === "function") window.addWeaponCardListeners();
    return;
  }
  const script = document.createElement("script");
  script.src = "weapons.js";
  script.onload = function() {
    window.weaponsScriptLoaded = true;
    document.getElementById("content-area").innerHTML = window.contentMappingHTML.armas;
    if (typeof window.addWeaponCardListeners === "function") window.addWeaponCardListeners();
  };
  document.body.appendChild(script);
}

function addCardClickListeners() {
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    card.addEventListener("click", function() {
      const bossName = this.querySelector("h3").innerText;
      openBossModal(bossName);
    });
  });
}

const navLinks = document.querySelectorAll(".nav-item");
navLinks.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const section = this.getAttribute("data-section");
    updateContent(section);
  });
});

addCardClickListeners();
updateContent("jefes");

document.querySelector(".arrow.arrow-right").addEventListener("click", function() {
  if (isTransitioning) return;
  currentIndex = (currentIndex + 1) % bossList.length;
  openBossModal(bossList[currentIndex], 'next');
});

document.querySelector(".arrow.arrow-left").addEventListener("click", function() {
  if (isTransitioning) return;
  currentIndex = (currentIndex - 1 + bossList.length) % bossList.length;
  openBossModal(bossList[currentIndex], 'prev');
});
});