import type { PageContentMap } from "./types";

export const content: PageContentMap = {
  en: {
    faq: [
      {
        question: "How do I calculate the physical size of an image?",
        answer:
          "Divide the pixel dimensions by the DPI. For example, a 1920x1080 image at 300 DPI is 6.4 x 3.6 inches. At 96 DPI (screen), the same image is 20 x 11.25 inches.",
      },
      {
        question: "How accurate are the file size estimates?",
        answer:
          "The uncompressed size is exact based on pixel count and bit depth. JPEG and PNG estimates are approximations — actual file size depends on image complexity, compression settings, and content. Simple images compress more than detailed photos.",
      },
      {
        question: "What does bit depth mean for image size?",
        answer:
          "Bit depth determines how many bits store each pixel. 8-bit stores 256 shades (grayscale), 24-bit stores 16.7 million colors (RGB), and 32-bit adds transparency (RGBA). Higher bit depth means larger file sizes.",
      },
      {
        question: "What resolution do I need for a specific print size?",
        answer:
          "Multiply the desired print size in inches by the target DPI. For a 10x8 inch print at 300 DPI, you need 3000x2400 pixels. For web display at 96 DPI, a 10x8 area only requires 960x768 pixels.",
      },
      {
        question: "Why does the same image look different sizes on different screens?",
        answer:
          "Screens have different pixel densities (PPI). A 1920px wide image fills a 24-inch 1080p monitor entirely, but only half of a 27-inch 4K monitor. The physical size depends on the screen's PPI, not the image's DPI metadata.",
      },
    ],
    body: {
      heading1: "Understanding Image Size",
      p1: "Image size encompasses both the pixel dimensions (digital size) and the physical dimensions (print size). The relationship between these depends on DPI — how many pixels are packed into each inch of output.",
      heading2: "Physical Size Formula",
      formula: "Size in inches = Pixels / DPI",
      p2: "To convert to centimeters, multiply inches by 2.54. To convert to millimeters, multiply centimeters by 10.",
      heading3: "File Size Estimation",
      li1: "Uncompressed: Width x Height x (Bit Depth / 8) bytes. A 1920x1080 24-bit image is about 5.9 MB uncompressed.",
      li2: "JPEG: Typically 1/10 to 1/20 of uncompressed size, depending on quality setting and image complexity.",
      li3: "PNG: Typically 1/3 to 1/2 of uncompressed size for photos; much smaller for graphics with solid colors.",
      heading4: "Common Image Dimensions",
      li4: "Web banner: 1920x600 pixels at 72 DPI.",
      li5: "Social media post: 1080x1080 pixels (Instagram) or 1200x630 pixels (Facebook).",
      li6: "Print photo (4x6): 1200x1800 pixels at 300 DPI.",
      li7: "Print poster (24x36): 7200x10800 pixels at 300 DPI.",
    },
  },
  es: {
    faq: [
      {
        question: "¿Cómo calculo el tamaño físico de una imagen?",
        answer:
          "Divide las dimensiones en píxeles entre el DPI. Por ejemplo, una imagen de 1920x1080 a 300 DPI mide 6,4 x 3,6 pulgadas. A 96 DPI (pantalla), la misma imagen mide 20 x 11,25 pulgadas.",
      },
      {
        question: "¿Qué tan precisas son las estimaciones de tamaño de archivo?",
        answer:
          "El tamaño sin comprimir es exacto basado en la cantidad de píxeles y profundidad de bits. Las estimaciones de JPEG y PNG son aproximaciones — el tamaño real depende de la complejidad de la imagen, la configuración de compresión y el contenido. Las imágenes simples se comprimen más que las fotos detalladas.",
      },
      {
        question: "¿Qué significa la profundidad de bits para el tamaño de imagen?",
        answer:
          "La profundidad de bits determina cuántos bits almacenan cada píxel. 8 bits almacena 256 tonos (escala de grises), 24 bits almacena 16,7 millones de colores (RGB) y 32 bits añade transparencia (RGBA). Mayor profundidad de bits significa archivos más grandes.",
      },
      {
        question: "¿Qué resolución necesito para un tamaño de impresión específico?",
        answer:
          "Multiplica el tamaño de impresión deseado en pulgadas por el DPI objetivo. Para una impresión de 10x8 pulgadas a 300 DPI, necesitas 3000x2400 píxeles. Para visualización web a 96 DPI, un área de 10x8 solo requiere 960x768 píxeles.",
      },
      {
        question: "¿Por qué la misma imagen se ve de diferente tamaño en diferentes pantallas?",
        answer:
          "Las pantallas tienen diferentes densidades de píxeles (PPI). Una imagen de 1920px de ancho llena completamente un monitor 1080p de 24 pulgadas, pero solo la mitad de un monitor 4K de 27 pulgadas. El tamaño físico depende del PPI de la pantalla, no de los metadatos DPI de la imagen.",
      },
    ],
    body: {
      heading1: "Comprender el tamaño de imagen",
      p1: "El tamaño de imagen abarca tanto las dimensiones en píxeles (tamaño digital) como las dimensiones físicas (tamaño de impresión). La relación entre ambos depende del DPI — cuántos píxeles se empaquetan en cada pulgada de salida.",
      heading2: "Fórmula de tamaño físico",
      formula: "Tamaño en pulgadas = Píxeles / DPI",
      p2: "Para convertir a centímetros, multiplica las pulgadas por 2,54. Para convertir a milímetros, multiplica los centímetros por 10.",
      heading3: "Estimación del tamaño de archivo",
      li1: "Sin comprimir: Ancho x Alto x (Profundidad de bits / 8) bytes. Una imagen 1920x1080 de 24 bits ocupa unos 5,9 MB sin comprimir.",
      li2: "JPEG: Típicamente de 1/10 a 1/20 del tamaño sin comprimir, dependiendo de la calidad y complejidad de la imagen.",
      li3: "PNG: Típicamente de 1/3 a 1/2 del tamaño sin comprimir para fotos; mucho más pequeño para gráficos con colores sólidos.",
      heading4: "Dimensiones de imagen comunes",
      li4: "Banner web: 1920x600 píxeles a 72 DPI.",
      li5: "Publicación en redes sociales: 1080x1080 píxeles (Instagram) o 1200x630 píxeles (Facebook).",
      li6: "Foto impresa (4x6): 1200x1800 píxeles a 300 DPI.",
      li7: "Póster impreso (24x36): 7200x10800 píxeles a 300 DPI.",
    },
  },
  fr: {
    faq: [
      {
        question: "Comment calculer la taille physique d'une image ?",
        answer:
          "Divisez les dimensions en pixels par le DPI. Par exemple, une image de 1920x1080 à 300 DPI mesure 6,4 x 3,6 pouces. À 96 DPI (écran), la même image mesure 20 x 11,25 pouces.",
      },
      {
        question: "Quelle est la précision des estimations de taille de fichier ?",
        answer:
          "La taille non compressée est exacte, basée sur le nombre de pixels et la profondeur de bits. Les estimations JPEG et PNG sont des approximations — la taille réelle dépend de la complexité de l'image, des paramètres de compression et du contenu. Les images simples se compressent davantage que les photos détaillées.",
      },
      {
        question: "Que signifie la profondeur de bits pour la taille d'image ?",
        answer:
          "La profondeur de bits détermine combien de bits stockent chaque pixel. 8 bits stocke 256 nuances (niveaux de gris), 24 bits stocke 16,7 millions de couleurs (RGB), et 32 bits ajoute la transparence (RGBA). Une profondeur de bits plus élevée signifie des fichiers plus volumineux.",
      },
      {
        question: "Quelle résolution me faut-il pour une taille d'impression spécifique ?",
        answer:
          "Multipliez la taille d'impression souhaitée en pouces par le DPI cible. Pour une impression de 10x8 pouces à 300 DPI, il faut 3000x2400 pixels. Pour l'affichage web à 96 DPI, une zone de 10x8 ne nécessite que 960x768 pixels.",
      },
      {
        question: "Pourquoi la même image apparaît-elle de tailles différentes sur différents écrans ?",
        answer:
          "Les écrans ont des densités de pixels (PPI) différentes. Une image de 1920px de large remplit entièrement un moniteur 1080p de 24 pouces, mais seulement la moitié d'un moniteur 4K de 27 pouces. La taille physique dépend du PPI de l'écran, pas des métadonnées DPI de l'image.",
      },
    ],
    body: {
      heading1: "Comprendre la taille d'image",
      p1: "La taille d'image englobe les dimensions en pixels (taille numérique) et les dimensions physiques (taille d'impression). La relation entre les deux dépend du DPI — combien de pixels sont compressés dans chaque pouce de sortie.",
      heading2: "Formule de taille physique",
      formula: "Taille en pouces = Pixels / DPI",
      p2: "Pour convertir en centimètres, multipliez les pouces par 2,54. Pour convertir en millimètres, multipliez les centimètres par 10.",
      heading3: "Estimation de la taille du fichier",
      li1: "Non compressé : Largeur x Hauteur x (Profondeur de bits / 8) octets. Une image 1920x1080 en 24 bits fait environ 5,9 Mo non compressée.",
      li2: "JPEG : Généralement 1/10 à 1/20 de la taille non compressée, selon les paramètres de qualité et la complexité de l'image.",
      li3: "PNG : Généralement 1/3 à 1/2 de la taille non compressée pour les photos ; beaucoup plus petit pour les graphiques avec des aplats de couleur.",
      heading4: "Dimensions d'image courantes",
      li4: "Bannière web : 1920x600 pixels à 72 DPI.",
      li5: "Publication réseaux sociaux : 1080x1080 pixels (Instagram) ou 1200x630 pixels (Facebook).",
      li6: "Photo imprimée (10x15 cm) : 1200x1800 pixels à 300 DPI.",
      li7: "Affiche imprimée (60x90 cm) : 7200x10800 pixels à 300 DPI.",
    },
  },
  de: {
    faq: [
      {
        question: "Wie berechne ich die physische Größe eines Bildes?",
        answer:
          "Teilen Sie die Pixelmaße durch den DPI. Zum Beispiel ist ein 1920x1080-Bild bei 300 DPI 6,4 x 3,6 Zoll groß. Bei 96 DPI (Bildschirm) ist dasselbe Bild 20 x 11,25 Zoll groß.",
      },
      {
        question: "Wie genau sind die Dateigrößenschätzungen?",
        answer:
          "Die unkomprimierte Größe ist exakt basierend auf Pixelanzahl und Farbtiefe. JPEG- und PNG-Schätzungen sind Näherungen — die tatsächliche Dateigröße hängt von der Bildkomplexität, den Kompressionseinstellungen und dem Inhalt ab. Einfache Bilder komprimieren stärker als detaillierte Fotos.",
      },
      {
        question: "Was bedeutet Farbtiefe für die Bildgröße?",
        answer:
          "Die Farbtiefe bestimmt, wie viele Bits pro Pixel gespeichert werden. 8-Bit speichert 256 Abstufungen (Graustufen), 24-Bit speichert 16,7 Millionen Farben (RGB), und 32-Bit fügt Transparenz hinzu (RGBA). Höhere Farbtiefe bedeutet größere Dateien.",
      },
      {
        question: "Welche Auflösung brauche ich für eine bestimmte Druckgröße?",
        answer:
          "Multiplizieren Sie die gewünschte Druckgröße in Zoll mit dem Ziel-DPI. Für einen 10x8-Zoll-Druck bei 300 DPI benötigen Sie 3000x2400 Pixel. Für die Webdarstellung bei 96 DPI erfordert ein 10x8-Bereich nur 960x768 Pixel.",
      },
      {
        question: "Warum sieht dasselbe Bild auf verschiedenen Bildschirmen unterschiedlich groß aus?",
        answer:
          "Bildschirme haben unterschiedliche Pixeldichten (PPI). Ein 1920px breites Bild füllt einen 24-Zoll-1080p-Monitor vollständig, aber nur die Hälfte eines 27-Zoll-4K-Monitors. Die physische Größe hängt vom PPI des Bildschirms ab, nicht von den DPI-Metadaten des Bildes.",
      },
    ],
    body: {
      heading1: "Bildgröße verstehen",
      p1: "Bildgröße umfasst sowohl die Pixelmaße (digitale Größe) als auch die physischen Maße (Druckgröße). Die Beziehung zwischen beiden hängt vom DPI ab — wie viele Pixel pro Zoll Ausgabe gepackt werden.",
      heading2: "Formel für physische Größe",
      formula: "Größe in Zoll = Pixel / DPI",
      p2: "Um in Zentimeter umzurechnen, multiplizieren Sie Zoll mit 2,54. Um in Millimeter umzurechnen, multiplizieren Sie Zentimeter mit 10.",
      heading3: "Dateigrößenschätzung",
      li1: "Unkomprimiert: Breite x Höhe x (Farbtiefe / 8) Bytes. Ein 1920x1080 24-Bit-Bild ist unkomprimiert etwa 5,9 MB.",
      li2: "JPEG: Typischerweise 1/10 bis 1/20 der unkomprimierten Größe, abhängig von Qualitätseinstellungen und Bildkomplexität.",
      li3: "PNG: Typischerweise 1/3 bis 1/2 der unkomprimierten Größe für Fotos; deutlich kleiner für Grafiken mit Volltonfarben.",
      heading4: "Gängige Bildabmessungen",
      li4: "Web-Banner: 1920x600 Pixel bei 72 DPI.",
      li5: "Social-Media-Beitrag: 1080x1080 Pixel (Instagram) oder 1200x630 Pixel (Facebook).",
      li6: "Gedrucktes Foto (10x15): 1200x1800 Pixel bei 300 DPI.",
      li7: "Gedrucktes Poster (60x90): 7200x10800 Pixel bei 300 DPI.",
    },
  },
  pt: {
    faq: [
      {
        question: "Como calculo o tamanho físico de uma imagem?",
        answer:
          "Divida as dimensões em pixels pelo DPI. Por exemplo, uma imagem 1920x1080 a 300 DPI mede 6,4 x 3,6 polegadas. A 96 DPI (tela), a mesma imagem mede 20 x 11,25 polegadas.",
      },
      {
        question: "Quão precisas são as estimativas de tamanho de arquivo?",
        answer:
          "O tamanho descomprimido é exato com base na contagem de pixels e profundidade de bits. As estimativas de JPEG e PNG são aproximações — o tamanho real depende da complexidade da imagem, configurações de compressão e conteúdo. Imagens simples comprimem mais que fotos detalhadas.",
      },
      {
        question: "O que significa profundidade de bits para o tamanho da imagem?",
        answer:
          "A profundidade de bits determina quantos bits armazenam cada pixel. 8 bits armazena 256 tons (escala de cinza), 24 bits armazena 16,7 milhões de cores (RGB) e 32 bits adiciona transparência (RGBA). Maior profundidade de bits significa arquivos maiores.",
      },
      {
        question: "Qual resolução preciso para um tamanho de impressão específico?",
        answer:
          "Multiplique o tamanho de impressão desejado em polegadas pelo DPI alvo. Para uma impressão de 10x8 polegadas a 300 DPI, você precisa de 3000x2400 pixels. Para exibição web a 96 DPI, uma área de 10x8 requer apenas 960x768 pixels.",
      },
      {
        question: "Por que a mesma imagem parece ter tamanhos diferentes em telas diferentes?",
        answer:
          "Telas têm diferentes densidades de pixels (PPI). Uma imagem de 1920px de largura preenche completamente um monitor 1080p de 24 polegadas, mas apenas metade de um monitor 4K de 27 polegadas. O tamanho físico depende do PPI da tela, não dos metadados DPI da imagem.",
      },
    ],
    body: {
      heading1: "Entendendo o tamanho da imagem",
      p1: "O tamanho da imagem abrange tanto as dimensões em pixels (tamanho digital) quanto as dimensões físicas (tamanho de impressão). A relação entre elas depende do DPI — quantos pixels são empacotados em cada polegada de saída.",
      heading2: "Fórmula de tamanho físico",
      formula: "Tamanho em polegadas = Pixels / DPI",
      p2: "Para converter em centímetros, multiplique polegadas por 2,54. Para converter em milímetros, multiplique centímetros por 10.",
      heading3: "Estimativa de tamanho de arquivo",
      li1: "Descomprimido: Largura x Altura x (Profundidade de bits / 8) bytes. Uma imagem 1920x1080 de 24 bits tem cerca de 5,9 MB descomprimida.",
      li2: "JPEG: Tipicamente 1/10 a 1/20 do tamanho descomprimido, dependendo da qualidade e complexidade da imagem.",
      li3: "PNG: Tipicamente 1/3 a 1/2 do tamanho descomprimido para fotos; muito menor para gráficos com cores sólidas.",
      heading4: "Dimensões de imagem comuns",
      li4: "Banner web: 1920x600 pixels a 72 DPI.",
      li5: "Postagem em rede social: 1080x1080 pixels (Instagram) ou 1200x630 pixels (Facebook).",
      li6: "Foto impressa (10x15): 1200x1800 pixels a 300 DPI.",
      li7: "Pôster impresso (60x90): 7200x10800 pixels a 300 DPI.",
    },
  },
  hi: {
    faq: [
      {
        question: "मैं किसी इमेज का भौतिक आकार कैसे गणना करूँ?",
        answer:
          "पिक्सेल आयामों को DPI से विभाजित करें। उदाहरण के लिए, 300 DPI पर 1920x1080 इमेज 6.4 x 3.6 इंच है। 96 DPI (स्क्रीन) पर, वही इमेज 20 x 11.25 इंच है।",
      },
      {
        question: "फ़ाइल आकार के अनुमान कितने सटीक हैं?",
        answer:
          "असंपीड़ित आकार पिक्सेल गणना और बिट गहराई पर आधारित सटीक है। JPEG और PNG अनुमान अनुमानित हैं — वास्तविक फ़ाइल आकार इमेज जटिलता, संपीड़न सेटिंग्स और सामग्री पर निर्भर करता है। साधारण इमेज विस्तृत फ़ोटो से अधिक संपीड़ित होती हैं।",
      },
      {
        question: "इमेज आकार के लिए बिट गहराई का क्या मतलब है?",
        answer:
          "बिट गहराई निर्धारित करती है कि प्रत्येक पिक्सेल कितने बिट में संग्रहीत होता है। 8-बिट 256 शेड्स (ग्रेस्केल) संग्रहीत करता है, 24-बिट 16.7 मिलियन रंग (RGB) संग्रहीत करता है, और 32-बिट पारदर्शिता (RGBA) जोड़ता है। अधिक बिट गहराई का मतलब बड़ी फ़ाइलें है।",
      },
      {
        question: "एक विशिष्ट प्रिंट आकार के लिए मुझे किस रिज़ॉल्यूशन की आवश्यकता है?",
        answer:
          "वांछित प्रिंट आकार इंच में लक्ष्य DPI से गुणा करें। 300 DPI पर 10x8 इंच प्रिंट के लिए, आपको 3000x2400 पिक्सेल चाहिए। 96 DPI पर वेब डिस्प्ले के लिए, 10x8 क्षेत्र को केवल 960x768 पिक्सेल की आवश्यकता है।",
      },
      {
        question: "एक ही इमेज अलग-अलग स्क्रीन पर अलग-अलग आकार की क्यों दिखती है?",
        answer:
          "स्क्रीन की अलग-अलग पिक्सेल घनत्व (PPI) होती है। 1920px चौड़ी इमेज 24 इंच के 1080p मॉनिटर को पूरी तरह भरती है, लेकिन 27 इंच के 4K मॉनिटर की केवल आधी। भौतिक आकार स्क्रीन के PPI पर निर्भर करता है, इमेज के DPI मेटाडेटा पर नहीं।",
      },
    ],
    body: {
      heading1: "इमेज आकार को समझना",
      p1: "इमेज आकार में पिक्सेल आयाम (डिजिटल आकार) और भौतिक आयाम (प्रिंट आकार) दोनों शामिल हैं। इनके बीच का संबंध DPI पर निर्भर करता है — आउटपुट के प्रत्येक इंच में कितने पिक्सेल पैक किए जाते हैं।",
      heading2: "भौतिक आकार सूत्र",
      formula: "इंच में आकार = पिक्सेल / DPI",
      p2: "सेंटीमीटर में बदलने के लिए, इंच को 2.54 से गुणा करें। मिलीमीटर में बदलने के लिए, सेंटीमीटर को 10 से गुणा करें।",
      heading3: "फ़ाइल आकार अनुमान",
      li1: "असंपीड़ित: चौड़ाई x ऊँचाई x (बिट गहराई / 8) बाइट्स। 1920x1080 24-बिट इमेज असंपीड़ित लगभग 5.9 MB है।",
      li2: "JPEG: आमतौर पर असंपीड़ित आकार का 1/10 से 1/20, गुणवत्ता सेटिंग और इमेज जटिलता पर निर्भर करता है।",
      li3: "PNG: फ़ोटो के लिए आमतौर पर असंपीड़ित आकार का 1/3 से 1/2; ठोस रंगों वाले ग्राफ़िक्स के लिए बहुत छोटा।",
      heading4: "सामान्य इमेज आयाम",
      li4: "वेब बैनर: 72 DPI पर 1920x600 पिक्सेल।",
      li5: "सोशल मीडिया पोस्ट: 1080x1080 पिक्सेल (Instagram) या 1200x630 पिक्सेल (Facebook)।",
      li6: "प्रिंट फ़ोटो (4x6): 300 DPI पर 1200x1800 पिक्सेल।",
      li7: "प्रिंट पोस्टर (24x36): 300 DPI पर 7200x10800 पिक्सेल।",
    },
  },
  ja: {
    faq: [
      {
        question: "画像の物理的なサイズをどう計算しますか？",
        answer:
          "ピクセル寸法をDPIで割ります。例えば、300 DPIの1920x1080画像は6.4 x 3.6インチです。96 DPI（画面）では、同じ画像は20 x 11.25インチです。",
      },
      {
        question: "ファイルサイズの推定はどのくらい正確ですか？",
        answer:
          "非圧縮サイズはピクセル数とビット深度に基づいて正確です。JPEGとPNGの推定は近似値です。実際のファイルサイズは画像の複雑さ、圧縮設定、コンテンツに依存します。シンプルな画像は詳細な写真よりも圧縮されます。",
      },
      {
        question: "画像サイズにおけるビット深度とは何ですか？",
        answer:
          "ビット深度は各ピクセルを保存するビット数を決定します。8ビットは256階調（グレースケール）、24ビットは1670万色（RGB）、32ビットは透明度（RGBA）を追加します。ビット深度が高いほどファイルサイズが大きくなります。",
      },
      {
        question: "特定の印刷サイズに必要な解像度はどのくらいですか？",
        answer:
          "希望する印刷サイズ（インチ）にターゲットDPIを掛けます。300 DPIで10x8インチの印刷には3000x2400ピクセルが必要です。96 DPIのWeb表示では、10x8のエリアには960x768ピクセルのみ必要です。",
      },
      {
        question: "なぜ同じ画像が異なる画面で異なるサイズに見えるのですか？",
        answer:
          "画面にはそれぞれ異なるピクセル密度（PPI）があります。幅1920pxの画像は24インチ1080pモニターを完全に満たしますが、27インチ4Kモニターでは半分しか占めません。物理的なサイズは画面のPPIに依存し、画像のDPIメタデータには依存しません。",
      },
    ],
    body: {
      heading1: "画像サイズを理解する",
      p1: "画像サイズにはピクセル寸法（デジタルサイズ）と物理的な寸法（印刷サイズ）の両方が含まれます。これらの関係はDPIに依存します。つまり、出力の各インチにどれだけのピクセルが詰め込まれるかです。",
      heading2: "物理サイズの計算式",
      formula: "インチでのサイズ = ピクセル / DPI",
      p2: "センチメートルに変換するには、インチに2.54を掛けます。ミリメートルに変換するには、センチメートルに10を掛けます。",
      heading3: "ファイルサイズの推定",
      li1: "非圧縮：幅 x 高さ x (ビット深度 / 8) バイト。1920x1080の24ビット画像は非圧縮で約5.9 MBです。",
      li2: "JPEG：通常、非圧縮サイズの1/10から1/20。品質設定と画像の複雑さに依存します。",
      li3: "PNG：写真の場合、通常非圧縮サイズの1/3から1/2。単色グラフィックスの場合はさらに小さくなります。",
      heading4: "一般的な画像サイズ",
      li4: "Webバナー：72 DPIで1920x600ピクセル。",
      li5: "ソーシャルメディア投稿：1080x1080ピクセル（Instagram）または1200x630ピクセル（Facebook）。",
      li6: "印刷写真（L版）：300 DPIで1200x1800ピクセル。",
      li7: "印刷ポスター（60x90cm）：300 DPIで7200x10800ピクセル。",
    },
  },
  ko: {
    faq: [
      {
        question: "이미지의 물리적 크기는 어떻게 계산하나요?",
        answer:
          "픽셀 크기를 DPI로 나눕니다. 예를 들어, 300 DPI의 1920x1080 이미지는 6.4 x 3.6인치입니다. 96 DPI(화면)에서는 같은 이미지가 20 x 11.25인치입니다.",
      },
      {
        question: "파일 크기 추정은 얼마나 정확한가요?",
        answer:
          "비압축 크기는 픽셀 수와 비트 깊이에 기반하여 정확합니다. JPEG과 PNG 추정은 근사값입니다. 실제 파일 크기는 이미지 복잡도, 압축 설정, 콘텐츠에 따라 달라집니다. 단순한 이미지는 상세한 사진보다 더 많이 압축됩니다.",
      },
      {
        question: "이미지 크기에서 비트 깊이란 무엇인가요?",
        answer:
          "비트 깊이는 각 픽셀을 저장하는 비트 수를 결정합니다. 8비트는 256단계(그레이스케일), 24비트는 1670만 색상(RGB), 32비트는 투명도(RGBA)를 추가합니다. 비트 깊이가 높을수록 파일 크기가 커집니다.",
      },
      {
        question: "특정 인쇄 크기에 어떤 해상도가 필요한가요?",
        answer:
          "원하는 인쇄 크기(인치)에 대상 DPI를 곱합니다. 300 DPI에서 10x8인치 인쇄에는 3000x2400 픽셀이 필요합니다. 96 DPI의 웹 표시에는 10x8 영역에 960x768 픽셀만 필요합니다.",
      },
      {
        question: "같은 이미지가 다른 화면에서 다른 크기로 보이는 이유는 무엇인가요?",
        answer:
          "화면마다 픽셀 밀도(PPI)가 다릅니다. 1920px 너비 이미지는 24인치 1080p 모니터를 완전히 채우지만, 27인치 4K 모니터에서는 절반만 차지합니다. 물리적 크기는 화면의 PPI에 따라 달라지며, 이미지의 DPI 메타데이터와는 무관합니다.",
      },
    ],
    body: {
      heading1: "이미지 크기 이해하기",
      p1: "이미지 크기에는 픽셀 크기(디지털 크기)와 물리적 크기(인쇄 크기)가 모두 포함됩니다. 이들의 관계는 DPI에 따라 달라집니다. 즉, 출력의 각 인치에 얼마나 많은 픽셀이 채워지는지에 따라 달라집니다.",
      heading2: "물리적 크기 공식",
      formula: "인치 크기 = 픽셀 / DPI",
      p2: "센티미터로 변환하려면 인치에 2.54를 곱합니다. 밀리미터로 변환하려면 센티미터에 10을 곱합니다.",
      heading3: "파일 크기 추정",
      li1: "비압축: 너비 x 높이 x (비트 깊이 / 8) 바이트. 1920x1080 24비트 이미지는 비압축 시 약 5.9 MB입니다.",
      li2: "JPEG: 일반적으로 비압축 크기의 1/10에서 1/20. 품질 설정과 이미지 복잡도에 따라 다릅니다.",
      li3: "PNG: 사진의 경우 일반적으로 비압축 크기의 1/3에서 1/2. 단색 그래픽은 훨씬 작습니다.",
      heading4: "일반적인 이미지 크기",
      li4: "웹 배너: 72 DPI에서 1920x600 픽셀.",
      li5: "소셜 미디어 게시물: 1080x1080 픽셀(Instagram) 또는 1200x630 픽셀(Facebook).",
      li6: "인쇄 사진(4x6): 300 DPI에서 1200x1800 픽셀.",
      li7: "인쇄 포스터(24x36): 300 DPI에서 7200x10800 픽셀.",
    },
  },
  it: {
    faq: [
      {
        question: "Come calcolo la dimensione fisica di un'immagine?",
        answer:
          "Dividi le dimensioni in pixel per il DPI. Per esempio, un'immagine 1920x1080 a 300 DPI è 6,4 x 3,6 pollici. A 96 DPI (schermo), la stessa immagine è 20 x 11,25 pollici.",
      },
      {
        question: "Quanto sono accurate le stime della dimensione del file?",
        answer:
          "La dimensione non compressa è esatta basata sul conteggio dei pixel e la profondità di bit. Le stime JPEG e PNG sono approssimazioni — la dimensione reale dipende dalla complessità dell'immagine, dalle impostazioni di compressione e dal contenuto. Le immagini semplici si comprimono più delle foto dettagliate.",
      },
      {
        question: "Cosa significa profondità di bit per la dimensione dell'immagine?",
        answer:
          "La profondità di bit determina quanti bit memorizzano ogni pixel. 8 bit memorizza 256 sfumature (scala di grigi), 24 bit memorizza 16,7 milioni di colori (RGB) e 32 bit aggiunge trasparenza (RGBA). Maggiore profondità di bit significa file più grandi.",
      },
      {
        question: "Quale risoluzione mi serve per una specifica dimensione di stampa?",
        answer:
          "Moltiplica la dimensione di stampa desiderata in pollici per il DPI target. Per una stampa 10x8 pollici a 300 DPI, servono 3000x2400 pixel. Per la visualizzazione web a 96 DPI, un'area 10x8 richiede solo 960x768 pixel.",
      },
      {
        question: "Perché la stessa immagine appare di dimensioni diverse su schermi diversi?",
        answer:
          "Gli schermi hanno densità di pixel (PPI) diverse. Un'immagine larga 1920px riempie interamente un monitor 1080p da 24 pollici, ma solo metà di un monitor 4K da 27 pollici. La dimensione fisica dipende dal PPI dello schermo, non dai metadati DPI dell'immagine.",
      },
    ],
    body: {
      heading1: "Capire la dimensione dell'immagine",
      p1: "La dimensione dell'immagine comprende sia le dimensioni in pixel (dimensione digitale) che le dimensioni fisiche (dimensione di stampa). La relazione tra queste dipende dal DPI — quanti pixel sono compressi in ogni pollice di output.",
      heading2: "Formula della dimensione fisica",
      formula: "Dimensione in pollici = Pixel / DPI",
      p2: "Per convertire in centimetri, moltiplica i pollici per 2,54. Per convertire in millimetri, moltiplica i centimetri per 10.",
      heading3: "Stima della dimensione del file",
      li1: "Non compresso: Larghezza x Altezza x (Profondità di bit / 8) byte. Un'immagine 1920x1080 a 24 bit è circa 5,9 MB non compressa.",
      li2: "JPEG: Tipicamente da 1/10 a 1/20 della dimensione non compressa, a seconda della qualità e complessità dell'immagine.",
      li3: "PNG: Tipicamente da 1/3 a 1/2 della dimensione non compressa per le foto; molto più piccolo per grafiche con colori solidi.",
      heading4: "Dimensioni immagine comuni",
      li4: "Banner web: 1920x600 pixel a 72 DPI.",
      li5: "Post social media: 1080x1080 pixel (Instagram) o 1200x630 pixel (Facebook).",
      li6: "Foto stampata (10x15): 1200x1800 pixel a 300 DPI.",
      li7: "Poster stampato (60x90): 7200x10800 pixel a 300 DPI.",
    },
  },
  nl: {
    faq: [
      {
        question: "Hoe bereken ik de fysieke grootte van een afbeelding?",
        answer:
          "Deel de pixeldimensies door de DPI. Bijvoorbeeld, een 1920x1080 afbeelding bij 300 DPI is 6,4 x 3,6 inch. Bij 96 DPI (scherm) is dezelfde afbeelding 20 x 11,25 inch.",
      },
      {
        question: "Hoe nauwkeurig zijn de schattingen van de bestandsgrootte?",
        answer:
          "De ongecomprimeerde grootte is exact op basis van pixelaantal en bitdiepte. JPEG- en PNG-schattingen zijn benaderingen — de werkelijke bestandsgrootte hangt af van de complexiteit van het beeld, compressie-instellingen en inhoud. Eenvoudige beelden comprimeren meer dan gedetailleerde foto's.",
      },
      {
        question: "Wat betekent bitdiepte voor de afbeeldingsgrootte?",
        answer:
          "Bitdiepte bepaalt hoeveel bits elke pixel opslaan. 8-bit slaat 256 tinten op (grijswaarden), 24-bit slaat 16,7 miljoen kleuren op (RGB), en 32-bit voegt transparantie toe (RGBA). Hogere bitdiepte betekent grotere bestanden.",
      },
      {
        question: "Welke resolutie heb ik nodig voor een specifiek afdrukformaat?",
        answer:
          "Vermenigvuldig het gewenste afdrukformaat in inches met de doel-DPI. Voor een 10x8 inch afdruk bij 300 DPI heeft u 3000x2400 pixels nodig. Voor webweergave bij 96 DPI vereist een 10x8 gebied slechts 960x768 pixels.",
      },
      {
        question: "Waarom ziet dezelfde afbeelding er op verschillende schermen anders uit qua grootte?",
        answer:
          "Schermen hebben verschillende pixeldichtheden (PPI). Een 1920px breed beeld vult een 24-inch 1080p-monitor geheel, maar slechts de helft van een 27-inch 4K-monitor. De fysieke grootte hangt af van de PPI van het scherm, niet van de DPI-metadata van het beeld.",
      },
    ],
    body: {
      heading1: "Afbeeldingsgrootte begrijpen",
      p1: "Afbeeldingsgrootte omvat zowel de pixeldimensies (digitale grootte) als de fysieke afmetingen (afdrukgrootte). De relatie hiertussen hangt af van DPI — hoeveel pixels er in elke inch output worden gepakt.",
      heading2: "Formule voor fysieke grootte",
      formula: "Grootte in inches = Pixels / DPI",
      p2: "Om naar centimeters te converteren, vermenigvuldig inches met 2,54. Om naar millimeters te converteren, vermenigvuldig centimeters met 10.",
      heading3: "Schatting bestandsgrootte",
      li1: "Ongecomprimeerd: Breedte x Hoogte x (Bitdiepte / 8) bytes. Een 1920x1080 24-bit beeld is ongecomprimeerd ongeveer 5,9 MB.",
      li2: "JPEG: Doorgaans 1/10 tot 1/20 van de ongecomprimeerde grootte, afhankelijk van kwaliteitsinstelling en beeldcomplexiteit.",
      li3: "PNG: Doorgaans 1/3 tot 1/2 van de ongecomprimeerde grootte voor foto's; veel kleiner voor afbeeldingen met vlakke kleuren.",
      heading4: "Gangbare afbeeldingsformaten",
      li4: "Webbanner: 1920x600 pixels bij 72 DPI.",
      li5: "Social media-bericht: 1080x1080 pixels (Instagram) of 1200x630 pixels (Facebook).",
      li6: "Afgedrukte foto (10x15): 1200x1800 pixels bij 300 DPI.",
      li7: "Afgedrukte poster (60x90): 7200x10800 pixels bij 300 DPI.",
    },
  },
  ar: {
    faq: [
      {
        question: "كيف أحسب الحجم الفعلي لصورة؟",
        answer:
          "اقسم أبعاد البكسل على DPI. مثلاً، صورة 1920x1080 عند 300 DPI تكون 6.4 x 3.6 بوصة. عند 96 DPI (الشاشة)، نفس الصورة تكون 20 x 11.25 بوصة.",
      },
      {
        question: "ما مدى دقة تقديرات حجم الملف؟",
        answer:
          "الحجم غير المضغوط دقيق بناءً على عدد البكسلات وعمق البت. تقديرات JPEG و PNG هي تقريبية — الحجم الفعلي يعتمد على تعقيد الصورة وإعدادات الضغط والمحتوى. الصور البسيطة تُضغط أكثر من الصور المفصلة.",
      },
      {
        question: "ماذا يعني عمق البت لحجم الصورة؟",
        answer:
          "عمق البت يحدد عدد البتات التي تخزن كل بكسل. 8 بت يخزن 256 درجة (تدرج رمادي)، 24 بت يخزن 16.7 مليون لون (RGB)، و 32 بت يضيف الشفافية (RGBA). عمق بت أعلى يعني ملفات أكبر.",
      },
      {
        question: "ما الدقة التي أحتاجها لحجم طباعة محدد؟",
        answer:
          "اضرب حجم الطباعة المطلوب بالبوصات في DPI المستهدف. لطباعة 10x8 بوصات عند 300 DPI، تحتاج 3000x2400 بكسل. لعرض الويب عند 96 DPI، مساحة 10x8 تحتاج فقط 960x768 بكسل.",
      },
      {
        question: "لماذا تبدو نفس الصورة بأحجام مختلفة على شاشات مختلفة؟",
        answer:
          "الشاشات لها كثافات بكسل مختلفة (PPI). صورة بعرض 1920 بكسل تملأ شاشة 1080p بحجم 24 بوصة بالكامل، لكنها تملأ نصف شاشة 4K بحجم 27 بوصة فقط. الحجم الفعلي يعتمد على PPI الشاشة، وليس بيانات DPI الوصفية للصورة.",
      },
    ],
    body: {
      heading1: "فهم حجم الصورة",
      p1: "حجم الصورة يشمل كلاً من أبعاد البكسل (الحجم الرقمي) والأبعاد الفعلية (حجم الطباعة). العلاقة بينهما تعتمد على DPI — كم عدد البكسلات المعبأة في كل بوصة من المخرجات.",
      heading2: "صيغة الحجم الفعلي",
      formula: "الحجم بالبوصات = البكسلات / DPI",
      p2: "للتحويل إلى سنتيمترات، اضرب البوصات في 2.54. للتحويل إلى ملليمترات، اضرب السنتيمترات في 10.",
      heading3: "تقدير حجم الملف",
      li1: "غير مضغوط: العرض x الارتفاع x (عمق البت / 8) بايت. صورة 1920x1080 بعمق 24 بت تكون حوالي 5.9 ميغابايت غير مضغوطة.",
      li2: "JPEG: عادةً من 1/10 إلى 1/20 من الحجم غير المضغوط، حسب إعدادات الجودة وتعقيد الصورة.",
      li3: "PNG: عادةً من 1/3 إلى 1/2 من الحجم غير المضغوط للصور؛ أصغر بكثير للرسومات ذات الألوان المسطحة.",
      heading4: "أبعاد الصور الشائعة",
      li4: "بانر الويب: 1920x600 بكسل عند 72 DPI.",
      li5: "منشور وسائل التواصل الاجتماعي: 1080x1080 بكسل (Instagram) أو 1200x630 بكسل (Facebook).",
      li6: "صورة مطبوعة (10x15): 1200x1800 بكسل عند 300 DPI.",
      li7: "ملصق مطبوع (60x90): 7200x10800 بكسل عند 300 DPI.",
    },
  },
  tr: {
    faq: [
      {
        question: "Bir görüntünün fiziksel boyutunu nasıl hesaplarım?",
        answer:
          "Piksel boyutlarını DPI'a bölün. Örneğin, 300 DPI'da 1920x1080 görüntü 6,4 x 3,6 inçtir. 96 DPI'da (ekran), aynı görüntü 20 x 11,25 inçtir.",
      },
      {
        question: "Dosya boyutu tahminleri ne kadar doğru?",
        answer:
          "Sıkıştırılmamış boyut, piksel sayısı ve bit derinliğine dayalı olarak kesindir. JPEG ve PNG tahminleri yaklaşık değerlerdir — gerçek dosya boyutu görüntü karmaşıklığına, sıkıştırma ayarlarına ve içeriğe bağlıdır. Basit görüntüler detaylı fotoğraflardan daha fazla sıkıştırılır.",
      },
      {
        question: "Görüntü boyutu için bit derinliği ne anlama gelir?",
        answer:
          "Bit derinliği, her pikseli kaç bitin depoladığını belirler. 8 bit 256 ton (gri tonlama), 24 bit 16,7 milyon renk (RGB) ve 32 bit şeffaflık (RGBA) ekler. Daha yüksek bit derinliği daha büyük dosya boyutları anlamına gelir.",
      },
      {
        question: "Belirli bir baskı boyutu için hangi çözünürlüğe ihtiyacım var?",
        answer:
          "İstenen baskı boyutunu inç olarak hedef DPI ile çarpın. 300 DPI'da 10x8 inç baskı için 3000x2400 piksel gerekir. 96 DPI'da web görüntüleme için 10x8 alan sadece 960x768 piksel gerektirir.",
      },
      {
        question: "Aynı görüntü neden farklı ekranlarda farklı boyutlarda görünür?",
        answer:
          "Ekranların farklı piksel yoğunlukları (PPI) vardır. 1920px genişliğindeki bir görüntü 24 inç 1080p monitörü tamamen doldurur, ancak 27 inç 4K monitörün yalnızca yarısını kaplar. Fiziksel boyut ekranın PPI'ına bağlıdır, görüntünün DPI meta verilerine değil.",
      },
    ],
    body: {
      heading1: "Görüntü boyutunu anlamak",
      p1: "Görüntü boyutu hem piksel boyutlarını (dijital boyut) hem de fiziksel boyutları (baskı boyutu) kapsar. Bunlar arasındaki ilişki DPI'a bağlıdır — çıktının her inçine kaç piksel sığdırıldığına bağlıdır.",
      heading2: "Fiziksel boyut formülü",
      formula: "İnç cinsinden boyut = Piksel / DPI",
      p2: "Santimetreye dönüştürmek için inç'i 2,54 ile çarpın. Milimetreye dönüştürmek için santimetreyi 10 ile çarpın.",
      heading3: "Dosya boyutu tahmini",
      li1: "Sıkıştırılmamış: Genişlik x Yükseklik x (Bit Derinliği / 8) bayt. 1920x1080 24 bit görüntü sıkıştırılmamış olarak yaklaşık 5,9 MB'dir.",
      li2: "JPEG: Genellikle sıkıştırılmamış boyutun 1/10 ile 1/20'si, kalite ayarı ve görüntü karmaşıklığına bağlıdır.",
      li3: "PNG: Fotoğraflar için genellikle sıkıştırılmamış boyutun 1/3 ile 1/2'si; düz renkli grafikler için çok daha küçük.",
      heading4: "Yaygın görüntü boyutları",
      li4: "Web banner: 72 DPI'da 1920x600 piksel.",
      li5: "Sosyal medya paylaşımı: 1080x1080 piksel (Instagram) veya 1200x630 piksel (Facebook).",
      li6: "Baskı fotoğraf (10x15): 300 DPI'da 1200x1800 piksel.",
      li7: "Baskı poster (60x90): 300 DPI'da 7200x10800 piksel.",
    },
  },
  pl: {
    faq: [
      {
        question: "Jak obliczyć fizyczny rozmiar obrazu?",
        answer:
          "Podziel wymiary w pikselach przez DPI. Na przykład, obraz 1920x1080 przy 300 DPI ma 6,4 x 3,6 cala. Przy 96 DPI (ekran), ten sam obraz ma 20 x 11,25 cala.",
      },
      {
        question: "Jak dokładne są szacunki rozmiaru pliku?",
        answer:
          "Rozmiar nieskompresowany jest dokładny na podstawie liczby pikseli i głębi bitowej. Szacunki JPEG i PNG są przybliżeniami — rzeczywisty rozmiar pliku zależy od złożoności obrazu, ustawień kompresji i zawartości. Proste obrazy kompresują się bardziej niż szczegółowe zdjęcia.",
      },
      {
        question: "Co oznacza głębia bitowa dla rozmiaru obrazu?",
        answer:
          "Głębia bitowa określa, ile bitów przechowuje każdy piksel. 8-bitowa przechowuje 256 odcieni (skala szarości), 24-bitowa przechowuje 16,7 miliona kolorów (RGB), a 32-bitowa dodaje przezroczystość (RGBA). Wyższa głębia bitowa oznacza większe pliki.",
      },
      {
        question: "Jakiej rozdzielczości potrzebuję do konkretnego rozmiaru wydruku?",
        answer:
          "Pomnóż pożądany rozmiar wydruku w calach przez docelowe DPI. Do wydruku 10x8 cali przy 300 DPI potrzebujesz 3000x2400 pikseli. Do wyświetlania w sieci przy 96 DPI, obszar 10x8 wymaga tylko 960x768 pikseli.",
      },
      {
        question: "Dlaczego ten sam obraz wygląda na różnych ekranach na inny rozmiar?",
        answer:
          "Ekrany mają różne gęstości pikseli (PPI). Obraz o szerokości 1920px wypełnia całkowicie 24-calowy monitor 1080p, ale tylko połowę 27-calowego monitora 4K. Rozmiar fizyczny zależy od PPI ekranu, a nie od metadanych DPI obrazu.",
      },
    ],
    body: {
      heading1: "Zrozumienie rozmiaru obrazu",
      p1: "Rozmiar obrazu obejmuje zarówno wymiary w pikselach (rozmiar cyfrowy), jak i wymiary fizyczne (rozmiar wydruku). Zależność między nimi zależy od DPI — ile pikseli jest upakowanych w każdym calu wyjścia.",
      heading2: "Wzór na rozmiar fizyczny",
      formula: "Rozmiar w calach = Piksele / DPI",
      p2: "Aby przeliczyć na centymetry, pomnóż cale przez 2,54. Aby przeliczyć na milimetry, pomnóż centymetry przez 10.",
      heading3: "Szacowanie rozmiaru pliku",
      li1: "Nieskompresowany: Szerokość x Wysokość x (Głębia bitowa / 8) bajtów. Obraz 1920x1080 24-bitowy to około 5,9 MB nieskompresowany.",
      li2: "JPEG: Zazwyczaj 1/10 do 1/20 rozmiaru nieskompresowanego, w zależności od jakości i złożoności obrazu.",
      li3: "PNG: Zazwyczaj 1/3 do 1/2 rozmiaru nieskompresowanego dla zdjęć; znacznie mniejszy dla grafik z jednolitymi kolorami.",
      heading4: "Popularne wymiary obrazów",
      li4: "Baner internetowy: 1920x600 pikseli przy 72 DPI.",
      li5: "Post w mediach społecznościowych: 1080x1080 pikseli (Instagram) lub 1200x630 pikseli (Facebook).",
      li6: "Zdjęcie drukowane (10x15): 1200x1800 pikseli przy 300 DPI.",
      li7: "Plakat drukowany (60x90): 7200x10800 pikseli przy 300 DPI.",
    },
  },
  id: {
    faq: [
      {
        question: "Bagaimana cara menghitung ukuran fisik gambar?",
        answer:
          "Bagi dimensi piksel dengan DPI. Misalnya, gambar 1920x1080 pada 300 DPI berukuran 6,4 x 3,6 inci. Pada 96 DPI (layar), gambar yang sama berukuran 20 x 11,25 inci.",
      },
      {
        question: "Seberapa akurat perkiraan ukuran file?",
        answer:
          "Ukuran tidak terkompresi tepat berdasarkan jumlah piksel dan kedalaman bit. Perkiraan JPEG dan PNG adalah perkiraan — ukuran file sebenarnya bergantung pada kompleksitas gambar, pengaturan kompresi, dan konten. Gambar sederhana terkompresi lebih banyak daripada foto detail.",
      },
      {
        question: "Apa arti kedalaman bit untuk ukuran gambar?",
        answer:
          "Kedalaman bit menentukan berapa banyak bit yang menyimpan setiap piksel. 8-bit menyimpan 256 nuansa (grayscale), 24-bit menyimpan 16,7 juta warna (RGB), dan 32-bit menambahkan transparansi (RGBA). Kedalaman bit lebih tinggi berarti ukuran file lebih besar.",
      },
      {
        question: "Resolusi berapa yang saya butuhkan untuk ukuran cetak tertentu?",
        answer:
          "Kalikan ukuran cetak yang diinginkan dalam inci dengan DPI target. Untuk cetakan 10x8 inci pada 300 DPI, Anda memerlukan 3000x2400 piksel. Untuk tampilan web pada 96 DPI, area 10x8 hanya memerlukan 960x768 piksel.",
      },
      {
        question: "Mengapa gambar yang sama terlihat berbeda ukurannya di layar yang berbeda?",
        answer:
          "Layar memiliki kepadatan piksel (PPI) yang berbeda. Gambar selebar 1920px mengisi penuh monitor 1080p 24 inci, tetapi hanya setengah dari monitor 4K 27 inci. Ukuran fisik bergantung pada PPI layar, bukan metadata DPI gambar.",
      },
    ],
    body: {
      heading1: "Memahami ukuran gambar",
      p1: "Ukuran gambar mencakup dimensi piksel (ukuran digital) dan dimensi fisik (ukuran cetak). Hubungan antara keduanya bergantung pada DPI — berapa banyak piksel yang dikemas ke setiap inci output.",
      heading2: "Rumus ukuran fisik",
      formula: "Ukuran dalam inci = Piksel / DPI",
      p2: "Untuk mengonversi ke sentimeter, kalikan inci dengan 2,54. Untuk mengonversi ke milimeter, kalikan sentimeter dengan 10.",
      heading3: "Estimasi ukuran file",
      li1: "Tidak terkompresi: Lebar x Tinggi x (Kedalaman Bit / 8) byte. Gambar 1920x1080 24-bit berukuran sekitar 5,9 MB tidak terkompresi.",
      li2: "JPEG: Biasanya 1/10 hingga 1/20 ukuran tidak terkompresi, tergantung pengaturan kualitas dan kompleksitas gambar.",
      li3: "PNG: Biasanya 1/3 hingga 1/2 ukuran tidak terkompresi untuk foto; jauh lebih kecil untuk grafis dengan warna solid.",
      heading4: "Dimensi gambar umum",
      li4: "Banner web: 1920x600 piksel pada 72 DPI.",
      li5: "Postingan media sosial: 1080x1080 piksel (Instagram) atau 1200x630 piksel (Facebook).",
      li6: "Foto cetak (10x15): 1200x1800 piksel pada 300 DPI.",
      li7: "Poster cetak (60x90): 7200x10800 piksel pada 300 DPI.",
    },
  },
  ru: {
    faq: [
      {
        question: "Как рассчитать физический размер изображения?",
        answer:
          "Разделите размеры в пикселях на DPI. Например, изображение 1920x1080 при 300 DPI составляет 6,4 x 3,6 дюйма. При 96 DPI (экран) то же изображение занимает 20 x 11,25 дюйма.",
      },
      {
        question: "Насколько точны оценки размера файла?",
        answer:
          "Несжатый размер точен на основе количества пикселей и глубины цвета. Оценки JPEG и PNG являются приблизительными — фактический размер файла зависит от сложности изображения, настроек сжатия и содержимого. Простые изображения сжимаются сильнее, чем детализированные фотографии.",
      },
      {
        question: "Что означает глубина цвета для размера изображения?",
        answer:
          "Глубина цвета определяет, сколько бит хранит каждый пиксель. 8 бит хранит 256 оттенков (градации серого), 24 бита — 16,7 миллиона цветов (RGB), а 32 бита добавляет прозрачность (RGBA). Большая глубина цвета означает больший размер файла.",
      },
      {
        question: "Какое разрешение мне нужно для определённого размера печати?",
        answer:
          "Умножьте желаемый размер печати в дюймах на целевой DPI. Для печати 10x8 дюймов при 300 DPI нужно 3000x2400 пикселей. Для веб-отображения при 96 DPI область 10x8 требует всего 960x768 пикселей.",
      },
      {
        question: "Почему одно и то же изображение выглядит разного размера на разных экранах?",
        answer:
          "Экраны имеют разную плотность пикселей (PPI). Изображение шириной 1920px полностью заполняет 24-дюймовый монитор 1080p, но лишь половину 27-дюймового 4K-монитора. Физический размер зависит от PPI экрана, а не от метаданных DPI изображения.",
      },
    ],
    body: {
      heading1: "Понимание размера изображения",
      p1: "Размер изображения включает как размеры в пикселях (цифровой размер), так и физические размеры (размер печати). Связь между ними зависит от DPI — сколько пикселей упаковано в каждый дюйм вывода.",
      heading2: "Формула физического размера",
      formula: "Размер в дюймах = Пиксели / DPI",
      p2: "Для перевода в сантиметры умножьте дюймы на 2,54. Для перевода в миллиметры умножьте сантиметры на 10.",
      heading3: "Оценка размера файла",
      li1: "Несжатый: Ширина x Высота x (Глубина цвета / 8) байт. Изображение 1920x1080 24-бит занимает около 5,9 МБ без сжатия.",
      li2: "JPEG: Обычно от 1/10 до 1/20 несжатого размера, в зависимости от настроек качества и сложности изображения.",
      li3: "PNG: Обычно от 1/3 до 1/2 несжатого размера для фотографий; значительно меньше для графики с однотонными цветами.",
      heading4: "Распространённые размеры изображений",
      li4: "Веб-баннер: 1920x600 пикселей при 72 DPI.",
      li5: "Пост в соцсетях: 1080x1080 пикселей (Instagram) или 1200x630 пикселей (Facebook).",
      li6: "Печатная фотография (10x15): 1200x1800 пикселей при 300 DPI.",
      li7: "Печатный плакат (60x90): 7200x10800 пикселей при 300 DPI.",
    },
  },
};
