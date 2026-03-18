import type { PageContentMap } from "./types";

export const content: PageContentMap = {
  en: {
    faq: [
      {
        question: "How do I convert inches to pixels?",
        answer:
          "Multiply the number of inches by the DPI (dots per inch). For example, 10 inches at 96 DPI equals 960 pixels (10 x 96 = 960). The DPI setting determines how many pixels represent one physical inch.",
      },
      {
        question: "How many pixels is 1 inch at 96 DPI?",
        answer:
          "At 96 DPI, 1 inch equals exactly 96 pixels. This is the standard DPI for web design on Windows displays and is the most commonly used value for screen-based design work.",
      },
      {
        question: "How many pixels is 1 inch at 300 DPI?",
        answer:
          "At 300 DPI, 1 inch equals 300 pixels. This is the standard resolution for professional print output, including magazines, brochures, and high-quality photo prints.",
      },
      {
        question: "What size in pixels is an 8.5 x 11 inch document?",
        answer:
          "At 96 DPI (web), it is 816 x 1056 pixels. At 300 DPI (print), it is 2550 x 3300 pixels. The pixel dimensions scale directly with the DPI setting.",
      },
      {
        question: "Does changing DPI change the number of pixels?",
        answer:
          "When converting from inches to pixels, yes \u2014 a higher DPI produces more pixels for the same physical size. When an image already exists, changing DPI in metadata only changes its print size, not the actual pixel count.",
      },
    ],
    body: {
      heading1: "How Inch to Pixel Conversion Works",
      p1: "Converting inches to pixels is essential when translating physical design specifications into digital formats. The formula is simple:",
      formula: "Pixels = Inches x DPI",
      p2: "The DPI setting determines the resolution. Web designs typically use 96 DPI, while print projects require 300 DPI for sharp, professional output.",
      heading2: "Common Use Cases",
      li1: "Creating print-ready files: Set up a document at the correct pixel dimensions for print at 300 DPI.",
      li2: "Banner and signage: Calculate pixel requirements for large-format printing.",
      li3: "Photo cropping: Determine the pixel dimensions needed for a specific print size.",
      li4: "UI design specs: Convert physical size requirements into pixel values for screen layouts.",
      heading3: "Standard Document Sizes in Pixels",
      li5: "Letter (8.5 x 11 in) \u2014 816 x 1056 px at 96 DPI, 2550 x 3300 px at 300 DPI",
      li6: "A4 (8.27 x 11.69 in) \u2014 794 x 1123 px at 96 DPI, 2481 x 3507 px at 300 DPI",
      li7: "4 x 6 in photo \u2014 384 x 576 px at 96 DPI, 1200 x 1800 px at 300 DPI",
      li8: "5 x 7 in photo \u2014 480 x 672 px at 96 DPI, 1500 x 2100 px at 300 DPI",
      heading4: "Why Does DPI Matter for Inch-to-Pixel Conversion?",
      p3: "DPI directly determines how many pixels fit inside each physical inch. A higher DPI packs more pixels per inch, producing sharper detail at the same physical size. When you convert 8 inches at 96 DPI, the result is 768 pixels. The same 8 inches at 300 DPI yields 2,400 pixels. That difference of 1,632 pixels translates to roughly 4x more image data, which is why print files are significantly larger than web graphics. Choosing the wrong DPI produces images that are either too small (blurry when printed) or unnecessarily large (slow to load on the web).",
      heading5: "How Do You Set Up a Print-Ready Document?",
      p4: "Start by determining the final print size in inches. Multiply width and height by 300 to get the pixel dimensions for professional quality. A 5x7 inch photo print needs a 1,500 x 2,100 pixel canvas. For large posters viewed from several feet away, 150 DPI is acceptable, so a 24x36 inch poster only needs 3,600 x 5,400 pixels instead of 7,200 x 10,800. Always add 0.125 inches (bleed) to each edge when preparing files for commercial printing, as the trimming process can cut into the design area.",
      heading6: "Common Inch Measurements Converted to Pixels",
      li9: "1 inch \u2014 96 px at 96 DPI, 300 px at 300 DPI",
      li10: "2 inches \u2014 192 px at 96 DPI, 600 px at 300 DPI",
      li11: "4 inches \u2014 384 px at 96 DPI, 1,200 px at 300 DPI",
      li12: "6 inches \u2014 576 px at 96 DPI, 1,800 px at 300 DPI",
      li13: "8 inches \u2014 768 px at 96 DPI, 2,400 px at 300 DPI",
      li14: "12 inches \u2014 1,152 px at 96 DPI, 3,600 px at 300 DPI",
    },
  },
  es: {
    faq: [
      {
        question: "\u00bfC\u00f3mo convierto pulgadas a p\u00edxeles?",
        answer:
          "Multiplica la cantidad de pulgadas por los DPI (puntos por pulgada). Por ejemplo, 10 pulgadas a 96 DPI equivalen a 960 p\u00edxeles (10 x 96 = 960). El valor de DPI determina cu\u00e1ntos p\u00edxeles representan una pulgada f\u00edsica.",
      },
      {
        question: "\u00bfCu\u00e1ntos p\u00edxeles tiene 1 pulgada a 96 DPI?",
        answer:
          "A 96 DPI, 1 pulgada equivale exactamente a 96 p\u00edxeles. Este es el DPI est\u00e1ndar para dise\u00f1o web en pantallas Windows y es el valor m\u00e1s utilizado en dise\u00f1o para pantalla.",
      },
      {
        question: "\u00bfCu\u00e1ntos p\u00edxeles tiene 1 pulgada a 300 DPI?",
        answer:
          "A 300 DPI, 1 pulgada equivale a 300 p\u00edxeles. Esta es la resoluci\u00f3n est\u00e1ndar para impresi\u00f3n profesional, incluyendo revistas, folletos e impresiones fotogr\u00e1ficas de alta calidad.",
      },
      {
        question: "\u00bfQu\u00e9 tama\u00f1o en p\u00edxeles tiene un documento de 8.5 x 11 pulgadas?",
        answer:
          "A 96 DPI (web), mide 816 x 1056 p\u00edxeles. A 300 DPI (impresi\u00f3n), mide 2550 x 3300 p\u00edxeles. Las dimensiones en p\u00edxeles escalan directamente con el ajuste de DPI.",
      },
      {
        question: "\u00bfCambiar los DPI cambia la cantidad de p\u00edxeles?",
        answer:
          "Al convertir de pulgadas a p\u00edxeles, s\u00ed: un DPI m\u00e1s alto produce m\u00e1s p\u00edxeles para el mismo tama\u00f1o f\u00edsico. Cuando una imagen ya existe, cambiar los DPI en los metadatos solo cambia su tama\u00f1o de impresi\u00f3n, no la cantidad real de p\u00edxeles.",
      },
    ],
    body: {
      heading1: "C\u00f3mo funciona la conversi\u00f3n de pulgadas a p\u00edxeles",
      p1: "Convertir pulgadas a p\u00edxeles es fundamental cuando se traducen especificaciones de dise\u00f1o f\u00edsico a formatos digitales. La f\u00f3rmula es sencilla:",
      formula: "P\u00edxeles = Pulgadas x DPI",
      p2: "El ajuste de DPI determina la resoluci\u00f3n. Los dise\u00f1os web suelen usar 96 DPI, mientras que los proyectos de impresi\u00f3n requieren 300 DPI para un resultado n\u00edtido y profesional.",
      heading2: "Casos de uso comunes",
      li1: "Crear archivos listos para impresi\u00f3n: Configura un documento con las dimensiones en p\u00edxeles correctas para imprimir a 300 DPI.",
      li2: "Banners y se\u00f1al\u00e9tica: Calcula los requisitos de p\u00edxeles para impresi\u00f3n de gran formato.",
      li3: "Recorte de fotos: Determina las dimensiones en p\u00edxeles necesarias para un tama\u00f1o de impresi\u00f3n espec\u00edfico.",
      li4: "Especificaciones de dise\u00f1o UI: Convierte requisitos de tama\u00f1o f\u00edsico en valores de p\u00edxeles para maquetaciones de pantalla.",
      heading3: "Tama\u00f1os de documentos est\u00e1ndar en p\u00edxeles",
      li5: "Carta (8.5 x 11 in) \u2014 816 x 1056 px a 96 DPI, 2550 x 3300 px a 300 DPI",
      li6: "A4 (8.27 x 11.69 in) \u2014 794 x 1123 px a 96 DPI, 2481 x 3507 px a 300 DPI",
      li7: "Foto 4 x 6 in \u2014 384 x 576 px a 96 DPI, 1200 x 1800 px a 300 DPI",
      li8: "Foto 5 x 7 in \u2014 480 x 672 px a 96 DPI, 1500 x 2100 px a 300 DPI",
      heading4: "\u00bfPor qu\u00e9 importa el DPI en la conversi\u00f3n de pulgadas a p\u00edxeles?",
      p3: "El DPI determina directamente cu\u00e1ntos p\u00edxeles caben en cada pulgada f\u00edsica. Un DPI m\u00e1s alto concentra m\u00e1s p\u00edxeles por pulgada, produciendo detalles m\u00e1s n\u00edtidos al mismo tama\u00f1o f\u00edsico. Al convertir 8 pulgadas a 96 DPI, el resultado es 768 p\u00edxeles. Las mismas 8 pulgadas a 300 DPI dan 2,400 p\u00edxeles. Esa diferencia de 1,632 p\u00edxeles representa aproximadamente 4 veces m\u00e1s datos de imagen, por eso los archivos de impresi\u00f3n son significativamente m\u00e1s grandes que los gr\u00e1ficos web. Elegir el DPI incorrecto produce im\u00e1genes demasiado peque\u00f1as (borrosas al imprimir) o innecesariamente grandes (lentas de cargar en la web).",
      heading5: "\u00bfC\u00f3mo configurar un documento listo para impresi\u00f3n?",
      p4: "Comienza determinando el tama\u00f1o final de impresi\u00f3n en pulgadas. Multiplica el ancho y el alto por 300 para obtener las dimensiones en p\u00edxeles con calidad profesional. Una foto de 5x7 pulgadas necesita un lienzo de 1,500 x 2,100 p\u00edxeles. Para p\u00f3steres grandes vistos a varios metros de distancia, 150 DPI es aceptable, por lo que un p\u00f3ster de 24x36 pulgadas solo necesita 3,600 x 5,400 p\u00edxeles en lugar de 7,200 x 10,800. Siempre a\u00f1ade 0.125 pulgadas (sangrado) a cada borde al preparar archivos para impresi\u00f3n comercial, ya que el proceso de corte puede afectar el \u00e1rea de dise\u00f1o.",
      heading6: "Medidas comunes en pulgadas convertidas a p\u00edxeles",
      li9: "1 pulgada \u2014 96 px a 96 DPI, 300 px a 300 DPI",
      li10: "2 pulgadas \u2014 192 px a 96 DPI, 600 px a 300 DPI",
      li11: "4 pulgadas \u2014 384 px a 96 DPI, 1,200 px a 300 DPI",
      li12: "6 pulgadas \u2014 576 px a 96 DPI, 1,800 px a 300 DPI",
      li13: "8 pulgadas \u2014 768 px a 96 DPI, 2,400 px a 300 DPI",
      li14: "12 pulgadas \u2014 1,152 px a 96 DPI, 3,600 px a 300 DPI",
    },
  },
  fr: {
    faq: [
      {
        question: "Comment convertir des pouces en pixels ?",
        answer:
          "Multipliez le nombre de pouces par le DPI (points par pouce). Par exemple, 10 pouces \u00e0 96 DPI donnent 960 pixels (10 x 96 = 960). Le r\u00e9glage DPI d\u00e9termine le nombre de pixels repr\u00e9sentant un pouce physique.",
      },
      {
        question: "Combien de pixels fait 1 pouce \u00e0 96 DPI ?",
        answer:
          "\u00c0 96 DPI, 1 pouce \u00e9quivaut exactement \u00e0 96 pixels. C\u2019est le DPI standard pour la conception web sur les \u00e9crans Windows et la valeur la plus courante pour le travail de design \u00e0 l\u2019\u00e9cran.",
      },
      {
        question: "Combien de pixels fait 1 pouce \u00e0 300 DPI ?",
        answer:
          "\u00c0 300 DPI, 1 pouce \u00e9quivaut \u00e0 300 pixels. C\u2019est la r\u00e9solution standard pour l\u2019impression professionnelle, y compris les magazines, brochures et tirages photo haute qualit\u00e9.",
      },
      {
        question: "Quelle est la taille en pixels d\u2019un document de 8.5 x 11 pouces ?",
        answer:
          "\u00c0 96 DPI (web), il mesure 816 x 1056 pixels. \u00c0 300 DPI (impression), il mesure 2550 x 3300 pixels. Les dimensions en pixels \u00e9voluent proportionnellement au r\u00e9glage DPI.",
      },
      {
        question: "Changer le DPI modifie-t-il le nombre de pixels ?",
        answer:
          "Lors de la conversion de pouces en pixels, oui \u2014 un DPI plus \u00e9lev\u00e9 produit plus de pixels pour la m\u00eame taille physique. Pour une image existante, modifier le DPI dans les m\u00e9tadonn\u00e9es ne change que sa taille d\u2019impression, pas le nombre r\u00e9el de pixels.",
      },
    ],
    body: {
      heading1: "Comment fonctionne la conversion pouce-pixel",
      p1: "Convertir des pouces en pixels est essentiel pour transposer des sp\u00e9cifications de design physiques en formats num\u00e9riques. La formule est simple :",
      formula: "Pixels = Pouces x DPI",
      p2: "Le r\u00e9glage DPI d\u00e9termine la r\u00e9solution. Les designs web utilisent g\u00e9n\u00e9ralement 96 DPI, tandis que les projets d\u2019impression n\u00e9cessitent 300 DPI pour un rendu net et professionnel.",
      heading2: "Cas d\u2019utilisation courants",
      li1: "Cr\u00e9ation de fichiers pr\u00eats \u00e0 imprimer : Configurez un document aux dimensions en pixels correctes pour l\u2019impression \u00e0 300 DPI.",
      li2: "Banni\u00e8res et signal\u00e9tique : Calculez les besoins en pixels pour l\u2019impression grand format.",
      li3: "Recadrage photo : D\u00e9terminez les dimensions en pixels n\u00e9cessaires pour une taille d\u2019impression sp\u00e9cifique.",
      li4: "Sp\u00e9cifications de design UI : Convertissez les exigences de taille physique en valeurs de pixels pour les mises en page \u00e9cran.",
      heading3: "Tailles de documents standard en pixels",
      li5: "Letter (8.5 x 11 in) \u2014 816 x 1056 px \u00e0 96 DPI, 2550 x 3300 px \u00e0 300 DPI",
      li6: "A4 (8.27 x 11.69 in) \u2014 794 x 1123 px \u00e0 96 DPI, 2481 x 3507 px \u00e0 300 DPI",
      li7: "Photo 4 x 6 in \u2014 384 x 576 px \u00e0 96 DPI, 1200 x 1800 px \u00e0 300 DPI",
      li8: "Photo 5 x 7 in \u2014 480 x 672 px \u00e0 96 DPI, 1500 x 2100 px \u00e0 300 DPI",
      heading4: "Pourquoi le DPI est-il important pour la conversion pouce-pixel ?",
      p3: "Le DPI d\u00e9termine directement combien de pixels tiennent dans chaque pouce physique. Un DPI plus \u00e9lev\u00e9 concentre davantage de pixels par pouce, produisant des d\u00e9tails plus nets \u00e0 la m\u00eame taille physique. En convertissant 8 pouces \u00e0 96 DPI, le r\u00e9sultat est 768 pixels. Les m\u00eames 8 pouces \u00e0 300 DPI donnent 2,400 pixels. Cette diff\u00e9rence de 1,632 pixels repr\u00e9sente environ 4 fois plus de donn\u00e9es d\u2019image, c\u2019est pourquoi les fichiers d\u2019impression sont nettement plus volumineux que les graphiques web. Choisir le mauvais DPI produit des images trop petites (floues \u00e0 l\u2019impression) ou inutilement grandes (lentes \u00e0 charger sur le web).",
      heading5: "Comment pr\u00e9parer un document pr\u00eat \u00e0 imprimer ?",
      p4: "Commencez par d\u00e9terminer la taille finale d\u2019impression en pouces. Multipliez la largeur et la hauteur par 300 pour obtenir les dimensions en pixels de qualit\u00e9 professionnelle. Un tirage photo de 5x7 pouces n\u00e9cessite un canevas de 1,500 x 2,100 pixels. Pour les grandes affiches vues \u00e0 plusieurs m\u00e8tres, 150 DPI est acceptable, donc une affiche de 24x36 pouces ne n\u00e9cessite que 3,600 x 5,400 pixels au lieu de 7,200 x 10,800. Ajoutez toujours 0.125 pouces (fond perdu) \u00e0 chaque bord lors de la pr\u00e9paration de fichiers pour l\u2019impression commerciale, car le processus de d\u00e9coupe peut empi\u00e9ter sur la zone de design.",
      heading6: "Mesures courantes en pouces converties en pixels",
      li9: "1 pouce \u2014 96 px \u00e0 96 DPI, 300 px \u00e0 300 DPI",
      li10: "2 pouces \u2014 192 px \u00e0 96 DPI, 600 px \u00e0 300 DPI",
      li11: "4 pouces \u2014 384 px \u00e0 96 DPI, 1,200 px \u00e0 300 DPI",
      li12: "6 pouces \u2014 576 px \u00e0 96 DPI, 1,800 px \u00e0 300 DPI",
      li13: "8 pouces \u2014 768 px \u00e0 96 DPI, 2,400 px \u00e0 300 DPI",
      li14: "12 pouces \u2014 1,152 px \u00e0 96 DPI, 3,600 px \u00e0 300 DPI",
    },
  },
  de: {
    faq: [
      {
        question: "Wie rechne ich Zoll in Pixel um?",
        answer:
          "Multiplizieren Sie die Anzahl der Zoll mit dem DPI-Wert (Punkte pro Zoll). Beispiel: 10 Zoll bei 96 DPI ergeben 960 Pixel (10 x 96 = 960). Der DPI-Wert bestimmt, wie viele Pixel einem physischen Zoll entsprechen.",
      },
      {
        question: "Wie viele Pixel hat 1 Zoll bei 96 DPI?",
        answer:
          "Bei 96 DPI entspricht 1 Zoll genau 96 Pixeln. Dies ist der Standard-DPI f\u00fcr Webdesign auf Windows-Bildschirmen und der am h\u00e4ufigsten verwendete Wert f\u00fcr bildschirmbasierte Gestaltungsarbeit.",
      },
      {
        question: "Wie viele Pixel hat 1 Zoll bei 300 DPI?",
        answer:
          "Bei 300 DPI entspricht 1 Zoll 300 Pixeln. Dies ist die Standardaufl\u00f6sung f\u00fcr professionellen Druck, einschlie\u00dflich Magazine, Brosch\u00fcren und hochwertiger Fotodrucke.",
      },
      {
        question: "Welche Gr\u00f6\u00dfe in Pixeln hat ein 8.5 x 11 Zoll Dokument?",
        answer:
          "Bei 96 DPI (Web) betr\u00e4gt es 816 x 1056 Pixel. Bei 300 DPI (Druck) betr\u00e4gt es 2550 x 3300 Pixel. Die Pixelabmessungen skalieren direkt mit der DPI-Einstellung.",
      },
      {
        question: "\u00c4ndert eine DPI-\u00c4nderung die Pixelanzahl?",
        answer:
          "Bei der Umrechnung von Zoll in Pixel ja \u2014 ein h\u00f6herer DPI-Wert erzeugt mehr Pixel bei gleicher physischer Gr\u00f6\u00dfe. Bei einem bereits vorhandenen Bild \u00e4ndert eine DPI-\u00c4nderung in den Metadaten nur die Druckgr\u00f6\u00dfe, nicht die tats\u00e4chliche Pixelanzahl.",
      },
    ],
    body: {
      heading1: "So funktioniert die Umrechnung von Zoll in Pixel",
      p1: "Die Umrechnung von Zoll in Pixel ist unerl\u00e4sslich, wenn physische Designvorgaben in digitale Formate \u00fcbertragen werden. Die Formel ist einfach:",
      formula: "Pixel = Zoll x DPI",
      p2: "Die DPI-Einstellung bestimmt die Aufl\u00f6sung. Webdesigns verwenden typischerweise 96 DPI, w\u00e4hrend Druckprojekte 300 DPI f\u00fcr scharfe, professionelle Ergebnisse ben\u00f6tigen.",
      heading2: "H\u00e4ufige Anwendungsf\u00e4lle",
      li1: "Druckfertige Dateien erstellen: Richten Sie ein Dokument mit den korrekten Pixelabmessungen f\u00fcr den Druck bei 300 DPI ein.",
      li2: "Banner und Beschilderung: Berechnen Sie die Pixelanforderungen f\u00fcr Gro\u00dfformatdruck.",
      li3: "Fotozuschnitt: Bestimmen Sie die Pixelabmessungen f\u00fcr eine bestimmte Druckgr\u00f6\u00dfe.",
      li4: "UI-Design-Spezifikationen: Rechnen Sie physische Gr\u00f6\u00dfenanforderungen in Pixelwerte f\u00fcr Bildschirmlayouts um.",
      heading3: "Standard-Dokumentgr\u00f6\u00dfen in Pixeln",
      li5: "Letter (8.5 x 11 in) \u2014 816 x 1056 px bei 96 DPI, 2550 x 3300 px bei 300 DPI",
      li6: "A4 (8.27 x 11.69 in) \u2014 794 x 1123 px bei 96 DPI, 2481 x 3507 px bei 300 DPI",
      li7: "Foto 4 x 6 in \u2014 384 x 576 px bei 96 DPI, 1200 x 1800 px bei 300 DPI",
      li8: "Foto 5 x 7 in \u2014 480 x 672 px bei 96 DPI, 1500 x 2100 px bei 300 DPI",
      heading4: "Warum ist DPI bei der Zoll-zu-Pixel-Umrechnung wichtig?",
      p3: "DPI bestimmt direkt, wie viele Pixel in jeden physischen Zoll passen. Ein h\u00f6herer DPI-Wert packt mehr Pixel pro Zoll, was bei gleicher physischer Gr\u00f6\u00dfe sch\u00e4rfere Details erzeugt. Bei der Umrechnung von 8 Zoll bei 96 DPI ergibt sich 768 Pixel. Dieselben 8 Zoll bei 300 DPI ergeben 2.400 Pixel. Dieser Unterschied von 1.632 Pixeln bedeutet etwa 4-mal mehr Bilddaten, weshalb Druckdateien deutlich gr\u00f6\u00dfer sind als Webgrafiken. Der falsche DPI-Wert erzeugt Bilder, die entweder zu klein (beim Drucken unscharf) oder unn\u00f6tig gro\u00df (langsam im Web) sind.",
      heading5: "Wie richtet man ein druckfertiges Dokument ein?",
      p4: "Bestimmen Sie zun\u00e4chst die endg\u00fcltige Druckgr\u00f6\u00dfe in Zoll. Multiplizieren Sie Breite und H\u00f6he mit 300, um die Pixelabmessungen in professioneller Qualit\u00e4t zu erhalten. Ein Fotodruck von 5x7 Zoll ben\u00f6tigt eine Leinwand von 1.500 x 2.100 Pixeln. F\u00fcr gro\u00dfe Poster, die aus einigen Metern Entfernung betrachtet werden, reichen 150 DPI aus, sodass ein 24x36-Zoll-Poster nur 3.600 x 5.400 Pixel statt 7.200 x 10.800 ben\u00f6tigt. F\u00fcgen Sie beim Erstellen von Dateien f\u00fcr den kommerziellen Druck immer 0.125 Zoll (Beschnitt) an jeder Kante hinzu, da der Schneideprozess in den Designbereich schneiden kann.",
      heading6: "G\u00e4ngige Zollma\u00dfe in Pixel umgerechnet",
      li9: "1 Zoll \u2014 96 px bei 96 DPI, 300 px bei 300 DPI",
      li10: "2 Zoll \u2014 192 px bei 96 DPI, 600 px bei 300 DPI",
      li11: "4 Zoll \u2014 384 px bei 96 DPI, 1.200 px bei 300 DPI",
      li12: "6 Zoll \u2014 576 px bei 96 DPI, 1.800 px bei 300 DPI",
      li13: "8 Zoll \u2014 768 px bei 96 DPI, 2.400 px bei 300 DPI",
      li14: "12 Zoll \u2014 1.152 px bei 96 DPI, 3.600 px bei 300 DPI",
    },
  },
  pt: {
    faq: [
      {
        question: "Como converter polegadas em pixels?",
        answer:
          "Multiplique o n\u00famero de polegadas pelo DPI (pontos por polegada). Por exemplo, 10 polegadas a 96 DPI equivalem a 960 pixels (10 x 96 = 960). O DPI determina quantos pixels representam uma polegada f\u00edsica.",
      },
      {
        question: "Quantos pixels tem 1 polegada a 96 DPI?",
        answer:
          "A 96 DPI, 1 polegada equivale exatamente a 96 pixels. Este \u00e9 o DPI padr\u00e3o para design web em telas Windows e o valor mais usado para trabalhos de design em tela.",
      },
      {
        question: "Quantos pixels tem 1 polegada a 300 DPI?",
        answer:
          "A 300 DPI, 1 polegada equivale a 300 pixels. Esta \u00e9 a resolu\u00e7\u00e3o padr\u00e3o para impress\u00e3o profissional, incluindo revistas, folhetos e impress\u00f5es fotogr\u00e1ficas de alta qualidade.",
      },
      {
        question: "Qual o tamanho em pixels de um documento de 8.5 x 11 polegadas?",
        answer:
          "A 96 DPI (web), mede 816 x 1056 pixels. A 300 DPI (impress\u00e3o), mede 2550 x 3300 pixels. As dimens\u00f5es em pixels escalam diretamente com a configura\u00e7\u00e3o de DPI.",
      },
      {
        question: "Alterar o DPI muda a quantidade de pixels?",
        answer:
          "Ao converter polegadas em pixels, sim \u2014 um DPI mais alto gera mais pixels para o mesmo tamanho f\u00edsico. Quando uma imagem j\u00e1 existe, alterar o DPI nos metadados s\u00f3 muda o tamanho de impress\u00e3o, n\u00e3o a contagem real de pixels.",
      },
    ],
    body: {
      heading1: "Como funciona a convers\u00e3o de polegadas para pixels",
      p1: "Converter polegadas em pixels \u00e9 essencial ao traduzir especifica\u00e7\u00f5es de design f\u00edsicas para formatos digitais. A f\u00f3rmula \u00e9 simples:",
      formula: "Pixels = Polegadas x DPI",
      p2: "A configura\u00e7\u00e3o de DPI determina a resolu\u00e7\u00e3o. Designs para web geralmente usam 96 DPI, enquanto projetos de impress\u00e3o exigem 300 DPI para resultados n\u00edtidos e profissionais.",
      heading2: "Casos de uso comuns",
      li1: "Criar arquivos prontos para impress\u00e3o: Configure um documento com as dimens\u00f5es em pixels corretas para impress\u00e3o a 300 DPI.",
      li2: "Banners e sinaliza\u00e7\u00e3o: Calcule os requisitos de pixels para impress\u00e3o de grande formato.",
      li3: "Recorte de fotos: Determine as dimens\u00f5es em pixels necess\u00e1rias para um tamanho de impress\u00e3o espec\u00edfico.",
      li4: "Especifica\u00e7\u00f5es de design UI: Converta requisitos de tamanho f\u00edsico em valores de pixels para layouts de tela.",
      heading3: "Tamanhos padr\u00e3o de documentos em pixels",
      li5: "Carta (8.5 x 11 in) \u2014 816 x 1056 px a 96 DPI, 2550 x 3300 px a 300 DPI",
      li6: "A4 (8.27 x 11.69 in) \u2014 794 x 1123 px a 96 DPI, 2481 x 3507 px a 300 DPI",
      li7: "Foto 4 x 6 in \u2014 384 x 576 px a 96 DPI, 1200 x 1800 px a 300 DPI",
      li8: "Foto 5 x 7 in \u2014 480 x 672 px a 96 DPI, 1500 x 2100 px a 300 DPI",
      heading4: "Por que o DPI importa na convers\u00e3o de polegadas para pixels?",
      p3: "O DPI determina diretamente quantos pixels cabem em cada polegada f\u00edsica. Um DPI mais alto concentra mais pixels por polegada, produzindo detalhes mais n\u00edtidos no mesmo tamanho f\u00edsico. Ao converter 8 polegadas a 96 DPI, o resultado \u00e9 768 pixels. As mesmas 8 polegadas a 300 DPI resultam em 2.400 pixels. Essa diferen\u00e7a de 1.632 pixels representa aproximadamente 4x mais dados de imagem, por isso arquivos de impress\u00e3o s\u00e3o significativamente maiores que gr\u00e1ficos web. Escolher o DPI errado produz imagens muito pequenas (borradas ao imprimir) ou desnecessariamente grandes (lentas para carregar na web).",
      heading5: "Como configurar um documento pronto para impress\u00e3o?",
      p4: "Comece determinando o tamanho final de impress\u00e3o em polegadas. Multiplique largura e altura por 300 para obter as dimens\u00f5es em pixels com qualidade profissional. Uma foto de 5x7 polegadas precisa de uma tela de 1.500 x 2.100 pixels. Para p\u00f4steres grandes vistos a v\u00e1rios metros de dist\u00e2ncia, 150 DPI \u00e9 aceit\u00e1vel, ent\u00e3o um p\u00f4ster de 24x36 polegadas s\u00f3 precisa de 3.600 x 5.400 pixels em vez de 7.200 x 10.800. Sempre adicione 0.125 polegadas (sangria) a cada borda ao preparar arquivos para impress\u00e3o comercial, pois o processo de corte pode atingir a \u00e1rea de design.",
      heading6: "Medidas comuns em polegadas convertidas para pixels",
      li9: "1 polegada \u2014 96 px a 96 DPI, 300 px a 300 DPI",
      li10: "2 polegadas \u2014 192 px a 96 DPI, 600 px a 300 DPI",
      li11: "4 polegadas \u2014 384 px a 96 DPI, 1.200 px a 300 DPI",
      li12: "6 polegadas \u2014 576 px a 96 DPI, 1.800 px a 300 DPI",
      li13: "8 polegadas \u2014 768 px a 96 DPI, 2.400 px a 300 DPI",
      li14: "12 polegadas \u2014 1.152 px a 96 DPI, 3.600 px a 300 DPI",
    },
  },
  hi: {
    faq: [
      {
        question: "\u0907\u0902\u091a \u0915\u094b \u092a\u093f\u0915\u094d\u0938\u0932 \u092e\u0947\u0902 \u0915\u0948\u0938\u0947 \u092c\u0926\u0932\u0947\u0902?",
        answer:
          "\u0907\u0902\u091a \u0915\u0940 \u0938\u0902\u0916\u094d\u092f\u093e \u0915\u094b DPI (\u0921\u0949\u091f\u094d\u0938 \u092a\u094d\u0930\u0924\u093f \u0907\u0902\u091a) \u0938\u0947 \u0917\u0941\u0923\u093e \u0915\u0930\u0947\u0902\u0964 \u0909\u0926\u093e\u0939\u0930\u0923 \u0915\u0947 \u0932\u093f\u090f, 96 DPI \u092a\u0930 10 \u0907\u0902\u091a = 960 \u092a\u093f\u0915\u094d\u0938\u0932 (10 x 96 = 960)\u0964 DPI \u0938\u0947\u091f\u093f\u0902\u0917 \u092f\u0939 \u0924\u092f \u0915\u0930\u0924\u0940 \u0939\u0948 \u0915\u093f \u090f\u0915 \u092d\u094c\u0924\u093f\u0915 \u0907\u0902\u091a \u0915\u094b \u0915\u093f\u0924\u0928\u0947 \u092a\u093f\u0915\u094d\u0938\u0932 \u0926\u0930\u094d\u0936\u093e\u0924\u0947 \u0939\u0948\u0902\u0964",
      },
      {
        question: "96 DPI \u092a\u0930 1 \u0907\u0902\u091a \u092e\u0947\u0902 \u0915\u093f\u0924\u0928\u0947 \u092a\u093f\u0915\u094d\u0938\u0932 \u0939\u094b\u0924\u0947 \u0939\u0948\u0902?",
        answer:
          "96 DPI \u092a\u0930, 1 \u0907\u0902\u091a \u092c\u093f\u0932\u0915\u0941\u0932 96 \u092a\u093f\u0915\u094d\u0938\u0932 \u0915\u0947 \u092c\u0930\u093e\u092c\u0930 \u0939\u094b\u0924\u093e \u0939\u0948\u0964 \u092f\u0939 Windows \u0921\u093f\u0938\u094d\u092a\u094d\u0932\u0947 \u092a\u0930 \u0935\u0947\u092c \u0921\u093f\u091c\u093c\u093e\u0907\u0928 \u0915\u0947 \u0932\u093f\u090f \u092e\u093e\u0928\u0915 DPI \u0939\u0948 \u0914\u0930 \u0938\u094d\u0915\u094d\u0930\u0940\u0928-\u0906\u0927\u093e\u0930\u093f\u0924 \u0921\u093f\u091c\u093c\u093e\u0907\u0928 \u0915\u093e\u0930\u094d\u092f \u0915\u0947 \u0932\u093f\u090f \u0938\u092c\u0938\u0947 \u0905\u0927\u093f\u0915 \u0909\u092a\u092f\u094b\u0917 \u0915\u093f\u092f\u093e \u091c\u093e\u0928\u0947 \u0935\u093e\u0932\u093e \u092e\u093e\u0928 \u0939\u0948\u0964",
      },
      {
        question: "300 DPI \u092a\u0930 1 \u0907\u0902\u091a \u092e\u0947\u0902 \u0915\u093f\u0924\u0928\u0947 \u092a\u093f\u0915\u094d\u0938\u0932 \u0939\u094b\u0924\u0947 \u0939\u0948\u0902?",
        answer:
          "300 DPI \u092a\u0930, 1 \u0907\u0902\u091a 300 \u092a\u093f\u0915\u094d\u0938\u0932 \u0915\u0947 \u092c\u0930\u093e\u092c\u0930 \u0939\u094b\u0924\u093e \u0939\u0948\u0964 \u092f\u0939 \u092a\u0947\u0936\u0947\u0935\u0930 \u092a\u094d\u0930\u093f\u0902\u091f \u0915\u0947 \u0932\u093f\u090f \u092e\u093e\u0928\u0915 \u0930\u0947\u091c\u093c\u0949\u0932\u094d\u092f\u0942\u0936\u0928 \u0939\u0948, \u091c\u093f\u0938\u092e\u0947\u0902 \u092a\u0924\u094d\u0930\u093f\u0915\u093e\u090f\u0902, \u092c\u094d\u0930\u094b\u0936\u0930 \u0914\u0930 \u0909\u091a\u094d\u091a \u0917\u0941\u0923\u0935\u0924\u094d\u0924\u093e \u0935\u093e\u0932\u0947 \u092b\u094b\u091f\u094b \u092a\u094d\u0930\u093f\u0902\u091f \u0936\u093e\u092e\u093f\u0932 \u0939\u0948\u0902\u0964",
      },
      {
        question: "8.5 x 11 \u0907\u0902\u091a \u0915\u0947 \u0926\u0938\u094d\u0924\u093e\u0935\u0947\u091c\u093c \u0915\u093e \u092a\u093f\u0915\u094d\u0938\u0932 \u092e\u0947\u0902 \u0906\u0915\u093e\u0930 \u0915\u094d\u092f\u093e \u0939\u0948?",
        answer:
          "96 DPI (\u0935\u0947\u092c) \u092a\u0930, \u092f\u0939 816 x 1056 \u092a\u093f\u0915\u094d\u0938\u0932 \u0939\u0948\u0964 300 DPI (\u092a\u094d\u0930\u093f\u0902\u091f) \u092a\u0930, \u092f\u0939 2550 x 3300 \u092a\u093f\u0915\u094d\u0938\u0932 \u0939\u0948\u0964 \u092a\u093f\u0915\u094d\u0938\u0932 \u0906\u092f\u093e\u092e DPI \u0938\u0947\u091f\u093f\u0902\u0917 \u0915\u0947 \u0938\u093e\u0925 \u0938\u0940\u0927\u0947 \u0938\u094d\u0915\u0947\u0932 \u0939\u094b\u0924\u0947 \u0939\u0948\u0902\u0964",
      },
      {
        question: "\u0915\u094d\u092f\u093e DPI \u092c\u0926\u0932\u0928\u0947 \u0938\u0947 \u092a\u093f\u0915\u094d\u0938\u0932 \u0915\u0940 \u0938\u0902\u0916\u094d\u092f\u093e \u092c\u0926\u0932\u0924\u0940 \u0939\u0948?",
        answer:
          "\u0907\u0902\u091a \u0938\u0947 \u092a\u093f\u0915\u094d\u0938\u0932 \u092e\u0947\u0902 \u0915\u0928\u094d\u0935\u0930\u094d\u091f \u0915\u0930\u0924\u0947 \u0938\u092e\u092f, \u0939\u093e\u0901 \u2014 \u0909\u091a\u094d\u091a DPI \u0938\u092e\u093e\u0928 \u092d\u094c\u0924\u093f\u0915 \u0906\u0915\u093e\u0930 \u0915\u0947 \u0932\u093f\u090f \u0905\u0927\u093f\u0915 \u092a\u093f\u0915\u094d\u0938\u0932 \u092c\u0928\u093e\u0924\u093e \u0939\u0948\u0964 \u091c\u092c \u0915\u094b\u0908 \u0907\u092e\u0947\u091c \u092a\u0939\u0932\u0947 \u0938\u0947 \u092e\u094c\u091c\u0942\u0926 \u0939\u0948, \u0924\u094b \u092e\u0947\u091f\u093e\u0921\u0947\u091f\u093e \u092e\u0947\u0902 DPI \u092c\u0926\u0932\u0928\u0947 \u0938\u0947 \u0915\u0947\u0935\u0932 \u092a\u094d\u0930\u093f\u0902\u091f \u0906\u0915\u093e\u0930 \u092c\u0926\u0932\u0924\u093e \u0939\u0948, \u0935\u093e\u0938\u094d\u0924\u0935\u093f\u0915 \u092a\u093f\u0915\u094d\u0938\u0932 \u0938\u0902\u0916\u094d\u092f\u093e \u0928\u0939\u0940\u0902\u0964",
      },
    ],
    body: {
      heading1: "\u0907\u0902\u091a \u0938\u0947 \u092a\u093f\u0915\u094d\u0938\u0932 \u0915\u0928\u094d\u0935\u0930\u094d\u091c\u0928 \u0915\u0948\u0938\u0947 \u0915\u093e\u092e \u0915\u0930\u0924\u093e \u0939\u0948",
      p1: "\u092d\u094c\u0924\u093f\u0915 \u0921\u093f\u091c\u093c\u093e\u0907\u0928 \u0935\u093f\u0936\u0947\u0937\u0924\u093e\u0913\u0902 \u0915\u094b \u0921\u093f\u091c\u093f\u091f\u0932 \u092b\u0949\u0930\u094d\u092e\u0947\u091f \u092e\u0947\u0902 \u092c\u0926\u0932\u0924\u0947 \u0938\u092e\u092f \u0907\u0902\u091a \u0915\u094b \u092a\u093f\u0915\u094d\u0938\u0932 \u092e\u0947\u0902 \u0915\u0928\u094d\u0935\u0930\u094d\u091f \u0915\u0930\u0928\u093e \u091c\u093c\u0930\u0942\u0930\u0940 \u0939\u0948\u0964 \u0938\u0942\u0924\u094d\u0930 \u0938\u0930\u0932 \u0939\u0948:",
      formula: "\u092a\u093f\u0915\u094d\u0938\u0932 = \u0907\u0902\u091a x DPI",
      p2: "DPI \u0938\u0947\u091f\u093f\u0902\u0917 \u0930\u0947\u091c\u093c\u0949\u0932\u094d\u092f\u0942\u0936\u0928 \u0924\u092f \u0915\u0930\u0924\u0940 \u0939\u0948\u0964 \u0935\u0947\u092c \u0921\u093f\u091c\u093c\u093e\u0907\u0928 \u0906\u092e\u0924\u094c\u0930 \u092a\u0930 96 DPI \u0915\u093e \u0909\u092a\u092f\u094b\u0917 \u0915\u0930\u0924\u0947 \u0939\u0948\u0902, \u091c\u092c\u0915\u093f \u092a\u094d\u0930\u093f\u0902\u091f \u092a\u094d\u0930\u094b\u091c\u0947\u0915\u094d\u091f\u094d\u0938 \u0915\u094b \u0938\u094d\u092a\u0937\u094d\u091f \u0914\u0930 \u092a\u0947\u0936\u0947\u0935\u0930 \u0928\u0924\u0940\u091c\u0947 \u0915\u0947 \u0932\u093f\u090f 300 DPI \u0915\u0940 \u0906\u0935\u0936\u094d\u092f\u0915\u0924\u093e \u0939\u094b\u0924\u0940 \u0939\u0948\u0964",
      heading2: "\u0938\u093e\u092e\u093e\u0928\u094d\u092f \u0909\u092a\u092f\u094b\u0917 \u0915\u0947 \u092e\u093e\u092e\u0932\u0947",
      li1: "\u092a\u094d\u0930\u093f\u0902\u091f-\u0930\u0947\u0921\u0940 \u092b\u093e\u0907\u0932\u0947\u0902 \u092c\u0928\u093e\u0928\u093e: 300 DPI \u092a\u0930 \u092a\u094d\u0930\u093f\u0902\u091f \u0915\u0947 \u0932\u093f\u090f \u0938\u0939\u0940 \u092a\u093f\u0915\u094d\u0938\u0932 \u0906\u092f\u093e\u092e\u094b\u0902 \u0915\u0947 \u0938\u093e\u0925 \u0926\u0938\u094d\u0924\u093e\u0935\u0947\u091c\u093c \u0938\u0947\u091f \u0915\u0930\u0947\u0902\u0964",
      li2: "\u092c\u0948\u0928\u0930 \u0914\u0930 \u0938\u093e\u0907\u0928\u0947\u091c: \u092c\u0921\u093c\u0947 \u092b\u0949\u0930\u094d\u092e\u0947\u091f \u0915\u0940 \u092a\u094d\u0930\u093f\u0902\u091f\u093f\u0902\u0917 \u0915\u0947 \u0932\u093f\u090f \u092a\u093f\u0915\u094d\u0938\u0932 \u0906\u0935\u0936\u094d\u092f\u0915\u0924\u093e\u0913\u0902 \u0915\u0940 \u0917\u0923\u0928\u093e \u0915\u0930\u0947\u0902\u0964",
      li3: "\u092b\u094b\u091f\u094b \u0915\u094d\u0930\u0949\u092a\u093f\u0902\u0917: \u0915\u093f\u0938\u0940 \u0935\u093f\u0936\u093f\u0937\u094d\u091f \u092a\u094d\u0930\u093f\u0902\u091f \u0906\u0915\u093e\u0930 \u0915\u0947 \u0932\u093f\u090f \u0906\u0935\u0936\u094d\u092f\u0915 \u092a\u093f\u0915\u094d\u0938\u0932 \u0906\u092f\u093e\u092e \u0928\u093f\u0930\u094d\u0927\u093e\u0930\u093f\u0924 \u0915\u0930\u0947\u0902\u0964",
      li4: "UI \u0921\u093f\u091c\u093c\u093e\u0907\u0928 \u0938\u094d\u092a\u0947\u0938\u093f\u092b\u093f\u0915\u0947\u0936\u0928: \u0938\u094d\u0915\u094d\u0930\u0940\u0928 \u0932\u0947\u0906\u0909\u091f \u0915\u0947 \u0932\u093f\u090f \u092d\u094c\u0924\u093f\u0915 \u0906\u0915\u093e\u0930 \u0906\u0935\u0936\u094d\u092f\u0915\u0924\u093e\u0913\u0902 \u0915\u094b \u092a\u093f\u0915\u094d\u0938\u0932 \u092e\u093e\u0928\u094b\u0902 \u092e\u0947\u0902 \u092c\u0926\u0932\u0947\u0902\u0964",
      heading3: "\u092e\u093e\u0928\u0915 \u0926\u0938\u094d\u0924\u093e\u0935\u0947\u091c\u093c \u0906\u0915\u093e\u0930 \u092a\u093f\u0915\u094d\u0938\u0932 \u092e\u0947\u0902",
      li5: "Letter (8.5 x 11 in) \u2014 96 DPI \u092a\u0930 816 x 1056 px, 300 DPI \u092a\u0930 2550 x 3300 px",
      li6: "A4 (8.27 x 11.69 in) \u2014 96 DPI \u092a\u0930 794 x 1123 px, 300 DPI \u092a\u0930 2481 x 3507 px",
      li7: "4 x 6 in \u092b\u094b\u091f\u094b \u2014 96 DPI \u092a\u0930 384 x 576 px, 300 DPI \u092a\u0930 1200 x 1800 px",
      li8: "5 x 7 in \u092b\u094b\u091f\u094b \u2014 96 DPI \u092a\u0930 480 x 672 px, 300 DPI \u092a\u0930 1500 x 2100 px",
      heading4: "\u0907\u0902\u091a-\u0938\u0947-\u092a\u093f\u0915\u094d\u0938\u0932 \u0915\u0928\u094d\u0935\u0930\u094d\u091c\u0928 \u092e\u0947\u0902 DPI \u0915\u094d\u092f\u094b\u0902 \u092e\u0939\u0924\u094d\u0935\u092a\u0942\u0930\u094d\u0923 \u0939\u0948?",
      p3: "DPI \u0938\u0940\u0927\u0947 \u0924\u092f \u0915\u0930\u0924\u093e \u0939\u0948 \u0915\u093f \u092a\u094d\u0930\u0924\u094d\u092f\u0947\u0915 \u092d\u094c\u0924\u093f\u0915 \u0907\u0902\u091a \u092e\u0947\u0902 \u0915\u093f\u0924\u0928\u0947 \u092a\u093f\u0915\u094d\u0938\u0932 \u0938\u092e\u093e\u0924\u0947 \u0939\u0948\u0902\u0964 \u0909\u091a\u094d\u091a DPI \u092a\u094d\u0930\u0924\u093f \u0907\u0902\u091a \u0905\u0927\u093f\u0915 \u092a\u093f\u0915\u094d\u0938\u0932 \u092a\u0948\u0915 \u0915\u0930\u0924\u093e \u0939\u0948, \u091c\u094b \u0938\u092e\u093e\u0928 \u092d\u094c\u0924\u093f\u0915 \u0906\u0915\u093e\u0930 \u092e\u0947\u0902 \u0924\u0940\u0915\u094d\u0937\u094d\u0923 \u0935\u093f\u0935\u0930\u0923 \u0926\u0947\u0924\u093e \u0939\u0948\u0964 96 DPI \u092a\u0930 8 \u0907\u0902\u091a \u0915\u0928\u094d\u0935\u0930\u094d\u091f \u0915\u0930\u0928\u0947 \u092a\u0930 \u092a\u0930\u093f\u0923\u093e\u092e 768 \u092a\u093f\u0915\u094d\u0938\u0932 \u0939\u0948\u0964 \u0935\u0939\u0940 8 \u0907\u0902\u091a 300 DPI \u092a\u0930 2,400 \u092a\u093f\u0915\u094d\u0938\u0932 \u0926\u0947\u0924\u0947 \u0939\u0948\u0902\u0964 1,632 \u092a\u093f\u0915\u094d\u0938\u0932 \u0915\u093e \u092f\u0939 \u0905\u0902\u0924\u0930 \u0932\u0917\u092d\u0917 4 \u0917\u0941\u0928\u093e \u0905\u0927\u093f\u0915 \u0907\u092e\u0947\u091c \u0921\u0947\u091f\u093e \u0926\u0930\u094d\u0936\u093e\u0924\u093e \u0939\u0948, \u0907\u0938\u0940\u0932\u093f\u090f \u092a\u094d\u0930\u093f\u0902\u091f \u092b\u093e\u0907\u0932\u0947\u0902 \u0935\u0947\u092c \u0917\u094d\u0930\u093e\u092b\u093f\u0915\u094d\u0938 \u0938\u0947 \u0915\u093e\u092b\u0940 \u092c\u0921\u093c\u0940 \u0939\u094b\u0924\u0940 \u0939\u0948\u0902\u0964 \u0917\u0932\u0924 DPI \u091a\u0941\u0928\u0928\u0947 \u0938\u0947 \u0907\u092e\u0947\u091c \u092f\u093e \u0924\u094b \u092c\u0939\u0941\u0924 \u091b\u094b\u091f\u0940 (\u092a\u094d\u0930\u093f\u0902\u091f \u092e\u0947\u0902 \u0927\u0941\u0902\u0927\u0932\u0940) \u092f\u093e \u0905\u0928\u093e\u0935\u0936\u094d\u092f\u0915 \u0930\u0942\u092a \u0938\u0947 \u092c\u0921\u093c\u0940 (\u0935\u0947\u092c \u092a\u0930 \u0932\u094b\u0921 \u0939\u094b\u0928\u0947 \u092e\u0947\u0902 \u0927\u0940\u092e\u0940) \u0939\u094b\u0924\u0940 \u0939\u0948\u0902\u0964",
      heading5: "\u092a\u094d\u0930\u093f\u0902\u091f-\u0930\u0947\u0921\u0940 \u0926\u0938\u094d\u0924\u093e\u0935\u0947\u091c\u093c \u0915\u0948\u0938\u0947 \u0924\u0948\u092f\u093e\u0930 \u0915\u0930\u0947\u0902?",
      p4: "\u092a\u0939\u0932\u0947 \u0907\u0902\u091a \u092e\u0947\u0902 \u0905\u0902\u0924\u093f\u092e \u092a\u094d\u0930\u093f\u0902\u091f \u0906\u0915\u093e\u0930 \u0924\u092f \u0915\u0930\u0947\u0902\u0964 \u092a\u0947\u0936\u0947\u0935\u0930 \u0917\u0941\u0923\u0935\u0924\u094d\u0924\u093e \u0915\u0947 \u0932\u093f\u090f \u091a\u094c\u0921\u093c\u093e\u0908 \u0914\u0930 \u090a\u0901\u091a\u093e\u0908 \u0915\u094b 300 \u0938\u0947 \u0917\u0941\u0923\u093e \u0915\u0930\u0947\u0902\u0964 5x7 \u0907\u0902\u091a \u0915\u0947 \u092b\u094b\u091f\u094b \u092a\u094d\u0930\u093f\u0902\u091f \u0915\u0947 \u0932\u093f\u090f 1,500 x 2,100 \u092a\u093f\u0915\u094d\u0938\u0932 \u0915\u0947 \u0915\u0948\u0928\u0935\u0938 \u0915\u0940 \u0906\u0935\u0936\u094d\u092f\u0915\u0924\u093e \u0939\u094b\u0924\u0940 \u0939\u0948\u0964 \u0915\u0908 \u092b\u0940\u091f \u0926\u0942\u0930 \u0938\u0947 \u0926\u0947\u0916\u0947 \u091c\u093e\u0928\u0947 \u0935\u093e\u0932\u0947 \u092c\u0921\u093c\u0947 \u092a\u094b\u0938\u094d\u091f\u0930\u094b\u0902 \u0915\u0947 \u0932\u093f\u090f 150 DPI \u092a\u0930\u094d\u092f\u093e\u092a\u094d\u0924 \u0939\u0948, \u0907\u0938\u0932\u093f\u090f 24x36 \u0907\u0902\u091a \u0915\u0947 \u092a\u094b\u0938\u094d\u091f\u0930 \u0915\u094b 7,200 x 10,800 \u0915\u0947 \u092c\u091c\u093e\u092f \u0915\u0947\u0935\u0932 3,600 x 5,400 \u092a\u093f\u0915\u094d\u0938\u0932 \u091a\u093e\u0939\u093f\u090f\u0964 \u0935\u094d\u092f\u093e\u0935\u0938\u093e\u092f\u093f\u0915 \u092a\u094d\u0930\u093f\u0902\u091f\u093f\u0902\u0917 \u0915\u0947 \u0932\u093f\u090f \u092b\u093e\u0907\u0932\u0947\u0902 \u0924\u0948\u092f\u093e\u0930 \u0915\u0930\u0924\u0947 \u0938\u092e\u092f \u0939\u092e\u0947\u0936\u093e \u092a\u094d\u0930\u0924\u094d\u092f\u0947\u0915 \u0915\u093f\u0928\u093e\u0930\u0947 \u092a\u0930 0.125 \u0907\u0902\u091a (\u092c\u094d\u0932\u0940\u0921) \u091c\u094b\u0921\u093c\u0947\u0902, \u0915\u094d\u092f\u094b\u0902\u0915\u093f \u0915\u093e\u091f\u0928\u0947 \u0915\u0940 \u092a\u094d\u0930\u0915\u094d\u0930\u093f\u092f\u093e \u0921\u093f\u091c\u093c\u093e\u0907\u0928 \u0915\u094d\u0937\u0947\u0924\u094d\u0930 \u092e\u0947\u0902 \u0915\u091f \u0938\u0915\u0924\u0940 \u0939\u0948\u0964",
      heading6: "\u0938\u093e\u092e\u093e\u0928\u094d\u092f \u0907\u0902\u091a \u092e\u093e\u092a \u092a\u093f\u0915\u094d\u0938\u0932 \u092e\u0947\u0902 \u0915\u0928\u094d\u0935\u0930\u094d\u091f\u0947\u0921",
      li9: "1 \u0907\u0902\u091a \u2014 96 DPI \u092a\u0930 96 px, 300 DPI \u092a\u0930 300 px",
      li10: "2 \u0907\u0902\u091a \u2014 96 DPI \u092a\u0930 192 px, 300 DPI \u092a\u0930 600 px",
      li11: "4 \u0907\u0902\u091a \u2014 96 DPI \u092a\u0930 384 px, 300 DPI \u092a\u0930 1,200 px",
      li12: "6 \u0907\u0902\u091a \u2014 96 DPI \u092a\u0930 576 px, 300 DPI \u092a\u0930 1,800 px",
      li13: "8 \u0907\u0902\u091a \u2014 96 DPI \u092a\u0930 768 px, 300 DPI \u092a\u0930 2,400 px",
      li14: "12 \u0907\u0902\u091a \u2014 96 DPI \u092a\u0930 1,152 px, 300 DPI \u092a\u0930 3,600 px",
    },
  },
  ja: {
    faq: [
      {
        question: "\u30a4\u30f3\u30c1\u3092\u30d4\u30af\u30bb\u30eb\u306b\u5909\u63db\u3059\u308b\u306b\u306f\uff1f",
        answer:
          "\u30a4\u30f3\u30c1\u6570\u306bDPI\uff08\u30c9\u30c3\u30c8\u30d1\u30fc\u30a4\u30f3\u30c1\uff09\u3092\u639b\u3051\u307e\u3059\u3002\u4f8b\u3048\u3070\u300196 DPI\u306710\u30a4\u30f3\u30c1 = 960\u30d4\u30af\u30bb\u30eb\uff0810 x 96 = 960\uff09\u3067\u3059\u3002DPI\u8a2d\u5b9a\u306b\u3088\u308a\u30011\u7269\u7406\u30a4\u30f3\u30c1\u3042\u305f\u308a\u306e\u30d4\u30af\u30bb\u30eb\u6570\u304c\u6c7a\u307e\u308a\u307e\u3059\u3002",
      },
      {
        question: "96 DPI\u30671\u30a4\u30f3\u30c1\u306f\u4f55\u30d4\u30af\u30bb\u30eb\uff1f",
        answer:
          "96 DPI\u3067\u306f\u30011\u30a4\u30f3\u30c1\u306f\u6b63\u78ba\u306b96\u30d4\u30af\u30bb\u30eb\u3067\u3059\u3002\u3053\u308c\u306fWindows\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u3067\u306e\u30a6\u30a7\u30d6\u30c7\u30b6\u30a4\u30f3\u306e\u6a19\u6e96DPI\u3067\u3042\u308a\u3001\u753b\u9762\u30d9\u30fc\u30b9\u306e\u30c7\u30b6\u30a4\u30f3\u4f5c\u696d\u3067\u6700\u3082\u4e00\u822c\u7684\u306b\u4f7f\u7528\u3055\u308c\u308b\u5024\u3067\u3059\u3002",
      },
      {
        question: "300 DPI\u30671\u30a4\u30f3\u30c1\u306f\u4f55\u30d4\u30af\u30bb\u30eb\uff1f",
        answer:
          "300 DPI\u3067\u306f\u30011\u30a4\u30f3\u30c1\u306f300\u30d4\u30af\u30bb\u30eb\u3067\u3059\u3002\u3053\u308c\u306f\u96d1\u8a8c\u3001\u30d1\u30f3\u30d5\u30ec\u30c3\u30c8\u3001\u9ad8\u54c1\u8cea\u5199\u771f\u30d7\u30ea\u30f3\u30c8\u306a\u3069\u3001\u30d7\u30ed\u30d5\u30a7\u30c3\u30b7\u30e7\u30ca\u30eb\u5370\u5237\u306e\u6a19\u6e96\u89e3\u50cf\u5ea6\u3067\u3059\u3002",
      },
      {
        question: "8.5 x 11\u30a4\u30f3\u30c1\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306f\u4f55\u30d4\u30af\u30bb\u30eb\uff1f",
        answer:
          "96 DPI\uff08\u30a6\u30a7\u30d6\uff09\u3067816 x 1056\u30d4\u30af\u30bb\u30eb\u3001300 DPI\uff08\u5370\u5237\uff09\u30672550 x 3300\u30d4\u30af\u30bb\u30eb\u3067\u3059\u3002\u30d4\u30af\u30bb\u30eb\u5bf8\u6cd5\u306fDPI\u8a2d\u5b9a\u306b\u6bd4\u4f8b\u3057\u3066\u30b9\u30b1\u30fc\u30eb\u3057\u307e\u3059\u3002",
      },
      {
        question: "DPI\u3092\u5909\u66f4\u3059\u308b\u3068\u30d4\u30af\u30bb\u30eb\u6570\u306f\u5909\u308f\u308a\u307e\u3059\u304b\uff1f",
        answer:
          "\u30a4\u30f3\u30c1\u304b\u3089\u30d4\u30af\u30bb\u30eb\u3078\u306e\u5909\u63db\u6642\u306f\u3001\u306f\u3044\u2014\u9ad8\u3044DPI\u306f\u540c\u3058\u7269\u7406\u30b5\u30a4\u30ba\u3067\u3088\u308a\u591a\u304f\u306e\u30d4\u30af\u30bb\u30eb\u3092\u751f\u6210\u3057\u307e\u3059\u3002\u753b\u50cf\u304c\u65e2\u306b\u5b58\u5728\u3059\u308b\u5834\u5408\u3001\u30e1\u30bf\u30c7\u30fc\u30bf\u306eDPI\u3092\u5909\u66f4\u3057\u3066\u3082\u5370\u5237\u30b5\u30a4\u30ba\u304c\u5909\u308f\u308b\u3060\u3051\u3067\u3001\u5b9f\u969b\u306e\u30d4\u30af\u30bb\u30eb\u6570\u306f\u5909\u308f\u308a\u307e\u305b\u3093\u3002",
      },
    ],
    body: {
      heading1: "\u30a4\u30f3\u30c1\u304b\u3089\u30d4\u30af\u30bb\u30eb\u3078\u306e\u5909\u63db\u306e\u4ed5\u7d44\u307f",
      p1: "\u7269\u7406\u7684\u306a\u30c7\u30b6\u30a4\u30f3\u4ed5\u69d8\u3092\u30c7\u30b8\u30bf\u30eb\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306b\u5909\u63db\u3059\u308b\u969b\u3001\u30a4\u30f3\u30c1\u304b\u3089\u30d4\u30af\u30bb\u30eb\u3078\u306e\u5909\u63db\u306f\u4e0d\u53ef\u6b20\u3067\u3059\u3002\u8a08\u7b97\u5f0f\u306f\u30b7\u30f3\u30d7\u30eb\u3067\u3059\uff1a",
      formula: "\u30d4\u30af\u30bb\u30eb = \u30a4\u30f3\u30c1 x DPI",
      p2: "DPI\u8a2d\u5b9a\u304c\u89e3\u50cf\u5ea6\u3092\u6c7a\u5b9a\u3057\u307e\u3059\u3002\u30a6\u30a7\u30d6\u30c7\u30b6\u30a4\u30f3\u3067\u306f\u901a\u5e3896 DPI\u3001\u5370\u5237\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u306f\u9bae\u660e\u3067\u30d7\u30ed\u30d5\u30a7\u30c3\u30b7\u30e7\u30ca\u30eb\u306a\u51fa\u529b\u306e\u305f\u3081\u306b300 DPI\u304c\u5fc5\u8981\u3067\u3059\u3002",
      heading2: "\u4e00\u822c\u7684\u306a\u4f7f\u7528\u4f8b",
      li1: "\u5370\u5237\u7528\u30d5\u30a1\u30a4\u30eb\u306e\u4f5c\u6210: 300 DPI\u3067\u5370\u5237\u3059\u308b\u305f\u3081\u306e\u6b63\u3057\u3044\u30d4\u30af\u30bb\u30eb\u5bf8\u6cd5\u3067\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002",
      li2: "\u30d0\u30ca\u30fc\u3068\u770b\u677f: \u5927\u5224\u5370\u5237\u306b\u5fc5\u8981\u306a\u30d4\u30af\u30bb\u30eb\u6570\u3092\u8a08\u7b97\u3057\u307e\u3059\u3002",
      li3: "\u5199\u771f\u306e\u30c8\u30ea\u30df\u30f3\u30b0: \u7279\u5b9a\u306e\u5370\u5237\u30b5\u30a4\u30ba\u306b\u5fc5\u8981\u306a\u30d4\u30af\u30bb\u30eb\u5bf8\u6cd5\u3092\u6c7a\u5b9a\u3057\u307e\u3059\u3002",
      li4: "UI\u30c7\u30b6\u30a4\u30f3\u4ed5\u69d8: \u753b\u9762\u30ec\u30a4\u30a2\u30a6\u30c8\u7528\u306b\u7269\u7406\u30b5\u30a4\u30ba\u8981\u4ef6\u3092\u30d4\u30af\u30bb\u30eb\u5024\u306b\u5909\u63db\u3057\u307e\u3059\u3002",
      heading3: "\u6a19\u6e96\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u30b5\u30a4\u30ba\uff08\u30d4\u30af\u30bb\u30eb\uff09",
      li5: "\u30ec\u30bf\u30fc (8.5 x 11 in) \u2014 96 DPI\u3067816 x 1056 px\u3001300 DPI\u30672550 x 3300 px",
      li6: "A4 (8.27 x 11.69 in) \u2014 96 DPI\u3067794 x 1123 px\u3001300 DPI\u30672481 x 3507 px",
      li7: "4 x 6 in \u5199\u771f \u2014 96 DPI\u3067384 x 576 px\u3001300 DPI\u30671200 x 1800 px",
      li8: "5 x 7 in \u5199\u771f \u2014 96 DPI\u3067480 x 672 px\u3001300 DPI\u30671500 x 2100 px",
      heading4: "\u30a4\u30f3\u30c1\u304b\u3089\u30d4\u30af\u30bb\u30eb\u3078\u306e\u5909\u63db\u3067DPI\u304c\u91cd\u8981\u306a\u7406\u7531",
      p3: "DPI\u306f\u5404\u7269\u7406\u30a4\u30f3\u30c1\u306b\u53ce\u307e\u308b\u30d4\u30af\u30bb\u30eb\u6570\u3092\u76f4\u63a5\u6c7a\u5b9a\u3057\u307e\u3059\u3002\u9ad8\u3044DPI\u306f1\u30a4\u30f3\u30c1\u3042\u305f\u308a\u3088\u308a\u591a\u304f\u306e\u30d4\u30af\u30bb\u30eb\u3092\u8a70\u3081\u8fbc\u307f\u3001\u540c\u3058\u7269\u7406\u30b5\u30a4\u30ba\u3067\u3088\u308a\u9bae\u660e\u306a\u30c7\u30a3\u30c6\u30fc\u30eb\u3092\u751f\u307f\u51fa\u3057\u307e\u3059\u300296 DPI\u30678\u30a4\u30f3\u30c1\u3092\u5909\u63db\u3059\u308b\u3068768\u30d4\u30af\u30bb\u30eb\u3001300 DPI\u3067\u306f2,400\u30d4\u30af\u30bb\u30eb\u306b\u306a\u308a\u307e\u3059\u30021,632\u30d4\u30af\u30bb\u30eb\u306e\u5dee\u306f\u7d044\u500d\u306e\u753b\u50cf\u30c7\u30fc\u30bf\u306b\u76f8\u5f53\u3057\u3001\u5370\u5237\u30d5\u30a1\u30a4\u30eb\u304c\u30a6\u30a7\u30d6\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u3088\u308a\u5927\u5e45\u306b\u5927\u304d\u3044\u7406\u7531\u3067\u3059\u3002\u8aa4\u3063\u305fDPI\u3092\u9078\u3076\u3068\u3001\u5c0f\u3055\u3059\u304e\u308b\u753b\u50cf\uff08\u5370\u5237\u6642\u306b\u307c\u3084\u3051\u308b\uff09\u3084\u4e0d\u5fc5\u8981\u306b\u5927\u304d\u3044\u753b\u50cf\uff08\u30a6\u30a7\u30d6\u3067\u8aad\u307f\u8fbc\u307f\u304c\u9045\u3044\uff09\u306b\u306a\u308a\u307e\u3059\u3002",
      heading5: "\u5370\u5237\u7528\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u8a2d\u5b9a\u65b9\u6cd5",
      p4: "\u307e\u305a\u30a4\u30f3\u30c1\u3067\u6700\u7d42\u5370\u5237\u30b5\u30a4\u30ba\u3092\u6c7a\u3081\u307e\u3059\u3002\u5e45\u3068\u9ad8\u3055\u306b300\u3092\u639b\u3051\u3066\u30d7\u30ed\u54c1\u8cea\u306e\u30d4\u30af\u30bb\u30eb\u5bf8\u6cd5\u3092\u6c42\u3081\u307e\u3059\u30025x7\u30a4\u30f3\u30c1\u306e\u5199\u771f\u30d7\u30ea\u30f3\u30c8\u306b\u306f1,500 x 2,100\u30d4\u30af\u30bb\u30eb\u306e\u30ad\u30e3\u30f3\u30d0\u30b9\u304c\u5fc5\u8981\u3067\u3059\u3002\u6570\u30e1\u30fc\u30c8\u30eb\u96e2\u308c\u3066\u898b\u308b\u5927\u578b\u30dd\u30b9\u30bf\u30fc\u306b\u306f150 DPI\u3067\u5341\u5206\u306a\u306e\u3067\u300124x36\u30a4\u30f3\u30c1\u306e\u30dd\u30b9\u30bf\u30fc\u306f7,200 x 10,800\u3067\u306f\u306a\u304f3,600 x 5,400\u30d4\u30af\u30bb\u30eb\u3067\u6e08\u307f\u307e\u3059\u3002\u5546\u696d\u5370\u5237\u7528\u30d5\u30a1\u30a4\u30eb\u3092\u6e96\u5099\u3059\u308b\u969b\u306f\u3001\u5404\u7aef\u306b0.125\u30a4\u30f3\u30c1\uff08\u88c1\u3061\u843d\u3068\u3057\uff09\u3092\u8ffd\u52a0\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u88c1\u65ad\u5de5\u7a0b\u3067\u30c7\u30b6\u30a4\u30f3\u9818\u57df\u304c\u5207\u308c\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002",
      heading6: "\u4e00\u822c\u7684\u306a\u30a4\u30f3\u30c1\u5bf8\u6cd5\u306e\u30d4\u30af\u30bb\u30eb\u5909\u63db\u8868",
      li9: "1\u30a4\u30f3\u30c1 \u2014 96 DPI\u306796 px\u3001300 DPI\u3067300 px",
      li10: "2\u30a4\u30f3\u30c1 \u2014 96 DPI\u3067192 px\u3001300 DPI\u3067600 px",
      li11: "4\u30a4\u30f3\u30c1 \u2014 96 DPI\u3067384 px\u3001300 DPI\u30671,200 px",
      li12: "6\u30a4\u30f3\u30c1 \u2014 96 DPI\u3067576 px\u3001300 DPI\u30671,800 px",
      li13: "8\u30a4\u30f3\u30c1 \u2014 96 DPI\u3067768 px\u3001300 DPI\u30672,400 px",
      li14: "12\u30a4\u30f3\u30c1 \u2014 96 DPI\u30671,152 px\u3001300 DPI\u30673,600 px",
    },
  },
  ko: {
    faq: [
      {
        question: "\uc778\uce58\ub97c \ud53d\uc140\ub85c \uc5b4\ub5bb\uac8c \ubcc0\ud658\ud558\ub098\uc694?",
        answer:
          "\uc778\uce58 \uc218\uc5d0 DPI(\uc778\uce58\ub2f9 \ub3c4\ud2b8 \uc218)\ub97c \uacf1\ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, 96 DPI\uc5d0\uc11c 10\uc778\uce58 = 960\ud53d\uc140(10 x 96 = 960)\uc785\ub2c8\ub2e4. DPI \uc124\uc815\uc774 1\ubb3c\ub9ac\uc801 \uc778\uce58\ub2f9 \ud53d\uc140 \uc218\ub97c \uacb0\uc815\ud569\ub2c8\ub2e4.",
      },
      {
        question: "96 DPI\uc5d0\uc11c 1\uc778\uce58\ub294 \uba87 \ud53d\uc140\uc778\uac00\uc694?",
        answer:
          "96 DPI\uc5d0\uc11c 1\uc778\uce58\ub294 \uc815\ud655\ud788 96\ud53d\uc140\uc785\ub2c8\ub2e4. \uc774\uac83\uc740 Windows \ub514\uc2a4\ud50c\ub808\uc774\uc5d0\uc11c \uc6f9 \ub514\uc790\uc778\uc758 \ud45c\uc900 DPI\uc774\uba70, \ud654\uba74 \uae30\ubc18 \ub514\uc790\uc778 \uc791\uc5c5\uc5d0 \uac00\uc7a5 \ub9ce\uc774 \uc0ac\uc6a9\ub418\ub294 \uac12\uc785\ub2c8\ub2e4.",
      },
      {
        question: "300 DPI\uc5d0\uc11c 1\uc778\uce58\ub294 \uba87 \ud53d\uc140\uc778\uac00\uc694?",
        answer:
          "300 DPI\uc5d0\uc11c 1\uc778\uce58\ub294 300\ud53d\uc140\uc785\ub2c8\ub2e4. \uc774\uac83\uc740 \uc7a1\uc9c0, \ube0c\ub85c\uc154, \uace0\ud488\uc9c8 \uc0ac\uc9c4 \uc778\uc1c4\ub97c \ud3ec\ud568\ud55c \uc804\ubb38 \uc778\uc1c4\uc758 \ud45c\uc900 \ud574\uc0c1\ub3c4\uc785\ub2c8\ub2e4.",
      },
      {
        question: "8.5 x 11\uc778\uce58 \ubb38\uc11c\ub294 \ud53d\uc140\ub85c \uc5bc\ub9c8\uc778\uac00\uc694?",
        answer:
          "96 DPI(\uc6f9)\uc5d0\uc11c 816 x 1056\ud53d\uc140, 300 DPI(\uc778\uc1c4)\uc5d0\uc11c 2550 x 3300\ud53d\uc140\uc785\ub2c8\ub2e4. \ud53d\uc140 \uce58\uc218\ub294 DPI \uc124\uc815\uc5d0 \ube44\ub840\ud558\uc5ec \uc870\uc815\ub429\ub2c8\ub2e4.",
      },
      {
        question: "DPI\ub97c \ubcc0\uacbd\ud558\uba74 \ud53d\uc140 \uc218\uac00 \ubcc0\ud558\ub098\uc694?",
        answer:
          "\uc778\uce58\uc5d0\uc11c \ud53d\uc140\ub85c \ubcc0\ud658\ud560 \ub54c\ub294 \ub124 \u2014 \ub192\uc740 DPI\ub294 \uac19\uc740 \ubb3c\ub9ac\uc801 \ud06c\uae30\uc5d0\uc11c \ub354 \ub9ce\uc740 \ud53d\uc140\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4. \uc774\ubbf8\uc9c0\uac00 \uc774\ubbf8 \uc874\uc7ac\ud560 \ub54c \uba54\ud0c0\ub370\uc774\ud130\uc758 DPI\ub97c \ubcc0\uacbd\ud558\uba74 \uc778\uc1c4 \ud06c\uae30\ub9cc \ubcc0\uacbd\ub418\uace0 \uc2e4\uc81c \ud53d\uc140 \uc218\ub294 \ubcc0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",
      },
    ],
    body: {
      heading1: "\uc778\uce58\uc5d0\uc11c \ud53d\uc140\ub85c\uc758 \ubcc0\ud658 \uc6d0\ub9ac",
      p1: "\ubb3c\ub9ac\uc801 \ub514\uc790\uc778 \uc0ac\uc591\uc744 \ub514\uc9c0\ud138 \ud3ec\ub9f7\uc73c\ub85c \ubcc0\ud658\ud560 \ub54c \uc778\uce58\uc5d0\uc11c \ud53d\uc140\ub85c\uc758 \ubcc0\ud658\uc740 \ud544\uc218\uc801\uc785\ub2c8\ub2e4. \uacf5\uc2dd\uc740 \uac04\ub2e8\ud569\ub2c8\ub2e4:",
      formula: "\ud53d\uc140 = \uc778\uce58 x DPI",
      p2: "DPI \uc124\uc815\uc774 \ud574\uc0c1\ub3c4\ub97c \uacb0\uc815\ud569\ub2c8\ub2e4. \uc6f9 \ub514\uc790\uc778\uc740 \ubcf4\ud1b5 96 DPI\ub97c \uc0ac\uc6a9\ud558\uace0, \uc778\uc1c4 \ud504\ub85c\uc81d\ud2b8\ub294 \uc120\uba85\ud558\uace0 \uc804\ubb38\uc801\uc778 \ucd9c\ub825\uc744 \uc704\ud574 300 DPI\uac00 \ud544\uc694\ud569\ub2c8\ub2e4.",
      heading2: "\uc77c\ubc18\uc801\uc778 \uc0ac\uc6a9 \uc0ac\ub840",
      li1: "\uc778\uc1c4\uc6a9 \ud30c\uc77c \uc81c\uc791: 300 DPI \uc778\uc1c4\uc5d0 \ub9de\ub294 \uc62c\ubc14\ub978 \ud53d\uc140 \uce58\uc218\ub85c \ubb38\uc11c\ub97c \uc124\uc815\ud569\ub2c8\ub2e4.",
      li2: "\ubc30\ub108 \ubc0f \uac04\ud310: \ub300\ud615 \uc778\uc1c4\uc5d0 \ud544\uc694\ud55c \ud53d\uc140 \uc694\uad6c\uc0ac\ud56d\uc744 \uacc4\uc0b0\ud569\ub2c8\ub2e4.",
      li3: "\uc0ac\uc9c4 \ud06c\ub86d: \ud2b9\uc815 \uc778\uc1c4 \ud06c\uae30\uc5d0 \ud544\uc694\ud55c \ud53d\uc140 \uce58\uc218\ub97c \uacb0\uc815\ud569\ub2c8\ub2e4.",
      li4: "UI \ub514\uc790\uc778 \uc0ac\uc591: \ud654\uba74 \ub808\uc774\uc544\uc6c3\uc744 \uc704\ud574 \ubb3c\ub9ac\uc801 \ud06c\uae30 \uc694\uad6c\uc0ac\ud56d\uc744 \ud53d\uc140 \uac12\uc73c\ub85c \ubcc0\ud658\ud569\ub2c8\ub2e4.",
      heading3: "\ud45c\uc900 \ubb38\uc11c \ud06c\uae30(\ud53d\uc140)",
      li5: "\ub808\ud130 (8.5 x 11 in) \u2014 96 DPI\uc5d0\uc11c 816 x 1056 px, 300 DPI\uc5d0\uc11c 2550 x 3300 px",
      li6: "A4 (8.27 x 11.69 in) \u2014 96 DPI\uc5d0\uc11c 794 x 1123 px, 300 DPI\uc5d0\uc11c 2481 x 3507 px",
      li7: "4 x 6 in \uc0ac\uc9c4 \u2014 96 DPI\uc5d0\uc11c 384 x 576 px, 300 DPI\uc5d0\uc11c 1200 x 1800 px",
      li8: "5 x 7 in \uc0ac\uc9c4 \u2014 96 DPI\uc5d0\uc11c 480 x 672 px, 300 DPI\uc5d0\uc11c 1500 x 2100 px",
      heading4: "\uc778\uce58-\ud53d\uc140 \ubcc0\ud658\uc5d0\uc11c DPI\uac00 \uc911\uc694\ud55c \uc774\uc720",
      p3: "DPI\ub294 \uac01 \ubb3c\ub9ac\uc801 \uc778\uce58\uc5d0 \ub4e4\uc5b4\uac00\ub294 \ud53d\uc140 \uc218\ub97c \uc9c1\uc811 \uacb0\uc815\ud569\ub2c8\ub2e4. \ub192\uc740 DPI\ub294 \uc778\uce58\ub2f9 \ub354 \ub9ce\uc740 \ud53d\uc140\uc744 \ub2f4\uc544 \uac19\uc740 \ubb3c\ub9ac\uc801 \ud06c\uae30\uc5d0\uc11c \ub354 \uc120\uba85\ud55c \ub514\ud14c\uc77c\uc744 \ub9cc\ub4ed\ub2c8\ub2e4. 96 DPI\ub85c 8\uc778\uce58\ub97c \ubcc0\ud658\ud558\uba74 768\ud53d\uc140, 300 DPI\ub85c\ub294 2,400\ud53d\uc140\uc774 \ub429\ub2c8\ub2e4. 1,632\ud53d\uc140\uc758 \ucc28\uc774\ub294 \uc57d 4\ubc30\uc758 \uc774\ubbf8\uc9c0 \ub370\uc774\ud130\uc5d0 \ud574\ub2f9\ud558\uba70, \uc778\uc1c4 \ud30c\uc77c\uc774 \uc6f9 \uadf8\ub798\ud53d\ubcf4\ub2e4 \ud6e8\uc52c \ud070 \uc774\uc720\uc785\ub2c8\ub2e4. \uc798\ubabb\ub41c DPI\ub97c \uc120\ud0dd\ud558\uba74 \ub108\ubb34 \uc791\uc740 \uc774\ubbf8\uc9c0(\uc778\uc1c4 \uc2dc \ud750\ub9bc) \ub610\ub294 \ubd88\ud544\uc694\ud558\uac8c \ud070 \uc774\ubbf8\uc9c0(\uc6f9\uc5d0\uc11c \ub85c\ub529 \ub290\ub9bc)\uac00 \ub429\ub2c8\ub2e4.",
      heading5: "\uc778\uc1c4\uc6a9 \ubb38\uc11c \uc124\uc815 \ubc29\ubc95",
      p4: "\uba3c\uc800 \uc778\uce58 \ub2e8\uc704\ub85c \ucd5c\uc885 \uc778\uc1c4 \ud06c\uae30\ub97c \uacb0\uc815\ud569\ub2c8\ub2e4. \ub108\ube44\uc640 \ub192\uc774\uc5d0 300\uc744 \uacf1\ud558\uc5ec \uc804\ubb38 \ud488\uc9c8\uc758 \ud53d\uc140 \uce58\uc218\ub97c \uad6c\ud569\ub2c8\ub2e4. 5x7\uc778\uce58 \uc0ac\uc9c4 \uc778\uc1c4\uc5d0\ub294 1,500 x 2,100\ud53d\uc140 \uce94\ubc84\uc2a4\uac00 \ud544\uc694\ud569\ub2c8\ub2e4. \uba87 \ubbf8\ud130 \ub5a8\uc5b4\uc838\uc11c \ubcf4\ub294 \ub300\ud615 \ud3ec\uc2a4\ud130\ub294 150 DPI\uba74 \ucda9\ubd84\ud558\ubbc0\ub85c 24x36\uc778\uce58 \ud3ec\uc2a4\ud130\ub294 7,200 x 10,800 \ub300\uc2e0 3,600 x 5,400\ud53d\uc140\ub9cc \ud544\uc694\ud569\ub2c8\ub2e4. \uc0c1\uc5c5 \uc778\uc1c4\uc6a9 \ud30c\uc77c\uc744 \uc900\ube44\ud560 \ub54c\ub294 \uac01 \uac00\uc7a5\uc790\ub9ac\uc5d0 0.125\uc778\uce58(\uc7ac\ub2e8 \uc5ec\ubc31)\ub97c \ucd94\uac00\ud558\uc138\uc694. \uc7ac\ub2e8 \uacfc\uc815\uc5d0\uc11c \ub514\uc790\uc778 \uc601\uc5ed\uc774 \uc798\ub9b4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
      heading6: "\uc77c\ubc18\uc801\uc778 \uc778\uce58 \uce58\uc218\uc758 \ud53d\uc140 \ubcc0\ud658\ud45c",
      li9: "1\uc778\uce58 \u2014 96 DPI\uc5d0\uc11c 96 px, 300 DPI\uc5d0\uc11c 300 px",
      li10: "2\uc778\uce58 \u2014 96 DPI\uc5d0\uc11c 192 px, 300 DPI\uc5d0\uc11c 600 px",
      li11: "4\uc778\uce58 \u2014 96 DPI\uc5d0\uc11c 384 px, 300 DPI\uc5d0\uc11c 1,200 px",
      li12: "6\uc778\uce58 \u2014 96 DPI\uc5d0\uc11c 576 px, 300 DPI\uc5d0\uc11c 1,800 px",
      li13: "8\uc778\uce58 \u2014 96 DPI\uc5d0\uc11c 768 px, 300 DPI\uc5d0\uc11c 2,400 px",
      li14: "12\uc778\uce58 \u2014 96 DPI\uc5d0\uc11c 1,152 px, 300 DPI\uc5d0\uc11c 3,600 px",
    },
  },
  it: {
    faq: [
      {
        question: "Come si convertono i pollici in pixel?",
        answer:
          "Moltiplica il numero di pollici per i DPI (punti per pollice). Ad esempio, 10 pollici a 96 DPI equivalgono a 960 pixel (10 x 96 = 960). L\u2019impostazione DPI determina quanti pixel rappresentano un pollice fisico.",
      },
      {
        question: "Quanti pixel \u00e8 1 pollice a 96 DPI?",
        answer:
          "A 96 DPI, 1 pollice equivale esattamente a 96 pixel. Questo \u00e8 il DPI standard per il web design su schermi Windows ed \u00e8 il valore pi\u00f9 comunemente usato per il lavoro di design a schermo.",
      },
      {
        question: "Quanti pixel \u00e8 1 pollice a 300 DPI?",
        answer:
          "A 300 DPI, 1 pollice equivale a 300 pixel. Questa \u00e8 la risoluzione standard per la stampa professionale, incluse riviste, brochure e stampe fotografiche di alta qualit\u00e0.",
      },
      {
        question: "Qual \u00e8 la dimensione in pixel di un documento da 8.5 x 11 pollici?",
        answer:
          "A 96 DPI (web), misura 816 x 1056 pixel. A 300 DPI (stampa), misura 2550 x 3300 pixel. Le dimensioni in pixel scalano direttamente con l\u2019impostazione DPI.",
      },
      {
        question: "Cambiare i DPI cambia il numero di pixel?",
        answer:
          "Nella conversione da pollici a pixel, s\u00ec \u2014 un DPI pi\u00f9 alto produce pi\u00f9 pixel per la stessa dimensione fisica. Quando un\u2019immagine esiste gi\u00e0, cambiare i DPI nei metadati modifica solo la dimensione di stampa, non il conteggio reale dei pixel.",
      },
    ],
    body: {
      heading1: "Come funziona la conversione da pollici a pixel",
      p1: "Convertire i pollici in pixel \u00e8 essenziale quando si traducono le specifiche di design fisiche in formati digitali. La formula \u00e8 semplice:",
      formula: "Pixel = Pollici x DPI",
      p2: "L\u2019impostazione DPI determina la risoluzione. I design web usano tipicamente 96 DPI, mentre i progetti di stampa richiedono 300 DPI per un risultato nitido e professionale.",
      heading2: "Casi d\u2019uso comuni",
      li1: "Creazione di file pronti per la stampa: Imposta un documento con le dimensioni in pixel corrette per la stampa a 300 DPI.",
      li2: "Banner e segnaletica: Calcola i requisiti in pixel per la stampa in grande formato.",
      li3: "Ritaglio foto: Determina le dimensioni in pixel necessarie per una specifica dimensione di stampa.",
      li4: "Specifiche di design UI: Converti i requisiti di dimensione fisica in valori di pixel per layout a schermo.",
      heading3: "Dimensioni standard dei documenti in pixel",
      li5: "Letter (8.5 x 11 in) \u2014 816 x 1056 px a 96 DPI, 2550 x 3300 px a 300 DPI",
      li6: "A4 (8.27 x 11.69 in) \u2014 794 x 1123 px a 96 DPI, 2481 x 3507 px a 300 DPI",
      li7: "Foto 4 x 6 in \u2014 384 x 576 px a 96 DPI, 1200 x 1800 px a 300 DPI",
      li8: "Foto 5 x 7 in \u2014 480 x 672 px a 96 DPI, 1500 x 2100 px a 300 DPI",
      heading4: "Perch\u00e9 i DPI sono importanti nella conversione pollici-pixel?",
      p3: "I DPI determinano direttamente quanti pixel entrano in ogni pollice fisico. Un DPI pi\u00f9 alto concentra pi\u00f9 pixel per pollice, producendo dettagli pi\u00f9 nitidi alla stessa dimensione fisica. Convertendo 8 pollici a 96 DPI si ottengono 768 pixel. Gli stessi 8 pollici a 300 DPI danno 2.400 pixel. Quella differenza di 1.632 pixel rappresenta circa 4 volte pi\u00f9 dati immagine, ecco perch\u00e9 i file di stampa sono significativamente pi\u00f9 grandi della grafica web. Scegliere il DPI sbagliato produce immagini troppo piccole (sfocate in stampa) o inutilmente grandi (lente da caricare sul web).",
      heading5: "Come impostare un documento pronto per la stampa?",
      p4: "Inizia determinando la dimensione finale di stampa in pollici. Moltiplica larghezza e altezza per 300 per ottenere le dimensioni in pixel di qualit\u00e0 professionale. Una stampa fotografica da 5x7 pollici richiede un canvas di 1.500 x 2.100 pixel. Per grandi poster visti da diversi metri di distanza, 150 DPI sono accettabili, quindi un poster da 24x36 pollici necessita solo di 3.600 x 5.400 pixel invece di 7.200 x 10.800. Aggiungi sempre 0.125 pollici (abbondanza) su ogni bordo quando prepari file per la stampa commerciale, poich\u00e9 il processo di taglio pu\u00f2 intaccare l\u2019area di design.",
      heading6: "Misure comuni in pollici convertite in pixel",
      li9: "1 pollice \u2014 96 px a 96 DPI, 300 px a 300 DPI",
      li10: "2 pollici \u2014 192 px a 96 DPI, 600 px a 300 DPI",
      li11: "4 pollici \u2014 384 px a 96 DPI, 1.200 px a 300 DPI",
      li12: "6 pollici \u2014 576 px a 96 DPI, 1.800 px a 300 DPI",
      li13: "8 pollici \u2014 768 px a 96 DPI, 2.400 px a 300 DPI",
      li14: "12 pollici \u2014 1.152 px a 96 DPI, 3.600 px a 300 DPI",
    },
  },
  nl: {
    faq: [
      {
        question: "Hoe converteer ik inches naar pixels?",
        answer:
          "Vermenigvuldig het aantal inches met de DPI (dots per inch). Bijvoorbeeld, 10 inches bij 96 DPI is 960 pixels (10 x 96 = 960). De DPI-instelling bepaalt hoeveel pixels \u00e9\u00e9n fysieke inch vertegenwoordigen.",
      },
      {
        question: "Hoeveel pixels is 1 inch bij 96 DPI?",
        answer:
          "Bij 96 DPI is 1 inch precies 96 pixels. Dit is de standaard DPI voor webdesign op Windows-schermen en de meest gebruikte waarde voor schermgebaseerd ontwerpwerk.",
      },
      {
        question: "Hoeveel pixels is 1 inch bij 300 DPI?",
        answer:
          "Bij 300 DPI is 1 inch gelijk aan 300 pixels. Dit is de standaardresolutie voor professioneel drukwerk, waaronder tijdschriften, brochures en hoogwaardige fotoafdrukken.",
      },
      {
        question: "Wat is de grootte in pixels van een document van 8.5 x 11 inch?",
        answer:
          "Bij 96 DPI (web) is het 816 x 1056 pixels. Bij 300 DPI (druk) is het 2550 x 3300 pixels. De pixelafmetingen schalen direct mee met de DPI-instelling.",
      },
      {
        question: "Verandert het wijzigen van DPI het aantal pixels?",
        answer:
          "Bij het converteren van inches naar pixels, ja \u2014 een hogere DPI levert meer pixels op voor dezelfde fysieke grootte. Wanneer een afbeelding al bestaat, verandert het aanpassen van DPI in de metadata alleen het printformaat, niet het werkelijke aantal pixels.",
      },
    ],
    body: {
      heading1: "Hoe de conversie van inches naar pixels werkt",
      p1: "Het converteren van inches naar pixels is essentieel bij het vertalen van fysieke ontwerpspecificaties naar digitale formaten. De formule is eenvoudig:",
      formula: "Pixels = Inches x DPI",
      p2: "De DPI-instelling bepaalt de resolutie. Webdesigns gebruiken doorgaans 96 DPI, terwijl drukprojecten 300 DPI vereisen voor scherpe, professionele output.",
      heading2: "Veelvoorkomende toepassingen",
      li1: "Drukklare bestanden maken: Stel een document in met de juiste pixelafmetingen voor druk op 300 DPI.",
      li2: "Banners en bewegwijzering: Bereken de pixelvereisten voor groot formaat drukwerk.",
      li3: "Foto bijsnijden: Bepaal de pixelafmetingen die nodig zijn voor een specifiek printformaat.",
      li4: "UI-ontwerpspecificaties: Vertaal fysieke groottevereisten naar pixelwaarden voor schermindelingen.",
      heading3: "Standaard documentformaten in pixels",
      li5: "Letter (8.5 x 11 in) \u2014 816 x 1056 px bij 96 DPI, 2550 x 3300 px bij 300 DPI",
      li6: "A4 (8.27 x 11.69 in) \u2014 794 x 1123 px bij 96 DPI, 2481 x 3507 px bij 300 DPI",
      li7: "Foto 4 x 6 in \u2014 384 x 576 px bij 96 DPI, 1200 x 1800 px bij 300 DPI",
      li8: "Foto 5 x 7 in \u2014 480 x 672 px bij 96 DPI, 1500 x 2100 px bij 300 DPI",
      heading4: "Waarom is DPI belangrijk bij de conversie van inches naar pixels?",
      p3: "DPI bepaalt rechtstreeks hoeveel pixels er in elke fysieke inch passen. Een hogere DPI pakt meer pixels per inch in, wat scherpere details oplevert bij dezelfde fysieke grootte. Bij het converteren van 8 inches bij 96 DPI is het resultaat 768 pixels. Dezelfde 8 inches bij 300 DPI levert 2.400 pixels op. Dat verschil van 1.632 pixels staat voor ongeveer 4x meer beelddata, daarom zijn drukbestanden aanzienlijk groter dan webgraphics. De verkeerde DPI kiezen levert afbeeldingen op die te klein zijn (wazig bij afdrukken) of onnodig groot (traag laden op het web).",
      heading5: "Hoe stel je een drukklaar document in?",
      p4: "Begin met het bepalen van het uiteindelijke printformaat in inches. Vermenigvuldig breedte en hoogte met 300 voor pixelafmetingen in professionele kwaliteit. Een fotoafdruk van 5x7 inch heeft een canvas van 1.500 x 2.100 pixels nodig. Voor grote posters die van enkele meters afstand worden bekeken, is 150 DPI acceptabel, dus een poster van 24x36 inch heeft slechts 3.600 x 5.400 pixels nodig in plaats van 7.200 x 10.800. Voeg altijd 0.125 inch (afloop) toe aan elke rand bij het voorbereiden van bestanden voor commercieel drukwerk, aangezien het snijproces in het ontwerpgebied kan snijden.",
      heading6: "Veelvoorkomende inch-maten omgerekend naar pixels",
      li9: "1 inch \u2014 96 px bij 96 DPI, 300 px bij 300 DPI",
      li10: "2 inches \u2014 192 px bij 96 DPI, 600 px bij 300 DPI",
      li11: "4 inches \u2014 384 px bij 96 DPI, 1.200 px bij 300 DPI",
      li12: "6 inches \u2014 576 px bij 96 DPI, 1.800 px bij 300 DPI",
      li13: "8 inches \u2014 768 px bij 96 DPI, 2.400 px bij 300 DPI",
      li14: "12 inches \u2014 1.152 px bij 96 DPI, 3.600 px bij 300 DPI",
    },
  },
  ar: {
    faq: [
      {
        question: "\u0643\u064a\u0641 \u0623\u062d\u0648\u0651\u0644 \u0627\u0644\u0628\u0648\u0635\u0627\u062a \u0625\u0644\u0649 \u0628\u0643\u0633\u0644\u0627\u062a\u061f",
        answer:
          "\u0627\u0636\u0631\u0628 \u0639\u062f\u062f \u0627\u0644\u0628\u0648\u0635\u0627\u062a \u0641\u064a DPI (\u0627\u0644\u0646\u0642\u0627\u0637 \u0644\u0643\u0644 \u0628\u0648\u0635\u0629). \u0639\u0644\u0649 \u0633\u0628\u064a\u0644 \u0627\u0644\u0645\u062b\u0627\u0644\u060c 10 \u0628\u0648\u0635\u0627\u062a \u0639\u0646\u062f 96 DPI \u062a\u0633\u0627\u0648\u064a 960 \u0628\u0643\u0633\u0644 (10 x 96 = 960). \u0625\u0639\u062f\u0627\u062f DPI \u064a\u062d\u062f\u062f \u0639\u062f\u062f \u0627\u0644\u0628\u0643\u0633\u0644\u0627\u062a \u0627\u0644\u062a\u064a \u062a\u0645\u062b\u0644 \u0628\u0648\u0635\u0629 \u0641\u0639\u0644\u064a\u0629 \u0648\u0627\u062d\u062f\u0629.",
      },
      {
        question: "\u0643\u0645 \u0628\u0643\u0633\u0644 \u062a\u0633\u0627\u0648\u064a \u0628\u0648\u0635\u0629 \u0648\u0627\u062d\u062f\u0629 \u0639\u0646\u062f 96 DPI\u061f",
        answer:
          "\u0639\u0646\u062f 96 DPI\u060c \u0628\u0648\u0635\u0629 \u0648\u0627\u062d\u062f\u0629 \u062a\u0633\u0627\u0648\u064a 96 \u0628\u0643\u0633\u0644 \u0628\u0627\u0644\u0636\u0628\u0637. \u0647\u0630\u0627 \u0647\u0648 DPI \u0627\u0644\u0642\u064a\u0627\u0633\u064a \u0644\u062a\u0635\u0645\u064a\u0645 \u0627\u0644\u0648\u064a\u0628 \u0639\u0644\u0649 \u0634\u0627\u0634\u0627\u062a Windows \u0648\u0627\u0644\u0642\u064a\u0645\u0629 \u0627\u0644\u0623\u0643\u062b\u0631 \u0627\u0633\u062a\u062e\u062f\u0627\u0645\u064b\u0627 \u0641\u064a \u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u062a\u0635\u0645\u064a\u0645 \u0627\u0644\u0645\u0628\u0646\u064a\u0629 \u0639\u0644\u0649 \u0627\u0644\u0634\u0627\u0634\u0629.",
      },
      {
        question: "\u0643\u0645 \u0628\u0643\u0633\u0644 \u062a\u0633\u0627\u0648\u064a \u0628\u0648\u0635\u0629 \u0648\u0627\u062d\u062f\u0629 \u0639\u0646\u062f 300 DPI\u061f",
        answer:
          "\u0639\u0646\u062f 300 DPI\u060c \u0628\u0648\u0635\u0629 \u0648\u0627\u062d\u062f\u0629 \u062a\u0633\u0627\u0648\u064a 300 \u0628\u0643\u0633\u0644. \u0647\u0630\u0647 \u0647\u064a \u0627\u0644\u062f\u0642\u0629 \u0627\u0644\u0642\u064a\u0627\u0633\u064a\u0629 \u0644\u0644\u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0627\u062d\u062a\u0631\u0627\u0641\u064a\u0629\u060c \u0628\u0645\u0627 \u0641\u064a \u0630\u0644\u0643 \u0627\u0644\u0645\u062c\u0644\u0627\u062a \u0648\u0627\u0644\u0643\u062a\u064a\u0628\u0627\u062a \u0648\u0627\u0644\u0635\u0648\u0631 \u0627\u0644\u0641\u0648\u062a\u0648\u063a\u0631\u0627\u0641\u064a\u0629 \u0639\u0627\u0644\u064a\u0629 \u0627\u0644\u062c\u0648\u062f\u0629.",
      },
      {
        question: "\u0645\u0627 \u062d\u062c\u0645 \u0645\u0633\u062a\u0646\u062f 8.5 x 11 \u0628\u0648\u0635\u0629 \u0628\u0627\u0644\u0628\u0643\u0633\u0644\u061f",
        answer:
          "\u0639\u0646\u062f 96 DPI (\u0648\u064a\u0628)\u060c \u064a\u0643\u0648\u0646 816 x 1056 \u0628\u0643\u0633\u0644. \u0639\u0646\u062f 300 DPI (\u0637\u0628\u0627\u0639\u0629)\u060c \u064a\u0643\u0648\u0646 2550 x 3300 \u0628\u0643\u0633\u0644. \u0623\u0628\u0639\u0627\u062f \u0627\u0644\u0628\u0643\u0633\u0644 \u062a\u062a\u0646\u0627\u0633\u0628 \u0637\u0631\u062f\u064a\u064b\u0627 \u0645\u0639 \u0625\u0639\u062f\u0627\u062f DPI.",
      },
      {
        question: "\u0647\u0644 \u064a\u0624\u062f\u064a \u062a\u063a\u064a\u064a\u0631 DPI \u0625\u0644\u0649 \u062a\u063a\u064a\u064a\u0631 \u0639\u062f\u062f \u0627\u0644\u0628\u0643\u0633\u0644\u0627\u062a\u061f",
        answer:
          "\u0639\u0646\u062f \u0627\u0644\u062a\u062d\u0648\u064a\u0644 \u0645\u0646 \u0628\u0648\u0635\u0627\u062a \u0625\u0644\u0649 \u0628\u0643\u0633\u0644\u0627\u062a\u060c \u0646\u0639\u0645 \u2014 DPI \u0623\u0639\u0644\u0649 \u064a\u0646\u062a\u062c \u0628\u0643\u0633\u0644\u0627\u062a \u0623\u0643\u062b\u0631 \u0644\u0646\u0641\u0633 \u0627\u0644\u062d\u062c\u0645 \u0627\u0644\u0641\u0639\u0644\u064a. \u0639\u0646\u062f\u0645\u0627 \u062a\u0643\u0648\u0646 \u0627\u0644\u0635\u0648\u0631\u0629 \u0645\u0648\u062c\u0648\u062f\u0629 \u0628\u0627\u0644\u0641\u0639\u0644\u060c \u0641\u0625\u0646 \u062a\u063a\u064a\u064a\u0631 DPI \u0641\u064a \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0648\u0635\u0641\u064a\u0629 \u064a\u063a\u064a\u0631 \u0641\u0642\u0637 \u062d\u062c\u0645 \u0627\u0644\u0637\u0628\u0627\u0639\u0629\u060c \u0648\u0644\u064a\u0633 \u0627\u0644\u0639\u062f\u062f \u0627\u0644\u0641\u0639\u0644\u064a \u0644\u0644\u0628\u0643\u0633\u0644\u0627\u062a.",
      },
    ],
    body: {
      heading1: "\u0643\u064a\u0641 \u064a\u0639\u0645\u0644 \u062a\u062d\u0648\u064a\u0644 \u0627\u0644\u0628\u0648\u0635\u0627\u062a \u0625\u0644\u0649 \u0628\u0643\u0633\u0644\u0627\u062a",
      p1: "\u062a\u062d\u0648\u064a\u0644 \u0627\u0644\u0628\u0648\u0635\u0627\u062a \u0625\u0644\u0649 \u0628\u0643\u0633\u0644\u0627\u062a \u0636\u0631\u0648\u0631\u064a \u0639\u0646\u062f \u062a\u0631\u062c\u0645\u0629 \u0645\u0648\u0627\u0635\u0641\u0627\u062a \u0627\u0644\u062a\u0635\u0645\u064a\u0645 \u0627\u0644\u0641\u0639\u0644\u064a\u0629 \u0625\u0644\u0649 \u0635\u064a\u063a \u0631\u0642\u0645\u064a\u0629. \u0627\u0644\u0645\u0639\u0627\u062f\u0644\u0629 \u0628\u0633\u064a\u0637\u0629:",
      formula: "\u0627\u0644\u0628\u0643\u0633\u0644\u0627\u062a = \u0627\u0644\u0628\u0648\u0635\u0627\u062a x DPI",
      p2: "\u0625\u0639\u062f\u0627\u062f DPI \u064a\u062d\u062f\u062f \u0627\u0644\u062f\u0642\u0629. \u062a\u0633\u062a\u062e\u062f\u0645 \u062a\u0635\u0627\u0645\u064a\u0645 \u0627\u0644\u0648\u064a\u0628 \u0639\u0627\u062f\u0629\u064b 96 DPI\u060c \u0628\u064a\u0646\u0645\u0627 \u062a\u062a\u0637\u0644\u0628 \u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u0637\u0628\u0627\u0639\u0629 300 DPI \u0644\u0644\u062d\u0635\u0648\u0644 \u0639\u0644\u0649 \u0646\u062a\u0627\u0626\u062c \u062d\u0627\u062f\u0629 \u0648\u0627\u062d\u062a\u0631\u0627\u0641\u064a\u0629.",
      heading2: "\u062d\u0627\u0644\u0627\u062a \u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u0634\u0627\u0626\u0639\u0629",
      li1: "\u0625\u0646\u0634\u0627\u0621 \u0645\u0644\u0641\u0627\u062a \u062c\u0627\u0647\u0632\u0629 \u0644\u0644\u0637\u0628\u0627\u0639\u0629: \u0623\u0639\u062f \u0645\u0633\u062a\u0646\u062f\u064b\u0627 \u0628\u0623\u0628\u0639\u0627\u062f \u0627\u0644\u0628\u0643\u0633\u0644 \u0627\u0644\u0635\u062d\u064a\u062d\u0629 \u0644\u0644\u0637\u0628\u0627\u0639\u0629 \u0639\u0646\u062f 300 DPI.",
      li2: "\u0627\u0644\u0644\u0627\u0641\u062a\u0627\u062a \u0648\u0627\u0644\u0644\u0648\u062d\u0627\u062a: \u0627\u062d\u0633\u0628 \u0645\u062a\u0637\u0644\u0628\u0627\u062a \u0627\u0644\u0628\u0643\u0633\u0644 \u0644\u0644\u0637\u0628\u0627\u0639\u0629 \u0643\u0628\u064a\u0631\u0629 \u0627\u0644\u062d\u062c\u0645.",
      li3: "\u0642\u0635 \u0627\u0644\u0635\u0648\u0631: \u062d\u062f\u062f \u0623\u0628\u0639\u0627\u062f \u0627\u0644\u0628\u0643\u0633\u0644 \u0627\u0644\u0644\u0627\u0632\u0645\u0629 \u0644\u062d\u062c\u0645 \u0637\u0628\u0627\u0639\u0629 \u0645\u0639\u064a\u0646.",
      li4: "\u0645\u0648\u0627\u0635\u0641\u0627\u062a \u062a\u0635\u0645\u064a\u0645 \u0648\u0627\u062c\u0647\u0629 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645: \u062d\u0648\u0651\u0644 \u0645\u062a\u0637\u0644\u0628\u0627\u062a \u0627\u0644\u062d\u062c\u0645 \u0627\u0644\u0641\u0639\u0644\u064a \u0625\u0644\u0649 \u0642\u064a\u0645 \u0628\u0643\u0633\u0644 \u0644\u062a\u062e\u0637\u064a\u0637\u0627\u062a \u0627\u0644\u0634\u0627\u0634\u0629.",
      heading3: "\u0623\u062d\u062c\u0627\u0645 \u0627\u0644\u0645\u0633\u062a\u0646\u062f\u0627\u062a \u0627\u0644\u0642\u064a\u0627\u0633\u064a\u0629 \u0628\u0627\u0644\u0628\u0643\u0633\u0644",
      li5: "Letter (8.5 x 11 in) \u2014 816 x 1056 px \u0639\u0646\u062f 96 DPI\u060c 2550 x 3300 px \u0639\u0646\u062f 300 DPI",
      li6: "A4 (8.27 x 11.69 in) \u2014 794 x 1123 px \u0639\u0646\u062f 96 DPI\u060c 2481 x 3507 px \u0639\u0646\u062f 300 DPI",
      li7: "\u0635\u0648\u0631\u0629 4 x 6 in \u2014 384 x 576 px \u0639\u0646\u062f 96 DPI\u060c 1200 x 1800 px \u0639\u0646\u062f 300 DPI",
      li8: "\u0635\u0648\u0631\u0629 5 x 7 in \u2014 480 x 672 px \u0639\u0646\u062f 96 DPI\u060c 1500 x 2100 px \u0639\u0646\u062f 300 DPI",
      heading4: "\u0644\u0645\u0627\u0630\u0627 \u064a\u0647\u0645 DPI \u0641\u064a \u062a\u062d\u0648\u064a\u0644 \u0627\u0644\u0628\u0648\u0635\u0627\u062a \u0625\u0644\u0649 \u0628\u0643\u0633\u0644\u0627\u062a\u061f",
      p3: "DPI \u064a\u062d\u062f\u062f \u0645\u0628\u0627\u0634\u0631\u0629\u064b \u0639\u062f\u062f \u0627\u0644\u0628\u0643\u0633\u0644\u0627\u062a \u0627\u0644\u062a\u064a \u062a\u0645\u0644\u0623 \u0643\u0644 \u0628\u0648\u0635\u0629 \u0641\u0639\u0644\u064a\u0629. DPI \u0623\u0639\u0644\u0649 \u064a\u0639\u0628\u0626 \u0628\u0643\u0633\u0644\u0627\u062a \u0623\u0643\u062b\u0631 \u0641\u064a \u0643\u0644 \u0628\u0648\u0635\u0629\u060c \u0645\u0645\u0627 \u064a\u0646\u062a\u062c \u062a\u0641\u0627\u0635\u064a\u0644 \u0623\u0643\u062b\u0631 \u062d\u062f\u0629 \u0628\u0646\u0641\u0633 \u0627\u0644\u062d\u062c\u0645 \u0627\u0644\u0641\u0639\u0644\u064a. \u0639\u0646\u062f \u062a\u062d\u0648\u064a\u0644 8 \u0628\u0648\u0635\u0627\u062a \u0639\u0646\u062f 96 DPI\u060c \u0627\u0644\u0646\u062a\u064a\u062c\u0629 768 \u0628\u0643\u0633\u0644. \u0646\u0641\u0633 8 \u0628\u0648\u0635\u0627\u062a \u0639\u0646\u062f 300 DPI \u062a\u0639\u0637\u064a 2,400 \u0628\u0643\u0633\u0644. \u0647\u0630\u0627 \u0627\u0644\u0641\u0631\u0642 \u0628\u0640 1,632 \u0628\u0643\u0633\u0644 \u064a\u0645\u062b\u0644 \u062a\u0642\u0631\u064a\u0628\u064b\u0627 4 \u0623\u0636\u0639\u0627\u0641 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0635\u0648\u0631\u0629\u060c \u0644\u0630\u0644\u0643 \u0645\u0644\u0641\u0627\u062a \u0627\u0644\u0637\u0628\u0627\u0639\u0629 \u0623\u0643\u0628\u0631 \u0628\u0643\u062b\u064a\u0631 \u0645\u0646 \u0631\u0633\u0648\u0645\u0627\u062a \u0627\u0644\u0648\u064a\u0628. \u0627\u062e\u062a\u064a\u0627\u0631 DPI \u062e\u0627\u0637\u0626 \u064a\u0646\u062a\u062c \u0635\u0648\u0631\u064b\u0627 \u0635\u063a\u064a\u0631\u0629 \u062c\u062f\u064b\u0627 (\u0636\u0628\u0627\u0628\u064a\u0629 \u0639\u0646\u062f \u0627\u0644\u0637\u0628\u0627\u0639\u0629) \u0623\u0648 \u0643\u0628\u064a\u0631\u0629 \u0628\u0644\u0627 \u062f\u0627\u0639\u064d (\u0628\u0637\u064a\u0626\u0629 \u0627\u0644\u062a\u062d\u0645\u064a\u0644 \u0639\u0644\u0649 \u0627\u0644\u0648\u064a\u0628).",
      heading5: "\u0643\u064a\u0641 \u062a\u0639\u062f \u0645\u0633\u062a\u0646\u062f\u064b\u0627 \u062c\u0627\u0647\u0632\u064b\u0627 \u0644\u0644\u0637\u0628\u0627\u0639\u0629\u061f",
      p4: "\u0627\u0628\u062f\u0623 \u0628\u062a\u062d\u062f\u064a\u062f \u062d\u062c\u0645 \u0627\u0644\u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0646\u0647\u0627\u0626\u064a \u0628\u0627\u0644\u0628\u0648\u0635\u0627\u062a. \u0627\u0636\u0631\u0628 \u0627\u0644\u0639\u0631\u0636 \u0648\u0627\u0644\u0627\u0631\u062a\u0641\u0627\u0639 \u0641\u064a 300 \u0644\u0644\u062d\u0635\u0648\u0644 \u0639\u0644\u0649 \u0623\u0628\u0639\u0627\u062f \u0628\u0643\u0633\u0644 \u0628\u062c\u0648\u062f\u0629 \u0627\u062d\u062a\u0631\u0627\u0641\u064a\u0629. \u0637\u0628\u0627\u0639\u0629 \u0635\u0648\u0631\u0629 5x7 \u0628\u0648\u0635\u0627\u062a \u062a\u062d\u062a\u0627\u062c \u0644\u0648\u062d\u0629 \u0628\u062d\u062c\u0645 1,500 x 2,100 \u0628\u0643\u0633\u0644. \u0644\u0644\u0645\u0644\u0635\u0642\u0627\u062a \u0627\u0644\u0643\u0628\u064a\u0631\u0629 \u0627\u0644\u062a\u064a \u062a\u064f\u0634\u0627\u0647\u062f \u0645\u0646 \u0639\u062f\u0629 \u0623\u0645\u062a\u0627\u0631\u060c 150 DPI \u0645\u0642\u0628\u0648\u0644\u060c \u0644\u0630\u0627 \u0645\u0644\u0635\u0642 24x36 \u0628\u0648\u0635\u0629 \u064a\u062d\u062a\u0627\u062c \u0641\u0642\u0637 3,600 x 5,400 \u0628\u0643\u0633\u0644 \u0628\u062f\u0644\u0627\u064b \u0645\u0646 7,200 x 10,800. \u0623\u0636\u0641 \u062f\u0627\u0626\u0645\u064b\u0627 0.125 \u0628\u0648\u0635\u0629 (\u0647\u0627\u0645\u0634 \u0627\u0644\u0642\u0635) \u0639\u0644\u0649 \u0643\u0644 \u062d\u0627\u0641\u0629 \u0639\u0646\u062f \u062a\u062d\u0636\u064a\u0631 \u0645\u0644\u0641\u0627\u062a \u0644\u0644\u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u062a\u062c\u0627\u0631\u064a\u0629\u060c \u0644\u0623\u0646 \u0639\u0645\u0644\u064a\u0629 \u0627\u0644\u0642\u0635 \u0642\u062f \u062a\u0642\u0637\u0639 \u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u062a\u0635\u0645\u064a\u0645.",
      heading6: "\u0642\u064a\u0627\u0633\u0627\u062a \u0634\u0627\u0626\u0639\u0629 \u0628\u0627\u0644\u0628\u0648\u0635\u0627\u062a \u0645\u062d\u0648\u0651\u0644\u0629 \u0625\u0644\u0649 \u0628\u0643\u0633\u0644\u0627\u062a",
      li9: "1 \u0628\u0648\u0635\u0629 \u2014 96 px \u0639\u0646\u062f 96 DPI\u060c 300 px \u0639\u0646\u062f 300 DPI",
      li10: "2 \u0628\u0648\u0635\u0629 \u2014 192 px \u0639\u0646\u062f 96 DPI\u060c 600 px \u0639\u0646\u062f 300 DPI",
      li11: "4 \u0628\u0648\u0635\u0627\u062a \u2014 384 px \u0639\u0646\u062f 96 DPI\u060c 1,200 px \u0639\u0646\u062f 300 DPI",
      li12: "6 \u0628\u0648\u0635\u0627\u062a \u2014 576 px \u0639\u0646\u062f 96 DPI\u060c 1,800 px \u0639\u0646\u062f 300 DPI",
      li13: "8 \u0628\u0648\u0635\u0627\u062a \u2014 768 px \u0639\u0646\u062f 96 DPI\u060c 2,400 px \u0639\u0646\u062f 300 DPI",
      li14: "12 \u0628\u0648\u0635\u0629 \u2014 1,152 px \u0639\u0646\u062f 96 DPI\u060c 3,600 px \u0639\u0646\u062f 300 DPI",
    },
  },
  tr: {
    faq: [
      {
        question: "\u0130n\u00e7i piksele nas\u0131l d\u00f6n\u00fc\u015ft\u00fcr\u00fcr\u00fcm?",
        answer:
          "\u0130n\u00e7 say\u0131s\u0131n\u0131 DPI (in\u00e7 ba\u015f\u0131na nokta) ile \u00e7arp\u0131n. \u00d6rne\u011fin, 96 DPI\u2019de 10 in\u00e7 = 960 piksel (10 x 96 = 960). DPI ayar\u0131, bir fiziksel in\u00e7i ka\u00e7 pikselin temsil etti\u011fini belirler.",
      },
      {
        question: "96 DPI\u2019de 1 in\u00e7 ka\u00e7 pikseldir?",
        answer:
          "96 DPI\u2019de 1 in\u00e7 tam olarak 96 pikseldir. Bu, Windows ekranlar\u0131nda web tasar\u0131m\u0131 i\u00e7in standart DPI\u2019dir ve ekran tabanl\u0131 tasar\u0131m \u00e7al\u0131\u015fmalar\u0131nda en yayg\u0131n kullan\u0131lan de\u011ferdir.",
      },
      {
        question: "300 DPI\u2019de 1 in\u00e7 ka\u00e7 pikseldir?",
        answer:
          "300 DPI\u2019de 1 in\u00e7, 300 pikseldir. Bu, dergiler, bro\u015f\u00fcrler ve y\u00fcksek kaliteli foto\u011fraf bask\u0131lar\u0131 dahil profesyonel bask\u0131 i\u00e7in standart \u00e7\u00f6z\u00fcn\u00fcrl\u00fckt\u00fcr.",
      },
      {
        question: "8.5 x 11 in\u00e7lik bir belge piksel olarak ne kadard\u0131r?",
        answer:
          "96 DPI\u2019de (web) 816 x 1056 piksel, 300 DPI\u2019de (bask\u0131) 2550 x 3300 pikseldir. Piksel boyutlar\u0131 DPI ayar\u0131yla do\u011fru orant\u0131l\u0131 olarak \u00f6l\u00e7eklenir.",
      },
      {
        question: "DPI\u2019yi de\u011fi\u015ftirmek piksel say\u0131s\u0131n\u0131 de\u011fi\u015ftirir mi?",
        answer:
          "\u0130n\u00e7ten piksele d\u00f6n\u00fc\u015ft\u00fcr\u00fcrken evet \u2014 daha y\u00fcksek DPI, ayn\u0131 fiziksel boyut i\u00e7in daha fazla piksel \u00fcretir. Bir g\u00f6r\u00fcnt\u00fc zaten mevcutsa, meta verilerdeki DPI\u2019yi de\u011fi\u015ftirmek yaln\u0131zca bask\u0131 boyutunu de\u011fi\u015ftirir, ger\u00e7ek piksel say\u0131s\u0131n\u0131 de\u011fil.",
      },
    ],
    body: {
      heading1: "\u0130n\u00e7ten piksele d\u00f6n\u00fc\u015f\u00fcm nas\u0131l \u00e7al\u0131\u015f\u0131r",
      p1: "Fiziksel tasar\u0131m \u00f6zelliklerini dijital formatlara aktar\u0131rken in\u00e7ten piksele d\u00f6n\u00fc\u015ft\u00fcrme zorunludur. Form\u00fcl basittir:",
      formula: "Piksel = \u0130n\u00e7 x DPI",
      p2: "DPI ayar\u0131 \u00e7\u00f6z\u00fcn\u00fcrl\u00fc\u011f\u00fc belirler. Web tasar\u0131mlar\u0131 genellikle 96 DPI kullan\u0131rken, bask\u0131 projeleri keskin ve profesyonel sonu\u00e7 i\u00e7in 300 DPI gerektirir.",
      heading2: "Yayg\u0131n kullan\u0131m alanlar\u0131",
      li1: "Bask\u0131ya haz\u0131r dosyalar olu\u015fturma: Bir belgeyi 300 DPI\u2019de bask\u0131 i\u00e7in do\u011fru piksel boyutlar\u0131yla ayarlay\u0131n.",
      li2: "Pankart ve tabela: B\u00fcy\u00fck format bask\u0131 i\u00e7in piksel gereksinimlerini hesaplay\u0131n.",
      li3: "Foto\u011fraf k\u0131rpma: Belirli bir bask\u0131 boyutu i\u00e7in gereken piksel boyutlar\u0131n\u0131 belirleyin.",
      li4: "UI tasar\u0131m \u00f6zellikleri: Ekran d\u00fczenleri i\u00e7in fiziksel boyut gereksinimlerini piksel de\u011ferlerine d\u00f6n\u00fc\u015ft\u00fcr\u00fcn.",
      heading3: "Standart belge boyutlar\u0131 (piksel)",
      li5: "Letter (8.5 x 11 in) \u2014 96 DPI\u2019de 816 x 1056 px, 300 DPI\u2019de 2550 x 3300 px",
      li6: "A4 (8.27 x 11.69 in) \u2014 96 DPI\u2019de 794 x 1123 px, 300 DPI\u2019de 2481 x 3507 px",
      li7: "4 x 6 in foto\u011fraf \u2014 96 DPI\u2019de 384 x 576 px, 300 DPI\u2019de 1200 x 1800 px",
      li8: "5 x 7 in foto\u011fraf \u2014 96 DPI\u2019de 480 x 672 px, 300 DPI\u2019de 1500 x 2100 px",
      heading4: "\u0130n\u00e7-piksel d\u00f6n\u00fc\u015f\u00fcm\u00fcnde DPI neden \u00f6nemlidir?",
      p3: "DPI, her fiziksel in\u00e7e ka\u00e7 pikselin s\u0131\u011fd\u0131\u011f\u0131n\u0131 do\u011frudan belirler. Daha y\u00fcksek DPI, in\u00e7 ba\u015f\u0131na daha fazla piksel paketleyerek ayn\u0131 fiziksel boyutta daha keskin ayr\u0131nt\u0131 \u00fcretir. 96 DPI\u2019de 8 in\u00e7 d\u00f6n\u00fc\u015ft\u00fcr\u00fcld\u00fc\u011f\u00fcnde sonu\u00e7 768 pikseldir. Ayn\u0131 8 in\u00e7 300 DPI\u2019de 2.400 piksel verir. 1.632 piksellik bu fark yakla\u015f\u0131k 4 kat daha fazla g\u00f6r\u00fcnt\u00fc verisi anlam\u0131na gelir; bu y\u00fczden bask\u0131 dosyalar\u0131 web grafiklerinden \u00e7ok daha b\u00fcy\u00fckt\u00fcr. Yanl\u0131\u015f DPI se\u00e7mek ya \u00e7ok k\u00fc\u00e7\u00fck (bask\u0131da bulan\u0131k) ya da gereksiz yere b\u00fcy\u00fck (webde yava\u015f y\u00fcklenen) g\u00f6r\u00fcnt\u00fcler \u00fcretir.",
      heading5: "Bask\u0131ya haz\u0131r belge nas\u0131l olu\u015fturulur?",
      p4: "\u00d6nce in\u00e7 cinsinden son bask\u0131 boyutunu belirleyin. Profesyonel kalitede piksel boyutlar\u0131 i\u00e7in geni\u015fli\u011fi ve y\u00fcksekli\u011fi 300 ile \u00e7arp\u0131n. 5x7 in\u00e7lik bir foto\u011fraf bask\u0131s\u0131 i\u00e7in 1.500 x 2.100 piksellik bir tuval gerekir. Birka\u00e7 metreden bak\u0131lan b\u00fcy\u00fck posterler i\u00e7in 150 DPI yeterlidir, bu nedenle 24x36 in\u00e7lik bir poster 7.200 x 10.800 yerine yaln\u0131zca 3.600 x 5.400 piksele ihtiya\u00e7 duyar. Ticari bask\u0131 i\u00e7in dosya haz\u0131rlarken her kenara 0.125 in\u00e7 (ta\u015fma pay\u0131) eklemeyi unutmay\u0131n, \u00e7\u00fcnk\u00fc kesim i\u015flemi tasar\u0131m alan\u0131na girebilir.",
      heading6: "Yayg\u0131n in\u00e7 \u00f6l\u00e7\u00fcleri piksel kar\u015f\u0131l\u0131klar\u0131",
      li9: "1 in\u00e7 \u2014 96 DPI\u2019de 96 px, 300 DPI\u2019de 300 px",
      li10: "2 in\u00e7 \u2014 96 DPI\u2019de 192 px, 300 DPI\u2019de 600 px",
      li11: "4 in\u00e7 \u2014 96 DPI\u2019de 384 px, 300 DPI\u2019de 1.200 px",
      li12: "6 in\u00e7 \u2014 96 DPI\u2019de 576 px, 300 DPI\u2019de 1.800 px",
      li13: "8 in\u00e7 \u2014 96 DPI\u2019de 768 px, 300 DPI\u2019de 2.400 px",
      li14: "12 in\u00e7 \u2014 96 DPI\u2019de 1.152 px, 300 DPI\u2019de 3.600 px",
    },
  },
  pl: {
    faq: [
      {
        question: "Jak przeliczy\u0107 cale na piksele?",
        answer:
          "Pomn\u00f3\u017c liczb\u0119 cali przez DPI (punkty na cal). Na przyk\u0142ad, 10 cali przy 96 DPI to 960 pikseli (10 x 96 = 960). Ustawienie DPI okre\u015bla, ile pikseli reprezentuje jeden cal fizyczny.",
      },
      {
        question: "Ile pikseli ma 1 cal przy 96 DPI?",
        answer:
          "Przy 96 DPI, 1 cal to dok\u0142adnie 96 pikseli. To standardowy DPI dla projektowania stron internetowych na ekranach Windows i najcz\u0119\u015bciej u\u017cywana warto\u015b\u0107 w pracach projektowych na ekran.",
      },
      {
        question: "Ile pikseli ma 1 cal przy 300 DPI?",
        answer:
          "Przy 300 DPI, 1 cal to 300 pikseli. To standardowa rozdzielczo\u015b\u0107 dla profesjonalnego druku, w tym czasopism, broszur i wysokiej jako\u015bci wydruk\u00f3w zdj\u0119ciowych.",
      },
      {
        question: "Jaki rozmiar w pikselach ma dokument 8.5 x 11 cali?",
        answer:
          "Przy 96 DPI (web) to 816 x 1056 pikseli. Przy 300 DPI (druk) to 2550 x 3300 pikseli. Wymiary w pikselach skaluj\u0105 si\u0119 wprost proporcjonalnie do ustawienia DPI.",
      },
      {
        question: "Czy zmiana DPI zmienia liczb\u0119 pikseli?",
        answer:
          "Przy przeliczaniu cali na piksele, tak \u2014 wy\u017cszy DPI generuje wi\u0119cej pikseli przy tym samym rozmiarze fizycznym. Gdy obraz ju\u017c istnieje, zmiana DPI w metadanych zmienia jedynie rozmiar wydruku, a nie rzeczywist\u0105 liczb\u0119 pikseli.",
      },
    ],
    body: {
      heading1: "Jak dzia\u0142a przeliczanie cali na piksele",
      p1: "Przeliczanie cali na piksele jest niezb\u0119dne przy t\u0142umaczeniu fizycznych specyfikacji projektowych na formaty cyfrowe. Wz\u00f3r jest prosty:",
      formula: "Piksele = Cale x DPI",
      p2: "Ustawienie DPI okre\u015bla rozdzielczo\u015b\u0107. Projekty webowe zazwyczaj u\u017cywaj\u0105 96 DPI, podczas gdy projekty drukowe wymagaj\u0105 300 DPI dla ostrego, profesjonalnego rezultatu.",
      heading2: "Typowe zastosowania",
      li1: "Tworzenie plik\u00f3w gotowych do druku: Ustaw dokument z prawid\u0142owymi wymiarami pikseli do druku przy 300 DPI.",
      li2: "Banery i oznakowanie: Oblicz wymagania pikselowe dla druku wielkoformatowego.",
      li3: "Kadrowanie zdj\u0119\u0107: Okre\u015bl wymiary w pikselach potrzebne dla konkretnego rozmiaru wydruku.",
      li4: "Specyfikacje projektu UI: Przelicz wymagania dotycz\u0105ce rozmiaru fizycznego na warto\u015bci pikseli dla uk\u0142ad\u00f3w ekranowych.",
      heading3: "Standardowe rozmiary dokument\u00f3w w pikselach",
      li5: "Letter (8.5 x 11 in) \u2014 816 x 1056 px przy 96 DPI, 2550 x 3300 px przy 300 DPI",
      li6: "A4 (8.27 x 11.69 in) \u2014 794 x 1123 px przy 96 DPI, 2481 x 3507 px przy 300 DPI",
      li7: "Zdj\u0119cie 4 x 6 in \u2014 384 x 576 px przy 96 DPI, 1200 x 1800 px przy 300 DPI",
      li8: "Zdj\u0119cie 5 x 7 in \u2014 480 x 672 px przy 96 DPI, 1500 x 2100 px przy 300 DPI",
      heading4: "Dlaczego DPI ma znaczenie przy przeliczaniu cali na piksele?",
      p3: "DPI bezpo\u015brednio okre\u015bla, ile pikseli mie\u015bci si\u0119 w ka\u017cdym fizycznym calu. Wy\u017cszy DPI pakuje wi\u0119cej pikseli na cal, daj\u0105c ostrzejsze detale przy tym samym rozmiarze fizycznym. Przeliczaj\u0105c 8 cali przy 96 DPI, wynik to 768 pikseli. Te same 8 cali przy 300 DPI daje 2400 pikseli. Ta r\u00f3\u017cnica 1632 pikseli oznacza oko\u0142o 4-krotnie wi\u0119cej danych obrazu, dlatego pliki drukowe s\u0105 znacznie wi\u0119ksze ni\u017c grafiki webowe. Wyb\u00f3r z\u0142ego DPI daje obrazy zbyt ma\u0142e (rozmyte przy druku) lub niepotrzebnie du\u017ce (wolno \u0142aduj\u0105ce si\u0119 w sieci).",
      heading5: "Jak przygotowa\u0107 dokument gotowy do druku?",
      p4: "Zacznij od okre\u015blenia ko\u0144cowego rozmiaru wydruku w calach. Pomn\u00f3\u017c szeroko\u015b\u0107 i wysoko\u015b\u0107 przez 300, aby uzyska\u0107 wymiary pikseli w jako\u015bci profesjonalnej. Wydruk zdj\u0119cia 5x7 cali wymaga p\u0142\u00f3tna o wymiarach 1500 x 2100 pikseli. Dla du\u017cych plakat\u00f3w ogl\u0105danych z kilku metr\u00f3w 150 DPI jest wystarczaj\u0105ce, wi\u0119c plakat 24x36 cali potrzebuje tylko 3600 x 5400 pikseli zamiast 7200 x 10 800. Zawsze dodawaj 0.125 cala (spad) na ka\u017cd\u0105 kraw\u0119d\u017a przy przygotowywaniu plik\u00f3w do druku komercyjnego, poniewa\u017c proces ci\u0119cia mo\u017ce wci\u0105\u0107 w obszar projektu.",
      heading6: "Powszechne miary w calach przeliczone na piksele",
      li9: "1 cal \u2014 96 px przy 96 DPI, 300 px przy 300 DPI",
      li10: "2 cale \u2014 192 px przy 96 DPI, 600 px przy 300 DPI",
      li11: "4 cale \u2014 384 px przy 96 DPI, 1200 px przy 300 DPI",
      li12: "6 cali \u2014 576 px przy 96 DPI, 1800 px przy 300 DPI",
      li13: "8 cali \u2014 768 px przy 96 DPI, 2400 px przy 300 DPI",
      li14: "12 cali \u2014 1152 px przy 96 DPI, 3600 px przy 300 DPI",
    },
  },
  id: {
    faq: [
      {
        question: "Bagaimana cara mengonversi inci ke piksel?",
        answer:
          "Kalikan jumlah inci dengan DPI (titik per inci). Contoh, 10 inci pada 96 DPI sama dengan 960 piksel (10 x 96 = 960). Pengaturan DPI menentukan berapa piksel yang mewakili satu inci fisik.",
      },
      {
        question: "Berapa piksel 1 inci pada 96 DPI?",
        answer:
          "Pada 96 DPI, 1 inci sama dengan tepat 96 piksel. Ini adalah DPI standar untuk desain web pada tampilan Windows dan nilai yang paling umum digunakan untuk pekerjaan desain berbasis layar.",
      },
      {
        question: "Berapa piksel 1 inci pada 300 DPI?",
        answer:
          "Pada 300 DPI, 1 inci sama dengan 300 piksel. Ini adalah resolusi standar untuk output cetak profesional, termasuk majalah, brosur, dan cetak foto berkualitas tinggi.",
      },
      {
        question: "Berapa ukuran piksel dokumen 8.5 x 11 inci?",
        answer:
          "Pada 96 DPI (web), ukurannya 816 x 1056 piksel. Pada 300 DPI (cetak), ukurannya 2550 x 3300 piksel. Dimensi piksel berskala langsung sesuai pengaturan DPI.",
      },
      {
        question: "Apakah mengubah DPI mengubah jumlah piksel?",
        answer:
          "Saat mengonversi inci ke piksel, ya \u2014 DPI lebih tinggi menghasilkan lebih banyak piksel untuk ukuran fisik yang sama. Jika gambar sudah ada, mengubah DPI di metadata hanya mengubah ukuran cetak, bukan jumlah piksel sebenarnya.",
      },
    ],
    body: {
      heading1: "Cara kerja konversi inci ke piksel",
      p1: "Mengonversi inci ke piksel sangat penting saat menerjemahkan spesifikasi desain fisik ke format digital. Rumusnya sederhana:",
      formula: "Piksel = Inci x DPI",
      p2: "Pengaturan DPI menentukan resolusi. Desain web biasanya menggunakan 96 DPI, sementara proyek cetak memerlukan 300 DPI untuk hasil yang tajam dan profesional.",
      heading2: "Kasus penggunaan umum",
      li1: "Membuat file siap cetak: Atur dokumen dengan dimensi piksel yang tepat untuk cetak pada 300 DPI.",
      li2: "Banner dan signage: Hitung kebutuhan piksel untuk pencetakan format besar.",
      li3: "Pemotongan foto: Tentukan dimensi piksel yang dibutuhkan untuk ukuran cetak tertentu.",
      li4: "Spesifikasi desain UI: Ubah persyaratan ukuran fisik menjadi nilai piksel untuk tata letak layar.",
      heading3: "Ukuran dokumen standar dalam piksel",
      li5: "Letter (8.5 x 11 in) \u2014 816 x 1056 px pada 96 DPI, 2550 x 3300 px pada 300 DPI",
      li6: "A4 (8.27 x 11.69 in) \u2014 794 x 1123 px pada 96 DPI, 2481 x 3507 px pada 300 DPI",
      li7: "Foto 4 x 6 in \u2014 384 x 576 px pada 96 DPI, 1200 x 1800 px pada 300 DPI",
      li8: "Foto 5 x 7 in \u2014 480 x 672 px pada 96 DPI, 1500 x 2100 px pada 300 DPI",
      heading4: "Mengapa DPI penting dalam konversi inci ke piksel?",
      p3: "DPI secara langsung menentukan berapa piksel yang muat dalam setiap inci fisik. DPI lebih tinggi memuat lebih banyak piksel per inci, menghasilkan detail lebih tajam pada ukuran fisik yang sama. Saat mengonversi 8 inci pada 96 DPI, hasilnya 768 piksel. 8 inci yang sama pada 300 DPI menghasilkan 2.400 piksel. Perbedaan 1.632 piksel itu setara dengan sekitar 4x lebih banyak data gambar, itulah mengapa file cetak jauh lebih besar dari grafis web. Memilih DPI yang salah menghasilkan gambar yang terlalu kecil (buram saat dicetak) atau terlalu besar (lambat dimuat di web).",
      heading5: "Cara menyiapkan dokumen siap cetak",
      p4: "Mulai dengan menentukan ukuran cetak akhir dalam inci. Kalikan lebar dan tinggi dengan 300 untuk mendapatkan dimensi piksel berkualitas profesional. Cetak foto 5x7 inci memerlukan kanvas 1.500 x 2.100 piksel. Untuk poster besar yang dilihat dari jarak beberapa meter, 150 DPI sudah cukup, jadi poster 24x36 inci hanya membutuhkan 3.600 x 5.400 piksel alih-alih 7.200 x 10.800. Selalu tambahkan 0.125 inci (bleed) di setiap tepi saat menyiapkan file untuk cetak komersial, karena proses pemotongan dapat memotong area desain.",
      heading6: "Ukuran inci umum dikonversi ke piksel",
      li9: "1 inci \u2014 96 px pada 96 DPI, 300 px pada 300 DPI",
      li10: "2 inci \u2014 192 px pada 96 DPI, 600 px pada 300 DPI",
      li11: "4 inci \u2014 384 px pada 96 DPI, 1.200 px pada 300 DPI",
      li12: "6 inci \u2014 576 px pada 96 DPI, 1.800 px pada 300 DPI",
      li13: "8 inci \u2014 768 px pada 96 DPI, 2.400 px pada 300 DPI",
      li14: "12 inci \u2014 1.152 px pada 96 DPI, 3.600 px pada 300 DPI",
    },
  },
  ru: {
    faq: [
      {
        question: "\u041a\u0430\u043a \u043f\u0435\u0440\u0435\u0432\u0435\u0441\u0442\u0438 \u0434\u044e\u0439\u043c\u044b \u0432 \u043f\u0438\u043a\u0441\u0435\u043b\u0438?",
        answer:
          "\u0423\u043c\u043d\u043e\u0436\u044c\u0442\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0434\u044e\u0439\u043c\u043e\u0432 \u043d\u0430 DPI (\u0442\u043e\u0447\u0435\u043a \u043d\u0430 \u0434\u044e\u0439\u043c). \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, 10 \u0434\u044e\u0439\u043c\u043e\u0432 \u043f\u0440\u0438 96 DPI = 960 \u043f\u0438\u043a\u0441\u0435\u043b\u0435\u0439 (10 x 96 = 960). \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 DPI \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442, \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u0438\u043a\u0441\u0435\u043b\u0435\u0439 \u043f\u0440\u0438\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u043d\u0430 \u043e\u0434\u0438\u043d \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0434\u044e\u0439\u043c.",
      },
      {
        question: "\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u0438\u043a\u0441\u0435\u043b\u0435\u0439 \u0432 1 \u0434\u044e\u0439\u043c\u0435 \u043f\u0440\u0438 96 DPI?",
        answer:
          "\u041f\u0440\u0438 96 DPI 1 \u0434\u044e\u0439\u043c \u0440\u0430\u0432\u0435\u043d \u0440\u043e\u0432\u043d\u043e 96 \u043f\u0438\u043a\u0441\u0435\u043b\u044f\u043c. \u042d\u0442\u043e \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0439 DPI \u0434\u043b\u044f \u0432\u0435\u0431-\u0434\u0438\u0437\u0430\u0439\u043d\u0430 \u043d\u0430 \u044d\u043a\u0440\u0430\u043d\u0430\u0445 Windows \u0438 \u043d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0451\u043d\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u044d\u043a\u0440\u0430\u043d\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430.",
      },
      {
        question: "\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u0438\u043a\u0441\u0435\u043b\u0435\u0439 \u0432 1 \u0434\u044e\u0439\u043c\u0435 \u043f\u0440\u0438 300 DPI?",
        answer:
          "\u041f\u0440\u0438 300 DPI 1 \u0434\u044e\u0439\u043c \u0440\u0430\u0432\u0435\u043d 300 \u043f\u0438\u043a\u0441\u0435\u043b\u044f\u043c. \u042d\u0442\u043e \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0439 \u043f\u0435\u0447\u0430\u0442\u0438, \u0432\u043a\u043b\u044e\u0447\u0430\u044f \u0436\u0443\u0440\u043d\u0430\u043b\u044b, \u0431\u0440\u043e\u0448\u044e\u0440\u044b \u0438 \u0432\u044b\u0441\u043e\u043a\u043e\u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u0443\u044e \u0444\u043e\u0442\u043e\u043f\u0435\u0447\u0430\u0442\u044c.",
      },
      {
        question: "\u041a\u0430\u043a\u043e\u0439 \u0440\u0430\u0437\u043c\u0435\u0440 \u0432 \u043f\u0438\u043a\u0441\u0435\u043b\u044f\u0445 \u0443 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 8.5 x 11 \u0434\u044e\u0439\u043c\u043e\u0432?",
        answer:
          "\u041f\u0440\u0438 96 DPI (\u0432\u0435\u0431) \u2014 816 x 1056 \u043f\u0438\u043a\u0441\u0435\u043b\u0435\u0439. \u041f\u0440\u0438 300 DPI (\u043f\u0435\u0447\u0430\u0442\u044c) \u2014 2550 x 3300 \u043f\u0438\u043a\u0441\u0435\u043b\u0435\u0439. \u0420\u0430\u0437\u043c\u0435\u0440\u044b \u0432 \u043f\u0438\u043a\u0441\u0435\u043b\u044f\u0445 \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u043f\u0440\u043e\u043f\u043e\u0440\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0435 DPI.",
      },
      {
        question: "\u041c\u0435\u043d\u044f\u0435\u0442 \u043b\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 DPI \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0438\u043a\u0441\u0435\u043b\u0435\u0439?",
        answer:
          "\u041f\u0440\u0438 \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0435 \u0434\u044e\u0439\u043c\u043e\u0432 \u0432 \u043f\u0438\u043a\u0441\u0435\u043b\u0438, \u0434\u0430 \u2014 \u0431\u043e\u043b\u0435\u0435 \u0432\u044b\u0441\u043e\u043a\u0438\u0439 DPI \u0434\u0430\u0451\u0442 \u0431\u043e\u043b\u044c\u0448\u0435 \u043f\u0438\u043a\u0441\u0435\u043b\u0435\u0439 \u043f\u0440\u0438 \u0442\u043e\u043c \u0436\u0435 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u043e\u043c \u0440\u0430\u0437\u043c\u0435\u0440\u0435. \u0415\u0441\u043b\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442, \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 DPI \u0432 \u043c\u0435\u0442\u0430\u0434\u0430\u043d\u043d\u044b\u0445 \u043c\u0435\u043d\u044f\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u0440\u0430\u0437\u043c\u0435\u0440 \u043f\u0435\u0447\u0430\u0442\u0438, \u0430 \u043d\u0435 \u0444\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u043f\u0438\u043a\u0441\u0435\u043b\u0435\u0439.",
      },
    ],
    body: {
      heading1: "\u041a\u0430\u043a \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043f\u0435\u0440\u0435\u0432\u043e\u0434 \u0434\u044e\u0439\u043c\u043e\u0432 \u0432 \u043f\u0438\u043a\u0441\u0435\u043b\u0438",
      p1: "\u041f\u0435\u0440\u0435\u0432\u043e\u0434 \u0434\u044e\u0439\u043c\u043e\u0432 \u0432 \u043f\u0438\u043a\u0441\u0435\u043b\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c \u043f\u0440\u0438 \u043f\u0435\u0440\u0435\u043d\u043e\u0441\u0435 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043f\u0440\u043e\u0435\u043a\u0442\u043d\u044b\u0445 \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0439 \u0432 \u0446\u0438\u0444\u0440\u043e\u0432\u044b\u0435 \u0444\u043e\u0440\u043c\u0430\u0442\u044b. \u0424\u043e\u0440\u043c\u0443\u043b\u0430 \u043f\u0440\u043e\u0441\u0442\u0430:",
      formula: "\u041f\u0438\u043a\u0441\u0435\u043b\u0438 = \u0414\u044e\u0439\u043c\u044b x DPI",
      p2: "\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 DPI \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435. \u0412\u0435\u0431-\u0434\u0438\u0437\u0430\u0439\u043d \u043e\u0431\u044b\u0447\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 96 DPI, \u0430 \u043f\u0435\u0447\u0430\u0442\u043d\u044b\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u044b \u0442\u0440\u0435\u0431\u0443\u044e\u0442 300 DPI \u0434\u043b\u044f \u0447\u0451\u0442\u043a\u043e\u0433\u043e, \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430.",
      heading2: "\u0422\u0438\u043f\u0438\u0447\u043d\u044b\u0435 \u0441\u043b\u0443\u0447\u0430\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f",
      li1: "\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0444\u0430\u0439\u043b\u043e\u0432 \u0434\u043b\u044f \u043f\u0435\u0447\u0430\u0442\u0438: \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442 \u0441 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u043c\u0438 \u0440\u0430\u0437\u043c\u0435\u0440\u0430\u043c\u0438 \u0432 \u043f\u0438\u043a\u0441\u0435\u043b\u044f\u0445 \u0434\u043b\u044f \u043f\u0435\u0447\u0430\u0442\u0438 \u043f\u0440\u0438 300 DPI.",
      li2: "\u0411\u0430\u043d\u043d\u0435\u0440\u044b \u0438 \u0432\u044b\u0432\u0435\u0441\u043a\u0438: \u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0439\u0442\u0435 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f \u043a \u043f\u0438\u043a\u0441\u0435\u043b\u044f\u043c \u0434\u043b\u044f \u043a\u0440\u0443\u043f\u043d\u043e\u0444\u043e\u0440\u043c\u0430\u0442\u043d\u043e\u0439 \u043f\u0435\u0447\u0430\u0442\u0438.",
      li3: "\u041e\u0431\u0440\u0435\u0437\u043a\u0430 \u0444\u043e\u0442\u043e: \u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u0435 \u0440\u0430\u0437\u043c\u0435\u0440\u044b \u0432 \u043f\u0438\u043a\u0441\u0435\u043b\u044f\u0445, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0435 \u0434\u043b\u044f \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u0440\u0430\u0437\u043c\u0435\u0440\u0430 \u043f\u0435\u0447\u0430\u0442\u0438.",
      li4: "\u0421\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 UI-\u0434\u0438\u0437\u0430\u0439\u043d\u0430: \u041f\u0435\u0440\u0435\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f \u043a \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u043e\u043c\u0443 \u0440\u0430\u0437\u043c\u0435\u0440\u0443 \u0432 \u043f\u0438\u043a\u0441\u0435\u043b\u044c\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u044d\u043a\u0440\u0430\u043d\u043d\u044b\u0445 \u043c\u0430\u043a\u0435\u0442\u043e\u0432.",
      heading3: "\u0421\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0435 \u0440\u0430\u0437\u043c\u0435\u0440\u044b \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0432 \u043f\u0438\u043a\u0441\u0435\u043b\u044f\u0445",
      li5: "Letter (8.5 x 11 in) \u2014 816 x 1056 px \u043f\u0440\u0438 96 DPI, 2550 x 3300 px \u043f\u0440\u0438 300 DPI",
      li6: "A4 (8.27 x 11.69 in) \u2014 794 x 1123 px \u043f\u0440\u0438 96 DPI, 2481 x 3507 px \u043f\u0440\u0438 300 DPI",
      li7: "\u0424\u043e\u0442\u043e 4 x 6 in \u2014 384 x 576 px \u043f\u0440\u0438 96 DPI, 1200 x 1800 px \u043f\u0440\u0438 300 DPI",
      li8: "\u0424\u043e\u0442\u043e 5 x 7 in \u2014 480 x 672 px \u043f\u0440\u0438 96 DPI, 1500 x 2100 px \u043f\u0440\u0438 300 DPI",
      heading4: "\u041f\u043e\u0447\u0435\u043c\u0443 DPI \u0432\u0430\u0436\u0435\u043d \u043f\u0440\u0438 \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0435 \u0434\u044e\u0439\u043c\u043e\u0432 \u0432 \u043f\u0438\u043a\u0441\u0435\u043b\u0438?",
      p3: "DPI \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442, \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u0438\u043a\u0441\u0435\u043b\u0435\u0439 \u043f\u043e\u043c\u0435\u0449\u0430\u0435\u0442\u0441\u044f \u0432 \u043a\u0430\u0436\u0434\u044b\u0439 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0434\u044e\u0439\u043c. \u0411\u043e\u043b\u0435\u0435 \u0432\u044b\u0441\u043e\u043a\u0438\u0439 DPI \u0443\u043f\u0430\u043a\u043e\u0432\u044b\u0432\u0430\u0435\u0442 \u0431\u043e\u043b\u044c\u0448\u0435 \u043f\u0438\u043a\u0441\u0435\u043b\u0435\u0439 \u043d\u0430 \u0434\u044e\u0439\u043c, \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u044f \u0431\u043e\u043b\u0435\u0435 \u0447\u0451\u0442\u043a\u0438\u0435 \u0434\u0435\u0442\u0430\u043b\u0438 \u043f\u0440\u0438 \u0442\u043e\u043c \u0436\u0435 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u043e\u043c \u0440\u0430\u0437\u043c\u0435\u0440\u0435. \u041f\u0440\u0438 \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0435 8 \u0434\u044e\u0439\u043c\u043e\u0432 \u043f\u0440\u0438 96 DPI \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u2014 768 \u043f\u0438\u043a\u0441\u0435\u043b\u0435\u0439. \u0422\u0435 \u0436\u0435 8 \u0434\u044e\u0439\u043c\u043e\u0432 \u043f\u0440\u0438 300 DPI \u0434\u0430\u044e\u0442 2 400 \u043f\u0438\u043a\u0441\u0435\u043b\u0435\u0439. \u0420\u0430\u0437\u043d\u0438\u0446\u0430 \u0432 1 632 \u043f\u0438\u043a\u0441\u0435\u043b\u044f \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442 \u043f\u0440\u0438\u043c\u0435\u0440\u043d\u043e \u0432 4 \u0440\u0430\u0437\u0430 \u0431\u043e\u043b\u044c\u0448\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0444\u0430\u0439\u043b\u044b \u0434\u043b\u044f \u043f\u0435\u0447\u0430\u0442\u0438 \u0437\u043d\u0430\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0431\u043e\u043b\u044c\u0448\u0435 \u0432\u0435\u0431-\u0433\u0440\u0430\u0444\u0438\u043a\u0438. \u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 DPI \u0434\u0430\u0451\u0442 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u043b\u0438\u0431\u043e \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0435 (\u0440\u0430\u0437\u043c\u044b\u0442\u044b\u0435 \u043f\u0440\u0438 \u043f\u0435\u0447\u0430\u0442\u0438), \u043b\u0438\u0431\u043e \u0438\u0437\u043b\u0438\u0448\u043d\u0435 \u0431\u043e\u043b\u044c\u0448\u0438\u0435 (\u043c\u0435\u0434\u043b\u0435\u043d\u043d\u043e \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u044e\u0449\u0438\u0435\u0441\u044f \u0432 \u0432\u0435\u0431\u0435).",
      heading5: "\u041a\u0430\u043a \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u0438\u0442\u044c \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442 \u0434\u043b\u044f \u043f\u0435\u0447\u0430\u0442\u0438?",
      p4: "\u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u0441 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0438\u0442\u043e\u0433\u043e\u0432\u043e\u0433\u043e \u0440\u0430\u0437\u043c\u0435\u0440\u0430 \u043f\u0435\u0447\u0430\u0442\u0438 \u0432 \u0434\u044e\u0439\u043c\u0430\u0445. \u0423\u043c\u043d\u043e\u0436\u044c\u0442\u0435 \u0448\u0438\u0440\u0438\u043d\u0443 \u0438 \u0432\u044b\u0441\u043e\u0442\u0443 \u043d\u0430 300 \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u043f\u0438\u043a\u0441\u0435\u043b\u044c\u043d\u044b\u0445 \u0440\u0430\u0437\u043c\u0435\u0440\u043e\u0432 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430. \u0414\u043b\u044f \u0444\u043e\u0442\u043e\u043f\u0435\u0447\u0430\u0442\u0438 5x7 \u0434\u044e\u0439\u043c\u043e\u0432 \u043d\u0443\u0436\u0435\u043d \u0445\u043e\u043b\u0441\u0442 1 500 x 2 100 \u043f\u0438\u043a\u0441\u0435\u043b\u0435\u0439. \u0414\u043b\u044f \u0431\u043e\u043b\u044c\u0448\u0438\u0445 \u043f\u043b\u0430\u043a\u0430\u0442\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0441\u043c\u043e\u0442\u0440\u044f\u0442 \u0441 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u043c\u0435\u0442\u0440\u043e\u0432, \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e 150 DPI, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043f\u043b\u0430\u043a\u0430\u0442 24x36 \u0434\u044e\u0439\u043c\u043e\u0432 \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u043b\u0438\u0448\u044c 3 600 x 5 400 \u043f\u0438\u043a\u0441\u0435\u043b\u0435\u0439 \u0432\u043c\u0435\u0441\u0442\u043e 7 200 x 10 800. \u041f\u0440\u0438 \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0435 \u0444\u0430\u0439\u043b\u043e\u0432 \u0434\u043b\u044f \u043a\u043e\u043c\u043c\u0435\u0440\u0447\u0435\u0441\u043a\u043e\u0439 \u043f\u0435\u0447\u0430\u0442\u0438 \u0432\u0441\u0435\u0433\u0434\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0439\u0442\u0435 0.125 \u0434\u044e\u0439\u043c\u0430 (\u043f\u043e\u0434 \u043e\u0431\u0440\u0435\u0437) \u0441 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043a\u0440\u0430\u044f, \u0442\u0430\u043a \u043a\u0430\u043a \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u043e\u0431\u0440\u0435\u0437\u043a\u0438 \u043c\u043e\u0436\u0435\u0442 \u0437\u0430\u0442\u0440\u043e\u043d\u0443\u0442\u044c \u043e\u0431\u043b\u0430\u0441\u0442\u044c \u0434\u0438\u0437\u0430\u0439\u043d\u0430.",
      heading6: "\u0420\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0435 \u0440\u0430\u0437\u043c\u0435\u0440\u044b \u0432 \u0434\u044e\u0439\u043c\u0430\u0445 \u0432 \u043f\u0438\u043a\u0441\u0435\u043b\u044f\u0445",
      li9: "1 \u0434\u044e\u0439\u043c \u2014 96 px \u043f\u0440\u0438 96 DPI, 300 px \u043f\u0440\u0438 300 DPI",
      li10: "2 \u0434\u044e\u0439\u043c\u0430 \u2014 192 px \u043f\u0440\u0438 96 DPI, 600 px \u043f\u0440\u0438 300 DPI",
      li11: "4 \u0434\u044e\u0439\u043c\u0430 \u2014 384 px \u043f\u0440\u0438 96 DPI, 1 200 px \u043f\u0440\u0438 300 DPI",
      li12: "6 \u0434\u044e\u0439\u043c\u043e\u0432 \u2014 576 px \u043f\u0440\u0438 96 DPI, 1 800 px \u043f\u0440\u0438 300 DPI",
      li13: "8 \u0434\u044e\u0439\u043c\u043e\u0432 \u2014 768 px \u043f\u0440\u0438 96 DPI, 2 400 px \u043f\u0440\u0438 300 DPI",
      li14: "12 \u0434\u044e\u0439\u043c\u043e\u0432 \u2014 1 152 px \u043f\u0440\u0438 96 DPI, 3 600 px \u043f\u0440\u0438 300 DPI",
    },
  },
};
