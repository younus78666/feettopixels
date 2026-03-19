import type { LocalizedDocMap } from "./doc-types";

export const content: LocalizedDocMap = {
  "en": {
    "faq": [
      {
        "question": "What is A4 size in pixels at 300 DPI?",
        "answer": "A4 paper (210 x 297 mm or 8.27 x 11.69 inches) at 300 DPI is 2480 x 3508 pixels. This is the standard resolution for professional print-quality A4 documents."
      },
      {
        "question": "What is US Letter size in pixels at 300 DPI?",
        "answer": "US Letter (8.5 x 11 inches) at 300 DPI is 2550 x 3300 pixels. This is the standard for print-ready documents in North America."
      },
      {
        "question": "What DPI should I use for paper size conversions?",
        "answer": "Use 300 DPI for professional printing, 150 DPI for draft prints and home use, 96 DPI for screen mockups, and 72 DPI for web-only documents."
      },
      {
        "question": "What is A3 size in pixels?",
        "answer": "A3 (297 x 420 mm) at 300 DPI is 3508 x 4961 pixels. At 150 DPI, it is 1754 x 2480 pixels. At 72 DPI, it is 842 x 1191 pixels."
      }
    ],
    "sections": [
      {
        "id": "iso-a-series",
        "title": "ISO A Series Paper Sizes",
        "paragraphs": [
          "The ISO 216 standard defines the A series of paper sizes used worldwide. Each size is derived by halving the next larger size along its longer dimension. All values below are in pixels (width × height)."
        ],
        "table": {
          "headers": [
            "Size",
            "mm",
            "Inches",
            "72 DPI",
            "96 DPI",
            "150 DPI",
            "300 DPI"
          ],
          "rows": [
            [
              "A3",
              "297 × 420",
              "11.69 × 16.54",
              "842 × 1191",
              "1123 × 1588",
              "1754 × 2480",
              "3508 × 4961"
            ],
            [
              "A4",
              "210 × 297",
              "8.27 × 11.69",
              "595 × 842",
              "794 × 1123",
              "1240 × 1754",
              "2480 × 3508"
            ],
            [
              "A5",
              "148 × 210",
              "5.83 × 8.27",
              "420 × 595",
              "560 × 794",
              "874 × 1240",
              "1748 × 2480"
            ],
            [
              "A6",
              "105 × 148",
              "4.13 × 5.83",
              "298 × 420",
              "397 × 560",
              "620 × 874",
              "1240 × 1748"
            ],
            [
              "A2",
              "420 × 594",
              "16.54 × 23.39",
              "1191 × 1684",
              "1588 × 2245",
              "2480 × 3508",
              "4961 × 7016"
            ],
            [
              "A1",
              "594 × 841",
              "23.39 × 33.11",
              "1684 × 2384",
              "2245 × 3179",
              "3508 × 4967",
              "7016 × 9933"
            ],
            [
              "A0",
              "841 × 1189",
              "33.11 × 46.81",
              "2384 × 3370",
              "3179 × 4494",
              "4967 × 7022",
              "9933 × 14043"
            ]
          ]
        }
      },
      {
        "id": "us-paper-sizes",
        "title": "US Paper Sizes",
        "table": {
          "headers": [
            "Size",
            "Inches",
            "72 DPI",
            "96 DPI",
            "150 DPI",
            "300 DPI"
          ],
          "rows": [
            [
              "Letter",
              "8.5 × 11",
              "612 × 792",
              "816 × 1056",
              "1275 × 1650",
              "2550 × 3300"
            ],
            [
              "Legal",
              "8.5 × 14",
              "612 × 1008",
              "816 × 1344",
              "1275 × 2100",
              "2550 × 4200"
            ],
            [
              "Tabloid",
              "11 × 17",
              "792 × 1224",
              "1056 × 1632",
              "1650 × 2550",
              "3300 × 5100"
            ],
            [
              "Executive",
              "7.25 × 10.5",
              "522 × 756",
              "696 × 1008",
              "1088 × 1575",
              "2175 × 3150"
            ]
          ]
        }
      },
      {
        "id": "how-to-calculate",
        "title": "How to Calculate Paper Size in Pixels",
        "paragraphs": [
          "The formula is simple: pixels = inches × DPI. For metric measurements, first convert millimeters to inches by dividing by 25.4, then multiply by DPI.",
          "For example, A4 width: 210 mm / 25.4 = 8.27 inches × 300 DPI = 2480 pixels.",
          "Use our Image Size Calculator for quick conversions, or browse our Inches to Pixels converter for custom dimensions."
        ]
      }
    ]
  },
  "es": {
    "faq": [
      {
        "question": "¿Qué es el tamaño A4 en píxeles a 300 ppp?",
        "answer": "El papel A4 (210 x 297 mm o 8,27 x 11,69 pulgadas) a 300 ppp tiene 2480 x 3508 píxeles. Esta es la resolución estándar para documentos A4 con calidad de impresión profesional."
      },
      {
        "question": "¿Cuál es el tamaño Carta estadounidense en píxeles a 300 ppp?",
        "answer": "Carta estadounidense (8,5 x 11 pulgadas) a 300 ppp es 2550 x 3300 píxeles. Este es el estándar para documentos listos para imprimir en Norteamérica."
      },
      {
        "question": "¿Qué ppp debo usar para las conversiones de tamaño de papel?",
        "answer": "Utilice 300 ppp para impresión profesional, 150 ppp para borradores y uso doméstico, 96 ppp para maquetas de pantalla y 72 ppp para documentos solo web."
      },
      {
        "question": "¿Qué es el tamaño A3 en píxeles?",
        "answer": "A3 (297 x 420 mm) a 300 DPI son 3508 x 4961 píxeles. A 150 DPI, tiene 1754 x 2480 píxeles. A 72 DPI, tiene 842 x 1191 píxeles."
      }
    ],
    "sections": [
      {
        "id": "iso-a-series",
        "title": "Tamaños de papel de la serie ISO A",
        "paragraphs": [
          "El estándar ISO 216 define la serie A de tamaños de papel utilizados en todo el mundo. Cada tamaño se obtiene dividiendo a la mitad el siguiente tamaño más grande a lo largo de su dimensión más larga. Todos los valores siguientes están en píxeles (ancho × alto)."
        ],
        "table": {
          "headers": [
            "Tamaño",
            "mm",
            "Pulgadas",
            "72 DPI",
            "96 DPI",
            "150 DPI",
            "300 DPI"
          ],
          "rows": [
            [
              "A3",
              "297 × 420",
              "11,69 × 16,54",
              "842 × 1191",
              "1123 × 1588",
              "1754 × 2480",
              "3508 × 4961"
            ],
            [
              "A4",
              "210 × 297",
              "8,27 × 11,69",
              "595 × 842",
              "794 × 1123",
              "1240 × 1754",
              "2480 × 3508"
            ],
            [
              "A5",
              "148 × 210",
              "5,83 × 8,27",
              "420 × 595",
              "560 × 794",
              "874 × 1240",
              "1748 × 2480"
            ],
            [
              "A6",
              "105 × 148",
              "4,13 × 5,83",
              "298 × 420",
              "397 × 560",
              "620 × 874",
              "1240 × 1748"
            ],
            [
              "A2",
              "420 × 594",
              "16,54 × 23,39",
              "1191 × 1684",
              "1588 × 2245",
              "2480 × 3508",
              "4961 × 7016"
            ],
            [
              "A1",
              "594 × 841",
              "23,39 × 33,11",
              "1684 × 2384",
              "2245 × 3179",
              "3508 × 4967",
              "7016 × 9933"
            ],
            [
              "A0",
              "841 × 1189",
              "33,11 × 46,81",
              "2384 × 3370",
              "3179 × 4494",
              "4967 × 7022",
              "9933 × 14043"
            ]
          ]
        }
      },
      {
        "id": "us-paper-sizes",
        "title": "Papel EE.UU. Tamaños",
        "table": {
          "headers": [
            "Tamaño",
            "Pulgadas",
            "72 DPI",
            "96 DPI",
            "150 DPI",
            "300 DPI"
          ],
          "rows": [
            [
              "Carta",
              "8,5 × 11",
              "612 × 792",
              "816 × 1056",
              "1275 × 1650",
              "2550 × 3300"
            ],
            [
              "Legal",
              "8.5 × 14",
              "612 × 1008",
              "816 × 1344",
              "1275 × 2100",
              "2550 × 4200"
            ],
            [
              "Tabloide",
              "11 × 17",
              "792 × 1224",
              "1056 × 1632",
              "1650 × 2550",
              "3300 × 5100"
            ],
            [
              "Ejecutivo",
              "7,25 × 10,5",
              "522 × 756",
              "696 × 1008",
              "1088 × 1575",
              "2175 × 3150"
            ]
          ]
        }
      },
      {
        "id": "how-to-calculate",
        "title": "Cómo calcular el tamaño del papel en píxeles",
        "paragraphs": [
          "La fórmula es simple: píxeles = pulgadas × DPI. Para medidas métricas, primero convierta milímetros a pulgadas dividiendo por 25,4, luego multiplique por DPI.",
          "Por ejemplo, ancho A4: 210 mm / 25,4 = 8,27 pulgadas × 300 DPI = 2480 píxeles.",
          "Utilice nuestra Calculadora de tamaño de imagen para conversiones rápidas o explore nuestro conversor de pulgadas a píxeles para obtener dimensiones personalizadas."
        ]
      }
    ]
  },
  "fr": {
    "faq": [
      {
        "question": "Qu'est-ce que le format A4 en pixels à 300 DPI ?",
        "answer": "Le papier A4 (210 x 297 mm ou 8,27 x 11,69 pouces) à 300 DPI correspond à 2 480 x 3 508 pixels. Il s'agit de la résolution standard pour les documents A4 de qualité d'impression professionnelle."
      },
      {
        "question": "Quelle est la taille d'une lettre américaine en pixels à 300 DPI ?",
        "answer": "Une lettre américaine (8,5 x 11 pouces) à 300 DPI est de 2 550 x 3 300 pixels. Il s'agit de la norme pour les documents prêts à imprimer en Amérique du Nord."
      },
      {
        "question": "Quelle résolution dois-je utiliser pour les conversions de format de papier ?",
        "answer": "Utilisez 300 DPI pour l'impression professionnelle, 150 DPI pour les brouillons et l'usage domestique, 96 DPI pour les maquettes d'écran et 72 DPI pour les documents Web uniquement."
      },
      {
        "question": "Qu'est-ce que le format A3 en pixels ?",
        "answer": "A3 (297 x 420 mm) à 300 DPI correspond à 3508 x 4961 pixels. À 150 DPI, c'est 1754 x 2480 pixels. À 72 DPI, la résolution est de 842 x 1 191 pixels."
      }
    ],
    "sections": [
      {
        "id": "iso-a-series",
        "title": "Formats de papier de la série ISO A",
        "paragraphs": [
          "La norme ISO 216 définit la série A de formats de papier utilisés dans le monde entier. Chaque taille est dérivée en divisant par deux la taille immédiatement supérieure le long de sa dimension la plus longue. Toutes les valeurs ci-dessous sont en pixels (largeur × hauteur)."
        ],
        "table": {
          "headers": [
            "Taille",
            "mm",
            "Pouces",
            "72 DPI",
            "96 DPI",
            "150 DPI",
            "300 DPI"
          ],
          "rows": [
            [
              "A3",
              "297 × 420",
              "11,69 × 16,54",
              "842 × 1191",
              "1123 × 1588",
              "1754 × 2480",
              "3508 × 4961"
            ],
            [
              "A4",
              "210 × 297",
              "8,27 × 11,69",
              "595 × 842",
              "794 × 1123",
              "1240 × 1754",
              "2480 × 3508"
            ],
            [
              "A5",
              "148 × 210",
              "5,83 × 8,27",
              "420 × 595",
              "560 × 794",
              "874 × 1240",
              "1748 × 2480"
            ],
            [
              "A6",
              "105 × 148",
              "4,13 × 5,83",
              "298 × 420",
              "397 × 560",
              "620 × 874",
              "1240 × 1748"
            ],
            [
              "A2",
              "420 × 594",
              "16,54 × 23,39",
              "1191 × 1684",
              "1588 × 2245",
              "2480 × 3508",
              "4961 × 7016"
            ],
            [
              "A1",
              "594 × 841",
              "23,39 × 33,11",
              "1684 × 2384",
              "2245 × 3179",
              "3508 × 4967",
              "7016 × 9933"
            ],
            [
              "A0",
              "841 × 1189",
              "33,11 × 46,81",
              "2384 × 3370",
              "3179 × 4494",
              "4967 × 7022",
              "9933 × 14043"
            ]
          ]
        }
      },
      {
        "id": "us-paper-sizes",
        "title": "Papier américain Tailles",
        "table": {
          "headers": [
            "Taille",
            "Pouces",
            "72 DPI",
            "96 DPI",
            "150 DPI",
            "300 DPI"
          ],
          "rows": [
            [
              "Lettre",
              "8,5 × 11",
              "612 × 792",
              "816 × 1056",
              "1275 × 1650",
              "2550 × 3300"
            ],
            [
              "Légal",
              "8,5 × 14",
              "612 × 1008",
              "816 × 1344",
              "1275 × 2100",
              "2550 × 4200"
            ],
            [
              "Tabloid",
              "11 × 17",
              "792 × 1224",
              "1056 × 1632",
              "1650 × 2550",
              "3300 × 5100"
            ],
            [
              "Exécutif",
              "7,25 × 10,5",
              "522 × 756",
              "696 × 1008",
              "1088 × 1575",
              "2175 × 3150"
            ]
          ]
        }
      },
      {
        "id": "how-to-calculate",
        "title": "Comment calculer la taille du papier en pixels",
        "paragraphs": [
          "La formule est simple : pixels = pouces × DPI. Pour les mesures métriques, convertissez d'abord les millimètres en pouces en divisant par 25,4, puis multipliez par DPI.",
          "Par exemple, largeur A4 : 210 mm / 25,4 = 8,27 pouces × 300 DPI = 2 480 pixels.",
          "Utilisez notre calculateur de taille d'image pour des conversions rapides ou parcourez notre convertisseur de pouces en pixels pour des dimensions personnalisées."
        ]
      }
    ]
  },
  "de": {
    "faq": [
      {
        "question": "Was ist die A4-Größe in Pixeln bei 300 DPI?",
        "answer": "A4-Papier (210 x 297 mm oder 8,27 x 11,69 Zoll) beträgt bei 300 DPI 2480 x 3508 Pixel. Dies ist die Standardauflösung für A4-Dokumente in professioneller Druckqualität."
      },
      {
        "question": "Was ist die US-Letter-Größe in Pixeln bei 300 DPI?",
        "answer": "US-Letter (8,5 x 11 Zoll) bei 300 DPI beträgt 2550 x 3300 Pixel. Dies ist der Standard für druckfertige Dokumente in Nordamerika."
      },
      {
        "question": "Welche DPI sollte ich für Papierformatkonvertierungen verwenden?",
        "answer": "Verwenden Sie 300 DPI für professionelles Drucken, 150 DPI für Entwurfsdrucke und den Heimgebrauch, 96 DPI für Bildschirmmodelle und 72 DPI für Nur-Web-Dokumente."
      },
      {
        "question": "Was ist das A3-Format? Pixel?",
        "answer": "A3 (297 x 420 mm) bei 300 DPI beträgt 3508 x 4961 Pixel. Bei 150 DPI sind es 1754 x 2480 Pixel. Bei 72 DPI sind es 842 x 1191 Pixel."
      }
    ],
    "sections": [
      {
        "id": "iso-a-series",
        "title": "Papierformate der ISO-A-Serie",
        "paragraphs": [
          "Der ISO-216-Standard definiert die weltweit verwendeten Papierformate der A-Serie. Jede Größe wird abgeleitet, indem die nächstgrößere Größe entlang ihrer längeren Abmessung halbiert wird. Alle folgenden Werte sind in Pixel (Breite × Höhe)."
        ],
        "table": {
          "headers": [
            "Größe",
            "mm",
            "Zoll",
            "72 DPI",
            "96 DPI",
            "150 DPI",
            "300 DPI"
          ],
          "rows": [
            [
              "A3",
              "297 × 420",
              "11,69 × 16,54",
              "842 × 1191",
              "1123 × 1588",
              "1754 × 2480",
              "3508 × 4961"
            ],
            [
              "A4",
              "210 × 297",
              "8,27 × 11,69",
              "595 × 842",
              "794 × 1123",
              "1240 × 1754",
              "2480 × 3508"
            ],
            [
              "A5",
              "148 × 210",
              "5,83 × 8,27",
              "420 × 595",
              "560 × 794",
              "874 × 1240",
              "1748 × 2480"
            ],
            [
              "A6",
              "105 × 148",
              "4,13 × 5,83",
              "298 × 420",
              "397 × 560",
              "620 × 874",
              "1240 × 1748"
            ],
            [
              "A2",
              "420 × 594",
              "16,54 × 23,39",
              "1191 × 1684",
              "1588 × 2245",
              "2480 × 3508",
              "4961 × 7016"
            ],
            [
              "A1",
              "594 × 841",
              "23,39 × 33,11",
              "1684 × 2384",
              "2245 × 3179",
              "3508 × 4967",
              "7016 × 9933"
            ],
            [
              "A0",
              "841 × 1189",
              "33,11 × 46,81",
              "2384 × 3370",
              "3179 × 4494",
              "4967 × 7022",
              "9933 × 14043"
            ]
          ]
        }
      },
      {
        "id": "us-paper-sizes",
        "title": "US-Papier Größen",
        "table": {
          "headers": [
            "Größe",
            "Zoll",
            "72 DPI",
            "96 DPI",
            "150 DPI",
            "300 DPI"
          ],
          "rows": [
            [
              "Buchstabe",
              "8,5 × 11",
              "612 × 792",
              "816 × 1056",
              "1275 × 1650",
              "2550 × 3300"
            ],
            [
              "Legal",
              "8,5 × 14",
              "612 × 1008",
              "816 × 1344",
              "1275 × 2100",
              "2550 × 4200"
            ],
            [
              "Tabloid",
              "11 × 17",
              "792 × 1224",
              "1056 × 1632",
              "1650 × 2550",
              "3300 × 5100"
            ],
            [
              "Executive",
              "7,25 × 10,5",
              "522 × 756",
              "696 × 1008",
              "1088 × 1575",
              "2175 × 3150"
            ]
          ]
        }
      },
      {
        "id": "how-to-calculate",
        "title": "So berechnen Sie die Papiergröße in Pixeln",
        "paragraphs": [
          "Die Formel ist einfach: Pixel = Zoll × DPI. Für metrische Maße wandeln Sie zunächst Millimeter in Zoll um, indem Sie durch 25,4 dividieren und dann mit DPI multiplizieren.",
          "Zum Beispiel A4-Breite: 210 mm / 25,4 = 8,27 Zoll × 300 DPI = 2480 Pixel.",
          "Verwenden Sie unseren Bildgrößenrechner für schnelle Umrechnungen oder durchsuchen Sie unseren Zoll-Pixel-Konverter für benutzerdefinierte Abmessungen."
        ]
      }
    ]
  },
  "pt": {
    "faq": [
      {
        "question": "Qual é o tamanho A4 em pixels a 300 DPI?",
        "answer": "O papel A4 (210 x 297 mm ou 8,27 x 11,69 polegadas) a 300 DPI tem 2.480 x 3.508 pixels. Esta é a resolução padrão para documentos A4 com qualidade de impressão profissional."
      },
      {
        "question": "Qual é o tamanho da carta dos EUA em pixels a 300 DPI?",
        "answer": "Carta dos EUA (8,5 x 11 polegadas) a 300 DPI é 2550 x 3300 pixels. Este é o padrão para documentos prontos para impressão na América do Norte."
      },
      {
        "question": "Qual DPI devo usar para conversões de tamanho de papel?",
        "answer": "Use 300 DPI para impressão profissional, 150 DPI para rascunhos e uso doméstico, 96 DPI para maquetes de tela e 72 DPI para documentos somente para web."
      },
      {
        "question": "Qual é o tamanho A3 em pixels?",
        "answer": "A3 (297 x 420 mm) a 300 DPI tem 3508 x 4961 pixels. A 150 DPI, são 1754 x 2480 pixels. A 72 DPI, são 842 x 1191 pixels."
      }
    ],
    "sections": [
      {
        "id": "iso-a-series",
        "title": "Tamanhos de papel da série ISO A",
        "paragraphs": [
          "O padrão ISO 216 define a série A de tamanhos de papel usados ​​em todo o mundo. Cada tamanho é obtido dividindo pela metade o próximo tamanho maior ao longo de sua dimensão mais longa. Todos os valores abaixo estão em pixels (largura x altura)."
        ],
        "table": {
          "headers": [
            "Tamanho",
            "milímetros",
            "Polegadas",
            "72 DPI",
            "96 DPI",
            "150 DPI",
            "300 DPI"
          ],
          "rows": [
            [
              "A3",
              "297 × 420",
              "11,69 × 16,54",
              "842 × 1191",
              "1123 × 1588",
              "1754 × 2480",
              "3508 × 4961"
            ],
            [
              "A4",
              "210 × 297",
              "8,27 × 11,69",
              "595 × 842",
              "794 × 1123",
              "1240 × 1754",
              "2480 × 3508"
            ],
            [
              "A5",
              "148 × 210",
              "5,83 × 8,27",
              "420 × 595",
              "560 × 794",
              "874 × 1240",
              "1748 × 2480"
            ],
            [
              "A6",
              "105 × 148",
              "4,13 × 5,83",
              "298 × 420",
              "397 × 560",
              "620 × 874",
              "1240 × 1748"
            ],
            [
              "A2",
              "420 × 594",
              "16,54 × 23,39",
              "1191 × 1684",
              "1588 × 2245",
              "2480 × 3508",
              "4961 × 7016"
            ],
            [
              "A1",
              "594 × 841",
              "23,39 × 33,11",
              "1684 × 2384",
              "2245 × 3179",
              "3508 × 4967",
              "7016 × 9933"
            ],
            [
              "A0",
              "841 × 1189",
              "33,11 × 46,81",
              "2384 × 3370",
              "3179 × 4494",
              "4967 × 7022",
              "9933 × 14043"
            ]
          ]
        }
      },
      {
        "id": "us-paper-sizes",
        "title": "Tamanhos de papel dos EUA",
        "table": {
          "headers": [
            "Tamanho",
            "Polegadas",
            "72 DPI",
            "96 DPI",
            "150 DPI",
            "300 DPI"
          ],
          "rows": [
            [
              "Carta",
              "8,5 × 11",
              "612 × 792",
              "816×1056",
              "1275 × 1650",
              "2550 × 3300"
            ],
            [
              "Jurídico",
              "8,5 × 14",
              "612 × 1008",
              "816 × 1344",
              "1275 × 2100",
              "2550 × 4200"
            ],
            [
              "Tablóide",
              "11×17",
              "792 × 1224",
              "1056 × 1632",
              "1650 × 2550",
              "3300 × 5100"
            ],
            [
              "Executivo",
              "7,25 × 10,5",
              "522 × 756",
              "696 × 1008",
              "1088 × 1575",
              "2175 × 3150"
            ]
          ]
        }
      },
      {
        "id": "how-to-calculate",
        "title": "Como calcular o tamanho do papel em pixels",
        "paragraphs": [
          "A fórmula é simples: pixels = polegadas × DPI. Para medidas métricas, primeiro converta milímetros em polegadas dividindo por 25,4 e depois multiplique por DPI.",
          "Por exemplo, largura A4: 210 mm / 25,4 = 8,27 polegadas × 300 DPI = 2.480 pixels.",
          "Use nossa calculadora de tamanho de imagem para conversões rápidas ou navegue em nosso conversor de polegadas em pixels para dimensões personalizadas."
        ]
      }
    ]
  },
  "hi": {
    "faq": [
      {
        "question": "300 डीपीआई पर पिक्सेल में ए4 आकार क्या है?",
        "answer": "300 डीपीआई पर ए4 पेपर (210 x 297 मिमी या 8.27 x 11.69 इंच) 2480 x 3508 पिक्सल है। यह पेशेवर प्रिंट-गुणवत्ता वाले A4 दस्तावेज़ों के लिए मानक रिज़ॉल्यूशन है।"
      },
      {
        "question": "300 डीपीआई पर पिक्सेल में यूएस लेटर का आकार क्या है?",
        "answer": "300 डीपीआई पर यूएस लेटर (8.5 x 11 इंच) 2550 x 3300 पिक्सल है। यह उत्तरी अमेरिका में प्रिंट-तैयार दस्तावेज़ों के लिए मानक है।"
      },
      {
        "question": "कागज़ के आकार के रूपांतरण के लिए मुझे किस डीपीआई का उपयोग करना चाहिए?",
        "answer": "पेशेवर मुद्रण के लिए 300 डीपीआई, ड्राफ्ट प्रिंट और घरेलू उपयोग के लिए 150 डीपीआई, स्क्रीन मॉकअप के लिए 96 डीपीआई और केवल-वेब दस्तावेज़ों के लिए 72 डीपीआई का उपयोग करें।"
      },
      {
        "question": "पिक्सेल में A3 आकार क्या है?",
        "answer": "A3 (297 x 420 मिमी) 300 DPI पर 3508 x 4961 पिक्सेल है। 150 डीपीआई पर, यह 1754 x 2480 पिक्सल है। 72 डीपीआई पर, यह 842 x 1191 पिक्सल है।"
      }
    ],
    "sections": [
      {
        "id": "iso-a-series",
        "title": "आईएसओ ए सीरीज पेपर आकार",
        "paragraphs": [
          "ISO 216 मानक दुनिया भर में उपयोग किए जाने वाले कागज़ आकारों की A श्रृंखला को परिभाषित करता है। प्रत्येक आकार को उसके लंबे आयाम के साथ अगले बड़े आकार को आधा करके प्राप्त किया जाता है। नीचे दिए गए सभी मान पिक्सेल (चौड़ाई × ऊंचाई) में हैं।"
        ],
        "table": {
          "headers": [
            "आकार",
            "मिमी",
            "इंच",
            "72 डीपीआई",
            "96 डीपीआई",
            "150 डीपीआई",
            "300 डीपीआई"
          ],
          "rows": [
            [
              "ए3",
              "297×420",
              "11.69 × 16.54",
              "842 × 1191",
              "1123 × 1588",
              "1754 × 2480",
              "3508 × 4961"
            ],
            [
              "ए4",
              "210×297",
              "8.27 × 11.69",
              "595×842",
              "794×1123",
              "1240 × 1754",
              "2480 × 3508"
            ],
            [
              "ए5",
              "148×210",
              "5.83 × 8.27",
              "420×595",
              "560×794",
              "874 × 1240",
              "1748 × 2480"
            ],
            [
              "ए6",
              "105×148",
              "4.13 × 5.83",
              "298×420",
              "397×560",
              "620×874",
              "1240 × 1748"
            ],
            [
              "ए2",
              "420×594",
              "16.54 × 23.39",
              "1191 × 1684",
              "1588 × 2245",
              "2480 × 3508",
              "4961 × 7016"
            ],
            [
              "ए 1",
              "594×841",
              "23.39 × 33.11",
              "1684×2384",
              "2245 × 3179",
              "3508 × 4967",
              "7016 × 9933"
            ],
            [
              "उ0",
              "841 × 1189",
              "33.11 × 46.81",
              "2384 × 3370",
              "3179 × 4494",
              "4967×7022",
              "9933 × 14043"
            ]
          ]
        }
      },
      {
        "id": "us-paper-sizes",
        "title": "यूएस पेपर आकार",
        "table": {
          "headers": [
            "आकार",
            "इंच",
            "72 डीपीआई",
            "96 डीपीआई",
            "150 डीपीआई",
            "300 डीपीआई"
          ],
          "rows": [
            [
              "पत्र",
              "8.5×11",
              "612×792",
              "816 × 1056",
              "1275 × 1650",
              "2550×3300"
            ],
            [
              "कानूनी",
              "8.5×14",
              "612 × 1008",
              "816 × 1344",
              "1275 × 2100",
              "2550×4200"
            ],
            [
              "मुख़्तसर",
              "11×17",
              "792 × 1224",
              "1056 × 1632",
              "1650×2550",
              "3300 × 5100"
            ],
            [
              "कार्यकारिणी",
              "7.25 × 10.5",
              "522×756",
              "696 × 1008",
              "1088 × 1575",
              "2175 × 3150"
            ]
          ]
        }
      },
      {
        "id": "how-to-calculate",
        "title": "पिक्सेल में कागज़ के आकार की गणना कैसे करें",
        "paragraphs": [
          "सूत्र सरल है: पिक्सेल = इंच × डीपीआई। मीट्रिक माप के लिए, पहले मिलीमीटर को 25.4 से विभाजित करके इंच में बदलें, फिर डीपीआई से गुणा करें।",
          "उदाहरण के लिए, A4 चौड़ाई: 210 मिमी / 25.4 = 8.27 इंच × 300 DPI = 2480 पिक्सेल।",
          "त्वरित रूपांतरण के लिए हमारे छवि आकार कैलकुलेटर का उपयोग करें, या कस्टम आयामों के लिए हमारे इंच से पिक्सेल कनवर्टर को ब्राउज़ करें।"
        ]
      }
    ]
  },
  "ja": {
    "faq": [
      {
        "question": "300 DPI における A4 サイズのピクセル数は何ですか?",
        "answer": "300 DPI の A4 用紙 (210 x 297 mm または 8.27 x 11.69 インチ) は 2480 x 3508 ピクセルです。これは、プロフェッショナルな印刷品質の A4 ドキュメントの標準解像度です。"
      },
      {
        "question": "300 DPI での US レター サイズ (ピクセル単位) は何ですか?",
        "answer": "300 DPI での US レター (8.5 x 11 インチ) は 2550 x 3300 ピクセルです。これは、北米における印刷可能なドキュメントの標準です。"
      },
      {
        "question": "用紙サイズの変換にはどの DPI を使用すればよいですか?",
        "answer": "プロの印刷には 300 DPI、下書き印刷と家庭での使用には 150 DPI、画面モックアップには 96 DPI、Web 専用ドキュメントには 72 DPI を使用してください。"
      },
      {
        "question": "A3 サイズはピクセル単位でどれくらいですか?",
        "answer": "A3 (297 x 420 mm) 300 DPI では 3508 x 4961 ピクセルです。 150 DPI では、1754 x 2480 ピクセルになります。 72 DPI では、842 x 1191 ピクセルになります。"
      }
    ],
    "sections": [
      {
        "id": "iso-a-series",
        "title": "ISO A シリーズの用紙サイズ",
        "paragraphs": [
          "ISO 216 標準は、世界中で使用される A シリーズの用紙サイズを定義しています。各サイズは、次に大きいサイズを長辺に沿って半分にすることによって得られます。以下の値はすべてピクセル単位 (幅 × 高さ) です。"
        ],
        "table": {
          "headers": [
            "サイズ",
            "mm",
            "インチ",
            "72 DPI",
            "96 DPI",
            "150 DPI",
            "300 DPI"
          ],
          "rows": [
            [
              "A3",
              "297 × 420",
              "11.69 × 16.54",
              "842 × 1191",
              "1123 × 1588",
              "1754 × 2480",
              "3508 × 4961"
            ],
            [
              "A4",
              "210 × 297",
              "8.27 × 11.69",
              "595 × 842",
              "794 × 1123",
              "1240 × 1754",
              "2480 × 3508"
            ],
            [
              "A5",
              "148 × 210",
              "5.83 × 8.27",
              "420 × 595",
              "560 × 794",
              "874 × 1240",
              "1748 × 2480"
            ],
            [
              "A6",
              "105 × 148",
              "4.13 × 5.83",
              "298 × 420",
              "397 × 560",
              "620 × 874",
              "1240 × 1748"
            ],
            [
              "A2",
              "420 × 594",
              "16.54 × 23.39",
              "1191 × 1684",
              "1588 × 2245",
              "2480 × 3508",
              "4961 × 7016"
            ],
            [
              "A1",
              "594 × 841",
              "23.39 × 33.11",
              "1684 × 2384",
              "2245 × 3179",
              "3508 × 4967",
              "7016 × 9933"
            ],
            [
              "A0",
              "841 × 1189",
              "33.11 × 46.81",
              "2384 × 3370",
              "3179 × 4494",
              "4967 × 7022",
              "9933 × 14043"
            ]
          ]
        }
      },
      {
        "id": "us-paper-sizes",
        "title": "米国論文サイズ",
        "table": {
          "headers": [
            "サイズ",
            "インチ",
            "72 DPI",
            "96 DPI",
            "150 DPI",
            "300 DPI"
          ],
          "rows": [
            [
              "レター",
              "8.5 × 11",
              "612 × 792",
              "816 × 1056",
              "1275 × 1650",
              "2550 × 3300"
            ],
            [
              "法定",
              "8.5 × 14",
              "612 × 1008",
              "816 × 1344",
              "1275 × 2100",
              "2550 × 4200"
            ],
            [
              "タブロイド",
              "11 × 17",
              "792 × 1224",
              "1056 × 1632",
              "1650 × 2550",
              "3300 × 5100"
            ],
            [
              "エグゼクティブ",
              "7.25 × 10.5",
              "522 × 756",
              "696 × 1008",
              "1088 × 1575",
              "2175 × 3150"
            ]
          ]
        }
      },
      {
        "id": "how-to-calculate",
        "title": "用紙サイズをピクセル単位で計算する方法",
        "paragraphs": [
          "式は単純です: ピクセル = インチ × DPI。メートル法による測定の場合は、最初に 25.4 で割ってミリメートルをインチに変換し、次に DPI を掛けます。",
          "たとえば、A4 幅: 210 mm / 25.4 = 8.27 インチ × 300 DPI = 2480 ピクセルです。",
          "画像サイズ計算ツールを使用して簡単に変換するか、インチからピクセルへのコンバーターを参照してカスタム寸法を確認します。"
        ]
      }
    ]
  },
  "ko": {
    "faq": [
      {
        "question": "300DPI에서 A4 크기(픽셀)는 얼마입니까?",
        "answer": "300DPI에서 A4 용지(210 x 297mm 또는 8.27 x 11.69인치)는 2480 x 3508픽셀입니다. 이는 전문적인 인쇄 품질 A4 문서의 표준 해상도입니다."
      },
      {
        "question": "300 DPI에서 US Letter 크기(픽셀)는 얼마입니까?",
        "answer": "300 DPI에서 US Letter(8.5 x 11인치)는 2550 x 3300픽셀입니다. 이는 북미 지역의 인쇄용 문서에 대한 표준입니다."
      },
      {
        "question": "용지 크기 변환에 어떤 DPI를 사용해야 합니까?",
        "answer": "전문 인쇄에는 300 DPI, 초안 인쇄 및 가정용에는 150 DPI, 화면 모형에는 96 DPI, 웹 전용 문서에는 72 DPI를 사용하십시오."
      },
      {
        "question": "A3 크기는 픽셀 단위로 무엇입니까?",
        "answer": "A3 (297 x 420mm)는 300DPI에서 3508 x 4961픽셀입니다. 150DPI에서는 1754x2480픽셀입니다. 72 DPI에서는 842 x 1191 픽셀입니다."
      }
    ],
    "sections": [
      {
        "id": "iso-a-series",
        "title": "ISO A 시리즈 용지 크기",
        "paragraphs": [
          "ISO 216 표준은 전 세계적으로 사용되는 A 시리즈 용지 크기를 정의합니다. 각 크기는 더 긴 치수를 따라 다음으로 큰 크기를 절반으로 나누어 파생됩니다. 아래의 모든 값은 픽셀(너비 × 높이) 단위입니다."
        ],
        "table": {
          "headers": [
            "크기",
            "mm",
            "인치",
            "72 DPI",
            "96 DPI",
            "150 DPI",
            "300 DPI"
          ],
          "rows": [
            [
              "A3",
              "297 × 420",
              "11.69 × 16.54",
              "842 × 1191",
              "1123 × 1588",
              "1754 × 2480",
              "3508 × 4961"
            ],
            [
              "A4",
              "210 × 297",
              "8.27 × 11.69",
              "595 × 842",
              "794 × 1123",
              "1240 × 1754",
              "2480 × 3508"
            ],
            [
              "A5",
              "148 × 210",
              "5.83 × 8.27",
              "420 × 595",
              "560 × 794",
              "874 × 1240",
              "1748 × 2480"
            ],
            [
              "A6",
              "105 × 148",
              "4.13 × 5.83",
              "298 × 420",
              "397 × 560",
              "620 × 874",
              "1240 × 1748"
            ],
            [
              "A2",
              "420 × 594",
              "16.54 × 23.39",
              "1191 × 1684",
              "1588 × 2245",
              "2480 × 3508",
              "4961 × 7016"
            ],
            [
              "A1",
              "594 × 841",
              "23.39 × 33.11",
              "1684 × 2384",
              "2245 × 3179",
              "3508 × 4967",
              "7016 × 9933"
            ],
            [
              "A0",
              "841 × 1189",
              "33.11 × 46.81",
              "2384 × 3370",
              "3179 × 4494",
              "4967 × 7022",
              "9933 × 14043"
            ]
          ]
        }
      },
      {
        "id": "us-paper-sizes",
        "title": "US 용지 크기",
        "table": {
          "headers": [
            "크기",
            "인치",
            "72 DPI",
            "96 DPI",
            "150 DPI",
            "300 DPI"
          ],
          "rows": [
            [
              "Letter",
              "8.5 × 11",
              "612 × 792",
              "816 × 1056",
              "1275 × 1650",
              "2550 × 3300"
            ],
            [
              "법적",
              "8.5 × 14",
              "612 × 1008",
              "816 × 1344",
              "1275 × 2100",
              "2550 × 4200"
            ],
            [
              "타블로이드",
              "11 × 17",
              "792 × 1224",
              "1056 × 1632",
              "1650 × 2550",
              "3300 × 5100"
            ],
            [
              "임원",
              "7.25 × 10.5",
              "522 × 756",
              "696 × 1008",
              "1088 × 1575",
              "2175 × 3150"
            ]
          ]
        }
      },
      {
        "id": "how-to-calculate",
        "title": "용지 크기를 픽셀 단위로 계산하는 방법",
        "paragraphs": [
          "공식은 간단합니다: 픽셀 = 인치 × DPI. 미터법 측정의 경우 먼저 25.4로 나누어 밀리미터를 인치로 변환한 다음 DPI로 곱합니다.",
          "예: A4 너비: 210mm / 25.4 = 8.27인치 × 300 DPI = 2480픽셀.",
          "빠른 변환을 위해 이미지 크기 계산기를 사용하거나 사용자 정의 치수를 위해 인치-픽셀 변환기를 찾아보세요."
        ]
      }
    ]
  },
  "it": {
    "faq": [
      {
        "question": "Qual è il formato A4 in pixel a 300 DPI?",
        "answer": "La carta A4 (210 x 297 mm o 8,27 x 11,69 pollici) a 300 DPI è 2480 x 3508 pixel. Questa è la risoluzione standard per documenti A4 di qualità di stampa professionale."
      },
      {
        "question": "Qual è la dimensione US Letter in pixel a 300 DPI?",
        "answer": "US Letter (8,5 x 11 pollici) a 300 DPI è 2550 x 3300 pixel. Questo è lo standard per i documenti pronti per la stampa in Nord America."
      },
      {
        "question": "Quali DPI devo utilizzare per le conversioni del formato carta?",
        "answer": "Utilizzare 300 DPI per la stampa professionale, 150 DPI per bozze e uso domestico, 96 DPI per modelli di schermo e 72 DPI per documenti solo Web."
      },
      {
        "question": "Qual è la dimensione A3 in pixel?",
        "answer": "A3 (297 x 420 mm) a 300 DPI è 3508 x 4961 pixel. A 150 DPI, è 1754 x 2480 pixel. A 72 DPI, è 842 x 1191 pixel."
      }
    ],
    "sections": [
      {
        "id": "iso-a-series",
        "title": "Formati carta serie ISO A",
        "paragraphs": [
          "Lo standard ISO 216 definisce la serie A di formati carta utilizzati in tutto il mondo. Ogni dimensione viene ottenuta dimezzando la dimensione successiva più grande lungo la sua dimensione più lunga. Tutti i valori seguenti sono in pixel (larghezza × altezza)."
        ],
        "table": {
          "headers": [
            "Dimensioni",
            "mm",
            "Pollici",
            "72 DPI",
            "96 DPI",
            "150 DPI",
            "300 DPI"
          ],
          "rows": [
            [
              "A3",
              "297 × 420",
              "11,69 × 16,54",
              "842 × 1191",
              "1123 × 1588",
              "1754 × 2480",
              "3508 × 4961"
            ],
            [
              "A4",
              "210 × 297",
              "8,27 × 11,69",
              "595 × 842",
              "794 × 1123",
              "1240 × 1754",
              "2480 × 3508"
            ],
            [
              "A5",
              "148 × 210",
              "5,83 × 8,27",
              "420 × 595",
              "560 × 794",
              "874 × 1240",
              "1748 × 2480"
            ],
            [
              "A6",
              "105 × 148",
              "4,13 × 5,83",
              "298 × 420",
              "397 × 560",
              "620 × 874",
              "1240 × 1748"
            ],
            [
              "A2",
              "420 × 594",
              "16,54 × 23,39",
              "1191 × 1684",
              "1588 × 2245",
              "2480 × 3508",
              "4961 × 7016"
            ],
            [
              "A1",
              "594 × 841",
              "23,39 × 33,11",
              "1684 × 2384",
              "2245 × 3179",
              "3508 × 4967",
              "7016 × 9933"
            ],
            [
              "A0",
              "841 × 1189",
              "33,11 × 46,81",
              "2384 × 3370",
              "3179 × 4494",
              "4967 × 7022",
              "9933 × 14043"
            ]
          ]
        }
      },
      {
        "id": "us-paper-sizes",
        "title": "Carta USA Dimensioni",
        "table": {
          "headers": [
            "Dimensione",
            "Pollici",
            "72 DPI",
            "96 DPI",
            "150 DPI",
            "300 DPI"
          ],
          "rows": [
            [
              "Lettera",
              "8,5 × 11",
              "612 × 792",
              "816 × 1056",
              "1275 × 1650",
              "2550 × 3300"
            ],
            [
              "Legale",
              "8,5 × 14",
              "612 × 1008",
              "816 × 1344",
              "1275 × 2100",
              "2550 × 4200"
            ],
            [
              "Tabloid",
              "11 × 17",
              "792 × 1224",
              "1056 × 1632",
              "1650 × 2550",
              "3300 × 5100"
            ],
            [
              "Dirigente",
              "7,25 × 10,5",
              "522 × 756",
              "696 × 1008",
              "1088 × 1575",
              "2175 × 3150"
            ]
          ]
        }
      },
      {
        "id": "how-to-calculate",
        "title": "Come calcolare il formato carta in pixel",
        "paragraphs": [
          "La formula è semplice: pixel = pollici × DPI. Per le misurazioni metriche, converti prima i millimetri in pollici dividendo per 25,4, quindi moltiplica per DPI.",
          "Ad esempio, larghezza A4: 210 mm/25,4 = 8,27 pollici × 300 DPI = 2480 pixel.",
          "Utilizza il nostro calcolatore delle dimensioni dell'immagine per conversioni rapide oppure sfoglia il nostro convertitore da pollici a pixel per dimensioni personalizzate."
        ]
      }
    ]
  },
  "nl": {
    "faq": [
      {
        "question": "Wat is A4-formaat in pixels bij 300 DPI?",
        "answer": "A4-papier (210 x 297 mm of 8,27 x 11,69 inch) bij 300 DPI is 2480 x 3508 pixels. Dit is de standaardresolutie voor A4-documenten van professionele afdrukkwaliteit."
      },
      {
        "question": "Wat is US Letter-formaat in pixels bij 300 DPI?",
        "answer": "US Letter (8,5 x 11 inch) bij 300 DPI is 2550 x 3300 pixels. Dit is de standaard voor drukklare documenten in Noord-Amerika."
      },
      {
        "question": "Welke DPI moet ik gebruiken voor conversies van papierformaten?",
        "answer": "Gebruik 300 DPI voor professioneel afdrukken, 150 DPI voor conceptafdrukken en thuisgebruik, 96 DPI voor schermmodellen en 72 DPI voor documenten die alleen op internet beschikbaar zijn."
      },
      {
        "question": "Wat is A3-formaat in pixels?",
        "answer": "A3 (297 x 420 mm) bij 300 DPI is 3508 x 4961 pixels. Bij 150 DPI is dit 1754 x 2480 pixels. Bij 72 DPI is dit 842 x 1191 pixels."
      }
    ],
    "sections": [
      {
        "id": "iso-a-series",
        "title": "ISO A-serie papierformaten",
        "paragraphs": [
          "De ISO 216-standaard definieert de A-serie papierformaten die wereldwijd worden gebruikt. Elke maat wordt afgeleid door de volgende grotere maat te halveren langs de langere afmeting. Alle onderstaande waarden zijn in pixels (breedte × hoogte)."
        ],
        "table": {
          "headers": [
            "Grootte",
            "mm",
            "Inches",
            "72 DPI",
            "96 DPI",
            "150 DPI",
            "300 DPI"
          ],
          "rows": [
            [
              "A3",
              "297 × 420",
              "11,69 × 16,54",
              "842 × 1191",
              "1123 × 1588",
              "1754 × 2480",
              "3508 × 4961"
            ],
            [
              "A4",
              "210 × 297",
              "8,27 × 11,69",
              "595 × 842",
              "794 × 1123",
              "1240 × 1754",
              "2480 × 3508"
            ],
            [
              "A5",
              "148 × 210",
              "5,83 × 8,27",
              "420 × 595",
              "560 × 794",
              "874 × 1240",
              "1748 × 2480"
            ],
            [
              "A6",
              "105 × 148",
              "4,13 × 5,83",
              "298 × 420",
              "397 × 560",
              "620 × 874",
              "1240 × 1748"
            ],
            [
              "A2",
              "420 × 594",
              "16,54 × 23,39",
              "1191 × 1684",
              "1588 × 2245",
              "2480 × 3508",
              "4961 × 7016"
            ],
            [
              "A1",
              "594 × 841",
              "23,39 × 33,11",
              "1684 × 2384",
              "2245 × 3179",
              "3508 × 4967",
              "7016 × 9933"
            ],
            [
              "A0",
              "841 × 1189",
              "33,11 × 46,81",
              "2384 × 3370",
              "3179 × 4494",
              "4967 × 7022",
              "9933 × 14043"
            ]
          ]
        }
      },
      {
        "id": "us-paper-sizes",
        "title": "Amerikaans papier Maten",
        "table": {
          "headers": [
            "Grootte",
            "Inches",
            "72 DPI",
            "96 DPI",
            "150 DPI",
            "300 DPI"
          ],
          "rows": [
            [
              "Letter",
              "8,5 × 11",
              "612 × 792",
              "816 × 1056",
              "1275 × 1650",
              "2550 × 3300"
            ],
            [
              "Juridisch",
              "8,5 × 14",
              "612 × 1008",
              "816 × 1344",
              "1275 × 2100",
              "2550 × 4200"
            ],
            [
              "Tabloid",
              "11 × 17",
              "792 × 1224",
              "1056 × 1632",
              "1650 × 2550",
              "3300 × 5100"
            ],
            [
              "Executive",
              "7,25 × 10,5",
              "522 × 756",
              "696 × 1008",
              "1088 × 1575",
              "2175 × 3150"
            ]
          ]
        }
      },
      {
        "id": "how-to-calculate",
        "title": "Het papierformaat in pixels berekenen",
        "paragraphs": [
          "De formule is eenvoudig: pixels = inches × DPI. Voor metrische metingen converteert u eerst millimeters naar inches door te delen door 25,4 en vermenigvuldigt u vervolgens met DPI.",
          "Bijvoorbeeld A4-breedte: 210 mm / 25,4 = 8,27 inch × 300 DPI = 2480 pixels.",
          "Gebruik onze beeldformaatcalculator voor snelle conversies, of blader door onze inch naar pixels-converter voor aangepaste afmetingen."
        ]
      }
    ]
  },
  "ar": {
    "faq": [
      {
        "question": "ما هو حجم A4 بالبكسل عند 300 نقطة لكل بوصة؟",
        "answer": "ورق A4 (210 × 297 مم أو 8.27 × 11.69 بوصة) عند 300 نقطة لكل بوصة هو 2480 × 3508 بكسل. هذه هي الدقة القياسية لمستندات A4 ذات جودة الطباعة الاحترافية."
      },
      {
        "question": "ما هو حجم الحرف الأمريكي بالبكسل عند 300 نقطة لكل بوصة؟",
        "answer": "الحرف الأمريكي (8.5 × 11 بوصة) بدقة 300 نقطة لكل بوصة هو 2550 × 3300 بكسل. هذا هو المعيار للمستندات الجاهزة للطباعة في أمريكا الشمالية."
      },
      {
        "question": "ما هي DPI التي يجب استخدامها لتحويل حجم الورق؟",
        "answer": "استخدم 300 نقطة في البوصة للطباعة الاحترافية، و150 نقطة في البوصة للمسودات المطبوعة والاستخدام المنزلي، و96 نقطة في البوصة لنماذج الشاشة، و72 نقطة في البوصة للمستندات المتوفرة على الويب فقط."
      },
      {
        "question": "ما هو حجم A3 بالبكسل؟",
        "answer": "A3 (297 × 420 ملم) بدقة 300 نقطة لكل بوصة هي 3508 × 4961 بكسل. بدقة 150 نقطة في البوصة، أي 1754 × 2480 بكسل. بدقة 72 نقطة في البوصة، تكون 842 × 1191 بكسل."
      }
    ],
    "sections": [
      {
        "id": "iso-a-series",
        "title": "أحجام الورق من سلسلة ISO A",
        "paragraphs": [
          "يحدد معيار ISO 216 سلسلة A من أحجام الورق المستخدمة في جميع أنحاء العالم. يتم اشتقاق كل حجم عن طريق خفض الحجم الأكبر التالي إلى النصف على طول البعد الأطول. جميع القيم أدناه بالبكسل (العرض × الارتفاع)."
        ],
        "table": {
          "headers": [
            "الحجم",
            "مم",
            "بوصة",
            "72 نقطة لكل بوصة",
            "96 نقطة لكل بوصة",
            "150 نقطة لكل بوصة",
            "300 نقطة لكل بوصة"
          ],
          "rows": [
            [
              "A3",
              "297 × 420",
              "11.69 × 16.54",
              "842 × 1191",
              "1123 × 1588",
              "1754 × 2480",
              "3508 × 4961"
            ],
            [
              "A4",
              "210 × 297",
              "8.27 × 11.69",
              "595 × 842",
              "794 × 1123",
              "1240 × 1754",
              "2480 × 3508"
            ],
            [
              "A5",
              "148 × 210",
              "5.83 × 8.27",
              "420 × 595",
              "560 × 794",
              "874 × 1240",
              "1748 × 2480"
            ],
            [
              "A6",
              "105 × 148",
              "4.13 × 5.83",
              "298 × 420",
              "397 × 560",
              "620 × 874",
              "1240 × 1748"
            ],
            [
              "A2",
              "420 × 594",
              "16.54 × 23.39",
              "1191 × 1684",
              "1588 × 2245",
              "2480 × 3508",
              "4961 × 7016"
            ],
            [
              "A1",
              "594 × 841",
              "23.39 × 33.11",
              "1684 × 2384",
              "2245 × 3179",
              "3508 × 4967",
              "7016 × 9933"
            ],
            [
              "A0",
              "841 × 1189",
              "33.11 × 46.81",
              "2384 × 3370",
              "3179 × 4494",
              "4967 × 7022",
              "9933 × 14043"
            ]
          ]
        }
      },
      {
        "id": "us-paper-sizes",
        "title": "ورق أمريكي الأحجام",
        "table": {
          "headers": [
            "الحجم",
            "بوصة",
            "72 نقطة لكل بوصة",
            "96 نقطة لكل بوصة",
            "150 نقطة لكل بوصة",
            "300 نقطة لكل بوصة"
          ],
          "rows": [
            [
              "حرف",
              "8.5 × 11",
              "612 × 792",
              "816 × 1056",
              "1275 × 1650",
              "2550 × 3300"
            ],
            [
              "قانونية",
              "8.5 × 14",
              "612 × 1008",
              "816 × 1344",
              "1275 × 2100",
              "2550 × 4200"
            ],
            [
              "التابلويد",
              "11 × 17",
              "792 × 1224",
              "1056 × 1632",
              "1650 × 2550",
              "3300 × 5100"
            ],
            [
              "تنفيذي",
              "7.25 × 10.5",
              "522 × 756",
              "696 × 1008",
              "1088 × 1575",
              "2175 × 3150"
            ]
          ]
        }
      },
      {
        "id": "how-to-calculate",
        "title": "كيفية حساب حجم الورق بالبكسل",
        "paragraphs": [
          "الصيغة بسيطة: البكسل = بوصة × DPI. بالنسبة للقياسات المترية، قم أولاً بتحويل الملليمترات إلى بوصة عن طريق القسمة على 25.4، ثم الضرب في DPI.",
          "على سبيل المثال، عرض A4: 210 مم / 25.4 = 8.27 بوصة × 300 نقطة لكل بوصة = 2480 بكسل.",
          "استخدم حاسبة حجم الصورة الخاصة بنا لإجراء تحويلات سريعة، أو تصفح محول البوصة إلى البكسل للحصول على أبعاد مخصصة."
        ]
      }
    ]
  },
  "tr": {
    "faq": [
      {
        "question": "300 DPI'da piksel cinsinden A4 boyutu nedir?",
        "answer": "300 DPI'da A4 kağıdı (210 x 297 mm veya 8,27 x 11,69 inç) 2480 x 3508 pikseldir. Bu, profesyonel baskı kalitesinde A4 belgeler için standart çözünürlüktür."
      },
      {
        "question": "300 DPI'da US Letter boyutu piksel cinsinden nedir?",
        "answer": "300 DPI'da US Letter (8,5 x 11 inç) 2550 x 3300 pikseldir. Bu, Kuzey Amerika'da baskıya hazır belgeler için standarttır."
      },
      {
        "question": "Kağıt boyutu dönüştürmeleri için hangi DPI kullanmalıyım?",
        "answer": "Profesyonel yazdırma için 300 DPI, taslak baskılar ve ev kullanımı için 150 DPI, ekran maketleri için 96 DPI ve yalnızca web belgeleri için 72 DPI kullanın."
      },
      {
        "question": "A3 boyutu nedir? piksel?",
        "answer": "A3 (297 x 420 mm), 300 DPI'da 3508 x 4961 pikseldir. 150 DPI'da 1754 x 2480 pikseldir. 72 DPI'da 842 x 1191 pikseldir."
      }
    ],
    "sections": [
      {
        "id": "iso-a-series",
        "title": "ISO A Serisi Kağıt Boyutları",
        "paragraphs": [
          "ISO 216 standardı, dünya çapında kullanılan A serisi kağıt boyutlarını tanımlar. Her boyut, bir sonraki daha büyük boyutun daha uzun boyutu boyunca yarıya indirilmesiyle elde edilir. Aşağıdaki tüm değerler piksel cinsindendir (genişlik × yükseklik)."
        ],
        "table": {
          "headers": [
            "Boyut",
            "mm",
            "İnç",
            "72 DPI",
            "96 DPI",
            "150 DPI",
            "300 DPI"
          ],
          "rows": [
            [
              "A3",
              "297 × 420",
              "11,69 × 16,54",
              "842 × 1191",
              "1123 × 1588",
              "1754 × 2480",
              "3508 × 4961"
            ],
            [
              "A4",
              "210 × 297",
              "8,27 × 11,69",
              "595 × 842",
              "794 × 1123",
              "1240 × 1754",
              "2480 × 3508"
            ],
            [
              "A5",
              "148 × 210",
              "5,83 × 8,27",
              "420 × 595",
              "560 × 794",
              "874 × 1240",
              "1748 × 2480"
            ],
            [
              "A6",
              "105 × 148",
              "4,13 × 5,83",
              "298 × 420",
              "397 × 560",
              "620 × 874",
              "1240 × 1748"
            ],
            [
              "A2",
              "420 × 594",
              "16,54 × 23,39",
              "1191 × 1684",
              "1588 × 2245",
              "2480 × 3508",
              "4961 × 7016"
            ],
            [
              "A1",
              "594 × 841",
              "23,39 × 33,11",
              "1684 × 2384",
              "2245 × 3179",
              "3508 × 4967",
              "7016 × 9933"
            ],
            [
              "A0",
              "841 × 1189",
              "33,11 × 46,81",
              "2384 × 3370",
              "3179 × 4494",
              "4967 × 7022",
              "9933 × 14043"
            ]
          ]
        }
      },
      {
        "id": "us-paper-sizes",
        "title": "ABD Kağıdı Boyutlar",
        "table": {
          "headers": [
            "Boyut",
            "İnç",
            "72 DPI",
            "96 DPI",
            "150 DPI",
            "300 DPI"
          ],
          "rows": [
            [
              "Mektup",
              "8,5 × 11",
              "612 × 792",
              "816 × 1056",
              "1275 × 1650",
              "2550 × 3300"
            ],
            [
              "Yasal",
              "8,5 × 14",
              "612 × 1008",
              "816 × 1344",
              "1275 × 2100",
              "2550 × 4200"
            ],
            [
              "Magazin",
              "11 × 17",
              "792 × 1224",
              "1056 × 1632",
              "1650 × 2550",
              "3300 × 5100"
            ],
            [
              "Yönetici",
              "7,25 × 10,5",
              "522 × 756",
              "696 × 1008",
              "1088 × 1575",
              "2175 × 3150"
            ]
          ]
        }
      },
      {
        "id": "how-to-calculate",
        "title": "Kağıt Boyutu Piksel Cinsinden Nasıl Hesaplanır",
        "paragraphs": [
          "Formül basittir: piksel = inç × DPI. Metrik ölçümler için önce milimetreyi 25,4'e bölerek inç'e dönüştürün, ardından DPI ile çarpın.",
          "Örneğin, A4 genişliği: 210 mm / 25,4 = 8,27 inç × 300 DPI = 2480 piksel.",
          "Hızlı dönüşümler için Görüntü Boyutu Hesaplayıcımızı kullanın veya özel boyutlar için İnç - Piksel dönüştürücümüze göz atın."
        ]
      }
    ]
  },
  "pl": {
    "faq": [
      {
        "question": "Jaki jest rozmiar A4 w pikselach przy 300 DPI?",
        "answer": "Papier A4 (210 x 297 mm lub 8,27 x 11,69 cala) przy 300 DPI to 2480 x 3508 pikseli. Jest to standardowa rozdzielczość dla dokumentów w formacie A4 do druku profesjonalnego."
      },
      {
        "question": "Jaki jest rozmiar US Letter w pikselach przy 300 DPI?",
        "answer": "US Letter (8,5 x 11 cali) przy 300 DPI to 2550 x 3300 pikseli. Jest to standard dokumentów gotowych do druku w Ameryce Północnej."
      },
      {
        "question": "Jakiego DPI powinienem użyć do konwersji rozmiaru papieru?",
        "answer": "Użyj 300 DPI do druku profesjonalnego, 150 DPI do wydruków roboczych i do użytku domowego, 96 DPI do makiet ekranowych i 72 DPI do dokumentów dostępnych wyłącznie w Internecie."
      },
      {
        "question": "Co to jest rozmiar A3 pikseli?",
        "answer": "A3 (297 x 420 mm) przy 300 DPI to 3508 x 4961 pikseli. Przy 150 DPI jest to 1754 x 2480 pikseli. Przy rozdzielczości 72 DPI wynosi 842 x 1191 pikseli."
      }
    ],
    "sections": [
      {
        "id": "iso-a-series",
        "title": "Rozmiary papieru serii ISO A",
        "paragraphs": [
          "Norma ISO 216 definiuje serię formatów papieru A używanych na całym świecie. Każdy rozmiar uzyskuje się poprzez przecięcie o połowę następnego większego rozmiaru wzdłuż jego dłuższego wymiaru. Wszystkie poniższe wartości podano w pikselach (szerokość × wysokość)."
        ],
        "table": {
          "headers": [
            "Rozmiar",
            "mm",
            "cale",
            "72 DPI",
            "96 DPI",
            "150 DPI",
            "300 DPI"
          ],
          "rows": [
            [
              "A3",
              "297 × 420",
              "11,69 × 16,54",
              "842 × 1191",
              "1123 × 1588",
              "1754 × 2480",
              "3508 × 4961"
            ],
            [
              "A4",
              "210 × 297",
              "8,27 × 11,69",
              "595 × 842",
              "794 × 1123",
              "1240 × 1754",
              "2480 × 3508"
            ],
            [
              "A5",
              "148 × 210",
              "5,83 × 8,27",
              "420 × 595",
              "560 × 794",
              "874 × 1240",
              "1748 × 2480"
            ],
            [
              "A6",
              "105 × 148",
              "4,13 × 5,83",
              "298 × 420",
              "397 × 560",
              "620 × 874",
              "1240 × 1748"
            ],
            [
              "A2",
              "420 × 594",
              "16,54 × 23,39",
              "1191 × 1684",
              "1588 × 2245",
              "2480 × 3508",
              "4961 × 7016"
            ],
            [
              "A1",
              "594 × 841",
              "23,39 × 33,11",
              "1684 × 2384",
              "2245 × 3179",
              "3508 × 4967",
              "7016 × 9933"
            ],
            [
              "A0",
              "841 × 1189",
              "33,11 × 46,81",
              "2384 × 3370",
              "3179 × 4494",
              "4967 × 7022",
              "9933 × 14043"
            ]
          ]
        }
      },
      {
        "id": "us-paper-sizes",
        "title": "Papier amerykański Rozmiary",
        "table": {
          "headers": [
            "Rozmiar",
            "Cale",
            "72 DPI",
            "96 DPI",
            "150 DPI",
            "300 DPI"
          ],
          "rows": [
            [
              "Litera",
              "8,5 × 11",
              "612 × 792",
              "816 × 1056",
              "1275 × 1650",
              "2550 × 3300"
            ],
            [
              "Legalne",
              "8,5 × 14",
              "612 × 1008",
              "816 × 1344",
              "1275 × 2100",
              "2550 × 4200"
            ],
            [
              "Tabloid",
              "11 × 17",
              "792 × 1224",
              "1056 × 1632",
              "1650 × 2550",
              "3300 × 5100"
            ],
            [
              "Executive",
              "7,25 × 10,5",
              "522 × 756",
              "696 × 1008",
              "1088 × 1575",
              "2175 × 3150"
            ]
          ]
        }
      },
      {
        "id": "how-to-calculate",
        "title": "Jak obliczyć rozmiar papieru w pikselach",
        "paragraphs": [
          "Wzór jest prosty: piksele = cale × DPI. W przypadku pomiarów metrycznych najpierw zamień milimetry na cale, dzieląc przez 25,4, a następnie pomnóż przez DPI.",
          "Na przykład szerokość A4: 210 mm / 25,4 = 8,27 cala × 300 DPI = 2480 pikseli.",
          "Skorzystaj z naszego kalkulatora rozmiaru obrazu, aby szybko przeliczyć lub przejrzyj nasz konwerter cali na piksele, aby uzyskać niestandardowe wymiary."
        ]
      }
    ]
  },
  "id": {
    "faq": [
      {
        "question": "Berapa ukuran A4 dalam piksel pada 300 DPI?",
        "answer": "Kertas A4 (210 x 297 mm atau 8,27 x 11,69 inci) pada 300 DPI adalah 2480 x 3508 piksel. Ini adalah resolusi standar untuk dokumen A4 kualitas cetak profesional."
      },
      {
        "question": "Berapa ukuran US Letter dalam piksel pada 300 DPI?",
        "answer": "US Letter (8,5 x 11 inci) pada 300 DPI adalah 2550 x 3300 piksel. Ini adalah standar untuk dokumen siap cetak di Amerika Utara."
      },
      {
        "question": "Berapa DPI yang harus saya gunakan untuk konversi ukuran kertas?",
        "answer": "Gunakan 300 DPI untuk pencetakan profesional, 150 DPI untuk cetakan draf dan penggunaan di rumah, 96 DPI untuk maket layar, dan 72 DPI untuk dokumen khusus web."
      },
      {
        "question": "Berapa ukuran A3 dalam piksel?",
        "answer": "A3 (297 x 420 mm) pada 300 DPI adalah 3508 x 4961 piksel. Pada 150 DPI, resolusinya adalah 1754 x 2480 piksel. Pada 72 DPI, ukurannya adalah 842 x 1191 piksel."
      }
    ],
    "sections": [
      {
        "id": "iso-a-series",
        "title": "Ukuran Kertas Seri ISO A",
        "paragraphs": [
          "Standar ISO 216 mendefinisikan serangkaian ukuran kertas yang digunakan di seluruh dunia. Setiap ukuran diperoleh dengan membagi dua ukuran yang lebih besar berikutnya sepanjang dimensi yang lebih panjang. Semua nilai di bawah dalam satuan piksel (lebar × tinggi)."
        ],
        "table": {
          "headers": [
            "Ukuran",
            "mm",
            "Inci",
            "72 DPI",
            "96 DPI",
            "150 DPI",
            "300 DPI"
          ],
          "rows": [
            [
              "A3",
              "297 × 420",
              "11,69 × 16,54",
              "842 × 1191",
              "1123 × 1588",
              "1754 × 2480",
              "3508 × 4961"
            ],
            [
              "A4",
              "210 × 297",
              "8,27 × 11,69",
              "595 × 842",
              "794 × 1123",
              "1240 × 1754",
              "2480 × 3508"
            ],
            [
              "A5",
              "148 × 210",
              "5,83 × 8,27",
              "420 × 595",
              "560 × 794",
              "874 × 1240",
              "1748 × 2480"
            ],
            [
              "A6",
              "105 × 148",
              "4,13 × 5,83",
              "298 × 420",
              "397 × 560",
              "620 × 874",
              "1240 × 1748"
            ],
            [
              "A2",
              "420 × 594",
              "16,54 × 23,39",
              "1191 × 1684",
              "1588 × 2245",
              "2480 × 3508",
              "4961 × 7016"
            ],
            [
              "A1",
              "594 × 841",
              "23,39 × 33,11",
              "1684 × 2384",
              "2245 × 3179",
              "3508 × 4967",
              "7016 × 9933"
            ],
            [
              "A0",
              "841 × 1189",
              "33,11 × 46,81",
              "2384 × 3370",
              "3179 × 4494",
              "4967 × 7022",
              "9933 × 14043"
            ]
          ]
        }
      },
      {
        "id": "us-paper-sizes",
        "title": "Kertas AS Ukuran",
        "table": {
          "headers": [
            "Ukuran",
            "Inci",
            "72 DPI",
            "96 DPI",
            "150 DPI",
            "300 DPI"
          ],
          "rows": [
            [
              "Huruf",
              "8,5 × 11",
              "612 × 792",
              "816 × 1056",
              "1275 × 1650",
              "2550 × 3300"
            ],
            [
              "Hukum",
              "8,5 × 14",
              "612 × 1008",
              "816 × 1344",
              "1275 × 2100",
              "2550 × 4200"
            ],
            [
              "Tabloid",
              "11 × 17",
              "792 × 1224",
              "1056 × 1632",
              "1650 × 2550",
              "3300 × 5100"
            ],
            [
              "Eksekutif",
              "7,25 × 10,5",
              "522 × 756",
              "696 × 1008",
              "1088 × 1575",
              "2175 × 3150"
            ]
          ]
        }
      },
      {
        "id": "how-to-calculate",
        "title": "Cara Menghitung Ukuran Kertas dalam Piksel",
        "paragraphs": [
          "Rumusnya sederhana: piksel = inci × DPI. Untuk pengukuran metrik, konversikan milimeter ke inci terlebih dahulu dengan membaginya dengan 25,4, lalu kalikan dengan DPI.",
          "Misalnya, lebar A4: 210 mm / 25,4 = 8,27 inci × 300 DPI = 2480 piksel.",
          "Gunakan Kalkulator Ukuran Gambar kami untuk konversi cepat, atau telusuri konverter Inci ke Piksel kami untuk dimensi khusus."
        ]
      }
    ]
  },
  "ru": {
    "faq": [
      {
        "question": "Каков размер формата A4 в пикселях при разрешении 300 точек на дюйм?",
        "answer": "Бумага формата A4 (210 x 297 мм или 8,27 x 11,69 дюйма) при разрешении 300 точек на дюйм составляет 2480 x 3508 пикселей. Это стандартное разрешение для документов формата A4 профессионального качества печати."
      },
      {
        "question": "Какой размер US Letter в пикселях при разрешении 300 точек на дюйм?",
        "answer": "Размер US Letter (8,5 x 11 дюймов) при разрешении 300 точек на дюйм составляет 2550 x 3300 пикселей. Это стандарт для документов, готовых к печати в Северной Америке."
      },
      {
        "question": "Какое разрешение следует использовать для преобразования формата бумаги?",
        "answer": "Используйте 300 точек на дюйм для профессиональной печати, 150 точек на дюйм для черновых отпечатков и домашнего использования, 96 точек на дюйм для макетов экрана и 72 точек на дюйм для веб-документов."
      },
      {
        "question": "Что такое размер A3 в пикселей?",
        "answer": "A3 (297 x 420 мм) при разрешении 300 точек на дюйм составляет 3508 x 4961 пикселей. При разрешении 150 DPI это 1754 x 2480 пикселей. При разрешении 72 DPI это разрешение составляет 842 x 1191 пикселей."
      }
    ],
    "sections": [
      {
        "id": "iso-a-series",
        "title": "Размеры бумаги серии ISO A",
        "paragraphs": [
          "Стандарт ISO 216 определяет серию размеров бумаги A, используемых во всем мире. Каждый размер получается путем деления пополам следующего большего размера по его длинному измерению. Все значения ниже указаны в пикселях (ширина × высота)."
        ],
        "table": {
          "headers": [
            "Размер",
            "мм",
            "Дюймы",
            "72 DPI",
            "96 DPI",
            "150 DPI",
            "300 DPI"
          ],
          "rows": [
            [
              "A3",
              "297 × 420",
              "11,69 × 16,54",
              "842 × 1191",
              "1123 × 1588",
              "1754 × 2480",
              "3508 × 4961"
            ],
            [
              "A4",
              "210 × 297",
              "8,27 × 11,69",
              "595 × 842",
              "794 × 1123",
              "1240 × 1754",
              "2480 × 3508"
            ],
            [
              "A5",
              "148 × 210",
              "5,83 × 8,27",
              "420 × 595",
              "560 × 794",
              "874 × 1240",
              "1748 × 2480"
            ],
            [
              "A6",
              "105 × 148",
              "4,13 × 5,83",
              "298 × 420",
              "397 × 560",
              "620 × 874",
              "1240 × 1748"
            ],
            [
              "A2",
              "420 × 594",
              "16,54 × 23,39",
              "1191 × 1684",
              "1588 × 2245",
              "2480 × 3508",
              "4961 × 7016"
            ],
            [
              "A1",
              "594 × 841",
              "23,39 × 33,11",
              "1684 × 2384",
              "2245 × 3179",
              "3508 × 4967",
              "7016 × 9933"
            ],
            [
              "A0",
              "841 × 1189",
              "33,11 × 46,81",
              "2384 × 3370",
              "3179 × 4494",
              "4967 × 7022",
              "9933 × 14043"
            ]
          ]
        }
      },
      {
        "id": "us-paper-sizes",
        "title": "бумага США Размеры",
        "table": {
          "headers": [
            "Размер",
            "Дюймы",
            "72 DPI",
            "96 DPI",
            "150 DPI",
            "300 DPI"
          ],
          "rows": [
            [
              "Letter",
              "8,5 × 11",
              "612 × 792",
              "816 × 1056",
              "1275 × 1650",
              "2550 × 3300"
            ],
            [
              "Юридически",
              "8,5 × 14",
              "612 × 1008",
              "816 × 1344",
              "1275 × 2100",
              "2550 × 4200"
            ],
            [
              "Tabloid",
              "11 × 17",
              "792 × 1224",
              "1056 × 1632",
              "1650 × 2550",
              "3300 × 5100"
            ],
            [
              "Executive",
              "7,25 × 10,5",
              "522 × 756",
              "696 × 1008",
              "1088 × 1575",
              "2175 × 3150"
            ]
          ]
        }
      },
      {
        "id": "how-to-calculate",
        "title": "Как рассчитать размер бумаги в пикселях",
        "paragraphs": [
          "Формула проста: пиксели = дюймы × DPI. Для метрических измерений сначала преобразуйте миллиметры в дюймы, разделив их на 25,4, а затем умножьте на DPI.",
          "Например, ширина A4: 210 мм / 25,4 = 8,27 дюйма × 300 DPI = 2480 пикселей.",
          "Воспользуйтесь нашим калькулятором размера изображения для быстрого преобразования или просмотрите наш конвертер дюймов в пиксели для получения нестандартных размеров."
        ]
      }
    ]
  }
};
