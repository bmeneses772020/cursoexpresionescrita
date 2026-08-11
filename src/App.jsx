import React, { useState, useEffect } from "react";
import {
  FileText,
  PlayCircle,
  HelpCircle,
  CheckCircle2,
  Circle,
  ListChecks,
  RotateCcw,
  ChevronRight,
  BookOpen,
  Link2,
  Lock,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* CONTENIDO DEL CURSO                                                 */
/* ------------------------------------------------------------------ */

const COURSE = {
  title: "Expresión Escrita y Comprensión Lectora",
  subtitle: "Curso de autogestión",
  modules: [
    {
      id: "m1",
      label: "Módulo 1",
      title: "Fundamentos de la expresión escrita",
      lessons: [
        {
          id: "l1-1",
          type: "texto",
          title: "Acerca del curso",
          duration: "4 min",
          paragraphs: [
            "Este curso de autogestión está dirigido a estudiantes universitarios que quieren mejorar su expresión escrita y su comprensión lectora para producir textos claros y comprender mejor lo que leen. No requiere conocimientos previos.",
            "Está organizado en seis módulos que avanzan de lo general a lo específico: fundamentos de la escritura, estructura del párrafo y el texto, gramática y puntuación aplicada, estrategias de comprensión lectora, técnicas de resumen y síntesis, y revisión y edición de textos. Cada módulo cierra con un cuestionario breve de autoevaluación y una lista de chequeo.",
            "La duración estimada es de aproximadamente 3 horas, distribuidas en lecturas cortas y videos de apoyo. Puedes avanzar a tu propio ritmo: tu progreso se guarda automáticamente en este sitio.",
          ],
          tip: "Sugerencia: ten a mano un texto propio (un ensayo, un informe, o cualquier trabajo que hayas escrito) para ir aplicando cada técnica mientras avanzas.",
        },
        {
          id: "l1-2",
          type: "texto",
          title: "¿Qué es la expresión escrita y por qué importa?",
          duration: "6 min",
          paragraphs: [
            "Escribir bien no es lo mismo que escribir mucho: es comunicar una idea con claridad, en el menor número de palabras necesarias, de modo que el lector la entienda sin esfuerzo adicional. La expresión escrita eficaz depende de tres elementos: claridad (que la idea se entienda), coherencia (que las ideas se conecten lógicamente) y concisión (que no sobren palabras).",
            "Escribir con claridad no es un talento innato: es una habilidad que se entrena, igual que la comprensión lectora — la capacidad de extraer, interpretar y evaluar el significado de un texto. Ambas habilidades están profundamente conectadas: quien lee de forma crítica suele escribir con mayor precisión, porque reconoce en su propio texto los mismos defectos que identifica al leer a otros.",
            "En la universidad, la expresión escrita y la comprensión lectora son la base de casi cualquier tarea académica: desde un ensayo corto hasta una tesis, pasando por resúmenes, informes y exámenes escritos.",
          ],
        },
        {
          id: "l1-3",
          type: "video",
          title: "Video introductorio: escribir y leer con propósito",
          duration: "3–5 min",
          description:
            "Agrega aquí el enlace a tu video introductorio (YouTube). El enlace queda guardado en este sitio.",
        },
        {
          id: "l1-4",
          type: "quiz",
          title: "Autoevaluación diagnóstica",
          duration: "4 preguntas",
          questions: [
            {
              q: "¿Cuáles son los tres elementos de una expresión escrita eficaz?",
              options: [
                "Claridad, coherencia y concisión",
                "Ortografía, extensión y vocabulario complejo",
                "Rima, ritmo y estilo",
                "Longitud, formalidad y firma",
              ],
              correct: 0,
              explanation:
                "Un texto eficaz es claro (se entiende), coherente (las ideas se conectan lógicamente) y conciso (sin palabras de más).",
            },
            {
              q: "La comprensión lectora se refiere a...",
              options: [
                "Memorizar un texto palabra por palabra",
                "Extraer, interpretar y evaluar el significado de un texto",
                "Leer en voz alta con fluidez",
                "Contar cuántas páginas tiene un texto",
              ],
              correct: 1,
              explanation: "Es una habilidad activa: no basta con decodificar palabras, hay que interpretar y evaluar el significado.",
            },
            {
              q: "Escribir con claridad es principalmente...",
              options: [
                "Un talento innato que no se puede entrenar",
                "Una habilidad que se entrena con práctica",
                "Algo que solo importa en literatura",
                "Lo mismo que escribir con muchas palabras",
              ],
              correct: 1,
              explanation: "Como cualquier habilidad, la escritura clara mejora con práctica deliberada, no depende solo del talento.",
            },
            {
              q: "¿Por qué están conectadas la escritura y la lectura?",
              options: [
                "No tienen relación entre sí",
                "Quien lee críticamente suele escribir con más precisión",
                "Porque ambas usan la misma ortografía",
                "Porque se enseñan en la misma clase siempre",
              ],
              correct: 1,
              explanation: "Leer de forma crítica entrena la misma mirada que permite detectar y corregir problemas en la propia escritura.",
            },
          ],
        },
        {
          id: "l1-5",
          type: "checklist",
          title: "Lista de chequeo: fundamentos",
          duration: "6 ítems",
          intro:
            "Antes de avanzar al siguiente módulo, marca los puntos que ya puedes responder con seguridad.",
          items: [
            "Entiendo qué significa escribir con claridad, coherencia y concisión.",
            "Sé qué es la comprensión lectora y por qué es una habilidad activa, no pasiva.",
            "Reconozco que la escritura es una habilidad entrenable, no un talento fijo.",
            "Comprendo la relación entre leer críticamente y escribir con precisión.",
            "Tengo claro cómo está organizado este curso (6 módulos + autoevaluaciones).",
            "Sé que mi progreso se guarda automáticamente en este sitio.",
          ],
        },
      ],
    },
    {
      id: "m2",
      label: "Módulo 2",
      title: "Estructura del párrafo y el texto",
      lessons: [
        {
          id: "l2-1",
          type: "texto",
          title: "El párrafo: unidad básica del texto",
          duration: "6 min",
          paragraphs: [
            "El párrafo es la unidad básica de organización de un texto: agrupa un conjunto de oraciones que desarrollan una sola idea central. Un párrafo bien construido tiene tres partes: una oración temática que presenta la idea principal, oraciones de desarrollo que la explican, ejemplifican o argumentan, y —cuando corresponde— una oración de cierre que conecta con el párrafo siguiente.",
            "Un error frecuente es mezclar varias ideas dentro de un mismo párrafo, lo que obliga al lector a hacer un esfuerzo extra para separarlas. La regla práctica es simple: si una idea cambia, el párrafo también debería cambiar.",
            "La extensión de un párrafo no está fijada por una norma, pero como referencia general, entre 80 y 150 palabras suele ser suficiente para desarrollar una idea sin diluirla ni saturarla.",
          ],
        },
        {
          id: "l2-2",
          type: "texto",
          title: "Coherencia y cohesión: cómo conectar las ideas",
          duration: "7 min",
          paragraphs: [
            "La coherencia es la propiedad que hace que un texto tenga sentido como un todo: las ideas se relacionan lógicamente entre sí y con el tema general. La cohesión, en cambio, es el conjunto de recursos lingüísticos —conectores, pronombres, sinónimos— que unen las oraciones y los párrafos entre sí a nivel de superficie.",
            "Un texto puede ser gramaticalmente correcto oración por oración y, aun así, no ser coherente si las ideas saltan sin conexión lógica. Los conectores cumplen un papel clave: 'sin embargo' y 'no obstante' señalan contraste; 'además' y 'asimismo' suman ideas; 'por lo tanto' y 'en consecuencia' indican una conclusión; 'por ejemplo' introduce una ilustración.",
            "Usar los conectores correctos —no solo cualquiera— es lo que permite que el lector siga el razonamiento sin perderse.",
          ],
          tip: "Sugerencia: subraya los conectores de un párrafo tuyo y verifica si cada uno refleja realmente la relación lógica que quieres expresar.",
        },
        {
          id: "l2-3",
          type: "video",
          title: "Video: cómo estructurar un párrafo",
          duration: "3–5 min",
          description:
            "Agrega aquí el enlace a un video que muestre, con ejemplos, cómo se arma un párrafo bien estructurado.",
        },
        {
          id: "l2-4",
          type: "quiz",
          title: "Cuestionario: estructura del párrafo y el texto",
          duration: "4 preguntas",
          questions: [
            {
              q: "¿Qué es la oración temática de un párrafo?",
              options: [
                "La que presenta la idea principal del párrafo",
                "Siempre la última oración",
                "Una oración decorativa sin función específica",
                "La oración más larga del párrafo",
              ],
              correct: 0,
              explanation: "La oración temática presenta la idea central que el resto del párrafo desarrolla.",
            },
            {
              q: "¿Cuál es la regla práctica para decidir cuándo cambiar de párrafo?",
              options: [
                "Cuando cambia la idea central",
                "Cada tres oraciones exactas",
                "Nunca — un texto debe tener un solo párrafo",
                "Cada vez que se usa una coma",
              ],
              correct: 0,
              explanation: "Un cambio de idea central es la señal para iniciar un nuevo párrafo.",
            },
            {
              q: "La cohesión se refiere a...",
              options: [
                "Los recursos lingüísticos que conectan oraciones y párrafos",
                "La ortografía correcta",
                "La extensión total del texto",
                "El tipo de letra usado",
              ],
              correct: 0,
              explanation: "La cohesión son los conectores, pronombres y otros recursos que unen el texto a nivel de superficie.",
            },
            {
              q: "El conector 'sin embargo' se usa para señalar...",
              options: ["Contraste", "Suma de ideas", "Conclusión", "Ejemplo"],
              correct: 0,
              explanation: "'Sin embargo' y 'no obstante' introducen una idea que contrasta con la anterior.",
            },
          ],
        },
        {
          id: "l2-5",
          type: "checklist",
          title: "Lista de chequeo: estructura",
          duration: "6 ítems",
          intro: "Usa esta lista para revisar la estructura de tus propios párrafos y textos.",
          items: [
            "Cada uno de mis párrafos desarrolla una sola idea central.",
            "Mis párrafos tienen una oración temática identificable.",
            "Reviso que mis párrafos no mezclen varias ideas distintas.",
            "Uso conectores apropiados para el tipo de relación que quiero expresar (contraste, suma, conclusión, ejemplo).",
            "Mi texto tiene coherencia: las ideas se conectan lógicamente entre sí.",
            "La extensión de mis párrafos es razonable (ni muy cortos ni excesivamente largos).",
          ],
        },
      ],
    },
    {
      id: "m3",
      label: "Módulo 3",
      title: "Gramática y puntuación aplicada",
      lessons: [
        {
          id: "l3-1",
          type: "texto",
          title: "Signos de puntuación: la coma y el punto",
          duration: "7 min",
          paragraphs: [
            "La coma marca una pausa breve dentro de la oración y cumple funciones precisas: separa elementos de una enumeración ('compré libros, cuadernos y lápices'), aísla incisos o aclaraciones ('el autor, según los críticos, fue innovador'), y antecede a conectores como 'pero', 'aunque' o 'sin embargo' cuando introducen una idea contraria.",
            "Un error frecuente es la 'coma entre sujeto y verbo': nunca se coloca una coma entre el sujeto de una oración y su verbo, aunque el sujeto sea largo. 'Los estudiantes que asistieron a la conferencia, presentaron sus conclusiones' es incorrecto; sin coma es correcto.",
            "El punto cierra una oración con sentido completo. El punto y seguido continúa en la misma línea de ideas; el punto y aparte inicia un nuevo párrafo cuando cambia sustancialmente el tema.",
          ],
        },
        {
          id: "l3-2",
          type: "texto",
          title: "Errores frecuentes de concordancia y régimen",
          duration: "7 min",
          paragraphs: [
            "La concordancia es la coincidencia gramatical entre las palabras de una oración: el sujeto y el verbo deben coincidir en número y persona ('el grupo de estudiantes llegó', no 'llegaron', porque el sujeto gramatical es 'el grupo', singular). Los sustantivos y sus adjetivos deben coincidir en género y número ('una decisión difícil', no 'un decisión difícil').",
            "El régimen verbal se refiere a la preposición que exige cada verbo: se dice 'consiste en', no 'consiste de'; 'influir en', no 'influir sobre' o 'influir a'; 'basarse en', no 'basar de'. Estos errores son frecuentes incluso en textos académicos.",
            "Un dequeísmo agrega un 'de' innecesario ('pienso de que' en vez de 'pienso que'); un queísmo omite un 'de' necesario ('me acuerdo que' en vez de 'me acuerdo de que').",
          ],
          tip: "Sugerencia: si dudas si un verbo lleva 'de' o no, busca su régimen en un diccionario en línea antes de usarlo en un texto formal.",
        },
        {
          id: "l3-3",
          type: "video",
          title: "Video: puntuación en la práctica",
          duration: "3–5 min",
          description:
            "Agrega aquí el enlace a un video con ejemplos reales de uso correcto e incorrecto de la coma y el punto.",
        },
        {
          id: "l3-4",
          type: "quiz",
          title: "Cuestionario: gramática y puntuación",
          duration: "4 preguntas",
          questions: [
            {
              q: "¿Cuándo se coloca coma entre el sujeto y el verbo de una oración?",
              options: [
                "Nunca, aunque el sujeto sea largo",
                "Siempre que el sujeto tenga más de cinco palabras",
                "Solo si el verbo está en pasado",
                "Cuando el sujeto incluye una lista",
              ],
              correct: 0,
              explanation: "La coma entre sujeto y verbo es incorrecta siempre, sin importar la extensión del sujeto.",
            },
            {
              q: "'El grupo de estudiantes llegó' es correcto porque...",
              options: [
                "El sujeto gramatical 'el grupo' es singular",
                "Siempre se usa el verbo en singular",
                "'Estudiantes' es el sujeto y exige plural",
                "No es correcto: debería decir 'llegaron'",
              ],
              correct: 0,
              explanation: "El núcleo del sujeto es 'grupo' (singular), no 'estudiantes', por eso el verbo va en singular.",
            },
            {
              q: "'Pienso de que esto es correcto' es un ejemplo de...",
              options: ["Dequeísmo", "Queísmo", "Concordancia correcta", "Uso correcto de coma"],
              correct: 0,
              explanation: "Se agrega un 'de' innecesario antes de 'que': lo correcto es 'pienso que'.",
            },
            {
              q: "El verbo 'consiste' exige la preposición...",
              options: ["En", "De", "A", "Con"],
              correct: 0,
              explanation: "El régimen correcto es 'consiste en', no 'consiste de'.",
            },
          ],
        },
        {
          id: "l3-5",
          type: "checklist",
          title: "Lista de chequeo: gramática y puntuación",
          duration: "6 ítems",
          intro: "Revisa tu propio texto con esta lista antes de darlo por terminado.",
          items: [
            "No coloco comas entre el sujeto y el verbo de mis oraciones.",
            "Reviso que mis sujetos y verbos concuerden en número y persona.",
            "Verifico la concordancia de género y número entre sustantivos y adjetivos.",
            "Uso las preposiciones correctas según el régimen de cada verbo (consiste en, influir en, basarse en).",
            "Reviso mi texto en busca de dequeísmos y queísmos.",
            "Uso el punto y aparte cuando cambio sustancialmente de tema.",
          ],
        },
      ],
    },
    {
      id: "m4",
      label: "Módulo 4",
      title: "Estrategias de comprensión lectora",
      lessons: [
        {
          id: "l4-1",
          type: "texto",
          title: "Antes de leer: propósito y predicción",
          duration: "6 min",
          paragraphs: [
            "La comprensión lectora mejora notablemente cuando el lector define un propósito antes de empezar: no es lo mismo leer para encontrar un dato puntual que leer para comprender un argumento completo. Antes de leer, conviene revisar el título, los subtítulos y cualquier resumen disponible para predecir de qué tratará el texto y activar el conocimiento previo sobre el tema.",
            "Esta etapa —llamada lectura de reconocimiento— no reemplaza la lectura completa, pero orienta la atención hacia lo que realmente importa y reduce el tiempo de comprensión posterior.",
            "Definir preguntas antes de leer ('¿qué necesito saber de este texto?') convierte la lectura en una búsqueda activa de respuestas, en lugar de un recorrido pasivo palabra por palabra.",
          ],
        },
        {
          id: "l4-2",
          type: "texto",
          title: "Durante la lectura: idea principal e inferencias",
          duration: "7 min",
          paragraphs: [
            "La idea principal es la afirmación central que el autor sostiene en un texto o párrafo; las ideas secundarias la explican, ejemplifican o matizan. Identificar la idea principal exige distinguirla de los detalles: no siempre está en la primera oración, y a veces debe inferirse a partir del conjunto del párrafo.",
            "Una inferencia es una conclusión que el lector construye a partir de lo que el texto dice explícitamente, combinado con su propio conocimiento. Inferir no es adivinar: debe apoyarse en evidencia textual concreta, no en suposiciones sin fundamento.",
            "Una estrategia útil es formular la idea principal de un párrafo en una sola oración, con tus propias palabras, sin mirar el texto — si no puedes hacerlo, probablemente necesitas releer con más atención.",
          ],
          tip: "Sugerencia: después de leer cada párrafo, detente unos segundos y pregúntate '¿de qué trató esto, en una frase?' antes de continuar.",
        },
        {
          id: "l4-3",
          type: "video",
          title: "Video: estrategias de lectura activa",
          duration: "3–5 min",
          description:
            "Agrega aquí el enlace a un video que demuestre cómo aplicar estas estrategias con un texto real.",
        },
        {
          id: "l4-4",
          type: "quiz",
          title: "Cuestionario: comprensión lectora",
          duration: "4 preguntas",
          questions: [
            {
              q: "Definir un propósito de lectura antes de empezar sirve para...",
              options: [
                "Orientar la atención hacia lo relevante",
                "Leer más rápido sin entender nada",
                "Evitar tener que leer el texto completo",
                "Memorizar el texto palabra por palabra",
              ],
              correct: 0,
              explanation: "Saber qué se busca antes de leer permite enfocar la atención en lo que realmente importa.",
            },
            {
              q: "La idea principal de un párrafo...",
              options: [
                "Siempre está en la primera oración",
                "Puede requerir inferencia a partir del conjunto del párrafo",
                "Nunca puede inferirse",
                "Es lo mismo que un detalle secundario",
              ],
              correct: 1,
              explanation: "No siempre es explícita en la primera oración; a veces hay que construirla a partir de todo el párrafo.",
            },
            {
              q: "Una inferencia bien hecha debe apoyarse en...",
              options: [
                "Evidencia textual concreta",
                "Suposiciones sin fundamento",
                "La opinión personal del lector, sin relación al texto",
                "El título únicamente",
              ],
              correct: 0,
              explanation: "Inferir no es adivinar: se construye a partir de lo que el texto dice, combinado con conocimiento previo.",
            },
            {
              q: "Formular la idea principal con tus propias palabras sirve para...",
              options: [
                "Comprobar si realmente comprendiste el párrafo",
                "Memorizar el texto de forma literal",
                "Evitar tener que leer el resto del texto",
                "Cumplir un requisito sin función real",
              ],
              correct: 0,
              explanation: "Si no logras reformularla, es una señal de que la comprensión todavía no es completa.",
            },
          ],
        },
        {
          id: "l4-5",
          type: "checklist",
          title: "Lista de chequeo: comprensión lectora",
          duration: "6 ítems",
          intro: "Aplica esta lista la próxima vez que leas un texto académico.",
          items: [
            "Defino un propósito antes de comenzar a leer un texto.",
            "Reviso títulos y subtítulos para predecir el contenido antes de leer completo.",
            "Puedo distinguir la idea principal de las ideas secundarias en un párrafo.",
            "Formulo la idea principal de un párrafo con mis propias palabras, sin mirar el texto.",
            "Mis inferencias se apoyan en evidencia del texto, no en suposiciones.",
            "Reviso mi comprensión con preguntas concretas después de leer.",
          ],
        },
      ],
    },
    {
      id: "m5",
      label: "Módulo 5",
      title: "Técnicas de resumen y síntesis",
      lessons: [
        {
          id: "l5-1",
          type: "texto",
          title: "El resumen: qué conservar y qué eliminar",
          duration: "7 min",
          paragraphs: [
            "Resumir es reducir un texto a sus ideas esenciales, conservando el sentido original pero eliminando ejemplos, repeticiones y detalles secundarios. Un buen resumen responde a la pregunta: '¿qué necesita saber alguien que no leyó el texto original?'",
            "La técnica de las macrorreglas de reducción es útil: suprimir la información redundante o poco relevante, generalizar una lista de elementos particulares bajo un término más amplio (por ejemplo, 'frutas' en vez de 'manzanas, peras y uvas'), y construir una nueva idea que integre varias oraciones relacionadas.",
            "Un error común es resumir copiando frases textuales del original en vez de reformular con las propias palabras: eso no es resumir, es recortar.",
          ],
        },
        {
          id: "l5-2",
          type: "texto",
          title: "La síntesis: integrar varias fuentes",
          duration: "7 min",
          paragraphs: [
            "La síntesis va un paso más allá del resumen: integra información proveniente de varias fuentes distintas en un solo texto coherente, identificando puntos de acuerdo, desacuerdo y complementariedad entre los autores. Mientras el resumen condensa una sola fuente, la síntesis construye una nueva estructura propia a partir de múltiples voces.",
            "Para sintetizar bien, conviene organizar primero las fuentes por tema o subtema —no por autor— y luego redactar comparando lo que cada una aporta a cada tema.",
            "Esta organización por tema, en vez de por fuente, es lo que distingue una síntesis genuina de una simple sucesión de resúmenes pegados uno tras otro.",
          ],
          tip: "Sugerencia: antes de escribir, haz una tabla con los temas en las filas y las fuentes en las columnas — te ayudará a organizar por tema desde el principio.",
        },
        {
          id: "l5-3",
          type: "video",
          title: "Video: cómo resumir un texto paso a paso",
          duration: "3–5 min",
          description:
            "Agrega aquí el enlace a un video que muestre el proceso completo de resumir un texto real.",
        },
        {
          id: "l5-4",
          type: "quiz",
          title: "Cuestionario: resumen y síntesis",
          duration: "4 preguntas",
          questions: [
            {
              q: "Un buen resumen responde principalmente a...",
              options: [
                "Qué necesita saber alguien que no leyó el original",
                "Cuántas palabras tiene el texto original",
                "Quién es el autor del texto",
                "En qué año se publicó el texto",
              ],
              correct: 0,
              explanation: "El resumen debe transmitir lo esencial a quien no tiene acceso al texto completo.",
            },
            {
              q: "Generalizar 'manzanas, peras y uvas' como 'frutas' es un ejemplo de...",
              options: ["Una macrorregla de reducción", "Un error de resumen", "Una síntesis", "Una inferencia"],
              correct: 0,
              explanation: "La generalización es una de las macrorreglas usadas para condensar información al resumir.",
            },
            {
              q: "Copiar frases textuales del original al resumir es...",
              options: [
                "La forma correcta de resumir",
                "Un error común: eso es recortar, no resumir",
                "Obligatorio en todo resumen",
                "Lo mismo que sintetizar",
              ],
              correct: 1,
              explanation: "Un resumen debe reformular con las propias palabras, no ensamblar fragmentos copiados.",
            },
            {
              q: "La diferencia principal entre resumen y síntesis es...",
              options: [
                "El resumen condensa una fuente; la síntesis integra varias",
                "No hay ninguna diferencia real",
                "El resumen es más largo que la síntesis",
                "La síntesis nunca usa fuentes académicas",
              ],
              correct: 0,
              explanation: "El resumen trabaja sobre un solo texto; la síntesis combina información de múltiples fuentes.",
            },
          ],
        },
        {
          id: "l5-5",
          type: "checklist",
          title: "Lista de chequeo: resumen y síntesis",
          duration: "6 ítems",
          intro: "Revisa tu resumen o síntesis con esta lista antes de entregarlo.",
          items: [
            "Mis resúmenes conservan el sentido original sin copiar frases textuales.",
            "Elimino ejemplos y detalles secundarios al resumir, conservando solo lo esencial.",
            "Uso generalización cuando resumo listas de elementos particulares.",
            "Al sintetizar varias fuentes, las organizo por tema y no por autor.",
            "Mi síntesis identifica puntos de acuerdo y desacuerdo entre los autores.",
            "Verifico que mi resumen o síntesis tenga sentido para alguien que no leyó el original.",
          ],
        },
      ],
    },
    {
      id: "m6",
      label: "Módulo 6",
      title: "Revisión y edición de textos",
      lessons: [
        {
          id: "l6-1",
          type: "texto",
          title: "Revisar vs. editar: dos etapas distintas",
          duration: "7 min",
          paragraphs: [
            "Revisar y editar son dos etapas distintas del proceso de escritura, y conviene no mezclarlas. Revisar ocurre primero: se enfoca en el contenido y la estructura —¿la idea principal queda clara?, ¿el orden de los párrafos tiene lógica?, ¿falta o sobra información? Editar ocurre después: se enfoca en la superficie del texto —ortografía, puntuación, elección de palabras, longitud de las oraciones.",
            "Intentar editar mientras todavía se está revisando el contenido suele ser ineficiente: se corrige la puntuación de una oración que después se elimina por completo. Por eso conviene primero asegurar que el contenido esté completo y bien organizado, y solo entonces pulir los detalles de forma.",
            "Dejar reposar un texto —aunque sea unas horas— antes de revisarlo mejora notablemente la capacidad de detectar errores, porque permite leerlo con distancia, casi como si lo hubiera escrito otra persona.",
          ],
        },
        {
          id: "l6-2",
          type: "texto",
          title: "Una checklist de autoedición",
          duration: "6 min",
          paragraphs: [
            "Una checklist de autoedición ayuda a revisar de forma sistemática, en vez de depender solo de la intuición. Algunos puntos clave: leer el texto en voz alta para detectar oraciones demasiado largas o confusas; verificar que cada párrafo desarrolle una sola idea; comprobar que los conectores reflejen la relación lógica correcta entre ideas; revisar la concordancia de género, número y persona; y confirmar que no haya errores de puntuación frecuentes, como comas entre sujeto y verbo.",
            "Leer el texto de atrás hacia adelante, oración por oración, es una técnica útil específicamente para detectar errores ortográficos: al romper el orden narrativo, el cerebro deja de anticipar el contenido y presta más atención a la forma.",
          ],
          tip: "Sugerencia: guarda esta técnica para el final — léela después de haber revisado el contenido, nunca antes.",
        },
        {
          id: "l6-3",
          type: "video",
          title: "Video: cómo revisar tu propio texto",
          duration: "3–5 min",
          description:
            "Agrega aquí el enlace a un video que muestre el proceso de revisión y edición aplicado a un texto real.",
        },
        {
          id: "l6-4",
          type: "quiz",
          title: "Cuestionario final e integrador",
          duration: "5 preguntas",
          questions: [
            {
              q: "¿En qué se enfoca la etapa de revisión?",
              options: [
                "El contenido y la estructura",
                "La ortografía únicamente",
                "El tipo de letra del documento",
                "La cantidad de palabras exacta",
              ],
              correct: 0,
              explanation: "Revisar es evaluar si el contenido está completo y bien organizado, antes de pulir la forma.",
            },
            {
              q: "¿En qué se enfoca la etapa de edición?",
              options: [
                "La superficie del texto: ortografía, puntuación, palabras",
                "La idea principal del texto",
                "El orden general de los párrafos",
                "Si falta o sobra información",
              ],
              correct: 0,
              explanation: "Editar pule los detalles de forma, una vez que el contenido ya está definido.",
            },
            {
              q: "¿Por qué conviene dejar reposar un texto antes de revisarlo?",
              options: [
                "Permite leerlo con distancia y detectar más errores",
                "No tiene ningún efecto real",
                "Es obligatorio esperar exactamente 24 horas",
                "Solo sirve para textos muy largos",
              ],
              correct: 0,
              explanation: "El paso del tiempo ayuda a leer el texto casi como si lo hubiera escrito otra persona.",
            },
            {
              q: "Leer un texto de atrás hacia adelante ayuda especialmente a...",
              options: [
                "Detectar errores ortográficos",
                "Mejorar la coherencia general",
                "Encontrar la idea principal",
                "Acortar el texto",
              ],
              correct: 0,
              explanation: "Al romper el orden narrativo, la atención se enfoca en la forma de cada palabra, no en el contenido.",
            },
            {
              q: "Editar antes de terminar de revisar el contenido suele ser...",
              options: [
                "Ineficiente, porque se pule algo que después puede cambiar o eliminarse",
                "La forma más rápida y recomendada de trabajar",
                "Obligatorio según las normas de estilo",
                "Indiferente: el orden no importa",
              ],
              correct: 0,
              explanation: "Mezclar ambas etapas hace que se invierta tiempo en detalles de un contenido que aún puede cambiar.",
            },
          ],
        },
        {
          id: "l6-5",
          type: "checklist",
          title: "Lista de chequeo: revisión y edición",
          duration: "6 ítems",
          intro: "Usa esta lista como último paso antes de dar un texto por terminado.",
          items: [
            "Distingo entre revisar (contenido) y editar (forma) como dos etapas separadas.",
            "Reviso primero el contenido y la estructura antes de pulir el estilo.",
            "Dejo reposar mi texto antes de revisarlo, cuando el tiempo lo permite.",
            "Leo mi texto en voz alta para detectar oraciones confusas o demasiado largas.",
            "Reviso la concordancia y la puntuación como parte final del proceso.",
            "Confirmo que cada párrafo desarrolle una sola idea antes de dar el texto por terminado.",
          ],
        },
      ],
    },
  ],
};

const FLAT_LESSONS = COURSE.modules.flatMap((m) =>
  m.lessons.map((l) => ({ ...l, moduleId: m.id, moduleTitle: m.title }))
);
const TOTAL_LESSONS = FLAT_LESSONS.length;
const STORAGE_KEY = "expresion-escrita-progress-v1";

/* ------------------------------------------------------------------ */
/* HELPERS                                                             */
/* ------------------------------------------------------------------ */

function youTubeEmbedUrl(raw) {
  if (!raw) return null;
  try {
    const url = new URL(raw.trim());
    let id = null;
    if (url.hostname.includes("youtu.be")) {
      id = url.pathname.replace("/", "");
    } else if (url.hostname.includes("youtube.com")) {
      if (url.pathname === "/watch") id = url.searchParams.get("v");
      else if (url.pathname.startsWith("/embed/")) id = url.pathname.split("/embed/")[1];
    }
    return id ? `https://www.youtube.com/embed/${id}` : null;
  } catch {
    return null;
  }
}

const TYPE_META = {
  texto: { label: "TEXTO", Icon: FileText },
  video: { label: "VIDEO", Icon: PlayCircle },
  quiz: { label: "CUESTIONARIO", Icon: HelpCircle },
  checklist: { label: "LISTA DE CHEQUEO", Icon: ListChecks },
};

/* ------------------------------------------------------------------ */
/* APP                                                                  */
/* ------------------------------------------------------------------ */

export default function App({ onLock } = {}) {
  const [activeId, setActiveId] = useState(FLAT_LESSONS[0].id);
  const [completed, setCompleted] = useState(new Set());
  const [videoLinks, setVideoLinks] = useState({});
  const [checklistState, setChecklistState] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [saveState, setSaveState] = useState("idle"); // idle | saving | saved
  const [confirmReset, setConfirmReset] = useState(false);

  // Cargar progreso guardado
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        setCompleted(new Set(parsed.completed || []));
        setVideoLinks(parsed.videoLinks || {});
        setChecklistState(parsed.checklistState || {});
        if (parsed.activeId && FLAT_LESSONS.some((l) => l.id === parsed.activeId)) {
          setActiveId(parsed.activeId);
        }
      }
    } catch {
      // no hay progreso guardado todavía
    } finally {
      setLoaded(true);
    }
  }, []);

  // Guardar progreso (de inmediato — localStorage es rápido, no hace falta esperar)
  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          completed: Array.from(completed),
          videoLinks,
          checklistState,
          activeId,
        })
      );
      setSaveState("saved");
    } catch {
      setSaveState("idle");
    }
  }, [completed, videoLinks, checklistState, activeId, loaded]);

  const markComplete = (id) => {
    setCompleted((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  };

  const resetProgress = () => {
    setCompleted(new Set());
    setVideoLinks({});
    setChecklistState({});
    setActiveId(FLAT_LESSONS[0].id);
    setConfirmReset(false);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignorar si no existía
    }
  };

  const activeIndex = FLAT_LESSONS.findIndex((l) => l.id === activeId);
  const active = FLAT_LESSONS[activeIndex];
  const nextLesson = FLAT_LESSONS[activeIndex + 1];
  const progressPct = Math.round((completed.size / TOTAL_LESSONS) * 100);

  const goTo = (id) => setActiveId(id);
  const goNext = () => {
    if (nextLesson) setActiveId(nextLesson.id);
  };

  if (!loaded) {
    return (
      <div className="fa-root fa-loading">
        <div className="fa-spinner" />
        <p>Cargando tu progreso…</p>
        <Fonts />
      </div>
    );
  }

  return (
    <div className="fa-root">
      <Fonts />

      {/* -------- Encabezado -------- */}
      <header className="fa-header">
        <div className="fa-header-left">
          <BookOpen size={20} strokeWidth={2} />
          <div>
            <div className="fa-title">{COURSE.title}</div>
            <div className="fa-subtitle">{COURSE.subtitle}</div>
          </div>
        </div>
        <div className="fa-header-right">
          <div className="fa-progress-wrap">
            <div className="fa-progress-track">
              <div className="fa-progress-fill" style={{ width: `${progressPct}%` }} />
            </div>
            <span className="fa-progress-label">
              {completed.size}/{TOTAL_LESSONS} lecciones · {progressPct}%
            </span>
          </div>
        </div>
      </header>

      <div className="fa-body">
        {/* -------- Sidebar -------- */}
        <nav className="fa-sidebar" aria-label="Contenido del curso">
          {COURSE.modules.map((mod) => (
            <div key={mod.id} className="fa-module">
              <div className="fa-module-heading">
                <span className="fa-module-label">{mod.label}</span>
                <span className="fa-module-title">{mod.title}</span>
              </div>
              <ol className="fa-lesson-list">
                {mod.lessons.map((lesson) => {
                  const meta = TYPE_META[lesson.type];
                  const isActive = lesson.id === activeId;
                  const isDone = completed.has(lesson.id);
                  return (
                    <li key={lesson.id}>
                      <button
                        className={`fa-lesson-item${isActive ? " is-active" : ""}${
                          isDone ? " is-done" : ""
                        }`}
                        onClick={() => goTo(lesson.id)}
                      >
                        <span className="fa-lesson-check">
                          {isDone ? (
                            <CheckCircle2 size={17} strokeWidth={2} />
                          ) : (
                            <Circle size={17} strokeWidth={1.6} />
                          )}
                        </span>
                        <span className="fa-lesson-text">
                          <span className="fa-lesson-title">{lesson.title}</span>
                          <span className="fa-lesson-meta">
                            <meta.Icon size={12} strokeWidth={2} />
                            {meta.label} · {lesson.duration}
                          </span>
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ol>
            </div>
          ))}

          <div className="fa-sidebar-footer">
            <span className="fa-save-indicator">
              {saveState === "saving" ? "Guardando…" : "Progreso guardado en este sitio"}
            </span>
            {confirmReset ? (
              <div className="fa-reset-confirm">
                <span>¿Reiniciar todo el progreso?</span>
                <div>
                  <button className="fa-btn-ghost-sm" onClick={() => setConfirmReset(false)}>
                    Cancelar
                  </button>
                  <button className="fa-btn-danger-sm" onClick={resetProgress}>
                    Sí, reiniciar
                  </button>
                </div>
              </div>
            ) : (
              <button className="fa-reset-btn" onClick={() => setConfirmReset(true)}>
                <RotateCcw size={13} strokeWidth={2} />
                Reiniciar progreso
              </button>
            )}
            {onLock && (
              <button className="fa-reset-btn" onClick={onLock} style={{ marginTop: "2px" }}>
                <Lock size={13} strokeWidth={2} />
                Bloquear acceso de nuevo
              </button>
            )}
          </div>
        </nav>

        {/* -------- Contenido principal -------- */}
        <main className="fa-main">
          {active && (
            <LessonCard
              key={active.id}
              lesson={active}
              index={activeIndex}
              moduleTitle={active.moduleTitle}
              isDone={completed.has(active.id)}
              videoLink={videoLinks[active.id] || ""}
              onSetVideoLink={(url) =>
                setVideoLinks((prev) => ({ ...prev, [active.id]: url }))
              }
              checkedItems={checklistState[active.id] || []}
              onToggleItem={(itemIndex) =>
                setChecklistState((prev) => {
                  const current = prev[active.id] || [];
                  const next = [...current];
                  next[itemIndex] = !next[itemIndex];
                  return { ...prev, [active.id]: next };
                })
              }
              onComplete={() => markComplete(active.id)}
              onNext={goNext}
              hasNext={Boolean(nextLesson)}
            />
          )}
        </main>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* TARJETA DE LECCIÓN                                                   */
/* ------------------------------------------------------------------ */

function LessonCard({
  lesson,
  index,
  moduleTitle,
  isDone,
  videoLink,
  onSetVideoLink,
  checkedItems,
  onToggleItem,
  onComplete,
  onNext,
  hasNext,
}) {
  const meta = TYPE_META[lesson.type];

  return (
    <article className="fa-card">
      <div className="fa-card-folio">
        <span>{moduleTitle}</span>
        <span className="fa-folio-page">p. {String(index + 1).padStart(2, "0")}</span>
      </div>

      <div className="fa-card-punch" aria-hidden="true">
        <span />
        <span />
      </div>

      <div className="fa-card-head">
        <span className="fa-card-type">
          <meta.Icon size={13} strokeWidth={2} />
          {meta.label}
        </span>
        <h1 className="fa-card-title">{lesson.title}</h1>
      </div>

      <div className="fa-card-body">
        {lesson.type === "texto" && <TextLesson lesson={lesson} />}
        {lesson.type === "video" && (
          <VideoLesson lesson={lesson} link={videoLink} onSetLink={onSetVideoLink} />
        )}
        {lesson.type === "quiz" && (
          <QuizLesson lesson={lesson} onPassed={onComplete} onNext={onNext} hasNext={hasNext} isDone={isDone} />
        )}
        {lesson.type === "checklist" && (
          <ChecklistLesson lesson={lesson} checkedItems={checkedItems} onToggleItem={onToggleItem} />
        )}
      </div>

      {lesson.type !== "quiz" && (
        <div className="fa-card-footer">
          {isDone && (
            <span className="fa-done-badge">
              <CheckCircle2 size={15} strokeWidth={2} /> Completada
            </span>
          )}
          <button
            className="fa-btn-primary"
            onClick={() => {
              onComplete();
              if (hasNext) onNext();
            }}
          >
            {hasNext ? "Completar y continuar" : "Completar curso"}
            <ChevronRight size={16} strokeWidth={2.2} />
          </button>
        </div>
      )}
    </article>
  );
}

function TextLesson({ lesson }) {
  return (
    <div className="fa-text-lesson">
      {lesson.paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      {lesson.tip && <div className="fa-tip">{lesson.tip}</div>}
    </div>
  );
}

function VideoLesson({ lesson, link, onSetLink }) {
  const [draft, setDraft] = useState(link);
  const embed = youTubeEmbedUrl(link);

  useEffect(() => setDraft(link), [link]);

  return (
    <div className="fa-video-lesson">
      <p className="fa-video-desc">{lesson.description}</p>

      {embed ? (
        <div className="fa-video-frame">
          <iframe src={embed} title={lesson.title} allowFullScreen frameBorder="0" />
        </div>
      ) : (
        <div className="fa-video-placeholder">
          <PlayCircle size={28} strokeWidth={1.5} />
          <span>Aún no se ha agregado un video para esta lección.</span>
        </div>
      )}

      <div className="fa-video-input-row">
        <Link2 size={15} strokeWidth={2} />
        <input
          type="text"
          placeholder="Pega aquí el enlace de YouTube…"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
        />
        <button className="fa-btn-secondary" onClick={() => onSetLink(draft.trim())}>
          Guardar enlace
        </button>
      </div>
    </div>
  );
}

function ChecklistLesson({ lesson, checkedItems, onToggleItem }) {
  const checkedCount = lesson.items.filter((_, i) => checkedItems[i]).length;
  const allChecked = checkedCount === lesson.items.length;

  return (
    <div className="fa-checklist">
      <p className="fa-checklist-intro">{lesson.intro}</p>

      <div className="fa-checklist-progress">
        <div className="fa-checklist-track">
          <div
            className="fa-checklist-fill"
            style={{ width: `${(checkedCount / lesson.items.length) * 100}%` }}
          />
        </div>
        <span>
          {checkedCount}/{lesson.items.length} marcados
        </span>
      </div>

      <ul className="fa-checklist-items">
        {lesson.items.map((item, i) => {
          const checked = Boolean(checkedItems[i]);
          return (
            <li key={i}>
              <button
                className={`fa-checklist-item${checked ? " is-checked" : ""}`}
                onClick={() => onToggleItem(i)}
              >
                <span className="fa-checklist-box">
                  {checked ? (
                    <CheckCircle2 size={18} strokeWidth={2} />
                  ) : (
                    <Circle size={18} strokeWidth={1.6} />
                  )}
                </span>
                <span>{item}</span>
              </button>
            </li>
          );
        })}
      </ul>

      {allChecked && (
        <div className="fa-checklist-done">
          <CheckCircle2 size={15} strokeWidth={2} />
          Has revisado todos los puntos de esta lista.
        </div>
      )}
    </div>
  );
}

function QuizLesson({ lesson, onPassed, onNext, hasNext, isDone }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const allAnswered = lesson.questions.every((_, i) => answers[i] !== undefined);
  const score = lesson.questions.reduce(
    (acc, q, i) => acc + (answers[i] === q.correct ? 1 : 0),
    0
  );
  const pct = Math.round((score / lesson.questions.length) * 100);

  const submit = () => {
    setSubmitted(true);
    onPassed();
  };

  const retry = () => {
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <div className="fa-quiz">
      {lesson.questions.map((q, qi) => (
        <div className="fa-quiz-q" key={qi}>
          <p className="fa-quiz-question">
            {qi + 1}. {q.q}
          </p>
          <div className="fa-quiz-options">
            {q.options.map((opt, oi) => {
              const selected = answers[qi] === oi;
              let stateClass = "";
              if (submitted) {
                if (oi === q.correct) stateClass = "is-correct";
                else if (selected && oi !== q.correct) stateClass = "is-wrong";
              } else if (selected) {
                stateClass = "is-selected";
              }
              return (
                <button
                  key={oi}
                  disabled={submitted}
                  className={`fa-quiz-option ${stateClass}`}
                  onClick={() => setAnswers((prev) => ({ ...prev, [qi]: oi }))}
                >
                  <span className="fa-option-bullet">{String.fromCharCode(97 + oi)}</span>
                  {opt}
                </button>
              );
            })}
          </div>
          {submitted && (
            <p className="fa-quiz-explanation">
              {answers[qi] === q.correct ? "Correcto. " : "No es correcto. "}
              {q.explanation}
            </p>
          )}
        </div>
      ))}

      {!submitted ? (
        <button className="fa-btn-primary" disabled={!allAnswered} onClick={submit}>
          Enviar respuestas
          <ChevronRight size={16} strokeWidth={2.2} />
        </button>
      ) : (
        <div className="fa-quiz-result">
          <div className="fa-quiz-score">
            Resultado: {score}/{lesson.questions.length} ({pct}%)
          </div>
          {isDone && (
            <span className="fa-done-badge">
              <CheckCircle2 size={15} strokeWidth={2} /> Completada
            </span>
          )}
          <button className="fa-btn-secondary" onClick={retry}>
            <RotateCcw size={14} strokeWidth={2} />
            Intentar de nuevo
          </button>
          <button className="fa-btn-primary" onClick={onNext} disabled={!hasNext}>
            {hasNext ? "Continuar" : "Fin del curso"}
            <ChevronRight size={16} strokeWidth={2.2} />
          </button>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* ESTILOS Y TIPOGRAFÍA                                                 */
/* ------------------------------------------------------------------ */

function Fonts() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,600;8..60,700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');

      :root {
        --ink: #0B3D42;
        --ink-soft: #1B4C52;
        --paper: #F6F1E7;
        --paper-card: #FCFAF4;
        --gold: #C98A2E;
        --wine: #7A2E3B;
        --sage: #4F7A5D;
        --line: #DDD3BE;
        --text: #29291F;
        --text-soft: #6b6b5f;
      }

      * { box-sizing: border-box; }

      .fa-root {
        font-family: 'Inter', sans-serif;
        color: var(--text);
        background: var(--paper);
        background-image:
          radial-gradient(circle at 1px 1px, rgba(11,61,66,0.05) 1px, transparent 0);
        background-size: 22px 22px;
        min-height: 100%;
        display: flex;
        flex-direction: column;
        width: 100%;
      }

      .fa-loading {
        align-items: center;
        justify-content: center;
        gap: 12px;
        color: var(--ink);
        font-family: 'Source Serif 4', serif;
        padding: 60px 20px;
      }
      .fa-spinner {
        width: 26px; height: 26px;
        border: 3px solid var(--line);
        border-top-color: var(--gold);
        border-radius: 50%;
        animation: fa-spin 0.8s linear infinite;
      }
      @keyframes fa-spin { to { transform: rotate(360deg); } }

      .fa-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 16px 22px;
        background: var(--ink);
        color: var(--paper);
        flex-wrap: wrap;
      }
      .fa-header-left { display: flex; align-items: center; gap: 10px; }
      .fa-title {
        font-family: 'Source Serif 4', serif;
        font-weight: 700;
        font-size: 19px;
        letter-spacing: 0.2px;
        line-height: 1.1;
      }
      .fa-subtitle {
        font-size: 11.5px;
        color: #CFE0DD;
        margin-top: 2px;
      }
      .fa-header-right { display: flex; align-items: center; }
      .fa-progress-wrap { display: flex; flex-direction: column; gap: 4px; min-width: 170px; }
      .fa-progress-track {
        width: 100%; height: 6px; border-radius: 3px;
        background: rgba(255,255,255,0.18);
        overflow: hidden;
      }
      .fa-progress-fill {
        height: 100%;
        background: var(--gold);
        transition: width 0.4s ease;
      }
      .fa-progress-label {
        font-family: 'IBM Plex Mono', monospace;
        font-size: 10.5px;
        color: #CFE0DD;
        text-align: right;
      }

      .fa-body {
        display: flex;
        flex: 1;
        min-height: 0;
        align-items: flex-start;
      }

      /* ---- Sidebar ---- */
      .fa-sidebar {
        width: 300px;
        flex-shrink: 0;
        background: var(--paper-card);
        border-right: 1px solid var(--line);
        padding: 18px 0 0 0;
        max-height: 82vh;
        overflow-y: auto;
      }
      .fa-module { padding: 0 18px 14px 18px; border-bottom: 1px dashed var(--line); margin-bottom: 6px; }
      .fa-module:last-of-type { border-bottom: none; }
      .fa-module-heading { margin-bottom: 8px; }
      .fa-module-label {
        display: block;
        font-family: 'IBM Plex Mono', monospace;
        font-size: 10px;
        letter-spacing: 1px;
        color: var(--gold);
        text-transform: uppercase;
      }
      .fa-module-title {
        display: block;
        font-family: 'Source Serif 4', serif;
        font-weight: 600;
        font-size: 15px;
        color: var(--ink);
      }
      .fa-lesson-list { list-style: none; margin: 0; padding: 0; }
      .fa-lesson-item {
        width: 100%;
        display: flex;
        align-items: flex-start;
        gap: 9px;
        text-align: left;
        background: none;
        border: none;
        cursor: pointer;
        padding: 7px 8px;
        border-radius: 6px;
      }
      .fa-lesson-item:hover { background: rgba(11,61,66,0.06); }
      .fa-lesson-item.is-active { background: rgba(201,138,46,0.14); }
      .fa-lesson-check { margin-top: 2px; color: var(--text-soft); flex-shrink: 0; }
      .fa-lesson-item.is-done .fa-lesson-check { color: var(--sage); }
      .fa-lesson-item.is-active .fa-lesson-title { color: var(--ink); font-weight: 600; }
      .fa-lesson-text {
        display: flex;
        flex-direction: column;
        gap: 2px;
        padding-left: 14px;
        border-left: 1px solid transparent;
      }
      .fa-lesson-item.is-active .fa-lesson-text { border-left-color: var(--gold); }
      .fa-lesson-title { font-size: 13.2px; line-height: 1.35; color: var(--text); }
      .fa-lesson-meta {
        display: flex; align-items: center; gap: 4px;
        font-family: 'IBM Plex Mono', monospace;
        font-size: 10px;
        color: var(--text-soft);
        text-transform: uppercase;
        letter-spacing: 0.4px;
      }

      .fa-sidebar-footer {
        padding: 14px 18px 20px 18px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        border-top: 1px solid var(--line);
      }
      .fa-save-indicator { font-size: 10.5px; color: var(--text-soft); font-family: 'IBM Plex Mono', monospace; }
      .fa-reset-btn {
        display: flex; align-items: center; gap: 6px;
        background: none; border: 1px solid var(--line); border-radius: 6px;
        padding: 7px 10px; font-size: 12px; color: var(--wine);
        cursor: pointer; width: fit-content;
      }
      .fa-reset-btn:hover { background: rgba(122,46,59,0.06); }
      .fa-reset-confirm { display: flex; flex-direction: column; gap: 6px; font-size: 12px; color: var(--wine); }
      .fa-btn-ghost-sm, .fa-btn-danger-sm {
        border: 1px solid var(--line); background: none; border-radius: 5px;
        padding: 5px 9px; font-size: 11.5px; cursor: pointer; margin-right: 6px;
      }
      .fa-btn-danger-sm { background: var(--wine); color: #fff; border-color: var(--wine); }

      /* ---- Contenido principal ---- */
      .fa-main {
        flex: 1;
        min-width: 0;
        padding: 26px 30px 40px 30px;
        max-height: 82vh;
        overflow-y: auto;
      }

      .fa-card {
        background: var(--paper-card);
        border: 1px solid var(--line);
        border-radius: 10px;
        max-width: 760px;
        margin: 0 auto;
        padding: 26px 32px 30px 32px;
        position: relative;
        box-shadow: 0 1px 0 var(--line), 0 8px 22px -18px rgba(11,61,66,0.5);
      }

      .fa-card-punch {
        position: absolute;
        left: 14px; top: 22px;
        display: flex; flex-direction: column; gap: 46px;
      }
      .fa-card-punch span {
        width: 9px; height: 9px; border-radius: 50%;
        background: var(--paper);
        border: 1px solid var(--line);
      }

      .fa-card-folio {
        display: flex; justify-content: space-between; align-items: baseline;
        font-family: 'IBM Plex Mono', monospace;
        font-size: 10.5px;
        color: var(--text-soft);
        text-transform: uppercase;
        letter-spacing: 0.6px;
        border-bottom: 1px solid var(--line);
        padding-bottom: 10px;
        margin-bottom: 18px;
        margin-left: 26px;
      }
      .fa-folio-page { color: var(--gold); }

      .fa-card-head { margin-left: 26px; margin-bottom: 18px; }
      .fa-card-type {
        display: inline-flex; align-items: center; gap: 6px;
        font-family: 'IBM Plex Mono', monospace;
        font-size: 10.5px; letter-spacing: 1px;
        color: var(--wine);
        text-transform: uppercase;
        margin-bottom: 8px;
      }
      .fa-card-title {
        font-family: 'Source Serif 4', serif;
        font-weight: 700;
        font-size: 26px;
        color: var(--ink);
        line-height: 1.2;
        margin: 0;
      }

      .fa-card-body { margin-left: 26px; }

      .fa-text-lesson p {
        font-size: 15px; line-height: 1.75; margin: 0 0 14px 0; color: var(--text);
      }
      .fa-tip {
        margin-top: 6px;
        padding: 12px 14px;
        background: rgba(201,138,46,0.1);
        border-left: 3px solid var(--gold);
        border-radius: 4px;
        font-size: 13.5px;
        color: var(--ink-soft);
      }

      .fa-video-desc { font-size: 14px; color: var(--text-soft); margin-bottom: 14px; line-height: 1.6; }
      .fa-video-frame {
        position: relative; width: 100%; padding-top: 56.25%;
        border-radius: 8px; overflow: hidden; background: #000; margin-bottom: 16px;
      }
      .fa-video-frame iframe {
        position: absolute; inset: 0; width: 100%; height: 100%; border: 0;
      }
      .fa-video-placeholder {
        display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px;
        height: 200px; border: 1px dashed var(--line); border-radius: 8px;
        color: var(--text-soft); font-size: 13px; margin-bottom: 16px; background: rgba(11,61,66,0.03);
      }
      .fa-video-input-row {
        display: flex; align-items: center; gap: 8px;
        border: 1px solid var(--line); border-radius: 7px; padding: 6px 10px;
        background: var(--paper);
      }
      .fa-video-input-row input {
        flex: 1; border: none; background: none; outline: none; font-size: 13px; color: var(--text);
        font-family: 'Inter', sans-serif;
      }

      .fa-btn-primary {
        display: inline-flex; align-items: center; gap: 6px;
        background: var(--ink); color: var(--paper);
        border: none; border-radius: 7px;
        padding: 10px 18px; font-size: 13.5px; font-weight: 600;
        cursor: pointer;
      }
      .fa-btn-primary:hover { background: var(--ink-soft); }
      .fa-btn-primary:disabled { opacity: 0.4; cursor: not-allowed; }

      .fa-btn-secondary {
        display: inline-flex; align-items: center; gap: 6px;
        background: none; color: var(--ink);
        border: 1px solid var(--ink); border-radius: 7px;
        padding: 7px 13px; font-size: 12.5px; font-weight: 500;
        cursor: pointer; white-space: nowrap;
      }
      .fa-btn-secondary:hover { background: rgba(11,61,66,0.06); }

      .fa-card-footer {
        margin-left: 26px; margin-top: 22px; padding-top: 18px;
        border-top: 1px solid var(--line);
        display: flex; align-items: center; gap: 14px;
      }
      .fa-done-badge {
        display: inline-flex; align-items: center; gap: 5px;
        color: var(--sage); font-size: 12.5px; font-weight: 600;
      }

      /* ---- Checklist ---- */
      .fa-checklist-intro { font-size: 14px; color: var(--text-soft); line-height: 1.65; margin: 0 0 16px 0; }
      .fa-checklist-progress { display: flex; align-items: center; gap: 10px; margin-bottom: 16px; }
      .fa-checklist-track { flex: 1; height: 6px; border-radius: 3px; background: var(--line); overflow: hidden; }
      .fa-checklist-fill { height: 100%; background: var(--sage); transition: width 0.3s ease; }
      .fa-checklist-progress span {
        font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: var(--text-soft); white-space: nowrap;
      }
      .fa-checklist-items { list-style: none; margin: 0 0 6px 0; padding: 0; display: flex; flex-direction: column; gap: 8px; }
      .fa-checklist-item {
        width: 100%;
        display: flex; align-items: flex-start; gap: 10px;
        text-align: left;
        border: 1px solid var(--line); border-radius: 8px;
        padding: 11px 14px; font-size: 14px; line-height: 1.5;
        background: var(--paper); cursor: pointer; color: var(--text);
      }
      .fa-checklist-item:hover { border-color: var(--gold); }
      .fa-checklist-item.is-checked {
        border-color: var(--sage); background: rgba(79,122,93,0.09); color: var(--ink);
      }
      .fa-checklist-box { color: var(--text-soft); flex-shrink: 0; margin-top: 1px; }
      .fa-checklist-item.is-checked .fa-checklist-box { color: var(--sage); }
      .fa-checklist-done {
        display: flex; align-items: center; gap: 7px;
        margin-top: 14px; font-size: 13px; color: var(--sage); font-weight: 600;
      }

      /* ---- Quiz ---- */
      .fa-quiz-q { margin-bottom: 22px; }
      .fa-quiz-question { font-size: 14.5px; font-weight: 600; color: var(--ink); margin-bottom: 10px; }
      .fa-quiz-options { display: flex; flex-direction: column; gap: 7px; }
      .fa-quiz-option {
        display: flex; align-items: center; gap: 10px;
        text-align: left;
        border: 1px solid var(--line); border-radius: 7px;
        padding: 9px 12px; font-size: 13.5px;
        background: var(--paper); cursor: pointer;
      }
      .fa-quiz-option:hover:not(:disabled) { border-color: var(--gold); }
      .fa-quiz-option.is-selected { border-color: var(--gold); background: rgba(201,138,46,0.1); }
      .fa-quiz-option.is-correct { border-color: var(--sage); background: rgba(79,122,93,0.12); }
      .fa-quiz-option.is-wrong { border-color: var(--wine); background: rgba(122,46,59,0.1); }
      .fa-option-bullet {
        width: 20px; height: 20px; border-radius: 50%;
        border: 1px solid var(--line); background: var(--paper-card);
        display: flex; align-items: center; justify-content: center;
        font-family: 'IBM Plex Mono', monospace; font-size: 10.5px; flex-shrink: 0;
        text-transform: uppercase;
      }
      .fa-quiz-explanation {
        margin-top: 8px; font-size: 12.5px; color: var(--text-soft);
        padding-left: 2px; line-height: 1.5;
      }
      .fa-quiz-result {
        display: flex; align-items: center; gap: 14px; flex-wrap: wrap;
        border-top: 1px solid var(--line); padding-top: 16px; margin-top: 6px;
      }
      .fa-quiz-score {
        font-family: 'IBM Plex Mono', monospace;
        font-size: 13px; color: var(--ink); font-weight: 600;
      }

      @media (max-width: 780px) {
        .fa-body { flex-direction: column; }
        .fa-sidebar { width: 100%; max-height: none; border-right: none; border-bottom: 1px solid var(--line); }
        .fa-main { max-height: none; padding: 20px 16px 32px 16px; }
        .fa-card { padding: 22px 18px 26px 18px; }
        .fa-card-punch { display: none; }
        .fa-card-folio, .fa-card-head, .fa-card-body, .fa-card-footer { margin-left: 0; }
        .fa-card-title { font-size: 21px; }
      }
    `}</style>
  );
}
