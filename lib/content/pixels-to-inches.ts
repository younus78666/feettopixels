import type { PageContentMap } from "./types";

export const content: PageContentMap = {
  en: {
    faq: [
      {
        question: "How do I convert pixels to inches?",
        answer:
          "Divide the number of pixels by the DPI (dots per inch). For example, 960 pixels at 96 DPI equals 10 inches (960 / 96 = 10). The DPI determines how many pixels fit in one inch.",
      },
      {
        question: "What DPI should I use for web design?",
        answer:
          "The standard DPI for web design is 96 DPI, which is the default on most Windows displays. Mac Retina displays use a higher pixel density, but CSS pixels still map to 96 DPI in standard web rendering.",
      },
      {
        question: "What DPI is used for print design?",
        answer:
          "Professional print typically uses 300 DPI for high-quality output. Magazine printing may use 300-350 DPI, while newspaper printing can use 150-200 DPI. The higher the DPI, the smaller the physical size for the same pixel count.",
      },
      {
        question:
          "Why does the same pixel count produce different inch values at different DPIs?",
        answer:
          "DPI defines how densely pixels are packed per inch. At 96 DPI, 960 pixels span 10 inches. At 300 DPI, those same 960 pixels span only 3.2 inches because each inch contains more pixels.",
      },
      {
        question: "How many pixels are in one inch?",
        answer:
          "It depends on the DPI setting. At 96 DPI (web standard), one inch equals 96 pixels. At 72 DPI, one inch equals 72 pixels. At 300 DPI (print standard), one inch equals 300 pixels.",
      },
    ],
    body: {
      heading1: "How Pixel to Inch Conversion Works",
      p1: "Converting pixels to inches requires knowing the DPI (dots per inch) of your target output. DPI defines how many pixels are packed into each physical inch. The formula is straightforward:",
      formula: "Inches = Pixels / DPI",
      p2: "For web design, the standard is 96 DPI. For professional print, 300 DPI is the norm. Choosing the right DPI ensures your designs display at the intended physical size.",
      heading2: "Common Use Cases",
      li1: "Print design: Determine the physical size of a digital image when printed at a specific DPI.",
      li2: "Web-to-print conversion: Check how web graphics will translate to physical print dimensions.",
      li3: "Photo printing: Calculate the maximum print size while maintaining quality at 300 DPI.",
      li4: "Display sizing: Understand how screen content maps to real-world measurements.",
      heading3: "DPI Reference Guide",
      li5: "72 DPI - Legacy Mac screen resolution, common for older web graphics.",
      li6: "96 DPI - Windows default, standard for modern web design.",
      li7: "150 DPI - Medium-quality print, suitable for large-format posters.",
      li8: "300 DPI - Professional print quality for brochures, magazines, and photos.",
      heading4: "How Many Pixels Are in One Inch?",
      p3: "The number of pixels in one inch depends entirely on the DPI setting. At 96 DPI (the web standard used by Windows and most browsers), one inch contains exactly 96 pixels. At 72 DPI (the legacy Mac standard), one inch contains 72 pixels. At 300 DPI (professional print), one inch packs 300 pixels into the same physical space. This means a 300 DPI image appears much sharper than a 96 DPI image when printed at the same size, because each inch contains over 3x more pixel data.",
      heading5: "Common Pixel Widths Converted to Inches",
      p4: "The table below shows how common pixel dimensions translate to inches at both 96 DPI (web) and 300 DPI (print). These values help you quickly estimate physical sizes without manual calculation.",
      li9: "640 px - 6.67 inches at 96 DPI, 2.13 inches at 300 DPI",
      li10: "800 px - 8.33 inches at 96 DPI, 2.67 inches at 300 DPI",
      li11: "1024 px - 10.67 inches at 96 DPI, 3.41 inches at 300 DPI",
      li12: "1080 px - 11.25 inches at 96 DPI, 3.6 inches at 300 DPI",
      li13: "1920 px - 20 inches at 96 DPI, 6.4 inches at 300 DPI",
      li14: "3840 px - 40 inches at 96 DPI, 12.8 inches at 300 DPI",
      heading6: "When Do You Need to Convert Pixels to Inches?",
      p5: "Pixel-to-inch conversion comes up regularly in four situations. First, print preparation: before sending a digital file to a printer, you need to confirm the image will print at the correct physical dimensions. Second, photo printing: knowing that a 3000x2000 pixel photo prints at 10x6.67 inches at 300 DPI helps you choose the right paper size. Third, large format signage: banner and poster designers use lower DPI values (100-150) because viewers stand farther away, making each pixel stretch across more physical space. Fourth, web-to-print workflows: designers who repurpose web assets for brochures or business cards need to verify that 96 DPI screen graphics have enough resolution for 300 DPI print output.",
    },
  },

  es: {
    faq: [
      {
        question: "¿Cómo convierto pixels a pulgadas?",
        answer:
          "Divide el número de pixels entre el DPI (puntos por pulgada). Por ejemplo, 960 pixels a 96 DPI equivalen a 10 pulgadas (960 / 96 = 10). El DPI determina cuántos pixels caben en una pulgada.",
      },
      {
        question: "¿Qué DPI debo usar para diseño web?",
        answer:
          "El DPI estándar para diseño web es 96 DPI, que es el valor predeterminado en la mayoría de las pantallas Windows. Las pantallas Mac Retina usan una densidad de pixels mayor, pero los pixels CSS siguen mapeándose a 96 DPI en el renderizado web estándar.",
      },
      {
        question: "¿Qué DPI se usa para diseño de impresión?",
        answer:
          "La impresión profesional generalmente usa 300 DPI para una salida de alta calidad. La impresión de revistas puede usar 300-350 DPI, mientras que la impresión de periódicos puede usar 150-200 DPI. Cuanto mayor sea el DPI, menor será el tamaño físico para la misma cantidad de pixels.",
      },
      {
        question:
          "¿Por qué la misma cantidad de pixels produce diferentes valores en pulgadas a diferentes DPI?",
        answer:
          "El DPI define qué tan densamente se empaquetan los pixels por pulgada. A 96 DPI, 960 pixels abarcan 10 pulgadas. A 300 DPI, esos mismos 960 pixels abarcan solo 3.2 pulgadas porque cada pulgada contiene más pixels.",
      },
      {
        question: "¿Cuántos pixels hay en una pulgada?",
        answer:
          "Depende de la configuración de DPI. A 96 DPI (estándar web), una pulgada equivale a 96 pixels. A 72 DPI, una pulgada equivale a 72 pixels. A 300 DPI (estándar de impresión), una pulgada equivale a 300 pixels.",
      },
    ],
    body: {
      heading1: "Cómo funciona la conversión de pixels a pulgadas",
      p1: "Convertir pixels a pulgadas requiere conocer el DPI (puntos por pulgada) de tu salida objetivo. El DPI define cuántos pixels se empaquetan en cada pulgada física. La fórmula es sencilla:",
      formula: "Pulgadas = Pixels / DPI",
      p2: "Para diseño web, el estándar es 96 DPI. Para impresión profesional, 300 DPI es la norma. Elegir el DPI correcto garantiza que tus diseños se muestren en el tamaño físico previsto.",
      heading2: "Casos de uso comunes",
      li1: "Diseño de impresión: Determina el tamaño físico de una imagen digital al imprimirla a un DPI específico.",
      li2: "Conversión web a impresión: Verifica cómo los gráficos web se traducirán a dimensiones físicas de impresión.",
      li3: "Impresión de fotos: Calcula el tamaño máximo de impresión manteniendo la calidad a 300 DPI.",
      li4: "Dimensionamiento de pantalla: Comprende cómo el contenido de pantalla se corresponde con medidas del mundo real.",
      heading3: "Guía de referencia de DPI",
      li5: "72 DPI - Resolución de pantalla Mac heredada, común en gráficos web antiguos.",
      li6: "96 DPI - Valor predeterminado de Windows, estándar para diseño web moderno.",
      li7: "150 DPI - Impresión de calidad media, adecuada para pósters de gran formato.",
      li8: "300 DPI - Calidad de impresión profesional para folletos, revistas y fotos.",
      heading4: "¿Cuántos pixels hay en una pulgada?",
      p3: "La cantidad de pixels en una pulgada depende completamente de la configuración de DPI. A 96 DPI (el estándar web usado por Windows y la mayoría de los navegadores), una pulgada contiene exactamente 96 pixels. A 72 DPI (el estándar heredado de Mac), una pulgada contiene 72 pixels. A 300 DPI (impresión profesional), una pulgada empaqueta 300 pixels en el mismo espacio físico. Esto significa que una imagen de 300 DPI se ve mucho más nítida que una de 96 DPI al imprimirse en el mismo tamaño, porque cada pulgada contiene más de 3 veces más datos de pixels.",
      heading5: "Anchos de pixels comunes convertidos a pulgadas",
      p4: "La tabla a continuación muestra cómo las dimensiones de pixels comunes se traducen a pulgadas tanto a 96 DPI (web) como a 300 DPI (impresión). Estos valores te ayudan a estimar rápidamente los tamaños físicos sin cálculo manual.",
      li9: "640 px - 6.67 pulgadas a 96 DPI, 2.13 pulgadas a 300 DPI",
      li10: "800 px - 8.33 pulgadas a 96 DPI, 2.67 pulgadas a 300 DPI",
      li11: "1024 px - 10.67 pulgadas a 96 DPI, 3.41 pulgadas a 300 DPI",
      li12: "1080 px - 11.25 pulgadas a 96 DPI, 3.6 pulgadas a 300 DPI",
      li13: "1920 px - 20 pulgadas a 96 DPI, 6.4 pulgadas a 300 DPI",
      li14: "3840 px - 40 pulgadas a 96 DPI, 12.8 pulgadas a 300 DPI",
      heading6: "¿Cuándo necesitas convertir pixels a pulgadas?",
      p5: "La conversión de pixels a pulgadas surge regularmente en cuatro situaciones. Primero, preparación para impresión: antes de enviar un archivo digital a una impresora, necesitas confirmar que la imagen se imprimirá en las dimensiones físicas correctas. Segundo, impresión de fotos: saber que una foto de 3000x2000 pixels se imprime a 10x6.67 pulgadas a 300 DPI te ayuda a elegir el tamaño de papel correcto. Tercero, señalización de gran formato: los diseñadores de banners y pósters usan valores de DPI más bajos (100-150) porque los espectadores están más lejos, haciendo que cada pixel se extienda por más espacio físico. Cuarto, flujos de trabajo web a impresión: los diseñadores que reutilizan recursos web para folletos o tarjetas de visita necesitan verificar que los gráficos de pantalla a 96 DPI tienen suficiente resolución para una salida de impresión a 300 DPI.",
    },
  },

  fr: {
    faq: [
      {
        question: "Comment convertir des pixels en pouces ?",
        answer:
          "Divisez le nombre de pixels par le DPI (points par pouce). Par exemple, 960 pixels à 96 DPI équivalent à 10 pouces (960 / 96 = 10). Le DPI détermine combien de pixels tiennent dans un pouce.",
      },
      {
        question: "Quel DPI utiliser pour le design web ?",
        answer:
          "Le DPI standard pour le design web est 96 DPI, qui est la valeur par défaut sur la plupart des écrans Windows. Les écrans Mac Retina utilisent une densité de pixels plus élevée, mais les pixels CSS correspondent toujours à 96 DPI dans le rendu web standard.",
      },
      {
        question: "Quel DPI est utilisé pour le design d'impression ?",
        answer:
          "L'impression professionnelle utilise généralement 300 DPI pour une sortie de haute qualité. L'impression de magazines peut utiliser 300-350 DPI, tandis que l'impression de journaux peut utiliser 150-200 DPI. Plus le DPI est élevé, plus la taille physique est petite pour le même nombre de pixels.",
      },
      {
        question:
          "Pourquoi le même nombre de pixels produit-il des valeurs en pouces différentes à différents DPI ?",
        answer:
          "Le DPI définit la densité de pixels par pouce. À 96 DPI, 960 pixels couvrent 10 pouces. À 300 DPI, ces mêmes 960 pixels ne couvrent que 3.2 pouces car chaque pouce contient plus de pixels.",
      },
      {
        question: "Combien de pixels y a-t-il dans un pouce ?",
        answer:
          "Cela dépend du réglage DPI. À 96 DPI (standard web), un pouce équivaut à 96 pixels. À 72 DPI, un pouce équivaut à 72 pixels. À 300 DPI (standard d'impression), un pouce équivaut à 300 pixels.",
      },
    ],
    body: {
      heading1: "Comment fonctionne la conversion pixels vers pouces",
      p1: "Convertir des pixels en pouces nécessite de connaître le DPI (points par pouce) de votre sortie cible. Le DPI définit combien de pixels sont contenus dans chaque pouce physique. La formule est simple :",
      formula: "Pouces = Pixels / DPI",
      p2: "Pour le design web, le standard est 96 DPI. Pour l'impression professionnelle, 300 DPI est la norme. Choisir le bon DPI garantit que vos créations s'affichent à la taille physique prévue.",
      heading2: "Cas d'utilisation courants",
      li1: "Design d'impression : Déterminez la taille physique d'une image numérique lors de l'impression à un DPI spécifique.",
      li2: "Conversion web vers impression : Vérifiez comment les graphiques web se traduiront en dimensions d'impression physiques.",
      li3: "Impression photo : Calculez la taille d'impression maximale tout en maintenant la qualité à 300 DPI.",
      li4: "Dimensionnement d'écran : Comprenez comment le contenu à l'écran correspond aux mesures réelles.",
      heading3: "Guide de référence DPI",
      li5: "72 DPI - Résolution d'écran Mac héritée, courante pour les anciens graphiques web.",
      li6: "96 DPI - Valeur par défaut Windows, standard pour le design web moderne.",
      li7: "150 DPI - Impression de qualité moyenne, adaptée aux affiches grand format.",
      li8: "300 DPI - Qualité d'impression professionnelle pour brochures, magazines et photos.",
      heading4: "Combien de pixels dans un pouce ?",
      p3: "Le nombre de pixels dans un pouce dépend entièrement du réglage DPI. À 96 DPI (le standard web utilisé par Windows et la plupart des navigateurs), un pouce contient exactement 96 pixels. À 72 DPI (l'ancien standard Mac), un pouce contient 72 pixels. À 300 DPI (impression professionnelle), un pouce contient 300 pixels dans le même espace physique. Cela signifie qu'une image à 300 DPI apparaît beaucoup plus nette qu'une image à 96 DPI imprimée à la même taille, car chaque pouce contient plus de 3 fois plus de données de pixels.",
      heading5: "Largeurs de pixels courantes converties en pouces",
      p4: "Le tableau ci-dessous montre comment les dimensions de pixels courantes se traduisent en pouces à 96 DPI (web) et 300 DPI (impression). Ces valeurs vous aident à estimer rapidement les tailles physiques sans calcul manuel.",
      li9: "640 px - 6.67 pouces à 96 DPI, 2.13 pouces à 300 DPI",
      li10: "800 px - 8.33 pouces à 96 DPI, 2.67 pouces à 300 DPI",
      li11: "1024 px - 10.67 pouces à 96 DPI, 3.41 pouces à 300 DPI",
      li12: "1080 px - 11.25 pouces à 96 DPI, 3.6 pouces à 300 DPI",
      li13: "1920 px - 20 pouces à 96 DPI, 6.4 pouces à 300 DPI",
      li14: "3840 px - 40 pouces à 96 DPI, 12.8 pouces à 300 DPI",
      heading6: "Quand faut-il convertir des pixels en pouces ?",
      p5: "La conversion pixels vers pouces revient régulièrement dans quatre situations. Premièrement, la préparation à l'impression : avant d'envoyer un fichier numérique à une imprimante, vous devez confirmer que l'image s'imprimera aux bonnes dimensions physiques. Deuxièmement, l'impression photo : savoir qu'une photo de 3000x2000 pixels s'imprime à 10x6.67 pouces à 300 DPI vous aide à choisir le bon format de papier. Troisièmement, la signalétique grand format : les concepteurs de banderoles et d'affiches utilisent des valeurs DPI plus basses (100-150) car les spectateurs se tiennent plus loin, ce qui fait que chaque pixel s'étend sur plus d'espace physique. Quatrièmement, les flux de travail web vers impression : les designers qui réutilisent des ressources web pour des brochures ou des cartes de visite doivent vérifier que les graphiques d'écran à 96 DPI ont une résolution suffisante pour une sortie d'impression à 300 DPI.",
    },
  },

  de: {
    faq: [
      {
        question: "Wie konvertiere ich Pixels in Zoll?",
        answer:
          "Teilen Sie die Anzahl der Pixels durch den DPI-Wert (Punkte pro Zoll). Zum Beispiel entsprechen 960 Pixels bei 96 DPI 10 Zoll (960 / 96 = 10). Der DPI-Wert bestimmt, wie viele Pixels in einen Zoll passen.",
      },
      {
        question: "Welchen DPI-Wert sollte ich für Webdesign verwenden?",
        answer:
          "Der Standard-DPI für Webdesign ist 96 DPI, der Standardwert auf den meisten Windows-Bildschirmen. Mac Retina-Displays verwenden eine höhere Pixeldichte, aber CSS-Pixels werden im Standard-Webrendering weiterhin auf 96 DPI abgebildet.",
      },
      {
        question: "Welcher DPI-Wert wird für Druckdesign verwendet?",
        answer:
          "Professioneller Druck verwendet typischerweise 300 DPI für hochwertige Ausgaben. Zeitschriftendruck kann 300-350 DPI verwenden, während Zeitungsdruck 150-200 DPI nutzen kann. Je höher der DPI-Wert, desto kleiner die physische Größe bei gleicher Pixelanzahl.",
      },
      {
        question:
          "Warum ergibt die gleiche Pixelanzahl bei unterschiedlichen DPI-Werten verschiedene Zollwerte?",
        answer:
          "DPI definiert, wie dicht Pixels pro Zoll gepackt werden. Bei 96 DPI erstrecken sich 960 Pixels über 10 Zoll. Bei 300 DPI erstrecken sich dieselben 960 Pixels nur über 3.2 Zoll, weil jeder Zoll mehr Pixels enthält.",
      },
      {
        question: "Wie viele Pixels sind in einem Zoll?",
        answer:
          "Das hängt von der DPI-Einstellung ab. Bei 96 DPI (Webstandard) entspricht ein Zoll 96 Pixels. Bei 72 DPI entspricht ein Zoll 72 Pixels. Bei 300 DPI (Druckstandard) entspricht ein Zoll 300 Pixels.",
      },
    ],
    body: {
      heading1: "So funktioniert die Umrechnung von Pixels in Zoll",
      p1: "Die Umrechnung von Pixels in Zoll erfordert die Kenntnis des DPI-Werts (Punkte pro Zoll) Ihrer Zielausgabe. DPI definiert, wie viele Pixels in jeden physischen Zoll gepackt werden. Die Formel ist einfach:",
      formula: "Zoll = Pixels / DPI",
      p2: "Für Webdesign ist 96 DPI der Standard. Für professionellen Druck sind 300 DPI die Norm. Die richtige DPI-Wahl stellt sicher, dass Ihre Designs in der beabsichtigten physischen Größe angezeigt werden.",
      heading2: "Häufige Anwendungsfälle",
      li1: "Druckdesign: Bestimmen Sie die physische Größe eines digitalen Bildes beim Drucken mit einem bestimmten DPI-Wert.",
      li2: "Web-zu-Druck-Konvertierung: Prüfen Sie, wie Webgrafiken in physische Druckabmessungen übertragen werden.",
      li3: "Fotodruck: Berechnen Sie die maximale Druckgröße bei gleichzeitiger Qualitätserhaltung mit 300 DPI.",
      li4: "Bildschirmgrößen: Verstehen Sie, wie Bildschirminhalte realen Maßen entsprechen.",
      heading3: "DPI-Referenzleitfaden",
      li5: "72 DPI - Ältere Mac-Bildschirmauflösung, verbreitet bei älteren Webgrafiken.",
      li6: "96 DPI - Windows-Standard, üblich für modernes Webdesign.",
      li7: "150 DPI - Mittlere Druckqualität, geeignet für großformatige Poster.",
      li8: "300 DPI - Professionelle Druckqualität für Broschüren, Zeitschriften und Fotos.",
      heading4: "Wie viele Pixels sind in einem Zoll?",
      p3: "Die Anzahl der Pixels in einem Zoll hängt vollständig von der DPI-Einstellung ab. Bei 96 DPI (dem Webstandard von Windows und den meisten Browsern) enthält ein Zoll genau 96 Pixels. Bei 72 DPI (dem alten Mac-Standard) enthält ein Zoll 72 Pixels. Bei 300 DPI (professioneller Druck) werden 300 Pixels in denselben physischen Raum gepackt. Das bedeutet, dass ein 300 DPI-Bild deutlich schärfer aussieht als ein 96 DPI-Bild, wenn es in derselben Größe gedruckt wird, da jeder Zoll über dreimal mehr Pixeldaten enthält.",
      heading5: "Gängige Pixelbreiten umgerechnet in Zoll",
      p4: "Die folgende Tabelle zeigt, wie gängige Pixelabmessungen sowohl bei 96 DPI (Web) als auch bei 300 DPI (Druck) in Zoll übersetzt werden. Diese Werte helfen Ihnen, physische Größen schnell ohne manuelle Berechnung abzuschätzen.",
      li9: "640 px - 6.67 Zoll bei 96 DPI, 2.13 Zoll bei 300 DPI",
      li10: "800 px - 8.33 Zoll bei 96 DPI, 2.67 Zoll bei 300 DPI",
      li11: "1024 px - 10.67 Zoll bei 96 DPI, 3.41 Zoll bei 300 DPI",
      li12: "1080 px - 11.25 Zoll bei 96 DPI, 3.6 Zoll bei 300 DPI",
      li13: "1920 px - 20 Zoll bei 96 DPI, 6.4 Zoll bei 300 DPI",
      li14: "3840 px - 40 Zoll bei 96 DPI, 12.8 Zoll bei 300 DPI",
      heading6: "Wann müssen Sie Pixels in Zoll umrechnen?",
      p5: "Die Umrechnung von Pixels in Zoll kommt regelmäßig in vier Situationen vor. Erstens, Druckvorbereitung: Bevor Sie eine digitale Datei an einen Drucker senden, müssen Sie sicherstellen, dass das Bild in den korrekten physischen Abmessungen gedruckt wird. Zweitens, Fotodruck: Zu wissen, dass ein 3000x2000 Pixel-Foto bei 300 DPI 10x6.67 Zoll groß gedruckt wird, hilft bei der Wahl der richtigen Papiergröße. Drittens, Großformatschilder: Banner- und Posterdesigner verwenden niedrigere DPI-Werte (100-150), weil Betrachter weiter entfernt stehen und jeder Pixel sich über mehr physischen Raum erstreckt. Viertens, Web-zu-Druck-Workflows: Designer, die Webressourcen für Broschüren oder Visitenkarten wiederverwenden, müssen überprüfen, ob 96 DPI-Bildschirmgrafiken genügend Auflösung für eine 300 DPI-Druckausgabe haben.",
    },
  },

  pt: {
    faq: [
      {
        question: "Como converto pixels para polegadas?",
        answer:
          "Divida o número de pixels pelo DPI (pontos por polegada). Por exemplo, 960 pixels a 96 DPI equivalem a 10 polegadas (960 / 96 = 10). O DPI determina quantos pixels cabem em uma polegada.",
      },
      {
        question: "Qual DPI devo usar para design web?",
        answer:
          "O DPI padrão para design web é 96 DPI, que é o padrão na maioria das telas Windows. As telas Mac Retina usam uma densidade de pixels maior, mas os pixels CSS ainda mapeiam para 96 DPI na renderização web padrão.",
      },
      {
        question: "Qual DPI é usado para design de impressão?",
        answer:
          "A impressão profissional geralmente usa 300 DPI para saída de alta qualidade. A impressão de revistas pode usar 300-350 DPI, enquanto a impressão de jornais pode usar 150-200 DPI. Quanto maior o DPI, menor o tamanho físico para a mesma quantidade de pixels.",
      },
      {
        question:
          "Por que a mesma quantidade de pixels produz valores em polegadas diferentes em DPIs diferentes?",
        answer:
          "O DPI define quão densamente os pixels são empacotados por polegada. A 96 DPI, 960 pixels abrangem 10 polegadas. A 300 DPI, esses mesmos 960 pixels abrangem apenas 3.2 polegadas porque cada polegada contém mais pixels.",
      },
      {
        question: "Quantos pixels existem em uma polegada?",
        answer:
          "Depende da configuração de DPI. A 96 DPI (padrão web), uma polegada equivale a 96 pixels. A 72 DPI, uma polegada equivale a 72 pixels. A 300 DPI (padrão de impressão), uma polegada equivale a 300 pixels.",
      },
    ],
    body: {
      heading1: "Como funciona a conversão de pixels para polegadas",
      p1: "Converter pixels para polegadas requer conhecer o DPI (pontos por polegada) da sua saída alvo. O DPI define quantos pixels são empacotados em cada polegada física. A fórmula é simples:",
      formula: "Polegadas = Pixels / DPI",
      p2: "Para design web, o padrão é 96 DPI. Para impressão profissional, 300 DPI é a norma. Escolher o DPI correto garante que seus designs sejam exibidos no tamanho físico pretendido.",
      heading2: "Casos de uso comuns",
      li1: "Design de impressão: Determine o tamanho físico de uma imagem digital ao imprimi-la em um DPI específico.",
      li2: "Conversão web para impressão: Verifique como os gráficos web se traduzirão em dimensões físicas de impressão.",
      li3: "Impressão de fotos: Calcule o tamanho máximo de impressão mantendo a qualidade a 300 DPI.",
      li4: "Dimensionamento de tela: Entenda como o conteúdo da tela corresponde às medidas do mundo real.",
      heading3: "Guia de referência de DPI",
      li5: "72 DPI - Resolução de tela Mac legada, comum em gráficos web antigos.",
      li6: "96 DPI - Padrão do Windows, standard para design web moderno.",
      li7: "150 DPI - Impressão de qualidade média, adequada para pôsteres de grande formato.",
      li8: "300 DPI - Qualidade de impressão profissional para folhetos, revistas e fotos.",
      heading4: "Quantos pixels existem em uma polegada?",
      p3: "O número de pixels em uma polegada depende inteiramente da configuração de DPI. A 96 DPI (o padrão web usado pelo Windows e pela maioria dos navegadores), uma polegada contém exatamente 96 pixels. A 72 DPI (o padrão legado do Mac), uma polegada contém 72 pixels. A 300 DPI (impressão profissional), uma polegada empacota 300 pixels no mesmo espaço físico. Isso significa que uma imagem de 300 DPI aparece muito mais nítida do que uma imagem de 96 DPI quando impressa no mesmo tamanho, porque cada polegada contém mais de 3 vezes mais dados de pixels.",
      heading5: "Larguras de pixels comuns convertidas para polegadas",
      p4: "A tabela abaixo mostra como as dimensões de pixels comuns se traduzem em polegadas tanto a 96 DPI (web) quanto a 300 DPI (impressão). Esses valores ajudam você a estimar rapidamente os tamanhos físicos sem cálculo manual.",
      li9: "640 px - 6.67 polegadas a 96 DPI, 2.13 polegadas a 300 DPI",
      li10: "800 px - 8.33 polegadas a 96 DPI, 2.67 polegadas a 300 DPI",
      li11: "1024 px - 10.67 polegadas a 96 DPI, 3.41 polegadas a 300 DPI",
      li12: "1080 px - 11.25 polegadas a 96 DPI, 3.6 polegadas a 300 DPI",
      li13: "1920 px - 20 polegadas a 96 DPI, 6.4 polegadas a 300 DPI",
      li14: "3840 px - 40 polegadas a 96 DPI, 12.8 polegadas a 300 DPI",
      heading6: "Quando você precisa converter pixels para polegadas?",
      p5: "A conversão de pixels para polegadas surge regularmente em quatro situações. Primeiro, preparação para impressão: antes de enviar um arquivo digital para uma impressora, você precisa confirmar que a imagem será impressa nas dimensões físicas corretas. Segundo, impressão de fotos: saber que uma foto de 3000x2000 pixels é impressa a 10x6.67 polegadas a 300 DPI ajuda a escolher o tamanho de papel correto. Terceiro, sinalização de grande formato: designers de banners e pôsteres usam valores de DPI mais baixos (100-150) porque os espectadores ficam mais longe, fazendo cada pixel se estender por mais espaço físico. Quarto, fluxos de trabalho web para impressão: designers que reutilizam recursos web para folhetos ou cartões de visita precisam verificar que os gráficos de tela a 96 DPI têm resolução suficiente para saída de impressão a 300 DPI.",
    },
  },

  hi: {
    faq: [
      {
        question: "मैं pixels को inches में कैसे बदलूं?",
        answer:
          "Pixels की संख्या को DPI (dots per inch) से विभाजित करें। उदाहरण के लिए, 96 DPI पर 960 pixels 10 inches के बराबर होते हैं (960 / 96 = 10)। DPI यह निर्धारित करता है कि एक inch में कितने pixels आते हैं।",
      },
      {
        question: "वेब डिज़ाइन के लिए कौन सा DPI उपयोग करना चाहिए?",
        answer:
          "वेब डिज़ाइन के लिए मानक DPI 96 DPI है, जो अधिकांश Windows डिस्प्ले पर डिफ़ॉल्ट है। Mac Retina डिस्प्ले उच्च pixel घनत्व का उपयोग करते हैं, लेकिन CSS pixels अभी भी मानक वेब रेंडरिंग में 96 DPI पर मैप होते हैं।",
      },
      {
        question: "प्रिंट डिज़ाइन के लिए कौन सा DPI उपयोग होता है?",
        answer:
          "पेशेवर प्रिंट आमतौर पर उच्च गुणवत्ता वाले आउटपुट के लिए 300 DPI का उपयोग करता है। पत्रिका मुद्रण 300-350 DPI का उपयोग कर सकता है, जबकि अखबार मुद्रण 150-200 DPI का उपयोग कर सकता है। DPI जितना अधिक होगा, समान pixel संख्या के लिए भौतिक आकार उतना छोटा होगा।",
      },
      {
        question:
          "एक ही pixel संख्या अलग-अलग DPI पर अलग-अलग inch मान क्यों देती है?",
        answer:
          "DPI यह परिभाषित करता है कि प्रति inch कितने घने pixels पैक किए जाते हैं। 96 DPI पर, 960 pixels 10 inches में फैलते हैं। 300 DPI पर, वही 960 pixels केवल 3.2 inches में फैलते हैं क्योंकि प्रत्येक inch में अधिक pixels होते हैं।",
      },
      {
        question: "एक inch में कितने pixels होते हैं?",
        answer:
          "यह DPI सेटिंग पर निर्भर करता है। 96 DPI (वेब मानक) पर, एक inch 96 pixels के बराबर होता है। 72 DPI पर, एक inch 72 pixels के बराबर होता है। 300 DPI (प्रिंट मानक) पर, एक inch 300 pixels के बराबर होता है।",
      },
    ],
    body: {
      heading1: "Pixel से Inch रूपांतरण कैसे काम करता है",
      p1: "Pixels को inches में बदलने के लिए आपके लक्ष्य आउटपुट का DPI (dots per inch) जानना आवश्यक है। DPI यह परिभाषित करता है कि प्रत्येक भौतिक inch में कितने pixels पैक किए जाते हैं। सूत्र सरल है:",
      formula: "Inches = Pixels / DPI",
      p2: "वेब डिज़ाइन के लिए, मानक 96 DPI है। पेशेवर प्रिंट के लिए, 300 DPI सामान्य है। सही DPI चुनना सुनिश्चित करता है कि आपके डिज़ाइन इच्छित भौतिक आकार में प्रदर्शित हों।",
      heading2: "सामान्य उपयोग के मामले",
      li1: "प्रिंट डिज़ाइन: किसी विशिष्ट DPI पर मुद्रित होने पर डिजिटल छवि का भौतिक आकार निर्धारित करें।",
      li2: "वेब-से-प्रिंट रूपांतरण: जांचें कि वेब ग्राफ़िक्स भौतिक प्रिंट आयामों में कैसे बदलेंगे।",
      li3: "फोटो प्रिंटिंग: 300 DPI पर गुणवत्ता बनाए रखते हुए अधिकतम प्रिंट आकार की गणना करें।",
      li4: "डिस्प्ले साइज़िंग: समझें कि स्क्रीन सामग्री वास्तविक दुनिया के मापों से कैसे मेल खाती है।",
      heading3: "DPI संदर्भ गाइड",
      li5: "72 DPI - पुरानी Mac स्क्रीन रिज़ॉल्यूशन, पुराने वेब ग्राफ़िक्स में आम।",
      li6: "96 DPI - Windows डिफ़ॉल्ट, आधुनिक वेब डिज़ाइन के लिए मानक।",
      li7: "150 DPI - मध्यम गुणवत्ता प्रिंट, बड़े प्रारूप वाले पोस्टरों के लिए उपयुक्त।",
      li8: "300 DPI - ब्रोशर, पत्रिकाओं और फ़ोटो के लिए पेशेवर प्रिंट गुणवत्ता।",
      heading4: "एक Inch में कितने Pixels होते हैं?",
      p3: "एक inch में pixels की संख्या पूरी तरह DPI सेटिंग पर निर्भर करती है। 96 DPI (Windows और अधिकांश ब्राउज़रों द्वारा उपयोग किया जाने वाला वेब मानक) पर, एक inch में ठीक 96 pixels होते हैं। 72 DPI (पुराना Mac मानक) पर, एक inch में 72 pixels होते हैं। 300 DPI (पेशेवर प्रिंट) पर, एक inch में उसी भौतिक स्थान में 300 pixels पैक होते हैं। इसका मतलब है कि 300 DPI वाली छवि समान आकार में मुद्रित होने पर 96 DPI वाली छवि से बहुत अधिक तीक्ष्ण दिखती है, क्योंकि प्रत्येक inch में 3 गुना से अधिक pixel डेटा होता है।",
      heading5: "सामान्य Pixel चौड़ाइयां Inches में परिवर्तित",
      p4: "नीचे दी गई तालिका दिखाती है कि सामान्य pixel आयाम 96 DPI (वेब) और 300 DPI (प्रिंट) दोनों पर inches में कैसे बदलते हैं। ये मान आपको मैन्युअल गणना के बिना भौतिक आकार का तुरंत अनुमान लगाने में मदद करते हैं।",
      li9: "640 px - 96 DPI पर 6.67 inches, 300 DPI पर 2.13 inches",
      li10: "800 px - 96 DPI पर 8.33 inches, 300 DPI पर 2.67 inches",
      li11: "1024 px - 96 DPI पर 10.67 inches, 300 DPI पर 3.41 inches",
      li12: "1080 px - 96 DPI पर 11.25 inches, 300 DPI पर 3.6 inches",
      li13: "1920 px - 96 DPI पर 20 inches, 300 DPI पर 6.4 inches",
      li14: "3840 px - 96 DPI पर 40 inches, 300 DPI पर 12.8 inches",
      heading6: "आपको Pixels को Inches में कब बदलने की आवश्यकता है?",
      p5: "Pixel-से-inch रूपांतरण नियमित रूप से चार स्थितियों में सामने आता है। पहला, प्रिंट की तैयारी: किसी डिजिटल फ़ाइल को प्रिंटर पर भेजने से पहले, आपको यह पुष्टि करनी होगी कि छवि सही भौतिक आयामों में मुद्रित होगी। दूसरा, फोटो प्रिंटिंग: यह जानना कि 3000x2000 pixel की फोटो 300 DPI पर 10x6.67 inches में मुद्रित होती है, सही कागज़ आकार चुनने में मदद करता है। तीसरा, बड़े प्रारूप के साइनेज: बैनर और पोस्टर डिज़ाइनर कम DPI मान (100-150) का उपयोग करते हैं क्योंकि दर्शक दूर खड़े होते हैं, जिससे प्रत्येक pixel अधिक भौतिक स्थान में फैलता है। चौथा, वेब-से-प्रिंट वर्कफ़्लो: जो डिज़ाइनर ब्रोशर या विज़िटिंग कार्ड के लिए वेब संसाधनों का पुनः उपयोग करते हैं, उन्हें यह सत्यापित करना होगा कि 96 DPI स्क्रीन ग्राफ़िक्स में 300 DPI प्रिंट आउटपुट के लिए पर्याप्त रिज़ॉल्यूशन है।",
    },
  },

  ja: {
    faq: [
      {
        question: "pixelsをinchesに変換するにはどうすればよいですか？",
        answer:
          "pixels数をDPI（dots per inch）で割ります。例えば、96 DPIで960 pixelsは10 inchesに相当します（960 / 96 = 10）。DPIは1 inchに何pixelsが収まるかを決定します。",
      },
      {
        question: "ウェブデザインにはどのDPIを使用すべきですか？",
        answer:
          "ウェブデザインの標準DPIは96 DPIで、これはほとんどのWindowsディスプレイのデフォルトです。Mac Retinaディスプレイはより高いpixel密度を使用しますが、CSS pixelsは標準的なウェブレンダリングでは依然として96 DPIにマッピングされます。",
      },
      {
        question: "印刷デザインにはどのDPIが使用されますか？",
        answer:
          "プロの印刷では通常、高品質な出力のために300 DPIを使用します。雑誌印刷では300-350 DPI、新聞印刷では150-200 DPIを使用する場合があります。DPIが高いほど、同じpixel数でも物理サイズは小さくなります。",
      },
      {
        question:
          "同じpixel数なのに、異なるDPIで異なるinch値になるのはなぜですか？",
        answer:
          "DPIは1 inchあたりのpixelの密度を定義します。96 DPIでは、960 pixelsは10 inchesにわたります。300 DPIでは、同じ960 pixelsが3.2 inchesにしかなりません。これは各inchにより多くのpixelsが含まれるためです。",
      },
      {
        question: "1 inchには何pixelsありますか？",
        answer:
          "DPI設定によって異なります。96 DPI（ウェブ標準）では、1 inchは96 pixelsに相当します。72 DPIでは、1 inchは72 pixelsです。300 DPI（印刷標準）では、1 inchは300 pixelsに相当します。",
      },
    ],
    body: {
      heading1: "Pixelからinchへの変換の仕組み",
      p1: "pixelsをinchesに変換するには、ターゲット出力のDPI（dots per inch）を知る必要があります。DPIは各物理inchに何pixelsが詰め込まれるかを定義します。計算式はシンプルです：",
      formula: "Inches = Pixels / DPI",
      p2: "ウェブデザインでは96 DPIが標準です。プロの印刷では300 DPIが一般的です。適切なDPIを選択することで、デザインが意図した物理サイズで表示されます。",
      heading2: "一般的な使用例",
      li1: "印刷デザイン：特定のDPIで印刷した場合のデジタル画像の物理サイズを確認します。",
      li2: "ウェブから印刷への変換：ウェブグラフィックスが物理的な印刷寸法にどのように変換されるかを確認します。",
      li3: "写真印刷：300 DPIで品質を維持しながら最大印刷サイズを計算します。",
      li4: "ディスプレイサイズ：画面コンテンツが実際の測定値にどのように対応するかを理解します。",
      heading3: "DPIリファレンスガイド",
      li5: "72 DPI - 旧来のMac画面解像度、古いウェブグラフィックスで一般的。",
      li6: "96 DPI - Windowsのデフォルト、現代のウェブデザインの標準。",
      li7: "150 DPI - 中品質印刷、大判ポスターに適しています。",
      li8: "300 DPI - パンフレット、雑誌、写真向けのプロ印刷品質。",
      heading4: "1 Inchに何Pixelsありますか？",
      p3: "1 inch内のpixels数は完全にDPI設定に依存します。96 DPI（WindowsとほとんどのブラウザのWeb標準）では、1 inchにはちょうど96 pixelsが含まれます。72 DPI（旧来のMac標準）では、1 inchに72 pixelsが含まれます。300 DPI（プロ印刷）では、同じ物理スペースに300 pixelsが詰め込まれます。これは、同じサイズで印刷した場合、300 DPIの画像は96 DPIの画像よりもはるかにシャープに見えることを意味します。各inchに3倍以上のpixelデータが含まれているためです。",
      heading5: "一般的なpixel幅のinches換算",
      p4: "以下の表は、一般的なpixel寸法が96 DPI（ウェブ）と300 DPI（印刷）の両方でinchesにどのように変換されるかを示しています。これらの値は、手動計算なしで物理サイズをすばやく推定するのに役立ちます。",
      li9: "640 px - 96 DPIで6.67 inches、300 DPIで2.13 inches",
      li10: "800 px - 96 DPIで8.33 inches、300 DPIで2.67 inches",
      li11: "1024 px - 96 DPIで10.67 inches、300 DPIで3.41 inches",
      li12: "1080 px - 96 DPIで11.25 inches、300 DPIで3.6 inches",
      li13: "1920 px - 96 DPIで20 inches、300 DPIで6.4 inches",
      li14: "3840 px - 96 DPIで40 inches、300 DPIで12.8 inches",
      heading6: "Pixelsをinchesに変換する必要があるのはいつですか？",
      p5: "pixelからinchへの変換は、4つの場面で定期的に必要になります。まず、印刷準備：デジタルファイルをプリンターに送る前に、画像が正しい物理寸法で印刷されることを確認する必要があります。次に、写真印刷：3000x2000 pixelの写真が300 DPIで10x6.67 inchesに印刷されることを知っていれば、適切な用紙サイズを選べます。3つ目に、大判看板：バナーやポスターのデザイナーは、視聴者が離れた場所に立つため、低いDPI値（100-150）を使用し、各pixelがより広い物理スペースに広がります。4つ目に、ウェブから印刷へのワークフロー：パンフレットや名刺にウェブ素材を再利用するデザイナーは、96 DPIの画面グラフィックスに300 DPI印刷出力のための十分な解像度があるか確認する必要があります。",
    },
  },

  ko: {
    faq: [
      {
        question: "pixels를 inches로 어떻게 변환하나요?",
        answer:
          "pixels 수를 DPI(dots per inch)로 나누세요. 예를 들어, 96 DPI에서 960 pixels는 10 inches와 같습니다 (960 / 96 = 10). DPI는 1 inch에 몇 개의 pixels가 들어가는지를 결정합니다.",
      },
      {
        question: "웹 디자인에는 어떤 DPI를 사용해야 하나요?",
        answer:
          "웹 디자인의 표준 DPI는 96 DPI이며, 이는 대부분의 Windows 디스플레이에서 기본값입니다. Mac Retina 디스플레이는 더 높은 pixel 밀도를 사용하지만, CSS pixels는 표준 웹 렌더링에서 여전히 96 DPI에 매핑됩니다.",
      },
      {
        question: "인쇄 디자인에는 어떤 DPI가 사용되나요?",
        answer:
          "전문 인쇄는 일반적으로 고품질 출력을 위해 300 DPI를 사용합니다. 잡지 인쇄는 300-350 DPI를, 신문 인쇄는 150-200 DPI를 사용할 수 있습니다. DPI가 높을수록 동일한 pixel 수에서 물리적 크기는 작아집니다.",
      },
      {
        question:
          "같은 pixel 수가 다른 DPI에서 다른 inch 값을 생성하는 이유는 무엇인가요?",
        answer:
          "DPI는 inch당 pixels가 얼마나 밀집되어 있는지를 정의합니다. 96 DPI에서 960 pixels는 10 inches에 걸칩니다. 300 DPI에서는 같은 960 pixels가 3.2 inches에만 걸치는데, 각 inch에 더 많은 pixels가 포함되기 때문입니다.",
      },
      {
        question: "1 inch에 몇 pixels가 있나요?",
        answer:
          "DPI 설정에 따라 다릅니다. 96 DPI(웹 표준)에서 1 inch는 96 pixels와 같습니다. 72 DPI에서 1 inch는 72 pixels입니다. 300 DPI(인쇄 표준)에서 1 inch는 300 pixels와 같습니다.",
      },
    ],
    body: {
      heading1: "Pixel에서 Inch로의 변환 작동 방식",
      p1: "pixels를 inches로 변환하려면 대상 출력의 DPI(dots per inch)를 알아야 합니다. DPI는 각 물리적 inch에 몇 개의 pixels가 들어가는지를 정의합니다. 공식은 간단합니다:",
      formula: "Inches = Pixels / DPI",
      p2: "웹 디자인에서는 96 DPI가 표준입니다. 전문 인쇄에서는 300 DPI가 일반적입니다. 올바른 DPI를 선택하면 디자인이 의도한 물리적 크기로 표시됩니다.",
      heading2: "일반적인 사용 사례",
      li1: "인쇄 디자인: 특정 DPI로 인쇄할 때 디지털 이미지의 물리적 크기를 확인합니다.",
      li2: "웹-인쇄 변환: 웹 그래픽이 물리적 인쇄 치수로 어떻게 변환되는지 확인합니다.",
      li3: "사진 인쇄: 300 DPI에서 품질을 유지하면서 최대 인쇄 크기를 계산합니다.",
      li4: "디스플레이 크기: 화면 콘텐츠가 실제 측정값과 어떻게 대응하는지 이해합니다.",
      heading3: "DPI 참조 가이드",
      li5: "72 DPI - 레거시 Mac 화면 해상도, 오래된 웹 그래픽에서 일반적.",
      li6: "96 DPI - Windows 기본값, 현대 웹 디자인의 표준.",
      li7: "150 DPI - 중간 품질 인쇄, 대형 포스터에 적합.",
      li8: "300 DPI - 브로셔, 잡지, 사진을 위한 전문 인쇄 품질.",
      heading4: "1 Inch에 몇 Pixels가 있나요?",
      p3: "1 inch의 pixels 수는 전적으로 DPI 설정에 따라 달라집니다. 96 DPI(Windows와 대부분의 브라우저가 사용하는 웹 표준)에서 1 inch에는 정확히 96 pixels가 포함됩니다. 72 DPI(레거시 Mac 표준)에서 1 inch에는 72 pixels가 포함됩니다. 300 DPI(전문 인쇄)에서는 같은 물리적 공간에 300 pixels가 들어갑니다. 이는 같은 크기로 인쇄할 때 300 DPI 이미지가 96 DPI 이미지보다 훨씬 선명하게 보인다는 것을 의미합니다. 각 inch에 3배 이상의 pixel 데이터가 포함되기 때문입니다.",
      heading5: "일반적인 Pixel 너비의 Inches 변환",
      p4: "아래 표는 일반적인 pixel 치수가 96 DPI(웹)와 300 DPI(인쇄) 모두에서 inches로 어떻게 변환되는지 보여줍니다. 이 값들은 수동 계산 없이 물리적 크기를 빠르게 추정하는 데 도움이 됩니다.",
      li9: "640 px - 96 DPI에서 6.67 inches, 300 DPI에서 2.13 inches",
      li10: "800 px - 96 DPI에서 8.33 inches, 300 DPI에서 2.67 inches",
      li11: "1024 px - 96 DPI에서 10.67 inches, 300 DPI에서 3.41 inches",
      li12: "1080 px - 96 DPI에서 11.25 inches, 300 DPI에서 3.6 inches",
      li13: "1920 px - 96 DPI에서 20 inches, 300 DPI에서 6.4 inches",
      li14: "3840 px - 96 DPI에서 40 inches, 300 DPI에서 12.8 inches",
      heading6: "Pixels를 Inches로 변환해야 하는 경우는?",
      p5: "pixel에서 inch로의 변환은 네 가지 상황에서 정기적으로 필요합니다. 첫째, 인쇄 준비: 디지털 파일을 프린터에 보내기 전에 이미지가 올바른 물리적 치수로 인쇄되는지 확인해야 합니다. 둘째, 사진 인쇄: 3000x2000 pixel 사진이 300 DPI에서 10x6.67 inches로 인쇄된다는 것을 알면 올바른 용지 크기를 선택하는 데 도움이 됩니다. 셋째, 대형 간판: 배너와 포스터 디자이너는 관람자가 더 멀리 서 있기 때문에 낮은 DPI 값(100-150)을 사용하여 각 pixel이 더 넓은 물리적 공간에 걸치게 합니다. 넷째, 웹-인쇄 워크플로: 브로셔나 명함에 웹 자산을 재사용하는 디자이너는 96 DPI 화면 그래픽이 300 DPI 인쇄 출력에 충분한 해상도를 가지고 있는지 확인해야 합니다.",
    },
  },

  it: {
    faq: [
      {
        question: "Come converto i pixels in pollici?",
        answer:
          "Dividi il numero di pixels per il DPI (punti per pollice). Ad esempio, 960 pixels a 96 DPI equivalgono a 10 pollici (960 / 96 = 10). Il DPI determina quanti pixels entrano in un pollice.",
      },
      {
        question: "Quale DPI dovrei usare per il web design?",
        answer:
          "Il DPI standard per il web design è 96 DPI, che è il valore predefinito sulla maggior parte dei display Windows. I display Mac Retina utilizzano una densità di pixels maggiore, ma i pixels CSS vengono comunque mappati a 96 DPI nel rendering web standard.",
      },
      {
        question: "Quale DPI viene usato per il design di stampa?",
        answer:
          "La stampa professionale utilizza tipicamente 300 DPI per un output di alta qualità. La stampa di riviste può utilizzare 300-350 DPI, mentre la stampa di giornali può usare 150-200 DPI. Più alto è il DPI, più piccola sarà la dimensione fisica per lo stesso numero di pixels.",
      },
      {
        question:
          "Perché lo stesso numero di pixels produce valori in pollici diversi a DPI diversi?",
        answer:
          "Il DPI definisce quanto densamente i pixels sono raggruppati per pollice. A 96 DPI, 960 pixels coprono 10 pollici. A 300 DPI, gli stessi 960 pixels coprono solo 3.2 pollici perché ogni pollice contiene più pixels.",
      },
      {
        question: "Quanti pixels ci sono in un pollice?",
        answer:
          "Dipende dall'impostazione DPI. A 96 DPI (standard web), un pollice equivale a 96 pixels. A 72 DPI, un pollice equivale a 72 pixels. A 300 DPI (standard di stampa), un pollice equivale a 300 pixels.",
      },
    ],
    body: {
      heading1: "Come funziona la conversione da pixel a pollice",
      p1: "Convertire pixels in pollici richiede di conoscere il DPI (punti per pollice) del tuo output di destinazione. Il DPI definisce quanti pixels sono contenuti in ogni pollice fisico. La formula è semplice:",
      formula: "Pollici = Pixels / DPI",
      p2: "Per il web design, lo standard è 96 DPI. Per la stampa professionale, 300 DPI è la norma. Scegliere il DPI giusto garantisce che i tuoi design vengano visualizzati alla dimensione fisica prevista.",
      heading2: "Casi d'uso comuni",
      li1: "Design di stampa: Determina la dimensione fisica di un'immagine digitale quando stampata a un DPI specifico.",
      li2: "Conversione web-stampa: Verifica come i grafici web si tradurranno in dimensioni fisiche di stampa.",
      li3: "Stampa fotografica: Calcola la dimensione massima di stampa mantenendo la qualità a 300 DPI.",
      li4: "Dimensionamento del display: Comprendi come il contenuto sullo schermo corrisponde alle misure reali.",
      heading3: "Guida di riferimento DPI",
      li5: "72 DPI - Risoluzione schermo Mac legacy, comune per grafici web più vecchi.",
      li6: "96 DPI - Predefinito Windows, standard per il web design moderno.",
      li7: "150 DPI - Stampa di qualità media, adatta per poster di grande formato.",
      li8: "300 DPI - Qualità di stampa professionale per brochure, riviste e foto.",
      heading4: "Quanti Pixels ci sono in un Pollice?",
      p3: "Il numero di pixels in un pollice dipende interamente dall'impostazione DPI. A 96 DPI (lo standard web usato da Windows e dalla maggior parte dei browser), un pollice contiene esattamente 96 pixels. A 72 DPI (il vecchio standard Mac), un pollice contiene 72 pixels. A 300 DPI (stampa professionale), un pollice contiene 300 pixels nello stesso spazio fisico. Questo significa che un'immagine a 300 DPI appare molto più nitida di un'immagine a 96 DPI quando stampata alla stessa dimensione, perché ogni pollice contiene oltre 3 volte più dati di pixels.",
      heading5: "Larghezze di pixels comuni convertite in pollici",
      p4: "La tabella sottostante mostra come le dimensioni comuni in pixels si traducono in pollici sia a 96 DPI (web) che a 300 DPI (stampa). Questi valori ti aiutano a stimare rapidamente le dimensioni fisiche senza calcoli manuali.",
      li9: "640 px - 6.67 pollici a 96 DPI, 2.13 pollici a 300 DPI",
      li10: "800 px - 8.33 pollici a 96 DPI, 2.67 pollici a 300 DPI",
      li11: "1024 px - 10.67 pollici a 96 DPI, 3.41 pollici a 300 DPI",
      li12: "1080 px - 11.25 pollici a 96 DPI, 3.6 pollici a 300 DPI",
      li13: "1920 px - 20 pollici a 96 DPI, 6.4 pollici a 300 DPI",
      li14: "3840 px - 40 pollici a 96 DPI, 12.8 pollici a 300 DPI",
      heading6: "Quando è necessario convertire Pixels in Pollici?",
      p5: "La conversione da pixel a pollice si presenta regolarmente in quattro situazioni. Primo, preparazione alla stampa: prima di inviare un file digitale a una stampante, è necessario confermare che l'immagine verrà stampata nelle dimensioni fisiche corrette. Secondo, stampa fotografica: sapere che una foto da 3000x2000 pixels si stampa a 10x6.67 pollici a 300 DPI aiuta a scegliere il formato carta giusto. Terzo, segnaletica di grande formato: i designer di banner e poster usano valori DPI più bassi (100-150) perché gli osservatori si trovano più lontano, facendo sì che ogni pixel si estenda su più spazio fisico. Quarto, flussi di lavoro web-stampa: i designer che riutilizzano risorse web per brochure o biglietti da visita devono verificare che i grafici a schermo a 96 DPI abbiano una risoluzione sufficiente per un output di stampa a 300 DPI.",
    },
  },

  nl: {
    faq: [
      {
        question: "Hoe converteer ik pixels naar inches?",
        answer:
          "Deel het aantal pixels door de DPI (dots per inch). Bijvoorbeeld, 960 pixels bij 96 DPI is gelijk aan 10 inches (960 / 96 = 10). De DPI bepaalt hoeveel pixels in één inch passen.",
      },
      {
        question: "Welke DPI moet ik gebruiken voor webdesign?",
        answer:
          "De standaard DPI voor webdesign is 96 DPI, wat de standaard is op de meeste Windows-beeldschermen. Mac Retina-beeldschermen gebruiken een hogere pixeldichtheid, maar CSS pixels worden in standaard webrendering nog steeds op 96 DPI afgebeeld.",
      },
      {
        question: "Welke DPI wordt gebruikt voor drukwerk?",
        answer:
          "Professioneel drukwerk gebruikt doorgaans 300 DPI voor uitvoer van hoge kwaliteit. Tijdschriftdruk kan 300-350 DPI gebruiken, terwijl krantendruk 150-200 DPI kan gebruiken. Hoe hoger de DPI, hoe kleiner het fysieke formaat bij hetzelfde aantal pixels.",
      },
      {
        question:
          "Waarom levert hetzelfde aantal pixels verschillende inch-waarden op bij verschillende DPI's?",
        answer:
          "DPI bepaalt hoe dicht pixels per inch worden ingepakt. Bij 96 DPI bestrijken 960 pixels 10 inches. Bij 300 DPI bestrijken diezelfde 960 pixels slechts 3.2 inches, omdat elke inch meer pixels bevat.",
      },
      {
        question: "Hoeveel pixels zitten er in één inch?",
        answer:
          "Dat hangt af van de DPI-instelling. Bij 96 DPI (webstandaard) is één inch gelijk aan 96 pixels. Bij 72 DPI is één inch gelijk aan 72 pixels. Bij 300 DPI (drukstandaard) is één inch gelijk aan 300 pixels.",
      },
    ],
    body: {
      heading1: "Hoe pixel-naar-inch conversie werkt",
      p1: "Het omzetten van pixels naar inches vereist kennis van de DPI (dots per inch) van je doeluitvoer. DPI bepaalt hoeveel pixels er in elke fysieke inch worden gepakt. De formule is eenvoudig:",
      formula: "Inches = Pixels / DPI",
      p2: "Voor webdesign is de standaard 96 DPI. Voor professioneel drukwerk is 300 DPI de norm. Het kiezen van de juiste DPI zorgt ervoor dat je ontwerpen op het beoogde fysieke formaat worden weergegeven.",
      heading2: "Veelvoorkomende toepassingen",
      li1: "Drukwerkontwerp: Bepaal het fysieke formaat van een digitale afbeelding wanneer deze op een specifieke DPI wordt afgedrukt.",
      li2: "Web-naar-druk conversie: Controleer hoe webgrafiek zich vertaalt naar fysieke drukafmetingen.",
      li3: "Fotoafdrukken: Bereken het maximale afdrukformaat met behoud van kwaliteit bij 300 DPI.",
      li4: "Beeldschermgrootte: Begrijp hoe schermcontent overeenkomt met echte afmetingen.",
      heading3: "DPI Referentiegids",
      li5: "72 DPI - Legacy Mac-schermresolutie, gebruikelijk voor oudere webgrafiek.",
      li6: "96 DPI - Windows-standaard, de norm voor modern webdesign.",
      li7: "150 DPI - Drukwerk van gemiddelde kwaliteit, geschikt voor grootformaat posters.",
      li8: "300 DPI - Professionele drukkwaliteit voor brochures, tijdschriften en foto's.",
      heading4: "Hoeveel Pixels zitten er in één Inch?",
      p3: "Het aantal pixels in één inch hangt volledig af van de DPI-instelling. Bij 96 DPI (de webstandaard die door Windows en de meeste browsers wordt gebruikt) bevat één inch precies 96 pixels. Bij 72 DPI (de oude Mac-standaard) bevat één inch 72 pixels. Bij 300 DPI (professioneel drukwerk) worden 300 pixels in dezelfde fysieke ruimte gepakt. Dit betekent dat een 300 DPI-afbeelding veel scherper oogt dan een 96 DPI-afbeelding wanneer deze op hetzelfde formaat wordt afgedrukt, omdat elke inch meer dan 3x zoveel pixelgegevens bevat.",
      heading5: "Gangbare pixelbreedtes omgezet naar inches",
      p4: "De onderstaande tabel toont hoe gangbare pixelafmetingen zich vertalen naar inches bij zowel 96 DPI (web) als 300 DPI (druk). Deze waarden helpen je snel fysieke formaten in te schatten zonder handmatige berekening.",
      li9: "640 px - 6.67 inches bij 96 DPI, 2.13 inches bij 300 DPI",
      li10: "800 px - 8.33 inches bij 96 DPI, 2.67 inches bij 300 DPI",
      li11: "1024 px - 10.67 inches bij 96 DPI, 3.41 inches bij 300 DPI",
      li12: "1080 px - 11.25 inches bij 96 DPI, 3.6 inches bij 300 DPI",
      li13: "1920 px - 20 inches bij 96 DPI, 6.4 inches bij 300 DPI",
      li14: "3840 px - 40 inches bij 96 DPI, 12.8 inches bij 300 DPI",
      heading6: "Wanneer moet je Pixels naar Inches converteren?",
      p5: "Pixel-naar-inch conversie komt regelmatig voor in vier situaties. Ten eerste, drukvoorbereiding: voordat je een digitaal bestand naar een printer stuurt, moet je bevestigen dat de afbeelding op de juiste fysieke afmetingen wordt afgedrukt. Ten tweede, foto's afdrukken: weten dat een foto van 3000x2000 pixels op 10x6.67 inches wordt afgedrukt bij 300 DPI helpt bij het kiezen van het juiste papierformaat. Ten derde, grootformaat signing: banner- en posterontwerpers gebruiken lagere DPI-waarden (100-150) omdat kijkers verder weg staan, waardoor elke pixel meer fysieke ruimte bestrijkt. Ten vierde, web-naar-druk workflows: ontwerpers die webmaterialen hergebruiken voor brochures of visitekaartjes moeten controleren of 96 DPI-schermgrafiek voldoende resolutie heeft voor 300 DPI-drukuitvoer.",
    },
  },

  ar: {
    faq: [
      {
        question: "كيف أحول pixels إلى inches؟",
        answer:
          "اقسم عدد pixels على DPI (النقاط لكل بوصة). على سبيل المثال، 960 pixels عند 96 DPI تساوي 10 inches (960 / 96 = 10). يحدد DPI عدد pixels التي تتسع في بوصة واحدة.",
      },
      {
        question: "ما DPI الذي يجب استخدامه لتصميم الويب؟",
        answer:
          "DPI القياسي لتصميم الويب هو 96 DPI، وهو الإعداد الافتراضي في معظم شاشات Windows. تستخدم شاشات Mac Retina كثافة pixels أعلى، لكن pixels CSS لا تزال تُعيَّن إلى 96 DPI في عرض الويب القياسي.",
      },
      {
        question: "ما DPI المستخدم لتصميم الطباعة؟",
        answer:
          "تستخدم الطباعة الاحترافية عادةً 300 DPI للحصول على مخرجات عالية الجودة. قد تستخدم طباعة المجلات 300-350 DPI، بينما يمكن أن تستخدم طباعة الصحف 150-200 DPI. كلما ارتفع DPI، صغر الحجم المادي لنفس عدد pixels.",
      },
      {
        question:
          "لماذا ينتج نفس عدد pixels قيم مختلفة بالـ inches عند DPI مختلفة؟",
        answer:
          "يحدد DPI مدى كثافة تعبئة pixels في كل inch. عند 96 DPI، تمتد 960 pixels على 10 inches. عند 300 DPI، تمتد نفس 960 pixels على 3.2 inches فقط لأن كل inch تحتوي على عدد أكبر من pixels.",
      },
      {
        question: "كم عدد pixels في inch واحدة؟",
        answer:
          "يعتمد ذلك على إعداد DPI. عند 96 DPI (معيار الويب)، تساوي inch واحدة 96 pixels. عند 72 DPI، تساوي inch واحدة 72 pixels. عند 300 DPI (معيار الطباعة)، تساوي inch واحدة 300 pixels.",
      },
    ],
    body: {
      heading1: "كيف يعمل تحويل Pixel إلى Inch",
      p1: "يتطلب تحويل pixels إلى inches معرفة DPI (النقاط لكل بوصة) للمخرج المستهدف. يحدد DPI عدد pixels المعبأة في كل inch مادية. الصيغة بسيطة:",
      formula: "Inches = Pixels / DPI",
      p2: "لتصميم الويب، المعيار هو 96 DPI. للطباعة الاحترافية، 300 DPI هو المعيار. اختيار DPI الصحيح يضمن عرض تصميماتك بالحجم المادي المقصود.",
      heading2: "حالات الاستخدام الشائعة",
      li1: "تصميم الطباعة: حدد الحجم المادي لصورة رقمية عند طباعتها بـ DPI محدد.",
      li2: "التحويل من الويب إلى الطباعة: تحقق من كيفية ترجمة رسومات الويب إلى أبعاد الطباعة المادية.",
      li3: "طباعة الصور: احسب الحجم الأقصى للطباعة مع الحفاظ على الجودة عند 300 DPI.",
      li4: "تحديد حجم العرض: افهم كيف يتوافق محتوى الشاشة مع القياسات الحقيقية.",
      heading3: "دليل مرجعي لـ DPI",
      li5: "72 DPI - دقة شاشة Mac القديمة، شائعة في رسومات الويب القديمة.",
      li6: "96 DPI - الإعداد الافتراضي لـ Windows، المعيار لتصميم الويب الحديث.",
      li7: "150 DPI - طباعة متوسطة الجودة، مناسبة للملصقات كبيرة الحجم.",
      li8: "300 DPI - جودة طباعة احترافية للكتيبات والمجلات والصور.",
      heading4: "كم عدد Pixels في Inch واحدة؟",
      p3: "يعتمد عدد pixels في inch واحدة كلياً على إعداد DPI. عند 96 DPI (معيار الويب المستخدم بواسطة Windows ومعظم المتصفحات)، تحتوي inch واحدة على 96 pixels بالضبط. عند 72 DPI (معيار Mac القديم)، تحتوي inch واحدة على 72 pixels. عند 300 DPI (الطباعة الاحترافية)، يتم تعبئة 300 pixels في نفس المساحة المادية. هذا يعني أن صورة 300 DPI تبدو أكثر وضوحاً بكثير من صورة 96 DPI عند طباعتها بنفس الحجم، لأن كل inch تحتوي على أكثر من 3 أضعاف بيانات pixels.",
      heading5: "عروض Pixels الشائعة محولة إلى Inches",
      p4: "يوضح الجدول أدناه كيف تُترجم أبعاد pixels الشائعة إلى inches عند كل من 96 DPI (الويب) و300 DPI (الطباعة). تساعدك هذه القيم في تقدير الأحجام المادية بسرعة دون حساب يدوي.",
      li9: "640 px - 6.67 inches عند 96 DPI، 2.13 inches عند 300 DPI",
      li10: "800 px - 8.33 inches عند 96 DPI، 2.67 inches عند 300 DPI",
      li11: "1024 px - 10.67 inches عند 96 DPI، 3.41 inches عند 300 DPI",
      li12: "1080 px - 11.25 inches عند 96 DPI، 3.6 inches عند 300 DPI",
      li13: "1920 px - 20 inches عند 96 DPI، 6.4 inches عند 300 DPI",
      li14: "3840 px - 40 inches عند 96 DPI، 12.8 inches عند 300 DPI",
      heading6: "متى تحتاج إلى تحويل Pixels إلى Inches؟",
      p5: "يظهر تحويل pixel إلى inch بانتظام في أربع حالات. أولاً، التحضير للطباعة: قبل إرسال ملف رقمي إلى الطابعة، تحتاج إلى التأكد من أن الصورة ستُطبع بالأبعاد المادية الصحيحة. ثانياً، طباعة الصور: معرفة أن صورة 3000x2000 pixels تُطبع بمقاس 10x6.67 inches عند 300 DPI يساعدك في اختيار حجم الورق المناسب. ثالثاً، اللافتات كبيرة الحجم: يستخدم مصممو اللافتات والملصقات قيم DPI أقل (100-150) لأن المشاهدين يقفون بعيداً، مما يجعل كل pixel يمتد عبر مساحة مادية أكبر. رابعاً، سير عمل الويب إلى الطباعة: يحتاج المصممون الذين يعيدون استخدام أصول الويب للكتيبات أو بطاقات العمل إلى التحقق من أن رسومات الشاشة بـ 96 DPI لديها دقة كافية لمخرجات الطباعة بـ 300 DPI.",
    },
  },

  tr: {
    faq: [
      {
        question: "Pixels'i inches'e nasıl dönüştürürüm?",
        answer:
          "Pixel sayısını DPI'ye (inç başına nokta) bölün. Örneğin, 96 DPI'de 960 pixels 10 inches'e eşittir (960 / 96 = 10). DPI, bir inch'e kaç pixels sığacağını belirler.",
      },
      {
        question: "Web tasarımı için hangi DPI'yi kullanmalıyım?",
        answer:
          "Web tasarımı için standart DPI 96 DPI'dir ve bu çoğu Windows ekranında varsayılan değerdir. Mac Retina ekranlar daha yüksek pixel yoğunluğu kullanır, ancak CSS pixels standart web oluşturmada hâlâ 96 DPI'ye eşlenir.",
      },
      {
        question: "Baskı tasarımı için hangi DPI kullanılır?",
        answer:
          "Profesyonel baskı genellikle yüksek kaliteli çıktı için 300 DPI kullanır. Dergi baskısı 300-350 DPI, gazete baskısı ise 150-200 DPI kullanabilir. DPI ne kadar yüksekse, aynı pixel sayısı için fiziksel boyut o kadar küçük olur.",
      },
      {
        question:
          "Aynı pixel sayısı neden farklı DPI'lerde farklı inch değerleri üretir?",
        answer:
          "DPI, inch başına pixels'in ne kadar yoğun paketlendiğini tanımlar. 96 DPI'de 960 pixels 10 inches kaplar. 300 DPI'de aynı 960 pixels yalnızca 3.2 inches kaplar çünkü her inch daha fazla pixels içerir.",
      },
      {
        question: "Bir inch'te kaç pixels vardır?",
        answer:
          "DPI ayarına bağlıdır. 96 DPI'de (web standardı) bir inch 96 pixels'e eşittir. 72 DPI'de bir inch 72 pixels'e eşittir. 300 DPI'de (baskı standardı) bir inch 300 pixels'e eşittir.",
      },
    ],
    body: {
      heading1: "Pixel'den Inch'e dönüşüm nasıl çalışır",
      p1: "Pixels'i inches'e dönüştürmek, hedef çıktınızın DPI'sini (inç başına nokta) bilmeyi gerektirir. DPI, her fiziksel inch'e kaç pixels'in paketlendiğini tanımlar. Formül basittir:",
      formula: "Inches = Pixels / DPI",
      p2: "Web tasarımı için standart 96 DPI'dir. Profesyonel baskı için 300 DPI normdur. Doğru DPI'yi seçmek, tasarımlarınızın amaçlanan fiziksel boyutta görüntülenmesini sağlar.",
      heading2: "Yaygın kullanım alanları",
      li1: "Baskı tasarımı: Belirli bir DPI'de basıldığında dijital bir görüntünün fiziksel boyutunu belirleyin.",
      li2: "Web'den baskıya dönüştürme: Web grafiklerinin fiziksel baskı boyutlarına nasıl dönüşeceğini kontrol edin.",
      li3: "Fotoğraf baskısı: 300 DPI'de kaliteyi korurken maksimum baskı boyutunu hesaplayın.",
      li4: "Ekran boyutlandırma: Ekran içeriğinin gerçek dünya ölçülerine nasıl karşılık geldiğini anlayın.",
      heading3: "DPI Referans Kılavuzu",
      li5: "72 DPI - Eski Mac ekran çözünürlüğü, eski web grafikleri için yaygın.",
      li6: "96 DPI - Windows varsayılanı, modern web tasarımı için standart.",
      li7: "150 DPI - Orta kalite baskı, büyük format posterler için uygun.",
      li8: "300 DPI - Broşürler, dergiler ve fotoğraflar için profesyonel baskı kalitesi.",
      heading4: "Bir Inch'te Kaç Pixels Var?",
      p3: "Bir inch'teki pixels sayısı tamamen DPI ayarına bağlıdır. 96 DPI'de (Windows ve çoğu tarayıcının kullandığı web standardı) bir inch tam olarak 96 pixels içerir. 72 DPI'de (eski Mac standardı) bir inch 72 pixels içerir. 300 DPI'de (profesyonel baskı) aynı fiziksel alana 300 pixels paketlenir. Bu, aynı boyutta basıldığında 300 DPI görüntünün 96 DPI görüntüden çok daha keskin görüneceği anlamına gelir çünkü her inch 3 kattan fazla pixel verisi içerir.",
      heading5: "Yaygın Pixel Genişliklerinin Inches Karşılıkları",
      p4: "Aşağıdaki tablo, yaygın pixel boyutlarının hem 96 DPI (web) hem de 300 DPI (baskı) için inches'e nasıl dönüştüğünü gösterir. Bu değerler, manuel hesaplama yapmadan fiziksel boyutları hızlıca tahmin etmenize yardımcı olur.",
      li9: "640 px - 96 DPI'de 6.67 inches, 300 DPI'de 2.13 inches",
      li10: "800 px - 96 DPI'de 8.33 inches, 300 DPI'de 2.67 inches",
      li11: "1024 px - 96 DPI'de 10.67 inches, 300 DPI'de 3.41 inches",
      li12: "1080 px - 96 DPI'de 11.25 inches, 300 DPI'de 3.6 inches",
      li13: "1920 px - 96 DPI'de 20 inches, 300 DPI'de 6.4 inches",
      li14: "3840 px - 96 DPI'de 40 inches, 300 DPI'de 12.8 inches",
      heading6: "Pixels'i Inches'e Ne Zaman Dönüştürmeniz Gerekir?",
      p5: "Pixel'den inch'e dönüşüm dört durumda düzenli olarak karşınıza çıkar. Birincisi, baskı hazırlığı: dijital bir dosyayı yazıcıya göndermeden önce görüntünün doğru fiziksel boyutlarda basılacağını doğrulamanız gerekir. İkincisi, fotoğraf baskısı: 3000x2000 pixel bir fotoğrafın 300 DPI'de 10x6.67 inches olarak basılacağını bilmek doğru kağıt boyutunu seçmenize yardımcı olur. Üçüncüsü, büyük format tabelalar: pankart ve poster tasarımcıları izleyiciler daha uzakta durduğu için daha düşük DPI değerleri (100-150) kullanır, böylece her pixel daha fazla fiziksel alana yayılır. Dördüncüsü, web'den baskıya iş akışları: broşürler veya kartvizitler için web varlıklarını yeniden kullanan tasarımcılar, 96 DPI ekran grafiklerinin 300 DPI baskı çıktısı için yeterli çözünürlüğe sahip olduğunu doğrulamalıdır.",
    },
  },

  pl: {
    faq: [
      {
        question: "Jak przekonwertować pixels na inches?",
        answer:
          "Podziel liczbę pixels przez DPI (punkty na cal). Na przykład 960 pixels przy 96 DPI to 10 inches (960 / 96 = 10). DPI określa, ile pixels mieści się w jednym inch.",
      },
      {
        question: "Jakiego DPI powinienem używać do projektowania stron?",
        answer:
          "Standardowe DPI dla projektowania stron to 96 DPI, co jest wartością domyślną na większości wyświetlaczy Windows. Wyświetlacze Mac Retina używają wyższej gęstości pixels, ale pixels CSS nadal są mapowane na 96 DPI w standardowym renderowaniu webowym.",
      },
      {
        question: "Jakie DPI jest używane do projektowania druku?",
        answer:
          "Druk profesjonalny zazwyczaj używa 300 DPI dla wysokiej jakości wydruków. Druk magazynowy może używać 300-350 DPI, a druk gazetowy 150-200 DPI. Im wyższe DPI, tym mniejszy rozmiar fizyczny przy tej samej liczbie pixels.",
      },
      {
        question:
          "Dlaczego ta sama liczba pixels daje różne wartości w inches przy różnych DPI?",
        answer:
          "DPI określa, jak gęsto pixels są upakowane na inch. Przy 96 DPI, 960 pixels rozciąga się na 10 inches. Przy 300 DPI, te same 960 pixels rozciąga się tylko na 3.2 inches, ponieważ każdy inch zawiera więcej pixels.",
      },
      {
        question: "Ile pixels jest w jednym inch?",
        answer:
          "To zależy od ustawienia DPI. Przy 96 DPI (standard webowy) jeden inch to 96 pixels. Przy 72 DPI jeden inch to 72 pixels. Przy 300 DPI (standard druku) jeden inch to 300 pixels.",
      },
    ],
    body: {
      heading1: "Jak działa konwersja pixel na inch",
      p1: "Konwersja pixels na inches wymaga znajomości DPI (punkty na cal) docelowego wyjścia. DPI określa, ile pixels jest upakowanych w każdym fizycznym inch. Formuła jest prosta:",
      formula: "Inches = Pixels / DPI",
      p2: "Dla projektowania stron standardem jest 96 DPI. Dla profesjonalnego druku normą jest 300 DPI. Wybór właściwego DPI zapewnia, że projekty wyświetlają się w zamierzonym rozmiarze fizycznym.",
      heading2: "Typowe zastosowania",
      li1: "Projekt druku: Określ fizyczny rozmiar obrazu cyfrowego po wydrukowaniu przy określonym DPI.",
      li2: "Konwersja web-druk: Sprawdź, jak grafiki webowe przełożą się na fizyczne wymiary druku.",
      li3: "Druk zdjęć: Oblicz maksymalny rozmiar wydruku z zachowaniem jakości przy 300 DPI.",
      li4: "Rozmiar wyświetlacza: Zrozum, jak zawartość ekranu odpowiada rzeczywistym wymiarom.",
      heading3: "Przewodnik referencyjny DPI",
      li5: "72 DPI - Starsza rozdzielczość ekranu Mac, popularna w starszych grafikach webowych.",
      li6: "96 DPI - Domyślna wartość Windows, standard dla nowoczesnego projektowania stron.",
      li7: "150 DPI - Druk średniej jakości, odpowiedni dla plakatów wielkoformatowych.",
      li8: "300 DPI - Profesjonalna jakość druku dla broszur, czasopism i zdjęć.",
      heading4: "Ile Pixels jest w jednym Inch?",
      p3: "Liczba pixels w jednym inch zależy całkowicie od ustawienia DPI. Przy 96 DPI (standard webowy używany przez Windows i większość przeglądarek) jeden inch zawiera dokładnie 96 pixels. Przy 72 DPI (starszy standard Mac) jeden inch zawiera 72 pixels. Przy 300 DPI (druk profesjonalny) jeden inch mieści 300 pixels w tej samej przestrzeni fizycznej. Oznacza to, że obraz 300 DPI wygląda znacznie ostrzej niż obraz 96 DPI wydrukowany w tym samym rozmiarze, ponieważ każdy inch zawiera ponad 3 razy więcej danych pixels.",
      heading5: "Popularne szerokości pixels przeliczone na inches",
      p4: "Poniższa tabela pokazuje, jak popularne wymiary pixels przekładają się na inches zarówno przy 96 DPI (web), jak i 300 DPI (druk). Te wartości pomagają szybko oszacować rozmiary fizyczne bez ręcznych obliczeń.",
      li9: "640 px - 6.67 inches przy 96 DPI, 2.13 inches przy 300 DPI",
      li10: "800 px - 8.33 inches przy 96 DPI, 2.67 inches przy 300 DPI",
      li11: "1024 px - 10.67 inches przy 96 DPI, 3.41 inches przy 300 DPI",
      li12: "1080 px - 11.25 inches przy 96 DPI, 3.6 inches przy 300 DPI",
      li13: "1920 px - 20 inches przy 96 DPI, 6.4 inches przy 300 DPI",
      li14: "3840 px - 40 inches przy 96 DPI, 12.8 inches przy 300 DPI",
      heading6: "Kiedy trzeba konwertować Pixels na Inches?",
      p5: "Konwersja pixel na inch pojawia się regularnie w czterech sytuacjach. Po pierwsze, przygotowanie do druku: przed wysłaniem pliku cyfrowego do drukarki musisz potwierdzić, że obraz wydrukuje się w prawidłowych wymiarach fizycznych. Po drugie, druk zdjęć: wiedza, że zdjęcie 3000x2000 pixels drukuje się w formacie 10x6.67 inches przy 300 DPI, pomaga wybrać odpowiedni rozmiar papieru. Po trzecie, oznakowanie wielkoformatowe: projektanci banerów i plakatów używają niższych wartości DPI (100-150), ponieważ widzowie stoją dalej, przez co każdy pixel rozciąga się na większą przestrzeń fizyczną. Po czwarte, przepływy pracy web-druk: projektanci, którzy ponownie wykorzystują zasoby webowe do broszur lub wizytówek, muszą zweryfikować, czy grafiki ekranowe 96 DPI mają wystarczającą rozdzielczość dla druku 300 DPI.",
    },
  },

  id: {
    faq: [
      {
        question: "Bagaimana cara mengonversi pixels ke inches?",
        answer:
          "Bagi jumlah pixels dengan DPI (dots per inch). Misalnya, 960 pixels pada 96 DPI sama dengan 10 inches (960 / 96 = 10). DPI menentukan berapa banyak pixels yang muat dalam satu inch.",
      },
      {
        question: "DPI berapa yang harus digunakan untuk desain web?",
        answer:
          "DPI standar untuk desain web adalah 96 DPI, yang merupakan default pada sebagian besar layar Windows. Layar Mac Retina menggunakan kepadatan pixel yang lebih tinggi, tetapi CSS pixels tetap dipetakan ke 96 DPI dalam rendering web standar.",
      },
      {
        question: "DPI berapa yang digunakan untuk desain cetak?",
        answer:
          "Pencetakan profesional biasanya menggunakan 300 DPI untuk output berkualitas tinggi. Pencetakan majalah dapat menggunakan 300-350 DPI, sementara pencetakan koran dapat menggunakan 150-200 DPI. Semakin tinggi DPI, semakin kecil ukuran fisik untuk jumlah pixels yang sama.",
      },
      {
        question:
          "Mengapa jumlah pixels yang sama menghasilkan nilai inches yang berbeda pada DPI yang berbeda?",
        answer:
          "DPI mendefinisikan seberapa padat pixels dikemas per inch. Pada 96 DPI, 960 pixels membentang 10 inches. Pada 300 DPI, 960 pixels yang sama hanya membentang 3.2 inches karena setiap inch mengandung lebih banyak pixels.",
      },
      {
        question: "Berapa pixels dalam satu inch?",
        answer:
          "Tergantung pada pengaturan DPI. Pada 96 DPI (standar web), satu inch sama dengan 96 pixels. Pada 72 DPI, satu inch sama dengan 72 pixels. Pada 300 DPI (standar cetak), satu inch sama dengan 300 pixels.",
      },
    ],
    body: {
      heading1: "Cara kerja konversi pixel ke inch",
      p1: "Mengonversi pixels ke inches memerlukan pengetahuan tentang DPI (dots per inch) dari output target Anda. DPI mendefinisikan berapa banyak pixels yang dikemas ke dalam setiap inch fisik. Rumusnya sederhana:",
      formula: "Inches = Pixels / DPI",
      p2: "Untuk desain web, standarnya adalah 96 DPI. Untuk pencetakan profesional, 300 DPI adalah normanya. Memilih DPI yang tepat memastikan desain Anda ditampilkan pada ukuran fisik yang diinginkan.",
      heading2: "Kasus penggunaan umum",
      li1: "Desain cetak: Tentukan ukuran fisik gambar digital saat dicetak pada DPI tertentu.",
      li2: "Konversi web ke cetak: Periksa bagaimana grafik web akan diterjemahkan ke dimensi cetak fisik.",
      li3: "Pencetakan foto: Hitung ukuran cetak maksimum sambil mempertahankan kualitas pada 300 DPI.",
      li4: "Ukuran tampilan: Pahami bagaimana konten layar berkorespondensi dengan pengukuran dunia nyata.",
      heading3: "Panduan Referensi DPI",
      li5: "72 DPI - Resolusi layar Mac lama, umum untuk grafik web lama.",
      li6: "96 DPI - Default Windows, standar untuk desain web modern.",
      li7: "150 DPI - Cetak kualitas menengah, cocok untuk poster format besar.",
      li8: "300 DPI - Kualitas cetak profesional untuk brosur, majalah, dan foto.",
      heading4: "Berapa Pixels dalam Satu Inch?",
      p3: "Jumlah pixels dalam satu inch sepenuhnya bergantung pada pengaturan DPI. Pada 96 DPI (standar web yang digunakan oleh Windows dan sebagian besar browser), satu inch berisi tepat 96 pixels. Pada 72 DPI (standar Mac lama), satu inch berisi 72 pixels. Pada 300 DPI (cetak profesional), satu inch memuat 300 pixels dalam ruang fisik yang sama. Ini berarti gambar 300 DPI tampak jauh lebih tajam daripada gambar 96 DPI saat dicetak dalam ukuran yang sama, karena setiap inch mengandung lebih dari 3 kali lipat data pixel.",
      heading5: "Lebar Pixels Umum Dikonversi ke Inches",
      p4: "Tabel di bawah menunjukkan bagaimana dimensi pixels umum diterjemahkan ke inches pada 96 DPI (web) dan 300 DPI (cetak). Nilai-nilai ini membantu Anda memperkirakan ukuran fisik dengan cepat tanpa perhitungan manual.",
      li9: "640 px - 6.67 inches pada 96 DPI, 2.13 inches pada 300 DPI",
      li10: "800 px - 8.33 inches pada 96 DPI, 2.67 inches pada 300 DPI",
      li11: "1024 px - 10.67 inches pada 96 DPI, 3.41 inches pada 300 DPI",
      li12: "1080 px - 11.25 inches pada 96 DPI, 3.6 inches pada 300 DPI",
      li13: "1920 px - 20 inches pada 96 DPI, 6.4 inches pada 300 DPI",
      li14: "3840 px - 40 inches pada 96 DPI, 12.8 inches pada 300 DPI",
      heading6: "Kapan Anda Perlu Mengonversi Pixels ke Inches?",
      p5: "Konversi pixel ke inch muncul secara teratur dalam empat situasi. Pertama, persiapan cetak: sebelum mengirim file digital ke printer, Anda perlu memastikan gambar akan dicetak pada dimensi fisik yang benar. Kedua, pencetakan foto: mengetahui bahwa foto 3000x2000 pixels dicetak pada 10x6.67 inches pada 300 DPI membantu Anda memilih ukuran kertas yang tepat. Ketiga, signage format besar: desainer banner dan poster menggunakan nilai DPI lebih rendah (100-150) karena penonton berdiri lebih jauh, membuat setiap pixel membentang di ruang fisik yang lebih luas. Keempat, alur kerja web ke cetak: desainer yang menggunakan kembali aset web untuk brosur atau kartu nama perlu memverifikasi bahwa grafik layar 96 DPI memiliki resolusi yang cukup untuk output cetak 300 DPI.",
    },
  },

  ru: {
    faq: [
      {
        question: "Как конвертировать pixels в inches?",
        answer:
          "Разделите количество pixels на DPI (точки на дюйм). Например, 960 pixels при 96 DPI равны 10 inches (960 / 96 = 10). DPI определяет, сколько pixels помещается в одном inch.",
      },
      {
        question: "Какой DPI использовать для веб-дизайна?",
        answer:
          "Стандартный DPI для веб-дизайна - 96 DPI, что является значением по умолчанию на большинстве дисплеев Windows. Дисплеи Mac Retina используют более высокую плотность pixels, но CSS pixels по-прежнему соответствуют 96 DPI при стандартном веб-рендеринге.",
      },
      {
        question: "Какой DPI используется для печатного дизайна?",
        answer:
          "Профессиональная печать обычно использует 300 DPI для высококачественного вывода. Журнальная печать может использовать 300-350 DPI, а газетная - 150-200 DPI. Чем выше DPI, тем меньше физический размер при том же количестве pixels.",
      },
      {
        question:
          "Почему одинаковое количество pixels даёт разные значения в inches при разных DPI?",
        answer:
          "DPI определяет, насколько плотно pixels упакованы на inch. При 96 DPI 960 pixels занимают 10 inches. При 300 DPI те же 960 pixels занимают всего 3.2 inches, потому что каждый inch содержит больше pixels.",
      },
      {
        question: "Сколько pixels в одном inch?",
        answer:
          "Это зависит от настройки DPI. При 96 DPI (веб-стандарт) один inch равен 96 pixels. При 72 DPI один inch равен 72 pixels. При 300 DPI (стандарт печати) один inch равен 300 pixels.",
      },
    ],
    body: {
      heading1: "Как работает конвертация pixel в inch",
      p1: "Для конвертации pixels в inches необходимо знать DPI (точки на дюйм) целевого вывода. DPI определяет, сколько pixels упаковано в каждый физический inch. Формула проста:",
      formula: "Inches = Pixels / DPI",
      p2: "Для веб-дизайна стандартом является 96 DPI. Для профессиональной печати нормой является 300 DPI. Выбор правильного DPI гарантирует, что ваши дизайны отображаются в задуманном физическом размере.",
      heading2: "Распространённые случаи использования",
      li1: "Печатный дизайн: Определите физический размер цифрового изображения при печати с определённым DPI.",
      li2: "Конвертация веб-печать: Проверьте, как веб-графика будет выглядеть в физических размерах печати.",
      li3: "Печать фотографий: Рассчитайте максимальный размер печати с сохранением качества при 300 DPI.",
      li4: "Размер дисплея: Поймите, как содержимое экрана соотносится с реальными измерениями.",
      heading3: "Справочное руководство по DPI",
      li5: "72 DPI - Устаревшее разрешение экрана Mac, распространённое для старой веб-графики.",
      li6: "96 DPI - Значение по умолчанию Windows, стандарт для современного веб-дизайна.",
      li7: "150 DPI - Печать среднего качества, подходит для крупноформатных постеров.",
      li8: "300 DPI - Профессиональное качество печати для брошюр, журналов и фотографий.",
      heading4: "Сколько Pixels в одном Inch?",
      p3: "Количество pixels в одном inch полностью зависит от настройки DPI. При 96 DPI (веб-стандарт, используемый Windows и большинством браузеров) один inch содержит ровно 96 pixels. При 72 DPI (устаревший стандарт Mac) один inch содержит 72 pixels. При 300 DPI (профессиональная печать) в тот же физический inch помещается 300 pixels. Это означает, что изображение 300 DPI выглядит значительно чётче, чем изображение 96 DPI при печати одинакового размера, поскольку каждый inch содержит более чем в 3 раза больше пиксельных данных.",
      heading5: "Распространённые значения ширины в pixels, переведённые в inches",
      p4: "Таблица ниже показывает, как распространённые размеры в pixels переводятся в inches при 96 DPI (веб) и 300 DPI (печать). Эти значения помогают быстро оценить физические размеры без ручных вычислений.",
      li9: "640 px - 6.67 inches при 96 DPI, 2.13 inches при 300 DPI",
      li10: "800 px - 8.33 inches при 96 DPI, 2.67 inches при 300 DPI",
      li11: "1024 px - 10.67 inches при 96 DPI, 3.41 inches при 300 DPI",
      li12: "1080 px - 11.25 inches при 96 DPI, 3.6 inches при 300 DPI",
      li13: "1920 px - 20 inches при 96 DPI, 6.4 inches при 300 DPI",
      li14: "3840 px - 40 inches при 96 DPI, 12.8 inches при 300 DPI",
      heading6: "Когда нужно конвертировать Pixels в Inches?",
      p5: "Конвертация pixel в inch регулярно возникает в четырёх ситуациях. Во-первых, подготовка к печати: перед отправкой цифрового файла на принтер необходимо убедиться, что изображение будет напечатано в правильных физических размерах. Во-вторых, печать фотографий: знание того, что фото 3000x2000 pixels печатается в формате 10x6.67 inches при 300 DPI, помогает выбрать правильный размер бумаги. В-третьих, крупноформатные вывески: дизайнеры баннеров и постеров используют более низкие значения DPI (100-150), поскольку зрители стоят дальше, и каждый pixel растягивается на большее физическое пространство. В-четвёртых, рабочие процессы веб-печать: дизайнерам, повторно использующим веб-ресурсы для брошюр или визиток, необходимо убедиться, что экранная графика 96 DPI имеет достаточное разрешение для печати 300 DPI.",
    },
  },
};
