import type { LocalizedDocMap } from "./doc-types";

export const content: LocalizedDocMap = {
  "en": {
    "faq": [
      {
        "question": "Should I use em or rem for font sizes?",
        "answer": "Use rem for font sizes in most cases. REM units are relative to the root font size (usually 16px), making them predictable and consistent. Use em only when you want font size to scale relative to the parent element."
      },
      {
        "question": "What is 1rem in pixels?",
        "answer": "By default, 1rem equals 16px because browsers set the root font size to 16px. If you change the root font size (e.g., html { font-size: 62.5%; }), then 1rem equals 10px."
      },
      {
        "question": "When should I use em instead of rem?",
        "answer": "Use em for padding and margins on components where spacing should scale proportionally with the element's own font size. For example, button padding in em units scales if the button text size changes."
      },
      {
        "question": "Can I mix em and rem in the same project?",
        "answer": "Yes. A common pattern is rem for font sizes (global consistency) and em for component-internal spacing like padding and margins (local proportionality). This gives you both predictable sizing and proportional components."
      }
    ],
    "sections": [
      {
        "id": "quick-comparison",
        "title": "Quick Comparison",
        "table": {
          "headers": [
            "Attribute",
            "EM",
            "REM"
          ],
          "rows": [
            [
              "Relative to",
              "Parent element font size",
              "Root element font size"
            ],
            [
              "Cascading",
              "Yes (compounds with nesting)",
              "No (always relative to root)"
            ],
            [
              "Default base",
              "Inherited font size",
              "16px (browser default)"
            ],
            [
              "Best for",
              "Component-internal spacing",
              "Font sizes, global spacing"
            ],
            [
              "Predictability",
              "Lower (depends on context)",
              "Higher (single reference point)"
            ]
          ]
        }
      },
      {
        "id": "what-is-em",
        "title": "What Is EM?",
        "paragraphs": [
          "The em unit is relative to the font size of the element itself (for properties like padding and margin) or the parent element’s font size (for the font-size property). Because em values compound when elements are nested, sizing can become unpredictable in deep component trees.",
          "For example, if a parent has font-size: 20px and a child has font-size: 1.5em, the child renders at 30px. If that child also contains an element with font-size: 1.5em, it renders at 45px."
        ]
      },
      {
        "id": "what-is-rem",
        "title": "What Is REM?",
        "paragraphs": [
          "The rem unit (root em) is always relative to the root element’s font size (<html>), which defaults to 16px in all major browsers. Unlike em, rem does not compound with nesting. 1.5rem is always 24px (assuming the default root), regardless of where it appears in the DOM tree."
        ]
      },
      {
        "id": "code-examples",
        "title": "Code Examples",
        "code": "/* REM for font sizes - predictable */\nh1  font-size: 2rem;     /* 32px */\nh2  font-size: 1.5rem;   /* 24px */\np   font-size: 1rem;     /* 16px */\n\n/* EM for component spacing - proportional */\n.button \n  font-size: 1rem;\n  padding: 0.5em 1em;  /* scales with button text size */\n\n\n.button--large \n  font-size: 1.25rem;\n  /* padding automatically scales to 10px 20px */\n\n\n/* Common 62.5% trick for easier rem math */\nhtml  font-size: 62.5%;   /* 1rem = 10px */\nbody  font-size: 1.6rem;  /* restore 16px base */"
      },
      {
        "id": "best-practices",
        "title": "Best Practices",
        "list": [
          "Use rem for font sizes to maintain a consistent typographic scale across your entire site.",
          "Use rem for layout spacing (margins, grid gaps) for predictable, global consistency.",
          "Use em for component padding when you want spacing to scale proportionally with the component’s own font size.",
          "Avoid deep em nesting - compounding makes values hard to predict and debug.",
          "Set a clear root font size - either keep the browser default (16px) or use the 62.5% trick for easier math."
        ],
        "paragraphs": [
          "Convert between pixels and rem or em units instantly with our PX to REM and PX to EM converters."
        ]
      }
    ]
  },
  "es": {
    "faq": [
      {
        "question": "¿Debo usar em o rem para los tamaños de fuente?",
        "answer": "Utilice rem para los tamaños de fuente en la mayoría de los casos. Las unidades REM son relativas al tamaño de fuente raíz (normalmente 16 píxeles), lo que las hace predecibles y consistentes. Úselo em solo cuando desee que el tamaño de fuente se escale en relación con el elemento principal."
      },
      {
        "question": "¿Qué es 1rem en píxeles?",
        "answer": "De forma predeterminada, 1rem equivale a 16px porque los navegadores establecen el tamaño de fuente raíz en 16px. Si cambia el tamaño de fuente raíz (por ejemplo, html { font-size: 62.5%; }), entonces 1rem equivale a 10px."
      },
      {
        "question": "¿Cuándo debo usar em en lugar de rem?",
        "answer": "Utilice em para relleno y márgenes en componentes donde el espaciado debe escalar proporcionalmente con el tamaño de fuente del propio elemento. Por ejemplo, el relleno de botones en unidades em aumenta si el tamaño del texto del botón cambia."
      },
      {
        "question": "¿Puedo mezclar em y rem en el mismo proyecto?",
        "answer": "Sí. Un patrón común es rem para tamaños de fuente (consistencia global) y em para espaciado interno de componentes como relleno y márgenes (proporcionalidad local). Esto le brinda componentes proporcionales y de tamaño predecible."
      }
    ],
    "sections": [
      {
        "id": "quick-comparison",
        "title": "Comparación rápida",
        "table": {
          "headers": [
            "Atributo",
            "EM",
            "REM"
          ],
          "rows": [
            [
              "Relativo a",
              "Tamaño de fuente del elemento principal",
              "Tamaño de fuente del elemento raíz"
            ],
            [
              "En cascada",
              "Sí (compuestos con anidamiento)",
              "No (siempre relativo a la raíz)"
            ],
            [
              "Base predeterminada",
              "Tamaño de fuente heredado",
              "16px (predeterminado del navegador)"
            ],
            [
              "Mejor para",
              "Espaciado interno del componente",
              "Tamaños de fuente, global espaciado"
            ],
            [
              "Previsibilidad",
              "Inferior (depende del contexto)",
              "Mayor (punto de referencia único)"
            ]
          ]
        }
      },
      {
        "id": "what-is-em",
        "title": "¿Qué es EM?",
        "paragraphs": [
          "La unidad em es relativa al tamaño de fuente del elemento en sí (para propiedades como relleno y margen) o al tamaño de fuente del elemento principal (para la propiedad de tamaño de fuente). Debido a que los valores em se combinan cuando los elementos están anidados, el tamaño puede volverse impredecible en árboles de componentes profundos.",
          "Por ejemplo, si un padre tiene un tamaño de fuente: 20 px y un hijo tiene un tamaño de fuente: 1,5 em, el hijo se representa a 30 px. Si ese elemento secundario también contiene un elemento con tamaño de fuente: 1,5 em, se representa a 45 px."
        ]
      },
      {
        "id": "what-is-rem",
        "title": "¿Qué es REM?",
        "paragraphs": [
          "La unidad rem (raíz em) siempre es relativa al tamaño de fuente del elemento raíz (<html>), que por defecto es 16 px en todos los principales navegadores. A diferencia de em, rem no se combina con el anidamiento. 1.5rem siempre es 24px (asumiendo la raíz predeterminada), independientemente de dónde aparezca en el árbol DOM."
        ]
      },
      {
        "id": "code-examples",
        "title": "Ejemplos de código",
        "code": "/* REM for font sizes - predictable */\nh1  font-size: 2rem;     /* 32px */\nh2  font-size: 1.5rem;   /* 24px */\np   font-size: 1rem;     /* 16px */\n\n/* EM for component spacing - proportional */\n.button \n  font-size: 1rem;\n  padding: 0.5em 1em;  /* scales with button text size */\n\n\n.button--large \n  font-size: 1.25rem;\n  /* padding automatically scales to 10px 20px */\n\n\n/* Common 62.5% trick for easier rem math */\nhtml  font-size: 62.5%;   /* 1rem = 10px */\nbody  font-size: 1.6rem;  /* restore 16px base */"
      },
      {
        "id": "best-practices",
        "title": "Prácticas recomendadas",
        "list": [
          "Utilice rem para tamaños de fuente para mantener una escala tipográfica consistente en todo su sitio.",
          "Utilice rem para el espaciado del diseño (márgenes, espacios en la cuadrícula) para una coherencia global predecible.",
          "Utilice em para el relleno del componente cuando desee que el espaciado escale proporcionalmente al tamaño de fuente del componente.",
          "Evite el anidamiento profundo: la combinación hace que los valores sean difíciles de predecir y depurar.",
          "Establezca un tamaño de fuente raíz claro: mantenga el navegador predeterminado (16px) o use el truco del 62,5% para facilitar las matemáticas."
        ],
        "paragraphs": [
          "Convierta entre píxeles y unidades rem o em instantáneamente con nuestros conversores de PX a REM y de PX a EM."
        ]
      }
    ]
  },
  "fr": {
    "faq": [
      {
        "question": "Dois-je utiliser em ou rem pour les tailles de police ?",
        "answer": "Utilisez rem pour les tailles de police dans la plupart des cas. Les unités REM sont relatives à la taille de la police racine (généralement 16 px), ce qui les rend prévisibles et cohérentes. Utilisez-les uniquement lorsque vous souhaitez que la taille de la police soit mise à l'échelle par rapport à l'élément parent."
      },
      {
        "question": "Qu'est-ce que 1rem en pixels ?",
        "answer": "Par défaut, 1rem est égal à 16 px, car les navigateurs définissent la taille de la police racine à 16 px. Si vous modifiez la taille de la police racine (par exemple, html { font-size: 62.5%; }), alors 1rem est égal à 10px."
      },
      {
        "question": "Quand dois-je utiliser em au lieu de rem ?",
        "answer": "Utilisez em pour le remplissage et les marges des composants où l'espacement doit être proportionné à la taille de police de l'élément. Par exemple, le remplissage des boutons en unités em est mis à l'échelle si la taille du texte du bouton change."
      },
      {
        "question": "Puis-je mélanger les em et les rem dans le même projet ?",
        "answer": "Oui. Un modèle courant est rem pour les tailles de police (cohérence globale) et em pour l'espacement interne des composants comme le remplissage et les marges (proportionnalité locale). Cela vous donne à la fois un dimensionnement prévisible et des composants proportionnels."
      }
    ],
    "sections": [
      {
        "id": "quick-comparison",
        "title": "Comparaison rapide",
        "table": {
          "headers": [
            "Attribut",
            "EM",
            "REM"
          ],
          "rows": [
            [
              "Par rapport à",
              "Taille de la police de l'élément parent",
              "Taille de la police de l'élément racine"
            ],
            [
              "Cascading",
              "Oui (composés avec imbrication)",
              "Non (toujours par rapport à la racine)"
            ],
            [
              "Base par défaut",
              "Taille de police héritée",
              "16 px (par défaut du navigateur)"
            ],
            [
              "Idéal pour",
              "Espacement interne aux composants",
              "Tailles de police globales spacing"
            ],
            [
              "Prévisibilité",
              "Inférieur (dépend du contexte)",
              "Supérieur (point de référence unique)"
            ]
          ]
        }
      },
      {
        "id": "what-is-em",
        "title": "Qu'est-ce que EM ?",
        "paragraphs": [
          "L'unité em est relative à la taille de la police de l'élément lui-même (pour les propriétés telles que le remplissage et la marge) ou à la taille de la police de l'élément parent (pour la propriété font-size). Étant donné que les valeurs em se composent lorsque les éléments sont imbriqués, le dimensionnement peut devenir imprévisible dans les arborescences de composants profondes.",
          "Par exemple, si un parent a font-size : 20px et qu'un enfant a font-size : 1.5em, l'enfant effectue le rendu à 30px. Si cet enfant contient également un élément avec font-size: 1.5em, il s'affiche à 45 px."
        ]
      },
      {
        "id": "what-is-rem",
        "title": "Qu'est-ce que REM ?",
        "paragraphs": [
          "L'unité rem (root em) est toujours relative à la taille de police de l'élément racine (<html>), qui est par défaut de 16 px dans tous les principaux navigateurs. Contrairement à em, rem ne se compose pas de nidification. 1,5rem est toujours de 24 pixels (en supposant la racine par défaut), quel que soit l'endroit où il apparaît dans l'arborescence DOM."
        ]
      },
      {
        "id": "code-examples",
        "title": "Exemples de code",
        "code": "/* REM for font sizes - predictable */\nh1  font-size: 2rem;     /* 32px */\nh2  font-size: 1.5rem;   /* 24px */\np   font-size: 1rem;     /* 16px */\n\n/* EM for component spacing - proportional */\n.button \n  font-size: 1rem;\n  padding: 0.5em 1em;  /* scales with button text size */\n\n\n.button--large \n  font-size: 1.25rem;\n  /* padding automatically scales to 10px 20px */\n\n\n/* Common 62.5% trick for easier rem math */\nhtml  font-size: 62.5%;   /* 1rem = 10px */\nbody  font-size: 1.6rem;  /* restore 16px base */"
      },
      {
        "id": "best-practices",
        "title": "Bonnes pratiques",
        "list": [
          "Utilisez rem pour les tailles de police afin de maintenir une échelle typographique cohérente sur l'ensemble de votre site.",
          "Utilisez rem pour l'espacement de la mise en page (marges, espaces de grille) pour une cohérence globale et prévisible.",
          "Utilisez em pour le remplissage des composants lorsque vous souhaitez que l'espacement soit proportionné à la taille de police du composant.",
          "Évitez l'imbrication profonde des em - la composition rend les valeurs difficiles à prédire et à déboguer.",
          "Définissez une taille de police racine claire - conservez la valeur par défaut du navigateur (16 px) ou utilisez l'astuce des 62,5 % pour des calculs plus faciles."
        ],
        "paragraphs": [
          "Convertissez instantanément entre les pixels et les unités rem ou em avec nos convertisseurs PX en REM et PX en EM."
        ]
      }
    ]
  },
  "de": {
    "faq": [
      {
        "question": "Soll ich em oder rem für die Schriftgröße verwenden?",
        "answer": "Verwenden Sie in den meisten Fällen rem für Schriftgrößen. REM-Einheiten sind relativ zur Grundschriftgröße (normalerweise 16 Pixel), wodurch sie vorhersehbar und konsistent sind. Verwenden Sie em nur, wenn die Schriftgröße relativ zum übergeordneten Element skaliert werden soll."
      },
      {
        "question": "Was ist 1rem in Pixel?",
        "answer": "Standardmäßig entspricht 1rem 16 Pixel, da Browser die Stammschriftgröße auf 16 Pixel festlegen. Wenn Sie die Stammschriftgröße ändern (z. B. html {font-size: 62,5 %; }), dann entspricht 1rem 10 Pixel."
      },
      {
        "question": "Wann sollte ich em anstelle von rem verwenden?",
        "answer": "Verwenden Sie em für den Abstand und die Ränder von Komponenten, bei denen der Abstand proportional zur Schriftgröße des Elements skaliert werden soll. Beispielsweise wird der Tastenabstand in Geviert-Einheiten skaliert, wenn sich die Textgröße der Schaltfläche ändert."
      },
      {
        "question": "Kann ich em und rem im selben Projekt mischen?",
        "answer": "Ja. Ein gängiges Muster ist rem für Schriftgrößen (globale Konsistenz) und em für komponenteninterne Abstände wie Abstände und Ränder (lokale Proportionalität). Dadurch erhalten Sie sowohl vorhersehbare Größen als auch proportionale Komponenten."
      }
    ],
    "sections": [
      {
        "id": "quick-comparison",
        "title": "Schneller Vergleich",
        "table": {
          "headers": [
            "Attribut",
            "EM",
            "REM"
          ],
          "rows": [
            [
              "Relativ zu",
              "Schriftgröße des übergeordneten Elements",
              "Schriftgröße des Stammelements"
            ],
            [
              "Kaskadierung",
              "Ja (Verbindungen mit Verschachtelung)",
              "Nein (immer relativ zur Wurzel)"
            ],
            [
              "Standardbasis",
              "Geerbte Schriftgröße",
              "16px (Browser-Standard)"
            ],
            [
              "Am besten für",
              "Bauteilinterner Abstand",
              "Schriftgrößen, globale Abstände"
            ],
            [
              "Vorhersagbarkeit",
              "Niedriger (abhängig vom Kontext)",
              "Höher (einzelner Referenzpunkt)"
            ]
          ]
        }
      },
      {
        "id": "what-is-em",
        "title": "Was ist EM?",
        "paragraphs": [
          "Die em-Einheit ist relativ zur Schriftgröße des Elements selbst (für Eigenschaften wie Innenabstand und Rand) oder zur Schriftgröße des übergeordneten Elements (für die Eigenschaft „font-size“). Da sich die em-Werte bei der Verschachtelung von Elementen summieren, kann die Größenbestimmung in tiefen Komponentenbäumen unvorhersehbar werden.",
          "Wenn beispielsweise ein übergeordnetes Element die Schriftgröße 20 Pixel und ein untergeordnetes Element die Schriftgröße 1,5 em hat, wird das untergeordnete Element mit 30 px gerendert. Wenn dieses untergeordnete Element auch ein Element mit der Schriftgröße 1,5em enthält, wird es mit 45 Pixel gerendert."
        ]
      },
      {
        "id": "what-is-rem",
        "title": "Was ist REM?",
        "paragraphs": [
          "Die rem-Einheit (root em) ist immer relativ zur Schriftgröße des Root-Elements (<html>), die in allen gängigen Browsern standardmäßig 16 Pixel beträgt. Im Gegensatz zu em verbindet sich rem nicht mit der Verschachtelung. 1.5rem hat immer 24 Pixel (unter der Annahme des Standardstamms), unabhängig davon, wo es im DOM-Baum erscheint."
        ]
      },
      {
        "id": "code-examples",
        "title": "Codebeispiele",
        "code": "/* REM for font sizes - predictable */\nh1  font-size: 2rem;     /* 32px */\nh2  font-size: 1.5rem;   /* 24px */\np   font-size: 1rem;     /* 16px */\n\n/* EM for component spacing - proportional */\n.button \n  font-size: 1rem;\n  padding: 0.5em 1em;  /* scales with button text size */\n\n\n.button--large \n  font-size: 1.25rem;\n  /* padding automatically scales to 10px 20px */\n\n\n/* Common 62.5% trick for easier rem math */\nhtml  font-size: 62.5%;   /* 1rem = 10px */\nbody  font-size: 1.6rem;  /* restore 16px base */"
      },
      {
        "id": "best-practices",
        "title": "Best Practices",
        "list": [
          "Verwenden Sie rem für Schriftgrößen, um auf Ihrer gesamten Website eine einheitliche typografische Skalierung beizubehalten.",
          "Verwenden Sie rem für Layoutabstände (Ränder, Rasterlücken), um eine vorhersehbare, globale Konsistenz zu gewährleisten.",
          "Verwenden Sie em zum Auffüllen von Komponenten, wenn der Abstand proportional zur Schriftgröße der Komponente skaliert werden soll.",
          "Vermeiden Sie eine tiefe Em-Verschachtelung - die Kombination macht es schwierig, Werte vorherzusagen und zu debuggen.",
          "Legen Sie eine eindeutige Grundschriftgröße fest - behalten Sie entweder die Browser-Standardgröße (16 Pixel) bei oder verwenden Sie zur einfacheren Berechnung den 62,5-Prozent-Trick."
        ],
        "paragraphs": [
          "Konvertieren Sie sofort zwischen Pixeln und rem- oder em-Einheiten mit unseren PX-zu-REM- und PX-zu-EM-Konvertern."
        ]
      }
    ]
  },
  "pt": {
    "faq": [
      {
        "question": "Devo usar em ou rem para tamanhos de fonte?",
        "answer": "Use rem para tamanhos de fonte na maioria dos casos. As unidades REM são relativas ao tamanho da fonte raiz (geralmente 16px), tornando-as previsíveis e consistentes. Use-os apenas quando quiser que o tamanho da fonte seja dimensionado em relação ao elemento pai."
      },
      {
        "question": "O que é 1rem em pixels?",
        "answer": "Por padrão, 1rem é igual a 16px porque os navegadores definem o tamanho da fonte raiz como 16px. Se você alterar o tamanho da fonte raiz (por exemplo, html { font-size: 62,5%; }), então 1rem é igual a 10px."
      },
      {
        "question": "Quando devo usar em em vez de rem?",
        "answer": "Use em para preenchimento e margens em componentes onde o espaçamento deve ser dimensionado proporcionalmente ao tamanho da fonte do próprio elemento. Por exemplo, o preenchimento do botão em unidades em é dimensionado se o tamanho do texto do botão mudar."
      },
      {
        "question": "Posso misturar em e rem no mesmo projeto?",
        "answer": "Sim. Um padrão comum é rem para tamanhos de fonte (consistência global) e em para espaçamento interno de componentes, como preenchimento e margens (proporcionalidade local). Isso fornece dimensionamento previsível e componentes proporcionais."
      }
    ],
    "sections": [
      {
        "id": "quick-comparison",
        "title": "Comparação rápida",
        "table": {
          "headers": [
            "Atributo",
            "EM",
            "REM"
          ],
          "rows": [
            [
              "Relativo a",
              "Tamanho da fonte do elemento pai",
              "Tamanho da fonte do elemento raiz"
            ],
            [
              "Cascata",
              "Sim (compostos com aninhamento)",
              "Não (sempre em relação à raiz)"
            ],
            [
              "Base padrão",
              "Tamanho de fonte herdado",
              "16px (padrão do navegador)"
            ],
            [
              "Melhor para",
              "Espaçamento interno do componente",
              "Tamanhos de fonte, global espaçamento"
            ],
            [
              "Previsibilidade",
              "Menor (depende do contexto)",
              "Maior (ponto de referência único)"
            ]
          ]
        }
      },
      {
        "id": "what-is-em",
        "title": "O que é EM?",
        "paragraphs": [
          "A unidade em é relativa ao tamanho da fonte do próprio elemento (para propriedades como preenchimento e margem) ou ao tamanho da fonte do elemento pai (para a propriedade font-size). Como os valores em são compostos quando os elementos são aninhados, o dimensionamento pode se tornar imprevisível em árvores de componentes profundas.",
          "Por exemplo, se um pai tiver font-size: 20px e um filho tiver font-size: 1.5em, o filho será renderizado em 30px. Se esse filho também contiver um elemento com tamanho de fonte: 1.5em, ele será renderizado em 45px."
        ]
      },
      {
        "id": "what-is-rem",
        "title": "O que é REM?",
        "paragraphs": [
          "A unidade rem (root em) é sempre relativa ao tamanho da fonte do elemento raiz (<html>), cujo padrão é 16px em todos os principais navegadores. Ao contrário de em, rem não combina com aninhamento. 1,5rem é sempre 24px (assumindo a raiz padrão), independentemente de onde ele aparece na árvore DOM."
        ]
      },
      {
        "id": "code-examples",
        "title": "Exemplos de código",
        "code": "/* REM for font sizes - predictable */\nh1  font-size: 2rem;     /* 32px */\nh2  font-size: 1.5rem;   /* 24px */\np   font-size: 1rem;     /* 16px */\n\n/* EM for component spacing - proportional */\n.button \n  font-size: 1rem;\n  padding: 0.5em 1em;  /* scales with button text size */\n\n\n.button--large \n  font-size: 1.25rem;\n  /* padding automatically scales to 10px 20px */\n\n\n/* Common 62.5% trick for easier rem math */\nhtml  font-size: 62.5%;   /* 1rem = 10px */\nbody  font-size: 1.6rem;  /* restore 16px base */"
      },
      {
        "id": "best-practices",
        "title": "Práticas recomendadas",
        "list": [
          "Use rem para tamanhos de fonte para manter uma escala tipográfica consistente em todo o seu site. site.",
          "Use rem para espaçamento de layout (margens, lacunas de grade) para consistência global previsível.",
          "Use em para preenchimento de componentes quando quiser que o espaçamento seja dimensionado proporcionalmente com o tamanho da fonte do próprio componente.",
          "Evite aninhamento profundo - a composição torna os valores difíceis de prever e depurar.",
          "Defina um tamanho de fonte raiz claro - mantenha o padrão do navegador (16px) ou use o truque de 62,5% para facilitar a matemática."
        ],
        "paragraphs": [
          "Converta entre pixels e unidades rem ou em instantaneamente com nossos conversores PX para REM e PX para EM."
        ]
      }
    ]
  },
  "hi": {
    "faq": [
      {
        "question": "क्या मुझे फ़ॉन्ट आकार के लिए em या rem का उपयोग करना चाहिए?",
        "answer": "अधिकांश मामलों में फ़ॉन्ट आकार के लिए rem का उपयोग करें। REM इकाइयाँ रूट फ़ॉन्ट आकार (आमतौर पर 16px) के सापेक्ष होती हैं, जो उन्हें पूर्वानुमानित और सुसंगत बनाती हैं। केवल तभी उपयोग करें जब आप फ़ॉन्ट आकार को मूल तत्व के सापेक्ष स्केल करना चाहते हैं।"
      },
      {
        "question": "पिक्सेल में 1rem क्या है?",
        "answer": "डिफ़ॉल्ट रूप से, 1rem 16px के बराबर होता है क्योंकि ब्राउज़र रूट फ़ॉन्ट आकार को 16px पर सेट करते हैं। यदि आप रूट फ़ॉन्ट आकार बदलते हैं (उदाहरण के लिए, html { फ़ॉन्ट-आकार: 62.5%; }), तो 1rem 10px के बराबर है।"
      },
      {
        "question": "मुझे रेम के स्थान पर एम का उपयोग कब करना चाहिए?",
        "answer": "घटकों पर पैडिंग और मार्जिन के लिए ईएम का उपयोग करें जहां रिक्ति को तत्व के स्वयं के फ़ॉन्ट आकार के साथ आनुपातिक रूप से स्केल किया जाना चाहिए। उदाहरण के लिए, यदि बटन टेक्स्ट का आकार बदलता है तो ईएम इकाइयों में बटन पैडिंग स्केल हो जाती है।"
      },
      {
        "question": "क्या मैं एक ही प्रोजेक्ट में एम और रेम को मिला सकता हूँ?",
        "answer": "हाँ। एक सामान्य पैटर्न फ़ॉन्ट आकार (वैश्विक स्थिरता) के लिए रेम और पैडिंग और मार्जिन (स्थानीय आनुपातिकता) जैसे घटक-आंतरिक रिक्ति के लिए ईएम है। यह आपको पूर्वानुमानित आकार और आनुपातिक घटक दोनों प्रदान करता है।"
      }
    ],
    "sections": [
      {
        "id": "quick-comparison",
        "title": "त्वरित तुलना",
        "table": {
          "headers": [
            "गुण",
            "ईएम",
            "रेम"
          ],
          "rows": [
            [
              "के सापेक्ष",
              "मूल तत्व फ़ॉन्ट आकार",
              "मूल तत्व फ़ॉन्ट आकार"
            ],
            [
              "व्यापक",
              "हाँ (नेस्टिंग के साथ यौगिक)",
              "नहीं (हमेशा रूट के सापेक्ष)"
            ],
            [
              "डिफ़ॉल्ट आधार",
              "विरासत में मिला फ़ॉन्ट आकार",
              "16px (ब्राउज़र डिफ़ॉल्ट)"
            ],
            [
              "के लिए सर्वोत्तम",
              "घटक-आंतरिक रिक्ति",
              "फ़ॉन्ट आकार, वैश्विक रिक्ति"
            ],
            [
              "पूर्वानुमान",
              "निचला (संदर्भ पर निर्भर करता है)",
              "उच्चतर (एकल संदर्भ बिंदु)"
            ]
          ]
        }
      },
      {
        "id": "what-is-em",
        "title": "ईएम क्या है?",
        "paragraphs": [
          "ईएम इकाई स्वयं तत्व के फ़ॉन्ट आकार (पैडिंग और मार्जिन जैसे गुणों के लिए) या मूल तत्व के फ़ॉन्ट आकार (फ़ॉन्ट-आकार संपत्ति के लिए) से संबंधित है। क्योंकि जब तत्वों को नेस्ट किया जाता है तो उन्हें यौगिक मान दिया जाता है, गहरे घटक पेड़ों में आकार अप्रत्याशित हो सकता है।",
          "उदाहरण के लिए, यदि माता-पिता का फ़ॉन्ट-आकार: 20px है और बच्चे का फ़ॉन्ट-आकार: 1.5em है, तो बच्चा 30px पर रेंडर करता है। यदि उस बच्चे में फ़ॉन्ट-आकार: 1.5em वाला तत्व भी शामिल है, तो यह 45px पर प्रस्तुत होता है।"
        ]
      },
      {
        "id": "what-is-rem",
        "title": "आरईएम क्या है?",
        "paragraphs": [
          "रेम इकाई (रूट ईएम) हमेशा रूट तत्व के फ़ॉन्ट आकार (<html>) से संबंधित होती है, जो सभी प्रमुख ब्राउज़रों में डिफ़ॉल्ट रूप से 16px होती है। एम के विपरीत, रेम नेस्टिंग के साथ मिश्रित नहीं होता है। 1.5rem हमेशा 24px (डिफ़ॉल्ट रूट मानते हुए) होता है, चाहे वह DOM ट्री में कहीं भी दिखाई दे।"
        ]
      },
      {
        "id": "code-examples",
        "title": "कोड उदाहरण",
        "code": "/* REM for font sizes - predictable */\nh1  font-size: 2rem;     /* 32px */\nh2  font-size: 1.5rem;   /* 24px */\np   font-size: 1rem;     /* 16px */\n\n/* EM for component spacing - proportional */\n.button \n  font-size: 1rem;\n  padding: 0.5em 1em;  /* scales with button text size */\n\n\n.button--large \n  font-size: 1.25rem;\n  /* padding automatically scales to 10px 20px */\n\n\n/* Common 62.5% trick for easier rem math */\nhtml  font-size: 62.5%;   /* 1rem = 10px */\nbody  font-size: 1.6rem;  /* restore 16px base */"
      },
      {
        "id": "best-practices",
        "title": "सर्वोत्तम प्रथाएं",
        "list": [
          "अपनी संपूर्ण साइट पर एक सुसंगत टाइपोग्राफ़िक स्केल बनाए रखने के लिए फ़ॉन्ट आकार के लिए रेम का उपयोग करें।",
          "पूर्वानुमानित, वैश्विक स्थिरता के लिए लेआउट रिक्ति (मार्जिन, ग्रिड अंतराल) के लिए रेम का उपयोग करें।",
          "जब आप घटक के स्वयं के फ़ॉन्ट आकार के साथ आनुपातिक रूप से रिक्ति को बढ़ाना चाहते हैं तो घटक पैडिंग के लिए ईएम का उपयोग करें।",
          "डीप एम नेस्टिंग से बचें - कंपाउंडिंग से मूल्यों की भविष्यवाणी करना और डीबग करना कठिन हो जाता है।",
          "एक स्पष्ट रूट फ़ॉन्ट आकार सेट करें - या तो ब्राउज़र को डिफ़ॉल्ट (16px) रखें या आसान गणित के लिए 62.5% ट्रिक का उपयोग करें।"
        ],
        "paragraphs": [
          "हमारे पीएक्स से आरईएम और पीएक्स से ईएम कन्वर्टर्स के साथ पिक्सल और रेम या ईएम इकाइयों के बीच तुरंत कनवर्ट करें।"
        ]
      }
    ]
  },
  "ja": {
    "faq": [
      {
        "question": "フォント サイズには em と rem を使用する必要がありますか?",
        "answer": "ほとんどの場合、フォント サイズには rem を使用します。 REM 単位はルート フォント サイズ (通常は 16 ピクセル) に相対しているため、予測可能で一貫性があります。 em は、親要素を基準にしてフォント サイズを拡大縮小する場合にのみ使用します。"
      },
      {
        "question": "1rem のピクセル数は何ですか?",
        "answer": "ブラウザではルート フォント サイズが 16 ピクセルに設定されているため、デフォルトでは 1 rem は 16 ピクセルに相当します。ルート フォント サイズを変更する場合 (例: html { font-size: 62.5%; })、1rem は 10px と等しくなります。"
      },
      {
        "question": "rem の代わりに em を使用する必要があるのはどのような場合ですか?",
        "answer": "要素自体のフォント サイズに比例して間隔を拡大する必要があるコンポーネントのパディングとマージンには em を使用します。たとえば、ボタンのテキスト サイズが変更されると、em 単位のボタン パディングが拡大縮小されます。"
      },
      {
        "question": "同じプロジェクト内で em と rem を混合できますか?",
        "answer": "はい。一般的なパターンは、フォント サイズ (グローバルな一貫性) の場合は rem、パディングやマージンなどのコンポーネント内部のスペース (ローカルな比例性) の場合は em です。これにより、予測可能なサイズ設定と比例コンポーネントの両方が得られます。"
      }
    ],
    "sections": [
      {
        "id": "quick-comparison",
        "title": "クイック比較",
        "table": {
          "headers": [
            "属性",
            "EM",
            "REM"
          ],
          "rows": [
            [
              "相対",
              "親要素のフォント サイズ",
              "ルート要素のフォントサイズ"
            ],
            [
              "カスケード",
              "はい (ネストのある複合)",
              "いいえ (常にルートに対して相対)"
            ],
            [
              "デフォルトのベース",
              "継承されたフォント サイズ",
              "16px (ブラウザのデフォルト)"
            ],
            [
              "",
              "コンポーネント内部に最適spacing",
              "フォント サイズ、グローバル スペース"
            ],
            [
              "予測可能性",
              "低め (コンテキストに依存)",
              "高め (単一の参照点)"
            ]
          ]
        }
      },
      {
        "id": "what-is-em",
        "title": "EM とは?",
        "paragraphs": [
          "em 単位は、要素自体のフォント サイズ (パディングやマージンなどのプロパティの場合) または親要素のフォント サイズ (フォントサイズプロパティ）。要素がネストされると em の値が複合するため、深いコンポーネント ツリーではサイズ設定が予測不能になる可能性があります。",
          "たとえば、親の font-size: 20px、子の font-size: 1.5em の場合、子は 30px でレンダリングされます。その子に font-size: 1.5em の要素も含まれている場合、その要素は 45 ピクセルでレンダリングされます。"
        ]
      },
      {
        "id": "what-is-rem",
        "title": "REM とは?",
        "paragraphs": [
          "rem 単位 (ルート em) は常にルート要素のフォント サイズ (<html>) を基準にしており、すべての主要なブラウザーでデフォルトは 16 ピクセルです。 em とは異なり、rem はネストと複合しません。 1.5rem は、DOM ツリー内のどこに表示されるかに関係なく、常に 24 ピクセル (デフォルトのルートを想定) です。"
        ]
      },
      {
        "id": "code-examples",
        "title": "コード例",
        "code": "/* REM for font sizes - predictable */\nh1  font-size: 2rem;     /* 32px */\nh2  font-size: 1.5rem;   /* 24px */\np   font-size: 1rem;     /* 16px */\n\n/* EM for component spacing - proportional */\n.button \n  font-size: 1rem;\n  padding: 0.5em 1em;  /* scales with button text size */\n\n\n.button--large \n  font-size: 1.25rem;\n  /* padding automatically scales to 10px 20px */\n\n\n/* Common 62.5% trick for easier rem math */\nhtml  font-size: 62.5%;   /* 1rem = 10px */\nbody  font-size: 1.6rem;  /* restore 16px base */"
      },
      {
        "id": "best-practices",
        "title": "ベスト プラクティス",
        "list": [
          "フォント サイズに rem を使用して、フォント サイズ全体で一貫したタイポグラフィック スケールを維持します。サイト全体。",
          "予測可能なグローバルな一貫性を保つため、レイアウトの間隔 (マージン、グリッドのギャップ) には rem を使用します。",
          "コンポーネント自身のフォント サイズに比例して間隔を調整したい場合は、コンポーネントのパディングに em を使用します。",
          "深い em のネストは避けてください。複合すると値の予測やデバッグが困難になります。",
          "明確なルート フォント サイズを設定します。または、ブラウザのデフォルトのままにしてください。 (16px) または、計算を簡単にする 62.5% のトリックを使用します。"
        ],
        "paragraphs": [
          "PX から REM および PX から EM コンバータを使用して、ピクセルとレムまたは em 単位の間で即座に変換します。"
        ]
      }
    ]
  },
  "ko": {
    "faq": [
      {
        "question": "글꼴 크기에 em 또는 rem을 사용해야 합니까?",
        "answer": "대부분의 경우 글꼴 크기에 rem을 사용하십시오. REM 단위는 루트 글꼴 크기(일반적으로 16px)를 기준으로 하므로 예측 가능하고 일관성이 있습니다. em은 상위 요소를 기준으로 글꼴 크기를 조정하려는 경우에만 사용하세요."
      },
      {
        "question": "1rem은 픽셀 단위로 무엇인가요?",
        "answer": "브라우저에서 루트 글꼴 크기를 16px로 설정하므로 기본적으로 1rem은 16px와 같습니다. 루트 글꼴 크기를 변경하면(예: html { 글꼴 크기: 62.5%; }) 1rem은 10px와 같습니다."
      },
      {
        "question": "rem 대신 em을 사용해야 하는 경우는 언제입니까?",
        "answer": "간격이 요소 자체 글꼴 크기에 비례하여 조정되어야 하는 구성 요소의 패딩 및 여백에 em을 사용합니다. 예를 들어 버튼 텍스트 크기가 변경되면 em 단위의 버튼 패딩 크기가 조정됩니다."
      },
      {
        "question": "동일한 프로젝트에서 em과 rem을 혼합할 수 있습니까?",
        "answer": "예. 일반적인 패턴은 글꼴 크기(전역 일관성)의 경우 rem이고 패딩 및 여백(로컬 비례)과 같은 구성 요소 내부 간격의 경우 em입니다. 이를 통해 예측 가능한 크기 조정 및 비례 구성요소를 모두 제공합니다."
      }
    ],
    "sections": [
      {
        "id": "quick-comparison",
        "title": "빠른 비교",
        "table": {
          "headers": [
            "속성",
            "EM",
            "REM"
          ],
          "rows": [
            [
              "기준:",
              "상위 요소 글꼴 크기",
              "루트 요소 글꼴 크기"
            ],
            [
              "계단식",
              "예 (중첩이 있는 화합물)",
              "아니요(항상 루트를 기준으로 함)"
            ],
            [
              "기본 기본",
              "상속된 글꼴 크기",
              "16px(브라우저 기본값)"
            ],
            [
              "최적의 용도",
              "구성 요소 내부 간격",
              "글꼴 크기, 전역 간격"
            ],
            [
              "예측성",
              "낮음(컨텍스트에 따라 다름)",
              "높음(단일 참조점)"
            ]
          ]
        }
      },
      {
        "id": "what-is-em",
        "title": "EM이란 무엇입니까?",
        "paragraphs": [
          "em 단위는 요소 자체의 글꼴 크기(패딩 및 여백과 같은 속성의 경우) 또는 상위 요소의 글꼴 크기(글꼴 크기 속성의 경우)에 상대적입니다. 요소가 중첩되면 em 값이 복합되기 때문에 깊은 구성 요소 트리에서 크기 조정이 예측 불가능해질 수 있습니다.",
          "예를 들어 부모의 글꼴 크기가 20px이고 자식의 글꼴 크기가 1.5em인 경우 자식은 30px로 렌더링됩니다. 해당 하위 항목에 글꼴 크기가 1.5em인 요소도 포함되어 있으면 45px로 렌더링됩니다."
        ]
      },
      {
        "id": "what-is-rem",
        "title": "REM이란 무엇입니까?",
        "paragraphs": [
          "rem 단위(루트 em)는 항상 루트 요소의 글꼴 크기(<html>)에 상대적이며 모든 주요 브라우저에서 기본값은 16px입니다. em과 달리 rem은 중첩과 복합되지 않습니다. 1.5rem은 DOM 트리에 나타나는 위치에 상관없이 항상 24px입니다(기본 루트로 가정)."
        ]
      },
      {
        "id": "code-examples",
        "title": "코드 예제",
        "code": "/* REM for font sizes - predictable */\nh1  font-size: 2rem;     /* 32px */\nh2  font-size: 1.5rem;   /* 24px */\np   font-size: 1rem;     /* 16px */\n\n/* EM for component spacing - proportional */\n.button \n  font-size: 1rem;\n  padding: 0.5em 1em;  /* scales with button text size */\n\n\n.button--large \n  font-size: 1.25rem;\n  /* padding automatically scales to 10px 20px */\n\n\n/* Common 62.5% trick for easier rem math */\nhtml  font-size: 62.5%;   /* 1rem = 10px */\nbody  font-size: 1.6rem;  /* restore 16px base */"
      },
      {
        "id": "best-practices",
        "title": "모범 사례",
        "list": [
          "글꼴 크기에 rem을 사용하여 전체에서 일관된 활자체 배율을 유지합니다. 사이트.",
          "예측 가능하고 전역적 일관성을 위해 레이아웃 간격(여백, 그리드 간격)에 rem을 사용합니다.",
          "구성 요소의 자체 글꼴 크기에 비례하여 간격을 조정하려면 구성 요소 패딩에 em을 사용하세요.",
          "깊은 em 중첩은 피하세요. 복합화하면 값을 예측하고 디버깅하기가 어렵습니다.",
          "루트 글꼴 크기를 명확하게 설정하세요. 브라우저 기본값(16px)을 유지하거나 더 쉬운 수학을 위한 62.5% 트릭."
        ],
        "paragraphs": [
          "PX에서 REM으로, PX에서 EM으로 변환기를 사용하여 픽셀과 rem 또는 em 단위를 즉시 변환합니다."
        ]
      }
    ]
  },
  "it": {
    "faq": [
      {
        "question": "Dovrei usare em o rem per le dimensioni dei caratteri?",
        "answer": "Nella maggior parte dei casi, utilizzare rem per le dimensioni dei caratteri. Le unità REM sono relative alla dimensione del carattere principale (solitamente 16px), rendendole prevedibili e coerenti. Utilizza em solo quando vuoi che la dimensione del carattere venga ridimensionata rispetto all'elemento principale."
      },
      {
        "question": "Che cos'è 1rem in pixel?",
        "answer": "Per impostazione predefinita, 1rem equivale a 16px perché i browser impostano la dimensione del carattere radice su 16px. Se modifichi la dimensione del carattere radice (ad esempio, html { font-size: 62.5%; }), allora 1rem equivale a 10px."
      },
      {
        "question": "Quando dovrei usare em invece di rem?",
        "answer": "Utilizza em per il riempimento e i margini sui componenti in cui la spaziatura deve ridimensionarsi proporzionalmente alla dimensione del carattere dell'elemento. Ad esempio, il riempimento del pulsante in unità em viene ridimensionato se cambia la dimensione del testo del pulsante."
      },
      {
        "question": "Posso combinare em e rem nello stesso progetto?",
        "answer": "Sì. Un modello comune è rem per le dimensioni dei caratteri (coerenza globale) ed em per la spaziatura interna al componente come riempimento e margini (proporzionalità locale). Ciò fornisce sia dimensioni prevedibili che componenti proporzionali."
      }
    ],
    "sections": [
      {
        "id": "quick-comparison",
        "title": "Confronto rapido",
        "table": {
          "headers": [
            "Attributo",
            "EM",
            "REM"
          ],
          "rows": [
            [
              "Relativo a",
              "Dimensione carattere elemento principale",
              "Dimensione carattere elemento radice"
            ],
            [
              "Cascata",
              "Sì (composti con annidamento)",
              "No (sempre relativo alla radice)"
            ],
            [
              "Base predefinita",
              "Dimensione carattere ereditato",
              "16px (impostazione predefinita del browser)"
            ],
            [
              "Ideale per",
              "Spaziatura interna al componente",
              "Dimensioni carattere, globali spaziatura"
            ],
            [
              "Prevedibilità",
              "Inferiore (dipende dal contesto)",
              "Più alto (punto di riferimento singolo)"
            ]
          ]
        }
      },
      {
        "id": "what-is-em",
        "title": "Cos'è EM?",
        "paragraphs": [
          "L'unità em è relativa alla dimensione del carattere dell'elemento stesso (per proprietà come riempimento e margine) o alla dimensione del carattere dell'elemento genitore (per la proprietà font-size). Poiché i valori em si compongono quando gli elementi vengono nidificati, il dimensionamento può diventare imprevedibile negli alberi dei componenti profondi.",
          "Ad esempio, se un genitore ha dimensione carattere: 20px e un figlio ha dimensione carattere: 1,5em, il figlio esegue il rendering a 30px. Se quel figlio contiene anche un elemento con dimensione carattere: 1,5em, viene visualizzato a 45px."
        ]
      },
      {
        "id": "what-is-rem",
        "title": "Cos'è REM?",
        "paragraphs": [
          "L'unità rem (root em) è sempre relativa alla dimensione carattere dell'elemento root (<html>), che per impostazione predefinita è 16px in tutti i principali browser. A differenza di em, rem non si combina con la nidificazione. 1.5rem è sempre 24px (assumendo la radice predefinita), indipendentemente da dove appare nell'albero DOM."
        ]
      },
      {
        "id": "code-examples",
        "title": "Esempi di codice",
        "code": "/* REM for font sizes - predictable */\nh1  font-size: 2rem;     /* 32px */\nh2  font-size: 1.5rem;   /* 24px */\np   font-size: 1rem;     /* 16px */\n\n/* EM for component spacing - proportional */\n.button \n  font-size: 1rem;\n  padding: 0.5em 1em;  /* scales with button text size */\n\n\n.button--large \n  font-size: 1.25rem;\n  /* padding automatically scales to 10px 20px */\n\n\n/* Common 62.5% trick for easier rem math */\nhtml  font-size: 62.5%;   /* 1rem = 10px */\nbody  font-size: 1.6rem;  /* restore 16px base */"
      },
      {
        "id": "best-practices",
        "title": "Best practice",
        "list": [
          "Utilizza rem per le dimensioni dei caratteri per mantenere una scala tipografica coerente nell'intero sito.",
          "Utilizza rem per la spaziatura del layout (margini, spazi nella griglia) per una coerenza globale prevedibile.",
          "Utilizza em per il riempimento del componente quando desideri che la spaziatura venga ridimensionata proporzionalmente alla dimensione del carattere del componente.",
          "Evita l'annidamento profondo dell'em: la composizione rende i valori difficili da prevedere ed eseguire il debug.",
          "Imposta una dimensione del carattere radice chiara: mantieni quella predefinita del browser (16px) oppure usa il trucco del 62,5% per calcoli più semplici."
        ],
        "paragraphs": [
          "Converti istantaneamente tra pixel e unità rem o em con i nostri convertitori da PX a REM e da PX a EM."
        ]
      }
    ]
  },
  "nl": {
    "faq": [
      {
        "question": "Moet ik em of rem gebruiken voor lettergroottes?",
        "answer": "Gebruik in de meeste gevallen rem voor lettergroottes. REM-eenheden zijn relatief ten opzichte van de hoofdlettergrootte (meestal 16px), waardoor ze voorspelbaar en consistent zijn. Gebruik em alleen als je de lettergrootte wilt schalen ten opzichte van het bovenliggende element."
      },
      {
        "question": "Wat is 1rem in pixels?",
        "answer": "Standaard is 1rem gelijk aan 16px omdat browsers de hoofdlettergrootte instellen op 16px. Als u de hoofdlettergrootte wijzigt (bijvoorbeeld html { font-size: 62,5%; }), dan is 1rem gelijk aan 10px."
      },
      {
        "question": "Wanneer moet ik em gebruiken in plaats van rem?",
        "answer": "Gebruik em voor opvulling en marges op componenten waarbij de spatiëring proportioneel moet worden geschaald met de eigen lettergrootte van het element. De opvulling van knoppen in em-eenheden wordt bijvoorbeeld geschaald als de tekstgrootte van de knop verandert."
      },
      {
        "question": "Kan ik em en rem combineren in hetzelfde project?",
        "answer": "Ja. Een gebruikelijk patroon is rem voor lettergroottes (algemene consistentie) en em voor interne spatiëring van componenten, zoals opvulling en marges (lokale evenredigheid). Dit geeft u zowel voorspelbare afmetingen als proportionele componenten."
      }
    ],
    "sections": [
      {
        "id": "quick-comparison",
        "title": "Snelle vergelijking",
        "table": {
          "headers": [
            "Kenmerk",
            "EM",
            "REM"
          ],
          "rows": [
            [
              "Relatief ten opzichte van",
              "Lettergrootte bovenliggend element",
              "Lettergrootte hoofdelement"
            ],
            [
              "Cascading",
              "Ja (samengestelde verbindingen met nesting)",
              "Nee (altijd relatief ten opzichte van de root)"
            ],
            [
              "Standaardbasis",
              "Overgenomen lettergrootte",
              "16px (standaard browser)"
            ],
            [
              "Beste voor",
              "Interne spatiëring van componenten",
              "Lettergroottes, globaal spatiëring"
            ],
            [
              "Voorspelbaarheid",
              "Lager (afhankelijk van de context)",
              "Hoger (enkel referentiepunt)"
            ]
          ]
        }
      },
      {
        "id": "what-is-em",
        "title": "Wat is EM?",
        "paragraphs": [
          "De em-eenheid is relatief ten opzichte van de lettergrootte van het element zelf (voor eigenschappen zoals opvulling en marge) of de lettergrootte van het bovenliggende element (voor de eigenschap font-size). Omdat em-waarden worden samengesteld wanneer elementen worden genest, kan de grootte onvoorspelbaar worden in diepe componentbomen.",
          "Als een ouder bijvoorbeeld de lettergrootte: 20px heeft en een kind de lettergrootte: 1,5em, wordt het kind weergegeven op 30px. Als dat onderliggende element ook een element bevat met lettergrootte: 1.5em, wordt het weergegeven op 45px."
        ]
      },
      {
        "id": "what-is-rem",
        "title": "Wat is REM?",
        "paragraphs": [
          "De rem-eenheid (root em) is altijd relatief ten opzichte van de lettergrootte van het hoofdelement (<html>), die in alle grote browsers standaard 16px is. In tegenstelling tot em, wordt rem niet gemengd met nesten. 1.5rem is altijd 24px (uitgaande van de standaardroot), ongeacht waar het in de DOM-structuur voorkomt."
        ]
      },
      {
        "id": "code-examples",
        "title": "Codevoorbeelden",
        "code": "/* REM for font sizes - predictable */\nh1  font-size: 2rem;     /* 32px */\nh2  font-size: 1.5rem;   /* 24px */\np   font-size: 1rem;     /* 16px */\n\n/* EM for component spacing - proportional */\n.button \n  font-size: 1rem;\n  padding: 0.5em 1em;  /* scales with button text size */\n\n\n.button--large \n  font-size: 1.25rem;\n  /* padding automatically scales to 10px 20px */\n\n\n/* Common 62.5% trick for easier rem math */\nhtml  font-size: 62.5%;   /* 1rem = 10px */\nbody  font-size: 1.6rem;  /* restore 16px base */"
      },
      {
        "id": "best-practices",
        "title": "Beste praktijken",
        "list": [
          "Gebruik rem voor lettergroottes om een consistente typografische schaal over uw hele oppervlak te behouden. site.",
          "Gebruik rem voor lay-outafstand (marges, rasteropeningen) voor voorspelbare, globale consistentie.",
          "Gebruik em voor componentopvulling als je wilt dat de afstand proportioneel wordt geschaald met de eigen lettergrootte van de component.",
          "Vermijd diepe em-nesting: samengestelde waarden maken het moeilijk om waarden te voorspellen en fouten op te sporen.",
          "Stel een duidelijke hoofdlettergrootte in - behoud de standaardinstelling van de browser (16px) of gebruik de 62,5%-truc voor eenvoudiger wiskunde."
        ],
        "paragraphs": [
          "Converteer direct tussen pixels en rem- of em-eenheden met onze PX naar REM- en PX naar EM-converters."
        ]
      }
    ]
  },
  "ar": {
    "faq": [
      {
        "question": "هل يجب أن أستخدم em أو rem لأحجام الخطوط؟",
        "answer": "استخدم rem لأحجام الخطوط في معظم الحالات. ترتبط وحدات REM بحجم الخط الجذر (عادةً 16 بكسل)، مما يجعلها متوقعة ومتسقة. استخدم em فقط عندما تريد تغيير حجم الخط بالنسبة إلى العنصر الأصلي."
      },
      {
        "question": "ما هو 1rem بالبكسل؟",
        "answer": "افتراضيًا، 1rem يساوي 16 بكسل لأن المتصفحات تقوم بتعيين حجم الخط الجذر على 16 بكسل. إذا قمت بتغيير حجم الخط الجذر (على سبيل المثال، html {font-size: 62.5%; })، فإن 1rem يساوي 10 بكسل."
      },
      {
        "question": "متى يجب أن أستخدم em بدلاً من rem؟",
        "answer": "استخدم em للحشو والهوامش على المكونات حيث يجب أن يتناسب التباعد مع حجم الخط الخاص بالعنصر. على سبيل المثال، يتم تغيير حجم حشوة الأزرار في وحدات em إذا تغير حجم نص الزر."
      },
      {
        "question": "هل يمكنني مزج em وrem في نفس المشروع؟",
        "answer": "نعم. النمط الشائع هو rem لأحجام الخطوط (التناسق العام) وem للتباعد الداخلي بين المكونات مثل الحشو والهوامش (التناسب المحلي). يمنحك هذا حجمًا يمكن التنبؤ به ومكونات متناسبة."
      }
    ],
    "sections": [
      {
        "id": "quick-comparison",
        "title": "مقارنة سريعة",
        "table": {
          "headers": [
            "السمة",
            "EM",
            "REM"
          ],
          "rows": [
            [
              "نسبة إلى",
              "حجم خط العنصر الأصلي",
              "حجم خط العنصر الجذر"
            ],
            [
              "متتالية",
              "نعم (المركبات المتداخلة)",
              "لا (دائمًا نسبة إلى الجذر)"
            ],
            [
              "القاعدة الافتراضية",
              "حجم الخط الموروث",
              "16 بكسل (الافتراضي للمتصفح)"
            ],
            [
              "الأفضل لـ",
              "التباعد الداخلي للمكونات",
              "أحجام الخطوط، عمومية تباعد"
            ],
            [
              "إمكانية التنبؤ",
              "أقل (يعتمد على السياق)",
              "أعلى (نقطة مرجعية واحدة)"
            ]
          ]
        }
      },
      {
        "id": "what-is-em",
        "title": "ما هو EM؟",
        "paragraphs": [
          "وحدة em مرتبطة بحجم خط العنصر نفسه (لخصائص مثل الحشو والهامش) أو حجم خط العنصر الأصلي (لخاصية حجم الخط). نظرًا لأن قيم em تتراكم عندما تكون العناصر متداخلة، فقد يصبح الحجم غير متوقع في أشجار المكونات العميقة.",
          "على سبيل المثال، إذا كان أحد الوالدين لديه حجم الخط: 20 بكسل وكان الطفل لديه حجم الخط: 1.5em، فسيتم عرض الطفل عند 30 بكسل. إذا كان هذا الطفل يحتوي أيضًا على عنصر بحجم الخط: 1.5em، فسيتم عرضه بحجم 45 بكسل."
        ]
      },
      {
        "id": "what-is-rem",
        "title": "ما هو REM؟",
        "paragraphs": [
          "وحدة rem (الجذر em) دائمًا ما تكون مرتبطة بحجم خط العنصر الجذر (<html>)، والذي يكون افتراضيًا 16 بكسل في جميع المتصفحات الرئيسية. على عكس em، لا يتضاعف rem مع التداخل. 1.5rem هو دائمًا 24 بكسل (بافتراض الجذر الافتراضي)، بغض النظر عن مكان ظهوره في شجرة DOM."
        ]
      },
      {
        "id": "code-examples",
        "title": "أمثلة التعليمات البرمجية",
        "code": "/* REM for font sizes - predictable */\nh1  font-size: 2rem;     /* 32px */\nh2  font-size: 1.5rem;   /* 24px */\np   font-size: 1rem;     /* 16px */\n\n/* EM for component spacing - proportional */\n.button \n  font-size: 1rem;\n  padding: 0.5em 1em;  /* scales with button text size */\n\n\n.button--large \n  font-size: 1.25rem;\n  /* padding automatically scales to 10px 20px */\n\n\n/* Common 62.5% trick for easier rem math */\nhtml  font-size: 62.5%;   /* 1rem = 10px */\nbody  font-size: 1.6rem;  /* restore 16px base */"
      },
      {
        "id": "best-practices",
        "title": "أفضل الممارسات",
        "list": [
          "استخدم rem لأحجام الخطوط للحفاظ على مقياس مطبعي ثابت عبر الموقع بأكمله.",
          "استخدم rem لتباعد التخطيط (الهوامش وفجوات الشبكة) للحصول على تناسق عالمي يمكن التنبؤ به.",
          "استخدم em لحشو المكونات عندما تريد تغيير حجم التباعد بشكل متناسب مع حجم الخط الخاص بالمكون.",
          "تجنب التداخل العميق - فالمركب يجعل من الصعب التنبؤ بالقيم وتصحيح الأخطاء.",
          "تعيين حجم خط جذر واضح - إما الاحتفاظ بالمتصفح الافتراضي (16 بكسل) أو استخدم خدعة 62.5% لتسهيل العمليات الحسابية."
        ],
        "paragraphs": [
          "التحويل بين وحدات البكسل ووحدات rem أو em على الفور باستخدام محولات PX إلى REM وPX إلى EM."
        ]
      }
    ]
  },
  "tr": {
    "faq": [
      {
        "question": "Yazı tipi boyutları için em mi yoksa rem mi kullanmalıyım?",
        "answer": "Çoğu durumda yazı tipi boyutları için rem kullanın. REM birimleri kök yazı tipi boyutuna göredir (genellikle 16 piksel), bu da onları öngörülebilir ve tutarlı kılar. Bunları yalnızca yazı tipi boyutunun ana öğeye göre ölçeklenmesini istediğinizde kullanın."
      },
      {
        "question": "Piksel cinsinden 1 rem nedir?",
        "answer": "Tarayıcılar kök yazı tipi boyutunu 16 piksel olarak ayarladığından, varsayılan olarak 1 rem 16 piksele eşittir. Kök yazı tipi boyutunu değiştirirseniz (örneğin, html { font-size: 62,5%; }), bu durumda 1rem, 10 piksele eşittir."
      },
      {
        "question": "Ne zaman rem yerine em kullanmalıyım?",
        "answer": "Boşluğun öğenin kendi yazı tipi boyutuyla orantılı olarak ölçeklenmesi gereken bileşenler üzerindeki dolgu ve kenar boşlukları için em kullanın. Örneğin, düğme metni boyutu değişirse em birimlerindeki düğme dolgusu ölçeklenir."
      },
      {
        "question": "Onları ve rem'i aynı projede karıştırabilir miyim?",
        "answer": "Evet. Yaygın bir desen, yazı tipi boyutları (genel tutarlılık) için rem ve dolgu ve kenar boşlukları (yerel orantı) gibi bileşen-iç boşlukları için em'dir. Bu size hem öngörülebilir boyutlandırma hem de orantılı bileşenler sağlar."
      }
    ],
    "sections": [
      {
        "id": "quick-comparison",
        "title": "Hızlı Karşılaştırma",
        "table": {
          "headers": [
            "Öznitelik",
            "EM",
            "REM"
          ],
          "rows": [
            [
              "Göreli olarak",
              "Üst öğe yazı tipi boyutu",
              "Kök öğe yazı tipi boyutu"
            ],
            [
              "Basamaklı",
              "Evet (yuvalamayla birleşir)",
              "Hayır (her zaman köke göre)"
            ],
            [
              "Varsayılan temel",
              "Devralınan yazı tipi boyutu",
              "16 piksel (tarayıcı varsayılanı)"
            ],
            [
              "Şunun için en iyisi",
              "Bileşen-dahili boşluk",
              "Yazı tipi boyutları, genel aralık"
            ],
            [
              "Tahmin edilebilirlik",
              "Daha düşük (bağlama bağlıdır)",
              "Daha yüksek (tek referans noktası)"
            ]
          ]
        }
      },
      {
        "id": "what-is-em",
        "title": "EM Nedir?",
        "paragraphs": [
          "Em birimi, öğenin kendisinin yazı tipi boyutuna (dolgu ve kenar boşluğu gibi özellikler için) veya ana öğenin yazı tipi boyutuna (font-size özelliği için) bağlıdır. Öğeler yuvalandığında em değerleri birleştiğinden, derin bileşen ağaçlarında boyutlandırma tahmin edilemez hale gelebilir.",
          "Örneğin, bir ebeveynin font-size: 20px ve bir çocuğun font-size: 1.5em olması durumunda, alt çocuk 30px boyutunda oluşturulur. Bu alt öğe aynı zamanda yazı tipi boyutu: 1,5em olan bir öğe içeriyorsa, 45 piksel boyutunda oluşturulur."
        ]
      },
      {
        "id": "what-is-rem",
        "title": "REM Nedir?",
        "paragraphs": [
          "Uzak birim (kök em) her zaman kök öğenin yazı tipi boyutuna (<html>) bağlıdır; bu, tüm ana tarayıcılarda varsayılan olarak 16 pikseldir. Onların aksine, rem yuvalamayla birleşmez. 1,5rem, DOM ağacının neresinde göründüğüne bakılmaksızın her zaman 24 pikseldir (varsayılan kök varsayılarak)."
        ]
      },
      {
        "id": "code-examples",
        "title": "Kod Örnekleri",
        "code": "/* REM for font sizes - predictable */\nh1  font-size: 2rem;     /* 32px */\nh2  font-size: 1.5rem;   /* 24px */\np   font-size: 1rem;     /* 16px */\n\n/* EM for component spacing - proportional */\n.button \n  font-size: 1rem;\n  padding: 0.5em 1em;  /* scales with button text size */\n\n\n.button--large \n  font-size: 1.25rem;\n  /* padding automatically scales to 10px 20px */\n\n\n/* Common 62.5% trick for easier rem math */\nhtml  font-size: 62.5%;   /* 1rem = 10px */\nbody  font-size: 1.6rem;  /* restore 16px base */"
      },
      {
        "id": "best-practices",
        "title": "En İyi Uygulamalar",
        "list": [
          "Tüm yazı tipiniz boyunca tutarlı bir tipografik ölçek sağlamak için yazı tipi boyutları için rem kullanın sitesi.",
          "Tahmin edilebilir, küresel tutarlılık için düzen aralığı (kenar boşlukları, ızgara boşlukları) için rem kullanın.",
          "Boşluğun bileşenin kendi yazı tipi boyutuyla orantılı olarak ölçeklenmesini istediğinizde bileşen dolgusu için bunları kullanın.",
          "Derin yerleştirmeden kaçının - bileşik oluşturma, değerlerin tahmin edilmesini ve hata ayıklamasını zorlaştırır.",
          "Net bir kök yazı tipi boyutu ayarlayın - ya tarayıcı varsayılanını koruyun (16 piksel) veya daha kolay matematik için %62,5 numarasını kullanın."
        ],
        "paragraphs": [
          "PX'ten REM'e ve PX'ten EM'ye dönüştürücülerimizle pikseller ve uzak veya em birimleri arasında anında dönüşüm yapın."
        ]
      }
    ]
  },
  "pl": {
    "faq": [
      {
        "question": "Czy powinienem używać em czy rem do określania rozmiarów czcionek?",
        "answer": "W większości przypadków używaj rem do określania rozmiarów czcionek. Jednostki REM odnoszą się do głównego rozmiaru czcionki (zwykle 16 pikseli), dzięki czemu są przewidywalne i spójne. Używaj em tylko wtedy, gdy chcesz, aby rozmiar czcionki był skalowany względem elementu nadrzędnego."
      },
      {
        "question": "Co to jest 1rem w pikselach?",
        "answer": "Domyślnie 1rem równa się 16px, ponieważ przeglądarki ustawiają główny rozmiar czcionki na 16px. Jeśli zmienisz główny rozmiar czcionki (np. html {font-size: 62,5%; }), wówczas 1rem będzie równe 10 pikseli."
      },
      {
        "question": "Kiedy powinienem ich używać zamiast rem?",
        "answer": "Użyj ich do dopełnienia i marginesów komponentów, gdzie odstępy powinny być skalowane proporcjonalnie do rozmiaru czcionki elementu. Na przykład dopełnienie przycisków w jednostkach em skaluje się, jeśli zmienia się rozmiar tekstu przycisku."
      },
      {
        "question": "Czy mogę mieszać je i rem w tym samym projekcie?",
        "answer": "Tak. Typowym wzorcem jest rem dla rozmiarów czcionek (globalna spójność) i em dla wewnętrznych odstępów komponentów, takich jak dopełnienie i marginesy (lokalna proporcjonalność). Daje to zarówno przewidywalny rozmiar, jak i komponenty proporcjonalne."
      }
    ],
    "sections": [
      {
        "id": "quick-comparison",
        "title": "Szybkie porównanie",
        "table": {
          "headers": [
            "Atrybut",
            "EM",
            "REM"
          ],
          "rows": [
            [
              "Względne",
              "Rozmiar czcionki elementu nadrzędnego",
              "Rozmiar czcionki elementu głównego"
            ],
            [
              "Kaskadowanie",
              "Tak (łączone z zagnieżdżeniem)",
              "Nie (zawsze względem katalogu głównego)"
            ],
            [
              "Domyślna podstawa",
              "Dziedziczony rozmiar czcionki",
              "16px (domyślne dla przeglądarki)"
            ],
            [
              "Najlepsze dla",
              "Odstępy wewnętrzne komponentów",
              "Rozmiary czcionek, globalne spacing"
            ],
            [
              "Przewidywalność",
              "Niższa (w zależności od kontekstu)",
              "Wyższa (pojedynczy punkt odniesienia)"
            ]
          ]
        }
      },
      {
        "id": "what-is-em",
        "title": "Co to jest EM?",
        "paragraphs": [
          "Jednostka em jest zależna od rozmiaru czcionki samego elementu (w przypadku właściwości takich jak dopełnienie i margines) lub rozmiaru czcionki elementu nadrzędnego (w przypadku właściwości czcionki-rozmiar). Ponieważ wartości em są złożone, gdy elementy są zagnieżdżone, w przypadku głębokich drzew komponentów rozmiar może stać się nieprzewidywalny.",
          "Na przykład, jeśli element nadrzędny ma rozmiar czcionki: 20 pikseli, a element podrzędny ma rozmiar czcionki: 1,5 em, element podrzędny renderuje się w rozmiarze 30 pikseli. Jeśli to dziecko zawiera również element o rozmiarze czcionki: 1,5em, renderuje się w rozdzielczości 45 pikseli."
        ]
      },
      {
        "id": "what-is-rem",
        "title": "Co to jest REM?",
        "paragraphs": [
          "Jednostka rem (root em) jest zawsze określana względem rozmiaru czcionki elementu głównego (<html>), który we wszystkich głównych przeglądarkach domyślnie wynosi 16 pikseli. W przeciwieństwie do nich, rem nie łączy się z zagnieżdżaniem. 1,5rem ma zawsze 24 piksele (zakładając domyślny katalog główny), niezależnie od tego, gdzie pojawia się w drzewie DOM."
        ]
      },
      {
        "id": "code-examples",
        "title": "Przykłady kodu",
        "code": "/* REM for font sizes - predictable */\nh1  font-size: 2rem;     /* 32px */\nh2  font-size: 1.5rem;   /* 24px */\np   font-size: 1rem;     /* 16px */\n\n/* EM for component spacing - proportional */\n.button \n  font-size: 1rem;\n  padding: 0.5em 1em;  /* scales with button text size */\n\n\n.button--large \n  font-size: 1.25rem;\n  /* padding automatically scales to 10px 20px */\n\n\n/* Common 62.5% trick for easier rem math */\nhtml  font-size: 62.5%;   /* 1rem = 10px */\nbody  font-size: 1.6rem;  /* restore 16px base */"
      },
      {
        "id": "best-practices",
        "title": "Najlepsze praktyki",
        "list": [
          "Użyj rem do określenia rozmiarów czcionek, aby zachować spójną skalę typograficzną w całym tekście site.",
          "Użyj rem do odstępów w układzie (marginesy, odstępy w siatce), aby uzyskać przewidywalną, globalną spójność.",
          "Użyj em do dopełnienia komponentu, jeśli chcesz, aby odstępy były skalowane proporcjonalnie do rozmiaru czcionki komponentu.",
          "Unikaj głębokiego zagnieżdżania - składanie utrudnia przewidywanie i debugowanie wartości.",
          "Ustaw wyraźny rozmiar czcionki głównej - albo pozostaw domyślną przeglądarkę (16px) lub użyj sztuczki 62,5%, aby ułatwić matematykę."
        ],
        "paragraphs": [
          "Błyskawicznie konwertuj pomiędzy pikselami i jednostkami rem lub em za pomocą naszych konwerterów PX na REM i PX na EM."
        ]
      }
    ]
  },
  "id": {
    "faq": [
      {
        "question": "Haruskah saya menggunakan em atau rem untuk ukuran font?",
        "answer": "Gunakan rem untuk ukuran font dalam banyak kasus. Unit REM relatif terhadap ukuran font utama (biasanya 16 piksel), sehingga dapat diprediksi dan konsisten. Gunakan em hanya jika Anda ingin ukuran font berskala relatif terhadap elemen induk."
      },
      {
        "question": "Apa yang dimaksud dengan 1rem dalam piksel?",
        "answer": "Secara default, 1rem sama dengan 16px karena browser menyetel ukuran font root menjadi 16px. Jika Anda mengubah ukuran font root (misalnya, html { font-size: 62.5%; }), maka 1rem sama dengan 10px."
      },
      {
        "question": "Kapan saya harus menggunakan em daripada rem?",
        "answer": "Gunakan em untuk padding dan margin pada komponen yang jarak spasinya harus diskalakan secara proporsional dengan ukuran font elemen itu sendiri. Misalnya, padding tombol dalam unit em akan berskala jika ukuran teks tombol berubah."
      },
      {
        "question": "Dapatkah saya mencampur em dan rem dalam proyek yang sama?",
        "answer": "Ya. Pola yang umum adalah rem untuk ukuran font (konsistensi global) dan em untuk spasi internal komponen seperti padding dan margin (proporsionalitas lokal). Ini memberi Anda ukuran yang dapat diprediksi dan komponen proporsional."
      }
    ],
    "sections": [
      {
        "id": "quick-comparison",
        "title": "Perbandingan Cepat",
        "table": {
          "headers": [
            "Atribut",
            "EM",
            "REM"
          ],
          "rows": [
            [
              "Relatif terhadap",
              "Ukuran font elemen induk",
              "Ukuran font elemen akar"
            ],
            [
              "Bertingkat",
              "Ya (gabungan dengan sarang)",
              "Tidak (selalu relatif terhadap root)"
            ],
            [
              "Basis default",
              "Ukuran font yang diwarisi",
              "16px (default browser)"
            ],
            [
              "Terbaik untuk",
              "Spasi internal komponen",
              "Ukuran font, global spacing"
            ],
            [
              "Prediktabilitas",
              "Lebih Rendah (tergantung konteks)",
              "Lebih Tinggi (titik referensi tunggal)"
            ]
          ]
        }
      },
      {
        "id": "what-is-em",
        "title": "Apa Itu EM?",
        "paragraphs": [
          "Unit em relatif terhadap ukuran font elemen itu sendiri (untuk properti seperti padding dan margin) atau ukuran font elemen induk (untuk properti font-size). Karena nilai em digabungkan ketika elemen disarangkan, ukuran menjadi tidak dapat diprediksi di pohon komponen dalam.",
          "Misalnya, jika induk memiliki ukuran font: 20 piksel dan anak memiliki ukuran font: 1,5em, anak akan merender pada 30 piksel. Jika turunan tersebut juga berisi elemen dengan ukuran font: 1,5em, ia akan dirender pada 45px."
        ]
      },
      {
        "id": "what-is-rem",
        "title": "Apa Itu REM?",
        "paragraphs": [
          "Unit rem (root em) selalu relatif terhadap ukuran font elemen root (<html>), yang defaultnya adalah 16px di semua browser utama. Berbeda dengan em, rem tidak digabungkan dengan nesting. 1,5rem selalu berukuran 24 piksel (dengan asumsi root default), di mana pun ia muncul di pohon DOM."
        ]
      },
      {
        "id": "code-examples",
        "title": "Contoh Kode",
        "code": "/* REM for font sizes - predictable */\nh1  font-size: 2rem;     /* 32px */\nh2  font-size: 1.5rem;   /* 24px */\np   font-size: 1rem;     /* 16px */\n\n/* EM for component spacing - proportional */\n.button \n  font-size: 1rem;\n  padding: 0.5em 1em;  /* scales with button text size */\n\n\n.button--large \n  font-size: 1.25rem;\n  /* padding automatically scales to 10px 20px */\n\n\n/* Common 62.5% trick for easier rem math */\nhtml  font-size: 62.5%;   /* 1rem = 10px */\nbody  font-size: 1.6rem;  /* restore 16px base */"
      },
      {
        "id": "best-practices",
        "title": "Praktik Terbaik",
        "list": [
          "Gunakan rem untuk ukuran font guna mempertahankan skala tipografi yang konsisten di seluruh ukuran font Anda situs.",
          "Gunakan rem untuk penspasian tata letak (margin, celah grid) untuk konsistensi global yang dapat diprediksi.",
          "Gunakan em untuk padding komponen bila Anda ingin penskalaan disesuaikan secara proporsional dengan ukuran font komponen itu sendiri.",
          "Hindari penumpukan em yang dalam - penggabungan membuat nilai sulit diprediksi dan di-debug.",
          "Tetapkan ukuran font root yang jelas - pertahankan default browser (16 piksel) atau gunakan trik 62,5% untuk matematika yang lebih mudah."
        ],
        "paragraphs": [
          "Konversi antara piksel dan unit rem atau em secara instan dengan pengonversi PX ke REM dan PX ke EM kami."
        ]
      }
    ]
  },
  "ru": {
    "faq": [
      {
        "question": "Должен ли я использовать em или rem для размеров шрифта?",
        "answer": "В большинстве случаев используйте rem для размеров шрифта. Единицы REM относятся к размеру корневого шрифта (обычно 16 пикселей), что делает их предсказуемыми и последовательными. Используйте em только в том случае, если вы хотите, чтобы размер шрифта масштабировался относительно родительского элемента."
      },
      {
        "question": "Что такое 1rem в пикселях?",
        "answer": "По умолчанию 1rem равен 16 пикселям, поскольку браузеры устанавливают корневой размер шрифта равным 16 пикселей. Если вы измените размер корневого шрифта (например, html { font-size: 62.5%; }), то 1rem будет равен 10 пикселям."
      },
      {
        "question": "Когда мне следует использовать em вместо rem?",
        "answer": "Используйте em для заполнения и полей в компонентах, где интервал должен масштабироваться пропорционально собственному размеру шрифта элемента. Например, заполнение кнопок в единицах em масштабируется при изменении размера текста кнопки."
      },
      {
        "question": "Могу ли я смешивать em и rem в одном проекте?",
        "answer": "Да. Распространенным шаблоном является rem для размеров шрифта (глобальная согласованность) и em для внутреннего интервала компонента, такого как отступы и поля (локальная пропорциональность). Это дает вам как предсказуемый размер, так и пропорциональные компоненты."
      }
    ],
    "sections": [
      {
        "id": "quick-comparison",
        "title": "Быстрое сравнение",
        "table": {
          "headers": [
            "Атрибут",
            "EM",
            "REM"
          ],
          "rows": [
            [
              "Относительно",
              "Размера шрифта родительского элемента",
              "Размера шрифта корневого элемента"
            ],
            [
              "Каскадного",
              "Да (составные соединения)",
              "Нет (всегда относительно корня)"
            ],
            [
              "Базовый размер по умолчанию",
              "Наследуемый размер шрифта",
              "16 пикселей (по умолчанию браузера)"
            ],
            [
              "Наилучший вариант для",
              "Внутренний интервал компонента",
              "Размеры шрифтов, глобальные интервал"
            ],
            [
              "Предсказуемость",
              "Ниже (зависит от контекста)",
              "Выше (единая контрольная точка)"
            ]
          ]
        }
      },
      {
        "id": "what-is-em",
        "title": "Что такое EM?",
        "paragraphs": [
          "Единица измерения em относится к размеру шрифта самого элемента (для таких свойств, как отступы и поля) или к размеру шрифта родительского элемента (для свойства font-size). Поскольку значения em суммируются, когда элементы вложены, размер может стать непредсказуемым в глубоких деревьях компонентов.",
          "Например, если родительский элемент имеет размер шрифта: 20 пикселей, а дочерний элемент имеет размер шрифта: 1,5em, дочерний элемент отображается с размером 30 пикселей. Если этот дочерний элемент также содержит элемент с размером шрифта: 1,5em, он отображается с размером 45 пикселей."
        ]
      },
      {
        "id": "what-is-rem",
        "title": "Что такое REM?",
        "paragraphs": [
          "Единица rem (корневой em) всегда относительна к размеру шрифта корневого элемента (<html>), который по умолчанию составляет 16 пикселей во всех основных браузерах. В отличие от em, rem не объединяется с вложенностью. Размер 1,5rem всегда равен 24 пикселям (при условии, что это корень по умолчанию), независимо от того, где он отображается в дереве DOM."
        ]
      },
      {
        "id": "code-examples",
        "title": "Примеры кода",
        "code": "/* REM for font sizes - predictable */\nh1  font-size: 2rem;     /* 32px */\nh2  font-size: 1.5rem;   /* 24px */\np   font-size: 1rem;     /* 16px */\n\n/* EM for component spacing - proportional */\n.button \n  font-size: 1rem;\n  padding: 0.5em 1em;  /* scales with button text size */\n\n\n.button--large \n  font-size: 1.25rem;\n  /* padding automatically scales to 10px 20px */\n\n\n/* Common 62.5% trick for easier rem math */\nhtml  font-size: 62.5%;   /* 1rem = 10px */\nbody  font-size: 1.6rem;  /* restore 16px base */"
      },
      {
        "id": "best-practices",
        "title": "Лучшие практики",
        "list": [
          "Используйте rem для размеров шрифта, чтобы поддерживать единообразный типографский масштаб по всему вашему изображению. site.",
          "Используйте rem для интервалов макета (полей, пробелов в сетке) для предсказуемой глобальной согласованности.",
          "Используйте em для заполнения компонентов, если вы хотите, чтобы интервал масштабировался пропорционально собственному размеру шрифта компонента.",
          "Избегайте глубокого вложения em - составные значения затрудняют прогнозирование и отладку.",
          "Установите чистый корневой размер шрифта - либо оставьте браузер по умолчанию (16 пикселей). или используйте трюк 62,5% для упрощения вычислений."
        ],
        "paragraphs": [
          "Мгновенно конвертируйте пиксели в единицы измерения rem или em с помощью наших преобразователей PX в REM и PX в EM."
        ]
      }
    ]
  }
};
