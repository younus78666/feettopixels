import type { LocalizedDocMap } from "./doc-types";

export const content: LocalizedDocMap = {
  "en": {
    "faq": [
      {
        "question": "What is the difference between px and rem?",
        "answer": "Pixels (px) are fixed-size units that do not scale with user preferences. REM units are relative to the root element's font size (typically 16px). Using rem allows your layout to scale when users change their browser's default font size."
      },
      {
        "question": "How do I convert px to rem?",
        "answer": "Divide the pixel value by the root font size. With the default 16px base: 24px / 16 = 1.5rem. If the root font size is changed to 10px for easier math: 24px / 10 = 2.4rem."
      },
      {
        "question": "Why should I use rem instead of px?",
        "answer": "REM units respect user accessibility settings. If a user sets their browser default font to 20px (for better readability), rem-based layouts scale accordingly while px-based layouts remain fixed. This improves accessibility compliance."
      },
      {
        "question": "What is the default root font size?",
        "answer": "The default root font size in all major browsers is 16px. This means 1rem = 16px by default. Some developers set html { font-size: 62.5% } to make 1rem = 10px for easier mental math."
      },
      {
        "question": "Can I use rem for spacing and sizing too?",
        "answer": "Yes. REM units work for any CSS property - margin, padding, width, height, border-radius, and more. Using rem for spacing alongside font sizes creates a consistently scalable design system."
      }
    ],
    "sections": [
      {
        "id": "how-it-works",
        "title": "How the PX to REM Converter Works",
        "paragraphs": [
          "REM stands for root em - a CSS length unit equal to the font-size of the root (html) element. Every browser defaults the root to 16 pixels, so 1rem equals 16px out of the box. Converting a pixel value to rem is division: rem = px / root-font-size. With the default base, 24px becomes 24/16 = 1.5rem, 12px becomes 0.75rem, and 48px becomes 3rem. The converter above performs this calculation and also supports the '10px base' convention, where setting html { font-size: 62.5%; } makes 1rem = 10px so the mental math simplifies to 'shift the decimal one place'.",
          "The crucial difference from EM is that REM is not affected by nesting. A 1.5rem margin on a deeply nested div is exactly 24px regardless of any font-size inheritance chain. This removes the compounding problem described in em-vs-rem and makes REM the preferred unit in modern design systems, including Tailwind CSS and MUI. You keep the responsive-to-user-preference advantage (REM scales when users change their browser's default font size) without the unpredictability of cascading sizes.",
          "For component-scoped scaling where you do want the compound behavior, use EM instead - see our px-to-em converter. For viewport-relative responsive units, combine REM with clamp() and vw, covered in px-to-vw."
        ]
      },
      {
        "id": "when-to-use",
        "title": "When to Use REM",
        "paragraphs": [
          "REM is the default-safe choice for most layout and typography sizing on modern websites. Use it whenever predictability and accessibility both matter."
        ],
        "list": [
          "Base typography scale - body, paragraph, heading sizes expressed in rem will scale together when users zoom.",
          "Margin, padding, and gap values in a design system that should respect user font preferences.",
          "Container max-widths like max-width: 72rem which stay proportional to text.",
          "Responsive breakpoints in media queries, so 'tablet' triggers at the same user-perceived width regardless of root font size.",
          "Icon sizing tied to typography scale, keeping icons in balance with headings and body copy.",
          "Form field heights and widths, so input controls scale with accessibility settings."
        ]
      },
      {
        "id": "practical-examples",
        "title": "Practical Examples",
        "paragraphs": [
          "Below is the most-referenced conversion table for web developers: pixels to REM with the default 16px root, and the alternative 10px root that many developers enable for cleaner numbers."
        ],
        "table": {
          "headers": ["Pixels", "REM (16px root)", "REM (10px root)", "Common Use"],
          "rows": [
            ["4px", "0.25rem", "0.4rem", "Tight internal spacing"],
            ["8px", "0.5rem", "0.8rem", "Small gap, compact padding"],
            ["12px", "0.75rem", "1.2rem", "Caption text"],
            ["14px", "0.875rem", "1.4rem", "Secondary body text"],
            ["16px", "1rem", "1.6rem", "Body text baseline"],
            ["20px", "1.25rem", "2rem", "Lead paragraph"],
            ["24px", "1.5rem", "2.4rem", "Subheading (H4)"],
            ["32px", "2rem", "3.2rem", "Section heading (H2/H3)"],
            ["48px", "3rem", "4.8rem", "Hero heading (H1)"],
            ["64px", "4rem", "6.4rem", "Display heading"]
          ]
        }
      },
      {
        "id": "common-mistakes",
        "title": "Common Mistakes to Avoid",
        "paragraphs": [
          "REM conversions are straightforward, but a few common missteps can quietly break accessibility and responsive behavior."
        ],
        "list": [
          "Setting html { font-size: 16px } - this overrides user preferences and defeats REM's accessibility benefit. Use a percentage like 100% or 62.5% instead.",
          "Mixing px for some values and rem for others inconsistently, creating a layout that only partially scales with user zoom.",
          "Forgetting that REM always ignores nesting - if you need component-scoped scaling, reach for EM.",
          "Using 1rem when you mean 16px without documenting the assumption, making refactors risky if someone changes the root.",
          "Over-converting - 1px borders and hairline dividers are fine as px because they should not scale with text.",
          "Using REM in media queries without considering that some browsers historically ignored root font changes in media query context - em is slightly safer there."
        ]
      }
    ]
  },
  "es": {
    "faq": [
      {
        "question": "¿Cuál es la diferencia entre px y rem?",
        "answer": "Los píxeles (px) son unidades de tamaño fijo que no se escalan según las preferencias del usuario. Las unidades REM son relativas al tamaño de fuente del elemento raíz (normalmente 16 píxeles). El uso de rem permite que su diseño se escale cuando los usuarios cambian el tamaño de fuente predeterminado de su navegador."
      },
      {
        "question": "¿Cómo convierto px a rem?",
        "answer": "Divida el valor de píxel por el tamaño de fuente raíz. Con la base predeterminada de 16px: 24px/16 = 1,5rem. Si el tamaño de fuente raíz se cambia a 10 px para facilitar las matemáticas: 24 px / 10 = 2,4 rem."
      },
      {
        "question": "¿Por qué debería usar rem en lugar de px?",
        "answer": "Las unidades REM respetan la configuración de accesibilidad del usuario. Si un usuario configura la fuente predeterminada de su navegador en 20px (para una mejor legibilidad), los diseños basados ​​en rem se escalan en consecuencia, mientras que los diseños basados ​​en px permanecen fijos. Esto mejora el cumplimiento de la accesibilidad."
      },
      {
        "question": "¿Cuál es el tamaño de fuente raíz predeterminado?",
        "answer": "El tamaño de fuente raíz predeterminado en todos los principales navegadores es 16px. Esto significa 1rem = 16px por defecto. Algunos desarrolladores configuran html { font-size: 62.5% } para hacer 1rem = 10px para facilitar el cálculo mental."
      },
      {
        "question": "¿Puedo usar rem para el espaciado y el tamaño también?",
        "answer": "Sí. Las unidades REM funcionan para cualquier propiedad CSS: margen, relleno, ancho, alto, radio de borde y más. El uso de rem para el espaciado junto con los tamaños de fuente crea un sistema de diseño consistentemente escalable."
      }
    ],
    "sections": [
      {
        "id": "overview",
        "title": "Descripción general",
        "paragraphs": []
      }
    ]
  },
  "fr": {
    "faq": [
      {
        "question": "Quelle est la différence entre px et rem ?",
        "answer": "Les pixels (px) sont des unités de taille fixe qui ne s'adaptent pas aux préférences de l'utilisateur. Les unités REM sont relatives à la taille de police de l'élément racine (généralement 16 px). L'utilisation de rem permet à votre mise en page d'évoluer lorsque les utilisateurs modifient la taille de police par défaut de leur navigateur."
      },
      {
        "question": "Comment convertir px en rem ?",
        "answer": "Divisez la valeur en pixels par la taille de police racine. Avec la base 16px par défaut : 24px / 16 = 1,5rem. Si la taille de la police racine est modifiée à 10 px pour faciliter les calculs : 24px / 10 = 2,4rem."
      },
      {
        "question": "Pourquoi devrais-je utiliser rem au lieu de px ?",
        "answer": "Les unités REM respectent les paramètres d'accessibilité de l'utilisateur. Si un utilisateur définit la police par défaut de son navigateur sur 20 px (pour une meilleure lisibilité), les mises en page basées sur rem évoluent en conséquence tandis que les mises en page basées sur px restent fixes. Cela améliore la conformité en matière d'accessibilité."
      },
      {
        "question": "Quelle est la taille de police racine par défaut ?",
        "answer": "La taille de police racine par défaut dans tous les principaux navigateurs est de 16 px. Cela signifie 1rem = 16px par défaut. Certains développeurs définissent html { font-size: 62.5% } pour que 1rem = 10px facilite le calcul mental."
      },
      {
        "question": "Puis-je également utiliser rem pour l'espacement et le dimensionnement ?",
        "answer": "Oui. Les unités REM fonctionnent pour n'importe quelle propriété CSS : marge, remplissage, largeur, hauteur, rayon de bordure, etc. L'utilisation de rem pour l'espacement en fonction des tailles de police crée un système de conception évolutif de manière cohérente."
      }
    ],
    "sections": [
      {
        "id": "overview",
        "title": "Présentation",
        "paragraphs": []
      }
    ]
  },
  "de": {
    "faq": [
      {
        "question": "Was ist der Unterschied zwischen px und rem?",
        "answer": "Pixel (px) sind Einheiten fester Größe, die nicht mit den Benutzereinstellungen skaliert werden. REM-Einheiten sind relativ zur Schriftgröße des Stammelements (normalerweise 16 Pixel). Durch die Verwendung von rem kann Ihr Layout skaliert werden, wenn Benutzer die Standardschriftgröße ihres Browsers ändern."
      },
      {
        "question": "Wie konvertiere ich px in rem?",
        "answer": "Dividieren Sie den Pixelwert durch die Stammschriftgröße. Mit der standardmäßigen 16px-Basis: 24px / 16 = 1,5rem. Wenn die Stammschriftgröße zur einfacheren Berechnung auf 10 Pixel geändert wird: 24 Pixel / 10 = 2,4 rem."
      },
      {
        "question": "Warum sollte ich rem anstelle von px verwenden?",
        "answer": "REM-Einheiten respektieren die Benutzereinstellungen für die Barrierefreiheit. Wenn ein Benutzer die Standardschriftart seines Browsers auf 20 Pixel einstellt (zur besseren Lesbarkeit), werden rem-basierte Layouts entsprechend skaliert, während px-basierte Layouts fest bleiben. Dies verbessert die Einhaltung der Barrierefreiheit."
      },
      {
        "question": "Was ist die Standard-Root-Schriftgröße?",
        "answer": "Die Standard-Root-Schriftgröße in allen gängigen Browsern beträgt 16 Pixel. Dies bedeutet standardmäßig 1rem = 16px. Einige Entwickler stellen HTML {font-size: 62.5% } so ein, dass 1rem = 10px ist, um die mentale Mathematik zu erleichtern."
      },
      {
        "question": "Kann ich rem auch für Abstände und Größen verwenden?",
        "answer": "Ja. REM-Einheiten funktionieren für jede CSS-Eigenschaft - Rand, Innenabstand, Breite, Höhe, Rahmenradius und mehr. Durch die Verwendung von rem für Abstände neben Schriftgrößen entsteht ein konsistent skalierbares Designsystem."
      }
    ],
    "sections": [
      {
        "id": "overview",
        "title": "Übersicht",
        "paragraphs": []
      }
    ]
  },
  "pt": {
    "faq": [
      {
        "question": "Qual é a diferença entre px e rem?",
        "answer": "Pixels (px) são unidades de tamanho fixo que não se adaptam às preferências do usuário. As unidades REM são relativas ao tamanho da fonte do elemento raiz (normalmente 16px). Usar rem permite que seu layout seja dimensionado quando os usuários alteram o tamanho da fonte padrão do navegador."
      },
      {
        "question": "Como faço para converter px em rem?",
        "answer": "Divida o valor do pixel pelo tamanho da fonte raiz. Com a base padrão de 16px: 24px / 16 = 1,5rem. Se o tamanho da fonte raiz for alterado para 10px para facilitar a matemática: 24px / 10 = 2,4rem."
      },
      {
        "question": "Por que devo usar rem em vez de px?",
        "answer": "As unidades REM respeitam as configurações de acessibilidade do usuário. Se um usuário definir a fonte padrão do navegador como 20px (para melhor legibilidade), os layouts baseados em rem serão dimensionados de acordo, enquanto os layouts baseados em px permanecerão fixos. Isso melhora a conformidade com a acessibilidade."
      },
      {
        "question": "Qual é o tamanho da fonte raiz padrão?",
        "answer": "O tamanho da fonte raiz padrão em todos os principais navegadores é 16px. Isso significa 1rem = 16px por padrão. Alguns desenvolvedores definem html { font-size: 62.5% } para fazer 1rem = 10px para facilitar a matemática mental."
      },
      {
        "question": "Posso usar rem para espaçamento e dimensionamento também?",
        "answer": "Sim. As unidades REM funcionam para qualquer propriedade CSS - margem, preenchimento, largura, altura, raio da borda e muito mais. Usar rem para espaçamento junto com tamanhos de fonte cria um sistema de design consistentemente escalonável."
      }
    ],
    "sections": [
      {
        "id": "overview",
        "title": "Visão geral",
        "paragraphs": []
      }
    ]
  },
  "hi": {
    "faq": [
      {
        "question": "पीएक्स और रेम के बीच क्या अंतर है?",
        "answer": "पिक्सेल (पीएक्स) निश्चित आकार की इकाइयाँ हैं जो उपयोगकर्ता की प्राथमिकताओं के अनुरूप नहीं होती हैं। REM इकाइयाँ मूल तत्व के फ़ॉन्ट आकार (आमतौर पर 16px) से संबंधित होती हैं। जब उपयोगकर्ता अपने ब्राउज़र का डिफ़ॉल्ट फ़ॉन्ट आकार बदलते हैं तो रेम का उपयोग करने से आपका लेआउट स्केल हो जाता है।"
      },
      {
        "question": "मैं पीएक्स को रेम में कैसे परिवर्तित करूं?",
        "answer": "पिक्सेल मान को मूल फ़ॉन्ट आकार से विभाजित करें। डिफ़ॉल्ट 16px आधार के साथ: 24px / 16 = 1.5rem. यदि आसान गणित के लिए रूट फ़ॉन्ट आकार को 10px में बदल दिया गया है: 24px / 10 = 2.4rem।"
      },
      {
        "question": "मुझे px के स्थान पर rem का उपयोग क्यों करना चाहिए?",
        "answer": "REM इकाइयाँ उपयोगकर्ता पहुंच सेटिंग्स का सम्मान करती हैं। यदि कोई उपयोगकर्ता अपने ब्राउज़र के डिफ़ॉल्ट फ़ॉन्ट को 20px (बेहतर पठनीयता के लिए) पर सेट करता है, तो रेम-आधारित लेआउट तदनुसार स्केल होते हैं जबकि px-आधारित लेआउट स्थिर रहते हैं। इससे पहुंच-योग्यता अनुपालन में सुधार होता है."
      },
      {
        "question": "डिफ़ॉल्ट रूट फ़ॉन्ट आकार क्या है?",
        "answer": "सभी प्रमुख ब्राउज़रों में डिफ़ॉल्ट रूट फ़ॉन्ट आकार 16px है। इसका मतलब डिफ़ॉल्ट रूप से 1rem = 16px है। कुछ डेवलपर्स आसान मानसिक गणित के लिए 1rem = 10px बनाने के लिए html {फ़ॉन्ट-आकार: 62.5% } सेट करते हैं।"
      },
      {
        "question": "क्या मैं रिक्ति और आकार के लिए भी रेम का उपयोग कर सकता हूँ?",
        "answer": "हाँ। REM इकाइयाँ किसी भी CSS प्रॉपर्टी के लिए काम करती हैं - मार्जिन, पैडिंग, चौड़ाई, ऊँचाई, बॉर्डर-त्रिज्या, और बहुत कुछ। फ़ॉन्ट आकार के साथ रिक्ति के लिए रेम का उपयोग एक सतत स्केलेबल डिज़ाइन प्रणाली बनाता है।"
      }
    ],
    "sections": [
      {
        "id": "overview",
        "title": "सिंहावलोकन",
        "paragraphs": []
      }
    ]
  },
  "ja": {
    "faq": [
      {
        "question": "px と rem の違いは何ですか?",
        "answer": "ピクセル (px) は、ユーザー設定に応じて拡大縮小されない固定サイズの単位です。 REM 単位は、ルート要素のフォント サイズ (通常は 16 ピクセル) に相対します。 rem を使用すると、ユーザーがブラウザのデフォルトのフォント サイズを変更したときにレイアウトを拡大縮小できます。"
      },
      {
        "question": "px を rem に変換するにはどうすればよいですか?",
        "answer": "ピクセル値をルート フォント サイズで除算します。デフォルトの 16px ベースの場合: 24px / 16 = 1.5rem。計算を容易にするためにルート フォント サイズが 10px に変更された場合: 24px / 10 = 2.4rem."
      },
      {
        "question": "px の代わりに rem を使用する必要があるのはなぜですか?",
        "answer": "REM 単位はユーザーのアクセシビリティ設定を尊重します。ユーザーがブラウザのデフォルト フォントを 20px に設定すると (読みやすさを向上させるため)、rem ベースのレイアウトはそれに応じて拡大縮小されますが、px ベースのレイアウトは固定されたままになります。これにより、アクセシビリティのコンプライアンスが向上します。"
      },
      {
        "question": "デフォルトのルート フォント サイズは何ですか?",
        "answer": "すべての主要なブラウザのデフォルトのルート フォント サイズは 16 ピクセルです。これは、デフォルトで 1rem = 16px を意味します。開発者の中には、暗算を容易にするために html { font-size: 62.5% } を 1rem = 10px に設定している人もいます。"
      },
      {
        "question": "間隔やサイズ変更にも rem を使用できますか?",
        "answer": "はい。 REM 単位は、マージン、パディング、幅、高さ、境界線の半径など、あらゆる CSS プロパティで機能します。フォント サイズに加えて間隔に rem を使用すると、一貫してスケーラブルなデザイン システムが作成されます。"
      }
    ],
    "sections": [
      {
        "id": "overview",
        "title": "概要",
        "paragraphs": []
      }
    ]
  },
  "ko": {
    "faq": [
      {
        "question": "px와 rem의 차이점은 무엇입니까?",
        "answer": "픽셀(px)은 사용자 기본 설정에 따라 확장되지 않는 고정 크기 단위입니다. REM 단위는 루트 요소의 글꼴 크기(일반적으로 16px)를 기준으로 합니다. rem을 사용하면 사용자가 브라우저의 기본 글꼴 크기를 변경할 때 레이아웃의 크기를 조정할 수 있습니다."
      },
      {
        "question": "px를 rem으로 어떻게 변환합니까?",
        "answer": "픽셀 값을 루트 글꼴 크기로 나눕니다. 기본 16px 기준: 24px / 16 = 1.5rem. 더 쉬운 계산을 위해 루트 글꼴 크기를 10px로 변경한 경우: 24px / 10 = 2.4rem."
      },
      {
        "question": "왜 px 대신 rem을 사용해야 합니까?",
        "answer": "REM 단위는 사용자 접근성 설정을 존중합니다. 사용자가 브라우저 기본 글꼴을 20px(더 나은 가독성을 위해)로 설정하면 rem 기반 레이아웃은 그에 따라 크기가 조정되고 px 기반 레이아웃은 고정된 상태로 유지됩니다. 이렇게 하면 접근성 규정 준수가 향상됩니다."
      },
      {
        "question": "기본 루트 글꼴 크기는 얼마입니까?",
        "answer": "모든 주요 브라우저의 기본 루트 글꼴 크기는 16픽셀입니다. 이는 기본적으로 1rem = 16px을 의미합니다. 일부 개발자는 암산을 더 쉽게 하기 위해 html {font-size: 62.5% }를 1rem = 10px로 설정합니다."
      },
      {
        "question": "간격과 크기 조정에도 rem을 사용할 수 있나요?",
        "answer": "예. REM 단위는 여백, 패딩, 너비, 높이, 테두리 반경 등 모든 CSS 속성에 작동합니다. 글꼴 크기와 함께 간격에 rem을 사용하면 일관되게 확장 가능한 디자인 시스템이 만들어집니다."
      }
    ],
    "sections": [
      {
        "id": "overview",
        "title": "개요",
        "paragraphs": []
      }
    ]
  },
  "it": {
    "faq": [
      {
        "question": "Qual è la differenza tra px e rem?",
        "answer": "I pixel (px) sono unità di dimensione fissa che non si adattano alle preferenze dell'utente. Le unità REM sono relative alla dimensione del carattere dell'elemento root (tipicamente 16px). L'utilizzo di rem consente al layout di ridimensionarsi quando gli utenti modificano la dimensione del carattere predefinita del browser."
      },
      {
        "question": "Come faccio a convertire px in rem?",
        "answer": "Dividi il valore dei pixel per la dimensione del carattere radice. Con la base predefinita di 16px: 24px / 16 = 1,5rem. Se la dimensione del carattere root viene modificata in 10px per calcoli più semplici: 24px / 10 = 2.4rem."
      },
      {
        "question": "Perché dovrei usare rem invece di px?",
        "answer": "Le unità REM rispettano le impostazioni di accessibilità dell'utente. Se un utente imposta il carattere predefinito del browser su 20px (per una migliore leggibilità), i layout basati su rem si ridimensionano di conseguenza mentre i layout basati su px rimangono fissi. Ciò migliora la conformità all'accessibilità."
      },
      {
        "question": "Qual è la dimensione del carattere root predefinita?",
        "answer": "La dimensione del carattere root predefinita in tutti i principali browser è 16px. Ciò significa 1rem = 16px per impostazione predefinita. Alcuni sviluppatori impostano html { font-size: 62.5% } in modo che 1rem = 10px per facilitare i calcoli mentali."
      },
      {
        "question": "Posso utilizzare rem anche per la spaziatura e il dimensionamento?",
        "answer": "Sì. Le unità REM funzionano per qualsiasi proprietà CSS: margine, riempimento, larghezza, altezza, raggio del bordo e altro. L'utilizzo di rem per la spaziatura insieme alle dimensioni dei caratteri crea un sistema di progettazione costantemente scalabile."
      }
    ],
    "sections": [
      {
        "id": "overview",
        "title": "Panoramica",
        "paragraphs": []
      }
    ]
  },
  "nl": {
    "faq": [
      {
        "question": "Wat is het verschil tussen px en rem?",
        "answer": "Pixels (px) zijn eenheden met een vaste grootte die niet schalen met gebruikersvoorkeuren. REM-eenheden zijn relatief ten opzichte van de lettergrootte van het hoofdelement (doorgaans 16px). Door rem te gebruiken, kan uw lay-out worden geschaald wanneer gebruikers de standaardlettergrootte van hun browser wijzigen."
      },
      {
        "question": "Hoe converteer ik px naar rem?",
        "answer": "Deel de pixelwaarde door de hoofdlettergrootte. Met de standaard 16px-basis: 24px / 16 = 1,5rem. Als de hoofdlettergrootte wordt gewijzigd naar 10px voor eenvoudiger rekenen: 24px / 10 = 2,4rem."
      },
      {
        "question": "Waarom zou ik rem gebruiken in plaats van px?",
        "answer": "REM-eenheden respecteren de instellingen voor gebruikerstoegankelijkheid. Als een gebruiker het standaardlettertype van zijn browser instelt op 20px (voor een betere leesbaarheid), worden op rem gebaseerde lay-outs dienovereenkomstig geschaald, terwijl op px gebaseerde lay-outs vast blijven. Dit verbetert de naleving van de toegankelijkheidsregels."
      },
      {
        "question": "Wat is de standaard hoofdlettergrootte?",
        "answer": "De standaard hoofdlettergrootte in alle grote browsers is 16px. Dit betekent standaard 1rem = 16px. Sommige ontwikkelaars hebben html { font-size: 62,5% } ingesteld om 1rem = 10px te maken voor eenvoudiger hoofdrekenen."
      },
      {
        "question": "Kan ik rem ook gebruiken voor spatiëring en grootte?",
        "answer": "Ja. REM-eenheden werken voor elke CSS-eigenschap: marge, opvulling, breedte, hoogte, randradius en meer. Door rem te gebruiken voor spatiëring naast lettergroottes ontstaat een consistent schaalbaar ontwerpsysteem."
      }
    ],
    "sections": [
      {
        "id": "overview",
        "title": "Overzicht",
        "paragraphs": []
      }
    ]
  },
  "ar": {
    "faq": [
      {
        "question": "ما الفرق بين px وrem؟",
        "answer": "وحدات البكسل (px) هي وحدات ذات حجم ثابت لا تتغير حسب تفضيلات المستخدم. ترتبط وحدات REM بحجم خط العنصر الجذر (عادةً 16 بكسل). يتيح استخدام rem إمكانية تغيير حجم تخطيطك عندما يقوم المستخدمون بتغيير حجم الخط الافتراضي للمتصفح الخاص بهم."
      },
      {
        "question": "كيف يمكنني تحويل px إلى rem؟",
        "answer": "تقسيم قيمة البكسل على حجم الخط الجذر. مع القاعدة الافتراضية 16 بكسل: 24 بكسل / 16 = 1.5 ريم. إذا تم تغيير حجم الخط الجذر إلى 10 بكسل لتسهيل العمليات الحسابية: 24px / 10 = 2.4rem."
      },
      {
        "question": "لماذا يجب علي استخدام rem بدلاً من px؟",
        "answer": "تحترم وحدات REM إعدادات إمكانية الوصول للمستخدم. إذا قام المستخدم بتعيين الخط الافتراضي للمتصفح الخاص به على 20 بكسل (لتسهيل القراءة بشكل أفضل)، يتم تغيير حجم التخطيطات المستندة إلى rem وفقًا لذلك بينما تظل التخطيطات المستندة إلى px ثابتة. يؤدي هذا إلى تحسين توافق إمكانية الوصول."
      },
      {
        "question": "ما هو حجم الخط الجذر الافتراضي؟",
        "answer": "حجم الخط الجذر الافتراضي في جميع المتصفحات الرئيسية هو 16 بكسل. هذا يعني أن 1rem = 16px بشكل افتراضي. قام بعض المطورين بتعيين html {font-size: 62.5% } لجعل 1rem = 10px لتسهيل العمليات الحسابية الذهنية."
      },
      {
        "question": "هل يمكنني استخدام rem للتباعد والتحجيم أيضًا؟",
        "answer": "نعم. تعمل وحدات REM مع أي خاصية CSS - الهامش والحشوة والعرض والارتفاع ونصف القطر الحدودي والمزيد. يؤدي استخدام rem للتباعد جنبًا إلى جنب مع أحجام الخطوط إلى إنشاء نظام تصميم قابل للتطوير بشكل متسق."
      }
    ],
    "sections": [
      {
        "id": "overview",
        "title": "نظرة عامة",
        "paragraphs": []
      }
    ]
  },
  "tr": {
    "faq": [
      {
        "question": "px ve rem arasındaki fark nedir?",
        "answer": "Pikseller (px), kullanıcı tercihlerine göre ölçeklenmeyen sabit boyutlu birimlerdir. REM birimleri kök öğenin yazı tipi boyutuna (genellikle 16 piksel) bağlıdır. Rem kullanmak, kullanıcılar tarayıcılarının varsayılan yazı tipi boyutunu değiştirdiğinde düzeninizin ölçeklenmesine olanak tanır."
      },
      {
        "question": "Px'i rem'e nasıl dönüştürebilirim?",
        "answer": "Piksel değerini kök yazı tipi boyutuna bölün. Varsayılan 16px tabanıyla: 24px / 16 = 1,5rem. Daha kolay matematik için kök yazı tipi boyutu 10 piksel olarak değiştirilirse: 24 piksel / 10 = 2,4 rem."
      },
      {
        "question": "Neden px yerine rem kullanmalıyım?",
        "answer": "REM birimleri kullanıcı erişilebilirlik ayarlarına saygı gösterir. Bir kullanıcı, tarayıcısının varsayılan yazı tipini (daha iyi okunabilirlik için) 20 piksele ayarlarsa, piksel tabanlı düzenler sabit kalırken, rem tabanlı düzenler buna göre ölçeklenir. Bu, erişilebilirlik uyumluluğunu artırır."
      },
      {
        "question": "Varsayılan kök yazı tipi boyutu nedir?",
        "answer": "Tüm büyük tarayıcılardaki varsayılan kök yazı tipi boyutu 16 pikseldir. Bu, varsayılan olarak 1rem = 16px anlamına gelir. Bazı geliştiriciler zihinsel matematiği kolaylaştırmak için html { font-size: 62,5% } değerini 1rem = 10px olacak şekilde ayarladı."
      },
      {
        "question": "Rem'i aralık ve boyutlandırma için de kullanabilir miyim?",
        "answer": "Evet. REM birimleri herhangi bir CSS özelliği için çalışır (kenar boşluğu, dolgu, genişlik, yükseklik, kenarlık yarıçapı ve daha fazlası). Yazı tipi boyutlarının yanı sıra aralık için rem kullanılması tutarlı bir şekilde ölçeklenebilir bir tasarım sistemi oluşturur."
      }
    ],
    "sections": [
      {
        "id": "overview",
        "title": "Genel Bakış",
        "paragraphs": []
      }
    ]
  },
  "pl": {
    "faq": [
      {
        "question": "Jaka jest różnica między px i rem?",
        "answer": "Piksele (px) to jednostki o stałym rozmiarze, które nie skalują się zgodnie z preferencjami użytkownika. Jednostki REM odnoszą się do rozmiaru czcionki elementu głównego (zwykle 16 pikseli). Użycie rem umożliwia skalowanie układu, gdy użytkownicy zmienią domyślny rozmiar czcionki w przeglądarce."
      },
      {
        "question": "Jak przekonwertować px na rem?",
        "answer": "Podziel wartość piksela przez główny rozmiar czcionki. Przy domyślnej podstawie 16px: 24px / 16 = 1,5rem. Jeśli główny rozmiar czcionki zostanie zmieniony na 10 pikseli dla łatwiejszej matematyki: 24 piksele / 10 = 2,4rem."
      },
      {
        "question": "Dlaczego powinienem używać rem zamiast px?",
        "answer": "Jednostki REM uwzględniają ustawienia dostępności użytkownika. Jeśli użytkownik ustawi domyślną czcionkę przeglądarki na 20 pikseli (dla lepszej czytelności), układy oparte na rem zostaną odpowiednio skalowane, podczas gdy układy oparte na px pozostaną niezmienione. Poprawia to zgodność z zasadami dostępności."
      },
      {
        "question": "Jaki jest domyślny rozmiar czcionki głównej?",
        "answer": "Domyślny rozmiar czcionki głównej we wszystkich głównych przeglądarkach to 16 pikseli. Oznacza to domyślnie 1rem = 16px. Niektórzy programiści ustawiają HTML {font-size: 62,5% }, aby uzyskać 1rem = 10px, co ułatwia obliczenia matematyczne."
      },
      {
        "question": "Czy mogę używać rem również do ustawiania odstępów i zmiany rozmiaru?",
        "answer": "Tak. Jednostki REM działają dla dowolnej właściwości CSS - marginesu, dopełnienia, szerokości, wysokości, promienia obramowania i innych. Użycie rem do odstępów obok rozmiarów czcionek tworzy spójnie skalowalny system projektowania."
      }
    ],
    "sections": [
      {
        "id": "overview",
        "title": "Przegląd",
        "paragraphs": []
      }
    ]
  },
  "id": {
    "faq": [
      {
        "question": "Apa perbedaan antara px dan rem?",
        "answer": "Piksel (px) adalah unit berukuran tetap yang tidak diskalakan sesuai preferensi pengguna. Unit REM relatif terhadap ukuran font elemen root (biasanya 16px). Menggunakan rem memungkinkan tata letak Anda untuk diskalakan ketika pengguna mengubah ukuran font default browser mereka."
      },
      {
        "question": "Bagaimana cara mengonversi px ke rem?",
        "answer": "Bagi nilai piksel dengan ukuran font root. Dengan basis default 16px: 24px / 16 = 1,5rem. Jika ukuran font root diubah menjadi 10px untuk perhitungan yang lebih mudah: 24px / 10 = 2.4rem."
      },
      {
        "question": "Mengapa saya harus menggunakan rem daripada px?",
        "answer": "Unit REM menghormati pengaturan aksesibilitas pengguna. Jika pengguna menyetel font default browser mereka ke 20px (untuk keterbacaan yang lebih baik), tata letak berbasis rem akan disesuaikan skalanya sementara tata letak berbasis px tetap. Hal ini meningkatkan kepatuhan aksesibilitas."
      },
      {
        "question": "Berapa ukuran font root default?",
        "answer": "Ukuran font root default di semua browser utama adalah 16 piksel. Ini berarti 1rem = 16px secara default. Beberapa pengembang menyetel html { font-size: 62.5% } untuk membuat 1rem = 10px agar perhitungan mental lebih mudah."
      },
      {
        "question": "Dapatkah saya menggunakan rem untuk spasi dan ukuran juga?",
        "answer": "Ya. Unit REM berfungsi untuk semua properti CSS - margin, padding, lebar, tinggi, radius batas, dan banyak lagi. Menggunakan rem untuk spasi di samping ukuran font akan menciptakan sistem desain yang dapat diskalakan secara konsisten."
      }
    ],
    "sections": [
      {
        "id": "overview",
        "title": "Ikhtisar",
        "paragraphs": []
      }
    ]
  },
  "ru": {
    "faq": [
      {
        "question": "В чем разница между px и rem?",
        "answer": "Пиксели (px) - это единицы фиксированного размера, которые не масштабируются в соответствии с предпочтениями пользователя. Единицы REM относятся к размеру шрифта корневого элемента (обычно 16 пикселей). Использование rem позволяет масштабировать ваш макет, когда пользователи меняют размер шрифта по умолчанию в своем браузере."
      },
      {
        "question": "Как преобразовать px в rem?",
        "answer": "Делите значение пикселя на размер корневого шрифта. С базой 16 пикселей по умолчанию: 24 пикселя / 16 = 1,5 рем. Если размер корневого шрифта изменен на 10 пикселей для упрощения вычислений: 24 пикселей / 10 = 2,4 rem."
      },
      {
        "question": "Почему мне следует использовать rem вместо пикселей?",
        "answer": "Единицы REM учитывают настройки специальных возможностей пользователя. Если пользователь устанавливает шрифт по умолчанию в браузере на 20 пикселей (для лучшей читаемости), макеты на основе rem масштабируются соответствующим образом, а макеты на основе пикселей остаются фиксированными. Это повышает соответствие требованиям специальных возможностей."
      },
      {
        "question": "Каков размер корневого шрифта по умолчанию?",
        "answer": "Размер корневого шрифта по умолчанию во всех основных браузерах составляет 16 пикселей. Это означает, что 1rem = 16 пикселей по умолчанию. Некоторые разработчики устанавливают html {font-size: 62.5% } так, чтобы 1rem = 10 пикселей для упрощения вычислений в уме."
      },
      {
        "question": "Могу ли я также использовать rem для интервалов и размеров?",
        "answer": "Да. Единицы REM подходят для любого свойства CSS - поля, отступа, ширины, высоты, радиуса границы и т. д. Использование rem для интервалов вместе с размерами шрифтов создает последовательно масштабируемую систему дизайна."
      }
    ],
    "sections": [
      {
        "id": "overview",
        "title": "Обзор",
        "paragraphs": []
      }
    ]
  }
};
