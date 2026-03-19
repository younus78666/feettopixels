import type { LocalizedDocMap } from "./doc-types";

export const content: LocalizedDocMap = {
  "en": {
    "faq": [
      {
        "question": "How do I convert pixels to points?",
        "answer": "Multiply the pixel value by 72/96 (which equals 0.75). For example, 16px x 0.75 = 12pt. This assumes the standard 96 DPI screen resolution. Points are 1/72 of an inch, while CSS pixels are 1/96 of an inch."
      },
      {
        "question": "Why are pixels and points different sizes?",
        "answer": "Points come from traditional typography where 1 point = 1/72 inch. CSS pixels are defined as 1/96 inch. Since 72/96 = 0.75, one CSS pixel equals 0.75 points. A 12pt font displays at 16px on screen."
      },
      {
        "question": "When should I use points instead of pixels?",
        "answer": "Use points for print stylesheets (CSS @media print) and when matching web typography to print design specifications. Points are the standard unit in print design software like InDesign and Word."
      },
      {
        "question": "What is the relationship between pt, px, and DPI?",
        "answer": "At 96 DPI (CSS standard): 1pt = 1.333px. At 72 DPI: 1pt = 1px. The formula is: pt = px x 72 / DPI. The standard conversion assumes 96 DPI, which is the CSS reference pixel."
      },
      {
        "question": "How do common font sizes compare between px and pt?",
        "answer": "8pt = 10.667px, 10pt = 13.333px, 11pt = 14.667px, 12pt = 16px, 14pt = 18.667px, 18pt = 24px, 24pt = 32px, 36pt = 48px, 72pt = 96px."
      }
    ],
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "paragraphs": []
      }
    ]
  },
  "es": {
    "faq": [
      {
        "question": "¿Cómo convierto píxeles en puntos?",
        "answer": "Multiplica el valor del píxel por 72/96 (que equivale a 0,75). Por ejemplo, 16 px x 0,75 = 12 pt. Esto supone la resolución de pantalla estándar de 96 DPI. Los puntos miden 1/72 de pulgada, mientras que los píxeles CSS miden 1/96 de pulgada."
      },
      {
        "question": "¿Por qué los píxeles y los puntos tienen diferentes tamaños?",
        "answer": "Los puntos provienen de la tipografía tradicional donde 1 punto = 1/72 de pulgada. Los píxeles CSS se definen como 1/96 de pulgada. Dado que 72/96 = 0,75, un píxel CSS equivale a 0,75 puntos. Una fuente de 12 puntos se muestra a 16 píxeles en la pantalla."
      },
      {
        "question": "¿Cuándo debo usar puntos en lugar de píxeles?",
        "answer": "Utilice puntos para imprimir hojas de estilo (CSS @media print) y cuando combine la tipografía web con las especificaciones de diseño de impresión. Los puntos son la unidad estándar en software de diseño de impresión como InDesign y Word."
      },
      {
        "question": "¿Cuál es la relación entre pt, px y DPI?",
        "answer": "A 96 DPI (estándar CSS): 1 punto = 1,333 px. A 72 DPI: 1 punto = 1 px. La fórmula es: pt = px x 72 / DPI. La conversión estándar asume 96 DPI, que es el píxel de referencia CSS."
      },
      {
        "question": "¿Cómo se comparan los tamaños de fuente comunes entre px y pt?",
        "answer": "8pt = 10.667px, 10pt = 13.333px, 11pt = 14.667px, 12pt = 16px, 14pt = 18.667px, 18pt = 24 px, 24 pt = 32 px, 36 pt = 48 px, 72 pt = 96 px."
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
        "question": "Comment convertir des pixels en points ?",
        "answer": "Multipliez la valeur du pixel par 72/96 (ce qui équivaut à 0,75). Par exemple, 16 px x 0,75 = 12 pt. Cela suppose la résolution d’écran standard de 96 DPI. Les points mesurent 1/72 de pouce, tandis que les pixels CSS mesurent 1/96 de pouce."
      },
      {
        "question": "Pourquoi les pixels et les points sont-ils de tailles différentes ?",
        "answer": "Les points proviennent de la typographie traditionnelle où 1 point = 1/72 de pouce. Les pixels CSS sont définis comme 1/96 de pouce. Puisque 72/96 = 0,75, un pixel CSS équivaut à 0,75 point. Une police de 12 pts s'affiche à 16 px à l'écran."
      },
      {
        "question": "Quand dois-je utiliser des points au lieu de pixels ?",
        "answer": "Utilisez des points pour les feuilles de style d'impression (CSS @media print) et pour faire correspondre la typographie Web aux spécifications de conception d'impression. Les points sont l'unité standard dans les logiciels de conception d'impression comme InDesign et Word."
      },
      {
        "question": "Quelle est la relation entre pt, px et DPI ?",
        "answer": "À 96 DPI (norme CSS) : 1 pt = 1,333 px. À 72 DPI : 1 pt = 1 px. La formule est : pt = px x 72 / DPI. La conversion standard suppose 96 DPI, qui est le pixel de référence CSS."
      },
      {
        "question": "Comment les tailles de police courantes se comparent-elles entre px et pt ?",
        "answer": "8pt = 10,667px, 10pt = 13,333px, 11pt = 14,667px, 12pt = 16px, 14pt = 18,667px, 18pt = 24 px, 24 pts = 32 px, 36 pts = 48 px, 72 pts = 96 px."
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
        "question": "Wie konvertiere ich Pixel in Punkte?",
        "answer": "Multiplizieren Sie den Pixelwert mit 72/96 (was 0,75 entspricht). Beispiel: 16px x 0,75 = 12pt. Dies setzt die standardmäßige Bildschirmauflösung von 96 DPI voraus. Punkte haben eine Größe von 1/72 Zoll, während CSS-Pixel 1/96 Zoll haben."
      },
      {
        "question": "Warum haben Pixel und Punkte unterschiedliche Größen?",
        "answer": "Punkte stammen aus der traditionellen Typografie, bei der 1 Punkt = 1/72 Zoll. CSS-Pixel sind als 1/96 Zoll definiert. Da 72/96 = 0,75, entspricht ein CSS-Pixel 0,75 Punkten. Eine 12pt-Schriftart wird mit 16 Pixel auf dem Bildschirm angezeigt."
      },
      {
        "question": "Wann sollte ich Punkte anstelle von Pixeln verwenden?",
        "answer": "Verwenden Sie Punkte für Druck-Stylesheets (CSS @media print) und wenn Sie Webtypografie an Druckdesignspezifikationen anpassen. Punkte sind die Standardeinheit in Druckdesign-Software wie InDesign und Word."
      },
      {
        "question": "Welche Beziehung besteht zwischen pt, px und DPI?",
        "answer": "Bei 96 DPI (CSS-Standard): 1pt = 1,333px. Bei 72 DPI: 1pt = 1px. Die Formel lautet: pt = px x 72 / DPI. Die Standardkonvertierung geht von 96 DPI aus, dem CSS-Referenzpixel."
      },
      {
        "question": "Wie vergleichen sich gängige Schriftgrößen zwischen px und pt?",
        "answer": "8pt = 10,667px, 10pt = 13,333px, 11pt = 14,667px, 12pt = 16px, 14pt = 18,667px, 18pt = 24px, 24pt = 32px, 36pt = 48px, 72pt = 96px."
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
        "question": "Como faço para converter pixels em pontos?",
        "answer": "Multiplique o valor do pixel por 72/96 (que equivale a 0,75). Por exemplo, 16px x 0,75 = 12pt. Isso pressupõe a resolução de tela padrão de 96 DPI. Os pontos têm 1/72 de polegada, enquanto os pixels CSS têm 1/96 de polegada."
      },
      {
        "question": "Por que os pixels e os pontos têm tamanhos diferentes?",
        "answer": "Os pontos vêm da tipografia tradicional, onde 1 ponto = 1/72 de polegada. Pixels CSS são definidos como 1/96 de polegada. Como 72/96 = 0,75, um pixel CSS equivale a 0,75 pontos. Uma fonte de 12pt é exibida em 16px na tela."
      },
      {
        "question": "Quando devo usar pontos em vez de pixels?",
        "answer": "Use pontos para folhas de estilo de impressão (CSS @media print) e ao combinar a tipografia da web com as especificações de design de impressão. Os pontos são a unidade padrão em softwares de design de impressão como InDesign e Word."
      },
      {
        "question": "Qual é a relação entre pt, px e DPI?",
        "answer": "Em 96 DPI (padrão CSS): 1pt = 1.333px. A 72 DPI: 1pt = 1px. A fórmula é: pt = px x 72/DPI. A conversão padrão assume 96 DPI, que é o pixel de referência CSS."
      },
      {
        "question": "Como os tamanhos de fonte comuns se comparam entre px e pt?",
        "answer": "8pt = 10,667px, 10pt = 13,333px, 11pt = 14,667px, 12pt = 16px, 14pt = 18,667px, 18pt = 24px, 24pt = 32px, 36pt = 48px, 72pt = 96px."
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
        "question": "मैं पिक्सेल को पॉइंट में कैसे परिवर्तित करूं?",
        "answer": "पिक्सेल मान को 72/96 से गुणा करें (जो 0.75 के बराबर है)। उदाहरण के लिए, 16px x 0.75 = 12pt. यह मानक 96 डीपीआई स्क्रीन रिज़ॉल्यूशन मानता है। पॉइंट एक इंच के 1/72 होते हैं, जबकि सीएसएस पिक्सेल एक इंच के 1/96 होते हैं।"
      },
      {
        "question": "पिक्सेल और बिंदु अलग-अलग आकार के क्यों होते हैं?",
        "answer": "अंक पारंपरिक टाइपोग्राफी से आते हैं जहां 1 अंक = 1/72 इंच। सीएसएस पिक्सल को 1/96 इंच के रूप में परिभाषित किया गया है। चूँकि 72/96 = 0.75, एक सीएसएस पिक्सेल 0.75 अंक के बराबर है। 12pt का फ़ॉन्ट स्क्रीन पर 16px पर प्रदर्शित होता है।"
      },
      {
        "question": "मुझे पिक्सेल के स्थान पर पॉइंट्स का उपयोग कब करना चाहिए?",
        "answer": "प्रिंट स्टाइलशीट (सीएसएस @मीडिया प्रिंट) के लिए और वेब टाइपोग्राफी को प्रिंट डिज़ाइन विनिर्देशों से मिलान करते समय बिंदुओं का उपयोग करें। इनडिज़ाइन और वर्ड जैसे प्रिंट डिज़ाइन सॉफ़्टवेयर में पॉइंट मानक इकाई हैं।"
      },
      {
        "question": "पीटी, पीएक्स और डीपीआई के बीच क्या संबंध है?",
        "answer": "96 डीपीआई (सीएसएस मानक) पर: 1पीटी = 1.333पीएक्स। 72 डीपीआई पर: 1पीटी = 1पीएक्स। सूत्र है: पीटी = पीएक्स x 72 / डीपीआई। मानक रूपांतरण 96 DPI मानता है, जो CSS संदर्भ पिक्सेल है।"
      },
      {
        "question": "पीएक्स और पीटी के बीच सामान्य फ़ॉन्ट आकार की तुलना कैसे की जाती है?",
        "answer": "8पीटी = 10.667पीएक्स, 10पीटी = 13.333पीएक्स, 11पीटी = 14.667पीएक्स, 12पीटी = 16पीएक्स, 14पीटी = 18.667पीएक्स, 18पीटी = 24पीएक्स, 24पीटी = 32पीएक्स, 36पीटी = 48पीएक्स, 72पीटी = 96पीएक्स।"
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
        "question": "ピクセルをポイントに変換するにはどうすればよいですか?",
        "answer": "ピクセル値に 72/96 (0.75 に相当) を掛けます。たとえば、16px x 0.75 = 12pt となります。これは、標準の 96 DPI 画面解像度を前提としています。ポイントは 1/72 インチですが、CSS ピクセルは 1/96 インチです。"
      },
      {
        "question": "ピクセルとポイントのサイズが異なるのはなぜですか?",
        "answer": "ポイントは、1 ポイント = 1/72 インチという従来のタイポグラフィに由来しています。 CSS ピクセルは 1/96 インチとして定義されます。 72/96 = 0.75 なので、1 CSS ピクセルは 0.75 ポイントに相当します。 12 ポイントのフォントは、画面上では 16 ピクセルで表示されます。"
      },
      {
        "question": "ピクセルの代わりにポイントを使用する必要があるのはどのような場合ですか?",
        "answer": "印刷スタイルシート (CSS @media print) と、Web タイポグラフィを印刷デザイン仕様に一致させる場合にポイントを使用します。ポイントは、InDesign や Word などの印刷デザイン ソフトウェアの標準単位です。"
      },
      {
        "question": "pt、px、DPI の関係は何ですか?",
        "answer": "96 DPI (CSS 標準) の場合: 1pt = 1.333px。 72 DPI の場合: 1pt = 1px。式は次のとおりです: pt = px x 72 / DPI。標準の変換では、CSS 参照ピクセルである 96 DPI を前提としています。"
      },
      {
        "question": "一般的なフォント サイズは px と pt でどのように比較されますか?",
        "answer": "8pt = 10.667px、10pt = 13.333px、11pt = 14.667px、12pt = 16px、14pt = 18.667px、18pt = 24px、24pt = 32px、36pt = 48px、72pt = 96px."
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
        "question": "픽셀을 포인트로 어떻게 변환합니까?",
        "answer": "픽셀 값에 72/96(0.75와 같음)을 곱합니다. 예를 들어 16px x 0.75 = 12pt입니다. 이는 표준 96 DPI 화면 해상도를 가정합니다. 포인트는 1/72인치이고 CSS 픽셀은 1/96인치입니다."
      },
      {
        "question": "픽셀과 포인트의 크기가 다른 이유는 무엇입니까?",
        "answer": "포인트는 1포인트 = 1/72인치인 전통적인 타이포그래피에서 유래합니다. CSS 픽셀은 1/96인치로 정의됩니다. 72/96 = 0.75이므로 CSS 픽셀 1개는 0.75포인트와 같습니다. 12pt 글꼴은 화면에서 16px로 표시됩니다."
      },
      {
        "question": "언제 픽셀 대신 포인트를 사용해야 합니까?",
        "answer": "인쇄 스타일시트(CSS @media print)에 포인트를 사용하고 웹 타이포그래피를 인쇄 디자인 사양과 일치시킬 때 사용합니다. 포인트는 InDesign 및 Word와 같은 인쇄 디자인 소프트웨어의 표준 단위입니다."
      },
      {
        "question": "pt, px 및 DPI의 관계는 무엇입니까?",
        "answer": "96 DPI(CSS 표준)에서: 1pt = 1.333px. 72 DPI에서: 1pt = 1px. 공식은 pt = px x 72 / DPI입니다. 표준 변환에서는 CSS 참조 픽셀인 96 DPI를 가정합니다."
      },
      {
        "question": "px와 pt 간의 일반적인 글꼴 크기는 어떻게 비교됩니까?",
        "answer": "8pt = 10.667px, 10pt = 13.333px, 11pt = 14.667px, 12pt = 16px, 14pt = 18.667px, 18pt = 24px, 24pt = 32px, 36pt = 48px, 72pt = 96px."
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
        "question": "Come converto i pixel in punti?",
        "answer": "Moltiplica il valore dei pixel per 72/96 (che equivale a 0,75). Ad esempio, 16px x 0,75 = 12pt. Ciò presuppone la risoluzione dello schermo standard di 96 DPI. I punti sono 1/72 di pollice, mentre i pixel CSS sono 1/96 di pollice."
      },
      {
        "question": "Perché pixel e punti hanno dimensioni diverse?",
        "answer": "I punti provengono dalla tipografia tradizionale dove 1 punto = 1/72 di pollice. I pixel CSS sono definiti come 1/96 di pollice. Poiché 72/96 = 0,75, un pixel CSS equivale a 0,75 punti. Un carattere da 12 punti viene visualizzato a 16 px sullo schermo."
      },
      {
        "question": "Quando dovrei utilizzare i punti anziché i pixel?",
        "answer": "Utilizza i punti per i fogli di stile di stampa (CSS @media print) e quando si abbina la tipografia web alle specifiche del progetto di stampa. I punti sono l'unità standard nei software di progettazione di stampa come InDesign e Word."
      },
      {
        "question": "Qual è la relazione tra pt, px e DPI?",
        "answer": "A 96 DPI (standard CSS): 1pt = 1.333px. A 72 DPI: 1pt = 1px. La formula è: pt = px x 72 / DPI. La conversione standard presuppone 96 DPI, che è il pixel di riferimento CSS."
      },
      {
        "question": "Come si confrontano le dimensioni comuni dei caratteri tra px e pt?",
        "answer": "8pt = 10.667px, 10pt = 13.333px, 11pt = 14.667px, 12pt = 16px, 14pt = 18.667px, 18pt = 24px, 24pt = 32px, 36pt = 48px, 72pt = 96px."
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
        "question": "Hoe converteer ik pixels naar punten?",
        "answer": "Vermenigvuldig de pixelwaarde met 72/96 (wat gelijk is aan 0,75). Bijvoorbeeld: 16px x 0,75 = 12pt. Hierbij wordt uitgegaan van de standaard schermresolutie van 96 DPI. Punten zijn 1/72 inch, terwijl CSS-pixels 1/96 inch zijn."
      },
      {
        "question": "Waarom zijn pixels en punten verschillend van formaat?",
        "answer": "Punten komen uit traditionele typografie waarbij 1 punt = 1/72 inch. CSS-pixels worden gedefinieerd als 1/96 inch. Omdat 72/96 = 0,75 is één CSS-pixel gelijk aan 0,75 punten. Een 12pt lettertype wordt weergegeven met 16px op het scherm."
      },
      {
        "question": "Wanneer moet ik punten gebruiken in plaats van pixels?",
        "answer": "Gebruik punten voor printstylesheets (CSS @media print) en bij het matchen van webtypografie met printontwerpspecificaties. Punten zijn de standaardeenheid in printontwerpsoftware zoals InDesign en Word."
      },
      {
        "question": "Wat is de relatie tussen pt, px en DPI?",
        "answer": "Bij 96 DPI (CSS-standaard): 1pt = 1,333px. Bij 72 DPI: 1pt = 1px. De formule is: pt = px x 72 / DPI. De standaardconversie gaat uit van 96 DPI, wat de CSS-referentiepixel is."
      },
      {
        "question": "Hoe verhouden gangbare lettergroottes zich tussen px en pt?",
        "answer": "8pt = 10.667px, 10pt = 13.333px, 11pt = 14.667px, 12pt = 16px, 14pt = 18.667px, 18pt = 24px, 24pt = 32px, 36pt = 48px, 72pt = 96px."
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
        "question": "كيف يمكنني تحويل البكسل إلى نقاط؟",
        "answer": "اضرب قيمة البكسل بـ 72/96 (وهو ما يساوي 0.75). على سبيل المثال، 16 بكسل × 0.75 = 12 نقطة. يفترض هذا دقة الشاشة القياسية البالغة 96 نقطة لكل بوصة. النقاط هي 1/72 من البوصة، بينما بكسلات CSS هي 1/96 من البوصة."
      },
      {
        "question": "لماذا تختلف أحجام البكسل والنقاط؟",
        "answer": "تأتي النقاط من الطباعة التقليدية حيث النقطة الواحدة = 1/72 بوصة. يتم تعريف بكسلات CSS على أنها 1/96 بوصة. بما أن 72/96 = 0.75، فإن بكسل CSS الواحد يساوي 0.75 نقطة. يتم عرض خط بحجم 12pt بحجم 16 بكسل على الشاشة."
      },
      {
        "question": "متى يجب أن أستخدم النقاط بدلاً من البكسل؟",
        "answer": "استخدم النقاط لأوراق أنماط الطباعة (CSS @media print) وعند مطابقة طباعة الويب لطباعة مواصفات التصميم. النقاط هي الوحدة القياسية في برامج تصميم الطباعة مثل InDesign وWord."
      },
      {
        "question": "ما هي العلاقة بين pt وpx وDPI؟",
        "answer": "عند 96 DPI (معيار CSS): 1pt = 1.333px. عند 72 نقطة في البوصة: 1pt = 1px. الصيغة هي: pt = px x 72 / DPI. يفترض التحويل القياسي 96 DPI، وهو البكسل المرجعي لـ CSS."
      },
      {
        "question": "كيف يمكن مقارنة أحجام الخطوط الشائعة بين px وpt؟",
        "answer": "8pt = 10.667px, 10pt = 13.333px, 11pt = 14.667px, 12pt = 16px, 14pt = 18.667px, 18pt = 24 بكسل، 24 نقطة = 32 بكسل، 36 نقطة = 48 بكسل، 72 نقطة = 96 بكسل."
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
        "question": "Pikselleri noktalara nasıl dönüştürebilirim?",
        "answer": "Piksel değerini 72/96 (0,75'e eşittir) ile çarpın. Örneğin, 16 piksel x 0,75 = 12 punto. Bu, standart 96 DPI ekran çözünürlüğünü varsayar. Noktalar bir inçin 1/72'si iken CSS pikselleri bir inçin 1/96'sıdır."
      },
      {
        "question": "Pikseller ve noktalar neden farklı boyutlardadır?",
        "answer": "Puanlar, 1 punto = 1/72 inç olan geleneksel tipografiden gelir. CSS pikselleri 1/96 inç olarak tanımlanır. 72/96 = 0,75 olduğundan, bir CSS pikseli 0,75 puana eşittir. Ekranda 16 piksellik 12 puntoluk bir yazı tipi görüntülenir."
      },
      {
        "question": "Piksel yerine ne zaman nokta kullanmalıyım?",
        "answer": "Baskı stil sayfaları (CSS @media print) için ve web tipografisini baskı tasarımı spesifikasyonlarıyla eşleştirirken noktaları kullanın. Noktalar, InDesign ve Word gibi baskı tasarımı yazılımlarında standart birimdir."
      },
      {
        "question": "Nokta, piksel ve DPI arasındaki ilişki nedir?",
        "answer": "96 DPI'da (CSS standardı): 1 nokta = 1,333 piksel. 72 DPI'da: 1nokta = 1 piksel. Formül şu şekildedir: pt = px x 72 / DPI. Standart dönüştürmede CSS referans pikseli olan 96 DPI varsayılır."
      },
      {
        "question": "Genel yazı tipi boyutları piksel ve pt arasında nasıl karşılaştırılır?",
        "answer": "8pt = 10,667px, 10pt = 13,333px, 11pt = 14,667px, 12pt = 16px, 14pt = 18,667px, 18pt = 24px, 24pt = 32px, 36pt = 48px, 72pt = 96px."
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
        "question": "Jak przekonwertować piksele na punkty?",
        "answer": "Pomnóż wartość piksela przez 72/96 (co równa się 0,75). Na przykład 16 pikseli x 0,75 = 12 pkt. Zakłada to standardową rozdzielczość ekranu 96 DPI. Punkty mają wielkość 1/72 cala, podczas gdy piksele CSS mają wielkość 1/96 cala."
      },
      {
        "question": "Dlaczego piksele i punkty mają różne rozmiary?",
        "answer": "Punkty pochodzą z tradycyjnej typografii, gdzie 1 punkt = 1/72 cala. Piksele CSS są zdefiniowane jako 1/96 cala. Ponieważ 72/96 = 0,75, jeden piksel CSS równa się 0,75 punktu. Czcionka 12-punktowa wyświetla się na ekranie w rozmiarze 16 pikseli."
      },
      {
        "question": "Kiedy powinienem używać punktów zamiast pikseli?",
        "answer": "Używaj punktów w arkuszach stylów druku (CSS @media print) i dopasowując typografię internetową do specyfikacji projektu druku. Punkty to standardowa jednostka w programach do projektowania druku, takich jak InDesign i Word."
      },
      {
        "question": "Jaki jest związek między pt, px i DPI?",
        "answer": "Przy 96 DPI (standard CSS): 1 pkt = 1,333 piksela. Przy 72 DPI: 1 pkt = 1 piksel. Wzór jest następujący: pt = px x 72 / DPI. Standardowa konwersja zakłada 96 DPI, czyli piksel odniesienia CSS."
      },
      {
        "question": "Jak porównują się popularne rozmiary czcionek między px i pt?",
        "answer": "8pt = 10,667px, 10pt = 13,333px, 11pt = 14,667px, 12pt = 16px, 14pt = 18,667px, 18pt = 24px, 24pt = 32px, 36pt = 48px, 72pt = 96px."
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
        "question": "Bagaimana cara mengonversi piksel menjadi titik?",
        "answer": "Kalikan nilai piksel dengan 72/96 (sama dengan 0,75). Misalnya, 16px x 0,75 = 12pt. Ini mengasumsikan resolusi layar standar 96 DPI. Titik berukuran 1/72 inci, sedangkan piksel CSS berukuran 1/96 inci."
      },
      {
        "question": "Mengapa ukuran piksel dan titik berbeda?",
        "answer": "Titik berasal dari tipografi tradisional yang mana 1 titik = 1/72 inci. Piksel CSS didefinisikan sebagai 1/96 inci. Karena 72/96 = 0,75, satu piksel CSS sama dengan 0,75 poin. Font 12pt ditampilkan pada 16px di layar."
      },
      {
        "question": "Kapan saya harus menggunakan titik, bukan piksel?",
        "answer": "Gunakan titik untuk lembar gaya cetak (CSS @media print) dan saat mencocokkan tipografi web dengan spesifikasi desain cetak. Poin adalah satuan standar dalam software desain cetak seperti InDesign dan Word."
      },
      {
        "question": "Apa hubungan antara pt, px, dan DPI?",
        "answer": "Pada 96 DPI (standar CSS): 1pt = 1,333px. Pada 72 DPI: 1pt = 1 piksel. Rumusnya : pt = px x 72 / DPI. Konversi standar mengasumsikan 96 DPI, yang merupakan piksel referensi CSS."
      },
      {
        "question": "Bagaimana perbandingan ukuran font umum antara px dan pt?",
        "answer": "8pt = 10.667px, 10pt = 13.333px, 11pt = 14.667px, 12pt = 16px, 14pt = 18.667px, 18pt = 24 piksel, 24pt = 32 piksel, 36pt = 48 piksel, 72pt = 96 piksel."
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
        "question": "Как преобразовать пиксели в точки?",
        "answer": "Умножьте значение пикселя на 72/96 (что равно 0,75). Например, 16 пикселей x 0,75 = 12 пикселей. Это предполагает стандартное разрешение экрана 96 точек на дюйм. Точки составляют 1/72 дюйма, а пиксели CSS — 1/96 дюйма."
      },
      {
        "question": "Почему пиксели и точки имеют разные размеры?",
        "answer": "Точки взяты из традиционной типографики, где 1 пункт = 1/72 дюйма. Пиксели CSS определяются как 1/96 дюйма. Поскольку 72/96 = 0,75, один пиксель CSS равен 0,75 балла. Шрифт размером 12 пт отображается на экране с размером 16 пикселей."
      },
      {
        "question": "Когда следует использовать точки вместо пикселей?",
        "answer": "Используйте точки для таблиц стилей печати (CSS @media print) и при сопоставлении веб-типографики со спецификациями дизайна печати. Точки — это стандартная единица измерения в программах для печатного дизайна, таких как InDesign и Word."
      },
      {
        "question": "Какова связь между pt, px и DPI?",
        "answer": "При разрешении 96 DPI (стандарт CSS): 1pt = 1,333 пикселя. При разрешении 72 DPI: 1 точка = 1 пиксель. Формула: pt = пикселей x 72 / DPI. Стандартное преобразование предполагает 96 точек на дюйм, что является эталонным пикселем CSS."
      },
      {
        "question": "Как сравниваются общие размеры шрифтов между пикселями и pt?",
        "answer": "8pt = 10,667 пикселей, 10pt = 13,333 пикселей, 11pt = 14,667 пикселей, 12pt = 16 пикселей, 14pt = 18,667 пикселей, 18pt = 24 пикселя, 24 пт = 32 пикселя, 36 пт = 48 пикселей, 72 пт = 96 пикселей."
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
