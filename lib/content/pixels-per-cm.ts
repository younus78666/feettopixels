import type { LocalizedDocMap } from "./doc-types";

export const content: LocalizedDocMap = {
  "en": {
    "faq": [
      {
        "question": "How many pixels are in 1 cm?",
        "answer": "At 96 DPI (web standard), 1 cm equals 37.80 pixels. At 300 DPI (print standard), 1 cm equals 118.11 pixels. The conversion depends on the DPI of the output device."
      },
      {
        "question": "What is the formula for pixels per cm?",
        "answer": "Pixels per cm = DPI / 2.54. Since there are 2.54 centimeters in one inch, divide the DPI by 2.54 to get pixels per centimeter. For example, 300 DPI / 2.54 = 118.11 pixels per cm."
      },
      {
        "question": "How do I convert cm to pixels?",
        "answer": "Multiply the centimeter value by (DPI / 2.54). For example, 10 cm at 300 DPI = 10 × 118.11 = 1181 pixels."
      }
    ],
    "sections": [
      {
        "id": "formula",
        "title": "Formula",
        "paragraphs": [
          "To calculate how many pixels fit in one centimeter at a given DPI:",
          "Pixels per cm = DPI / 2.54",
          "This works because one inch equals exactly 2.54 centimeters. DPI tells you pixels per inch, so dividing by 2.54 gives you pixels per centimeter."
        ]
      },
      {
        "id": "reference-table",
        "title": "Pixels Per CM Reference Table",
        "table": {
          "headers": [
            "DPI",
            "Pixels per CM",
            "Pixels per 5 CM",
            "Pixels per 10 CM",
            "Use Case"
          ],
          "rows": [
            [
              "72",
              "28.35",
              "141.73",
              "283.46",
              "Legacy web, large banners"
            ],
            [
              "96",
              "37.80",
              "188.98",
              "377.95",
              "Web standard (Windows)"
            ],
            [
              "150",
              "59.06",
              "295.28",
              "590.55",
              "Draft print, documents"
            ],
            [
              "200",
              "78.74",
              "393.70",
              "787.40",
              "Medium-quality print"
            ],
            [
              "300",
              "118.11",
              "590.55",
              "1181.10",
              "Professional print"
            ],
            [
              "600",
              "236.22",
              "1181.10",
              "2362.20",
              "Fine art, medical"
            ]
          ]
        }
      },
      {
        "id": "practical-use",
        "title": "Practical Use Cases",
        "paragraphs": [
          "Pixels-per-centimeter conversion is especially useful in countries using the metric system for design and print specifications. Common scenarios include:",
          "Convert specific centimeter values to pixels with our CM to Pixels Converter, or see the full conversion matrix in our DPI Conversion Table."
        ],
        "list": [
          "European print design: Paper and image dimensions are specified in centimeters (A4 is 21 × 29.7 cm).",
          "Scientific publications: Figure dimensions are often required in centimeters at a specific DPI.",
          "Product packaging: Label dimensions use metric measurements that need conversion to pixel dimensions for design software."
        ]
      }
    ]
  },
  "es": {
    "faq": [
      {
        "question": "¿Cuántos píxeles hay en 1 cm?",
        "answer": "A 96 DPI (estándar web), 1 cm equivale a 37,80 píxeles. A 300 DPI (estándar de impresión), 1 cm equivale a 118,11 píxeles. La conversión depende del DPI del dispositivo de salida."
      },
      {
        "question": "¿Cuál es la fórmula para píxeles por cm?",
        "answer": "Píxeles por cm = DPI / 2,54. Como hay 2,54 centímetros en una pulgada, divida el DPI por 2,54 para obtener píxeles por centímetro. Por ejemplo, 300 DPI / 2,54 = 118,11 píxeles por cm."
      },
      {
        "question": "¿Cómo convierto cm a píxeles?",
        "answer": "Multiplica el valor del centímetro por (DPI / 2,54). Por ejemplo, 10 cm a 300 DPI = 10 × 118,11 = 1181 píxeles."
      }
    ],
    "sections": [
      {
        "id": "formula",
        "title": "Fórmula",
        "paragraphs": [
          "Para calcular cuántos píxeles caben en un centímetro a un DPI determinado:",
          "Píxeles por cm = DPI / 2,54",
          "Esto funciona porque una pulgada equivale exactamente a 2,54 centímetros. DPI indica píxeles por pulgada, por lo que dividir entre 2,54 da píxeles por centímetro."
        ]
      },
      {
        "id": "reference-table",
        "title": "Tabla de referencia de píxeles por CM",
        "table": {
          "headers": [
            "DPI",
            "Píxeles por CM",
            "Píxeles por 5 CM",
            "Píxeles por 10 CM",
            "Usar Caso"
          ],
          "rows": [
            [
              "72",
              "28.35",
              "141.73",
              "283.46",
              "Web heredado, grande banners"
            ],
            [
              "96",
              "37.80",
              "188.98",
              "377.95",
              "Estándar web (Windows)"
            ],
            [
              "150",
              "59.06",
              "295.28",
              "590.55",
              "Borrador de impresión, documentos"
            ],
            [
              "200",
              "78.74",
              "393.70",
              "787.40",
              "Calidad media imprimir"
            ],
            [
              "300",
              "118.11",
              "590.55",
              "1181.10",
              "Profesional print"
            ],
            [
              "600",
              "236.22",
              "1181.10",
              "2362.20",
              "Bellas artes, medicina"
            ]
          ]
        }
      },
      {
        "id": "practical-use",
        "title": "Casos de uso prácticos",
        "paragraphs": [
          "La conversión de píxeles por centímetro es especialmente útil en países que utilizan el sistema métrico para especificaciones de diseño e impresión. Los escenarios comunes incluyen:",
          "Convierta valores de centímetros específicos a píxeles con nuestro convertidor de CM a píxeles, o vea la matriz de conversión completa en nuestra tabla de conversión de DPI."
        ],
        "list": [
          "Diseño de impresión europeo: las dimensiones del papel y la imagen se especifican en centímetros (A4 es 21 × 29,7 cm).",
          "Publicaciones científicas: las dimensiones de las figuras a menudo se requieren en centímetros a un DPI específico.",
          "Embalaje del producto: Las dimensiones de las etiquetas utilizan medidas métricas que necesitan conversión a dimensiones en píxeles para el software de diseño."
        ]
      }
    ]
  },
  "fr": {
    "faq": [
      {
        "question": "Combien de pixels y a-t-il dans 1 cm ?",
        "answer": "À 96 DPI (standard Web), 1 cm équivaut à 37,80 pixels. À 300 DPI (norme d'impression), 1 cm équivaut à 118,11 pixels. La conversion dépend du DPI du périphérique de sortie."
      },
      {
        "question": "Quelle est la formule des pixels par cm ?",
        "answer": "Pixels par cm = DPI / 2,54. Puisqu'il y a 2,54 centimètres dans un pouce, divisez le DPI par 2,54 pour obtenir des pixels par centimètre. For example, 300 DPI / 2.54 = 118.11 pixels per cm."
      },
      {
        "question": "How do I convert cm to pixels?",
        "answer": "Multiply the centimeter value by (DPI / 2.54). For example, 10 cm at 300 DPI = 10 × 118.11 = 1181 pixels."
      }
    ],
    "sections": [
      {
        "id": "formula",
        "title": "Formula",
        "paragraphs": [
          "To calculate how many pixels fit in one centimeter at a given DPI:",
          "Pixels per cm = DPI / 2.54",
          "This works because one inch equals exactly 2.54 centimeters. DPI tells you pixels per inch, so dividing by 2.54 gives you pixels per centimeter."
        ]
      },
      {
        "id": "reference-table",
        "title": "Pixels Per CM Reference Table",
        "table": {
          "headers": [
            "DPI",
            "Pixels per CM",
            "Pixels per 5 CM",
            "Pixels per 10 CM",
            "Use Affaire"
          ],
          "rows": [
            [
              "72",
              "28,35",
              "141,73",
              "283,46",
              "Web hérité, grand format bannières"
            ],
            [
              "96",
              "37,80",
              "188,98",
              "377,95",
              "Norme Web (Windows)"
            ],
            [
              "150",
              "59.06",
              "295.28",
              "590.55",
              "Brouillon d'impression, documents"
            ],
            [
              "200",
              "78,74",
              "393,70",
              "787,40",
              "Qualité moyenne imprimer"
            ],
            [
              "300",
              "118.11",
              "590.55",
              "1181.10",
              "Professionnel print"
            ],
            [
              "600",
              "236.22",
              "1181.10",
              "2362.20",
              "Fine art, medical"
            ]
          ]
        }
      },
      {
        "id": "practical-use",
        "title": "Practical Use Cases",
        "paragraphs": [
          "Pixels-per-centimeter conversion is especially useful in countries using the metric system for design and print specifications. Common scenarios include:",
          "Convert specific centimeter values to pixels with our CM to Pixels Converter, or see the full conversion matrix in our DPI Conversion Table."
        ],
        "list": [
          "European print design: Paper and image dimensions are specified in centimeters (A4 is 21 × 29.7 cm).",
          "Scientific publications: Figure dimensions are often required in centimeters at a specific DPI.",
          "Product packaging: Label dimensions use mesures métriques qui nécessitent une conversion en dimensions en pixels pour les logiciels de conception."
        ]
      }
    ]
  },
  "de": {
    "faq": [
      {
        "question": "Wie viele Pixel hat 1 cm?",
        "answer": "Bei 96 DPI (Webstandard) entspricht 1 cm 37,80 Pixel. Bei 300 DPI (Druckstandard) entspricht 1 cm 118,11 Pixel. Die Umrechnung hängt von der DPI des Ausgabegeräts ab."
      },
      {
        "question": "Wie lautet die Formel für Pixel pro cm?",
        "answer": "Pixel pro cm = DPI / 2,54. Da ein Zoll 2,54 Zentimeter hat, teilen Sie den DPI-Wert durch 2,54, um Pixel pro Zentimeter zu erhalten. Beispiel: 300 DPI / 2,54 = 118,11 Pixel pro cm."
      },
      {
        "question": "Wie wandle ich cm in Pixel um?",
        "answer": "Multiplizieren Sie den Zentimeterwert mit (DPI / 2,54). Zum Beispiel 10 cm bei 300 DPI = 10 × 118,11 = 1181 Pixel."
      }
    ],
    "sections": [
      {
        "id": "formula",
        "title": "Formel",
        "paragraphs": [
          "So berechnen Sie, wie viele Pixel bei einem bestimmten DPI in einen Zentimeter passen:",
          "Pixel pro cm = DPI / 2,54",
          "Dies funktioniert, weil ein Zoll genau 2,54 Zentimeter entspricht. DPI gibt Ihnen Pixel pro Zoll an, also ergibt eine Division durch 2,54 Pixel pro Zentimeter."
        ]
      },
      {
        "id": "reference-table",
        "title": "Pixel pro CM-Referenztabelle",
        "table": {
          "headers": [
            "DPI",
            "Pixel pro CM",
            "Pixel pro 5 CM",
            "Pixel pro 10 CM",
            "Verwenden Fall"
          ],
          "rows": [
            [
              "72",
              "28,35",
              "141,73",
              "283,46",
              "Legacy-Web, groß Banner"
            ],
            [
              "96",
              "37,80",
              "188,98",
              "377,95",
              "Webstandard (Windows)"
            ],
            [
              "150",
              "59,06",
              "295,28",
              "590,55",
              "Entwurfsdruck, Dokumente"
            ],
            [
              "200",
              "78,74",
              "393,70",
              "787,40",
              "Mittlere Qualität Drucken"
            ],
            [
              "300",
              "118,11",
              "590,55",
              "1181,10",
              "Professionell Drucken"
            ],
            [
              "600",
              "236,22",
              "1181,10",
              "2362,20",
              "Bildende Kunst, Medizin"
            ]
          ]
        }
      },
      {
        "id": "practical-use",
        "title": "Praktische Anwendungsfälle",
        "paragraphs": [
          "Die Umrechnung von Pixeln pro Zentimeter ist besonders nützlich in Ländern, die das metrische System für Design- und Druckspezifikationen verwenden. Zu den häufigsten Szenarien gehören:",
          "Konvertieren Sie bestimmte Zentimeterwerte mit unserem CM-zu-Pixel-Konverter in Pixel oder sehen Sie sich die vollständige Umrechnungsmatrix in unserer DPI-Umrechnungstabelle an."
        ],
        "list": [
          "Europäisches Druckdesign: Papier- und Bildabmessungen werden in Zentimetern angegeben (A4 ist 21 × 29,7 cm).",
          "Wissenschaftliche Veröffentlichungen: Abbildungsabmessungen werden oft in Zentimetern bei einer bestimmten DPI benötigt.",
          "Produktverpackung: Etikett Bemaßungen verwenden metrische Maße, die für Designsoftware in Pixelmaße umgewandelt werden müssen."
        ]
      }
    ]
  },
  "pt": {
    "faq": [
      {
        "question": "Quantos pixels existem em 1 cm?",
        "answer": "A 96 DPI (padrão web), 1 cm equivale a 37,80 pixels. A 300 DPI (padrão de impressão), 1 cm equivale a 118,11 pixels. A conversão depende do DPI do dispositivo de saída."
      },
      {
        "question": "Qual é a fórmula para pixels por cm?",
        "answer": "Pixels por cm = DPI / 2,54. Como uma polegada tem 2,54 centímetros, divida o DPI por 2,54 para obter pixels por centímetro. Por exemplo, 300 DPI / 2,54 = 118,11 pixels por cm."
      },
      {
        "question": "Como faço para converter cm em pixels?",
        "answer": "Multiplique o valor do centímetro por (DPI/2,54). Por exemplo, 10 cm a 300 DPI = 10 × 118,11 = 1181 pixels."
      }
    ],
    "sections": [
      {
        "id": "formula",
        "title": "Fórmula",
        "paragraphs": [
          "Para calcular quantos pixels cabem em um centímetro em um determinado DPI:",
          "Pixels por cm = DPI / 2,54",
          "Isso funciona porque uma polegada equivale exatamente a 2,54 centímetros. O DPI informa pixels por polegada, portanto, dividir por 2,54 fornece pixels por centímetro."
        ]
      },
      {
        "id": "reference-table",
        "title": "Tabela de referência de pixels por CM",
        "table": {
          "headers": [
            "DPI",
            "Pixels por CM",
            "Pixels por 5 CM",
            "Pixels por 10 CM",
            "Caso de uso"
          ],
          "rows": [
            [
              "72",
              "28h35",
              "141,73",
              "283,46",
              "Web legada, banners grandes"
            ],
            [
              "96",
              "37,80",
              "188,98",
              "377,95",
              "Padrão da Web (Windows)"
            ],
            [
              "150",
              "59.06",
              "295,28",
              "590,55",
              "Rascunho de impressão, documentos"
            ],
            [
              "200",
              "78,74",
              "393,70",
              "787,40",
              "Impressão de qualidade média"
            ],
            [
              "300",
              "118.11",
              "590,55",
              "1181.10",
              "Impressão profissional"
            ],
            [
              "600",
              "236,22",
              "1181.10",
              "2362,20",
              "Belas artes, medicina"
            ]
          ]
        }
      },
      {
        "id": "practical-use",
        "title": "Casos de uso prático",
        "paragraphs": [
          "A conversão de pixels por centímetro é especialmente útil em países que utilizam o sistema métrico para especificações de design e impressão. Os cenários comuns incluem:",
          "Converta valores específicos de centímetros em pixels com nosso conversor de CM para pixels ou veja a matriz de conversão completa em nossa tabela de conversão de DPI."
        ],
        "list": [
          "Design de impressão europeu: as dimensões do papel e da imagem são especificadas em centímetros (A4 tem 21 × 29,7 cm).",
          "Publicações científicas: As dimensões das figuras são frequentemente exigidas em centímetros em um DPI específico.",
          "Embalagem do produto: as dimensões da etiqueta usam medidas métricas que precisam ser convertidas em dimensões em pixels para software de design."
        ]
      }
    ]
  },
  "hi": {
    "faq": [
      {
        "question": "1 सेमी में कितने पिक्सेल होते हैं?",
        "answer": "96 डीपीआई (वेब ​​मानक) पर, 1 सेमी 37.80 पिक्सल के बराबर है। 300 डीपीआई (प्रिंट मानक) पर, 1 सेमी 118.11 पिक्सेल के बराबर होता है। रूपांतरण आउटपुट डिवाइस की DPI पर निर्भर करता है।"
      },
      {
        "question": "पिक्सेल प्रति सेमी का सूत्र क्या है?",
        "answer": "पिक्सेल प्रति सेमी = डीपीआई/2.54. चूँकि एक इंच में 2.54 सेंटीमीटर होते हैं, प्रति सेंटीमीटर पिक्सेल प्राप्त करने के लिए DPI को 2.54 से विभाजित करें। उदाहरण के लिए, 300 डीपीआई/2.54 = 118.11 पिक्सेल प्रति सेमी।"
      },
      {
        "question": "मैं सेमी को पिक्सेल में कैसे परिवर्तित करूं?",
        "answer": "सेंटीमीटर मान को (डीपीआई/2.54) से गुणा करें। उदाहरण के लिए, 300 डीपीआई पर 10 सेमी = 10 × 118.11 = 1181 पिक्सेल।"
      }
    ],
    "sections": [
      {
        "id": "formula",
        "title": "FORMULA",
        "paragraphs": [
          "यह गणना करने के लिए कि किसी दिए गए DPI पर एक सेंटीमीटर में कितने पिक्सेल फिट होते हैं:",
          "पिक्सेल प्रति सेमी = डीपीआई/2.54",
          "यह काम करता है क्योंकि एक इंच बिल्कुल 2.54 सेंटीमीटर के बराबर होता है। डीपीआई आपको प्रति इंच पिक्सल बताता है, इसलिए 2.54 से विभाजित करने पर आपको प्रति सेंटीमीटर पिक्सल मिलता है।"
        ]
      },
      {
        "id": "reference-table",
        "title": "पिक्सेल प्रति सीएम संदर्भ तालिका",
        "table": {
          "headers": [
            "डीपीआई",
            "पिक्सेल प्रति सीएम",
            "पिक्सेल प्रति 5 सेमी",
            "पिक्सेल प्रति 10 सेमी",
            "उदाहरण"
          ],
          "rows": [
            [
              "72",
              "28.35",
              "141.73",
              "283.46",
              "विरासती वेब, बड़े बैनर"
            ],
            [
              "96",
              "37.80",
              "188.98",
              "377.95",
              "वेब मानक (विंडोज़)"
            ],
            [
              "150",
              "59.06",
              "295.28",
              "590.55",
              "ड्राफ्ट प्रिंट, दस्तावेज़"
            ],
            [
              "200",
              "78.74",
              "393.70",
              "787.40",
              "मध्यम गुणवत्ता वाला प्रिंट"
            ],
            [
              "300",
              "118.11",
              "590.55",
              "1181.10",
              "पेशेवर मुद्रण"
            ],
            [
              "600",
              "236.22",
              "1181.10",
              "2362.20",
              "ललित कला, चिकित्सा"
            ]
          ]
        }
      },
      {
        "id": "practical-use",
        "title": "व्यावहारिक उपयोग के मामले",
        "paragraphs": [
          "डिज़ाइन और प्रिंट विशिष्टताओं के लिए मीट्रिक प्रणाली का उपयोग करने वाले देशों में पिक्सेल-प्रति-सेंटीमीटर रूपांतरण विशेष रूप से उपयोगी है। सामान्य परिदृश्यों में शामिल हैं:",
          "हमारे सीएम से पिक्सेल कनवर्टर के साथ विशिष्ट सेंटीमीटर मानों को पिक्सेल में बदलें, या हमारी डीपीआई रूपांतरण तालिका में पूर्ण रूपांतरण मैट्रिक्स देखें।"
        ],
        "list": [
          "यूरोपीय प्रिंट डिज़ाइन: कागज और छवि आयाम सेंटीमीटर में निर्दिष्ट हैं (ए4 21 × 29.7 सेमी है)।",
          "वैज्ञानिक प्रकाशन: एक विशिष्ट डीपीआई पर चित्र आयामों की आवश्यकता अक्सर सेंटीमीटर में होती है।",
          "उत्पाद पैकेजिंग: लेबल आयाम मीट्रिक माप का उपयोग करते हैं जिन्हें डिज़ाइन सॉफ़्टवेयर के लिए पिक्सेल आयामों में रूपांतरण की आवश्यकता होती है।"
        ]
      }
    ]
  },
  "ja": {
    "faq": [
      {
        "question": "1 cm は何ピクセルですか?",
        "answer": "96 DPI (Web 標準) では、1 cm は 37.80 ピクセルに相当します。 300 DPI (印刷標準) では、1 cm は 118.11 ピクセルに相当します。変換は出力デバイスの DPI によって異なります。"
      },
      {
        "question": "1 cm あたりのピクセルの計算式は何ですか?",
        "answer": "1 cm あたりのピクセル = DPI / 2.54。 1 インチは 2.54 センチメートルなので、DPI を 2.54 で割って、1 センチメートルあたりのピクセル数を取得します。たとえば、300 DPI / 2.54 = 118.11 ピクセル/cm です。"
      },
      {
        "question": "cm をピクセルに変換するにはどうすればよいですか?",
        "answer": "センチメートルの値に (DPI / 2.54) を掛けます。たとえば、300 DPI の 10 cm = 10 × 118.11 = 1181 ピクセル。"
      }
    ],
    "sections": [
      {
        "id": "formula",
        "title": "式",
        "paragraphs": [
          "特定の DPI で 1 センチメートルに収まるピクセル数を計算するには:",
          "1 cm あたりのピクセル数 = DPI / 2.54",
          "これは、1 インチが正確に 2.54 に等しいため機能します。センチメートル。 DPI はインチあたりのピクセル数を表すため、2.54 で割るとセンチメートルあたりのピクセル数が得られます。"
        ]
      },
      {
        "id": "reference-table",
        "title": "CM あたりのピクセル数参照表",
        "table": {
          "headers": [
            "DPI",
            "CM あたりのピクセル数",
            "5 CM あたりのピクセル数",
            "10 CM あたりのピクセル数",
            "使用Case"
          ],
          "rows": [
            [
              "72",
              "28.35",
              "141.73",
              "283.46",
              "レガシー Web、大バナー"
            ],
            [
              "96",
              "37.80",
              "188.98",
              "377.95",
              "Web標準(Windows)"
            ],
            [
              "150",
              "59.06",
              "295.28",
              "590.55",
              "ドラフト印刷、文書"
            ],
            [
              "200",
              "78.74",
              "393.70",
              "787.40",
              "中品質print"
            ],
            [
              "300",
              "118.11",
              "590.55",
              "1181.10",
              "プロフェッショナルprint"
            ],
            [
              "600",
              "236.22",
              "1181.10",
              "2362.20",
              "美術、医療"
            ]
          ]
        }
      },
      {
        "id": "practical-use",
        "title": "実際の使用例",
        "paragraphs": [
          "ピクセル/センチメートル変換は、デザインや印刷仕様にメートル法を使用している国で特に役立ちます。一般的なシナリオは次のとおりです。",
          "CM ピクセル コンバーターを使用して特定のセンチメートル値をピクセルに変換するか、DPI 変換表で完全な変換行列を確認します。"
        ],
        "list": [
          "ヨーロッパの印刷デザイン: 用紙と画像の寸法はセンチメートル単位で指定されます (A4 は 21 × 29.7 cm)。",
          "科学出版物: 特定の場所では図の寸法がセンチメートル単位で要求されることがよくあります。 DPI.",
          "製品パッケージ: ラベルの寸法にはメートル法が使用されており、デザイン ソフトウェアではピクセル寸法に変換する必要があります。"
        ]
      }
    ]
  },
  "ko": {
    "faq": [
      {
        "question": "1cm는 몇 픽셀입니까?",
        "answer": "96DPI(웹 표준)에서 1cm는 37.80픽셀과 같습니다. 300DPI(인쇄 표준)에서 1cm는 118.11픽셀과 같습니다. 변환은 출력 장치의 DPI에 따라 다릅니다."
      },
      {
        "question": "cm당 픽셀 수식은 무엇입니까?",
        "answer": "cm당 픽셀 = DPI / 2.54. 1인치는 2.54센티미터이므로 DPI를 2.54로 나누어 센티미터당 픽셀 수를 구합니다. 예를 들어 300 DPI / 2.54 = 118.11 픽셀/cm입니다."
      },
      {
        "question": "cm를 픽셀로 어떻게 변환합니까?",
        "answer": "센티미터 값에 (DPI / 2.54)를 곱합니다. 예를 들어 300 DPI에서 10cm = 10 × 118.11 = 1181픽셀입니다."
      }
    ],
    "sections": [
      {
        "id": "formula",
        "title": "공식",
        "paragraphs": [
          "주어진 DPI에서 1센티미터에 몇 픽셀이 들어가는지 계산하려면:",
          "cm당 픽셀 = DPI / 2.54",
          "1인치는 정확히 2.54센티미터이기 때문에 이 방법이 적용됩니다. DPI는 인치당 픽셀을 나타내므로 2.54로 나누면 센티미터당 픽셀이 됩니다."
        ]
      },
      {
        "id": "reference-table",
        "title": "CM당 픽셀 참조 표",
        "table": {
          "headers": [
            "DPI",
            "CM당 픽셀",
            "5CM당 픽셀",
            "10CM당 픽셀",
            "사용 사례"
          ],
          "rows": [
            [
              "72",
              "28.35",
              "141.73",
              "283.46",
              "레거시 웹, 대형 배너"
            ],
            [
              "96",
              "37.80",
              "188.98",
              "377.95",
              "웹 표준 (Windows)"
            ],
            [
              "150",
              "59.06",
              "295.28",
              "590.55",
              "초안 인쇄, 문서"
            ],
            [
              "200",
              "78.74",
              "393.70",
              "787.40",
              "중간 품질 인쇄"
            ],
            [
              "300",
              "118.11",
              "590.55",
              "1181.10",
              "전문가 print"
            ],
            [
              "600",
              "236.22",
              "1181.10",
              "2362.20",
              "미술, 의료"
            ]
          ]
        }
      },
      {
        "id": "practical-use",
        "title": "실용 사례",
        "paragraphs": [
          "센티미터당 픽셀 변환은 디자인 및 인쇄 사양에 미터법을 사용하는 국가에서 특히 유용합니다. 일반적인 시나리오는 다음과 같습니다.",
          "CM-픽셀 변환기를 사용하여 특정 센티미터 값을 픽셀로 변환하거나 DPI 변환표에서 전체 변환 매트릭스를 확인하세요."
        ],
        "list": [
          "유럽 인쇄 디자인: 종이 및 이미지 크기는 센티미터로 지정됩니다(A4는 21 × 29.7cm).",
          "과학 출판물: 특정 DPI에서 그림 크기는 종종 센티미터로 필요합니다.",
          "제품 패키징: 라벨 치수는 디자인 소프트웨어의 픽셀 치수로 변환해야 하는 미터법 측정을 사용합니다."
        ]
      }
    ]
  },
  "it": {
    "faq": [
      {
        "question": "Quanti pixel ci sono in 1 cm?",
        "answer": "A 96 DPI (standard web), 1 cm equivale a 37,80 pixel. A 300 DPI (standard di stampa), 1 cm equivale a 118,11 pixel. La conversione dipende dal DPI del dispositivo di output."
      },
      {
        "question": "Qual è la formula per i pixel per cm?",
        "answer": "Pixel per cm = DPI / 2,54. Poiché in un pollice ci sono 2,54 centimetri, dividi il DPI per 2,54 per ottenere pixel per centimetro. Ad esempio, 300 DPI / 2,54 = 118,11 pixel per cm."
      },
      {
        "question": "Come faccio a convertire cm in pixel?",
        "answer": "Moltiplica il valore in centimetri per (DPI / 2,54). Ad esempio, 10 cm a 300 DPI = 10 × 118,11 = 1181 pixel."
      }
    ],
    "sections": [
      {
        "id": "formula",
        "title": "Formula",
        "paragraphs": [
          "Per calcolare quanti pixel rientrano in un centimetro a un dato DPI:",
          "Pixel per cm = DPI / 2,54",
          "Funziona perché un pollice equivale esattamente a 2,54 centimetri. DPI indica i pixel per pollice, quindi dividendo per 2,54 ottieni pixel per centimetro."
        ]
      },
      {
        "id": "reference-table",
        "title": "Tabella di riferimento pixel per CM",
        "table": {
          "headers": [
            "DPI",
            "Pixel per CM",
            "Pixel per 5 CM",
            "Pixel per 10 CM",
            "Utilizza Caso"
          ],
          "rows": [
            [
              "72",
              "28,35",
              "141,73",
              "283,46",
              "Nastro precedente, grande banner"
            ],
            [
              "96",
              "37,80",
              "188,98",
              "377,95",
              "Standard web (Windows)"
            ],
            [
              "150",
              "59,06",
              "295,28",
              "590,55",
              "Bozza di stampa, documenti"
            ],
            [
              "200",
              "78,74",
              "393,70",
              "787,40",
              "Media qualità stampa"
            ],
            [
              "300",
              "118,11",
              "590,55",
              "1181,10",
              "Professionale stampa"
            ],
            [
              "600",
              "236,22",
              "1181,10",
              "2362,20",
              "Belle arti, medicina"
            ]
          ]
        }
      },
      {
        "id": "practical-use",
        "title": "Casi d'uso pratici",
        "paragraphs": [
          "La conversione dei pixel per centimetro è particolarmente utile nei paesi che utilizzano il sistema metrico per le specifiche di progettazione e stampa. Gli scenari comuni includono:",
          "Convertire valori centimetrici specifici in pixel con il nostro convertitore CM in pixel o visualizzare la matrice di conversione completa nella nostra tabella di conversione DPI."
        ],
        "list": [
          "Design di stampa europeo: le dimensioni della carta e dell'immagine sono specificate in centimetri (A4 è 21 × 29,7 cm).",
          "Pubblicazioni scientifiche: le dimensioni delle figure sono spesso richieste in centimetri a un DPI specifico.",
          "Prodotto imballaggio: le dimensioni dell'etichetta utilizzano misurazioni metriche che richiedono la conversione in dimensioni in pixel per il software di progettazione."
        ]
      }
    ]
  },
  "nl": {
    "faq": [
      {
        "question": "Hoeveel pixels zitten er in 1 cm?",
        "answer": "Bij 96 DPI (webstandaard) is 1 cm gelijk aan 37,80 pixels. Bij 300 DPI (printstandaard) komt 1 cm overeen met 118,11 pixels. De conversie is afhankelijk van de DPI van het uitvoerapparaat."
      },
      {
        "question": "Wat is de formule voor pixels per cm?",
        "answer": "Pixels per cm = DPI / 2,54. Omdat er 2,54 centimeter in één inch zit, deel je de DPI door 2,54 om pixels per centimeter te krijgen. Bijvoorbeeld 300 DPI / 2,54 = 118,11 pixels per cm."
      },
      {
        "question": "Hoe converteer ik cm naar pixels?",
        "answer": "Vermenigvuldig de centimeterwaarde met (DPI / 2,54). Bijvoorbeeld 10 cm bij 300 DPI = 10 × 118,11 = 1181 pixels."
      }
    ],
    "sections": [
      {
        "id": "formula",
        "title": "Formule",
        "paragraphs": [
          "Om te berekenen hoeveel pixels er in één centimeter passen bij een bepaalde DPI:",
          "Pixels per cm = DPI / 2,54",
          "Dit werkt omdat één inch precies gelijk is aan 2,54 centimeter. DPI vertelt u het aantal pixels per inch, dus delen door 2,54 geeft u pixels per centimeter."
        ]
      },
      {
        "id": "reference-table",
        "title": "Referentietabel pixels per CM",
        "table": {
          "headers": [
            "DPI",
            "Pixels per CM",
            "Pixels per 5 CM",
            "Pixels per 10 CM",
            "Gebruik Case"
          ],
          "rows": [
            [
              "72",
              "28,35",
              "141,73",
              "283,46",
              "Legacy web, groot banners"
            ],
            [
              "96",
              "37,80",
              "188,98",
              "377,95",
              "Webstandaard (Windows)"
            ],
            [
              "150",
              "59.06",
              "295.28",
              "590.55",
              "Conceptafdruk, documenten"
            ],
            [
              "200",
              "78,74",
              "393,70",
              "787,40",
              "Gemiddelde kwaliteit print"
            ],
            [
              "300",
              "118.11",
              "590.55",
              "1181.10",
              "Professioneel print"
            ],
            [
              "600",
              "236.22",
              "1181.10",
              "2362.20",
              "Schone kunst, medisch"
            ]
          ]
        }
      },
      {
        "id": "practical-use",
        "title": "Praktische gebruiksscenario's",
        "paragraphs": [
          "Conversie van pixels per centimeter is vooral handig in landen die het metrische systeem gebruiken voor ontwerp- en printspecificaties. Veel voorkomende scenario's zijn:",
          "Converteer specifieke centimeterwaarden naar pixels met onze CM naar Pixels Converter, of bekijk de volledige conversiematrix in onze DPI-conversietabel."
        ],
        "list": [
          "Europees printontwerp: Papier- en afbeeldingsafmetingen worden gespecificeerd in centimeters (A4 is 21 × 29,7 cm).",
          "Wetenschappelijke publicaties: Figuurafmetingen zijn vaak vereist in centimeters bij een specifieke DPI.",
          "Productverpakking: Etiket dimensies gebruiken metrische metingen die moeten worden omgezet naar pixelafmetingen voor ontwerpsoftware."
        ]
      }
    ]
  },
  "ar": {
    "faq": [
      {
        "question": "كم عدد البكسلات في 1 سم؟",
        "answer": "عند 96 نقطة في البوصة (معيار الويب)، 1 سم يساوي 37.80 بكسل. عند 300 نقطة في البوصة (معيار الطباعة)، 1 سم يساوي 118.11 بكسل. يعتمد التحويل على DPI لجهاز الإخراج."
      },
      {
        "question": "ما هي صيغة البكسل لكل سم؟",
        "answer": "البكسل لكل سم = DPI / 2.54. نظرًا لوجود 2.54 سم في البوصة الواحدة، قم بتقسيم DPI على 2.54 للحصول على بكسل لكل سم. على سبيل المثال، 300 DPI / 2.54 = 118.11 بكسل لكل سم."
      },
      {
        "question": "كيف يمكنني تحويل سم إلى بكسل؟",
        "answer": "اضرب قيمة السنتيمتر بـ (DPI / 2.54). على سبيل المثال، 10 سم عند 300 نقطة لكل بوصة = 10 × 118.11 = 1181 بكسل."
      }
    ],
    "sections": [
      {
        "id": "formula",
        "title": "الصيغة",
        "paragraphs": [
          "لحساب عدد البكسلات المناسبة في سنتيمتر واحد عند نقطة لكل بوصة معينة:",
          "بكسل لكل سم = DPI / 2.54",
          "يعمل هذا لأن البوصة الواحدة تساوي 2.54 سم بالضبط. تخبرك DPI بالبكسل لكل بوصة، لذا فإن القسمة على 2.54 تعطيك بكسل لكل سنتيمتر."
        ]
      },
      {
        "id": "reference-table",
        "title": "جدول مرجعي بالبكسل لكل سم",
        "table": {
          "headers": [
            "DPI",
            "بكسل لكل سم",
            "بكسل لكل 5 سم",
            "بكسل لكل 10 سم",
            "استخدام الحالة"
          ],
          "rows": [
            [
              "72",
              "28.35",
              "141.73",
              "283.46",
              "شبكة قديمة، كبيرة لافتات"
            ],
            [
              "96",
              "37.80",
              "188.98",
              "377.95",
              "معيار الويب (Windows)"
            ],
            [
              "150",
              "59.06",
              "295.28",
              "590.55",
              "طباعة المسودة، المستندات"
            ],
            [
              "200",
              "78.74",
              "393.70",
              "787.40",
              "جودة متوسطة طباعة"
            ],
            [
              "300",
              "118.11",
              "590.55",
              "1181.10",
              "محترف طباعة"
            ],
            [
              "600",
              "236.22",
              "1181.10",
              "2362.20",
              "الفنون الجميلة والطبية"
            ]
          ]
        }
      },
      {
        "id": "practical-use",
        "title": "حالات الاستخدام العملي",
        "paragraphs": [
          "يُعد تحويل البكسل لكل سنتيمتر مفيدًا بشكل خاص في البلدان التي تستخدم النظام المتري للتصميم ومواصفات الطباعة. تتضمن السيناريوهات الشائعة ما يلي:",
          "تحويل قيم سنتيمترات محددة إلى بكسلات باستخدام محول CM إلى Pixels الخاص بنا، أو الاطلاع على مصفوفة التحويل الكاملة في جدول تحويل DPI الخاص بنا."
        ],
        "list": [
          "تصميم الطباعة الأوروبي: يتم تحديد أبعاد الورق والصورة بالسنتيمتر (A4 هو 21 × 29.7 سم).",
          "المنشورات العلمية: غالبًا ما تكون أبعاد الشكل مطلوبة بالسنتيمتر عند مستوى معين DPI.",
          "تغليف المنتج: تستخدم أبعاد الملصق قياسات مترية تحتاج إلى التحويل إلى أبعاد البكسل لبرامج التصميم."
        ]
      }
    ]
  },
  "tr": {
    "faq": [
      {
        "question": "1 cm kaç pikseldir?",
        "answer": "96 DPI'da (web standardı), 1 cm 37,80 piksele eşittir. 300 DPI'da (baskı standardı) 1 cm, 118,11 piksele eşittir. Dönüşüm, çıkış cihazının DPI'sına bağlıdır."
      },
      {
        "question": "cm başına piksel formülü nedir?",
        "answer": "cm başına piksel = DPI / 2,54. Bir inçte 2,54 santimetre olduğundan santimetre başına piksel sayısını bulmak için DPI'yi 2,54'e bölün. Örneğin, 300 DPI / 2,54 = cm başına 118,11 piksel."
      },
      {
        "question": "Cm'yi piksele nasıl dönüştürebilirim?",
        "answer": "Santimetre değerini (DPI / 2,54) ile çarpın. Örneğin, 300 DPI'da 10 cm = 10 × 118,11 = 1181 piksel."
      }
    ],
    "sections": [
      {
        "id": "formula",
        "title": "Formül",
        "paragraphs": [
          "Belirli bir DPI'da bir santimetreye kaç piksel sığdığını hesaplamak için:",
          "cm başına piksel = DPI / 2,54",
          "Bir inç tam olarak 2,54 santimetreye eşit olduğundan bu işe yarar. DPI inç başına piksel sayısını belirtir, dolayısıyla 2,54'e bölmek santimetre başına piksel sayısını verir."
        ]
      },
      {
        "id": "reference-table",
        "title": "CM Başına Piksel Referans Tablosu",
        "table": {
          "headers": [
            "DPI",
            "CM başına piksel",
            "5 CM başına piksel",
            "10 CM başına piksel",
            "Kullanım Vaka"
          ],
          "rows": [
            [
              "72",
              "28,35",
              "141,73",
              "283,46",
              "Eski web, büyük banner'lar"
            ],
            [
              "96",
              "37,80",
              "188,98",
              "377,95",
              "Web standardı (Windows)"
            ],
            [
              "150",
              "59.06",
              "295.28",
              "590.55",
              "Taslak baskı, belgeler"
            ],
            [
              "200",
              "78,74",
              "393,70",
              "787,40",
              "Orta kalite print"
            ],
            [
              "300",
              "118.11",
              "590.55",
              "1181.10",
              "Profesyonel print"
            ],
            [
              "600",
              "236.22",
              "1181.10",
              "2362.20",
              "Güzel sanatlar, tıp"
            ]
          ]
        }
      },
      {
        "id": "practical-use",
        "title": "Pratik Kullanım Durumları",
        "paragraphs": [
          "Santimetre başına piksel dönüştürme, özellikle tasarım ve baskı özellikleri için metrik sistem kullanan ülkelerde kullanışlıdır. Yaygın senaryolar şunları içerir:",
          "CM'den Piksele Dönüştürücümüzle belirli santimetre değerlerini piksellere dönüştürün veya DPI Dönüşüm Tablomuzdaki tam dönüşüm matrisine bakın."
        ],
        "list": [
          "Avrupa baskı tasarımı: Kağıt ve görüntü boyutları santimetre cinsinden belirtilir (A4, 21 × 29,7 cm'dir).",
          "Bilimsel yayınlar: Şekil boyutları genellikle belirli bir noktada santimetre cinsinden istenir. DPI.",
          "Ürün ambalajı: Etiket boyutları, tasarım yazılımı için piksel boyutlarına dönüştürülmesi gereken metrik ölçümleri kullanır."
        ]
      }
    ]
  },
  "pl": {
    "faq": [
      {
        "question": "Ile pikseli znajduje się w 1 cm?",
        "answer": "Przy rozdzielczości 96 DPI (standard internetowy) 1 cm równa się 37,80 pikseli. Przy rozdzielczości 300 DPI (standard druku) 1 cm równa się 118,11 pikseli. Konwersja zależy od DPI urządzenia wyjściowego."
      },
      {
        "question": "Jaki jest wzór na piksele na cm?",
        "answer": "Piksele na cm = DPI / 2,54. Ponieważ jeden cal ma 2,54 centymetra, podziel DPI przez 2,54, aby otrzymać piksele na centymetr. Na przykład 300 DPI / 2,54 = 118,11 pikseli na cm."
      },
      {
        "question": "Jak przekonwertować cm na piksele?",
        "answer": "Pomnóż wartość w centymetrach przez (DPI / 2,54). Na przykład 10 cm przy 300 DPI = 10 × 118,11 = 1181 pikseli."
      }
    ],
    "sections": [
      {
        "id": "formula",
        "title": "Wzór",
        "paragraphs": [
          "Aby obliczyć, ile pikseli mieści się w jednym centymetrze przy danym DPI:",
          "Pikseli na cm = DPI / 2,54",
          "To działa, ponieważ jeden cal równa się dokładnie 2,54 centymetry. DPI informuje o liczbie pikseli na cal, więc podzielenie przez 2,54 daje liczbę pikseli na centymetr."
        ]
      },
      {
        "id": "reference-table",
        "title": "Tabela referencyjna pikseli na CM",
        "table": {
          "headers": [
            "DPI",
            "Piksele na CM",
            "Piksele na 5 CM",
            "Piksele na 10 CM",
            "Użyj Case"
          ],
          "rows": [
            [
              "72",
              "28.35",
              "141.73",
              "283.46",
              "Starsza wersja sieciowa, duża banery"
            ],
            [
              "96",
              "37,80",
              "188,98",
              "377,95",
              "Standard internetowy (Windows)"
            ],
            [
              "150",
              "59.06",
              "295.28",
              "590.55",
              "Druk roboczy, dokumenty"
            ],
            [
              "200",
              "78,74",
              "393,70",
              "787,40",
              "Średnia jakość drukuj"
            ],
            [
              "300",
              "118.11",
              "590.55",
              "1181.10",
              "Profesjonalny print"
            ],
            [
              "600",
              "236.22",
              "1181.10",
              "2362.20",
              "Sztuki piękne, medycyna"
            ]
          ]
        }
      },
      {
        "id": "practical-use",
        "title": "Praktyczne przypadki użycia",
        "paragraphs": [
          "Konwersja pikseli na centymetr jest szczególnie przydatna w krajach stosujących system metryczny w specyfikacjach projektów i druku. Typowe scenariusze obejmują:",
          "Konwertuj określone wartości centymetrów na piksele za pomocą naszego konwertera CM na piksele lub zobacz pełną macierz konwersji w naszej tabeli konwersji DPI."
        ],
        "list": [
          "Europejski projekt druku: wymiary papieru i obrazu są podawane w centymetrach (A4 to 21 × 29,7 cm).",
          "Publikacje naukowe: wymiary figur są często wymagane w centymetrach w określonym miejscu DPI.",
          "Opakowanie produktu: Wymiary etykiet wykorzystują pomiary metryczne, które wymagają konwersji na wymiary w pikselach w oprogramowaniu do projektowania."
        ]
      }
    ]
  },
  "id": {
    "faq": [
      {
        "question": "Berapa banyak piksel dalam 1 cm?",
        "answer": "Pada 96 DPI (standar web), 1 cm sama dengan 37,80 piksel. Pada 300 DPI (standar cetak), 1 cm sama dengan 118,11 piksel. Konversinya bergantung pada DPI perangkat keluaran."
      },
      {
        "question": "Apa rumus piksel per cm?",
        "answer": "Piksel per cm = DPI / 2,54. Karena ada 2,54 sentimeter dalam satu inci, bagi DPI dengan 2,54 untuk mendapatkan piksel per sentimeter. Misalnya, 300 DPI / 2,54 = 118,11 piksel per cm."
      },
      {
        "question": "Bagaimana cara mengonversi cm menjadi piksel?",
        "answer": "Kalikan nilai sentimeter dengan (DPI / 2.54). Misalnya, 10 cm pada 300 DPI = 10 × 118,11 = 1181 piksel."
      }
    ],
    "sections": [
      {
        "id": "formula",
        "title": "Rumus",
        "paragraphs": [
          "Untuk menghitung berapa banyak piksel yang muat dalam satu sentimeter pada DPI tertentu:",
          "Piksel per cm = DPI / 2,54",
          "Ini berfungsi karena satu inci sama dengan tepat 2,54 sentimeter. DPI menunjukkan piksel per inci, jadi membaginya dengan 2,54 menghasilkan piksel per sentimeter."
        ]
      },
      {
        "id": "reference-table",
        "title": "Tabel Referensi Piksel Per CM",
        "table": {
          "headers": [
            "DPI",
            "Piksel per CM",
            "Piksel per 5 CM",
            "Piksel per 10 CM",
            "Gunakan Kasus"
          ],
          "rows": [
            [
              "72",
              "28.35",
              "141.73",
              "283.46",
              "Web lama, besar spanduk"
            ],
            [
              "96",
              "37,80",
              "188,98",
              "377,95",
              "Standar web (Windows)"
            ],
            [
              "150",
              "59.06",
              "295.28",
              "590.55",
              "Draf cetakan, dokumen"
            ],
            [
              "200",
              "78,74",
              "393,70",
              "787,40",
              "Kualitas sedang mencetak"
            ],
            [
              "300",
              "118.11",
              "590.55",
              "1181.10",
              "Profesional print"
            ],
            [
              "600",
              "236.22",
              "1181.10",
              "2362.20",
              "Seni rupa, medis"
            ]
          ]
        }
      },
      {
        "id": "practical-use",
        "title": "Kasus Penggunaan Praktis",
        "paragraphs": [
          "Konversi piksel per sentimeter sangat berguna di negara yang menggunakan sistem metrik untuk spesifikasi desain dan pencetakan. Skenario umum mencakup:",
          "Ubah nilai sentimeter tertentu menjadi piksel dengan Konverter CM ke Piksel kami, atau lihat matriks konversi lengkap di Tabel Konversi DPI kami."
        ],
        "list": [
          "Desain cetakan Eropa: Dimensi kertas dan gambar ditentukan dalam sentimeter (A4 adalah 21 × 29,7 cm).",
          "Publikasi ilmiah: Dimensi gambar sering kali diperlukan dalam sentimeter pada ukuran tertentu DPI.",
          "Kemasan produk: Dimensi label menggunakan pengukuran metrik yang memerlukan konversi ke dimensi piksel untuk perangkat lunak desain."
        ]
      }
    ]
  },
  "ru": {
    "faq": [
      {
        "question": "Сколько пикселей в 1 см?",
        "answer": "При разрешении 96 точек на дюйм (веб-стандарт) 1 см равен 37,80 пикселей. При разрешении 300 точек на дюйм (стандарт печати) 1 см равен 118,11 пикселей. Преобразование зависит от разрешения устройства вывода."
      },
      {
        "question": "Какова формула количества пикселей на см?",
        "answer": "Пикселей на см = DPI / 2,54. Поскольку в одном дюйме 2,54 сантиметра, разделите DPI на 2,54, чтобы получить количество пикселей на сантиметр. Например, 300 DPI / 2,54 = 118,11 пикселей на см."
      },
      {
        "question": "Как преобразовать см в пиксели?",
        "answer": "Умножьте значение в сантиметрах на (DPI / 2,54). Например, 10 см при 300 DPI = 10 × 118,11 = 1181 пикселей."
      }
    ],
    "sections": [
      {
        "id": "formula",
        "title": "Формула",
        "paragraphs": [
          "Чтобы рассчитать, сколько пикселей умещается в одном сантиметре при заданном разрешении:",
          "Пикселей на см = DPI / 2,54",
          "Это работает, поскольку один дюйм равен ровно 2,54 сантиметрам. DPI определяет количество пикселей на дюйм, поэтому деление на 2,54 дает количество пикселей на сантиметр."
        ]
      },
      {
        "id": "reference-table",
        "title": "Справочная таблица пикселей на см",
        "table": {
          "headers": [
            "DPI",
            "Пикселей на см",
            "Пикселей на 5 см",
            "Пикселей на 10 см",
            "Использовать Дело"
          ],
          "rows": [
            [
              "72",
              "28,35",
              "141,73",
              "283,46",
              "Устаревший веб-сайт, большой баннеры"
            ],
            [
              "96",
              "37,80",
              "188,98",
              "377,95",
              "Веб-стандарт (Windows)"
            ],
            [
              "150",
              "59,06",
              "295,28",
              "590,55",
              "Черновик печати, документы"
            ],
            [
              "200",
              "78,74",
              "393,70",
              "787,40",
              "Среднее качество print"
            ],
            [
              "300",
              "118,11",
              "590,55",
              "1181,10",
              "Профессиональный print"
            ],
            [
              "600",
              "236.22",
              "1181.10",
              "2362.20",
              "Изобразительное искусство, медицина"
            ]
          ]
        }
      },
      {
        "id": "practical-use",
        "title": "Случаи практического использования",
        "paragraphs": [
          "Преобразование пикселей на сантиметр особенно полезно в странах, использующих метрическую систему для дизайна и печати. Общие сценарии включают в себя:",
          "Преобразование определенных значений в сантиметрах в пиксели с помощью нашего конвертера CM в пиксели или просмотрите полную матрицу преобразования в нашей таблице преобразования DPI."
        ],
        "list": [
          "Европейский дизайн печати: размеры бумаги и изображения указываются в сантиметрах (A4 - 21 × 29,7 см).",
          "Научные публикации: размеры рисунков часто указываются в сантиметрах при определенных условиях. DPI.",
          "Упаковка продукта: размеры этикетки используют метрические измерения, которые необходимо преобразовать в размеры в пикселях для программного обеспечения для проектирования."
        ]
      }
    ]
  }
};
