import type { LocalizedDocMap } from "./doc-types";

export const content: LocalizedDocMap = {
  "en": {
    "faq": [
      {
        "question": "What size is a 4x6 photo in pixels?",
        "answer": "A 4x6 inch photo at 300 DPI is 1200 x 1800 pixels. At 150 DPI (acceptable quality), it is 600 x 900 pixels. Most smartphone cameras produce more than enough pixels for 4x6 prints."
      },
      {
        "question": "What resolution do I need for an 8x10 print?",
        "answer": "For a high-quality 8x10 inch print at 300 DPI, you need an image of at least 2400 x 3000 pixels (7.2 megapixels). At 150 DPI (acceptable), you need 1200 x 1500 pixels."
      },
      {
        "question": "How many megapixels do I need for a 16x20 print?",
        "answer": "For a 16x20 inch print at 300 DPI, you need 4800 x 6000 pixels, or 28.8 megapixels. At 200 DPI (still good quality at typical viewing distance), you need 3200 x 4000 pixels (12.8 MP)."
      }
    ],
    "sections": [
      {
        "id": "photo-print-sizes",
        "title": "Standard Photo Print Sizes",
        "paragraphs": [
          "The table below lists common photo print sizes with pixel dimensions at both 150 DPI (acceptable quality) and 300 DPI (professional quality)."
        ],
        "table": {
          "headers": [
            "Print Size (inches)",
            "150 DPI",
            "300 DPI",
            "Megapixels (300 DPI)"
          ],
          "rows": [
            [
              "4 × 6",
              "600 × 900",
              "1200 × 1800",
              "2.2 MP"
            ],
            [
              "5 × 7",
              "750 × 1050",
              "1500 × 2100",
              "3.2 MP"
            ],
            [
              "8 × 10",
              "1200 × 1500",
              "2400 × 3000",
              "7.2 MP"
            ],
            [
              "8.5 × 11",
              "1275 × 1650",
              "2550 × 3300",
              "8.4 MP"
            ],
            [
              "11 × 14",
              "1650 × 2100",
              "3300 × 4200",
              "13.9 MP"
            ],
            [
              "11 × 17",
              "1650 × 2550",
              "3300 × 5100",
              "16.8 MP"
            ],
            [
              "16 × 20",
              "2400 × 3000",
              "4800 × 6000",
              "28.8 MP"
            ],
            [
              "20 × 30",
              "3000 × 4500",
              "6000 × 9000",
              "54 MP"
            ],
            [
              "24 × 36",
              "3600 × 5400",
              "7200 × 10800",
              "77.8 MP"
            ]
          ]
        }
      },
      {
        "id": "poster-sizes",
        "title": "Poster and Large Format Sizes",
        "paragraphs": [
          "Large prints are viewed from a distance, so lower DPI is acceptable. Here are common poster sizes at 100 and 150 DPI:"
        ],
        "table": {
          "headers": [
            "Poster Size (inches)",
            "100 DPI",
            "150 DPI"
          ],
          "rows": [
            [
              "18 × 24",
              "1800 × 2400",
              "2700 × 3600"
            ],
            [
              "24 × 36",
              "2400 × 3600",
              "3600 × 5400"
            ],
            [
              "27 × 40",
              "2700 × 4000",
              "4050 × 6000"
            ],
            [
              "36 × 48",
              "3600 × 4800",
              "5400 × 7200"
            ]
          ]
        }
      },
      {
        "id": "minimum-megapixels",
        "title": "Minimum Megapixels by Print Size",
        "paragraphs": [
          "To print at 300 DPI, you need at minimum the following megapixel counts. Most modern cameras (12+ MP) can handle prints up to 11 × 14 with ease. For larger prints, use 200 DPI and a typical viewing distance of 3+ feet.",
          "Use our Image Size Calculator to check if your image has enough pixels for a specific print size."
        ],
        "list": [
          "4 × 6: 2.2 MP (any modern camera)",
          "8 × 10: 7.2 MP (any smartphone from the last decade)",
          "16 × 20: 28.8 MP (high-end smartphones, most mirrorless cameras)",
          "24 × 36: 77.8 MP at 300 DPI, or 17.3 MP at 200 DPI (practical for most cameras)"
        ]
      }
    ]
  },
  "es": {
    "faq": [
      {
        "question": "¿Qué tamaño tiene una foto de 4x6 en píxeles?",
        "answer": "Una foto de 4x6 pulgadas a 300 DPI tiene 1200 x 1800 píxeles. A 150 DPI (calidad aceptable), son 600 x 900 píxeles. La mayoría de las cámaras de los teléfonos inteligentes producen píxeles más que suficientes para impresiones de 4x6."
      },
      {
        "question": "¿Qué resolución necesito para una impresión de 8x10?",
        "answer": "Para una impresión de alta calidad de 8x10 pulgadas a 300 ppp, necesita una imagen de al menos 2400 x 3000 píxeles (7,2 megapíxeles). A 150 DPI (aceptable), necesita 1200 x 1500 píxeles."
      },
      {
        "question": "¿Cuántos megapíxeles necesito para una impresión de 16x20?",
        "answer": "Para una impresión de 16x20 pulgadas a 300 DPI, necesita 4800 x 6000 píxeles, o 28,8 megapíxeles. A 200 DPI (aún buena calidad a una distancia de visualización típica), necesita 3200 x 4000 píxeles (12,8 MP)."
      }
    ],
    "sections": [
      {
        "id": "photo-print-sizes",
        "title": "Tamaños de impresión fotográfica estándar",
        "paragraphs": [
          "La siguiente tabla enumera los tamaños de impresión de fotografías comunes con dimensiones en píxeles tanto a 150 DPI (calidad aceptable) como a 300 DPI (calidad profesional)."
        ],
        "table": {
          "headers": [
            "Tamaño de impresión (pulgadas)",
            "150 DPI",
            "300 DPI",
            "Megapíxeles (300 DPI)"
          ],
          "rows": [
            [
              "4 × 6",
              "600 × 900",
              "1200 × 1800",
              "2.2 MP"
            ],
            [
              "5 × 7",
              "750 × 1050",
              "1500 × 2100",
              "3,2 MP"
            ],
            [
              "8 × 10",
              "1200 × 1500",
              "2400 × 3000",
              "7,2 MP"
            ],
            [
              "8,5 × 11",
              "1275 × 1650",
              "2550 × 3300",
              "8,4 MP"
            ],
            [
              "11 × 14",
              "1650 × 2100",
              "3300 × 4200",
              "13,9 MP"
            ],
            [
              "11 × 17",
              "1650 × 2550",
              "3300 × 5100",
              "16,8 MP"
            ],
            [
              "16 × 20",
              "2400 × 3000",
              "4800 × 6000",
              "28,8 MP"
            ],
            [
              "20 × 30",
              "3000 × 4500",
              "6000 × 9000",
              "54 MP"
            ],
            [
              "24 × 36",
              "3600 × 5400",
              "7200 × 10800",
              "77,8 MP"
            ]
          ]
        }
      },
      {
        "id": "poster-sizes",
        "title": "Tamaños de póster y gran formato",
        "paragraphs": [
          "Las impresiones grandes se ven desde la distancia, por lo que se aceptan DPI más bajos. Estos son los tamaños de póster más comunes a 100 y 150 DPI:"
        ],
        "table": {
          "headers": [
            "Tamaño de póster (pulgadas)",
            "100 DPI",
            "150 DPI"
          ],
          "rows": [
            [
              "18 × 24",
              "1800 × 2400",
              "2700 × 3600"
            ],
            [
              "24 × 36",
              "2400 × 3600",
              "3600 × 5400"
            ],
            [
              "27 × 40",
              "2700 × 4000",
              "4050 × 6000"
            ],
            [
              "36 × 48",
              "3600 × 4800",
              "5400 × 7200"
            ]
          ]
        }
      },
      {
        "id": "minimum-megapixels",
        "title": "Megapíxeles mínimos por tamaño de impresión",
        "paragraphs": [
          "Para imprimir a 300 ppp, necesita como mínimo los siguientes megapíxeles. La mayoría de las cámaras modernas (más de 12 MP) pueden manejar impresiones de hasta 11 × 14 con facilidad. Para impresiones más grandes, use 200 DPI y una distancia de visualización típica de más de 3 pies.",
          "Utilice nuestra Calculadora de tamaño de imagen para comprobar si su imagen tiene suficientes píxeles para un tamaño de impresión específico."
        ],
        "list": [
          "4 × 6: 2,2 MP (cualquier cámara moderna)",
          "8 × 10: 7,2 MP (cualquier teléfono inteligente de la última década)",
          "16 × 20: 28,8 MP (smartphones de gama alta, la mayoría de cámaras sin espejo)",
          "24 × 36: 77,8 MP a 300 DPI, o 17,3 MP a 200 DPI (práctico para la mayoría de cámaras)"
        ]
      }
    ]
  },
  "fr": {
    "faq": [
      {
        "question": "Quelle est la taille d'une photo 4x6 en pixels ?",
        "answer": "Une photo 4x6 pouces à 300 DPI fait 1 200 x 1 800 pixels. À 150 DPI (qualité acceptable), il fait 600 x 900 pixels. La plupart des appareils photo de smartphones produisent plus qu'assez de pixels pour des impressions 4 x 6."
      },
      {
        "question": "De quelle résolution ai-je besoin pour une impression 8 x 10 ?",
        "answer": "Pour une impression 8 x 10 pouces de haute qualité à 300 DPI, vous avez besoin d'une image d'au moins 2 400 x 3 000 pixels (7,2 mégapixels). À 150 DPI (acceptable), vous avez besoin de 1 200 x 1 500 pixels."
      },
      {
        "question": "De combien de mégapixels ai-je besoin pour une impression 16 x 20 ?",
        "answer": "Pour une impression 16 x 20 pouces à 300 DPI, vous avez besoin de 4 800 x 6 000 pixels, soit 28,8 mégapixels. À 200 DPI (toujours une bonne qualité à une distance de visualisation typique), vous avez besoin de 3 200 x 4 000 pixels (12,8 MP)."
      }
    ],
    "sections": [
      {
        "id": "photo-print-sizes",
        "title": "Tailles d'impression photo standard",
        "paragraphs": [
          "Le tableau ci-dessous répertorie les tailles d'impression photo courantes avec des dimensions en pixels à 150 DPI (qualité acceptable) et 300 DPI (qualité professionnelle)."
        ],
        "table": {
          "headers": [
            "Taille d'impression (pouces)",
            "150 DPI",
            "300 DPI",
            "Mégapixels (300 DPI)"
          ],
          "rows": [
            [
              "4 × 6",
              "600 × 900",
              "1200 × 1800",
              "2,2 MP"
            ],
            [
              "5 × 7",
              "750 × 1050",
              "1500 × 2100",
              "3,2 MP"
            ],
            [
              "8 × 10",
              "1200 × 1500",
              "2400 × 3000",
              "7,2 MP"
            ],
            [
              "8,5 × 11",
              "1275 × 1650",
              "2550 × 3300",
              "8,4 MP"
            ],
            [
              "11 × 14",
              "1650 × 2100",
              "3300 × 4200",
              "13,9 MP"
            ],
            [
              "11 × 17",
              "1650 × 2550",
              "3300 × 5100",
              "16,8 MP"
            ],
            [
              "16 × 20",
              "2400 × 3000",
              "4800 × 6000",
              "28,8 MP"
            ],
            [
              "20 × 30",
              "3000 × 4500",
              "6000 × 9000",
              "54 MP"
            ],
            [
              "24 × 36",
              "3600 × 5400",
              "7200 × 10800",
              "77,8 MP"
            ]
          ]
        }
      },
      {
        "id": "poster-sizes",
        "title": "Tailles d'affiches et grand format",
        "paragraphs": [
          "Les grands tirages sont visualisés à distance, un DPI inférieur est donc acceptable. Voici les tailles d'affiche courantes à 100 et 150 DPI :"
        ],
        "table": {
          "headers": [
            "Taille de l'affiche (pouces)",
            "100 DPI",
            "150 DPI"
          ],
          "rows": [
            [
              "18 × 24",
              "1800 × 2400",
              "2700 × 3600"
            ],
            [
              "24 × 36",
              "2400 × 3600",
              "3600 × 5400"
            ],
            [
              "27 × 40",
              "2700 × 4000",
              "4050 × 6000"
            ],
            [
              "36 × 48",
              "3 600 × 4 800",
              "5 400 × 7 200"
            ]
          ]
        }
      },
      {
        "id": "minimum-megapixels",
        "title": "Mégapixels minimum par taille d'impression",
        "paragraphs": [
          "Pour imprimer à 300 DPI, vous avez besoin au minimum du nombre de mégapixels suivant. La plupart des appareils photo modernes (12+ MP) peuvent facilement gérer des impressions jusqu'à 11 × 14. Pour des impressions plus grandes, utilisez 200 DPI et une distance de visualisation typique de 3 pieds ou plus.",
          "Utilisez notre calculateur de taille d'image pour vérifier si votre image contient suffisamment de pixels pour une taille d'impression spécifique."
        ],
        "list": [
          "4 × 6 : 2,2 MP (n'importe quel appareil photo moderne)",
          "8 × 10 : 7,2 MP (n'importe quel smartphone de la dernière décennie)",
          "16 × 20 : 28,8 MP (smartphones haut de gamme, la plupart des appareils photo sans miroir)",
          "24 × 36 : 77,8 MP à 300 DPI, ou 17,3 MP à 200 DPI (pratique pour la plupart des appareils photo)"
        ]
      }
    ]
  },
  "de": {
    "faq": [
      {
        "question": "Wie groß ist ein 4x6-Zoll-Foto in Pixeln?",
        "answer": "Ein 4x6-Zoll-Foto bei 300 DPI hat 1200 x 1800 Pixel. Bei 150 DPI (akzeptable Qualität) sind es 600 x 900 Pixel. Die meisten Smartphone-Kameras erzeugen mehr als genug Pixel für 4x6-Drucke."
      },
      {
        "question": "Welche Auflösung benötige ich für einen 8x10-Druck?",
        "answer": "Für einen hochwertigen 8x10-Zoll-Druck mit 300 DPI benötigen Sie ein Bild mit mindestens 2400 x 3000 Pixeln (7,2 Megapixel). Bei 150 DPI (akzeptabel) benötigen Sie 1200 x 1500 Pixel."
      },
      {
        "question": "Wie viele Megapixel benötige ich für einen 16x20-Druck?",
        "answer": "Für einen 16x20-Zoll-Druck mit 300 DPI benötigen Sie 4800 x 6000 Pixel oder 28,8 Megapixel. Bei 200 DPI (immer noch gute Qualität bei typischem Betrachtungsabstand) benötigen Sie 3200 x 4000 Pixel (12,8 MP)."
      }
    ],
    "sections": [
      {
        "id": "photo-print-sizes",
        "title": "Standard-Fotodruckgrößen",
        "paragraphs": [
          "In der folgenden Tabelle sind gängige Fotodruckgrößen mit Pixelabmessungen von 150 DPI (akzeptable Qualität) und 300 DPI (professionelle Qualität) aufgeführt."
        ],
        "table": {
          "headers": [
            "Druckgröße (Zoll)",
            "150 DPI",
            "300 DPI",
            "Megapixel (300 DPI)"
          ],
          "rows": [
            [
              "4 × 6",
              "600 × 900",
              "1200 × 1800",
              "2,2 MP"
            ],
            [
              "5 × 7",
              "750 × 1050",
              "1500 × 2100",
              "3,2 MP"
            ],
            [
              "8 × 10",
              "1200 × 1500",
              "2400 × 3000",
              "7.2 MP"
            ],
            [
              "8,5 × 11",
              "1275 × 1650",
              "2550 × 3300",
              "8,4 MP"
            ],
            [
              "11 × 14",
              "1650 × 2100",
              "3300 × 4200",
              "13,9 MP"
            ],
            [
              "11 × 17",
              "1650 × 2550",
              "3300 × 5100",
              "16,8 MP"
            ],
            [
              "16 × 20",
              "2400 × 3000",
              "4800 × 6000",
              "28,8 MP"
            ],
            [
              "20 × 30",
              "3000 × 4500",
              "6000 × 9000",
              "54 MP"
            ],
            [
              "24 × 36",
              "3600 × 5400",
              "7200 × 10800",
              "77,8 MP"
            ]
          ]
        }
      },
      {
        "id": "poster-sizes",
        "title": "Poster- und Großformatgrößen",
        "paragraphs": [
          "Große Drucke werden aus der Entfernung betrachtet, daher ist eine niedrigere DPI akzeptabel. Hier sind gängige Postergrößen bei 100 und 150 DPI:"
        ],
        "table": {
          "headers": [
            "Postergröße (Zoll)",
            "100 DPI",
            "150 DPI"
          ],
          "rows": [
            [
              "18 × 24",
              "1800 × 2400",
              "2700 × 3600"
            ],
            [
              "24 × 36",
              "2400 × 3600",
              "3600 × 5400"
            ],
            [
              "27 × 40",
              "2700 × 4000",
              "4050 × 6000"
            ],
            [
              "36 × 48",
              "3600 × 4800",
              "5400 × 7200"
            ]
          ]
        }
      },
      {
        "id": "minimum-megapixels",
        "title": "Mindest-Megapixel nach Druckgröße",
        "paragraphs": [
          "Um mit 300 DPI zu drucken, benötigen Sie mindestens die folgenden Megapixelzahlen. Die meisten modernen Kameras (12+ MP) können problemlos Ausdrucke bis zu 11 × 14 verarbeiten. Verwenden Sie für größere Ausdrucke 200 DPI und einen typischen Betrachtungsabstand von mehr als 90 cm.",
          "Verwenden Sie unseren Bildgrößenrechner, um zu überprüfen, ob Ihr Bild über genügend Pixel für eine bestimmte Druckgröße verfügt."
        ],
        "list": [
          "4 × 6: 2,2 MP (jede moderne Kamera)",
          "8 × 10: 7,2 MP (jedes Smartphone aus dem letzten Jahrzehnt)",
          "16 × 20: 28,8 MP (High-End-Smartphones, die meisten spiegellosen Kameras)",
          "24 × 36: 77,8 MP bei 300 DPI oder 17,3 MP bei 200 DPI (praktisch für die meisten Kameras)"
        ]
      }
    ]
  },
  "pt": {
    "faq": [
      {
        "question": "Qual é o tamanho de uma foto 4x6 em pixels?",
        "answer": "Uma foto de 4 x 6 polegadas a 300 DPI tem 1200 x 1800 pixels. A 150 DPI (qualidade aceitável), são 600 x 900 pixels. A maioria das câmeras de smartphones produz pixels mais que suficientes para impressões 4x6."
      },
      {
        "question": "Qual resolução eu preciso para uma impressão 8x10?",
        "answer": "Para uma impressão de alta qualidade de 8 x 10 polegadas a 300 DPI, você precisa de uma imagem de pelo menos 2.400 x 3.000 pixels (7,2 megapixels). A 150 DPI (aceitável), você precisa de 1200 x 1500 pixels."
      },
      {
        "question": "Quantos megapixels eu preciso para uma impressão 16x20?",
        "answer": "Para uma impressão de 16 x 20 polegadas a 300 DPI, você precisa de 4.800 x 6.000 pixels ou 28,8 megapixels. A 200 DPI (ainda de boa qualidade à distância de visualização típica), você precisa de 3200 x 4000 pixels (12,8 MP)."
      }
    ],
    "sections": [
      {
        "id": "photo-print-sizes",
        "title": "Tamanhos padrão de impressão de fotos",
        "paragraphs": [
          "A tabela abaixo lista tamanhos comuns de impressão de fotos com dimensões em pixels de 150 DPI (qualidade aceitável) e 300 DPI (qualidade profissional)."
        ],
        "table": {
          "headers": [
            "Tamanho de impressão (polegadas)",
            "150 DPI",
            "300 DPI",
            "Megapixels (300 DPI)"
          ],
          "rows": [
            [
              "4×6",
              "600 × 900",
              "1200 × 1800",
              "2,2 MP"
            ],
            [
              "5×7",
              "750 × 1050",
              "1500 × 2100",
              "3,2 MP"
            ],
            [
              "8×10",
              "1200 × 1500",
              "2.400 × 3.000",
              "7,2 MP"
            ],
            [
              "8,5 × 11",
              "1275 × 1650",
              "2550 × 3300",
              "8,4 MP"
            ],
            [
              "11×14",
              "1650 × 2100",
              "3300 × 4200",
              "13,9 deputados"
            ],
            [
              "11×17",
              "1650 × 2550",
              "3300 × 5100",
              "16,8 MP"
            ],
            [
              "16×20",
              "2.400 × 3.000",
              "4800 × 6000",
              "28,8 MP"
            ],
            [
              "20×30",
              "3.000 × 4.500",
              "6.000 × 9.000",
              "54 deputados"
            ],
            [
              "24×36",
              "3600 × 5400",
              "7200 × 10800",
              "77,8 deputados"
            ]
          ]
        }
      },
      {
        "id": "poster-sizes",
        "title": "Tamanhos de pôster e grande formato",
        "paragraphs": [
          "Impressões grandes são visualizadas à distância, portanto, DPI mais baixo é aceitável. Aqui estão os tamanhos comuns de pôster em 100 e 150 DPI:"
        ],
        "table": {
          "headers": [
            "Tamanho do pôster (polegadas)",
            "100 DPI",
            "150 DPI"
          ],
          "rows": [
            [
              "18×24",
              "1800 × 2400",
              "2700 × 3600"
            ],
            [
              "24×36",
              "2400 × 3600",
              "3600 × 5400"
            ],
            [
              "27×40",
              "2700 × 4000",
              "4050 × 6000"
            ],
            [
              "36×48",
              "3600 × 4800",
              "5400 × 7200"
            ]
          ]
        }
      },
      {
        "id": "minimum-megapixels",
        "title": "Megapixels mínimos por tamanho de impressão",
        "paragraphs": [
          "Para imprimir a 300 DPI, você precisa no mínimo das seguintes contagens de megapixels. A maioria das câmeras modernas (mais de 12 MP) pode lidar com impressões de até 11 × 14 com facilidade. Para impressões maiores, use 200 DPI e uma distância de visualização típica de mais de 3 pés.",
          "Use nossa calculadora de tamanho de imagem para verificar se sua imagem possui pixels suficientes para um tamanho de impressão específico."
        ],
        "list": [
          "4 × 6: 2,2 MP (qualquer câmera moderna)",
          "8×10: 7,2 MP (qualquer smartphone da última década)",
          "16 × 20: 28,8 MP (smartphones de última geração, a maioria das câmeras sem espelho)",
          "24 × 36: 77,8 MP a 300 DPI ou 17,3 MP a 200 DPI (prático para a maioria das câmeras)"
        ]
      }
    ]
  },
  "hi": {
    "faq": [
      {
        "question": "4x6 फ़ोटो पिक्सेल में किस आकार की होती है?",
        "answer": "300 डीपीआई पर 4x6 इंच का फोटो 1200 x 1800 पिक्सल है। 150 डीपीआई (स्वीकार्य गुणवत्ता) पर, यह 600 x 900 पिक्सेल है। अधिकांश स्मार्टफ़ोन कैमरे 4x6 प्रिंट के लिए पर्याप्त से अधिक पिक्सेल उत्पन्न करते हैं।"
      },
      {
        "question": "8x10 प्रिंट के लिए मुझे किस रिज़ॉल्यूशन की आवश्यकता होगी?",
        "answer": "300 डीपीआई पर उच्च गुणवत्ता वाले 8x10 इंच प्रिंट के लिए, आपको कम से कम 2400 x 3000 पिक्सेल (7.2 मेगापिक्सेल) की छवि की आवश्यकता है। 150 डीपीआई (स्वीकार्य) पर, आपको 1200 x 1500 पिक्सेल की आवश्यकता है।"
      },
      {
        "question": "16x20 प्रिंट के लिए मुझे कितने मेगापिक्सेल की आवश्यकता होगी?",
        "answer": "300 डीपीआई पर 16x20 इंच प्रिंट के लिए, आपको 4800 x 6000 पिक्सेल या 28.8 मेगापिक्सेल की आवश्यकता है। 200 डीपीआई (सामान्य देखने की दूरी पर अभी भी अच्छी गुणवत्ता) पर, आपको 3200 x 4000 पिक्सल (12.8 एमपी) की आवश्यकता है।"
      }
    ],
    "sections": [
      {
        "id": "photo-print-sizes",
        "title": "मानक फोटो प्रिंट आकार",
        "paragraphs": [
          "नीचे दी गई तालिका 150 डीपीआई (स्वीकार्य गुणवत्ता) और 300 डीपीआई (पेशेवर गुणवत्ता) दोनों पर पिक्सेल आयामों के साथ सामान्य फोटो प्रिंट आकार सूचीबद्ध करती है।"
        ],
        "table": {
          "headers": [
            "प्रिंट आकार (इंच)",
            "150 डीपीआई",
            "300 डीपीआई",
            "मेगापिक्सेल (300 डीपीआई)"
          ],
          "rows": [
            [
              "4×6",
              "600×900",
              "1200×1800",
              "2.2 एमपी"
            ],
            [
              "5×7",
              "750×1050",
              "1500×2100",
              "3.2 एमपी"
            ],
            [
              "8×10",
              "1200×1500",
              "2400×3000",
              "7.2 एमपी"
            ],
            [
              "8.5×11",
              "1275 × 1650",
              "2550×3300",
              "8.4 एमपी"
            ],
            [
              "11×14",
              "1650×2100",
              "3300 × 4200",
              "13.9 एमपी"
            ],
            [
              "11×17",
              "1650×2550",
              "3300 × 5100",
              "16.8 एमपी"
            ],
            [
              "16×20",
              "2400×3000",
              "4800 × 6000",
              "28.8 एमपी"
            ],
            [
              "20×30",
              "3000×4500",
              "6000 × 9000",
              "54 एमपी"
            ],
            [
              "24×36",
              "3600 × 5400",
              "7200 × 10800",
              "77.8 एमपी"
            ]
          ]
        }
      },
      {
        "id": "poster-sizes",
        "title": "पोस्टर और बड़े प्रारूप आकार",
        "paragraphs": [
          "बड़े प्रिंट दूर से देखे जा सकते हैं, इसलिए कम डीपीआई स्वीकार्य है। यहां 100 और 150 डीपीआई पर सामान्य पोस्टर आकार दिए गए हैं:"
        ],
        "table": {
          "headers": [
            "पोस्टर का आकार (इंच)",
            "100 डीपीआई",
            "150 डीपीआई"
          ],
          "rows": [
            [
              "18×24",
              "1800×2400",
              "2700×3600"
            ],
            [
              "24×36",
              "2400×3600",
              "3600 × 5400"
            ],
            [
              "27×40",
              "2700×4000",
              "4050 × 6000"
            ],
            [
              "36×48",
              "3600×4800",
              "5400 × 7200"
            ]
          ]
        }
      },
      {
        "id": "minimum-megapixels",
        "title": "प्रिंट आकार के अनुसार न्यूनतम मेगापिक्सेल",
        "paragraphs": [
          "300 डीपीआई पर प्रिंट करने के लिए, आपको कम से कम निम्नलिखित मेगापिक्सेल गणना की आवश्यकता है। अधिकांश आधुनिक कैमरे (12+ एमपी) 11 × 14 तक प्रिंट आसानी से संभाल सकते हैं। बड़े प्रिंट के लिए, 200 डीपीआई और 3+ फीट की सामान्य देखने की दूरी का उपयोग करें।",
          "यह जांचने के लिए हमारे छवि आकार कैलकुलेटर का उपयोग करें कि क्या आपकी छवि में किसी विशिष्ट प्रिंट आकार के लिए पर्याप्त पिक्सेल हैं।"
        ],
        "list": [
          "4 × 6: 2.2 एमपी (कोई भी आधुनिक कैमरा)",
          "8 × 10: 7.2 एमपी (पिछले दशक का कोई भी स्मार्टफोन)",
          "16 × 20: 28.8 एमपी (हाई-एंड स्मार्टफोन, अधिकांश मिररलेस कैमरे)",
          "24 × 36: 300 डीपीआई पर 77.8 एमपी, या 200 डीपीआई पर 17.3 एमपी (अधिकांश कैमरों के लिए व्यावहारिक)"
        ]
      }
    ]
  },
  "ja": {
    "faq": [
      {
        "question": "4x6 写真のピクセルサイズはどれくらいですか?",
        "answer": "300 DPI の 4x6 インチ写真は 1200 x 1800 ピクセルです。 150 DPI (許容可能な品質) では、600 x 900 ピクセルになります。ほとんどのスマートフォンのカメラは、4x6 のプリントに十分なピクセルを生成します。"
      },
      {
        "question": "8x10 のプリントにはどれくらいの解像度が必要ですか?",
        "answer": "300 DPI での高品質の 8x10 インチのプリントには、少なくとも 2400 x 3000 ピクセル (7.2 メガピクセル) の画像が必要です。 150 DPI (許容) では、1200 x 1500 ピクセルが必要です。"
      },
      {
        "question": "16x20 の印刷には何メガピクセルが必要ですか?",
        "answer": "300 DPI で 16x20 インチの印刷には、4800 x 6000 ピクセル、つまり 28.8 メガピクセルが必要です。 200 DPI (通常の視聴距離でも良好な品質) では、3200 x 4000 ピクセル (12.8 MP) が必要です。"
      }
    ],
    "sections": [
      {
        "id": "photo-print-sizes",
        "title": "標準写真印刷サイズ",
        "paragraphs": [
          "下の表は、150 DPI (許容可能な品質) と 300 DPI (プロフェッショナル品質) の両方のピクセル寸法を含む一般的な写真印刷サイズを示しています。"
        ],
        "table": {
          "headers": [
            "印刷サイズ(インチ)",
            "150 DPI",
            "300 DPI",
            "メガピクセル (300 DPI)"
          ],
          "rows": [
            [
              "4 × 6",
              "600 × 900",
              "1200 × 1800",
              "2.2 MP"
            ],
            [
              "5 × 7",
              "750 × 1050",
              "1500 × 2100",
              "3.2 MP"
            ],
            [
              "8 × 10",
              "1200 × 1500",
              "2400 × 3000",
              "7.2 MP"
            ],
            [
              "8.5 × 11",
              "1275 × 1650",
              "2550 × 3300",
              "8.4 MP"
            ],
            [
              "11 × 14",
              "1650 × 2100",
              "3300 × 4200",
              "13.9 MP"
            ],
            [
              "11 × 17",
              "1650 × 2550",
              "3300 × 5100",
              "16.8 MP"
            ],
            [
              "16 × 20",
              "2400 × 3000",
              "4800×6000",
              "28.8MP"
            ],
            [
              "20×30",
              "3000×4500",
              "6000×9000",
              "54MP"
            ],
            [
              "24× 36",
              "3600 × 5400",
              "7200 × 10800",
              "77.8 MP"
            ]
          ]
        }
      },
      {
        "id": "poster-sizes",
        "title": "ポスターおよび大判サイズ",
        "paragraphs": [
          "大きなプリントは離れたところから見るため、低い DPI も許容されます。 100 および 150 DPI での一般的なポスター サイズは次のとおりです。"
        ],
        "table": {
          "headers": [
            "ポスター サイズ (インチ)",
            "100 DPI",
            "150 DPI"
          ],
          "rows": [
            [
              "18 × 24",
              "1800 × 2400",
              "2700 × 3600"
            ],
            [
              "24 × 36",
              "2400 × 3600",
              "3600 × 5400"
            ],
            [
              "27 × 40",
              "2700 × 4000",
              "4050 × 6000"
            ],
            [
              "36 × 48",
              "3600 × 4800",
              "5400 × 7200"
            ]
          ]
        }
      },
      {
        "id": "minimum-megapixels",
        "title": "印刷サイズ別の最小メガピクセル数",
        "paragraphs": [
          "300 DPI で印刷するには、少なくとも次のメガピクセル数が必要です。最新のカメラ (12 MP 以上) は、最大 11 × 14 までのプリントを簡単に処理できます。大きな印刷の場合は、200 DPI と通常の表示距離 3 フィート以上を使用してください。",
          "画像サイズ計算ツールを使用して、画像に特定の印刷サイズに十分なピクセルがあるかどうかを確認してください。"
        ],
        "list": [
          "4 × 6: 2.2 MP (最新のカメラ)",
          "8 × 10: 7.2 MP (過去 10 年間のスマートフォン)",
          "16 × 20: 28.8 MP (ハイエンド スマートフォン、ほとんどのミラーレス カメラ)",
          "24 × 36: 300 DPI で 77.8 MP、または 200 DPI で 17.3 MP (ほとんどのカメラで実用的)"
        ]
      }
    ]
  },
  "ko": {
    "faq": [
      {
        "question": "4x6 사진의 크기는 픽셀 단위로 얼마입니까?",
        "answer": "300DPI의 4x6인치 사진은 1200x1800픽셀입니다. 150 DPI(허용 가능한 품질)에서는 600 x 900 픽셀입니다. 대부분의 스마트폰 카메라는 4x6 인쇄에 충분한 픽셀을 생성합니다."
      },
      {
        "question": "8x10 인쇄에는 어떤 해상도가 필요합니까?",
        "answer": "300 DPI에서 고품질 8x10인치 인쇄를 위해서는 최소 2400 x 3000픽셀(7.2메가픽셀)의 이미지가 필요합니다. 150 DPI(허용)에서는 1200 x 1500 픽셀이 필요합니다."
      },
      {
        "question": "16x20 인쇄에는 몇 메가픽셀이 필요합니까?",
        "answer": "300 DPI에서 16x20인치 인쇄에는 4800 x 6000 픽셀, 즉 28.8 메가픽셀이 필요합니다. 200DPI(일반적인 보기 거리에서는 여전히 좋은 품질)에서는 3200 x 4000픽셀(12.8MP)이 필요합니다."
      }
    ],
    "sections": [
      {
        "id": "photo-print-sizes",
        "title": "표준 사진 인쇄 크기",
        "paragraphs": [
          "아래 표에는 150DPI(허용 품질) 및 300DPI(전문가 품질) 모두의 픽셀 크기와 함께 일반적인 사진 인쇄 크기가 나열되어 있습니다."
        ],
        "table": {
          "headers": [
            "인쇄 크기 (인치)",
            "150DPI",
            "300DPI",
            "메가픽셀(300DPI)"
          ],
          "rows": [
            [
              "4 × 6",
              "600 × 900",
              "1200 × 1800",
              "2.2MP"
            ],
            [
              "5 × 7",
              "750 × 1050",
              "1500 × 2100",
              "3.2 MP"
            ],
            [
              "8 × 10",
              "1200 × 1500",
              "2400 × 3000",
              "7.2 MP"
            ],
            [
              "8.5 × 11",
              "1275 × 1650",
              "2550 × 3300",
              "8.4 MP"
            ],
            [
              "11 × 14",
              "1650 × 2100",
              "3300 × 4200",
              "13.9 MP"
            ],
            [
              "11 × 17",
              "1650 × 2550",
              "3300 × 5100",
              "16.8 MP"
            ],
            [
              "16 × 20",
              "2400 × 3000",
              "4800 × 6000",
              "28.8 MP"
            ],
            [
              "20 × 30",
              "3000 × 4500",
              "6000 × 9000",
              "54 MP"
            ],
            [
              "24 × 36",
              "3600 × 5400",
              "7200 × 10800",
              "77.8 MP"
            ]
          ]
        }
      },
      {
        "id": "poster-sizes",
        "title": "포스터 및 대형 형식 크기",
        "paragraphs": [
          "큰 인쇄물은 멀리서 볼 수 있으므로 낮은 DPI가 허용됩니다. 다음은 100 및 150 DPI의 일반적인 포스터 크기입니다."
        ],
        "table": {
          "headers": [
            "포스터 크기(인치)",
            "100 DPI",
            "150 DPI"
          ],
          "rows": [
            [
              "18 × 24",
              "1800 × 2400",
              "2700 × 3600"
            ],
            [
              "24 × 36",
              "2400 × 3600",
              "3600 × 5400"
            ],
            [
              "27 × 40",
              "2700 × 4000",
              "4050 × 6000"
            ],
            [
              "36 × 48",
              "3600 × 4800",
              "5400 × 7200"
            ]
          ]
        }
      },
      {
        "id": "minimum-megapixels",
        "title": "인쇄 크기별 최소 메가픽셀",
        "paragraphs": [
          "300 DPI로 인쇄하려면 최소한 다음 메가픽셀 수가 필요합니다. 대부분의 최신 카메라(12 MP 이상)는 최대 11 × 14까지의 인쇄를 쉽게 처리할 수 있습니다. 더 큰 인쇄물의 경우 200 DPI와 3피트 이상의 일반적인 가시 거리를 사용하십시오.",
          "이미지 크기 계산기를 사용하여 이미지에 특정 인쇄 크기에 대해 충분한 픽셀이 있는지 확인하십시오."
        ],
        "list": [
          "4 × 6: 2.2 MP(모든 최신 카메라)",
          "8 × 10: 7.2 MP(지난 10년간의 모든 스마트폰)",
          "16 × 20: 28.8 MP(고급 스마트폰, 대부분의 미러리스 카메라)",
          "24 × 36: 300 DPI에서 77.8 MP 또는 200 DPI에서 17.3 MP(대부분의 카메라에 실용적)"
        ]
      }
    ]
  },
  "it": {
    "faq": [
      {
        "question": "Che dimensioni ha in pixel una foto 4x6?",
        "answer": "Una foto 4x6 pollici a 300 DPI è 1200 x 1800 pixel. A 150 DPI (qualità accettabile), è 600 x 900 pixel. La maggior parte delle fotocamere degli smartphone produce pixel più che sufficienti per stampe 4x6."
      },
      {
        "question": "Di quale risoluzione ho bisogno per una stampa 8x10?",
        "answer": "Per una stampa 8x10 pollici di alta qualità a 300 DPI, è necessaria un'immagine di almeno 2400 x 3000 pixel (7,2 megapixel). A 150 DPI (accettabile), sono necessari 1200 x 1500 pixel."
      },
      {
        "question": "Quanti megapixel mi servono per una stampa 16x20?",
        "answer": "Per una stampa 16x20 pollici a 300 DPI, sono necessari 4800 x 6000 pixel, ovvero 28,8 megapixel. A 200 DPI (ancora buona qualità alla distanza di visione tipica), sono necessari 3200 x 4000 pixel (12,8 MP)."
      }
    ],
    "sections": [
      {
        "id": "photo-print-sizes",
        "title": "Formati di stampa fotografica standard",
        "paragraphs": [
          "La tabella seguente elenca i formati di stampa fotografica più comuni con dimensioni in pixel sia a 150 DPI (qualità accettabile) che a 300 DPI (qualità professionale)."
        ],
        "table": {
          "headers": [
            "Formato di stampa (pollici)",
            "150 DPI",
            "300 DPI",
            "Megapixel (300 DPI)"
          ],
          "rows": [
            [
              "4 × 6",
              "600 × 900",
              "1200 × 1800",
              "2,2 MP"
            ],
            [
              "5 × 7",
              "750 × 1050",
              "1500 × 2100",
              "3,2 MP"
            ],
            [
              "8 × 10",
              "1200 × 1500",
              "2400 × 3000",
              "7,2 MP"
            ],
            [
              "8,5 × 11",
              "1275 × 1650",
              "2550 × 3300",
              "8,4 MP"
            ],
            [
              "11 × 14",
              "1650 × 2100",
              "3300 × 4200",
              "13,9 MP"
            ],
            [
              "11 × 17",
              "1650 × 2550",
              "3300 × 5100",
              "16,8 MP"
            ],
            [
              "16 × 20",
              "2400 × 3000",
              "4800 × 6000",
              "28,8 MP"
            ],
            [
              "20 × 30",
              "3000 × 4500",
              "6000 × 9000",
              "54 MP"
            ],
            [
              "24 × 36",
              "3600 × 5400",
              "7200 × 10800",
              "77,8 MP"
            ]
          ]
        }
      },
      {
        "id": "poster-sizes",
        "title": "Poster e formati di grande formato",
        "paragraphs": [
          "Le stampe di grandi dimensioni vengono visualizzate a distanza, quindi è accettabile un DPI inferiore. Di seguito sono riportate le dimensioni comuni dei poster a 100 e 150 DPI:"
        ],
        "table": {
          "headers": [
            "Dimensione poster (pollici)",
            "100 DPI",
            "150 DPI"
          ],
          "rows": [
            [
              "18 × 24",
              "1800 × 2400",
              "2700 × 3600"
            ],
            [
              "24 × 36",
              "2400 × 3600",
              "3600 × 5400"
            ],
            [
              "27 × 40",
              "2700 × 4000",
              "4050 × 6000"
            ],
            [
              "36 × 48",
              "3600 × 4800",
              "5400 × 7200"
            ]
          ]
        }
      },
      {
        "id": "minimum-megapixels",
        "title": "Megapixel minimi per dimensione di stampa",
        "paragraphs": [
          "Per stampare a 300 DPI, sono necessari almeno i seguenti conteggi di megapixel. La maggior parte delle fotocamere moderne (12+ MP) può gestire facilmente stampe fino a 11 × 14. Per stampe più grandi, utilizza 200 DPI e una distanza di visione tipica di 3 piedi o più.",
          "Utilizza il nostro calcolatore della dimensione dell'immagine per verificare se l'immagine ha abbastanza pixel per una dimensione di stampa specifica."
        ],
        "list": [
          "4 × 6: 2,2 MP (qualsiasi fotocamera moderna)",
          "8 × 10: 7,2 MP (qualsiasi smartphone dell'ultimo decennio)",
          "16 × 20: 28,8 MP (smartphone di fascia alta, la maggior parte delle fotocamere mirrorless)",
          "24 × 36: 77,8 MP a 300 DPI o 17,3 MP a 200 DPI (pratico per la maggior parte delle fotocamere)"
        ]
      }
    ]
  },
  "nl": {
    "faq": [
      {
        "question": "Welk formaat heeft een foto van 4x6 inch in pixels?",
        "answer": "Een foto van 4x6 inch bij 300 DPI is 1200 x 1800 pixels. Bij 150 DPI (acceptabele kwaliteit) is dit 600 x 900 pixels. De meeste smartphonecamera's produceren ruim voldoende pixels voor afdrukken van 4x6."
      },
      {
        "question": "Welke resolutie heb ik nodig voor een afdruk van 8x10?",
        "answer": "Voor een hoogwaardige afdruk van 8x10 inch bij 300 DPI heb je een afbeelding nodig van minimaal 2400 x 3000 pixels (7,2 megapixels). Bij 150 DPI (acceptabel) heb je 1200 x 1500 pixels nodig."
      },
      {
        "question": "Hoeveel megapixels heb ik nodig voor een afdruk van 16x20?",
        "answer": "Voor een afdruk van 16x20 inch bij 300 DPI heb je 4800 x 6000 pixels nodig, oftewel 28,8 megapixels. Bij 200 DPI (nog steeds goede kwaliteit op normale kijkafstand) heeft u 3200 x 4000 pixels (12,8 MP) nodig."
      }
    ],
    "sections": [
      {
        "id": "photo-print-sizes",
        "title": "Standaard fotoafdrukformaten",
        "paragraphs": [
          "De onderstaande tabel geeft een overzicht van gangbare fotoafdrukformaten met pixelafmetingen van zowel 150 DPI (acceptabele kwaliteit) als 300 DPI (professionele kwaliteit)."
        ],
        "table": {
          "headers": [
            "Afdrukformaat (inch)",
            "150 DPI",
            "300 DPI",
            "Megapixels (300 DPI)"
          ],
          "rows": [
            [
              "4 × 6",
              "600 × 900",
              "1200 × 1800",
              "2,2 MP"
            ],
            [
              "5 × 7",
              "750 × 1050",
              "1500 × 2100",
              "3,2 MP"
            ],
            [
              "8 × 10",
              "1200 × 1500",
              "2400 × 3000",
              "7,2 MP"
            ],
            [
              "8,5 × 11",
              "1275 × 1650",
              "2550 × 3300",
              "8,4 MP"
            ],
            [
              "11 × 14",
              "1650 × 2100",
              "3300 × 4200",
              "13,9 MP"
            ],
            [
              "11 × 17",
              "1650 × 2550",
              "3300 × 5100",
              "16,8 MP"
            ],
            [
              "16 × 20",
              "2400 × 3000",
              "4800 × 6000",
              "28,8 MP"
            ],
            [
              "20 × 30",
              "3000 × 4500",
              "6000 × 9000",
              "54 MP"
            ],
            [
              "24 × 36",
              "3600 × 5400",
              "7200 × 10800",
              "77,8 MP"
            ]
          ]
        }
      },
      {
        "id": "poster-sizes",
        "title": "Poster- en grootformaatformaten",
        "paragraphs": [
          "Grote afdrukken worden vanaf een afstand bekeken, dus een lagere DPI is acceptabel. Dit zijn de gebruikelijke posterformaten van 100 en 150 DPI:"
        ],
        "table": {
          "headers": [
            "Posterformaat (inch)",
            "100 DPI",
            "150 DPI"
          ],
          "rows": [
            [
              "18 × 24",
              "1800 × 2400",
              "2700 × 3600"
            ],
            [
              "24 × 36",
              "2400 × 3600",
              "3600 × 5400"
            ],
            [
              "27 × 40",
              "2700 × 4000",
              "4050 × 6000"
            ],
            [
              "36 × 48",
              "3600 × 4800",
              "5400 × 7200"
            ]
          ]
        }
      },
      {
        "id": "minimum-megapixels",
        "title": "Minimale megapixels per afdrukformaat",
        "paragraphs": [
          "Om af te drukken met 300 DPI heeft u minimaal de volgende megapixelaantallen nodig. De meeste moderne camera's (12+ MP) kunnen met gemak afdrukken tot 11×14 verwerken. Voor grotere afdrukken gebruikt u 200 DPI en een typische kijkafstand van meer dan 1 meter.",
          "Gebruik onze Image Size Calculator om te controleren of uw afbeelding voldoende pixels heeft voor een specifiek afdrukformaat."
        ],
        "list": [
          "4 × 6: 2,2 MP (elke moderne camera)",
          "8 × 10: 7,2 MP (elke smartphone van het afgelopen decennium)",
          "16 × 20: 28,8 MP (high-end smartphones, de meeste spiegelloze camera's)",
          "24 × 36: 77,8 MP bij 300 DPI, of 17,3 MP bij 200 DPI (praktisch voor de meeste camera's)"
        ]
      }
    ]
  },
  "ar": {
    "faq": [
      {
        "question": "ما هو حجم الصورة مقاس 4x6 بالبكسل؟",
        "answer": "الصورة مقاس 4x6 بوصة بدقة 300 نقطة لكل بوصة هي 1200 × 1800 بكسل. بدقة 150 نقطة في البوصة (جودة مقبولة)، تكون 600 × 900 بكسل. تنتج معظم كاميرات الهواتف الذكية أكثر من ما يكفي من البكسلات لطباعة 4×6."
      },
      {
        "question": "ما الدقة التي أحتاجها لطباعة 8×10؟",
        "answer": "للحصول على طباعة عالية الجودة مقاس 8×10 بوصة عند 300 نقطة في البوصة، تحتاج إلى صورة لا تقل عن 2400 × 3000 بكسل (7.2 ميجابكسل). عند 150 نقطة لكل بوصة (مقبول)، تحتاج إلى 1200 × 1500 بكسل."
      },
      {
        "question": "كم عدد وحدات البكسل التي أحتاجها لطباعة مقاس 16 × 20؟",
        "answer": "للحصول على طباعة مقاس 16 × 20 بوصة بدقة 300 نقطة لكل بوصة، تحتاج إلى 4800 × 6000 بكسل، أو 28.8 ميجابكسل. عند 200 نقطة في البوصة (لا تزال الجودة جيدة على مسافة العرض النموذجية)، تحتاج إلى 3200 × 4000 بكسل (12.8 ميجابكسل)."
      }
    ],
    "sections": [
      {
        "id": "photo-print-sizes",
        "title": "أحجام طباعة الصور القياسية",
        "paragraphs": [
          "يسرد الجدول أدناه أحجام طباعة الصور الشائعة بأبعاد البكسل عند 150 نقطة في البوصة (جودة مقبولة) و300 نقطة في البوصة (جودة احترافية)."
        ],
        "table": {
          "headers": [
            "حجم الطباعة (بوصة)",
            "150 نقطة لكل بوصة",
            "300 نقطة لكل بوصة",
            "ميجابكسل (300 نقطة لكل بوصة)"
          ],
          "rows": [
            [
              "4 × 6",
              "600 × 900",
              "1200 × 1800",
              "2.2 MP"
            ],
            [
              "5 × 7",
              "750 × 1050",
              "1500 × 2100",
              "3.2 ميجابكسل"
            ],
            [
              "8 × 10",
              "1200 × 1500",
              "2400 × 3000",
              "7.2 MP"
            ],
            [
              "8.5 × 11",
              "1275 × 1650",
              "2550 × 3300",
              "8.4 ميجابكسل"
            ],
            [
              "11 × 14",
              "1650 × 2100",
              "3300 × 4200",
              "13.9 ميجابكسل"
            ],
            [
              "11 × 17",
              "1650 × 2550",
              "3300 × 5100",
              "16.8 ميجابكسل"
            ],
            [
              "16 × 20",
              "2400 × 3000",
              "4800 × 6000",
              "28.8 ميجابكسل"
            ],
            [
              "20 × 30",
              "3000 × 4500",
              "6000 × 9000",
              "54 ميجابكسل"
            ],
            [
              "24 × 36",
              "3600 × 5400",
              "7200 × 10800",
              "77.8 ميجابكسل"
            ]
          ]
        }
      },
      {
        "id": "poster-sizes",
        "title": "أحجام الملصقات والتنسيقات الكبيرة",
        "paragraphs": [
          "يتم عرض المطبوعات الكبيرة من مسافة بعيدة، لذا فإن انخفاض DPI مقبول. فيما يلي أحجام الملصقات الشائعة عند 100 و150 نقطة لكل بوصة:"
        ],
        "table": {
          "headers": [
            "حجم الملصق (بوصة)",
            "100 نقطة لكل بوصة",
            "150 نقطة لكل بوصة"
          ],
          "rows": [
            [
              "18 × 24",
              "1800 × 2400",
              "2700 × 3600"
            ],
            [
              "24 × 36",
              "2400 × 3600",
              "3600 × 5400"
            ],
            [
              "27 × 40",
              "2700 × 4000",
              "4050 × 6000"
            ],
            [
              "36 × 48",
              "3600 × 4800",
              "5400 × 7200"
            ]
          ]
        }
      },
      {
        "id": "minimum-megapixels",
        "title": "الحد الأدنى لوحدات الميجابكسل حسب حجم الطباعة",
        "paragraphs": [
          "للطباعة بدقة 300 نقطة في البوصة، تحتاج إلى أعداد الميجابكسل التالية على الأقل. يمكن لمعظم الكاميرات الحديثة (12+ ميجابكسل) التعامل مع المطبوعات التي يصل حجمها إلى 11 × 14 بسهولة. بالنسبة للمطبوعات الأكبر حجمًا، استخدم 200 نقطة في البوصة ومسافة عرض نموذجية تزيد عن 3 أقدام.",
          "استخدم حاسبة حجم الصورة لدينا للتحقق مما إذا كانت صورتك تحتوي على ما يكفي من البكسل لحجم طباعة معين."
        ],
        "list": [
          "4 × 6: 2.2 ميجابكسل (أي كاميرا حديثة)",
          "8 × 10: 7.2 ميجابكسل (أي هاتف ذكي من العقد الماضي)",
          "16 × 20: 28.8 ميجابكسل (الهواتف الذكية المتطورة، معظم الكاميرات التي لا تحتوي على مرايا)",
          "24 × 36: 77.8 ميجابكسل عند 300 نقطة لكل بوصة، أو 17.3 ميجابكسل عند 200 نقطة لكل بوصة (عملي لمعظم الكاميرات)"
        ]
      }
    ]
  },
  "tr": {
    "faq": [
      {
        "question": "4x6 fotoğrafın piksel cinsinden boyutu nedir?",
        "answer": "300 DPI'da 4x6 inçlik bir fotoğraf 1200 x 1800 pikseldir. 150 DPI'da (kabul edilebilir kalite), 600 x 900 pikseldir. Çoğu akıllı telefon kamerası 4x6 baskı için fazlasıyla yeterli piksel üretir."
      },
      {
        "question": "8x10 baskı için hangi çözünürlüğe ihtiyacım var?",
        "answer": "300 DPI'da yüksek kaliteli 8x10 inç baskı için en az 2400 x 3000 piksel (7,2 megapiksel) bir görüntüye ihtiyacınız var. 150 DPI'da (kabul edilebilir), 1200 x 1500 piksele ihtiyacınız var."
      },
      {
        "question": "16x20 baskı için kaç megapiksele ihtiyacım var?",
        "answer": "300 DPI'da 16x20 inç baskı için 4800 x 6000 piksele veya 28,8 megapiksele ihtiyacınız var. 200 DPI'de (tipik izleme mesafesinde hala iyi kalite), 3200 x 4000 piksele (12,8 MP) ihtiyacınız vardır."
      }
    ],
    "sections": [
      {
        "id": "photo-print-sizes",
        "title": "Standart Fotoğraf Baskı Boyutları",
        "paragraphs": [
          "Aşağıdaki tablo, hem 150 DPI (kabul edilebilir kalite) hem de 300 DPI (profesyonel kalite) piksel boyutlarıyla ortak fotoğraf baskı boyutlarını listeler."
        ],
        "table": {
          "headers": [
            "Baskı Boyutu (inç)",
            "150 DPI",
            "300 DPI",
            "Megapiksel (300 DPI)"
          ],
          "rows": [
            [
              "4 × 6",
              "600 × 900",
              "1200 × 1800",
              "2,2 MP"
            ],
            [
              "5 × 7",
              "750 × 1050",
              "1500 × 2100",
              "3,2 MP"
            ],
            [
              "8 × 10",
              "1200 × 1500",
              "2400 × 3000",
              "7,2 MP"
            ],
            [
              "8,5 × 11",
              "1275 × 1650",
              "2550 × 3300",
              "8,4 MP"
            ],
            [
              "11 × 14",
              "1650 × 2100",
              "3300 × 4200",
              "13,9 MP"
            ],
            [
              "11 × 17",
              "1650 × 2550",
              "3300 × 5100",
              "16,8 MP"
            ],
            [
              "16 × 20",
              "2400 × 3000",
              "4800 × 6000",
              "28,8 MP"
            ],
            [
              "20 × 30",
              "3000 × 4500",
              "6000 × 9000",
              "54 MP"
            ],
            [
              "24 × 36",
              "3600 × 5400",
              "7200 × 10800",
              "77,8 MP"
            ]
          ]
        }
      },
      {
        "id": "poster-sizes",
        "title": "Poster ve Büyük Format Boyutları",
        "paragraphs": [
          "Büyük baskılar uzaktan görüntülendiğinden, daha düşük DPI kabul edilebilir. 100 ve 150 DPI'de yaygın poster boyutları şunlardır:"
        ],
        "table": {
          "headers": [
            "Poster Boyutu (inç)",
            "100 DPI",
            "150 DPI"
          ],
          "rows": [
            [
              "18 × 24",
              "1800 × 2400",
              "2700 × 3600"
            ],
            [
              "24 × 36",
              "2400 × 3600",
              "3600 × 5400"
            ],
            [
              "27 × 40",
              "2700 × 4000",
              "4050 × 6000"
            ],
            [
              "36 × 48",
              "3600 × 4800",
              "5400 × 7200"
            ]
          ]
        }
      },
      {
        "id": "minimum-megapixels",
        "title": "Baskı Boyutuna Göre Minimum Megapiksel",
        "paragraphs": [
          "300 DPI'da yazdırmak için, en az aşağıdaki megapiksel sayılarına ihtiyacınız vardır. Çoğu modern kamera (12+ MP), 11 × 14'e kadar baskıları kolaylıkla işleyebilir. Daha büyük baskılar için 200 DPI ve 3+ fitlik tipik görüntüleme mesafesi kullanın.",
          "Görüntünüzün belirli bir baskı boyutu için yeterli piksele sahip olup olmadığını kontrol etmek için Görüntü Boyutu Hesaplayıcımızı kullanın."
        ],
        "list": [
          "4 × 6: 2,2 MP (herhangi bir modern kamera)",
          "8 × 10: 7,2 MP (son on yıla ait herhangi bir akıllı telefon)",
          "16 × 20: 28,8 MP (ileri teknoloji akıllı telefonlar, çoğu aynasız kamera)",
          "24 × 36: 300 DPI'da 77,8 MP veya 200 DPI'da 17,3 MP (çoğu kamera için pratik)"
        ]
      }
    ]
  },
  "pl": {
    "faq": [
      {
        "question": "Jaki rozmiar ma zdjęcie 4x6 w pikselach?",
        "answer": "Zdjęcie o wymiarach 4 x 6 cali w rozdzielczości 300 DPI to 1200 x 1800 pikseli. Przy 150 DPI (akceptowalna jakość) jest to 600 x 900 pikseli. Większość aparatów w smartfonach wytwarza więcej niż wystarczającą liczbę pikseli do wydruków 4x6."
      },
      {
        "question": "Jakiej rozdzielczości potrzebuję do wydruku 8x10?",
        "answer": "Aby uzyskać wysokiej jakości wydruk w formacie 8 x 10 cali w rozdzielczości 300 DPI, potrzebny jest obraz o rozdzielczości co najmniej 2400 x 3000 pikseli (7,2 megapiksela). Przy rozdzielczości 150 DPI (akceptowalnej) potrzebujesz 1200 x 1500 pikseli."
      },
      {
        "question": "Ile megapikseli potrzebuję do wydruku 16x20?",
        "answer": "Do wydruku w formacie 16x20 cali w rozdzielczości 300 DPI potrzebujesz 4800 x 6000 pikseli, czyli 28,8 megapiksela. Przy rozdzielczości 200 DPI (wciąż dobrej jakości przy typowej odległości oglądania) potrzebujesz rozdzielczości 3200 x 4000 pikseli (12,8 MP)."
      }
    ],
    "sections": [
      {
        "id": "photo-print-sizes",
        "title": "Standardowe rozmiary wydruków fotograficznych",
        "paragraphs": [
          "W poniższej tabeli wymieniono typowe rozmiary wydruków fotograficznych z wymiarami w pikselach zarówno przy 150 DPI (akceptowalna jakość), jak i 300 DPI (jakość profesjonalna)."
        ],
        "table": {
          "headers": [
            "Rozmiar wydruku (cale)",
            "150 DPI",
            "300 DPI",
            "Megapiksele (300 DPI)"
          ],
          "rows": [
            [
              "4 × 6",
              "600 × 900",
              "1200 × 1800",
              "2,2 MP"
            ],
            [
              "5 × 7",
              "750 × 1050",
              "1500 × 2100",
              "3,2 MP"
            ],
            [
              "8 × 10",
              "1200 × 1500",
              "2400 × 3000",
              "7,2 MP"
            ],
            [
              "8,5 × 11",
              "1275 × 1650",
              "2550 × 3300",
              "8,4 MP"
            ],
            [
              "11×14",
              "1650 × 2100",
              "3300 × 4200",
              "13,9 MP"
            ],
            [
              "11×17",
              "1650 × 2550",
              "3300 × 5100",
              "16,8 MP"
            ],
            [
              "16×20",
              "2400 × 3000",
              "4800 × 6000",
              "28,8 MP"
            ],
            [
              "20×30",
              "3000 × 4500",
              "6000 × 9000",
              "54 MP"
            ],
            [
              "24 × 36",
              "3600 × 5400",
              "7200 × 10800",
              "77,8 MP"
            ]
          ]
        }
      },
      {
        "id": "poster-sizes",
        "title": "Rozmiary plakatów i formatów wielkoformatowych",
        "paragraphs": [
          "Duże wydruki ogląda się z dużej odległości, dlatego dopuszczalne jest niższe DPI. Oto typowe rozmiary plakatów w rozdzielczości 100 i 150 DPI:"
        ],
        "table": {
          "headers": [
            "Rozmiar plakatu (cale)",
            "100 DPI",
            "150 DPI"
          ],
          "rows": [
            [
              "18×24",
              "1800 × 2400",
              "2700 × 3600"
            ],
            [
              "24 × 36",
              "2400 × 3600",
              "3600 × 5400"
            ],
            [
              "27×40",
              "2700 × 4000",
              "4050 × 6000"
            ],
            [
              "36 × 48",
              "3600 × 4800",
              "5400 × 7200"
            ]
          ]
        }
      },
      {
        "id": "minimum-megapixels",
        "title": "Minimalna liczba megapikseli według rozmiaru wydruku",
        "paragraphs": [
          "Aby drukować w rozdzielczości 300 DPI, potrzebujesz co najmniej następującej liczby megapikseli. Większość nowoczesnych aparatów (12+ MP) z łatwością radzi sobie z wydrukami w formacie do 11 × 14. W przypadku większych wydruków użyj rozdzielczości 200 DPI i typowej odległości oglądania wynoszącej ponad 3 stopy.",
          "Skorzystaj z naszego kalkulatora rozmiaru obrazu, aby sprawdzić, czy obraz ma wystarczającą liczbę pikseli dla określonego rozmiaru wydruku."
        ],
        "list": [
          "4 × 6: 2,2 MP (dowolny nowoczesny aparat)",
          "8×10: 7,2 MP (dowolny smartfon z ostatniej dekady)",
          "16 × 20: 28,8 MP (z najwyższej półki smartfony, większość aparatów bezlusterkowych)",
          "24 × 36: 77,8 MP przy 300 DPI lub 17,3 MP przy 200 DPI (praktyczne w przypadku większości aparatów)"
        ]
      }
    ]
  },
  "id": {
    "faq": [
      {
        "question": "Berapa ukuran foto 4x6 dalam piksel?",
        "answer": "Foto berukuran 4x6 inci pada 300 DPI adalah 1200 x 1800 piksel. Pada 150 DPI (kualitas dapat diterima), ukurannya 600 x 900 piksel. Sebagian besar kamera ponsel cerdas menghasilkan piksel lebih dari cukup untuk cetakan 4x6."
      },
      {
        "question": "Berapa resolusi yang saya perlukan untuk cetakan 8x10?",
        "answer": "Untuk cetakan 8x10 inci berkualitas tinggi pada 300 DPI, Anda memerlukan gambar minimal 2400 x 3000 piksel (7,2 megapiksel). Pada 150 DPI (dapat diterima), Anda memerlukan 1200 x 1500 piksel."
      },
      {
        "question": "Berapa megapiksel yang saya perlukan untuk cetakan 16x20?",
        "answer": "Untuk cetakan 16x20 inci pada 300 DPI, Anda memerlukan 4800 x 6000 piksel, atau 28,8 megapiksel. Pada 200 DPI (kualitas masih bagus pada jarak pandang biasa), Anda memerlukan 3200 x 4000 piksel (12,8 MP)."
      }
    ],
    "sections": [
      {
        "id": "photo-print-sizes",
        "title": "Ukuran Cetak Foto Standar",
        "paragraphs": [
          "Tabel di bawah mencantumkan ukuran cetak foto umum dengan dimensi piksel pada 150 DPI (kualitas dapat diterima) dan 300 DPI (kualitas profesional)."
        ],
        "table": {
          "headers": [
            "Ukuran Cetak (inci)",
            "150 DPI",
            "300 DPI",
            "Megapiksel (300 DPI)"
          ],
          "rows": [
            [
              "4 × 6",
              "600 × 900",
              "1200 × 1800",
              "2,2 MP"
            ],
            [
              "5 × 7",
              "750 × 1050",
              "1500 × 2100",
              "3,2 MP"
            ],
            [
              "8 × 10",
              "1200 × 1500",
              "2400 × 3000",
              "7.2 MP"
            ],
            [
              "8,5 × 11",
              "1275 × 1650",
              "2550 × 3300",
              "8,4 MP"
            ],
            [
              "11 × 14",
              "1650 × 2100",
              "3300 × 4200",
              "13,9 MP"
            ],
            [
              "11 × 17",
              "1650 × 2550",
              "3300 × 5100",
              "16,8 MP"
            ],
            [
              "16 × 20",
              "2400 × 3000",
              "4800 × 6000",
              "28,8 MP"
            ],
            [
              "20 × 30",
              "3000 × 4500",
              "6000 × 9000",
              "54 MP"
            ],
            [
              "24 × 36",
              "3600 × 5400",
              "7200 × 10800",
              "77,8 MP"
            ]
          ]
        }
      },
      {
        "id": "poster-sizes",
        "title": "Ukuran Poster dan Format Besar",
        "paragraphs": [
          "Cetakan besar dilihat dari jarak jauh, sehingga DPI yang lebih rendah dapat diterima. Berikut adalah ukuran poster umum pada 100 dan 150 DPI:"
        ],
        "table": {
          "headers": [
            "Ukuran Poster (inci)",
            "100 DPI",
            "150 DPI"
          ],
          "rows": [
            [
              "18 × 24",
              "1800 × 2400",
              "2700 × 3600"
            ],
            [
              "24 × 36",
              "2400 × 3600",
              "3600 × 5400"
            ],
            [
              "27 × 40",
              "2700 × 4000",
              "4050 × 6000"
            ],
            [
              "36 × 48",
              "3600 × 4800",
              "5400 × 7200"
            ]
          ]
        }
      },
      {
        "id": "minimum-megapixels",
        "title": "Megapiksel Minimum berdasarkan Ukuran Cetak",
        "paragraphs": [
          "Untuk mencetak pada 300 DPI, Anda memerlukan minimal jumlah megapiksel berikut. Kebanyakan kamera modern (12+ MP) dapat menangani cetakan hingga 11×14 dengan mudah. Untuk cetakan yang lebih besar, gunakan 200 DPI dan jarak pandang rata-rata 3+ kaki.",
          "Gunakan Kalkulator Ukuran Gambar kami untuk memeriksa apakah gambar Anda memiliki cukup piksel untuk ukuran cetakan tertentu."
        ],
        "list": [
          "4 × 6: 2,2 MP (kamera modern apa pun)",
          "8 × 10: 7,2 MP (smartphone apa pun dari dekade terakhir)",
          "16 × 20: 28,8 MP (smartphone kelas atas, sebagian besar kamera mirrorless)",
          "24 × 36: 77,8 MP pada 300 DPI, atau 17,3 MP pada 200 DPI (praktis untuk sebagian besar kamera)"
        ]
      }
    ]
  },
  "ru": {
    "faq": [
      {
        "question": "Какой размер фотографии 4x6 в пикселях?",
        "answer": "Фотография 4x6 дюймов при разрешении 300 DPI имеет размер 1200 x 1800 пикселей. При разрешении 150 DPI (приемлемое качество) это 600 x 900 пикселей. Большинство камер смартфонов создают более чем достаточно пикселей для отпечатков 4x6."
      },
      {
        "question": "Какое разрешение мне нужно для отпечатка 8x10?",
        "answer": "Для высококачественного отпечатка 8x10 дюймов с разрешением 300 точек на дюйм вам необходимо изображение размером не менее 2400 x 3000 пикселей (7,2 мегапикселя). При разрешении 150 DPI (приемлемо) вам потребуется 1200 x 1500 пикселей."
      },
      {
        "question": "Сколько мегапикселей мне нужно для отпечатка 16x20?",
        "answer": "Для отпечатка 16x20 дюймов с разрешением 300 DPI вам потребуется 4800 x 6000 пикселей, или 28,8 мегапикселей. При разрешении 200 точек на дюйм (по-прежнему хорошее качество на обычном расстоянии просмотра) вам потребуется 3200 x 4000 пикселей (12,8 МП)."
      }
    ],
    "sections": [
      {
        "id": "photo-print-sizes",
        "title": "Стандартные размеры фотопечати",
        "paragraphs": [
          "В таблице ниже перечислены распространенные размеры фотоотпечатков с размерами в пикселях как при разрешении 150 точек на дюйм (приемлемое качество), так и при разрешении 300 точек на дюйм (профессиональное качество)."
        ],
        "table": {
          "headers": [
            "Размер печати. (дюймы)",
            "150 DPI",
            "300 DPI",
            "Мегапикселей (300 DPI)"
          ],
          "rows": [
            [
              "4 × 6",
              "600 × 900",
              "1200 × 1800",
              "2,2 МП"
            ],
            [
              "5 × 7",
              "750 × 1050",
              "1500 × 2100",
              "3,2 МП"
            ],
            [
              "8 × 10",
              "1200 × 1500",
              "2400 × 3000",
              "7.2 МП"
            ],
            [
              "8,5 × 11",
              "1275 × 1650",
              "2550 × 3300",
              "8,4 МП"
            ],
            [
              "11 × 14",
              "1650 × 2100",
              "3300 × 4200",
              "13,9 МП"
            ],
            [
              "11 × 17",
              "1650 × 2550",
              "3300 × 5100",
              "16,8 МП"
            ],
            [
              "16 × 20",
              "2400 × 3000",
              "4800 × 6000",
              "28,8 МП"
            ],
            [
              "20 × 30",
              "3000 × 4500",
              "6000 × 9000",
              "54 МП"
            ],
            [
              "24 × 36",
              "3600 × 5400",
              "7200 × 10800",
              "77,8 MP"
            ]
          ]
        }
      },
      {
        "id": "poster-sizes",
        "title": "Размеры плакатов и больших форматов",
        "paragraphs": [
          "Большие отпечатки просматриваются на расстоянии, поэтому допустимо более низкое значение DPI. Вот распространенные размеры плакатов с разрешением 100 и 150 DPI:"
        ],
        "table": {
          "headers": [
            "Размер плаката (дюймы)",
            "100 DPI",
            "150 DPI"
          ],
          "rows": [
            [
              "18 × 24",
              "1800 × 2400",
              "2700 × 3600"
            ],
            [
              "24 × 36",
              "2400 × 3600",
              "3600 × 5400"
            ],
            [
              "27 × 40",
              "2700 × 4000",
              "4050 × 6000"
            ],
            [
              "36 × 48",
              "3600 × 4800",
              "5400 × 7200"
            ]
          ]
        }
      },
      {
        "id": "minimum-megapixels",
        "title": "Минимальное количество мегапикселей в зависимости от размера печати",
        "paragraphs": [
          "Для печати с разрешением 300 точек на дюйм необходимо как минимум следующее количество мегапикселей. Большинство современных камер (12+ МП) легко справляются с отпечатками размером до 11 × 14. Для отпечатков большего размера используйте разрешение 200 точек на дюйм и стандартное расстояние просмотра более 3 футов.",
          "Воспользуйтесь нашим калькулятором размера изображения, чтобы проверить, достаточно ли в вашем изображении пикселей для печати определенного размера."
        ],
        "list": [
          "4 × 6: 2,2 МП (любая современная камера)",
          "8 × 10: 7,2 МП (любой смартфон последнего десятилетия)",
          "16 × 20: 28,8 МП (смартфоны высокого класса, большинство беззеркальных камер)",
          "24 × 36: 77,8 МП при 300 DPI или 17,3 МП при 200 DPI (практично для большинства камер)"
        ]
      }
    ]
  }
};
