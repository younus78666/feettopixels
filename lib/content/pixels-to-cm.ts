import type { PageContentMap } from "./types";

export const content: PageContentMap = {
  en: {
    faq: [
      {
        question: "How do I convert pixels to centimeters?",
        answer:
          "Multiply the pixel count by 2.54, then divide by DPI. For example, 378 pixels at 96 DPI equals approximately 10 cm (378 x 2.54 / 96 = 10.0).",
      },
      {
        question: "How many centimeters is 1920 pixels at 96 DPI?",
        answer:
          "At 96 DPI, 1920 pixels equals approximately 50.8 cm (1920 x 2.54 / 96 = 50.8). This is the width of a standard 1080p display measured in centimeters.",
      },
      {
        question: "How many centimeters is 100 pixels?",
        answer:
          "At 96 DPI (web standard), 100 pixels equals approximately 2.65 cm. At 300 DPI (print), 100 pixels equals approximately 0.85 cm. The physical size depends on DPI.",
      },
      {
        question: "Why are centimeters useful for pixel conversion?",
        answer:
          "Most countries outside the US use the metric system. Pixel-to-cm conversion helps with international print design, product packaging, and projects that arrive with metric specifications.",
      },
      {
        question: "What is the difference between PPI and DPI?",
        answer:
          "PPI (pixels per inch) refers to screen resolution, while DPI (dots per inch) refers to print resolution. For pixel conversion purposes, they are used interchangeably since both define pixels per physical inch.",
      },
    ],
    body: {
      heading1: "How Pixel to Centimeter Conversion Works",
      p1: "Converting pixels to centimeters requires knowing the DPI and the relationship between inches and centimeters. The formula is:",
      formula: "Centimeters = (Pixels x 2.54) / DPI",
      p2: "This formula first converts pixels to inches (pixels / DPI), then converts inches to centimeters (inches x 2.54).",
      heading2: "Common Use Cases",
      li1: "Print proofing: Check the physical size of digital designs before printing.",
      li2: "Screen measurements: Determine the real-world size of on-screen elements.",
      li3: "International collaboration: Communicate pixel dimensions in metric units for global teams.",
      li4: "Photo sizing: Determine print dimensions for digital photos.",
      heading3: "Quick Reference",
      li5: "1 pixel at 96 DPI \u2014 0.0265 cm (about 0.26 mm)",
      li6: "1 pixel at 300 DPI \u2014 0.0085 cm (about 0.085 mm)",
      li7: "1080p width (1920 px) at 96 DPI \u2014 50.8 cm",
      li8: "4K width (3840 px) at 96 DPI \u2014 101.6 cm",
      heading4: "Why Convert Pixels to Centimeters?",
      p3: "Most countries outside the United States measure in metric units. When a client in Europe asks for a banner that is 30 cm wide, you need to know how many pixels that requires at your target DPI. Working backwards from pixels to cm is equally common: checking whether a 1200-pixel wide image will fill a 15 cm column in a magazine layout. Print shops in metric countries specify dimensions in centimeters, so verifying pixel-to-cm calculations before sending files prevents costly reprints.",
      heading5: "How Does DPI Affect the Physical Size of Pixels?",
      p4: "A single pixel has no fixed physical size. Its width in centimeters depends entirely on the output DPI. At 96 DPI, each pixel measures 0.0265 cm (about 0.265 mm). At 300 DPI, the same pixel shrinks to just 0.00847 cm (0.085 mm). This 3x reduction in physical size is why 300 DPI prints look sharper than 96 DPI screen displays. The pixel count stays the same, but each pixel occupies less physical space, producing finer detail per centimeter.",
      heading6: "Common Screen Resolutions in Centimeters",
      li9: "1280 x 720 (HD) \u2014 33.87 x 19.05 cm at 96 DPI",
      li10: "1920 x 1080 (Full HD) \u2014 50.8 x 28.58 cm at 96 DPI",
      li11: "2560 x 1440 (QHD) \u2014 67.73 x 38.1 cm at 96 DPI",
      li12: "3840 x 2160 (4K) \u2014 101.6 x 57.15 cm at 96 DPI",
    },
  },

  es: {
    faq: [
      {
        question: "\u00bfC\u00f3mo convierto pixels a cent\u00edmetros?",
        answer:
          "Multiplica la cantidad de pixels por 2.54 y luego divide entre los DPI. Por ejemplo, 378 pixels a 96 DPI equivalen a aproximadamente 10 cm (378 x 2.54 / 96 = 10.0).",
      },
      {
        question: "\u00bfCu\u00e1ntos cent\u00edmetros son 1920 pixels a 96 DPI?",
        answer:
          "A 96 DPI, 1920 pixels equivalen a aproximadamente 50.8 cm (1920 x 2.54 / 96 = 50.8). Este es el ancho de una pantalla est\u00e1ndar 1080p medido en cent\u00edmetros.",
      },
      {
        question: "\u00bfCu\u00e1ntos cent\u00edmetros son 100 pixels?",
        answer:
          "A 96 DPI (est\u00e1ndar web), 100 pixels equivalen a aproximadamente 2.65 cm. A 300 DPI (impresi\u00f3n), 100 pixels equivalen a aproximadamente 0.85 cm. El tama\u00f1o f\u00edsico depende de los DPI.",
      },
      {
        question: "\u00bfPor qu\u00e9 son \u00fatiles los cent\u00edmetros para la conversi\u00f3n de pixels?",
        answer:
          "La mayor\u00eda de los pa\u00edses fuera de EE. UU. usan el sistema m\u00e9trico. Conocer la conversi\u00f3n de pixels a cm es esencial para el dise\u00f1o de impresi\u00f3n internacional, empaques de productos y cualquier proyecto con especificaciones m\u00e9tricas.",
      },
      {
        question: "\u00bfCu\u00e1l es la diferencia entre PPI y DPI?",
        answer:
          "PPI (pixels por pulgada) se refiere a la resoluci\u00f3n de pantalla, mientras que DPI (puntos por pulgada) se refiere a la resoluci\u00f3n de impresi\u00f3n. Para la conversi\u00f3n de pixels, se usan indistintamente ya que ambos definen pixels por pulgada f\u00edsica.",
      },
    ],
    body: {
      heading1: "C\u00f3mo funciona la conversi\u00f3n de pixels a cent\u00edmetros",
      p1: "Convertir pixels a cent\u00edmetros requiere conocer los DPI y la relaci\u00f3n entre pulgadas y cent\u00edmetros. La f\u00f3rmula es:",
      formula: "Cent\u00edmetros = (Pixels x 2.54) / DPI",
      p2: "Esta f\u00f3rmula primero convierte pixels a pulgadas (pixels / DPI) y luego convierte pulgadas a cent\u00edmetros (pulgadas x 2.54).",
      heading2: "Casos de uso comunes",
      li1: "Pruebas de impresi\u00f3n: Verifica el tama\u00f1o f\u00edsico de los dise\u00f1os digitales antes de imprimir.",
      li2: "Mediciones de pantalla: Determina el tama\u00f1o real de los elementos en pantalla.",
      li3: "Colaboraci\u00f3n internacional: Comunica dimensiones en pixels con unidades m\u00e9tricas para equipos globales.",
      li4: "Dimensionamiento de fotos: Determina las dimensiones de impresi\u00f3n para fotos digitales.",
      heading3: "Referencia r\u00e1pida",
      li5: "1 pixel a 96 DPI \u2014 0.0265 cm (aproximadamente 0.26 mm)",
      li6: "1 pixel a 300 DPI \u2014 0.0085 cm (aproximadamente 0.085 mm)",
      li7: "Ancho 1080p (1920 px) a 96 DPI \u2014 50.8 cm",
      li8: "Ancho 4K (3840 px) a 96 DPI \u2014 101.6 cm",
      heading4: "\u00bfPor qu\u00e9 convertir pixels a cent\u00edmetros?",
      p3: "La mayor\u00eda de los pa\u00edses fuera de Estados Unidos miden en unidades m\u00e9tricas. Cuando un cliente en Europa solicita un banner de 30 cm de ancho, necesitas saber cu\u00e1ntos pixels requiere seg\u00fan tus DPI objetivo. Trabajar a la inversa, de pixels a cm, es igualmente com\u00fan: verificar si una imagen de 1200 pixels de ancho llenar\u00e1 una columna de 15 cm en una maquetaci\u00f3n de revista. Las imprentas en pa\u00edses m\u00e9tricos especifican dimensiones en cent\u00edmetros, por lo que verificar los c\u00e1lculos de pixels a cm antes de enviar archivos evita reimpresiones costosas.",
      heading5: "\u00bfC\u00f3mo afecta el DPI al tama\u00f1o f\u00edsico de los pixels?",
      p4: "Un solo pixel no tiene un tama\u00f1o f\u00edsico fijo. Su ancho en cent\u00edmetros depende completamente de los DPI de salida. A 96 DPI, cada pixel mide 0.0265 cm (aproximadamente 0.265 mm). A 300 DPI, el mismo pixel se reduce a solo 0.00847 cm (0.085 mm). Esta reducci\u00f3n de 3x en tama\u00f1o f\u00edsico es la raz\u00f3n por la que las impresiones a 300 DPI se ven m\u00e1s n\u00edtidas que las pantallas a 96 DPI. La cantidad de pixels sigue siendo la misma, pero cada pixel ocupa menos espacio f\u00edsico, produciendo mayor detalle por cent\u00edmetro.",
      heading6: "Resoluciones de pantalla comunes en cent\u00edmetros",
      li9: "1280 x 720 (HD) \u2014 33.87 x 19.05 cm a 96 DPI",
      li10: "1920 x 1080 (Full HD) \u2014 50.8 x 28.58 cm a 96 DPI",
      li11: "2560 x 1440 (QHD) \u2014 67.73 x 38.1 cm a 96 DPI",
      li12: "3840 x 2160 (4K) \u2014 101.6 x 57.15 cm a 96 DPI",
    },
  },

  fr: {
    faq: [
      {
        question: "Comment convertir des pixels en centim\u00e8tres ?",
        answer:
          "Multipliez le nombre de pixels par 2.54, puis divisez par les DPI. Par exemple, 378 pixels \u00e0 96 DPI \u00e9quivalent \u00e0 environ 10 cm (378 x 2.54 / 96 = 10.0).",
      },
      {
        question: "Combien de centim\u00e8tres font 1920 pixels \u00e0 96 DPI ?",
        answer:
          "\u00c0 96 DPI, 1920 pixels \u00e9quivalent \u00e0 environ 50.8 cm (1920 x 2.54 / 96 = 50.8). C\u2019est la largeur d\u2019un \u00e9cran standard 1080p mesur\u00e9e en centim\u00e8tres.",
      },
      {
        question: "Combien de centim\u00e8tres font 100 pixels ?",
        answer:
          "\u00c0 96 DPI (standard web), 100 pixels \u00e9quivalent \u00e0 environ 2.65 cm. \u00c0 300 DPI (impression), 100 pixels \u00e9quivalent \u00e0 environ 0.85 cm. La taille physique d\u00e9pend des DPI.",
      },
      {
        question: "Pourquoi les centim\u00e8tres sont-ils utiles pour la conversion de pixels ?",
        answer:
          "La plupart des pays en dehors des \u00c9tats-Unis utilisent le syst\u00e8me m\u00e9trique. Conna\u00eetre la conversion pixels-cm est essentiel pour le design d\u2019impression international, l\u2019emballage de produits et tout projet avec des sp\u00e9cifications m\u00e9triques.",
      },
      {
        question: "Quelle est la diff\u00e9rence entre PPI et DPI ?",
        answer:
          "PPI (pixels par pouce) d\u00e9signe la r\u00e9solution d\u2019\u00e9cran, tandis que DPI (points par pouce) d\u00e9signe la r\u00e9solution d\u2019impression. Pour la conversion de pixels, ils sont utilis\u00e9s de mani\u00e8re interchangeable car les deux d\u00e9finissent des pixels par pouce physique.",
      },
    ],
    body: {
      heading1: "Comment fonctionne la conversion pixels vers centim\u00e8tres",
      p1: "Convertir des pixels en centim\u00e8tres n\u00e9cessite de conna\u00eetre les DPI et la relation entre pouces et centim\u00e8tres. La formule est :",
      formula: "Centim\u00e8tres = (Pixels x 2.54) / DPI",
      p2: "Cette formule convertit d\u2019abord les pixels en pouces (pixels / DPI), puis les pouces en centim\u00e8tres (pouces x 2.54).",
      heading2: "Cas d\u2019utilisation courants",
      li1: "\u00c9preuvage d\u2019impression : V\u00e9rifiez la taille physique des designs num\u00e9riques avant l\u2019impression.",
      li2: "Mesures d\u2019\u00e9cran : D\u00e9terminez la taille r\u00e9elle des \u00e9l\u00e9ments affich\u00e9s \u00e0 l\u2019\u00e9cran.",
      li3: "Collaboration internationale : Communiquez les dimensions en pixels avec des unit\u00e9s m\u00e9triques pour les \u00e9quipes mondiales.",
      li4: "Dimensionnement de photos : D\u00e9terminez les dimensions d\u2019impression pour les photos num\u00e9riques.",
      heading3: "R\u00e9f\u00e9rence rapide",
      li5: "1 pixel \u00e0 96 DPI \u2014 0.0265 cm (environ 0.26 mm)",
      li6: "1 pixel \u00e0 300 DPI \u2014 0.0085 cm (environ 0.085 mm)",
      li7: "Largeur 1080p (1920 px) \u00e0 96 DPI \u2014 50.8 cm",
      li8: "Largeur 4K (3840 px) \u00e0 96 DPI \u2014 101.6 cm",
      heading4: "Pourquoi convertir des pixels en centim\u00e8tres ?",
      p3: "La plupart des pays en dehors des \u00c9tats-Unis mesurent en unit\u00e9s m\u00e9triques. Lorsqu\u2019un client en Europe demande une banni\u00e8re de 30 cm de large, vous devez savoir combien de pixels cela n\u00e9cessite \u00e0 vos DPI cibles. Travailler \u00e0 l\u2019inverse, des pixels vers les cm, est tout aussi courant : v\u00e9rifier si une image de 1200 pixels de large remplira une colonne de 15 cm dans une mise en page de magazine. Les imprimeries dans les pays m\u00e9triques sp\u00e9cifient les dimensions en centim\u00e8tres, donc v\u00e9rifier les calculs pixels-cm avant d\u2019envoyer les fichiers \u00e9vite des r\u00e9impressions co\u00fbteuses.",
      heading5: "Comment les DPI affectent-ils la taille physique des pixels ?",
      p4: "Un seul pixel n\u2019a pas de taille physique fixe. Sa largeur en centim\u00e8tres d\u00e9pend enti\u00e8rement des DPI de sortie. \u00c0 96 DPI, chaque pixel mesure 0.0265 cm (environ 0.265 mm). \u00c0 300 DPI, le m\u00eame pixel se r\u00e9duit \u00e0 seulement 0.00847 cm (0.085 mm). Cette r\u00e9duction de 3x en taille physique explique pourquoi les impressions \u00e0 300 DPI paraissent plus nettes que les affichages \u00e0 96 DPI. Le nombre de pixels reste le m\u00eame, mais chaque pixel occupe moins d\u2019espace physique, produisant plus de d\u00e9tails par centim\u00e8tre.",
      heading6: "R\u00e9solutions d\u2019\u00e9cran courantes en centim\u00e8tres",
      li9: "1280 x 720 (HD) \u2014 33.87 x 19.05 cm \u00e0 96 DPI",
      li10: "1920 x 1080 (Full HD) \u2014 50.8 x 28.58 cm \u00e0 96 DPI",
      li11: "2560 x 1440 (QHD) \u2014 67.73 x 38.1 cm \u00e0 96 DPI",
      li12: "3840 x 2160 (4K) \u2014 101.6 x 57.15 cm \u00e0 96 DPI",
    },
  },

  de: {
    faq: [
      {
        question: "Wie rechne ich Pixels in Zentimeter um?",
        answer:
          "Multiplizieren Sie die Pixelanzahl mit 2.54 und teilen Sie dann durch die DPI. Zum Beispiel entsprechen 378 Pixels bei 96 DPI etwa 10 cm (378 x 2.54 / 96 = 10.0).",
      },
      {
        question: "Wie viele Zentimeter sind 1920 Pixels bei 96 DPI?",
        answer:
          "Bei 96 DPI entsprechen 1920 Pixels etwa 50.8 cm (1920 x 2.54 / 96 = 50.8). Das ist die Breite eines Standard-1080p-Displays in Zentimetern.",
      },
      {
        question: "Wie viele Zentimeter sind 100 Pixels?",
        answer:
          "Bei 96 DPI (Web-Standard) entsprechen 100 Pixels etwa 2.65 cm. Bei 300 DPI (Druck) entsprechen 100 Pixels etwa 0.85 cm. Die physische Gr\u00f6\u00dfe h\u00e4ngt von den DPI ab.",
      },
      {
        question: "Warum sind Zentimeter f\u00fcr die Pixel-Umrechnung n\u00fctzlich?",
        answer:
          "Die meisten L\u00e4nder au\u00dferhalb der USA verwenden das metrische System. Die Kenntnis der Pixel-zu-cm-Umrechnung ist unerl\u00e4sslich f\u00fcr internationales Druckdesign, Produktverpackungen und jedes Projekt mit metrischen Spezifikationen.",
      },
      {
        question: "Was ist der Unterschied zwischen PPI und DPI?",
        answer:
          "PPI (Pixels pro Zoll) bezieht sich auf die Bildschirmaufl\u00f6sung, w\u00e4hrend DPI (Punkte pro Zoll) sich auf die Druckaufl\u00f6sung bezieht. F\u00fcr die Pixel-Umrechnung werden sie austauschbar verwendet, da beide Pixels pro physischem Zoll definieren.",
      },
    ],
    body: {
      heading1: "So funktioniert die Umrechnung von Pixels in Zentimeter",
      p1: "Die Umrechnung von Pixels in Zentimeter erfordert die Kenntnis der DPI und des Verh\u00e4ltnisses zwischen Zoll und Zentimetern. Die Formel lautet:",
      formula: "Zentimeter = (Pixels x 2.54) / DPI",
      p2: "Diese Formel rechnet zuerst Pixels in Zoll um (Pixels / DPI) und dann Zoll in Zentimeter (Zoll x 2.54).",
      heading2: "H\u00e4ufige Anwendungsf\u00e4lle",
      li1: "Druckpr\u00fcfung: \u00dcberpr\u00fcfen Sie die physische Gr\u00f6\u00dfe digitaler Designs vor dem Drucken.",
      li2: "Bildschirmmessungen: Bestimmen Sie die reale Gr\u00f6\u00dfe von Bildschirmelementen.",
      li3: "Internationale Zusammenarbeit: Kommunizieren Sie Pixel-Abmessungen in metrischen Einheiten f\u00fcr globale Teams.",
      li4: "Fotogr\u00f6\u00dfe: Bestimmen Sie die Druckabmessungen f\u00fcr digitale Fotos.",
      heading3: "Kurzreferenz",
      li5: "1 Pixel bei 96 DPI \u2014 0.0265 cm (etwa 0.26 mm)",
      li6: "1 Pixel bei 300 DPI \u2014 0.0085 cm (etwa 0.085 mm)",
      li7: "1080p-Breite (1920 px) bei 96 DPI \u2014 50.8 cm",
      li8: "4K-Breite (3840 px) bei 96 DPI \u2014 101.6 cm",
      heading4: "Warum Pixels in Zentimeter umrechnen?",
      p3: "Die meisten L\u00e4nder au\u00dferhalb der Vereinigten Staaten messen in metrischen Einheiten. Wenn ein Kunde in Europa ein Banner mit 30 cm Breite anfordert, m\u00fcssen Sie wissen, wie viele Pixels das bei Ihrer Ziel-DPI erfordert. Der umgekehrte Weg, von Pixels zu cm, ist ebenso \u00fcblich: pr\u00fcfen, ob ein 1200 Pixels breites Bild eine 15-cm-Spalte in einem Zeitschriftenlayout f\u00fcllt. Druckereien in metrischen L\u00e4ndern geben Ma\u00dfe in Zentimetern an, daher vermeidet die \u00dcberpr\u00fcfung der Pixel-zu-cm-Berechnungen vor dem Versand kostspieliges Nachdrucken.",
      heading5: "Wie beeinflusst DPI die physische Gr\u00f6\u00dfe von Pixels?",
      p4: "Ein einzelnes Pixel hat keine feste physische Gr\u00f6\u00dfe. Seine Breite in Zentimetern h\u00e4ngt vollst\u00e4ndig von der Ausgabe-DPI ab. Bei 96 DPI misst jedes Pixel 0.0265 cm (etwa 0.265 mm). Bei 300 DPI schrumpft dasselbe Pixel auf nur 0.00847 cm (0.085 mm). Diese 3-fache Reduzierung der physischen Gr\u00f6\u00dfe ist der Grund, warum 300-DPI-Drucke sch\u00e4rfer aussehen als 96-DPI-Bildschirmanzeigen. Die Pixelanzahl bleibt gleich, aber jedes Pixel nimmt weniger physischen Raum ein und erzeugt feinere Details pro Zentimeter.",
      heading6: "G\u00e4ngige Bildschirmaufl\u00f6sungen in Zentimetern",
      li9: "1280 x 720 (HD) \u2014 33.87 x 19.05 cm bei 96 DPI",
      li10: "1920 x 1080 (Full HD) \u2014 50.8 x 28.58 cm bei 96 DPI",
      li11: "2560 x 1440 (QHD) \u2014 67.73 x 38.1 cm bei 96 DPI",
      li12: "3840 x 2160 (4K) \u2014 101.6 x 57.15 cm bei 96 DPI",
    },
  },

  pt: {
    faq: [
      {
        question: "Como converter pixels para cent\u00edmetros?",
        answer:
          "Multiplique a quantidade de pixels por 2.54 e depois divida pelo DPI. Por exemplo, 378 pixels a 96 DPI equivalem a aproximadamente 10 cm (378 x 2.54 / 96 = 10.0).",
      },
      {
        question: "Quantos cent\u00edmetros s\u00e3o 1920 pixels a 96 DPI?",
        answer:
          "A 96 DPI, 1920 pixels equivalem a aproximadamente 50.8 cm (1920 x 2.54 / 96 = 50.8). Esta \u00e9 a largura de um monitor padr\u00e3o 1080p medida em cent\u00edmetros.",
      },
      {
        question: "Quantos cent\u00edmetros s\u00e3o 100 pixels?",
        answer:
          "A 96 DPI (padr\u00e3o web), 100 pixels equivalem a aproximadamente 2.65 cm. A 300 DPI (impress\u00e3o), 100 pixels equivalem a aproximadamente 0.85 cm. O tamanho f\u00edsico depende do DPI.",
      },
      {
        question: "Por que cent\u00edmetros s\u00e3o \u00fateis para a convers\u00e3o de pixels?",
        answer:
          "A maioria dos pa\u00edses fora dos EUA usa o sistema m\u00e9trico. Conhecer a convers\u00e3o de pixels para cm \u00e9 essencial para design de impress\u00e3o internacional, embalagens de produtos e qualquer projeto com especifica\u00e7\u00f5es m\u00e9tricas.",
      },
      {
        question: "Qual \u00e9 a diferen\u00e7a entre PPI e DPI?",
        answer:
          "PPI (pixels por polegada) refere-se \u00e0 resolu\u00e7\u00e3o de tela, enquanto DPI (pontos por polegada) refere-se \u00e0 resolu\u00e7\u00e3o de impress\u00e3o. Para convers\u00e3o de pixels, s\u00e3o usados de forma intercambi\u00e1vel, pois ambos definem pixels por polegada f\u00edsica.",
      },
    ],
    body: {
      heading1: "Como funciona a convers\u00e3o de pixels para cent\u00edmetros",
      p1: "Converter pixels para cent\u00edmetros requer conhecer o DPI e a rela\u00e7\u00e3o entre polegadas e cent\u00edmetros. A f\u00f3rmula \u00e9:",
      formula: "Cent\u00edmetros = (Pixels x 2.54) / DPI",
      p2: "Esta f\u00f3rmula primeiro converte pixels para polegadas (pixels / DPI) e depois converte polegadas para cent\u00edmetros (polegadas x 2.54).",
      heading2: "Casos de uso comuns",
      li1: "Prova de impress\u00e3o: Verifique o tamanho f\u00edsico dos designs digitais antes de imprimir.",
      li2: "Medi\u00e7\u00f5es de tela: Determine o tamanho real dos elementos na tela.",
      li3: "Colabora\u00e7\u00e3o internacional: Comunique dimens\u00f5es em pixels com unidades m\u00e9tricas para equipes globais.",
      li4: "Dimensionamento de fotos: Determine as dimens\u00f5es de impress\u00e3o para fotos digitais.",
      heading3: "Refer\u00eancia r\u00e1pida",
      li5: "1 pixel a 96 DPI \u2014 0.0265 cm (cerca de 0.26 mm)",
      li6: "1 pixel a 300 DPI \u2014 0.0085 cm (cerca de 0.085 mm)",
      li7: "Largura 1080p (1920 px) a 96 DPI \u2014 50.8 cm",
      li8: "Largura 4K (3840 px) a 96 DPI \u2014 101.6 cm",
      heading4: "Por que converter pixels para cent\u00edmetros?",
      p3: "A maioria dos pa\u00edses fora dos Estados Unidos mede em unidades m\u00e9tricas. Quando um cliente na Europa solicita um banner de 30 cm de largura, voc\u00ea precisa saber quantos pixels s\u00e3o necess\u00e1rios no seu DPI alvo. Trabalhar de forma inversa, de pixels para cm, \u00e9 igualmente comum: verificar se uma imagem de 1200 pixels de largura preencher\u00e1 uma coluna de 15 cm em um layout de revista. Gr\u00e1ficas em pa\u00edses m\u00e9tricos especificam dimens\u00f5es em cent\u00edmetros, ent\u00e3o verificar os c\u00e1lculos de pixels para cm antes de enviar arquivos evita reimpress\u00f5es custosas.",
      heading5: "Como o DPI afeta o tamanho f\u00edsico dos pixels?",
      p4: "Um \u00fanico pixel n\u00e3o tem tamanho f\u00edsico fixo. Sua largura em cent\u00edmetros depende inteiramente do DPI de sa\u00edda. A 96 DPI, cada pixel mede 0.0265 cm (cerca de 0.265 mm). A 300 DPI, o mesmo pixel encolhe para apenas 0.00847 cm (0.085 mm). Essa redu\u00e7\u00e3o de 3x no tamanho f\u00edsico \u00e9 o motivo pelo qual impress\u00f5es a 300 DPI parecem mais n\u00edtidas do que exibi\u00e7\u00f5es a 96 DPI. A contagem de pixels permanece a mesma, mas cada pixel ocupa menos espa\u00e7o f\u00edsico, produzindo mais detalhes por cent\u00edmetro.",
      heading6: "Resolu\u00e7\u00f5es de tela comuns em cent\u00edmetros",
      li9: "1280 x 720 (HD) \u2014 33.87 x 19.05 cm a 96 DPI",
      li10: "1920 x 1080 (Full HD) \u2014 50.8 x 28.58 cm a 96 DPI",
      li11: "2560 x 1440 (QHD) \u2014 67.73 x 38.1 cm a 96 DPI",
      li12: "3840 x 2160 (4K) \u2014 101.6 x 57.15 cm a 96 DPI",
    },
  },

  hi: {
    faq: [
      {
        question: "Pixels \u0915\u094b \u0938\u0947\u0902\u091f\u0940\u092e\u0940\u091f\u0930 \u092e\u0947\u0902 \u0915\u0948\u0938\u0947 \u092c\u0926\u0932\u0947\u0902?",
        answer:
          "Pixels \u0915\u0940 \u0938\u0902\u0916\u094d\u092f\u093e \u0915\u094b 2.54 \u0938\u0947 \u0917\u0941\u0923\u093e \u0915\u0930\u0947\u0902, \u092b\u093f\u0930 DPI \u0938\u0947 \u092d\u093e\u0917 \u0926\u0947\u0902\u0964 \u0909\u0926\u093e\u0939\u0930\u0923 \u0915\u0947 \u0932\u093f\u090f, 96 DPI \u092a\u0930 378 pixels \u0932\u0917\u092d\u0917 10 cm \u0915\u0947 \u092c\u0930\u093e\u092c\u0930 \u0939\u094b\u0924\u0947 \u0939\u0948\u0902 (378 x 2.54 / 96 = 10.0)\u0964",
      },
      {
        question: "96 DPI \u092a\u0930 1920 pixels \u0915\u093f\u0924\u0928\u0947 \u0938\u0947\u0902\u091f\u0940\u092e\u0940\u091f\u0930 \u0939\u094b\u0924\u0947 \u0939\u0948\u0902?",
        answer:
          "96 DPI \u092a\u0930, 1920 pixels \u0932\u0917\u092d\u0917 50.8 cm \u0915\u0947 \u092c\u0930\u093e\u092c\u0930 \u0939\u094b\u0924\u0947 \u0939\u0948\u0902 (1920 x 2.54 / 96 = 50.8)\u0964 \u092f\u0939 \u0938\u0947\u0902\u091f\u0940\u092e\u0940\u091f\u0930 \u092e\u0947\u0902 \u092e\u093e\u092a\u093e \u0917\u092f\u093e \u090f\u0915 \u092e\u093e\u0928\u0915 1080p \u0921\u093f\u0938\u094d\u092a\u094d\u0932\u0947 \u0915\u0940 \u091a\u094c\u0921\u093c\u093e\u0908 \u0939\u0948\u0964",
      },
      {
        question: "100 pixels \u0915\u093f\u0924\u0928\u0947 \u0938\u0947\u0902\u091f\u0940\u092e\u0940\u091f\u0930 \u0939\u094b\u0924\u0947 \u0939\u0948\u0902?",
        answer:
          "96 DPI (\u0935\u0947\u092c \u092e\u093e\u0928\u0915) \u092a\u0930, 100 pixels \u0932\u0917\u092d\u0917 2.65 cm \u0939\u094b\u0924\u0947 \u0939\u0948\u0902\u0964 300 DPI (\u092a\u094d\u0930\u093f\u0902\u091f) \u092a\u0930, 100 pixels \u0932\u0917\u092d\u0917 0.85 cm \u0939\u094b\u0924\u0947 \u0939\u0948\u0902\u0964 \u092d\u094c\u0924\u093f\u0915 \u0906\u0915\u093e\u0930 DPI \u092a\u0930 \u0928\u093f\u0930\u094d\u092d\u0930 \u0915\u0930\u0924\u093e \u0939\u0948\u0964",
      },
      {
        question: "Pixel \u0930\u0942\u092a\u093e\u0902\u0924\u0930\u0923 \u0915\u0947 \u0932\u093f\u090f \u0938\u0947\u0902\u091f\u0940\u092e\u0940\u091f\u0930 \u0915\u094d\u092f\u094b\u0902 \u0909\u092a\u092f\u094b\u0917\u0940 \u0939\u0948\u0902?",
        answer:
          "\u0905\u092e\u0947\u0930\u093f\u0915\u093e \u0915\u0947 \u092c\u093e\u0939\u0930 \u0905\u0927\u093f\u0915\u093e\u0902\u0936 \u0926\u0947\u0936 \u092e\u0947\u091f\u094d\u0930\u093f\u0915 \u092a\u094d\u0930\u0923\u093e\u0932\u0940 \u0915\u093e \u0909\u092a\u092f\u094b\u0917 \u0915\u0930\u0924\u0947 \u0939\u0948\u0902\u0964 Pixel-\u0938\u0947-cm \u0930\u0942\u092a\u093e\u0902\u0924\u0930\u0923 \u0915\u0940 \u091c\u093e\u0928\u0915\u093e\u0930\u0940 \u0905\u0902\u0924\u0930\u0930\u093e\u0937\u094d\u091f\u094d\u0930\u0940\u092f \u092a\u094d\u0930\u093f\u0902\u091f \u0921\u093f\u091c\u093e\u0907\u0928, \u0909\u0924\u094d\u092a\u093e\u0926 \u092a\u0948\u0915\u0947\u091c\u093f\u0902\u0917 \u0914\u0930 \u092e\u0947\u091f\u094d\u0930\u093f\u0915 \u0935\u093f\u0928\u093f\u0930\u094d\u0926\u0947\u0936\u094b\u0902 \u0935\u093e\u0932\u0947 \u0915\u093f\u0938\u0940 \u092d\u0940 \u092a\u094d\u0930\u094b\u091c\u0947\u0915\u094d\u091f \u0915\u0947 \u0932\u093f\u090f \u0906\u0935\u0936\u094d\u092f\u0915 \u0939\u0948\u0964",
      },
      {
        question: "PPI \u0914\u0930 DPI \u092e\u0947\u0902 \u0915\u094d\u092f\u093e \u0905\u0902\u0924\u0930 \u0939\u0948?",
        answer:
          "PPI (pixels \u092a\u094d\u0930\u0924\u093f \u0907\u0902\u091a) \u0938\u094d\u0915\u094d\u0930\u0940\u0928 \u0930\u0947\u091c\u093c\u0949\u0932\u094d\u092f\u0942\u0936\u0928 \u0915\u094b \u0926\u0930\u094d\u0936\u093e\u0924\u093e \u0939\u0948, \u091c\u092c\u0915\u093f DPI (\u0921\u0949\u091f\u094d\u0938 \u092a\u094d\u0930\u0924\u093f \u0907\u0902\u091a) \u092a\u094d\u0930\u093f\u0902\u091f \u0930\u0947\u091c\u093c\u0949\u0932\u094d\u092f\u0942\u0936\u0928 \u0915\u094b \u0926\u0930\u094d\u0936\u093e\u0924\u093e \u0939\u0948\u0964 Pixel \u0930\u0942\u092a\u093e\u0902\u0924\u0930\u0923 \u0915\u0947 \u0932\u093f\u090f, \u0926\u094b\u0928\u094b\u0902 \u0915\u093e \u0909\u092a\u092f\u094b\u0917 \u0938\u092e\u093e\u0928 \u0930\u0942\u092a \u0938\u0947 \u0915\u093f\u092f\u093e \u091c\u093e\u0924\u093e \u0939\u0948 \u0915\u094d\u092f\u094b\u0902\u0915\u093f \u0926\u094b\u0928\u094b\u0902 \u092a\u094d\u0930\u0924\u093f \u092d\u094c\u0924\u093f\u0915 \u0907\u0902\u091a pixels \u0915\u094b \u092a\u0930\u093f\u092d\u093e\u0937\u093f\u0924 \u0915\u0930\u0924\u0947 \u0939\u0948\u0902\u0964",
      },
    ],
    body: {
      heading1: "Pixel \u0938\u0947 \u0938\u0947\u0902\u091f\u0940\u092e\u0940\u091f\u0930 \u0930\u0942\u092a\u093e\u0902\u0924\u0930\u0923 \u0915\u0948\u0938\u0947 \u0915\u093e\u092e \u0915\u0930\u0924\u093e \u0939\u0948",
      p1: "Pixels \u0915\u094b \u0938\u0947\u0902\u091f\u0940\u092e\u0940\u091f\u0930 \u092e\u0947\u0902 \u092c\u0926\u0932\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f DPI \u0914\u0930 \u0907\u0902\u091a \u0924\u0925\u093e \u0938\u0947\u0902\u091f\u0940\u092e\u0940\u091f\u0930 \u0915\u0947 \u092c\u0940\u091a \u0915\u0947 \u0938\u0902\u092c\u0902\u0927 \u0915\u094b \u091c\u093e\u0928\u0928\u093e \u0906\u0935\u0936\u094d\u092f\u0915 \u0939\u0948\u0964 \u0938\u0942\u0924\u094d\u0930 \u0939\u0948:",
      formula: "\u0938\u0947\u0902\u091f\u0940\u092e\u0940\u091f\u0930 = (Pixels x 2.54) / DPI",
      p2: "\u092f\u0939 \u0938\u0942\u0924\u094d\u0930 \u092a\u0939\u0932\u0947 pixels \u0915\u094b \u0907\u0902\u091a \u092e\u0947\u0902 \u092c\u0926\u0932\u0924\u093e \u0939\u0948 (pixels / DPI), \u092b\u093f\u0930 \u0907\u0902\u091a \u0915\u094b \u0938\u0947\u0902\u091f\u0940\u092e\u0940\u091f\u0930 \u092e\u0947\u0902 \u092c\u0926\u0932\u0924\u093e \u0939\u0948 (\u0907\u0902\u091a x 2.54)\u0964",
      heading2: "\u0938\u093e\u092e\u093e\u0928\u094d\u092f \u0909\u092a\u092f\u094b\u0917 \u0915\u0947 \u092e\u093e\u092e\u0932\u0947",
      li1: "\u092a\u094d\u0930\u093f\u0902\u091f \u092a\u094d\u0930\u0942\u092b\u093f\u0902\u0917: \u092a\u094d\u0930\u093f\u0902\u091f \u0915\u0930\u0928\u0947 \u0938\u0947 \u092a\u0939\u0932\u0947 \u0921\u093f\u091c\u093f\u091f\u0932 \u0921\u093f\u091c\u093c\u093e\u0907\u0928 \u0915\u093e \u092d\u094c\u0924\u093f\u0915 \u0906\u0915\u093e\u0930 \u091c\u093e\u0901\u091a\u0947\u0902\u0964",
      li2: "\u0938\u094d\u0915\u094d\u0930\u0940\u0928 \u092e\u093e\u092a: \u0938\u094d\u0915\u094d\u0930\u0940\u0928 \u092a\u0930 \u0924\u0924\u094d\u0935\u094b\u0902 \u0915\u093e \u0935\u093e\u0938\u094d\u0924\u0935\u093f\u0915 \u0906\u0915\u093e\u0930 \u0928\u093f\u0930\u094d\u0927\u093e\u0930\u093f\u0924 \u0915\u0930\u0947\u0902\u0964",
      li3: "\u0905\u0902\u0924\u0930\u0930\u093e\u0937\u094d\u091f\u094d\u0930\u0940\u092f \u0938\u0939\u092f\u094b\u0917: \u0935\u0948\u0936\u094d\u0935\u093f\u0915 \u091f\u0940\u092e\u094b\u0902 \u0915\u0947 \u0932\u093f\u090f pixel \u0906\u092f\u093e\u092e\u094b\u0902 \u0915\u094b \u092e\u0947\u091f\u094d\u0930\u093f\u0915 \u0907\u0915\u093e\u0907\u092f\u094b\u0902 \u092e\u0947\u0902 \u0938\u0902\u092a\u094d\u0930\u0947\u0937\u093f\u0924 \u0915\u0930\u0947\u0902\u0964",
      li4: "\u092b\u094b\u091f\u094b \u0906\u0915\u093e\u0930: \u0921\u093f\u091c\u093f\u091f\u0932 \u092b\u094b\u091f\u094b \u0915\u0947 \u0932\u093f\u090f \u092a\u094d\u0930\u093f\u0902\u091f \u0906\u092f\u093e\u092e \u0928\u093f\u0930\u094d\u0927\u093e\u0930\u093f\u0924 \u0915\u0930\u0947\u0902\u0964",
      heading3: "\u0924\u094d\u0935\u0930\u093f\u0924 \u0938\u0902\u0926\u0930\u094d\u092d",
      li5: "96 DPI \u092a\u0930 1 pixel \u2014 0.0265 cm (\u0932\u0917\u092d\u0917 0.26 mm)",
      li6: "300 DPI \u092a\u0930 1 pixel \u2014 0.0085 cm (\u0932\u0917\u092d\u0917 0.085 mm)",
      li7: "96 DPI \u092a\u0930 1080p \u091a\u094c\u0921\u093c\u093e\u0908 (1920 px) \u2014 50.8 cm",
      li8: "96 DPI \u092a\u0930 4K \u091a\u094c\u0921\u093c\u093e\u0908 (3840 px) \u2014 101.6 cm",
      heading4: "Pixels \u0915\u094b \u0938\u0947\u0902\u091f\u0940\u092e\u0940\u091f\u0930 \u092e\u0947\u0902 \u0915\u094d\u092f\u094b\u0902 \u092c\u0926\u0932\u0947\u0902?",
      p3: "\u0938\u0902\u092f\u0941\u0915\u094d\u0924 \u0930\u093e\u091c\u094d\u092f \u0905\u092e\u0947\u0930\u093f\u0915\u093e \u0915\u0947 \u092c\u093e\u0939\u0930 \u0905\u0927\u093f\u0915\u093e\u0902\u0936 \u0926\u0947\u0936 \u092e\u0947\u091f\u094d\u0930\u093f\u0915 \u0907\u0915\u093e\u0907\u092f\u094b\u0902 \u092e\u0947\u0902 \u092e\u093e\u092a\u0924\u0947 \u0939\u0948\u0902\u0964 \u091c\u092c \u092f\u0942\u0930\u094b\u092a \u092e\u0947\u0902 \u0915\u094b\u0908 \u0915\u094d\u0932\u093e\u0907\u0902\u091f 30 cm \u091a\u094c\u0921\u093c\u0947 \u092c\u0948\u0928\u0930 \u0915\u0940 \u092e\u093e\u0902\u0917 \u0915\u0930\u0924\u093e \u0939\u0948, \u0924\u094b \u0906\u092a\u0915\u094b \u092f\u0939 \u091c\u093e\u0928\u0928\u093e \u0939\u094b\u0917\u093e \u0915\u093f \u0906\u092a\u0915\u0947 \u0932\u0915\u094d\u0937\u094d\u092f DPI \u092a\u0930 \u0915\u093f\u0924\u0928\u0947 pixels \u091a\u093e\u0939\u093f\u090f\u0964 Pixels \u0938\u0947 cm \u092e\u0947\u0902 \u0909\u0932\u091f\u093e \u0915\u093e\u092e \u0915\u0930\u0928\u093e \u092d\u0940 \u0909\u0924\u0928\u093e \u0939\u0940 \u0906\u092e \u0939\u0948: \u092f\u0939 \u091c\u093e\u0901\u091a\u0928\u093e \u0915\u093f 1200 pixels \u091a\u094c\u0921\u093c\u0940 \u0924\u0938\u094d\u0935\u0940\u0930 \u092a\u0924\u094d\u0930\u093f\u0915\u093e \u0932\u0947\u0906\u0909\u091f \u092e\u0947\u0902 15 cm \u0915\u0949\u0932\u092e \u092d\u0930\u0947\u0917\u0940 \u092f\u093e \u0928\u0939\u0940\u0902\u0964 \u092e\u0947\u091f\u094d\u0930\u093f\u0915 \u0926\u0947\u0936\u094b\u0902 \u092e\u0947\u0902 \u092a\u094d\u0930\u093f\u0902\u091f \u0936\u0949\u092a \u0938\u0947\u0902\u091f\u0940\u092e\u0940\u091f\u0930 \u092e\u0947\u0902 \u0906\u092f\u093e\u092e \u0928\u093f\u0930\u094d\u0926\u093f\u0937\u094d\u091f \u0915\u0930\u0924\u0940 \u0939\u0948\u0902, \u0907\u0938\u0932\u093f\u090f \u092b\u093e\u0907\u0932\u0947\u0902 \u092d\u0947\u091c\u0928\u0947 \u0938\u0947 \u092a\u0939\u0932\u0947 pixel-\u0938\u0947-cm \u0917\u0923\u0928\u093e \u0915\u0940 \u091c\u093e\u0901\u091a \u0915\u0930\u0928\u093e \u092e\u0939\u0901\u0917\u0947 \u092a\u0941\u0928\u0930\u094d\u092e\u0941\u0926\u094d\u0930\u0923 \u0938\u0947 \u092c\u091a\u093e\u0924\u093e \u0939\u0948\u0964",
      heading5: "DPI pixels \u0915\u0947 \u092d\u094c\u0924\u093f\u0915 \u0906\u0915\u093e\u0930 \u0915\u094b \u0915\u0948\u0938\u0947 \u092a\u094d\u0930\u092d\u093e\u0935\u093f\u0924 \u0915\u0930\u0924\u093e \u0939\u0948?",
      p4: "\u090f\u0915 pixel \u0915\u093e \u0915\u094b\u0908 \u0928\u093f\u0936\u094d\u091a\u093f\u0924 \u092d\u094c\u0924\u093f\u0915 \u0906\u0915\u093e\u0930 \u0928\u0939\u0940\u0902 \u0939\u094b\u0924\u093e\u0964 \u0938\u0947\u0902\u091f\u0940\u092e\u0940\u091f\u0930 \u092e\u0947\u0902 \u0907\u0938\u0915\u0940 \u091a\u094c\u0921\u093c\u093e\u0908 \u092a\u0942\u0930\u0940 \u0924\u0930\u0939 \u0906\u0909\u091f\u092a\u0941\u091f DPI \u092a\u0930 \u0928\u093f\u0930\u094d\u092d\u0930 \u0915\u0930\u0924\u0940 \u0939\u0948\u0964 96 DPI \u092a\u0930, \u092a\u094d\u0930\u0924\u094d\u092f\u0947\u0915 pixel 0.0265 cm (\u0932\u0917\u092d\u0917 0.265 mm) \u092e\u093e\u092a\u0924\u093e \u0939\u0948\u0964 300 DPI \u092a\u0930, \u0935\u0939\u0940 pixel \u0938\u093f\u0915\u0941\u0921\u093c\u0915\u0930 \u0915\u0947\u0935\u0932 0.00847 cm (0.085 mm) \u0930\u0939 \u091c\u093e\u0924\u093e \u0939\u0948\u0964 \u092d\u094c\u0924\u093f\u0915 \u0906\u0915\u093e\u0930 \u092e\u0947\u0902 \u092f\u0939 3 \u0917\u0941\u0928\u093e \u0915\u092e\u0940 \u0939\u0940 \u0915\u093e\u0930\u0923 \u0939\u0948 \u0915\u093f 300 DPI \u092a\u094d\u0930\u093f\u0902\u091f 96 DPI \u0938\u094d\u0915\u094d\u0930\u0940\u0928 \u0921\u093f\u0938\u094d\u092a\u094d\u0932\u0947 \u0938\u0947 \u0905\u0927\u093f\u0915 \u0924\u0940\u0916\u0940 \u0926\u093f\u0916\u0924\u0940 \u0939\u0948\u0902\u0964 Pixel \u0915\u0940 \u0938\u0902\u0916\u094d\u092f\u093e \u0938\u092e\u093e\u0928 \u0930\u0939\u0924\u0940 \u0939\u0948, \u0932\u0947\u0915\u093f\u0928 \u092a\u094d\u0930\u0924\u094d\u092f\u0947\u0915 pixel \u0915\u092e \u092d\u094c\u0924\u093f\u0915 \u0938\u094d\u0925\u093e\u0928 \u0932\u0947\u0924\u093e \u0939\u0948, \u091c\u093f\u0938\u0938\u0947 \u092a\u094d\u0930\u0924\u093f \u0938\u0947\u0902\u091f\u0940\u092e\u0940\u091f\u0930 \u0905\u0927\u093f\u0915 \u0935\u093f\u0938\u094d\u0924\u0943\u0924 \u0935\u093f\u0935\u0930\u0923 \u092e\u093f\u0932\u0924\u093e \u0939\u0948\u0964",
      heading6: "\u0938\u0947\u0902\u091f\u0940\u092e\u0940\u091f\u0930 \u092e\u0947\u0902 \u0938\u093e\u092e\u093e\u0928\u094d\u092f \u0938\u094d\u0915\u094d\u0930\u0940\u0928 \u0930\u0947\u091c\u093c\u0949\u0932\u094d\u092f\u0942\u0936\u0928",
      li9: "1280 x 720 (HD) \u2014 96 DPI \u092a\u0930 33.87 x 19.05 cm",
      li10: "1920 x 1080 (Full HD) \u2014 96 DPI \u092a\u0930 50.8 x 28.58 cm",
      li11: "2560 x 1440 (QHD) \u2014 96 DPI \u092a\u0930 67.73 x 38.1 cm",
      li12: "3840 x 2160 (4K) \u2014 96 DPI \u092a\u0930 101.6 x 57.15 cm",
    },
  },

  ja: {
    faq: [
      {
        question: "\u30d4\u30af\u30bb\u30eb\u3092\u30bb\u30f3\u30c1\u30e1\u30fc\u30c8\u30eb\u306b\u5909\u63db\u3059\u308b\u306b\u306f\uff1f",
        answer:
          "\u30d4\u30af\u30bb\u30eb\u6570\u306b2.54\u3092\u639b\u3051\u3001DPI\u3067\u5272\u308a\u307e\u3059\u3002\u4f8b\u3048\u3070\u300196 DPI\u306e\u5834\u5408\u3001378\u30d4\u30af\u30bb\u30eb\u306f\u7d04 10 cm\u3067\u3059\uff08378 x 2.54 / 96 = 10.0\uff09\u3002",
      },
      {
        question: "96 DPI\u30671920\u30d4\u30af\u30bb\u30eb\u306f\u4f55\u30bb\u30f3\u30c1\u30e1\u30fc\u30c8\u30eb\uff1f",
        answer:
          "96 DPI\u3067\u306f\u30011920\u30d4\u30af\u30bb\u30eb\u306f\u7d04 50.8 cm\u3067\u3059\uff081920 x 2.54 / 96 = 50.8\uff09\u3002\u3053\u308c\u306f\u6a19\u6e96\u7684\u306a1080p\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306e\u6a2a\u5e45\u3092\u30bb\u30f3\u30c1\u30e1\u30fc\u30c8\u30eb\u3067\u8868\u3057\u305f\u3082\u306e\u3067\u3059\u3002",
      },
      {
        question: "100\u30d4\u30af\u30bb\u30eb\u306f\u4f55\u30bb\u30f3\u30c1\u30e1\u30fc\u30c8\u30eb\uff1f",
        answer:
          "96 DPI\uff08Web\u6a19\u6e96\uff09\u3067\u306f\u3001100\u30d4\u30af\u30bb\u30eb\u306f\u7d04 2.65 cm\u3067\u3059\u3002300 DPI\uff08\u5370\u5237\uff09\u3067\u306f\u3001100\u30d4\u30af\u30bb\u30eb\u306f\u7d04 0.85 cm\u3067\u3059\u3002\u7269\u7406\u7684\u306a\u30b5\u30a4\u30ba\u306fDPI\u306b\u3088\u3063\u3066\u7570\u306a\u308a\u307e\u3059\u3002",
      },
      {
        question: "\u30d4\u30af\u30bb\u30eb\u5909\u63db\u306b\u30bb\u30f3\u30c1\u30e1\u30fc\u30c8\u30eb\u304c\u5f79\u7acb\u3064\u306e\u306f\u306a\u305c\uff1f",
        answer:
          "\u30a2\u30e1\u30ea\u30ab\u4ee5\u5916\u306e\u307b\u3068\u3093\u3069\u306e\u56fd\u3067\u306f\u30e1\u30fc\u30c8\u30eb\u6cd5\u3092\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u3002\u30d4\u30af\u30bb\u30eb\u304b\u3089cm\u3078\u306e\u5909\u63db\u3092\u77e5\u3063\u3066\u304a\u304f\u3053\u3068\u306f\u3001\u56fd\u969b\u7684\u306a\u5370\u5237\u30c7\u30b6\u30a4\u30f3\u3001\u88fd\u54c1\u30d1\u30c3\u30b1\u30fc\u30b8\u30f3\u30b0\u3001\u30e1\u30fc\u30c8\u30eb\u4ed5\u69d8\u306e\u3042\u308b\u3042\u3089\u3086\u308b\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u4e0d\u53ef\u6b20\u3067\u3059\u3002",
      },
      {
        question: "PPI\u3068DPI\u306e\u9055\u3044\u306f\uff1f",
        answer:
          "PPI\uff08\u30d4\u30af\u30bb\u30eb\u30fb\u30d1\u30fc\u30fb\u30a4\u30f3\u30c1\uff09\u306f\u753b\u9762\u89e3\u50cf\u5ea6\u3001DPI\uff08\u30c9\u30c3\u30c8\u30fb\u30d1\u30fc\u30fb\u30a4\u30f3\u30c1\uff09\u306f\u5370\u5237\u89e3\u50cf\u5ea6\u3092\u6307\u3057\u307e\u3059\u3002\u30d4\u30af\u30bb\u30eb\u5909\u63db\u3067\u306f\u3001\u3069\u3061\u3089\u3082\u7269\u7406\u7684\u306a1\u30a4\u30f3\u30c1\u3042\u305f\u308a\u306e\u30d4\u30af\u30bb\u30eb\u6570\u3092\u5b9a\u7fa9\u3059\u308b\u305f\u3081\u3001\u4e92\u63db\u7684\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002",
      },
    ],
    body: {
      heading1: "\u30d4\u30af\u30bb\u30eb\u304b\u3089\u30bb\u30f3\u30c1\u30e1\u30fc\u30c8\u30eb\u3078\u306e\u5909\u63db\u306e\u4ed5\u7d44\u307f",
      p1: "\u30d4\u30af\u30bb\u30eb\u3092\u30bb\u30f3\u30c1\u30e1\u30fc\u30c8\u30eb\u306b\u5909\u63db\u3059\u308b\u306b\u306f\u3001DPI\u3068\u30a4\u30f3\u30c1\u30fb\u30bb\u30f3\u30c1\u30e1\u30fc\u30c8\u30eb\u9593\u306e\u95a2\u4fc2\u3092\u77e5\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u8a08\u7b97\u5f0f\u306f\u6b21\u306e\u901a\u308a\u3067\u3059\uff1a",
      formula: "\u30bb\u30f3\u30c1\u30e1\u30fc\u30c8\u30eb = (\u30d4\u30af\u30bb\u30eb x 2.54) / DPI",
      p2: "\u3053\u306e\u5f0f\u306f\u307e\u305a\u30d4\u30af\u30bb\u30eb\u3092\u30a4\u30f3\u30c1\u306b\u5909\u63db\u3057\uff08\u30d4\u30af\u30bb\u30eb / DPI\uff09\u3001\u6b21\u306b\u30a4\u30f3\u30c1\u3092\u30bb\u30f3\u30c1\u30e1\u30fc\u30c8\u30eb\u306b\u5909\u63db\u3057\u307e\u3059\uff08\u30a4\u30f3\u30c1 x 2.54\uff09\u3002",
      heading2: "\u4e3b\u306a\u7528\u9014",
      li1: "\u5370\u5237\u6821\u6b63: \u5370\u5237\u524d\u306b\u30c7\u30b8\u30bf\u30eb\u30c7\u30b6\u30a4\u30f3\u306e\u7269\u7406\u30b5\u30a4\u30ba\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002",
      li2: "\u753b\u9762\u6e2c\u5b9a: \u753b\u9762\u4e0a\u306e\u8981\u7d20\u306e\u5b9f\u969b\u306e\u30b5\u30a4\u30ba\u3092\u5224\u5b9a\u3057\u307e\u3059\u3002",
      li3: "\u56fd\u969b\u7684\u306a\u5354\u529b: \u30b0\u30ed\u30fc\u30d0\u30eb\u30c1\u30fc\u30e0\u5411\u3051\u306b\u30d4\u30af\u30bb\u30eb\u5bf8\u6cd5\u3092\u30e1\u30fc\u30c8\u30eb\u5358\u4f4d\u3067\u4f1d\u3048\u307e\u3059\u3002",
      li4: "\u5199\u771f\u30b5\u30a4\u30ba: \u30c7\u30b8\u30bf\u30eb\u5199\u771f\u306e\u5370\u5237\u5bf8\u6cd5\u3092\u6c7a\u5b9a\u3057\u307e\u3059\u3002",
      heading3: "\u30af\u30a4\u30c3\u30af\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9",
      li5: "96 DPI\u30671\u30d4\u30af\u30bb\u30eb \u2014 0.0265 cm\uff08\u7d04 0.26 mm\uff09",
      li6: "300 DPI\u30671\u30d4\u30af\u30bb\u30eb \u2014 0.0085 cm\uff08\u7d04 0.085 mm\uff09",
      li7: "96 DPI\u30671080p\u6a2a\u5e45\uff081920 px\uff09\u2014 50.8 cm",
      li8: "96 DPI\u30674K\u6a2a\u5e45\uff083840 px\uff09\u2014 101.6 cm",
      heading4: "\u30d4\u30af\u30bb\u30eb\u3092\u30bb\u30f3\u30c1\u30e1\u30fc\u30c8\u30eb\u306b\u5909\u63db\u3059\u308b\u7406\u7531",
      p3: "\u30a2\u30e1\u30ea\u30ab\u4ee5\u5916\u306e\u307b\u3068\u3093\u3069\u306e\u56fd\u3067\u306f\u30e1\u30fc\u30c8\u30eb\u5358\u4f4d\u3067\u6e2c\u5b9a\u3057\u307e\u3059\u3002\u30e8\u30fc\u30ed\u30c3\u30d1\u306e\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304c\u5e4530 cm\u306e\u30d0\u30ca\u30fc\u3092\u6c42\u3081\u305f\u5834\u5408\u3001\u30bf\u30fc\u30b2\u30c3\u30c8DPI\u3067\u4f55\u30d4\u30af\u30bb\u30eb\u5fc5\u8981\u304b\u3092\u77e5\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u30d4\u30af\u30bb\u30eb\u304b\u3089cm\u3078\u306e\u9006\u5909\u63db\u3082\u540c\u69d8\u306b\u4e00\u822c\u7684\u3067\u3059\uff1a1200\u30d4\u30af\u30bb\u30eb\u5e45\u306e\u753b\u50cf\u304c\u96d1\u8a8c\u30ec\u30a4\u30a2\u30a6\u30c8\u306e15 cm\u30b3\u30e9\u30e0\u3092\u57cb\u3081\u308b\u304b\u78ba\u8a8d\u3059\u308b\u306a\u3069\u3002\u30e1\u30fc\u30c8\u30eb\u5708\u306e\u5370\u5237\u6240\u3067\u306f\u30bb\u30f3\u30c1\u30e1\u30fc\u30c8\u30eb\u3067\u5bf8\u6cd5\u3092\u6307\u5b9a\u3059\u308b\u305f\u3081\u3001\u5165\u7a3f\u524d\u306b\u30d4\u30af\u30bb\u30eb\u304b\u3089cm\u306e\u8a08\u7b97\u3092\u78ba\u8a8d\u3059\u308b\u3053\u3068\u3067\u3001\u9ad8\u984d\u306a\u518d\u5370\u5237\u3092\u9632\u3052\u307e\u3059\u3002",
      heading5: "DPI\u306f\u30d4\u30af\u30bb\u30eb\u306e\u7269\u7406\u30b5\u30a4\u30ba\u306b\u3069\u3046\u5f71\u97ff\u3059\u308b\uff1f",
      p4: "1\u30d4\u30af\u30bb\u30eb\u306b\u306f\u56fa\u5b9a\u306e\u7269\u7406\u30b5\u30a4\u30ba\u304c\u3042\u308a\u307e\u305b\u3093\u3002\u30bb\u30f3\u30c1\u30e1\u30fc\u30c8\u30eb\u3067\u306e\u5e45\u306f\u51fa\u529bDPI\u306b\u5b8c\u5168\u306b\u4f9d\u5b58\u3057\u307e\u3059\u300296 DPI\u3067\u306f\u30011\u30d4\u30af\u30bb\u30eb\u306f0.0265 cm\uff08\u7d04 0.265 mm\uff09\u3067\u3059\u3002300 DPI\u3067\u306f\u3001\u540c\u3058\u30d4\u30af\u30bb\u30eb\u304c0.00847 cm\uff080.085 mm\uff09\u307e\u3067\u7e2e\u5c0f\u3057\u307e\u3059\u3002\u3053\u306e3\u500d\u306e\u7269\u7406\u30b5\u30a4\u30ba\u306e\u7e2e\u5c0f\u304c\u3001300 DPI\u306e\u5370\u5237\u304c96 DPI\u306e\u753b\u9762\u8868\u793a\u3088\u308a\u9bae\u660e\u306b\u898b\u3048\u308b\u7406\u7531\u3067\u3059\u3002\u30d4\u30af\u30bb\u30eb\u6570\u306f\u540c\u3058\u3067\u3059\u304c\u3001\u5404\u30d4\u30af\u30bb\u30eb\u304c\u5360\u3081\u308b\u7269\u7406\u7684\u306a\u30b9\u30da\u30fc\u30b9\u304c\u5c0f\u3055\u304f\u306a\u308a\u30011\u30bb\u30f3\u30c1\u30e1\u30fc\u30c8\u30eb\u3042\u305f\u308a\u306e\u30c7\u30a3\u30c6\u30fc\u30eb\u304c\u7d30\u304b\u304f\u306a\u308a\u307e\u3059\u3002",
      heading6: "\u30bb\u30f3\u30c1\u30e1\u30fc\u30c8\u30eb\u3067\u306e\u4e00\u822c\u7684\u306a\u753b\u9762\u89e3\u50cf\u5ea6",
      li9: "1280 x 720 (HD) \u2014 96 DPI\u306733.87 x 19.05 cm",
      li10: "1920 x 1080 (Full HD) \u2014 96 DPI\u306750.8 x 28.58 cm",
      li11: "2560 x 1440 (QHD) \u2014 96 DPI\u306767.73 x 38.1 cm",
      li12: "3840 x 2160 (4K) \u2014 96 DPI\u3067101.6 x 57.15 cm",
    },
  },

  ko: {
    faq: [
      {
        question: "\ud53d\uc140\uc744 \uc13c\ud2f0\ubbf8\ud130\ub85c \ubcc0\ud658\ud558\ub294 \ubc29\ubc95\uc740?",
        answer:
          "\ud53d\uc140 \uc218\uc5d0 2.54\ub97c \uacf1\ud55c \ud6c4 DPI\ub85c \ub098\ub204\uc138\uc694. \uc608\ub97c \ub4e4\uc5b4, 96 DPI\uc5d0\uc11c 378 \ud53d\uc140\uc740 \uc57d 10 cm\uc785\ub2c8\ub2e4 (378 x 2.54 / 96 = 10.0).",
      },
      {
        question: "96 DPI\uc5d0\uc11c 1920 \ud53d\uc140\uc740 \uba87 \uc13c\ud2f0\ubbf8\ud130\uc778\uac00\uc694?",
        answer:
          "96 DPI\uc5d0\uc11c 1920 \ud53d\uc140\uc740 \uc57d 50.8 cm\uc785\ub2c8\ub2e4 (1920 x 2.54 / 96 = 50.8). \uc774\uac83\uc740 \ud45c\uc900 1080p \ub514\uc2a4\ud50c\ub808\uc774\uc758 \ub108\ube44\ub97c \uc13c\ud2f0\ubbf8\ud130\ub85c \ud658\uc0b0\ud55c \uac12\uc785\ub2c8\ub2e4.",
      },
      {
        question: "100 \ud53d\uc140\uc740 \uba87 \uc13c\ud2f0\ubbf8\ud130\uc778\uac00\uc694?",
        answer:
          "96 DPI(\uc6f9 \ud45c\uc900)\uc5d0\uc11c 100 \ud53d\uc140\uc740 \uc57d 2.65 cm\uc785\ub2c8\ub2e4. 300 DPI(\uc778\uc1c4)\uc5d0\uc11c 100 \ud53d\uc140\uc740 \uc57d 0.85 cm\uc785\ub2c8\ub2e4. \ubb3c\ub9ac\uc801 \ud06c\uae30\ub294 DPI\uc5d0 \ub530\ub77c \ub2ec\ub77c\uc9d1\ub2c8\ub2e4.",
      },
      {
        question: "\ud53d\uc140 \ubcc0\ud658\uc5d0 \uc13c\ud2f0\ubbf8\ud130\uac00 \uc720\uc6a9\ud55c \uc774\uc720\ub294?",
        answer:
          "\ubbf8\uad6d \uc678 \ub300\ubd80\ubd84\uc758 \uad6d\uac00\uc5d0\uc11c\ub294 \ubbf8\ud130\ubc95\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \ud53d\uc140-cm \ubcc0\ud658\uc744 \uc544\ub294 \uac83\uc740 \uad6d\uc81c \uc778\uc1c4 \ub514\uc790\uc778, \uc81c\ud488 \ud3ec\uc7a5, \ubbf8\ud130\ubc95 \uc0ac\uc591\uc758 \ubaa8\ub4e0 \ud504\ub85c\uc81d\ud2b8\uc5d0 \ud544\uc218\uc801\uc785\ub2c8\ub2e4.",
      },
      {
        question: "PPI\uc640 DPI\uc758 \ucc28\uc774\uc810\uc740?",
        answer:
          "PPI(\ud53d\uc140/\uc778\uce58)\ub294 \ud654\uba74 \ud574\uc0c1\ub3c4, DPI(\ub3c4\ud2b8/\uc778\uce58)\ub294 \uc778\uc1c4 \ud574\uc0c1\ub3c4\ub97c \uc758\ubbf8\ud569\ub2c8\ub2e4. \ud53d\uc140 \ubcc0\ud658 \ubaa9\uc801\uc73c\ub85c\ub294 \ub458 \ub2e4 \ubb3c\ub9ac\uc801 \uc778\uce58\ub2f9 \ud53d\uc140 \uc218\ub97c \uc815\uc758\ud558\ubbc0\ub85c \ud638\ud658\uc801\uc73c\ub85c \uc0ac\uc6a9\ub429\ub2c8\ub2e4.",
      },
    ],
    body: {
      heading1: "\ud53d\uc140\uc5d0\uc11c \uc13c\ud2f0\ubbf8\ud130\ub85c\uc758 \ubcc0\ud658 \uc6d0\ub9ac",
      p1: "\ud53d\uc140\uc744 \uc13c\ud2f0\ubbf8\ud130\ub85c \ubcc0\ud658\ud558\ub824\uba74 DPI\uc640 \uc778\uce58-\uc13c\ud2f0\ubbf8\ud130 \uac04\uc758 \uad00\uacc4\ub97c \uc54c\uc544\uc57c \ud569\ub2c8\ub2e4. \uacf5\uc2dd\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4:",
      formula: "\uc13c\ud2f0\ubbf8\ud130 = (\ud53d\uc140 x 2.54) / DPI",
      p2: "\uc774 \uacf5\uc2dd\uc740 \uba3c\uc800 \ud53d\uc140\uc744 \uc778\uce58\ub85c \ubcc0\ud658\ud55c \ud6c4(\ud53d\uc140 / DPI), \uc778\uce58\ub97c \uc13c\ud2f0\ubbf8\ud130\ub85c \ubcc0\ud658\ud569\ub2c8\ub2e4(\uc778\uce58 x 2.54).",
      heading2: "\uc77c\ubc18\uc801\uc778 \uc0ac\uc6a9 \uc0ac\ub840",
      li1: "\uc778\uc1c4 \uad50\uc815: \uc778\uc1c4 \uc804 \ub514\uc9c0\ud138 \ub514\uc790\uc778\uc758 \ubb3c\ub9ac\uc801 \ud06c\uae30\ub97c \ud655\uc778\ud569\ub2c8\ub2e4.",
      li2: "\ud654\uba74 \uce21\uc815: \ud654\uba74 \uc694\uc18c\uc758 \uc2e4\uc81c \ud06c\uae30\ub97c \ud655\uc778\ud569\ub2c8\ub2e4.",
      li3: "\uad6d\uc81c \ud611\uc5c5: \uae00\ub85c\ubc8c \ud300\uc744 \uc704\ud574 \ud53d\uc140 \uce58\uc218\ub97c \ubbf8\ud130\ubc95 \ub2e8\uc704\ub85c \uc804\ub2ec\ud569\ub2c8\ub2e4.",
      li4: "\uc0ac\uc9c4 \ud06c\uae30 \uc870\uc815: \ub514\uc9c0\ud138 \uc0ac\uc9c4\uc758 \uc778\uc1c4 \uce58\uc218\ub97c \uacb0\uc815\ud569\ub2c8\ub2e4.",
      heading3: "\ube60\ub978 \ucc38\uc870",
      li5: "96 DPI\uc5d0\uc11c 1 \ud53d\uc140 \u2014 0.0265 cm (\uc57d 0.26 mm)",
      li6: "300 DPI\uc5d0\uc11c 1 \ud53d\uc140 \u2014 0.0085 cm (\uc57d 0.085 mm)",
      li7: "96 DPI\uc5d0\uc11c 1080p \ub108\ube44 (1920 px) \u2014 50.8 cm",
      li8: "96 DPI\uc5d0\uc11c 4K \ub108\ube44 (3840 px) \u2014 101.6 cm",
      heading4: "\ud53d\uc140\uc744 \uc13c\ud2f0\ubbf8\ud130\ub85c \ubcc0\ud658\ud558\ub294 \uc774\uc720",
      p3: "\ubbf8\uad6d \uc678 \ub300\ubd80\ubd84\uc758 \uad6d\uac00\ub294 \ubbf8\ud130\ubc95 \ub2e8\uc704\ub85c \uce21\uc815\ud569\ub2c8\ub2e4. \uc720\ub7fd\uc758 \uace0\uac1d\uc774 \ub108\ube44 30 cm\uc758 \ubc30\ub108\ub97c \uc694\uccad\ud560 \ub54c, \ubaa9\ud45c DPI\uc5d0\uc11c \uba87 \ud53d\uc140\uc774 \ud544\uc694\ud55c\uc9c0 \uc54c\uc544\uc57c \ud569\ub2c8\ub2e4. \ud53d\uc140\uc5d0\uc11c cm\uc73c\ub85c\uc758 \uc5ed\ubcc0\ud658\ub3c4 \ub9c8\ucc2c\uac00\uc9c0\ub85c \uc77c\ubc18\uc801\uc785\ub2c8\ub2e4: 1200 \ud53d\uc140 \ub108\ube44\uc758 \uc774\ubbf8\uc9c0\uac00 \uc7a1\uc9c0 \ub808\uc774\uc544\uc6c3\uc758 15 cm \uce7c\ub7fc\uc744 \ucc44\uc6b8\uc9c0 \ud655\uc778\ud558\ub294 \uacbd\uc6b0 \ub4f1\uc785\ub2c8\ub2e4. \ubbf8\ud130\ubc95 \uad6d\uac00\uc758 \uc778\uc1c4\uc18c\ub294 \uce58\uc218\ub97c \uc13c\ud2f0\ubbf8\ud130\ub85c \uc9c0\uc815\ud558\ubbc0\ub85c, \ud30c\uc77c \uc804\uc1a1 \uc804 \ud53d\uc140-cm \uacc4\uc0b0\uc744 \ud655\uc778\ud558\uba74 \ube44\uc6a9\uc774 \ub9ce\uc774 \ub4dc\ub294 \uc7ac\uc778\uc1c4\ub97c \ubc29\uc9c0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
      heading5: "DPI\uac00 \ud53d\uc140\uc758 \ubb3c\ub9ac\uc801 \ud06c\uae30\uc5d0 \ubbf8\uce58\ub294 \uc601\ud5a5",
      p4: "\ud558\ub098\uc758 \ud53d\uc140\uc5d0\ub294 \uace0\uc815\ub41c \ubb3c\ub9ac\uc801 \ud06c\uae30\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. \uc13c\ud2f0\ubbf8\ud130 \ub2e8\uc704\uc758 \ub108\ube44\ub294 \uc804\uc801\uc73c\ub85c \ucd9c\ub825 DPI\uc5d0 \ub2ec\ub824 \uc788\uc2b5\ub2c8\ub2e4. 96 DPI\uc5d0\uc11c \uac01 \ud53d\uc140\uc740 0.0265 cm (\uc57d 0.265 mm)\uc785\ub2c8\ub2e4. 300 DPI\uc5d0\uc11c\ub294 \uac19\uc740 \ud53d\uc140\uc774 0.00847 cm (0.085 mm)\ub85c \uc904\uc5b4\ub4ed\ub2c8\ub2e4. \uc774 3\ubc30\uc758 \ubb3c\ub9ac\uc801 \ud06c\uae30 \uac10\uc18c\uac00 300 DPI \uc778\uc1c4\uac00 96 DPI \ud654\uba74\ubcf4\ub2e4 \ub354 \uc120\uba85\ud558\uac8c \ubcf4\uc774\ub294 \uc774\uc720\uc785\ub2c8\ub2e4. \ud53d\uc140 \uc218\ub294 \ub3d9\uc77c\ud558\uc9c0\ub9cc \uac01 \ud53d\uc140\uc774 \ucc28\uc9c0\ud558\ub294 \ubb3c\ub9ac\uc801 \uacf5\uac04\uc774 \uc904\uc5b4 \uc13c\ud2f0\ubbf8\ud130\ub2f9 \ub354 \uc138\ubc00\ud55c \ub514\ud14c\uc77c\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4.",
      heading6: "\uc13c\ud2f0\ubbf8\ud130\ub85c \ubcf8 \uc77c\ubc18\uc801\uc778 \ud654\uba74 \ud574\uc0c1\ub3c4",
      li9: "1280 x 720 (HD) \u2014 96 DPI\uc5d0\uc11c 33.87 x 19.05 cm",
      li10: "1920 x 1080 (Full HD) \u2014 96 DPI\uc5d0\uc11c 50.8 x 28.58 cm",
      li11: "2560 x 1440 (QHD) \u2014 96 DPI\uc5d0\uc11c 67.73 x 38.1 cm",
      li12: "3840 x 2160 (4K) \u2014 96 DPI\uc5d0\uc11c 101.6 x 57.15 cm",
    },
  },

  it: {
    faq: [
      {
        question: "Come si convertono i pixel in centimetri?",
        answer:
          "Moltiplica il numero di pixel per 2.54, poi dividi per i DPI. Ad esempio, 378 pixel a 96 DPI equivalgono a circa 10 cm (378 x 2.54 / 96 = 10.0).",
      },
      {
        question: "Quanti centimetri sono 1920 pixel a 96 DPI?",
        answer:
          "A 96 DPI, 1920 pixel equivalgono a circa 50.8 cm (1920 x 2.54 / 96 = 50.8). Questa \u00e8 la larghezza di un display standard 1080p misurata in centimetri.",
      },
      {
        question: "Quanti centimetri sono 100 pixel?",
        answer:
          "A 96 DPI (standard web), 100 pixel equivalgono a circa 2.65 cm. A 300 DPI (stampa), 100 pixel equivalgono a circa 0.85 cm. La dimensione fisica dipende dai DPI.",
      },
      {
        question: "Perch\u00e9 i centimetri sono utili per la conversione dei pixel?",
        answer:
          "La maggior parte dei paesi al di fuori degli USA utilizza il sistema metrico. Conoscere la conversione pixel-cm \u00e8 essenziale per il design di stampa internazionale, il packaging di prodotti e qualsiasi progetto con specifiche metriche.",
      },
      {
        question: "Qual \u00e8 la differenza tra PPI e DPI?",
        answer:
          "PPI (pixel per pollice) si riferisce alla risoluzione dello schermo, mentre DPI (punti per pollice) si riferisce alla risoluzione di stampa. Per la conversione dei pixel, sono usati in modo intercambiabile poich\u00e9 entrambi definiscono pixel per pollice fisico.",
      },
    ],
    body: {
      heading1: "Come funziona la conversione da pixel a centimetri",
      p1: "Convertire pixel in centimetri richiede la conoscenza dei DPI e della relazione tra pollici e centimetri. La formula \u00e8:",
      formula: "Centimetri = (Pixel x 2.54) / DPI",
      p2: "Questa formula prima converte i pixel in pollici (pixel / DPI), poi converte i pollici in centimetri (pollici x 2.54).",
      heading2: "Casi d\u2019uso comuni",
      li1: "Verifica di stampa: Controlla la dimensione fisica dei design digitali prima della stampa.",
      li2: "Misurazioni dello schermo: Determina la dimensione reale degli elementi sullo schermo.",
      li3: "Collaborazione internazionale: Comunica le dimensioni in pixel con unit\u00e0 metriche per team globali.",
      li4: "Dimensionamento foto: Determina le dimensioni di stampa per le foto digitali.",
      heading3: "Riferimento rapido",
      li5: "1 pixel a 96 DPI \u2014 0.0265 cm (circa 0.26 mm)",
      li6: "1 pixel a 300 DPI \u2014 0.0085 cm (circa 0.085 mm)",
      li7: "Larghezza 1080p (1920 px) a 96 DPI \u2014 50.8 cm",
      li8: "Larghezza 4K (3840 px) a 96 DPI \u2014 101.6 cm",
      heading4: "Perch\u00e9 convertire pixel in centimetri?",
      p3: "La maggior parte dei paesi al di fuori degli Stati Uniti misura in unit\u00e0 metriche. Quando un cliente in Europa richiede un banner largo 30 cm, devi sapere quanti pixel servono al tuo DPI target. Lavorare al contrario, da pixel a cm, \u00e8 altrettanto comune: verificare se un\u2019immagine larga 1200 pixel riempir\u00e0 una colonna di 15 cm in un layout di rivista. Le tipografie nei paesi metrici specificano le dimensioni in centimetri, quindi verificare i calcoli pixel-cm prima di inviare i file previene costose ristampe.",
      heading5: "Come influiscono i DPI sulla dimensione fisica dei pixel?",
      p4: "Un singolo pixel non ha una dimensione fisica fissa. La sua larghezza in centimetri dipende interamente dai DPI di output. A 96 DPI, ogni pixel misura 0.0265 cm (circa 0.265 mm). A 300 DPI, lo stesso pixel si riduce a soli 0.00847 cm (0.085 mm). Questa riduzione di 3 volte nella dimensione fisica \u00e8 il motivo per cui le stampe a 300 DPI appaiono pi\u00f9 nitide rispetto ai display a 96 DPI. Il numero di pixel rimane lo stesso, ma ogni pixel occupa meno spazio fisico, producendo dettagli pi\u00f9 fini per centimetro.",
      heading6: "Risoluzioni dello schermo comuni in centimetri",
      li9: "1280 x 720 (HD) \u2014 33.87 x 19.05 cm a 96 DPI",
      li10: "1920 x 1080 (Full HD) \u2014 50.8 x 28.58 cm a 96 DPI",
      li11: "2560 x 1440 (QHD) \u2014 67.73 x 38.1 cm a 96 DPI",
      li12: "3840 x 2160 (4K) \u2014 101.6 x 57.15 cm a 96 DPI",
    },
  },

  nl: {
    faq: [
      {
        question: "Hoe converteer ik pixels naar centimeters?",
        answer:
          "Vermenigvuldig het aantal pixels met 2.54 en deel vervolgens door de DPI. Bijvoorbeeld, 378 pixels bij 96 DPI is ongeveer 10 cm (378 x 2.54 / 96 = 10.0).",
      },
      {
        question: "Hoeveel centimeter is 1920 pixels bij 96 DPI?",
        answer:
          "Bij 96 DPI is 1920 pixels ongeveer 50.8 cm (1920 x 2.54 / 96 = 50.8). Dit is de breedte van een standaard 1080p-scherm gemeten in centimeters.",
      },
      {
        question: "Hoeveel centimeter is 100 pixels?",
        answer:
          "Bij 96 DPI (webstandaard) is 100 pixels ongeveer 2.65 cm. Bij 300 DPI (print) is 100 pixels ongeveer 0.85 cm. De fysieke grootte hangt af van de DPI.",
      },
      {
        question: "Waarom zijn centimeters nuttig voor pixelconversie?",
        answer:
          "De meeste landen buiten de VS gebruiken het metrieke stelsel. Kennis van pixel-naar-cm-conversie is essentieel voor internationaal drukwerkontwerp, productverpakking en elk project met metrische specificaties.",
      },
      {
        question: "Wat is het verschil tussen PPI en DPI?",
        answer:
          "PPI (pixels per inch) verwijst naar schermresolutie, terwijl DPI (dots per inch) verwijst naar afdrukresolutie. Voor pixelconversie worden ze door elkaar gebruikt, aangezien beide pixels per fysieke inch defini\u00ebren.",
      },
    ],
    body: {
      heading1: "Hoe werkt de conversie van pixels naar centimeters",
      p1: "Het omzetten van pixels naar centimeters vereist kennis van de DPI en de relatie tussen inches en centimeters. De formule is:",
      formula: "Centimeters = (Pixels x 2.54) / DPI",
      p2: "Deze formule zet eerst pixels om naar inches (pixels / DPI) en vervolgens inches naar centimeters (inches x 2.54).",
      heading2: "Veelvoorkomende toepassingen",
      li1: "Drukproeven: Controleer de fysieke grootte van digitale ontwerpen v\u00f3\u00f3r het afdrukken.",
      li2: "Schermmetingen: Bepaal de werkelijke grootte van schermelementen.",
      li3: "Internationale samenwerking: Communiceer pixelafmetingen in metrische eenheden voor mondiale teams.",
      li4: "Fotoformaat: Bepaal de afdrukafmetingen voor digitale foto\u2019s.",
      heading3: "Snelle referentie",
      li5: "1 pixel bij 96 DPI \u2014 0.0265 cm (ongeveer 0.26 mm)",
      li6: "1 pixel bij 300 DPI \u2014 0.0085 cm (ongeveer 0.085 mm)",
      li7: "1080p-breedte (1920 px) bij 96 DPI \u2014 50.8 cm",
      li8: "4K-breedte (3840 px) bij 96 DPI \u2014 101.6 cm",
      heading4: "Waarom pixels naar centimeters converteren?",
      p3: "De meeste landen buiten de Verenigde Staten meten in metrische eenheden. Wanneer een klant in Europa een banner van 30 cm breed aanvraagt, moet u weten hoeveel pixels dat vereist bij uw doel-DPI. Andersom werken, van pixels naar cm, is net zo gebruikelijk: controleren of een afbeelding van 1200 pixels breed een kolom van 15 cm in een tijdschriftlay-out vult. Drukkerijen in metrische landen specificeren afmetingen in centimeters, dus het verifi\u00ebren van pixel-naar-cm-berekeningen v\u00f3\u00f3r het verzenden van bestanden voorkomt kostbare herdrukken.",
      heading5: "Hoe be\u00efnvloedt DPI de fysieke grootte van pixels?",
      p4: "Een enkele pixel heeft geen vaste fysieke grootte. De breedte in centimeters hangt volledig af van de uitvoer-DPI. Bij 96 DPI meet elke pixel 0.0265 cm (ongeveer 0.265 mm). Bij 300 DPI krimpt dezelfde pixel tot slechts 0.00847 cm (0.085 mm). Deze 3x reductie in fysieke grootte is de reden waarom 300 DPI-afdrukken scherper ogen dan 96 DPI-schermweergaven. Het aantal pixels blijft gelijk, maar elke pixel neemt minder fysieke ruimte in, waardoor fijner detail per centimeter wordt geproduceerd.",
      heading6: "Veelvoorkomende schermresoluties in centimeters",
      li9: "1280 x 720 (HD) \u2014 33.87 x 19.05 cm bij 96 DPI",
      li10: "1920 x 1080 (Full HD) \u2014 50.8 x 28.58 cm bij 96 DPI",
      li11: "2560 x 1440 (QHD) \u2014 67.73 x 38.1 cm bij 96 DPI",
      li12: "3840 x 2160 (4K) \u2014 101.6 x 57.15 cm bij 96 DPI",
    },
  },

  ar: {
    faq: [
      {
        question: "\u0643\u064a\u0641 \u0623\u062d\u0648\u0651\u0644 \u0627\u0644\u0628\u0643\u0633\u0644\u0627\u062a \u0625\u0644\u0649 \u0633\u0646\u062a\u064a\u0645\u062a\u0631\u0627\u062a\u061f",
        answer:
          "\u0627\u0636\u0631\u0628 \u0639\u062f\u062f \u0627\u0644\u0628\u0643\u0633\u0644\u0627\u062a \u0641\u064a 2.54 \u062b\u0645 \u0627\u0642\u0633\u0645 \u0639\u0644\u0649 DPI. \u0639\u0644\u0649 \u0633\u0628\u064a\u0644 \u0627\u0644\u0645\u062b\u0627\u0644\u060c 378 \u0628\u0643\u0633\u0644 \u0639\u0646\u062f 96 DPI \u064a\u0633\u0627\u0648\u064a \u062a\u0642\u0631\u064a\u0628\u064b\u0627 10 \u0633\u0645 (378 x 2.54 / 96 = 10.0).",
      },
      {
        question: "\u0643\u0645 \u0633\u0646\u062a\u064a\u0645\u062a\u0631\u064b\u0627 \u064a\u0633\u0627\u0648\u064a 1920 \u0628\u0643\u0633\u0644 \u0639\u0646\u062f 96 DPI\u061f",
        answer:
          "\u0639\u0646\u062f 96 DPI\u060c \u064a\u0633\u0627\u0648\u064a 1920 \u0628\u0643\u0633\u0644 \u062a\u0642\u0631\u064a\u0628\u064b\u0627 50.8 \u0633\u0645 (1920 x 2.54 / 96 = 50.8). \u0647\u0630\u0627 \u0647\u0648 \u0639\u0631\u0636 \u0634\u0627\u0634\u0629 1080p \u0642\u064a\u0627\u0633\u064a\u0629 \u0645\u0642\u0627\u0633\u064b\u0627 \u0628\u0627\u0644\u0633\u0646\u062a\u064a\u0645\u062a\u0631\u0627\u062a.",
      },
      {
        question: "\u0643\u0645 \u0633\u0646\u062a\u064a\u0645\u062a\u0631\u064b\u0627 \u064a\u0633\u0627\u0648\u064a 100 \u0628\u0643\u0633\u0644\u061f",
        answer:
          "\u0639\u0646\u062f 96 DPI (\u0645\u0639\u064a\u0627\u0631 \u0627\u0644\u0648\u064a\u0628)\u060c 100 \u0628\u0643\u0633\u0644 \u064a\u0633\u0627\u0648\u064a \u062a\u0642\u0631\u064a\u0628\u064b\u0627 2.65 \u0633\u0645. \u0639\u0646\u062f 300 DPI (\u0627\u0644\u0637\u0628\u0627\u0639\u0629)\u060c 100 \u0628\u0643\u0633\u0644 \u064a\u0633\u0627\u0648\u064a \u062a\u0642\u0631\u064a\u0628\u064b\u0627 0.85 \u0633\u0645. \u0627\u0644\u062d\u062c\u0645 \u0627\u0644\u0641\u0639\u0644\u064a \u064a\u0639\u062a\u0645\u062f \u0639\u0644\u0649 DPI.",
      },
      {
        question: "\u0644\u0645\u0627\u0630\u0627 \u0627\u0644\u0633\u0646\u062a\u064a\u0645\u062a\u0631\u0627\u062a \u0645\u0641\u064a\u062f\u0629 \u0644\u062a\u062d\u0648\u064a\u0644 \u0627\u0644\u0628\u0643\u0633\u0644\u0627\u062a\u061f",
        answer:
          "\u0645\u0639\u0638\u0645 \u0627\u0644\u062f\u0648\u0644 \u062e\u0627\u0631\u062c \u0627\u0644\u0648\u0644\u0627\u064a\u0627\u062a \u0627\u0644\u0645\u062a\u062d\u062f\u0629 \u062a\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u0646\u0638\u0627\u0645 \u0627\u0644\u0645\u062a\u0631\u064a. \u0645\u0639\u0631\u0641\u0629 \u062a\u062d\u0648\u064a\u0644 \u0627\u0644\u0628\u0643\u0633\u0644 \u0625\u0644\u0649 \u0633\u0645 \u0623\u0645\u0631 \u0636\u0631\u0648\u0631\u064a \u0644\u062a\u0635\u0645\u064a\u0645 \u0627\u0644\u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u062f\u0648\u0644\u064a\u0629 \u0648\u062a\u063a\u0644\u064a\u0641 \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a \u0648\u0623\u064a \u0645\u0634\u0631\u0648\u0639 \u064a\u062a\u0636\u0645\u0646 \u0645\u0648\u0627\u0635\u0641\u0627\u062a \u0645\u062a\u0631\u064a\u0629.",
      },
      {
        question: "\u0645\u0627 \u0627\u0644\u0641\u0631\u0642 \u0628\u064a\u0646 PPI \u0648DPI\u061f",
        answer:
          "PPI (\u0628\u0643\u0633\u0644\u0627\u062a \u0644\u0643\u0644 \u0625\u0646\u0634) \u064a\u0634\u064a\u0631 \u0625\u0644\u0649 \u062f\u0642\u0629 \u0627\u0644\u0634\u0627\u0634\u0629\u060c \u0628\u064a\u0646\u0645\u0627 DPI (\u0646\u0642\u0627\u0637 \u0644\u0643\u0644 \u0625\u0646\u0634) \u064a\u0634\u064a\u0631 \u0625\u0644\u0649 \u062f\u0642\u0629 \u0627\u0644\u0637\u0628\u0627\u0639\u0629. \u0644\u0623\u063a\u0631\u0627\u0636 \u062a\u062d\u0648\u064a\u0644 \u0627\u0644\u0628\u0643\u0633\u0644\u0627\u062a\u060c \u064a\u064f\u0633\u062a\u062e\u062f\u0645\u0627\u0646 \u0628\u0627\u0644\u062a\u0628\u0627\u062f\u0644 \u0644\u0623\u0646 \u0643\u0644\u064a\u0647\u0645\u0627 \u064a\u062d\u062f\u062f \u0627\u0644\u0628\u0643\u0633\u0644\u0627\u062a \u0644\u0643\u0644 \u0625\u0646\u0634 \u0641\u0639\u0644\u064a.",
      },
    ],
    body: {
      heading1: "\u0643\u064a\u0641 \u064a\u0639\u0645\u0644 \u062a\u062d\u0648\u064a\u0644 \u0627\u0644\u0628\u0643\u0633\u0644\u0627\u062a \u0625\u0644\u0649 \u0633\u0646\u062a\u064a\u0645\u062a\u0631\u0627\u062a",
      p1: "\u064a\u062a\u0637\u0644\u0628 \u062a\u062d\u0648\u064a\u0644 \u0627\u0644\u0628\u0643\u0633\u0644\u0627\u062a \u0625\u0644\u0649 \u0633\u0646\u062a\u064a\u0645\u062a\u0631\u0627\u062a \u0645\u0639\u0631\u0641\u0629 DPI \u0648\u0627\u0644\u0639\u0644\u0627\u0642\u0629 \u0628\u064a\u0646 \u0627\u0644\u0625\u0646\u0634 \u0648\u0627\u0644\u0633\u0646\u062a\u064a\u0645\u062a\u0631\u0627\u062a. \u0627\u0644\u0635\u064a\u063a\u0629 \u0647\u064a:",
      formula: "\u0627\u0644\u0633\u0646\u062a\u064a\u0645\u062a\u0631\u0627\u062a = (\u0627\u0644\u0628\u0643\u0633\u0644\u0627\u062a x 2.54) / DPI",
      p2: "\u0647\u0630\u0647 \u0627\u0644\u0635\u064a\u063a\u0629 \u062a\u062d\u0648\u0651\u0644 \u0623\u0648\u0644\u0627\u064b \u0627\u0644\u0628\u0643\u0633\u0644\u0627\u062a \u0625\u0644\u0649 \u0625\u0646\u0634 (\u0627\u0644\u0628\u0643\u0633\u0644\u0627\u062a / DPI)\u060c \u062b\u0645 \u062a\u062d\u0648\u0651\u0644 \u0627\u0644\u0625\u0646\u0634 \u0625\u0644\u0649 \u0633\u0646\u062a\u064a\u0645\u062a\u0631\u0627\u062a (\u0627\u0644\u0625\u0646\u0634 x 2.54).",
      heading2: "\u062d\u0627\u0644\u0627\u062a \u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u0634\u0627\u0626\u0639\u0629",
      li1: "\u062a\u062f\u0642\u064a\u0642 \u0627\u0644\u0637\u0628\u0627\u0639\u0629: \u062a\u062d\u0642\u0642 \u0645\u0646 \u0627\u0644\u062d\u062c\u0645 \u0627\u0644\u0641\u0639\u0644\u064a \u0644\u0644\u062a\u0635\u0627\u0645\u064a\u0645 \u0627\u0644\u0631\u0642\u0645\u064a\u0629 \u0642\u0628\u0644 \u0627\u0644\u0637\u0628\u0627\u0639\u0629.",
      li2: "\u0642\u064a\u0627\u0633\u0627\u062a \u0627\u0644\u0634\u0627\u0634\u0629: \u062d\u062f\u062f \u0627\u0644\u062d\u062c\u0645 \u0627\u0644\u062d\u0642\u064a\u0642\u064a \u0644\u0644\u0639\u0646\u0627\u0635\u0631 \u0639\u0644\u0649 \u0627\u0644\u0634\u0627\u0634\u0629.",
      li3: "\u0627\u0644\u062a\u0639\u0627\u0648\u0646 \u0627\u0644\u062f\u0648\u0644\u064a: \u0623\u0648\u0635\u0644 \u0623\u0628\u0639\u0627\u062f \u0627\u0644\u0628\u0643\u0633\u0644\u0627\u062a \u0628\u0648\u062d\u062f\u0627\u062a \u0645\u062a\u0631\u064a\u0629 \u0644\u0644\u0641\u0631\u0642 \u0627\u0644\u0639\u0627\u0644\u0645\u064a\u0629.",
      li4: "\u062a\u062d\u062c\u064a\u0645 \u0627\u0644\u0635\u0648\u0631: \u062d\u062f\u062f \u0623\u0628\u0639\u0627\u062f \u0627\u0644\u0637\u0628\u0627\u0639\u0629 \u0644\u0644\u0635\u0648\u0631 \u0627\u0644\u0631\u0642\u0645\u064a\u0629.",
      heading3: "\u0645\u0631\u062c\u0639 \u0633\u0631\u064a\u0639",
      li5: "1 \u0628\u0643\u0633\u0644 \u0639\u0646\u062f 96 DPI \u2014 0.0265 \u0633\u0645 (\u062d\u0648\u0627\u0644\u064a 0.26 \u0645\u0645)",
      li6: "1 \u0628\u0643\u0633\u0644 \u0639\u0646\u062f 300 DPI \u2014 0.0085 \u0633\u0645 (\u062d\u0648\u0627\u0644\u064a 0.085 \u0645\u0645)",
      li7: "\u0639\u0631\u0636 1080p (1920 px) \u0639\u0646\u062f 96 DPI \u2014 50.8 \u0633\u0645",
      li8: "\u0639\u0631\u0636 4K (3840 px) \u0639\u0646\u062f 96 DPI \u2014 101.6 \u0633\u0645",
      heading4: "\u0644\u0645\u0627\u0630\u0627 \u062a\u062d\u0648\u0651\u0644 \u0627\u0644\u0628\u0643\u0633\u0644\u0627\u062a \u0625\u0644\u0649 \u0633\u0646\u062a\u064a\u0645\u062a\u0631\u0627\u062a\u061f",
      p3: "\u0645\u0639\u0638\u0645 \u0627\u0644\u062f\u0648\u0644 \u062e\u0627\u0631\u062c \u0627\u0644\u0648\u0644\u0627\u064a\u0627\u062a \u0627\u0644\u0645\u062a\u062d\u062f\u0629 \u062a\u0642\u064a\u0633 \u0628\u0627\u0644\u0648\u062d\u062f\u0627\u062a \u0627\u0644\u0645\u062a\u0631\u064a\u0629. \u0639\u0646\u062f\u0645\u0627 \u064a\u0637\u0644\u0628 \u0639\u0645\u064a\u0644 \u0641\u064a \u0623\u0648\u0631\u0648\u0628\u0627 \u0628\u0627\u0646\u0631 \u0628\u0639\u0631\u0636 30 \u0633\u0645\u060c \u062a\u062d\u062a\u0627\u062c \u0644\u0645\u0639\u0631\u0641\u0629 \u0639\u062f\u062f \u0627\u0644\u0628\u0643\u0633\u0644\u0627\u062a \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629 \u0639\u0646\u062f DPI \u0627\u0644\u0645\u0633\u062a\u0647\u062f\u0641. \u0627\u0644\u0639\u0645\u0644 \u0628\u0627\u0644\u0639\u0643\u0633 \u0645\u0646 \u0627\u0644\u0628\u0643\u0633\u0644\u0627\u062a \u0625\u0644\u0649 \u0633\u0645 \u0634\u0627\u0626\u0639 \u0628\u0646\u0641\u0633 \u0627\u0644\u0642\u062f\u0631: \u0627\u0644\u062a\u062d\u0642\u0642 \u0645\u0645\u0627 \u0625\u0630\u0627 \u0643\u0627\u0646\u062a \u0635\u0648\u0631\u0629 \u0628\u0639\u0631\u0636 1200 \u0628\u0643\u0633\u0644 \u0633\u062a\u0645\u0644\u0623 \u0639\u0645\u0648\u062f 15 \u0633\u0645 \u0641\u064a \u062a\u062e\u0637\u064a\u0637 \u0645\u062c\u0644\u0629. \u0645\u0637\u0627\u0628\u0639 \u0627\u0644\u062f\u0648\u0644 \u0627\u0644\u0645\u062a\u0631\u064a\u0629 \u062a\u062d\u062f\u062f \u0627\u0644\u0623\u0628\u0639\u0627\u062f \u0628\u0627\u0644\u0633\u0646\u062a\u064a\u0645\u062a\u0631\u0627\u062a\u060c \u0644\u0630\u0627 \u0627\u0644\u062a\u062d\u0642\u0642 \u0645\u0646 \u062d\u0633\u0627\u0628\u0627\u062a \u0628\u0643\u0633\u0644-\u0625\u0644\u0649-\u0633\u0645 \u0642\u0628\u0644 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0645\u0644\u0641\u0627\u062a \u064a\u0645\u0646\u0639 \u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0645\u0643\u0644\u0641\u0629.",
      heading5: "\u0643\u064a\u0641 \u064a\u0624\u062b\u0631 DPI \u0639\u0644\u0649 \u0627\u0644\u062d\u062c\u0645 \u0627\u0644\u0641\u0639\u0644\u064a \u0644\u0644\u0628\u0643\u0633\u0644\u0627\u062a\u061f",
      p4: "\u0644\u0627 \u064a\u0645\u0644\u0643 \u0627\u0644\u0628\u0643\u0633\u0644 \u0627\u0644\u0648\u0627\u062d\u062f \u062d\u062c\u0645\u064b\u0627 \u0641\u0639\u0644\u064a\u064b\u0627 \u062b\u0627\u0628\u062a\u064b\u0627. \u0639\u0631\u0636\u0647 \u0628\u0627\u0644\u0633\u0646\u062a\u064a\u0645\u062a\u0631\u0627\u062a \u064a\u0639\u062a\u0645\u062f \u0643\u0644\u064a\u064b\u0627 \u0639\u0644\u0649 DPI \u0627\u0644\u0625\u062e\u0631\u0627\u062c. \u0639\u0646\u062f 96 DPI\u060c \u0643\u0644 \u0628\u0643\u0633\u0644 \u064a\u0642\u064a\u0633 0.0265 \u0633\u0645 (\u062d\u0648\u0627\u0644\u064a 0.265 \u0645\u0645). \u0639\u0646\u062f 300 DPI\u060c \u064a\u062a\u0642\u0644\u0635 \u0646\u0641\u0633 \u0627\u0644\u0628\u0643\u0633\u0644 \u0625\u0644\u0649 0.00847 \u0633\u0645 \u0641\u0642\u0637 (0.085 \u0645\u0645). \u0647\u0630\u0627 \u0627\u0644\u062a\u0642\u0644\u064a\u0635 \u0628\u0645\u0642\u062f\u0627\u0631 3 \u0623\u0636\u0639\u0627\u0641 \u0641\u064a \u0627\u0644\u062d\u062c\u0645 \u0627\u0644\u0641\u0639\u0644\u064a \u0647\u0648 \u0627\u0644\u0633\u0628\u0628 \u0641\u064a \u0623\u0646 \u0645\u0637\u0628\u0648\u0639\u0627\u062a 300 DPI \u062a\u0628\u062f\u0648 \u0623\u0643\u062b\u0631 \u0648\u0636\u0648\u062d\u064b\u0627 \u0645\u0646 \u0634\u0627\u0634\u0627\u062a 96 DPI. \u0639\u062f\u062f \u0627\u0644\u0628\u0643\u0633\u0644\u0627\u062a \u064a\u0628\u0642\u0649 \u0646\u0641\u0633\u0647\u060c \u0644\u0643\u0646 \u0643\u0644 \u0628\u0643\u0633\u0644 \u064a\u0634\u063a\u0644 \u0645\u0633\u0627\u062d\u0629 \u0641\u0639\u0644\u064a\u0629 \u0623\u0642\u0644\u060c \u0645\u0645\u0627 \u064a\u0646\u062a\u062c \u062a\u0641\u0627\u0635\u064a\u0644 \u0623\u062f\u0642 \u0644\u0643\u0644 \u0633\u0646\u062a\u064a\u0645\u062a\u0631.",
      heading6: "\u062f\u0642\u0627\u062a \u0627\u0644\u0634\u0627\u0634\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629 \u0628\u0627\u0644\u0633\u0646\u062a\u064a\u0645\u062a\u0631\u0627\u062a",
      li9: "1280 x 720 (HD) \u2014 33.87 x 19.05 \u0633\u0645 \u0639\u0646\u062f 96 DPI",
      li10: "1920 x 1080 (Full HD) \u2014 50.8 x 28.58 \u0633\u0645 \u0639\u0646\u062f 96 DPI",
      li11: "2560 x 1440 (QHD) \u2014 67.73 x 38.1 \u0633\u0645 \u0639\u0646\u062f 96 DPI",
      li12: "3840 x 2160 (4K) \u2014 101.6 x 57.15 \u0633\u0645 \u0639\u0646\u062f 96 DPI",
    },
  },

  tr: {
    faq: [
      {
        question: "Pikselleri santimetreye nas\u0131l d\u00f6n\u00fc\u015ft\u00fcr\u00fcr\u00fcm?",
        answer:
          "Piksel say\u0131s\u0131n\u0131 2.54 ile \u00e7arp\u0131n, ard\u0131ndan DPI\u2019ye b\u00f6l\u00fcn. \u00d6rne\u011fin, 96 DPI\u2019de 378 piksel yakla\u015f\u0131k 10 cm\u2019dir (378 x 2.54 / 96 = 10.0).",
      },
      {
        question: "96 DPI\u2019de 1920 piksel ka\u00e7 santimetre?",
        answer:
          "96 DPI\u2019de 1920 piksel yakla\u015f\u0131k 50.8 cm\u2019dir (1920 x 2.54 / 96 = 50.8). Bu, santimetre cinsinden \u00f6l\u00e7\u00fclen standart bir 1080p ekran\u0131n geni\u015fli\u011fidir.",
      },
      {
        question: "100 piksel ka\u00e7 santimetre?",
        answer:
          "96 DPI\u2019de (web standard\u0131) 100 piksel yakla\u015f\u0131k 2.65 cm\u2019dir. 300 DPI\u2019de (bask\u0131) 100 piksel yakla\u015f\u0131k 0.85 cm\u2019dir. Fiziksel boyut DPI\u2019ye ba\u011fl\u0131d\u0131r.",
      },
      {
        question: "Piksel d\u00f6n\u00fc\u015f\u00fcm\u00fc i\u00e7in santimetre neden faydal\u0131d\u0131r?",
        answer:
          "ABD d\u0131\u015f\u0131ndaki \u00e7o\u011fu \u00fclke metrik sistemi kullan\u0131r. Piksel-cm d\u00f6n\u00fc\u015f\u00fcm\u00fcn\u00fc bilmek uluslararas\u0131 bask\u0131 tasar\u0131m\u0131, \u00fcr\u00fcn ambalaj\u0131 ve metrik \u00f6zellikler i\u00e7eren her proje i\u00e7in gereklidir.",
      },
      {
        question: "PPI ile DPI aras\u0131ndaki fark nedir?",
        answer:
          "PPI (piksel/in\u00e7) ekran \u00e7\u00f6z\u00fcn\u00fcrl\u00fc\u011f\u00fcn\u00fc, DPI (nokta/in\u00e7) bask\u0131 \u00e7\u00f6z\u00fcn\u00fcrl\u00fc\u011f\u00fcn\u00fc ifade eder. Piksel d\u00f6n\u00fc\u015f\u00fcm\u00fc a\u00e7\u0131s\u0131ndan, her ikisi de fiziksel in\u00e7 ba\u015f\u0131na piksel tan\u0131mlad\u0131\u011f\u0131 i\u00e7in birbirinin yerine kullan\u0131l\u0131r.",
      },
    ],
    body: {
      heading1: "Pikselden santimetreye d\u00f6n\u00fc\u015f\u00fcm nas\u0131l \u00e7al\u0131\u015f\u0131r",
      p1: "Pikselleri santimetreye d\u00f6n\u00fc\u015ft\u00fcrmek i\u00e7in DPI\u2019yi ve in\u00e7-santimetre ili\u015fkisini bilmek gerekir. Form\u00fcl \u015f\u00f6yledir:",
      formula: "Santimetre = (Piksel x 2.54) / DPI",
      p2: "Bu form\u00fcl \u00f6nce pikselleri in\u00e7e (piksel / DPI), sonra in\u00e7i santimetreye (in\u00e7 x 2.54) d\u00f6n\u00fc\u015ft\u00fcr\u00fcr.",
      heading2: "Yayg\u0131n kullan\u0131m alanlar\u0131",
      li1: "Bask\u0131 kontrolu: Bask\u0131dan \u00f6nce dijital tasar\u0131mlar\u0131n fiziksel boyutunu kontrol edin.",
      li2: "Ekran \u00f6l\u00e7\u00fcmleri: Ekrandaki \u00f6\u011felerin ger\u00e7ek boyutunu belirleyin.",
      li3: "Uluslararas\u0131 i\u015f birli\u011fi: K\u00fcresel ekipler i\u00e7in piksel boyutlar\u0131n\u0131 metrik birimlerle iletin.",
      li4: "Foto\u011fraf boyutland\u0131rma: Dijital foto\u011fraflar i\u00e7in bask\u0131 boyutlar\u0131n\u0131 belirleyin.",
      heading3: "H\u0131zl\u0131 referans",
      li5: "96 DPI\u2019de 1 piksel \u2014 0.0265 cm (yakla\u015f\u0131k 0.26 mm)",
      li6: "300 DPI\u2019de 1 piksel \u2014 0.0085 cm (yakla\u015f\u0131k 0.085 mm)",
      li7: "96 DPI\u2019de 1080p geni\u015flik (1920 px) \u2014 50.8 cm",
      li8: "96 DPI\u2019de 4K geni\u015flik (3840 px) \u2014 101.6 cm",
      heading4: "Pikselleri neden santimetreye d\u00f6n\u00fc\u015ft\u00fcrmeliyiz?",
      p3: "ABD d\u0131\u015f\u0131ndaki \u00e7o\u011fu \u00fclke metrik birimlerle \u00f6l\u00e7\u00fcm yapar. Avrupa\u2019daki bir m\u00fc\u015fteri 30 cm geni\u015fli\u011finde bir banner istedi\u011finde, hedef DPI\u2019nizde ka\u00e7 piksel gerekti\u011fini bilmeniz gerekir. Pikselden cm\u2019ye tersten \u00e7al\u0131\u015fmak da ayn\u0131 derecede yayg\u0131nd\u0131r: 1200 piksel geni\u015fli\u011findeki bir g\u00f6r\u00fcnt\u00fcn\u00fcn bir dergi d\u00fczeninde 15 cm\u2019lik bir s\u00fctunu doldurup doldurmayaca\u011f\u0131n\u0131 kontrol etmek gibi. Metrik \u00fclkelerdeki matbaalar boyutlar\u0131 santimetre cinsinden belirtir, bu nedenle dosyalar\u0131 g\u00f6ndermeden \u00f6nce piksel-cm hesaplamalar\u0131n\u0131 do\u011frulamak maliyetli yeniden bask\u0131lar\u0131 \u00f6nler.",
      heading5: "DPI piksellerin fiziksel boyutunu nas\u0131l etkiler?",
      p4: "Tek bir pikselin sabit bir fiziksel boyutu yoktur. Santimetre cinsinden geni\u015fli\u011fi tamamen \u00e7\u0131kt\u0131 DPI\u2019sine ba\u011fl\u0131d\u0131r. 96 DPI\u2019de her piksel 0.0265 cm (\u00f6l\u00e7er yakla\u015f\u0131k 0.265 mm). 300 DPI\u2019de ayn\u0131 piksel sadece 0.00847 cm\u2019ye (0.085 mm) k\u00fc\u00e7\u00fcl\u00fcr. Fiziksel boyuttaki bu 3 kat azalma, 300 DPI bask\u0131lar\u0131n 96 DPI ekran g\u00f6r\u00fcnt\u00fclerinden daha net g\u00f6r\u00fcnmesinin nedenidir. Piksel say\u0131s\u0131 ayn\u0131 kal\u0131r, ancak her piksel daha az fiziksel alan kaplar ve santimetre ba\u015f\u0131na daha ince ayr\u0131nt\u0131 \u00fcretir.",
      heading6: "Santimetre cinsinden yayg\u0131n ekran \u00e7\u00f6z\u00fcn\u00fcrl\u00fckleri",
      li9: "1280 x 720 (HD) \u2014 96 DPI\u2019de 33.87 x 19.05 cm",
      li10: "1920 x 1080 (Full HD) \u2014 96 DPI\u2019de 50.8 x 28.58 cm",
      li11: "2560 x 1440 (QHD) \u2014 96 DPI\u2019de 67.73 x 38.1 cm",
      li12: "3840 x 2160 (4K) \u2014 96 DPI\u2019de 101.6 x 57.15 cm",
    },
  },

  pl: {
    faq: [
      {
        question: "Jak zamieni\u0107 piksele na centymetry?",
        answer:
          "Pomn\u00f3\u017c liczb\u0119 pikseli przez 2.54, a nast\u0119pnie podziel przez DPI. Na przyk\u0142ad, 378 pikseli przy 96 DPI to oko\u0142o 10 cm (378 x 2.54 / 96 = 10.0).",
      },
      {
        question: "Ile centymetr\u00f3w ma 1920 pikseli przy 96 DPI?",
        answer:
          "Przy 96 DPI, 1920 pikseli to oko\u0142o 50.8 cm (1920 x 2.54 / 96 = 50.8). To szeroko\u015b\u0107 standardowego wy\u015bwietlacza 1080p mierzona w centymetrach.",
      },
      {
        question: "Ile centymetr\u00f3w ma 100 pikseli?",
        answer:
          "Przy 96 DPI (standard webowy), 100 pikseli to oko\u0142o 2.65 cm. Przy 300 DPI (druk), 100 pikseli to oko\u0142o 0.85 cm. Rozmiar fizyczny zale\u017cy od DPI.",
      },
      {
        question: "Dlaczego centymetry s\u0105 przydatne w konwersji pikseli?",
        answer:
          "Wi\u0119kszo\u015b\u0107 kraj\u00f3w poza USA u\u017cywa systemu metrycznego. Znajomo\u015b\u0107 konwersji pikseli na cm jest niezb\u0119dna w mi\u0119dzynarodowym projektowaniu druku, opakowaniach produkt\u00f3w i ka\u017cdym projekcie ze specyfikacjami metrycznymi.",
      },
      {
        question: "Jaka jest r\u00f3\u017cnica mi\u0119dzy PPI a DPI?",
        answer:
          "PPI (piksele na cal) odnosi si\u0119 do rozdzielczo\u015bci ekranu, a DPI (punkty na cal) do rozdzielczo\u015bci druku. W konwersji pikseli u\u017cywa si\u0119 ich zamiennie, poniewa\u017c oba definiuj\u0105 piksele na fizyczny cal.",
      },
    ],
    body: {
      heading1: "Jak dzia\u0142a konwersja pikseli na centymetry",
      p1: "Konwersja pikseli na centymetry wymaga znajomo\u015bci DPI oraz relacji mi\u0119dzy calami a centymetrami. Wz\u00f3r to:",
      formula: "Centymetry = (Piksele x 2.54) / DPI",
      p2: "Ten wz\u00f3r najpierw zamienia piksele na cale (piksele / DPI), a nast\u0119pnie cale na centymetry (cale x 2.54).",
      heading2: "Typowe zastosowania",
      li1: "Pr\u00f3ba druku: Sprawd\u017a fizyczny rozmiar projekt\u00f3w cyfrowych przed drukowaniem.",
      li2: "Pomiary ekranowe: Okre\u015bl rzeczywisty rozmiar element\u00f3w na ekranie.",
      li3: "Wsp\u00f3\u0142praca mi\u0119dzynarodowa: Komunikuj wymiary pikselowe w jednostkach metrycznych dla globalnych zespo\u0142\u00f3w.",
      li4: "Wymiarowanie zdj\u0119\u0107: Okre\u015bl wymiary druku dla zdj\u0119\u0107 cyfrowych.",
      heading3: "Szybki przegla\u0327d",
      li5: "1 piksel przy 96 DPI \u2014 0.0265 cm (oko\u0142o 0.26 mm)",
      li6: "1 piksel przy 300 DPI \u2014 0.0085 cm (oko\u0142o 0.085 mm)",
      li7: "Szeroko\u015b\u0107 1080p (1920 px) przy 96 DPI \u2014 50.8 cm",
      li8: "Szeroko\u015b\u0107 4K (3840 px) przy 96 DPI \u2014 101.6 cm",
      heading4: "Dlaczego warto konwertowa\u0107 piksele na centymetry?",
      p3: "Wi\u0119kszo\u015b\u0107 kraj\u00f3w poza Stanami Zjednoczonymi mierzy w jednostkach metrycznych. Gdy klient w Europie prosi o baner o szeroko\u015bci 30 cm, musisz wiedzie\u0107, ile pikseli wymaga to przy docelowym DPI. Praca w odwrotnym kierunku, od pikseli do cm, jest r\u00f3wnie powszechna: sprawdzanie, czy obraz o szeroko\u015bci 1200 pikseli wype\u0142ni kolumn\u0119 15 cm w uk\u0142adzie magazynu. Drukarnie w krajach metrycznych podaj\u0105 wymiary w centymetrach, wi\u0119c weryfikacja oblicze\u0144 piksel-cm przed wys\u0142aniem plik\u00f3w zapobiega kosztownym przedrukom.",
      heading5: "Jak DPI wp\u0142ywa na fizyczny rozmiar pikseli?",
      p4: "Pojedynczy piksel nie ma sta\u0142ego rozmiaru fizycznego. Jego szeroko\u015b\u0107 w centymetrach zale\u017cy ca\u0142kowicie od wyj\u015bciowego DPI. Przy 96 DPI ka\u017cdy piksel mierzy 0.0265 cm (oko\u0142o 0.265 mm). Przy 300 DPI ten sam piksel kurczy si\u0119 do zaledwie 0.00847 cm (0.085 mm). Ta 3-krotna redukcja rozmiaru fizycznego jest powodem, dla kt\u00f3rego wydruki 300 DPI wygl\u0105daj\u0105 ostrzej ni\u017c wy\u015bwietlacze 96 DPI. Liczba pikseli pozostaje taka sama, ale ka\u017cdy piksel zajmuje mniej fizycznej przestrzeni, produkuj\u0105c drobniejsze szczeg\u00f3\u0142y na centymetr.",
      heading6: "Popularne rozdzielczo\u015bci ekranu w centymetrach",
      li9: "1280 x 720 (HD) \u2014 33.87 x 19.05 cm przy 96 DPI",
      li10: "1920 x 1080 (Full HD) \u2014 50.8 x 28.58 cm przy 96 DPI",
      li11: "2560 x 1440 (QHD) \u2014 67.73 x 38.1 cm przy 96 DPI",
      li12: "3840 x 2160 (4K) \u2014 101.6 x 57.15 cm przy 96 DPI",
    },
  },

  id: {
    faq: [
      {
        question: "Bagaimana cara mengonversi piksel ke sentimeter?",
        answer:
          "Kalikan jumlah piksel dengan 2.54, lalu bagi dengan DPI. Misalnya, 378 piksel pada 96 DPI sama dengan sekitar 10 cm (378 x 2.54 / 96 = 10.0).",
      },
      {
        question: "Berapa sentimeter 1920 piksel pada 96 DPI?",
        answer:
          "Pada 96 DPI, 1920 piksel sama dengan sekitar 50.8 cm (1920 x 2.54 / 96 = 50.8). Ini adalah lebar layar standar 1080p yang diukur dalam sentimeter.",
      },
      {
        question: "Berapa sentimeter 100 piksel?",
        answer:
          "Pada 96 DPI (standar web), 100 piksel sama dengan sekitar 2.65 cm. Pada 300 DPI (cetak), 100 piksel sama dengan sekitar 0.85 cm. Ukuran fisik bergantung pada DPI.",
      },
      {
        question: "Mengapa sentimeter berguna untuk konversi piksel?",
        answer:
          "Sebagian besar negara di luar AS menggunakan sistem metrik. Mengetahui konversi piksel ke cm sangat penting untuk desain cetak internasional, kemasan produk, dan proyek apa pun dengan spesifikasi metrik.",
      },
      {
        question: "Apa perbedaan antara PPI dan DPI?",
        answer:
          "PPI (piksel per inci) mengacu pada resolusi layar, sedangkan DPI (titik per inci) mengacu pada resolusi cetak. Untuk konversi piksel, keduanya digunakan secara bergantian karena sama-sama mendefinisikan piksel per inci fisik.",
      },
    ],
    body: {
      heading1: "Cara kerja konversi piksel ke sentimeter",
      p1: "Mengonversi piksel ke sentimeter memerlukan pengetahuan tentang DPI dan hubungan antara inci dan sentimeter. Rumusnya adalah:",
      formula: "Sentimeter = (Piksel x 2.54) / DPI",
      p2: "Rumus ini terlebih dahulu mengonversi piksel ke inci (piksel / DPI), kemudian mengonversi inci ke sentimeter (inci x 2.54).",
      heading2: "Kasus penggunaan umum",
      li1: "Pemeriksaan cetak: Periksa ukuran fisik desain digital sebelum mencetak.",
      li2: "Pengukuran layar: Tentukan ukuran sebenarnya dari elemen di layar.",
      li3: "Kolaborasi internasional: Komunikasikan dimensi piksel dalam satuan metrik untuk tim global.",
      li4: "Pengaturan ukuran foto: Tentukan dimensi cetak untuk foto digital.",
      heading3: "Referensi cepat",
      li5: "1 piksel pada 96 DPI \u2014 0.0265 cm (sekitar 0.26 mm)",
      li6: "1 piksel pada 300 DPI \u2014 0.0085 cm (sekitar 0.085 mm)",
      li7: "Lebar 1080p (1920 px) pada 96 DPI \u2014 50.8 cm",
      li8: "Lebar 4K (3840 px) pada 96 DPI \u2014 101.6 cm",
      heading4: "Mengapa mengonversi piksel ke sentimeter?",
      p3: "Sebagian besar negara di luar Amerika Serikat mengukur dalam satuan metrik. Ketika klien di Eropa meminta banner selebar 30 cm, Anda perlu mengetahui berapa piksel yang diperlukan pada DPI target Anda. Bekerja secara terbalik dari piksel ke cm sama umumnya: memeriksa apakah gambar selebar 1200 piksel akan mengisi kolom 15 cm dalam tata letak majalah. Percetakan di negara metrik menentukan dimensi dalam sentimeter, jadi memverifikasi perhitungan piksel ke cm sebelum mengirim file mencegah cetak ulang yang mahal.",
      heading5: "Bagaimana DPI memengaruhi ukuran fisik piksel?",
      p4: "Satu piksel tidak memiliki ukuran fisik tetap. Lebarnya dalam sentimeter sepenuhnya bergantung pada DPI output. Pada 96 DPI, setiap piksel berukuran 0.0265 cm (sekitar 0.265 mm). Pada 300 DPI, piksel yang sama menyusut menjadi hanya 0.00847 cm (0.085 mm). Pengurangan 3x dalam ukuran fisik ini adalah alasan mengapa cetakan 300 DPI terlihat lebih tajam daripada tampilan layar 96 DPI. Jumlah piksel tetap sama, tetapi setiap piksel menempati lebih sedikit ruang fisik, menghasilkan detail lebih halus per sentimeter.",
      heading6: "Resolusi layar umum dalam sentimeter",
      li9: "1280 x 720 (HD) \u2014 33.87 x 19.05 cm pada 96 DPI",
      li10: "1920 x 1080 (Full HD) \u2014 50.8 x 28.58 cm pada 96 DPI",
      li11: "2560 x 1440 (QHD) \u2014 67.73 x 38.1 cm pada 96 DPI",
      li12: "3840 x 2160 (4K) \u2014 101.6 x 57.15 cm pada 96 DPI",
    },
  },

  ru: {
    faq: [
      {
        question: "\u041a\u0430\u043a \u043f\u0435\u0440\u0435\u0432\u0435\u0441\u0442\u0438 \u043f\u0438\u043a\u0441\u0435\u043b\u0438 \u0432 \u0441\u0430\u043d\u0442\u0438\u043c\u0435\u0442\u0440\u044b?",
        answer:
          "\u0423\u043c\u043d\u043e\u0436\u044c\u0442\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0438\u043a\u0441\u0435\u043b\u0435\u0439 \u043d\u0430 2.54, \u0437\u0430\u0442\u0435\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435 \u043d\u0430 DPI. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, 378 \u043f\u0438\u043a\u0441\u0435\u043b\u0435\u0439 \u043f\u0440\u0438 96 DPI \u0440\u0430\u0432\u043d\u044b \u043f\u0440\u0438\u043c\u0435\u0440\u043d\u043e 10 \u0441\u043c (378 x 2.54 / 96 = 10.0).",
      },
      {
        question: "\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0430\u043d\u0442\u0438\u043c\u0435\u0442\u0440\u043e\u0432 \u0432 1920 \u043f\u0438\u043a\u0441\u0435\u043b\u044f\u0445 \u043f\u0440\u0438 96 DPI?",
        answer:
          "\u041f\u0440\u0438 96 DPI 1920 \u043f\u0438\u043a\u0441\u0435\u043b\u0435\u0439 \u0440\u0430\u0432\u043d\u044b \u043f\u0440\u0438\u043c\u0435\u0440\u043d\u043e 50.8 \u0441\u043c (1920 x 2.54 / 96 = 50.8). \u042d\u0442\u043e \u0448\u0438\u0440\u0438\u043d\u0430 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0433\u043e \u0434\u0438\u0441\u043f\u043b\u0435\u044f 1080p \u0432 \u0441\u0430\u043d\u0442\u0438\u043c\u0435\u0442\u0440\u0430\u0445.",
      },
      {
        question: "\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0430\u043d\u0442\u0438\u043c\u0435\u0442\u0440\u043e\u0432 \u0432 100 \u043f\u0438\u043a\u0441\u0435\u043b\u044f\u0445?",
        answer:
          "\u041f\u0440\u0438 96 DPI (\u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442 \u0434\u043b\u044f \u0432\u0435\u0431\u0430) 100 \u043f\u0438\u043a\u0441\u0435\u043b\u0435\u0439 \u0440\u0430\u0432\u043d\u044b \u043f\u0440\u0438\u043c\u0435\u0440\u043d\u043e 2.65 \u0441\u043c. \u041f\u0440\u0438 300 DPI (\u043f\u0435\u0447\u0430\u0442\u044c) 100 \u043f\u0438\u043a\u0441\u0435\u043b\u0435\u0439 \u0440\u0430\u0432\u043d\u044b \u043f\u0440\u0438\u043c\u0435\u0440\u043d\u043e 0.85 \u0441\u043c. \u0424\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0440\u0430\u0437\u043c\u0435\u0440 \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 DPI.",
      },
      {
        question: "\u041f\u043e\u0447\u0435\u043c\u0443 \u0441\u0430\u043d\u0442\u0438\u043c\u0435\u0442\u0440\u044b \u043f\u043e\u043b\u0435\u0437\u043d\u044b \u0434\u043b\u044f \u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0430\u0446\u0438\u0438 \u043f\u0438\u043a\u0441\u0435\u043b\u0435\u0439?",
        answer:
          "\u0411\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u043e \u0441\u0442\u0440\u0430\u043d \u0437\u0430 \u043f\u0440\u0435\u0434\u0435\u043b\u0430\u043c\u0438 \u0421\u0428\u0410 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u043c\u0435\u0442\u0440\u0438\u0447\u0435\u0441\u043a\u0443\u044e \u0441\u0438\u0441\u0442\u0435\u043c\u0443. \u0417\u043d\u0430\u043d\u0438\u0435 \u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0430\u0446\u0438\u0438 \u043f\u0438\u043a\u0441\u0435\u043b\u0435\u0439 \u0432 \u0441\u043c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0434\u043b\u044f \u043c\u0435\u0436\u0434\u0443\u043d\u0430\u0440\u043e\u0434\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u0438\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430, \u0443\u043f\u0430\u043a\u043e\u0432\u043a\u0438 \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0438\u0438 \u0438 \u043b\u044e\u0431\u043e\u0433\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u0441 \u043c\u0435\u0442\u0440\u0438\u0447\u0435\u0441\u043a\u0438\u043c\u0438 \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f\u043c\u0438.",
      },
      {
        question: "\u0412 \u0447\u0451\u043c \u0440\u0430\u0437\u043d\u0438\u0446\u0430 \u043c\u0435\u0436\u0434\u0443 PPI \u0438 DPI?",
        answer:
          "PPI (\u043f\u0438\u043a\u0441\u0435\u043b\u0438 \u043d\u0430 \u0434\u044e\u0439\u043c) \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0441\u044f \u043a \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044e \u044d\u043a\u0440\u0430\u043d\u0430, \u0430 DPI (\u0442\u043e\u0447\u043a\u0438 \u043d\u0430 \u0434\u044e\u0439\u043c) \u2014 \u043a \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044e \u043f\u0435\u0447\u0430\u0442\u0438. \u0414\u043b\u044f \u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0430\u0446\u0438\u0438 \u043f\u0438\u043a\u0441\u0435\u043b\u0435\u0439 \u043e\u043d\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0432\u0437\u0430\u0438\u043c\u043e\u0437\u0430\u043c\u0435\u043d\u044f\u0435\u043c\u043e, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u043e\u0431\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0442 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0438\u043a\u0441\u0435\u043b\u0435\u0439 \u043d\u0430 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0434\u044e\u0439\u043c.",
      },
    ],
    body: {
      heading1: "\u041a\u0430\u043a \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0430\u0446\u0438\u044f \u043f\u0438\u043a\u0441\u0435\u043b\u0435\u0439 \u0432 \u0441\u0430\u043d\u0442\u0438\u043c\u0435\u0442\u0440\u044b",
      p1: "\u041f\u0435\u0440\u0435\u0432\u043e\u0434 \u043f\u0438\u043a\u0441\u0435\u043b\u0435\u0439 \u0432 \u0441\u0430\u043d\u0442\u0438\u043c\u0435\u0442\u0440\u044b \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u0437\u043d\u0430\u043d\u0438\u044f DPI \u0438 \u0441\u043e\u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u044f \u043c\u0435\u0436\u0434\u0443 \u0434\u044e\u0439\u043c\u0430\u043c\u0438 \u0438 \u0441\u0430\u043d\u0442\u0438\u043c\u0435\u0442\u0440\u0430\u043c\u0438. \u0424\u043e\u0440\u043c\u0443\u043b\u0430:",
      formula: "\u0421\u0430\u043d\u0442\u0438\u043c\u0435\u0442\u0440\u044b = (\u041f\u0438\u043a\u0441\u0435\u043b\u0438 x 2.54) / DPI",
      p2: "\u042d\u0442\u0430 \u0444\u043e\u0440\u043c\u0443\u043b\u0430 \u0441\u043d\u0430\u0447\u0430\u043b\u0430 \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0438\u0442 \u043f\u0438\u043a\u0441\u0435\u043b\u0438 \u0432 \u0434\u044e\u0439\u043c\u044b (\u043f\u0438\u043a\u0441\u0435\u043b\u0438 / DPI), \u0437\u0430\u0442\u0435\u043c \u0434\u044e\u0439\u043c\u044b \u0432 \u0441\u0430\u043d\u0442\u0438\u043c\u0435\u0442\u0440\u044b (\u0434\u044e\u0439\u043c\u044b x 2.54).",
      heading2: "\u0422\u0438\u043f\u0438\u0447\u043d\u044b\u0435 \u0441\u043b\u0443\u0447\u0430\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f",
      li1: "\u041f\u0440\u043e\u0431\u043d\u0430\u044f \u043f\u0435\u0447\u0430\u0442\u044c: \u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0440\u0430\u0437\u043c\u0435\u0440 \u0446\u0438\u0444\u0440\u043e\u0432\u044b\u0445 \u043c\u0430\u043a\u0435\u0442\u043e\u0432 \u043f\u0435\u0440\u0435\u0434 \u043f\u0435\u0447\u0430\u0442\u044c\u044e.",
      li2: "\u0418\u0437\u043c\u0435\u0440\u0435\u043d\u0438\u044f \u044d\u043a\u0440\u0430\u043d\u0430: \u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u0435 \u0440\u0435\u0430\u043b\u044c\u043d\u044b\u0439 \u0440\u0430\u0437\u043c\u0435\u0440 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u043d\u0430 \u044d\u043a\u0440\u0430\u043d\u0435.",
      li3: "\u041c\u0435\u0436\u0434\u0443\u043d\u0430\u0440\u043e\u0434\u043d\u043e\u0435 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u0447\u0435\u0441\u0442\u0432\u043e: \u0421\u043e\u043e\u0431\u0449\u0430\u0439\u0442\u0435 \u0440\u0430\u0437\u043c\u0435\u0440\u044b \u0432 \u043f\u0438\u043a\u0441\u0435\u043b\u044f\u0445 \u0432 \u043c\u0435\u0442\u0440\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0435\u0434\u0438\u043d\u0438\u0446\u0430\u0445 \u0434\u043b\u044f \u043c\u0435\u0436\u0434\u0443\u043d\u0430\u0440\u043e\u0434\u043d\u044b\u0445 \u043a\u043e\u043c\u0430\u043d\u0434.",
      li4: "\u0420\u0430\u0437\u043c\u0435\u0440\u044b \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0439: \u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u0435 \u0440\u0430\u0437\u043c\u0435\u0440\u044b \u043f\u0435\u0447\u0430\u0442\u0438 \u0434\u043b\u044f \u0446\u0438\u0444\u0440\u043e\u0432\u044b\u0445 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0439.",
      heading3: "\u041a\u0440\u0430\u0442\u043a\u0438\u0439 \u0441\u043f\u0440\u0430\u0432\u043e\u0447\u043d\u0438\u043a",
      li5: "1 \u043f\u0438\u043a\u0441\u0435\u043b\u044c \u043f\u0440\u0438 96 DPI \u2014 0.0265 \u0441\u043c (\u043e\u043a\u043e\u043b\u043e 0.26 \u043c\u043c)",
      li6: "1 \u043f\u0438\u043a\u0441\u0435\u043b\u044c \u043f\u0440\u0438 300 DPI \u2014 0.0085 \u0441\u043c (\u043e\u043a\u043e\u043b\u043e 0.085 \u043c\u043c)",
      li7: "\u0428\u0438\u0440\u0438\u043d\u0430 1080p (1920 px) \u043f\u0440\u0438 96 DPI \u2014 50.8 \u0441\u043c",
      li8: "\u0428\u0438\u0440\u0438\u043d\u0430 4K (3840 px) \u043f\u0440\u0438 96 DPI \u2014 101.6 \u0441\u043c",
      heading4: "\u0417\u0430\u0447\u0435\u043c \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0438\u0442\u044c \u043f\u0438\u043a\u0441\u0435\u043b\u0438 \u0432 \u0441\u0430\u043d\u0442\u0438\u043c\u0435\u0442\u0440\u044b?",
      p3: "\u0411\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u043e \u0441\u0442\u0440\u0430\u043d \u0437\u0430 \u043f\u0440\u0435\u0434\u0435\u043b\u0430\u043c\u0438 \u0421\u0428\u0410 \u0438\u0437\u043c\u0435\u0440\u044f\u044e\u0442 \u0432 \u043c\u0435\u0442\u0440\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0435\u0434\u0438\u043d\u0438\u0446\u0430\u0445. \u041a\u043e\u0433\u0434\u0430 \u043a\u043b\u0438\u0435\u043d\u0442 \u0432 \u0415\u0432\u0440\u043e\u043f\u0435 \u0437\u0430\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0431\u0430\u043d\u043d\u0435\u0440 \u0448\u0438\u0440\u0438\u043d\u043e\u0439 30 \u0441\u043c, \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0437\u043d\u0430\u0442\u044c, \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u0438\u043a\u0441\u0435\u043b\u0435\u0439 \u044d\u0442\u043e \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u043f\u0440\u0438 \u0446\u0435\u043b\u0435\u0432\u043e\u043c DPI. \u041e\u0431\u0440\u0430\u0442\u043d\u044b\u0439 \u043f\u0435\u0440\u0435\u0432\u043e\u0434 \u0438\u0437 \u043f\u0438\u043a\u0441\u0435\u043b\u0435\u0439 \u0432 \u0441\u043c \u0441\u0442\u043e\u043b\u044c \u0436\u0435 \u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0451\u043d: \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430, \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442 \u043b\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0448\u0438\u0440\u0438\u043d\u043e\u0439 1200 \u043f\u0438\u043a\u0441\u0435\u043b\u0435\u0439 \u043a\u043e\u043b\u043e\u043d\u043a\u0443 15 \u0441\u043c \u0432 \u043c\u0430\u043a\u0435\u0442\u0435 \u0436\u0443\u0440\u043d\u0430\u043b\u0430. \u0422\u0438\u043f\u043e\u0433\u0440\u0430\u0444\u0438\u0438 \u0432 \u043c\u0435\u0442\u0440\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0441\u0442\u0440\u0430\u043d\u0430\u0445 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0442 \u0440\u0430\u0437\u043c\u0435\u0440\u044b \u0432 \u0441\u0430\u043d\u0442\u0438\u043c\u0435\u0442\u0440\u0430\u0445, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0440\u0430\u0441\u0447\u0451\u0442\u043e\u0432 \u043f\u0438\u043a\u0441\u0435\u043b\u0435\u0439 \u0432 \u0441\u043c \u043f\u0435\u0440\u0435\u0434 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u043e\u0439 \u0444\u0430\u0439\u043b\u043e\u0432 \u043f\u0440\u0435\u0434\u043e\u0442\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0434\u043e\u0440\u043e\u0433\u043e\u0441\u0442\u043e\u044f\u0449\u0438\u0435 \u043f\u0435\u0440\u0435\u043f\u0435\u0447\u0430\u0442\u043a\u0438.",
      heading5: "\u041a\u0430\u043a DPI \u0432\u043b\u0438\u044f\u0435\u0442 \u043d\u0430 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0440\u0430\u0437\u043c\u0435\u0440 \u043f\u0438\u043a\u0441\u0435\u043b\u0435\u0439?",
      p4: "\u041e\u0434\u0438\u043d \u043f\u0438\u043a\u0441\u0435\u043b\u044c \u043d\u0435 \u0438\u043c\u0435\u0435\u0442 \u0444\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0440\u0430\u0437\u043c\u0435\u0440\u0430. \u0415\u0433\u043e \u0448\u0438\u0440\u0438\u043d\u0430 \u0432 \u0441\u0430\u043d\u0442\u0438\u043c\u0435\u0442\u0440\u0430\u0445 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0432\u044b\u0445\u043e\u0434\u043d\u043e\u0433\u043e DPI. \u041f\u0440\u0438 96 DPI \u043a\u0430\u0436\u0434\u044b\u0439 \u043f\u0438\u043a\u0441\u0435\u043b\u044c \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 0.0265 \u0441\u043c (\u043e\u043a\u043e\u043b\u043e 0.265 \u043c\u043c). \u041f\u0440\u0438 300 DPI \u0442\u043e\u0442 \u0436\u0435 \u043f\u0438\u043a\u0441\u0435\u043b\u044c \u0443\u043c\u0435\u043d\u044c\u0448\u0430\u0435\u0442\u0441\u044f \u0434\u043e 0.00847 \u0441\u043c (0.085 \u043c\u043c). \u042d\u0442\u043e \u0442\u0440\u0451\u0445\u043a\u0440\u0430\u0442\u043d\u043e\u0435 \u0443\u043c\u0435\u043d\u044c\u0448\u0435\u043d\u0438\u0435 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0440\u0430\u0437\u043c\u0435\u0440\u0430 \u043e\u0431\u044a\u044f\u0441\u043d\u044f\u0435\u0442, \u043f\u043e\u0447\u0435\u043c\u0443 \u043f\u0435\u0447\u0430\u0442\u044c \u043f\u0440\u0438 300 DPI \u0432\u044b\u0433\u043b\u044f\u0434\u0438\u0442 \u0447\u0435\u0442\u0447\u0435 \u044d\u043a\u0440\u0430\u043d\u043e\u0432 \u043f\u0440\u0438 96 DPI. \u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0438\u043a\u0441\u0435\u043b\u0435\u0439 \u043e\u0441\u0442\u0430\u0451\u0442\u0441\u044f \u043f\u0440\u0435\u0436\u043d\u0438\u043c, \u043d\u043e \u043a\u0430\u0436\u0434\u044b\u0439 \u043f\u0438\u043a\u0441\u0435\u043b\u044c \u0437\u0430\u043d\u0438\u043c\u0430\u0435\u0442 \u043c\u0435\u043d\u044c\u0448\u0435 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430, \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u044f \u0431\u043e\u043b\u0435\u0435 \u0442\u043e\u043d\u043a\u0443\u044e \u0434\u0435\u0442\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044e \u043d\u0430 \u0441\u0430\u043d\u0442\u0438\u043c\u0435\u0442\u0440.",
      heading6: "\u0420\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f \u044d\u043a\u0440\u0430\u043d\u0430 \u0432 \u0441\u0430\u043d\u0442\u0438\u043c\u0435\u0442\u0440\u0430\u0445",
      li9: "1280 x 720 (HD) \u2014 33.87 x 19.05 \u0441\u043c \u043f\u0440\u0438 96 DPI",
      li10: "1920 x 1080 (Full HD) \u2014 50.8 x 28.58 \u0441\u043c \u043f\u0440\u0438 96 DPI",
      li11: "2560 x 1440 (QHD) \u2014 67.73 x 38.1 \u0441\u043c \u043f\u0440\u0438 96 DPI",
      li12: "3840 x 2160 (4K) \u2014 101.6 x 57.15 \u0441\u043c \u043f\u0440\u0438 96 DPI",
    },
  },
};
