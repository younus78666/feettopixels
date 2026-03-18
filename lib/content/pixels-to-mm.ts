import type { PageContentMap } from "./types";

export const content: PageContentMap = {
  en: {
    faq: [
      {
        question: "How do I convert pixels to millimeters?",
        answer:
          "Multiply the pixel count by 25.4, then divide by DPI. For example, 378 pixels at 96 DPI equals approximately 100 mm (378 x 25.4 / 96 = 100.01).",
      },
      {
        question: "How many millimeters is 1 pixel?",
        answer:
          "At 96 DPI, 1 pixel equals approximately 0.265 mm. At 300 DPI, 1 pixel equals approximately 0.085 mm. The physical size of a pixel depends entirely on the DPI setting.",
      },
      {
        question: "How do I find the size of a pixel on my screen?",
        answer:
          "Divide your screen's physical width (in mm) by its horizontal pixel resolution. For example, a 27-inch (686 mm wide) display at 2560 pixels has pixels approximately 0.268 mm wide.",
      },
      {
        question: "Why use millimeters instead of centimeters?",
        answer:
          "Millimeters provide 10x the precision of centimeters without decimals. In fields like engineering, packaging, and precision printing, specifications are commonly given in millimeters for accuracy.",
      },
      {
        question: "What pixel count do I need for a 100 mm print at 300 DPI?",
        answer:
          "For 100 mm at 300 DPI, you need approximately 1,181 pixels (100 x 300 / 25.4 = 1181.1). This ensures sharp, professional-quality output at the specified size.",
      },
    ],
    body: {
      heading1: "How Pixel to Millimeter Conversion Works",
      p1: "Converting pixels to millimeters gives you precise physical measurements from digital dimensions. The formula is:",
      formula: "Millimeters = (Pixels x 25.4) / DPI",
      p2: "This formula converts pixels to inches first (pixels / DPI), then to millimeters (inches x 25.4). The result tells you the exact physical width or height at the given DPI.",
      heading2: "Common Use Cases",
      li1: "Quality verification: Check if an image has enough resolution for a specific print size in mm.",
      li2: "Manufacturing specs: Convert digital mockup dimensions to production measurements.",
      li3: "Precision layout: Verify that screen elements correspond to intended physical sizes.",
      li4: "Medical imaging: Convert digital scan dimensions to real-world measurements.",
      heading3: "Pixel Size Reference",
      li5: "At 72 DPI — 1 pixel = 0.353 mm (typical older Mac display)",
      li6: "At 96 DPI — 1 pixel = 0.265 mm (standard web/Windows)",
      li7: "At 150 DPI — 1 pixel = 0.169 mm (medium print quality)",
      li8: "At 300 DPI — 1 pixel = 0.085 mm (professional print)",
      heading4: "How Accurate Is a Pixel in Millimeters?",
      p3: "The physical size of a pixel varies with the display or print device. On a 27-inch 2560x1440 monitor, each pixel measures about 0.233 mm wide. On a 24-inch 1920x1080 display, each pixel is roughly 0.277 mm. These values differ from the DPI-based calculation because monitor specifications define their own pixel density. The formula-based conversion (pixels x 25.4 / DPI) gives you the intended physical size for a specific DPI setting, which is the value printers and design software use.",
      heading5: "What Pixel Counts Produce Common Millimeter Sizes?",
      p4: "Working backwards from common mm measurements at 300 DPI: a 10 mm element needs 118 pixels, a 25 mm element needs 295 pixels, a 50 mm element needs 591 pixels, and a 100 mm element needs 1,181 pixels. At 96 DPI (web), those same measurements need 38, 94, 189, and 378 pixels respectively. Knowing these benchmarks helps you quickly assess whether an image has enough resolution for a target physical size.",
      heading6: "When Is Pixel-to-MM Conversion Essential?",
      p5: "Quality control in print production relies heavily on px-to-mm conversion. Before approving a proof, designers verify that text at 300 DPI will be at least 2 mm tall (roughly 24 pixels) for legibility. Product label regulations in the EU specify minimum font heights in millimeters, so converting from your pixel-based design to mm confirms compliance. Medical and scientific imaging also uses mm measurements, where researchers convert scan pixel dimensions to real-world mm for accurate analysis.",
    },
  },
  es: {
    faq: [
      {
        question: "¿Cómo convierto pixels a milímetros?",
        answer:
          "Multiplica la cantidad de pixels por 25.4 y luego divide entre el DPI. Por ejemplo, 378 pixels a 96 DPI equivalen a aproximadamente 100 mm (378 x 25.4 / 96 = 100.01).",
      },
      {
        question: "¿Cuántos milímetros mide 1 pixel?",
        answer:
          "A 96 DPI, 1 pixel mide aproximadamente 0.265 mm. A 300 DPI, 1 pixel mide aproximadamente 0.085 mm. El tamaño físico de un pixel depende completamente del ajuste de DPI.",
      },
      {
        question: "¿Cómo encuentro el tamaño de un pixel en mi pantalla?",
        answer:
          "Divide el ancho físico de tu pantalla (en mm) entre su resolución horizontal en pixels. Por ejemplo, un monitor de 27 pulgadas (686 mm de ancho) a 2560 pixels tiene pixels de aproximadamente 0.268 mm de ancho.",
      },
      {
        question: "¿Por qué usar milímetros en lugar de centímetros?",
        answer:
          "Los milímetros proporcionan 10 veces más precisión que los centímetros sin usar decimales. En campos como ingeniería, empaquetado e impresión de precisión, las especificaciones se dan comúnmente en milímetros por exactitud.",
      },
      {
        question: "¿Cuántos pixels necesito para una impresión de 100 mm a 300 DPI?",
        answer:
          "Para 100 mm a 300 DPI, necesitas aproximadamente 1,181 pixels (100 x 300 / 25.4 = 1181.1). Esto garantiza una salida nítida y de calidad profesional en el tamaño especificado.",
      },
    ],
    body: {
      heading1: "Cómo funciona la conversión de pixels a milímetros",
      p1: "Convertir pixels a milímetros te da medidas físicas precisas a partir de dimensiones digitales. La fórmula es:",
      formula: "Milímetros = (Pixels x 25.4) / DPI",
      p2: "Esta fórmula convierte primero pixels a pulgadas (pixels / DPI) y luego a milímetros (pulgadas x 25.4). El resultado te indica el ancho o alto físico exacto al DPI dado.",
      heading2: "Casos de uso comunes",
      li1: "Verificación de calidad: Comprueba si una imagen tiene suficiente resolución para un tamaño de impresión específico en mm.",
      li2: "Especificaciones de fabricación: Convierte dimensiones de maquetas digitales a medidas de producción.",
      li3: "Maquetación de precisión: Verifica que los elementos en pantalla correspondan a los tamaños físicos deseados.",
      li4: "Imágenes médicas: Convierte dimensiones de escaneos digitales a medidas del mundo real.",
      heading3: "Referencia de tamaño de pixel",
      li5: "A 72 DPI — 1 pixel = 0.353 mm (pantalla Mac antigua típica)",
      li6: "A 96 DPI — 1 pixel = 0.265 mm (web/Windows estándar)",
      li7: "A 150 DPI — 1 pixel = 0.169 mm (calidad de impresión media)",
      li8: "A 300 DPI — 1 pixel = 0.085 mm (impresión profesional)",
      heading4: "¿Qué tan preciso es un pixel en milímetros?",
      p3: "El tamaño físico de un pixel varía según la pantalla o dispositivo de impresión. En un monitor de 27 pulgadas con resolución 2560x1440, cada pixel mide unos 0.233 mm de ancho. En una pantalla de 24 pulgadas con 1920x1080, cada pixel mide aproximadamente 0.277 mm. Estos valores difieren del cálculo basado en DPI porque las especificaciones del monitor definen su propia densidad de pixels. La conversión basada en la fórmula (pixels x 25.4 / DPI) te da el tamaño físico previsto para un ajuste de DPI específico, que es el valor que usan impresoras y software de diseño.",
      heading5: "¿Qué cantidad de pixels produce tamaños comunes en milímetros?",
      p4: "Trabajando hacia atrás desde medidas comunes en mm a 300 DPI: un elemento de 10 mm necesita 118 pixels, uno de 25 mm necesita 295 pixels, uno de 50 mm necesita 591 pixels y uno de 100 mm necesita 1,181 pixels. A 96 DPI (web), esas mismas medidas necesitan 38, 94, 189 y 378 pixels respectivamente. Conocer estos puntos de referencia te ayuda a evaluar rápidamente si una imagen tiene suficiente resolución para un tamaño físico objetivo.",
      heading6: "¿Cuándo es esencial la conversión de pixels a mm?",
      p5: "El control de calidad en producción de impresión depende en gran medida de la conversión de px a mm. Antes de aprobar una prueba, los diseñadores verifican que el texto a 300 DPI tendrá al menos 2 mm de altura (aproximadamente 24 pixels) para ser legible. Las regulaciones de etiquetado de productos en la UE especifican alturas mínimas de fuente en milímetros, por lo que convertir tu diseño basado en pixels a mm confirma el cumplimiento. Las imágenes médicas y científicas también usan medidas en mm, donde los investigadores convierten dimensiones de pixels de escaneos a mm del mundo real para un análisis preciso.",
    },
  },
  fr: {
    faq: [
      {
        question: "Comment convertir des pixels en millimètres ?",
        answer:
          "Multipliez le nombre de pixels par 25.4, puis divisez par le DPI. Par exemple, 378 pixels à 96 DPI équivalent à environ 100 mm (378 x 25.4 / 96 = 100.01).",
      },
      {
        question: "Combien de millimètres mesure 1 pixel ?",
        answer:
          "À 96 DPI, 1 pixel mesure environ 0.265 mm. À 300 DPI, 1 pixel mesure environ 0.085 mm. La taille physique d'un pixel dépend entièrement du réglage DPI.",
      },
      {
        question: "Comment trouver la taille d'un pixel sur mon écran ?",
        answer:
          "Divisez la largeur physique de votre écran (en mm) par sa résolution horizontale en pixels. Par exemple, un écran de 27 pouces (686 mm de large) à 2560 pixels a des pixels d'environ 0.268 mm de large.",
      },
      {
        question: "Pourquoi utiliser des millimètres plutôt que des centimètres ?",
        answer:
          "Les millimètres offrent 10 fois plus de précision que les centimètres sans décimales. Dans des domaines comme l'ingénierie, l'emballage et l'impression de précision, les spécifications sont couramment données en millimètres pour plus d'exactitude.",
      },
      {
        question: "Combien de pixels faut-il pour une impression de 100 mm à 300 DPI ?",
        answer:
          "Pour 100 mm à 300 DPI, il faut environ 1 181 pixels (100 x 300 / 25.4 = 1181.1). Cela garantit un rendu net et de qualité professionnelle à la taille spécifiée.",
      },
    ],
    body: {
      heading1: "Comment fonctionne la conversion pixels en millimètres",
      p1: "Convertir des pixels en millimètres vous donne des mesures physiques précises à partir de dimensions numériques. La formule est :",
      formula: "Millimètres = (Pixels x 25.4) / DPI",
      p2: "Cette formule convertit d'abord les pixels en pouces (pixels / DPI), puis en millimètres (pouces x 25.4). Le résultat indique la largeur ou hauteur physique exacte au DPI donné.",
      heading2: "Cas d'utilisation courants",
      li1: "Vérification de qualité : Vérifiez si une image a une résolution suffisante pour une taille d'impression spécifique en mm.",
      li2: "Spécifications de fabrication : Convertissez les dimensions de maquettes numériques en mesures de production.",
      li3: "Mise en page de précision : Vérifiez que les éléments à l'écran correspondent aux tailles physiques prévues.",
      li4: "Imagerie médicale : Convertissez les dimensions de scans numériques en mesures réelles.",
      heading3: "Référence de taille de pixel",
      li5: "À 72 DPI — 1 pixel = 0.353 mm (écran Mac ancien typique)",
      li6: "À 96 DPI — 1 pixel = 0.265 mm (web/Windows standard)",
      li7: "À 150 DPI — 1 pixel = 0.169 mm (qualité d'impression moyenne)",
      li8: "À 300 DPI — 1 pixel = 0.085 mm (impression professionnelle)",
      heading4: "Quelle est la précision d'un pixel en millimètres ?",
      p3: "La taille physique d'un pixel varie selon l'écran ou le périphérique d'impression. Sur un moniteur 27 pouces 2560x1440, chaque pixel mesure environ 0.233 mm de large. Sur un écran 24 pouces 1920x1080, chaque pixel fait environ 0.277 mm. Ces valeurs diffèrent du calcul basé sur le DPI car les spécifications du moniteur définissent leur propre densité de pixels. La conversion par formule (pixels x 25.4 / DPI) donne la taille physique prévue pour un réglage DPI spécifique, qui est la valeur utilisée par les imprimantes et les logiciels de conception.",
      heading5: "Quels nombres de pixels produisent des tailles courantes en millimètres ?",
      p4: "En partant des mesures courantes en mm à 300 DPI : un élément de 10 mm nécessite 118 pixels, un de 25 mm nécessite 295 pixels, un de 50 mm nécessite 591 pixels, et un de 100 mm nécessite 1 181 pixels. À 96 DPI (web), ces mêmes mesures nécessitent respectivement 38, 94, 189 et 378 pixels. Connaître ces repères aide à évaluer rapidement si une image a une résolution suffisante pour une taille physique cible.",
      heading6: "Quand la conversion pixels en mm est-elle essentielle ?",
      p5: "Le contrôle qualité en production d'impression repose largement sur la conversion px en mm. Avant d'approuver une épreuve, les designers vérifient que le texte à 300 DPI fera au moins 2 mm de haut (environ 24 pixels) pour la lisibilité. Les réglementations sur les étiquettes de produits dans l'UE spécifient des hauteurs de police minimales en millimètres, donc convertir votre design basé sur les pixels en mm confirme la conformité. L'imagerie médicale et scientifique utilise également des mesures en mm, où les chercheurs convertissent les dimensions en pixels des scans en mm réels pour une analyse précise.",
    },
  },
  de: {
    faq: [
      {
        question: "Wie konvertiere ich Pixel in Millimeter?",
        answer:
          "Multiplizieren Sie die Pixelanzahl mit 25.4 und teilen Sie dann durch den DPI-Wert. Beispiel: 378 Pixel bei 96 DPI ergeben etwa 100 mm (378 x 25.4 / 96 = 100.01).",
      },
      {
        question: "Wie viele Millimeter ist 1 Pixel groß?",
        answer:
          "Bei 96 DPI misst 1 Pixel etwa 0.265 mm. Bei 300 DPI misst 1 Pixel etwa 0.085 mm. Die physische Größe eines Pixels hängt vollständig vom DPI-Wert ab.",
      },
      {
        question: "Wie finde ich die Größe eines Pixels auf meinem Bildschirm?",
        answer:
          "Teilen Sie die physische Breite Ihres Bildschirms (in mm) durch seine horizontale Pixelauflösung. Beispiel: Ein 27-Zoll-Display (686 mm breit) mit 2560 Pixeln hat Pixel von etwa 0.268 mm Breite.",
      },
      {
        question: "Warum Millimeter statt Zentimeter verwenden?",
        answer:
          "Millimeter bieten 10-mal mehr Präzision als Zentimeter ohne Dezimalstellen. In Bereichen wie Ingenieurwesen, Verpackung und Präzisionsdruck werden Spezifikationen üblicherweise in Millimetern für Genauigkeit angegeben.",
      },
      {
        question: "Wie viele Pixel brauche ich für einen 100 mm Druck bei 300 DPI?",
        answer:
          "Für 100 mm bei 300 DPI benötigen Sie etwa 1.181 Pixel (100 x 300 / 25.4 = 1181.1). Dies gewährleistet eine scharfe Ausgabe in professioneller Qualität in der angegebenen Größe.",
      },
    ],
    body: {
      heading1: "Wie die Pixel-zu-Millimeter-Umrechnung funktioniert",
      p1: "Die Umrechnung von Pixeln in Millimeter liefert präzise physische Maße aus digitalen Dimensionen. Die Formel lautet:",
      formula: "Millimeter = (Pixel x 25.4) / DPI",
      p2: "Diese Formel rechnet Pixel zuerst in Zoll um (Pixel / DPI), dann in Millimeter (Zoll x 25.4). Das Ergebnis gibt die exakte physische Breite oder Höhe beim gegebenen DPI-Wert an.",
      heading2: "Häufige Anwendungsfälle",
      li1: "Qualitätsprüfung: Prüfen Sie, ob ein Bild genügend Auflösung für eine bestimmte Druckgröße in mm hat.",
      li2: "Fertigungsspezifikationen: Konvertieren Sie digitale Mockup-Dimensionen in Produktionsmaße.",
      li3: "Präzises Layout: Überprüfen Sie, ob Bildschirmelemente den beabsichtigten physischen Größen entsprechen.",
      li4: "Medizinische Bildgebung: Konvertieren Sie digitale Scan-Dimensionen in reale Maße.",
      heading3: "Pixelgröße-Referenz",
      li5: "Bei 72 DPI — 1 Pixel = 0.353 mm (typisches älteres Mac-Display)",
      li6: "Bei 96 DPI — 1 Pixel = 0.265 mm (Standard Web/Windows)",
      li7: "Bei 150 DPI — 1 Pixel = 0.169 mm (mittlere Druckqualität)",
      li8: "Bei 300 DPI — 1 Pixel = 0.085 mm (professioneller Druck)",
      heading4: "Wie genau ist ein Pixel in Millimetern?",
      p3: "Die physische Größe eines Pixels variiert je nach Anzeige- oder Druckgerät. Auf einem 27-Zoll-Monitor mit 2560x1440 misst jedes Pixel etwa 0.233 mm Breite. Auf einem 24-Zoll-Display mit 1920x1080 ist jedes Pixel etwa 0.277 mm groß. Diese Werte unterscheiden sich von der DPI-basierten Berechnung, da Monitorspezifikationen ihre eigene Pixeldichte definieren. Die formelbasierte Umrechnung (Pixel x 25.4 / DPI) gibt die beabsichtigte physische Größe für eine bestimmte DPI-Einstellung an — den Wert, den Drucker und Designsoftware verwenden.",
      heading5: "Welche Pixelanzahlen ergeben gängige Millimetergrößen?",
      p4: "Rückwärts gerechnet von gängigen mm-Maßen bei 300 DPI: Ein 10-mm-Element braucht 118 Pixel, ein 25-mm-Element braucht 295 Pixel, ein 50-mm-Element braucht 591 Pixel und ein 100-mm-Element braucht 1.181 Pixel. Bei 96 DPI (Web) benötigen dieselben Maße 38, 94, 189 bzw. 378 Pixel. Diese Richtwerte zu kennen hilft, schnell einzuschätzen, ob ein Bild genügend Auflösung für eine Zielgröße hat.",
      heading6: "Wann ist die Pixel-zu-MM-Umrechnung unverzichtbar?",
      p5: "Die Qualitätskontrolle in der Druckproduktion stützt sich stark auf die px-zu-mm-Umrechnung. Vor der Freigabe eines Proofs prüfen Designer, ob Text bei 300 DPI mindestens 2 mm hoch sein wird (etwa 24 Pixel) für die Lesbarkeit. EU-Vorschriften für Produktetiketten legen Mindestschrifthöhen in Millimetern fest, daher bestätigt die Umrechnung Ihres pixelbasierten Designs in mm die Konformität. Auch medizinische und wissenschaftliche Bildgebung verwendet mm-Maße, wobei Forscher Scan-Pixeldimensionen in reale mm für genaue Analysen umrechnen.",
    },
  },
  pt: {
    faq: [
      {
        question: "Como converto pixels para milímetros?",
        answer:
          "Multiplique a quantidade de pixels por 25.4 e depois divida pelo DPI. Por exemplo, 378 pixels a 96 DPI equivalem a aproximadamente 100 mm (378 x 25.4 / 96 = 100.01).",
      },
      {
        question: "Quantos milímetros tem 1 pixel?",
        answer:
          "A 96 DPI, 1 pixel mede aproximadamente 0.265 mm. A 300 DPI, 1 pixel mede aproximadamente 0.085 mm. O tamanho físico de um pixel depende inteiramente da configuração de DPI.",
      },
      {
        question: "Como descubro o tamanho de um pixel na minha tela?",
        answer:
          "Divida a largura física da sua tela (em mm) pela resolução horizontal em pixels. Por exemplo, um monitor de 27 polegadas (686 mm de largura) com 2560 pixels tem pixels de aproximadamente 0.268 mm de largura.",
      },
      {
        question: "Por que usar milímetros em vez de centímetros?",
        answer:
          "Milímetros oferecem 10 vezes mais precisão que centímetros sem usar decimais. Em áreas como engenharia, embalagem e impressão de precisão, especificações são comumente dadas em milímetros para maior exatidão.",
      },
      {
        question: "Quantos pixels preciso para uma impressão de 100 mm a 300 DPI?",
        answer:
          "Para 100 mm a 300 DPI, você precisa de aproximadamente 1.181 pixels (100 x 300 / 25.4 = 1181.1). Isso garante uma saída nítida e de qualidade profissional no tamanho especificado.",
      },
    ],
    body: {
      heading1: "Como funciona a conversão de pixels para milímetros",
      p1: "Converter pixels para milímetros fornece medidas físicas precisas a partir de dimensões digitais. A fórmula é:",
      formula: "Milímetros = (Pixels x 25.4) / DPI",
      p2: "Esta fórmula converte pixels em polegadas primeiro (pixels / DPI), depois em milímetros (polegadas x 25.4). O resultado indica a largura ou altura física exata no DPI dado.",
      heading2: "Casos de uso comuns",
      li1: "Verificação de qualidade: Verifique se uma imagem tem resolução suficiente para um tamanho de impressão específico em mm.",
      li2: "Especificações de fabricação: Converta dimensões de mockups digitais em medidas de produção.",
      li3: "Layout de precisão: Verifique se os elementos na tela correspondem aos tamanhos físicos pretendidos.",
      li4: "Imagem médica: Converta dimensões de scans digitais em medidas do mundo real.",
      heading3: "Referência de tamanho de pixel",
      li5: "A 72 DPI — 1 pixel = 0.353 mm (tela Mac antiga típica)",
      li6: "A 96 DPI — 1 pixel = 0.265 mm (web/Windows padrão)",
      li7: "A 150 DPI — 1 pixel = 0.169 mm (qualidade de impressão média)",
      li8: "A 300 DPI — 1 pixel = 0.085 mm (impressão profissional)",
      heading4: "Quão preciso é um pixel em milímetros?",
      p3: "O tamanho físico de um pixel varia conforme o display ou dispositivo de impressão. Em um monitor de 27 polegadas com 2560x1440, cada pixel mede cerca de 0.233 mm de largura. Em uma tela de 24 polegadas com 1920x1080, cada pixel tem aproximadamente 0.277 mm. Esses valores diferem do cálculo baseado em DPI porque as especificações do monitor definem sua própria densidade de pixels. A conversão pela fórmula (pixels x 25.4 / DPI) fornece o tamanho físico pretendido para uma configuração de DPI específica, que é o valor usado por impressoras e software de design.",
      heading5: "Quais contagens de pixels produzem tamanhos comuns em milímetros?",
      p4: "Calculando de trás para frente a partir de medidas comuns em mm a 300 DPI: um elemento de 10 mm precisa de 118 pixels, um de 25 mm precisa de 295 pixels, um de 50 mm precisa de 591 pixels e um de 100 mm precisa de 1.181 pixels. A 96 DPI (web), essas mesmas medidas precisam de 38, 94, 189 e 378 pixels respectivamente. Conhecer esses referenciais ajuda a avaliar rapidamente se uma imagem tem resolução suficiente para um tamanho físico alvo.",
      heading6: "Quando a conversão de pixels para mm é essencial?",
      p5: "O controle de qualidade na produção de impressão depende fortemente da conversão de px para mm. Antes de aprovar uma prova, designers verificam que o texto a 300 DPI terá pelo menos 2 mm de altura (aproximadamente 24 pixels) para legibilidade. Regulamentações de rótulos de produtos na UE especificam alturas mínimas de fonte em milímetros, então converter seu design baseado em pixels para mm confirma a conformidade. Imagens médicas e científicas também usam medidas em mm, onde pesquisadores convertem dimensões de pixels de scans para mm reais para análise precisa.",
    },
  },
  hi: {
    faq: [
      {
        question: "मैं pixels को मिलीमीटर में कैसे बदलूँ?",
        answer:
          "pixel की संख्या को 25.4 से गुणा करें, फिर DPI से भाग दें। उदाहरण के लिए, 96 DPI पर 378 pixels लगभग 100 mm के बराबर होते हैं (378 x 25.4 / 96 = 100.01)।",
      },
      {
        question: "1 pixel कितने मिलीमीटर का होता है?",
        answer:
          "96 DPI पर, 1 pixel लगभग 0.265 mm के बराबर होता है। 300 DPI पर, 1 pixel लगभग 0.085 mm के बराबर होता है। pixel का भौतिक आकार पूरी तरह DPI सेटिंग पर निर्भर करता है।",
      },
      {
        question: "मैं अपनी स्क्रीन पर pixel का आकार कैसे पता करूँ?",
        answer:
          "अपनी स्क्रीन की भौतिक चौड़ाई (mm में) को उसके क्षैतिज pixel रिज़ॉल्यूशन से भाग दें। उदाहरण के लिए, 2560 pixels वाले 27-इंच (686 mm चौड़े) डिस्प्ले में pixels लगभग 0.268 mm चौड़े होते हैं।",
      },
      {
        question: "सेंटीमीटर के बजाय मिलीमीटर का उपयोग क्यों करें?",
        answer:
          "मिलीमीटर दशमलव के बिना सेंटीमीटर से 10 गुना अधिक सटीकता प्रदान करते हैं। इंजीनियरिंग, पैकेजिंग और प्रिसिज़न प्रिंटिंग जैसे क्षेत्रों में, सटीकता के लिए विनिर्देश आमतौर पर मिलीमीटर में दिए जाते हैं।",
      },
      {
        question: "300 DPI पर 100 mm प्रिंट के लिए मुझे कितने pixels चाहिए?",
        answer:
          "300 DPI पर 100 mm के लिए, आपको लगभग 1,181 pixels की आवश्यकता है (100 x 300 / 25.4 = 1181.1)। यह निर्दिष्ट आकार पर तीक्ष्ण, पेशेवर-गुणवत्ता वाले आउटपुट को सुनिश्चित करता है।",
      },
    ],
    body: {
      heading1: "pixel से मिलीमीटर रूपांतरण कैसे काम करता है",
      p1: "pixels को मिलीमीटर में बदलने से आपको डिजिटल आयामों से सटीक भौतिक माप मिलते हैं। सूत्र है:",
      formula: "मिलीमीटर = (Pixels x 25.4) / DPI",
      p2: "यह सूत्र पहले pixels को इंच में बदलता है (pixels / DPI), फिर मिलीमीटर में (इंच x 25.4)। परिणाम दिए गए DPI पर सटीक भौतिक चौड़ाई या ऊँचाई बताता है।",
      heading2: "सामान्य उपयोग के मामले",
      li1: "गुणवत्ता सत्यापन: जाँचें कि किसी छवि में mm में किसी विशिष्ट प्रिंट आकार के लिए पर्याप्त रिज़ॉल्यूशन है।",
      li2: "विनिर्माण विनिर्देश: डिजिटल मॉकअप आयामों को उत्पादन मापों में बदलें।",
      li3: "सटीक लेआउट: सत्यापित करें कि स्क्रीन तत्व अभीष्ट भौतिक आकारों से मेल खाते हैं।",
      li4: "चिकित्सा इमेजिंग: डिजिटल स्कैन आयामों को वास्तविक-विश्व मापों में बदलें।",
      heading3: "pixel आकार संदर्भ",
      li5: "72 DPI पर — 1 pixel = 0.353 mm (पुराने Mac डिस्प्ले का सामान्य मान)",
      li6: "96 DPI पर — 1 pixel = 0.265 mm (मानक web/Windows)",
      li7: "150 DPI पर — 1 pixel = 0.169 mm (मध्यम प्रिंट गुणवत्ता)",
      li8: "300 DPI पर — 1 pixel = 0.085 mm (पेशेवर प्रिंट)",
      heading4: "मिलीमीटर में pixel कितना सटीक है?",
      p3: "pixel का भौतिक आकार डिस्प्ले या प्रिंट डिवाइस के अनुसार बदलता है। 27-इंच 2560x1440 मॉनिटर पर, प्रत्येक pixel लगभग 0.233 mm चौड़ा होता है। 24-इंच 1920x1080 डिस्प्ले पर, प्रत्येक pixel लगभग 0.277 mm होता है। ये मान DPI-आधारित गणना से भिन्न होते हैं क्योंकि मॉनिटर विनिर्देश अपनी स्वयं की pixel घनत्व निर्धारित करते हैं। सूत्र-आधारित रूपांतरण (pixels x 25.4 / DPI) एक विशिष्ट DPI सेटिंग के लिए अभीष्ट भौतिक आकार देता है, जो प्रिंटर और डिज़ाइन सॉफ़्टवेयर द्वारा उपयोग किया जाने वाला मान है।",
      heading5: "कौन सी pixel संख्याएँ सामान्य मिलीमीटर आकार उत्पन्न करती हैं?",
      p4: "300 DPI पर सामान्य mm मापों से पीछे की ओर काम करते हुए: 10 mm तत्व को 118 pixels की आवश्यकता होती है, 25 mm तत्व को 295 pixels की, 50 mm तत्व को 591 pixels की, और 100 mm तत्व को 1,181 pixels की। 96 DPI (web) पर, उन्हीं मापों को क्रमशः 38, 94, 189 और 378 pixels की आवश्यकता होती है। इन बेंचमार्क को जानने से आप तुरंत आकलन कर सकते हैं कि किसी छवि में लक्ष्य भौतिक आकार के लिए पर्याप्त रिज़ॉल्यूशन है या नहीं।",
      heading6: "pixel-से-mm रूपांतरण कब आवश्यक है?",
      p5: "प्रिंट उत्पादन में गुणवत्ता नियंत्रण px-से-mm रूपांतरण पर बहुत निर्भर करता है। प्रूफ को मंजूरी देने से पहले, डिज़ाइनर सत्यापित करते हैं कि 300 DPI पर टेक्स्ट पठनीयता के लिए कम से कम 2 mm ऊँचा (लगभग 24 pixels) होगा। EU में उत्पाद लेबल नियम मिलीमीटर में न्यूनतम फ़ॉन्ट ऊँचाई निर्दिष्ट करते हैं, इसलिए अपने pixel-आधारित डिज़ाइन को mm में बदलना अनुपालन की पुष्टि करता है। चिकित्सा और वैज्ञानिक इमेजिंग भी mm माप का उपयोग करती है, जहाँ शोधकर्ता सटीक विश्लेषण के लिए स्कैन pixel आयामों को वास्तविक-विश्व mm में बदलते हैं।",
    },
  },
  ja: {
    faq: [
      {
        question: "pixelsをミリメートルに変換するにはどうすればよいですか?",
        answer:
          "pixel数に25.4を掛け、DPIで割ります。例えば、96 DPIで378 pixelsは約100 mmです(378 x 25.4 / 96 = 100.01)。",
      },
      {
        question: "1 pixelは何ミリメートルですか?",
        answer:
          "96 DPIでは、1 pixelは約0.265 mmです。300 DPIでは、1 pixelは約0.085 mmです。pixelの物理的サイズはDPI設定に完全に依存します。",
      },
      {
        question: "画面上のpixelのサイズを調べるにはどうすればよいですか?",
        answer:
          "画面の物理的な幅(mm)を水平pixel解像度で割ります。例えば、2560 pixelsの27インチ(幅686 mm)ディスプレイでは、pixelの幅は約0.268 mmです。",
      },
      {
        question: "なぜセンチメートルではなくミリメートルを使うのですか?",
        answer:
          "ミリメートルは小数なしでセンチメートルの10倍の精度を提供します。工学、パッケージング、精密印刷などの分野では、正確性のため仕様は一般的にミリメートルで示されます。",
      },
      {
        question: "300 DPIで100 mmの印刷に何pixelsが必要ですか?",
        answer:
          "300 DPIで100 mmには約1,181 pixelsが必要です(100 x 300 / 25.4 = 1181.1)。これにより、指定サイズでシャープなプロフェッショナル品質の出力が確保されます。",
      },
    ],
    body: {
      heading1: "pixelからミリメートルへの変換の仕組み",
      p1: "pixelsをミリメートルに変換すると、デジタル寸法から正確な物理的測定値が得られます。計算式は次のとおりです:",
      formula: "ミリメートル = (Pixels x 25.4) / DPI",
      p2: "この式はまずpixelsをインチに変換し(pixels / DPI)、次にミリメートルに変換します(インチ x 25.4)。結果は指定されたDPIでの正確な物理的な幅または高さを示します。",
      heading2: "一般的な使用例",
      li1: "品質検証:画像がmm単位の特定の印刷サイズに十分な解像度があるか確認します。",
      li2: "製造仕様:デジタルモックアップの寸法を生産用の測定値に変換します。",
      li3: "精密レイアウト:画面要素が意図した物理的サイズに対応しているか確認します。",
      li4: "医療画像:デジタルスキャンの寸法を実世界の測定値に変換します。",
      heading3: "pixelサイズ参照表",
      li5: "72 DPI時 — 1 pixel = 0.353 mm(旧型Macディスプレイの一般値)",
      li6: "96 DPI時 — 1 pixel = 0.265 mm(標準web/Windows)",
      li7: "150 DPI時 — 1 pixel = 0.169 mm(中程度の印刷品質)",
      li8: "300 DPI時 — 1 pixel = 0.085 mm(プロフェッショナル印刷)",
      heading4: "ミリメートルでのpixelの精度はどのくらいですか?",
      p3: "pixelの物理的サイズはディスプレイや印刷デバイスによって異なります。27インチ2560x1440モニターでは、各pixelの幅は約0.233 mmです。24インチ1920x1080ディスプレイでは、各pixelは約0.277 mmです。これらの値はDPIベースの計算と異なります。モニターの仕様が独自のpixel密度を定義するためです。式ベースの変換(pixels x 25.4 / DPI)は特定のDPI設定に対する意図された物理サイズを提供し、これはプリンターやデザインソフトウェアが使用する値です。",
      heading5: "一般的なミリメートルサイズに必要なpixel数は?",
      p4: "300 DPIでの一般的なmm測定値から逆算すると:10 mm要素には118 pixels、25 mm要素には295 pixels、50 mm要素には591 pixels、100 mm要素には1,181 pixelsが必要です。96 DPI(web)では、同じ測定値にそれぞれ38、94、189、378 pixelsが必要です。これらのベンチマークを知っておくと、画像がターゲットの物理サイズに十分な解像度を持っているかを素早く判断できます。",
      heading6: "pixel-to-mm変換が不可欠なのはいつですか?",
      p5: "印刷制作における品質管理はpxからmmへの変換に大きく依存しています。校正を承認する前に、デザイナーは300 DPIでテキストが読みやすさのために少なくとも2 mm(約24 pixels)の高さになることを確認します。EUの製品ラベル規制ではフォントの最小高さをミリメートルで指定しているため、pixelベースのデザインをmmに変換することでコンプライアンスが確認できます。医療および科学画像もmm測定を使用し、研究者は正確な分析のためにスキャンのpixel寸法を実世界のmmに変換します。",
    },
  },
  ko: {
    faq: [
      {
        question: "pixels를 밀리미터로 어떻게 변환하나요?",
        answer:
          "pixel 수에 25.4를 곱한 다음 DPI로 나눕니다. 예를 들어, 96 DPI에서 378 pixels는 약 100 mm입니다(378 x 25.4 / 96 = 100.01).",
      },
      {
        question: "1 pixel은 몇 밀리미터인가요?",
        answer:
          "96 DPI에서 1 pixel은 약 0.265 mm입니다. 300 DPI에서 1 pixel은 약 0.085 mm입니다. pixel의 물리적 크기는 전적으로 DPI 설정에 따라 달라집니다.",
      },
      {
        question: "내 화면에서 pixel 크기를 어떻게 알 수 있나요?",
        answer:
          "화면의 물리적 너비(mm)를 수평 pixel 해상도로 나눕니다. 예를 들어, 2560 pixels의 27인치(너비 686 mm) 디스플레이에서 pixel 너비는 약 0.268 mm입니다.",
      },
      {
        question: "왜 센티미터 대신 밀리미터를 사용하나요?",
        answer:
          "밀리미터는 소수점 없이 센티미터보다 10배 더 정밀합니다. 공학, 포장, 정밀 인쇄와 같은 분야에서 정확성을 위해 사양은 일반적으로 밀리미터로 제공됩니다.",
      },
      {
        question: "300 DPI에서 100 mm 인쇄에 몇 pixels가 필요한가요?",
        answer:
          "300 DPI에서 100 mm에는 약 1,181 pixels가 필요합니다(100 x 300 / 25.4 = 1181.1). 이는 지정된 크기에서 선명하고 전문적인 품질의 출력을 보장합니다.",
      },
    ],
    body: {
      heading1: "pixel에서 밀리미터로의 변환 원리",
      p1: "pixels를 밀리미터로 변환하면 디지털 치수에서 정확한 물리적 측정값을 얻을 수 있습니다. 공식은 다음과 같습니다:",
      formula: "밀리미터 = (Pixels x 25.4) / DPI",
      p2: "이 공식은 먼저 pixels를 인치로 변환하고(pixels / DPI), 그 다음 밀리미터로 변환합니다(인치 x 25.4). 결과는 주어진 DPI에서의 정확한 물리적 너비 또는 높이를 알려줍니다.",
      heading2: "일반적인 사용 사례",
      li1: "품질 검증: 이미지가 mm 단위의 특정 인쇄 크기에 충분한 해상도를 가지고 있는지 확인합니다.",
      li2: "제조 사양: 디지털 목업 치수를 생산 측정값으로 변환합니다.",
      li3: "정밀 레이아웃: 화면 요소가 의도한 물리적 크기에 해당하는지 확인합니다.",
      li4: "의료 영상: 디지털 스캔 치수를 실제 측정값으로 변환합니다.",
      heading3: "pixel 크기 참조",
      li5: "72 DPI에서 — 1 pixel = 0.353 mm (구형 Mac 디스플레이 일반값)",
      li6: "96 DPI에서 — 1 pixel = 0.265 mm (표준 web/Windows)",
      li7: "150 DPI에서 — 1 pixel = 0.169 mm (중간 인쇄 품질)",
      li8: "300 DPI에서 — 1 pixel = 0.085 mm (전문 인쇄)",
      heading4: "밀리미터로 pixel은 얼마나 정확한가요?",
      p3: "pixel의 물리적 크기는 디스플레이 또는 인쇄 장치에 따라 다릅니다. 27인치 2560x1440 모니터에서 각 pixel의 너비는 약 0.233 mm입니다. 24인치 1920x1080 디스플레이에서 각 pixel은 약 0.277 mm입니다. 이 값들은 모니터 사양이 자체 pixel 밀도를 정의하기 때문에 DPI 기반 계산과 다릅니다. 공식 기반 변환(pixels x 25.4 / DPI)은 특정 DPI 설정에 대한 의도된 물리적 크기를 제공하며, 이것이 프린터와 디자인 소프트웨어가 사용하는 값입니다.",
      heading5: "일반적인 밀리미터 크기를 만드는 pixel 수는?",
      p4: "300 DPI에서 일반적인 mm 측정값으로 역산하면: 10 mm 요소는 118 pixels, 25 mm 요소는 295 pixels, 50 mm 요소는 591 pixels, 100 mm 요소는 1,181 pixels가 필요합니다. 96 DPI(웹)에서 같은 측정값은 각각 38, 94, 189, 378 pixels가 필요합니다. 이러한 기준값을 알면 이미지가 목표 물리적 크기에 충분한 해상도를 가지고 있는지 빠르게 평가할 수 있습니다.",
      heading6: "pixel-to-mm 변환이 필수적인 경우",
      p5: "인쇄 생산의 품질 관리는 px에서 mm로의 변환에 크게 의존합니다. 교정을 승인하기 전에 디자이너는 300 DPI에서 텍스트가 가독성을 위해 최소 2 mm(약 24 pixels) 높이가 되는지 확인합니다. EU의 제품 라벨 규정은 최소 글꼴 높이를 밀리미터로 지정하므로, pixel 기반 디자인을 mm로 변환하면 규정 준수를 확인할 수 있습니다. 의료 및 과학 영상도 mm 측정을 사용하며, 연구자들은 정확한 분석을 위해 스캔의 pixel 치수를 실제 mm로 변환합니다.",
    },
  },
  it: {
    faq: [
      {
        question: "Come converto i pixels in millimetri?",
        answer:
          "Moltiplica il numero di pixels per 25.4, poi dividi per il DPI. Ad esempio, 378 pixels a 96 DPI equivalgono a circa 100 mm (378 x 25.4 / 96 = 100.01).",
      },
      {
        question: "Quanti millimetri misura 1 pixel?",
        answer:
          "A 96 DPI, 1 pixel misura circa 0.265 mm. A 300 DPI, 1 pixel misura circa 0.085 mm. La dimensione fisica di un pixel dipende interamente dall'impostazione DPI.",
      },
      {
        question: "Come trovo la dimensione di un pixel sul mio schermo?",
        answer:
          "Dividi la larghezza fisica del tuo schermo (in mm) per la sua risoluzione orizzontale in pixels. Ad esempio, un display da 27 pollici (686 mm di larghezza) a 2560 pixels ha pixels larghi circa 0.268 mm.",
      },
      {
        question: "Perché usare i millimetri invece dei centimetri?",
        answer:
          "I millimetri offrono una precisione 10 volte superiore ai centimetri senza decimali. In campi come ingegneria, packaging e stampa di precisione, le specifiche sono comunemente fornite in millimetri per accuratezza.",
      },
      {
        question: "Quanti pixels servono per una stampa di 100 mm a 300 DPI?",
        answer:
          "Per 100 mm a 300 DPI servono circa 1.181 pixels (100 x 300 / 25.4 = 1181.1). Questo garantisce un output nitido e di qualità professionale nella dimensione specificata.",
      },
    ],
    body: {
      heading1: "Come funziona la conversione da pixels a millimetri",
      p1: "Convertire pixels in millimetri fornisce misure fisiche precise da dimensioni digitali. La formula è:",
      formula: "Millimetri = (Pixels x 25.4) / DPI",
      p2: "Questa formula converte prima i pixels in pollici (pixels / DPI), poi in millimetri (pollici x 25.4). Il risultato indica la larghezza o altezza fisica esatta al DPI dato.",
      heading2: "Casi d'uso comuni",
      li1: "Verifica qualità: Controlla se un'immagine ha risoluzione sufficiente per una dimensione di stampa specifica in mm.",
      li2: "Specifiche di produzione: Converti le dimensioni dei mockup digitali in misure di produzione.",
      li3: "Layout di precisione: Verifica che gli elementi sullo schermo corrispondano alle dimensioni fisiche previste.",
      li4: "Imaging medico: Converti le dimensioni delle scansioni digitali in misure reali.",
      heading3: "Riferimento dimensione pixel",
      li5: "A 72 DPI — 1 pixel = 0.353 mm (display Mac vecchio tipico)",
      li6: "A 96 DPI — 1 pixel = 0.265 mm (standard web/Windows)",
      li7: "A 150 DPI — 1 pixel = 0.169 mm (qualità di stampa media)",
      li8: "A 300 DPI — 1 pixel = 0.085 mm (stampa professionale)",
      heading4: "Quanto è preciso un pixel in millimetri?",
      p3: "La dimensione fisica di un pixel varia in base al display o al dispositivo di stampa. Su un monitor da 27 pollici 2560x1440, ogni pixel misura circa 0.233 mm di larghezza. Su un display da 24 pollici 1920x1080, ogni pixel è circa 0.277 mm. Questi valori differiscono dal calcolo basato sul DPI perché le specifiche del monitor definiscono la propria densità di pixels. La conversione basata sulla formula (pixels x 25.4 / DPI) fornisce la dimensione fisica prevista per un'impostazione DPI specifica, che è il valore usato da stampanti e software di design.",
      heading5: "Quali conteggi di pixels producono dimensioni comuni in millimetri?",
      p4: "Calcolando a ritroso da misure comuni in mm a 300 DPI: un elemento da 10 mm richiede 118 pixels, uno da 25 mm richiede 295 pixels, uno da 50 mm richiede 591 pixels e uno da 100 mm richiede 1.181 pixels. A 96 DPI (web), le stesse misure richiedono rispettivamente 38, 94, 189 e 378 pixels. Conoscere questi riferimenti aiuta a valutare rapidamente se un'immagine ha risoluzione sufficiente per una dimensione fisica target.",
      heading6: "Quando è essenziale la conversione da pixels a mm?",
      p5: "Il controllo qualità nella produzione di stampa si basa fortemente sulla conversione da px a mm. Prima di approvare una bozza, i designer verificano che il testo a 300 DPI sarà alto almeno 2 mm (circa 24 pixels) per la leggibilità. Le normative UE sulle etichette dei prodotti specificano altezze minime dei caratteri in millimetri, quindi convertire il design basato su pixels in mm conferma la conformità. Anche l'imaging medico e scientifico usa misure in mm, dove i ricercatori convertono le dimensioni in pixels delle scansioni in mm reali per un'analisi accurata.",
    },
  },
  nl: {
    faq: [
      {
        question: "Hoe converteer ik pixels naar millimeters?",
        answer:
          "Vermenigvuldig het aantal pixels met 25.4 en deel dan door de DPI. Bijvoorbeeld: 378 pixels bij 96 DPI is ongeveer 100 mm (378 x 25.4 / 96 = 100.01).",
      },
      {
        question: "Hoeveel millimeter is 1 pixel?",
        answer:
          "Bij 96 DPI is 1 pixel ongeveer 0.265 mm. Bij 300 DPI is 1 pixel ongeveer 0.085 mm. De fysieke grootte van een pixel hangt volledig af van de DPI-instelling.",
      },
      {
        question: "Hoe vind ik de grootte van een pixel op mijn scherm?",
        answer:
          "Deel de fysieke breedte van je scherm (in mm) door de horizontale pixelresolutie. Bijvoorbeeld: een 27-inch (686 mm breed) scherm met 2560 pixels heeft pixels van ongeveer 0.268 mm breed.",
      },
      {
        question: "Waarom millimeters gebruiken in plaats van centimeters?",
        answer:
          "Millimeters bieden 10x de precisie van centimeters zonder decimalen. In vakgebieden als engineering, verpakking en precisieprintwerk worden specificaties gewoonlijk in millimeters gegeven voor nauwkeurigheid.",
      },
      {
        question: "Hoeveel pixels heb ik nodig voor een print van 100 mm bij 300 DPI?",
        answer:
          "Voor 100 mm bij 300 DPI heb je ongeveer 1.181 pixels nodig (100 x 300 / 25.4 = 1181.1). Dit zorgt voor een scherpe, professionele output op het opgegeven formaat.",
      },
    ],
    body: {
      heading1: "Hoe pixel-naar-millimeter conversie werkt",
      p1: "Het converteren van pixels naar millimeters geeft je nauwkeurige fysieke afmetingen vanuit digitale dimensies. De formule is:",
      formula: "Millimeters = (Pixels x 25.4) / DPI",
      p2: "Deze formule converteert pixels eerst naar inches (pixels / DPI), dan naar millimeters (inches x 25.4). Het resultaat geeft de exacte fysieke breedte of hoogte bij de gegeven DPI.",
      heading2: "Veelvoorkomende toepassingen",
      li1: "Kwaliteitsverificatie: Controleer of een afbeelding voldoende resolutie heeft voor een specifiek printformaat in mm.",
      li2: "Productiespecificaties: Converteer digitale mockup-afmetingen naar productiematen.",
      li3: "Precisielayout: Verifieer dat schermelementen overeenkomen met de beoogde fysieke afmetingen.",
      li4: "Medische beeldvorming: Converteer digitale scandimensies naar echte metingen.",
      heading3: "Pixelgrootte-referentie",
      li5: "Bij 72 DPI — 1 pixel = 0.353 mm (typisch ouder Mac-scherm)",
      li6: "Bij 96 DPI — 1 pixel = 0.265 mm (standaard web/Windows)",
      li7: "Bij 150 DPI — 1 pixel = 0.169 mm (gemiddelde printkwaliteit)",
      li8: "Bij 300 DPI — 1 pixel = 0.085 mm (professioneel drukwerk)",
      heading4: "Hoe nauwkeurig is een pixel in millimeters?",
      p3: "De fysieke grootte van een pixel varieert per beeldscherm of printapparaat. Op een 27-inch 2560x1440 monitor meet elke pixel ongeveer 0.233 mm breed. Op een 24-inch 1920x1080 scherm is elke pixel ongeveer 0.277 mm. Deze waarden wijken af van de DPI-gebaseerde berekening omdat monitorspecificaties hun eigen pixeldichtheid definiëren. De formule-gebaseerde conversie (pixels x 25.4 / DPI) geeft de beoogde fysieke grootte voor een specifieke DPI-instelling, de waarde die printers en ontwerpsoftware gebruiken.",
      heading5: "Welke pixelaantallen produceren gangbare millimetermaten?",
      p4: "Teruggerekend vanuit gangbare mm-maten bij 300 DPI: een element van 10 mm vereist 118 pixels, 25 mm vereist 295 pixels, 50 mm vereist 591 pixels en 100 mm vereist 1.181 pixels. Bij 96 DPI (web) vereisen dezelfde maten respectievelijk 38, 94, 189 en 378 pixels. Deze referentiewaarden kennen helpt snel te beoordelen of een afbeelding voldoende resolutie heeft voor een doelformaat.",
      heading6: "Wanneer is pixel-naar-mm conversie essentieel?",
      p5: "Kwaliteitscontrole in drukproductie leunt zwaar op px-naar-mm conversie. Voordat een proef wordt goedgekeurd, verifiëren designers dat tekst bij 300 DPI minimaal 2 mm hoog zal zijn (ongeveer 24 pixels) voor leesbaarheid. EU-regelgeving voor productetiketten specificeert minimale letterhoogtes in millimeters, dus het converteren van je pixelgebaseerde ontwerp naar mm bevestigt conformiteit. Medische en wetenschappelijke beeldvorming gebruikt ook mm-metingen, waarbij onderzoekers scanpixeldimensies converteren naar echte mm voor nauwkeurige analyse.",
    },
  },
  ar: {
    faq: [
      {
        question: "كيف أحوّل pixels إلى ملليمترات؟",
        answer:
          "اضرب عدد pixels في 25.4 ثم اقسم على DPI. مثلاً، 378 pixels عند 96 DPI تساوي حوالي 100 mm (378 x 25.4 / 96 = 100.01).",
      },
      {
        question: "كم ملليمتر يساوي 1 pixel؟",
        answer:
          "عند 96 DPI، يساوي 1 pixel حوالي 0.265 mm. عند 300 DPI، يساوي 1 pixel حوالي 0.085 mm. الحجم الفعلي لـ pixel يعتمد كلياً على إعداد DPI.",
      },
      {
        question: "كيف أجد حجم pixel على شاشتي؟",
        answer:
          "اقسم العرض الفعلي لشاشتك (بالملليمتر) على دقة pixels الأفقية. مثلاً، شاشة 27 بوصة (عرض 686 mm) بدقة 2560 pixels لديها pixels بعرض حوالي 0.268 mm.",
      },
      {
        question: "لماذا نستخدم الملليمترات بدلاً من السنتيمترات؟",
        answer:
          "توفر الملليمترات دقة 10 أضعاف السنتيمترات بدون كسور عشرية. في مجالات مثل الهندسة والتغليف والطباعة الدقيقة، تُعطى المواصفات عادة بالملليمترات لضمان الدقة.",
      },
      {
        question: "كم عدد pixels المطلوبة لطباعة 100 mm عند 300 DPI؟",
        answer:
          "لـ 100 mm عند 300 DPI، تحتاج حوالي 1,181 pixels (100 x 300 / 25.4 = 1181.1). هذا يضمن مخرجات حادة وذات جودة احترافية بالحجم المحدد.",
      },
    ],
    body: {
      heading1: "كيف يعمل تحويل pixels إلى ملليمترات",
      p1: "تحويل pixels إلى ملليمترات يمنحك قياسات فعلية دقيقة من الأبعاد الرقمية. الصيغة هي:",
      formula: "ملليمترات = (Pixels x 25.4) / DPI",
      p2: "تحوّل هذه الصيغة pixels إلى بوصات أولاً (pixels / DPI)، ثم إلى ملليمترات (بوصات x 25.4). النتيجة تخبرك بالعرض أو الارتفاع الفعلي الدقيق عند DPI المحدد.",
      heading2: "حالات الاستخدام الشائعة",
      li1: "التحقق من الجودة: تحقق مما إذا كانت الصورة لديها دقة كافية لحجم طباعة محدد بالملليمتر.",
      li2: "مواصفات التصنيع: حوّل أبعاد النماذج الرقمية إلى قياسات الإنتاج.",
      li3: "التخطيط الدقيق: تحقق من أن عناصر الشاشة تتوافق مع الأحجام الفعلية المقصودة.",
      li4: "التصوير الطبي: حوّل أبعاد المسح الرقمي إلى قياسات العالم الحقيقي.",
      heading3: "مرجع حجم pixel",
      li5: "عند 72 DPI — 1 pixel = 0.353 mm (شاشة Mac قديمة نموذجية)",
      li6: "عند 96 DPI — 1 pixel = 0.265 mm (معيار web/Windows)",
      li7: "عند 150 DPI — 1 pixel = 0.169 mm (جودة طباعة متوسطة)",
      li8: "عند 300 DPI — 1 pixel = 0.085 mm (طباعة احترافية)",
      heading4: "ما مدى دقة pixel بالملليمترات؟",
      p3: "يختلف الحجم الفعلي لـ pixel باختلاف الشاشة أو جهاز الطباعة. على شاشة 27 بوصة بدقة 2560x1440، يبلغ عرض كل pixel حوالي 0.233 mm. على شاشة 24 بوصة بدقة 1920x1080، يبلغ عرض كل pixel حوالي 0.277 mm. تختلف هذه القيم عن الحساب المبني على DPI لأن مواصفات الشاشة تحدد كثافة pixels الخاصة بها. التحويل بالصيغة (pixels x 25.4 / DPI) يعطيك الحجم الفعلي المقصود لإعداد DPI محدد، وهو القيمة التي تستخدمها الطابعات وبرامج التصميم.",
      heading5: "ما أعداد pixels التي تنتج أحجام ملليمترات شائعة؟",
      p4: "بالحساب العكسي من قياسات mm الشائعة عند 300 DPI: عنصر 10 mm يحتاج 118 pixels، عنصر 25 mm يحتاج 295 pixels، عنصر 50 mm يحتاج 591 pixels، وعنصر 100 mm يحتاج 1,181 pixels. عند 96 DPI (web)، تحتاج نفس القياسات إلى 38 و94 و189 و378 pixels على التوالي. معرفة هذه المعايير تساعدك على تقييم ما إذا كانت الصورة لديها دقة كافية لحجم فعلي مستهدف بسرعة.",
      heading6: "متى يكون تحويل pixels إلى mm ضرورياً؟",
      p5: "يعتمد ضبط الجودة في إنتاج الطباعة بشكل كبير على تحويل px إلى mm. قبل الموافقة على البروفة، يتحقق المصممون من أن النص عند 300 DPI سيكون بارتفاع 2 mm على الأقل (حوالي 24 pixels) لضمان المقروئية. تحدد لوائح ملصقات المنتجات في الاتحاد الأوروبي حداً أدنى لارتفاع الخط بالملليمترات، لذا فإن تحويل تصميمك المبني على pixels إلى mm يؤكد الامتثال. كما يستخدم التصوير الطبي والعلمي قياسات mm، حيث يحوّل الباحثون أبعاد pixels للمسح إلى mm حقيقية لتحليل دقيق.",
    },
  },
  tr: {
    faq: [
      {
        question: "Pixels'i milimetreye nasıl dönüştürürüm?",
        answer:
          "Pixel sayısını 25.4 ile çarpın, ardından DPI'a bölün. Örneğin, 96 DPI'da 378 pixels yaklaşık 100 mm'ye eşittir (378 x 25.4 / 96 = 100.01).",
      },
      {
        question: "1 pixel kaç milimetredir?",
        answer:
          "96 DPI'da 1 pixel yaklaşık 0.265 mm'dir. 300 DPI'da 1 pixel yaklaşık 0.085 mm'dir. Bir pixel'in fiziksel boyutu tamamen DPI ayarına bağlıdır.",
      },
      {
        question: "Ekranımdaki pixel boyutunu nasıl bulurum?",
        answer:
          "Ekranınızın fiziksel genişliğini (mm cinsinden) yatay pixel çözünürlüğüne bölün. Örneğin, 2560 pixels'lik 27 inçlik (686 mm genişliğinde) bir ekranda pixels yaklaşık 0.268 mm genişliğindedir.",
      },
      {
        question: "Neden santimetre yerine milimetre kullanılır?",
        answer:
          "Milimetreler, ondalık kullanmadan santimetrelerden 10 kat daha fazla hassasiyet sağlar. Mühendislik, ambalaj ve hassas baskı gibi alanlarda özellikler doğruluk için genellikle milimetre cinsinden verilir.",
      },
      {
        question: "300 DPI'da 100 mm baskı için kaç pixels gerekir?",
        answer:
          "300 DPI'da 100 mm için yaklaşık 1.181 pixels gerekir (100 x 300 / 25.4 = 1181.1). Bu, belirtilen boyutta keskin, profesyonel kalitede çıktı sağlar.",
      },
    ],
    body: {
      heading1: "Pixel'den milimetreye dönüşüm nasıl çalışır",
      p1: "Pixels'i milimetreye dönüştürmek, dijital boyutlardan hassas fiziksel ölçümler verir. Formül şudur:",
      formula: "Milimetre = (Pixels x 25.4) / DPI",
      p2: "Bu formül önce pixels'i inçe (pixels / DPI), sonra milimetreye (inç x 25.4) dönüştürür. Sonuç, verilen DPI'daki tam fiziksel genişlik veya yüksekliği gösterir.",
      heading2: "Yaygın kullanım alanları",
      li1: "Kalite doğrulama: Bir görüntünün mm cinsinden belirli bir baskı boyutu için yeterli çözünürlüğe sahip olup olmadığını kontrol edin.",
      li2: "Üretim özellikleri: Dijital maket boyutlarını üretim ölçümlerine dönüştürün.",
      li3: "Hassas düzen: Ekran öğelerinin amaçlanan fiziksel boyutlara karşılık geldiğini doğrulayın.",
      li4: "Tıbbi görüntüleme: Dijital tarama boyutlarını gerçek dünya ölçümlerine dönüştürün.",
      heading3: "Pixel boyutu referansı",
      li5: "72 DPI'da — 1 pixel = 0.353 mm (tipik eski Mac ekranı)",
      li6: "96 DPI'da — 1 pixel = 0.265 mm (standart web/Windows)",
      li7: "150 DPI'da — 1 pixel = 0.169 mm (orta baskı kalitesi)",
      li8: "300 DPI'da — 1 pixel = 0.085 mm (profesyonel baskı)",
      heading4: "Milimetre cinsinden pixel ne kadar doğrudur?",
      p3: "Bir pixel'in fiziksel boyutu ekrana veya baskı cihazına göre değişir. 27 inçlik 2560x1440 monitörde her pixel yaklaşık 0.233 mm genişliğindedir. 24 inçlik 1920x1080 ekranda her pixel yaklaşık 0.277 mm'dir. Bu değerler DPI tabanlı hesaplamadan farklıdır çünkü monitör özellikleri kendi pixel yoğunluğunu tanımlar. Formül tabanlı dönüşüm (pixels x 25.4 / DPI) belirli bir DPI ayarı için amaçlanan fiziksel boyutu verir; bu, yazıcıların ve tasarım yazılımlarının kullandığı değerdir.",
      heading5: "Hangi pixel sayıları yaygın milimetre boyutları üretir?",
      p4: "300 DPI'da yaygın mm ölçümlerinden geriye doğru hesaplama: 10 mm'lik bir öğe 118 pixels, 25 mm'lik bir öğe 295 pixels, 50 mm'lik bir öğe 591 pixels ve 100 mm'lik bir öğe 1.181 pixels gerektirir. 96 DPI'da (web), aynı ölçümler sırasıyla 38, 94, 189 ve 378 pixels gerektirir. Bu referans değerleri bilmek, bir görüntünün hedef fiziksel boyut için yeterli çözünürlüğe sahip olup olmadığını hızlıca değerlendirmenize yardımcı olur.",
      heading6: "Pixel'den mm'ye dönüşüm ne zaman gereklidir?",
      p5: "Baskı üretiminde kalite kontrolü büyük ölçüde px-mm dönüşümüne dayanır. Bir prova onaylanmadan önce, tasarımcılar 300 DPI'da metnin okunabilirlik için en az 2 mm yüksekliğinde (yaklaşık 24 pixels) olacağını doğrular. AB'deki ürün etiketi düzenlemeleri minimum yazı tipi yüksekliklerini milimetre cinsinden belirtir, bu nedenle pixel tabanlı tasarımınızı mm'ye dönüştürmek uyumluluğu teyit eder. Tıbbi ve bilimsel görüntüleme de mm ölçümlerini kullanır; araştırmacılar doğru analiz için tarama pixel boyutlarını gerçek mm'ye dönüştürür.",
    },
  },
  pl: {
    faq: [
      {
        question: "Jak przeliczyć pixels na milimetry?",
        answer:
          "Pomnóż liczbę pixels przez 25.4, a następnie podziel przez DPI. Na przykład 378 pixels przy 96 DPI to około 100 mm (378 x 25.4 / 96 = 100.01).",
      },
      {
        question: "Ile milimetrów ma 1 pixel?",
        answer:
          "Przy 96 DPI 1 pixel ma około 0.265 mm. Przy 300 DPI 1 pixel ma około 0.085 mm. Fizyczny rozmiar pixela zależy całkowicie od ustawienia DPI.",
      },
      {
        question: "Jak sprawdzić rozmiar pixela na moim ekranie?",
        answer:
          "Podziel fizyczną szerokość ekranu (w mm) przez jego poziomą rozdzielczość w pixels. Na przykład 27-calowy monitor (686 mm szerokości) o rozdzielczości 2560 pixels ma pixels o szerokości około 0.268 mm.",
      },
      {
        question: "Dlaczego milimetry zamiast centymetrów?",
        answer:
          "Milimetry zapewniają 10-krotnie większą precyzję niż centymetry bez używania miejsc po przecinku. W dziedzinach takich jak inżynieria, pakowanie i druk precyzyjny specyfikacje są zwykle podawane w milimetrach dla dokładności.",
      },
      {
        question: "Ile pixels potrzebuję do wydruku 100 mm przy 300 DPI?",
        answer:
          "Dla 100 mm przy 300 DPI potrzebujesz około 1181 pixels (100 x 300 / 25.4 = 1181.1). To zapewnia ostry, profesjonalnej jakości wydruk w określonym rozmiarze.",
      },
    ],
    body: {
      heading1: "Jak działa konwersja pixels na milimetry",
      p1: "Konwersja pixels na milimetry daje precyzyjne pomiary fizyczne z wymiarów cyfrowych. Wzór to:",
      formula: "Milimetry = (Pixels x 25.4) / DPI",
      p2: "Ten wzór najpierw konwertuje pixels na cale (pixels / DPI), a następnie na milimetry (cale x 25.4). Wynik podaje dokładną fizyczną szerokość lub wysokość przy danym DPI.",
      heading2: "Typowe zastosowania",
      li1: "Weryfikacja jakości: Sprawdź, czy obraz ma wystarczającą rozdzielczość dla określonego rozmiaru druku w mm.",
      li2: "Specyfikacje produkcyjne: Konwertuj wymiary cyfrowych makiet na wymiary produkcyjne.",
      li3: "Precyzyjny układ: Sprawdź, czy elementy na ekranie odpowiadają zamierzonym rozmiarom fizycznym.",
      li4: "Obrazowanie medyczne: Konwertuj wymiary skanów cyfrowych na pomiary rzeczywiste.",
      heading3: "Tabela rozmiaru pixela",
      li5: "Przy 72 DPI — 1 pixel = 0.353 mm (typowy starszy ekran Mac)",
      li6: "Przy 96 DPI — 1 pixel = 0.265 mm (standardowy web/Windows)",
      li7: "Przy 150 DPI — 1 pixel = 0.169 mm (średnia jakość druku)",
      li8: "Przy 300 DPI — 1 pixel = 0.085 mm (druk profesjonalny)",
      heading4: "Jak dokładny jest pixel w milimetrach?",
      p3: "Fizyczny rozmiar pixela zmienia się w zależności od wyświetlacza lub urządzenia drukującego. Na 27-calowym monitorze 2560x1440 każdy pixel ma około 0.233 mm szerokości. Na 24-calowym ekranie 1920x1080 każdy pixel ma około 0.277 mm. Wartości te różnią się od obliczeń opartych na DPI, ponieważ specyfikacje monitora definiują własną gęstość pixels. Konwersja wzorowa (pixels x 25.4 / DPI) daje zamierzony rozmiar fizyczny dla określonego ustawienia DPI — wartość używaną przez drukarki i oprogramowanie projektowe.",
      heading5: "Jakie liczby pixels dają typowe rozmiary w milimetrach?",
      p4: "Licząc wstecz od typowych wymiarów w mm przy 300 DPI: element 10 mm wymaga 118 pixels, 25 mm wymaga 295 pixels, 50 mm wymaga 591 pixels, a 100 mm wymaga 1181 pixels. Przy 96 DPI (web) te same wymiary wymagają odpowiednio 38, 94, 189 i 378 pixels. Znajomość tych wartości referencyjnych pomaga szybko ocenić, czy obraz ma wystarczającą rozdzielczość dla docelowego rozmiaru fizycznego.",
      heading6: "Kiedy konwersja pixels na mm jest niezbędna?",
      p5: "Kontrola jakości w produkcji druku w dużym stopniu opiera się na konwersji px na mm. Przed zatwierdzeniem próby projektanci sprawdzają, czy tekst przy 300 DPI będzie miał co najmniej 2 mm wysokości (około 24 pixels) dla czytelności. Przepisy UE dotyczące etykiet produktów określają minimalne wysokości czcionek w milimetrach, więc konwersja projektu opartego na pixels na mm potwierdza zgodność. Obrazowanie medyczne i naukowe również używa pomiarów w mm, gdzie badacze konwertują wymiary pixels skanów na rzeczywiste mm do dokładnej analizy.",
    },
  },
  id: {
    faq: [
      {
        question: "Bagaimana cara mengonversi pixels ke milimeter?",
        answer:
          "Kalikan jumlah pixels dengan 25.4, lalu bagi dengan DPI. Contoh: 378 pixels pada 96 DPI sama dengan sekitar 100 mm (378 x 25.4 / 96 = 100.01).",
      },
      {
        question: "Berapa milimeter 1 pixel?",
        answer:
          "Pada 96 DPI, 1 pixel sama dengan sekitar 0.265 mm. Pada 300 DPI, 1 pixel sama dengan sekitar 0.085 mm. Ukuran fisik pixel sepenuhnya bergantung pada pengaturan DPI.",
      },
      {
        question: "Bagaimana cara mengetahui ukuran pixel di layar saya?",
        answer:
          "Bagi lebar fisik layar Anda (dalam mm) dengan resolusi pixel horizontalnya. Contoh: layar 27 inci (lebar 686 mm) dengan 2560 pixels memiliki pixels selebar sekitar 0.268 mm.",
      },
      {
        question: "Mengapa menggunakan milimeter alih-alih sentimeter?",
        answer:
          "Milimeter memberikan presisi 10 kali lebih tinggi dari sentimeter tanpa desimal. Di bidang seperti teknik, pengemasan, dan pencetakan presisi, spesifikasi umumnya diberikan dalam milimeter untuk akurasi.",
      },
      {
        question: "Berapa pixels yang dibutuhkan untuk cetakan 100 mm pada 300 DPI?",
        answer:
          "Untuk 100 mm pada 300 DPI, Anda membutuhkan sekitar 1.181 pixels (100 x 300 / 25.4 = 1181.1). Ini memastikan output tajam dan berkualitas profesional pada ukuran yang ditentukan.",
      },
    ],
    body: {
      heading1: "Cara kerja konversi pixels ke milimeter",
      p1: "Mengonversi pixels ke milimeter memberikan pengukuran fisik yang presisi dari dimensi digital. Rumusnya adalah:",
      formula: "Milimeter = (Pixels x 25.4) / DPI",
      p2: "Rumus ini mengonversi pixels ke inci terlebih dahulu (pixels / DPI), kemudian ke milimeter (inci x 25.4). Hasilnya menunjukkan lebar atau tinggi fisik yang tepat pada DPI yang diberikan.",
      heading2: "Kasus penggunaan umum",
      li1: "Verifikasi kualitas: Periksa apakah gambar memiliki resolusi yang cukup untuk ukuran cetak tertentu dalam mm.",
      li2: "Spesifikasi manufaktur: Konversi dimensi mockup digital ke ukuran produksi.",
      li3: "Tata letak presisi: Verifikasi bahwa elemen layar sesuai dengan ukuran fisik yang dimaksud.",
      li4: "Pencitraan medis: Konversi dimensi pemindaian digital ke pengukuran dunia nyata.",
      heading3: "Referensi ukuran pixel",
      li5: "Pada 72 DPI — 1 pixel = 0.353 mm (layar Mac lama yang umum)",
      li6: "Pada 96 DPI — 1 pixel = 0.265 mm (standar web/Windows)",
      li7: "Pada 150 DPI — 1 pixel = 0.169 mm (kualitas cetak menengah)",
      li8: "Pada 300 DPI — 1 pixel = 0.085 mm (cetak profesional)",
      heading4: "Seberapa akurat pixel dalam milimeter?",
      p3: "Ukuran fisik pixel bervariasi tergantung pada layar atau perangkat cetak. Pada monitor 27 inci 2560x1440, setiap pixel berukuran sekitar 0.233 mm lebarnya. Pada layar 24 inci 1920x1080, setiap pixel sekitar 0.277 mm. Nilai-nilai ini berbeda dari perhitungan berbasis DPI karena spesifikasi monitor menentukan kepadatan pixel mereka sendiri. Konversi berbasis rumus (pixels x 25.4 / DPI) memberikan ukuran fisik yang dimaksud untuk pengaturan DPI tertentu, yaitu nilai yang digunakan oleh printer dan perangkat lunak desain.",
      heading5: "Berapa jumlah pixels yang menghasilkan ukuran milimeter umum?",
      p4: "Menghitung mundur dari ukuran mm umum pada 300 DPI: elemen 10 mm membutuhkan 118 pixels, elemen 25 mm membutuhkan 295 pixels, elemen 50 mm membutuhkan 591 pixels, dan elemen 100 mm membutuhkan 1.181 pixels. Pada 96 DPI (web), ukuran yang sama membutuhkan masing-masing 38, 94, 189, dan 378 pixels. Mengetahui tolok ukur ini membantu Anda dengan cepat menilai apakah gambar memiliki resolusi yang cukup untuk ukuran fisik target.",
      heading6: "Kapan konversi pixels ke mm sangat penting?",
      p5: "Kontrol kualitas dalam produksi cetak sangat bergantung pada konversi px ke mm. Sebelum menyetujui proof, desainer memverifikasi bahwa teks pada 300 DPI akan setidaknya 2 mm tingginya (sekitar 24 pixels) untuk keterbacaan. Regulasi label produk di UE menentukan tinggi font minimum dalam milimeter, jadi mengonversi desain berbasis pixels Anda ke mm mengonfirmasi kepatuhan. Pencitraan medis dan ilmiah juga menggunakan pengukuran mm, di mana peneliti mengonversi dimensi pixels pemindaian ke mm dunia nyata untuk analisis yang akurat.",
    },
  },
  ru: {
    faq: [
      {
        question: "Как перевести pixels в миллиметры?",
        answer:
          "Умножьте количество pixels на 25.4, затем разделите на DPI. Например, 378 pixels при 96 DPI равны приблизительно 100 mm (378 x 25.4 / 96 = 100.01).",
      },
      {
        question: "Сколько миллиметров в 1 pixel?",
        answer:
          "При 96 DPI 1 pixel равен приблизительно 0.265 mm. При 300 DPI 1 pixel равен приблизительно 0.085 mm. Физический размер pixel полностью зависит от настройки DPI.",
      },
      {
        question: "Как узнать размер pixel на моём экране?",
        answer:
          "Разделите физическую ширину экрана (в mm) на его горизонтальное разрешение в pixels. Например, 27-дюймовый (686 mm в ширину) дисплей с разрешением 2560 pixels имеет pixels шириной около 0.268 mm.",
      },
      {
        question: "Почему миллиметры, а не сантиметры?",
        answer:
          "Миллиметры обеспечивают в 10 раз большую точность, чем сантиметры, без десятичных дробей. В таких областях, как инженерия, упаковка и точная печать, спецификации обычно задаются в миллиметрах для точности.",
      },
      {
        question: "Сколько pixels нужно для печати 100 mm при 300 DPI?",
        answer:
          "Для 100 mm при 300 DPI нужно приблизительно 1 181 pixels (100 x 300 / 25.4 = 1181.1). Это обеспечивает чёткий вывод профессионального качества в указанном размере.",
      },
    ],
    body: {
      heading1: "Как работает конвертация pixels в миллиметры",
      p1: "Преобразование pixels в миллиметры даёт точные физические измерения из цифровых размеров. Формула:",
      formula: "Миллиметры = (Pixels x 25.4) / DPI",
      p2: "Эта формула сначала преобразует pixels в дюймы (pixels / DPI), затем в миллиметры (дюймы x 25.4). Результат показывает точную физическую ширину или высоту при заданном DPI.",
      heading2: "Типичные сценарии использования",
      li1: "Проверка качества: Убедитесь, что изображение имеет достаточное разрешение для определённого размера печати в mm.",
      li2: "Производственные спецификации: Конвертируйте размеры цифровых макетов в производственные измерения.",
      li3: "Точная вёрстка: Проверьте, что элементы на экране соответствуют заданным физическим размерам.",
      li4: "Медицинская визуализация: Конвертируйте размеры цифровых сканов в реальные измерения.",
      heading3: "Справочник размеров pixel",
      li5: "При 72 DPI — 1 pixel = 0.353 mm (типичный старый дисплей Mac)",
      li6: "При 96 DPI — 1 pixel = 0.265 mm (стандарт web/Windows)",
      li7: "При 150 DPI — 1 pixel = 0.169 mm (среднее качество печати)",
      li8: "При 300 DPI — 1 pixel = 0.085 mm (профессиональная печать)",
      heading4: "Насколько точен pixel в миллиметрах?",
      p3: "Физический размер pixel зависит от дисплея или печатного устройства. На 27-дюймовом мониторе 2560x1440 каждый pixel имеет ширину около 0.233 mm. На 24-дюймовом дисплее 1920x1080 каждый pixel составляет примерно 0.277 mm. Эти значения отличаются от расчёта на основе DPI, поскольку характеристики монитора определяют собственную плотность pixels. Конвертация по формуле (pixels x 25.4 / DPI) даёт предполагаемый физический размер для конкретной настройки DPI — значение, которое используют принтеры и программы для дизайна.",
      heading5: "Какое количество pixels даёт распространённые размеры в миллиметрах?",
      p4: "Обратный расчёт от распространённых mm-измерений при 300 DPI: элемент 10 mm требует 118 pixels, 25 mm — 295 pixels, 50 mm — 591 pixels, а 100 mm — 1 181 pixels. При 96 DPI (web) те же размеры требуют 38, 94, 189 и 378 pixels соответственно. Знание этих ориентиров помогает быстро оценить, имеет ли изображение достаточное разрешение для целевого физического размера.",
      heading6: "Когда конвертация pixels в mm необходима?",
      p5: "Контроль качества в печатном производстве во многом опирается на конвертацию px в mm. Перед утверждением пробного оттиска дизайнеры проверяют, что текст при 300 DPI будет высотой не менее 2 mm (около 24 pixels) для читаемости. Нормативы ЕС по маркировке продукции указывают минимальную высоту шрифта в миллиметрах, поэтому перевод пиксельного дизайна в mm подтверждает соответствие. Медицинская и научная визуализация также использует измерения в mm, где исследователи переводят размеры pixels сканов в реальные mm для точного анализа.",
    },
  },
};
