import type { PageContentMap } from "./types";

export const content: PageContentMap = {
  en: {
    faq: [
      {
        question: "How do I convert millimeters to pixels?",
        answer:
          "Multiply the millimeters by DPI and divide by 25.4 (since there are 25.4 mm per inch). For example, 100 mm at 96 DPI equals about 378 pixels (100 x 96 / 25.4 = 377.95).",
      },
      {
        question: "How many pixels is 1 mm at 96 DPI?",
        answer:
          "At 96 DPI, 1 millimeter equals approximately 3.78 pixels (96 / 25.4 = 3.78). This is the standard for web design on most desktop displays.",
      },
      {
        question: "How many pixels is 1 mm at 300 DPI?",
        answer:
          "At 300 DPI, 1 millimeter equals approximately 11.81 pixels (300 / 25.4 = 11.81). This precision is standard for high-quality print output.",
      },
      {
        question: "When would I need mm to pixel conversion?",
        answer:
          "This conversion is common in precision design work such as product labels, business cards, engineering drawings, and any project where specifications are provided in millimeters but output is digital.",
      },
      {
        question:
          "What is the relationship between mm and inches for pixel conversion?",
        answer:
          "There are exactly 25.4 millimeters in one inch. This constant is used in the conversion formula: pixels = mm x DPI / 25.4. It bridges metric measurements to the inch-based DPI system.",
      },
    ],
    body: {
      heading1: "How Millimeter to Pixel Conversion Works",
      p1: "Millimeters provide the highest precision among common metric units. Converting to pixels requires the DPI value and the mm-to-inch constant:",
      formula: "Pixels = (MM x DPI) / 25.4",
      p2: "Since there are 25.4 millimeters in one inch, dividing by 25.4 converts millimeters to inches, which is then multiplied by DPI to get pixel count.",
      heading2: "Common Use Cases",
      li1: "Business card design: Standard sizes like 85 x 55 mm converted to pixel dimensions.",
      li2: "Product labels: Small labels where millimeter precision matters.",
      li3: "Engineering drawings: Technical illustrations specified in millimeters.",
      li4: "Precision printing: Fine-detail work requiring exact pixel-to-mm mapping.",
      heading3: "Common Sizes in Pixels (at 300 DPI)",
      li5: "Business card (85 x 55 mm) - 1004 x 650 pixels",
      li6: "Credit card (85.6 x 53.98 mm) - 1011 x 638 pixels",
      li7: "Postage stamp (25 x 30 mm) - 295 x 354 pixels",
      li8: "SD card label (24 x 32 mm) - 283 x 378 pixels",
      heading4: "Why Use Millimeters Instead of Centimeters?",
      p3: "Millimeters provide whole-number precision for small objects. A business card is 85 x 55 mm, not 8.5 x 5.5 cm. In engineering, manufacturing, and precision printing, specs are given in mm to avoid decimal ambiguity. When you specify 3 mm bleed on a print file, the printer knows exactly how much extra area to include. Using centimeters for the same bleed (0.3 cm) introduces potential rounding errors. For any object smaller than about 30 cm, millimeters are the standard unit in most industries worldwide.",
      heading5: "How Many Pixels Per Millimeter at Different DPIs?",
      p4: "The pixels-per-mm ratio is straightforward to calculate: divide DPI by 25.4. At 72 DPI, each millimeter contains 2.835 pixels. At 96 DPI, the ratio is 3.78 pixels per mm. At 150 DPI, you get 5.906 pixels per mm. At 300 DPI, each millimeter holds 11.811 pixels. For ultra-high quality printing at 600 DPI, that jumps to 23.622 pixels per mm. These fixed ratios make batch conversions simple once you know your target DPI.",
      heading6: "When Do Designers Need MM-to-Pixel Conversion?",
      p5: "Business card designers work in millimeters because the ISO 7810 standard defines card dimensions as 85.6 x 53.98 mm. Packaging designers receive label specs from manufacturers in mm. Jewelers creating product images need exact mm-to-pixel mapping for catalog layouts. Watch face designers for smartwatches convert the 40 mm or 44 mm display diameter to pixels for UI mockups. Any project where physical precision below one centimeter matters will benefit from mm-to-pixel conversion.",
    },
  },
  es: {
    faq: [
      {
        question: "Como convierto milimetros a pixels?",
        answer:
          "Multiplica los milimetros por DPI y divide entre 25.4 (ya que hay 25.4 mm por pulgada). Por ejemplo, 100 mm a 96 DPI equivale a unos 378 pixels (100 x 96 / 25.4 = 377.95).",
      },
      {
        question: "Cuantos pixels mide 1 mm a 96 DPI?",
        answer:
          "A 96 DPI, 1 milimetro equivale a aproximadamente 3.78 pixels (96 / 25.4 = 3.78). Este es el estandar para diseno web en la mayoria de pantallas de escritorio.",
      },
      {
        question: "Cuantos pixels mide 1 mm a 300 DPI?",
        answer:
          "A 300 DPI, 1 milimetro equivale a aproximadamente 11.81 pixels (300 / 25.4 = 11.81). Esta precision es el estandar para impresiones de alta calidad.",
      },
      {
        question: "Cuando necesito la conversion de mm a pixels?",
        answer:
          "Esta conversion es comun en trabajos de diseno de precision como etiquetas de productos, tarjetas de presentacion, dibujos de ingenieria y cualquier proyecto donde las especificaciones se dan en milimetros pero la salida es digital.",
      },
      {
        question:
          "Cual es la relacion entre mm y pulgadas para la conversion a pixels?",
        answer:
          "Hay exactamente 25.4 milimetros en una pulgada. Esta constante se usa en la formula de conversion: pixels = mm x DPI / 25.4. Conecta las medidas metricas con el sistema DPI basado en pulgadas.",
      },
    ],
    body: {
      heading1: "Como funciona la conversion de milimetros a pixels",
      p1: "Los milimetros ofrecen la mayor precision entre las unidades metricas comunes. Convertir a pixels requiere el valor de DPI y la constante de mm a pulgadas:",
      formula: "Pixels = (MM x DPI) / 25.4",
      p2: "Como hay 25.4 milimetros en una pulgada, dividir entre 25.4 convierte milimetros a pulgadas, que luego se multiplica por DPI para obtener la cantidad de pixels.",
      heading2: "Casos de uso comunes",
      li1: "Diseno de tarjetas de presentacion: Tamanos estandar como 85 x 55 mm convertidos a dimensiones en pixels.",
      li2: "Etiquetas de productos: Etiquetas pequenas donde la precision en milimetros importa.",
      li3: "Dibujos de ingenieria: Ilustraciones tecnicas especificadas en milimetros.",
      li4: "Impresion de precision: Trabajo de detalle fino que requiere un mapeo exacto de pixels a mm.",
      heading3: "Tamanos comunes en pixels (a 300 DPI)",
      li5: "Tarjeta de presentacion (85 x 55 mm) - 1004 x 650 pixels",
      li6: "Tarjeta de credito (85.6 x 53.98 mm) - 1011 x 638 pixels",
      li7: "Sello postal (25 x 30 mm) - 295 x 354 pixels",
      li8: "Etiqueta de tarjeta SD (24 x 32 mm) - 283 x 378 pixels",
      heading4: "Por que usar milimetros en lugar de centimetros?",
      p3: "Los milimetros ofrecen precision con numeros enteros para objetos pequenos. Una tarjeta de presentacion mide 85 x 55 mm, no 8.5 x 5.5 cm. En ingenieria, manufactura e impresion de precision, las especificaciones se dan en mm para evitar ambiguedad decimal. Cuando especificas 3 mm de sangrado en un archivo de impresion, la imprenta sabe exactamente cuanta area extra incluir. Usar centimetros para el mismo sangrado (0.3 cm) introduce posibles errores de redondeo. Para cualquier objeto menor de unos 30 cm, los milimetros son la unidad estandar en la mayoria de las industrias del mundo.",
      heading5: "Cuantos pixels por milimetro a diferentes DPIs?",
      p4: "La relacion de pixels por mm es facil de calcular: divide DPI entre 25.4. A 72 DPI, cada milimetro contiene 2.835 pixels. A 96 DPI, la relacion es 3.78 pixels por mm. A 150 DPI, obtienes 5.906 pixels por mm. A 300 DPI, cada milimetro contiene 11.811 pixels. Para impresion de ultra alta calidad a 600 DPI, sube a 23.622 pixels por mm. Estas relaciones fijas simplifican las conversiones en lote una vez que conoces tu DPI objetivo.",
      heading6: "Cuando necesitan los disenadores la conversion de mm a pixels?",
      p5: "Los disenadores de tarjetas de presentacion trabajan en milimetros porque el estandar ISO 7810 define las dimensiones de la tarjeta como 85.6 x 53.98 mm. Los disenadores de empaques reciben especificaciones de etiquetas de los fabricantes en mm. Los joyeros que crean imagenes de productos necesitan un mapeo exacto de mm a pixels para los disenos de catalogo. Los disenadores de esferas de relojes inteligentes convierten el diametro de pantalla de 40 mm o 44 mm a pixels para maquetas de interfaz. Cualquier proyecto donde la precision fisica por debajo de un centimetro importa se beneficiara de la conversion de mm a pixels.",
    },
  },
  fr: {
    faq: [
      {
        question: "Comment convertir des millimetres en pixels?",
        answer:
          "Multipliez les millimetres par le DPI et divisez par 25.4 (puisqu'il y a 25.4 mm par pouce). Par exemple, 100 mm a 96 DPI equivaut a environ 378 pixels (100 x 96 / 25.4 = 377.95).",
      },
      {
        question: "Combien de pixels fait 1 mm a 96 DPI?",
        answer:
          "A 96 DPI, 1 millimetre equivaut a environ 3.78 pixels (96 / 25.4 = 3.78). C'est la norme pour la conception web sur la plupart des ecrans de bureau.",
      },
      {
        question: "Combien de pixels fait 1 mm a 300 DPI?",
        answer:
          "A 300 DPI, 1 millimetre equivaut a environ 11.81 pixels (300 / 25.4 = 11.81). Cette precision est la norme pour les impressions de haute qualite.",
      },
      {
        question: "Quand ai-je besoin de la conversion mm en pixels?",
        answer:
          "Cette conversion est courante dans les travaux de conception de precision tels que les etiquettes de produits, les cartes de visite, les dessins techniques et tout projet ou les specifications sont en millimetres mais la sortie est numerique.",
      },
      {
        question:
          "Quelle est la relation entre mm et pouces pour la conversion en pixels?",
        answer:
          "Il y a exactement 25.4 millimetres dans un pouce. Cette constante est utilisee dans la formule de conversion: pixels = mm x DPI / 25.4. Elle relie les mesures metriques au systeme DPI base sur les pouces.",
      },
    ],
    body: {
      heading1: "Comment fonctionne la conversion de millimetres en pixels",
      p1: "Les millimetres offrent la plus grande precision parmi les unites metriques courantes. La conversion en pixels necessite la valeur DPI et la constante mm-vers-pouce:",
      formula: "Pixels = (MM x DPI) / 25.4",
      p2: "Comme il y a 25.4 millimetres dans un pouce, diviser par 25.4 convertit les millimetres en pouces, qui sont ensuite multiplies par le DPI pour obtenir le nombre de pixels.",
      heading2: "Cas d'utilisation courants",
      li1: "Conception de cartes de visite: Tailles standard comme 85 x 55 mm converties en dimensions pixels.",
      li2: "Etiquettes de produits: Petites etiquettes ou la precision en millimetres compte.",
      li3: "Dessins techniques: Illustrations techniques specifiees en millimetres.",
      li4: "Impression de precision: Travail de detail fin necessitant une correspondance exacte pixel-mm.",
      heading3: "Tailles courantes en pixels (a 300 DPI)",
      li5: "Carte de visite (85 x 55 mm) - 1004 x 650 pixels",
      li6: "Carte de credit (85.6 x 53.98 mm) - 1011 x 638 pixels",
      li7: "Timbre-poste (25 x 30 mm) - 295 x 354 pixels",
      li8: "Etiquette carte SD (24 x 32 mm) - 283 x 378 pixels",
      heading4: "Pourquoi utiliser des millimetres plutot que des centimetres?",
      p3: "Les millimetres offrent une precision en nombres entiers pour les petits objets. Une carte de visite mesure 85 x 55 mm, pas 8.5 x 5.5 cm. En ingenierie, fabrication et impression de precision, les specifications sont donnees en mm pour eviter toute ambiguite decimale. Quand vous specifiez un fond perdu de 3 mm sur un fichier d'impression, l'imprimeur sait exactement quelle zone supplementaire inclure. Utiliser des centimetres pour le meme fond perdu (0.3 cm) introduit des erreurs d'arrondi potentielles. Pour tout objet de moins de 30 cm environ, les millimetres sont l'unite standard dans la plupart des industries mondiales.",
      heading5: "Combien de pixels par millimetre a differents DPIs?",
      p4: "Le ratio pixels par mm est simple a calculer: divisez le DPI par 25.4. A 72 DPI, chaque millimetre contient 2.835 pixels. A 96 DPI, le ratio est de 3.78 pixels par mm. A 150 DPI, on obtient 5.906 pixels par mm. A 300 DPI, chaque millimetre contient 11.811 pixels. Pour une impression ultra haute qualite a 600 DPI, cela monte a 23.622 pixels par mm. Ces ratios fixes simplifient les conversions par lots une fois le DPI cible connu.",
      heading6:
        "Quand les designers ont-ils besoin de la conversion mm en pixels?",
      p5: "Les concepteurs de cartes de visite travaillent en millimetres car la norme ISO 7810 definit les dimensions des cartes a 85.6 x 53.98 mm. Les designers d'emballages recoivent les specifications d'etiquettes des fabricants en mm. Les bijoutiers creant des images de produits ont besoin d'une correspondance exacte mm-pixels pour les mises en page de catalogue. Les designers de cadrans de montres connectees convertissent le diametre d'ecran de 40 mm ou 44 mm en pixels pour les maquettes d'interface. Tout projet ou la precision physique en dessous d'un centimetre compte beneficiera de la conversion mm en pixels.",
    },
  },
  de: {
    faq: [
      {
        question: "Wie rechne ich Millimeter in Pixels um?",
        answer:
          "Multiplizieren Sie die Millimeter mit DPI und teilen Sie durch 25.4 (da es 25.4 mm pro Zoll gibt). Zum Beispiel ergeben 100 mm bei 96 DPI etwa 378 Pixels (100 x 96 / 25.4 = 377.95).",
      },
      {
        question: "Wie viele Pixels sind 1 mm bei 96 DPI?",
        answer:
          "Bei 96 DPI entspricht 1 Millimeter etwa 3.78 Pixels (96 / 25.4 = 3.78). Dies ist der Standard fuer Webdesign auf den meisten Desktop-Bildschirmen.",
      },
      {
        question: "Wie viele Pixels sind 1 mm bei 300 DPI?",
        answer:
          "Bei 300 DPI entspricht 1 Millimeter etwa 11.81 Pixels (300 / 25.4 = 11.81). Diese Praezision ist Standard fuer hochwertige Druckausgabe.",
      },
      {
        question: "Wann brauche ich die Umrechnung von mm in Pixels?",
        answer:
          "Diese Umrechnung ist ueblich bei praezisen Designarbeiten wie Produktetiketten, Visitenkarten, technischen Zeichnungen und jedem Projekt, bei dem Spezifikationen in Millimetern vorliegen, die Ausgabe aber digital ist.",
      },
      {
        question:
          "Welche Beziehung besteht zwischen mm und Zoll bei der Pixel-Umrechnung?",
        answer:
          "Es gibt genau 25.4 Millimeter in einem Zoll. Diese Konstante wird in der Umrechnungsformel verwendet: Pixels = mm x DPI / 25.4. Sie verbindet metrische Masse mit dem zollbasierten DPI-System.",
      },
    ],
    body: {
      heading1: "Wie die Umrechnung von Millimetern in Pixels funktioniert",
      p1: "Millimeter bieten die hoechste Praezision unter den gaengigen metrischen Einheiten. Die Umrechnung in Pixels erfordert den DPI-Wert und die mm-zu-Zoll-Konstante:",
      formula: "Pixels = (MM x DPI) / 25.4",
      p2: "Da es 25.4 Millimeter in einem Zoll gibt, wandelt die Division durch 25.4 Millimeter in Zoll um, die dann mit DPI multipliziert werden, um die Pixelanzahl zu erhalten.",
      heading2: "Haeufige Anwendungsfaelle",
      li1: "Visitenkarten-Design: Standardgroessen wie 85 x 55 mm in Pixel-Dimensionen umgewandelt.",
      li2: "Produktetiketten: Kleine Etiketten, bei denen Millimeter-Praezision wichtig ist.",
      li3: "Technische Zeichnungen: Technische Illustrationen in Millimetern angegeben.",
      li4: "Praezisionsdruck: Feinarbeit, die eine exakte Pixel-zu-mm-Zuordnung erfordert.",
      heading3: "Gaengige Groessen in Pixels (bei 300 DPI)",
      li5: "Visitenkarte (85 x 55 mm) - 1004 x 650 Pixels",
      li6: "Kreditkarte (85.6 x 53.98 mm) - 1011 x 638 Pixels",
      li7: "Briefmarke (25 x 30 mm) - 295 x 354 Pixels",
      li8: "SD-Karten-Etikett (24 x 32 mm) - 283 x 378 Pixels",
      heading4: "Warum Millimeter statt Zentimeter verwenden?",
      p3: "Millimeter bieten ganzzahlige Praezision fuer kleine Objekte. Eine Visitenkarte misst 85 x 55 mm, nicht 8.5 x 5.5 cm. In der Technik, Fertigung und im Praezisionsdruck werden Spezifikationen in mm angegeben, um Dezimalunklarheiten zu vermeiden. Wenn Sie 3 mm Beschnitt in einer Druckdatei angeben, weiss die Druckerei genau, wie viel zusaetzliche Flaeche einzubeziehen ist. Zentimeter fuer denselben Beschnitt (0.3 cm) fuehren zu moeglichen Rundungsfehlern. Fuer jedes Objekt kleiner als etwa 30 cm sind Millimeter die Standardeinheit in den meisten Branchen weltweit.",
      heading5: "Wie viele Pixels pro Millimeter bei verschiedenen DPIs?",
      p4: "Das Pixels-pro-mm-Verhaeltnis ist einfach zu berechnen: DPI durch 25.4 teilen. Bei 72 DPI enthaelt jeder Millimeter 2.835 Pixels. Bei 96 DPI betraegt das Verhaeltnis 3.78 Pixels pro mm. Bei 150 DPI erhaelt man 5.906 Pixels pro mm. Bei 300 DPI enthaelt jeder Millimeter 11.811 Pixels. Fuer ultra-hochwertigen Druck bei 600 DPI steigt es auf 23.622 Pixels pro mm. Diese festen Verhaeltnisse vereinfachen Stapelumrechnungen, sobald der Ziel-DPI bekannt ist.",
      heading6: "Wann brauchen Designer die Umrechnung von mm in Pixels?",
      p5: "Visitenkarten-Designer arbeiten in Millimetern, da die Norm ISO 7810 die Kartenabmessungen mit 85.6 x 53.98 mm definiert. Verpackungsdesigner erhalten Etikettenspezifikationen von Herstellern in mm. Juweliere, die Produktbilder erstellen, benoetigen eine exakte mm-zu-Pixel-Zuordnung fuer Katalog-Layouts. Smartwatch-Zifferblatt-Designer rechnen den 40 mm oder 44 mm Displaydurchmesser in Pixels fuer UI-Mockups um. Jedes Projekt, bei dem physische Praezision unter einem Zentimeter wichtig ist, profitiert von der mm-zu-Pixel-Umrechnung.",
    },
  },
  pt: {
    faq: [
      {
        question: "Como converto milimetros para pixels?",
        answer:
          "Multiplique os milimetros por DPI e divida por 25.4 (ja que ha 25.4 mm por polegada). Por exemplo, 100 mm a 96 DPI equivale a cerca de 378 pixels (100 x 96 / 25.4 = 377.95).",
      },
      {
        question: "Quantos pixels tem 1 mm a 96 DPI?",
        answer:
          "A 96 DPI, 1 milimetro equivale a aproximadamente 3.78 pixels (96 / 25.4 = 3.78). Este e o padrao para design web na maioria das telas de desktop.",
      },
      {
        question: "Quantos pixels tem 1 mm a 300 DPI?",
        answer:
          "A 300 DPI, 1 milimetro equivale a aproximadamente 11.81 pixels (300 / 25.4 = 11.81). Essa precisao e padrao para impressao de alta qualidade.",
      },
      {
        question: "Quando preciso da conversao de mm para pixels?",
        answer:
          "Essa conversao e comum em trabalhos de design de precisao, como etiquetas de produtos, cartoes de visita, desenhos de engenharia e qualquer projeto onde as especificacoes sao em milimetros, mas a saida e digital.",
      },
      {
        question:
          "Qual e a relacao entre mm e polegadas para conversao de pixels?",
        answer:
          "Ha exatamente 25.4 milimetros em uma polegada. Essa constante e usada na formula de conversao: pixels = mm x DPI / 25.4. Ela conecta medidas metricas ao sistema DPI baseado em polegadas.",
      },
    ],
    body: {
      heading1: "Como funciona a conversao de milimetros para pixels",
      p1: "Os milimetros oferecem a maior precisao entre as unidades metricas comuns. A conversao para pixels requer o valor de DPI e a constante de mm para polegadas:",
      formula: "Pixels = (MM x DPI) / 25.4",
      p2: "Como ha 25.4 milimetros em uma polegada, dividir por 25.4 converte milimetros em polegadas, que sao entao multiplicadas por DPI para obter a contagem de pixels.",
      heading2: "Casos de uso comuns",
      li1: "Design de cartoes de visita: Tamanhos padrao como 85 x 55 mm convertidos para dimensoes em pixels.",
      li2: "Etiquetas de produtos: Etiquetas pequenas onde a precisao em milimetros importa.",
      li3: "Desenhos de engenharia: Ilustracoes tecnicas especificadas em milimetros.",
      li4: "Impressao de precisao: Trabalho de detalhe fino que requer mapeamento exato de pixels para mm.",
      heading3: "Tamanhos comuns em pixels (a 300 DPI)",
      li5: "Cartao de visita (85 x 55 mm) - 1004 x 650 pixels",
      li6: "Cartao de credito (85.6 x 53.98 mm) - 1011 x 638 pixels",
      li7: "Selo postal (25 x 30 mm) - 295 x 354 pixels",
      li8: "Etiqueta de cartao SD (24 x 32 mm) - 283 x 378 pixels",
      heading4: "Por que usar milimetros em vez de centimetros?",
      p3: "Os milimetros oferecem precisao com numeros inteiros para objetos pequenos. Um cartao de visita mede 85 x 55 mm, nao 8.5 x 5.5 cm. Em engenharia, manufatura e impressao de precisao, as especificacoes sao dadas em mm para evitar ambiguidade decimal. Quando voce especifica 3 mm de sangria em um arquivo de impressao, a grafica sabe exatamente quanta area extra incluir. Usar centimetros para a mesma sangria (0.3 cm) introduz possiveis erros de arredondamento. Para qualquer objeto menor que cerca de 30 cm, milimetros sao a unidade padrao na maioria das industrias do mundo.",
      heading5: "Quantos pixels por milimetro em diferentes DPIs?",
      p4: "A razao de pixels por mm e simples de calcular: divida DPI por 25.4. A 72 DPI, cada milimetro contem 2.835 pixels. A 96 DPI, a razao e de 3.78 pixels por mm. A 150 DPI, voce obtem 5.906 pixels por mm. A 300 DPI, cada milimetro contem 11.811 pixels. Para impressao de ultra alta qualidade a 600 DPI, sobe para 23.622 pixels por mm. Essas razoes fixas simplificam as conversoes em lote uma vez que voce conhece seu DPI alvo.",
      heading6: "Quando os designers precisam da conversao de mm para pixels?",
      p5: "Designers de cartoes de visita trabalham em milimetros porque o padrao ISO 7810 define as dimensoes do cartao como 85.6 x 53.98 mm. Designers de embalagens recebem especificacoes de etiquetas dos fabricantes em mm. Joalheiros criando imagens de produtos precisam de mapeamento exato de mm para pixels para layouts de catalogo. Designers de mostradores de relogios inteligentes convertem o diametro de tela de 40 mm ou 44 mm para pixels para mockups de interface. Qualquer projeto onde a precisao fisica abaixo de um centimetro importa se beneficiara da conversao de mm para pixels.",
    },
  },
  hi: {
    faq: [
      {
        question: "Millimeters ko pixels mein kaise convert karein?",
        answer:
          "Millimeters ko DPI se multiply karein aur 25.4 se divide karein (kyunki ek inch mein 25.4 mm hote hain). Udaharan ke liye, 96 DPI par 100 mm lagbhag 378 pixels ke barabar hota hai (100 x 96 / 25.4 = 377.95).",
      },
      {
        question: "96 DPI par 1 mm kitne pixels ke barabar hai?",
        answer:
          "96 DPI par, 1 millimeter lagbhag 3.78 pixels ke barabar hota hai (96 / 25.4 = 3.78). Yah adhiktar desktop displays par web design ke liye standard hai.",
      },
      {
        question: "300 DPI par 1 mm kitne pixels ke barabar hai?",
        answer:
          "300 DPI par, 1 millimeter lagbhag 11.81 pixels ke barabar hota hai (300 / 25.4 = 11.81). Yah precision uchch-gunvatta print output ke liye standard hai.",
      },
      {
        question: "Mujhe mm se pixel conversion ki zaroorat kab hogi?",
        answer:
          "Yah conversion precision design kaam mein aam hai jaise product labels, visiting cards, engineering drawings, aur koi bhi project jahan specifications millimeters mein hain lekin output digital hai.",
      },
      {
        question:
          "Pixel conversion ke liye mm aur inches ke beech kya sambandh hai?",
        answer:
          "Ek inch mein theek 25.4 millimeters hote hain. Is constant ka upyog conversion formula mein hota hai: pixels = mm x DPI / 25.4. Yah metric measurements ko inch-based DPI system se jodta hai.",
      },
    ],
    body: {
      heading1: "Millimeter se pixel conversion kaise kaam karta hai",
      p1: "Millimeters aam metric units mein sabse zyada precision pradan karte hain. Pixels mein convert karne ke liye DPI value aur mm-se-inch constant ki zaroorat hoti hai:",
      formula: "Pixels = (MM x DPI) / 25.4",
      p2: "Kyunki ek inch mein 25.4 millimeters hote hain, 25.4 se divide karna millimeters ko inches mein convert karta hai, jise phir pixel count pane ke liye DPI se multiply kiya jata hai.",
      heading2: "Aam upyog ke maamle",
      li1: "Visiting card design: 85 x 55 mm jaise standard sizes ko pixel dimensions mein convert karna.",
      li2: "Product labels: Chhote labels jahan millimeter precision mahatvapoorn hai.",
      li3: "Engineering drawings: Millimeters mein specified technical illustrations.",
      li4: "Precision printing: Sooksham kaam jismein pixel-se-mm ka satik mapping chahiye.",
      heading3: "Pixels mein aam sizes (300 DPI par)",
      li5: "Visiting card (85 x 55 mm) - 1004 x 650 pixels",
      li6: "Credit card (85.6 x 53.98 mm) - 1011 x 638 pixels",
      li7: "Postage stamp (25 x 30 mm) - 295 x 354 pixels",
      li8: "SD card label (24 x 32 mm) - 283 x 378 pixels",
      heading4: "Centimeters ki jagah millimeters kyun use karein?",
      p3: "Millimeters chhote objects ke liye poorn sankhya precision pradan karte hain. Ek visiting card 85 x 55 mm ka hota hai, na ki 8.5 x 5.5 cm. Engineering, manufacturing aur precision printing mein, specs mm mein diye jate hain taaki decimal ambiguity se bacha ja sake. Jab aap print file mein 3 mm bleed specify karte hain, printer ko theek pata hota hai ki kitna extra area shamil karna hai. Usi bleed ke liye centimeters use karna (0.3 cm) rounding errors la sakta hai. Lagbhag 30 cm se chhote kisi bhi object ke liye, millimeters duniya bhar ki adhiktar industries mein standard unit hain.",
      heading5: "Alag-alag DPIs par prati millimeter kitne pixels?",
      p4: "Pixels-prati-mm ka ratio calculate karna seedha hai: DPI ko 25.4 se divide karein. 72 DPI par, har millimeter mein 2.835 pixels hote hain. 96 DPI par, ratio 3.78 pixels prati mm hai. 150 DPI par, aapko 5.906 pixels prati mm milte hain. 300 DPI par, har millimeter mein 11.811 pixels hote hain. 600 DPI par ultra-uchch gunvatta printing ke liye, yah 23.622 pixels prati mm tak pahunchta hai. Ye nischit ratio batch conversions ko aasan bana dete hain jab aap apna target DPI jaan lete hain.",
      heading6:
        "Designers ko mm-se-pixel conversion ki zaroorat kab hoti hai?",
      p5: "Visiting card designers millimeters mein kaam karte hain kyunki ISO 7810 standard card dimensions ko 85.6 x 53.98 mm ke roop mein paribhashit karta hai. Packaging designers label specs manufacturers se mm mein prapt karte hain. Jewelers jo product images banate hain unhe catalog layouts ke liye satik mm-se-pixel mapping chahiye. Smartwatch dial designers 40 mm ya 44 mm display diameter ko UI mockups ke liye pixels mein convert karte hain. Koi bhi project jahan ek centimeter se neeche ki bhowtik precision mahatvapoorn hai, mm-se-pixel conversion se labhanvit hoga.",
    },
  },
  ja: {
    faq: [
      {
        question: "millimeters wo pixels ni henkan suru niha dou sureba ii desu ka?",
        answer:
          "millimeters ni DPI wo kake, 25.4 de warimasu (1 inch ha 25.4 mm desu). Tatoeba, 96 DPI de 100 mm ha yaku 378 pixels desu (100 x 96 / 25.4 = 377.95).",
      },
      {
        question: "96 DPI de 1 mm ha nanpixels desu ka?",
        answer:
          "96 DPI de ha, 1 millimeter ha yaku 3.78 pixels desu (96 / 25.4 = 3.78). Kore ha hotondo no desktop display de no web design no hyoujun desu.",
      },
      {
        question: "300 DPI de 1 mm ha nanpixels desu ka?",
        answer:
          "300 DPI de ha, 1 millimeter ha yaku 11.81 pixels desu (300 / 25.4 = 11.81). Kono seido ha kohinshitsu insatsu shutsuryoku no hyoujun desu.",
      },
      {
        question: "mm kara pixel heno henkan ha itsu hitsuyou desu ka?",
        answer:
          "Kono henkan ha seihin label, meishi, sekkei zu nado no seimitsu design sagyou ya, shiyou ga millimeters de aru ga shutsuryoku ga digital de aru project de yoku tsukawaremasu.",
      },
      {
        question:
          "Pixel henkan ni okeru mm to inch no kankei ha nan desu ka?",
        answer:
          "1 inch ha choudo 25.4 millimeters desu. Kono teisuu ha henkan koushiki de shiyou saremasu: pixels = mm x DPI / 25.4. Metorikkusu sokutei wo inch besu no DPI system ni tsunagimasu.",
      },
    ],
    body: {
      heading1: "Millimeter kara pixel heno henkan no shikumi",
      p1: "Millimeters ha ippantekina metorikkusu tani no naka de mottomo takai seido wo teikyou shimasu. Pixels heno henkan niha DPI chi to mm-kara-inch no teisuu ga hitsuyou desu:",
      formula: "Pixels = (MM x DPI) / 25.4",
      p2: "1 inch ha 25.4 millimeters na node, 25.4 de waru koto de millimeters wo inches ni henkan shi, sore wo DPI de kakete pixel suu wo emasu.",
      heading2: "Ippantekina shiyou keesu",
      li1: "Meishi design: 85 x 55 mm nado no hyoujun size wo pixel sunpou ni henkan.",
      li2: "Seihin label: Millimeter seido ga juuyou na chiisana label.",
      li3: "Sekkei zu: Millimeters de shitei sareta gijutsu illustration.",
      li4: "Seimitsu insatsu: Seikaku na pixel-to-mm mapping ga hitsuyou na saimitsuna sagyou.",
      heading3: "Pixels de no ippantekina size (300 DPI)",
      li5: "Meishi (85 x 55 mm) - 1004 x 650 pixels",
      li6: "Credit card (85.6 x 53.98 mm) - 1011 x 638 pixels",
      li7: "Kitte (25 x 30 mm) - 295 x 354 pixels",
      li8: "SD card label (24 x 32 mm) - 283 x 378 pixels",
      heading4: "Naze centimeters dewa naku millimeters wo tsukau no ka?",
      p3: "Millimeters ha chiisana object ni taishite seisuu no seido wo teikyou shimasu. Meishi ha 85 x 55 mm de ari, 8.5 x 5.5 cm dewa arimasen. Engineering, seizou, seimitsu insatsu de ha, shousuuten no aimaisa wo sakeru tame ni spec ha mm de shimeraremasu. Insatsu file de 3 mm no tachikiri wo shitei suruto, insatsujo ha donodake no tsuika ryouiki wo fukumeru ka seikaku ni wakarimasu. Onaji tachikiri ni centimeters wo shiyou suru to (0.3 cm), marume gosa ga hassei suru kanousei ga arimasu. Yaku 30 cm yori chiisai object no baai, millimeters ha sekai no hotondo no sangyou de hyoujun tani desu.",
      heading5: "Kotonaru DPI de millimeter atari nanpixels?",
      p4: "Pixels-per-mm no hiritsu ha kantan ni keisan dekimasu: DPI wo 25.4 de warimasu. 72 DPI de ha, kaku millimeter ni 2.835 pixels ga fukumaremasu. 96 DPI de ha, hiritsu ha mm atari 3.78 pixels desu. 150 DPI de ha, mm atari 5.906 pixels ni narimasu. 300 DPI de ha, kaku millimeter ni 11.811 pixels ga fukumaremasu. 600 DPI no choukohinshitsu insatsu de ha, mm atari 23.622 pixels ni narimasu. Korera no kotei hiritsu ha, target DPI ga wakareba batch henkan wo kantan ni shimasu.",
      heading6: "Designer ha itsu mm-kara-pixel henkan ga hitsuyou desu ka?",
      p5: "Meishi designer ha millimeters de sagyou shimasu. ISO 7810 hyoujun ga card sunpou wo 85.6 x 53.98 mm to kitei shite iru kara desu. Packaging designer ha maker kara mm de label spec wo ukemasu. Houseki-shou ga seihin gazou wo sakusei suru sai, catalog layout no tame ni seikaku na mm-kara-pixel mapping ga hitsuyou desu. Smartwatch mojibanmen designer ha 40 mm ya 44 mm no display chokkei wo UI mockup no tame ni pixels ni henkan shimasu. 1 centimeter ika no butsuriteki seido ga juuyou na project ha subete, mm-kara-pixel henkan no rieki wo ukemasu.",
    },
  },
  ko: {
    faq: [
      {
        question: "Millimeters reul pixels ro eotteoke byeonhwan hamnikka?",
        answer:
          "Millimeters e DPI reul gophago 25.4 ro nanuseyo (1 inch e 25.4 mm). Yereul deulmyeon, 96 DPI eseo 100 mm neun yak 378 pixels imnida (100 x 96 / 25.4 = 377.95).",
      },
      {
        question: "96 DPI eseo 1 mm neun myeot pixels imnikka?",
        answer:
          "96 DPI eseo 1 millimeter neun yak 3.78 pixels imnida (96 / 25.4 = 3.78). Igeos eun daebubun ui desktop display eseo web design ui pyojun imnida.",
      },
      {
        question: "300 DPI eseo 1 mm neun myeot pixels imnikka?",
        answer:
          "300 DPI eseo 1 millimeter neun yak 11.81 pixels imnida (300 / 25.4 = 11.81). I jeongmildo neun gogeumjil inswaemul ui pyojun imnida.",
      },
      {
        question: "mm eseo pixel byeonhwan i eonje pilyohan gayo?",
        answer:
          "I byeonhwan eun jepum label, myeongham, gisul doseo deung jeongmil design jageop gwa sagyang i millimeters ro doeeo isseuна chullyeog i digital in modeun project eseo ilbanjeog imnida.",
      },
      {
        question:
          "Pixel byeonhwan eseo mm gwa inch ui gwangye neun mueos imnikka?",
        answer:
          "1 inch e jeongwaghage 25.4 millimeters ga isseumnida. I sangsu neun byeonhwan gongsig eseo sayong doebnida: pixels = mm x DPI / 25.4. Igeos eun metric cheukjeong eul inch giban DPI system gwa yeongyeol hamnida.",
      },
    ],
    body: {
      heading1: "Millimeter eseo pixel byeonhwan i eotteoke jakdong habnigga",
      p1: "Millimeters neun ilban metric daneo jung gajang nopun jeongmildo reul jegong hamnida. Pixels ro byeonhwan haryeomyeon DPI gab gwa mm-eseo-inch sangsu ga pilyohamnida:",
      formula: "Pixels = (MM x DPI) / 25.4",
      p2: "1 inch e 25.4 millimeters ga isseumeuro, 25.4 ro nanumyeon millimeters ga inches ro byeonhwan doego, geugeos eul DPI ro gophayeo pixel su reul eodeumnida.",
      heading2: "Ilbanjeog in sayong sarye",
      li1: "Myeongham design: 85 x 55 mm gateun pyojun keugi reul pixel chisu ro byeonhwan.",
      li2: "Jepum label: Millimeter jeongmildo ga jungyohan jageun label.",
      li3: "Gisul doseo: Millimeters ro jijeon doen gisul illeoseuteurei syeon.",
      li4: "Jeongmil insswae: Jeongwaghag pixel-to-mm mapping i pilyohan semilhan jageop.",
      heading3: "Pixels ro bon ilbanjeog keugi (300 DPI)",
      li5: "Myeongham (85 x 55 mm) - 1004 x 650 pixels",
      li6: "Sinnyong kadeu (85.6 x 53.98 mm) - 1011 x 638 pixels",
      li7: "Upyo (25 x 30 mm) - 295 x 354 pixels",
      li8: "SD kadeu label (24 x 32 mm) - 283 x 378 pixels",
      heading4: "Wae centimeters daesine millimeters reul sayong halkkayo?",
      p3: "Millimeters neun jageun gaechae e daehan jeongsuje jeongmildo reul jegong hamnida. Myeongham eun 85 x 55 mm iji, 8.5 x 5.5 cm ga animnida. Gonghaghag, jejo mich jeongmil insswae eseo sagyang eun sosujeom mohoham eul pihari wi hae mm ro jegong doebnida. Insswae paile eseo 3 mm bleed reul jijeon hamyeon, inswae so neun eolmana maneun chuga yeong yeog eul poham halji jeongwaghage al su isseumnida. Gateun bleed e centimeters reul sayong hamyeon (0.3 cm) banorim ocha ga balssaeng hal su isseumnida. Yak 30 cm boda jageun modeun gaechae e millimeters neun jeon segye daebubun ui saneop eseo pyojun danwi imnida.",
      heading5: "Dareun DPI eseo millimeter dang myeot pixels?",
      p4: "mm dang pixel biyu reul gyesan haneun geos eun gandanham nida: DPI reul 25.4 ro nanuseyo. 72 DPI eseo gag millimeter e 2.835 pixels ga isseumnida. 96 DPI eseo biyu reun mm dang 3.78 pixels imnida. 150 DPI eseo mm dang 5.906 pixels reul eodeumnida. 300 DPI eseo gag millimeter e 11.811 pixels ga isseumnida. 600 DPI eseo chogogeumjil insswae ui gyeong u mm dang 23.622 pixels ro ollagamnida. I gojeon biyu reun daesang DPI reul almyeon il gwol byeonhwan eul gandanghage mandeumnida.",
      heading6: "Designer deul eun eonje mm-eseo-pixel byeonhwan i pilyohan gayo?",
      p5: "Myeongham designer deul eun millimeters ro jageop hamnida. ISO 7810 pyojun i kadeu chisu reul 85.6 x 53.98 mm ro jeong uihago issgi ttaemun imnida. Pojanghag designer deul eun jejoja robuteo mm ro label sagyang eul badamnida. Boseogsang i jepum imiji reul mandeul ttae katallogeu layout eul wihan jeongwaghag mm-eseo-pixel mapping i pilyohamnida. Seumateu wachi mujabanmyeon designer deul eun 40 mm ttonneun 44 mm display jiggyeong eul UI mockup eul wihae pixels ro byeonhwan hamnida. 1 centimeter iha ui mullijeog jeongmildo ga jungyohan modeun project neun mm-eseo-pixel byeonhwan euro hyetaeg eul badeumnida.",
    },
  },
  it: {
    faq: [
      {
        question: "Come converto i millimetri in pixels?",
        answer:
          "Moltiplica i millimetri per DPI e dividi per 25.4 (poiche ci sono 25.4 mm per pollice). Ad esempio, 100 mm a 96 DPI equivalgono a circa 378 pixels (100 x 96 / 25.4 = 377.95).",
      },
      {
        question: "Quanti pixels sono 1 mm a 96 DPI?",
        answer:
          "A 96 DPI, 1 millimetro equivale a circa 3.78 pixels (96 / 25.4 = 3.78). Questo e lo standard per il web design sulla maggior parte degli schermi desktop.",
      },
      {
        question: "Quanti pixels sono 1 mm a 300 DPI?",
        answer:
          "A 300 DPI, 1 millimetro equivale a circa 11.81 pixels (300 / 25.4 = 11.81). Questa precisione e standard per la stampa di alta qualita.",
      },
      {
        question: "Quando ho bisogno della conversione da mm a pixels?",
        answer:
          "Questa conversione e comune nei lavori di design di precisione come etichette di prodotti, biglietti da visita, disegni tecnici e qualsiasi progetto in cui le specifiche sono in millimetri ma l'output e digitale.",
      },
      {
        question:
          "Qual e la relazione tra mm e pollici per la conversione in pixels?",
        answer:
          "Ci sono esattamente 25.4 millimetri in un pollice. Questa costante viene usata nella formula di conversione: pixels = mm x DPI / 25.4. Collega le misure metriche al sistema DPI basato sui pollici.",
      },
    ],
    body: {
      heading1: "Come funziona la conversione da millimetri a pixels",
      p1: "I millimetri offrono la massima precisione tra le unita metriche comuni. La conversione in pixels richiede il valore DPI e la costante da mm a pollici:",
      formula: "Pixels = (MM x DPI) / 25.4",
      p2: "Poiche ci sono 25.4 millimetri in un pollice, dividere per 25.4 converte i millimetri in pollici, che vengono poi moltiplicati per DPI per ottenere il conteggio dei pixels.",
      heading2: "Casi d'uso comuni",
      li1: "Design di biglietti da visita: Dimensioni standard come 85 x 55 mm convertite in dimensioni pixels.",
      li2: "Etichette di prodotti: Piccole etichette dove la precisione in millimetri conta.",
      li3: "Disegni tecnici: Illustrazioni tecniche specificate in millimetri.",
      li4: "Stampa di precisione: Lavoro di dettaglio fine che richiede una mappatura esatta pixel-mm.",
      heading3: "Dimensioni comuni in pixels (a 300 DPI)",
      li5: "Biglietto da visita (85 x 55 mm) - 1004 x 650 pixels",
      li6: "Carta di credito (85.6 x 53.98 mm) - 1011 x 638 pixels",
      li7: "Francobollo (25 x 30 mm) - 295 x 354 pixels",
      li8: "Etichetta scheda SD (24 x 32 mm) - 283 x 378 pixels",
      heading4: "Perche usare millimetri invece di centimetri?",
      p3: "I millimetri offrono precisione con numeri interi per oggetti piccoli. Un biglietto da visita misura 85 x 55 mm, non 8.5 x 5.5 cm. In ingegneria, produzione e stampa di precisione, le specifiche sono fornite in mm per evitare ambiguita decimali. Quando specifichi 3 mm di abbondanza su un file di stampa, la tipografia sa esattamente quanta area extra includere. Usare centimetri per la stessa abbondanza (0.3 cm) introduce potenziali errori di arrotondamento. Per qualsiasi oggetto inferiore a circa 30 cm, i millimetri sono l'unita standard nella maggior parte delle industrie mondiali.",
      heading5: "Quanti pixels per millimetro a diversi DPI?",
      p4: "Il rapporto pixels per mm e semplice da calcolare: dividi DPI per 25.4. A 72 DPI, ogni millimetro contiene 2.835 pixels. A 96 DPI, il rapporto e di 3.78 pixels per mm. A 150 DPI, si ottengono 5.906 pixels per mm. A 300 DPI, ogni millimetro contiene 11.811 pixels. Per la stampa di altissima qualita a 600 DPI, sale a 23.622 pixels per mm. Questi rapporti fissi semplificano le conversioni in batch una volta noto il DPI target.",
      heading6:
        "Quando i designer hanno bisogno della conversione da mm a pixels?",
      p5: "I designer di biglietti da visita lavorano in millimetri perche lo standard ISO 7810 definisce le dimensioni della carta come 85.6 x 53.98 mm. I designer di packaging ricevono le specifiche delle etichette dai produttori in mm. I gioiellieri che creano immagini di prodotti necessitano di una mappatura esatta mm-pixel per i layout dei cataloghi. I designer di quadranti per smartwatch convertono il diametro dello schermo di 40 mm o 44 mm in pixels per i mockup dell'interfaccia. Qualsiasi progetto in cui la precisione fisica sotto un centimetro conta beneficera della conversione da mm a pixels.",
    },
  },
  nl: {
    faq: [
      {
        question: "Hoe converteer ik millimeters naar pixels?",
        answer:
          "Vermenigvuldig de millimeters met DPI en deel door 25.4 (aangezien er 25.4 mm in een inch zitten). Bijvoorbeeld, 100 mm bij 96 DPI is ongeveer 378 pixels (100 x 96 / 25.4 = 377.95).",
      },
      {
        question: "Hoeveel pixels is 1 mm bij 96 DPI?",
        answer:
          "Bij 96 DPI is 1 millimeter ongeveer 3.78 pixels (96 / 25.4 = 3.78). Dit is de standaard voor webdesign op de meeste desktopschermen.",
      },
      {
        question: "Hoeveel pixels is 1 mm bij 300 DPI?",
        answer:
          "Bij 300 DPI is 1 millimeter ongeveer 11.81 pixels (300 / 25.4 = 11.81). Deze precisie is standaard voor afdrukken van hoge kwaliteit.",
      },
      {
        question: "Wanneer heb ik mm naar pixel conversie nodig?",
        answer:
          "Deze conversie is gebruikelijk bij precisie-ontwerpwerk zoals productetiketten, visitekaartjes, technische tekeningen en elk project waar specificaties in millimeters zijn maar de uitvoer digitaal is.",
      },
      {
        question:
          "Wat is de relatie tussen mm en inches voor pixelconversie?",
        answer:
          "Er zitten precies 25.4 millimeters in een inch. Deze constante wordt gebruikt in de conversieformule: pixels = mm x DPI / 25.4. Het verbindt metrische metingen met het op inches gebaseerde DPI-systeem.",
      },
    ],
    body: {
      heading1: "Hoe millimeter naar pixel conversie werkt",
      p1: "Millimeters bieden de hoogste precisie onder gangbare metrische eenheden. Conversie naar pixels vereist de DPI-waarde en de mm-naar-inch constante:",
      formula: "Pixels = (MM x DPI) / 25.4",
      p2: "Aangezien er 25.4 millimeters in een inch zitten, zet delen door 25.4 millimeters om naar inches, die vervolgens vermenigvuldigd worden met DPI om het aantal pixels te krijgen.",
      heading2: "Veelvoorkomende toepassingen",
      li1: "Visitekaartjesontwerp: Standaardformaten zoals 85 x 55 mm omgezet naar pixelafmetingen.",
      li2: "Productetiketten: Kleine etiketten waar millimeterprecisie belangrijk is.",
      li3: "Technische tekeningen: Technische illustraties gespecificeerd in millimeters.",
      li4: "Precisiedruk: Fijn detailwerk dat een exacte pixel-naar-mm mapping vereist.",
      heading3: "Veelvoorkomende formaten in pixels (bij 300 DPI)",
      li5: "Visitekaartje (85 x 55 mm) - 1004 x 650 pixels",
      li6: "Creditcard (85.6 x 53.98 mm) - 1011 x 638 pixels",
      li7: "Postzegel (25 x 30 mm) - 295 x 354 pixels",
      li8: "SD-kaart etiket (24 x 32 mm) - 283 x 378 pixels",
      heading4: "Waarom millimeters gebruiken in plaats van centimeters?",
      p3: "Millimeters bieden precisie met hele getallen voor kleine objecten. Een visitekaartje is 85 x 55 mm, niet 8.5 x 5.5 cm. In engineering, productie en precisiedruk worden specificaties in mm gegeven om decimale dubbelzinnigheid te vermijden. Wanneer je 3 mm afloop opgeeft in een drukbestand, weet de drukkerij precies hoeveel extra ruimte er nodig is. Centimeters gebruiken voor dezelfde afloop (0.3 cm) introduceert mogelijke afrondingsfouten. Voor elk object kleiner dan ongeveer 30 cm zijn millimeters de standaardeenheid in de meeste industrieen wereldwijd.",
      heading5: "Hoeveel pixels per millimeter bij verschillende DPIs?",
      p4: "De pixels-per-mm verhouding is eenvoudig te berekenen: deel DPI door 25.4. Bij 72 DPI bevat elke millimeter 2.835 pixels. Bij 96 DPI is de verhouding 3.78 pixels per mm. Bij 150 DPI krijg je 5.906 pixels per mm. Bij 300 DPI bevat elke millimeter 11.811 pixels. Voor ultragedetailleerd drukwerk bij 600 DPI stijgt dit naar 23.622 pixels per mm. Deze vaste verhoudingen vereenvoudigen batchconversies zodra je de doel-DPI kent.",
      heading6:
        "Wanneer hebben ontwerpers mm-naar-pixel conversie nodig?",
      p5: "Visitekaartjesontwerpers werken in millimeters omdat de ISO 7810-norm de kaartafmetingen definieert als 85.6 x 53.98 mm. Verpakkingsontwerpers ontvangen etiketspecificaties van fabrikanten in mm. Juweliers die productafbeeldingen maken hebben exacte mm-naar-pixel mapping nodig voor cataloglayouts. Smartwatch-wijzerplaatontwerpers zetten de 40 mm of 44 mm schermdiameter om naar pixels voor UI-mockups. Elk project waar fysieke precisie onder een centimeter belangrijk is, profiteert van mm-naar-pixel conversie.",
    },
  },
  ar: {
    faq: [
      {
        question: "Kayfa uhawwil al-millimetrat ila pixels?",
        answer:
          "Idrib al-millimetrat fi DPI wa iqsim ala 25.4 (li'anna hunaka 25.4 mm fi kull inch). Mathalan, 100 mm inda 96 DPI tusawi taqriban 378 pixels (100 x 96 / 25.4 = 377.95).",
      },
      {
        question: "Kam pixel fi 1 mm inda 96 DPI?",
        answer:
          "Inda 96 DPI, 1 millimeter yusawi taqriban 3.78 pixels (96 / 25.4 = 3.78). Hatha huwa al-mi'yar li-tasmim al-web ala mu'tham shashaat al-desktop.",
      },
      {
        question: "Kam pixel fi 1 mm inda 300 DPI?",
        answer:
          "Inda 300 DPI, 1 millimeter yusawi taqriban 11.81 pixels (300 / 25.4 = 11.81). Hathihi al-diqqah hiya al-mi'yar li-mukharajat al-tiba'ah alyat al-jawdah.",
      },
      {
        question: "Mata ahtaj ila tahwil mm ila pixels?",
        answer:
          "Hatha al-tahwil sha'i' fi a'mal al-tasmim al-daqiq mithl mulassaqat al-muntajat, bitaqat al-a'mal, al-rusum al-handasiyyah, wa ayy mashru' haythu takun al-muwasafat bil-millimetrat wa lakin al-mukharajat raqamiyyah.",
      },
      {
        question:
          "Ma hiya al-alaqah bayn al-mm wal-inches li-tahwil al-pixels?",
        answer:
          "Hunaka bi-ddibt 25.4 millimeter fi kull inch. Yustakhdam hatha al-thabit fi sighat al-tahwil: pixels = mm x DPI / 25.4. Innahu yarbit al-qiyasat al-mitriyyah bi-nidham DPI al-qa'im ala al-inches.",
      },
    ],
    body: {
      heading1: "Kayfa ya'mal tahwil al-millimetrat ila pixels",
      p1: "Tuwaffir al-millimetrat a'la diqqah bayn al-wahadat al-mitriyyah al-sha'i'ah. Yatatallab al-tahwil ila pixels qimat DPI wa thabit mm-ila-inch:",
      formula: "Pixels = (MM x DPI) / 25.4",
      p2: "Bi-ma anna hunaka 25.4 millimeter fi kull inch, fa-inna al-qismah ala 25.4 tuhawwil al-millimetrat ila inches, thumma yudrab fi DPI lil-husul ala adad al-pixels.",
      heading2: "Halat al-istikhdam al-sha'i'ah",
      li1: "Tasmim bitaqat al-a'mal: Ahajm qiyasiyyah mithl 85 x 55 mm muhawwalah ila ab'ad pixels.",
      li2: "Mulassaqat al-muntajat: Mulassaqat saghirah haythu takun diqqat al-millimeters muhimmah.",
      li3: "Al-rusum al-handasiyyah: Rusum tawdihiyyah fanniyyah muhaddadah bil-millimetrat.",
      li4: "Al-tiba'ah al-daqiqah: A'mal tafsiliyyah tatatallab kharitat pixels-ila-mm daqiqah.",
      heading3: "Al-ahajm al-sha'i'ah bil-pixels (inda 300 DPI)",
      li5: "Bitaqat al-a'mal (85 x 55 mm) - 1004 x 650 pixels",
      li6: "Bitaqat al-i'timan (85.6 x 53.98 mm) - 1011 x 638 pixels",
      li7: "Tabi' barid (25 x 30 mm) - 295 x 354 pixels",
      li8: "Mulassaq bitaqat SD (24 x 32 mm) - 283 x 378 pixels",
      heading4: "Limatha nastakhdam al-millimetrat badalan min al-centimetrat?",
      p3: "Tuwaffir al-millimetrat diqqat al-a'dad al-sahihah lil-ashya' al-saghirah. Bitaqat al-a'mal hiya 85 x 55 mm, wa laysat 8.5 x 5.5 cm. Fi al-handasah wal-tasni' wal-tiba'ah al-daqiqah, tuqaddam al-muwasafat bil-mm li-tajannub ghumud al-kusur al-ashriyyah. Indama tuhaddid 3 mm bleed fi malaf tiba'ah, ta'rif al-matba'ah bi-ddibt kam min al-masahah al-idafiyyah yajib tadminuha. Istikhdam al-centimetrat li-nafs al-bleed (0.3 cm) yuqaddim akhta' taqrib muhtamalah. Li-ayy kain asghar min hawali 30 cm, al-millimetrat hiya al-wahdah al-qiyasiyyah fi mu'tham al-sina'at hawl al-alam.",
      heading5: "Kam pixel fi kull millimeter inda DPI mukhtalifah?",
      p4: "Nisbat al-pixels li-kull mm sahilat al-hisab: iqsim DPI ala 25.4. Inda 72 DPI, kull millimeter yahtawi ala 2.835 pixels. Inda 96 DPI, al-nisbah hiya 3.78 pixels li-kull mm. Inda 150 DPI, tahsul ala 5.906 pixels li-kull mm. Inda 300 DPI, kull millimeter yahtawi ala 11.811 pixels. Lil-tiba'ah fai'qat al-jawdah inda 600 DPI, tartafi' ila 23.622 pixels li-kull mm. Hadhihi al-nisbat al-thabitah tujassit tahwilat al-duf'at basitah bimurrad ma'rifat DPI al-hadaf.",
      heading6: "Mata yahtaj al-musammimun ila tahwil mm ila pixels?",
      p5: "Ya'mal musammimu bitaqat al-a'mal bil-millimetrat li-anna mi'yar ISO 7810 yuhaddid ab'ad al-bitaqah bi-85.6 x 53.98 mm. Yatalaqqa musammimu al-ta'bi'ah muwasafat al-mulassaqat min al-musanni'in bil-mm. Yahtaj sa'ighuh al-mujawaharat alladhina yunsahi'un suwar al-muntajat ila kharitat mm-ila-pixel daqiqah li-takhtiaat al-kataluj. Yuhawwil musammimu wujuh sa'at al-thakiyyah qutr al-shashah 40 mm aw 44 mm ila pixels li-makattat UI. Ayy mashru' haythu takun al-diqqah al-fizya'iyyah tahta centimeter wahid muhimmah sa-yastafid min tahwil mm ila pixels.",
    },
  },
  tr: {
    faq: [
      {
        question: "Milimetreyi piksele nasil donustururum?",
        answer:
          "Milimetreyi DPI ile carpin ve 25.4'e bolun (bir incte 25.4 mm oldugu icin). Ornegin, 96 DPI'da 100 mm yaklasik 378 pixels eder (100 x 96 / 25.4 = 377.95).",
      },
      {
        question: "96 DPI'da 1 mm kac pixels eder?",
        answer:
          "96 DPI'da 1 milimetre yaklasik 3.78 pixels eder (96 / 25.4 = 3.78). Bu, cogu masaustu ekraninda web tasarimi icin standarttir.",
      },
      {
        question: "300 DPI'da 1 mm kac pixels eder?",
        answer:
          "300 DPI'da 1 milimetre yaklasik 11.81 pixels eder (300 / 25.4 = 11.81). Bu hassasiyet yuksek kaliteli baski ciktisi icin standarttir.",
      },
      {
        question: "mm'den pixel donusumune ne zaman ihtiyac duyarim?",
        answer:
          "Bu donusum urun etiketleri, kartvizitler, muhendislik cizimleri ve ozelliklerin milimetre cinsinden verildigi ancak ciktinin dijital oldugu projelerde yaygindir.",
      },
      {
        question:
          "Pixel donusumu icin mm ve inc arasindaki iliski nedir?",
        answer:
          "Bir incte tam olarak 25.4 milimetre vardir. Bu sabit, donusum formulunde kullanilir: pixels = mm x DPI / 25.4. Metrik olcumleri inc tabanli DPI sistemiyle birlestirir.",
      },
    ],
    body: {
      heading1: "Milimetre-piksel donusumu nasil calisir",
      p1: "Milimetreler yaygin metrik birimler arasinda en yuksek hassasiyeti sunar. Piksele donusum icin DPI degeri ve mm-inc sabiti gerekir:",
      formula: "Pixels = (MM x DPI) / 25.4",
      p2: "Bir incte 25.4 milimetre oldugu icin, 25.4'e bolmek milimetreyi ince donusturur, ardindan pixel sayisini elde etmek icin DPI ile carpilir.",
      heading2: "Yaygin kullanim alanlari",
      li1: "Kartvizit tasarimi: 85 x 55 mm gibi standart boyutlar piksel boyutlarina donusturulur.",
      li2: "Urun etiketleri: Milimetre hassasiyetinin onemli oldugu kucuk etiketler.",
      li3: "Muhendislik cizimleri: Milimetre cinsinden belirtilmis teknik cizimler.",
      li4: "Hassas baski: Tam pixel-mm eslestirmesi gerektiren ince detay calismasi.",
      heading3: "Yaygin boyutlar piksel cinsinden (300 DPI'da)",
      li5: "Kartvizit (85 x 55 mm) - 1004 x 650 pixels",
      li6: "Kredi karti (85.6 x 53.98 mm) - 1011 x 638 pixels",
      li7: "Posta pulu (25 x 30 mm) - 295 x 354 pixels",
      li8: "SD kart etiketi (24 x 32 mm) - 283 x 378 pixels",
      heading4: "Neden santimetre yerine milimetre kullanilir?",
      p3: "Milimetreler kucuk nesneler icin tam sayi hassasiyeti sunar. Bir kartvizit 85 x 55 mm'dir, 8.5 x 5.5 cm degil. Muhendislik, imalat ve hassas baskida, ondalik belirsizligini onlemek icin ozellikler mm cinsinden verilir. Bir baski dosyasinda 3 mm tasma belirttiginizde, matbaa tam olarak ne kadar ekstra alan dahil edecegini bilir. Ayni tasma icin santimetre kullanmak (0.3 cm) olasi yuvarlama hatalarina yol acar. Yaklasik 30 cm'den kucuk herhangi bir nesne icin, milimetreler dunya capinda cogu endustrinin standart birimidir.",
      heading5: "Farkli DPI'larda milimetre basina kac pixel?",
      p4: "mm basina pixel orani hesaplamasi basittir: DPI'yi 25.4'e bolun. 72 DPI'da her milimetrede 2.835 pixels bulunur. 96 DPI'da oran mm basina 3.78 pixels'tir. 150 DPI'da mm basina 5.906 pixels elde edersiniz. 300 DPI'da her milimetrede 11.811 pixels bulunur. 600 DPI'da ultra yuksek kaliteli baski icin mm basina 23.622 pixels'e cikar. Bu sabit oranlar, hedef DPI'yi bildiginizde toplu donusumleri kolaylastirir.",
      heading6: "Tasarimcilar mm-piksel donusumune ne zaman ihtiyac duyar?",
      p5: "Kartvizit tasarimcilari milimetre cinsinden calisir cunku ISO 7810 standardi kart boyutlarini 85.6 x 53.98 mm olarak tanimlar. Ambalaj tasarimcilari etiket ozelliklerini ureticilerden mm cinsinden alir. Urun gorselleri olusturan kuyumcular katalog duzenleri icin tam mm-piksel eslestirmesine ihtiyac duyar. Akilli saat kadran tasarimcilari 40 mm veya 44 mm ekran capini UI mockuplari icin piksele donusturur. Fiziksel hassasiyetin bir santimetrenin altinda onemli oldugu herhangi bir proje mm-piksel donusumunden fayda gorecektir.",
    },
  },
  pl: {
    faq: [
      {
        question: "Jak przekonwertowac milimetry na piksele?",
        answer:
          "Pomnoz milimetry przez DPI i podziel przez 25.4 (poniewaz w jednym calu jest 25.4 mm). Na przyklad, 100 mm przy 96 DPI to okolo 378 pikseli (100 x 96 / 25.4 = 377.95).",
      },
      {
        question: "Ile pikseli ma 1 mm przy 96 DPI?",
        answer:
          "Przy 96 DPI, 1 milimetr to okolo 3.78 pikseli (96 / 25.4 = 3.78). To standard dla projektowania stron na wiekszosci monitorow.",
      },
      {
        question: "Ile pikseli ma 1 mm przy 300 DPI?",
        answer:
          "Przy 300 DPI, 1 milimetr to okolo 11.81 pikseli (300 / 25.4 = 11.81). Ta precyzja jest standardem dla wysokiej jakosci wydrukow.",
      },
      {
        question: "Kiedy potrzebuje konwersji mm na piksele?",
        answer:
          "Ta konwersja jest powszechna w precyzyjnych pracach projektowych, takich jak etykiety produktow, wizytowki, rysunki techniczne i kazdy projekt, gdzie specyfikacje sa w milimetrach, ale wynik jest cyfrowy.",
      },
      {
        question:
          "Jaki jest zwiazek miedzy mm a calami w konwersji na piksele?",
        answer:
          "W jednym calu jest dokladnie 25.4 milimetrow. Ta stala jest uzywana we wzorze konwersji: pixels = mm x DPI / 25.4. Laczy pomiary metryczne z systemem DPI opartym na calach.",
      },
    ],
    body: {
      heading1: "Jak dziala konwersja milimetrow na piksele",
      p1: "Milimetry zapewniaja najwyzsza precyzje wsrod popularnych jednostek metrycznych. Konwersja na piksele wymaga wartosci DPI i stalej mm-na-cal:",
      formula: "Pixels = (MM x DPI) / 25.4",
      p2: "Poniewaz w jednym calu jest 25.4 milimetrow, dzielenie przez 25.4 zamienia milimetry na cale, ktore nastepnie mnozy sie przez DPI, aby uzyskac liczbe pikseli.",
      heading2: "Typowe zastosowania",
      li1: "Projektowanie wizytowek: Standardowe rozmiary jak 85 x 55 mm przeliczone na wymiary w pikselach.",
      li2: "Etykiety produktow: Male etykiety, gdzie precyzja milimetrowa ma znaczenie.",
      li3: "Rysunki techniczne: Ilustracje techniczne podane w milimetrach.",
      li4: "Druk precyzyjny: Detaliczna praca wymagajaca dokladnego odwzorowania pikseli na mm.",
      heading3: "Typowe rozmiary w pikselach (przy 300 DPI)",
      li5: "Wizytowka (85 x 55 mm) - 1004 x 650 pikseli",
      li6: "Karta kredytowa (85.6 x 53.98 mm) - 1011 x 638 pikseli",
      li7: "Znaczek pocztowy (25 x 30 mm) - 295 x 354 piksele",
      li8: "Etykieta karty SD (24 x 32 mm) - 283 x 378 pikseli",
      heading4: "Dlaczego uzywac milimetrow zamiast centymetrow?",
      p3: "Milimetry zapewniaja precyzje liczb calkowitych dla malych obiektow. Wizytowka ma 85 x 55 mm, nie 8.5 x 5.5 cm. W inzynierii, produkcji i druku precyzyjnym specyfikacje podaje sie w mm, aby uniknac niejednoznacznosci dziesietnej. Gdy okreslasz 3 mm spadu w pliku do druku, drukarnia dokladnie wie, ile dodatkowej powierzchni uwzglednic. Uzycie centymetrow dla tego samego spadu (0.3 cm) wprowadza potencjalne bledy zaokraglen. Dla kazdego obiektu mniejszego niz okolo 30 cm, milimetry sa standardowa jednostka w wiekszosci branz na swiecie.",
      heading5: "Ile pikseli na milimetr przy roznych DPI?",
      p4: "Stosunek pikseli na mm jest prosty do obliczenia: podziel DPI przez 25.4. Przy 72 DPI kazdy milimetr zawiera 2.835 pikseli. Przy 96 DPI stosunek wynosi 3.78 pikseli na mm. Przy 150 DPI otrzymujesz 5.906 pikseli na mm. Przy 300 DPI kazdy milimetr zawiera 11.811 pikseli. Dla ultra wysokiej jakosci druku przy 600 DPI wzrasta do 23.622 pikseli na mm. Te stale proporcje upraszczaja konwersje seryjne po poznaniu docelowego DPI.",
      heading6: "Kiedy projektanci potrzebuja konwersji mm na piksele?",
      p5: "Projektanci wizytowek pracuja w milimetrach, poniewaz norma ISO 7810 definiuje wymiary karty jako 85.6 x 53.98 mm. Projektanci opakowan otrzymuja specyfikacje etykiet od producentow w mm. Jubilerzy tworzacy zdjecia produktow potrzebuja dokladnego odwzorowania mm na piksele do ukladow katalogow. Projektanci tarcz smartwatchow przeliczaja srednice ekranu 40 mm lub 44 mm na piksele do makiet interfejsu. Kazdy projekt, w ktorym precyzja fizyczna ponizej jednego centymetra ma znaczenie, skorzysta z konwersji mm na piksele.",
    },
  },
  id: {
    faq: [
      {
        question: "Bagaimana cara mengonversi milimeter ke pixels?",
        answer:
          "Kalikan milimeter dengan DPI lalu bagi dengan 25.4 (karena ada 25.4 mm per inci). Misalnya, 100 mm pada 96 DPI sama dengan sekitar 378 pixels (100 x 96 / 25.4 = 377.95).",
      },
      {
        question: "Berapa pixels untuk 1 mm pada 96 DPI?",
        answer:
          "Pada 96 DPI, 1 milimeter sama dengan sekitar 3.78 pixels (96 / 25.4 = 3.78). Ini adalah standar untuk desain web pada sebagian besar tampilan desktop.",
      },
      {
        question: "Berapa pixels untuk 1 mm pada 300 DPI?",
        answer:
          "Pada 300 DPI, 1 milimeter sama dengan sekitar 11.81 pixels (300 / 25.4 = 11.81). Presisi ini adalah standar untuk output cetak berkualitas tinggi.",
      },
      {
        question: "Kapan saya membutuhkan konversi mm ke pixels?",
        answer:
          "Konversi ini umum dalam pekerjaan desain presisi seperti label produk, kartu nama, gambar teknik, dan proyek apa pun di mana spesifikasi dalam milimeter tetapi outputnya digital.",
      },
      {
        question:
          "Apa hubungan antara mm dan inci untuk konversi pixels?",
        answer:
          "Ada tepat 25.4 milimeter dalam satu inci. Konstanta ini digunakan dalam rumus konversi: pixels = mm x DPI / 25.4. Ini menjembatani pengukuran metrik ke sistem DPI berbasis inci.",
      },
    ],
    body: {
      heading1: "Cara kerja konversi milimeter ke pixels",
      p1: "Milimeter memberikan presisi tertinggi di antara satuan metrik umum. Konversi ke pixels memerlukan nilai DPI dan konstanta mm-ke-inci:",
      formula: "Pixels = (MM x DPI) / 25.4",
      p2: "Karena ada 25.4 milimeter dalam satu inci, membagi dengan 25.4 mengonversi milimeter ke inci, yang kemudian dikalikan dengan DPI untuk mendapatkan jumlah pixels.",
      heading2: "Kasus penggunaan umum",
      li1: "Desain kartu nama: Ukuran standar seperti 85 x 55 mm dikonversi ke dimensi pixels.",
      li2: "Label produk: Label kecil di mana presisi milimeter penting.",
      li3: "Gambar teknik: Ilustrasi teknis yang ditentukan dalam milimeter.",
      li4: "Pencetakan presisi: Pekerjaan detail halus yang memerlukan pemetaan pixels-ke-mm yang tepat.",
      heading3: "Ukuran umum dalam pixels (pada 300 DPI)",
      li5: "Kartu nama (85 x 55 mm) - 1004 x 650 pixels",
      li6: "Kartu kredit (85.6 x 53.98 mm) - 1011 x 638 pixels",
      li7: "Perangko (25 x 30 mm) - 295 x 354 pixels",
      li8: "Label kartu SD (24 x 32 mm) - 283 x 378 pixels",
      heading4: "Mengapa menggunakan milimeter alih-alih sentimeter?",
      p3: "Milimeter memberikan presisi bilangan bulat untuk objek kecil. Kartu nama berukuran 85 x 55 mm, bukan 8.5 x 5.5 cm. Dalam teknik, manufaktur, dan pencetakan presisi, spesifikasi diberikan dalam mm untuk menghindari ambiguitas desimal. Saat Anda menentukan bleed 3 mm pada file cetak, percetakan tahu persis berapa banyak area tambahan yang harus disertakan. Menggunakan sentimeter untuk bleed yang sama (0.3 cm) menimbulkan potensi kesalahan pembulatan. Untuk objek apa pun yang lebih kecil dari sekitar 30 cm, milimeter adalah satuan standar di sebagian besar industri di seluruh dunia.",
      heading5: "Berapa pixels per milimeter pada DPI yang berbeda?",
      p4: "Rasio pixels per mm mudah dihitung: bagi DPI dengan 25.4. Pada 72 DPI, setiap milimeter mengandung 2.835 pixels. Pada 96 DPI, rasionya adalah 3.78 pixels per mm. Pada 150 DPI, Anda mendapatkan 5.906 pixels per mm. Pada 300 DPI, setiap milimeter mengandung 11.811 pixels. Untuk pencetakan kualitas ultra tinggi pada 600 DPI, naik menjadi 23.622 pixels per mm. Rasio tetap ini menyederhanakan konversi massal setelah Anda mengetahui DPI target.",
      heading6: "Kapan desainer membutuhkan konversi mm ke pixels?",
      p5: "Desainer kartu nama bekerja dalam milimeter karena standar ISO 7810 mendefinisikan dimensi kartu sebagai 85.6 x 53.98 mm. Desainer kemasan menerima spesifikasi label dari produsen dalam mm. Perhiasan yang membuat gambar produk memerlukan pemetaan mm-ke-pixels yang tepat untuk tata letak katalog. Desainer tampilan jam tangan pintar mengonversi diameter layar 40 mm atau 44 mm ke pixels untuk mockup UI. Proyek apa pun di mana presisi fisik di bawah satu sentimeter penting akan mendapat manfaat dari konversi mm ke pixels.",
    },
  },
  ru: {
    faq: [
      {
        question: "Kak konvertirovat' millimetry v pikseli?",
        answer:
          "Umnozhte millimetry na DPI i razdelite na 25.4 (tak kak v odnom dyujme 25.4 mm). Naprimer, 100 mm pri 96 DPI ravno primerno 378 pikselej (100 x 96 / 25.4 = 377.95).",
      },
      {
        question: "Skol'ko pikselej v 1 mm pri 96 DPI?",
        answer:
          "Pri 96 DPI 1 millimetr raven primerno 3.78 pikselej (96 / 25.4 = 3.78). Eto standart dlya veb-dizajna na bol'shinstve nastol'nyh monitorov.",
      },
      {
        question: "Skol'ko pikselej v 1 mm pri 300 DPI?",
        answer:
          "Pri 300 DPI 1 millimetr raven primerno 11.81 pikselej (300 / 25.4 = 11.81). Eta tochnost' yavlyaetsya standartom dlya vysokokachestvennoj pechati.",
      },
      {
        question: "Kogda mne nuzhna konversiya mm v pikseli?",
        answer:
          "Eta konversiya rasprostranenana v tochnyh dizajnerskih rabotah, takih kak etiketki produktov, vizitki, inzhenernye chertezhi i lyuboj proekt, gde specifikacii v millimetrah, no vyhod cifrovoj.",
      },
      {
        question:
          "Kakova svyaz' mezhdu mm i dyujmami dlya konversii v pikseli?",
        answer:
          "V odnom dyujme rovno 25.4 millimetra. Eta konstanta ispol'zuetsya v formule konversii: pikseli = mm x DPI / 25.4. Ona svyazyvaet metricheskie izmereniya s sistemoj DPI na osnove dyujmov.",
      },
    ],
    body: {
      heading1: "Kak rabotaet konversiya millimetrov v pikseli",
      p1: "Millimetry obespechivayut naibol'shuyu tochnost' sredi obychnyh metricheskih edinic. Konversiya v pikseli trebuet znacheniya DPI i konstanty mm-v-dyujm:",
      formula: "Pixels = (MM x DPI) / 25.4",
      p2: "Poskol'ku v odnom dyujme 25.4 millimetra, delenie na 25.4 preobrazuet millimetry v dyujmy, kotorye zatem umnozhayutsya na DPI dlya polucheniya kolichestva pikselej.",
      heading2: "Rasprostranennye scenarii ispol'zovaniya",
      li1: "Dizajn vizitok: Standartnye razmery, naprimer 85 x 55 mm, preobrazovannye v pikselnye razmernosti.",
      li2: "Etiketki produktov: Malen'kie etiketki, gde vazhna millimetrovaya tochnost'.",
      li3: "Inzhenernye chertezhi: Tehnicheskie illyustracii v millimetrah.",
      li4: "Tochnaya pechat': Tonkaya rabota, trebuyushchaya tochnogo sootvetstviya pikselej i mm.",
      heading3: "Rasprostranennye razmery v pikselyah (pri 300 DPI)",
      li5: "Vizitka (85 x 55 mm) - 1004 x 650 pikselej",
      li6: "Kreditnaya karta (85.6 x 53.98 mm) - 1011 x 638 pikselej",
      li7: "Pochtovaya marka (25 x 30 mm) - 295 x 354 pikselej",
      li8: "Etiketka SD karty (24 x 32 mm) - 283 x 378 pikselej",
      heading4: "Pochemu millimetry, a ne santimetry?",
      p3: "Millimetry obespechivayut tochnost' celyh chisel dlya malen'kih ob'ektov. Vizitka imeet razmer 85 x 55 mm, a ne 8.5 x 5.5 cm. V inzhenerii, proizvodstve i tochnoj pechati specifikacii dayutsya v mm, chtoby izbezhat' desyatichnoj dvusmyslennosti. Kogda vy ukazyvaete 3 mm vyleta v pechatnom fajle, tipografiya tochno znaet, skol'ko dopolnitel'noj ploshchadi vklyuchit'. Ispol'zovanie santimetrov dlya togo zhe vyleta (0.3 cm) vvodit vozmozhnye oshibki okrugleniya. Dlya lyubogo ob'ekta men'she primerno 30 cm millimetry yavlyayutsya standartnoj edinicej v bol'shinstve otraslej po vsemu miru.",
      heading5: "Skol'ko pikselej na millimetr pri raznyh DPI?",
      p4: "Sootnoshenie pikselej na mm legko rasschitat': razdelite DPI na 25.4. Pri 72 DPI kazhdyj millimetr soderzhit 2.835 pikselej. Pri 96 DPI sootnoshenie sostavlyaet 3.78 pikselej na mm. Pri 150 DPI poluchaetsya 5.906 pikselej na mm. Pri 300 DPI kazhdyj millimetr soderzhit 11.811 pikselej. Dlya sverkhkachestvennoj pechati pri 600 DPI eto vozrastaet do 23.622 pikselej na mm. Eti fiksirovannyye sootnosheniya uproshchayut paketnyye konversii, kak tol'ko vy uznaete celevoj DPI.",
      heading6: "Kogda dizajneram nuzhna konversiya mm v pikseli?",
      p5: "Dizajnery vizitok rabotayut v millimetrah, potomu chto standart ISO 7810 opredelyaet razmery karty kak 85.6 x 53.98 mm. Dizajnery upakovki poluchayut specifikacii etiketok ot proizvoditelej v mm. Yuveliry, sozdayushchie izobrazheniya produktov, nuzhdayutsya v tochnom sootnoshenii mm-piksel' dlya maketov katalogov. Dizajnery ciferblatov umnyh chasov preobrazuyut diametr ekrana 40 mm ili 44 mm v pikseli dlya maketov interfejsa. Lyuboj proekt, gde fizicheskaya tochnost' menee odnogo santimetra vazhna, vyigraet ot konversii mm v pikseli.",
    },
  },
};
