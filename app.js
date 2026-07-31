// T-EN — código compilado, no editar a mano
(function () {
  "use strict";

  var useState = React.useState,
    useMemo = React.useMemo,
    useEffect = React.useEffect;

  // ---------- Niveles CEFR ----------
  const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];
  const LEVEL_COLORS = {
    A1: "#6BCB77",
    A2: "#FBC531",
    B1: "#F19B46",
    B2: "#F15C46",
    C1: "#8566E8",
    C2: "#EB1466"
  };
  const DEFAULT_LEVEL = "B2";
  const LEVEL_SPREAD = 2; // nivel actual + 2 por debajo

  function levelRange(level) {
    const i = LEVELS.indexOf(level);
    return LEVELS.slice(Math.max(0, i - LEVEL_SPREAD), i + 1);
  }

  // ---------- Bloques de contenido temático ----------
  const CONTENT_BLOCKS = [{
    id: "saludos",
    title: "Saludos",
    kind: "content",
    badge: "A",
    accent: "#EB1466",
    levels: {
      A1: {
        vocab: [{
          es: "Hola",
          en: "Hello"
        }, {
          es: "Buenos días",
          en: "Good morning"
        }, {
          es: "¿Cómo estás?",
          en: "How are you?"
        }, {
          es: "Adiós",
          en: "Goodbye"
        }, {
          es: "Gracias",
          en: "Thank you"
        }],
        sentences: [{
          es: "Mi nombre es Ana",
          en: ["My", "name", "is", "Ana"]
        }, {
          es: "Adiós, hasta mañana",
          en: ["Goodbye", "see", "you", "tomorrow"]
        }]
      },
      A2: {
        vocab: [{
          es: "Encantado de conocerte",
          en: "Nice to meet you"
        }, {
          es: "¿De dónde eres?",
          en: "Where are you from?"
        }, {
          es: "Buenas tardes",
          en: "Good afternoon"
        }, {
          es: "Hasta pronto",
          en: "See you soon"
        }, {
          es: "Bienvenido",
          en: "Welcome"
        }],
        sentences: [{
          es: "¿De dónde eres tú?",
          en: ["Where", "are", "you", "from"]
        }, {
          es: "Fue un placer conocerte",
          en: ["It", "was", "a", "pleasure", "to", "meet", "you"]
        }]
      },
      B1: {
        vocab: [{
          es: "Me gustaría presentarte a mi amigo",
          en: "I would like to introduce you to my friend"
        }, {
          es: "¿Podrías repetir eso, por favor?",
          en: "Could you repeat that, please?"
        }, {
          es: "Llevamos tiempo sin vernos",
          en: "We haven't seen each other in a while"
        }, {
          es: "Cuídate mucho",
          en: "Take care of yourself"
        }, {
          es: "Saluda a tu familia de mi parte",
          en: "Say hello to your family for me"
        }],
        sentences: [{
          es: "Hace mucho que no nos vemos",
          en: ["It's", "been", "a", "long", "time", "since", "we", "met"]
        }, {
          es: "Espero verte pronto de nuevo",
          en: ["I", "hope", "to", "see", "you", "again", "soon"]
        }]
      },
      B2: {
        vocab: [{
          es: "Disculpa las molestias",
          en: "Sorry for the inconvenience"
        }, {
          es: "Te agradezco de antemano",
          en: "I appreciate it in advance"
        }, {
          es: "No hace falta que te disculpes",
          en: "There is no need to apologize"
        }, {
          es: "Quedamos en contacto",
          en: "Let's stay in touch"
        }, {
          es: "Me alegra coincidir contigo",
          en: "I'm glad to run into you"
        }],
        sentences: [{
          es: "Siento mucho no haber podido venir",
          en: ["I'm", "really", "sorry", "I", "couldn't", "come"]
        }, {
          es: "Ha pasado demasiado tiempo desde la última vez",
          en: ["It's", "been", "too", "long", "since", "last", "time"]
        }]
      },
      C1: {
        vocab: [{
          es: "Permíteme presentarme debidamente",
          en: "Allow me to introduce myself properly"
        }, {
          es: "Le ruego que disculpe la tardanza",
          en: "Please excuse the delay"
        }, {
          es: "Nos mantenemos en contacto pese a la distancia",
          en: "We stay in touch despite the distance"
        }, {
          es: "No quisiera importunarle",
          en: "I wouldn't want to bother you"
        }, {
          es: "Fue un verdadero honor conocerle",
          en: "It was a true honor to meet you"
        }],
        sentences: [{
          es: "Lamento profundamente el malentendido",
          en: ["I", "deeply", "regret", "the", "misunderstanding"]
        }, {
          es: "Confío en que retomemos el contacto pronto",
          en: ["I", "trust", "we", "will", "reconnect", "soon"]
        }]
      },
      C2: {
        vocab: [{
          es: "Le ofrezco mis más sinceras disculpas",
          en: "I offer you my most sincere apologies"
        }, {
          es: "Ha sido un placer absolutamente inigualable",
          en: "It has been an utterly unparalleled pleasure"
        }, {
          es: "No albergo duda alguna al respecto",
          en: "I harbor no doubt whatsoever about it"
        }, {
          es: "Quedo a su entera disposición",
          en: "I remain entirely at your disposal"
        }, {
          es: "Le insto a que no dude en contactarme",
          en: "I urge you not to hesitate to contact me"
        }],
        sentences: [{
          es: "Le ruego acepte mis disculpas más sentidas",
          en: ["I", "beg", "you", "to", "accept", "my", "deepest", "apologies"]
        }, {
          es: "Ha sido un privilegio inconmensurable",
          en: ["It", "has", "been", "an", "immeasurable", "privilege"]
        }]
      }
    }
  }, {
    id: "comida",
    title: "Comida",
    kind: "content",
    badge: "B",
    accent: "#F15C46",
    levels: {
      A1: {
        vocab: [{
          es: "Manzana",
          en: "Apple"
        }, {
          es: "Pan",
          en: "Bread"
        }, {
          es: "Agua",
          en: "Water"
        }, {
          es: "Queso",
          en: "Cheese"
        }, {
          es: "Leche",
          en: "Milk"
        }],
        sentences: [{
          es: "Quiero agua",
          en: ["I", "want", "water"]
        }, {
          es: "Me gusta el pan",
          en: ["I", "like", "bread"]
        }]
      },
      A2: {
        vocab: [{
          es: "Tengo hambre",
          en: "I am hungry"
        }, {
          es: "Tengo sed",
          en: "I am thirsty"
        }, {
          es: "El desayuno",
          en: "Breakfast"
        }, {
          es: "La cena",
          en: "Dinner"
        }, {
          es: "Está rico",
          en: "It's tasty"
        }],
        sentences: [{
          es: "¿Puedo ver el menú?",
          en: ["Can", "I", "see", "the", "menu"]
        }, {
          es: "Quiero una taza de café",
          en: ["I", "want", "a", "cup", "of", "coffee"]
        }]
      },
      B1: {
        vocab: [{
          es: "La cuenta, por favor",
          en: "The bill, please"
        }, {
          es: "Soy alérgico a los frutos secos",
          en: "I'm allergic to nuts"
        }, {
          es: "¿Qué me recomienda?",
          en: "What do you recommend?"
        }, {
          es: "Está un poco soso",
          en: "It's a bit bland"
        }, {
          es: "Prefiero comer al aire libre",
          en: "I prefer eating outdoors"
        }],
        sentences: [{
          es: "¿Podría traernos la cuenta?",
          en: ["Could", "you", "bring", "us", "the", "bill"]
        }, {
          es: "Este plato lleva demasiada sal",
          en: ["This", "dish", "has", "too", "much", "salt"]
        }]
      },
      B2: {
        vocab: [{
          es: "Se me hace agua la boca",
          en: "It makes my mouth water"
        }, {
          es: "El servicio dejó bastante que desear",
          en: "The service left a lot to be desired"
        }, {
          es: "Pedimos que lo recalentaran",
          en: "We asked them to reheat it"
        }, {
          es: "No suelo comer carne roja",
          en: "I don't usually eat red meat"
        }, {
          es: "La reserva es imprescindible",
          en: "A reservation is essential"
        }],
        sentences: [{
          es: "El plato estaba exquisitamente condimentado",
          en: ["The", "dish", "was", "exquisitely", "seasoned"]
        }, {
          es: "Tuvimos que esperar más de lo previsto",
          en: ["We", "had", "to", "wait", "longer", "than", "expected"]
        }]
      },
      C1: {
        vocab: [{
          es: "El maridaje entre el vino y el plato fue impecable",
          en: "The wine and dish pairing was impeccable"
        }, {
          es: "Prescindo del postre esta vez",
          en: "I'll skip dessert this time"
        }, {
          es: "El local peca de excesivamente ruidoso",
          en: "The place is excessively noisy"
        }, {
          es: "No terminó de convencerme la textura",
          en: "The texture didn't quite win me over"
        }, {
          es: "Cabe destacar la frescura de los ingredientes",
          en: "It's worth noting the freshness of the ingredients"
        }],
        sentences: [{
          es: "La presentación del plato resultó sobresaliente",
          en: ["The", "dish's", "presentation", "turned", "out", "outstanding"]
        }, {
          es: "El sabor dejó bastante que desear",
          en: ["The", "flavor", "left", "much", "to", "be", "desired"]
        }]
      },
      C2: {
        vocab: [{
          es: "El chef desplegó una maestría técnica encomiable",
          en: "The chef displayed commendable technical mastery"
        }, {
          es: "La experiencia gastronómica resultó memorable",
          en: "The dining experience proved memorable"
        }, {
          es: "No escatimaron en la calidad de los ingredientes",
          en: "They spared no expense on ingredient quality"
        }, {
          es: "El ambiente rezumaba sofisticación",
          en: "The ambiance exuded sophistication"
        }, {
          es: "Fue un festín para los sentidos",
          en: "It was a feast for the senses"
        }],
        sentences: [{
          es: "El menú degustación superó nuestras expectativas",
          en: ["The", "tasting", "menu", "exceeded", "our", "expectations"]
        }, {
          es: "Cada plato reflejaba una meticulosa atención al detalle",
          en: ["Each", "dish", "reflected", "meticulous", "attention", "to", "detail"]
        }]
      }
    }
  }, {
    id: "familia",
    title: "Familia",
    kind: "content",
    badge: "C",
    accent: "#FBC531",
    levels: {
      A1: {
        vocab: [{
          es: "Hermano",
          en: "Brother"
        }, {
          es: "Hermana",
          en: "Sister"
        }, {
          es: "Madre",
          en: "Mother"
        }, {
          es: "Padre",
          en: "Father"
        }, {
          es: "Hijo",
          en: "Son"
        }],
        sentences: [{
          es: "Tengo un hermano",
          en: ["I", "have", "a", "brother"]
        }, {
          es: "Mi madre es amable",
          en: ["My", "mother", "is", "kind"]
        }]
      },
      A2: {
        vocab: [{
          es: "Mi abuela",
          en: "My grandmother"
        }, {
          es: "Mi abuelo",
          en: "My grandfather"
        }, {
          es: "Primo",
          en: "Cousin"
        }, {
          es: "Tío",
          en: "Uncle"
        }, {
          es: "Tía",
          en: "Aunt"
        }],
        sentences: [{
          es: "Visitamos a mis abuelos",
          en: ["We", "visit", "my", "grandparents"]
        }, {
          es: "Mi primo vive cerca",
          en: ["My", "cousin", "lives", "nearby"]
        }]
      },
      B1: {
        vocab: [{
          es: "Nos llevamos muy bien",
          en: "We get along very well"
        }, {
          es: "Discutimos de vez en cuando",
          en: "We argue from time to time"
        }, {
          es: "Mis padres se preocupan mucho",
          en: "My parents worry a lot"
        }, {
          es: "Mi hermana se casó el año pasado",
          en: "My sister got married last year"
        }, {
          es: "Somos una familia unida",
          en: "We are a close family"
        }],
        sentences: [{
          es: "Mi familia siempre me ha apoyado",
          en: ["My", "family", "has", "always", "supported", "me"]
        }, {
          es: "Nos reunimos cada Navidad",
          en: ["We", "gather", "every", "Christmas"]
        }]
      },
      B2: {
        vocab: [{
          es: "Guardo una relación distante con mi tío",
          en: "I have a distant relationship with my uncle"
        }, {
          es: "Heredé el carácter de mi madre",
          en: "I inherited my mother's temperament"
        }, {
          es: "Nos criamos prácticamente como hermanos",
          en: "We were raised practically as siblings"
        }, {
          es: "Mantenemos el contacto pese a la distancia",
          en: "We keep in touch despite the distance"
        }, {
          es: "Mis abuelos me inculcaron buenos valores",
          en: "My grandparents instilled good values in me"
        }],
        sentences: [{
          es: "Crecí rodeado de una familia numerosa",
          en: ["I", "grew", "up", "surrounded", "by", "a", "large", "family"]
        }, {
          es: "Aprendí a valorar la unión familiar",
          en: ["I", "learned", "to", "value", "family", "unity"]
        }]
      },
      C1: {
        vocab: [{
          es: "El vínculo con mis hermanos se ha fortalecido con los años",
          en: "The bond with my siblings has strengthened over the years"
        }, {
          es: "Procedo de una familia bastante tradicional",
          en: "I come from a fairly traditional family"
        }, {
          es: "Rara vez coincidimos todos bajo el mismo techo",
          en: "We rarely all meet under the same roof"
        }, {
          es: "Mis padres me infundieron un fuerte sentido del deber",
          en: "My parents instilled in me a strong sense of duty"
        }, {
          es: "Guardo un cariño entrañable por mis abuelos",
          en: "I hold dear affection for my grandparents"
        }],
        sentences: [{
          es: "El reencuentro familiar resultó entrañable",
          en: ["The", "family", "reunion", "turned", "out", "heartwarming"]
        }, {
          es: "Cada generación aporta su propia perspectiva",
          en: ["Each", "generation", "brings", "its", "own", "perspective"]
        }]
      },
      C2: {
        vocab: [{
          es: "La cohesión familiar ha sido determinante en mi formación",
          en: "Family cohesion has been decisive in my upbringing"
        }, {
          es: "Mis raíces familiares se remontan varias generaciones",
          en: "My family roots go back several generations"
        }, {
          es: "El legado de mis antepasados perdura en nosotros",
          en: "My ancestors' legacy endures in us"
        }, {
          es: "Cultivamos lazos que trascienden la distancia",
          en: "We cultivate bonds that transcend distance"
        }, {
          es: "Somos herederos de una rica tradición familiar",
          en: "We are heirs to a rich family tradition"
        }],
        sentences: [{
          es: "El patrimonio familiar se ha transmitido con esmero",
          en: ["The", "family", "heritage", "has", "been", "passed", "down", "with", "care"]
        }, {
          es: "Nuestros valores compartidos nos mantienen unidos",
          en: ["Our", "shared", "values", "keep", "us", "united"]
        }]
      }
    }
  }, {
    id: "viajes",
    title: "Viajes",
    kind: "content",
    badge: "D",
    accent: "#4FB0E8",
    levels: {
      A1: {
        vocab: [{
          es: "El aeropuerto",
          en: "The airport"
        }, {
          es: "El hotel",
          en: "The hotel"
        }, {
          es: "La maleta",
          en: "The suitcase"
        }, {
          es: "El billete",
          en: "The ticket"
        }, {
          es: "El mapa",
          en: "The map"
        }],
        sentences: [{
          es: "Necesito un mapa",
          en: ["I", "need", "a", "map"]
        }, {
          es: "¿Dónde está el hotel?",
          en: ["Where", "is", "the", "hotel"]
        }]
      },
      A2: {
        vocab: [{
          es: "El pasaporte",
          en: "The passport"
        }, {
          es: "La estación de tren",
          en: "The train station"
        }, {
          es: "Gira a la izquierda",
          en: "Turn left"
        }, {
          es: "Sigue recto",
          en: "Go straight"
        }, {
          es: "¿Cuánto cuesta?",
          en: "How much is it?"
        }],
        sentences: [{
          es: "Perdí mi pasaporte",
          en: ["I", "lost", "my", "passport"]
        }, {
          es: "¿Dónde está la estación de tren?",
          en: ["Where", "is", "the", "train", "station"]
        }]
      },
      B1: {
        vocab: [{
          es: "Reservé una habitación con antelación",
          en: "I booked a room in advance"
        }, {
          es: "El vuelo se retrasó dos horas",
          en: "The flight was delayed two hours"
        }, {
          es: "Prefiero viajar con poco equipaje",
          en: "I prefer to travel light"
        }, {
          es: "Nos alojamos en un albergue",
          en: "We stayed in a hostel"
        }, {
          es: "La ruta ofrece vistas espectaculares",
          en: "The route offers spectacular views"
        }],
        sentences: [{
          es: "El vuelo sale a las ocho",
          en: ["The", "flight", "leaves", "at", "eight"]
        }, {
          es: "Nos perdimos por el centro de la ciudad",
          en: ["We", "got", "lost", "in", "the", "city", "center"]
        }]
      },
      B2: {
        vocab: [{
          es: "Tuvimos que hacer escala imprevista",
          en: "We had to make an unplanned layover"
        }, {
          es: "La aduana retuvo mi equipaje",
          en: "Customs held my luggage"
        }, {
          es: "Nos adentramos en calles poco turísticas",
          en: "We ventured into less touristy streets"
        }, {
          es: "El itinerario resultó más ajustado de lo previsto",
          en: "The itinerary turned out tighter than expected"
        }, {
          es: "Conseguimos una tarifa bastante ventajosa",
          en: "We got a fairly good rate"
        }],
        sentences: [{
          es: "El vuelo sufrió un retraso considerable",
          en: ["The", "flight", "suffered", "a", "considerable", "delay"]
        }, {
          es: "Decidimos improvisar el resto del viaje",
          en: ["We", "decided", "to", "improvise", "the", "rest", "of", "the", "trip"]
        }]
      },
      C1: {
        vocab: [{
          es: "La travesía resultó más ardua de lo anticipado",
          en: "The journey turned out more arduous than anticipated"
        }, {
          es: "Nos vimos obligados a replantear el itinerario",
          en: "We were forced to rethink the itinerary"
        }, {
          es: "El paisaje dejó una impresión imborrable",
          en: "The landscape left an indelible impression"
        }, {
          es: "Sorteamos numerosos contratiempos burocráticos",
          en: "We navigated numerous bureaucratic setbacks"
        }, {
          es: "La hospitalidad local superó cualquier expectativa",
          en: "The local hospitality exceeded any expectation"
        }],
        sentences: [{
          es: "El recorrido puso a prueba nuestra paciencia",
          en: ["The", "journey", "tested", "our", "patience"]
        }, {
          es: "Cada parada nos deparó una sorpresa distinta",
          en: ["Each", "stop", "brought", "us", "a", "different", "surprise"]
        }]
      },
      C2: {
        vocab: [{
          es: "La odisea burocrática resultó extenuante",
          en: "The bureaucratic ordeal proved exhausting"
        }, {
          es: "El paisaje se desplegaba en todo su esplendor",
          en: "The landscape unfolded in all its splendor"
        }, {
          es: "Nos sumergimos de lleno en la idiosincrasia local",
          en: "We fully immersed ourselves in the local idiosyncrasy"
        }, {
          es: "El viaje trascendió cualquier expectativa previa",
          en: "The trip transcended any prior expectation"
        }, {
          es: "Guardamos un recuerdo imborrable de aquel periplo",
          en: "We keep an indelible memory of that journey"
        }],
        sentences: [{
          es: "El itinerario exigió una planificación meticulosa",
          en: ["The", "itinerary", "demanded", "meticulous", "planning"]
        }, {
          es: "La travesía quedará grabada para siempre",
          en: ["The", "journey", "will", "remain", "etched", "forever"]
        }]
      }
    }
  }];

  // ---------- Bloques de gramática ----------
  // Los items "gap" son ejercicios de gramática pura: hueco + opciones + explicación.
  const GRAMMAR_BLOCKS = [{
    id: "tiempos",
    title: "Tiempos verbales",
    kind: "grammar",
    badge: "T",
    accent: "#6BCB77",
    levels: {
      A1: {
        gaps: [{
          sentence: "She ___ a teacher.",
          options: ["is", "are", "am", "be"],
          answer: "is",
          explain: "Tercera persona del singular del verbo to be."
        }, {
          sentence: "I ___ coffee every morning.",
          options: ["drink", "drinks", "drinking", "drank"],
          answer: "drink",
          explain: "Presente simple con 'I' no lleva -s."
        }, {
          sentence: "They ___ at home now.",
          options: ["are", "is", "am", "be"],
          answer: "are",
          explain: "Plural + presente del verbo to be."
        }]
      },
      A2: {
        gaps: [{
          sentence: "Yesterday I ___ to the cinema.",
          options: ["went", "go", "have gone", "going"],
          answer: "went",
          explain: "Pasado simple para una acción terminada con marcador temporal."
        }, {
          sentence: "She is ___ dinner right now.",
          options: ["cooking", "cook", "cooked", "cooks"],
          answer: "cooking",
          explain: "Presente continuo: be + verbo -ing."
        }, {
          sentence: "We ___ never been to Japan.",
          options: ["have", "has", "are", "did"],
          answer: "have",
          explain: "Present perfect con 'we' usa 'have'."
        }]
      },
      B1: {
        gaps: [{
          sentence: "By the time we arrived, the film ___ already started.",
          options: ["had", "has", "have", "was"],
          answer: "had",
          explain: "Past perfect: acción anterior a otra acción pasada."
        }, {
          sentence: "I ___ here for five years.",
          options: ["have worked", "work", "worked", "am working"],
          answer: "have worked",
          explain: "Present perfect con duración que continúa hasta el presente."
        }, {
          sentence: "While I ___, the phone rang.",
          options: ["was sleeping", "slept", "sleep", "have slept"],
          answer: "was sleeping",
          explain: "Past continuous para la acción en curso interrumpida."
        }]
      },
      B2: {
        gaps: [{
          sentence: "This time next year I ___ in London.",
          options: ["will be living", "will live", "live", "am living"],
          answer: "will be living",
          explain: "Future continuous para una acción en curso en un momento futuro."
        }, {
          sentence: "She ___ for hours before he finally called.",
          options: ["had been waiting", "waited", "has waited", "was waiting"],
          answer: "had been waiting",
          explain: "Past perfect continuous: duración previa a otro punto del pasado."
        }, {
          sentence: "By 2030 they ___ the project.",
          options: ["will have finished", "will finish", "finish", "have finished"],
          answer: "will have finished",
          explain: "Future perfect: acción completada antes de un momento futuro."
        }]
      },
      C1: {
        gaps: [{
          sentence: "Hardly ___ when the storm broke.",
          options: ["had we arrived", "we had arrived", "we arrived", "did we arrive"],
          answer: "had we arrived",
          explain: "Inversión tras 'hardly' en posición inicial."
        }, {
          sentence: "It's high time you ___ a decision.",
          options: ["made", "make", "have made", "will make"],
          answer: "made",
          explain: "'It's high time' pide pasado simple con valor de presente."
        }, {
          sentence: "She ___ working here since the merger.",
          options: ["has been", "is", "was", "had"],
          answer: "has been",
          explain: "Present perfect continuous con 'since'."
        }]
      },
      C2: {
        gaps: [{
          sentence: "Never before ___ such devotion.",
          options: ["had he witnessed", "he had witnessed", "he witnessed", "did he witnessed"],
          answer: "had he witnessed",
          explain: "Inversión enfática tras 'never before'."
        }, {
          sentence: "Were it not for her intervention, we ___ failed.",
          options: ["would have", "will have", "had", "would"],
          answer: "would have",
          explain: "Condicional mixto con inversión formal de 'if it were not'."
        }, {
          sentence: "Little ___ that the deal had collapsed.",
          options: ["did they know", "they knew", "they did know", "knew they"],
          answer: "did they know",
          explain: "Inversión tras adverbio negativo 'little'."
        }]
      }
    }
  }, {
    id: "condicionales",
    title: "Condicionales",
    kind: "grammar",
    badge: "IF",
    accent: "#8566E8",
    levels: {
      A2: {
        gaps: [{
          sentence: "If it rains, I ___ at home.",
          options: ["will stay", "stayed", "would stay", "stay"],
          answer: "will stay",
          explain: "Primer condicional: if + presente, will + infinitivo."
        }, {
          sentence: "If you heat ice, it ___.",
          options: ["melts", "will melt", "melted", "would melt"],
          answer: "melts",
          explain: "Condicional cero: verdad general, ambos en presente."
        }, {
          sentence: "If I ___ time, I'll help you.",
          options: ["have", "had", "would have", "will have"],
          answer: "have",
          explain: "En la cláusula 'if' del primer condicional va presente, no 'will'."
        }]
      },
      B1: {
        gaps: [{
          sentence: "If I ___ rich, I would travel the world.",
          options: ["were", "am", "will be", "have been"],
          answer: "were",
          explain: "Segundo condicional: situación hipotética, 'were' para todas las personas."
        }, {
          sentence: "She would call you if she ___ your number.",
          options: ["knew", "knows", "had known", "will know"],
          answer: "knew",
          explain: "Segundo condicional: if + pasado simple."
        }, {
          sentence: "If they studied more, they ___ better results.",
          options: ["would get", "will get", "got", "get"],
          answer: "would get",
          explain: "Resultado del segundo condicional: would + infinitivo."
        }]
      },
      B2: {
        gaps: [{
          sentence: "If I had known, I ___ you.",
          options: ["would have told", "would tell", "will tell", "had told"],
          answer: "would have told",
          explain: "Tercer condicional: arrepentimiento sobre el pasado."
        }, {
          sentence: "If she ___ harder, she would have passed.",
          options: ["had studied", "studied", "would study", "has studied"],
          answer: "had studied",
          explain: "Tercer condicional: if + past perfect."
        }, {
          sentence: "If I had taken that job, I ___ here now.",
          options: ["wouldn't be", "wouldn't have been", "won't be", "am not"],
          answer: "wouldn't be",
          explain: "Condicional mixto: causa pasada, consecuencia presente."
        }]
      },
      C1: {
        gaps: [{
          sentence: "___ I known earlier, things would be different.",
          options: ["Had", "If", "Would", "Should"],
          answer: "Had",
          explain: "Inversión formal que sustituye a 'If I had known'."
        }, {
          sentence: "___ you need assistance, please call us.",
          options: ["Should", "Would", "Had", "Were"],
          answer: "Should",
          explain: "'Should you...' equivale a 'If you should...' en registro formal."
        }, {
          sentence: "___ she to accept, we would proceed.",
          options: ["Were", "Had", "Should", "Would"],
          answer: "Were",
          explain: "'Were she to...' es la inversión de 'If she were to...'."
        }]
      },
      C2: {
        gaps: [{
          sentence: "But for his intervention, the project ___ collapsed.",
          options: ["would have", "will have", "had", "would"],
          answer: "would have",
          explain: "'But for' introduce una condición negada equivalente al tercer condicional."
        }, {
          sentence: "Were it not for the funding, we ___ operating today.",
          options: ["wouldn't be", "won't be", "hadn't been", "aren't"],
          answer: "wouldn't be",
          explain: "Condicional mixto formal con inversión."
        }, {
          sentence: "Supposing he ___ refused, what would we have done?",
          options: ["had", "has", "would have", "did"],
          answer: "had",
          explain: "'Supposing' funciona como 'if' y aquí exige past perfect."
        }]
      }
    }
  }, {
    id: "phrasal",
    title: "Phrasal verbs",
    kind: "grammar",
    badge: "PV",
    accent: "#F19B46",
    levels: {
      A2: {
        gaps: [{
          sentence: "Please turn ___ the light, it's dark.",
          options: ["on", "off", "up", "in"],
          answer: "on",
          explain: "'Turn on' = encender."
        }, {
          sentence: "I get ___ at seven every morning.",
          options: ["up", "on", "over", "in"],
          answer: "up",
          explain: "'Get up' = levantarse."
        }, {
          sentence: "Look ___! There's a car coming.",
          options: ["out", "for", "after", "up"],
          answer: "out",
          explain: "'Look out' = ten cuidado."
        }]
      },
      B1: {
        gaps: [{
          sentence: "I need to look ___ this word in the dictionary.",
          options: ["up", "after", "for", "into"],
          answer: "up",
          explain: "'Look up' = buscar información."
        }, {
          sentence: "She gave ___ smoking last year.",
          options: ["up", "in", "away", "off"],
          answer: "up",
          explain: "'Give up' = dejar un hábito."
        }, {
          sentence: "We ran ___ milk, so I went shopping.",
          options: ["out of", "into", "over", "up"],
          answer: "out of",
          explain: "'Run out of' = quedarse sin algo."
        }]
      },
      B2: {
        gaps: [{
          sentence: "The meeting was put ___ until next week.",
          options: ["off", "up", "out", "away"],
          answer: "off",
          explain: "'Put off' = aplazar."
        }, {
          sentence: "I can't put ___ with this noise any longer.",
          options: ["up", "off", "down", "in"],
          answer: "up",
          explain: "'Put up with' = soportar, tolerar."
        }, {
          sentence: "The police are looking ___ the incident.",
          options: ["into", "after", "up", "for"],
          answer: "into",
          explain: "'Look into' = investigar."
        }]
      },
      C1: {
        gaps: [{
          sentence: "Negotiations broke ___ after three hours.",
          options: ["down", "up", "off", "in"],
          answer: "down",
          explain: "'Break down' = fracasar (negociaciones, máquinas)."
        }, {
          sentence: "She was passed ___ for the promotion.",
          options: ["over", "out", "up", "on"],
          answer: "over",
          explain: "'Pass over' = ser ignorado para un ascenso."
        }, {
          sentence: "The company had to lay ___ 200 workers.",
          options: ["off", "out", "down", "up"],
          answer: "off",
          explain: "'Lay off' = despedir por reducción de plantilla."
        }]
      },
      C2: {
        gaps: [{
          sentence: "His story doesn't quite add ___.",
          options: ["up", "on", "in", "over"],
          answer: "up",
          explain: "'Add up' = cuadrar, tener sentido."
        }, {
          sentence: "They tried to gloss ___ the discrepancies.",
          options: ["over", "up", "out", "off"],
          answer: "over",
          explain: "'Gloss over' = pasar por alto deliberadamente."
        }, {
          sentence: "The scandal blew ___ within a week.",
          options: ["over", "up", "off", "in"],
          answer: "over",
          explain: "'Blow over' = disiparse, pasar sin consecuencias."
        }]
      }
    }
  }, {
    id: "preposiciones",
    title: "Preposiciones",
    kind: "grammar",
    badge: "PR",
    accent: "#4FB0E8",
    levels: {
      A1: {
        gaps: [{
          sentence: "The book is ___ the table.",
          options: ["on", "in", "at", "to"],
          answer: "on",
          explain: "'On' para superficies."
        }, {
          sentence: "I live ___ Madrid.",
          options: ["in", "on", "at", "to"],
          answer: "in",
          explain: "'In' con ciudades y países."
        }, {
          sentence: "See you ___ Monday.",
          options: ["on", "in", "at", "for"],
          answer: "on",
          explain: "'On' con días de la semana."
        }]
      },
      A2: {
        gaps: [{
          sentence: "The meeting starts ___ 9 o'clock.",
          options: ["at", "in", "on", "by"],
          answer: "at",
          explain: "'At' con horas concretas."
        }, {
          sentence: "She's been here ___ two hours.",
          options: ["for", "since", "during", "from"],
          answer: "for",
          explain: "'For' con duración; 'since' con punto de inicio."
        }, {
          sentence: "I'm interested ___ history.",
          options: ["in", "on", "at", "for"],
          answer: "in",
          explain: "'Interested in' es una colocación fija."
        }]
      },
      B1: {
        gaps: [{
          sentence: "She's married ___ a doctor.",
          options: ["to", "with", "of", "at"],
          answer: "to",
          explain: "'Married to', no 'married with'."
        }, {
          sentence: "It depends ___ the weather.",
          options: ["on", "of", "in", "to"],
          answer: "on",
          explain: "'Depend on' es la forma correcta."
        }, {
          sentence: "I apologized ___ being late.",
          options: ["for", "of", "about", "to"],
          answer: "for",
          explain: "'Apologize for' + causa."
        }]
      },
      B2: {
        gaps: [{
          sentence: "He was accused ___ fraud.",
          options: ["of", "for", "with", "in"],
          answer: "of",
          explain: "'Accused of' + delito."
        }, {
          sentence: "They're capable ___ handling it.",
          options: ["of", "to", "for", "in"],
          answer: "of",
          explain: "'Capable of' + gerundio."
        }, {
          sentence: "This is subject ___ change.",
          options: ["to", "of", "for", "with"],
          answer: "to",
          explain: "'Subject to' = sujeto a."
        }]
      },
      C1: {
        gaps: [{
          sentence: "The findings are consistent ___ our hypothesis.",
          options: ["with", "to", "of", "for"],
          answer: "with",
          explain: "'Consistent with' = coherente con."
        }, {
          sentence: "She's oblivious ___ the criticism.",
          options: ["to", "of", "with", "for"],
          answer: "to",
          explain: "'Oblivious to' = ajeno a."
        }, {
          sentence: "He was conducive ___ nothing productive.",
          options: ["to", "of", "for", "with"],
          answer: "to",
          explain: "'Conducive to' = que propicia."
        }]
      },
      C2: {
        gaps: [{
          sentence: "The policy is tantamount ___ censorship.",
          options: ["to", "of", "with", "for"],
          answer: "to",
          explain: "'Tantamount to' = equivalente a."
        }, {
          sentence: "They remain impervious ___ reason.",
          options: ["to", "of", "from", "with"],
          answer: "to",
          explain: "'Impervious to' = insensible a."
        }, {
          sentence: "His conduct was devoid ___ any empathy.",
          options: ["of", "from", "to", "with"],
          answer: "of",
          explain: "'Devoid of' = carente de."
        }]
      }
    }
  }];
  const ALL_BLOCKS = [...CONTENT_BLOCKS, ...GRAMMAR_BLOCKS];
  const DAILY_SIZE = 10;
  const START_HEARTS = 5;

  // ============================================================
  //  PALETAS
  //  Para cambiar el aspecto de la app entera solo hay que tocar
  //  este bloque. Cada paleta define la tinta, el fondo neutro y
  //  un color por bloque. Si añades un bloque nuevo y no le pones
  //  color aquí, se le asigna uno del ciclo automáticamente.
  // ============================================================
  const PALETTES = {
    neon: {
      label: "Neón",
      ink: "#0D0D0D",
      paper: "#F2F0EB",
      cycle: ["#DFFF3E", "#FF4A17", "#FFC400", "#12E06A", "#B3A0FF", "#FF7BD5", "#00D9E8", "#F2F0EB"],
      blocks: {
        saludos: "#DFFF3E",
        comida: "#FF4A17",
        familia: "#FFC400",
        viajes: "#12E06A",
        tiempos: "#B3A0FF",
        condicionales: "#FF7BD5",
        phrasal: "#00D9E8",
        preposiciones: "#F2F0EB"
      }
    },
    taller: {
      label: "Taller",
      ink: "#141210",
      paper: "#E8E2D6",
      cycle: ["#E2C044", "#D8552F", "#C9A227", "#7A9E5B", "#9C8AA5", "#C77B8B", "#5E8C8A", "#E8E2D6"],
      blocks: {
        saludos: "#E2C044",
        comida: "#D8552F",
        familia: "#C9A227",
        viajes: "#7A9E5B",
        tiempos: "#9C8AA5",
        condicionales: "#C77B8B",
        phrasal: "#5E8C8A",
        preposiciones: "#E8E2D6"
      }
    },
    tinta: {
      label: "Tinta",
      ink: "#0A0A0A",
      paper: "#FFFFFF",
      cycle: ["#FFFFFF", "#FF3B00", "#FFFFFF", "#FF3B00", "#FFFFFF", "#FF3B00", "#FFFFFF", "#FF3B00"],
      blocks: {
        saludos: "#FFFFFF",
        comida: "#FF3B00",
        familia: "#FFFFFF",
        viajes: "#FF3B00",
        tiempos: "#FFFFFF",
        condicionales: "#FF3B00",
        phrasal: "#FFFFFF",
        preposiciones: "#FF3B00"
      }
    }
  };
  const PALETTE_IDS = Object.keys(PALETTES);
  const DEFAULT_PALETTE = "neon";
  function getPalette(id) {
    return PALETTES[id] || PALETTES[DEFAULT_PALETTE];
  }

  // color de un bloque dentro de la paleta activa
  function blockColor(paletteId, blockId) {
    const pal = getPalette(paletteId);
    if (pal.blocks[blockId]) return pal.blocks[blockId];
    const idx = ALL_BLOCKS.findIndex(b => b.id === blockId);
    return pal.cycle[(idx < 0 ? 0 : idx) % pal.cycle.length];
  }

  // Variables CSS + tipografías + animaciones. Cambiar de paleta
  // reescribe estas variables y toda la interfaz cambia con ellas.
  function globalCss(paletteId) {
    const pal = getPalette(paletteId);
    return `

:root {
  --ink: ${pal.ink};
  --paper: ${pal.paper};
}

@keyframes ten-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes ten-shake {
  0%,100% { transform: translateX(0); }
  18% { transform: translateX(-6px); }
  36% { transform: translateX(6px); }
  54% { transform: translateX(-4px); }
  72% { transform: translateX(3px); }
}
@keyframes ten-xp {
  0% { opacity: 0; transform: translateY(4px); }
  22% { opacity: 1; }
  100% { opacity: 0; transform: translateY(-40px); }
}
@keyframes ten-ghost {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
}
`;
  }

  // ---------- Utilidades ----------
  function shuffled(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function pick(arr, n) {
    return shuffled(arr).slice(0, n);
  }
  function normalizeAnswer(str) {
    return str.toLowerCase().trim().replace(/[.,!?;:"']/g, "").replace(/\s+/g, " ");
  }
  function pad2(n) {
    return String(n).padStart(2, "0");
  }

  // ---------- Guardado ----------
  const STORE_KEY = "ten:progress";
  const LEGACY_KEY = "inglear:progress"; // copias de la versión anterior

  async function readKey(key) {
    try {
      if (typeof window !== "undefined" && window.storage) {
        const res = await window.storage.get(key);
        return res && res.value ? JSON.parse(res.value) : null;
      }
      if (typeof window !== "undefined" && window.localStorage) {
        const raw = window.localStorage.getItem(key);
        return raw ? JSON.parse(raw) : null;
      }
    } catch (e) {
      /* clave inexistente: arrancamos limpios */
    }
    return null;
  }
  async function loadProgress() {
    const current = await readKey(STORE_KEY);
    if (current) return current;
    return await readKey(LEGACY_KEY); // migración desde In·Glear
  }
  async function saveProgress(data) {
    const payload = JSON.stringify(data);
    try {
      if (typeof window !== "undefined" && window.storage) {
        await window.storage.set(STORE_KEY, payload);
        return true;
      }
      if (typeof window !== "undefined" && window.localStorage) {
        window.localStorage.setItem(STORE_KEY, payload);
        return true;
      }
    } catch (e) {
      console.error("No se pudo guardar:", e);
    }
    return false;
  }
  function todayStamp() {
    return new Date().toISOString().slice(0, 10);
  }
  function daysBetween(a, b) {
    return Math.round((new Date(b + "T00:00:00") - new Date(a + "T00:00:00")) / 86400000);
  }
  function nextStreak(streak, lastPlayed) {
    if (!lastPlayed) return 1;
    const gap = daysBetween(lastPlayed, todayStamp());
    if (gap === 0) return Math.max(streak, 1);
    if (gap === 1) return streak + 1;
    return 1;
  }
  function streakOnLoad(streak, lastPlayed) {
    if (!lastPlayed) return 0;
    return daysBetween(lastPlayed, todayStamp()) <= 1 ? streak : 0;
  }
  function downloadBackup(data) {
    try {
      const blob = new Blob([JSON.stringify(data, null, 2)], {
        type: "application/json"
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `t-en-progreso-${todayStamp()}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      return true;
    } catch (e) {
      return false;
    }
  }

  // En iPhone la descarga es poco fiable; el portapapeles funciona siempre.
  async function copyBackupToClipboard(data) {
    const text = JSON.stringify(data);
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
        return true;
      }
    } catch (e) {
      /* probamos el método antiguo */
    }
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.top = "-1000px";
      document.body.appendChild(ta);
      ta.select();
      ta.setSelectionRange(0, text.length);
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      return ok;
    } catch (e) {
      return false;
    }
  }
  function parseBackup(raw) {
    let obj;
    try {
      obj = typeof raw === "string" ? JSON.parse(raw) : raw;
    } catch (e) {
      return {
        ok: false,
        error: "El archivo no tiene un formato válido."
      };
    }
    if (!obj || typeof obj !== "object" || Array.isArray(obj)) {
      return {
        ok: false,
        error: "Esto no parece una copia de T-EN."
      };
    }
    const level = LEVELS.includes(obj.level) ? obj.level : null;
    const xp = Number.isFinite(obj.xp) ? obj.xp : null;
    const streak = Number.isFinite(obj.streak) ? obj.streak : null;
    const rawMistakes = obj.mistakes && typeof obj.mistakes === "object" && !Array.isArray(obj.mistakes) ? obj.mistakes : null;
    if (level === null && xp === null && rawMistakes === null) {
      return {
        ok: false,
        error: "Esto no parece una copia de T-EN."
      };
    }
    const mistakes = {};
    let discarded = 0;
    Object.entries(rawMistakes || {}).forEach(([key, entry]) => {
      const valid = entry && typeof entry === "object" && ALL_BLOCKS.some(b => b.id === entry.blockId) && LEVELS.includes(entry.level) && entry.data && typeof entry.data === "object";
      if (valid) mistakes[key] = entry;else discarded++;
    });
    const data = {
      level: level || DEFAULT_LEVEL,
      xp: xp === null ? 0 : xp,
      streak: streak === null ? 0 : streak,
      mistakes,
      lastPlayed: typeof obj.lastPlayed === "string" ? obj.lastPlayed : null,
      palette: PALETTE_IDS.includes(obj.palette) ? obj.palette : DEFAULT_PALETTE
    };
    return {
      ok: true,
      data,
      summary: {
        level: data.level,
        xp: data.xp,
        streak: data.streak,
        mistakes: Object.keys(mistakes).length,
        discarded,
        savedAt: typeof obj.savedAt === "string" ? obj.savedAt.slice(0, 10) : null
      }
    };
  }

  // ---------- Material de ejercicios ----------
  function seedKey(seed) {
    if (seed.kind === "vocab") return `v::${seed.blockId}::${seed.level}::${seed.data.es}`;
    if (seed.kind === "sentence") return `s::${seed.blockId}::${seed.level}::${seed.data.es}`;
    return `g::${seed.blockId}::${seed.level}::${seed.data.sentence}`;
  }
  function collectSeeds(blocks, levels) {
    const vocab = [],
      sentences = [],
      gaps = [];
    blocks.forEach(block => {
      levels.forEach(lv => {
        const bank = block.levels[lv];
        if (!bank) return;
        (bank.vocab || []).forEach(data => vocab.push({
          kind: "vocab",
          blockId: block.id,
          block,
          level: lv,
          data
        }));
        (bank.sentences || []).forEach(data => sentences.push({
          kind: "sentence",
          blockId: block.id,
          block,
          level: lv,
          data
        }));
        (bank.gaps || []).forEach(data => gaps.push({
          kind: "gap",
          blockId: block.id,
          block,
          level: lv,
          data
        }));
      });
    });
    return {
      vocab,
      sentences,
      gaps
    };
  }
  function blockAvailability(block, level) {
    const {
      vocab,
      sentences,
      gaps
    } = collectSeeds([block], levelRange(level));
    return vocab.length + sentences.length + gaps.length;
  }
  function prioritize(seeds, mistakes) {
    const missed = seeds.filter(s => mistakes[seedKey(s)]);
    const rest = seeds.filter(s => !mistakes[seedKey(s)]);
    return [...shuffled(missed), ...shuffled(rest)];
  }
  function baseQ(seed) {
    return {
      seedKey: seedKey(seed),
      seed,
      blockId: seed.blockId,
      blockTitle: seed.block ? seed.block.title : "Repaso",
      level: seed.level
    };
  }
  function makeMc(seed, pool) {
    const item = seed.data;
    const direction = Math.random() < 0.5 ? "es-en" : "en-es";
    const correct = direction === "es-en" ? item.en : item.es;
    const others = pool.filter(s => s.data.es !== item.es).map(s => s.data);
    const distractors = pick(others, 3).map(v => direction === "es-en" ? v.en : v.es);
    return {
      ...baseQ(seed),
      type: "mc",
      eyebrow: direction === "es-en" ? "Traduce al inglés" : "¿Qué significa?",
      prompt: direction === "es-en" ? item.es : item.en,
      options: shuffled([correct, ...distractors]),
      answer: correct
    };
  }
  function makeWrite(seed) {
    return {
      ...baseQ(seed),
      type: "write",
      eyebrow: "Escríbelo en inglés",
      prompt: seed.data.es,
      answer: seed.data.en
    };
  }
  function makeBuild(seed) {
    return {
      ...baseQ(seed),
      type: "build",
      eyebrow: "Ordena las palabras",
      prompt: seed.data.es,
      bank: seed.data.en,
      answer: seed.data.en
    };
  }
  function makeGap(seed) {
    return {
      ...baseQ(seed),
      type: "gap",
      eyebrow: "Completa la frase",
      prompt: seed.data.sentence,
      options: shuffled(seed.data.options),
      answer: seed.data.answer,
      explain: seed.data.explain
    };
  }
  function makeMatch(seeds) {
    const chosen = pick(seeds, 4);
    return {
      seedKey: null,
      seed: null,
      blockId: chosen[0].blockId,
      blockTitle: chosen[0].block.title,
      level: chosen[0].level,
      type: "match",
      eyebrow: "Empareja los pares",
      prompt: "",
      pairs: chosen.map(s => s.data)
    };
  }
  function generateLesson({
    blocks,
    level,
    mistakes,
    count
  }) {
    const levels = levelRange(level);
    const {
      vocab,
      sentences,
      gaps
    } = collectSeeds(blocks, levels);
    const vocabQueue = prioritize(vocab, mistakes);
    const sentenceQueue = prioritize(sentences, mistakes);
    const gapQueue = prioritize(gaps, mistakes);
    const gapQuota = Math.round(count * 0.35);
    let gapTarget = Math.min(gapQueue.length, gapQuota);
    let buildTarget = Math.min(sentenceQueue.length, Math.round(count * 0.22));
    let writeTarget = Math.min(Math.max(0, vocabQueue.length - 2), Math.round(count * 0.2));

    // si el bloque no tiene gramática, ese cupo va a ordenar y escribir
    let unused = gapQuota - gapTarget;
    if (unused > 0) {
      const extraBuild = Math.min(unused, sentenceQueue.length - buildTarget);
      buildTarget += extraBuild;
      unused -= extraBuild;
      writeTarget += Math.min(unused, Math.max(0, vocabQueue.length - writeTarget - 2));
    }
    const wantMatch = vocabQueue.length >= 4 && count >= 6 && Math.random() < 0.4;
    const matchTarget = wantMatch ? 1 : 0;
    let mcTarget = count - gapTarget - buildTarget - writeTarget - matchTarget;
    if (mcTarget > vocabQueue.length - writeTarget) {
      const deficit = mcTarget - Math.max(0, vocabQueue.length - writeTarget);
      mcTarget -= deficit;
      const extraGaps = Math.min(deficit, gapQueue.length - gapTarget);
      gapTarget += extraGaps;
      buildTarget += Math.min(deficit - extraGaps, sentenceQueue.length - buildTarget);
    }
    const questions = [];
    const used = new Set();
    for (let i = 0; i < gapTarget && i < gapQueue.length; i++) questions.push(makeGap(gapQueue[i]));
    for (let i = 0; i < buildTarget && i < sentenceQueue.length; i++) questions.push(makeBuild(sentenceQueue[i]));
    let vi = 0;
    for (let i = 0; i < writeTarget && vi < vocabQueue.length; i++, vi++) {
      used.add(seedKey(vocabQueue[vi]));
      questions.push(makeWrite(vocabQueue[vi]));
    }
    for (let i = 0; i < mcTarget && vi < vocabQueue.length; i++, vi++) {
      const seed = vocabQueue[vi];
      used.add(seedKey(seed));
      const sameBlock = vocab.filter(s => s.blockId === seed.blockId && s.level === seed.level);
      questions.push(makeMc(seed, sameBlock.length >= 4 ? sameBlock : vocab));
    }
    if (matchTarget && vocab.length >= 4) {
      const pool = vocab.filter(s => !used.has(seedKey(s)));
      questions.push(makeMatch(pool.length >= 4 ? pool : vocab));
    }
    return shuffled(questions).slice(0, count);
  }
  function generateReviewLesson(mistakes, maxCount) {
    const entries = shuffled(Object.values(mistakes)).slice(0, maxCount);
    return shuffled(entries.map(entry => {
      const block = ALL_BLOCKS.find(b => b.id === entry.blockId);
      const seed = {
        kind: entry.kind,
        blockId: entry.blockId,
        block,
        level: entry.level,
        data: entry.data
      };
      if (entry.kind === "gap") return makeGap(seed);
      if (entry.kind === "sentence") return makeBuild(seed);
      if (Math.random() < 0.5 && block) {
        const bank = block.levels[entry.level];
        const pool = (bank && bank.vocab ? bank.vocab : []).map(data => ({
          data
        }));
        return makeMc(seed, pool.length >= 4 ? pool : [{
          data: entry.data
        }]);
      }
      return makeWrite(seed);
    }));
  }

  // ============================================================
  //  COMPONENTES COMPARTIDOS
  // ============================================================

  // Numeral gigante recortado por el borde: hace de fondo y de
  // marcador de posición, en lugar de una barra de progreso.
  function GhostNumber({
    value,
    light
  }) {
    return /*#__PURE__*/React.createElement("div", {
      key: value,
      style: {
        position: "absolute",
        right: -10,
        bottom: -54,
        fontFamily: "'Anton', Impact, sans-serif",
        fontSize: 260,
        lineHeight: 0.75,
        color: light ? "rgba(255,255,255,0.09)" : "rgba(0,0,0,0.08)",
        pointerEvents: "none",
        userSelect: "none",
        animation: "ten-ghost 0.4s ease both"
      }
    }, value);
  }

  // Fila de palabras reordenable. Usa pointer events porque el
  // arrastre nativo de HTML no responde al dedo en iOS.
  function BuildRow({
    words,
    disabled,
    onRemove,
    onReorder
  }) {
    const [dragIndex, setDragIndex] = useState(null);
    const movedRef = React.useRef(false);
    const indexRef = React.useRef(null);
    function down(e, i) {
      if (disabled) return;
      movedRef.current = false;
      indexRef.current = i;
      setDragIndex(i);
      if (e.currentTarget.setPointerCapture) {
        try {
          e.currentTarget.setPointerCapture(e.pointerId);
        } catch (err) {/* ignorado */}
      }
    }
    function move(e) {
      if (disabled || indexRef.current === null) return;
      const el = document.elementFromPoint(e.clientX, e.clientY);
      const target = el && el.closest ? el.closest("[data-chosen-index]") : null;
      if (!target) return;
      const to = Number(target.getAttribute("data-chosen-index"));
      const from = indexRef.current;
      if (Number.isNaN(to) || to === from) return;
      movedRef.current = true;
      onReorder(from, to);
      indexRef.current = to;
      setDragIndex(to);
    }
    function up() {
      if (disabled) return;
      const from = indexRef.current;
      if (!movedRef.current && from !== null) onRemove(from);
      indexRef.current = null;
      movedRef.current = false;
      setDragIndex(null);
    }
    return /*#__PURE__*/React.createElement("div", {
      style: S.buildRow
    }, words.length === 0 && /*#__PURE__*/React.createElement("span", {
      style: S.buildHint
    }, "toca las palabras · arrastra para reordenar"), words.map((w, i) => /*#__PURE__*/React.createElement("button", {
      key: `${w}-${i}`,
      "data-chosen-index": i,
      onPointerDown: e => down(e, i),
      onPointerMove: move,
      onPointerUp: up,
      onPointerCancel: up,
      disabled: disabled,
      style: {
        ...S.wordPicked,
        touchAction: "none",
        transform: dragIndex === i ? "scale(1.07)" : "scale(1)",
        transition: "transform .12s ease"
      }
    }, w)));
  }
  function MatchQuestion({
    question,
    onResolved
  }) {
    const left = useMemo(() => question.pairs, [question]);
    const right = useMemo(() => shuffled(question.pairs), [question]);
    const [matched, setMatched] = useState([]);
    const [sel, setSel] = useState(null);
    const [wrong, setWrong] = useState(null);
    function tapRight(es) {
      if (!sel || matched.includes(es)) return;
      if (sel === es) {
        const next = [...matched, es];
        setMatched(next);
        setSel(null);
        if (next.length === left.length) setTimeout(() => onResolved(true), 320);
      } else {
        setWrong(es);
        setTimeout(() => setWrong(null), 380);
        setSel(null);
      }
    }
    return /*#__PURE__*/React.createElement("div", {
      style: S.matchGrid
    }, /*#__PURE__*/React.createElement("div", {
      style: S.matchCol
    }, left.map(it => {
      const done = matched.includes(it.es);
      const on = sel === it.es;
      return /*#__PURE__*/React.createElement("button", {
        key: it.es,
        onClick: () => !done && setSel(it.es),
        disabled: done,
        style: {
          ...S.matchCell,
          background: on || done ? "var(--ink)" : "transparent",
          color: on || done ? "var(--block)" : "var(--ink)",
          opacity: done ? 0.4 : 1
        }
      }, it.es);
    })), /*#__PURE__*/React.createElement("div", {
      style: S.matchCol
    }, right.map(it => {
      const done = matched.includes(it.es);
      const bad = wrong === it.es;
      return /*#__PURE__*/React.createElement("button", {
        key: it.en,
        onClick: () => tapRight(it.es),
        disabled: done,
        style: {
          ...S.matchCell,
          background: done ? "var(--ink)" : "transparent",
          color: done ? "var(--block)" : "var(--ink)",
          opacity: done ? 0.4 : 1,
          animation: bad ? "ten-shake .38s ease" : "none"
        }
      }, it.en);
    })));
  }

  // ============================================================
  //  APLICACIÓN
  // ============================================================
  function TenApp() {
    const [palette, setPalette] = useState(DEFAULT_PALETTE);
    const [level, setLevel] = useState(DEFAULT_LEVEL);
    const [screen, setScreen] = useState("home");
    const [menuOpen, setMenuOpen] = useState(false);
    const [meta, setMeta] = useState(null);
    const [questions, setQuestions] = useState([]);
    const [qIndex, setQIndex] = useState(0);
    const [hearts, setHearts] = useState(START_HEARTS);
    const [xp, setXp] = useState(0);
    const [streak, setStreak] = useState(0);
    const [feedback, setFeedback] = useState(null);
    const [selected, setSelected] = useState(null);
    const [buildChoice, setBuildChoice] = useState([]);
    const [buildBank, setBuildBank] = useState([]);
    const [writeValue, setWriteValue] = useState("");
    const [sessionCorrect, setSessionCorrect] = useState(0);
    const [sessionTotal, setSessionTotal] = useState(0);
    const [failed, setFailed] = useState(false);
    const [mistakes, setMistakes] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [lastPlayed, setLastPlayed] = useState(null);
    const [note, setNote] = useState(null);
    const [dataOpen, setDataOpen] = useState(false);
    const [importText, setImportText] = useState("");
    const [importPreview, setImportPreview] = useState(null);
    const [importError, setImportError] = useState(null);
    const mistakesCount = Object.keys(mistakes).length;
    const question = questions[qIndex] || null;
    useEffect(() => {
      let cancelled = false;
      loadProgress().then(d => {
        if (cancelled) return;
        if (d) {
          if (LEVELS.includes(d.level)) setLevel(d.level);
          if (PALETTE_IDS.includes(d.palette)) setPalette(d.palette);
          if (typeof d.xp === "number") setXp(d.xp);
          if (d.mistakes && typeof d.mistakes === "object") setMistakes(d.mistakes);
          setLastPlayed(d.lastPlayed || null);
          setStreak(streakOnLoad(d.streak || 0, d.lastPlayed));
        }
        setLoaded(true);
      });
      return () => {
        cancelled = true;
      };
    }, []);
    useEffect(() => {
      if (!loaded) return;
      saveProgress({
        level,
        xp,
        streak,
        mistakes,
        lastPlayed,
        palette,
        savedAt: new Date().toISOString()
      });
    }, [loaded, level, xp, streak, mistakes, lastPlayed, palette]);
    function snapshot() {
      return {
        level,
        xp,
        streak,
        mistakes,
        lastPlayed,
        palette,
        savedAt: new Date().toISOString()
      };
    }
    function flash(msg) {
      setNote(msg);
      setTimeout(() => setNote(null), 2600);
    }
    function resetSession() {
      setQIndex(0);
      setHearts(START_HEARTS);
      setSessionCorrect(0);
      setSessionTotal(0);
      setFailed(false);
      setFeedback(null);
      setSelected(null);
      setWriteValue("");
    }
    function launch(m, generated) {
      if (generated.length === 0) return;
      setStreak(s => nextStreak(s, lastPlayed));
      setLastPlayed(todayStamp());
      setMeta(m);
      setQuestions(generated);
      resetSession();
      if (generated[0].type === "build") setUpBuild(generated[0]);
      setMenuOpen(false);
      setScreen("lesson");
    }
    function startDaily() {
      launch({
        title: "Lección diaria",
        kind: "daily"
      }, generateLesson({
        blocks: ALL_BLOCKS,
        level,
        mistakes,
        count: DAILY_SIZE
      }));
    }
    function startBlock(block) {
      launch({
        title: block.title,
        kind: "block",
        blockId: block.id
      }, generateLesson({
        blocks: [block],
        level,
        mistakes,
        count: DAILY_SIZE
      }));
    }
    function startReview() {
      if (mistakesCount === 0) return;
      launch({
        title: "Repaso",
        kind: "review"
      }, generateReviewLesson(mistakes, DAILY_SIZE));
    }
    function setUpBuild(q) {
      setBuildChoice([]);
      setBuildBank(shuffled(q.bank));
    }
    function record(q, correct) {
      if (!q.seedKey || !q.seed) return;
      setMistakes(prev => {
        const next = {
          ...prev
        };
        if (correct) delete next[q.seedKey];else next[q.seedKey] = {
          blockId: q.seed.blockId,
          level: q.seed.level,
          kind: q.seed.kind,
          data: q.seed.data
        };
        return next;
      });
    }
    function choose(option) {
      if (feedback) return;
      setSelected(option);
      const ok = option === question.answer;
      record(question, ok);
      resolve(ok);
    }
    function tapBank(word, idx) {
      if (feedback) return;
      setBuildChoice(c => [...c, word]);
      setBuildBank(b => b.filter((_, i) => i !== idx));
    }
    function removeWord(idx) {
      if (feedback) return;
      const word = buildChoice[idx];
      setBuildChoice(c => c.filter((_, i) => i !== idx));
      setBuildBank(b => [...b, word]);
    }
    function reorderWord(from, to) {
      if (feedback) return;
      setBuildChoice(c => {
        if (from === to || from < 0 || to < 0 || from >= c.length || to >= c.length) return c;
        const n = [...c];
        const [m] = n.splice(from, 1);
        n.splice(to, 0, m);
        return n;
      });
    }
    function submitBuild() {
      if (feedback) return;
      const ok = buildChoice.join(" ") === question.answer.join(" ");
      record(question, ok);
      resolve(ok);
    }
    function submitWrite() {
      if (feedback || writeValue.trim() === "") return;
      const ok = normalizeAnswer(writeValue) === normalizeAnswer(question.answer);
      record(question, ok);
      resolve(ok);
    }
    function resolve(correct) {
      setFeedback({
        correct
      });
      setSessionTotal(t => t + 1);
      if (correct) {
        setXp(x => x + 10);
        setSessionCorrect(c => c + 1);
      } else {
        setHearts(h => {
          const left = h - 1;
          if (left <= 0) setFailed(true);
          return left;
        });
      }
    }
    function next() {
      if (failed) {
        setScreen("home");
        return;
      }
      if (qIndex === questions.length - 1) {
        setScreen("summary");
        return;
      }
      const i = qIndex + 1;
      setQIndex(i);
      setFeedback(null);
      setSelected(null);
      setWriteValue("");
      if (questions[i].type === "build") setUpBuild(questions[i]);
    }
    function goHome() {
      setScreen("home");
      setMeta(null);
    }

    // --- copia de seguridad ---
    async function copyData() {
      flash((await copyBackupToClipboard(snapshot())) ? "Copiado al portapapeles" : "No se pudo copiar");
    }
    function downloadData() {
      flash(downloadBackup(snapshot()) ? "Archivo descargado" : "No se pudo descargar");
    }
    function reviewBackup(raw) {
      const r = parseBackup(raw);
      if (!r.ok) {
        setImportError(r.error);
        setImportPreview(null);
        return;
      }
      setImportError(null);
      setImportPreview(r);
    }
    function importFile(file) {
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => reviewBackup(String(reader.result));
      reader.onerror = () => setImportError("No se pudo leer el archivo.");
      reader.readAsText(file);
    }
    function confirmImport() {
      if (!importPreview) return;
      const d = importPreview.data;
      setLevel(d.level);
      setXp(d.xp);
      setMistakes(d.mistakes);
      setLastPlayed(d.lastPlayed);
      setStreak(streakOnLoad(d.streak, d.lastPlayed));
      if (d.palette) setPalette(d.palette);
      setImportPreview(null);
      setImportText("");
      setDataOpen(false);
      flash("Progreso restaurado");
    }

    // color de fondo de la pantalla actual
    const pal = getPalette(palette);
    const activeColor = screen === "lesson" && question ? blockColor(palette, question.blockId) : screen === "summary" && meta && meta.blockId ? blockColor(palette, meta.blockId) : pal.paper;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        ...S.shell,
        ["--block"]: activeColor
      }
    }, /*#__PURE__*/React.createElement("style", null, globalCss(palette)), screen === "home" && /*#__PURE__*/React.createElement(HomeScreen, {
      level: level,
      onLevel: setLevel,
      xp: xp,
      streak: streak,
      mistakesCount: mistakesCount,
      onDaily: startDaily,
      onReview: startReview,
      onMenu: () => setMenuOpen(true),
      palette: palette,
      onPalette: setPalette,
      note: note,
      dataOpen: dataOpen,
      onToggleData: () => {
        setDataOpen(v => !v);
        setImportPreview(null);
        setImportError(null);
      },
      onCopy: copyData,
      onDownload: downloadData,
      importText: importText,
      onImportText: setImportText,
      onReviewText: () => reviewBackup(importText),
      onImportFile: importFile,
      importPreview: importPreview,
      importError: importError,
      onConfirmImport: confirmImport
    }), screen === "lesson" && question && /*#__PURE__*/React.createElement(LessonScreen, {
      palette: palette,
      question: question,
      qIndex: qIndex,
      total: questions.length,
      hearts: hearts,
      feedback: feedback,
      selected: selected,
      failed: failed,
      buildChoice: buildChoice,
      buildBank: buildBank,
      writeValue: writeValue,
      onWrite: setWriteValue,
      onSubmitWrite: submitWrite,
      onChoose: choose,
      onTapBank: tapBank,
      onRemoveWord: removeWord,
      onReorderWord: reorderWord,
      onSubmitBuild: submitBuild,
      onMatchDone: ok => !feedback && resolve(ok),
      onNext: next,
      onExit: goHome
    }), screen === "summary" && meta && /*#__PURE__*/React.createElement(SummaryScreen, {
      meta: meta,
      accuracy: sessionTotal ? Math.round(sessionCorrect / sessionTotal * 100) : 0,
      xpEarned: sessionCorrect * 10,
      streak: streak,
      errors: sessionTotal - sessionCorrect,
      onHome: goHome
    }), menuOpen && /*#__PURE__*/React.createElement(BlockMenu, {
      palette: palette,
      level: level,
      onPick: startBlock,
      onClose: () => setMenuOpen(false)
    }));
  }

  // ---------- Inicio ----------
  function HomeScreen({
    level,
    onLevel,
    xp,
    streak,
    mistakesCount,
    onDaily,
    onReview,
    onMenu,
    palette,
    onPalette,
    note,
    dataOpen,
    onToggleData,
    onCopy,
    onDownload,
    importText,
    onImportText,
    onReviewText,
    onImportFile,
    importPreview,
    importError,
    onConfirmImport
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        ...S.page,
        background: "var(--paper)",
        color: "var(--ink)"
      }
    }, /*#__PURE__*/React.createElement(GhostNumber, {
      value: DAILY_SIZE
    }), /*#__PURE__*/React.createElement("div", {
      style: S.topBar
    }, /*#__PURE__*/React.createElement("span", {
      style: S.wordmark
    }, "T‑EN"), /*#__PURE__*/React.createElement("button", {
      onClick: onMenu,
      style: S.linkBtn
    }, "[ bloques ]")), /*#__PURE__*/React.createElement("div", {
      style: S.ruleHard
    }), /*#__PURE__*/React.createElement("span", {
      style: S.eyebrow
    }, "Lección de hoy"), /*#__PURE__*/React.createElement("h1", {
      style: {
        ...S.display,
        fontSize: 92,
        marginTop: 4
      }
    }, DAILY_SIZE, /*#__PURE__*/React.createElement("br", null), "ejer­cicios"), /*#__PURE__*/React.createElement("div", {
      style: S.grow
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        ...S.eyebrow,
        marginBottom: 8
      }
    }, "Nivel"), /*#__PURE__*/React.createElement("div", {
      style: S.levelRow
    }, LEVELS.map(lv => /*#__PURE__*/React.createElement("button", {
      key: lv,
      onClick: () => onLevel(lv),
      style: {
        ...S.levelCell,
        background: lv === level ? "var(--ink)" : "transparent",
        color: lv === level ? "var(--paper)" : "var(--ink)"
      }
    }, lv))), /*#__PURE__*/React.createElement("button", {
      onClick: onDaily,
      style: {
        ...S.barBtn,
        marginTop: 14
      }
    }, /*#__PURE__*/React.createElement("span", null, "Empezar"), /*#__PURE__*/React.createElement("span", null, "→")), /*#__PURE__*/React.createElement("button", {
      onClick: onReview,
      disabled: mistakesCount === 0,
      style: {
        ...S.barBtnGhost,
        marginTop: 8,
        opacity: mistakesCount === 0 ? 0.35 : 1
      }
    }, /*#__PURE__*/React.createElement("span", null, mistakesCount === 0 ? "Sin errores pendientes" : `Repasar ${mistakesCount} errores`), /*#__PURE__*/React.createElement("span", null, "→")), /*#__PURE__*/React.createElement("div", {
      style: S.rule
    }), /*#__PURE__*/React.createElement("div", {
      style: S.metaRow
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", {
      style: S.metaNum
    }, streak), /*#__PURE__*/React.createElement("span", {
      style: S.metaLabel
    }, "Racha")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", {
      style: S.metaNum
    }, xp), /*#__PURE__*/React.createElement("span", {
      style: S.metaLabel
    }, "XP")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginLeft: "auto",
        display: "flex",
        gap: 10,
        alignItems: "flex-end"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => onPalette(PALETTE_IDS[(PALETTE_IDS.indexOf(palette) + 1) % PALETTE_IDS.length]),
      style: S.tinyBtn
    }, "paleta: ", getPalette(palette).label.toLowerCase()), /*#__PURE__*/React.createElement("button", {
      onClick: onToggleData,
      style: S.tinyBtn
    }, "datos"))), note && /*#__PURE__*/React.createElement("div", {
      style: S.note
    }, note), dataOpen && /*#__PURE__*/React.createElement("div", {
      style: S.dataPanel
    }, !importPreview && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: onCopy,
      style: S.smallBtn
    }, "Copiar mis datos"), /*#__PURE__*/React.createElement("button", {
      onClick: onDownload,
      style: S.smallBtnGhost
    }, "Archivo")), /*#__PURE__*/React.createElement("span", {
      style: {
        ...S.eyebrow,
        marginTop: 14,
        marginBottom: 6
      }
    }, "Restaurar una copia"), /*#__PURE__*/React.createElement("textarea", {
      value: importText,
      onChange: e => onImportText(e.target.value),
      placeholder: "pega aquí tu copia",
      rows: 3,
      spellCheck: "false",
      style: S.textarea
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        marginTop: 8,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: onReviewText,
      disabled: importText.trim() === "",
      style: {
        ...S.smallBtn,
        opacity: importText.trim() === "" ? 0.35 : 1
      }
    }, "Revisar"), /*#__PURE__*/React.createElement("input", {
      type: "file",
      onChange: e => onImportFile(e.target.files && e.target.files[0]),
      style: S.fileInput
    }))), importError && /*#__PURE__*/React.createElement("p", {
      style: S.errorText
    }, importError), importPreview && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      style: S.eyebrow
    }, "La copia contiene"), /*#__PURE__*/React.createElement("p", {
      style: S.previewText
    }, "Nivel ", importPreview.summary.level, " · ", importPreview.summary.xp, " XP · racha ", importPreview.summary.streak, " · ", importPreview.summary.mistakes, " errores", importPreview.summary.discarded > 0 && ` · ${importPreview.summary.discarded} descartados`), /*#__PURE__*/React.createElement("p", {
      style: {
        ...S.previewText,
        marginTop: 6
      }
    }, "Sustituirá tu progreso actual."), /*#__PURE__*/React.createElement("button", {
      onClick: onConfirmImport,
      style: {
        ...S.smallBtn,
        marginTop: 10
      }
    }, "Sustituir"))));
  }

  // ---------- Menú de bloques ----------
  function BlockMenu({
    palette,
    level,
    onPick,
    onClose
  }) {
    const sections = [{
      label: "Contenido",
      blocks: CONTENT_BLOCKS
    }, {
      label: "Gramática",
      blocks: GRAMMAR_BLOCKS
    }];
    return /*#__PURE__*/React.createElement("div", {
      style: S.overlay,
      onClick: onClose
    }, /*#__PURE__*/React.createElement("div", {
      style: S.menuSheet,
      onClick: e => e.stopPropagation()
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "26px 22px 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: S.topBar
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        ...S.wordmark,
        color: "var(--paper)"
      }
    }, "Bloques"), /*#__PURE__*/React.createElement("button", {
      onClick: onClose,
      style: {
        ...S.linkBtn,
        color: "var(--paper)"
      }
    }, "[ cerrar ]")), /*#__PURE__*/React.createElement("div", {
      style: {
        ...S.ruleHard,
        background: "var(--paper)"
      }
    })), sections.map(sec => /*#__PURE__*/React.createElement("div", {
      key: sec.label
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "12px 22px 8px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        ...S.eyebrow,
        color: "var(--paper)",
        opacity: 0.5
      }
    }, sec.label)), sec.blocks.map(b => {
      const n = blockAvailability(b, level);
      return /*#__PURE__*/React.createElement("button", {
        key: b.id,
        onClick: () => n > 0 && onPick(b),
        disabled: n === 0,
        style: {
          ...S.menuRow,
          background: blockColor(palette, b.id),
          opacity: n === 0 ? 0.3 : 1,
          cursor: n === 0 ? "default" : "pointer"
        }
      }, /*#__PURE__*/React.createElement("span", null, b.title), /*#__PURE__*/React.createElement("span", {
        style: S.menuCount
      }, n === 0 ? "—" : pad2(n)));
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "18px 22px 26px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        ...S.eyebrow,
        color: "var(--paper)",
        opacity: 0.5
      }
    }, "Nivel ", level, " y anteriores"))));
  }

  // ---------- Lección ----------
  function LessonScreen({
    palette,
    question,
    qIndex,
    total,
    hearts,
    feedback,
    selected,
    failed,
    buildChoice,
    buildBank,
    writeValue,
    onWrite,
    onSubmitWrite,
    onChoose,
    onTapBank,
    onRemoveWord,
    onReorderWord,
    onSubmitBuild,
    onMatchDone,
    onNext,
    onExit
  }) {
    const wrong = feedback && !feedback.correct;
    const color = blockColor(palette, question.blockId);
    const isChoice = question.type === "mc" || question.type === "gap";

    // al fallar la pantalla se invierte: fondo tinta, texto del color del bloque
    const bg = wrong ? "var(--ink)" : color;
    const fg = wrong ? color : "var(--ink)";
    return /*#__PURE__*/React.createElement("div", {
      style: {
        ...S.page,
        background: bg,
        color: fg,
        ["--block"]: color
      }
    }, /*#__PURE__*/React.createElement(GhostNumber, {
      value: pad2(qIndex + 1),
      light: wrong
    }), /*#__PURE__*/React.createElement("div", {
      style: S.topBar
    }, /*#__PURE__*/React.createElement("button", {
      onClick: onExit,
      style: {
        ...S.linkBtn,
        color: fg
      }
    }, "[ salir ]"), /*#__PURE__*/React.createElement("span", {
      style: S.counter
    }, pad2(qIndex + 1), " / ", pad2(total))), /*#__PURE__*/React.createElement("div", {
      style: {
        ...S.ruleHard,
        background: fg
      }
    }), !wrong && /*#__PURE__*/React.createElement("div", {
      style: {
        animation: "ten-in .3s ease both"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: S.chipRow
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        ...S.eyebrow,
        opacity: 1
      }
    }, question.blockTitle), /*#__PURE__*/React.createElement("span", {
      style: S.levelTag
    }, question.level)), feedback && feedback.correct && /*#__PURE__*/React.createElement("span", {
      style: S.xpFloat
    }, "+10 XP"), /*#__PURE__*/React.createElement("span", {
      style: {
        ...S.eyebrow,
        display: "block",
        marginTop: 14
      }
    }, question.eyebrow), question.type === "gap" ? /*#__PURE__*/React.createElement("div", {
      style: S.gapBox
    }, question.prompt) : question.prompt ? /*#__PURE__*/React.createElement("h2", {
      style: {
        ...S.display,
        fontSize: 40,
        marginTop: 8
      }
    }, question.prompt) : null, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 18
      }
    }), isChoice && question.type === "mc" && /*#__PURE__*/React.createElement("div", null, question.options.map((opt, i) => {
      const on = selected === opt;
      const isAns = opt === question.answer;
      const mark = feedback && (on || isAns);
      return /*#__PURE__*/React.createElement("button", {
        key: opt,
        onClick: () => onChoose(opt),
        disabled: !!feedback,
        style: {
          ...S.optRow,
          background: mark ? "var(--ink)" : "transparent",
          color: mark ? color : "var(--ink)",
          borderBottomColor: mark ? "transparent" : "rgba(0,0,0,.22)",
          paddingLeft: mark ? 12 : 0
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: S.optKey
      }, "ABCD"[i]), /*#__PURE__*/React.createElement("span", null, opt));
    })), isChoice && question.type === "gap" && /*#__PURE__*/React.createElement("div", {
      style: S.gapGrid
    }, question.options.map(opt => {
      const on = selected === opt;
      const isAns = opt === question.answer;
      const mark = feedback && (on || isAns);
      return /*#__PURE__*/React.createElement("button", {
        key: opt,
        onClick: () => onChoose(opt),
        disabled: !!feedback,
        style: {
          ...S.gapCell,
          background: mark ? "var(--ink)" : "transparent",
          color: mark ? color : "var(--ink)"
        }
      }, opt);
    })), question.type === "write" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: writeValue,
      onChange: e => onWrite(e.target.value),
      onKeyDown: e => e.key === "Enter" && onSubmitWrite(),
      disabled: !!feedback,
      placeholder: "escribe en inglés",
      autoCapitalize: "none",
      autoCorrect: "off",
      spellCheck: "false",
      style: S.input
    }), !feedback && /*#__PURE__*/React.createElement("button", {
      onClick: onSubmitWrite,
      disabled: writeValue.trim() === "",
      style: {
        ...S.barBtn,
        marginTop: 12,
        opacity: writeValue.trim() === "" ? 0.35 : 1
      }
    }, /*#__PURE__*/React.createElement("span", null, "Comprobar"), /*#__PURE__*/React.createElement("span", null, "→"))), question.type === "build" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(BuildRow, {
      words: buildChoice,
      disabled: !!feedback,
      onRemove: onRemoveWord,
      onReorder: onReorderWord
    }), /*#__PURE__*/React.createElement("div", {
      style: S.bankRow
    }, buildBank.map((w, i) => /*#__PURE__*/React.createElement("button", {
      key: `${w}-${i}`,
      onClick: () => onTapBank(w, i),
      disabled: !!feedback,
      style: S.wordBank
    }, w))), !feedback && /*#__PURE__*/React.createElement("button", {
      onClick: onSubmitBuild,
      disabled: buildChoice.length === 0,
      style: {
        ...S.barBtn,
        marginTop: 16,
        opacity: buildChoice.length === 0 ? 0.35 : 1
      }
    }, /*#__PURE__*/React.createElement("span", null, "Comprobar"), /*#__PURE__*/React.createElement("span", null, "→"))), question.type === "match" && /*#__PURE__*/React.createElement(MatchQuestion, {
      key: qIndex,
      question: question,
      onResolved: onMatchDone
    })), wrong && /*#__PURE__*/React.createElement("div", {
      style: {
        animation: "ten-shake .42s ease both"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: S.chipRow
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        ...S.eyebrow,
        opacity: 1
      }
    }, question.blockTitle), /*#__PURE__*/React.createElement("span", {
      style: {
        ...S.levelTag,
        borderColor: color
      }
    }, question.level)), /*#__PURE__*/React.createElement("h2", {
      style: {
        ...S.display,
        fontSize: 70,
        marginTop: 14
      }
    }, "Casi"), /*#__PURE__*/React.createElement("span", {
      style: {
        ...S.eyebrow,
        display: "block",
        marginTop: 16
      }
    }, "La respuesta era"), /*#__PURE__*/React.createElement("p", {
      style: {
        ...S.answerText,
        color: color
      }
    }, Array.isArray(question.answer) ? question.answer.join(" ") : question.answer), question.explain && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        ...S.rule,
        background: color
      }
    }), /*#__PURE__*/React.createElement("p", {
      style: S.explainText
    }, question.explain))), /*#__PURE__*/React.createElement("div", {
      style: S.grow
    }), !feedback && /*#__PURE__*/React.createElement("div", {
      style: S.livesRow
    }, /*#__PURE__*/React.createElement("span", {
      style: S.eyebrow
    }, "Vidas"), /*#__PURE__*/React.createElement("span", {
      style: S.lives
    }, Array.from({
      length: START_HEARTS
    }).map((_, i) => i < hearts ? "◆" : "◇").join(" "))), feedback && /*#__PURE__*/React.createElement("button", {
      onClick: onNext,
      style: {
        ...S.barBtn,
        background: wrong ? color : "var(--ink)",
        color: wrong ? "var(--ink)" : color,
        animation: "ten-in .28s ease both"
      }
    }, /*#__PURE__*/React.createElement("span", null, failed ? "Volver al inicio" : qIndex === total - 1 ? "Ver resultado" : "Seguir"), /*#__PURE__*/React.createElement("span", null, "→")));
  }

  // ---------- Resumen ----------
  function SummaryScreen({
    meta,
    accuracy,
    xpEarned,
    streak,
    errors,
    onHome
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        ...S.page,
        background: "var(--block)",
        color: "var(--ink)"
      }
    }, /*#__PURE__*/React.createElement(GhostNumber, {
      value: accuracy
    }), /*#__PURE__*/React.createElement("div", {
      style: S.topBar
    }, /*#__PURE__*/React.createElement("span", {
      style: S.wordmark
    }, "Hecho"), /*#__PURE__*/React.createElement("span", {
      style: S.counter
    }, meta.title)), /*#__PURE__*/React.createElement("div", {
      style: S.ruleHard
    }), /*#__PURE__*/React.createElement("div", {
      style: S.grow
    }), /*#__PURE__*/React.createElement("span", {
      style: S.eyebrow
    }, "Aciertos"), /*#__PURE__*/React.createElement("div", {
      style: {
        ...S.display,
        fontSize: 104,
        marginTop: 2
      }
    }, accuracy, "%"), /*#__PURE__*/React.createElement("div", {
      style: S.rule
    }), /*#__PURE__*/React.createElement("div", {
      style: S.metaRow
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", {
      style: S.metaNum
    }, "+", xpEarned), /*#__PURE__*/React.createElement("span", {
      style: S.metaLabel
    }, "XP")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", {
      style: S.metaNum
    }, streak), /*#__PURE__*/React.createElement("span", {
      style: S.metaLabel
    }, "Racha")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", {
      style: S.metaNum
    }, errors), /*#__PURE__*/React.createElement("span", {
      style: S.metaLabel
    }, "Errores"))), /*#__PURE__*/React.createElement("div", {
      style: S.grow
    }), /*#__PURE__*/React.createElement("button", {
      onClick: onHome,
      style: S.barBtn
    }, /*#__PURE__*/React.createElement("span", null, "Volver al inicio"), /*#__PURE__*/React.createElement("span", null, "→")));
  }

  // ============================================================
  //  ESTILOS
  //  Los colores salen de las variables CSS que define la paleta,
  //  así que aquí no hay ningún color escrito a mano.
  // ============================================================
  const DISPLAY = "'Anton', Impact, 'Arial Narrow', sans-serif";
  const MONO = "'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace";
  const S = {
    shell: {
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      background: "var(--paper)"
    },
    page: {
      width: "100%",
      maxWidth: 460,
      minHeight: "100vh",
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      padding: "26px 22px 24px",
      fontFamily: MONO,
      transition: "background .35s ease, color .2s ease"
    },
    grow: {
      flex: 1,
      minHeight: 12
    },
    topBar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      position: "relative",
      zIndex: 1
    },
    wordmark: {
      fontFamily: MONO,
      fontWeight: 700,
      fontSize: 15,
      letterSpacing: ".02em",
      textTransform: "uppercase"
    },
    linkBtn: {
      background: "none",
      border: "none",
      padding: 0,
      fontFamily: MONO,
      fontSize: 11,
      letterSpacing: ".1em",
      color: "inherit",
      cursor: "pointer",
      textTransform: "uppercase"
    },
    counter: {
      fontFamily: MONO,
      fontSize: 11,
      letterSpacing: ".1em",
      textTransform: "uppercase"
    },
    ruleHard: {
      height: 2,
      background: "var(--ink)",
      margin: "12px 0 16px",
      position: "relative",
      zIndex: 1
    },
    rule: {
      height: 1,
      background: "currentColor",
      opacity: .3,
      margin: "16px 0",
      position: "relative",
      zIndex: 1
    },
    eyebrow: {
      fontFamily: MONO,
      fontSize: 10,
      letterSpacing: ".16em",
      textTransform: "uppercase",
      opacity: .6,
      position: "relative",
      zIndex: 1
    },
    display: {
      fontFamily: DISPLAY,
      textTransform: "uppercase",
      lineHeight: .87,
      letterSpacing: "-.015em",
      margin: 0,
      position: "relative",
      zIndex: 1,
      hyphens: "manual"
    },
    chipRow: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      position: "relative",
      zIndex: 1
    },
    levelTag: {
      fontFamily: MONO,
      fontSize: 10,
      fontWeight: 700,
      border: "1px solid currentColor",
      padding: "1px 6px",
      letterSpacing: ".08em"
    },
    levelRow: {
      display: "flex",
      border: "2px solid var(--ink)",
      position: "relative",
      zIndex: 1
    },
    levelCell: {
      flex: 1,
      padding: "10px 0",
      fontFamily: MONO,
      fontSize: 11,
      fontWeight: 700,
      border: "none",
      borderRight: "1px solid var(--ink)",
      cursor: "pointer"
    },
    barBtn: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      background: "var(--ink)",
      color: "var(--paper)",
      border: "none",
      padding: "19px 18px",
      fontFamily: MONO,
      fontSize: 15,
      fontWeight: 700,
      cursor: "pointer",
      position: "relative",
      zIndex: 1
    },
    barBtnGhost: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      background: "transparent",
      color: "var(--ink)",
      border: "2px solid var(--ink)",
      padding: "17px 16px",
      fontFamily: MONO,
      fontSize: 15,
      fontWeight: 700,
      cursor: "pointer",
      position: "relative",
      zIndex: 1
    },
    optRow: {
      display: "flex",
      alignItems: "baseline",
      gap: 12,
      width: "100%",
      textAlign: "left",
      background: "transparent",
      border: "none",
      borderBottom: "1px solid rgba(0,0,0,.22)",
      padding: "15px 0",
      fontFamily: MONO,
      fontSize: 14,
      color: "var(--ink)",
      cursor: "pointer",
      transition: "background .12s ease"
    },
    optKey: {
      fontSize: 10,
      fontWeight: 700,
      opacity: .5,
      minWidth: 12
    },
    gapBox: {
      border: "2px solid var(--ink)",
      padding: "18px 16px",
      fontFamily: MONO,
      fontSize: 17,
      lineHeight: 1.55,
      marginTop: 10,
      position: "relative",
      zIndex: 1
    },
    gapGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      border: "2px solid var(--ink)",
      borderBottom: 0,
      position: "relative",
      zIndex: 1
    },
    gapCell: {
      padding: "15px 12px",
      fontFamily: MONO,
      fontSize: 13,
      textAlign: "left",
      border: "none",
      borderBottom: "2px solid var(--ink)",
      borderRight: "2px solid var(--ink)",
      cursor: "pointer",
      color: "var(--ink)"
    },
    input: {
      width: "100%",
      background: "transparent",
      border: "none",
      borderBottom: "2px solid var(--ink)",
      padding: "12px 0",
      fontFamily: MONO,
      fontSize: 18,
      color: "var(--ink)",
      outline: "none",
      position: "relative",
      zIndex: 1
    },
    buildRow: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
      minHeight: 46,
      borderBottom: "2px solid var(--ink)",
      paddingBottom: 12,
      position: "relative",
      zIndex: 1
    },
    buildHint: {
      fontFamily: MONO,
      fontSize: 11,
      opacity: .5,
      alignSelf: "center"
    },
    wordPicked: {
      background: "var(--ink)",
      color: "var(--block)",
      border: "none",
      padding: "8px 12px",
      fontFamily: MONO,
      fontSize: 13,
      fontWeight: 700,
      cursor: "grab"
    },
    bankRow: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
      marginTop: 14,
      position: "relative",
      zIndex: 1
    },
    wordBank: {
      background: "transparent",
      color: "var(--ink)",
      border: "1px solid var(--ink)",
      padding: "8px 12px",
      fontFamily: MONO,
      fontSize: 13,
      cursor: "pointer"
    },
    matchGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 8,
      position: "relative",
      zIndex: 1
    },
    matchCol: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    },
    matchCell: {
      border: "1px solid var(--ink)",
      padding: "12px 10px",
      fontFamily: MONO,
      fontSize: 12,
      textAlign: "left",
      cursor: "pointer",
      transition: "background .12s ease"
    },
    answerText: {
      fontFamily: DISPLAY,
      fontSize: 34,
      lineHeight: 1.05,
      marginTop: 6,
      position: "relative",
      zIndex: 1
    },
    explainText: {
      fontFamily: MONO,
      fontSize: 12,
      lineHeight: 1.7,
      position: "relative",
      zIndex: 1
    },
    livesRow: {
      display: "flex",
      alignItems: "baseline",
      gap: 12,
      position: "relative",
      zIndex: 1
    },
    lives: {
      fontFamily: MONO,
      fontSize: 13,
      letterSpacing: ".1em"
    },
    xpFloat: {
      position: "absolute",
      right: 0,
      top: 44,
      fontFamily: DISPLAY,
      fontSize: 30,
      animation: "ten-xp 1.1s ease-out forwards",
      pointerEvents: "none",
      zIndex: 2
    },
    metaRow: {
      display: "flex",
      gap: 26,
      alignItems: "flex-end",
      position: "relative",
      zIndex: 1
    },
    metaNum: {
      display: "block",
      fontFamily: DISPLAY,
      fontSize: 30,
      lineHeight: 1
    },
    metaLabel: {
      fontFamily: MONO,
      fontSize: 9,
      letterSpacing: ".12em",
      textTransform: "uppercase",
      opacity: .6
    },
    tinyBtn: {
      background: "none",
      border: "none",
      padding: 0,
      fontFamily: MONO,
      fontSize: 10,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "inherit",
      opacity: .55,
      cursor: "pointer",
      textDecoration: "underline"
    },
    note: {
      marginTop: 12,
      fontFamily: MONO,
      fontSize: 11,
      letterSpacing: ".06em",
      textTransform: "uppercase",
      position: "relative",
      zIndex: 1
    },
    dataPanel: {
      marginTop: 14,
      borderTop: "2px solid var(--ink)",
      paddingTop: 14,
      display: "flex",
      flexDirection: "column",
      position: "relative",
      zIndex: 1
    },
    smallBtn: {
      background: "var(--ink)",
      color: "var(--paper)",
      border: "none",
      padding: "10px 14px",
      fontFamily: MONO,
      fontSize: 12,
      fontWeight: 700,
      cursor: "pointer"
    },
    smallBtnGhost: {
      background: "transparent",
      color: "var(--ink)",
      border: "2px solid var(--ink)",
      padding: "8px 12px",
      fontFamily: MONO,
      fontSize: 12,
      fontWeight: 700,
      cursor: "pointer"
    },
    textarea: {
      width: "100%",
      background: "transparent",
      border: "1px solid var(--ink)",
      padding: "10px 12px",
      fontFamily: MONO,
      fontSize: 11,
      color: "var(--ink)",
      resize: "vertical",
      outline: "none",
      boxSizing: "border-box"
    },
    fileInput: {
      fontFamily: MONO,
      fontSize: 10,
      color: "var(--ink)",
      maxWidth: 190
    },
    errorText: {
      fontFamily: MONO,
      fontSize: 11,
      lineHeight: 1.6,
      marginTop: 10
    },
    previewText: {
      fontFamily: MONO,
      fontSize: 11,
      lineHeight: 1.7,
      marginTop: 6
    },
    overlay: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,.55)",
      zIndex: 20,
      display: "flex",
      justifyContent: "center"
    },
    menuSheet: {
      width: "100%",
      maxWidth: 460,
      height: "100%",
      background: "var(--ink)",
      overflowY: "auto",
      animation: "ten-in .25s ease both"
    },
    menuRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      border: "none",
      padding: "15px 22px",
      fontFamily: MONO,
      fontSize: 14,
      fontWeight: 700,
      color: "var(--ink)",
      textAlign: "left"
    },
    menuCount: {
      fontFamily: MONO,
      fontSize: 10,
      fontWeight: 400,
      letterSpacing: ".1em",
      opacity: .6
    }
  };
  var rootEl = document.getElementById("root");
  rootEl.innerHTML = "";
  ReactDOM.createRoot(rootEl).render(React.createElement(TenApp));
})();