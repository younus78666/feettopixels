import type { LocalizedDocMap } from "./doc-types";

export const content: LocalizedDocMap = {
  "en": {
    "faq": [
      {
        "question": "Should I save web images at 72 DPI?",
        "answer": "It doesn't matter. Browsers ignore DPI metadata entirely. A 1200x800 image displays identically whether saved at 72, 96, or 300 DPI. Only the pixel dimensions and file format affect web display."
      },
      {
        "question": "Why do some people recommend 72 DPI for web?",
        "answer": "This is a persistent myth from early Mac displays, which had 72 PPI screens. Setting images to 72 DPI made 'points' and 'pixels' match 1:1 in early design software. Modern browsers render by pixel count, not DPI."
      },
      {
        "question": "How do I optimize images for web performance?",
        "answer": "Use modern formats like WebP or AVIF. Resize to the actual display dimensions (no larger than needed). Compress with tools like Squoosh or ImageOptim. Use responsive images with srcset for different screen sizes."
      }
    ],
    "sections": [
      {
        "id": "dpi-irrelevant",
        "title": "Why DPI Is Irrelevant for Web",
        "paragraphs": [
          "Web browsers completely ignore the DPI (or PPI) metadata embedded in image files. When a browser renders an image, it uses only the pixel dimensions. A 1200 × 800 image saved at 72 DPI is rendered identically to the same image saved at 300 DPI. The files may differ slightly in metadata size, but the visual output is the same.",
          "This is a common source of confusion: designers accustomed to print workflows assume they should set web images to 72 or 96 DPI. In reality, you can save at any DPI - it will not affect rendering, file size, or quality."
        ]
      },
      {
        "id": "what-matters",
        "title": "What Actually Matters for Web Images",
        "list": [
          "Pixel dimensions: Serve images at the size they will display (or 2× for retina). A hero image displayed at 1200 CSS pixels wide should be 1200 px (standard) or 2400 px (retina).",
          "File format: Use WebP for broad compatibility with excellent compression. Use AVIF for even better compression where supported. Fall back to JPEG for photos and PNG for graphics with transparency.",
          "Compression: A well-compressed WebP image can be 25 - 35% smaller than an equivalent JPEG with no visible quality loss.",
          "Lazy loading: Add loading=\"lazy\" to images below the fold to defer loading until they enter the viewport."
        ]
      },
      {
        "id": "responsive-images",
        "title": "Responsive Images for HiDPI Screens",
        "paragraphs": [
          "On retina (2×) and high-density (3×) screens, images need more pixels to appear sharp. Use the HTML srcset attribute to serve different resolutions:",
          "The browser selects the appropriate image based on the viewport width and device pixel ratio, ensuring sharp images without wasting bandwidth on standard displays."
        ],
        "code": "<img\n  src=\"hero-800w.webp\"\n  srcset=\"hero-800w.webp 800w,\n          hero-1200w.webp 1200w,\n          hero-2400w.webp 2400w\"\n  sizes=\"(max-width: 600px) 100vw, 1200px\"\n  alt=\"Hero image\"\n  loading=\"lazy\"\n/>"
      },
      {
        "id": "optimization-tips",
        "title": "Web Image Optimization Checklist",
        "list": [
          "Resize images to their maximum display size (do not serve a 4000 px image for a 1200 px container).",
          "Use WebP or AVIF format with quality setting of 75 - 85%.",
          "Provide 1× and 2× versions via srcset.",
          "Add width and height attributes to prevent layout shift.",
          "Use lazy loading for images below the initial viewport.",
          "Consider using a CDN with automatic format negotiation."
        ],
        "paragraphs": [
          "Calculate the exact pixel dimensions you need for any layout with our Image Size Calculator."
        ]
      }
    ]
  },
  "es": {
    "faq": [
      {
        "question": "¿Debo guardar imágenes web a 72 DPI?",
        "answer": "No importa. Los navegadores ignoran por completo los metadatos de DPI. Una imagen de 1200x800 se muestra idénticamente ya sea que se guarde a 72, 96 o 300 DPI. Solo las dimensiones en píxeles y el formato del archivo afectan la visualización web."
      },
      {
        "question": "¿Por qué algunas personas recomiendan 72 PPP para la web?",
        "answer": "Este es un mito persistente de las primeras pantallas de Mac, que tenían pantallas de 72 PPI. Configurar las imágenes a 72 DPI hacía que los \"puntos\" y los \"píxeles\" coincidieran 1:1 en los primeros programas de diseño. Los navegadores modernos procesan por número de píxeles, no por DPI."
      },
      {
        "question": "¿Cómo optimizo las imágenes para el rendimiento web?",
        "answer": "Utilice formatos modernos como WebP o AVIF. Cambie el tamaño a las dimensiones de visualización reales (no más grandes de lo necesario). Comprime con herramientas como Squoosh o ImageOptim. Utilice imágenes responsivas con srcset para diferentes tamaños de pantalla."
      }
    ],
    "sections": [
      {
        "id": "dpi-irrelevant",
        "title": "Por qué el DPI es irrelevante para la Web",
        "paragraphs": [
          "Los navegadores web ignoran por completo los metadatos de DPI (o PPI) incrustados en los archivos de imagen. Cuando un navegador representa una imagen, utiliza sólo las dimensiones en píxeles. Una imagen de 1200 × 800 guardada a 72 DPI se representa de manera idéntica a la misma imagen guardada a 300 DPI. Los archivos pueden diferir ligeramente en el tamaño de los metadatos, pero el resultado visual es el mismo.",
          "Esta es una fuente común de confusión: los diseñadores acostumbrados a los flujos de trabajo de impresión suponen que deben configurar las imágenes web en 72 o 96 DPI. En realidad, puede guardar en cualquier DPI; no afectará la representación, el tamaño del archivo ni la calidad."
        ]
      },
      {
        "id": "what-matters",
        "title": "Lo que realmente importa para las imágenes web",
        "list": [
          "Dimensiones en píxeles: proporcione imágenes en el tamaño que se mostrarán (o 2× para retina). Una imagen principal mostrada con 1200 píxeles CSS de ancho debe tener 1200 px (estándar) o 2400 px (retina).",
          "Formato de archivo: utilice WebP para obtener una amplia compatibilidad con una compresión excelente. Utilice AVIF para una compresión aún mejor cuando sea compatible. Vuelva a JPEG para fotos y PNG para gráficos con transparencia.",
          "Compresión: una imagen WebP bien comprimida puede ser entre un 25 y un 35 % más pequeña que un JPEG equivalente sin pérdida de calidad visible.",
          "Carga diferida: agregue carga=\"lazy\" a las imágenes en la parte inferior de la página para diferir la carga hasta que entren en la ventana gráfica."
        ]
      },
      {
        "id": "responsive-images",
        "title": "Imágenes receptivas para HiDPI Pantallas",
        "paragraphs": [
          "En las pantallas de retina (2×) y de alta densidad (3×), las imágenes necesitan más píxeles para aparecer nítidas. Utilice el atributo HTML srcset para ofrecer diferentes resoluciones:",
          "El navegador selecciona la imagen adecuada según el ancho de la ventana gráfica y la proporción de píxeles del dispositivo, lo que garantiza imágenes nítidas sin desperdiciar ancho de banda en pantallas estándar."
        ],
        "code": "<img\n  src=\"hero-800w.webp\"\n  srcset=\"hero-800w.webp 800w,\n          hero-1200w.webp 1200w,\n          hero-2400w.webp 2400w\"\n  sizes=\"(max-width: 600px) 100vw, 1200px\"\n  alt=\"Hero image\"\n  loading=\"lazy\"\n/>"
      },
      {
        "id": "optimization-tips",
        "title": "Lista de verificación de optimización de imágenes web",
        "list": [
          "Cambie el tamaño de las imágenes a su tamaño máximo de visualización (no muestre un Imagen de 4000 px para un contenedor de 1200 px).",
          "Utilice el formato WebP o AVIF con una configuración de calidad del 75 - 85%.",
          "Proporcione versiones 1× y 2× a través de srcset.",
          "Agregue atributos de ancho y alto para evitar cambios de diseño.",
          "Utilice carga diferida para imágenes debajo de la inicial ventana gráfica.",
          "Considere utilizar una CDN con negociación automática de formato."
        ],
        "paragraphs": [
          "Calcule las dimensiones exactas en píxeles que necesita para cualquier diseño con nuestra Calculadora de tamaño de imagen."
        ]
      }
    ]
  },
  "fr": {
    "faq": [
      {
        "question": "Dois-je enregistrer les images Web à 72 DPI ?",
        "answer": "Cela n'a pas d'importance. Les navigateurs ignorent complètement les métadonnées DPI. Une image 1 200 x 800 s'affiche de la même manière, qu'elle soit enregistrée à 72, 96 ou 300 DPI. Seules les dimensions en pixels et le format de fichier affectent l'affichage Web."
      },
      {
        "question": "Pourquoi certaines personnes recommandent-elles 72 DPI pour le Web ?",
        "answer": "Il s'agit d'un mythe persistant issu des premiers écrans Mac, qui avaient des écrans de 72 PPI. En réglant les images à 72 DPI, les « points » et les « pixels » correspondaient à 1:1 dans les premiers logiciels de conception. Les navigateurs modernes s'affichent en fonction du nombre de pixels et non du DPI."
      },
      {
        "question": "Comment optimiser les images pour les performances Web ?",
        "answer": "Utilisez des formats modernes tels que WebP ou AVIF. Redimensionnez aux dimensions réelles de l'affichage (pas plus grandes que nécessaire). Compressez avec des outils comme Squoosh ou ImageOptim. Utilisez des images réactives avec srcset pour différentes tailles d'écran."
      }
    ],
    "sections": [
      {
        "id": "dpi-irrelevant",
        "title": "Pourquoi le DPI n'est pas pertinent pour le Web",
        "paragraphs": [
          "Les navigateurs Web ignorent complètement les métadonnées DPI (ou PPI) intégrées dans les fichiers image. Lorsqu'un navigateur restitue une image, il utilise uniquement les dimensions en pixels. Une image 1 200 × 800 enregistrée à 72 DPI est rendue de manière identique à la même image enregistrée à 300 DPI. Les fichiers peuvent différer légèrement en termes de taille de métadonnées, mais le résultat visuel est le même.",
          "Il s'agit d'une source de confusion courante : les concepteurs habitués aux flux de travail d'impression supposent qu'ils doivent définir les images Web sur 72 ou 96 DPI. En réalité, vous pouvez enregistrer à n'importe quel DPI - cela n'affectera pas le rendu, la taille du fichier ou la qualité."
        ]
      },
      {
        "id": "what-matters",
        "title": "Ce qui compte réellement pour les images Web",
        "list": [
          "Dimensions des pixels : diffusez les images à la taille qu'elles afficheront (ou 2× pour la rétine). Une image de héros affichée avec une largeur de 1 200 pixels CSS doit être de 1 200 px (standard) ou 2 400 px (rétine).",
          "Format de fichier : utilisez WebP pour une compatibilité étendue avec une excellente compression. Utilisez AVIF pour une compression encore meilleure lorsqu'elle est prise en charge. Utilisez JPEG pour les photos et PNG pour les graphiques avec transparence.",
          "Compression : une image WebP bien compressée peut être 25 à 35 % plus petite qu'une image JPEG équivalente sans perte de qualité visible.",
          "Chargement différé : ajoutezloading=\"lazy\" aux images situées sous le pli pour différer le chargement jusqu'à ce qu'elles entrent dans la fenêtre."
        ]
      },
      {
        "id": "responsive-images",
        "title": "Images réactives pour les écrans HiDPI",
        "paragraphs": [
          "Sur la rétine (2×) et haute densité (3×), les images ont besoin de plus de pixels pour paraître nettes. Utilisez l'attribut HTML srcset pour servir différentes résolutions :",
          "Le navigateur sélectionne l'image appropriée en fonction de la largeur de la fenêtre d'affichage et du rapport de pixels de l'appareil, garantissant ainsi des images nettes sans gaspiller de bande passante sur les écrans standard."
        ],
        "code": "<img\n  src=\"hero-800w.webp\"\n  srcset=\"hero-800w.webp 800w,\n          hero-1200w.webp 1200w,\n          hero-2400w.webp 2400w\"\n  sizes=\"(max-width: 600px) 100vw, 1200px\"\n  alt=\"Hero image\"\n  loading=\"lazy\"\n/>"
      },
      {
        "id": "optimization-tips",
        "title": "Liste de contrôle pour l'optimisation des images Web",
        "list": [
          "Redimensionnez les images à leur taille d'affichage maximale (ne diffusez pas de message). Image de 4 000 px pour un conteneur de 1 200 px).",
          "Utilisez le format WebP ou AVIF avec un paramètre de qualité de 75 à 85 %.",
          "Fournissez des versions 1× et 2× via srcset.",
          "Ajoutez des attributs de largeur et de hauteur pour empêcher le changement de mise en page.",
          "Utilisez le chargement différé pour les images inférieures à l'initiale. viewport.",
          "Envisagez d'utiliser un CDN avec négociation automatique de format."
        ],
        "paragraphs": [
          "Calculez les dimensions exactes en pixels dont vous avez besoin pour n'importe quelle mise en page avec notre calculateur de taille d'image."
        ]
      }
    ]
  },
  "de": {
    "faq": [
      {
        "question": "Soll ich Webbilder mit 72 DPI speichern?",
        "answer": "Das spielt keine Rolle. Browser ignorieren DPI-Metadaten vollständig. Ein 1200x800-Bild wird identisch angezeigt, unabhängig davon, ob es mit 72, 96 oder 300 DPI gespeichert ist. Nur die Pixelabmessungen und das Dateiformat wirken sich auf die Webanzeige aus."
      },
      {
        "question": "Warum empfehlen manche Leute 72 DPI für das Web?",
        "answer": "Dies ist ein hartnäckiger Mythos von frühen Mac-Displays, die 72 PPI-Bildschirme hatten. Durch die Einstellung von Bildern auf 72 DPI stimmten „Punkte“ und „Pixel“ in früher Designsoftware 1:1 überein. Moderne Browser rendern nach Pixelanzahl, nicht nach DPI."
      },
      {
        "question": "Wie optimiere ich Bilder für die Webleistung?",
        "answer": "Verwenden Sie moderne Formate wie WebP oder AVIF. Passen Sie die Größe an die tatsächlichen Displayabmessungen an (nicht größer als nötig). Komprimieren Sie mit Tools wie Squoosh oder ImageOptim. Verwenden Sie reaktionsfähige Bilder mit srcset für verschiedene Bildschirmgrößen."
      }
    ],
    "sections": [
      {
        "id": "dpi-irrelevant",
        "title": "Warum DPI für das Web irrelevant ist",
        "paragraphs": [
          "Webbrowser ignorieren die in Bilddateien eingebetteten DPI- (oder PPI-)Metadaten vollständig. Wenn ein Browser ein Bild rendert, verwendet er nur die Pixelabmessungen. Ein mit 72 DPI gespeichertes 1200 × 800-Bild wird genauso gerendert wie dasselbe mit 300 DPI gespeicherte Bild. Die Dateien unterscheiden sich möglicherweise geringfügig in der Metadatengröße, aber die visuelle Ausgabe ist dieselbe.",
          "Dies ist eine häufige Ursache für Verwirrung: Designer, die an Druckworkflows gewöhnt sind, gehen davon aus, dass sie Webbilder auf 72 oder 96 DPI einstellen sollten. In Wirklichkeit können Sie bei jedem DPI-Wert speichern - es hat keinen Einfluss auf das Rendering, die Dateigröße oder die Qualität."
        ]
      },
      {
        "id": "what-matters",
        "title": "Was bei Webbildern wirklich zählt",
        "list": [
          "Pixelabmessungen: Stellen Sie Bilder in der Größe bereit, in der sie angezeigt werden (oder 2× für Retina). Ein mit 1200 CSS-Pixeln angezeigtes Heldenbild sollte 1200 Pixel (Standard) oder 2400 Pixel (Retina) groß sein.",
          "Dateiformat: Verwenden Sie WebP für breite Kompatibilität mit hervorragender Komprimierung. Verwenden Sie AVIF für eine noch bessere Komprimierung, sofern dies unterstützt wird. Greifen Sie für Fotos auf JPEG und für Grafiken mit Transparenz auf PNG zurück.",
          "Komprimierung: Ein gut komprimiertes WebP-Bild kann 25 - 35 % kleiner als ein entsprechendes JPEG sein, ohne sichtbaren Qualitätsverlust.",
          "Verzögertes Laden: Fügen Sie „lazy“ zu Bildern unterhalb der Falte hinzu, um das Laden zu verzögern, bis sie in das Ansichtsfenster gelangen."
        ]
      },
      {
        "id": "responsive-images",
        "title": "Responsive Bilder für HiDPI-Bildschirme",
        "paragraphs": [
          "Auf der Netzhaut Bei Bildschirmen mit hoher Auflösung (2×) und Bildschirmen mit hoher Dichte (3×) benötigen Bilder mehr Pixel, um scharf zu erscheinen. Verwenden Sie das HTML-Attribut srcset, um verschiedene Auflösungen bereitzustellen:",
          "Der Browser wählt das geeignete Bild basierend auf der Breite des Ansichtsfensters und dem Pixelverhältnis des Geräts aus und sorgt so für scharfe Bilder, ohne Bandbreite auf Standardanzeigen zu verschwenden."
        ],
        "code": "<img\n  src=\"hero-800w.webp\"\n  srcset=\"hero-800w.webp 800w,\n          hero-1200w.webp 1200w,\n          hero-2400w.webp 2400w\"\n  sizes=\"(max-width: 600px) 100vw, 1200px\"\n  alt=\"Hero image\"\n  loading=\"lazy\"\n/>"
      },
      {
        "id": "optimization-tips",
        "title": "Checkliste für die Optimierung von Web-Bildern",
        "list": [
          "Ändern Sie die Größe von Bildern auf ihre maximale Anzeigegröße (stellen Sie kein Bild bereit). 4000-Pixel-Bild für einen 1200-Pixel-Container).",
          "Verwenden Sie das WebP- oder AVIF-Format mit einer Qualitätseinstellung von 75 - 85 %.",
          "Stellen Sie 1×- und 2×-Versionen über srcset bereit.",
          "Fügen Sie Breiten- und Höhenattribute hinzu, um Layoutverschiebungen zu verhindern.",
          "Verwenden Sie Lazy Loading für Bilder unterhalb des Originals viewport.",
          "Erwägen Sie die Verwendung eines CDN mit automatischer Formataushandlung."
        ],
        "paragraphs": [
          "Berechnen Sie mit unserem Bildgrößenrechner die genauen Pixelabmessungen, die Sie für jedes Layout benötigen."
        ]
      }
    ]
  },
  "pt": {
    "faq": [
      {
        "question": "Devo salvar imagens da web em 72 DPI?",
        "answer": "Não importa. Os navegadores ignoram totalmente os metadados DPI. Uma imagem de 1200x800 é exibida de forma idêntica, seja salva em 72, 96 ou 300 DPI. Apenas as dimensões em pixels e o formato do arquivo afetam a exibição na web."
      },
      {
        "question": "Por que algumas pessoas recomendam 72 DPI para a web?",
        "answer": "Este é um mito persistente dos primeiros monitores Mac, que tinham telas de 72 PPI. Definir imagens para 72 DPI fez com que 'pontos' e 'pixels' correspondessem a 1:1 nos primeiros softwares de design. Os navegadores modernos são renderizados por contagem de pixels, não por DPI."
      },
      {
        "question": "Como otimizar imagens para desempenho na Web?",
        "answer": "Use formatos modernos como WebP ou AVIF. Redimensione para as dimensões reais da tela (não maiores que o necessário). Compacte com ferramentas como Squoosh ou ImageOptim. Use imagens responsivas com srcset para diferentes tamanhos de tela."
      }
    ],
    "sections": [
      {
        "id": "dpi-irrelevant",
        "title": "Por que o DPI é irrelevante para a Web",
        "paragraphs": [
          "Os navegadores da Web ignoram completamente os metadados DPI (ou PPI) incorporados nos arquivos de imagem. Quando um navegador renderiza uma imagem, ele usa apenas as dimensões em pixels. Uma imagem de 1200 × 800 salva em 72 DPI é renderizada de forma idêntica à mesma imagem salva em 300 DPI. Os arquivos podem diferir ligeiramente no tamanho dos metadados, mas a saída visual é a mesma.",
          "Esta é uma fonte comum de confusão: designers acostumados a imprimir fluxos de trabalho presumem que devem definir imagens da web para 72 ou 96 DPI. Na realidade, você pode salvar em qualquer DPI - isso não afetará a renderização, o tamanho do arquivo ou a qualidade."
        ]
      },
      {
        "id": "what-matters",
        "title": "O que realmente importa para imagens da Web",
        "list": [
          "Dimensões de pixel: exiba imagens no tamanho que serão exibidas (ou 2× para retina). Uma imagem principal exibida com 1.200 pixels CSS de largura deve ter 1.200 px (padrão) ou 2.400 px (retina).",
          "Formato de arquivo: use WebP para ampla compatibilidade com excelente compactação. Use AVIF para uma compactação ainda melhor quando houver suporte. Use JPEG para fotos e PNG para gráficos com transparência.",
          "Compressão: uma imagem WebP bem compactada pode ser 25 - 35% menor que um JPEG equivalente sem perda de qualidade visível.",
          "Carregamento lento: adicione loading=\"lazy\" às imagens abaixo da dobra para adiar o carregamento até que elas entrem na janela de visualização."
        ]
      },
      {
        "id": "responsive-images",
        "title": "Imagens responsivas para telas HiDPI",
        "paragraphs": [
          "Na retina (2×) e telas de alta densidade (3×), as imagens precisam de mais pixels para parecerem nítidas. Use o atributo HTML srcset para fornecer resoluções diferentes:",
          "O navegador seleciona a imagem apropriada com base na largura da janela de visualização e na proporção de pixels do dispositivo, garantindo imagens nítidas sem desperdiçar largura de banda em exibições padrão."
        ],
        "code": "<img\n  src=\"hero-800w.webp\"\n  srcset=\"hero-800w.webp 800w,\n          hero-1200w.webp 1200w,\n          hero-2400w.webp 2400w\"\n  sizes=\"(max-width: 600px) 100vw, 1200px\"\n  alt=\"Hero image\"\n  loading=\"lazy\"\n/>"
      },
      {
        "id": "optimization-tips",
        "title": "Lista de verificação de otimização de imagens da Web",
        "list": [
          "Redimensione as imagens para seu tamanho máximo de exibição (não exiba um Imagem de 4.000 px para um contêiner de 1.200 px).",
          "Use o formato WebP ou AVIF com configuração de qualidade de 75 - 85%.",
          "Forneça versões 1× e 2× via srcset.",
          "Adicione atributos de largura e altura para evitar mudança de layout.",
          "Use carregamento lento para imagens abaixo da inicial. viewport.",
          "Considere usar um CDN com negociação automática de formato."
        ],
        "paragraphs": [
          "Calcule as dimensões exatas de pixels necessárias para qualquer layout com nossa calculadora de tamanho de imagem."
        ]
      }
    ]
  },
  "hi": {
    "faq": [
      {
        "question": "क्या मुझे वेब छवियों को 72 डीपीआई पर सहेजना चाहिए?",
        "answer": "कोई फर्क नहीं पड़ता कि। ब्राउज़र DPI मेटाडेटा को पूरी तरह से अनदेखा कर देते हैं। एक 1200x800 छवि समान रूप से प्रदर्शित होती है चाहे उसे 72, 96, या 300 डीपीआई पर सहेजा गया हो। केवल पिक्सेल आयाम और फ़ाइल स्वरूप वेब डिस्प्ले को प्रभावित करते हैं।"
      },
      {
        "question": "कुछ लोग वेब के लिए 72 डीपीआई की अनुशंसा क्यों करते हैं?",
        "answer": "यह शुरुआती मैक डिस्प्ले से एक लगातार मिथक है, जिसमें 72 पीपीआई स्क्रीन थे। छवियों को 72 डीपीआई पर सेट करने से प्रारंभिक डिज़ाइन सॉफ़्टवेयर में 'बिंदु' और 'पिक्सेल' 1:1 से मेल खाते हैं। आधुनिक ब्राउज़र पिक्सेल गणना के आधार पर प्रस्तुत करते हैं, डीपीआई के आधार पर नहीं।"
      },
      {
        "question": "मैं वेब प्रदर्शन के लिए छवियों को कैसे अनुकूलित करूं?",
        "answer": "WebP या AVIF जैसे आधुनिक प्रारूपों का उपयोग करें। वास्तविक प्रदर्शन आयामों का आकार बदलें (आवश्यकता से बड़ा नहीं)। स्क्वॉश या इमेजऑप्टिम जैसे टूल से कंप्रेस करें। विभिन्न स्क्रीन आकारों के लिए srcset के साथ प्रतिक्रियाशील छवियों का उपयोग करें।"
      }
    ],
    "sections": [
      {
        "id": "dpi-irrelevant",
        "title": "डीपीआई वेब के लिए अप्रासंगिक क्यों है?",
        "paragraphs": [
          "वेब ब्राउज़र छवि फ़ाइलों में एम्बेडेड DPI (या PPI) मेटाडेटा को पूरी तरह से अनदेखा कर देते हैं। जब कोई ब्राउज़र किसी छवि को प्रस्तुत करता है, तो वह केवल पिक्सेल आयामों का उपयोग करता है। 72 डीपीआई पर सहेजी गई 1200 × 800 छवि को 300 डीपीआई पर सहेजी गई समान छवि के समान प्रस्तुत किया जाता है। फ़ाइलें मेटाडेटा आकार में थोड़ी भिन्न हो सकती हैं, लेकिन विज़ुअल आउटपुट समान है।",
          "यह भ्रम का एक सामान्य स्रोत है: वर्कफ़्लो प्रिंट करने के आदी डिज़ाइनर मानते हैं कि उन्हें वेब छवियों को 72 या 96 डीपीआई पर सेट करना चाहिए। वास्तव में, आप किसी भी डीपीआई पर बचत कर सकते हैं - यह रेंडरिंग, फ़ाइल आकार या गुणवत्ता को प्रभावित नहीं करेगा।"
        ]
      },
      {
        "id": "what-matters",
        "title": "वेब छवियों के लिए वास्तव में क्या मायने रखता है",
        "list": [
          "पिक्सेल आयाम: छवियों को उस आकार में प्रस्तुत करें जो वे प्रदर्शित करेंगे (या रेटिना के लिए 2×)। 1200 सीएसएस पिक्सेल चौड़ाई पर प्रदर्शित हीरो छवि 1200 पिक्सेल (मानक) या 2400 पिक्सेल (रेटिना) होनी चाहिए।",
          "फ़ाइल प्रारूप: उत्कृष्ट संपीड़न के साथ व्यापक अनुकूलता के लिए WebP का उपयोग करें। जहां समर्थित हो वहां और भी बेहतर संपीड़न के लिए AVIF का उपयोग करें। पारदर्शिता के साथ फ़ोटो के लिए JPEG और ग्राफ़िक्स के लिए PNG का उपयोग करें।",
          "संपीड़न: एक अच्छी तरह से संपीड़ित वेबपी छवि बिना किसी दृश्यमान गुणवत्ता हानि के समकक्ष जेपीईजी से 25-35% छोटी हो सकती है।",
          "आलसी लोडिंग: व्यूपोर्ट में प्रवेश करने तक लोडिंग को स्थगित करने के लिए फोल्ड के नीचे की छवियों में लोडिंग = \"आलसी\" जोड़ें।"
        ]
      },
      {
        "id": "responsive-images",
        "title": "HiDPI स्क्रीन के लिए प्रतिक्रियाशील छवियाँ",
        "paragraphs": [
          "रेटिना (2×) और उच्च-घनत्व (3×) स्क्रीन पर, छवियों को स्पष्ट दिखने के लिए अधिक पिक्सेल की आवश्यकता होती है। विभिन्न रिज़ॉल्यूशन प्रस्तुत करने के लिए HTML srcset विशेषता का उपयोग करें:",
          "ब्राउज़र व्यूपोर्ट की चौड़ाई और डिवाइस पिक्सेल अनुपात के आधार पर उपयुक्त छवि का चयन करता है, जिससे मानक डिस्प्ले पर बैंडविड्थ बर्बाद किए बिना तेज छवियां सुनिश्चित होती हैं।"
        ],
        "code": "<img\n  src=\"hero-800w.webp\"\n  srcset=\"hero-800w.webp 800w,\n          hero-1200w.webp 1200w,\n          hero-2400w.webp 2400w\"\n  sizes=\"(max-width: 600px) 100vw, 1200px\"\n  alt=\"Hero image\"\n  loading=\"lazy\"\n/>"
      },
      {
        "id": "optimization-tips",
        "title": "वेब छवि अनुकूलन चेकलिस्ट",
        "list": [
          "छवियों का आकार उनके अधिकतम प्रदर्शन आकार में बदलें (1200 px कंटेनर के लिए 4000 px छवि प्रस्तुत न करें)।",
          "75-85% की गुणवत्ता सेटिंग के साथ वेबपी या एवीआईएफ प्रारूप का उपयोग करें।",
          "Srcset के माध्यम से 1× और 2× संस्करण प्रदान करें।",
          "लेआउट परिवर्तन को रोकने के लिए चौड़ाई और ऊंचाई विशेषताएँ जोड़ें।",
          "प्रारंभिक व्यूपोर्ट के नीचे की छवियों के लिए आलसी लोडिंग का उपयोग करें।",
          "स्वचालित प्रारूप बातचीत के साथ सीडीएन का उपयोग करने पर विचार करें।"
        ],
        "paragraphs": [
          "हमारे छवि आकार कैलकुलेटर के साथ किसी भी लेआउट के लिए आवश्यक सटीक पिक्सेल आयामों की गणना करें।"
        ]
      }
    ]
  },
  "ja": {
    "faq": [
      {
        "question": "Web 画像は 72 DPI で保存する必要がありますか?",
        "answer": "問題ありません。ブラウザは DPI メタデータを完全に無視します。 1200x800 の画像は、72、96、または 300 DPI で保存しても同じように表示されます。 Web 表示に影響するのはピクセル寸法とファイル形式のみです。"
      },
      {
        "question": "Web に 72 DPI を推奨する人がいるのはなぜですか?",
        "answer": "これは、72 PPI 画面を備えた初期の Mac ディスプレイからの根強い通説です。画像を 72 DPI に設定すると、初期のデザイン ソフトウェアでは「ポイント」と「ピクセル」が 1:1 に一致しました。最新のブラウザは、DPI ではなくピクセル数によってレンダリングします。"
      },
      {
        "question": "Web パフォーマンスのために画像を最適化するにはどうすればよいですか?",
        "answer": "WebP や AVIF などの最新の形式を使用します。実際の表示寸法に合わせてサイズを変更します (必要以上に大きくしないでください)。 Squoosh や ImageOptim などのツールを使用して圧縮します。さまざまな画面サイズに対して srcset で応答性の高い画像を使用します。"
      }
    ],
    "sections": [
      {
        "id": "dpi-irrelevant",
        "title": "Web に DPI が無関係な理由",
        "paragraphs": [
          "Web ブラウザは、画像ファイルに埋め込まれた DPI (または PPI) メタデータを完全に無視します。ブラウザが画像をレンダリングするとき、ピクセル寸法のみが使用されます。 72 DPI で保存された 1200 × 800 の画像は、300 DPI で保存された同じ画像と同じようにレンダリングされます。ファイルのメタデータ サイズは若干異なる場合がありますが、視覚的な出力は同じです。",
          "これはよくある混乱の原因です。印刷ワークフローに慣れているデザイナーは、Web 画像を 72 または 96 DPI に設定する必要があると想定しています。実際には、任意の DPI で保存できます。レンダリング、ファイル サイズ、品質には影響しません。"
        ]
      },
      {
        "id": "what-matters",
        "title": "Web 画像にとって実際に重要なこと",
        "list": [
          "ピクセル寸法: 表示されるサイズ (網膜の場合は 2 倍) で画像を提供します。幅 1200 CSS ピクセルで表示されるヒーロー画像は、1200 ピクセル (標準) または 2400 ピクセル (網膜) である必要があります。",
          "ファイル形式: 優れた圧縮による幅広い互換性を実現するには、WebP を使用します。サポートされている場合は、AVIF を使用すると、圧縮率をさらに高めることができます。写真の場合は JPEG に、透明度のあるグラフィックの場合は PNG に戻ります。",
          "圧縮: 適切に圧縮された WebP 画像は、目に見える品質の低下がなく、同等の JPEG よりも 25 ～ 35% 小さくできます。",
          "遅延読み込み: ビューポートに入るまで読み込みを遅らせるには、スクロールせずに見える画像に「lazy」を追加します。"
        ]
      },
      {
        "id": "responsive-images",
        "title": "HiDPI のレスポンシブ画像スクリーン",
        "paragraphs": [
          "Retina (2x) および高密度 (3x) スクリーンでは、画像を鮮明に表示するにはより多くのピクセルが必要です。 HTML の srcset 属性を使用して、さまざまな解像度を提供します。",
          "ブラウザは、ビューポートの幅とデバイスのピクセル比に基づいて適切な画像を選択し、標準ディスプレイで帯域幅を無駄にせずに鮮明な画像を確保します。"
        ],
        "code": "<img\n  src=\"hero-800w.webp\"\n  srcset=\"hero-800w.webp 800w,\n          hero-1200w.webp 1200w,\n          hero-2400w.webp 2400w\"\n  sizes=\"(max-width: 600px) 100vw, 1200px\"\n  alt=\"Hero image\"\n  loading=\"lazy\"\n/>"
      },
      {
        "id": "optimization-tips",
        "title": "Web 画像最適化チェックリスト",
        "list": [
          "画像のサイズを最大表示サイズに変更します (配信されません) 1200 ピクセルのコンテナに 4000 ピクセルの画像)。",
          "品質設定 75 ～ 85% で WebP または AVIF 形式を使用します。",
          "srcset 経由で 1x および 2x バージョンを提供します。",
          "レイアウトのずれを防ぐために幅と高さの属性を追加します。",
          "初期値よりも小さい画像には遅延読み込みを使用します。 viewport.",
          "自動フォーマット ネゴシエーションを備えた CDN の使用を検討してください。"
        ],
        "paragraphs": [
          "画像サイズ計算ツールを使用して、レイアウトに必要な正確なピクセル サイズを計算します。"
        ]
      }
    ]
  },
  "ko": {
    "faq": [
      {
        "question": "웹 이미지를 72 DPI로 저장해야 하나요?",
        "answer": "상관없습니다. 브라우저는 DPI 메타데이터를 완전히 무시합니다. 1200x800 이미지는 72, 96, 300 DPI로 저장되든 동일하게 표시됩니다. 픽셀 크기와 파일 형식만 웹 디스플레이에 영향을 미칩니다."
      },
      {
        "question": "왜 일부 사람들은 웹에 72 DPI를 권장합니까?",
        "answer": "이것은 72 PPI 화면이 있었던 초기 Mac 디스플레이의 지속적인 신화입니다. 이미지를 72 DPI로 설정하면 초기 디자인 소프트웨어에서 '포인트'와 '픽셀'이 1:1로 일치합니다. 최신 브라우저는 DPI가 아닌 픽셀 수로 렌더링합니다."
      },
      {
        "question": "웹 성능을 위해 이미지를 어떻게 최적화합니까?",
        "answer": "WebP 또는 AVIF와 같은 최신 형식을 사용합니다. 실제 디스플레이 크기로 크기를 조정합니다(필요한 것보다 크지 않음). Squoosh 또는 ImageOptim과 같은 도구를 사용하여 압축하세요. 다양한 화면 크기에 대해 srcset이 포함된 반응형 이미지를 사용하세요."
      }
    ],
    "sections": [
      {
        "id": "dpi-irrelevant",
        "title": "DPI가 웹에 적합하지 않은 이유",
        "paragraphs": [
          "웹 브라우저는 이미지 파일에 포함된 DPI(또는 PPI) 메타데이터를 완전히 무시합니다. 브라우저는 이미지를 렌더링할 때 픽셀 크기만 사용합니다. 72 DPI로 저장된 1200 × 800 이미지는 300 DPI로 저장된 동일한 이미지와 동일하게 렌더링됩니다. 파일의 메타데이터 크기는 약간 다를 수 있지만 시각적 출력은 동일합니다.",
          "이는 일반적인 혼란의 원인입니다. 인쇄 작업 흐름에 익숙한 디자이너는 웹 이미지를 72 또는 96 DPI로 설정해야 한다고 가정합니다. 실제로는 모든 DPI로 저장할 수 있습니다. 이는 렌더링, 파일 크기 또는 품질에 영향을 미치지 않습니다."
        ]
      },
      {
        "id": "what-matters",
        "title": "웹 이미지에 실제로 중요한 것",
        "list": [
          "픽셀 크기: 표시할 크기(또는 Retina의 경우 2배)로 이미지를 제공합니다. 1200 CSS 픽셀 너비로 표시되는 히어로 이미지는 1200픽셀(표준) 또는 2400픽셀(레티나)이어야 합니다.",
          "파일 형식: 뛰어난 압축과 광범위한 호환성을 위해 WebP를 사용합니다. 지원되는 경우 더 나은 압축을 위해 AVIF를 사용하세요. 사진의 경우 JPEG로 대체하고 그래픽의 경우 투명도가 있는 PNG로 대체합니다.",
          "압축: 잘 압축된 WebP 이미지는 눈에 띄는 품질 손실 없이 동등한 JPEG보다 25~35% 더 작을 수 있습니다.",
          "지연 로딩: 접힌 부분 아래 이미지에 loading=\"lazy\"를 추가하여 뷰포트에 들어갈 때까지 로딩을 연기합니다."
        ]
      },
      {
        "id": "responsive-images",
        "title": "HiDPI 화면용 반응형 이미지",
        "paragraphs": [
          "Retina에서 (2×) 및 고밀도(3×) 화면의 경우 이미지가 선명하게 보이려면 더 많은 픽셀이 필요합니다. 다양한 해상도를 제공하려면 HTML srcset 속성을 사용하세요.",
          "브라우저는 뷰포트 너비와 장치 픽셀 비율을 기준으로 적절한 이미지를 선택하여 표준 디스플레이에서 대역폭을 낭비하지 않고 선명한 이미지를 보장합니다."
        ],
        "code": "<img\n  src=\"hero-800w.webp\"\n  srcset=\"hero-800w.webp 800w,\n          hero-1200w.webp 1200w,\n          hero-2400w.webp 2400w\"\n  sizes=\"(max-width: 600px) 100vw, 1200px\"\n  alt=\"Hero image\"\n  loading=\"lazy\"\n/>"
      },
      {
        "id": "optimization-tips",
        "title": "웹 이미지 최적화 체크리스트",
        "list": [
          "이미지 크기를 최대 디스플레이 크기로 조정합니다. 1200px 컨테이너에 대한 4000px 이미지).",
          "품질 설정이 75~85%인 WebP 또는 AVIF 형식을 사용합니다.",
          "srcset를 통해 1× 및 2× 버전을 제공합니다.",
          "레이아웃 변경을 방지하기 위해 너비 및 높이 속성을 추가합니다.",
          "초기 이미지보다 낮은 이미지에는 지연 로딩을 사용합니다. viewport.",
          "자동 형식 협상이 포함된 CDN 사용을 고려하세요."
        ],
        "paragraphs": [
          "이미지 크기 계산기를 사용하여 레이아웃에 필요한 정확한 픽셀 크기를 계산하세요."
        ]
      }
    ]
  },
  "it": {
    "faq": [
      {
        "question": "Devo salvare le immagini web a 72 DPI?",
        "answer": "Non importa. I browser ignorano completamente i metadati DPI. Un'immagine 1200x800 viene visualizzata in modo identico se salvata a 72, 96 o 300 DPI. Solo le dimensioni in pixel e il formato del file influiscono sulla visualizzazione sul Web."
      },
      {
        "question": "Perché alcune persone consigliano 72 DPI per il Web?",
        "answer": "Questo è un mito persistente dei primi display Mac, che avevano schermi a 72 PPI. L'impostazione delle immagini su 72 DPI faceva sì che \"punti\" e \"pixel\" corrispondessero 1:1 nei primi software di progettazione. I browser moderni eseguono il rendering in base al numero di pixel, non a DPI."
      },
      {
        "question": "Come faccio a ottimizzare le immagini per le prestazioni web?",
        "answer": "Utilizza formati moderni come WebP o AVIF. Ridimensionare alle dimensioni effettive del display (non più grandi del necessario). Comprimi con strumenti come Squoosh o ImageOptim. Utilizza immagini reattive con srcset per diverse dimensioni dello schermo."
      }
    ],
    "sections": [
      {
        "id": "dpi-irrelevant",
        "title": "Perché DPI è irrilevante per il Web",
        "paragraphs": [
          "I browser Web ignorano completamente i metadati DPI (o PPI) incorporati nei file di immagine. Quando un browser esegue il rendering di un'immagine, utilizza solo le dimensioni in pixel. Un'immagine 1200 × 800 salvata a 72 DPI viene renderizzata in modo identico alla stessa immagine salvata a 300 DPI. I file possono differire leggermente nella dimensione dei metadati, ma l'output visivo è lo stesso.",
          "Questa è una comune fonte di confusione: i designer abituati a stampare flussi di lavoro presumono che dovrebbero impostare le immagini web su 72 o 96 DPI. In realtà, puoi salvare a qualsiasi DPI: ciò non influirà sul rendering, sulle dimensioni del file o sulla qualità."
        ]
      },
      {
        "id": "what-matters",
        "title": "Ciò che conta davvero per le immagini Web",
        "list": [
          "Dimensioni pixel: offri immagini alla dimensione in cui verranno visualizzate (o 2× per Retina). Un'immagine hero visualizzata con una larghezza di 1200 pixel CSS deve essere di 1200 px (standard) o 2400 px (retina).",
          "Formato file: utilizza WebP per un'ampia compatibilità con un'eccellente compressione. Utilizza AVIF per una compressione ancora migliore, ove supportato. Torna a JPEG per le foto e PNG per la grafica con trasparenza.",
          "Compressione: un'immagine WebP ben compressa può essere più piccola del 25 - 35% rispetto a un JPEG equivalente senza perdita di qualità visibile.",
          "Caricamento lento: aggiungi caricamento=\"pigro\" alle immagini Below the Fold per posticipare il caricamento finché non entrano nell'area visibile."
        ]
      },
      {
        "id": "responsive-images",
        "title": "Immagini reattive per schermi HiDPI",
        "paragraphs": [
          "Su retina (2×) e schermi ad alta densità (3×), le immagini necessitano di più pixel per apparire nitide. Utilizza l'attributo HTML srcset per fornire risoluzioni diverse:",
          "Il browser seleziona l'immagine appropriata in base alla larghezza del viewport e al rapporto pixel del dispositivo, garantendo immagini nitide senza sprecare larghezza di banda su display standard."
        ],
        "code": "<img\n  src=\"hero-800w.webp\"\n  srcset=\"hero-800w.webp 800w,\n          hero-1200w.webp 1200w,\n          hero-2400w.webp 2400w\"\n  sizes=\"(max-width: 600px) 100vw, 1200px\"\n  alt=\"Hero image\"\n  loading=\"lazy\"\n/>"
      },
      {
        "id": "optimization-tips",
        "title": "Elenco di controllo per l'ottimizzazione delle immagini Web",
        "list": [
          "Ridimensiona le immagini alla dimensione massima di visualizzazione (non pubblicare un Immagine da 4000 px per un contenitore da 1200 px).",
          "Utilizza il formato WebP o AVIF con un'impostazione di qualità pari a 75 - 85%.",
          "Fornisci versioni 1× e 2× tramite srcset.",
          "Aggiungi attributi di larghezza e altezza per impedire lo spostamento del layout.",
          "Utilizza il caricamento lento per le immagini sotto l'iniziale viewport.",
          "Considera l'utilizzo di una CDN con negoziazione automatica del formato."
        ],
        "paragraphs": [
          "Calcola le esatte dimensioni in pixel necessarie per qualsiasi layout con il nostro calcolatore della dimensione dell'immagine."
        ]
      }
    ]
  },
  "nl": {
    "faq": [
      {
        "question": "Moet ik webafbeeldingen opslaan met 72 DPI?",
        "answer": "Het maakt niet uit. Browsers negeren DPI-metagegevens volledig. Een afbeelding van 1200x800 wordt identiek weergegeven, ongeacht of deze is opgeslagen met 72, 96 of 300 DPI. Alleen de pixelafmetingen en het bestandsformaat zijn van invloed op de webweergave."
      },
      {
        "question": "Waarom raden sommige mensen 72 DPI aan voor internet?",
        "answer": "Dit is een hardnekkige mythe uit vroege Mac-schermen, die 72 PPI-schermen hadden. Door afbeeldingen in te stellen op 72 DPI kwamen 'punten' en 'pixels' in vroege ontwerpsoftware 1:1 overeen. Moderne browsers worden weergegeven op basis van het aantal pixels, niet op DPI."
      },
      {
        "question": "Hoe optimaliseer ik afbeeldingen voor webprestaties?",
        "answer": "Gebruik moderne formaten zoals WebP of AVIF. Pas het formaat aan de werkelijke afmetingen van het scherm aan (niet groter dan nodig). Comprimeer met tools zoals Squoosh of ImageOptim. Gebruik responsieve afbeeldingen met srcset voor verschillende schermformaten."
      }
    ],
    "sections": [
      {
        "id": "dpi-irrelevant",
        "title": "Waarom DPI irrelevant is voor internet",
        "paragraphs": [
          "Webbrowsers negeren volledig de DPI (of PPI)-metagegevens die zijn ingebed in afbeeldingsbestanden. Wanneer een browser een afbeelding weergeeft, gebruikt deze alleen de pixelafmetingen. Een afbeelding van 1200 x 800 die is opgeslagen bij 72 DPI wordt op dezelfde manier weergegeven als dezelfde afbeelding die is opgeslagen bij 300 DPI. De bestanden kunnen enigszins verschillen qua metadatagrootte, maar de visuele output is hetzelfde.",
          "Dit is een veel voorkomende bron van verwarring: ontwerpers die gewend zijn aan printworkflows gaan ervan uit dat ze webafbeeldingen moeten instellen op 72 of 96 DPI. In werkelijkheid kun je met elke DPI opslaan; dit heeft geen invloed op de weergave, de bestandsgrootte of de kwaliteit."
        ]
      },
      {
        "id": "what-matters",
        "title": "Wat er eigenlijk toe doet voor webafbeeldingen",
        "list": [
          "Pixelafmetingen: geef afbeeldingen weer in de grootte die ze weergeven (of 2× voor retina). Een hero-afbeelding die wordt weergegeven met een breedte van 1200 CSS-pixels moet 1200 px (standaard) of 2400 px (retina) zijn.",
          "Bestandsformaat: gebruik WebP voor brede compatibiliteit met uitstekende compressie. Gebruik AVIF voor nog betere compressie waar dit wordt ondersteund. Val terug op JPEG voor foto's en PNG voor afbeeldingen met transparantie.",
          "Compressie: een goed gecomprimeerde WebP-afbeelding kan 25-35% kleiner zijn dan een gelijkwaardige JPEG zonder zichtbaar kwaliteitsverlies.",
          "Lazyloading: Voeg load=\"lazy\" toe aan afbeeldingen onder de vouw om het laden uit te stellen totdat ze in de viewport verschijnen."
        ]
      },
      {
        "id": "responsive-images",
        "title": "Responsieve afbeeldingen voor HiDPI-schermen",
        "paragraphs": [
          "Op retina (2×) en hogedichtheidsschermen (3×), hebben afbeeldingen meer pixels nodig om scherp te lijken. Gebruik het HTML srcset-attribuut om verschillende resoluties weer te geven:",
          "De browser selecteert de juiste afbeelding op basis van de viewport-breedte en de pixelverhouding van het apparaat, waardoor scherpe afbeeldingen worden gegarandeerd zonder bandbreedte te verspillen op standaardschermen."
        ],
        "code": "<img\n  src=\"hero-800w.webp\"\n  srcset=\"hero-800w.webp 800w,\n          hero-1200w.webp 1200w,\n          hero-2400w.webp 2400w\"\n  sizes=\"(max-width: 600px) 100vw, 1200px\"\n  alt=\"Hero image\"\n  loading=\"lazy\"\n/>"
      },
      {
        "id": "optimization-tips",
        "title": "Web Image Optimization Checklist",
        "list": [
          "Verklein afbeeldingen naar hun maximale weergavegrootte (geef geen 4000 px afbeelding voor een 1200 px container).",
          "Gebruik het WebP- of AVIF-formaat met een kwaliteitsinstelling van 75-85%.",
          "Bied 1× en 2× versies aan via srcset.",
          "Voeg breedte- en hoogte-attributen toe om lay-outverschuiving te voorkomen.",
          "Gebruik lazyloading voor afbeeldingen onder de initiaal viewport.",
          "Overweeg het gebruik van een CDN met automatische formaatonderhandeling."
        ],
        "paragraphs": [
          "Bereken de exacte pixelafmetingen die u nodig heeft voor elke lay-out met onze Image Size Calculator."
        ]
      }
    ]
  },
  "ar": {
    "faq": [
      {
        "question": "هل يجب أن أحفظ صور الويب بدقة 72 نقطة في البوصة؟",
        "answer": "لا يهم. تتجاهل المتصفحات بيانات تعريف DPI بالكامل. يتم عرض الصورة مقاس 1200 × 800 بشكل مماثل سواء تم حفظها بدقة 72 أو 96 أو 300 نقطة لكل بوصة. تؤثر أبعاد البكسل وتنسيق الملف فقط على عرض الويب."
      },
      {
        "question": "لماذا يوصي بعض الأشخاص بـ 72 نقطة في البوصة للويب؟",
        "answer": "هذه أسطورة مستمرة من شاشات Mac المبكرة، التي كانت تحتوي على 72 نقطة في البوصة. أدى ضبط الصور على 72 نقطة في البوصة إلى جعل \"النقاط\" و\"البكسلات\" تتطابق بنسبة 1:1 في برامج التصميم المبكرة. يتم عرض المتصفحات الحديثة حسب عدد وحدات البكسل، وليس DPI."
      },
      {
        "question": "كيف يمكنني تحسين الصور لأداء الويب؟",
        "answer": "استخدم التنسيقات الحديثة مثل WebP أو AVIF. قم بتغيير الحجم إلى أبعاد العرض الفعلية (ليس أكبر من المطلوب). اضغط باستخدام أدوات مثل Squoosh أو ImageOptim. استخدم الصور المستجيبة مع srcset لأحجام الشاشات المختلفة."
      }
    ],
    "sections": [
      {
        "id": "dpi-irrelevant",
        "title": "لماذا تعتبر DPI غير ذات صلة بالويب",
        "paragraphs": [
          "تتجاهل متصفحات الويب تمامًا البيانات التعريفية DPI (أو PPI) المضمنة في ملفات الصور. عندما يعرض المتصفح صورة، فإنه يستخدم أبعاد البكسل فقط. يتم عرض صورة مقاس 1200 × 800 محفوظة بدقة 72 نقطة لكل بوصة بشكل مماثل لنفس الصورة المحفوظة بدقة 300 نقطة لكل بوصة. قد تختلف الملفات قليلاً في حجم البيانات التعريفية، لكن الإخراج المرئي هو نفسه.",
          "هذا مصدر شائع للارتباك: يفترض المصممون المعتادون على طباعة سير العمل أنه يجب عليهم ضبط صور الويب على 72 أو 96 نقطة في البوصة. في الواقع، يمكنك الحفظ بأي نقطة لكل بوصة - ولن يؤثر ذلك على العرض أو حجم الملف أو الجودة."
        ]
      },
      {
        "id": "what-matters",
        "title": "ما يهم فعليًا لصور الويب",
        "list": [
          "أبعاد البكسل: قم بعرض الصور بالحجم الذي ستعرضه (أو 2 × لشبكية العين). يجب أن تكون الصورة الرئيسية المعروضة بعرض 1200 بكسل CSS 1200 بكسل (قياسي) أو 2400 بكسل (شبكية العين).",
          "تنسيق الملف: استخدم WebP للتوافق الواسع مع الضغط الممتاز. استخدم AVIF للحصول على ضغط أفضل عندما يكون مدعومًا. ارجع إلى JPEG للصور وPNG للحصول على رسومات ذات شفافية.",
          "الضغط: يمكن أن تكون صورة WebP المضغوطة جيدًا أصغر بنسبة 25 - 35% من JPEG المكافئ مع عدم وجود فقدان واضح للجودة.",
          "التحميل البطيء: أضف التحميل = \"lazy\" إلى الصور الموجودة أسفل الجزء المرئي لتأجيل التحميل حتى تدخل منفذ العرض."
        ]
      },
      {
        "id": "responsive-images",
        "title": "صور مستجيبة لـ HiDPI الشاشات",
        "paragraphs": [
          "على شاشات شبكية العين (2×) والشاشات عالية الكثافة (3×)، تحتاج الصور إلى عدد أكبر من وحدات البكسل لتظهر بوضوح. استخدم سمة HTML srcset لتقديم مستويات دقة مختلفة:",
          "يختار المتصفح الصورة المناسبة استنادًا إلى عرض إطار العرض ونسبة بكسلات الجهاز، مما يضمن الحصول على صور واضحة دون إضاعة عرض النطاق الترددي على شاشات العرض القياسية."
        ],
        "code": "<img\n  src=\"hero-800w.webp\"\n  srcset=\"hero-800w.webp 800w,\n          hero-1200w.webp 1200w,\n          hero-2400w.webp 2400w\"\n  sizes=\"(max-width: 600px) 100vw, 1200px\"\n  alt=\"Hero image\"\n  loading=\"lazy\"\n/>"
      },
      {
        "id": "optimization-tips",
        "title": "قائمة التحقق من تحسين صور الويب",
        "list": [
          "قم بتغيير حجم الصور إلى الحد الأقصى لحجم العرض (قم بذلك لا تعرض صورة بحجم 4000 بكسل لحاوية بحجم 1200 بكسل).",
          "استخدم تنسيق WebP أو AVIF مع إعداد جودة بنسبة 75 - 85%.",
          "توفير إصدارات 1× و2× عبر srcset.",
          "أضف سمات العرض والارتفاع لمنع تغيير التخطيط.",
          "استخدم التحميل البطيء للصور الموجودة أسفل الأولي. viewport.",
          "فكر في استخدام CDN مع التفاوض التلقائي على التنسيق."
        ],
        "paragraphs": [
          "احسب أبعاد البكسل الدقيقة التي تحتاجها لأي تخطيط باستخدام حاسبة حجم الصورة لدينا."
        ]
      }
    ]
  },
  "tr": {
    "faq": [
      {
        "question": "Web resimlerini 72 DPI'da mı kaydetmeliyim?",
        "answer": "Önemli değil. Tarayıcılar DPI meta verilerini tamamen yok sayar. 1200x800'lük bir görüntü, ister 72, ister 96, ister 300 DPI'da kaydedilmiş olsun, aynı şekilde görüntülenir. Yalnızca piksel boyutları ve dosya formatı web görüntüsünü etkiler."
      },
      {
        "question": "Neden bazı insanlar web için 72 DPI öneriyor?",
        "answer": "Bu, 72 PPI ekranı olan ilk Mac ekranlarından kalma kalıcı bir efsanedir. Görüntülerin 72 DPI'ye ayarlanması, eski tasarım yazılımında 'noktaların' ve 'piksellerin' 1:1 eşleşmesini sağlıyordu. Modern tarayıcılar DPI'ye göre değil, piksel sayısına göre oluşturur."
      },
      {
        "question": "Resimleri web performansı için nasıl optimize ederim?",
        "answer": "WebP veya AVIF gibi modern formatları kullanın. Gerçek ekran boyutlarına göre yeniden boyutlandırın (gerekenden daha büyük değil). Squoosh veya ImageOptim gibi araçlarla sıkıştırın. Farklı ekran boyutları için srcset ile duyarlı görseller kullanın."
      }
    ],
    "sections": [
      {
        "id": "dpi-irrelevant",
        "title": "DPI Web için Neden Önemsizdir",
        "paragraphs": [
          "Web tarayıcıları, görüntü dosyalarına gömülü DPI (veya PPI) meta verilerini tamamen yok sayar. Bir tarayıcı bir görüntüyü işlerken yalnızca piksel boyutlarını kullanır. 72 DPI'da kaydedilen 1200 × 800 boyutunda bir görüntü, 300 DPI'da kaydedilen aynı görüntüyle aynı şekilde oluşturulur. Dosyalar meta veri boyutunda biraz farklı olabilir, ancak görsel çıktı aynıdır.",
          "Bu yaygın bir kafa karışıklığı kaynağıdır: iş akışlarını yazdırmaya alışkın tasarımcılar, web resimlerini 72 veya 96 DPI'ye ayarlamaları gerektiğini varsayarlar. Gerçekte herhangi bir DPI'da kaydedebilirsiniz; bu, oluşturmayı, dosya boyutunu veya kaliteyi etkilemez."
        ]
      },
      {
        "id": "what-matters",
        "title": "Web Görselleri İçin Aslında Önemli Olanlar",
        "list": [
          "Piksel boyutları: Görüntüleri görüntüleyecekleri boyutta (veya retina için 2x) sunun. 1200 CSS piksel genişliğinde görüntülenen bir kahraman görseli, 1200 piksel (standart) veya 2400 piksel (retina) olmalıdır.",
          "Dosya formatı: Mükemmel sıkıştırmayla geniş uyumluluk için WebP kullanın. Desteklendiğinde daha da iyi sıkıştırma için AVIF'yi kullanın. Fotoğraflar için JPEG'e ve şeffaflığa sahip grafikler için PNG'ye geri dönün.",
          "Sıkıştırma: İyi sıkıştırılmış bir WebP görüntüsü, görünür kalite kaybı olmaksızın eşdeğer bir JPEG'den %25 - 35 daha küçük olabilir.",
          "Gecik yükleme: Görünüm alanına girene kadar yüklemeyi ertelemek için ekranın alt kısmınaloading=\"lazy\" ekleyin."
        ]
      },
      {
        "id": "responsive-images",
        "title": "HiDPI Ekranlar için Duyarlı Görüntüler",
        "paragraphs": [
          "Retinada (2×) ve yüksek yoğunluklu (3×) ekranlarda, görüntülerin keskin görünmesi için daha fazla piksele ihtiyaç vardır. Farklı çözünürlükler sunmak için HTML srcset özelliğini kullanın:",
          "Tarayıcı, standart ekranlarda bant genişliğini boşa harcamadan keskin görüntüler sağlayarak görünüm alanı genişliğine ve cihaz piksel oranına göre uygun görüntüyü seçer."
        ],
        "code": "<img\n  src=\"hero-800w.webp\"\n  srcset=\"hero-800w.webp 800w,\n          hero-1200w.webp 1200w,\n          hero-2400w.webp 2400w\"\n  sizes=\"(max-width: 600px) 100vw, 1200px\"\n  alt=\"Hero image\"\n  loading=\"lazy\"\n/>"
      },
      {
        "id": "optimization-tips",
        "title": "Web Görüntüsü Optimizasyon Kontrol Listesi",
        "list": [
          "Görüntüleri maksimum görüntüleme boyutlarına göre yeniden boyutlandırın (bir 1200 piksellik bir kapsayıcı için 4000 piksellik resim).",
          "%75 - 85 kalite ayarıyla WebP veya AVIF biçimini kullanın.",
          "Srcset aracılığıyla 1× ve 2× versiyonları sağlayın.",
          "Düzen kaymasını önlemek için genişlik ve yükseklik nitelikleri ekleyin.",
          "Başlangıç değerinin altındaki resimler için yavaş yüklemeyi kullanın. görünüm.",
          "Otomatik format anlaşmalı bir CDN kullanmayı düşünün."
        ],
        "paragraphs": [
          "Görüntü Boyutu Hesaplayıcımızla herhangi bir düzen için ihtiyacınız olan piksel boyutlarını tam olarak hesaplayın."
        ]
      }
    ]
  },
  "pl": {
    "faq": [
      {
        "question": "Czy powinienem zapisywać obrazy internetowe w rozdzielczości 72 DPI?",
        "answer": "To nie ma znaczenia. Przeglądarki całkowicie ignorują metadane DPI. Obraz o rozdzielczości 1200 x 800 jest wyświetlany identycznie niezależnie od tego, czy jest zapisany w rozdzielczości 72, 96 czy 300 DPI. Tylko wymiary w pikselach i format pliku mają wpływ na wyświetlanie w Internecie."
      },
      {
        "question": "Dlaczego niektórzy zalecają 72 DPI w Internecie?",
        "answer": "To utrzymujący się mit z wczesnych wyświetlaczy Mac, które miały ekrany 72 PPI. Ustawienie obrazów na 72 DPI sprawiło, że „punkty” i „piksele” odpowiadały 1:1 we wczesnym oprogramowaniu do projektowania. Nowoczesne przeglądarki renderują według liczby pikseli, a nie DPI."
      },
      {
        "question": "Jak zoptymalizować obrazy pod kątem wydajności w Internecie?",
        "answer": "Używaj nowoczesnych formatów, takich jak WebP lub AVIF. Zmień rozmiar na rzeczywiste wymiary wyświetlacza (nie większe niż to konieczne). Kompresuj za pomocą narzędzi takich jak Squoosh lub ImageOptim. Używaj responsywnych obrazów z zestawem srcset dla różnych rozmiarów ekranów."
      }
    ],
    "sections": [
      {
        "id": "dpi-irrelevant",
        "title": "Dlaczego DPI jest nieistotne w Internecie",
        "paragraphs": [
          "Przeglądarki internetowe całkowicie ignorują metadane DPI (lub PPI) osadzone w plikach obrazów. Kiedy przeglądarka renderuje obraz, używa tylko wymiarów w pikselach. Obraz o rozdzielczości 1200 × 800 zapisany w rozdzielczości 72 DPI jest renderowany identycznie z tym samym obrazem zapisanym w rozdzielczości 300 DPI. Pliki mogą nieznacznie różnić się rozmiarem metadanych, ale efekt wizualny jest taki sam.",
          "Jest to częste źródło nieporozumień: projektanci przyzwyczajeni do drukowania zakładają, że powinni ustawić rozdzielczość obrazów internetowych na 72 lub 96 DPI. W rzeczywistości możesz zapisywać w dowolnej rozdzielczości DPI - nie ma to wpływu na renderowanie, rozmiar pliku ani jakość."
        ]
      },
      {
        "id": "what-matters",
        "title": "Co właściwie ma znaczenie w przypadku obrazów internetowych",
        "list": [
          "Wymiary w pikselach: udostępniaj obrazy w rozmiarze, w jakim będą wyświetlane (lub 2× w przypadku siatkówki). Obraz główny wyświetlany przy szerokości 1200 pikseli CSS powinien mieć rozmiar 1200 pikseli (standard) lub 2400 pikseli (siatkówka).",
          "Format pliku: Użyj WebP, aby uzyskać szeroką kompatybilność i doskonałą kompresję. Użyj formatu AVIF, aby uzyskać jeszcze lepszą kompresję, jeśli jest obsługiwana. W przypadku zdjęć i PNG wróć do formatu JPEG, aby uzyskać przezroczystą grafikę.",
          "Kompresja: dobrze skompresowany obraz WebP może być o 25 - 35% mniejszy niż odpowiednik JPEG bez widocznej utraty jakości.",
          "Leniwe ładowanie: dodaj loading=\"lazy\" do obrazów w dolnej części ekranu, aby opóźnić ładowanie do czasu ich wejścia do rzutni."
        ]
      },
      {
        "id": "responsive-images",
        "title": "Responsywne obrazy dla ekranów HiDPI",
        "paragraphs": [
          "Wł. siatkówki (2×) i ekrany o dużej gęstości (3×), obrazy potrzebują więcej pikseli, aby były ostre. Użyj atrybutu HTML srcset, aby obsługiwać różne rozdzielczości:",
          "Przeglądarka wybiera odpowiedni obraz na podstawie szerokości widocznego obszaru i proporcji pikseli urządzenia, zapewniając ostre obrazy bez marnowania przepustowości na standardowych wyświetlaczach."
        ],
        "code": "<img\n  src=\"hero-800w.webp\"\n  srcset=\"hero-800w.webp 800w,\n          hero-1200w.webp 1200w,\n          hero-2400w.webp 2400w\"\n  sizes=\"(max-width: 600px) 100vw, 1200px\"\n  alt=\"Hero image\"\n  loading=\"lazy\"\n/>"
      },
      {
        "id": "optimization-tips",
        "title": "Lista kontrolna optymalizacji obrazu internetowego",
        "list": [
          "Zmień rozmiar obrazów do maksymalnego rozmiaru wyświetlanego (nie rób tego) udostępnij obraz o rozdzielczości 4000 pikseli dla kontenera o rozdzielczości 1200 pikseli).",
          "Użyj formatu WebP lub AVIF z ustawieniem jakości 75 - 85%.",
          "Udostępnij wersje 1× i 2× za pomocą srcset.",
          "Dodaj atrybuty szerokości i wysokości, aby zapobiec zmianie układu.",
          "Użyj leniwego ładowania dla obrazów poniżej początkowego rzutnia.",
          "Rozważ użycie CDN z automatyczną negocjacją formatu."
        ],
        "paragraphs": [
          "Oblicz dokładne wymiary w pikselach potrzebne dla dowolnego układu za pomocą naszego kalkulatora rozmiaru obrazu."
        ]
      }
    ]
  },
  "id": {
    "faq": [
      {
        "question": "Haruskah saya menyimpan gambar web pada 72 DPI?",
        "answer": "Tidak masalah. Browser mengabaikan metadata DPI sepenuhnya. Gambar 1200x800 ditampilkan secara identik baik disimpan pada 72, 96, atau 300 DPI. Hanya dimensi piksel dan format file yang memengaruhi tampilan web."
      },
      {
        "question": "Mengapa sebagian orang merekomendasikan 72 DPI untuk web?",
        "answer": "Ini adalah mitos yang terus berlanjut dari tampilan Mac awal, yang memiliki layar 72 PPI. Menyetel gambar ke 72 DPI membuat 'titik' dan 'piksel' cocok 1:1 dalam perangkat lunak desain awal. Browser modern merender berdasarkan jumlah piksel, bukan DPI."
      },
      {
        "question": "Bagaimana cara mengoptimalkan gambar untuk kinerja web?",
        "answer": "Gunakan format modern seperti WebP atau AVIF. Ubah ukuran ke dimensi tampilan sebenarnya (tidak lebih besar dari yang diperlukan). Kompres dengan alat seperti Squoosh atau ImageOptim. Gunakan gambar responsif dengan srcset untuk ukuran layar berbeda."
      }
    ],
    "sections": [
      {
        "id": "dpi-irrelevant",
        "title": "Mengapa DPI Tidak Relevan untuk Web",
        "paragraphs": [
          "Browser web sepenuhnya mengabaikan metadata DPI (atau PPI) yang tertanam dalam file gambar. Saat browser merender gambar, browser hanya menggunakan dimensi piksel. Gambar 1200 × 800 yang disimpan pada 72 DPI dirender secara identik dengan gambar yang sama yang disimpan pada 300 DPI. Ukuran metadata file mungkin sedikit berbeda, namun keluaran visualnya sama.",
          "Ini adalah sumber kebingungan yang umum: desainer yang terbiasa mencetak alur kerja berasumsi bahwa mereka harus menyetel gambar web ke 72 atau 96 DPI. Pada kenyataannya, Anda dapat menyimpan pada DPI berapa pun - ini tidak akan memengaruhi rendering, ukuran file, atau kualitas."
        ]
      },
      {
        "id": "what-matters",
        "title": "Yang Sebenarnya Penting untuk Gambar Web",
        "list": [
          "Dimensi piksel: Menyajikan gambar dengan ukuran yang akan ditampilkan (atau 2× untuk retina). Gambar pahlawan yang ditampilkan dengan lebar 1200 piksel CSS harus berukuran 1200 px (standar) atau 2400 px (retina).",
          "Format file: Gunakan WebP untuk kompatibilitas luas dengan kompresi yang sangat baik. Gunakan AVIF untuk kompresi yang lebih baik jika didukung. Kembali ke JPEG untuk foto dan PNG untuk grafik dengan transparansi.",
          "Kompresi: Gambar WebP yang dikompresi dengan baik bisa 25 - 35% lebih kecil dari JPEG setara tanpa kehilangan kualitas yang terlihat.",
          "Pemuatan lambat: Tambahkan loading=\"lazy\" ke gambar paro bawah untuk menunda pemuatan hingga memasuki area pandang."
        ]
      },
      {
        "id": "responsive-images",
        "title": "Gambar Responsif untuk Layar HiDPI",
        "paragraphs": [
          "Di retina (2×) dan layar berkepadatan tinggi (3×), gambar memerlukan lebih banyak piksel agar tampak tajam. Gunakan atribut HTML srcset untuk menyajikan resolusi yang berbeda:",
          "Browser memilih gambar yang sesuai berdasarkan lebar area pandang dan rasio piksel perangkat, memastikan gambar tajam tanpa membuang bandwidth pada tampilan standar."
        ],
        "code": "<img\n  src=\"hero-800w.webp\"\n  srcset=\"hero-800w.webp 800w,\n          hero-1200w.webp 1200w,\n          hero-2400w.webp 2400w\"\n  sizes=\"(max-width: 600px) 100vw, 1200px\"\n  alt=\"Hero image\"\n  loading=\"lazy\"\n/>"
      },
      {
        "id": "optimization-tips",
        "title": "Daftar Periksa Pengoptimalan Gambar Web",
        "list": [
          "Ubah ukuran gambar ke ukuran tampilan maksimum (jangan sajikan a Gambar 4000 px untuk container 1200 px).",
          "Gunakan format WebP atau AVIF dengan pengaturan kualitas 75 - 85%.",
          "Sediakan versi 1× dan 2× melalui srcset.",
          "Tambahkan atribut lebar dan tinggi untuk mencegah pergeseran tata letak.",
          "Gunakan pemuatan lambat untuk gambar di bawah viewport awal.",
          "Pertimbangkan menggunakan CDN dengan negosiasi format otomatis."
        ],
        "paragraphs": [
          "Hitung dimensi piksel tepat yang Anda perlukan untuk tata letak apa pun dengan Kalkulator Ukuran Gambar kami."
        ]
      }
    ]
  },
  "ru": {
    "faq": [
      {
        "question": "Должен ли я сохранять веб-изображения с разрешением 72 DPI?",
        "answer": "Это не имеет значения. Браузеры полностью игнорируют метаданные DPI. Изображение размером 1200x800 отображается одинаково независимо от того, сохранено ли оно с разрешением 72, 96 или 300 точек на дюйм. На отображение в Интернете влияют только размеры в пикселях и формат файла."
      },
      {
        "question": "Почему некоторые люди рекомендуют 72 точки на дюйм для Интернета?",
        "answer": "Это устойчивый миф, возникший в ранних дисплеях Mac, которые имели экраны с 72 точками на дюйм. Установка для изображений разрешения 72 точек на дюйм приводила к тому, что «точки» и «пиксели» совпадали 1:1 в ранних версиях программного обеспечения для проектирования. Современные браузеры визуализируют по количеству пикселей, а не по DPI."
      },
      {
        "question": "Как оптимизировать изображения для веб-производительности?",
        "answer": "Используйте современные форматы, такие как WebP или AVIF. Измените размер до фактических размеров дисплея (не больше, чем необходимо). Сжимайте с помощью таких инструментов, как Squoosh или ImageOptim. Используйте адаптивные изображения с srcset для разных размеров экрана."
      }
    ],
    "sections": [
      {
        "id": "dpi-irrelevant",
        "title": "Почему DPI не имеет значения для Интернета",
        "paragraphs": [
          "Веб-браузеры полностью игнорируют метаданные DPI (или PPI), встроенные в файлы изображений. Когда браузер отображает изображение, он использует только размеры в пикселях. Изображение размером 1200 × 800, сохраненное с разрешением 72 DPI, визуализируется идентично тому же изображению, сохраненному с разрешением 300 DPI. Файлы могут немного отличаться по размеру метаданных, но визуальный результат один и тот же.",
          "Это распространенный источник путаницы: дизайнеры, привыкшие к рабочим процессам печати, полагают, что им следует устанавливать веб-изображения с разрешением 72 или 96 точек на дюйм. На самом деле вы можете сохранить любое значение DPI - это не повлияет на рендеринг, размер файла или качество."
        ]
      },
      {
        "id": "what-matters",
        "title": "Что действительно важно для веб-изображений",
        "list": [
          "Размеры в пикселях: подавайте изображения в том размере, в котором они будут отображаться (или в 2 раза для сетчатки). Главное изображение, отображаемое шириной 1200 пикселей CSS, должно иметь размер 1200 пикселей (стандартное) или 2400 пикселей (Retina).",
          "Формат файла: используйте WebP для широкой совместимости с отличным сжатием. Используйте AVIF для еще лучшего сжатия, если это поддерживается. Вернитесь к JPEG для фотографий и PNG для графики с прозрачностью.",
          "Сжатие: хорошо сжатое изображение WebP может быть на 25 - 35 % меньше, чем эквивалентное изображение JPEG без видимой потери качества.",
          "Отложенная загрузка: добавьте loading=\"lazy\" к изображениям ниже сгиба, чтобы отложить загрузку до тех пор, пока они не войдут в область просмотра."
        ]
      },
      {
        "id": "responsive-images",
        "title": "Адаптивные изображения для HiDPI Экраны",
        "paragraphs": [
          "На экранах Retina (2×) и высокой плотности (3×) изображениям требуется больше пикселей, чтобы они выглядели четкими. Используйте атрибут HTML srcset для поддержки различных разрешений:",
          "Браузер выбирает подходящее изображение на основе ширины окна просмотра и соотношения пикселей устройства, обеспечивая четкость изображений без потери пропускной способности на стандартных дисплеях."
        ],
        "code": "<img\n  src=\"hero-800w.webp\"\n  srcset=\"hero-800w.webp 800w,\n          hero-1200w.webp 1200w,\n          hero-2400w.webp 2400w\"\n  sizes=\"(max-width: 600px) 100vw, 1200px\"\n  alt=\"Hero image\"\n  loading=\"lazy\"\n/>"
      },
      {
        "id": "optimization-tips",
        "title": "Контрольный список оптимизации веб-изображений",
        "list": [
          "Измените размер изображений до максимального размера дисплея (не показывайте Изображение размером 4000 пикселей для контейнера размером 1200 пикселей).",
          "Используйте формат WebP или AVIF с настройкой качества 75 - 85%.",
          "Предоставьте версии 1× и 2× через srcset.",
          "Добавьте атрибуты ширины и высоты, чтобы предотвратить сдвиг макета.",
          "Используйте отложенную загрузку для изображений ниже начального viewport.",
          "Рассмотрите возможность использования CDN с автоматическим согласованием формата."
        ],
        "paragraphs": [
          "Рассчитайте точные размеры в пикселях, необходимые для любого макета, с помощью нашего калькулятора размера изображения."
        ]
      }
    ]
  }
};
