import type { PageContentMap } from "./types";

export const content: PageContentMap = {
  en: {
    faq: [
      {
        question: "How do I convert feet to pixels?",
        answer:
          "Multiply the feet by 12 (to get inches), then multiply by DPI. For example, 3 feet at 96 DPI equals 3,456 pixels (3 x 12 x 96 = 3,456).",
      },
      {
        question: "How many pixels is 1 foot at 96 DPI?",
        answer:
          "At 96 DPI, 1 foot equals 1,152 pixels (12 inches x 96 pixels per inch = 1,152). This is the standard for web-resolution large-format design.",
      },
      {
        question: "How many pixels is 1 foot at 300 DPI?",
        answer:
          "At 300 DPI, 1 foot equals 3,600 pixels (12 inches x 300 pixels per inch = 3,600). This high resolution is used for print-quality large-format output.",
      },
      {
        question: "What DPI should I use for large-format printing?",
        answer:
          "Large-format prints viewed from a distance (banners, billboards) can use 72-150 DPI. Prints viewed up close (trade show displays, posters) should use 150-300 DPI for sharp details.",
      },
      {
        question:
          "How large of a file do I need for a 4-foot banner at 150 DPI?",
        answer:
          "A 4-foot wide banner at 150 DPI requires 7,200 pixels wide (4 x 12 x 150 = 7,200). For a 4 x 8 foot banner, the file would be 7,200 x 14,400 pixels.",
      },
    ],
    body: {
      heading1: "How Feet to Pixel Conversion Works",
      p1: "Converting feet to pixels is essential for large-format design projects like banners, signage, and wall graphics. The formula is:",
      formula: "Pixels = Feet x 12 x DPI",
      p2: "Since there are 12 inches in a foot, you first convert feet to inches, then multiply by DPI to get the pixel count.",
      heading2: "Common Use Cases",
      li1: "Banner design: Calculate pixel dimensions for trade show banners and event signage.",
      li2: "Wall murals: Determine the resolution needed for wall-sized prints.",
      li3: "Billboard design: Plan pixel dimensions for large outdoor advertising.",
      li4: "Architectural visualization: Convert room dimensions to pixel sizes for renderings.",
      heading3: "Large-Format DPI Guidelines",
      li5: "72 DPI — Billboards viewed from 50+ feet away.",
      li6: "100 DPI — Large banners viewed from 10-20 feet.",
      li7: "150 DPI — Trade show displays and posters viewed from 3-10 feet.",
      li8: "300 DPI — Close-up print quality, rarely needed for large format.",
      heading4: "Common Banner Sizes in Pixels (at 150 DPI)",
      li9: "2 x 4 feet — 3,600 x 7,200 pixels",
      li10: "3 x 6 feet — 5,400 x 10,800 pixels",
      li11: "4 x 8 feet — 7,200 x 14,400 pixels",
      li12: "8 x 10 feet — 14,400 x 18,000 pixels",
      heading5: "What DPI Should You Use for Large-Format Prints?",
      p3: "The optimal DPI for large prints depends on viewing distance. Billboards seen from 50+ feet away look sharp at just 30-50 DPI. Street-level banners viewed from 10-20 feet work well at 72-100 DPI. Trade show displays where visitors stand 3-6 feet away need 150 DPI for crisp text and images. Gallery prints and close-up signage require 300 DPI. Using unnecessarily high DPI for large-format work creates massive files (a 10x8 foot banner at 300 DPI would be 36,000 x 28,800 pixels, or over 1 billion pixels) without any visible quality improvement at the intended viewing distance.",
      heading6: "How Large Are Common Large-Format Projects in Pixels?",
      p4: "A standard retractable banner stand (2.5 x 6.5 feet) at 150 DPI needs 4,500 x 11,700 pixels. A vehicle wrap for a standard sedan (roughly 5 x 16 feet of printable area) at 100 DPI requires 6,000 x 19,200 pixels. A wall mural covering a 10 x 12 foot wall at 72 DPI needs 8,640 x 10,368 pixels. These numbers help you assess whether stock images or camera photos have sufficient resolution for your project before starting the design.",
      heading7: "Why Do Feet-to-Pixel Conversions Matter for Architects?",
      p5: "Architectural visualization often starts with room dimensions in feet. A 12 x 15 foot room rendered at 150 DPI produces a 21,600 x 27,000 pixel image. Interior designers converting floor plans to digital mockups need these pixel dimensions to create accurate-scale renderings. Real estate photographers planning large wall prints of property photos use feet-to-pixel conversion to confirm that their camera output (typically 24-61 megapixels) can produce a sharp print at the client's desired wall size.",
    },
  },
  es: {
    faq: [
      {
        question: "Como convierto pies a pixels?",
        answer:
          "Multiplica los pies por 12 (para obtener pulgadas) y luego por DPI. Por ejemplo, 3 pies a 96 DPI equivale a 3,456 pixels (3 x 12 x 96 = 3,456).",
      },
      {
        question: "Cuantos pixels mide 1 pie a 96 DPI?",
        answer:
          "A 96 DPI, 1 pie equivale a 1,152 pixels (12 pulgadas x 96 pixels por pulgada = 1,152). Este es el estandar para diseno de gran formato en resolucion web.",
      },
      {
        question: "Cuantos pixels mide 1 pie a 300 DPI?",
        answer:
          "A 300 DPI, 1 pie equivale a 3,600 pixels (12 pulgadas x 300 pixels por pulgada = 3,600). Esta alta resolucion se usa para salida de gran formato con calidad de impresion.",
      },
      {
        question: "Que DPI debo usar para impresion de gran formato?",
        answer:
          "Las impresiones de gran formato vistas a distancia (banners, vallas publicitarias) pueden usar 72-150 DPI. Las impresiones vistas de cerca (displays de ferias, carteles) deben usar 150-300 DPI para detalles nitidos.",
      },
      {
        question:
          "Que tamano de archivo necesito para un banner de 4 pies a 150 DPI?",
        answer:
          "Un banner de 4 pies de ancho a 150 DPI requiere 7,200 pixels de ancho (4 x 12 x 150 = 7,200). Para un banner de 4 x 8 pies, el archivo seria de 7,200 x 14,400 pixels.",
      },
    ],
    body: {
      heading1: "Como funciona la conversion de pies a pixels",
      p1: "Convertir pies a pixels es esencial para proyectos de diseno de gran formato como banners, senalizacion y graficos murales. La formula es:",
      formula: "Pixels = Pies x 12 x DPI",
      p2: "Como hay 12 pulgadas en un pie, primero conviertes pies a pulgadas y luego multiplicas por DPI para obtener la cantidad de pixels.",
      heading2: "Casos de uso comunes",
      li1: "Diseno de banners: Calcular dimensiones en pixels para banners de ferias y senalizacion de eventos.",
      li2: "Murales: Determinar la resolucion necesaria para impresiones de tamano mural.",
      li3: "Diseno de vallas publicitarias: Planificar dimensiones en pixels para publicidad exterior grande.",
      li4: "Visualizacion arquitectonica: Convertir dimensiones de habitaciones a tamanos en pixels para renderizados.",
      heading3: "Guia de DPI para gran formato",
      li5: "72 DPI — Vallas publicitarias vistas desde mas de 50 pies.",
      li6: "100 DPI — Banners grandes vistos desde 10-20 pies.",
      li7: "150 DPI — Displays de ferias y carteles vistos desde 3-10 pies.",
      li8: "300 DPI — Calidad de impresion de cerca, raramente necesaria para gran formato.",
      heading4: "Tamanos comunes de banners en pixels (a 150 DPI)",
      li9: "2 x 4 pies — 3,600 x 7,200 pixels",
      li10: "3 x 6 pies — 5,400 x 10,800 pixels",
      li11: "4 x 8 pies — 7,200 x 14,400 pixels",
      li12: "8 x 10 pies — 14,400 x 18,000 pixels",
      heading5: "Que DPI deberias usar para impresiones de gran formato?",
      p3: "El DPI optimo para impresiones grandes depende de la distancia de visualizacion. Las vallas publicitarias vistas desde mas de 50 pies se ven nitidas con solo 30-50 DPI. Los banners a nivel de calle vistos desde 10-20 pies funcionan bien con 72-100 DPI. Los displays de ferias donde los visitantes estan a 3-6 pies necesitan 150 DPI para texto e imagenes nitidas. Las impresiones de galeria y senalizacion de cerca requieren 300 DPI. Usar DPI innecesariamente alto para trabajo de gran formato crea archivos masivos (un banner de 10x8 pies a 300 DPI seria 36,000 x 28,800 pixels, o mas de mil millones de pixels) sin mejora visible de calidad a la distancia de visualizacion prevista.",
      heading6: "Que tamano tienen los proyectos comunes de gran formato en pixels?",
      p4: "Un soporte de banner retractil estandar (2.5 x 6.5 pies) a 150 DPI necesita 4,500 x 11,700 pixels. Un rotulado de vehiculo para un sedan estandar (aproximadamente 5 x 16 pies de area imprimible) a 100 DPI requiere 6,000 x 19,200 pixels. Un mural que cubre una pared de 10 x 12 pies a 72 DPI necesita 8,640 x 10,368 pixels. Estos numeros te ayudan a evaluar si las imagenes de stock o fotos de camara tienen suficiente resolucion para tu proyecto antes de comenzar el diseno.",
      heading7: "Por que importan las conversiones de pies a pixels para arquitectos?",
      p5: "La visualizacion arquitectonica a menudo comienza con dimensiones de habitaciones en pies. Una habitacion de 12 x 15 pies renderizada a 150 DPI produce una imagen de 21,600 x 27,000 pixels. Los disenadores de interiores que convierten planos a maquetas digitales necesitan estas dimensiones en pixels para crear renderizados a escala precisa. Los fotografos inmobiliarios que planifican impresiones grandes de fotos de propiedades usan la conversion de pies a pixels para confirmar que la salida de su camara (tipicamente 24-61 megapixels) puede producir una impresion nitida al tamano de pared deseado por el cliente.",
    },
  },
  fr: {
    faq: [
      {
        question: "Comment convertir des pieds en pixels?",
        answer:
          "Multipliez les pieds par 12 (pour obtenir des pouces), puis multipliez par DPI. Par exemple, 3 pieds a 96 DPI egalent 3 456 pixels (3 x 12 x 96 = 3 456).",
      },
      {
        question: "Combien de pixels fait 1 pied a 96 DPI?",
        answer:
          "A 96 DPI, 1 pied equivaut a 1 152 pixels (12 pouces x 96 pixels par pouce = 1 152). C'est la norme pour le design grand format en resolution web.",
      },
      {
        question: "Combien de pixels fait 1 pied a 300 DPI?",
        answer:
          "A 300 DPI, 1 pied equivaut a 3 600 pixels (12 pouces x 300 pixels par pouce = 3 600). Cette haute resolution est utilisee pour les sorties grand format de qualite impression.",
      },
      {
        question: "Quel DPI utiliser pour l'impression grand format?",
        answer:
          "Les impressions grand format vues a distance (bannieres, panneaux d'affichage) peuvent utiliser 72-150 DPI. Les impressions vues de pres (stands d'exposition, affiches) doivent utiliser 150-300 DPI pour des details nets.",
      },
      {
        question:
          "Quelle taille de fichier faut-il pour une banniere de 4 pieds a 150 DPI?",
        answer:
          "Une banniere de 4 pieds de large a 150 DPI necessite 7 200 pixels de large (4 x 12 x 150 = 7 200). Pour une banniere de 4 x 8 pieds, le fichier ferait 7 200 x 14 400 pixels.",
      },
    ],
    body: {
      heading1: "Comment fonctionne la conversion pieds en pixels",
      p1: "Convertir des pieds en pixels est essentiel pour les projets de design grand format comme les bannieres, la signaletique et les graphiques muraux. La formule est:",
      formula: "Pixels = Pieds x 12 x DPI",
      p2: "Comme il y a 12 pouces dans un pied, vous convertissez d'abord les pieds en pouces, puis multipliez par DPI pour obtenir le nombre de pixels.",
      heading2: "Cas d'utilisation courants",
      li1: "Conception de bannieres: Calculer les dimensions en pixels pour les bannieres de salons et la signaletique evenementielle.",
      li2: "Peintures murales: Determiner la resolution necessaire pour les impressions de taille murale.",
      li3: "Conception de panneaux d'affichage: Planifier les dimensions en pixels pour la grande publicite exterieure.",
      li4: "Visualisation architecturale: Convertir les dimensions de pieces en tailles pixels pour les rendus.",
      heading3: "Guide DPI pour le grand format",
      li5: "72 DPI — Panneaux d'affichage vus a plus de 50 pieds.",
      li6: "100 DPI — Grandes bannieres vues a 10-20 pieds.",
      li7: "150 DPI — Stands d'exposition et affiches vus a 3-10 pieds.",
      li8: "300 DPI — Qualite d'impression de pres, rarement necessaire pour le grand format.",
      heading4: "Tailles courantes de bannieres en pixels (a 150 DPI)",
      li9: "2 x 4 pieds — 3 600 x 7 200 pixels",
      li10: "3 x 6 pieds — 5 400 x 10 800 pixels",
      li11: "4 x 8 pieds — 7 200 x 14 400 pixels",
      li12: "8 x 10 pieds — 14 400 x 18 000 pixels",
      heading5: "Quel DPI utiliser pour les impressions grand format?",
      p3: "Le DPI optimal pour les grandes impressions depend de la distance de visualisation. Les panneaux d'affichage vus a plus de 50 pieds paraissent nets a seulement 30-50 DPI. Les bannieres au niveau de la rue vues a 10-20 pieds fonctionnent bien a 72-100 DPI. Les stands d'exposition ou les visiteurs se trouvent a 3-6 pieds necessitent 150 DPI pour un texte et des images nets. Les impressions de galerie et la signaletique de proximite necessitent 300 DPI. Utiliser un DPI inutilement eleve pour le grand format cree des fichiers massifs (une banniere de 10x8 pieds a 300 DPI ferait 36 000 x 28 800 pixels, soit plus d'un milliard de pixels) sans amelioration visible de qualite a la distance de visualisation prevue.",
      heading6: "Quelle taille font les projets grand format courants en pixels?",
      p4: "Un support de banniere retractable standard (2.5 x 6.5 pieds) a 150 DPI necessite 4 500 x 11 700 pixels. Un habillage de vehicule pour une berline standard (environ 5 x 16 pieds de surface imprimable) a 100 DPI necessite 6 000 x 19 200 pixels. Une fresque murale couvrant un mur de 10 x 12 pieds a 72 DPI necessite 8 640 x 10 368 pixels. Ces chiffres vous aident a evaluer si vos images de stock ou photos ont une resolution suffisante pour votre projet avant de commencer le design.",
      heading7: "Pourquoi les conversions pieds-pixels sont-elles importantes pour les architectes?",
      p5: "La visualisation architecturale commence souvent avec les dimensions des pieces en pieds. Une piece de 12 x 15 pieds rendue a 150 DPI produit une image de 21 600 x 27 000 pixels. Les designers d'interieur convertissant des plans en maquettes numeriques ont besoin de ces dimensions en pixels pour creer des rendus a l'echelle precise. Les photographes immobiliers planifiant de grandes impressions murales de photos de proprietes utilisent la conversion pieds-pixels pour confirmer que la sortie de leur appareil photo (generalement 24-61 megapixels) peut produire une impression nette a la taille murale souhaitee par le client.",
    },
  },
  de: {
    faq: [
      {
        question: "Wie rechne ich Fuss in Pixels um?",
        answer:
          "Multiplizieren Sie die Fuss mit 12 (um Zoll zu erhalten) und dann mit DPI. Zum Beispiel ergeben 3 Fuss bei 96 DPI 3.456 Pixels (3 x 12 x 96 = 3.456).",
      },
      {
        question: "Wie viele Pixels sind 1 Fuss bei 96 DPI?",
        answer:
          "Bei 96 DPI entspricht 1 Fuss 1.152 Pixels (12 Zoll x 96 Pixels pro Zoll = 1.152). Dies ist der Standard fuer Grossformat-Design in Web-Aufloesung.",
      },
      {
        question: "Wie viele Pixels sind 1 Fuss bei 300 DPI?",
        answer:
          "Bei 300 DPI entspricht 1 Fuss 3.600 Pixels (12 Zoll x 300 Pixels pro Zoll = 3.600). Diese hohe Aufloesung wird fuer druckqualitaets Grossformat-Ausgabe verwendet.",
      },
      {
        question: "Welchen DPI sollte ich fuer Grossformatdruck verwenden?",
        answer:
          "Grossformatdrucke, die aus der Ferne betrachtet werden (Banner, Plakatwände), koennen 72-150 DPI verwenden. Drucke, die aus der Naehe betrachtet werden (Messestaende, Poster), sollten 150-300 DPI fuer scharfe Details verwenden.",
      },
      {
        question:
          "Wie gross muss die Datei fuer ein 4-Fuss-Banner bei 150 DPI sein?",
        answer:
          "Ein 4 Fuss breites Banner bei 150 DPI benoetigt 7.200 Pixels Breite (4 x 12 x 150 = 7.200). Fuer ein 4 x 8 Fuss Banner waere die Datei 7.200 x 14.400 Pixels.",
      },
    ],
    body: {
      heading1: "Wie die Umrechnung von Fuss in Pixels funktioniert",
      p1: "Die Umrechnung von Fuss in Pixels ist fuer Grossformat-Designprojekte wie Banner, Beschilderung und Wandgrafiken unerlässlich. Die Formel lautet:",
      formula: "Pixels = Fuss x 12 x DPI",
      p2: "Da ein Fuss 12 Zoll hat, rechnen Sie zuerst Fuss in Zoll um und multiplizieren dann mit DPI, um die Pixelanzahl zu erhalten.",
      heading2: "Haeufige Anwendungsfaelle",
      li1: "Banner-Design: Pixeldimensionen fuer Messebanner und Veranstaltungsbeschilderung berechnen.",
      li2: "Wandmalereien: Die benoetigte Aufloesung fuer wandgrosse Drucke bestimmen.",
      li3: "Plakatwand-Design: Pixeldimensionen fuer grosse Aussenwerbung planen.",
      li4: "Architekturvisualisierung: Raumdimensionen in Pixelgroessen fuer Renderings umrechnen.",
      heading3: "DPI-Richtlinien fuer Grossformat",
      li5: "72 DPI — Plakatwaende, die aus mehr als 50 Fuss Entfernung betrachtet werden.",
      li6: "100 DPI — Grosse Banner, die aus 10-20 Fuss betrachtet werden.",
      li7: "150 DPI — Messestaende und Poster, die aus 3-10 Fuss betrachtet werden.",
      li8: "300 DPI — Nahaufnahme-Druckqualitaet, selten fuer Grossformat benoetigt.",
      heading4: "Gaengige Bannergroessen in Pixels (bei 150 DPI)",
      li9: "2 x 4 Fuss — 3.600 x 7.200 Pixels",
      li10: "3 x 6 Fuss — 5.400 x 10.800 Pixels",
      li11: "4 x 8 Fuss — 7.200 x 14.400 Pixels",
      li12: "8 x 10 Fuss — 14.400 x 18.000 Pixels",
      heading5: "Welchen DPI sollten Sie fuer Grossformatdrucke verwenden?",
      p3: "Der optimale DPI fuer grosse Drucke haengt von der Betrachtungsentfernung ab. Plakatwaende, die aus mehr als 50 Fuss betrachtet werden, sehen bei nur 30-50 DPI scharf aus. Banner auf Strassenebene, die aus 10-20 Fuss betrachtet werden, funktionieren gut bei 72-100 DPI. Messestaende, an denen Besucher 3-6 Fuss entfernt stehen, benoetigen 150 DPI fuer scharfen Text und Bilder. Galeriedrucke und Nahbeschilderung erfordern 300 DPI. Unnoetig hohe DPI fuer Grossformatarbeit erzeugt riesige Dateien (ein 10x8 Fuss Banner bei 300 DPI waere 36.000 x 28.800 Pixels oder ueber 1 Milliarde Pixels) ohne sichtbare Qualitaetsverbesserung bei der beabsichtigten Betrachtungsentfernung.",
      heading6: "Wie gross sind gaengige Grossformat-Projekte in Pixels?",
      p4: "Ein Standard-Rollup-Bannerstaender (2.5 x 6.5 Fuss) bei 150 DPI benoetigt 4.500 x 11.700 Pixels. Eine Fahrzeugbeklebung fuer eine Standardlimousine (ca. 5 x 16 Fuss bedruckbare Flaeche) bei 100 DPI erfordert 6.000 x 19.200 Pixels. Ein Wandbild, das eine 10 x 12 Fuss Wand bedeckt, bei 72 DPI benoetigt 8.640 x 10.368 Pixels. Diese Zahlen helfen Ihnen einzuschaetzen, ob Stock-Bilder oder Kamerafotos ausreichende Aufloesung fuer Ihr Projekt haben, bevor Sie mit dem Design beginnen.",
      heading7: "Warum sind Fuss-zu-Pixel-Umrechnungen fuer Architekten wichtig?",
      p5: "Architekturvisualisierung beginnt oft mit Raumdimensionen in Fuss. Ein 12 x 15 Fuss Raum, gerendert bei 150 DPI, erzeugt ein 21.600 x 27.000 Pixel Bild. Innenarchitekten, die Grundrisse in digitale Mockups umwandeln, benoetigen diese Pixeldimensionen fuer massstabsgetreue Renderings. Immobilienfotografen, die grosse Wanddrucke von Immobilienfotos planen, nutzen die Fuss-zu-Pixel-Umrechnung, um zu bestätigen, dass ihre Kameraausgabe (typischerweise 24-61 Megapixel) einen scharfen Druck in der vom Kunden gewuenschten Wandgroesse erzeugen kann.",
    },
  },
  pt: {
    faq: [
      {
        question: "Como converto pes para pixels?",
        answer:
          "Multiplique os pes por 12 (para obter polegadas) e depois por DPI. Por exemplo, 3 pes a 96 DPI equivale a 3.456 pixels (3 x 12 x 96 = 3.456).",
      },
      {
        question: "Quantos pixels tem 1 pe a 96 DPI?",
        answer:
          "A 96 DPI, 1 pe equivale a 1.152 pixels (12 polegadas x 96 pixels por polegada = 1.152). Este e o padrao para design de grande formato em resolucao web.",
      },
      {
        question: "Quantos pixels tem 1 pe a 300 DPI?",
        answer:
          "A 300 DPI, 1 pe equivale a 3.600 pixels (12 polegadas x 300 pixels por polegada = 3.600). Esta alta resolucao e usada para saida de grande formato com qualidade de impressao.",
      },
      {
        question: "Qual DPI devo usar para impressao de grande formato?",
        answer:
          "Impressoes de grande formato vistas a distancia (banners, outdoors) podem usar 72-150 DPI. Impressoes vistas de perto (displays de feiras, cartazes) devem usar 150-300 DPI para detalhes nitidos.",
      },
      {
        question:
          "Qual tamanho de arquivo preciso para um banner de 4 pes a 150 DPI?",
        answer:
          "Um banner de 4 pes de largura a 150 DPI requer 7.200 pixels de largura (4 x 12 x 150 = 7.200). Para um banner de 4 x 8 pes, o arquivo seria de 7.200 x 14.400 pixels.",
      },
    ],
    body: {
      heading1: "Como funciona a conversao de pes para pixels",
      p1: "Converter pes para pixels e essencial para projetos de design de grande formato como banners, sinalizacao e graficos murais. A formula e:",
      formula: "Pixels = Pes x 12 x DPI",
      p2: "Como ha 12 polegadas em um pe, voce primeiro converte pes em polegadas e depois multiplica por DPI para obter a contagem de pixels.",
      heading2: "Casos de uso comuns",
      li1: "Design de banners: Calcular dimensoes em pixels para banners de feiras e sinalizacao de eventos.",
      li2: "Murais: Determinar a resolucao necessaria para impressoes de tamanho mural.",
      li3: "Design de outdoors: Planejar dimensoes em pixels para publicidade exterior grande.",
      li4: "Visualizacao arquitetonica: Converter dimensoes de ambientes em tamanhos de pixels para renderizacoes.",
      heading3: "Guia de DPI para grande formato",
      li5: "72 DPI — Outdoors vistos a mais de 50 pes de distancia.",
      li6: "100 DPI — Banners grandes vistos a 10-20 pes.",
      li7: "150 DPI — Displays de feiras e cartazes vistos a 3-10 pes.",
      li8: "300 DPI — Qualidade de impressao de perto, raramente necessaria para grande formato.",
      heading4: "Tamanhos comuns de banners em pixels (a 150 DPI)",
      li9: "2 x 4 pes — 3.600 x 7.200 pixels",
      li10: "3 x 6 pes — 5.400 x 10.800 pixels",
      li11: "4 x 8 pes — 7.200 x 14.400 pixels",
      li12: "8 x 10 pes — 14.400 x 18.000 pixels",
      heading5: "Qual DPI voce deve usar para impressoes de grande formato?",
      p3: "O DPI ideal para impressoes grandes depende da distancia de visualizacao. Outdoors vistos a mais de 50 pes parecem nitidos com apenas 30-50 DPI. Banners ao nivel da rua vistos a 10-20 pes funcionam bem com 72-100 DPI. Displays de feiras onde visitantes ficam a 3-6 pes precisam de 150 DPI para texto e imagens nitidos. Impressoes de galeria e sinalizacao de perto requerem 300 DPI. Usar DPI desnecessariamente alto para trabalho de grande formato cria arquivos enormes (um banner de 10x8 pes a 300 DPI seria 36.000 x 28.800 pixels, ou mais de 1 bilhao de pixels) sem melhoria visivel de qualidade na distancia de visualizacao pretendida.",
      heading6: "Qual o tamanho dos projetos comuns de grande formato em pixels?",
      p4: "Um suporte de banner retratil padrao (2.5 x 6.5 pes) a 150 DPI precisa de 4.500 x 11.700 pixels. Um envelopamento de veiculo para um seda padrao (aproximadamente 5 x 16 pes de area imprimivel) a 100 DPI requer 6.000 x 19.200 pixels. Um mural cobrindo uma parede de 10 x 12 pes a 72 DPI precisa de 8.640 x 10.368 pixels. Esses numeros ajudam a avaliar se imagens de banco ou fotos de camera tem resolucao suficiente para seu projeto antes de comecar o design.",
      heading7: "Por que as conversoes de pes para pixels importam para arquitetos?",
      p5: "A visualizacao arquitetonica frequentemente comeca com dimensoes de ambientes em pes. Um ambiente de 12 x 15 pes renderizado a 150 DPI produz uma imagem de 21.600 x 27.000 pixels. Designers de interiores convertendo plantas em mockups digitais precisam dessas dimensoes em pixels para criar renderizacoes em escala precisa. Fotografos imobiliarios planejando grandes impressoes de parede de fotos de propriedades usam a conversao de pes para pixels para confirmar que a saida de sua camera (tipicamente 24-61 megapixels) pode produzir uma impressao nitida no tamanho de parede desejado pelo cliente.",
    },
  },
  hi: {
    faq: [
      {
        question: "Feet ko pixels mein kaise convert karein?",
        answer:
          "Feet ko 12 se multiply karein (inches pane ke liye), phir DPI se multiply karein. Udaharan ke liye, 96 DPI par 3 feet 3,456 pixels ke barabar hai (3 x 12 x 96 = 3,456).",
      },
      {
        question: "96 DPI par 1 foot kitne pixels ke barabar hai?",
        answer:
          "96 DPI par, 1 foot 1,152 pixels ke barabar hai (12 inches x 96 pixels prati inch = 1,152). Yah web-resolution large-format design ke liye standard hai.",
      },
      {
        question: "300 DPI par 1 foot kitne pixels ke barabar hai?",
        answer:
          "300 DPI par, 1 foot 3,600 pixels ke barabar hai (12 inches x 300 pixels prati inch = 3,600). Yah uchch resolution print-quality large-format output ke liye upyog hota hai.",
      },
      {
        question: "Large-format printing ke liye kaun sa DPI upyog karein?",
        answer:
          "Door se dekhe jaane wale large-format prints (banners, billboards) 72-150 DPI upyog kar sakte hain. Paas se dekhe jaane wale prints (trade show displays, posters) ko sharp details ke liye 150-300 DPI upyog karna chahiye.",
      },
      {
        question:
          "150 DPI par 4-foot banner ke liye kitne bade file ki zaroorat hai?",
        answer:
          "150 DPI par 4 foot chaude banner ke liye 7,200 pixels chaudai chahiye (4 x 12 x 150 = 7,200). 4 x 8 foot banner ke liye, file 7,200 x 14,400 pixels hogi.",
      },
    ],
    body: {
      heading1: "Feet se pixel conversion kaise kaam karta hai",
      p1: "Feet ko pixels mein convert karna banners, signage aur wall graphics jaise large-format design projects ke liye aavashyak hai. Formula hai:",
      formula: "Pixels = Feet x 12 x DPI",
      p2: "Kyunki ek foot mein 12 inches hote hain, pehle feet ko inches mein convert karein, phir pixel count pane ke liye DPI se multiply karein.",
      heading2: "Aam upyog ke maamle",
      li1: "Banner design: Trade show banners aur event signage ke liye pixel dimensions calculate karna.",
      li2: "Wall murals: Wall-sized prints ke liye zaruri resolution nirardhit karna.",
      li3: "Billboard design: Bade outdoor advertising ke liye pixel dimensions ki yojana banana.",
      li4: "Architectural visualization: Renderings ke liye kamre ke dimensions ko pixel sizes mein convert karna.",
      heading3: "Large-format DPI dishaw-nirdesh",
      li5: "72 DPI — 50+ feet door se dekhe jaane wale billboards.",
      li6: "100 DPI — 10-20 feet se dekhe jaane wale bade banners.",
      li7: "150 DPI — 3-10 feet se dekhe jaane wale trade show displays aur posters.",
      li8: "300 DPI — Paas se dekhne ki print quality, large format ke liye shayad hi zaruri.",
      heading4: "Pixels mein aam banner sizes (150 DPI par)",
      li9: "2 x 4 feet — 3,600 x 7,200 pixels",
      li10: "3 x 6 feet — 5,400 x 10,800 pixels",
      li11: "4 x 8 feet — 7,200 x 14,400 pixels",
      li12: "8 x 10 feet — 14,400 x 18,000 pixels",
      heading5: "Large-format prints ke liye kaun sa DPI upyog karein?",
      p3: "Bade prints ke liye optimal DPI dekhne ki doori par nirbhar karta hai. 50+ feet door se dikhai dene wale billboards sirf 30-50 DPI par sharp dikhte hain. 10-20 feet se dikhai dene wale street-level banners 72-100 DPI par achhe kaam karte hain. Trade show displays jahan visitors 3-6 feet door khade hote hain, unhe sharp text aur images ke liye 150 DPI chahiye. Gallery prints aur paas ki signage ke liye 300 DPI chahiye. Large-format kaam ke liye avashyakta se adhik DPI upyog karna bade files banata hai (300 DPI par 10x8 foot banner 36,000 x 28,800 pixels ya 1 billion se adhik pixels hoga) bina kisi dikhne wali gunvatta sudhar ke.",
      heading6: "Aam large-format projects pixels mein kitne bade hote hain?",
      p4: "Ek standard retractable banner stand (2.5 x 6.5 feet) ko 150 DPI par 4,500 x 11,700 pixels chahiye. Ek standard sedan ke liye vehicle wrap (lagbhag 5 x 16 feet printable area) ko 100 DPI par 6,000 x 19,200 pixels chahiye. 72 DPI par 10 x 12 foot wall ko cover karne wale wall mural ko 8,640 x 10,368 pixels chahiye. Ye sankhyayen aapko design shuru karne se pehle yah mulyankan karne mein madad karti hain ki stock images ya camera photos mein aapke project ke liye paryaapt resolution hai ya nahin.",
      heading7: "Architects ke liye feet-se-pixel conversions kyun mahatvapoorn hain?",
      p5: "Architectural visualization aksar feet mein kamre ke dimensions se shuru hota hai. 150 DPI par render kiya gaya 12 x 15 foot kamra 21,600 x 27,000 pixel image banata hai. Floor plans ko digital mockups mein convert karne wale interior designers ko satik-scale renderings banane ke liye in pixel dimensions ki zaroorat hoti hai. Property photos ke bade wall prints ki yojana banane wale real estate photographers feet-se-pixel conversion ka upyog yah confirm karne ke liye karte hain ki unki camera output (aam taur par 24-61 megapixels) client ki chahti wall size par sharp print bana sakti hai.",
    },
  },
  ja: {
    faq: [
      {
        question: "Feet wo pixels ni dou henkan shimasu ka?",
        answer:
          "Feet ni 12 wo kakete (inches ni shite), sorekara DPI wo kakemasu. Tatoeba, 96 DPI de 3 feet ha 3,456 pixels desu (3 x 12 x 96 = 3,456).",
      },
      {
        question: "96 DPI de 1 foot ha nanpixels desu ka?",
        answer:
          "96 DPI de ha, 1 foot ha 1,152 pixels desu (12 inches x 96 pixels per inch = 1,152). Kore ha web kaizoudo no daikeishiki design no hyoujun desu.",
      },
      {
        question: "300 DPI de 1 foot ha nanpixels desu ka?",
        answer:
          "300 DPI de ha, 1 foot ha 3,600 pixels desu (12 inches x 300 pixels per inch = 3,600). Kono koukaizoudou ha insatsu hinshitsu no daikeishiki shutsuryoku ni shiyou saremasu.",
      },
      {
        question: "Daikeishiki insatsu niha dono DPI wo shiyou subeki desu ka?",
        answer:
          "Tooku kara miru daikeishiki insatsu (bannaa, kanban) ha 72-150 DPI wo shiyou dekimasu. Chikaku de miru insatsu (tenjikai display, posutaa) ha sharp na detail no tame ni 150-300 DPI wo shiyou subeki desu.",
      },
      {
        question:
          "150 DPI de 4 foot bannaa niha donna size no file ga hitsuyou desu ka?",
        answer:
          "150 DPI de haba 4 foot no bannaa niha haba 7,200 pixels ga hitsuyou desu (4 x 12 x 150 = 7,200). 4 x 8 foot bannaa no baai, file ha 7,200 x 14,400 pixels ni narimasu.",
      },
    ],
    body: {
      heading1: "Feet kara pixel heno henkan no shikumi",
      p1: "Feet wo pixels ni henkan suru koto ha, bannaa, kanban, kabe graphics nado no daikeishiki design project ni fukaketsu desu. Koushiki ha:",
      formula: "Pixels = Feet x 12 x DPI",
      p2: "1 foot ha 12 inches na node, mazu feet wo inches ni henkan shi, soshite DPI wo kakete pixel suu wo emasu.",
      heading2: "Ippantekina shiyou keesu",
      li1: "Bannaa design: Tenjikai bannaa ya ibento kanban no pixel sunpou wo keisan.",
      li2: "Kabe hekiga: Kabe size no insatsu ni hitsuyou na kaizodo wo kettei.",
      li3: "Kanban design: Ookina okugai koukoku no pixel sunpou wo keikaku.",
      li4: "Kenchiku kashika: Rendering no tame ni heya no sunpou wo pixel size ni henkan.",
      heading3: "Daikeishiki DPI gaidorain",
      li5: "72 DPI — 50 feet ijou hanarete miru kanban.",
      li6: "100 DPI — 10-20 feet kara miru ookina bannaa.",
      li7: "150 DPI — 3-10 feet kara miru tenjikai display ya posutaa.",
      li8: "300 DPI — Chikaku de miru insatsu hinshitsu. Daikeishiki de ha hotondo hitsuyou nashi.",
      heading4: "Pixels de no ippantekina bannaa size (150 DPI)",
      li9: "2 x 4 feet — 3,600 x 7,200 pixels",
      li10: "3 x 6 feet — 5,400 x 10,800 pixels",
      li11: "4 x 8 feet — 7,200 x 14,400 pixels",
      li12: "8 x 10 feet — 14,400 x 18,000 pixels",
      heading5: "Daikeishiki insatsu niha dono DPI wo shiyou subeki ka?",
      p3: "Ookina insatsu no saiteki DPI ha shichouteki kyori ni yotte kimarimasu. 50 feet ijou hanarete miru kanban ha wazuka 30-50 DPI de sharp ni miemasu. 10-20 feet kara miru douro level no bannaa ha 72-100 DPI de umaku ikimasu. Raijosha ga 3-6 feet hanarete tatsu tenjikai display ha, sharp na text to gazou no tame ni 150 DPI ga hitsuyou desu. Gallery insatsu to chikaku no kanban niha 300 DPI ga hitsuyou desu. Daikeishiki sagyou ni fuhitsuyou ni takai DPI wo shiyou suruto, kyodaina file ga dekimasu (300 DPI de 10x8 foot bannaa ha 36,000 x 28,800 pixels, tsumari 10 oku pixels ijou) ga, yotei no shichou kyori de ha hinshitsu koujou ha miraremasen.",
      heading6: "Ippantekina daikeishiki project ha pixels de dono kurai no ookisa desu ka?",
      p4: "Hyoujun no makitorishiki bannaa stand (2.5 x 6.5 feet) ha 150 DPI de 4,500 x 11,700 pixels ga hitsuyou desu. Hyoujun sedan you no vehicle wrap (yaku 5 x 16 feet no insatsu kanouryouiki) ha 100 DPI de 6,000 x 19,200 pixels ga hitsuyou desu. 72 DPI de 10 x 12 foot no kabe wo oou kabe hekiga ha 8,640 x 10,368 pixels ga hitsuyou desu. Korera no suuji ha, design wo hajimeru mae ni stock gazou ya kamera shashin ni project ni juubun na kaizodo ga aru ka douka wo hyouka suru no ni yakudachimasu.",
      heading7: "Naze feet-kara-pixel henkan ga kenchikuka ni totte juuyou na no ka?",
      p5: "Kenchiku kashika ha shibashiba feet de no heya no sunpou kara hajimarimasu. 150 DPI de rendering sareta 12 x 15 foot no heya ha 21,600 x 27,000 pixel no gazou wo seisan shimasu. Madori wo digital mockup ni henkan suru interior designer ha, seikaku na scale no rendering wo sakusei suru tame ni korera no pixel sunpou ga hitsuyou desu. Bukken shashin no ookina kabe insatsu wo keikaku shite iru fudousan shashin-ka ha, kamera shutsuryoku (tsuujou 24-61 megapixels) ga kokyaku no kibou suru kabe size de sharp na insatsu wo seisan dekiru koto wo kakunin suru tame ni feet-kara-pixel henkan wo shiyou shimasu.",
    },
  },
  ko: {
    faq: [
      {
        question: "Feet reul pixels ro eotteoke byeonhwan hamnikka?",
        answer:
          "Feet e 12 reul gophago (inches ro byeonhwan), geu daeume DPI reul gophamnida. Yereul deulmyeon, 96 DPI eseo 3 feet neun 3,456 pixels imnida (3 x 12 x 96 = 3,456).",
      },
      {
        question: "96 DPI eseo 1 foot neun myeot pixels imnikka?",
        answer:
          "96 DPI eseo 1 foot neun 1,152 pixels imnida (12 inches x 96 pixels per inch = 1,152). Igeos eun web haesangdo daehyeong design ui pyojun imnida.",
      },
      {
        question: "300 DPI eseo 1 foot neun myeot pixels imnikka?",
        answer:
          "300 DPI eseo 1 foot neun 3,600 pixels imnida (12 inches x 300 pixels per inch = 3,600). I gohaesangdo neun insswae pumjil daehyeong chullyeog e sayong doebnida.",
      },
      {
        question: "Daehyeong insswae e eotteon DPI reul sayong haeya hamnikka?",
        answer:
          "Meolri eseo boneun daehyeong insswaeemul (baenneo, gwanggopan) eun 72-150 DPI reul sayong hal su isseumnida. Gakkai eseo boneun insswaeemul (jeonsihooe display, posteo) eun seonmyeonghan detail eul wihae 150-300 DPI reul sayong haeya hamnida.",
      },
      {
        question:
          "150 DPI eseo 4 foot baenneo e eolmana keun pail i pilyohamnikka?",
        answer:
          "150 DPI eseo neolbi 4 foot baenneo neun neolbi 7,200 pixels ga pilyohamnida (4 x 12 x 150 = 7,200). 4 x 8 foot baenneo ui gyeongu pail eun 7,200 x 14,400 pixels imnida.",
      },
    ],
    body: {
      heading1: "Feet eseo pixel byeonhwan i eotteoke jakdong habnigga",
      p1: "Feet reul pixels ro byeonhwan haneun geos eun baenneo, ganpan, byeoghwa geuraepigseu wa gateun daehyeong design project e pilyosu jeog imnida. Gongsig eun:",
      formula: "Pixels = Feet x 12 x DPI",
      p2: "1 foot e 12 inches ga isseumeuro, meonjeo feet reul inches ro byeonhwan han daeume DPI reul gophayeo pixel su reul eodeumnida.",
      heading2: "Ilbanjeog in sayong sarye",
      li1: "Baenneo design: Jeonsihooe baenneo wa ibenteu ganpan ui pixel chisu gyesan.",
      li2: "Byeokhwa: Byeog keugi insswaeemul e pilyohan haesangdo gyeoljeong.",
      li3: "Gwanggopan design: Daeghyeong oegbu gwanggo ui pixel chisu gyehoeg.",
      li4: "Geonchug sigakhwa: Rendeoring eul wihae bang chisu reul pixel keugi ro byeonhwan.",
      heading3: "Daehyeong DPI gaideurain",
      li5: "72 DPI — 50 feet isang meolri eseo boneun gwanggopan.",
      li6: "100 DPI — 10-20 feet eseo boneun keun baenneo.",
      li7: "150 DPI — 3-10 feet eseo boneun jeonsihooe display wa posteo.",
      li8: "300 DPI — Geunjeobi insswae pumjil, daehyeong eseo neun geoui pilyohaji aneum.",
      heading4: "Pixels eulo bon ilbanjeog baenneo keugi (150 DPI)",
      li9: "2 x 4 feet — 3,600 x 7,200 pixels",
      li10: "3 x 6 feet — 5,400 x 10,800 pixels",
      li11: "4 x 8 feet — 7,200 x 14,400 pixels",
      li12: "8 x 10 feet — 14,400 x 18,000 pixels",
      heading5: "Daehyeong insswaeemul e eotteon DPI reul sayong haeya halkkayo?",
      p3: "Keun insswaeemul ui choejeogeui DPI neun sigeo georieseo dallajim nida. 50 feet isang meolri eseo boneun gwanggopan eun 30-50 DPI man euroedo seonmyeonghage boimnida. 10-20 feet eseo boneun geori baenneo neun 72-100 DPI eseo jal jakdong hamnida. Bangmungaeg i 3-6 feet georieseo seo inneun jeonsihooe display neun seonmyeonghan tekseuteu wa imijireul wihae 150 DPI ga pilyohamnida. Gallery insswae wa geunjeobi ganpan eun 300 DPI ga pilyohamnida. Daehyeong jageop e bulpilyohage nopun DPI reul sayong hamyeon geodaehan pail i mandeuleojim nida (300 DPI eseo 10x8 foot baenneo neun 36,000 x 28,800 pixels, jeug 10 eog pixels isang) uido han sigeo geori eseo pumjil hyangsang eobsi.",
      heading6: "Ilbanjeog in daehyeong project neun pixels ro eolmana keumnikka?",
      p4: "Pyojun jeobsi baenneo seeutaendeu (2.5 x 6.5 feet) neun 150 DPI eseo 4,500 x 11,700 pixels ga pilyohamnida. Pyojun sedan yong chaeryang raeping (yak 5 x 16 feet insswae ganeung myeonjeog) eun 100 DPI eseo 6,000 x 19,200 pixels ga pilyohamnida. 72 DPI eseo 10 x 12 foot byeog eul deopneun byeokhwa neun 8,640 x 10,368 pixels ga pilyohamnida. I sutja deul eun design eul sijaghagi jeone seutog imiji na kamera sajin i project e chungbunhan haesangdo reul gajigo innunji pyeong ga haneun de doum i doebnida.",
      heading7: "Wae feet-eseo-pixel byeonhwan i geonchugga ege jungyohan gayo?",
      p5: "Geonchug sigakhwa neun jongjong feet ro doen bang chisu eseo sijag doebnida. 150 DPI eseo rendeoring doen 12 x 15 foot bang eun 21,600 x 27,000 pixel imiji reul saengseonghamnida. Pyeongmyeondo reul digital mokeop euro byeonhwan haneun interieo designer deul eun jeongwaghag cheokdo ui rendeoring eul mandeulgi wihae i pixel chisu ga pilyohamnida. Budongsan sajin ui keun byeog insswae reul gyehoeg haneun budongsan sajinsa deul eun kamera chullyeog (ilbanjeog euro 24-61 megapixels) i gokaeg i wonhaneun byeog keugi eseo seonmyeonghan insswae reul mandeul su inneunji hwagin hagi wihae feet-eseo-pixel byeonhwan eul sayong hamnida.",
    },
  },
  it: {
    faq: [
      {
        question: "Come converto i piedi in pixels?",
        answer:
          "Moltiplica i piedi per 12 (per ottenere i pollici), poi moltiplica per DPI. Ad esempio, 3 piedi a 96 DPI equivalgono a 3.456 pixels (3 x 12 x 96 = 3.456).",
      },
      {
        question: "Quanti pixels sono 1 piede a 96 DPI?",
        answer:
          "A 96 DPI, 1 piede equivale a 1.152 pixels (12 pollici x 96 pixels per pollice = 1.152). Questo e lo standard per il design di grande formato a risoluzione web.",
      },
      {
        question: "Quanti pixels sono 1 piede a 300 DPI?",
        answer:
          "A 300 DPI, 1 piede equivale a 3.600 pixels (12 pollici x 300 pixels per pollice = 3.600). Questa alta risoluzione e usata per output di grande formato con qualita di stampa.",
      },
      {
        question: "Quale DPI devo usare per la stampa di grande formato?",
        answer:
          "Le stampe di grande formato viste a distanza (banner, cartelloni) possono usare 72-150 DPI. Le stampe viste da vicino (stand fieristici, poster) dovrebbero usare 150-300 DPI per dettagli nitidi.",
      },
      {
        question:
          "Quanto grande deve essere il file per un banner di 4 piedi a 150 DPI?",
        answer:
          "Un banner largo 4 piedi a 150 DPI richiede 7.200 pixels di larghezza (4 x 12 x 150 = 7.200). Per un banner di 4 x 8 piedi, il file sarebbe 7.200 x 14.400 pixels.",
      },
    ],
    body: {
      heading1: "Come funziona la conversione da piedi a pixels",
      p1: "Convertire piedi in pixels e essenziale per progetti di design di grande formato come banner, segnaletica e grafiche murali. La formula e:",
      formula: "Pixels = Piedi x 12 x DPI",
      p2: "Poiche ci sono 12 pollici in un piede, prima converti i piedi in pollici, poi moltiplica per DPI per ottenere il conteggio dei pixels.",
      heading2: "Casi d'uso comuni",
      li1: "Design di banner: Calcolare le dimensioni in pixels per banner fieristici e segnaletica per eventi.",
      li2: "Murali: Determinare la risoluzione necessaria per stampe di dimensioni murali.",
      li3: "Design di cartelloni: Pianificare le dimensioni in pixels per la grande pubblicita esterna.",
      li4: "Visualizzazione architettonica: Convertire le dimensioni delle stanze in dimensioni pixels per i rendering.",
      heading3: "Linee guida DPI per il grande formato",
      li5: "72 DPI — Cartelloni visti da oltre 50 piedi di distanza.",
      li6: "100 DPI — Grandi banner visti da 10-20 piedi.",
      li7: "150 DPI — Stand fieristici e poster visti da 3-10 piedi.",
      li8: "300 DPI — Qualita di stampa ravvicinata, raramente necessaria per il grande formato.",
      heading4: "Dimensioni comuni dei banner in pixels (a 150 DPI)",
      li9: "2 x 4 piedi — 3.600 x 7.200 pixels",
      li10: "3 x 6 piedi — 5.400 x 10.800 pixels",
      li11: "4 x 8 piedi — 7.200 x 14.400 pixels",
      li12: "8 x 10 piedi — 14.400 x 18.000 pixels",
      heading5: "Quale DPI usare per le stampe di grande formato?",
      p3: "Il DPI ottimale per le grandi stampe dipende dalla distanza di visualizzazione. I cartelloni visti da oltre 50 piedi appaiono nitidi a soli 30-50 DPI. I banner a livello stradale visti da 10-20 piedi funzionano bene a 72-100 DPI. Gli stand fieristici dove i visitatori stanno a 3-6 piedi necessitano 150 DPI per testo e immagini nitidi. Le stampe per gallerie e la segnaletica ravvicinata richiedono 300 DPI. Usare DPI inutilmente elevati per il grande formato crea file enormi (un banner 10x8 piedi a 300 DPI sarebbe 36.000 x 28.800 pixels, ovvero oltre 1 miliardo di pixels) senza miglioramenti visibili alla distanza di visualizzazione prevista.",
      heading6: "Quanto sono grandi i progetti comuni di grande formato in pixels?",
      p4: "Uno stand banner retrattile standard (2.5 x 6.5 piedi) a 150 DPI necessita di 4.500 x 11.700 pixels. Una decorazione per veicolo per una berlina standard (circa 5 x 16 piedi di area stampabile) a 100 DPI richiede 6.000 x 19.200 pixels. Un murale che copre una parete di 10 x 12 piedi a 72 DPI necessita di 8.640 x 10.368 pixels. Questi numeri ti aiutano a valutare se le immagini stock o le foto hanno una risoluzione sufficiente per il tuo progetto prima di iniziare il design.",
      heading7: "Perche le conversioni da piedi a pixels sono importanti per gli architetti?",
      p5: "La visualizzazione architettonica inizia spesso con le dimensioni delle stanze in piedi. Una stanza di 12 x 15 piedi renderizzata a 150 DPI produce un'immagine di 21.600 x 27.000 pixels. I designer d'interni che convertono planimetrie in mockup digitali hanno bisogno di queste dimensioni in pixels per creare rendering in scala accurata. I fotografi immobiliari che pianificano grandi stampe murali di foto di proprieta usano la conversione da piedi a pixels per confermare che l'output della loro fotocamera (tipicamente 24-61 megapixels) puo produrre una stampa nitida alla dimensione murale desiderata dal cliente.",
    },
  },
  nl: {
    faq: [
      {
        question: "Hoe converteer ik voeten naar pixels?",
        answer:
          "Vermenigvuldig de voeten met 12 (om inches te krijgen), vermenigvuldig dan met DPI. Bijvoorbeeld, 3 voet bij 96 DPI is 3.456 pixels (3 x 12 x 96 = 3.456).",
      },
      {
        question: "Hoeveel pixels is 1 voet bij 96 DPI?",
        answer:
          "Bij 96 DPI is 1 voet gelijk aan 1.152 pixels (12 inches x 96 pixels per inch = 1.152). Dit is de standaard voor grootformaat webresolutie-ontwerp.",
      },
      {
        question: "Hoeveel pixels is 1 voet bij 300 DPI?",
        answer:
          "Bij 300 DPI is 1 voet gelijk aan 3.600 pixels (12 inches x 300 pixels per inch = 3.600). Deze hoge resolutie wordt gebruikt voor drukkwaliteit grootformaat output.",
      },
      {
        question: "Welke DPI moet ik gebruiken voor grootformaat drukwerk?",
        answer:
          "Grootformaat prints die van afstand worden bekeken (spandoeken, billboards) kunnen 72-150 DPI gebruiken. Prints die van dichtbij worden bekeken (beursstands, posters) moeten 150-300 DPI gebruiken voor scherpe details.",
      },
      {
        question:
          "Hoe groot moet het bestand zijn voor een 4-voet spandoek bij 150 DPI?",
        answer:
          "Een 4 voet breed spandoek bij 150 DPI vereist 7.200 pixels breed (4 x 12 x 150 = 7.200). Voor een 4 x 8 voet spandoek zou het bestand 7.200 x 14.400 pixels zijn.",
      },
    ],
    body: {
      heading1: "Hoe voet naar pixel conversie werkt",
      p1: "Het converteren van voeten naar pixels is essentieel voor grootformaat ontwerpprojecten zoals spandoeken, bewegwijzering en wandafbeeldingen. De formule is:",
      formula: "Pixels = Voeten x 12 x DPI",
      p2: "Omdat er 12 inches in een voet zitten, converteer je eerst voeten naar inches en vermenigvuldig je dan met DPI om het aantal pixels te krijgen.",
      heading2: "Veelvoorkomende toepassingen",
      li1: "Spandoekontwerp: Pixelafmetingen berekenen voor beursspandoeken en evenementenborden.",
      li2: "Wandschilderingen: De benodigde resolutie bepalen voor wandgrote prints.",
      li3: "Billboard-ontwerp: Pixelafmetingen plannen voor grote buitenreclame.",
      li4: "Architectuurvisualisatie: Kamerafmetingen omzetten naar pixelgroottes voor renderings.",
      heading3: "DPI-richtlijnen voor grootformaat",
      li5: "72 DPI — Billboards bekeken vanaf 50+ voet afstand.",
      li6: "100 DPI — Grote spandoeken bekeken vanaf 10-20 voet.",
      li7: "150 DPI — Beursdisplays en posters bekeken vanaf 3-10 voet.",
      li8: "300 DPI — Close-up drukkwaliteit, zelden nodig voor grootformaat.",
      heading4: "Veelvoorkomende spandoekmaten in pixels (bij 150 DPI)",
      li9: "2 x 4 voet — 3.600 x 7.200 pixels",
      li10: "3 x 6 voet — 5.400 x 10.800 pixels",
      li11: "4 x 8 voet — 7.200 x 14.400 pixels",
      li12: "8 x 10 voet — 14.400 x 18.000 pixels",
      heading5: "Welke DPI moet u gebruiken voor grootformaat prints?",
      p3: "De optimale DPI voor grote prints hangt af van de kijkafstand. Billboards die van 50+ voet worden bekeken zien er scherp uit bij slechts 30-50 DPI. Spandoeken op straatniveau bekeken van 10-20 voet werken goed bij 72-100 DPI. Beursdisplays waar bezoekers 3-6 voet afstand staan hebben 150 DPI nodig voor scherpe tekst en afbeeldingen. Galerieprints en bewegwijzering van dichtbij vereisen 300 DPI. Onnodig hoge DPI gebruiken voor grootformaat werk creert enorme bestanden (een 10x8 voet spandoek bij 300 DPI zou 36.000 x 28.800 pixels zijn, of meer dan 1 miljard pixels) zonder zichtbare kwaliteitsverbetering op de beoogde kijkafstand.",
      heading6: "Hoe groot zijn veelvoorkomende grootformaat projecten in pixels?",
      p4: "Een standaard oprolbaar spandoekstand (2.5 x 6.5 voet) bij 150 DPI heeft 4.500 x 11.700 pixels nodig. Een voertuigbelettering voor een standaard sedan (ongeveer 5 x 16 voet bedrukbaar oppervlak) bij 100 DPI vereist 6.000 x 19.200 pixels. Een muurschildering die een 10 x 12 voet muur bedekt bij 72 DPI heeft 8.640 x 10.368 pixels nodig. Deze aantallen helpen u beoordelen of stockafbeeldingen of camerafoto's voldoende resolutie hebben voor uw project voordat u met het ontwerp begint.",
      heading7: "Waarom zijn voet-naar-pixel conversies belangrijk voor architecten?",
      p5: "Architectuurvisualisatie begint vaak met kamerafmetingen in voeten. Een kamer van 12 x 15 voet gerenderd bij 150 DPI levert een afbeelding van 21.600 x 27.000 pixels op. Interieurontwerpers die plattegronden omzetten naar digitale mockups hebben deze pixelafmetingen nodig voor nauwkeurige schaalrenderings. Vastgoedfotografen die grote wandprints van vastgoedfoto's plannen gebruiken voet-naar-pixel conversie om te bevestigen dat hun camera-output (doorgaans 24-61 megapixels) een scherpe print kan produceren op de door de klant gewenste wandgrootte.",
    },
  },
  ar: {
    faq: [
      {
        question: "Kayfa uhawwil al-aqdam ila pixels?",
        answer:
          "Idrib al-aqdam fi 12 (lil-husul ala inches), thumma idrib fi DPI. Mathalan, 3 aqdam inda 96 DPI tusawi 3,456 pixels (3 x 12 x 96 = 3,456).",
      },
      {
        question: "Kam pixel fi qadam wahid inda 96 DPI?",
        answer:
          "Inda 96 DPI, qadam wahid yusawi 1,152 pixels (12 inch x 96 pixels li-kull inch = 1,152). Hatha huwa al-mi'yar li-tasmim al-hajm al-kabir bi-duqqat al-web.",
      },
      {
        question: "Kam pixel fi qadam wahid inda 300 DPI?",
        answer:
          "Inda 300 DPI, qadam wahid yusawi 3,600 pixels (12 inch x 300 pixels li-kull inch = 3,600). Hathihi al-duqqah al-aliyah tustakhdam li-mukharajat al-hajm al-kabir bi-jawdat al-tiba'ah.",
      },
      {
        question: "Ayy DPI yajib an astakhdam lil-tiba'ah al-kabirah?",
        answer:
          "Al-matbu'at al-kabirah al-mash-hudah min masafah (la'fitat, lawhaat i'laniyyah) yumkin an tastakhdam 72-150 DPI. Al-matbu'at al-mash-hudah min qarib (shashaat al-ma'arid, al-mulassaqat) yajib an tastakhdam 150-300 DPI li-tafasil wadihah.",
      },
      {
        question:
          "Kam hajm al-malaf alladhi ahtajuhu li-la'fitah bi-ard 4 aqdam inda 150 DPI?",
        answer:
          "La'fitah bi-ard 4 aqdam inda 150 DPI tatatallab 7,200 pixels ardan (4 x 12 x 150 = 7,200). Li-la'fitah 4 x 8 aqdam, sayakun al-malaf 7,200 x 14,400 pixels.",
      },
    ],
    body: {
      heading1: "Kayfa ya'mal tahwil al-aqdam ila pixels",
      p1: "Tahwil al-aqdam ila pixels daruri li-masharii' tasmim al-hajm al-kabir mithl al-la'fitat wal-lawhaat wal-rusum al-jidariyyah. Al-sighah hiya:",
      formula: "Pixels = Aqdam x 12 x DPI",
      p2: "Bi-ma anna fi kull qadam 12 inch, tuawwil al-aqdam ila inches awwalan, thumma tadrib fi DPI lil-husul ala adad al-pixels.",
      heading2: "Halat al-istikhdam al-sha'i'ah",
      li1: "Tasmim al-la'fitat: Hisab ab'ad al-pixels li-la'fitat al-ma'arid wa lawhaat al-munasabat.",
      li2: "Al-judraniyyat: Tahdid al-duqqah al-matluubah lil-matbu'at bi-hajm al-jidar.",
      li3: "Tasmim lawhaat al-i'lanat: Takhtit ab'ad al-pixels lil-i'lanat al-kharijiyyah al-kabirah.",
      li4: "Al-takhyil al-mi'mari: Tahwil ab'ad al-ghuraf ila ahajm pixels lil-rendering.",
      heading3: "Irschadat DPI lil-hajm al-kabir",
      li5: "72 DPI — Lawhaat i'laniyyah tush-had min ab'ad 50 qadam fa-akthar.",
      li6: "100 DPI — La'fitat kabirah tush-had min 10-20 qadam.",
      li7: "150 DPI — Shashaat ma'arid wa mulassaqat tush-had min 3-10 aqdam.",
      li8: "300 DPI — Jawdat tiba'ah qaribah, nadiran ma takun matluubah lil-hajm al-kabir.",
      heading4: "Ahajm al-la'fitat al-sha'i'ah bil-pixels (inda 150 DPI)",
      li9: "2 x 4 aqdam — 3,600 x 7,200 pixels",
      li10: "3 x 6 aqdam — 5,400 x 10,800 pixels",
      li11: "4 x 8 aqdam — 7,200 x 14,400 pixels",
      li12: "8 x 10 aqdam — 14,400 x 18,000 pixels",
      heading5: "Ayy DPI yajib an tastakhdam lil-matbu'at al-kabirah?",
      p3: "Al-DPI al-mithalii lil-matbu'at al-kabirah ya'tamid ala masafat al-mushaahadah. Lawhaat al-i'lanat al-mash-hudah min 50 qadam fa-akthar tabdu wadihah bi-30-50 DPI faqat. La'fitat mustawaa al-shaari' al-mash-hudah min 10-20 qadam ta'mal jayiddan inda 72-100 DPI. Shashaat al-ma'arid haythu yaqif al-zuwwar ala bu'd 3-6 aqdam tahtaj 150 DPI li-nusus wa suwar wadihah. Matbu'at al-ma'arid wal-lawhaat al-qaribah tatatallab 300 DPI. Istikhdam DPI alya ghayr daruri lil-a'mal al-kabirah yunkhi' malaffat dakhma (la'fitah 10x8 aqdam inda 300 DPI satakun 36,000 x 28,800 pixels, aw akthar min milyard pixel) duna ayy tahsin mar'i fil-jawdah inda masafat al-mushaahadah al-maqsudah.",
      heading6: "Ma hajm masharii' al-hajm al-kabir al-sha'i'ah bil-pixels?",
      p4: "Hamill la'fitat qabil lil-tatwi qiyasi (2.5 x 6.5 aqdam) inda 150 DPI yahtaj 4,500 x 11,700 pixels. Ghilaf sayarah li-sedan qiyasi (taqriban 5 x 16 qadam min al-masahah al-qabilah lil-tiba'ah) inda 100 DPI yatatallab 6,000 x 19,200 pixels. Juddariyyah tughat-ti jidar 10 x 12 qadam inda 72 DPI tahtaj 8,640 x 10,368 pixels. Hadhihi al-arqam tusa'iduka fi taqyim ma idha kanat suwar al-makhzun aw suwar al-kamira bi-duqqah kafiyah li-mashru'ika qabl bada' al-tasmim.",
      heading7: "Limatha tahwilat al-aqdam ila pixels muhimmah lil-muhandisen al-mi'mariyyin?",
      p5: "Ghaliban ma yabda' al-takhyil al-mi'mari bi-ab'ad al-ghuraf bil-aqdam. Ghurfah 12 x 15 qadam mu-render inda 150 DPI tuntij surah 21,600 x 27,000 pixels. Yahtaj musam-mimu al-dakhili alladhina yuhawwilun mukhatatat al-tabiq ila makatat raqamiyyah ila hadhihi al-ab'ad bil-pixels li-insha' renderings daqiqat al-miqyas. Yastakhdam musawwiru al-aqarat alladhina yukhattitun li-matbu'at jidariyyah kabirah li-suwar al-amlak tahwil al-aqdam ila pixels li-ta'kid anna mukharajat al-kamira (adatan 24-61 megapixels) yumkinuha intaj tiba'ah wadihah bil-hajm al-jidari alladhi yuridihu al-amil.",
    },
  },
  tr: {
    faq: [
      {
        question: "Feet'i piksele nasil donustururum?",
        answer:
          "Feet'i 12 ile carpin (inch'e cevirmek icin), sonra DPI ile carpin. Ornegin, 96 DPI'da 3 feet 3,456 pixels eder (3 x 12 x 96 = 3,456).",
      },
      {
        question: "96 DPI'da 1 foot kac pixels eder?",
        answer:
          "96 DPI'da 1 foot 1,152 pixels eder (12 inches x 96 pixels per inch = 1,152). Bu, web cozunurluklu buyuk format tasarim icin standarttir.",
      },
      {
        question: "300 DPI'da 1 foot kac pixels eder?",
        answer:
          "300 DPI'da 1 foot 3,600 pixels eder (12 inches x 300 pixels per inch = 3,600). Bu yuksek cozunurluk, baski kalitesinde buyuk format cikti icin kullanilir.",
      },
      {
        question: "Buyuk format baski icin hangi DPI'yi kullanmaliyim?",
        answer:
          "Uzaktan gorulen buyuk format baskilar (afisler, reklam panolari) 72-150 DPI kullanabilir. Yakindan gorulen baskilar (fuar stantlari, posterler) net detaylar icin 150-300 DPI kullanmalidir.",
      },
      {
        question:
          "150 DPI'da 4 foot'luk bir afisin dosya boyutu ne olmali?",
        answer:
          "150 DPI'da 4 foot genisliginde bir afis 7,200 pixels genislik gerektirir (4 x 12 x 150 = 7,200). 4 x 8 foot'luk bir afis icin dosya 7,200 x 14,400 pixels olur.",
      },
    ],
    body: {
      heading1: "Feet'ten piksele donusum nasil calisir",
      p1: "Feet'i piksele donusturmek, afisler, tabelalar ve duvar grafikleri gibi buyuk format tasarim projeleri icin zorunludur. Formul:",
      formula: "Pixels = Feet x 12 x DPI",
      p2: "Bir foot'ta 12 inches oldugu icin, once feet'i inches'e cevirirsiniz, sonra pixel sayisini elde etmek icin DPI ile carparisiniz.",
      heading2: "Yaygin kullanim alanlari",
      li1: "Afis tasarimi: Fuar afisleri ve etkinlik tabelarari icin piksel boyutlarini hesaplama.",
      li2: "Duvar resmi: Duvar boyutunda baskilar icin gereken cozunurlugu belirleme.",
      li3: "Reklam panosu tasarimi: Buyuk dis mekan reklami icin piksel boyutlarini planlama.",
      li4: "Mimari gorsellestirme: Renderlar icin oda boyutlarini piksel boyutlarina donusturme.",
      heading3: "Buyuk format DPI kilavuzu",
      li5: "72 DPI — 50+ feet uzaktan gorulen reklam panolari.",
      li6: "100 DPI — 10-20 feet mesafeden gorulen buyuk afisler.",
      li7: "150 DPI — 3-10 feet mesafeden gorulen fuar stantlari ve posterler.",
      li8: "300 DPI — Yakindan baski kalitesi, buyuk format icin nadiren gerekli.",
      heading4: "Piksel cinsinden yaygin afis boyutlari (150 DPI'da)",
      li9: "2 x 4 feet — 3,600 x 7,200 pixels",
      li10: "3 x 6 feet — 5,400 x 10,800 pixels",
      li11: "4 x 8 feet — 7,200 x 14,400 pixels",
      li12: "8 x 10 feet — 14,400 x 18,000 pixels",
      heading5: "Buyuk format baskilar icin hangi DPI'yi kullanmalisiniz?",
      p3: "Buyuk baskilar icin en uygun DPI, gorus mesafesine baglidir. 50+ feet mesafeden gorulen reklam panolari sadece 30-50 DPI'da bile net gorunur. 10-20 feet mesafeden gorulen sokak seviyesi afisler 72-100 DPI'da iyi calisir. Ziyaretcilerin 3-6 feet mesafede durdugu fuar stantlari net metin ve gorseller icin 150 DPI gerektirir. Galeri baskilari ve yakin mesafe tabelari 300 DPI gerektirir. Buyuk format calismalar icin gereksiz yere yuksek DPI kullanmak devasa dosyalar olusturur (300 DPI'da 10x8 foot afis 36,000 x 28,800 pixels veya 1 milyar pikselden fazla olur) hedeflenen gorus mesafesinde gorunur bir kalite iyilestirmesi olmadan.",
      heading6: "Yaygin buyuk format projeler piksel cinsinden ne kadar buyuktur?",
      p4: "Standart cekilebilir afis standi (2.5 x 6.5 feet) 150 DPI'da 4,500 x 11,700 pixels gerektirir. Standart bir sedan icin arac giydirme (yaklasik 5 x 16 feet basim alani) 100 DPI'da 6,000 x 19,200 pixels gerektirir. 72 DPI'da 10 x 12 foot'luk bir duvari kaplayan duvar resmi 8,640 x 10,368 pixels gerektirir. Bu sayilar, tasarima baslamadan once stok gorsellerin veya kamera fotograflarinin projeniz icin yeterli cozunurluge sahip olup olmadigini degerlendirmenize yardimci olur.",
      heading7: "Feet-piksel donusumleri mimarlar icin neden onemlidir?",
      p5: "Mimari gorsellestirme genellikle feet cinsinden oda boyutlariyla baslar. 150 DPI'da renderlanan 12 x 15 foot oda 21,600 x 27,000 piksellik bir goruntu uretir. Kat planlarini dijital mockuplara donusturen ic mimarlar, dogru olcekli renderlar olusturmak icin bu piksel boyutlarina ihtiyac duyar. Mulk fotograflarinin buyuk duvar baskilarini planlayan emlak fotografcilari, kamera ciktisinin (tipik olarak 24-61 megapixels) musterinin istedigi duvar boyutunda net bir baski uretebilecegini dogrulamak icin feet-piksel donusumunu kullanir.",
    },
  },
  pl: {
    faq: [
      {
        question: "Jak przekonwertowac stopy na piksele?",
        answer:
          "Pomnoz stopy przez 12 (aby uzyskac cale), nastepnie pomnoz przez DPI. Na przyklad, 3 stopy przy 96 DPI to 3456 pikseli (3 x 12 x 96 = 3456).",
      },
      {
        question: "Ile pikseli ma 1 stopa przy 96 DPI?",
        answer:
          "Przy 96 DPI 1 stopa to 1152 pikseli (12 cali x 96 pikseli na cal = 1152). To standard dla wielkoformatowego projektowania w rozdzielczosci webowej.",
      },
      {
        question: "Ile pikseli ma 1 stopa przy 300 DPI?",
        answer:
          "Przy 300 DPI 1 stopa to 3600 pikseli (12 cali x 300 pikseli na cal = 3600). Ta wysoka rozdzielczosc jest uzywana do wielkoformatowych wydrukow o jakosci drukarskiej.",
      },
      {
        question: "Jakiego DPI uzyc do druku wielkoformatowego?",
        answer:
          "Wydruki wielkoformatowe ogladane z dystansu (banery, billboardy) moga uzywac 72-150 DPI. Wydruki ogladane z bliska (standy targowe, plakaty) powinny uzywac 150-300 DPI dla ostrych szczegolow.",
      },
      {
        question:
          "Jak duzy plik potrzebuje na 4-stopowy baner przy 150 DPI?",
        answer:
          "Baner o szerokosci 4 stop przy 150 DPI wymaga 7200 pikseli szerokosci (4 x 12 x 150 = 7200). Dla banera 4 x 8 stop plik mialby 7200 x 14400 pikseli.",
      },
    ],
    body: {
      heading1: "Jak dziala konwersja stop na piksele",
      p1: "Konwersja stop na piksele jest niezbedna dla wielkoformatowych projektow, takich jak banery, oznakowanie i grafiki scienne. Wzor to:",
      formula: "Pixels = Stopy x 12 x DPI",
      p2: "Poniewaz w jednej stopie jest 12 cali, najpierw zamieniasz stopy na cale, a nastepnie mnozysz przez DPI, aby uzyskac liczbe pikseli.",
      heading2: "Typowe zastosowania",
      li1: "Projektowanie banerow: Obliczanie wymiarow w pikselach dla banerow targowych i oznakowan eventowych.",
      li2: "Murale scienne: Okreslanie rozdzielczosci potrzebnej do wydrukow wielkosci sciany.",
      li3: "Projektowanie billboardow: Planowanie wymiarow w pikselach dla duzych reklam zewnetrznych.",
      li4: "Wizualizacja architektoniczna: Konwersja wymiarow pomieszczen na rozmiary pikseli dla renderow.",
      heading3: "Wytyczne DPI dla wielkiego formatu",
      li5: "72 DPI — Billboardy ogladane z 50+ stop.",
      li6: "100 DPI — Duze banery ogladane z 10-20 stop.",
      li7: "150 DPI — Standy targowe i plakaty ogladane z 3-10 stop.",
      li8: "300 DPI — Jakosc druku z bliska, rzadko potrzebna dla wielkiego formatu.",
      heading4: "Typowe rozmiary banerow w pikselach (przy 150 DPI)",
      li9: "2 x 4 stopy — 3600 x 7200 pikseli",
      li10: "3 x 6 stop — 5400 x 10800 pikseli",
      li11: "4 x 8 stop — 7200 x 14400 pikseli",
      li12: "8 x 10 stop — 14400 x 18000 pikseli",
      heading5: "Jakiego DPI uzyc do wydrukow wielkoformatowych?",
      p3: "Optymalny DPI dla duzych wydrukow zalezy od odleglosci ogladania. Billboardy widziane z 50+ stop wygladaja ostro przy zaledwie 30-50 DPI. Banery na poziomie ulicy ogladane z 10-20 stop dobrze dzialaja przy 72-100 DPI. Standy targowe, gdzie odwiedzajacy stoja 3-6 stop dalej, potrzebuja 150 DPI dla ostrego tekstu i obrazow. Wydruki galeryjne i oznakowania z bliska wymagaja 300 DPI. Uzywanie zbednie wysokiego DPI do prac wielkoformatowych tworzy ogromne pliki (baner 10x8 stop przy 300 DPI to 36000 x 28800 pikseli, czyli ponad miliard pikseli) bez widocznej poprawy jakosci przy zamierzonej odleglosci ogladania.",
      heading6: "Jak duze sa typowe projekty wielkoformatowe w pikselach?",
      p4: "Standardowy rozwijany stojak na baner (2.5 x 6.5 stop) przy 150 DPI potrzebuje 4500 x 11700 pikseli. Oklejanie pojazdu dla standardowego sedana (okolo 5 x 16 stop powierzchni do druku) przy 100 DPI wymaga 6000 x 19200 pikseli. Mural pokrywajacy sciane 10 x 12 stop przy 72 DPI potrzebuje 8640 x 10368 pikseli. Te liczby pomagaja ocenic, czy obrazy stockowe lub zdjecia z aparatu maja wystarczajaca rozdzielczosc dla Twojego projektu przed rozpoczeciem pracy.",
      heading7: "Dlaczego konwersja stop na piksele jest wazna dla architektow?",
      p5: "Wizualizacja architektoniczna czesto zaczyna sie od wymiarow pomieszczen w stopach. Pokoj 12 x 15 stop wyrenderowany przy 150 DPI daje obraz 21600 x 27000 pikseli. Projektanci wnetrz konwertujacy plany na cyfrowe makiety potrzebuja tych wymiarow w pikselach do tworzenia renderow w dokladnej skali. Fotografowie nieruchomosci planujacy duze wydruki scienne zdjec nieruchomosci uzywaja konwersji stop-piksel, aby potwierdzic, ze wyjscie ich aparatu (zazwyczaj 24-61 megapikseli) moze wyprodukować ostry wydruk w zadanym przez klienta rozmiarze sciennym.",
    },
  },
  id: {
    faq: [
      {
        question: "Bagaimana cara mengonversi feet ke pixels?",
        answer:
          "Kalikan feet dengan 12 (untuk mendapatkan inches), lalu kalikan dengan DPI. Misalnya, 3 feet pada 96 DPI sama dengan 3.456 pixels (3 x 12 x 96 = 3.456).",
      },
      {
        question: "Berapa pixels untuk 1 foot pada 96 DPI?",
        answer:
          "Pada 96 DPI, 1 foot sama dengan 1.152 pixels (12 inches x 96 pixels per inch = 1.152). Ini adalah standar untuk desain format besar resolusi web.",
      },
      {
        question: "Berapa pixels untuk 1 foot pada 300 DPI?",
        answer:
          "Pada 300 DPI, 1 foot sama dengan 3.600 pixels (12 inches x 300 pixels per inch = 3.600). Resolusi tinggi ini digunakan untuk output format besar kualitas cetak.",
      },
      {
        question: "DPI berapa yang harus digunakan untuk cetak format besar?",
        answer:
          "Cetakan format besar yang dilihat dari jauh (spanduk, billboard) dapat menggunakan 72-150 DPI. Cetakan yang dilihat dari dekat (display pameran, poster) harus menggunakan 150-300 DPI untuk detail tajam.",
      },
      {
        question:
          "Berapa besar file yang dibutuhkan untuk spanduk 4 feet pada 150 DPI?",
        answer:
          "Spanduk lebar 4 feet pada 150 DPI membutuhkan lebar 7.200 pixels (4 x 12 x 150 = 7.200). Untuk spanduk 4 x 8 feet, file akan berukuran 7.200 x 14.400 pixels.",
      },
    ],
    body: {
      heading1: "Cara kerja konversi feet ke pixels",
      p1: "Mengonversi feet ke pixels penting untuk proyek desain format besar seperti spanduk, papan nama, dan grafis dinding. Rumusnya adalah:",
      formula: "Pixels = Feet x 12 x DPI",
      p2: "Karena ada 12 inches dalam satu foot, Anda pertama mengonversi feet ke inches, lalu kalikan dengan DPI untuk mendapatkan jumlah pixels.",
      heading2: "Kasus penggunaan umum",
      li1: "Desain spanduk: Menghitung dimensi pixels untuk spanduk pameran dan papan nama acara.",
      li2: "Mural dinding: Menentukan resolusi yang dibutuhkan untuk cetakan ukuran dinding.",
      li3: "Desain billboard: Merencanakan dimensi pixels untuk iklan luar ruang besar.",
      li4: "Visualisasi arsitektur: Mengonversi dimensi ruangan ke ukuran pixels untuk rendering.",
      heading3: "Panduan DPI format besar",
      li5: "72 DPI — Billboard yang dilihat dari jarak 50+ feet.",
      li6: "100 DPI — Spanduk besar yang dilihat dari 10-20 feet.",
      li7: "150 DPI — Display pameran dan poster yang dilihat dari 3-10 feet.",
      li8: "300 DPI — Kualitas cetak jarak dekat, jarang dibutuhkan untuk format besar.",
      heading4: "Ukuran spanduk umum dalam pixels (pada 150 DPI)",
      li9: "2 x 4 feet — 3.600 x 7.200 pixels",
      li10: "3 x 6 feet — 5.400 x 10.800 pixels",
      li11: "4 x 8 feet — 7.200 x 14.400 pixels",
      li12: "8 x 10 feet — 14.400 x 18.000 pixels",
      heading5: "DPI berapa yang harus Anda gunakan untuk cetakan format besar?",
      p3: "DPI optimal untuk cetakan besar tergantung pada jarak pandang. Billboard yang dilihat dari 50+ feet terlihat tajam pada hanya 30-50 DPI. Spanduk tingkat jalan yang dilihat dari 10-20 feet bekerja baik pada 72-100 DPI. Display pameran di mana pengunjung berdiri 3-6 feet membutuhkan 150 DPI untuk teks dan gambar tajam. Cetakan galeri dan papan nama jarak dekat membutuhkan 300 DPI. Menggunakan DPI yang tidak perlu tinggi untuk pekerjaan format besar membuat file besar (spanduk 10x8 feet pada 300 DPI akan menjadi 36.000 x 28.800 pixels, atau lebih dari 1 miliar pixels) tanpa peningkatan kualitas yang terlihat pada jarak pandang yang dimaksud.",
      heading6: "Seberapa besar proyek format besar umum dalam pixels?",
      p4: "Stand spanduk tarik standar (2.5 x 6.5 feet) pada 150 DPI membutuhkan 4.500 x 11.700 pixels. Pembungkus kendaraan untuk sedan standar (sekitar 5 x 16 feet area cetak) pada 100 DPI membutuhkan 6.000 x 19.200 pixels. Mural dinding yang menutupi dinding 10 x 12 feet pada 72 DPI membutuhkan 8.640 x 10.368 pixels. Angka-angka ini membantu Anda menilai apakah gambar stok atau foto kamera memiliki resolusi yang cukup untuk proyek Anda sebelum memulai desain.",
      heading7: "Mengapa konversi feet ke pixels penting bagi arsitek?",
      p5: "Visualisasi arsitektur sering dimulai dengan dimensi ruangan dalam feet. Ruangan 12 x 15 feet yang dirender pada 150 DPI menghasilkan gambar 21.600 x 27.000 pixels. Desainer interior yang mengonversi denah lantai ke mockup digital membutuhkan dimensi pixels ini untuk membuat rendering skala akurat. Fotografer properti yang merencanakan cetakan dinding besar foto properti menggunakan konversi feet ke pixels untuk memastikan output kamera mereka (biasanya 24-61 megapixels) dapat menghasilkan cetakan tajam pada ukuran dinding yang diinginkan klien.",
    },
  },
  ru: {
    faq: [
      {
        question: "Kak konvertirovat' futy v pikseli?",
        answer:
          "Umnozhte futy na 12 (chtoby poluchit' dyujmy), zatem umnozhte na DPI. Naprimer, 3 futa pri 96 DPI ravno 3456 pikselej (3 x 12 x 96 = 3456).",
      },
      {
        question: "Skol'ko pikselej v 1 fute pri 96 DPI?",
        answer:
          "Pri 96 DPI 1 fut raven 1152 pikselyam (12 dyujmov x 96 pikselej na dyujm = 1152). Eto standart dlya krupnoformatnogo dizajna v veb-razreshenii.",
      },
      {
        question: "Skol'ko pikselej v 1 fute pri 300 DPI?",
        answer:
          "Pri 300 DPI 1 fut raven 3600 pikselyam (12 dyujmov x 300 pikselej na dyujm = 3600). Eto vysokoe razreshenie ispol'zuetsya dlya krupnoformatnogo vyvoda pechatnogo kachestva.",
      },
      {
        question: "Kakoj DPI ispol'zovat' dlya krupnoformatnoj pechati?",
        answer:
          "Krupnoformatnye ottiski, prosmatrivaemye s rasstoyaniya (bannery, bilbordy), mogut ispol'zovat' 72-150 DPI. Ottiski, prosmatrivaemye vblizi (vystavochnye stendy, plakaty), dolzhny ispol'zovat' 150-300 DPI dlya chetkikh detalej.",
      },
      {
        question:
          "Kakoj razmer fajla nuzhen dlya 4-futovogo bannera pri 150 DPI?",
        answer:
          "Banner shirinoj 4 futa pri 150 DPI trebuet 7200 pikselej shiriny (4 x 12 x 150 = 7200). Dlya bannera 4 x 8 fut fajl budet 7200 x 14400 pikselej.",
      },
    ],
    body: {
      heading1: "Kak rabotaet konversiya futov v pikseli",
      p1: "Konversiya futov v pikseli neobhodima dlya krupnoformatnyh dizajn-proektov, takih kak bannery, vyveski i nastennaya grafika. Formula:",
      formula: "Pixels = Futy x 12 x DPI",
      p2: "Poskol'ku v odnom fute 12 dyujmov, snachala vy preobrazuete futy v dyujmy, zatem umnozhayete na DPI dlya polucheniya kolichestva pikselej.",
      heading2: "Rasprostranennye scenarii ispol'zovaniya",
      li1: "Dizajn bannerov: Raschet pikselnykh razmerov dlya vystavochnykh bannerov i vyvesok.",
      li2: "Nastennye freski: Opredelenie razresheniya dlya otpechatkov razmera steny.",
      li3: "Dizajn bilbordov: Planirovanie pikselnykh razmerov dlya krupnoj naruzhnoj reklamy.",
      li4: "Arhitekturnaya vizualizaciya: Konversiya razmerov komnat v pikselnye razmery dlya renderov.",
      heading3: "Rekomendacii po DPI dlya krupnogo formata",
      li5: "72 DPI — Bilbordy, prosmatrivaemye s 50+ fut.",
      li6: "100 DPI — Krupnye bannery, prosmatrivaemye s 10-20 fut.",
      li7: "150 DPI — Vystavochnye stendy i plakaty, prosmatrivaemye s 3-10 fut.",
      li8: "300 DPI — Kachestvo pechati vblizi, redko trebuetsya dlya krupnogo formata.",
      heading4: "Rasprostranennye razmery bannerov v pikselyah (pri 150 DPI)",
      li9: "2 x 4 futa — 3600 x 7200 pikselej",
      li10: "3 x 6 fut — 5400 x 10800 pikselej",
      li11: "4 x 8 fut — 7200 x 14400 pikselej",
      li12: "8 x 10 fut — 14400 x 18000 pikselej",
      heading5: "Kakoj DPI ispol'zovat' dlya krupnoformatnykh otpechatkov?",
      p3: "Optimal'nyj DPI dlya krupnykh otpechatkov zavisit ot rasstoyaniya prosmotra. Bilbordy, vidimye s 50+ fut, vygladyat chetko pri vsego 30-50 DPI. Bannery na urovne ulicy, vidimye s 10-20 fut, horosho rabotayut pri 72-100 DPI. Vystavochnye stendy, gde posetiteli stoyat na rasstoyanii 3-6 fut, trebuyut 150 DPI dlya chetkogo teksta i izobrazhenij. Galereinye ottiski i vyveski dlya blizhnego prosmotra trebuyut 300 DPI. Ispol'zovanie izbytoсhno vysokogo DPI dlya krupnoformatnoj raboty sozdaet ogromnye fajly (banner 10x8 fut pri 300 DPI budet 36000 x 28800 pikselej, ili bolee 1 milliarda pikselej) bez vidimogo uluchsheniya kachestva pri predpolagaemom rasstoyanii prosmotra.",
      heading6: "Kakogo razmera tipichnye krupnoformatnye proekty v pikselyah?",
      p4: "Standartnyj svorachivayemyj banner-stend (2.5 x 6.5 fut) pri 150 DPI trebuet 4500 x 11700 pikselej. Obklejka avtomobilya dlya standartnogo sedana (primerno 5 x 16 fut pechatnoj ploshchadi) pri 100 DPI trebuet 6000 x 19200 pikselej. Nastennaya rospis', pokryvayushchaya stenu 10 x 12 fut pri 72 DPI, trebuet 8640 x 10368 pikselej. Eti cifry pomogayut ocenit', imeyut li stokovye izobrazheniya ili fotografii dostatochnoe razreshenie dlya vashego proekta do nachala dizajna.",
      heading7: "Pochemu konversii futov v pikseli vazhny dlya arhitektorov?",
      p5: "Arhitekturnaya vizualizaciya chasto nachinaetsya s razmerov komnat v futah. Komnata 12 x 15 fut, otrenderyennaya pri 150 DPI, daet izobrazhenie 21600 x 27000 pikselej. Dizajnery inter'erov, preobrazuyushchie planirovki v cifrovye makety, nuzhdayutsya v etih pikselnykh razmerah dlya sozdaniya tochno-masshtabnykh renderov. Fotografy nedvizhimosti, planiruyushchie krupnye nastennye otpechatki fotografij ob'ektov, ispol'zuyut konversiyu futov v pikseli, chtoby podtverdit', chto vyhod ih kamery (obychno 24-61 megapikselej) mozhet dat' chetkij otpechatok zhelaemogo klientom razmera steny.",
    },
  },
};
