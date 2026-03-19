import type { LocalizedDocMap } from "./doc-types";

export const content: LocalizedDocMap = {
  "en": {
    "faq": [
      {
        "question": "How big is a pixel?",
        "answer": "A pixel has no fixed physical size. Its size depends on the display's PPI. At 96 PPI, one pixel is about 0.26mm. At 300 PPI (print), one pixel is 0.085mm. On a 460 PPI phone, one pixel is just 0.055mm."
      },
      {
        "question": "What are subpixels?",
        "answer": "Each pixel on an LCD or OLED screen is composed of three subpixels: red, green, and blue (RGB). By varying the intensity of each subpixel, the pixel can produce millions of different colors. Some displays use RGBW (adding white) subpixel arrangements."
      },
      {
        "question": "What does megapixel mean?",
        "answer": "One megapixel equals one million pixels. A 12-megapixel camera sensor captures images with roughly 12 million individual pixels, such as 4000 x 3000 pixels. More megapixels allows for larger prints and more cropping flexibility."
      },
      {
        "question": "Are CSS pixels the same as device pixels?",
        "answer": "No. CSS pixels are an abstract unit used in web design. On a 2x retina display, one CSS pixel equals four device pixels (2x2). This distinction is why images need to be 2x or 3x resolution for sharp rendering on HiDPI screens."
      }
    ],
    "sections": [
      {
        "id": "pixel-definition",
        "title": "Pixel Definition",
        "paragraphs": [
          "A pixel (short for “picture element”) is the smallest addressable unit of a raster image or digital display. Every photo you view, every icon on your screen, and every frame of video is composed of thousands or millions of individual pixels arranged in a rectangular grid.",
          "Each pixel stores color information, typically as a combination of red, green, and blue values (RGB). In an 8-bit-per-channel image, each channel ranges from 0 to 255, giving each pixel the ability to represent one of over 16.7 million colors."
        ]
      },
      {
        "id": "subpixels",
        "title": "Subpixels (RGB)",
        "paragraphs": [
          "On LCD and OLED screens, each visible pixel is actually composed of three subpixels: one red, one green, and one blue. These subpixels are too small to see individually at normal viewing distance. By adjusting the brightness of each subpixel independently, the display creates the full range of colors you perceive.",
          "Some display technologies use different subpixel arrangements. Samsung’s PenTile layout uses an RGBG pattern, while some LCDs add a white subpixel (RGBW) to improve brightness efficiency."
        ]
      },
      {
        "id": "megapixels",
        "title": "Megapixels",
        "paragraphs": [
          "One megapixel (MP) equals one million pixels. Camera sensors and image files are rated in megapixels to indicate their total resolution. A 48 MP smartphone camera captures images of roughly 8000 × 6000 pixels. More megapixels provide greater detail and allow for larger prints or more aggressive cropping."
        ],
        "table": {
          "headers": [
            "Megapixels",
            "Typical Dimensions",
            "Max Print Size (300 DPI)"
          ],
          "rows": [
            [
              "2 MP",
              "1600 × 1200",
              "5.3 × 4\""
            ],
            [
              "8 MP",
              "3264 × 2448",
              "10.9 × 8.2\""
            ],
            [
              "12 MP",
              "4000 × 3000",
              "13.3 × 10\""
            ],
            [
              "24 MP",
              "6000 × 4000",
              "20 × 13.3\""
            ],
            [
              "48 MP",
              "8000 × 6000",
              "26.7 × 20\""
            ]
          ]
        }
      },
      {
        "id": "pixel-size",
        "title": "Pixel Size at Different DPIs",
        "paragraphs": [
          "A pixel has no inherent physical size — its real-world dimensions depend on the display or print density. Here is the physical size of one pixel at common DPI/PPI values:"
        ],
        "list": [
          "72 PPI: 0.353 mm (0.0139\")",
          "96 PPI: 0.265 mm (0.0104\")",
          "150 PPI: 0.169 mm (0.0067\")",
          "300 PPI: 0.085 mm (0.0033\")",
          "460 PPI: 0.055 mm (0.0022\")"
        ]
      },
      {
        "id": "history",
        "title": "History of Pixels",
        "paragraphs": [
          "The concept of a pixel dates back to the 1960s, with the term first used in the context of early digital image processing. Frederic Billingsley of JPL is often credited with popularizing the word “pixel” in 1965. Early digital displays had very low pixel counts — the Apple II (1977) displayed 280 × 192 pixels, while modern 8K displays render over 33 million pixels.",
          "Today, pixel technology continues to evolve with micro-LED displays, foldable screens, and displays exceeding 1000 PPI for VR headsets. The pixel remains the fundamental building block of every digital visual experience. Explore how pixels map to physical units with our Pixel Converter."
        ]
      }
    ]
  },
  "es": {
    "faq": [
      {
        "question": "¿Qué tamaño tiene un píxel?",
        "answer": "Un píxel no tiene un tamaño físico fijo. Su tamaño depende del PPI de la pantalla. A 96 PPI, un píxel mide aproximadamente 0,26 mm. A 300 PPI (impresión), un píxel mide 0,085 mm. En un teléfono de 460 PPI, un píxel mide solo 0,055 mm."
      },
      {
        "question": "¿Qué son los subpíxeles?",
        "answer": "Cada píxel de una pantalla LCD u OLED se compone de tres subpíxeles: rojo, verde y azul (RGB). Al variar la intensidad de cada subpíxel, el píxel puede producir millones de colores diferentes. Algunas pantallas utilizan disposiciones de subpíxeles RGBW (agregar blanco)."
      },
      {
        "question": "¿Qué significa megapíxel?",
        "answer": "Un megapíxel equivale a un millón de píxeles. Un sensor de cámara de 12 megapíxeles captura imágenes con aproximadamente 12 millones de píxeles individuales, como por ejemplo 4000 x 3000 píxeles. Más megapíxeles permiten impresiones más grandes y más flexibilidad de recorte."
      },
      {
        "question": "¿Son los píxeles CSS iguales a los píxeles del dispositivo?",
        "answer": "No. Los píxeles CSS son una unidad abstracta utilizada en el diseño web. En una pantalla retina 2x, un píxel CSS equivale a cuatro píxeles del dispositivo (2x2). Esta distinción es la razón por la que las imágenes deben tener una resolución de 2x o 3x para una representación nítida en pantallas HiDPI."
      }
    ],
    "sections": [
      {
        "id": "pixel-definition",
        "title": "Definición de píxeles",
        "paragraphs": [
          "Un píxel (abreviatura de “elemento de imagen”) es la unidad direccionable más pequeña de una imagen rasterizada o pantalla digital. Cada foto que ves, cada ícono en tu pantalla y cada cuadro de video se compone de miles o millones de píxeles individuales dispuestos en una cuadrícula rectangular.",
          "Cada píxel almacena información de color, generalmente como una combinación de valores de rojo, verde y azul (RGB). En una imagen de 8 bits por canal, cada canal varía de 0 a 255, lo que le da a cada píxel la capacidad de representar uno de más de 16,7 millones de colores."
        ]
      },
      {
        "id": "subpixels",
        "title": "Subpíxeles (RGB)",
        "paragraphs": [
          "En las pantallas LCD y OLED, cada píxel visible en realidad se compone de tres subpíxeles: uno rojo, uno verde y uno azul. Estos subpíxeles son demasiado pequeños para verlos individualmente a una distancia de visualización normal. Al ajustar el brillo de cada subpíxel de forma independiente, la pantalla crea la gama completa de colores que percibes.",
          "Algunas tecnologías de visualización utilizan diferentes disposiciones de subpíxeles. El diseño PenTile de Samsung utiliza un patrón RGBG, mientras que algunas pantallas LCD agregan un subpíxel blanco (RGBW) para mejorar la eficiencia del brillo."
        ]
      },
      {
        "id": "megapixels",
        "title": "Megapíxeles",
        "paragraphs": [
          "Un megapíxel (MP) equivale a un millón de píxeles. Los sensores de la cámara y los archivos de imágenes se clasifican en megapíxeles para indicar su resolución total. La cámara de un teléfono inteligente de 48 MP captura imágenes de aproximadamente 8000 × 6000 píxeles. Más megapíxeles brindan mayor detalle y permiten impresiones más grandes o recortes más agresivos."
        ],
        "table": {
          "headers": [
            "Megapíxeles",
            "Dimensiones típicas",
            "Tamaño máximo de impresión (300 DPI)"
          ],
          "rows": [
            [
              "2 MP",
              "1600 × 1200",
              "5.3 × 4\""
            ],
            [
              "8 MP",
              "3264 × 2448",
              "10,9 × 8,2\""
            ],
            [
              "12 MP",
              "4000 × 3000",
              "13,3 × 10\""
            ],
            [
              "24 MP",
              "6000 × 4000",
              "20 × 13,3\""
            ],
            [
              "48 MP",
              "8000 × 6000",
              "26,7 × 20\""
            ]
          ]
        }
      },
      {
        "id": "pixel-size",
        "title": "Tamaño de píxel a diferentes DPI",
        "paragraphs": [
          "Un píxel no tiene un tamaño físico inherente; sus dimensiones reales dependen de la densidad de visualización o impresión. Aquí está el tamaño físico. de un píxel con valores DPI/PPI comunes:"
        ],
        "list": [
          "72 PPI: 0,353 mm (0,0139\")",
          "96 PPI: 0,265 mm (0,0104\")",
          "150 PPI: 0,169 mm (0,0067\")",
          "300 PPI: 0,085 mm (0,0033\")",
          "460 PPI: 0,055 mm (0,0022\")"
        ]
      },
      {
        "id": "history",
        "title": "Historia de los píxeles",
        "paragraphs": [
          "El concepto de píxel se remonta a la década de 1960, y el término se utilizó por primera vez en el contexto del procesamiento temprano de imágenes digitales. A Frederic Billingsley del JPL se le atribuye a menudo el mérito de haber popularizado la palabra \"píxel\" en 1965. Las primeras pantallas digitales tenían un número de píxeles muy bajo: el Apple II (1977) mostraba 280 × 192 píxeles, mientras que las modernas pantallas 8K representaban más de 33 millones de píxeles.",
          "Hoy en día, la tecnología de píxeles continúa evolucionando con pantallas micro-LED, pantallas plegables y pantallas que superan los 1000 PPI para realidad virtual. auriculares. El píxel sigue siendo el componente fundamental de toda experiencia visual digital. Explore cómo los píxeles se asignan a unidades físicas con nuestro Pixel Converter."
        ]
      }
    ]
  },
  "fr": {
    "faq": [
      {
        "question": "Quelle est la taille d'un pixel ?",
        "answer": "Un pixel n'a pas de taille physique fixe. Sa taille dépend du PPI de l'écran. À 96 PPI, un pixel mesure environ 0,26 mm. À 300 PPI (impression), un pixel équivaut à 0,085 mm. Sur un téléphone à 460 PPI, un pixel ne fait que 0,055 mm."
      },
      {
        "question": "Que sont les sous-pixels ?",
        "answer": "Chaque pixel d'un écran LCD ou OLED est composé de trois sous-pixels : rouge, vert et bleu (RVB). En faisant varier l’intensité de chaque sous-pixel, le pixel peut produire des millions de couleurs différentes. Certains écrans utilisent des dispositions de sous-pixels RGBW (ajout de blanc)."
      },
      {
        "question": "Que signifie mégapixel ?",
        "answer": "Un mégapixel équivaut à un million de pixels. Un capteur d'appareil photo de 12 mégapixels capture des images comportant environ 12 millions de pixels individuels, par exemple 4 000 x 3 000 pixels. Plus de mégapixels permettent des impressions plus grandes et une plus grande flexibilité de recadrage."
      },
      {
        "question": "Les pixels CSS sont-ils identiques aux pixels de l'appareil ?",
        "answer": "Non. Les pixels CSS sont une unité abstraite utilisée dans la conception Web. Sur un écran Retina 2x, un pixel CSS équivaut à quatre pixels de l'appareil (2x2). Cette distinction explique pourquoi les images doivent avoir une résolution de 2x ou 3x pour un rendu net sur les écrans HiDPI."
      }
    ],
    "sections": [
      {
        "id": "pixel-definition",
        "title": "Définition des pixels",
        "paragraphs": [
          "Un pixel (abréviation de « élément d'image ») est la plus petite unité adressable d'une image raster ou d'un affichage numérique. Chaque photo que vous visualisez, chaque icône sur votre écran et chaque image vidéo est composée de milliers ou de millions de pixels individuels disposés dans une grille rectangulaire.",
          "Chaque pixel stocke des informations de couleur, généralement sous la forme d'une combinaison de valeurs de rouge, de vert et de bleu (RVB). Dans une image de 8 bits par canal, chaque canal va de 0 à 255, donnant à chaque pixel la capacité de représenter l'une des plus de 16,7 millions de couleurs."
        ]
      },
      {
        "id": "subpixels",
        "title": "Sous-pixels (RVB)",
        "paragraphs": [
          "Sur les écrans LCD et OLED, chaque pixel visible est en réalité composé de trois sous-pixels : un rouge, un vert et un bleu. Ces sous-pixels sont trop petits pour être vus individuellement à une distance de visualisation normale. En ajustant indépendamment la luminosité de chaque sous-pixel, l’écran crée toute la gamme de couleurs que vous percevez.",
          "Certaines technologies d'affichage utilisent différentes dispositions de sous-pixels. La disposition PenTile de Samsung utilise un motif RGBG, tandis que certains écrans LCD ajoutent un sous-pixel blanc (RGBW) pour améliorer l'efficacité de la luminosité."
        ]
      },
      {
        "id": "megapixels",
        "title": "Mégapixels",
        "paragraphs": [
          "Un mégapixel (MP) équivaut à un million de pixels. Les capteurs de caméra et les fichiers d'images sont classés en mégapixels pour indiquer leur résolution totale. L’appareil photo d’un smartphone de 48 MP capture des images d’environ 8 000 × 6 000 pixels. Plus de mégapixels fournissent plus de détails et permettent des impressions plus grandes ou un recadrage plus agressif."
        ],
        "table": {
          "headers": [
            "Mégapixels",
            "Dimensions typiques",
            "Taille d'impression maximale (300 DPI)"
          ],
          "rows": [
            [
              "2 MP",
              "1600 × 1200",
              "5,3 × 4\""
            ],
            [
              "8 MP",
              "3264 × 2448",
              "10,9 × 8,2\""
            ],
            [
              "12 MP",
              "4000 × 3000",
              "13,3 × 10\""
            ],
            [
              "24 MP",
              "6000 × 4000",
              "20 × 13,3\""
            ],
            [
              "48 MP",
              "8 000 × 6 000",
              "26,7 × 20\""
            ]
          ]
        }
      },
      {
        "id": "pixel-size",
        "title": "Taille des pixels à différents DPI",
        "paragraphs": [
          "Un pixel n’a pas de taille physique inhérente : ses dimensions réelles dépendent de la densité d’affichage ou d’impression. Voici la taille physique d'un pixel aux valeurs DPI/PPI courantes :"
        ],
        "list": [
          "72 PPP : 0,353 mm (0,0139\")",
          "96 PPI : 0,265 mm (0,0104\")",
          "150 PPP : 0,169 mm (0,0067\")",
          "300 PPI : 0,085 mm (0,0033\")",
          "460 PPP : 0,055 mm (0,0022\")"
        ]
      },
      {
        "id": "history",
        "title": "Histoire des pixels",
        "paragraphs": [
          "Le concept de pixel remonte aux années 1960, le terme étant utilisé pour la première fois dans le contexte des premiers traitements d'images numériques. On attribue souvent à Frederic Billingsley du JPL la popularisation du mot « pixel » en 1965. Les premiers écrans numériques avaient un nombre de pixels très faible : l'Apple II (1977) affichait 280 × 192 pixels, tandis que les écrans 8K modernes restituent plus de 33 millions de pixels.",
          "Aujourd'hui, la technologie des pixels continue d'évoluer avec des écrans micro-LED, des écrans pliables et des écrans dépassant 1 000 PPI pour les casques VR. Le pixel reste l’élément fondamental de toute expérience visuelle numérique. Découvrez comment les pixels correspondent aux unités physiques avec notre Pixel Converter."
        ]
      }
    ]
  },
  "de": {
    "faq": [
      {
        "question": "Wie groß ist ein Pixel?",
        "answer": "Ein Pixel hat keine feste physikalische Größe. Seine Größe hängt vom PPI des Displays ab. Bei 96 PPI entspricht ein Pixel etwa 0,26 mm. Bei 300 PPI (Druck) entspricht ein Pixel 0,085 mm. Auf einem 460-PPI-Telefon ist ein Pixel nur 0,055 mm groß."
      },
      {
        "question": "Was sind Subpixel?",
        "answer": "Jedes Pixel auf einem LCD- oder OLED-Bildschirm besteht aus drei Subpixeln: Rot, Grün und Blau (RGB). Durch Variation der Intensität jedes Subpixels kann das Pixel Millionen verschiedener Farben erzeugen. Einige Displays verwenden RGBW-Subpixelanordnungen (Hinzufügen von Weiß)."
      },
      {
        "question": "Was bedeutet Megapixel?",
        "answer": "Ein Megapixel entspricht einer Million Pixel. Ein 12-Megapixel-Kamerasensor erfasst Bilder mit etwa 12 Millionen einzelnen Pixeln, beispielsweise 4000 x 3000 Pixel. Mehr Megapixel ermöglichen größere Ausdrucke und mehr Flexibilität beim Zuschneiden."
      },
      {
        "question": "Sind CSS-Pixel dasselbe wie Gerätepixel?",
        "answer": "Nein. CSS-Pixel sind eine abstrakte Einheit, die im Webdesign verwendet wird. Auf einem 2x-Retina-Display entspricht ein CSS-Pixel vier Gerätepixeln (2x2). Aufgrund dieser Unterscheidung müssen Bilder eine 2- oder 3-fache Auflösung haben, um auf HiDPI-Bildschirmen scharf wiedergegeben zu werden."
      }
    ],
    "sections": [
      {
        "id": "pixel-definition",
        "title": "Pixeldefinition",
        "paragraphs": [
          "Ein Pixel (kurz für „Bildelement“) ist die kleinste adressierbare Einheit eines Rasterbilds oder einer digitalen Anzeige. Jedes Foto, das Sie ansehen, jedes Symbol auf Ihrem Bildschirm und jedes Videobild besteht aus Tausenden oder Millionen einzelner Pixel, die in einem rechteckigen Raster angeordnet sind.",
          "Jedes Pixel speichert Farbinformationen, normalerweise als Kombination aus Rot-, Grün- und Blauwerten (RGB). In einem 8-Bit-pro-Kanal-Bild reicht jeder Kanal von 0 bis 255, wodurch jedes Pixel eine von über 16,7 Millionen Farben darstellen kann."
        ]
      },
      {
        "id": "subpixels",
        "title": "Subpixel (RGB)",
        "paragraphs": [
          "Auf LCD- und OLED-Bildschirmen besteht jedes sichtbare Pixel tatsächlich aus drei Subpixeln: einem roten, einem grünen und einem blauen. Diese Subpixel sind zu klein, um bei normalem Betrachtungsabstand einzeln gesehen zu werden. Durch die unabhängige Anpassung der Helligkeit jedes Subpixels erzeugt das Display die gesamte Farbpalette, die Sie wahrnehmen.",
          "Einige Displaytechnologien verwenden unterschiedliche Subpixelanordnungen. Das PenTile-Layout von Samsung verwendet ein RGBG-Muster, während einige LCDs ein weißes Subpixel (RGBW) hinzufügen, um die Helligkeitseffizienz zu verbessern."
        ]
      },
      {
        "id": "megapixels",
        "title": "Megapixel",
        "paragraphs": [
          "Ein Megapixel (MP) entspricht einer Million Pixel. Kamerasensoren und Bilddateien werden in Megapixeln bewertet, um ihre Gesamtauflösung anzugeben. Eine 48-MP-Smartphone-Kamera nimmt Bilder mit etwa 8000 × 6000 Pixeln auf. Mehr Megapixel sorgen für mehr Details und ermöglichen größere Ausdrucke oder aggressiveres Zuschneiden."
        ],
        "table": {
          "headers": [
            "Megapixel",
            "Typische Abmessungen",
            "Max. Druckgröße (300 DPI)"
          ],
          "rows": [
            [
              "2 MP",
              "1600 × 1200",
              "5,3 × 4\""
            ],
            [
              "8 MP",
              "3264 × 2448",
              "10,9 × 8,2\""
            ],
            [
              "12 MP",
              "4000 × 3000",
              "13,3 × 10\""
            ],
            [
              "24 MP",
              "6000 × 4000",
              "20 × 13,3\""
            ],
            [
              "48 MP",
              "8000 × 6000",
              "26,7 × 20\""
            ]
          ]
        }
      },
      {
        "id": "pixel-size",
        "title": "Pixelgröße bei verschiedenen DPIs",
        "paragraphs": [
          "Ein Pixel hat keine inhärente physikalische Größe – seine realen Abmessungen hängen von der Anzeige- oder Druckdichte ab. Hier ist die physikalische Größe eines Pixels bei üblichen DPI/PPI-Werten:"
        ],
        "list": [
          "72 PPI: 0,353 mm (0,0139\")",
          "96 PPI: 0,265 mm (0,0104\")",
          "150 PPI: 0,169 mm (0,0067\")",
          "300 PPI: 0,085 mm (0,0033\")",
          "460 PPI: 0,055 mm (0,0022\")"
        ]
      },
      {
        "id": "history",
        "title": "Geschichte der Pixel",
        "paragraphs": [
          "Das Konzept eines Pixels reicht bis in die 1960er Jahre zurück, wobei der Begriff erstmals im Zusammenhang mit der frühen digitalen Bildverarbeitung verwendet wurde. Frederic Billingsley vom JPL wird oft zugeschrieben, dass er das Wort „Pixel“ im Jahr 1965 populär gemacht hat. Frühe digitale Displays hatten eine sehr geringe Pixelzahl – der Apple II (1977) zeigte 280 × 192 Pixel an, während moderne 8K-Displays über 33 Millionen Pixel rendern.",
          "Heute entwickelt sich die Pixeltechnologie mit Mikro-LED-Displays, faltbaren Bildschirmen und Displays mit mehr als 1000 PPI für VR weiter Headsets. Der Pixel bleibt der grundlegende Baustein jedes digitalen visuellen Erlebnisses. Entdecken Sie mit unserem Pixelkonverter, wie Pixel physikalischen Einheiten zugeordnet werden."
        ]
      }
    ]
  },
  "pt": {
    "faq": [
      {
        "question": "Qual o tamanho de um pixel?",
        "answer": "Um pixel não tem tamanho físico fixo. Seu tamanho depende do PPI da tela. A 96 PPI, um pixel tem cerca de 0,26 mm. A 300 PPI (impressão), um pixel tem 0,085 mm. Em um telefone de 460 PPI, um pixel tem apenas 0,055 mm."
      },
      {
        "question": "O que são subpixels?",
        "answer": "Cada pixel em uma tela LCD ou OLED é composto por três subpixels: vermelho, verde e azul (RGB). Variando a intensidade de cada subpixel, o pixel pode produzir milhões de cores diferentes. Alguns monitores usam arranjos de subpixels RGBW (adicionando branco)."
      },
      {
        "question": "O que significa megapixel?",
        "answer": "Um megapixel equivale a um milhão de pixels. Um sensor de câmera de 12 megapixels captura imagens com aproximadamente 12 milhões de pixels individuais, como 4.000 x 3.000 pixels. Mais megapixels permitem impressões maiores e mais flexibilidade de corte."
      },
      {
        "question": "Os pixels CSS são iguais aos pixels do dispositivo?",
        "answer": "Não. Pixels CSS são uma unidade abstrata usada em web design. Em uma tela retina 2x, um pixel CSS equivale a quatro pixels do dispositivo (2x2). Essa distinção é a razão pela qual as imagens precisam ter resolução 2x ou 3x para uma renderização nítida em telas HiDPI."
      }
    ],
    "sections": [
      {
        "id": "pixel-definition",
        "title": "Definição de pixels",
        "paragraphs": [
          "Um pixel (abreviação de “elemento de imagem”) é a menor unidade endereçável de uma imagem raster ou display digital. Cada foto que você visualiza, cada ícone na tela e cada quadro de vídeo é composto de milhares ou milhões de pixels individuais organizados em uma grade retangular.",
          "Cada pixel armazena informações de cores, normalmente como uma combinação de valores de vermelho, verde e azul (RGB). Em uma imagem de 8 bits por canal, cada canal varia de 0 a 255, dando a cada pixel a capacidade de representar uma entre mais de 16,7 milhões de cores."
        ]
      },
      {
        "id": "subpixels",
        "title": "Subpixels (RGB)",
        "paragraphs": [
          "Nas telas LCD e OLED, cada pixel visível é, na verdade, composto por três subpixels: um vermelho, um verde e um azul. Esses subpixels são muito pequenos para serem vistos individualmente à distância normal de visualização. Ao ajustar o brilho de cada subpixel de forma independente, a tela cria toda a gama de cores que você percebe.",
          "Algumas tecnologias de exibição usam diferentes arranjos de subpixels. O layout PenTile da Samsung usa um padrão RGBG, enquanto alguns LCDs adicionam um subpixel branco (RGBW) para melhorar a eficiência do brilho."
        ]
      },
      {
        "id": "megapixels",
        "title": "Megapixels",
        "paragraphs": [
          "Um megapixel (MP) equivale a um milhão de pixels. Os sensores da câmera e os arquivos de imagem são classificados em megapixels para indicar sua resolução total. Uma câmera de smartphone de 48 MP captura imagens de aproximadamente 8.000 × 6.000 pixels. Mais megapixels fornecem maiores detalhes e permitem impressões maiores ou cortes mais agressivos."
        ],
        "table": {
          "headers": [
            "Megapixels",
            "Dimensões típicas",
            "Tamanho máximo de impressão (300 DPI)"
          ],
          "rows": [
            [
              "2 deputados",
              "1600 × 1200",
              "5,3 × 4\""
            ],
            [
              "8 MP",
              "3264 × 2448",
              "10,9 × 8,2\""
            ],
            [
              "12 deputados",
              "4.000 × 3.000",
              "13,3 × 10\""
            ],
            [
              "24 deputados",
              "6.000 × 4.000",
              "20 × 13,3\""
            ],
            [
              "48 deputados",
              "8.000 × 6.000",
              "26,7 × 20\""
            ]
          ]
        }
      },
      {
        "id": "pixel-size",
        "title": "Tamanho de pixel em diferentes DPIs",
        "paragraphs": [
          "Um pixel não tem tamanho físico inerente — suas dimensões reais dependem da exibição ou da densidade de impressão. Aqui está o tamanho físico de um pixel em valores comuns de DPI/PPI:"
        ],
        "list": [
          "72 PPI: 0,353 mm (0,0139\")",
          "96 PPI: 0,265 mm (0,0104\")",
          "150 PPI: 0,169 mm (0,0067\")",
          "300 PPI: 0,085 mm (0,0033\")",
          "460 PPI: 0,055 mm (0,0022\")"
        ]
      },
      {
        "id": "history",
        "title": "História dos Pixels",
        "paragraphs": [
          "O conceito de pixel remonta à década de 1960, com o termo usado pela primeira vez no contexto do processamento inicial de imagens digitais. Frederic Billingsley, do JPL, é frequentemente creditado por popularizar a palavra “pixel” em 1965. Os primeiros monitores digitais tinham contagens de pixels muito baixas – o Apple II (1977) exibia 280 × 192 pixels, enquanto os monitores modernos de 8K renderizavam mais de 33 milhões de pixels.",
          "Hoje, a tecnologia de pixel continua a evoluir com telas micro-LED, telas dobráveis ​​e telas que excedem 1.000 PPI para fones de ouvido VR. O pixel continua sendo o alicerce fundamental de toda experiência visual digital. Explore como os pixels são mapeados para unidades físicas com nosso Pixel Converter."
        ]
      }
    ]
  },
  "hi": {
    "faq": [
      {
        "question": "एक पिक्सेल कितना बड़ा होता है?",
        "answer": "एक पिक्सेल का कोई निश्चित भौतिक आकार नहीं होता है। इसका आकार डिस्प्ले के PPI पर निर्भर करता है। 96 पीपीआई पर, एक पिक्सेल लगभग 0.26 मिमी है। 300 पीपीआई (प्रिंट) पर, एक पिक्सेल 0.085 मिमी है। 460 पीपीआई फोन पर, एक पिक्सेल सिर्फ 0.055 मिमी है।"
      },
      {
        "question": "उपपिक्सेल क्या हैं?",
        "answer": "एलसीडी या ओएलईडी स्क्रीन पर प्रत्येक पिक्सेल तीन उपपिक्सेल से बना होता है: लाल, हरा और नीला (आरजीबी)। प्रत्येक उपपिक्सेल की तीव्रता को अलग-अलग करके, पिक्सेल लाखों अलग-अलग रंग उत्पन्न कर सकता है। कुछ डिस्प्ले RGBW (सफ़ेद जोड़कर) उपपिक्सेल व्यवस्था का उपयोग करते हैं।"
      },
      {
        "question": "मेगापिक्सेल का क्या मतलब है?",
        "answer": "एक मेगापिक्सेल एक मिलियन पिक्सेल के बराबर होता है। एक 12-मेगापिक्सेल कैमरा सेंसर लगभग 12 मिलियन व्यक्तिगत पिक्सेल, जैसे 4000 x 3000 पिक्सेल, के साथ छवियां कैप्चर करता है। अधिक मेगापिक्सेल बड़े प्रिंट और अधिक क्रॉपिंग लचीलेपन की अनुमति देता है।"
      },
      {
        "question": "क्या सीएसएस पिक्सल डिवाइस पिक्सल के समान हैं?",
        "answer": "नहीं, सीएसएस पिक्सेल वेब डिज़ाइन में उपयोग की जाने वाली एक अमूर्त इकाई है। 2x रेटिना डिस्प्ले पर, एक CSS पिक्सेल चार डिवाइस पिक्सेल (2x2) के बराबर होता है। यही कारण है कि HiDPI स्क्रीन पर स्पष्ट प्रतिपादन के लिए छवियों को 2x या 3x रिज़ॉल्यूशन की आवश्यकता होती है।"
      }
    ],
    "sections": [
      {
        "id": "pixel-definition",
        "title": "पिक्सेल परिभाषा",
        "paragraphs": [
          "एक पिक्सेल (\"चित्र तत्व\" के लिए संक्षिप्त) एक रेखापुंज छवि या डिजिटल डिस्प्ले की सबसे छोटी पता योग्य इकाई है। आपके द्वारा देखी जाने वाली प्रत्येक तस्वीर, आपकी स्क्रीन पर प्रत्येक आइकन और वीडियो का प्रत्येक फ्रेम एक आयताकार ग्रिड में व्यवस्थित हजारों या लाखों व्यक्तिगत पिक्सेल से बना होता है।",
          "प्रत्येक पिक्सेल रंग की जानकारी संग्रहीत करता है, आमतौर पर लाल, हरे और नीले मानों (आरजीबी) के संयोजन के रूप में। 8-बिट-प्रति-चैनल छवि में, प्रत्येक चैनल 0 से 255 तक होता है, जिससे प्रत्येक पिक्सेल को 16.7 मिलियन से अधिक रंगों में से एक का प्रतिनिधित्व करने की क्षमता मिलती है।"
        ]
      },
      {
        "id": "subpixels",
        "title": "उपपिक्सेल (आरजीबी)",
        "paragraphs": [
          "एलसीडी और ओएलईडी स्क्रीन पर, प्रत्येक दृश्यमान पिक्सेल वास्तव में तीन उपपिक्सेल से बना होता है: एक लाल, एक हरा और एक नीला। ये उपपिक्सेल सामान्य दृश्य दूरी पर व्यक्तिगत रूप से देखने के लिए बहुत छोटे हैं। प्रत्येक उपपिक्सेल की चमक को स्वतंत्र रूप से समायोजित करके, डिस्प्ले आपके द्वारा देखे जाने वाले रंगों की पूरी श्रृंखला बनाता है।",
          "कुछ प्रदर्शन प्रौद्योगिकियाँ विभिन्न उपपिक्सेल व्यवस्थाओं का उपयोग करती हैं। सैमसंग का पेनटाइल लेआउट आरजीबीजी पैटर्न का उपयोग करता है, जबकि कुछ एलसीडी चमक दक्षता में सुधार के लिए एक सफेद उपपिक्सेल (आरजीबीडब्ल्यू) जोड़ते हैं।"
        ]
      },
      {
        "id": "megapixels",
        "title": "मेगापिक्सेल",
        "paragraphs": [
          "एक मेगापिक्सेल (एमपी) एक मिलियन पिक्सेल के बराबर होता है। कैमरा सेंसर और छवि फ़ाइलों को उनके कुल रिज़ॉल्यूशन को इंगित करने के लिए मेगापिक्सेल में रेट किया गया है। एक 48 एमपी स्मार्टफोन कैमरा लगभग 8000 × 6000 पिक्सल की तस्वीरें कैप्चर करता है। अधिक मेगापिक्सेल अधिक विवरण प्रदान करते हैं और बड़े प्रिंट या अधिक आक्रामक क्रॉपिंग की अनुमति देते हैं।"
        ],
        "table": {
          "headers": [
            "मेगापिक्सेल",
            "विशिष्ट आयाम",
            "अधिकतम प्रिंट आकार (300 डीपीआई)"
          ],
          "rows": [
            [
              "2 एमपी",
              "1600×1200",
              "5.3 × 4\""
            ],
            [
              "8 एमपी",
              "3264 × 2448",
              "10.9 × 8.2\""
            ],
            [
              "12 एमपी",
              "4000×3000",
              "13.3 × 10\""
            ],
            [
              "24 एमपी",
              "6000 × 4000",
              "20 × 13.3\""
            ],
            [
              "48 एमपी",
              "8000 × 6000",
              "26.7 × 20\""
            ]
          ]
        }
      },
      {
        "id": "pixel-size",
        "title": "विभिन्न डीपीआई पर पिक्सेल आकार",
        "paragraphs": [
          "एक पिक्सेल का कोई अंतर्निहित भौतिक आकार नहीं होता है - इसका वास्तविक दुनिया का आयाम डिस्प्ले या प्रिंट घनत्व पर निर्भर करता है। यहां सामान्य DPI/PPI मानों पर एक पिक्सेल का भौतिक आकार दिया गया है:"
        ],
        "list": [
          "72 पीपीआई: 0.353 मिमी (0.0139\")",
          "96 पीपीआई: 0.265 मिमी (0.0104\")",
          "150 पीपीआई: 0.169 मिमी (0.0067\")",
          "300 पीपीआई: 0.085 मिमी (0.0033\")",
          "460 पीपीआई: 0.055 मिमी (0.0022\")"
        ]
      },
      {
        "id": "history",
        "title": "पिक्सेल का इतिहास",
        "paragraphs": [
          "पिक्सेल की अवधारणा 1960 के दशक की है, इस शब्द का पहली बार उपयोग प्रारंभिक डिजिटल छवि प्रसंस्करण के संदर्भ में किया गया था। जेपीएल के फ्रेडरिक बिलिंग्सले को अक्सर 1965 में \"पिक्सेल\" शब्द को लोकप्रिय बनाने का श्रेय दिया जाता है। शुरुआती डिजिटल डिस्प्ले में पिक्सेल की संख्या बहुत कम थी - Apple II (1977) में 280 × 192 पिक्सेल प्रदर्शित होते थे, जबकि आधुनिक 8K डिस्प्ले 33 मिलियन से अधिक पिक्सेल प्रदर्शित करते थे।",
          "आज, पिक्सेल तकनीक माइक्रो-एलईडी डिस्प्ले, फोल्डेबल स्क्रीन और वीआर हेडसेट के लिए 1000 पीपीआई से अधिक डिस्प्ले के साथ विकसित हो रही है। पिक्सेल प्रत्येक डिजिटल दृश्य अनुभव का मूलभूत निर्माण खंड बना हुआ है। जानें कि हमारे पिक्सेल कनवर्टर के साथ पिक्सेल भौतिक इकाइयों में कैसे मैप होते हैं।"
        ]
      }
    ]
  },
  "ja": {
    "faq": [
      {
        "question": "ピクセルの大きさはどれくらいですか?",
        "answer": "ピクセルには固定の物理サイズがありません。そのサイズはディスプレイの PPI によって異なります。 96 PPI では、1 ピクセルは約 0.26 mm です。 300 PPI (印刷) では、1 ピクセルは 0.085mm です。 460 PPI スマートフォンでは、1 ピクセルはわずか 0.055 mm です。"
      },
      {
        "question": "サブピクセルとは何ですか?",
        "answer": "LCD または OLED 画面上の各ピクセルは、赤、緑、青 (RGB) の 3 つのサブピクセルで構成されます。各サブピクセルの強度を変えることにより、ピクセルは何百万もの異なる色を生成できます。一部のディスプレイでは、RGBW (白を追加) のサブピクセル配置が使用されています。"
      },
      {
        "question": "メガピクセルとは何ですか?",
        "answer": "1 メガピクセルは 100 万ピクセルに相当します。 12 メガピクセルのカメラ センサーは、4000 x 3000 ピクセルなど、約 1200 万個の個別ピクセルで画像をキャプチャします。メガピクセルが増えると、より大きな印刷が可能になり、トリミングの柔軟性が高まります。"
      },
      {
        "question": "CSS ピクセルはデバイスのピクセルと同じですか?",
        "answer": "いいえ。 CSS ピクセルは、Web デザインで使用される抽象的な単位です。 2x Retina ディスプレイでは、1 つの CSS ピクセルは 4 つのデバイス ピクセル (2x2) に相当します。この違いが、HiDPI 画面で鮮明なレンダリングを行うために画像の解像度が 2 倍または 3 倍である必要がある理由です。"
      }
    ],
    "sections": [
      {
        "id": "pixel-definition",
        "title": "ピクセル定義",
        "paragraphs": [
          "ピクセル (「画素」の略) は、ラスター イメージまたはデジタル ディスプレイのアドレス指定可能な最小単位です。表示するすべての写真、画面上のすべてのアイコン、およびビデオのすべてのフレームは、長方形のグリッドに配置された数千または数百万の個別のピクセルで構成されています。",
          "各ピクセルには、通常、赤、緑、青の値 (RGB) の組み合わせとして色情報が格納されます。チャネルあたり 8 ビットのイメージでは、各チャネルの範囲は 0 ～ 255 で、各ピクセルは 1,670 万色以上のいずれかを表現できます。"
        ]
      },
      {
        "id": "subpixels",
        "title": "サブピクセル (RGB)",
        "paragraphs": [
          "LCD および OLED 画面では、目に見える各ピクセルは実際には 3 つのサブピクセル (赤、緑、青の 1 つ) で構成されます。これらのサブピクセルは小さすぎるため、通常の観察距離では個別に見ることができません。各サブピクセルの明るさを個別に調整することにより、ディスプレイはユーザーが認識するあらゆる色を作成します。",
          "一部のディスプレイ テクノロジでは、異なるサブピクセル配置が使用されます。 Samsung の PenTile レイアウトは RGBG パターンを使用しますが、一部の LCD は輝度効率を向上させるために白色サブピクセル (RGBW) を追加します。"
        ]
      },
      {
        "id": "megapixels",
        "title": "メガピクセル",
        "paragraphs": [
          "1 メガピクセル (MP) は 100 万ピクセルに相当します。カメラ センサーと画像ファイルは、総解像度を示すためにメガピクセルで評価されます。 48 MP スマートフォンのカメラは、約 8000 × 6000 ピクセルの画像をキャプチャします。メガピクセルが多いほど詳細が表示され、より大きな印刷やより積極的なトリミングが可能になります。"
        ],
        "table": {
          "headers": [
            "メガピクセル",
            "一般的な寸法",
            "最大印刷サイズ (300 DPI)"
          ],
          "rows": [
            [
              "2 MP",
              "1600 × 1200",
              "5.3 × 4\""
            ],
            [
              "8 MP",
              "3264 × 2448",
              "10.9 × 8.2\""
            ],
            [
              "12 MP",
              "4000 × 3000",
              "13.3 × 10\""
            ],
            [
              "24 MP",
              "6000 × 4000",
              "20 × 13.3 インチ"
            ],
            [
              "48 MP",
              "8000 × 6000",
              "26.7 × 20 インチ"
            ]
          ]
        }
      },
      {
        "id": "pixel-size",
        "title": "さまざまな DPI でのピクセル サイズ",
        "paragraphs": [
          "ピクセルには固有の物理サイズはありません。実際のサイズはディスプレイまたは印刷密度によって異なります。物理サイズは次のとおりです。一般的な DPI/PPI 値での 1 ピクセルの解像度:"
        ],
        "list": [
          "72 PPI: 0.353 mm (0.0139\")",
          "96 PPI: 0.265 mm (0.0104\")",
          "150 PPI: 0.169 mm (0.0067\")",
          "300 PPI: 0.085 mm (0.0033\")",
          "460 PPI: 0.055 mm (0.0022\")"
        ]
      },
      {
        "id": "history",
        "title": "ピクセルの歴史",
        "paragraphs": [
          "ピクセルの概念は 1960 年代に遡り、この用語が最初に使用されたのは初期のデジタル画像処理の文脈でした。 JPL のフレデリック ビリングスリーは、1965 年に「ピクセル」という言葉を普及させた人物としてよく知られています。初期のデジタル ディスプレイのピクセル数は非常に低く、Apple II (1977) は 280 × 192 ピクセルを表示しましたが、最新の 8K ディスプレイは 3,300 万ピクセル以上をレンダリングします。",
          "今日、ピクセル テクノロジーは、マイクロ LED ディスプレイ、折りたたみ式スクリーン、VR ヘッドセット用の 1000 PPI を超えるディスプレイなど進化し続けています。ピクセルは、あらゆるデジタル視覚体験の基本的な構成要素であり続けます。ピクセル コンバーターを使用して、ピクセルが物理単位にどのようにマッピングされるかを調べてください。"
        ]
      }
    ]
  },
  "ko": {
    "faq": [
      {
        "question": "픽셀은 얼마나 큽니까?",
        "answer": "픽셀에는 고정된 물리적 크기가 없습니다. 크기는 디스플레이의 PPI에 따라 다릅니다. 96PPI에서는 1픽셀이 약 0.26mm입니다. 300PPI(인쇄)에서 1픽셀은 0.085mm입니다. 460 PPI 휴대폰에서 하나의 픽셀은 0.055mm에 불과합니다."
      },
      {
        "question": "하위 픽셀이란 무엇입니까?",
        "answer": "LCD 또는 OLED 화면의 각 픽셀은 빨간색, 녹색, 파란색(RGB)의 세 가지 하위 픽셀로 구성됩니다. 각 하위 픽셀의 강도를 변경하여 픽셀은 수백만 가지의 다양한 색상을 생성할 수 있습니다. 일부 디스플레이는 RGBW(흰색 추가) 하위 픽셀 배열을 사용합니다."
      },
      {
        "question": "메가픽셀이란 무엇을 의미합니까?",
        "answer": "1메가픽셀은 1백만 픽셀과 같습니다. 1200만 화소 카메라 센서는 4000 x 3000 픽셀 등 약 1200만 개의 개별 픽셀로 이미지를 캡처합니다. 메가픽셀이 많을수록 인쇄 크기가 커지고 자르기 유연성이 향상됩니다."
      },
      {
        "question": "CSS 픽셀은 장치 픽셀과 동일합니까?",
        "answer": "아니요. CSS 픽셀은 웹 디자인에 사용되는 추상 단위입니다. 2x 레티나 디스플레이에서 CSS 픽셀 1개는 장치 픽셀 4개(2x2)와 같습니다. 이러한 차이 때문에 HiDPI 화면에서 선명한 렌더링을 위해 이미지의 해상도가 2배 또는 3배가 되어야 합니다."
      }
    ],
    "sections": [
      {
        "id": "pixel-definition",
        "title": "픽셀 정의",
        "paragraphs": [
          "픽셀(\"그림 요소\"의 약어)은 래스터 이미지 또는 디지털 디스플레이에서 주소를 지정할 수 있는 가장 작은 단위입니다. 여러분이 보는 모든 사진, 화면의 모든 아이콘, 비디오의 모든 프레임은 직사각형 격자에 배열된 수천 또는 수백만 개의 개별 픽셀로 구성됩니다.",
          "각 픽셀은 일반적으로 빨간색, 녹색, 파란색 값(RGB)의 조합으로 색상 정보를 저장합니다. 채널당 8비트 이미지에서 각 채널의 범위는 0부터 255까지이며 각 픽셀은 1,670만 개 이상의 색상 중 하나를 표현할 수 있습니다."
        ]
      },
      {
        "id": "subpixels",
        "title": "하위 픽셀(RGB)",
        "paragraphs": [
          "LCD 및 OLED 화면에서 표시되는 각 픽셀은 실제로 빨간색 1개, 녹색 1개, 파란색 1개의 세 가지 하위 픽셀로 구성됩니다. 이러한 하위 픽셀은 너무 작아서 일반 시청 거리에서 개별적으로 볼 수 없습니다. 디스플레이는 각 하위 픽셀의 밝기를 독립적으로 조정하여 사용자가 인식하는 전체 색상 범위를 생성합니다.",
          "일부 디스플레이 기술은 서로 다른 하위 픽셀 배열을 사용합니다. 삼성의 PenTile 레이아웃은 RGBG 패턴을 사용하는 반면 일부 LCD는 밝기 효율성을 높이기 위해 흰색 하위 픽셀(RGBW)을 추가합니다."
        ]
      },
      {
        "id": "megapixels",
        "title": "메가픽셀",
        "paragraphs": [
          "1메가픽셀(MP)은 100만 픽셀과 같습니다. 카메라 센서와 이미지 파일은 총 해상도를 나타내기 위해 메가픽셀 단위로 평가됩니다. 48 MP 스마트폰 카메라는 대략 8000 × 6000 픽셀의 이미지를 캡처합니다. 메가픽셀이 많을수록 더 큰 세부 묘사가 가능하고 더 큰 인쇄나 더 공격적인 자르기가 가능합니다."
        ],
        "table": {
          "headers": [
            "메가픽셀",
            "일반 치수",
            "최대 인쇄 크기(300 DPI)"
          ],
          "rows": [
            [
              "2MP",
              "1600 × 1200",
              "5.3 × 4\""
            ],
            [
              "8 MP",
              "3264 × 2448",
              "10.9 × 8.2\""
            ],
            [
              "12 MP",
              "4000 × 3000",
              "13.3 × 10\""
            ],
            [
              "24 MP",
              "6000 × 4000",
              "20 × 13.3\""
            ],
            [
              "48 MP",
              "8000 × 6000",
              "26.7 × 20\""
            ]
          ]
        }
      },
      {
        "id": "pixel-size",
        "title": "다양한 DPI의 픽셀 크기",
        "paragraphs": [
          "픽셀에는 고유한 물리적 크기가 없습니다. 실제 크기는 디스플레이 또는 인쇄 밀도에 따라 다릅니다. 일반적인 DPI/PPI 값에서 1픽셀 크기:"
        ],
        "list": [
          "72 PPI: 0.353mm(0.0139\")",
          "96 PPI: 0.265mm(0.0104\")",
          "150PPI: 0.169mm(0.0067\")",
          "300PPI: 0.085mm(0.0033\")",
          "460PPI: 0.055mm(0.0022\")"
        ]
      },
      {
        "id": "history",
        "title": "픽셀의 역사",
        "paragraphs": [
          "픽셀의 개념은 1960년대로 거슬러 올라가며, 이 용어는 초기 디지털 이미지 처리 맥락에서 처음 사용되었습니다. JPL의 Frederic Billingsley는 1965년에 \"픽셀\"이라는 단어를 대중화한 공로를 인정 받았습니다. 초기 디지털 디스플레이는 픽셀 수가 매우 적었습니다. Apple II(1977)는 280 × 192 픽셀을 표시한 반면 최신 8K 디스플레이는 3,300만 픽셀 이상을 렌더링합니다.",
          "오늘날 픽셀 기술은 마이크로 LED 디스플레이, 폴더블 스크린, VR용 1000 PPI를 초과하는 디스플레이로 계속 발전하고 있습니다. 헤드셋. 픽셀은 모든 디지털 시각적 경험의 기본 구성 요소로 남아 있습니다. 픽셀 변환기를 사용하여 픽셀이 물리적 단위에 어떻게 매핑되는지 알아보세요."
        ]
      }
    ]
  },
  "it": {
    "faq": [
      {
        "question": "Quanto è grande un pixel?",
        "answer": "Un pixel non ha una dimensione fisica fissa. La sua dimensione dipende dal PPI del display. A 96 PPI, un pixel equivale a circa 0,26 mm. A 300 PPI (stampa), un pixel equivale a 0,085 mm. Su un telefono con 460 PPI, un pixel misura solo 0,055 mm."
      },
      {
        "question": "Cosa sono i subpixel?",
        "answer": "Ogni pixel su uno schermo LCD o OLED è composto da tre subpixel: rosso, verde e blu (RGB). Variando l'intensità di ciascun subpixel, il pixel può produrre milioni di colori diversi. Alcuni display utilizzano la disposizione dei subpixel RGBW (aggiunta del bianco)."
      },
      {
        "question": "Cosa significa megapixel?",
        "answer": "Un megapixel equivale a un milione di pixel. Un sensore della fotocamera da 12 megapixel cattura immagini con circa 12 milioni di pixel singoli, ad esempio 4000 x 3000 pixel. Un numero maggiore di megapixel consente stampe più grandi e una maggiore flessibilità di ritaglio."
      },
      {
        "question": "I pixel CSS sono uguali ai pixel del dispositivo?",
        "answer": "No. I pixel CSS sono un'unità astratta utilizzata nel web design. Su un display Retina 2x, un pixel CSS equivale a quattro pixel del dispositivo (2x2). Questa distinzione è il motivo per cui le immagini devono avere una risoluzione 2x o 3x per un rendering nitido sugli schermi HiDPI."
      }
    ],
    "sections": [
      {
        "id": "pixel-definition",
        "title": "Definizione dei pixel",
        "paragraphs": [
          "Un pixel (abbreviazione di \"elemento immagine\") è la più piccola unità indirizzabile di un'immagine raster o di un display digitale. Ogni foto che visualizzi, ogni icona sullo schermo e ogni fotogramma di video è composto da migliaia o milioni di singoli pixel disposti in una griglia rettangolare.",
          "Ogni pixel memorizza informazioni sul colore, in genere come una combinazione di valori rosso, verde e blu (RGB). In un'immagine a 8 bit per canale, ciascun canale varia da 0 a 255, dando a ciascun pixel la capacità di rappresentare uno degli oltre 16,7 milioni di colori."
        ]
      },
      {
        "id": "subpixels",
        "title": "Subpixel (RGB)",
        "paragraphs": [
          "Sugli schermi LCD e OLED, ciascun pixel visibile è in realtà composto da tre subpixel: uno rosso, uno verde e uno blu. Questi subpixel sono troppo piccoli per essere visti individualmente alla normale distanza di visione. Regolando la luminosità di ciascun subpixel in modo indipendente, il display crea l'intera gamma di colori percepiti.",
          "Alcune tecnologie di visualizzazione utilizzano diverse disposizioni dei subpixel. Il layout PenTile di Samsung utilizza un modello RGBG, mentre alcuni LCD aggiungono un subpixel bianco (RGBW) per migliorare l'efficienza della luminosità."
        ]
      },
      {
        "id": "megapixels",
        "title": "Megapixel",
        "paragraphs": [
          "Un megapixel (MP) equivale a un milione di pixel. I sensori della fotocamera e i file di immagine sono classificati in megapixel per indicare la loro risoluzione totale. La fotocamera dello smartphone da 48 MP cattura immagini di circa 8000 × 6000 pixel. Un numero maggiore di megapixel fornisce maggiori dettagli e consente stampe più grandi o ritagli più aggressivi."
        ],
        "table": {
          "headers": [
            "Megapixel",
            "Dimensioni tipiche",
            "Dimensione massima di stampa (300 DPI)"
          ],
          "rows": [
            [
              "2 MP",
              "1600 × 1200",
              "5,3 × 4\""
            ],
            [
              "8 MP",
              "3264 × 2448",
              "10,9 × 8,2\""
            ],
            [
              "12 MP",
              "4000 × 3000",
              "13,3 × 10\""
            ],
            [
              "24 MP",
              "6000 × 4000",
              "20 × 13,3\""
            ],
            [
              "48 MP",
              "8000 × 6000",
              "26,7 × 20\""
            ]
          ]
        }
      },
      {
        "id": "pixel-size",
        "title": "Dimensioni pixel a diversi DPI",
        "paragraphs": [
          "Un pixel non ha dimensioni fisiche intrinseche: le sue dimensioni reali dipendono dal display o dalla densità di stampa. Ecco le dimensioni fisiche di un pixel ai valori DPI/PPI comuni:"
        ],
        "list": [
          "72 PPI: 0,353 mm (0,0139\")",
          "96 PPI: 0,265 mm (0,0104\")",
          "150 PPI: 0,169 mm (0,0067\")",
          "300 PPI: 0,085 mm (0,0033\")",
          "460 PPI: 0,055 mm (0,0022\")"
        ]
      },
      {
        "id": "history",
        "title": "Storia dei pixel",
        "paragraphs": [
          "Il concetto di pixel risale agli anni '60, con il termine utilizzato per la prima volta nel contesto della prima elaborazione delle immagini digitali. A Frederic Billingsley di JPL viene spesso attribuito il merito di aver reso popolare la parola \"pixel\" nel 1965. I primi display digitali avevano un numero di pixel molto basso: l'Apple II (1977) visualizzava 280 × 192 pixel, mentre i moderni display 8K riproducono oltre 33 milioni di pixel.",
          "Oggi, la tecnologia dei pixel continua ad evolversi con display micro-LED, schermi pieghevoli e display che superano i 1000 PPI per la realtà virtuale. cuffie. Il pixel resta l’elemento fondamentale di ogni esperienza visiva digitale. Scopri come i pixel vengono mappati in unità fisiche con il nostro Pixel Converter."
        ]
      }
    ]
  },
  "nl": {
    "faq": [
      {
        "question": "Hoe groot is een pixel?",
        "answer": "Een pixel heeft geen vaste fysieke grootte. De grootte is afhankelijk van de PPI van het beeldscherm. Bij 96 PPI is één pixel ongeveer 0,26 mm. Bij 300 PPI (afdruk) is één pixel 0,085 mm. Op een telefoon met 460 PPI is één pixel slechts 0,055 mm."
      },
      {
        "question": "Wat zijn subpixels?",
        "answer": "Elke pixel op een LCD- of OLED-scherm bestaat uit drie subpixels: rood, groen en blauw (RGB). Door de intensiteit van elke subpixel te variëren, kan de pixel miljoenen verschillende kleuren produceren. Sommige beeldschermen gebruiken RGBW-subpixelarrangementen (met toevoeging van wit)."
      },
      {
        "question": "Wat betekent megapixel?",
        "answer": "Eén megapixel is gelijk aan één miljoen pixels. Een camerasensor van 12 megapixels legt beelden vast met ongeveer 12 miljoen individuele pixels, bijvoorbeeld 4000 x 3000 pixels. Meer megapixels zorgen voor grotere afdrukken en meer flexibiliteit bij het bijsnijden."
      },
      {
        "question": "Zijn CSS-pixels hetzelfde als apparaatpixels?",
        "answer": "Nee. CSS-pixels zijn een abstracte eenheid die wordt gebruikt in webdesign. Op een 2x retinadisplay is één CSS-pixel gelijk aan vier apparaatpixels (2x2). Dit onderscheid is de reden waarom afbeeldingen een resolutie van 2x of 3x moeten hebben voor scherpe weergave op HiDPI-schermen."
      }
    ],
    "sections": [
      {
        "id": "pixel-definition",
        "title": "Pixeldefinitie",
        "paragraphs": [
          "Een pixel (afkorting van “picture element”) is de kleinste adresseerbare eenheid van een rasterafbeelding of digitaal display. Elke foto die je bekijkt, elk pictogram op je scherm en elk videoframe bestaat uit duizenden of miljoenen individuele pixels, gerangschikt in een rechthoekig raster.",
          "Elke pixel slaat kleurinformatie op, meestal als een combinatie van rode, groene en blauwe waarden (RGB). In een afbeelding met 8 bits per kanaal varieert elk kanaal van 0 tot 255, waardoor elke pixel een van de meer dan 16,7 miljoen kleuren kan vertegenwoordigen."
        ]
      },
      {
        "id": "subpixels",
        "title": "Subpixels (RGB)",
        "paragraphs": [
          "Op LCD- en OLED-schermen bestaat elke zichtbare pixel feitelijk uit drie subpixels: een rode, een groene en een blauwe. Deze subpixels zijn te klein om op normale kijkafstand afzonderlijk te kunnen zien. Door de helderheid van elke subpixel afzonderlijk aan te passen, creëert het scherm het volledige kleurenbereik dat u waarneemt.",
          "Sommige weergavetechnologieën gebruiken verschillende subpixelarrangementen. De PenTile-indeling van Samsung gebruikt een RGBG-patroon, terwijl sommige LCD's een witte subpixel (RGBW) toevoegen om de helderheidsefficiëntie te verbeteren."
        ]
      },
      {
        "id": "megapixels",
        "title": "Megapixels",
        "paragraphs": [
          "Eén megapixel (MP) is gelijk aan één miljoen pixels. Camerasensoren en beeldbestanden worden geclassificeerd in megapixels om hun totale resolutie aan te geven. Een smartphonecamera van 48 MP legt beelden vast van ongeveer 8000 × 6000 pixels. Meer megapixels zorgen voor meer details en maken grotere afdrukken of agressievere bijsnijdingen mogelijk."
        ],
        "table": {
          "headers": [
            "Megapixels",
            "Typische afmetingen",
            "Max. afdrukformaat (300 DPI)"
          ],
          "rows": [
            [
              "2 MP",
              "1600 × 1200",
              "5,3 × 4\""
            ],
            [
              "8 MP",
              "3264 × 2448",
              "10,9 × 8,2\""
            ],
            [
              "12 MP",
              "4000 × 3000",
              "13,3 × 10\""
            ],
            [
              "24 MP",
              "6000 × 4000",
              "20 × 13,3\""
            ],
            [
              "48 MP",
              "8000 × 6000",
              "26,7 × 20\""
            ]
          ]
        }
      },
      {
        "id": "pixel-size",
        "title": "Pixelgrootte bij verschillende DPI's",
        "paragraphs": [
          "Een pixel heeft geen inherente fysieke grootte; de werkelijke afmetingen zijn afhankelijk van de weergave- of afdrukdichtheid. Hier is de fysieke grootte grootte van één pixel bij gebruikelijke DPI/PPI-waarden:"
        ],
        "list": [
          "72 PPI: 0,353 mm (0,0139\")",
          "96 PPI: 0,265 mm (0,0104\")",
          "150 PPI: 0,169 mm (0,0067\")",
          "300 PPI: 0,085 mm (0,0033\")",
          "460 PPI: 0,055 mm (0,0022\")"
        ]
      },
      {
        "id": "history",
        "title": "Geschiedenis van pixels",
        "paragraphs": [
          "Het concept van een pixel dateert uit de jaren zestig, waarbij de term voor het eerst werd gebruikt in de context van vroege digitale beeldverwerking. Frederic Billingsley van JPL wordt vaak gecrediteerd voor het populariseren van het woord 'pixel' in 1965. Vroege digitale beeldschermen hadden een zeer laag aantal pixels: de Apple II (1977) gaf 280 x 192 pixels weer, terwijl moderne 8K-beeldschermen meer dan 33 miljoen pixels weergeven.",
          "Tegenwoordig blijft de pixeltechnologie evolueren met micro-LED-beeldschermen, opvouwbare schermen en beeldschermen van meer dan 1000 PPI voor VR-headsets. De pixel blijft de fundamentele bouwsteen van elke digitale visuele ervaring. Ontdek hoe pixels worden omgezet in fysieke eenheden met onze Pixel Converter."
        ]
      }
    ]
  },
  "ar": {
    "faq": [
      {
        "question": "ما هو حجم البكسل؟",
        "answer": "البكسل ليس له حجم مادي ثابت. يعتمد حجمه على مؤشر أسعار المنتجين (PPI) الخاص بالشاشة. عند 96 نقطة في البوصة، يبلغ حجم البكسل الواحد حوالي 0.26 ملم. عند 300 نقطة في البوصة (طباعة)، يكون البكسل الواحد 0.085 مم. على هاتف يحتوي على 460 نقطة في البوصة، يبلغ حجم البكسل الواحد 0.055 ملم فقط."
      },
      {
        "question": "ما هي البكسلات الفرعية؟",
        "answer": "يتكون كل بكسل على شاشة LCD أو OLED من ثلاث وحدات بكسل فرعية: الأحمر والأخضر والأزرق (RGB). من خلال تغيير شدة كل بكسل فرعي، يمكن للبكسل إنتاج ملايين الألوان المختلفة. تستخدم بعض شاشات العرض ترتيبات البكسل الفرعي RGBW (إضافة اللون الأبيض)."
      },
      {
        "question": "ماذا يعني ميجابيكسل؟",
        "answer": "واحد ميغابيكسل يساوي مليون بكسل. يلتقط مستشعر الكاميرا بدقة 12 ميجابكسل صورًا تحتوي على ما يقرب من 12 مليون بكسل فردي، مثل 4000 × 3000 بكسل. تتيح المزيد من وحدات الميجابكسل الحصول على مطبوعات أكبر ومرونة أكبر في الاقتصاص."
      },
      {
        "question": "هل بكسلات CSS هي نفس بكسلات الجهاز؟",
        "answer": "لا، بكسلات CSS هي وحدة مجردة تستخدم في تصميم الويب. على شاشة شبكية العين 2x، بكسل CSS واحد يساوي أربعة بكسلات للجهاز (2x2). هذا التمييز هو سبب ضرورة أن تكون الصور بدقة 2x أو 3x للعرض الواضح على شاشات HiDPI."
      }
    ],
    "sections": [
      {
        "id": "pixel-definition",
        "title": "تعريف البكسل",
        "paragraphs": [
          "البكسل (اختصار لـ \"عنصر الصورة\") هو أصغر وحدة قابلة للعنونة في الصورة النقطية أو العرض الرقمي. تتكون كل صورة تشاهدها وكل أيقونة على شاشتك وكل إطار فيديو من آلاف أو ملايين وحدات البكسل الفردية مرتبة في شبكة مستطيلة.",
          "يقوم كل بكسل بتخزين معلومات الألوان، عادةً كمجموعة من قيم الأحمر والأخضر والأزرق (RGB). في صورة 8 بت لكل قناة، تتراوح كل قناة من 0 إلى 255، مما يمنح كل بكسل القدرة على تمثيل واحد من أكثر من 16.7 مليون لون."
        ]
      },
      {
        "id": "subpixels",
        "title": "وحدات البكسل الفرعية (RGB)",
        "paragraphs": [
          "على شاشات LCD وOLED، يتكون كل بكسل مرئي في الواقع من ثلاث وحدات بكسل فرعية: واحدة حمراء، وواحدة خضراء، وواحدة زرقاء. وحدات البكسل الفرعية هذه صغيرة جدًا بحيث لا يمكن رؤيتها بشكل فردي على مسافة المشاهدة العادية. من خلال ضبط سطوع كل بكسل فرعي بشكل مستقل، تقوم الشاشة بإنشاء مجموعة كاملة من الألوان التي تراها.",
          "تستخدم بعض تقنيات العرض ترتيبات مختلفة للبكسل الفرعي. يستخدم تخطيط PenTile من سامسونج نمط RGBG، بينما تضيف بعض شاشات LCD بكسلًا فرعيًا أبيض (RGBW) لتحسين كفاءة السطوع."
        ]
      },
      {
        "id": "megapixels",
        "title": "ميغا بكسل",
        "paragraphs": [
          "واحد ميجابكسل (MP) يساوي مليون بكسل. يتم تصنيف مستشعرات الكاميرا وملفات الصور بالميجابكسل للإشارة إلى دقتها الإجمالية. تلتقط كاميرا الهاتف الذكي بدقة 48 ميجابكسل صورًا بدقة 8000 × 6000 بكسل تقريبًا. توفر المزيد من وحدات الميجابكسل تفاصيل أكبر وتسمح بطباعة أكبر أو اقتصاص أكثر قوة."
        ],
        "table": {
          "headers": [
            "ميغا بكسل",
            "الأبعاد النموذجية",
            "الحد الأقصى لحجم الطباعة (300 نقطة لكل بوصة)"
          ],
          "rows": [
            [
              "2 ميجابكسل",
              "1600 × 1200",
              "5.3 × 4\""
            ],
            [
              "8 ميجابكسل",
              "3264 × 2448",
              "10.9 × 8.2 بوصة"
            ],
            [
              "12 ميجابكسل",
              "4000 × 3000",
              "13.3 × 10 بوصة"
            ],
            [
              "24 ميجابكسل",
              "6000 × 4000",
              "20 × 13.3\""
            ],
            [
              "48 ميجابكسل",
              "8000 × 6000",
              "26.7 × 20\""
            ]
          ]
        }
      },
      {
        "id": "pixel-size",
        "title": "حجم البكسل عند DPIs مختلفة",
        "paragraphs": [
          "لا يمتلك البكسل حجمًا ماديًا متأصلًا، إذ تعتمد أبعاده الحقيقية على الشاشة أو كثافة الطباعة. فيما يلي الحجم الفعلي لبيكسل واحد بقيم DPI/PPI الشائعة:"
        ],
        "list": [
          "72 نقطة في البوصة: 0.353 ملم (0.0139 بوصة)",
          "96 نقطة في البوصة: 0.265 ملم (0.0104 بوصة)",
          "150 نقطة في البوصة: 0.169 ملم (0.0067 بوصة)",
          "300 نقطة في البوصة: 0.085 ملم (0.0033 بوصة)",
          "460 نقطة في البوصة: 0.055 ملم (0.0022 بوصة)"
        ]
      },
      {
        "id": "history",
        "title": "تاريخ البكسل",
        "paragraphs": [
          "يعود مفهوم البكسل إلى الستينيات، حيث استخدم المصطلح لأول مرة في سياق معالجة الصور الرقمية المبكرة. غالبًا ما يُنسب الفضل إلى فريدريك بيلينجسلي من مختبر الدفع النفاث في الترويج لكلمة \"بكسل\" في عام 1965. كانت شاشات العرض الرقمية المبكرة تحتوي على عدد بكسلات منخفض جدًا - عرض Apple II (1977) 280 × 192 بكسل، بينما عرضت شاشات 8K الحديثة أكثر من 33 مليون بكسل.",
          "واليوم، تستمر تقنية البكسل في التطور مع شاشات Micro-LED، والشاشات القابلة للطي، وشاشات العرض التي تتجاوز 1000 نقطة في البوصة لسماعات الواقع الافتراضي. يظل البكسل هو لبنة البناء الأساسية لكل تجربة بصرية رقمية. اكتشف كيفية تعيين وحدات البكسل للوحدات المادية باستخدام محول البكسل الخاص بنا."
        ]
      }
    ]
  },
  "tr": {
    "faq": [
      {
        "question": "Bir piksel ne kadar büyük?",
        "answer": "Bir pikselin sabit bir fiziksel boyutu yoktur. Boyutu ekranın ÜFE'sine bağlıdır. 96 PPI'da bir piksel yaklaşık 0,26 mm'dir. 300 PPI'de (baskı), bir piksel 0,085 mm'dir. 460 PPI telefonda bir piksel yalnızca 0,055 mm'dir."
      },
      {
        "question": "Alt piksel nedir?",
        "answer": "LCD veya OLED ekrandaki her piksel üç alt pikselden oluşur: kırmızı, yeşil ve mavi (RGB). Her bir alt pikselin yoğunluğunu değiştirerek piksel milyonlarca farklı renk üretebilir. Bazı ekranlar RGBW (beyaz ekleme) alt piksel düzenlemelerini kullanır."
      },
      {
        "question": "Megapiksel ne anlama gelir?",
        "answer": "Bir megapiksel bir milyon piksele eşittir. 12 megapiksel kamera sensörü, 4000 x 3000 piksel gibi yaklaşık 12 milyon ayrı piksele sahip görüntüler yakalar. Daha fazla megapiksel, daha büyük baskılara ve daha fazla kırpma esnekliğine olanak tanır."
      },
      {
        "question": "CSS pikselleri cihaz pikselleriyle aynı mıdır?",
        "answer": "Hayır. CSS pikselleri web tasarımında kullanılan soyut bir birimdir. 2x retina ekranda, bir CSS pikseli dört cihaz pikseline (2x2) eşittir. Bu ayrım, HiDPI ekranlarda keskin görüntü oluşturmak için görüntülerin 2x veya 3x çözünürlükte olmasının gerekli olmasının nedenidir."
      }
    ],
    "sections": [
      {
        "id": "pixel-definition",
        "title": "Piksel Tanımı",
        "paragraphs": [
          "Bir piksel (\"resim öğesi\"nin kısaltması), bir raster görüntünün veya dijital ekranın adreslenebilir en küçük birimidir. Görüntülediğiniz her fotoğraf, ekranınızdaki her simge ve videonun her karesi, dikdörtgen bir ızgarada düzenlenmiş binlerce veya milyonlarca ayrı pikselden oluşur.",
          "Her piksel, genellikle kırmızı, yeşil ve mavi değerlerin (RGB) bir kombinasyonu olarak renk bilgilerini depolar. Kanal başına 8 bitlik bir görüntüde, her kanal 0 ile 255 arasında değişir ve her piksele 16,7 milyondan fazla renkten birini temsil etme yeteneği verir."
        ]
      },
      {
        "id": "subpixels",
        "title": "Alt pikseller (RGB)",
        "paragraphs": [
          "LCD ve OLED ekranlarda, her görünür piksel aslında üç alt pikselden oluşur: bir kırmızı, bir yeşil ve bir mavi. Bu alt pikseller normal izleme mesafesinde tek tek görülemeyecek kadar küçüktür. Ekran, her alt pikselin parlaklığını bağımsız olarak ayarlayarak algıladığınız renklerin tamamını oluşturur.",
          "Bazı ekran teknolojileri farklı alt piksel düzenlemeleri kullanır. Samsung'un PenTile düzeni bir RGBG deseni kullanırken bazı LCD'ler parlaklık verimliliğini artırmak için beyaz bir alt piksel (RGBW) ekler."
        ]
      },
      {
        "id": "megapixels",
        "title": "Megapiksel",
        "paragraphs": [
          "Bir megapiksel (MP) bir milyon piksele eşittir. Kamera sensörleri ve görüntü dosyaları, toplam çözünürlüklerini belirtmek üzere megapiksel cinsinden derecelendirilmiştir. 48 MP akıllı telefon kamerası yaklaşık 8000 × 6000 piksellik görüntüler yakalar. Daha fazla megapiksel, daha fazla ayrıntı sağlar ve daha büyük baskılara veya daha agresif kırpmaya olanak tanır."
        ],
        "table": {
          "headers": [
            "Megapiksel",
            "Tipik Boyutlar",
            "Maksimum Baskı Boyutu (300 DPI)"
          ],
          "rows": [
            [
              "2 MP",
              "1600 × 1200",
              "5,3 × 4\""
            ],
            [
              "8 MP",
              "3264 × 2448",
              "10,9 × 8,2\""
            ],
            [
              "12 MP",
              "4000 × 3000",
              "13,3 × 10\""
            ],
            [
              "24 MP",
              "6000 × 4000",
              "20 × 13,3\""
            ],
            [
              "48 MP",
              "8000 × 6000",
              "26,7 × 20\""
            ]
          ]
        }
      },
      {
        "id": "pixel-size",
        "title": "Farklı DPI'larda Piksel Boyutu",
        "paragraphs": [
          "Bir pikselin doğal bir fiziksel boyutu yoktur; gerçek dünyadaki boyutları ekrana veya yazdırma yoğunluğuna bağlıdır. ortak DPI/PPI değerlerinde bir piksel boyutu:"
        ],
        "list": [
          "72 PPI: 0,353 mm (0,0139\")",
          "96 PPI: 0,265 mm (0,0104\")",
          "150 PPI: 0,169 mm (0,0067\")",
          "300 PPI: 0,085 mm (0,0033\")",
          "460 PPI: 0,055 mm (0,0022\")"
        ]
      },
      {
        "id": "history",
        "title": "Piksellerin Tarihi",
        "paragraphs": [
          "Piksel kavramının tarihi, terimin ilk kez erken dijital görüntü işleme bağlamında kullanıldığı 1960'lara kadar uzanır. JPL'den Frederic Billingsley, 1965'te \"piksel\" kelimesini popüler hale getiren kişi olarak sıklıkla anılır. İlk dijital ekranların piksel sayıları çok düşüktü; Apple II (1977) 280 × 192 piksel görüntülerken, modern 8K ekranlar 33 milyon pikselin üzerinde görüntü oluşturuyor.",
          "Bugün piksel teknolojisi, mikro LED ekranlar, katlanabilir ekranlar ve 1000 PPI'yi aşan ekranlarla gelişmeye devam ediyor. VR kulaklıklar. Piksel, her dijital görsel deneyimin temel yapı taşı olmaya devam ediyor. Piksel Dönüştürücümüzle piksellerin fiziksel birimlerle nasıl eşleştiğini keşfedin."
        ]
      }
    ]
  },
  "pl": {
    "faq": [
      {
        "question": "Jak duży jest piksel?",
        "answer": "Piksel nie ma ustalonego rozmiaru fizycznego. Jego rozmiar zależy od PPI wyświetlacza. Przy 96 PPI jeden piksel ma około 0,26 mm. Przy 300 PPI (druk) jeden piksel to 0,085 mm. W telefonie 460 PPI jeden piksel ma zaledwie 0,055 mm."
      },
      {
        "question": "Co to są subpiksele?",
        "answer": "Każdy piksel na ekranie LCD lub OLED składa się z trzech subpikseli: czerwonego, zielonego i niebieskiego (RGB). Zmieniając intensywność każdego subpiksela, piksel może wytwarzać miliony różnych kolorów. Niektóre wyświetlacze wykorzystują układy subpikseli RGBW (dodawanie bieli)."
      },
      {
        "question": "Co znaczy megapiksel?",
        "answer": "Jeden megapiksel to milion pikseli. 12-megapikselowy czujnik aparatu rejestruje obrazy o wielkości około 12 milionów pojedynczych pikseli, np. 4000 x 3000 pikseli. Większa liczba megapikseli pozwala na większe wydruki i większą elastyczność przycinania."
      },
      {
        "question": "Czy piksele CSS są takie same jak piksele urządzenia?",
        "answer": "Nie. Piksele CSS to abstrakcyjna jednostka używana w projektowaniu stron internetowych. Na wyświetlaczu Retina 2x jeden piksel CSS równa się czterem pikselom urządzenia (2x2). To rozróżnienie powoduje, że obrazy muszą mieć rozdzielczość 2x lub 3x, aby zapewnić ostre renderowanie na ekranach HiDPI."
      }
    ],
    "sections": [
      {
        "id": "pixel-definition",
        "title": "Definicja piksela",
        "paragraphs": [
          "Piksel (skrót od „element obrazu”) to najmniejsza adresowalna jednostka obrazu rastrowego lub wyświetlacza cyfrowego. Każde oglądane zdjęcie, każda ikona na ekranie i każda klatka wideo składają się z tysięcy lub milionów pojedynczych pikseli ułożonych w prostokątną siatkę.",
          "Każdy piksel przechowuje informacje o kolorze, zazwyczaj w postaci kombinacji wartości koloru czerwonego, zielonego i niebieskiego (RGB). W obrazie 8-bitowym na kanał każdy kanał ma zakres od 0 do 255, dzięki czemu każdy piksel może reprezentować jeden z ponad 16,7 miliona kolorów."
        ]
      },
      {
        "id": "subpixels",
        "title": "Subpiksele (RGB)",
        "paragraphs": [
          "Na ekranach LCD i OLED każdy widoczny piksel składa się w rzeczywistości z trzech subpikseli: jednego czerwonego, jednego zielonego i jednego niebieskiego. Te subpiksele są zbyt małe, aby można je było zobaczyć pojedynczo w normalnej odległości. Dostosowując jasność każdego subpiksela niezależnie, wyświetlacz tworzy pełną gamę kolorów, które dostrzegasz.",
          "Niektóre technologie wyświetlania wykorzystują różne układy subpikseli. Układ PenTile firmy Samsung wykorzystuje wzór RGBG, podczas gdy niektóre wyświetlacze LCD dodają biały subpiksel (RGBW), aby poprawić efektywność jasności."
        ]
      },
      {
        "id": "megapixels",
        "title": "Megapiksele",
        "paragraphs": [
          "Jeden megapiksel (MP) równa się milionowi pikseli. Czujniki aparatu i pliki obrazów są oceniane w megapikselach, aby wskazać ich całkowitą rozdzielczość. Aparat smartfona o rozdzielczości 48 MP rejestruje obrazy w rozdzielczości około 8000 × 6000 pikseli. Większa liczba megapikseli zapewnia większą szczegółowość i pozwala na większe wydruki lub bardziej agresywne kadrowanie."
        ],
        "table": {
          "headers": [
            "Megapiksele",
            "Typowe wymiary",
            "Maksymalny rozmiar wydruku (300 DPI)"
          ],
          "rows": [
            [
              "2 MP",
              "1600 × 1200",
              "5,3 × 4 cale"
            ],
            [
              "8 MP",
              "3264 × 2448",
              "10,9 × 8,2 cala"
            ],
            [
              "12 MP",
              "4000 × 3000",
              "13,3 × 10 cali"
            ],
            [
              "24 MP",
              "6000 × 4000",
              "20 × 13,3 cala"
            ],
            [
              "48 MP",
              "8000 × 6000",
              "26,7 × 20 cali"
            ]
          ]
        }
      },
      {
        "id": "pixel-size",
        "title": "Rozmiar piksela przy różnych DPI",
        "paragraphs": [
          "Piksel nie ma nieodłącznego rozmiaru fizycznego — jego rzeczywiste wymiary zależą od wyświetlacza lub gęstości druku. Oto fizyczny rozmiar jednego piksela przy typowych wartościach DPI/PPI:"
        ],
        "list": [
          "72 PPI: 0,353 mm (0,0139 cala)",
          "96 PPI: 0,265 mm (0,0104\")",
          "150 PPI: 0,169 mm (0,0067 cala)",
          "300 PPI: 0,085 mm (0,0033 cala)",
          "460 PPI: 0,055 mm (0,0022 cala)"
        ]
      },
      {
        "id": "history",
        "title": "Historia pikseli",
        "paragraphs": [
          "Pojęcie piksela sięga lat 60. XX wieku, a termin ten został po raz pierwszy użyty w kontekście wczesnego cyfrowego przetwarzania obrazu. Fredericowi Billingsleyowi z JPL często przypisuje się spopularyzowanie słowa „piksel” w 1965 r. Wczesne wyświetlacze cyfrowe miały bardzo małą liczbę pikseli — Apple II (1977) wyświetlał obraz w rozdzielczości 280 × 192 piksele, podczas gdy nowoczesne wyświetlacze 8K renderują ponad 33 miliony pikseli.",
          "Obecnie technologia pikseli stale ewoluuje dzięki wyświetlaczom mikro-LED, składanym ekranom i wyświetlaczom o rozdzielczości przekraczającej 1000 PPI dla gogli VR. Piksel pozostaje podstawowym elementem każdego cyfrowego doświadczenia wizualnego. Odkryj, w jaki sposób piksele są odwzorowywane na jednostki fizyczne, dzięki naszemu konwerterowi pikseli."
        ]
      }
    ]
  },
  "id": {
    "faq": [
      {
        "question": "Seberapa besar sebuah piksel?",
        "answer": "Sebuah piksel tidak memiliki ukuran fisik yang tetap. Ukurannya bergantung pada PPI tampilan. Pada 96 PPI, satu piksel berukuran sekitar 0,26 mm. Pada 300 PPI (cetak), satu piksel berukuran 0,085 mm. Pada ponsel 460 PPI, satu piksel hanya berukuran 0,055 mm."
      },
      {
        "question": "Apa itu subpiksel?",
        "answer": "Setiap piksel pada layar LCD atau OLED terdiri dari tiga subpiksel: merah, hijau, dan biru (RGB). Dengan memvariasikan intensitas setiap subpiksel, piksel dapat menghasilkan jutaan warna berbeda. Beberapa layar menggunakan pengaturan subpiksel RGBW (menambahkan warna putih)."
      },
      {
        "question": "Apa arti megapiksel?",
        "answer": "Satu megapiksel sama dengan satu juta piksel. Sensor kamera 12 megapiksel menangkap gambar dengan sekitar 12 juta piksel individual, misalnya 4000 x 3000 piksel. Jumlah megapiksel yang lebih besar memungkinkan hasil cetakan yang lebih besar dan fleksibilitas pemotongan yang lebih banyak."
      },
      {
        "question": "Apakah piksel CSS sama dengan piksel perangkat?",
        "answer": "Tidak. Piksel CSS adalah unit abstrak yang digunakan dalam desain web. Pada tampilan retina 2x, satu piksel CSS sama dengan empat piksel perangkat (2x2). Perbedaan inilah yang menyebabkan gambar harus memiliki resolusi 2x atau 3x agar dapat dirender dengan tajam pada layar HiDPI."
      }
    ],
    "sections": [
      {
        "id": "pixel-definition",
        "title": "Definisi Piksel",
        "paragraphs": [
          "Piksel (kependekan dari “elemen gambar”) adalah unit terkecil yang dapat dialamatkan pada gambar raster atau tampilan digital. Setiap foto yang Anda lihat, setiap ikon di layar, dan setiap bingkai video terdiri dari ribuan atau jutaan piksel individual yang disusun dalam kotak persegi panjang.",
          "Setiap piksel menyimpan informasi warna, biasanya dalam bentuk kombinasi nilai merah, hijau, dan biru (RGB). Dalam gambar 8-bit per saluran, setiap saluran berkisar dari 0 hingga 255, sehingga setiap piksel memiliki kemampuan untuk mewakili salah satu dari lebih dari 16,7 juta warna."
        ]
      },
      {
        "id": "subpixels",
        "title": "Subpiksel (RGB)",
        "paragraphs": [
          "Pada layar LCD dan OLED, setiap piksel yang terlihat sebenarnya terdiri dari tiga subpiksel: satu merah, satu hijau, dan satu biru. Subpiksel ini terlalu kecil untuk dilihat satu per satu pada jarak pandang normal. Dengan menyesuaikan kecerahan setiap subpiksel secara terpisah, layar menciptakan seluruh rentang warna yang Anda lihat.",
          "Beberapa teknologi tampilan menggunakan pengaturan subpiksel yang berbeda. Tata letak PenTile Samsung menggunakan pola RGBG, sementara beberapa LCD menambahkan subpiksel putih (RGBW) untuk meningkatkan efisiensi kecerahan."
        ]
      },
      {
        "id": "megapixels",
        "title": "Megapiksel",
        "paragraphs": [
          "Satu megapiksel (MP) sama dengan satu juta piksel. Sensor kamera dan file gambar diberi nilai dalam megapiksel untuk menunjukkan resolusi totalnya. Kamera smartphone 48 MP menangkap gambar sekitar 8000 × 6000 piksel. Megapiksel yang lebih besar memberikan detail yang lebih baik dan memungkinkan cetakan yang lebih besar atau pemotongan yang lebih agresif."
        ],
        "table": {
          "headers": [
            "Megapiksel",
            "Dimensi Khas",
            "Ukuran Cetak Maks (300 DPI)"
          ],
          "rows": [
            [
              "2 MP",
              "1600 × 1200",
              "5,3 × 4\""
            ],
            [
              "8 MP",
              "3264 × 2448",
              "10,9 × 8,2\""
            ],
            [
              "12 MP",
              "4000 × 3000",
              "13,3 × 10\""
            ],
            [
              "24 MP",
              "6000 × 4000",
              "20 × 13,3\""
            ],
            [
              "48 MP",
              "8000 × 6000",
              "26,7 × 20\""
            ]
          ]
        }
      },
      {
        "id": "pixel-size",
        "title": "Ukuran Piksel pada DPI Berbeda",
        "paragraphs": [
          "Sebuah piksel tidak memiliki ukuran fisik yang melekat — dimensi aslinya bergantung pada tampilan atau kepadatan pencetakan satu piksel pada nilai DPI/PPI umum:"
        ],
        "list": [
          "72 PPI: 0,353 mm (0,0139\")",
          "96 PPI: 0,265 mm (0,0104\")",
          "150 PPI: 0,169 mm (0,0067\")",
          "300 PPI: 0,085 mm (0,0033\")",
          "460 PPI: 0,055 mm (0,0022\")"
        ]
      },
      {
        "id": "history",
        "title": "Sejarah Piksel",
        "paragraphs": [
          "Konsep piksel sudah ada sejak tahun 1960-an, dengan istilah ini pertama kali digunakan dalam konteks pemrosesan gambar digital awal. Frederic Billingsley dari JPL sering dianggap mempopulerkan kata “piksel” pada tahun 1965. Layar digital awal memiliki jumlah piksel yang sangat rendah — Apple II (1977) menampilkan 280 × 192 piksel, sedangkan layar 8K modern menampilkan lebih dari 33 juta piksel.",
          "Saat ini, teknologi piksel terus berkembang dengan layar mikro-LED, layar yang dapat dilipat, dan layar yang melebihi 1000 PPI untuk headset VR. Piksel tetap menjadi elemen dasar dari setiap pengalaman visual digital. Jelajahi bagaimana piksel dipetakan ke unit fisik dengan Pixel Converter kami."
        ]
      }
    ]
  },
  "ru": {
    "faq": [
      {
        "question": "Насколько велик пиксель?",
        "answer": "Пиксель не имеет фиксированного физического размера. Его размер зависит от PPI ​​дисплея. При 96 PPI размер одного пикселя составляет около 0,26 мм. При разрешении 300 PPI (печать) один пиксель равен 0,085 мм. На телефоне с разрешением 460 пикселей на дюйм один пиксель составляет всего 0,055 мм."
      },
      {
        "question": "Что такое субпиксели?",
        "answer": "Каждый пиксель на ЖК- или OLED-экране состоит из трех субпикселей: красного, зеленого и синего (RGB). Изменяя интенсивность каждого субпикселя, пиксель может воспроизводить миллионы разных цветов. В некоторых дисплеях используется расположение субпикселей RGBW (добавление белого)."
      },
      {
        "question": "Что означает мегапиксель?",
        "answer": "Один мегапиксель равен одному миллиону пикселей. 12-мегапиксельный сенсор камеры захватывает изображения примерно с 12 миллионами отдельных пикселей, например, 4000 x 3000 пикселей. Большее количество мегапикселей обеспечивает более крупные отпечатки и большую гибкость при обрезке."
      },
      {
        "question": "Являются ли пиксели CSS такими же, как пиксели устройства?",
        "answer": "Нет. CSS-пиксели — это абстрактная единица, используемая в веб-дизайне. На дисплее Retina с увеличением 2x один пиксель CSS равен четырем пикселям устройства (2x2). Именно из-за этого различия изображения должны иметь 2- или 3-кратное разрешение для четкого рендеринга на экранах HiDPI."
      }
    ],
    "sections": [
      {
        "id": "pixel-definition",
        "title": "Определение пикселя",
        "paragraphs": [
          "Пиксель (сокращение от «элемент изображения») — это наименьшая адресуемая единица растрового изображения или цифрового дисплея. Каждая фотография, которую вы просматриваете, каждый значок на экране и каждый кадр видео состоят из тысяч или миллионов отдельных пикселей, расположенных в прямоугольной сетке.",
          "Каждый пиксель хранит информацию о цвете, обычно в виде комбинации значений красного, зеленого и синего (RGB). В 8-битном изображении каждый канал находится в диапазоне от 0 до 255, что дает каждому пикселю возможность представлять один из более чем 16,7 миллионов цветов."
        ]
      },
      {
        "id": "subpixels",
        "title": "Субпиксели (RGB)",
        "paragraphs": [
          "На ЖК-экранах и OLED-экранах каждый видимый пиксель фактически состоит из трех субпикселей: одного красного, одного зеленого и одного синего. Эти субпиксели слишком малы, чтобы их можно было рассмотреть по отдельности на обычном расстоянии просмотра. Регулируя яркость каждого субпикселя независимо, дисплей создает полный диапазон воспринимаемых вами цветов.",
          "Некоторые технологии отображения используют различное расположение субпикселей. В макете PenTile от Samsung используется шаблон RGBG, а в некоторых ЖК-дисплеях для повышения эффективности яркости добавляют белый субпиксель (RGBW)."
        ]
      },
      {
        "id": "megapixels",
        "title": "Мегапиксели",
        "paragraphs": [
          "Один мегапиксель (МП) равен одному миллиону пикселей. Датчики камеры и файлы изображений оцениваются в мегапикселях, что указывает на их общее разрешение. Камера смартфона на 48 МП снимает изображения размером примерно 8000 × 6000 пикселей. Большее количество мегапикселей обеспечивает большую детализацию и позволяет создавать более крупные отпечатки или более агрессивное кадрирование."
        ],
        "table": {
          "headers": [
            "Мегапиксели",
            "Типичные размеры",
            "Макс. размер печати (300 точек на дюйм)"
          ],
          "rows": [
            [
              "2 МП",
              "1600 × 1200",
              "5,3 × 4\""
            ],
            [
              "8 МП",
              "3264 × 2448",
              "10,9 × 8,2\""
            ],
            [
              "12 МП",
              "4000 × 3000",
              "13,3 × 10\""
            ],
            [
              "24 МП",
              "6000 × 4000",
              "20 × 13,3\""
            ],
            [
              "48 МП",
              "8000 × 6000",
              "26,7 × 20\""
            ]
          ]
        }
      },
      {
        "id": "pixel-size",
        "title": "Размер пикселя при различных значениях разрешения",
        "paragraphs": [
          "Пиксель не имеет собственного физического размера — его реальные размеры зависят от дисплея или плотности печати. Вот физический размер одного пикселя при обычных значениях DPI/PPI:"
        ],
        "list": [
          "72 PPI: 0,353 мм (0,0139\")",
          "96 PPI: 0,265 мм (0,0104\")",
          "150 PPI: 0,169 мм (0,0067\")",
          "300 PPI: 0,085 мм (0,0033\")",
          "460 PPI: 0,055 мм (0,0022\")"
        ]
      },
      {
        "id": "history",
        "title": "История пикселей",
        "paragraphs": [
          "Понятие пикселя восходит к 1960-м годам, и этот термин впервые использовался в контексте ранней цифровой обработки изображений. Фредерику Биллингсли из JPL часто приписывают популяризацию слова «пиксель» в 1965 году. Ранние цифровые дисплеи имели очень низкое количество пикселей — Apple II (1977) отображал 280 × 192 пикселей, тогда как современные дисплеи 8K отображают более 33 миллионов пикселей.",
          "Сегодня пиксельная технология продолжает развиваться с появлением микро-LED-дисплеев, складных экранов и дисплеев с разрешением более 1000 пикселей на дюйм. для VR-гарнитур. Пиксель остается фундаментальным строительным блоком любого цифрового визуального опыта. Узнайте, как пиксели сопоставляются с физическими единицами с помощью нашего конвертера пикселей."
        ]
      }
    ]
  }
};
