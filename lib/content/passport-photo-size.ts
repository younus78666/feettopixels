import type { LocalizedDocMap } from "./doc-types";

export const content: LocalizedDocMap = {
  "en": {
    "faq": [
      {
        "question": "What size is a US passport photo in pixels?",
        "answer": "A US passport photo is 2 x 2 inches. At 300 DPI, that equals 600 x 600 pixels. The US State Department requires photos to be between 600 x 600 and 1200 x 1200 pixels for online submissions."
      },
      {
        "question": "What size is a UK passport photo in pixels?",
        "answer": "A UK passport photo is 35 x 45 mm. At 300 DPI, that equals 413 x 531 pixels. For digital submissions, the UK government specifies at least 600 x 750 pixels."
      },
      {
        "question": "What DPI should I use for passport photos?",
        "answer": "Use 300 DPI for passport photos. This is the standard for all government photo submissions. Lower DPI may result in a blurry or rejected photo."
      },
      {
        "question": "What is the standard business card size in pixels?",
        "answer": "A standard US business card is 3.5 x 2 inches. At 300 DPI, that equals 1050 x 600 pixels. Include 1/8 inch bleed (37 pixels at 300 DPI) on each side for print-ready files."
      }
    ],
    "sections": [
      {
        "id": "passport-photos",
        "title": "Passport Photo Sizes by Country",
        "table": {
          "headers": [
            "Country",
            "Physical Size",
            "Pixels at 300 DPI",
            "Digital Requirements"
          ],
          "rows": [
            [
              "United States",
              "2 × 2 in (51 × 51 mm)",
              "600 × 600",
              "600 - 1200 px square"
            ],
            [
              "United Kingdom",
              "35 × 45 mm",
              "413 × 531",
              "Min 600 × 750 px"
            ],
            [
              "EU / Schengen",
              "35 × 45 mm",
              "413 × 531",
              "Varies by country"
            ],
            [
              "Canada",
              "50 × 70 mm",
              "591 × 827",
              "Min 420 × 540 px"
            ],
            [
              "Australia",
              "35 × 45 mm",
              "413 × 531",
              "Min 413 × 531 px"
            ],
            [
              "India",
              "35 × 35 mm",
              "413 × 413",
              "350 × 350 px"
            ],
            [
              "China",
              "33 × 48 mm",
              "390 × 567",
              "354 × 472 px"
            ],
            [
              "Japan",
              "35 × 45 mm",
              "413 × 531",
              "Min 413 × 531 px"
            ]
          ]
        }
      },
      {
        "id": "id-photos",
        "title": "ID and Visa Photo Sizes",
        "table": {
          "headers": [
            "Document Type",
            "Physical Size",
            "Pixels at 300 DPI"
          ],
          "rows": [
            [
              "US Visa",
              "2 × 2 in",
              "600 × 600"
            ],
            [
              "Schengen Visa",
              "35 × 45 mm",
              "413 × 531"
            ],
            [
              "US Green Card",
              "2 × 2 in",
              "600 × 600"
            ],
            [
              "Driver’s License (US)",
              "Varies by state",
              "Typically 600 × 600+"
            ]
          ]
        }
      },
      {
        "id": "business-cards",
        "title": "Business Card Sizes in Pixels",
        "table": {
          "headers": [
            "Region",
            "Physical Size",
            "Pixels at 300 DPI",
            "With Bleed"
          ],
          "rows": [
            [
              "US / Canada",
              "3.5 × 2 in",
              "1050 × 600",
              "1125 × 675"
            ],
            [
              "EU Standard",
              "85 × 55 mm",
              "1004 × 650",
              "1063 × 709"
            ],
            [
              "UK",
              "85 × 55 mm",
              "1004 × 650",
              "1063 × 709"
            ],
            [
              "Japan",
              "91 × 55 mm",
              "1075 × 650",
              "1134 × 709"
            ]
          ]
        }
      },
      {
        "id": "poster-sizes",
        "title": "Common Poster Sizes in Pixels",
        "table": {
          "headers": [
            "Poster Size",
            "150 DPI",
            "300 DPI"
          ],
          "rows": [
            [
              "11 × 17 in",
              "1650 × 2550",
              "3300 × 5100"
            ],
            [
              "18 × 24 in",
              "2700 × 3600",
              "5400 × 7200"
            ],
            [
              "24 × 36 in",
              "3600 × 5400",
              "7200 × 10800"
            ],
            [
              "A2 (420 × 594 mm)",
              "2480 × 3508",
              "4961 × 7016"
            ]
          ]
        },
        "paragraphs": [
          "Calculate pixel dimensions for any custom size with our Image Size Calculator or Inches to Pixels Converter."
        ]
      }
    ]
  },
  "es": {
    "faq": [
      {
        "question": "¿Qué tamaño tiene una foto de pasaporte estadounidense en píxeles?",
        "answer": "Una foto de pasaporte estadounidense mide 2 x 2 pulgadas. A 300 DPI, eso equivale a 600 x 600 píxeles. El Departamento de Estado de EE. UU. exige que las fotografías tengan entre 600 x 600 y 1200 x 1200 píxeles para su envío en línea."
      },
      {
        "question": "¿Qué tamaño tiene una fotografía de pasaporte del Reino Unido en píxeles?",
        "answer": "Una fotografía de pasaporte del Reino Unido mide 35 x 45 mm. A 300 DPI, eso equivale a 413 x 531 píxeles. Para envíos digitales, el gobierno del Reino Unido especifica al menos 600 x 750 píxeles."
      },
      {
        "question": "¿Qué DPI debo usar para fotografías de pasaporte?",
        "answer": "Utilice 300 DPI para fotografías de pasaporte. Este es el estándar para todos los envíos de fotografías gubernamentales. Un DPI más bajo puede resultar en una foto borrosa o rechazada."
      },
      {
        "question": "¿Cuál es el tamaño estándar de una tarjeta de presentación en píxeles?",
        "answer": "Una tarjeta de presentación estándar de EE. UU. mide 3,5 x 2 pulgadas. A 300 DPI, eso equivale a 1050 x 600 píxeles. Incluya un sangrado de 1/8 de pulgada (37 píxeles a 300 ppp) en cada lado para archivos listos para imprimir."
      }
    ],
    "sections": [
      {
        "id": "passport-photos",
        "title": "Tamaños de fotografías de pasaporte por país",
        "table": {
          "headers": [
            "País",
            "Tamaño físico",
            "Píxeles a 300 ppp",
            "Requisitos digitales"
          ],
          "rows": [
            [
              "Estados Unidos Estados",
              "2 × 2 pulg. (51 × 51 mm)",
              "600 × 600",
              "600 - 1200 px cuadrados"
            ],
            [
              "Reino Unido",
              "35 × 45 mm",
              "413 × 531",
              "Mín. 600 × 750 px"
            ],
            [
              "UE/Schengen",
              "35 × 45 mm",
              "413 × 531",
              "Varía según el país"
            ],
            [
              "Canadá",
              "50 × 70 mm",
              "591 × 827",
              "Min 420 × 540 px"
            ],
            [
              "Australia",
              "35 × 45 mm",
              "413 × 531",
              "Min 413 × 531 px"
            ],
            [
              "India",
              "35 × 35 mm",
              "413 × 413",
              "350 × 350 px"
            ],
            [
              "China",
              "33 × 48 mm",
              "390 × 567",
              "354 × 472 px"
            ],
            [
              "Japón",
              "35 × 45 mm",
              "413 × 531",
              "Mín. 413 × 531 px"
            ]
          ]
        }
      },
      {
        "id": "id-photos",
        "title": "Tamaños de fotos de identificación y visa",
        "table": {
          "headers": [
            "Tipo de documento",
            "Tamaño físico",
            "Píxeles a 300 DPI"
          ],
          "rows": [
            [
              "Visa de EE. UU.",
              "2 × 2 pulgadas",
              "600 × 600"
            ],
            [
              "Schengen Visa",
              "35 × 45 mm",
              "413 × 531"
            ],
            [
              "Tarjeta verde estadounidense",
              "2 × 2 in",
              "600 × 600"
            ],
            [
              "Licencia de conducir (EE.UU.)",
              "Varía según el estado",
              "Normalmente 600 × Más de 600"
            ]
          ]
        }
      },
      {
        "id": "business-cards",
        "title": "Tamaños de tarjetas de presentación en píxeles",
        "table": {
          "headers": [
            "Región",
            "Tamaño físico",
            "Píxeles a 300 ppp",
            "Con sangrado"
          ],
          "rows": [
            [
              "EE.UU./Canadá",
              "3,5 × 2 pulgadas",
              "1050 × 600",
              "1125 × 675"
            ],
            [
              "Estándar UE",
              "85 × 55 mm",
              "1004 × 650",
              "1063 × 709"
            ],
            [
              "Reino Unido",
              "85 × 55 mm",
              "1004 × 650",
              "1063 × 709"
            ],
            [
              "Japón",
              "91 × 55 mm",
              "1075 × 650",
              "1134 × 709"
            ]
          ]
        }
      },
      {
        "id": "poster-sizes",
        "title": "Tamaños de póster comunes en píxeles",
        "table": {
          "headers": [
            "Tamaño de póster",
            "150 DPI",
            "300 DPI"
          ],
          "rows": [
            [
              "11 × 17 pulgadas",
              "1650 × 2550",
              "3300 × 5100"
            ],
            [
              "18 × 24 en",
              "2700 × 3600",
              "5400 × 7200"
            ],
            [
              "24 × 36 pulgadas",
              "3600 × 5400",
              "7200 × 10800"
            ],
            [
              "A2 (420 × 594 mm)",
              "2480 × 3508",
              "4961 × 7016"
            ]
          ]
        },
        "paragraphs": [
          "Calcule las dimensiones en píxeles para cualquier tamaño personalizado con nuestro Tamaño de imagen Calculadora o convertidor de pulgadas a píxeles."
        ]
      }
    ]
  },
  "fr": {
    "faq": [
      {
        "question": "Quelle est la taille d'une photo d'identité américaine en pixels ?",
        "answer": "Une photo d'identité américaine mesure 2 x 2 pouces. À 300 DPI, cela équivaut à 600 x 600 pixels. Le Département d'État américain exige que les photos mesurent entre 600 x 600 et 1 200 x 1 200 pixels pour les soumissions en ligne."
      },
      {
        "question": "Quelle est la taille d'une photo d'identité britannique en pixels ?",
        "answer": "Une photo d'identité britannique mesure 35 x 45 mm. À 300 DPI, cela équivaut à 413 x 531 pixels. Pour les soumissions numériques, le gouvernement britannique spécifie au moins 600 x 750 pixels."
      },
      {
        "question": "Quel DPI dois-je utiliser pour les photos d'identité ?",
        "answer": "Utilisez 300 DPI pour les photos d'identité. Il s’agit de la norme pour toutes les soumissions de photos gouvernementales. Un DPI inférieur peut entraîner une photo floue ou rejetée."
      },
      {
        "question": "Quelle est la taille standard d'une carte de visite en pixels ?",
        "answer": "Une carte de visite américaine standard mesure 3,5 x 2 pouces. À 300 DPI, cela équivaut à 1050 x 600 pixels. Incluez un fond perdu de 1/8 pouce (37 pixels à 300 DPI) de chaque côté pour les fichiers prêts à imprimer."
      }
    ],
    "sections": [
      {
        "id": "passport-photos",
        "title": "Tailles des photos d'identité par pays",
        "table": {
          "headers": [
            "Pays",
            "Taille physique",
            "Pixels à 300 DPI",
            "Exigences numériques"
          ],
          "rows": [
            [
              "États-Unis États",
              "2 × 2 po (51 × 51 mm)",
              "600 × 600",
              "600 - 1 200 px carré"
            ],
            [
              "Royaume-Uni",
              "35 × 45 mm",
              "413 × 531",
              "Min 600 × 750 px"
            ],
            [
              "UE / Schengen",
              "35 × 45 mm",
              "413 × 531",
              "Varie selon les pays"
            ],
            [
              "Canada",
              "50 × 70 mm",
              "591 × 827",
              "Min 420 × 540 px"
            ],
            [
              "Australie",
              "35 × 45 mm",
              "413 × 531",
              "Min 413 × 531 px"
            ],
            [
              "Inde",
              "35 × 35 mm",
              "413 × 413",
              "350 × 350 px"
            ],
            [
              "Chine",
              "33 × 48 mm",
              "390 × 567",
              "354 × 472 px"
            ],
            [
              "Japon",
              "35 × 45 mm",
              "413 × 531",
              "Min 413 × 531 px"
            ]
          ]
        }
      },
      {
        "id": "id-photos",
        "title": "Tailles des photos d'identité et de visa",
        "table": {
          "headers": [
            "Type de document",
            "Taille physique",
            "Pixels à 300 DPI"
          ],
          "rows": [
            [
              "Visa américain",
              "2 × 2 pouces",
              "600 × 600"
            ],
            [
              "Schengen Visa",
              "35 × 45 mm",
              "413 × 531"
            ],
            [
              "Carte verte américaine",
              "2 × 2 po",
              "600 × 600"
            ],
            [
              "Permis de conduire (États-Unis)",
              "Varie selon l'État",
              "Généralement 600 × Plus de 600"
            ]
          ]
        }
      },
      {
        "id": "business-cards",
        "title": "Tailles de cartes de visite en pixels",
        "table": {
          "headers": [
            "Région",
            "Taille physique",
            "Pixels à 300 DPI",
            "Avec fond perdu"
          ],
          "rows": [
            [
              "États-Unis/Canada",
              "3,5 × 2 pouces",
              "1 050 × 600",
              "1125 × 675"
            ],
            [
              "Norme européenne",
              "85 × 55 mm",
              "1004 × 650",
              "1063 × 709"
            ],
            [
              "Royaume-Uni",
              "85 × 55 mm",
              "1004 × 650",
              "1063 × 709"
            ],
            [
              "Japon",
              "91 × 55 mm",
              "1075 × 650",
              "1134 × 709"
            ]
          ]
        }
      },
      {
        "id": "poster-sizes",
        "title": "Tailles d'affiche courantes en pixels",
        "table": {
          "headers": [
            "Taille de l'affiche",
            "150 DPI",
            "300 DPI"
          ],
          "rows": [
            [
              "11 × 17 pouces",
              "1650 × 2550",
              "3300 × 5100"
            ],
            [
              "18 × 24 en",
              "2 700 × 3 600",
              "5 400 × 7 200"
            ],
            [
              "24 × 36 en",
              "3 600 × 5 400",
              "7 200 × 10 800"
            ],
            [
              "A2 (420 × 594 mm)",
              "2480 × 3508",
              "4961 × 7016"
            ]
          ]
        },
        "paragraphs": [
          "Calculez les dimensions en pixels pour toute taille personnalisée avec notre taille d'image. Calculatrice ou convertisseur de pouces en pixels."
        ]
      }
    ]
  },
  "de": {
    "faq": [
      {
        "question": "Wie groß ist ein US-Passfoto in Pixeln?",
        "answer": "Ein US-Passfoto ist 2 x 2 Zoll groß. Bei 300 DPI entspricht das 600 x 600 Pixel. Das US-Außenministerium verlangt für Online-Einreichungen, dass Fotos zwischen 600 x 600 und 1200 x 1200 Pixel groß sind."
      },
      {
        "question": "Wie groß ist ein britisches Passfoto in Pixeln?",
        "answer": "Ein britisches Passfoto ist 35 x 45 mm groß. Bei 300 DPI entspricht das 413 x 531 Pixel. Für digitale Einreichungen gibt die britische Regierung mindestens 600 x 750 Pixel an."
      },
      {
        "question": "Welche DPI sollte ich für Passfotos verwenden?",
        "answer": "Verwenden Sie 300 DPI für Passfotos. Dies ist der Standard für alle staatlichen Fotoeinreichungen. Eine niedrigere DPI kann zu einem verschwommenen oder abgelehnten Foto führen."
      },
      {
        "question": "Was ist die Standard-Visitenkartengröße in Pixel?",
        "answer": "Eine Standard-US-Visitenkarte ist 3,5 x 2 Zoll groß. Bei 300 DPI entspricht das 1050 x 600 Pixel. Fügen Sie 1/8 Zoll Beschnittzugabe (37 Pixel bei 300 DPI) auf jeder Seite für druckfertige Dateien hinzu."
      }
    ],
    "sections": [
      {
        "id": "passport-photos",
        "title": "Passfotogrößen nach Land",
        "table": {
          "headers": [
            "Land",
            "Physische Größe",
            "Pixel bei 300 DPI",
            "Digitale Anforderungen"
          ],
          "rows": [
            [
              "Vereinigte Staaten",
              "2 × 2 Zoll (51 × 51 mm)",
              "600 × 600",
              "600 - 1200 px quadratisch"
            ],
            [
              "Vereinigtes Königreich",
              "35 × 45 mm",
              "413 × 531",
              "Min. 600 × 750 px"
            ],
            [
              "EU / Schengen",
              "35 × 45 mm",
              "413 × 531",
              "Variiert je nach Land"
            ],
            [
              "Kanada",
              "50 × 70 mm",
              "591 × 827",
              "Min. 420 × 540 px"
            ],
            [
              "Australien",
              "35 × 45 mm",
              "413 × 531",
              "Min. 413 × 531 px"
            ],
            [
              "Indien",
              "35 × 35 mm",
              "413 × 413",
              "350 × 350 px"
            ],
            [
              "China",
              "33 × 48 mm",
              "390 × 567",
              "354 × 472 px"
            ],
            [
              "Japan",
              "35 × 45 mm",
              "413 × 531",
              "Min. 413 × 531 px"
            ]
          ]
        }
      },
      {
        "id": "id-photos",
        "title": "Ausweis- und Visa-Fotogrößen",
        "table": {
          "headers": [
            "Dokumenttyp",
            "Physische Größe",
            "Pixel bei 300 DPI"
          ],
          "rows": [
            [
              "US-Visum",
              "2 × 2 Zoll",
              "600 × 600"
            ],
            [
              "Schengen Visa",
              "35 × 45 mm",
              "413 × 531"
            ],
            [
              "US Green Card",
              "2 × 2 Zoll",
              "600 × 600"
            ],
            [
              "Führerschein (USA)",
              "Variiert je nach Bundesstaat",
              "Typischerweise 600 × 600+"
            ]
          ]
        }
      },
      {
        "id": "business-cards",
        "title": "Visitenkartengrößen in Pixeln",
        "table": {
          "headers": [
            "Region",
            "Physische Größe",
            "Pixel bei 300 DPI",
            "Mit Anschnitt"
          ],
          "rows": [
            [
              "USA / Kanada",
              "3,5 × 2 Zoll",
              "1050 × 600",
              "1125 × 675"
            ],
            [
              "EU-Standard",
              "85 × 55 mm",
              "1004 × 650",
              "1063 × 709"
            ],
            [
              "UK",
              "85 × 55 mm",
              "1004 × 650",
              "1063 × 709"
            ],
            [
              "Japan",
              "91 × 55 mm",
              "1075 × 650",
              "1134 × 709"
            ]
          ]
        }
      },
      {
        "id": "poster-sizes",
        "title": "Gängige Postergrößen in Pixeln",
        "table": {
          "headers": [
            "Postergröße",
            "150 DPI",
            "300 DPI"
          ],
          "rows": [
            [
              "11 × 17 Zoll",
              "1650 × 2550",
              "3300 × 5100"
            ],
            [
              "18 × 24 in",
              "2700 × 3600",
              "5400 × 7200"
            ],
            [
              "24 × 36 in",
              "3600 × 5400",
              "7200 × 10800"
            ],
            [
              "A2 (420 × 594 mm)",
              "2480 × 3508",
              "4961 × 7016"
            ]
          ]
        },
        "paragraphs": [
          "Berechnen Sie die Pixelabmessungen für jede benutzerdefinierte Größe mit unserem Bildgrößenrechner oder Zoll in Pixel-Konverter."
        ]
      }
    ]
  },
  "pt": {
    "faq": [
      {
        "question": "Qual é o tamanho de uma foto de passaporte dos EUA em pixels?",
        "answer": "Uma foto de passaporte dos EUA mede 2 x 2 polegadas. A 300 DPI, isso equivale a 600 x 600 pixels. O Departamento de Estado dos EUA exige que as fotos tenham entre 600 x 600 e 1200 x 1200 pixels para envios online."
      },
      {
        "question": "Qual é o tamanho de uma foto de passaporte do Reino Unido em pixels?",
        "answer": "Uma foto de passaporte do Reino Unido tem 35 x 45 mm. A 300 DPI, isso equivale a 413 x 531 pixels. Para envios digitais, o governo do Reino Unido especifica pelo menos 600 x 750 pixels."
      },
      {
        "question": "Qual DPI devo usar para fotos de passaporte?",
        "answer": "Use 300 DPI para fotos de passaporte. Este é o padrão para todos os envios de fotos governamentais. DPI mais baixo pode resultar em uma foto borrada ou rejeitada."
      },
      {
        "question": "Qual é o tamanho padrão do cartão de visita em pixels?",
        "answer": "Um cartão de visita padrão dos EUA mede 3,5 x 2 polegadas. A 300 DPI, isso equivale a 1050 x 600 pixels. Inclui sangramento de 1/8 de polegada (37 pixels a 300 DPI) em cada lado para arquivos prontos para impressão."
      }
    ],
    "sections": [
      {
        "id": "passport-photos",
        "title": "Tamanhos de fotos de passaporte por país",
        "table": {
          "headers": [
            "País",
            "Tamanho Físico",
            "Pixels a 300 DPI",
            "Requisitos Digitais"
          ],
          "rows": [
            [
              "Estados Unidos",
              "2 × 2 pol. (51 × 51 mm)",
              "600 × 600",
              "Quadrado de 600 - 1200 px"
            ],
            [
              "Reino Unido",
              "35 × 45mm",
              "413 × 531",
              "Mínimo 600 × 750 px"
            ],
            [
              "UE/Schengen",
              "35 × 45mm",
              "413 × 531",
              "Varia de acordo com o país"
            ],
            [
              "Canadá",
              "50 × 70mm",
              "591 × 827",
              "Mínimo 420 × 540 px"
            ],
            [
              "Austrália",
              "35 × 45mm",
              "413 × 531",
              "Mínimo 413 × 531 px"
            ],
            [
              "Índia",
              "35 × 35mm",
              "413 × 413",
              "350 × 350 pixels"
            ],
            [
              "China",
              "33 × 48mm",
              "390 × 567",
              "354 × 472 pixels"
            ],
            [
              "Japão",
              "35 × 45mm",
              "413 × 531",
              "Mínimo 413 × 531 px"
            ]
          ]
        }
      },
      {
        "id": "id-photos",
        "title": "Tamanhos de fotos de identificação e visto",
        "table": {
          "headers": [
            "Tipo de documento",
            "Tamanho Físico",
            "Pixels a 300 DPI"
          ],
          "rows": [
            [
              "Visto dos EUA",
              "2 × 2 pol.",
              "600 × 600"
            ],
            [
              "Visto Schengen",
              "35 × 45mm",
              "413 × 531"
            ],
            [
              "Cartão Verde dos EUA",
              "2 × 2 pol.",
              "600 × 600"
            ],
            [
              "Carteira de motorista (EUA)",
              "Varia por estado",
              "Normalmente 600 × 600+"
            ]
          ]
        }
      },
      {
        "id": "business-cards",
        "title": "Tamanhos de cartão de visita em pixels",
        "table": {
          "headers": [
            "Região",
            "Tamanho Físico",
            "Pixels a 300 DPI",
            "Com sangramento"
          ],
          "rows": [
            [
              "EUA / Canadá",
              "3,5 × 2 pol.",
              "1050 × 600",
              "1125 × 675"
            ],
            [
              "Padrão da UE",
              "85 × 55mm",
              "1004 × 650",
              "1063 × 709"
            ],
            [
              "Reino Unido",
              "85 × 55mm",
              "1004 × 650",
              "1063 × 709"
            ],
            [
              "Japão",
              "91 × ​​55mm",
              "1075 × 650",
              "1134 × 709"
            ]
          ]
        }
      },
      {
        "id": "poster-sizes",
        "title": "Tamanhos comuns de pôster em pixels",
        "table": {
          "headers": [
            "Tamanho do pôster",
            "150 DPI",
            "300 DPI"
          ],
          "rows": [
            [
              "11 × 17 pol.",
              "1650 × 2550",
              "3300 × 5100"
            ],
            [
              "18 × 24 pol.",
              "2700 × 3600",
              "5400 × 7200"
            ],
            [
              "24 × 36 pol.",
              "3600 × 5400",
              "7200 × 10800"
            ],
            [
              "A2 (420 × 594 mm)",
              "2480 × 3508",
              "4961 × 7016"
            ]
          ]
        },
        "paragraphs": [
          "Calcule as dimensões em pixels para qualquer tamanho personalizado com nossa calculadora de tamanho de imagem ou conversor de polegadas para pixels."
        ]
      }
    ]
  },
  "hi": {
    "faq": [
      {
        "question": "यूएस पासपोर्ट फोटो पिक्सेल में किस आकार का होता है?",
        "answer": "एक अमेरिकी पासपोर्ट फोटो 2 x 2 इंच का होता है। 300 डीपीआई पर, यह 600 x 600 पिक्सेल के बराबर है। अमेरिकी विदेश विभाग को ऑनलाइन सबमिशन के लिए फ़ोटो का आकार 600 x 600 और 1200 x 1200 पिक्सेल के बीच होना आवश्यक है।"
      },
      {
        "question": "यूके पासपोर्ट फ़ोटो पिक्सेल में किस आकार की होती है?",
        "answer": "यूके पासपोर्ट फोटो 35 x 45 मिमी है। 300 डीपीआई पर, यह 413 x 531 पिक्सेल के बराबर है। डिजिटल सबमिशन के लिए, यूके सरकार कम से कम 600 x 750 पिक्सेल निर्दिष्ट करती है।"
      },
      {
        "question": "पासपोर्ट फोटो के लिए मुझे किस डीपीआई का उपयोग करना चाहिए?",
        "answer": "पासपोर्ट फोटो के लिए 300 डीपीआई का उपयोग करें। यह सभी सरकारी फोटो प्रस्तुतियों के लिए मानक है। कम DPI के परिणामस्वरूप फ़ोटो धुंधली या अस्वीकृत हो सकती है।"
      },
      {
        "question": "पिक्सेल में मानक व्यवसाय कार्ड का आकार क्या है?",
        "answer": "एक मानक यूएस बिजनेस कार्ड 3.5 x 2 इंच का होता है। 300 डीपीआई पर, यह 1050 x 600 पिक्सेल के बराबर है। प्रिंट-तैयार फ़ाइलों के लिए प्रत्येक तरफ 1/8 इंच ब्लीड (300 डीपीआई पर 37 पिक्सेल) शामिल करें।"
      }
    ],
    "sections": [
      {
        "id": "passport-photos",
        "title": "देश के अनुसार पासपोर्ट फोटो का आकार",
        "table": {
          "headers": [
            "देश",
            "भौतिक आकार",
            "300 डीपीआई पर पिक्सेल",
            "डिजिटल आवश्यकताएँ"
          ],
          "rows": [
            [
              "संयुक्त राज्य अमेरिका",
              "2 × 2 इंच (51 × 51 मिमी)",
              "600×600",
              "600-1200 पिक्सेल वर्ग"
            ],
            [
              "यूनाइटेड किंगडम",
              "35 × 45 मिमी",
              "413×531",
              "न्यूनतम 600 × 750 पिक्सेल"
            ],
            [
              "ईयू / शेंगेन",
              "35 × 45 मिमी",
              "413×531",
              "देश के अनुसार भिन्न होता है"
            ],
            [
              "कनाडा",
              "50 × 70 मिमी",
              "591 × 827",
              "न्यूनतम 420 × 540 पिक्सेल"
            ],
            [
              "ऑस्ट्रेलिया",
              "35 × 45 मिमी",
              "413×531",
              "न्यूनतम 413 × 531 पिक्सेल"
            ],
            [
              "भारत",
              "35 × 35 मिमी",
              "413×413",
              "350 × 350 पिक्सल"
            ],
            [
              "चीन",
              "33 × 48 मिमी",
              "390×567",
              "354 × 472 पीएक्स"
            ],
            [
              "जापान",
              "35 × 45 मिमी",
              "413×531",
              "न्यूनतम 413 × 531 पिक्सेल"
            ]
          ]
        }
      },
      {
        "id": "id-photos",
        "title": "आईडी और वीज़ा फोटो आकार",
        "table": {
          "headers": [
            "दस्तावेज़ प्रकार",
            "भौतिक आकार",
            "300 डीपीआई पर पिक्सेल"
          ],
          "rows": [
            [
              "अमेरिकी वीज़ा",
              "2×2 इंच",
              "600×600"
            ],
            [
              "शेंगेन वीज़ा",
              "35 × 45 मिमी",
              "413×531"
            ],
            [
              "यूएस ग्रीन कार्ड",
              "2×2 इंच",
              "600×600"
            ],
            [
              "ड्राइवर का लाइसेंस (यूएस)",
              "राज्य के अनुसार भिन्न होता है",
              "आमतौर पर 600 × 600+"
            ]
          ]
        }
      },
      {
        "id": "business-cards",
        "title": "बिज़नेस कार्ड का आकार पिक्सेल में",
        "table": {
          "headers": [
            "क्षेत्र",
            "भौतिक आकार",
            "300 डीपीआई पर पिक्सेल",
            "ब्लीड के साथ"
          ],
          "rows": [
            [
              "अमेरिका/कनाडा",
              "3.5×2 इंच",
              "1050×600",
              "1125×675"
            ],
            [
              "ईयू मानक",
              "85 × 55 मिमी",
              "1004 × 650",
              "1063 × 709"
            ],
            [
              "यूके",
              "85 × 55 मिमी",
              "1004 × 650",
              "1063 × 709"
            ],
            [
              "जापान",
              "91 × ​​55 मिमी",
              "1075 × 650",
              "1134 × 709"
            ]
          ]
        }
      },
      {
        "id": "poster-sizes",
        "title": "पिक्सेल में सामान्य पोस्टर आकार",
        "table": {
          "headers": [
            "पोस्टर का आकार",
            "150 डीपीआई",
            "300 डीपीआई"
          ],
          "rows": [
            [
              "11×17 इंच",
              "1650×2550",
              "3300 × 5100"
            ],
            [
              "18×24 इंच",
              "2700×3600",
              "5400 × 7200"
            ],
            [
              "24×36 इंच",
              "3600 × 5400",
              "7200 × 10800"
            ],
            [
              "ए2 (420 × 594 मिमी)",
              "2480 × 3508",
              "4961 × 7016"
            ]
          ]
        },
        "paragraphs": [
          "हमारे छवि आकार कैलकुलेटर या इंच से पिक्सेल कनवर्टर के साथ किसी भी कस्टम आकार के लिए पिक्सेल आयामों की गणना करें।"
        ]
      }
    ]
  },
  "ja": {
    "faq": [
      {
        "question": "米国のパスポート写真のピクセルサイズはどれくらいですか?",
        "answer": "米国のパスポート写真は 2 x 2 インチです。 300 DPI では、600 x 600 ピクセルに相当します。米国国務省は、オンラインで提出する写真のサイズが 600 x 600 ～ 1200 x 1200 ピクセルであることを要求しています。"
      },
      {
        "question": "英国のパスポート写真のピクセルサイズはどれくらいですか?",
        "answer": "英国のパスポート写真は 35 x 45 mm です。 300 DPI では、413 x 531 ピクセルに相当します。デジタル提出の場合、英国政府は少なくとも 600 x 750 ピクセルを指定しています。"
      },
      {
        "question": "パスポートの写真にはどの DPI を使用すればよいですか?",
        "answer": "パスポートの写真には 300 DPI を使用してください。これは、政府が提出するすべての写真の標準です。 DPI が低いと、写真がぼやけたり拒否される可能性があります。"
      },
      {
        "question": "標準的な名刺のサイズはピクセル単位でどれくらいですか?",
        "answer": "米国の標準的な名刺は 3.5 x 2 インチです。 300 DPI では、1050 x 600 ピクセルに相当します。印刷可能なファイルの各面に 1/8 インチの裁ち落とし (300 DPI で 37 ピクセル) を含めます。"
      }
    ],
    "sections": [
      {
        "id": "passport-photos",
        "title": "国別のパスポート写真のサイズ",
        "table": {
          "headers": [
            "国",
            "物理サイズ",
            "300 DPI のピクセル",
            "デジタル要件"
          ],
          "rows": [
            [
              "米国州",
              "2 × 2 インチ (51 × 51 mm)",
              "600 × 600",
              "600 ～ 1200 ピクセル平方"
            ],
            [
              "イギリス",
              "35 × 45 mm",
              "413 × 531",
              "最小 600 × 750 px"
            ],
            [
              "EU / シェンゲン",
              "35 × 45 mm",
              "413 × 531",
              "国によって異なります"
            ],
            [
              "カナダ",
              "50 × 70 mm",
              "591 × 827",
              "最小 420 × 540 px"
            ],
            [
              "オーストラリア",
              "35 × 45 mm",
              "413 × 531",
              "最小 413 × 531 px"
            ],
            [
              "インド",
              "35 × 35 mm",
              "413 × 413",
              "350 × 350 ピクセル"
            ],
            [
              "中国",
              "33 × 48 mm",
              "390 × 567",
              "354 × 472 ピクセル"
            ],
            [
              "日本",
              "35 × 45 mm",
              "413 × 531",
              "分413 × 531 ピクセル"
            ]
          ]
        }
      },
      {
        "id": "id-photos",
        "title": "ID およびビザの写真サイズ",
        "table": {
          "headers": [
            "ドキュメントの種類",
            "物理サイズ",
            "300 DPI のピクセル"
          ],
          "rows": [
            [
              "米国ビザ",
              "2 × 2 インチ",
              "600 × 600"
            ],
            [
              "シェンゲンビザ",
              "35 × 45 mm",
              "413 × 531"
            ],
            [
              "米国グリーンカード",
              "2 × 2 インチ",
              "600 × 600"
            ],
            [
              "運転免許証 (米国)",
              "州によって異なる",
              "通常 600 × 600+"
            ]
          ]
        }
      },
      {
        "id": "business-cards",
        "title": "名刺サイズ (ピクセル)",
        "table": {
          "headers": [
            "領域",
            "物理サイズ",
            "300 DPI ピクセル",
            "裁ち落としあり"
          ],
          "rows": [
            [
              "米国 / カナダ",
              "3.5 × 2 インチ",
              "1050 × 600",
              "1125 × 675"
            ],
            [
              "EU規格",
              "85 × 55 mm",
              "1004 × 650",
              "1063 × 709"
            ],
            [
              "英国",
              "85 × 55 mm",
              "1004 × 650",
              "1063 × 709"
            ],
            [
              "日本",
              "91 × 55 mm",
              "1075 × 650",
              "1134 × 709"
            ]
          ]
        }
      },
      {
        "id": "poster-sizes",
        "title": "一般的なポスター サイズ (ピクセル)",
        "table": {
          "headers": [
            "ポスター サイズ",
            "150 DPI",
            "300 DPI"
          ],
          "rows": [
            [
              "11 × 17 インチ",
              "1650 × 2550",
              "3300 × 5100"
            ],
            [
              "18 × 24インチ",
              "2700 × 3600",
              "5400 × 7200"
            ],
            [
              "24 × 36インチ",
              "3600 × 5400",
              "7200 × 10800"
            ],
            [
              "A2 (420 × 594 mm)",
              "2480 × 3508",
              "4961 × 7016"
            ]
          ]
        },
        "paragraphs": [
          "画像サイズを使用してカスタム サイズのピクセル寸法を計算します電卓またはインチからピクセルへのコンバーター。"
        ]
      }
    ]
  },
  "ko": {
    "faq": [
      {
        "question": "미국 여권 사진의 크기는 픽셀 단위로 얼마입니까?",
        "answer": "미국 여권 사진의 크기는 2 x 2인치입니다. 300 DPI에서는 600 x 600 픽셀과 같습니다. 미국 국무부는 온라인 제출 시 사진 크기가 600 x 600에서 1200 x 1200픽셀 사이여야 한다고 규정합니다."
      },
      {
        "question": "영국 여권 사진의 크기는 픽셀 단위로 어떻게 되나요?",
        "answer": "영국 여권 사진의 크기는 35 x 45mm입니다. 300 DPI에서는 413 x 531 픽셀과 같습니다. 디지털 제출의 경우 영국 정부는 최소 600 x 750픽셀을 지정합니다."
      },
      {
        "question": "여권 사진에는 어떤 DPI를 사용해야 합니까?",
        "answer": "여권 사진에는 300 DPI를 사용하십시오. 이는 모든 정부 사진 제출에 대한 표준입니다. DPI가 낮으면 사진이 흐리거나 거부될 수 있습니다."
      },
      {
        "question": "표준 명함 크기(픽셀)는 얼마입니까?",
        "answer": "표준 미국 명함은 3.5 x 2인치입니다. 300 DPI에서는 1050 x 600 픽셀과 같습니다. 인쇄용 파일의 각 면에 1/8인치 블리드(300 DPI에서 37픽셀)를 포함합니다."
      }
    ],
    "sections": [
      {
        "id": "passport-photos",
        "title": "국가별 여권 사진 크기",
        "table": {
          "headers": [
            "국가",
            "물리적 크기",
            "300 DPI 픽셀",
            "디지털 요구 사항"
          ],
          "rows": [
            [
              "미국",
              "2 × 2인치 (51 × 51mm)",
              "600 × 600",
              "600~1200픽셀 정사각형"
            ],
            [
              "영국",
              "35 × 45mm",
              "413 × 531",
              "최소 600 × 750픽셀"
            ],
            [
              "EU / 솅겐",
              "35 × 45mm",
              "413 × 531",
              "국가에 따라 다름"
            ],
            [
              "캐나다",
              "50 × 70mm",
              "591 × 827",
              "최소 420 × 540 px"
            ],
            [
              "오스트레일리아",
              "35 × 45mm",
              "413 × 531",
              "최소 413 × 531px"
            ],
            [
              "인도",
              "35 × 35mm",
              "413 × 413",
              "350 × 350픽셀"
            ],
            [
              "중국",
              "33 × 48mm",
              "390 × 567",
              "354 × 472픽셀"
            ],
            [
              "일본",
              "35 × 45mm",
              "413 × 531",
              "최소 413 × 531픽셀"
            ]
          ]
        }
      },
      {
        "id": "id-photos",
        "title": "신분증 및 비자 사진 크기",
        "table": {
          "headers": [
            "문서 유형",
            "물리적 크기",
            "300 DPI의 픽셀"
          ],
          "rows": [
            [
              "미국 비자",
              "2 × 2인치",
              "600 × 600"
            ],
            [
              "솅겐 비자",
              "35 × 45mm",
              "413 × 531"
            ],
            [
              "미국 영주권",
              "2 × 2인치",
              "600 × 600"
            ],
            [
              "운전면허증(미국)",
              "주에 따라 다름",
              "일반적으로 600 × 600+"
            ]
          ]
        }
      },
      {
        "id": "business-cards",
        "title": "명함 크기(픽셀 단위)",
        "table": {
          "headers": [
            "지역",
            "실제 크기",
            "300DPI의 픽셀",
            "블리드 있음"
          ],
          "rows": [
            [
              "미국 / 캐나다",
              "3.5 × 2인치",
              "1050 × 600",
              "1125 × 675"
            ],
            [
              "EU 표준",
              "85 × 55mm",
              "1004 × 650",
              "1063 × 709"
            ],
            [
              "UK",
              "85 × 55mm",
              "1004 × 650",
              "1063 × 709"
            ],
            [
              "일본",
              "91 × 55mm",
              "1075 × 650",
              "1134 × 709"
            ]
          ]
        }
      },
      {
        "id": "poster-sizes",
        "title": "일반적인 포스터 크기(픽셀 단위)",
        "table": {
          "headers": [
            "포스터 크기",
            "150 DPI",
            "300 DPI"
          ],
          "rows": [
            [
              "11 × 17인치",
              "1650 × 2550",
              "3300 × 5100"
            ],
            [
              "18 × 24 in",
              "2700 × 3600",
              "5400 × 7200"
            ],
            [
              "24 × 36 in",
              "3600 × 5400",
              "7200 × 10800"
            ],
            [
              "A2(420 × 594 mm)",
              "2480 × 3508",
              "4961 × 7016"
            ]
          ]
        },
        "paragraphs": [
          "이미지 크기를 사용하여 사용자 정의 크기에 대한 픽셀 크기를 계산합니다. 계산기 또는 인치를 픽셀로 변환합니다."
        ]
      }
    ]
  },
  "it": {
    "faq": [
      {
        "question": "Che dimensioni ha in pixel una foto tessera statunitense?",
        "answer": "Una foto tessera statunitense misura 2 x 2 pollici. A 300 DPI, ciò equivale a 600 x 600 pixel. Il Dipartimento di Stato degli Stati Uniti richiede che le foto abbiano dimensioni comprese tra 600 x 600 e 1200 x 1200 pixel per l'invio online."
      },
      {
        "question": "Quali sono le dimensioni in pixel di una foto tessera del Regno Unito?",
        "answer": "Una foto tessera del Regno Unito misura 35 x 45 mm. A 300 DPI, ciò equivale a 413 x 531 pixel. Per gli invii digitali, il governo del Regno Unito specifica almeno 600 x 750 pixel."
      },
      {
        "question": "Quali DPI dovrei utilizzare per le foto tessera?",
        "answer": "Utilizzare 300 DPI per le foto tessera. Questo è lo standard per tutte le foto inviate dal governo. Un DPI inferiore potrebbe risultare in una foto sfocata o rifiutata."
      },
      {
        "question": "Qual è la dimensione standard dei biglietti da visita in pixel?",
        "answer": "Un biglietto da visita standard statunitense misura 3,5 x 2 pollici. A 300 DPI, ciò equivale a 1050 x 600 pixel. Include 1/8 di pollice al vivo (37 pixel a 300 DPI) su ciascun lato per file pronti per la stampa."
      }
    ],
    "sections": [
      {
        "id": "passport-photos",
        "title": "Formati foto tessera per Paese",
        "table": {
          "headers": [
            "Paese",
            "Dimensione fisica",
            "Pixel a 300 DPI",
            "Requisiti digitali"
          ],
          "rows": [
            [
              "Stato Stati",
              "2 × 2 pollici (51 × 51 mm)",
              "600 × 600",
              "600 - 1200 px quadrati"
            ],
            [
              "Regno Unito",
              "35 × 45 mm",
              "413 × 531",
              "Min 600 × 750 px"
            ],
            [
              "UE / Schengen",
              "35 × 45 mm",
              "413 × 531",
              "Varia in base al paese"
            ],
            [
              "Canada",
              "50 × 70 mm",
              "591 × 827",
              "Min 420 × 540 px"
            ],
            [
              "Australia",
              "35 × 45 mm",
              "413 × 531",
              "Min 413 × 531 px"
            ],
            [
              "India",
              "35 × 35 mm",
              "413 × 413",
              "350 × 350 px"
            ],
            [
              "Cina",
              "33 × 48 mm",
              "390 × 567",
              "354 × 472 px"
            ],
            [
              "Giappone",
              "35 × 45 mm",
              "413 × 531",
              "Min 413 × 531 px"
            ]
          ]
        }
      },
      {
        "id": "id-photos",
        "title": "Dimensioni foto carta d'identità e visto",
        "table": {
          "headers": [
            "Tipo documento",
            "Dimensione fisica",
            "Pixel a 300 DPI"
          ],
          "rows": [
            [
              "Visto USA",
              "2 × 2 pollici",
              "600 × 600"
            ],
            [
              "Schengen Visto",
              "35 × 45 mm",
              "413 × 531"
            ],
            [
              "Carta verde USA",
              "2 × 2 pollici",
              "600 × 600"
            ],
            [
              "Patente di guida (USA)",
              "Varia in base allo stato",
              "In genere 600 × 600+"
            ]
          ]
        }
      },
      {
        "id": "business-cards",
        "title": "Dimensioni biglietti da visita in pixel",
        "table": {
          "headers": [
            "Regione",
            "Dimensione fisica",
            "Pixel a 300 DPI",
            "Con abbondanza"
          ],
          "rows": [
            [
              "Stati Uniti / Canada",
              "3,5 × 2 pollici",
              "1050 × 600",
              "1125 × 675"
            ],
            [
              "Standard UE",
              "85 × 55 mm",
              "1004 × 650",
              "1063 × 709"
            ],
            [
              "Regno Unito",
              "85 × 55 mm",
              "1004 × 650",
              "1063 × 709"
            ],
            [
              "Giappone",
              "91 × 55 mm",
              "1075 × 650",
              "1134 × 709"
            ]
          ]
        }
      },
      {
        "id": "poster-sizes",
        "title": "Dimensioni comuni dei poster in pixel",
        "table": {
          "headers": [
            "Dimensione poster",
            "150 DPI",
            "300 DPI"
          ],
          "rows": [
            [
              "11 × 17 pollici",
              "1650 × 2550",
              "3300 × 5100"
            ],
            [
              "18 × 24 in",
              "2700 × 3600",
              "5400 × 7200"
            ],
            [
              "24 × 36 in",
              "3600 × 5400",
              "7200 × 10800"
            ],
            [
              "A2 (420 × 594 mm)",
              "2480 × 3508",
              "4961 × 7016"
            ]
          ]
        },
        "paragraphs": [
          "Calcola le dimensioni in pixel per qualsiasi dimensione personalizzata con la nostra dimensione immagine Calcolatrice o convertitore da pollici a pixel."
        ]
      }
    ]
  },
  "nl": {
    "faq": [
      {
        "question": "Welk formaat heeft een Amerikaanse pasfoto in pixels?",
        "answer": "Een Amerikaanse pasfoto is 2 x 2 inch. Bij 300 DPI komt dat overeen met 600 x 600 pixels. Het Amerikaanse ministerie van Buitenlandse Zaken vereist dat foto's tussen 600 x 600 en 1200 x 1200 pixels zijn voor online inzendingen."
      },
      {
        "question": "Welk formaat is een Britse pasfoto in pixels?",
        "answer": "Een Britse pasfoto is 35 x 45 mm. Bij 300 DPI komt dat overeen met 413 x 531 pixels. Voor digitale inzendingen specificeert de Britse overheid minimaal 600 x 750 pixels."
      },
      {
        "question": "Welke DPI moet ik gebruiken voor pasfoto's?",
        "answer": "Gebruik 300 DPI voor pasfoto's. Dit is de standaard voor alle foto-inzendingen van de overheid. Een lagere DPI kan resulteren in een wazige of afgewezen foto."
      },
      {
        "question": "Wat is het standaardformaat van een visitekaartje in pixels?",
        "answer": "Een standaard Amerikaans visitekaartje is 3,5 x 2 inch. Bij 300 DPI komt dat overeen met 1050 x 600 pixels. Voeg aan elke zijde een afloop van 1/8 inch (37 pixels bij 300 DPI) toe voor afdrukklare bestanden."
      }
    ],
    "sections": [
      {
        "id": "passport-photos",
        "title": "Paspoortfotoformaten per land",
        "table": {
          "headers": [
            "Land",
            "Fysieke grootte",
            "Pixels bij 300 DPI",
            "Digitale vereisten"
          ],
          "rows": [
            [
              "Verenigd Staten",
              "2 × 2 in (51 × 51 mm)",
              "600 × 600",
              "600 - 1200 px vierkant"
            ],
            [
              "Verenigd Koninkrijk",
              "35 × 45 mm",
              "413 × 531",
              "Min 600 × 750 px"
            ],
            [
              "EU / Schengen",
              "35 × 45 mm",
              "413 × 531",
              "Varieert per land"
            ],
            [
              "Canada",
              "50 × 70 mm",
              "591 × 827",
              "Min 420 × 540 px"
            ],
            [
              "Australië",
              "35 × 45 mm",
              "413 × 531",
              "Min 413 × 531 px"
            ],
            [
              "India",
              "35 × 35 mm",
              "413 × 413",
              "350 × 350 px"
            ],
            [
              "China",
              "33 × 48 mm",
              "390 × 567",
              "354 × 472 px"
            ],
            [
              "Japan",
              "35 × 45 mm",
              "413 × 531",
              "Min 413 × 531 px"
            ]
          ]
        }
      },
      {
        "id": "id-photos",
        "title": "ID- en Visa-fotoformaten",
        "table": {
          "headers": [
            "Documenttype",
            "Fysieke grootte",
            "Pixels bij 300 DPI"
          ],
          "rows": [
            [
              "US Visa",
              "2 × 2 in",
              "600 × 600"
            ],
            [
              "Schengen Visa",
              "35 × 45 mm",
              "413 × 531"
            ],
            [
              "US Green Card",
              "2 × 2 in",
              "600 × 600"
            ],
            [
              "Rijbewijs (VS)",
              "Varieert per staat",
              "Normaal gesproken 600 × 600+"
            ]
          ]
        }
      },
      {
        "id": "business-cards",
        "title": "Visitekaartjesformaten in pixels",
        "table": {
          "headers": [
            "Regio",
            "Fysieke grootte",
            "Pixels bij 300 DPI",
            "Met afloop"
          ],
          "rows": [
            [
              "VS/Canada",
              "3,5 × 2 inch",
              "1050 × 600",
              "1125 × 675"
            ],
            [
              "EU-standaard",
              "85 × 55 mm",
              "1004 × 650",
              "1063 × 709"
            ],
            [
              "UK",
              "85 × 55 mm",
              "1004 × 650",
              "1063 × 709"
            ],
            [
              "Japan",
              "91 × 55 mm",
              "1075 × 650",
              "1134 × 709"
            ]
          ]
        }
      },
      {
        "id": "poster-sizes",
        "title": "Gemeenschappelijke posterformaten in pixels",
        "table": {
          "headers": [
            "Posterformaat",
            "150 DPI",
            "300 DPI"
          ],
          "rows": [
            [
              "11 × 17 in",
              "1650 × 2550",
              "3300 × 5100"
            ],
            [
              "18 × 24 in",
              "2700 × 3600",
              "5400 × 7200"
            ],
            [
              "24 × 36 in",
              "3600 × 5400",
              "7200 × 10800"
            ],
            [
              "A2 (420 × 594 mm)",
              "2480 × 3508",
              "4961 × 7016"
            ]
          ]
        },
        "paragraphs": [
          "Bereken de pixelafmetingen voor elk aangepast formaat met onze beeldformaatcalculator of inch naar pixels converter."
        ]
      }
    ]
  },
  "ar": {
    "faq": [
      {
        "question": "ما هو حجم صورة جواز السفر الأمريكي بالبكسل؟",
        "answer": "صورة جواز السفر الأمريكي هي 2 × 2 بوصة. بدقة 300 نقطة في البوصة، أي ما يعادل 600 × 600 بكسل. تطلب وزارة الخارجية الأمريكية أن يتراوح حجم الصور بين 600 × 600 و1200 × 1200 بكسل لتقديمها عبر الإنترنت."
      },
      {
        "question": "ما هو حجم صورة جواز السفر البريطاني بالبكسل؟",
        "answer": "صورة جواز السفر البريطاني هي 35 × 45 ملم. بدقة 300 نقطة في البوصة، أي ما يعادل 413 × 531 بكسل. بالنسبة لعمليات التقديم الرقمية، تحدد حكومة المملكة المتحدة 600 × 750 بكسل على الأقل."
      },
      {
        "question": "ما هي DPI التي يجب أن أستخدمها لصور جواز السفر؟",
        "answer": "استخدم 300 نقطة لكل بوصة لصور جواز السفر. هذا هو المعيار لجميع عمليات إرسال الصور الحكومية. قد يؤدي انخفاض DPI إلى ظهور صورة ضبابية أو مرفوضة."
      },
      {
        "question": "ما هو الحجم القياسي لبطاقة العمل بالبكسل؟",
        "answer": "يبلغ حجم بطاقة العمل القياسية الأمريكية 3.5 × 2 بوصة. بدقة 300 نقطة في البوصة، أي ما يعادل 1050 × 600 بكسل. قم بتضمين تسييل 1/8 بوصة (37 بكسل بدقة 300 نقطة لكل بوصة) على كل جانب للملفات الجاهزة للطباعة."
      }
    ],
    "sections": [
      {
        "id": "passport-photos",
        "title": "أحجام صور جواز السفر حسب البلد",
        "table": {
          "headers": [
            "البلد",
            "الحجم الفعلي",
            "البكسل بدقة 300 نقطة لكل بوصة",
            "المتطلبات الرقمية"
          ],
          "rows": [
            [
              "المتحدة الولايات",
              "2 × 2 بوصة (51 × 51 مم)",
              "600 × 600",
              "600 - 1200 بكسل مربع"
            ],
            [
              "المملكة المتحدة",
              "35 × 45 مم",
              "413 × 531",
              "الحد الأدنى 600 × 750 px"
            ],
            [
              "الاتحاد الأوروبي / شنغن",
              "35 × 45 مم",
              "413 × 531",
              "يختلف حسب البلد"
            ],
            [
              "كندا",
              "50 × 70 مم",
              "591 × 827",
              "الحد الأدنى 420 × 540 بكسل"
            ],
            [
              "أستراليا",
              "35 × 45 مم",
              "413 × 531",
              "الحد الأدنى 413 × 531 بكسل"
            ],
            [
              "الهند",
              "35 × 35 مم",
              "413 × 413",
              "350 × 350 بكسل"
            ],
            [
              "الصين",
              "33 × 48 مم",
              "390 × 567",
              "354 × 472 بكسل"
            ],
            [
              "اليابان",
              "35 × 45 مم",
              "413 × 531",
              "الحد الأدنى 413 × 531 بكسل"
            ]
          ]
        }
      },
      {
        "id": "id-photos",
        "title": "أحجام صور الهوية والتأشيرة",
        "table": {
          "headers": [
            "نوع المستند",
            "الحجم المادي",
            "البكسل عند 300 نقطة لكل بوصة"
          ],
          "rows": [
            [
              "تأشيرة الولايات المتحدة",
              "2 × 2 بوصة",
              "600 × 600"
            ],
            [
              "تأشيرة شنغن",
              "35 × 45 مم",
              "413 × 531"
            ],
            [
              "البطاقة الخضراء الأمريكية",
              "2 × 2 بوصة",
              "600 × 600"
            ],
            [
              "رخصة القيادة (الولايات المتحدة)",
              "تختلف حسب الحالة",
              "عادةً 600 × 600+"
            ]
          ]
        }
      },
      {
        "id": "business-cards",
        "title": "أحجام بطاقة العمل بالبكسل",
        "table": {
          "headers": [
            "المنطقة",
            "الحجم الفعلي",
            "وحدات البكسل عند 300 نقطة لكل بوصة",
            "مع تجاوز الهوامش"
          ],
          "rows": [
            [
              "الولايات المتحدة / كندا",
              "3.5 × 2 بوصة",
              "1050 × 600",
              "1125 × 675"
            ],
            [
              "معيار الاتحاد الأوروبي",
              "85 × 55 مم",
              "1004 × 650",
              "1063 × 709"
            ],
            [
              "المملكة المتحدة",
              "85 × 55 ملم",
              "1004 × 650",
              "1063 × 709"
            ],
            [
              "اليابان",
              "91 × 55 ملم",
              "1075 × 650",
              "1134 × 709"
            ]
          ]
        }
      },
      {
        "id": "poster-sizes",
        "title": "أحجام الملصقات الشائعة في البكسل",
        "table": {
          "headers": [
            "حجم الملصق",
            "150 نقطة لكل بوصة",
            "300 نقطة لكل بوصة"
          ],
          "rows": [
            [
              "11 × 17 بوصة",
              "1650 × 2550",
              "3300 × 5100"
            ],
            [
              "18 × 24 بوصة",
              "2700 × 3600",
              "5400 × 7200"
            ],
            [
              "24 × 36 بوصة",
              "3600 × 5400",
              "7200 × 10800"
            ],
            [
              "A2 (420 × 594 ملم)",
              "2480 × 3508",
              "4961 × 7016"
            ]
          ]
        },
        "paragraphs": [
          "احسب أبعاد البكسل لأي حجم مخصص باستخدام حاسبة حجم الصورة أو محول البوصة إلى البكسل."
        ]
      }
    ]
  },
  "tr": {
    "faq": [
      {
        "question": "ABD pasaportu fotoğrafının piksel cinsinden boyutu nedir?",
        "answer": "ABD pasaport fotoğrafı 2 x 2 inçtir. 300 DPI'da bu, 600 x 600 piksele eşittir. ABD Dışişleri Bakanlığı, çevrimiçi gönderimler için fotoğrafların 600 x 600 ile 1200 x 1200 piksel arasında olmasını şart koşuyor."
      },
      {
        "question": "Birleşik Krallık pasaport fotoğrafının piksel cinsinden boyutu nedir?",
        "answer": "Birleşik Krallık pasaport fotoğrafı 35 x 45 mm'dir. 300 DPI'da bu, 413 x 531 piksele eşittir. Dijital gönderimler için Birleşik Krallık hükümeti en az 600 x 750 piksel belirtir."
      },
      {
        "question": "Vesikalık fotoğraflar için hangi DPI'yı kullanmalıyım?",
        "answer": "Vesikalık fotoğraflar için 300 DPI kullanın. Bu, tüm resmi fotoğraf gönderimleri için standarttır. Daha düşük DPI, bulanık veya reddedilen fotoğrafa neden olabilir."
      },
      {
        "question": "Standart kartvizit boyutu piksel cinsinden nedir?",
        "answer": "Standart bir ABD kartviziti 3,5 x 2 inçtir. 300 DPI'da bu, 1050 x 600 piksele eşittir. Baskıya hazır dosyalar için her iki tarafa 1/8 inç taşma payı (300 DPI'da 37 piksel) ekleyin."
      }
    ],
    "sections": [
      {
        "id": "passport-photos",
        "title": "Ülkeye Göre Pasaport Fotoğraf Boyutları",
        "table": {
          "headers": [
            "Ülke",
            "Fiziksel Boyut",
            "300 DPI'da pikseller",
            "Dijital Gereksinimler"
          ],
          "rows": [
            [
              "Amerika Birleşik Devletleri",
              "2 × 2 inç (51 × 51 mm)",
              "600 × 600",
              "600 - 1200 piksel kare"
            ],
            [
              "Birleşik Krallık",
              "35×45mm",
              "413 × 531",
              "En az 600 × 750 piksel"
            ],
            [
              "AB / Schengen",
              "35×45mm",
              "413 × 531",
              "Ülkeye göre değişir"
            ],
            [
              "Kanada",
              "50×70mm",
              "591 × 827",
              "En az 420 × 540 piksel"
            ],
            [
              "Avustralya",
              "35×45mm",
              "413 × 531",
              "En az 413 × 531 piksel"
            ],
            [
              "Hindistan",
              "35×35mm",
              "413 × 413",
              "350 × 350 piksel"
            ],
            [
              "Çin",
              "33×48 mm",
              "390 × 567",
              "354 × 472 piksel"
            ],
            [
              "Japonya",
              "35×45mm",
              "413 × 531",
              "En az 413 × 531 piksel"
            ]
          ]
        }
      },
      {
        "id": "id-photos",
        "title": "Kimlik ve Vize Fotoğraf Boyutları",
        "table": {
          "headers": [
            "Belge Türü",
            "Fiziksel Boyut",
            "300 DPI'da pikseller"
          ],
          "rows": [
            [
              "ABD Vizesi",
              "2 × 2 inç",
              "600 × 600"
            ],
            [
              "Schengen Vizesi",
              "35×45mm",
              "413 × 531"
            ],
            [
              "ABD Yeşil Kartı",
              "2 × 2 inç",
              "600 × 600"
            ],
            [
              "Sürücü Belgesi (ABD)",
              "Eyalete göre değişir",
              "Tipik olarak 600 × 600+"
            ]
          ]
        }
      },
      {
        "id": "business-cards",
        "title": "Piksel Cinsinden Kartvizit Boyutları",
        "table": {
          "headers": [
            "Bölge",
            "Fiziksel Boyut",
            "300 DPI'da pikseller",
            "Taşma payı ile"
          ],
          "rows": [
            [
              "ABD / Kanada",
              "3,5 × 2 inç",
              "1050 × 600",
              "1125 × 675"
            ],
            [
              "AB Standardı",
              "85×55 mm",
              "1004 × 650",
              "1063 × 709"
            ],
            [
              "İngiltere",
              "85×55 mm",
              "1004 × 650",
              "1063 × 709"
            ],
            [
              "Japonya",
              "91 × ​​55 mm",
              "1075 × 650",
              "1134 × 709"
            ]
          ]
        }
      },
      {
        "id": "poster-sizes",
        "title": "Piksel Olarak Yaygın Poster Boyutları",
        "table": {
          "headers": [
            "Poster Boyutu",
            "150 DPI",
            "300 DPI"
          ],
          "rows": [
            [
              "11 × 17 inç",
              "1650 × 2550",
              "3300 × 5100"
            ],
            [
              "18 × 24 inç",
              "2700 × 3600",
              "5400 × 7200"
            ],
            [
              "24 × 36 inç",
              "3600 × 5400",
              "7200 × 10800"
            ],
            [
              "A2 (420 × 594 mm)",
              "2480 × 3508",
              "4961 × 7016"
            ]
          ]
        },
        "paragraphs": [
          "Görüntü Boyutu Hesaplayıcımız veya İnç'ten Piksele Dönüştürücümüzle herhangi bir özel boyut için piksel boyutlarını hesaplayın."
        ]
      }
    ]
  },
  "pl": {
    "faq": [
      {
        "question": "Jaki rozmiar ma zdjęcie w amerykańskim paszporcie w pikselach?",
        "answer": "Zdjęcie do paszportu amerykańskiego ma wymiary 2 x 2 cale. Przy rozdzielczości 300 DPI odpowiada to 600 x 600 pikseli. Departament Stanu USA wymaga, aby zdjęcia przesyłane online miały rozmiar od 600 x 600 do 1200 x 1200 pikseli."
      },
      {
        "question": "Jaki rozmiar ma zdjęcie paszportowe w Wielkiej Brytanii w pikselach?",
        "answer": "Zdjęcie do paszportu brytyjskiego ma wymiary 35 x 45 mm. Przy rozdzielczości 300 DPI odpowiada to 413 x 531 pikselom. W przypadku zgłoszeń cyfrowych rząd Wielkiej Brytanii określa rozmiar co najmniej 600 x 750 pikseli."
      },
      {
        "question": "Jakiego DPI należy używać do zdjęć paszportowych?",
        "answer": "W przypadku zdjęć paszportowych użyj rozdzielczości 300 DPI. Jest to standard w przypadku wszystkich zgłoszeń zdjęć rządowych. Niższe DPI może skutkować rozmyciem lub odrzuceniem zdjęcia."
      },
      {
        "question": "Jaki jest standardowy rozmiar wizytówki w pikselach?",
        "answer": "Standardowa wizytówka w USA ma wymiary 3,5 x 2 cale. Przy 300 DPI odpowiada to 1050 x 600 pikseli. Dołącz spad 1/8 cala (37 pikseli przy 300 DPI) z każdej strony dla plików gotowych do druku."
      }
    ],
    "sections": [
      {
        "id": "passport-photos",
        "title": "Rozmiary zdjęć paszportowych według kraju",
        "table": {
          "headers": [
            "Kraj",
            "Rozmiar fizyczny",
            "Piksele przy 300 DPI",
            "Wymagania cyfrowe"
          ],
          "rows": [
            [
              "Stany Zjednoczone",
              "2 × 2 cale (51 × 51 mm)",
              "600 × 600",
              "Kwadrat o wymiarach 600 - 1200 pikseli"
            ],
            [
              "Zjednoczone Królestwo",
              "35 × 45 mm",
              "413 × 531",
              "Min. 600 × 750 pikseli"
            ],
            [
              "UE / Schengen",
              "35 × 45 mm",
              "413 × 531",
              "Różni się w zależności od kraju"
            ],
            [
              "Kanada",
              "50 × 70 mm",
              "591 × 827",
              "Min. 420 × 540 pikseli"
            ],
            [
              "Australia",
              "35 × 45 mm",
              "413 × 531",
              "Min. 413 × 531 pikseli"
            ],
            [
              "Indie",
              "35 × 35 mm",
              "413 × 413",
              "350 × 350 pikseli"
            ],
            [
              "Chiny",
              "33 × 48 mm",
              "390 × 567",
              "354 × 472 pikseli"
            ],
            [
              "Japonia",
              "35 × 45 mm",
              "413 × 531",
              "Min. 413 × 531 pikseli"
            ]
          ]
        }
      },
      {
        "id": "id-photos",
        "title": "Rozmiary zdjęć do dokumentów tożsamości i wizy",
        "table": {
          "headers": [
            "Typ dokumentu",
            "Rozmiar fizyczny",
            "Piksele przy 300 DPI"
          ],
          "rows": [
            [
              "Wiza amerykańska",
              "2 × 2 cale",
              "600 × 600"
            ],
            [
              "Wiza Schengen",
              "35 × 45 mm",
              "413 × 531"
            ],
            [
              "Zielona Karta USA",
              "2 × 2 cale",
              "600 × 600"
            ],
            [
              "Prawo jazdy (USA)",
              "Różni się w zależności od stanu",
              "Zwykle 600 × 600+"
            ]
          ]
        }
      },
      {
        "id": "business-cards",
        "title": "Rozmiary wizytówek w pikselach",
        "table": {
          "headers": [
            "Region",
            "Rozmiar fizyczny",
            "Piksele przy 300 DPI",
            "Z Krwawieniem"
          ],
          "rows": [
            [
              "USA/Kanada",
              "3,5 × 2 cale",
              "1050 × 600",
              "1125 × 675"
            ],
            [
              "Norma UE",
              "85 × 55 mm",
              "1004 × 650",
              "1063 × 709"
            ],
            [
              "Wielka Brytania",
              "85 × 55 mm",
              "1004 × 650",
              "1063 × 709"
            ],
            [
              "Japonia",
              "91 × ​​55 mm",
              "1075 × 650",
              "1134 × 709"
            ]
          ]
        }
      },
      {
        "id": "poster-sizes",
        "title": "Typowe rozmiary plakatów w pikselach",
        "table": {
          "headers": [
            "Rozmiar plakatu",
            "150 DPI",
            "300 DPI"
          ],
          "rows": [
            [
              "11 × 17 cali",
              "1650 × 2550",
              "3300 × 5100"
            ],
            [
              "18 × 24 cale",
              "2700 × 3600",
              "5400 × 7200"
            ],
            [
              "24 × 36 cali",
              "3600 × 5400",
              "7200 × 10800"
            ],
            [
              "A2 (420 × 594 mm)",
              "2480 × 3508",
              "4961 × 7016"
            ]
          ]
        },
        "paragraphs": [
          "Oblicz wymiary w pikselach dla dowolnego niestandardowego rozmiaru za pomocą naszego kalkulatora rozmiaru obrazu lub konwertera cali na piksele."
        ]
      }
    ]
  },
  "id": {
    "faq": [
      {
        "question": "Berapa ukuran foto paspor AS dalam piksel?",
        "answer": "Foto paspor AS berukuran 2 x 2 inci. Pada 300 DPI, itu sama dengan 600 x 600 piksel. Departemen Luar Negeri AS mewajibkan foto berukuran antara 600 x 600 dan 1200 x 1200 piksel untuk pengiriman online."
      },
      {
        "question": "Berapa ukuran foto paspor Inggris dalam piksel?",
        "answer": "Foto paspor Inggris berukuran 35 x 45 mm. Pada 300 DPI, itu sama dengan 413 x 531 piksel. Untuk pengiriman digital, pemerintah Inggris menetapkan setidaknya 600 x 750 piksel."
      },
      {
        "question": "Berapa DPI yang harus saya gunakan untuk foto paspor?",
        "answer": "Gunakan 300 DPI untuk foto paspor. Ini adalah standar untuk semua pengiriman foto pemerintah. DPI yang lebih rendah dapat mengakibatkan foto buram atau ditolak."
      },
      {
        "question": "Berapa ukuran kartu nama standar dalam piksel?",
        "answer": "Kartu nama standar AS berukuran 3,5 x 2 inci. Pada 300 DPI, itu sama dengan 1050 x 600 piksel. Sertakan bleed 1/8 inci (37 piksel pada 300 DPI) di setiap sisi untuk file siap cetak."
      }
    ],
    "sections": [
      {
        "id": "passport-photos",
        "title": "Ukuran Foto Paspor menurut Negara",
        "table": {
          "headers": [
            "Negara",
            "Ukuran Fisik",
            "Piksel pada 300 DPI",
            "Persyaratan Digital"
          ],
          "rows": [
            [
              "United Menyatakan",
              "2 × 2 inci (51 × 51 mm)",
              "600 × 600",
              "600 - 1200 px persegi"
            ],
            [
              "Inggris Raya",
              "35 × 45 mm",
              "413 × 531",
              "Min 600 × 750 px"
            ],
            [
              "EU / Schengen",
              "35 × 45 mm",
              "413 × 531",
              "Bervariasi menurut negara"
            ],
            [
              "Kanada",
              "50 × 70 mm",
              "591 × 827",
              "Min 420 × 540 px"
            ],
            [
              "Australia",
              "35 × 45 mm",
              "413 × 531",
              "Min 413 × 531 px"
            ],
            [
              "India",
              "35 × 35 mm",
              "413 × 413",
              "350 × 350 px"
            ],
            [
              "China",
              "33 × 48 mm",
              "390 × 567",
              "354 × 472 px"
            ],
            [
              "Jepang",
              "35 × 45 mm",
              "413 × 531",
              "Min 413 × 531 px"
            ]
          ]
        }
      },
      {
        "id": "id-photos",
        "title": "Ukuran Foto ID dan Visa",
        "table": {
          "headers": [
            "Jenis Dokumen",
            "Ukuran Fisik",
            "Piksel pada 300 DPI"
          ],
          "rows": [
            [
              "Visa AS",
              "2 × 2 dalam",
              "600 × 600"
            ],
            [
              "Schengen Visa",
              "35 × 45 mm",
              "413 × 531"
            ],
            [
              "US Green Card",
              "2 × 2 inci",
              "600 × 600"
            ],
            [
              "Surat Izin Mengemudi (AS)",
              "Bervariasi menurut negara bagian",
              "Biasanya 600 × 600+"
            ]
          ]
        }
      },
      {
        "id": "business-cards",
        "title": "Ukuran Kartu Bisnis dalam Piksel",
        "table": {
          "headers": [
            "Wilayah",
            "Ukuran Fisik",
            "Piksel pada 300 DPI",
            "Dengan Bleed"
          ],
          "rows": [
            [
              "AS / Kanada",
              "3,5 × 2 dalam",
              "1050 × 600",
              "1125 × 675"
            ],
            [
              "Standar UE",
              "85 × 55 mm",
              "1004 × 650",
              "1063 × 709"
            ],
            [
              "Inggris",
              "85 × 55 mm",
              "1004 × 650",
              "1063 × 709"
            ],
            [
              "Jepang",
              "91 × 55 mm",
              "1075 × 650",
              "1134 × 709"
            ]
          ]
        }
      },
      {
        "id": "poster-sizes",
        "title": "Ukuran Poster Umum dalam Piksel",
        "table": {
          "headers": [
            "Ukuran Poster",
            "150 DPI",
            "300 DPI"
          ],
          "rows": [
            [
              "11 × 17 inci",
              "1650 × 2550",
              "3300 × 5100"
            ],
            [
              "18 × 24 dalam",
              "2700 × 3600",
              "5400 × 7200"
            ],
            [
              "24 × 36 dalam",
              "3600 × 5400",
              "7200 × 10800"
            ],
            [
              "A2 (420 × 594 mm)",
              "2480 × 3508",
              "4961 × 7016"
            ]
          ]
        },
        "paragraphs": [
          "Hitung dimensi piksel untuk ukuran khusus apa pun dengan Ukuran Gambar kami Kalkulator atau Konverter Inci ke Piksel."
        ]
      }
    ]
  },
  "ru": {
    "faq": [
      {
        "question": "Какой размер фотографии на паспорт США в пикселях?",
        "answer": "Фотография на паспорт США имеет размер 2 x 2 дюйма. При разрешении 300 DPI это соответствует 600 x 600 пикселей. Государственный департамент США требует, чтобы фотографии для онлайн-отправки имели размер от 600 x 600 до 1200 x 1200 пикселей."
      },
      {
        "question": "Какой размер фотографии на британский паспорт в пикселях?",
        "answer": "Размер фотографии на британский паспорт составляет 35 x 45 мм. При разрешении 300 точек на дюйм это соответствует 413 x 531 пикселей. Для цифровых заявок правительство Великобритании указывает размер не менее 600 x 750 пикселей."
      },
      {
        "question": "Какое разрешение следует использовать для фотографий на паспорт?",
        "answer": "Используйте 300 DPI для фотографий на паспорт. Это стандарт для всех правительственных фотографий. Более низкое значение DPI может привести к размытию или отклонению фотографии."
      },
      {
        "question": "Каков стандартный размер визитной карточки в пикселях?",
        "answer": "Стандартная визитная карточка США - 3,5 x 2 дюйма. При разрешении 300 DPI это соответствует 1050 x 600 пикселей. Включите обрез 1/8 дюйма (37 пикселей при разрешении 300 точек на дюйм) с каждой стороны для файлов, готовых к печати."
      }
    ],
    "sections": [
      {
        "id": "passport-photos",
        "title": "Размеры фотографий на паспорт по странам",
        "table": {
          "headers": [
            "Страна",
            "Физический размер",
            "Пикселей при разрешении 300 точек на дюйм",
            "Цифровые требования"
          ],
          "rows": [
            [
              "United Штаты",
              "2 × 2 дюйма (51 × 51 мм)",
              "600 × 600",
              "600 - 1200 пикселей квадратные"
            ],
            [
              "Великобритания",
              "35 × 45 мм",
              "413 × 531",
              "Мин 600 × 750 пикселей"
            ],
            [
              "ЕС / Шенген",
              "35 × 45 мм",
              "413 × 531",
              "Зависит от страны"
            ],
            [
              "Канада",
              "50 × 70 мм",
              "591 × 827",
              "Мин 420 × 540 пикселей"
            ],
            [
              "Австралия",
              "35 × 45 мм",
              "413 × 531",
              "Мин 413 × 531 пикселей"
            ],
            [
              "Индия",
              "35 × 35 мм",
              "413 × 413",
              "350 × 350 пикселей"
            ],
            [
              "Китай",
              "33 × 48 мм",
              "390 × 567",
              "354 × 472 пикселей"
            ],
            [
              "Япония",
              "35 × 45 мм",
              "413 × 531",
              "Минимум 413 × 531 пикселей"
            ]
          ]
        }
      },
      {
        "id": "id-photos",
        "title": "Размеры фотографий для удостоверения личности и визы",
        "table": {
          "headers": [
            "Тип документа",
            "Физический размер",
            "Пикселей при 300 DPI"
          ],
          "rows": [
            [
              "Виза США",
              "2 × 2 в",
              "600 × 600"
            ],
            [
              "Шенгенская виза",
              "35 × 45 мм",
              "413 × 531"
            ],
            [
              "Грин-карта США",
              "2 × 2 дюйма",
              "600 × 600"
            ],
            [
              "Водительские права (США)",
              "Зависит от штат",
              "Обычно 600 × 600+"
            ]
          ]
        }
      },
      {
        "id": "business-cards",
        "title": "Размеры визитных карточек в пикселях",
        "table": {
          "headers": [
            "Регион",
            "Физический размер",
            "Пикселей при 300 DPI",
            "С кровотечением"
          ],
          "rows": [
            [
              "США / Канада",
              "3,5 × 2 дюйма",
              "1050 × 600",
              "1125 × 675"
            ],
            [
              "Стандарт ЕС",
              "85 × 55 мм",
              "1004 × 650",
              "1063 × 709"
            ],
            [
              "UK",
              "85 × 55 мм",
              "1004 × 650",
              "1063 × 709"
            ],
            [
              "Япония",
              "91 × 55 мм",
              "1075 × 650",
              "1134 × 709"
            ]
          ]
        }
      },
      {
        "id": "poster-sizes",
        "title": "Распространенные размеры плакатов в Пиксели",
        "table": {
          "headers": [
            "Размер плаката",
            "150 DPI",
            "300 DPI"
          ],
          "rows": [
            [
              "11 × 17 дюймов",
              "1650 × 2550",
              "3300 × 5100"
            ],
            [
              "18 × 24 дюйма",
              "2700 × 3600",
              "5400 × 7200"
            ],
            [
              "24 × 36 дюймов",
              "3600 × 5400",
              "7200 × 10800"
            ],
            [
              "A2 (420 × 594 мм)",
              "2480 × 3508",
              "4961 × 7016"
            ]
          ]
        },
        "paragraphs": [
          "Рассчитайте размеры в пикселях для любого пользовательского размера с помощью нашего калькулятора размера изображения или конвертера дюймов в пиксели."
        ]
      }
    ]
  }
};
