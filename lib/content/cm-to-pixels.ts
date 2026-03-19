import type { PageContentMap } from "./types";

export const content: PageContentMap = {
  en: {
    faq: [
      {
        question: "How do I convert centimeters to pixels?",
        answer:
          "Multiply the centimeters by DPI, then divide by 2.54 (since there are 2.54 cm per inch). For example, 10 cm at 96 DPI equals about 378 pixels (10 x 96 / 2.54 = 377.95).",
      },
      {
        question: "How many pixels is 1 cm at 96 DPI?",
        answer:
          "At 96 DPI, 1 centimeter equals approximately 37.8 pixels (96 / 2.54 = 37.795). This is the standard pixel density for web content on Windows displays.",
      },
      {
        question: "How many pixels is 1 cm at 300 DPI?",
        answer:
          "At 300 DPI, 1 centimeter equals approximately 118.1 pixels (300 / 2.54 = 118.11). This resolution is standard for professional print output.",
      },
      {
        question: "Why do I need to know the DPI for this conversion?",
        answer:
          "DPI (dots per inch) defines how many pixels represent one physical inch. Since centimeters are a physical unit, you need DPI to bridge the gap between physical and digital measurements.",
      },
      {
        question: "What is the relationship between cm, inches, and pixels?",
        answer:
          "There are 2.54 centimeters per inch. Pixels per inch is determined by DPI. So pixels = cm x DPI / 2.54. This three-way relationship connects metric measurements to digital dimensions.",
      },
    ],
    body: {
      heading1: "How CM to Pixel Conversion Works",
      p1: "Converting centimeters to pixels requires an intermediate step through inches, since DPI is defined as dots per inch. The formula is:",
      formula: "Pixels = (CM x DPI) / 2.54",
      p2: "The constant 2.54 represents the number of centimeters in one inch. This conversion is essential for designers in countries using the metric system who need to create digital assets at specific physical sizes.",
      heading2: "Common Use Cases",
      li1: "International print design: Convert metric specifications to pixel dimensions for digital production.",
      li2: "Product packaging: Calculate pixel dimensions for labels and packaging measured in centimeters.",
      li3: "Photo sizing: Determine pixel requirements for metric-sized photo prints.",
      li4: "A-series paper: Convert A4, A3, and other ISO paper sizes to pixel dimensions.",
      heading3: "Common Paper Sizes in Pixels (at 300 DPI)",
      li5: "A4 (21 x 29.7 cm) - 2480 x 3508 pixels",
      li6: "A3 (29.7 x 42 cm) - 3508 x 4961 pixels",
      li7: "A5 (14.8 x 21 cm) - 1748 x 2480 pixels",
      li8: "10 x 15 cm photo - 1181 x 1772 pixels",
      heading4: "Why Does the Formula Include 2.54?",
      p3: "The constant 2.54 represents the exact number of centimeters in one inch, as defined by the international yard and pound agreement of 1959. Since DPI measures pixels per inch, you must first convert centimeters to inches before applying the DPI multiplier. Dividing by 2.54 handles that conversion. For example, 10 cm divided by 2.54 equals 3.937 inches. Multiply that by 96 DPI and you get 378 pixels. Skipping this step would produce results that are 2.54x too large.",
      heading5: "How Many Pixels Per Centimeter at Standard DPIs?",
      p4: "Knowing the pixels-per-cm ratio at your target DPI saves time during repetitive conversions. At 72 DPI, each centimeter contains 28.35 pixels. At 96 DPI, the ratio increases to 37.8 pixels per cm. At 150 DPI, you get 59.06 pixels per cm. At 300 DPI (print standard), each centimeter holds 118.11 pixels. These ratios are fixed for a given DPI, so once you know the target DPI, you can quickly multiply any cm measurement by the matching ratio.",
      heading6: "When Is CM-to-Pixel Conversion Most Useful?",
      p5: "Designers in Europe, Asia, and most of the world use metric measurements for print specifications. Converting cm to pixels is essential when creating digital assets from metric-dimensioned mockups. Product packaging labels measured in centimeters need accurate pixel dimensions for press-ready files. Architects working with metric blueprints convert room dimensions to pixels for digital renderings. Students preparing ISO A-series paper documents (A3, A4, A5) need pixel values to set up their design canvas at the correct resolution.",
    },
  },
  es: {
    faq: [
      {
        question: "¿Cómo convierto centímetros a pixels?",
        answer:
          "Multiplica los centímetros por DPI y luego divide entre 2.54 (ya que hay 2.54 cm por pulgada). Por ejemplo, 10 cm a 96 DPI equivalen a unos 378 pixels (10 x 96 / 2.54 = 377.95).",
      },
      {
        question: "¿Cuántos pixels tiene 1 cm a 96 DPI?",
        answer:
          "A 96 DPI, 1 centímetro equivale a aproximadamente 37.8 pixels (96 / 2.54 = 37.795). Esta es la densidad de pixels estándar para contenido web en pantallas Windows.",
      },
      {
        question: "¿Cuántos pixels tiene 1 cm a 300 DPI?",
        answer:
          "A 300 DPI, 1 centímetro equivale a aproximadamente 118.1 pixels (300 / 2.54 = 118.11). Esta resolución es estándar para impresión profesional.",
      },
      {
        question: "¿Por qué necesito conocer el DPI para esta conversión?",
        answer:
          "DPI (puntos por pulgada) define cuántos pixels representan una pulgada física. Como los centímetros son una unidad física, necesitas el DPI para conectar las medidas físicas con las digitales.",
      },
      {
        question: "¿Cuál es la relación entre cm, pulgadas y pixels?",
        answer:
          "Hay 2.54 centímetros por pulgada. Los pixels por pulgada están determinados por el DPI. Entonces pixels = cm x DPI / 2.54. Esta relación triple conecta las medidas métricas con las dimensiones digitales.",
      },
    ],
    body: {
      heading1: "Cómo funciona la conversión de CM a pixels",
      p1: "Convertir centímetros a pixels requiere un paso intermedio a través de pulgadas, ya que el DPI se define como puntos por pulgada. La fórmula es:",
      formula: "Pixels = (CM x DPI) / 2.54",
      p2: "La constante 2.54 representa el número de centímetros en una pulgada. Esta conversión es esencial para diseñadores en países que usan el sistema métrico y necesitan crear activos digitales en tamaños físicos específicos.",
      heading2: "Casos de uso comunes",
      li1: "Diseño de impresión internacional: Convierte especificaciones métricas a dimensiones en pixels para producción digital.",
      li2: "Empaquetado de productos: Calcula dimensiones en pixels para etiquetas y empaques medidos en centímetros.",
      li3: "Tamaño de fotos: Determina los requisitos de pixels para impresiones fotográficas en tamaño métrico.",
      li4: "Papel serie A: Convierte tamaños de papel A4, A3 y otros ISO a dimensiones en pixels.",
      heading3: "Tamaños de papel comunes en pixels (a 300 DPI)",
      li5: "A4 (21 x 29.7 cm) - 2480 x 3508 pixels",
      li6: "A3 (29.7 x 42 cm) - 3508 x 4961 pixels",
      li7: "A5 (14.8 x 21 cm) - 1748 x 2480 pixels",
      li8: "Foto 10 x 15 cm - 1181 x 1772 pixels",
      heading4: "¿Por qué la fórmula incluye 2.54?",
      p3: "La constante 2.54 representa el número exacto de centímetros en una pulgada, definido por el acuerdo internacional de yarda y libra de 1959. Como el DPI mide pixels por pulgada, primero debes convertir centímetros a pulgadas antes de aplicar el multiplicador DPI. Dividir entre 2.54 realiza esa conversión. Por ejemplo, 10 cm divididos entre 2.54 equivalen a 3.937 pulgadas. Multiplica eso por 96 DPI y obtienes 378 pixels. Omitir este paso produciría resultados 2.54 veces más grandes.",
      heading5: "¿Cuántos pixels por centímetro a DPIs estándar?",
      p4: "Conocer la proporción pixels-por-cm a tu DPI objetivo ahorra tiempo en conversiones repetitivas. A 72 DPI, cada centímetro contiene 28.35 pixels. A 96 DPI, la proporción aumenta a 37.8 pixels por cm. A 150 DPI, obtienes 59.06 pixels por cm. A 300 DPI (estándar de impresión), cada centímetro contiene 118.11 pixels. Estas proporciones son fijas para un DPI dado, así que una vez que conoces el DPI objetivo, puedes multiplicar rápidamente cualquier medida en cm por la proporción correspondiente.",
      heading6: "¿Cuándo es más útil la conversión de CM a pixels?",
      p5: "Los diseñadores en Europa, Asia y la mayor parte del mundo usan medidas métricas para especificaciones de impresión. Convertir cm a pixels es esencial al crear activos digitales a partir de maquetas con dimensiones métricas. Las etiquetas de empaques de productos medidos en centímetros necesitan dimensiones precisas en pixels para archivos listos para imprenta. Los arquitectos que trabajan con planos métricos convierten dimensiones de habitaciones a pixels para renderizados digitales. Los estudiantes que preparan documentos en papel ISO serie A (A3, A4, A5) necesitan valores en pixels para configurar su lienzo de diseño a la resolución correcta.",
    },
  },
  fr: {
    faq: [
      {
        question: "Comment convertir des centimètres en pixels ?",
        answer:
          "Multipliez les centimètres par le DPI, puis divisez par 2.54 (puisqu'il y a 2.54 cm par pouce). Par exemple, 10 cm à 96 DPI équivalent à environ 378 pixels (10 x 96 / 2.54 = 377.95).",
      },
      {
        question: "Combien de pixels fait 1 cm à 96 DPI ?",
        answer:
          "À 96 DPI, 1 centimètre équivaut à environ 37.8 pixels (96 / 2.54 = 37.795). C'est la densité de pixels standard pour le contenu web sur les écrans Windows.",
      },
      {
        question: "Combien de pixels fait 1 cm à 300 DPI ?",
        answer:
          "À 300 DPI, 1 centimètre équivaut à environ 118.1 pixels (300 / 2.54 = 118.11). Cette résolution est standard pour l'impression professionnelle.",
      },
      {
        question: "Pourquoi dois-je connaître le DPI pour cette conversion ?",
        answer:
          "Le DPI (points par pouce) définit combien de pixels représentent un pouce physique. Comme les centimètres sont une unité physique, vous avez besoin du DPI pour faire le pont entre les mesures physiques et numériques.",
      },
      {
        question: "Quelle est la relation entre cm, pouces et pixels ?",
        answer:
          "Il y a 2.54 centimètres par pouce. Les pixels par pouce sont déterminés par le DPI. Donc pixels = cm x DPI / 2.54. Cette relation à trois éléments connecte les mesures métriques aux dimensions numériques.",
      },
    ],
    body: {
      heading1: "Comment fonctionne la conversion CM en pixels",
      p1: "Convertir des centimètres en pixels nécessite une étape intermédiaire via les pouces, car le DPI est défini en points par pouce. La formule est :",
      formula: "Pixels = (CM x DPI) / 2.54",
      p2: "La constante 2.54 représente le nombre de centimètres dans un pouce. Cette conversion est essentielle pour les designers des pays utilisant le système métrique qui doivent créer des ressources numériques à des tailles physiques spécifiques.",
      heading2: "Cas d'utilisation courants",
      li1: "Design d'impression international : Convertissez les spécifications métriques en dimensions pixels pour la production numérique.",
      li2: "Emballage de produits : Calculez les dimensions en pixels pour les étiquettes et emballages mesurés en centimètres.",
      li3: "Dimensionnement de photos : Déterminez les besoins en pixels pour les tirages photo au format métrique.",
      li4: "Papier série A : Convertissez les formats A4, A3 et autres formats ISO en dimensions pixels.",
      heading3: "Formats de papier courants en pixels (à 300 DPI)",
      li5: "A4 (21 x 29.7 cm) - 2480 x 3508 pixels",
      li6: "A3 (29.7 x 42 cm) - 3508 x 4961 pixels",
      li7: "A5 (14.8 x 21 cm) - 1748 x 2480 pixels",
      li8: "Photo 10 x 15 cm - 1181 x 1772 pixels",
      heading4: "Pourquoi la formule inclut-elle 2.54 ?",
      p3: "La constante 2.54 représente le nombre exact de centimètres dans un pouce, tel que défini par l'accord international sur le yard et la livre de 1959. Comme le DPI mesure les pixels par pouce, vous devez d'abord convertir les centimètres en pouces avant d'appliquer le multiplicateur DPI. Diviser par 2.54 effectue cette conversion. Par exemple, 10 cm divisés par 2.54 donnent 3.937 pouces. Multipliez par 96 DPI et vous obtenez 378 pixels. Sauter cette étape produirait des résultats 2.54 fois trop grands.",
      heading5: "Combien de pixels par centimètre aux DPI standards ?",
      p4: "Connaître le ratio pixels-par-cm à votre DPI cible fait gagner du temps lors de conversions répétitives. À 72 DPI, chaque centimètre contient 28.35 pixels. À 96 DPI, le ratio monte à 37.8 pixels par cm. À 150 DPI, vous obtenez 59.06 pixels par cm. À 300 DPI (standard d'impression), chaque centimètre contient 118.11 pixels. Ces ratios sont fixes pour un DPI donné, donc une fois que vous connaissez le DPI cible, vous pouvez rapidement multiplier toute mesure en cm par le ratio correspondant.",
      heading6: "Quand la conversion CM en pixels est-elle la plus utile ?",
      p5: "Les designers en Europe, en Asie et dans la majeure partie du monde utilisent les mesures métriques pour les spécifications d'impression. Convertir des cm en pixels est essentiel lors de la création de ressources numériques à partir de maquettes aux dimensions métriques. Les étiquettes d'emballage de produits mesurés en centimètres nécessitent des dimensions en pixels précises pour les fichiers prêts à imprimer. Les architectes travaillant avec des plans métriques convertissent les dimensions des pièces en pixels pour les rendus numériques. Les étudiants préparant des documents au format ISO série A (A3, A4, A5) ont besoin de valeurs en pixels pour configurer leur canevas de design à la bonne résolution.",
    },
  },
  de: {
    faq: [
      {
        question: "Wie konvertiere ich Zentimeter in Pixel?",
        answer:
          "Multiplizieren Sie die Zentimeter mit dem DPI und teilen Sie dann durch 2.54 (da ein Zoll 2.54 cm entspricht). Beispiel: 10 cm bei 96 DPI ergeben etwa 378 Pixel (10 x 96 / 2.54 = 377.95).",
      },
      {
        question: "Wie viele Pixel sind 1 cm bei 96 DPI?",
        answer:
          "Bei 96 DPI entspricht 1 Zentimeter etwa 37.8 Pixeln (96 / 2.54 = 37.795). Dies ist die Standard-Pixeldichte für Webinhalte auf Windows-Bildschirmen.",
      },
      {
        question: "Wie viele Pixel sind 1 cm bei 300 DPI?",
        answer:
          "Bei 300 DPI entspricht 1 Zentimeter etwa 118.1 Pixeln (300 / 2.54 = 118.11). Diese Auflösung ist Standard für professionellen Druck.",
      },
      {
        question: "Warum muss ich den DPI-Wert für diese Umrechnung kennen?",
        answer:
          "DPI (Punkte pro Zoll) definiert, wie viele Pixel einen physischen Zoll darstellen. Da Zentimeter eine physische Einheit sind, benötigen Sie den DPI-Wert, um physische und digitale Maße zu verbinden.",
      },
      {
        question: "Wie ist die Beziehung zwischen cm, Zoll und Pixeln?",
        answer:
          "Ein Zoll entspricht 2.54 Zentimetern. Pixel pro Zoll werden durch den DPI-Wert bestimmt. Also Pixel = cm x DPI / 2.54. Diese Dreierbeziehung verbindet metrische Maße mit digitalen Dimensionen.",
      },
    ],
    body: {
      heading1: "So funktioniert die CM-zu-Pixel-Umrechnung",
      p1: "Die Umrechnung von Zentimetern in Pixel erfordert einen Zwischenschritt über Zoll, da DPI als Punkte pro Zoll definiert ist. Die Formel lautet:",
      formula: "Pixel = (CM x DPI) / 2.54",
      p2: "Die Konstante 2.54 steht für die Anzahl der Zentimeter pro Zoll. Diese Umrechnung ist unverzichtbar für Designer in Ländern mit metrischem System, die digitale Assets in bestimmten physischen Größen erstellen müssen.",
      heading2: "Häufige Anwendungsfälle",
      li1: "Internationales Druckdesign: Konvertieren Sie metrische Vorgaben in Pixel-Dimensionen für die digitale Produktion.",
      li2: "Produktverpackung: Berechnen Sie Pixel-Dimensionen für Etiketten und Verpackungen, die in Zentimetern gemessen werden.",
      li3: "Fotogröße: Bestimmen Sie die Pixel-Anforderungen für Fotoabzüge im metrischen Format.",
      li4: "A-Reihe Papier: Konvertieren Sie A4-, A3- und andere ISO-Papierformate in Pixel-Dimensionen.",
      heading3: "Gängige Papierformate in Pixeln (bei 300 DPI)",
      li5: "A4 (21 x 29.7 cm) - 2480 x 3508 Pixel",
      li6: "A3 (29.7 x 42 cm) - 3508 x 4961 Pixel",
      li7: "A5 (14.8 x 21 cm) - 1748 x 2480 Pixel",
      li8: "10 x 15 cm Foto - 1181 x 1772 Pixel",
      heading4: "Warum enthält die Formel 2.54?",
      p3: "Die Konstante 2.54 entspricht der exakten Anzahl von Zentimetern pro Zoll, festgelegt durch das internationale Yard-und-Pfund-Abkommen von 1959. Da DPI Pixel pro Zoll misst, müssen Sie Zentimeter zunächst in Zoll umrechnen, bevor Sie den DPI-Multiplikator anwenden. Die Division durch 2.54 erledigt diese Umrechnung. Beispiel: 10 cm geteilt durch 2.54 ergibt 3.937 Zoll. Multipliziert mit 96 DPI erhalten Sie 378 Pixel. Ohne diesen Schritt wären die Ergebnisse 2.54-mal zu groß.",
      heading5: "Wie viele Pixel pro Zentimeter bei Standard-DPI-Werten?",
      p4: "Die Kenntnis des Pixel-pro-cm-Verhältnisses bei Ihrem Ziel-DPI spart Zeit bei wiederholten Umrechnungen. Bei 72 DPI enthält jeder Zentimeter 28.35 Pixel. Bei 96 DPI steigt das Verhältnis auf 37.8 Pixel pro cm. Bei 150 DPI erhalten Sie 59.06 Pixel pro cm. Bei 300 DPI (Druckstandard) enthält jeder Zentimeter 118.11 Pixel. Diese Verhältnisse sind für einen bestimmten DPI-Wert fest, sodass Sie jede cm-Messung schnell mit dem passenden Verhältnis multiplizieren können.",
      heading6: "Wann ist die CM-zu-Pixel-Umrechnung am nützlichsten?",
      p5: "Designer in Europa, Asien und dem Großteil der Welt verwenden metrische Maße für Druckspezifikationen. Die Umrechnung von cm in Pixel ist essenziell beim Erstellen digitaler Assets aus metrisch dimensionierten Entwürfen. Produktverpackungsetiketten in Zentimetern benötigen präzise Pixel-Dimensionen für druckfertige Dateien. Architekten, die mit metrischen Bauplänen arbeiten, konvertieren Raummaße in Pixel für digitale Renderings. Studierende, die ISO-A-Reihe-Dokumente (A3, A4, A5) erstellen, benötigen Pixelwerte, um ihre Designfläche in der richtigen Auflösung einzurichten.",
    },
  },
  pt: {
    faq: [
      {
        question: "Como converto centímetros para pixels?",
        answer:
          "Multiplique os centímetros pelo DPI e depois divida por 2.54 (já que há 2.54 cm por polegada). Por exemplo, 10 cm a 96 DPI equivalem a cerca de 378 pixels (10 x 96 / 2.54 = 377.95).",
      },
      {
        question: "Quantos pixels tem 1 cm a 96 DPI?",
        answer:
          "A 96 DPI, 1 centímetro equivale a aproximadamente 37.8 pixels (96 / 2.54 = 37.795). Esta é a densidade de pixels padrão para conteúdo web em telas Windows.",
      },
      {
        question: "Quantos pixels tem 1 cm a 300 DPI?",
        answer:
          "A 300 DPI, 1 centímetro equivale a aproximadamente 118.1 pixels (300 / 2.54 = 118.11). Esta resolução é padrão para impressão profissional.",
      },
      {
        question: "Por que preciso saber o DPI para esta conversão?",
        answer:
          "DPI (pontos por polegada) define quantos pixels representam uma polegada física. Como centímetros são uma unidade física, você precisa do DPI para conectar medidas físicas e digitais.",
      },
      {
        question: "Qual é a relação entre cm, polegadas e pixels?",
        answer:
          "Há 2.54 centímetros por polegada. Pixels por polegada são determinados pelo DPI. Então pixels = cm x DPI / 2.54. Essa relação tripla conecta medidas métricas a dimensões digitais.",
      },
    ],
    body: {
      heading1: "Como funciona a conversão de CM para pixels",
      p1: "Converter centímetros para pixels requer uma etapa intermediária através de polegadas, já que o DPI é definido como pontos por polegada. A fórmula é:",
      formula: "Pixels = (CM x DPI) / 2.54",
      p2: "A constante 2.54 representa o número de centímetros em uma polegada. Esta conversão é essencial para designers em países que usam o sistema métrico e precisam criar ativos digitais em tamanhos físicos específicos.",
      heading2: "Casos de uso comuns",
      li1: "Design de impressão internacional: Converta especificações métricas em dimensões de pixels para produção digital.",
      li2: "Embalagem de produtos: Calcule dimensões de pixels para rótulos e embalagens medidos em centímetros.",
      li3: "Dimensionamento de fotos: Determine os requisitos de pixels para impressões fotográficas em tamanho métrico.",
      li4: "Papel série A: Converta tamanhos de papel A4, A3 e outros ISO em dimensões de pixels.",
      heading3: "Tamanhos de papel comuns em pixels (a 300 DPI)",
      li5: "A4 (21 x 29.7 cm) - 2480 x 3508 pixels",
      li6: "A3 (29.7 x 42 cm) - 3508 x 4961 pixels",
      li7: "A5 (14.8 x 21 cm) - 1748 x 2480 pixels",
      li8: "Foto 10 x 15 cm - 1181 x 1772 pixels",
      heading4: "Por que a fórmula inclui 2.54?",
      p3: "A constante 2.54 representa o número exato de centímetros em uma polegada, conforme definido pelo acordo internacional de jarda e libra de 1959. Como o DPI mede pixels por polegada, você deve primeiro converter centímetros em polegadas antes de aplicar o multiplicador DPI. Dividir por 2.54 realiza essa conversão. Por exemplo, 10 cm divididos por 2.54 equivalem a 3.937 polegadas. Multiplique por 96 DPI e você obtém 378 pixels. Pular esta etapa produziria resultados 2.54 vezes maiores.",
      heading5: "Quantos pixels por centímetro em DPIs padrão?",
      p4: "Conhecer a proporção pixels-por-cm no seu DPI alvo economiza tempo em conversões repetitivas. A 72 DPI, cada centímetro contém 28.35 pixels. A 96 DPI, a proporção sobe para 37.8 pixels por cm. A 150 DPI, você obtém 59.06 pixels por cm. A 300 DPI (padrão de impressão), cada centímetro contém 118.11 pixels. Essas proporções são fixas para um determinado DPI, então uma vez que você conhece o DPI alvo, pode rapidamente multiplicar qualquer medida em cm pela proporção correspondente.",
      heading6: "Quando a conversão de CM para pixels é mais útil?",
      p5: "Designers na Europa, Ásia e na maior parte do mundo usam medidas métricas para especificações de impressão. Converter cm para pixels é essencial ao criar ativos digitais a partir de mockups com dimensões métricas. Rótulos de embalagens de produtos medidos em centímetros precisam de dimensões precisas em pixels para arquivos prontos para impressão. Arquitetos que trabalham com plantas métricas convertem dimensões de ambientes para pixels para renderizações digitais. Estudantes preparando documentos em papel ISO série A (A3, A4, A5) precisam de valores em pixels para configurar sua tela de design na resolução correta.",
    },
  },
  hi: {
    faq: [
      {
        question: "मैं सेंटीमीटर को pixels में कैसे बदलूँ?",
        answer:
          "सेंटीमीटर को DPI से गुणा करें, फिर 2.54 से भाग दें (क्योंकि एक इंच में 2.54 cm होते हैं)। उदाहरण के लिए, 96 DPI पर 10 cm लगभग 378 pixels के बराबर होता है (10 x 96 / 2.54 = 377.95)।",
      },
      {
        question: "96 DPI पर 1 cm में कितने pixels होते हैं?",
        answer:
          "96 DPI पर, 1 सेंटीमीटर लगभग 37.8 pixels के बराबर होता है (96 / 2.54 = 37.795)। यह Windows डिस्प्ले पर वेब सामग्री के लिए मानक pixel घनत्व है।",
      },
      {
        question: "300 DPI पर 1 cm में कितने pixels होते हैं?",
        answer:
          "300 DPI पर, 1 सेंटीमीटर लगभग 118.1 pixels के बराबर होता है (300 / 2.54 = 118.11)। यह रिज़ॉल्यूशन पेशेवर प्रिंट आउटपुट के लिए मानक है।",
      },
      {
        question: "इस रूपांतरण के लिए मुझे DPI जानने की आवश्यकता क्यों है?",
        answer:
          "DPI (डॉट्स प्रति इंच) परिभाषित करता है कि कितने pixels एक भौतिक इंच का प्रतिनिधित्व करते हैं। चूंकि सेंटीमीटर एक भौतिक इकाई है, आपको भौतिक और डिजिटल माप के बीच सेतु बनाने के लिए DPI की आवश्यकता होती है।",
      },
      {
        question: "cm, इंच और pixels के बीच क्या संबंध है?",
        answer:
          "एक इंच में 2.54 सेंटीमीटर होते हैं। प्रति इंच pixels DPI द्वारा निर्धारित होते हैं। तो pixels = cm x DPI / 2.54। यह त्रिपक्षीय संबंध मीट्रिक माप को डिजिटल आयामों से जोड़ता है।",
      },
    ],
    body: {
      heading1: "CM से pixel रूपांतरण कैसे काम करता है",
      p1: "सेंटीमीटर को pixels में बदलने के लिए इंच के माध्यम से एक मध्यवर्ती चरण की आवश्यकता होती है, क्योंकि DPI को डॉट्स प्रति इंच के रूप में परिभाषित किया गया है। सूत्र है:",
      formula: "Pixels = (CM x DPI) / 2.54",
      p2: "स्थिरांक 2.54 एक इंच में सेंटीमीटर की संख्या दर्शाता है। यह रूपांतरण मीट्रिक प्रणाली का उपयोग करने वाले देशों के डिज़ाइनरों के लिए आवश्यक है जिन्हें विशिष्ट भौतिक आकारों में डिजिटल संपत्ति बनानी होती है।",
      heading2: "सामान्य उपयोग के मामले",
      li1: "अंतर्राष्ट्रीय प्रिंट डिज़ाइन: डिजिटल उत्पादन के लिए मीट्रिक विनिर्देशों को pixel आयामों में बदलें।",
      li2: "उत्पाद पैकेजिंग: सेंटीमीटर में मापे गए लेबल और पैकेजिंग के लिए pixel आयामों की गणना करें।",
      li3: "फ़ोटो आकार: मीट्रिक-आकार की फ़ोटो प्रिंट के लिए pixel आवश्यकताएँ निर्धारित करें।",
      li4: "A-श्रृंखला कागज़: A4, A3 और अन्य ISO कागज़ के आकारों को pixel आयामों में बदलें।",
      heading3: "सामान्य कागज़ के आकार pixels में (300 DPI पर)",
      li5: "A4 (21 x 29.7 cm) - 2480 x 3508 pixels",
      li6: "A3 (29.7 x 42 cm) - 3508 x 4961 pixels",
      li7: "A5 (14.8 x 21 cm) - 1748 x 2480 pixels",
      li8: "10 x 15 cm फ़ोटो - 1181 x 1772 pixels",
      heading4: "सूत्र में 2.54 क्यों शामिल है?",
      p3: "स्थिरांक 2.54 एक इंच में सेंटीमीटर की सटीक संख्या दर्शाता है, जैसा कि 1959 के अंतर्राष्ट्रीय गज और पाउंड समझौते द्वारा परिभाषित किया गया है। चूंकि DPI प्रति इंच pixels को मापता है, आपको DPI गुणक लागू करने से पहले सेंटीमीटर को इंच में बदलना होगा। 2.54 से भाग देना यह रूपांतरण करता है। उदाहरण के लिए, 10 cm को 2.54 से भाग देने पर 3.937 इंच मिलते हैं। इसे 96 DPI से गुणा करने पर 378 pixels मिलते हैं। इस चरण को छोड़ने पर परिणाम 2.54 गुना बड़े होंगे।",
      heading5: "मानक DPI पर प्रति सेंटीमीटर कितने pixels?",
      p4: "अपने लक्ष्य DPI पर pixels-प्रति-cm अनुपात जानने से दोहराव वाले रूपांतरणों में समय बचता है। 72 DPI पर, प्रत्येक सेंटीमीटर में 28.35 pixels होते हैं। 96 DPI पर, अनुपात बढ़कर 37.8 pixels प्रति cm हो जाता है। 150 DPI पर, आपको 59.06 pixels प्रति cm मिलते हैं। 300 DPI (प्रिंट मानक) पर, प्रत्येक सेंटीमीटर में 118.11 pixels होते हैं। ये अनुपात किसी दिए गए DPI के लिए निश्चित हैं, इसलिए एक बार जब आप लक्ष्य DPI जानते हैं, तो आप किसी भी cm माप को संबंधित अनुपात से तुरंत गुणा कर सकते हैं।",
      heading6: "CM-से-pixel रूपांतरण कब सबसे उपयोगी है?",
      p5: "यूरोप, एशिया और दुनिया के अधिकांश हिस्सों के डिज़ाइनर प्रिंट विनिर्देशों के लिए मीट्रिक माप का उपयोग करते हैं। मीट्रिक-आयामित मॉकअप से डिजिटल संपत्ति बनाते समय cm को pixels में बदलना आवश्यक है। सेंटीमीटर में मापे गए उत्पाद पैकेजिंग लेबल को प्रेस-रेडी फ़ाइलों के लिए सटीक pixel आयामों की आवश्यकता होती है। मीट्रिक ब्लूप्रिंट के साथ काम करने वाले वास्तुकार डिजिटल रेंडरिंग के लिए कमरे के आयामों को pixels में बदलते हैं। ISO A-श्रृंखला कागज़ दस्तावेज़ (A3, A4, A5) तैयार करने वाले छात्रों को सही रिज़ॉल्यूशन पर अपना डिज़ाइन कैनवास सेट करने के लिए pixel मानों की आवश्यकता होती है।",
    },
  },
  ja: {
    faq: [
      {
        question: "センチメートルをpixelsに変換するにはどうすればよいですか?",
        answer:
          "センチメートルにDPIを掛け、2.54で割ります(1インチ = 2.54 cmのため)。例えば、96 DPIで10 cmは約378 pixelsです(10 x 96 / 2.54 = 377.95)。",
      },
      {
        question: "96 DPIで1 cmは何pixelsですか?",
        answer:
          "96 DPIでは、1センチメートルは約37.8 pixelsです(96 / 2.54 = 37.795)。これはWindowsディスプレイでのWeb コンテンツの標準pixel密度です。",
      },
      {
        question: "300 DPIで1 cmは何pixelsですか?",
        answer:
          "300 DPIでは、1センチメートルは約118.1 pixelsです(300 / 2.54 = 118.11)。この解像度はプロフェッショナルな印刷出力の標準です。",
      },
      {
        question: "この変換にDPIを知る必要があるのはなぜですか?",
        answer:
          "DPI(ドット・パー・インチ)は、1物理インチを何pixelsで表すかを定義します。センチメートルは物理単位なので、物理的な測定値とデジタル測定値の橋渡しにDPIが必要です。",
      },
      {
        question: "cm、インチ、pixelsの関係は何ですか?",
        answer:
          "1インチは2.54センチメートルです。インチあたりのpixelsはDPIで決まります。したがってpixels = cm x DPI / 2.54です。この三者の関係がメートル法の測定値をデジタル寸法に結びつけます。",
      },
    ],
    body: {
      heading1: "CMからpixelへの変換の仕組み",
      p1: "センチメートルをpixelsに変換するには、DPIがドット・パー・インチとして定義されているため、インチを経由する中間ステップが必要です。計算式は次のとおりです:",
      formula: "Pixels = (CM x DPI) / 2.54",
      p2: "定数2.54は1インチあたりのセンチメートル数を表します。この変換は、メートル法を使用する国のデザイナーが特定の物理サイズでデジタルアセットを作成する際に不可欠です。",
      heading2: "一般的な使用例",
      li1: "国際的な印刷デザイン:メートル法の仕様をデジタル制作用のpixel寸法に変換します。",
      li2: "製品パッケージ:センチメートルで測定されたラベルやパッケージのpixel寸法を計算します。",
      li3: "写真のサイズ設定:メートル法サイズの写真プリントに必要なpixel数を決定します。",
      li4: "A判用紙:A4、A3などのISO用紙サイズをpixel寸法に変換します。",
      heading3: "一般的な用紙サイズのpixels数(300 DPI時)",
      li5: "A4 (21 x 29.7 cm) - 2480 x 3508 pixels",
      li6: "A3 (29.7 x 42 cm) - 3508 x 4961 pixels",
      li7: "A5 (14.8 x 21 cm) - 1748 x 2480 pixels",
      li8: "10 x 15 cm写真 - 1181 x 1772 pixels",
      heading4: "なぜ計算式に2.54が含まれるのですか?",
      p3: "定数2.54は、1959年の国際ヤード・ポンド協定で定義された1インチあたりの正確なセンチメートル数です。DPIがインチあたりのpixelsを測定するため、DPI乗数を適用する前にセンチメートルをインチに変換する必要があります。2.54で割ることでその変換が行われます。例えば、10 cmを2.54で割ると3.937インチになります。それに96 DPIを掛けると378 pixelsになります。このステップを省略すると、結果が2.54倍大きくなります。",
      heading5: "標準DPIでの1センチメートルあたりのpixels数は?",
      p4: "ターゲットDPIでのpixels/cm比率を知っておくと、繰り返しの変換で時間を節約できます。72 DPIでは各センチメートルに28.35 pixelsが含まれます。96 DPIでは比率が37.8 pixels/cmに上がります。150 DPIでは59.06 pixels/cmになります。300 DPI(印刷標準)では各センチメートルに118.11 pixelsが含まれます。これらの比率は特定のDPIに対して固定されているため、ターゲットDPIがわかれば、任意のcm測定値に対応する比率をすぐに掛けることができます。",
      heading6: "CMからpixelへの変換が最も役立つのはいつですか?",
      p5: "ヨーロッパ、アジア、そして世界のほとんどの地域のデザイナーは、印刷仕様にメートル法の測定値を使用します。メートル法で寸法指定されたモックアップからデジタルアセットを作成する際、cmからpixelsへの変換は不可欠です。センチメートルで測定された製品パッケージのラベルには、印刷用ファイル向けの正確なpixel寸法が必要です。メートル法の設計図で作業する建築家は、デジタルレンダリング用に部屋の寸法をpixelsに変換します。ISO A判用紙(A3、A4、A5)の文書を準備する学生は、正しい解像度でデザインキャンバスを設定するためにpixel値が必要です。",
    },
  },
  ko: {
    faq: [
      {
        question: "센티미터를 pixels로 어떻게 변환하나요?",
        answer:
          "센티미터에 DPI를 곱한 다음 2.54로 나눕니다(1인치 = 2.54 cm). 예를 들어, 96 DPI에서 10 cm는 약 378 pixels입니다(10 x 96 / 2.54 = 377.95).",
      },
      {
        question: "96 DPI에서 1 cm는 몇 pixels인가요?",
        answer:
          "96 DPI에서 1 센티미터는 약 37.8 pixels입니다(96 / 2.54 = 37.795). 이는 Windows 디스플레이의 웹 콘텐츠 표준 pixel 밀도입니다.",
      },
      {
        question: "300 DPI에서 1 cm는 몇 pixels인가요?",
        answer:
          "300 DPI에서 1 센티미터는 약 118.1 pixels입니다(300 / 2.54 = 118.11). 이 해상도는 전문 인쇄 출력의 표준입니다.",
      },
      {
        question: "이 변환에 DPI를 알아야 하는 이유는 무엇인가요?",
        answer:
          "DPI(인치당 도트)는 하나의 물리적 인치를 몇 개의 pixels로 나타내는지 정의합니다. 센티미터는 물리적 단위이므로, 물리적 측정과 디지털 측정을 연결하려면 DPI가 필요합니다.",
      },
      {
        question: "cm, 인치, pixels의 관계는 무엇인가요?",
        answer:
          "1인치는 2.54 센티미터입니다. 인치당 pixels는 DPI로 결정됩니다. 따라서 pixels = cm x DPI / 2.54입니다. 이 삼중 관계가 미터법 측정을 디지털 치수에 연결합니다.",
      },
    ],
    body: {
      heading1: "CM에서 pixel로의 변환 원리",
      p1: "센티미터를 pixels로 변환하려면 DPI가 인치당 도트로 정의되어 있으므로 인치를 거치는 중간 단계가 필요합니다. 공식은 다음과 같습니다:",
      formula: "Pixels = (CM x DPI) / 2.54",
      p2: "상수 2.54는 1인치당 센티미터 수를 나타냅니다. 이 변환은 미터법을 사용하는 국가의 디자이너가 특정 물리적 크기의 디지털 자산을 만들 때 필수적입니다.",
      heading2: "일반적인 사용 사례",
      li1: "국제 인쇄 디자인: 디지털 제작을 위해 미터법 사양을 pixel 치수로 변환합니다.",
      li2: "제품 포장: 센티미터로 측정된 라벨과 포장의 pixel 치수를 계산합니다.",
      li3: "사진 크기 조정: 미터법 크기의 사진 인쇄에 필요한 pixel 요구 사항을 결정합니다.",
      li4: "A 시리즈 용지: A4, A3 및 기타 ISO 용지 크기를 pixel 치수로 변환합니다.",
      heading3: "일반 용지 크기의 pixels 수 (300 DPI 기준)",
      li5: "A4 (21 x 29.7 cm) - 2480 x 3508 pixels",
      li6: "A3 (29.7 x 42 cm) - 3508 x 4961 pixels",
      li7: "A5 (14.8 x 21 cm) - 1748 x 2480 pixels",
      li8: "10 x 15 cm 사진 - 1181 x 1772 pixels",
      heading4: "공식에 2.54가 포함되는 이유는?",
      p3: "상수 2.54는 1959년 국제 야드 파운드 협정에서 정의된 1인치당 정확한 센티미터 수입니다. DPI가 인치당 pixels를 측정하므로, DPI 승수를 적용하기 전에 센티미터를 인치로 변환해야 합니다. 2.54로 나누면 이 변환이 수행됩니다. 예를 들어, 10 cm를 2.54로 나누면 3.937인치가 됩니다. 여기에 96 DPI를 곱하면 378 pixels가 됩니다. 이 단계를 건너뛰면 결과가 2.54배 더 커집니다.",
      heading5: "표준 DPI에서 센티미터당 pixels 수는?",
      p4: "목표 DPI에서의 pixels/cm 비율을 알면 반복적인 변환 시 시간을 절약할 수 있습니다. 72 DPI에서 각 센티미터는 28.35 pixels를 포함합니다. 96 DPI에서 비율은 cm당 37.8 pixels로 증가합니다. 150 DPI에서는 cm당 59.06 pixels입니다. 300 DPI(인쇄 표준)에서는 각 센티미터에 118.11 pixels가 포함됩니다. 이 비율은 특정 DPI에 대해 고정되어 있으므로, 목표 DPI를 알면 모든 cm 측정값에 해당 비율을 빠르게 곱할 수 있습니다.",
      heading6: "CM에서 pixel로의 변환이 가장 유용한 경우",
      p5: "유럽, 아시아 및 세계 대부분의 디자이너는 인쇄 사양에 미터법 측정을 사용합니다. 미터법 치수의 목업에서 디지털 자산을 만들 때 cm를 pixels로 변환하는 것은 필수적입니다. 센티미터로 측정된 제품 포장 라벨에는 인쇄용 파일을 위한 정확한 pixel 치수가 필요합니다. 미터법 도면으로 작업하는 건축가는 디지털 렌더링을 위해 방 치수를 pixels로 변환합니다. ISO A 시리즈 용지 문서(A3, A4, A5)를 준비하는 학생은 올바른 해상도로 디자인 캔버스를 설정하기 위해 pixel 값이 필요합니다.",
    },
  },
  it: {
    faq: [
      {
        question: "Come converto i centimetri in pixels?",
        answer:
          "Moltiplica i centimetri per il DPI, poi dividi per 2.54 (poiché ci sono 2.54 cm per pollice). Ad esempio, 10 cm a 96 DPI equivalgono a circa 378 pixels (10 x 96 / 2.54 = 377.95).",
      },
      {
        question: "Quanti pixels sono 1 cm a 96 DPI?",
        answer:
          "A 96 DPI, 1 centimetro equivale a circa 37.8 pixels (96 / 2.54 = 37.795). Questa è la densità di pixels standard per i contenuti web sui display Windows.",
      },
      {
        question: "Quanti pixels sono 1 cm a 300 DPI?",
        answer:
          "A 300 DPI, 1 centimetro equivale a circa 118.1 pixels (300 / 2.54 = 118.11). Questa risoluzione è standard per la stampa professionale.",
      },
      {
        question: "Perché devo conoscere il DPI per questa conversione?",
        answer:
          "Il DPI (punti per pollice) definisce quanti pixels rappresentano un pollice fisico. Poiché i centimetri sono un'unità fisica, hai bisogno del DPI per collegare le misure fisiche a quelle digitali.",
      },
      {
        question: "Qual è la relazione tra cm, pollici e pixels?",
        answer:
          "Ci sono 2.54 centimetri per pollice. I pixels per pollice sono determinati dal DPI. Quindi pixels = cm x DPI / 2.54. Questa relazione a tre collega le misure metriche alle dimensioni digitali.",
      },
    ],
    body: {
      heading1: "Come funziona la conversione da CM a pixels",
      p1: "Convertire i centimetri in pixels richiede un passaggio intermedio attraverso i pollici, poiché il DPI è definito come punti per pollice. La formula è:",
      formula: "Pixels = (CM x DPI) / 2.54",
      p2: "La costante 2.54 rappresenta il numero di centimetri in un pollice. Questa conversione è essenziale per i designer nei paesi che usano il sistema metrico e che devono creare risorse digitali a dimensioni fisiche specifiche.",
      heading2: "Casi d'uso comuni",
      li1: "Design per la stampa internazionale: Converti le specifiche metriche in dimensioni pixels per la produzione digitale.",
      li2: "Packaging prodotti: Calcola le dimensioni in pixels per etichette e confezioni misurate in centimetri.",
      li3: "Dimensionamento foto: Determina i requisiti in pixels per stampe fotografiche in formato metrico.",
      li4: "Carta serie A: Converti i formati carta A4, A3 e altri ISO in dimensioni pixels.",
      heading3: "Formati carta comuni in pixels (a 300 DPI)",
      li5: "A4 (21 x 29.7 cm) - 2480 x 3508 pixels",
      li6: "A3 (29.7 x 42 cm) - 3508 x 4961 pixels",
      li7: "A5 (14.8 x 21 cm) - 1748 x 2480 pixels",
      li8: "Foto 10 x 15 cm - 1181 x 1772 pixels",
      heading4: "Perché la formula include 2.54?",
      p3: "La costante 2.54 rappresenta il numero esatto di centimetri in un pollice, come definito dall'accordo internazionale sulla iarda e la libbra del 1959. Poiché il DPI misura pixels per pollice, devi prima convertire i centimetri in pollici prima di applicare il moltiplicatore DPI. Dividere per 2.54 gestisce questa conversione. Ad esempio, 10 cm divisi per 2.54 equivalgono a 3.937 pollici. Moltiplica per 96 DPI e ottieni 378 pixels. Saltare questo passaggio produrrebbe risultati 2.54 volte troppo grandi.",
      heading5: "Quanti pixels per centimetro ai DPI standard?",
      p4: "Conoscere il rapporto pixels-per-cm al tuo DPI target fa risparmiare tempo nelle conversioni ripetitive. A 72 DPI, ogni centimetro contiene 28.35 pixels. A 96 DPI, il rapporto sale a 37.8 pixels per cm. A 150 DPI, ottieni 59.06 pixels per cm. A 300 DPI (standard di stampa), ogni centimetro contiene 118.11 pixels. Questi rapporti sono fissi per un dato DPI, quindi una volta noto il DPI target, puoi rapidamente moltiplicare qualsiasi misura in cm per il rapporto corrispondente.",
      heading6: "Quando è più utile la conversione da CM a pixels?",
      p5: "I designer in Europa, Asia e nella maggior parte del mondo usano misure metriche per le specifiche di stampa. Convertire cm in pixels è essenziale quando si creano risorse digitali da mockup con dimensioni metriche. Le etichette di imballaggio dei prodotti misurate in centimetri necessitano di dimensioni pixels precise per i file pronti per la stampa. Gli architetti che lavorano con planimetrie metriche convertono le dimensioni degli ambienti in pixels per i rendering digitali. Gli studenti che preparano documenti su carta ISO serie A (A3, A4, A5) hanno bisogno di valori in pixels per configurare la tela di design alla risoluzione corretta.",
    },
  },
  nl: {
    faq: [
      {
        question: "Hoe converteer ik centimeters naar pixels?",
        answer:
          "Vermenigvuldig de centimeters met DPI en deel dan door 2.54 (aangezien er 2.54 cm in een inch zitten). Bijvoorbeeld: 10 cm bij 96 DPI is ongeveer 378 pixels (10 x 96 / 2.54 = 377.95).",
      },
      {
        question: "Hoeveel pixels is 1 cm bij 96 DPI?",
        answer:
          "Bij 96 DPI is 1 centimeter ongeveer 37.8 pixels (96 / 2.54 = 37.795). Dit is de standaard pixeldichtheid voor webcontent op Windows-schermen.",
      },
      {
        question: "Hoeveel pixels is 1 cm bij 300 DPI?",
        answer:
          "Bij 300 DPI is 1 centimeter ongeveer 118.1 pixels (300 / 2.54 = 118.11). Deze resolutie is standaard voor professioneel drukwerk.",
      },
      {
        question: "Waarom moet ik de DPI kennen voor deze conversie?",
        answer:
          "DPI (dots per inch) definieert hoeveel pixels één fysieke inch vertegenwoordigen. Aangezien centimeters een fysieke eenheid zijn, heb je DPI nodig om de brug te slaan tussen fysieke en digitale afmetingen.",
      },
      {
        question: "Wat is de relatie tussen cm, inches en pixels?",
        answer:
          "Er zitten 2.54 centimeter in een inch. Pixels per inch worden bepaald door DPI. Dus pixels = cm x DPI / 2.54. Deze drievoudige relatie verbindt metrische metingen met digitale dimensies.",
      },
    ],
    body: {
      heading1: "Hoe CM-naar-pixel conversie werkt",
      p1: "Het converteren van centimeters naar pixels vereist een tussenstap via inches, aangezien DPI is gedefinieerd als dots per inch. De formule is:",
      formula: "Pixels = (CM x DPI) / 2.54",
      p2: "De constante 2.54 vertegenwoordigt het aantal centimeters in een inch. Deze conversie is essentieel voor designers in landen die het metrisch stelsel gebruiken en digitale assets op specifieke fysieke afmetingen moeten maken.",
      heading2: "Veelvoorkomende toepassingen",
      li1: "Internationaal drukwerkontwerp: Converteer metrische specificaties naar pixeldimensies voor digitale productie.",
      li2: "Productverpakking: Bereken pixeldimensies voor etiketten en verpakkingen gemeten in centimeters.",
      li3: "Fotoformaat: Bepaal de pixelvereisten voor fotoafdrukken op metrisch formaat.",
      li4: "A-serie papier: Converteer A4-, A3- en andere ISO-papierformaten naar pixeldimensies.",
      heading3: "Gangbare papierformaten in pixels (bij 300 DPI)",
      li5: "A4 (21 x 29.7 cm) - 2480 x 3508 pixels",
      li6: "A3 (29.7 x 42 cm) - 3508 x 4961 pixels",
      li7: "A5 (14.8 x 21 cm) - 1748 x 2480 pixels",
      li8: "10 x 15 cm foto - 1181 x 1772 pixels",
      heading4: "Waarom bevat de formule 2.54?",
      p3: "De constante 2.54 vertegenwoordigt het exacte aantal centimeters in een inch, zoals gedefinieerd door het internationale yard-en-pond-verdrag van 1959. Aangezien DPI pixels per inch meet, moet je eerst centimeters naar inches converteren voordat je de DPI-vermenigvuldiger toepast. Delen door 2.54 verzorgt die conversie. Bijvoorbeeld: 10 cm gedeeld door 2.54 is 3.937 inch. Vermenigvuldig dat met 96 DPI en je krijgt 378 pixels. Deze stap overslaan zou resultaten opleveren die 2.54x te groot zijn.",
      heading5: "Hoeveel pixels per centimeter bij standaard DPI's?",
      p4: "Het kennen van de pixels-per-cm verhouding bij je doel-DPI bespaart tijd bij herhaalde conversies. Bij 72 DPI bevat elke centimeter 28.35 pixels. Bij 96 DPI stijgt de verhouding naar 37.8 pixels per cm. Bij 150 DPI krijg je 59.06 pixels per cm. Bij 300 DPI (drukstandaard) bevat elke centimeter 118.11 pixels. Deze verhoudingen zijn vast voor een gegeven DPI, dus zodra je de doel-DPI kent, kun je elke cm-meting snel vermenigvuldigen met de bijbehorende verhouding.",
      heading6: "Wanneer is CM-naar-pixel conversie het meest nuttig?",
      p5: "Designers in Europa, Azië en het grootste deel van de wereld gebruiken metrische maten voor drukspecificaties. Het converteren van cm naar pixels is essentieel bij het maken van digitale assets vanuit mockups met metrische afmetingen. Productverpakkingsetiketten gemeten in centimeters hebben nauwkeurige pixeldimensies nodig voor drukklare bestanden. Architecten die met metrische blauwdrukken werken, converteren kamerafmetingen naar pixels voor digitale renders. Studenten die ISO A-serie papierdocumenten (A3, A4, A5) voorbereiden, hebben pixelwaarden nodig om hun ontwerpcanvas op de juiste resolutie in te stellen.",
    },
  },
  ar: {
    faq: [
      {
        question: "كيف أحوّل السنتيمترات إلى pixels؟",
        answer:
          "اضرب السنتيمترات في DPI ثم اقسم على 2.54 (لأن البوصة الواحدة تساوي 2.54 cm). مثلاً، 10 cm عند 96 DPI تساوي حوالي 378 pixels (10 x 96 / 2.54 = 377.95).",
      },
      {
        question: "كم عدد pixels في 1 cm عند 96 DPI؟",
        answer:
          "عند 96 DPI، يساوي 1 سنتيمتر حوالي 37.8 pixels (96 / 2.54 = 37.795). هذه هي كثافة pixels القياسية لمحتوى الويب على شاشات Windows.",
      },
      {
        question: "كم عدد pixels في 1 cm عند 300 DPI؟",
        answer:
          "عند 300 DPI، يساوي 1 سنتيمتر حوالي 118.1 pixels (300 / 2.54 = 118.11). هذه الدقة هي المعيار للطباعة الاحترافية.",
      },
      {
        question: "لماذا أحتاج لمعرفة DPI لهذا التحويل؟",
        answer:
          "DPI (نقاط لكل بوصة) يحدد عدد pixels التي تمثل بوصة فعلية واحدة. بما أن السنتيمترات وحدة فعلية، تحتاج إلى DPI لربط القياسات الفعلية بالقياسات الرقمية.",
      },
      {
        question: "ما العلاقة بين cm والبوصات وpixels؟",
        answer:
          "هناك 2.54 سنتيمتر في البوصة الواحدة. عدد pixels لكل بوصة يحدده DPI. إذن pixels = cm x DPI / 2.54. هذه العلاقة الثلاثية تربط القياسات المترية بالأبعاد الرقمية.",
      },
    ],
    body: {
      heading1: "كيف يعمل تحويل CM إلى pixels",
      p1: "يتطلب تحويل السنتيمترات إلى pixels خطوة وسيطة عبر البوصات، حيث أن DPI يُعرَّف بعدد النقاط لكل بوصة. الصيغة هي:",
      formula: "Pixels = (CM x DPI) / 2.54",
      p2: "الثابت 2.54 يمثل عدد السنتيمترات في البوصة الواحدة. هذا التحويل ضروري للمصممين في البلدان التي تستخدم النظام المتري والذين يحتاجون لإنشاء أصول رقمية بأحجام فعلية محددة.",
      heading2: "حالات الاستخدام الشائعة",
      li1: "تصميم الطباعة الدولي: حوّل المواصفات المترية إلى أبعاد pixels للإنتاج الرقمي.",
      li2: "تغليف المنتجات: احسب أبعاد pixels للملصقات والعبوات المقاسة بالسنتيمترات.",
      li3: "تحديد حجم الصور: حدد متطلبات pixels لطباعة الصور بالأحجام المترية.",
      li4: "ورق سلسلة A: حوّل أحجام الورق A4 وA3 وأحجام ISO الأخرى إلى أبعاد pixels.",
      heading3: "أحجام الورق الشائعة بالـ pixels (عند 300 DPI)",
      li5: "A4 (21 x 29.7 cm) - 2480 x 3508 pixels",
      li6: "A3 (29.7 x 42 cm) - 3508 x 4961 pixels",
      li7: "A5 (14.8 x 21 cm) - 1748 x 2480 pixels",
      li8: "صورة 10 x 15 cm - 1181 x 1772 pixels",
      heading4: "لماذا تتضمن الصيغة 2.54؟",
      p3: "الثابت 2.54 يمثل العدد الدقيق للسنتيمترات في البوصة الواحدة، كما حددته اتفاقية الياردة والرطل الدولية عام 1959. بما أن DPI يقيس pixels لكل بوصة، يجب أولاً تحويل السنتيمترات إلى بوصات قبل تطبيق مضاعف DPI. القسمة على 2.54 تتولى هذا التحويل. مثلاً، 10 cm مقسومة على 2.54 تساوي 3.937 بوصة. اضرب ذلك في 96 DPI وستحصل على 378 pixels. تخطي هذه الخطوة سينتج نتائج أكبر بـ 2.54 مرة.",
      heading5: "كم عدد pixels لكل سنتيمتر عند قيم DPI القياسية؟",
      p4: "معرفة نسبة pixels لكل cm عند DPI المستهدف يوفر الوقت في التحويلات المتكررة. عند 72 DPI، يحتوي كل سنتيمتر على 28.35 pixels. عند 96 DPI، ترتفع النسبة إلى 37.8 pixels لكل cm. عند 150 DPI، تحصل على 59.06 pixels لكل cm. عند 300 DPI (معيار الطباعة)، يحتوي كل سنتيمتر على 118.11 pixels. هذه النسب ثابتة لقيمة DPI معينة، لذا بمجرد معرفة DPI المستهدف، يمكنك بسرعة ضرب أي قياس بالسنتيمتر في النسبة المناسبة.",
      heading6: "متى يكون تحويل CM إلى pixels أكثر فائدة؟",
      p5: "يستخدم المصممون في أوروبا وآسيا ومعظم أنحاء العالم القياسات المترية لمواصفات الطباعة. تحويل cm إلى pixels ضروري عند إنشاء أصول رقمية من نماذج بأبعاد مترية. تحتاج ملصقات تغليف المنتجات المقاسة بالسنتيمترات إلى أبعاد pixels دقيقة للملفات الجاهزة للطباعة. يحوّل المعماريون العاملون بمخططات مترية أبعاد الغرف إلى pixels للتصيير الرقمي. يحتاج الطلاب الذين يحضّرون مستندات بورق ISO سلسلة A (A3 وA4 وA5) إلى قيم pixels لإعداد لوحة التصميم بالدقة الصحيحة.",
    },
  },
  tr: {
    faq: [
      {
        question: "Santimetreyi pixels'e nasıl dönüştürürüm?",
        answer:
          "Santimetreyi DPI ile çarpın, ardından 2.54'e bölün (1 inç = 2.54 cm olduğundan). Örneğin, 96 DPI'da 10 cm yaklaşık 378 pixels'e eşittir (10 x 96 / 2.54 = 377.95).",
      },
      {
        question: "96 DPI'da 1 cm kaç pixels'tir?",
        answer:
          "96 DPI'da 1 santimetre yaklaşık 37.8 pixels'e eşittir (96 / 2.54 = 37.795). Bu, Windows ekranlarında web içeriği için standart pixel yoğunluğudur.",
      },
      {
        question: "300 DPI'da 1 cm kaç pixels'tir?",
        answer:
          "300 DPI'da 1 santimetre yaklaşık 118.1 pixels'e eşittir (300 / 2.54 = 118.11). Bu çözünürlük profesyonel baskı çıktısı için standarttır.",
      },
      {
        question: "Bu dönüşüm için DPI'ı neden bilmem gerekiyor?",
        answer:
          "DPI (inç başına nokta) bir fiziksel inçi kaç pixels'in temsil ettiğini tanımlar. Santimetre fiziksel bir birim olduğundan, fiziksel ve dijital ölçümler arasında köprü kurmak için DPI'a ihtiyacınız vardır.",
      },
      {
        question: "cm, inç ve pixels arasındaki ilişki nedir?",
        answer:
          "Bir inçte 2.54 santimetre vardır. İnç başına pixels DPI tarafından belirlenir. Yani pixels = cm x DPI / 2.54. Bu üçlü ilişki metrik ölçümleri dijital boyutlara bağlar.",
      },
    ],
    body: {
      heading1: "CM'den pixel'e dönüşüm nasıl çalışır",
      p1: "Santimetreyi pixels'e dönüştürmek, DPI inç başına nokta olarak tanımlandığından, inç üzerinden bir ara adım gerektirir. Formül şudur:",
      formula: "Pixels = (CM x DPI) / 2.54",
      p2: "2.54 sabiti bir inçteki santimetre sayısını temsil eder. Bu dönüşüm, metrik sistemi kullanan ülkelerdeki tasarımcılar için belirli fiziksel boyutlarda dijital varlıklar oluştururken vazgeçilmezdir.",
      heading2: "Yaygın kullanım alanları",
      li1: "Uluslararası baskı tasarımı: Dijital üretim için metrik özellikleri pixel boyutlarına dönüştürün.",
      li2: "Ürün ambalajı: Santimetre cinsinden ölçülen etiketler ve ambalajlar için pixel boyutlarını hesaplayın.",
      li3: "Fotoğraf boyutlandırma: Metrik boyutlu fotoğraf baskıları için pixel gereksinimlerini belirleyin.",
      li4: "A serisi kağıt: A4, A3 ve diğer ISO kağıt boyutlarını pixel boyutlarına dönüştürün.",
      heading3: "Yaygın kağıt boyutları pixels cinsinden (300 DPI'da)",
      li5: "A4 (21 x 29.7 cm) - 2480 x 3508 pixels",
      li6: "A3 (29.7 x 42 cm) - 3508 x 4961 pixels",
      li7: "A5 (14.8 x 21 cm) - 1748 x 2480 pixels",
      li8: "10 x 15 cm fotoğraf - 1181 x 1772 pixels",
      heading4: "Formül neden 2.54 içerir?",
      p3: "2.54 sabiti, 1959 uluslararası yarda ve pound anlaşmasıyla tanımlanan bir inçteki tam santimetre sayısını temsil eder. DPI inç başına pixels ölçtüğünden, DPI çarpanını uygulamadan önce santimetreyi inçe dönüştürmeniz gerekir. 2.54'e bölmek bu dönüşümü gerçekleştirir. Örneğin, 10 cm bölü 2.54 eşittir 3.937 inç. Bunu 96 DPI ile çarpın ve 378 pixels elde edersiniz. Bu adımı atlamak 2.54 kat büyük sonuçlar üretir.",
      heading5: "Standart DPI değerlerinde santimetre başına kaç pixels?",
      p4: "Hedef DPI'nızdaki pixels/cm oranını bilmek tekrarlayan dönüşümlerde zaman kazandırır. 72 DPI'da her santimetre 28.35 pixels içerir. 96 DPI'da oran cm başına 37.8 pixels'e yükselir. 150 DPI'da cm başına 59.06 pixels elde edersiniz. 300 DPI'da (baskı standardı) her santimetre 118.11 pixels içerir. Bu oranlar belirli bir DPI için sabittir, bu nedenle hedef DPI'ı bildiğinizde herhangi bir cm ölçümünü ilgili oranla hızlıca çarpabilirsiniz.",
      heading6: "CM'den pixel'e dönüşüm en çok ne zaman kullanışlıdır?",
      p5: "Avrupa, Asya ve dünyanın büyük bölümündeki tasarımcılar baskı özellikleri için metrik ölçümler kullanır. Metrik boyutlu maketlerden dijital varlıklar oluştururken cm'yi pixels'e dönüştürmek esastır. Santimetre cinsinden ölçülen ürün ambalaj etiketleri, baskıya hazır dosyalar için hassas pixel boyutlarına ihtiyaç duyar. Metrik planlarla çalışan mimarlar dijital görselleştirmeler için oda boyutlarını pixels'e dönüştürür. ISO A serisi kağıt belgeleri (A3, A4, A5) hazırlayan öğrencilerin tasarım tuvallerini doğru çözünürlükte ayarlamak için pixel değerlerine ihtiyacı vardır.",
    },
  },
  pl: {
    faq: [
      {
        question: "Jak przeliczyć centymetry na pixels?",
        answer:
          "Pomnóż centymetry przez DPI, a następnie podziel przez 2.54 (ponieważ 1 cal = 2.54 cm). Na przykład 10 cm przy 96 DPI to około 378 pixels (10 x 96 / 2.54 = 377.95).",
      },
      {
        question: "Ile pixels ma 1 cm przy 96 DPI?",
        answer:
          "Przy 96 DPI 1 centymetr to około 37.8 pixels (96 / 2.54 = 37.795). To standardowa gęstość pixels dla treści webowych na wyświetlaczach Windows.",
      },
      {
        question: "Ile pixels ma 1 cm przy 300 DPI?",
        answer:
          "Przy 300 DPI 1 centymetr to około 118.1 pixels (300 / 2.54 = 118.11). Ta rozdzielczość jest standardem dla profesjonalnego druku.",
      },
      {
        question: "Dlaczego muszę znać DPI dla tej konwersji?",
        answer:
          "DPI (punkty na cal) określa, ile pixels reprezentuje jeden fizyczny cal. Ponieważ centymetry to jednostka fizyczna, potrzebujesz DPI, aby połączyć pomiary fizyczne z cyfrowymi.",
      },
      {
        question: "Jaka jest zależność między cm, calami i pixels?",
        answer:
          "Jeden cal to 2.54 centymetra. Pixels na cal określa DPI. Więc pixels = cm x DPI / 2.54. Ta trójstronna zależność łączy pomiary metryczne z wymiarami cyfrowymi.",
      },
    ],
    body: {
      heading1: "Jak działa konwersja CM na pixels",
      p1: "Konwersja centymetrów na pixels wymaga pośredniego kroku przez cale, ponieważ DPI jest zdefiniowane jako punkty na cal. Wzór to:",
      formula: "Pixels = (CM x DPI) / 2.54",
      p2: "Stała 2.54 reprezentuje liczbę centymetrów w jednym calu. Ta konwersja jest niezbędna dla projektantów w krajach używających systemu metrycznego, którzy muszą tworzyć zasoby cyfrowe o określonych rozmiarach fizycznych.",
      heading2: "Typowe zastosowania",
      li1: "Międzynarodowy projekt druku: Konwertuj specyfikacje metryczne na wymiary pixels do produkcji cyfrowej.",
      li2: "Opakowania produktów: Oblicz wymiary pixels dla etykiet i opakowań mierzonych w centymetrach.",
      li3: "Rozmiar zdjęć: Określ wymagania pixels dla odbitek fotograficznych w formacie metrycznym.",
      li4: "Papier serii A: Konwertuj formaty papieru A4, A3 i inne ISO na wymiary pixels.",
      heading3: "Typowe formaty papieru w pixels (przy 300 DPI)",
      li5: "A4 (21 x 29.7 cm) - 2480 x 3508 pixels",
      li6: "A3 (29.7 x 42 cm) - 3508 x 4961 pixels",
      li7: "A5 (14.8 x 21 cm) - 1748 x 2480 pixels",
      li8: "Zdjęcie 10 x 15 cm - 1181 x 1772 pixels",
      heading4: "Dlaczego wzór zawiera 2.54?",
      p3: "Stała 2.54 reprezentuje dokładną liczbę centymetrów w jednym calu, zdefiniowaną przez międzynarodowe porozumienie o jardzie i funcie z 1959 roku. Ponieważ DPI mierzy pixels na cal, musisz najpierw przeliczyć centymetry na cale, zanim zastosujesz mnożnik DPI. Dzielenie przez 2.54 wykonuje tę konwersję. Na przykład 10 cm podzielone przez 2.54 to 3.937 cala. Pomnóż to przez 96 DPI i otrzymasz 378 pixels. Pominięcie tego kroku dałoby wyniki 2.54 razy za duże.",
      heading5: "Ile pixels na centymetr przy standardowych DPI?",
      p4: "Znajomość stosunku pixels na cm przy docelowym DPI oszczędza czas przy powtarzanych konwersjach. Przy 72 DPI każdy centymetr zawiera 28.35 pixels. Przy 96 DPI stosunek wzrasta do 37.8 pixels na cm. Przy 150 DPI otrzymujesz 59.06 pixels na cm. Przy 300 DPI (standard druku) każdy centymetr zawiera 118.11 pixels. Te stosunki są stałe dla danego DPI, więc znając docelowe DPI, możesz szybko pomnożyć dowolny pomiar w cm przez odpowiedni stosunek.",
      heading6: "Kiedy konwersja CM na pixels jest najbardziej przydatna?",
      p5: "Projektanci w Europie, Azji i większości świata używają miar metrycznych do specyfikacji druku. Konwersja cm na pixels jest niezbędna przy tworzeniu zasobów cyfrowych z makiet o wymiarach metrycznych. Etykiety opakowań produktów mierzone w centymetrach wymagają dokładnych wymiarów pixels dla plików gotowych do druku. Architekci pracujący z planami metrycznymi konwertują wymiary pomieszczeń na pixels do renderów cyfrowych. Studenci przygotowujący dokumenty na papierze ISO serii A (A3, A4, A5) potrzebują wartości pixels, aby ustawić płótno projektowe w odpowiedniej rozdzielczości.",
    },
  },
  id: {
    faq: [
      {
        question: "Bagaimana cara mengonversi sentimeter ke pixels?",
        answer:
          "Kalikan sentimeter dengan DPI, lalu bagi dengan 2.54 (karena 1 inci = 2.54 cm). Contoh: 10 cm pada 96 DPI sama dengan sekitar 378 pixels (10 x 96 / 2.54 = 377.95).",
      },
      {
        question: "Berapa pixels untuk 1 cm pada 96 DPI?",
        answer:
          "Pada 96 DPI, 1 sentimeter sama dengan sekitar 37.8 pixels (96 / 2.54 = 37.795). Ini adalah kepadatan pixel standar untuk konten web pada layar Windows.",
      },
      {
        question: "Berapa pixels untuk 1 cm pada 300 DPI?",
        answer:
          "Pada 300 DPI, 1 sentimeter sama dengan sekitar 118.1 pixels (300 / 2.54 = 118.11). Resolusi ini standar untuk output cetak profesional.",
      },
      {
        question: "Mengapa saya perlu mengetahui DPI untuk konversi ini?",
        answer:
          "DPI (titik per inci) mendefinisikan berapa pixels yang mewakili satu inci fisik. Karena sentimeter adalah satuan fisik, Anda memerlukan DPI untuk menjembatani pengukuran fisik dan digital.",
      },
      {
        question: "Apa hubungan antara cm, inci, dan pixels?",
        answer:
          "Ada 2.54 sentimeter per inci. Pixels per inci ditentukan oleh DPI. Jadi pixels = cm x DPI / 2.54. Hubungan tiga arah ini menghubungkan pengukuran metrik dengan dimensi digital.",
      },
    ],
    body: {
      heading1: "Cara kerja konversi CM ke pixels",
      p1: "Mengonversi sentimeter ke pixels memerlukan langkah perantara melalui inci, karena DPI didefinisikan sebagai titik per inci. Rumusnya adalah:",
      formula: "Pixels = (CM x DPI) / 2.54",
      p2: "Konstanta 2.54 mewakili jumlah sentimeter dalam satu inci. Konversi ini penting bagi desainer di negara yang menggunakan sistem metrik yang perlu membuat aset digital pada ukuran fisik tertentu.",
      heading2: "Kasus penggunaan umum",
      li1: "Desain cetak internasional: Konversi spesifikasi metrik ke dimensi pixels untuk produksi digital.",
      li2: "Kemasan produk: Hitung dimensi pixels untuk label dan kemasan yang diukur dalam sentimeter.",
      li3: "Ukuran foto: Tentukan kebutuhan pixels untuk cetakan foto berukuran metrik.",
      li4: "Kertas seri A: Konversi ukuran kertas A4, A3, dan ISO lainnya ke dimensi pixels.",
      heading3: "Ukuran kertas umum dalam pixels (pada 300 DPI)",
      li5: "A4 (21 x 29.7 cm) - 2480 x 3508 pixels",
      li6: "A3 (29.7 x 42 cm) - 3508 x 4961 pixels",
      li7: "A5 (14.8 x 21 cm) - 1748 x 2480 pixels",
      li8: "Foto 10 x 15 cm - 1181 x 1772 pixels",
      heading4: "Mengapa rumus menyertakan 2.54?",
      p3: "Konstanta 2.54 mewakili jumlah pasti sentimeter dalam satu inci, sebagaimana ditetapkan oleh perjanjian internasional yard dan pound tahun 1959. Karena DPI mengukur pixels per inci, Anda harus terlebih dahulu mengonversi sentimeter ke inci sebelum menerapkan pengali DPI. Membagi dengan 2.54 menangani konversi tersebut. Misalnya, 10 cm dibagi 2.54 sama dengan 3.937 inci. Kalikan dengan 96 DPI dan Anda mendapat 378 pixels. Melewatkan langkah ini akan menghasilkan nilai 2.54 kali terlalu besar.",
      heading5: "Berapa pixels per sentimeter pada DPI standar?",
      p4: "Mengetahui rasio pixels per cm pada DPI target menghemat waktu saat konversi berulang. Pada 72 DPI, setiap sentimeter berisi 28.35 pixels. Pada 96 DPI, rasionya meningkat menjadi 37.8 pixels per cm. Pada 150 DPI, Anda mendapat 59.06 pixels per cm. Pada 300 DPI (standar cetak), setiap sentimeter berisi 118.11 pixels. Rasio ini tetap untuk DPI tertentu, jadi setelah mengetahui DPI target, Anda dapat dengan cepat mengalikan pengukuran cm apa pun dengan rasio yang sesuai.",
      heading6: "Kapan konversi CM ke pixels paling berguna?",
      p5: "Desainer di Eropa, Asia, dan sebagian besar dunia menggunakan pengukuran metrik untuk spesifikasi cetak. Mengonversi cm ke pixels sangat penting saat membuat aset digital dari mockup berdimensi metrik. Label kemasan produk yang diukur dalam sentimeter memerlukan dimensi pixels yang akurat untuk file siap cetak. Arsitek yang bekerja dengan cetak biru metrik mengonversi dimensi ruangan ke pixels untuk rendering digital. Mahasiswa yang menyiapkan dokumen kertas ISO seri A (A3, A4, A5) memerlukan nilai pixels untuk mengatur kanvas desain pada resolusi yang benar.",
    },
  },
  ru: {
    faq: [
      {
        question: "Как перевести сантиметры в pixels?",
        answer:
          "Умножьте сантиметры на DPI, затем разделите на 2.54 (так как в одном дюйме 2.54 cm). Например, 10 cm при 96 DPI равны примерно 378 pixels (10 x 96 / 2.54 = 377.95).",
      },
      {
        question: "Сколько pixels в 1 cm при 96 DPI?",
        answer:
          "При 96 DPI 1 сантиметр равен приблизительно 37.8 pixels (96 / 2.54 = 37.795). Это стандартная плотность pixels для веб-контента на дисплеях Windows.",
      },
      {
        question: "Сколько pixels в 1 cm при 300 DPI?",
        answer:
          "При 300 DPI 1 сантиметр равен приблизительно 118.1 pixels (300 / 2.54 = 118.11). Это разрешение является стандартом для профессиональной печати.",
      },
      {
        question: "Почему мне нужно знать DPI для этого преобразования?",
        answer:
          "DPI (точек на дюйм) определяет, сколько pixels представляют один физический дюйм. Поскольку сантиметры являются физической единицей, вам нужен DPI для связи между физическими и цифровыми измерениями.",
      },
      {
        question: "Какая связь между cm, дюймами и pixels?",
        answer:
          "В одном дюйме 2.54 сантиметра. Pixels на дюйм определяются значением DPI. Следовательно, pixels = cm x DPI / 2.54. Эта тройная связь соединяет метрические измерения с цифровыми размерами.",
      },
    ],
    body: {
      heading1: "Как работает конвертация CM в pixels",
      p1: "Преобразование сантиметров в pixels требует промежуточного шага через дюймы, поскольку DPI определяется как точки на дюйм. Формула:",
      formula: "Pixels = (CM x DPI) / 2.54",
      p2: "Константа 2.54 представляет количество сантиметров в одном дюйме. Это преобразование необходимо дизайнерам в странах с метрической системой, которым нужно создавать цифровые ресурсы определённых физических размеров.",
      heading2: "Типичные сценарии использования",
      li1: "Международный дизайн для печати: Конвертируйте метрические спецификации в размеры pixels для цифрового производства.",
      li2: "Упаковка продукции: Рассчитайте размеры pixels для этикеток и упаковки, измеренных в сантиметрах.",
      li3: "Размер фотографий: Определите требования к pixels для фотопечати метрических размеров.",
      li4: "Бумага серии A: Конвертируйте форматы бумаги A4, A3 и другие ISO в размеры pixels.",
      heading3: "Распространённые форматы бумаги в pixels (при 300 DPI)",
      li5: "A4 (21 x 29.7 cm) - 2480 x 3508 pixels",
      li6: "A3 (29.7 x 42 cm) - 3508 x 4961 pixels",
      li7: "A5 (14.8 x 21 cm) - 1748 x 2480 pixels",
      li8: "Фото 10 x 15 cm - 1181 x 1772 pixels",
      heading4: "Почему формула содержит 2.54?",
      p3: "Константа 2.54 представляет точное количество сантиметров в одном дюйме, установленное международным соглашением о ярде и фунте 1959 года. Поскольку DPI измеряет pixels на дюйм, сначала необходимо перевести сантиметры в дюймы, прежде чем применять множитель DPI. Деление на 2.54 выполняет это преобразование. Например, 10 cm, разделённые на 2.54, равны 3.937 дюйма. Умножьте это на 96 DPI, и вы получите 378 pixels. Пропуск этого шага даст результаты в 2.54 раза больше.",
      heading5: "Сколько pixels на сантиметр при стандартных DPI?",
      p4: "Знание соотношения pixels на cm при целевом DPI экономит время при повторных конвертациях. При 72 DPI каждый сантиметр содержит 28.35 pixels. При 96 DPI соотношение возрастает до 37.8 pixels на cm. При 150 DPI получается 59.06 pixels на cm. При 300 DPI (стандарт печати) каждый сантиметр содержит 118.11 pixels. Эти соотношения фиксированы для данного DPI, поэтому, зная целевой DPI, можно быстро умножить любое измерение в cm на соответствующее соотношение.",
      heading6: "Когда конвертация CM в pixels наиболее полезна?",
      p5: "Дизайнеры в Европе, Азии и большей части мира используют метрические измерения для спецификаций печати. Перевод cm в pixels необходим при создании цифровых ресурсов из макетов с метрическими размерами. Этикетки упаковки продукции, измеренные в сантиметрах, требуют точных размеров pixels для файлов, готовых к печати. Архитекторы, работающие с метрическими чертежами, переводят размеры помещений в pixels для цифровых визуализаций. Студентам, готовящим документы на бумаге ISO серии A (A3, A4, A5), нужны значения pixels для настройки холста дизайна с правильным разрешением.",
    },
  },
};
