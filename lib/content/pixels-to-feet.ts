import type { PageContentMap } from "./types";

export const content: PageContentMap = {
  en: {
    faq: [
      {
        question: "How do I convert pixels to feet?",
        answer:
          "Divide the pixel count by DPI, then divide by 12. For example, 3,456 pixels at 96 DPI equals 3 feet (3,456 / 96 / 12 = 3).",
      },
      {
        question: "How many feet is a 1920-pixel wide image?",
        answer:
          "At 96 DPI, a 1920-pixel wide image spans approximately 1.67 feet (about 20 inches). At 300 DPI, it spans about 0.53 feet (about 6.4 inches). The physical size depends on the DPI.",
      },
      {
        question: "Can I print a web image as a large banner?",
        answer:
          "It depends on the pixel count. A 1920 x 1080 image at 150 DPI would print at about 12.8 x 7.2 inches, which is only about 1 foot wide. For a 4-foot banner, you would need at least 7,200 pixels wide at 150 DPI.",
      },
      {
        question: "What resolution do I need for a readable print at 3 feet?",
        answer:
          "For a print viewed from 3-5 feet away, 150 DPI is sufficient. A 3-foot wide print at 150 DPI needs 5,400 pixels wide. For closer viewing, use 300 DPI which requires 10,800 pixels.",
      },
      {
        question:
          "How do I calculate the maximum print size of my image?",
        answer:
          "Divide the image width in pixels by your target DPI, then divide by 12 to get feet. For example, a 6000-pixel image at 150 DPI can print up to 3.33 feet wide (6000 / 150 / 12 = 3.33).",
      },
    ],
    body: {
      heading1: "How Pixel to Feet Conversion Works",
      p1: "Converting pixels to feet helps you understand the physical scale of digital designs, especially for large-format projects. The formula is:",
      formula: "Feet = Pixels / (DPI x 12)",
      p2: "This first converts pixels to inches (pixels / DPI), then inches to feet (inches / 12).",
      heading2: "Common Use Cases",
      li1: "Print size estimation: Determine how large a digital image will print in feet.",
      li2: "Resolution checking: Verify if an image has enough pixels for a target print size.",
      li3: "Large-format planning: Plan banner, poster, and signage dimensions.",
      li4: "Photo enlargement: Calculate maximum enlargement size before quality degrades.",
      heading3: "Image Resolution to Print Size (at 150 DPI)",
      li5: "1920 x 1080 px — 1.07 x 0.6 feet (about 12.8 x 7.2 inches)",
      li6: "3840 x 2160 px — 2.13 x 1.2 feet (about 25.6 x 14.4 inches)",
      li7: "7200 x 4800 px — 4 x 2.67 feet (48 x 32 inches)",
      li8: "10800 x 7200 px — 6 x 4 feet (72 x 48 inches)",
      heading4: "Can You Print a Smartphone Photo as a Large Banner?",
      p3: "A 12 MP smartphone camera produces images around 4,000 x 3,000 pixels. At 150 DPI (suitable for trade show displays), that prints at 2.22 x 1.67 feet, roughly 26 x 20 inches. At 72 DPI (acceptable for billboards), the same image stretches to 4.63 x 3.47 feet. A 48 MP phone camera captures 8,000 x 6,000 pixels, which prints at 4.44 x 3.33 feet at 150 DPI. Modern high-megapixel phones can produce surprisingly large prints, but quality depends on sensor size, lighting conditions, and image noise.",
      heading5: "How Do You Calculate Maximum Print Size from Pixel Count?",
      p4: "Take the image width in pixels, divide by your target DPI, then divide by 12 to get feet. For a 6,000-pixel-wide image at 150 DPI: 6,000 / 150 = 40 inches, 40 / 12 = 3.33 feet. If the calculated size is smaller than your desired print, you either need a higher-resolution source image or must accept a lower DPI (which is acceptable for distant viewing). Most print shops can advise on minimum acceptable DPI for specific viewing distances.",
      heading6: "What Resolution Do Professional Cameras Produce in Feet?",
      li9: "24 MP DSLR (6000 x 4000) — 3.33 x 2.22 feet at 150 DPI",
      li10: "45 MP mirrorless (8192 x 5464) — 4.55 x 3.04 feet at 150 DPI",
      li11: "61 MP (9504 x 6336) — 5.28 x 3.52 feet at 150 DPI",
      li12: "100 MP medium format (11,648 x 8,736) — 6.47 x 4.85 feet at 150 DPI",
    },
  },
  es: {
    faq: [
      {
        question: "Como convierto pixels a pies?",
        answer:
          "Divide la cantidad de pixels entre DPI y luego entre 12. Por ejemplo, 3,456 pixels a 96 DPI equivale a 3 pies (3,456 / 96 / 12 = 3).",
      },
      {
        question: "Cuantos pies mide una imagen de 1920 pixels de ancho?",
        answer:
          "A 96 DPI, una imagen de 1920 pixels de ancho abarca aproximadamente 1.67 pies (unos 20 pulgadas). A 300 DPI, abarca unos 0.53 pies (unas 6.4 pulgadas). El tamano fisico depende del DPI.",
      },
      {
        question: "Puedo imprimir una imagen web como un banner grande?",
        answer:
          "Depende de la cantidad de pixels. Una imagen de 1920 x 1080 a 150 DPI imprimiria a unos 12.8 x 7.2 pulgadas, que es solo aproximadamente 1 pie de ancho. Para un banner de 4 pies, necesitarias al menos 7,200 pixels de ancho a 150 DPI.",
      },
      {
        question: "Que resolucion necesito para una impresion legible a 3 pies?",
        answer:
          "Para una impresion vista desde 3-5 pies, 150 DPI es suficiente. Una impresion de 3 pies de ancho a 150 DPI necesita 5,400 pixels de ancho. Para ver mas de cerca, usa 300 DPI que requiere 10,800 pixels.",
      },
      {
        question:
          "Como calculo el tamano maximo de impresion de mi imagen?",
        answer:
          "Divide el ancho de la imagen en pixels entre tu DPI objetivo y luego entre 12 para obtener pies. Por ejemplo, una imagen de 6000 pixels a 150 DPI puede imprimir hasta 3.33 pies de ancho (6000 / 150 / 12 = 3.33).",
      },
    ],
    body: {
      heading1: "Como funciona la conversion de pixels a pies",
      p1: "Convertir pixels a pies te ayuda a entender la escala fisica de los disenos digitales, especialmente para proyectos de gran formato. La formula es:",
      formula: "Pies = Pixels / (DPI x 12)",
      p2: "Primero convierte pixels a pulgadas (pixels / DPI), luego pulgadas a pies (pulgadas / 12).",
      heading2: "Casos de uso comunes",
      li1: "Estimacion del tamano de impresion: Determinar que tan grande se imprimira una imagen digital en pies.",
      li2: "Verificacion de resolucion: Comprobar si una imagen tiene suficientes pixels para un tamano de impresion objetivo.",
      li3: "Planificacion de gran formato: Planificar dimensiones de banners, carteles y senalizacion.",
      li4: "Ampliacion fotografica: Calcular el tamano maximo de ampliacion antes de que se degrade la calidad.",
      heading3: "Resolucion de imagen a tamano de impresion (a 150 DPI)",
      li5: "1920 x 1080 px — 1.07 x 0.6 pies (unos 12.8 x 7.2 pulgadas)",
      li6: "3840 x 2160 px — 2.13 x 1.2 pies (unos 25.6 x 14.4 pulgadas)",
      li7: "7200 x 4800 px — 4 x 2.67 pies (48 x 32 pulgadas)",
      li8: "10800 x 7200 px — 6 x 4 pies (72 x 48 pulgadas)",
      heading4: "Puedes imprimir una foto de smartphone como un banner grande?",
      p3: "Una camara de smartphone de 12 MP produce imagenes de alrededor de 4,000 x 3,000 pixels. A 150 DPI (adecuado para displays de ferias), imprime a 2.22 x 1.67 pies, aproximadamente 26 x 20 pulgadas. A 72 DPI (aceptable para vallas publicitarias), la misma imagen se extiende a 4.63 x 3.47 pies. Una camara de telefono de 48 MP captura 8,000 x 6,000 pixels, que imprime a 4.44 x 3.33 pies a 150 DPI. Los telefonos modernos de muchos megapixeles pueden producir impresiones sorprendentemente grandes, pero la calidad depende del tamano del sensor, las condiciones de iluminacion y el ruido de la imagen.",
      heading5: "Como calcular el tamano maximo de impresion a partir de la cantidad de pixels?",
      p4: "Toma el ancho de la imagen en pixels, divide entre tu DPI objetivo y luego entre 12 para obtener pies. Para una imagen de 6,000 pixels de ancho a 150 DPI: 6,000 / 150 = 40 pulgadas, 40 / 12 = 3.33 pies. Si el tamano calculado es menor que tu impresion deseada, necesitas una imagen fuente de mayor resolucion o debes aceptar un DPI menor (lo cual es aceptable para visualizacion a distancia). La mayoria de las imprentas pueden asesorar sobre el DPI minimo aceptable para distancias de visualizacion especificas.",
      heading6: "Que resolucion producen las camaras profesionales en pies?",
      li9: "DSLR de 24 MP (6000 x 4000) — 3.33 x 2.22 pies a 150 DPI",
      li10: "Mirrorless de 45 MP (8192 x 5464) — 4.55 x 3.04 pies a 150 DPI",
      li11: "61 MP (9504 x 6336) — 5.28 x 3.52 pies a 150 DPI",
      li12: "Medio formato 100 MP (11,648 x 8,736) — 6.47 x 4.85 pies a 150 DPI",
    },
  },
  fr: {
    faq: [
      {
        question: "Comment convertir des pixels en pieds?",
        answer:
          "Divisez le nombre de pixels par DPI, puis divisez par 12. Par exemple, 3 456 pixels a 96 DPI egalent 3 pieds (3 456 / 96 / 12 = 3).",
      },
      {
        question: "Combien de pieds fait une image de 1920 pixels de large?",
        answer:
          "A 96 DPI, une image de 1920 pixels de large mesure environ 1.67 pieds (environ 20 pouces). A 300 DPI, elle mesure environ 0.53 pieds (environ 6.4 pouces). La taille physique depend du DPI.",
      },
      {
        question: "Puis-je imprimer une image web en grand format?",
        answer:
          "Cela depend du nombre de pixels. Une image de 1920 x 1080 a 150 DPI s'imprimerait a environ 12.8 x 7.2 pouces, soit seulement environ 1 pied de large. Pour une banniere de 4 pieds, il faudrait au moins 7 200 pixels de large a 150 DPI.",
      },
      {
        question: "Quelle resolution faut-il pour une impression lisible a 3 pieds?",
        answer:
          "Pour une impression vue a 3-5 pieds, 150 DPI est suffisant. Une impression de 3 pieds de large a 150 DPI necessite 5 400 pixels de large. Pour une visualisation plus proche, utilisez 300 DPI qui necessite 10 800 pixels.",
      },
      {
        question:
          "Comment calculer la taille d'impression maximale de mon image?",
        answer:
          "Divisez la largeur de l'image en pixels par votre DPI cible, puis divisez par 12 pour obtenir les pieds. Par exemple, une image de 6000 pixels a 150 DPI peut s'imprimer jusqu'a 3.33 pieds de large (6000 / 150 / 12 = 3.33).",
      },
    ],
    body: {
      heading1: "Comment fonctionne la conversion pixels en pieds",
      p1: "Convertir des pixels en pieds aide a comprendre l'echelle physique des designs numeriques, surtout pour les projets grand format. La formule est:",
      formula: "Pieds = Pixels / (DPI x 12)",
      p2: "Cela convertit d'abord les pixels en pouces (pixels / DPI), puis les pouces en pieds (pouces / 12).",
      heading2: "Cas d'utilisation courants",
      li1: "Estimation de la taille d'impression: Determiner la taille physique d'une image numerique en pieds.",
      li2: "Verification de resolution: Verifier si une image a assez de pixels pour une taille d'impression ciblee.",
      li3: "Planification grand format: Planifier les dimensions de bannieres, affiches et signaletique.",
      li4: "Agrandissement photo: Calculer la taille maximale d'agrandissement avant degradation de qualite.",
      heading3: "Resolution d'image vers taille d'impression (a 150 DPI)",
      li5: "1920 x 1080 px — 1.07 x 0.6 pieds (environ 12.8 x 7.2 pouces)",
      li6: "3840 x 2160 px — 2.13 x 1.2 pieds (environ 25.6 x 14.4 pouces)",
      li7: "7200 x 4800 px — 4 x 2.67 pieds (48 x 32 pouces)",
      li8: "10800 x 7200 px — 6 x 4 pieds (72 x 48 pouces)",
      heading4: "Peut-on imprimer une photo de smartphone en grande banniere?",
      p3: "Un smartphone de 12 MP produit des images d'environ 4 000 x 3 000 pixels. A 150 DPI (adapte aux stands d'exposition), cela s'imprime a 2.22 x 1.67 pieds, soit environ 26 x 20 pouces. A 72 DPI (acceptable pour les panneaux d'affichage), la meme image s'etend a 4.63 x 3.47 pieds. Un telephone de 48 MP capture 8 000 x 6 000 pixels, imprimant a 4.44 x 3.33 pieds a 150 DPI. Les telephones modernes a haute resolution peuvent produire des impressions etonnamment grandes, mais la qualite depend de la taille du capteur, des conditions d'eclairage et du bruit de l'image.",
      heading5: "Comment calculer la taille d'impression maximale a partir du nombre de pixels?",
      p4: "Prenez la largeur de l'image en pixels, divisez par votre DPI cible, puis divisez par 12 pour obtenir les pieds. Pour une image de 6 000 pixels de large a 150 DPI: 6 000 / 150 = 40 pouces, 40 / 12 = 3.33 pieds. Si la taille calculee est inferieure a l'impression souhaitee, vous avez besoin d'une image source de plus haute resolution ou devez accepter un DPI inferieur (ce qui est acceptable pour une visualisation a distance). La plupart des imprimeries peuvent conseiller sur le DPI minimum acceptable pour des distances de visualisation specifiques.",
      heading6: "Quelle resolution produisent les appareils photo professionnels en pieds?",
      li9: "DSLR 24 MP (6000 x 4000) — 3.33 x 2.22 pieds a 150 DPI",
      li10: "Hybride 45 MP (8192 x 5464) — 4.55 x 3.04 pieds a 150 DPI",
      li11: "61 MP (9504 x 6336) — 5.28 x 3.52 pieds a 150 DPI",
      li12: "Moyen format 100 MP (11 648 x 8 736) — 6.47 x 4.85 pieds a 150 DPI",
    },
  },
  de: {
    faq: [
      {
        question: "Wie rechne ich Pixels in Fuss um?",
        answer:
          "Teilen Sie die Pixelanzahl durch DPI und dann durch 12. Zum Beispiel ergeben 3.456 Pixels bei 96 DPI 3 Fuss (3.456 / 96 / 12 = 3).",
      },
      {
        question: "Wie viele Fuss breit ist ein 1920-Pixel breites Bild?",
        answer:
          "Bei 96 DPI erstreckt sich ein 1920 Pixel breites Bild ueber etwa 1.67 Fuss (ca. 20 Zoll). Bei 300 DPI sind es etwa 0.53 Fuss (ca. 6.4 Zoll). Die physische Groesse haengt vom DPI ab.",
      },
      {
        question: "Kann ich ein Webbild als grosses Banner drucken?",
        answer:
          "Das haengt von der Pixelanzahl ab. Ein 1920 x 1080 Bild bei 150 DPI wuerde etwa 12.8 x 7.2 Zoll drucken, was nur etwa 1 Fuss breit ist. Fuer ein 4-Fuss-Banner benoetigen Sie mindestens 7.200 Pixels Breite bei 150 DPI.",
      },
      {
        question: "Welche Aufloesung brauche ich fuer einen lesbaren Druck bei 3 Fuss?",
        answer:
          "Fuer einen Druck, der aus 3-5 Fuss betrachtet wird, reichen 150 DPI. Ein 3 Fuss breiter Druck bei 150 DPI benoetigt 5.400 Pixels Breite. Fuer naehere Betrachtung verwenden Sie 300 DPI, was 10.800 Pixels erfordert.",
      },
      {
        question:
          "Wie berechne ich die maximale Druckgroesse meines Bildes?",
        answer:
          "Teilen Sie die Bildbreite in Pixels durch Ihren Ziel-DPI und dann durch 12, um Fuss zu erhalten. Zum Beispiel kann ein 6000-Pixel-Bild bei 150 DPI bis zu 3.33 Fuss breit gedruckt werden (6000 / 150 / 12 = 3.33).",
      },
    ],
    body: {
      heading1: "Wie die Umrechnung von Pixels in Fuss funktioniert",
      p1: "Die Umrechnung von Pixels in Fuss hilft Ihnen, den physischen Massstab digitaler Designs zu verstehen, besonders fuer Grossformat-Projekte. Die Formel lautet:",
      formula: "Fuss = Pixels / (DPI x 12)",
      p2: "Dies rechnet zuerst Pixels in Zoll um (Pixels / DPI) und dann Zoll in Fuss (Zoll / 12).",
      heading2: "Haeufige Anwendungsfaelle",
      li1: "Druckgroessen-Schaetzung: Bestimmen, wie gross ein digitales Bild in Fuss gedruckt wird.",
      li2: "Aufloesungspruefung: Ueberpruefen, ob ein Bild genuegend Pixels fuer eine Ziel-Druckgroesse hat.",
      li3: "Grossformat-Planung: Banner-, Poster- und Beschilderungsabmessungen planen.",
      li4: "Fotovergroesserung: Maximale Vergroesserung berechnen, bevor die Qualitaet nachlässt.",
      heading3: "Bildaufloesung zu Druckgroesse (bei 150 DPI)",
      li5: "1920 x 1080 px — 1.07 x 0.6 Fuss (ca. 12.8 x 7.2 Zoll)",
      li6: "3840 x 2160 px — 2.13 x 1.2 Fuss (ca. 25.6 x 14.4 Zoll)",
      li7: "7200 x 4800 px — 4 x 2.67 Fuss (48 x 32 Zoll)",
      li8: "10800 x 7200 px — 6 x 4 Fuss (72 x 48 Zoll)",
      heading4: "Kann man ein Smartphone-Foto als grosses Banner drucken?",
      p3: "Eine 12-MP-Smartphone-Kamera erzeugt Bilder von etwa 4.000 x 3.000 Pixels. Bei 150 DPI (geeignet fuer Messestaende) druckt das bei 2.22 x 1.67 Fuss, etwa 26 x 20 Zoll. Bei 72 DPI (akzeptabel fuer Plakatwaende) dehnt sich dasselbe Bild auf 4.63 x 3.47 Fuss aus. Eine 48-MP-Handykamera erfasst 8.000 x 6.000 Pixels, was bei 150 DPI 4.44 x 3.33 Fuss druckt. Moderne Hochmegapixel-Telefone koennen ueberraschend grosse Drucke erzeugen, aber die Qualitaet haengt von Sensorgroesse, Lichtverhaeltnissen und Bildrauschen ab.",
      heading5: "Wie berechnet man die maximale Druckgroesse aus der Pixelanzahl?",
      p4: "Nehmen Sie die Bildbreite in Pixels, teilen Sie durch Ihren Ziel-DPI, dann durch 12, um Fuss zu erhalten. Fuer ein 6.000 Pixel breites Bild bei 150 DPI: 6.000 / 150 = 40 Zoll, 40 / 12 = 3.33 Fuss. Wenn die berechnete Groesse kleiner als Ihr gewuenschter Druck ist, benoetigen Sie entweder ein hoeher aufgeloestes Quellbild oder muessen einen niedrigeren DPI akzeptieren (was fuer Fernbetrachtung akzeptabel ist). Die meisten Druckereien koennen zum minimal akzeptablen DPI fuer bestimmte Betrachtungsentfernungen beraten.",
      heading6: "Welche Aufloesung erzeugen professionelle Kameras in Fuss?",
      li9: "24 MP DSLR (6000 x 4000) — 3.33 x 2.22 Fuss bei 150 DPI",
      li10: "45 MP spiegellos (8192 x 5464) — 4.55 x 3.04 Fuss bei 150 DPI",
      li11: "61 MP (9504 x 6336) — 5.28 x 3.52 Fuss bei 150 DPI",
      li12: "100 MP Mittelformat (11.648 x 8.736) — 6.47 x 4.85 Fuss bei 150 DPI",
    },
  },
  pt: {
    faq: [
      {
        question: "Como converto pixels para pes?",
        answer:
          "Divida a quantidade de pixels por DPI e depois por 12. Por exemplo, 3.456 pixels a 96 DPI equivale a 3 pes (3.456 / 96 / 12 = 3).",
      },
      {
        question: "Quantos pes tem uma imagem de 1920 pixels de largura?",
        answer:
          "A 96 DPI, uma imagem de 1920 pixels de largura abrange aproximadamente 1.67 pes (cerca de 20 polegadas). A 300 DPI, abrange cerca de 0.53 pes (cerca de 6.4 polegadas). O tamanho fisico depende do DPI.",
      },
      {
        question: "Posso imprimir uma imagem web como um banner grande?",
        answer:
          "Depende da quantidade de pixels. Uma imagem de 1920 x 1080 a 150 DPI imprimiria em cerca de 12.8 x 7.2 polegadas, que e apenas cerca de 1 pe de largura. Para um banner de 4 pes, voce precisaria de pelo menos 7.200 pixels de largura a 150 DPI.",
      },
      {
        question: "Que resolucao preciso para uma impressao legivel a 3 pes?",
        answer:
          "Para uma impressao vista de 3-5 pes, 150 DPI e suficiente. Uma impressao de 3 pes de largura a 150 DPI precisa de 5.400 pixels de largura. Para visualizacao mais proxima, use 300 DPI que requer 10.800 pixels.",
      },
      {
        question:
          "Como calculo o tamanho maximo de impressao da minha imagem?",
        answer:
          "Divida a largura da imagem em pixels pelo seu DPI alvo e depois por 12 para obter pes. Por exemplo, uma imagem de 6000 pixels a 150 DPI pode imprimir ate 3.33 pes de largura (6000 / 150 / 12 = 3.33).",
      },
    ],
    body: {
      heading1: "Como funciona a conversao de pixels para pes",
      p1: "Converter pixels para pes ajuda a entender a escala fisica dos designs digitais, especialmente para projetos de grande formato. A formula e:",
      formula: "Pes = Pixels / (DPI x 12)",
      p2: "Primeiro converte pixels em polegadas (pixels / DPI), depois polegadas em pes (polegadas / 12).",
      heading2: "Casos de uso comuns",
      li1: "Estimativa de tamanho de impressao: Determinar o tamanho de impressao de uma imagem digital em pes.",
      li2: "Verificacao de resolucao: Confirmar se uma imagem tem pixels suficientes para um tamanho de impressao alvo.",
      li3: "Planejamento de grande formato: Planejar dimensoes de banners, cartazes e sinalizacao.",
      li4: "Ampliacao fotografica: Calcular o tamanho maximo de ampliacao antes da degradacao de qualidade.",
      heading3: "Resolucao de imagem para tamanho de impressao (a 150 DPI)",
      li5: "1920 x 1080 px — 1.07 x 0.6 pes (cerca de 12.8 x 7.2 polegadas)",
      li6: "3840 x 2160 px — 2.13 x 1.2 pes (cerca de 25.6 x 14.4 polegadas)",
      li7: "7200 x 4800 px — 4 x 2.67 pes (48 x 32 polegadas)",
      li8: "10800 x 7200 px — 6 x 4 pes (72 x 48 polegadas)",
      heading4: "Voce pode imprimir uma foto de smartphone como um banner grande?",
      p3: "Uma camera de smartphone de 12 MP produz imagens de cerca de 4.000 x 3.000 pixels. A 150 DPI (adequado para displays de feiras), imprime a 2.22 x 1.67 pes, aproximadamente 26 x 20 polegadas. A 72 DPI (aceitavel para outdoors), a mesma imagem se estende a 4.63 x 3.47 pes. Uma camera de telefone de 48 MP captura 8.000 x 6.000 pixels, que imprime a 4.44 x 3.33 pes a 150 DPI. Telefones modernos de muitos megapixels podem produzir impressoes surpreendentemente grandes, mas a qualidade depende do tamanho do sensor, condicoes de iluminacao e ruido da imagem.",
      heading5: "Como calcular o tamanho maximo de impressao a partir da contagem de pixels?",
      p4: "Pegue a largura da imagem em pixels, divida pelo seu DPI alvo e depois por 12 para obter pes. Para uma imagem de 6.000 pixels de largura a 150 DPI: 6.000 / 150 = 40 polegadas, 40 / 12 = 3.33 pes. Se o tamanho calculado for menor que sua impressao desejada, voce precisa de uma imagem fonte de maior resolucao ou deve aceitar um DPI mais baixo (o que e aceitavel para visualizacao a distancia). A maioria das graficas pode aconselhar sobre o DPI minimo aceitavel para distancias de visualizacao especificas.",
      heading6: "Que resolucao as cameras profissionais produzem em pes?",
      li9: "DSLR de 24 MP (6000 x 4000) — 3.33 x 2.22 pes a 150 DPI",
      li10: "Mirrorless de 45 MP (8192 x 5464) — 4.55 x 3.04 pes a 150 DPI",
      li11: "61 MP (9504 x 6336) — 5.28 x 3.52 pes a 150 DPI",
      li12: "Medio formato 100 MP (11.648 x 8.736) — 6.47 x 4.85 pes a 150 DPI",
    },
  },
  hi: {
    faq: [
      {
        question: "Pixels ko feet mein kaise convert karein?",
        answer:
          "Pixel count ko DPI se divide karein, phir 12 se divide karein. Udaharan ke liye, 96 DPI par 3,456 pixels 3 feet ke barabar hai (3,456 / 96 / 12 = 3).",
      },
      {
        question: "1920 pixel chaud imij kitne feet ki hai?",
        answer:
          "96 DPI par, 1920 pixel chaudi image lagbhag 1.67 feet (lagbhag 20 inches) hai. 300 DPI par, yah lagbhag 0.53 feet (lagbhag 6.4 inches) hai. Bhautik aakaar DPI par nirbhar karta hai.",
      },
      {
        question: "Kya main web image ko bade banner ke roop mein print kar sakta hoon?",
        answer:
          "Yah pixel count par nirbhar karta hai. 150 DPI par 1920 x 1080 image lagbhag 12.8 x 7.2 inches print hogi, jo sirf lagbhag 1 foot chaudi hai. 4-foot banner ke liye, aapko 150 DPI par kam se kam 7,200 pixels chaudai chahiye.",
      },
      {
        question: "3 feet par padhne yogya print ke liye kitni resolution chahiye?",
        answer:
          "3-5 feet ki doori se dekhe jaane wale print ke liye, 150 DPI paryaapt hai. 150 DPI par 3 foot chauda print 5,400 pixels chaudai chahiye. Nazdiki se dekhne ke liye, 300 DPI upyog karein jiske liye 10,800 pixels chahiye.",
      },
      {
        question:
          "Main apni image ka adhikatam print size kaise calculate karoon?",
        answer:
          "Image ki chaudai pixels mein lein, apne lakshya DPI se divide karein, phir feet paane ke liye 12 se divide karein. Udaharan ke liye, 150 DPI par 6000 pixel image 3.33 feet tak chaudi print ho sakti hai (6000 / 150 / 12 = 3.33).",
      },
    ],
    body: {
      heading1: "Pixel se feet conversion kaise kaam karta hai",
      p1: "Pixels ko feet mein convert karna digital designs ki bhautik maap samajhne mein madad karta hai, khaaskar large-format projects ke liye. Formula hai:",
      formula: "Feet = Pixels / (DPI x 12)",
      p2: "Yah pehle pixels ko inches mein convert karta hai (pixels / DPI), phir inches ko feet mein (inches / 12).",
      heading2: "Aam upyog ke maamle",
      li1: "Print size anumaan: Yah nirardhit karna ki ek digital image feet mein kitni badi print hogi.",
      li2: "Resolution jaanch: Yah sathyaapit karna ki kya image mein lakshya print size ke liye paryaapt pixels hain.",
      li3: "Large-format yojana: Banner, poster aur signage ke dimensions ki yojana banana.",
      li4: "Photo enlargement: Gunvatta kharab hone se pehle adhikatam enlargement size calculate karna.",
      heading3: "Image resolution se print size (150 DPI par)",
      li5: "1920 x 1080 px — 1.07 x 0.6 feet (lagbhag 12.8 x 7.2 inches)",
      li6: "3840 x 2160 px — 2.13 x 1.2 feet (lagbhag 25.6 x 14.4 inches)",
      li7: "7200 x 4800 px — 4 x 2.67 feet (48 x 32 inches)",
      li8: "10800 x 7200 px — 6 x 4 feet (72 x 48 inches)",
      heading4: "Kya aap smartphone photo ko bade banner ke roop mein print kar sakte hain?",
      p3: "12 MP smartphone camera lagbhag 4,000 x 3,000 pixels ki images banata hai. 150 DPI par (trade show displays ke liye upyukt), yah 2.22 x 1.67 feet, lagbhag 26 x 20 inches print hota hai. 72 DPI par (billboards ke liye sweekaary), wahi image 4.63 x 3.47 feet tak phailti hai. 48 MP phone camera 8,000 x 6,000 pixels capture karta hai, jo 150 DPI par 4.44 x 3.33 feet print hota hai. Aadhunik uchch-megapixel phones achambhit roop se bade prints bana sakte hain, lekin gunvatta sensor size, prakash sthitiyon aur image noise par nirbhar karti hai.",
      heading5: "Pixel count se adhikatam print size kaise calculate karein?",
      p4: "Image ki chaudai pixels mein lein, apne lakshya DPI se divide karein, phir feet pane ke liye 12 se divide karein. 150 DPI par 6,000 pixel chaudi image ke liye: 6,000 / 150 = 40 inches, 40 / 12 = 3.33 feet. Agar calculated size aapke chahte print se chhota hai, to aapko ya to uchch-resolution source image chahiye ya kam DPI sweekar karna hoga (jo door se dekhne ke liye sweekaary hai). Adhiktar print shops vishisht dekhne ki dooriyoun ke liye nyoonatam sweekaary DPI par salaah de sakti hain.",
      heading6: "Professional cameras feet mein kitni resolution produce karti hain?",
      li9: "24 MP DSLR (6000 x 4000) — 150 DPI par 3.33 x 2.22 feet",
      li10: "45 MP mirrorless (8192 x 5464) — 150 DPI par 4.55 x 3.04 feet",
      li11: "61 MP (9504 x 6336) — 150 DPI par 5.28 x 3.52 feet",
      li12: "100 MP medium format (11,648 x 8,736) — 150 DPI par 6.47 x 4.85 feet",
    },
  },
  ja: {
    faq: [
      {
        question: "Pixels wo feet ni dou henkan shimasu ka?",
        answer:
          "Pixel suu wo DPI de wari, sorekara 12 de warimasu. Tatoeba, 96 DPI de 3,456 pixels ha 3 feet desu (3,456 / 96 / 12 = 3).",
      },
      {
        question: "1920 pixel haba no gazou ha nanfeet desu ka?",
        answer:
          "96 DPI de ha, 1920 pixel haba no gazou ha yaku 1.67 feet (yaku 20 inches) desu. 300 DPI de ha yaku 0.53 feet (yaku 6.4 inches) desu. Butsuriteki size ha DPI ni yotte kimarimasu.",
      },
      {
        question: "Web gazou wo ookina bannaa toshite insatsu dekimasu ka?",
        answer:
          "Pixel suu ni yorimasu. 150 DPI de 1920 x 1080 no gazou ha yaku 12.8 x 7.2 inches de insatsu sare, haba wa yaku 1 foot dake desu. 4 foot bannaa niha, 150 DPI de sukunakutomo haba 7,200 pixels ga hitsuyou desu.",
      },
      {
        question: "3 feet de yomeru insatsu niha donna kaizodo ga hitsuyou desu ka?",
        answer:
          "3-5 feet no kyori kara miru insatsu niha 150 DPI de juubun desu. 150 DPI de haba 3 feet no insatsu niha haba 5,400 pixels ga hitsuyou desu. Yori chikaku de miru baai ha, 10,800 pixels wo hitsuyou to suru 300 DPI wo shiyou shimasu.",
      },
      {
        question:
          "Gazou no saidai insatsu size wo dou keisan shimasu ka?",
        answer:
          "Gazou no haba wo pixels de tori, target DPI de wari, sorekara 12 de watte feet wo emasu. Tatoeba, 150 DPI de 6000 pixel no gazou ha saidai 3.33 feet haba de insatsu dekimasu (6000 / 150 / 12 = 3.33).",
      },
    ],
    body: {
      heading1: "Pixel kara feet heno henkan no shikumi",
      p1: "Pixels wo feet ni henkan suru koto ha, tokuni daikeishiki project de digital design no butsuriteki scale wo rikai suru no ni yakudachimasu. Koushiki ha:",
      formula: "Feet = Pixels / (DPI x 12)",
      p2: "Mazu pixels wo inches ni henkan shi (pixels / DPI), sorekara inches wo feet ni henkan shimasu (inches / 12).",
      heading2: "Ippantekina shiyou keesu",
      li1: "Insatsu size no suitei: Digital gazou ga feet de dono kurai no ookisa de insatsu sareru ka wo kettei.",
      li2: "Kaizodo no kakunin: Gazou ga mokuhyou insatsu size ni juubun na pixels wo motsu ka kakunin.",
      li3: "Daikeishiki keikaku: Bannaa, posutaa, kanban no sunpou wo keikaku.",
      li4: "Shashin kakudai: Hinshitsu ga teika suru mae no saidai kakudai size wo keisan.",
      heading3: "Gazou kaizodo kara insatsu size he (150 DPI)",
      li5: "1920 x 1080 px — 1.07 x 0.6 feet (yaku 12.8 x 7.2 inches)",
      li6: "3840 x 2160 px — 2.13 x 1.2 feet (yaku 25.6 x 14.4 inches)",
      li7: "7200 x 4800 px — 4 x 2.67 feet (48 x 32 inches)",
      li8: "10800 x 7200 px — 6 x 4 feet (72 x 48 inches)",
      heading4: "Smartphone no shashin wo ookina bannaa toshite insatsu dekimasu ka?",
      p3: "12 MP smartphone camera ha yaku 4,000 x 3,000 pixels no gazou wo seisan shimasu. 150 DPI (tenjikai display ni tekisetsu) de ha, 2.22 x 1.67 feet, yaku 26 x 20 inches de insatsu saremasu. 72 DPI (kanban ni kyoyoukanou) de ha, onaji gazou ga 4.63 x 3.47 feet ni hirogariamsu. 48 MP denwa camera ha 8,000 x 6,000 pixels wo capture shi, 150 DPI de 4.44 x 3.33 feet de insatsu saremasu. Gendai no kou megapixel denwa ha odorokuhodo ookina insatsu wo seisan dekimasu ga, hinshitsu ha sensor size, shomei jouken, gazou noise ni yotte kimarimasu.",
      heading5: "Pixel suu kara saidai insatsu size wo dou keisan shimasu ka?",
      p4: "Gazou no haba wo pixels de tori, target DPI de wari, 12 de watte feet wo emasu. 150 DPI de haba 6,000 pixel no gazou: 6,000 / 150 = 40 inches, 40 / 12 = 3.33 feet. Keisan sareta size ga kibou no insatsu yori chiisai baai, yori kou kaizodo no source gazou ga hitsuyou ka, yori hikui DPI wo ukeirenakerebanarimesen (tooku kara miru baai ha kyoyoukanou). Hotondo no insatsujo ha, tokutei no shichou kyori ni taisuru saitei kyoyou DPI ni tsuite adobaisu dekimasu.",
      heading6: "Professional camera ha feet de donna kaizodo wo seisan shimasu ka?",
      li9: "24 MP DSLR (6000 x 4000) — 150 DPI de 3.33 x 2.22 feet",
      li10: "45 MP mirrorless (8192 x 5464) — 150 DPI de 4.55 x 3.04 feet",
      li11: "61 MP (9504 x 6336) — 150 DPI de 5.28 x 3.52 feet",
      li12: "100 MP medium format (11,648 x 8,736) — 150 DPI de 6.47 x 4.85 feet",
    },
  },
  ko: {
    faq: [
      {
        question: "Pixels reul feet ro eotteoke byeonhwan hamnikka?",
        answer:
          "Pixel su reul DPI ro nanun daeume 12 ro nanuseyo. Yereul deulmyeon, 96 DPI eseo 3,456 pixels neun 3 feet imnida (3,456 / 96 / 12 = 3).",
      },
      {
        question: "1920 pixel neolbi imiji neun myeot feet imnikka?",
        answer:
          "96 DPI eseo 1920 pixel neolbi imiji neun yak 1.67 feet (yak 20 inches) imnida. 300 DPI eseo neun yak 0.53 feet (yak 6.4 inches) imnida. Mullijeog keugi neun DPI e ttara dallajim nida.",
      },
      {
        question: "Web imiji reul keun baenneo ro insswae hal su issseumnikka?",
        answer:
          "Pixel su e dallayeo. 150 DPI eseo 1920 x 1080 imiji neun yak 12.8 x 7.2 inches ro insswae doebnida. Igeos eun neolbi yak 1 foot e bulgwaham nida. 4 foot baenneo e neun 150 DPI eseo choeseo 7,200 pixels neolbi ga pilyohamnida.",
      },
      {
        question: "3 feet eseo ilgeul su inneun insswae e pilyohan haesangdo neun?",
        answer:
          "3-5 feet georieseo boneun insswaeemul e neun 150 DPI myeon chungbunham nida. 150 DPI eseo neolbi 3 foot insswaeemul e neun neolbi 5,400 pixels ga pilyohamnida. Deo gakkai eseo bogi wihae seo neun 10,800 pixels ga pilyohan 300 DPI reul sayong haseyo.",
      },
      {
        question:
          "Nae imiji ui choedae insswae keugi reul eotteoke gyesan hamnikka?",
        answer:
          "Imiji neolbi reul pixels ro gajyeowa daesang DPI ro nanun daeume 12 ro nanumyeon feet reul eodeumnida. Yereul deulmyeon, 150 DPI eseo 6000 pixel imiji neun choedae 3.33 feet neolbi ro insswae doel su isseumnida (6000 / 150 / 12 = 3.33).",
      },
    ],
    body: {
      heading1: "Pixel eseo feet byeonhwan i eotteoke jakdong habnigga",
      p1: "Pixels reul feet ro byeonhwan hamyeon digital design ui mullijeog cheokdo reul ihaehaneun de doum i doem nida, teukhi daehyeong project eseo. Gongsig eun:",
      formula: "Feet = Pixels / (DPI x 12)",
      p2: "Meonjeo pixels reul inches ro byeonhwan hago (pixels / DPI), geu daeume inches reul feet ro byeonhwan hamnida (inches / 12).",
      heading2: "Ilbanjeog in sayong sarye",
      li1: "Insswae keugi chujeon: Digital imiji ga feet euro eolmana keuge insswae doelji gyeoljeong.",
      li2: "Haesangdo hwag in: Imiji ga mokpyo insswae keugi e chungbunhan pixels reul gajigo inneunji hwagin.",
      li3: "Daehyeong gyehoeg: Baenneo, posteo, ganpan chisu gyehoeg.",
      li4: "Sajin hwagdae: Pumjil i jeohwa doegi jeone choedae hwagdae keugi gyesan.",
      heading3: "Imiji haesangdo eseo insswae keugi (150 DPI)",
      li5: "1920 x 1080 px — 1.07 x 0.6 feet (yak 12.8 x 7.2 inches)",
      li6: "3840 x 2160 px — 2.13 x 1.2 feet (yak 25.6 x 14.4 inches)",
      li7: "7200 x 4800 px — 4 x 2.67 feet (48 x 32 inches)",
      li8: "10800 x 7200 px — 6 x 4 feet (72 x 48 inches)",
      heading4: "Seumateupon sajin eul keun baenneo ro insswae hal su isseumnikka?",
      p3: "12 MP seumateupon kamera neun yak 4,000 x 3,000 pixels imiji reul saengseonghamnida. 150 DPI (jeonsihooe display e jeoghabhan) eseo neun 2.22 x 1.67 feet, yak 26 x 20 inches ro insswae doebnida. 72 DPI (gwanggopan e heoyong ganeunghan) eseo neun gateun imiji ga 4.63 x 3.47 feet ro neoleonam nida. 48 MP pon kamera neun 8,000 x 6,000 pixels reul chwalyeong hamyeo, 150 DPI eseo 4.44 x 3.33 feet ro insswae doebnida. Hyeondae go megapixel pon eun nollaul jeongdo ro keun insswaeemul eul mandeul su isseumna pumjil eun senseo keugi, jomyeong jogeon, imiji noijeu e dallajim nida.",
      heading5: "Pixel su eseo choedae insswae keugi reul eotteoke gyesan hamnikka?",
      p4: "Imiji neolbi reul pixels ro gajyeowa daesang DPI ro nanun daeume 12 ro nanumyeon feet reul eodeumnida. 150 DPI eseo neolbi 6,000 pixel imiji: 6,000 / 150 = 40 inches, 40 / 12 = 3.33 feet. Gyesan doen keugi ga wonhaneun insswae boda jageumyeon, deo nopun haesangdo ui wobon imiji ga pilyohageona deo napeun DPI reul badadeul yeoya hamnida (meon georieseo bogi eneun heoyong doel su isseum). Daebubun ui insswae eobchae neun teukjeong sigeo geori e daehan choeseo heoyong ganeung DPI e daehae joreon hal su isseumnida.",
      heading6: "Peuromessyeoneol kamera neun feet ro eolmana ui haesangdo reul saengseonhamnikka?",
      li9: "24 MP DSLR (6000 x 4000) — 150 DPI eseo 3.33 x 2.22 feet",
      li10: "45 MP mireuriseu (8192 x 5464) — 150 DPI eseo 4.55 x 3.04 feet",
      li11: "61 MP (9504 x 6336) — 150 DPI eseo 5.28 x 3.52 feet",
      li12: "100 MP junghyeong pomaes (11,648 x 8,736) — 150 DPI eseo 6.47 x 4.85 feet",
    },
  },
  it: {
    faq: [
      {
        question: "Come converto i pixels in piedi?",
        answer:
          "Dividi il numero di pixels per DPI, poi dividi per 12. Ad esempio, 3.456 pixels a 96 DPI equivalgono a 3 piedi (3.456 / 96 / 12 = 3).",
      },
      {
        question: "Quanti piedi sono un'immagine larga 1920 pixels?",
        answer:
          "A 96 DPI, un'immagine larga 1920 pixels misura circa 1.67 piedi (circa 20 pollici). A 300 DPI, misura circa 0.53 piedi (circa 6.4 pollici). La dimensione fisica dipende dal DPI.",
      },
      {
        question: "Posso stampare un'immagine web come un grande banner?",
        answer:
          "Dipende dal numero di pixels. Un'immagine 1920 x 1080 a 150 DPI stamperebbe a circa 12.8 x 7.2 pollici, che e solo circa 1 piede di larghezza. Per un banner di 4 piedi, servirebbero almeno 7.200 pixels di larghezza a 150 DPI.",
      },
      {
        question: "Che risoluzione serve per una stampa leggibile a 3 piedi?",
        answer:
          "Per una stampa vista da 3-5 piedi, 150 DPI e sufficiente. Una stampa larga 3 piedi a 150 DPI necessita di 5.400 pixels di larghezza. Per visualizzazione ravvicinata, usa 300 DPI che richiede 10.800 pixels.",
      },
      {
        question:
          "Come calcolo la dimensione massima di stampa della mia immagine?",
        answer:
          "Dividi la larghezza dell'immagine in pixels per il DPI target, poi dividi per 12 per ottenere i piedi. Ad esempio, un'immagine di 6000 pixels a 150 DPI puo stampare fino a 3.33 piedi di larghezza (6000 / 150 / 12 = 3.33).",
      },
    ],
    body: {
      heading1: "Come funziona la conversione da pixels a piedi",
      p1: "Convertire pixels in piedi aiuta a capire la scala fisica dei design digitali, specialmente per progetti di grande formato. La formula e:",
      formula: "Piedi = Pixels / (DPI x 12)",
      p2: "Prima converte i pixels in pollici (pixels / DPI), poi i pollici in piedi (pollici / 12).",
      heading2: "Casi d'uso comuni",
      li1: "Stima delle dimensioni di stampa: Determinare quanto grande sara la stampa di un'immagine digitale in piedi.",
      li2: "Verifica della risoluzione: Verificare se un'immagine ha abbastanza pixels per una dimensione di stampa target.",
      li3: "Pianificazione grande formato: Pianificare le dimensioni di banner, poster e segnaletica.",
      li4: "Ingrandimento fotografico: Calcolare la dimensione massima di ingrandimento prima del degrado della qualita.",
      heading3: "Risoluzione immagine a dimensione di stampa (a 150 DPI)",
      li5: "1920 x 1080 px — 1.07 x 0.6 piedi (circa 12.8 x 7.2 pollici)",
      li6: "3840 x 2160 px — 2.13 x 1.2 piedi (circa 25.6 x 14.4 pollici)",
      li7: "7200 x 4800 px — 4 x 2.67 piedi (48 x 32 pollici)",
      li8: "10800 x 7200 px — 6 x 4 piedi (72 x 48 pollici)",
      heading4: "Si puo stampare una foto da smartphone come grande banner?",
      p3: "Una fotocamera da smartphone da 12 MP produce immagini di circa 4.000 x 3.000 pixels. A 150 DPI (adatto per stand fieristici), si stampa a 2.22 x 1.67 piedi, circa 26 x 20 pollici. A 72 DPI (accettabile per cartelloni), la stessa immagine si estende a 4.63 x 3.47 piedi. Una fotocamera da 48 MP cattura 8.000 x 6.000 pixels, che stampa a 4.44 x 3.33 piedi a 150 DPI. I moderni telefoni ad alto megapixel possono produrre stampe sorprendentemente grandi, ma la qualita dipende dalla dimensione del sensore, dalle condizioni di luce e dal rumore dell'immagine.",
      heading5: "Come calcolare la dimensione massima di stampa dal conteggio dei pixels?",
      p4: "Prendi la larghezza dell'immagine in pixels, dividi per il DPI target, poi dividi per 12 per ottenere i piedi. Per un'immagine larga 6.000 pixels a 150 DPI: 6.000 / 150 = 40 pollici, 40 / 12 = 3.33 piedi. Se la dimensione calcolata e inferiore alla stampa desiderata, serve un'immagine sorgente a risoluzione superiore o bisogna accettare un DPI inferiore (accettabile per visualizzazione a distanza). La maggior parte delle tipografie puo consigliare sul DPI minimo accettabile per distanze di visualizzazione specifiche.",
      heading6: "Che risoluzione producono le fotocamere professionali in piedi?",
      li9: "DSLR 24 MP (6000 x 4000) — 3.33 x 2.22 piedi a 150 DPI",
      li10: "Mirrorless 45 MP (8192 x 5464) — 4.55 x 3.04 piedi a 150 DPI",
      li11: "61 MP (9504 x 6336) — 5.28 x 3.52 piedi a 150 DPI",
      li12: "Medio formato 100 MP (11.648 x 8.736) — 6.47 x 4.85 piedi a 150 DPI",
    },
  },
  nl: {
    faq: [
      {
        question: "Hoe converteer ik pixels naar voeten?",
        answer:
          "Deel het aantal pixels door DPI, deel dan door 12. Bijvoorbeeld, 3.456 pixels bij 96 DPI is 3 voet (3.456 / 96 / 12 = 3).",
      },
      {
        question: "Hoeveel voet is een 1920 pixels breed beeld?",
        answer:
          "Bij 96 DPI beslaat een 1920 pixels breed beeld ongeveer 1.67 voet (circa 20 inches). Bij 300 DPI is het ongeveer 0.53 voet (circa 6.4 inches). De fysieke grootte hangt af van de DPI.",
      },
      {
        question: "Kan ik een webafbeelding als groot spandoek afdrukken?",
        answer:
          "Dat hangt af van het aantal pixels. Een 1920 x 1080 afbeelding bij 150 DPI zou afdrukken op ongeveer 12.8 x 7.2 inches, wat slechts ongeveer 1 voet breed is. Voor een 4-voet spandoek heeft u minstens 7.200 pixels breed bij 150 DPI nodig.",
      },
      {
        question: "Welke resolutie heb ik nodig voor een leesbare print op 3 voet?",
        answer:
          "Voor een print bekeken van 3-5 voet afstand is 150 DPI voldoende. Een 3 voet brede print bij 150 DPI heeft 5.400 pixels breed nodig. Voor dichterbij bekijken, gebruik 300 DPI wat 10.800 pixels vereist.",
      },
      {
        question:
          "Hoe bereken ik de maximale printgrootte van mijn afbeelding?",
        answer:
          "Deel de beeldbreedte in pixels door uw doel-DPI, deel dan door 12 voor voeten. Bijvoorbeeld, een 6000-pixel afbeelding bij 150 DPI kan tot 3.33 voet breed worden afgedrukt (6000 / 150 / 12 = 3.33).",
      },
    ],
    body: {
      heading1: "Hoe pixel naar voet conversie werkt",
      p1: "Het converteren van pixels naar voeten helpt u de fysieke schaal van digitale ontwerpen te begrijpen, vooral voor grootformaat projecten. De formule is:",
      formula: "Voeten = Pixels / (DPI x 12)",
      p2: "Dit converteert eerst pixels naar inches (pixels / DPI), dan inches naar voeten (inches / 12).",
      heading2: "Veelvoorkomende toepassingen",
      li1: "Schatting van printgrootte: Bepalen hoe groot een digitaal beeld in voeten wordt afgedrukt.",
      li2: "Resolutiecontrole: Verifieren of een beeld genoeg pixels heeft voor een doelprintgrootte.",
      li3: "Grootformaat planning: Afmetingen van spandoeken, posters en borden plannen.",
      li4: "Fotovergroting: Maximale vergrotingsgrootte berekenen voordat de kwaliteit afneemt.",
      heading3: "Beeldresolutie naar printgrootte (bij 150 DPI)",
      li5: "1920 x 1080 px — 1.07 x 0.6 voet (circa 12.8 x 7.2 inches)",
      li6: "3840 x 2160 px — 2.13 x 1.2 voet (circa 25.6 x 14.4 inches)",
      li7: "7200 x 4800 px — 4 x 2.67 voet (48 x 32 inches)",
      li8: "10800 x 7200 px — 6 x 4 voet (72 x 48 inches)",
      heading4: "Kunt u een smartphonefoto als groot spandoek afdrukken?",
      p3: "Een 12 MP smartphonecamera produceert beelden van ongeveer 4.000 x 3.000 pixels. Bij 150 DPI (geschikt voor beursdisplays) drukt dat af op 2.22 x 1.67 voet, ongeveer 26 x 20 inches. Bij 72 DPI (acceptabel voor billboards) strekt hetzelfde beeld zich uit tot 4.63 x 3.47 voet. Een 48 MP telefooncamera legt 8.000 x 6.000 pixels vast, wat afdrukt op 4.44 x 3.33 voet bij 150 DPI. Moderne telefoons met hoge megapixels kunnen verrassend grote prints produceren, maar de kwaliteit hangt af van sensorgrootte, lichtomstandigheden en beeldruis.",
      heading5: "Hoe berekent u de maximale printgrootte uit het aantal pixels?",
      p4: "Neem de beeldbreedte in pixels, deel door uw doel-DPI, deel dan door 12 voor voeten. Voor een 6.000 pixels breed beeld bij 150 DPI: 6.000 / 150 = 40 inches, 40 / 12 = 3.33 voet. Als de berekende grootte kleiner is dan uw gewenste print, heeft u een bronafbeelding met hogere resolutie nodig of moet u een lagere DPI accepteren (wat acceptabel is voor afstandsweergave). De meeste drukkerijen kunnen adviseren over de minimaal acceptabele DPI voor specifieke kijkafstanden.",
      heading6: "Welke resolutie produceren professionele camera's in voeten?",
      li9: "24 MP DSLR (6000 x 4000) — 3.33 x 2.22 voet bij 150 DPI",
      li10: "45 MP spiegelloos (8192 x 5464) — 4.55 x 3.04 voet bij 150 DPI",
      li11: "61 MP (9504 x 6336) — 5.28 x 3.52 voet bij 150 DPI",
      li12: "100 MP middenformaat (11.648 x 8.736) — 6.47 x 4.85 voet bij 150 DPI",
    },
  },
  ar: {
    faq: [
      {
        question: "Kayfa uhawwil al-pixels ila aqdam?",
        answer:
          "Iqsim adad al-pixels ala DPI, thumma iqsim ala 12. Mathalan, 3,456 pixels inda 96 DPI tusawi 3 aqdam (3,456 / 96 / 12 = 3).",
      },
      {
        question: "Kam qadam fi surah bi-ard 1920 pixels?",
        answer:
          "Inda 96 DPI, surah bi-ard 1920 pixel tamtadd taqriban 1.67 qadam (hawali 20 inch). Inda 300 DPI, tamtadd hawali 0.53 qadam (hawali 6.4 inch). Al-hajm al-fizya'i ya'tamid ala DPI.",
      },
      {
        question: "Hal yumkinuni tiba'at surah web ka-la'fitah kabirah?",
        answer:
          "Ya'tamid ala adad al-pixels. Surah 1920 x 1080 inda 150 DPI satatba' bi-hawali 12.8 x 7.2 inch, wa hiya faqat hawali qadam wahid ardan. Li-la'fitah bi-ard 4 aqdam, tahtaj ala al-aqall 7,200 pixel ardan inda 150 DPI.",
      },
      {
        question: "Ma al-duqqah al-matluubah li-tiba'ah maqru'ah ala bu'd 3 aqdam?",
        answer:
          "Li-tiba'ah tush-had min 3-5 aqdam, 150 DPI kafi. Tiba'ah bi-ard 3 aqdam inda 150 DPI tahtaj 5,400 pixel ardan. Li-mushaahadah aqrab, istakhdam 300 DPI alladhi yatatallab 10,800 pixel.",
      },
      {
        question:
          "Kayfa ahsub al-hajm al-aqsa lil-tiba'ah min surati?",
        answer:
          "Iqsim ard al-surah bil-pixels ala DPI al-hadaf, thumma iqsim ala 12 lil-husul ala al-aqdam. Mathalan, surah bi-ard 6000 pixel inda 150 DPI yumkin tiba'atuha bi-ard yasl ila 3.33 qadam (6000 / 150 / 12 = 3.33).",
      },
    ],
    body: {
      heading1: "Kayfa ya'mal tahwil al-pixels ila aqdam",
      p1: "Tahwil al-pixels ila aqdam yusa'iduk fi fahm al-miqyas al-fizya'i lil-tasamim al-raqamiyyah, khassatan lil-masharii' al-kabirah. Al-sighah hiya:",
      formula: "Aqdam = Pixels / (DPI x 12)",
      p2: "Hatha yuhawwil awwalan al-pixels ila inches (pixels / DPI), thumma al-inches ila aqdam (inches / 12).",
      heading2: "Halat al-istikhdam al-sha'i'ah",
      li1: "Taqdir hajm al-tiba'ah: Tahdid hajm tiba'at surah raqamiyyah bil-aqdam.",
      li2: "Fahs al-duqqah: Al-tahaqquq min anna al-surah tahtawi ala pixels kafiyah li-hajm tiba'ah mustahdaf.",
      li3: "Takhtit al-hajm al-kabir: Takhtit ab'ad al-la'fitat wal-mulassaqat wal-lawhaat.",
      li4: "Takbir al-suwar: Hisab aqsa hajm takbir qabl tadahwur al-jawdah.",
      heading3: "Duqqat al-surah ila hajm al-tiba'ah (inda 150 DPI)",
      li5: "1920 x 1080 px — 1.07 x 0.6 aqdam (hawali 12.8 x 7.2 inches)",
      li6: "3840 x 2160 px — 2.13 x 1.2 aqdam (hawali 25.6 x 14.4 inches)",
      li7: "7200 x 4800 px — 4 x 2.67 aqdam (48 x 32 inches)",
      li8: "10800 x 7200 px — 6 x 4 aqdam (72 x 48 inches)",
      heading4: "Hal yumkinuka tiba'at surah hatif dhaki ka-la'fitah kabirah?",
      p3: "Kamira hatif dhaki bi-12 MP tuntij suwar bi-hawali 4,000 x 3,000 pixels. Inda 150 DPI (munasib li-shashaat al-ma'arid), tatba' bi-2.22 x 1.67 aqdam, taqriban 26 x 20 inch. Inda 72 DPI (maqbul li-lawhaat al-i'lanat), nafs al-surah tamtadd ila 4.63 x 3.47 aqdam. Kamira hatif bi-48 MP taltaqit 8,000 x 6,000 pixels, alati tatba' bi-4.44 x 3.33 aqdam inda 150 DPI. Al-hawatif al-hadithah dhat al-megapixels al-aliyah yumkinuha intaj matbu'at kabirah bi-shakl mufaji', wa lakin al-jawdah ta'tamid ala hajm al-mustashi'r wa dhuruf al-ida'ah wa dawsha' al-surah.",
      heading5: "Kayfa tahsub aqsa hajm tiba'ah min adad al-pixels?",
      p4: "Khudh ard al-surah bil-pixels, iqsim ala DPI al-hadaf, thumma iqsim ala 12 lil-husul ala al-aqdam. Li-surah bi-ard 6,000 pixel inda 150 DPI: 6,000 / 150 = 40 inch, 40 / 12 = 3.33 aqdam. Idha kan al-hajm al-mahsub asghar min al-tiba'ah al-matluubah, fa-innaka tahtaj ila surah masdariyyah bi-duqqah a'la aw yajib qubul DPI aqall (wa huwa maqbul lil-mushaahadah min ba'id). Mu'tham matabi' al-tiba'ah yumkinuha taqdim nasiha hawl al-hadd al-adna al-maqbul min DPI li-masafat mushaahadah muhadaddah.",
      heading6: "Ma al-duqqah allati tuntijuha al-kameerat al-mihnatiyyah bil-aqdam?",
      li9: "DSLR 24 MP (6000 x 4000) — 3.33 x 2.22 aqdam inda 150 DPI",
      li10: "Mirrorless 45 MP (8192 x 5464) — 4.55 x 3.04 aqdam inda 150 DPI",
      li11: "61 MP (9504 x 6336) — 5.28 x 3.52 aqdam inda 150 DPI",
      li12: "Medium format 100 MP (11,648 x 8,736) — 6.47 x 4.85 aqdam inda 150 DPI",
    },
  },
  tr: {
    faq: [
      {
        question: "Pixels'i feet'e nasil donustururum?",
        answer:
          "Pixel sayisini DPI'ya bolun, sonra 12'ye bolun. Ornegin, 96 DPI'da 3,456 pixels 3 feet eder (3,456 / 96 / 12 = 3).",
      },
      {
        question: "1920 pixel genisliginde bir goruntu kac feet eder?",
        answer:
          "96 DPI'da 1920 pixel genisliginde bir goruntu yaklasik 1.67 feet (yaklasik 20 inches) kaplar. 300 DPI'da yaklasik 0.53 feet (yaklasik 6.4 inches) kaplar. Fiziksel boyut DPI'ya baglidir.",
      },
      {
        question: "Web goruntusunu buyuk afis olarak basabilir miyim?",
        answer:
          "Pixel sayisina baglidir. 150 DPI'da 1920 x 1080 goruntu yaklasik 12.8 x 7.2 inches olarak basilir, bu sadece yaklasik 1 foot genisligindedir. 4 foot'luk bir afis icin 150 DPI'da en az 7,200 pixels genislik gerekir.",
      },
      {
        question: "3 feet mesafede okunabilir bir baski icin ne kadar cozunurluk gerekir?",
        answer:
          "3-5 feet mesafeden gorulen bir baski icin 150 DPI yeterlidir. 150 DPI'da 3 foot genisliginde bir baski 5,400 pixels genislik gerektirir. Daha yakindan gorunum icin 10,800 pixels gerektiren 300 DPI kullanin.",
      },
      {
        question:
          "Goruntumun maksimum baski boyutunu nasil hesaplarim?",
        answer:
          "Goruntu genisligini pixels cinsinden alin, hedef DPI'ya bolun, sonra feet elde etmek icin 12'ye bolun. Ornegin, 150 DPI'da 6000 pixel goruntu en fazla 3.33 feet genislikte basilabilir (6000 / 150 / 12 = 3.33).",
      },
    ],
    body: {
      heading1: "Pixel'den feet'e donusum nasil calisir",
      p1: "Pixels'i feet'e donusturmek, ozellikle buyuk format projeler icin dijital tasarimlarin fiziksel olcegini anlamaniza yardimci olur. Formul:",
      formula: "Feet = Pixels / (DPI x 12)",
      p2: "Bu once pixels'i inches'e cevirir (pixels / DPI), sonra inches'i feet'e cevirir (inches / 12).",
      heading2: "Yaygin kullanim alanlari",
      li1: "Baski boyutu tahmini: Dijital bir goruntunun feet cinsinden ne kadar buyuk basilacagini belirleme.",
      li2: "Cozunurluk kontrolu: Bir goruntunun hedef baski boyutu icin yeterli pixel'e sahip olup olmadigini dogrulama.",
      li3: "Buyuk format planlama: Afis, poster ve tabela boyutlarini planlama.",
      li4: "Foto buyutme: Kalite bozulmadan once maksimum buyutme boyutunu hesaplama.",
      heading3: "Goruntu cozunurlugunden baski boyutuna (150 DPI'da)",
      li5: "1920 x 1080 px — 1.07 x 0.6 feet (yaklasik 12.8 x 7.2 inches)",
      li6: "3840 x 2160 px — 2.13 x 1.2 feet (yaklasik 25.6 x 14.4 inches)",
      li7: "7200 x 4800 px — 4 x 2.67 feet (48 x 32 inches)",
      li8: "10800 x 7200 px — 6 x 4 feet (72 x 48 inches)",
      heading4: "Akilli telefon fotografini buyuk afis olarak basabilir misiniz?",
      p3: "12 MP akilli telefon kamerasi yaklasik 4,000 x 3,000 pixels goruntu uretir. 150 DPI'da (fuar stantlari icin uygun) 2.22 x 1.67 feet, yaklasik 26 x 20 inches olarak basilir. 72 DPI'da (reklam panolari icin kabul edilebilir) ayni goruntu 4.63 x 3.47 feet'e uzanir. 48 MP telefon kamerasi 8,000 x 6,000 pixels yakalar ve 150 DPI'da 4.44 x 3.33 feet olarak basilir. Modern yuksek megapixel telefonlar sasirtici derecede buyuk baskilar uretebilir, ancak kalite sensor boyutu, aydinlatma kosullari ve goruntu gurultusune baglidir.",
      heading5: "Pixel sayisindan maksimum baski boyutunu nasil hesaplarsiniz?",
      p4: "Goruntu genisligini pixels cinsinden alin, hedef DPI'ya bolun, sonra feet elde etmek icin 12'ye bolun. 150 DPI'da 6,000 pixel genisliginde goruntu: 6,000 / 150 = 40 inches, 40 / 12 = 3.33 feet. Hesaplanan boyut istediginiz baskidan kucukse, daha yuksek cozunurluklu bir kaynak goruntu gerekir veya daha dusuk bir DPI kabul etmeniz gerekir (uzaktan gorunum icin kabul edilebilir). Cogu matbaa belirli gorus mesafeleri icin kabul edilebilir minimum DPI konusunda tavsiye verebilir.",
      heading6: "Profesyonel kameralar feet cinsinden ne kadar cozunurluk uretir?",
      li9: "24 MP DSLR (6000 x 4000) — 150 DPI'da 3.33 x 2.22 feet",
      li10: "45 MP aynasiz (8192 x 5464) — 150 DPI'da 4.55 x 3.04 feet",
      li11: "61 MP (9504 x 6336) — 150 DPI'da 5.28 x 3.52 feet",
      li12: "100 MP orta format (11,648 x 8,736) — 150 DPI'da 6.47 x 4.85 feet",
    },
  },
  pl: {
    faq: [
      {
        question: "Jak przekonwertowac piksele na stopy?",
        answer:
          "Podziel liczbe pikseli przez DPI, nastepnie podziel przez 12. Na przyklad, 3456 pikseli przy 96 DPI to 3 stopy (3456 / 96 / 12 = 3).",
      },
      {
        question: "Ile stop ma obraz o szerokosci 1920 pikseli?",
        answer:
          "Przy 96 DPI obraz o szerokosci 1920 pikseli rozciaga sie na okolo 1.67 stopy (okolo 20 cali). Przy 300 DPI to okolo 0.53 stopy (okolo 6.4 cala). Rozmiar fizyczny zalezy od DPI.",
      },
      {
        question: "Czy moge wydrukowac obraz webowy jako duzy baner?",
        answer:
          "Zalezy od liczby pikseli. Obraz 1920 x 1080 przy 150 DPI wydrukuje sie na okolo 12.8 x 7.2 cali, co daje tylko okolo 1 stopy szerokosci. Na 4-stopowy baner potrzebujesz co najmniej 7200 pikseli szerokosci przy 150 DPI.",
      },
      {
        question: "Jaka rozdzielczosc potrzebuje do czytelnego wydruku na 3 stopy?",
        answer:
          "Dla wydruku ogladanego z 3-5 stop, 150 DPI jest wystarczajace. Wydruk o szerokosci 3 stop przy 150 DPI wymaga 5400 pikseli szerokosci. Do blizszego ogladania uzyj 300 DPI, co wymaga 10800 pikseli.",
      },
      {
        question:
          "Jak obliczyc maksymalny rozmiar wydruku mojego obrazu?",
        answer:
          "Podziel szerokosc obrazu w pikselach przez docelowe DPI, nastepnie podziel przez 12, aby uzyskac stopy. Na przyklad, obraz o 6000 pikselach przy 150 DPI moze byc wydrukowany do 3.33 stop szerokosci (6000 / 150 / 12 = 3.33).",
      },
    ],
    body: {
      heading1: "Jak dziala konwersja pikseli na stopy",
      p1: "Konwersja pikseli na stopy pomaga zrozumiec fizyczna skale cyfrowych projektow, szczegolnie dla wielkoformatowych projektow. Wzor to:",
      formula: "Stopy = Piksele / (DPI x 12)",
      p2: "Najpierw konwertuje piksele na cale (piksele / DPI), nastepnie cale na stopy (cale / 12).",
      heading2: "Typowe zastosowania",
      li1: "Szacowanie rozmiaru wydruku: Okreslanie jak duzy bedzie wydruk cyfrowego obrazu w stopach.",
      li2: "Sprawdzanie rozdzielczosci: Weryfikacja czy obraz ma wystarczajaco pikseli dla docelowego rozmiaru wydruku.",
      li3: "Planowanie wielkiego formatu: Planowanie wymiarow banerow, plakatow i oznakowan.",
      li4: "Powiekszanie zdjec: Obliczanie maksymalnego rozmiaru powiekszenia przed degradacja jakosci.",
      heading3: "Rozdzielczosc obrazu do rozmiaru wydruku (przy 150 DPI)",
      li5: "1920 x 1080 px — 1.07 x 0.6 stop (okolo 12.8 x 7.2 cali)",
      li6: "3840 x 2160 px — 2.13 x 1.2 stop (okolo 25.6 x 14.4 cali)",
      li7: "7200 x 4800 px — 4 x 2.67 stop (48 x 32 cali)",
      li8: "10800 x 7200 px — 6 x 4 stop (72 x 48 cali)",
      heading4: "Czy mozna wydrukowac zdjecie ze smartfona jako duzy baner?",
      p3: "Aparat smartfona 12 MP produkuje obrazy o wymiarach okolo 4000 x 3000 pikseli. Przy 150 DPI (odpowiednie dla standow targowych) drukuje sie to na 2.22 x 1.67 stop, okolo 26 x 20 cali. Przy 72 DPI (akceptowalne dla billboardow) ten sam obraz rozciaga sie na 4.63 x 3.47 stop. Aparat telefoniczny 48 MP rejestruje 8000 x 6000 pikseli, co drukuje sie na 4.44 x 3.33 stop przy 150 DPI. Nowoczesne telefony o wysokiej liczbie megapikseli moga produkowac zaskakujaco duze wydruki, ale jakosc zalezy od rozmiaru czujnika, warunkow oswietlenia i szumu obrazu.",
      heading5: "Jak obliczyc maksymalny rozmiar wydruku z liczby pikseli?",
      p4: "Wez szerokosc obrazu w pikselach, podziel przez docelowy DPI, nastepnie podziel przez 12, aby uzyskac stopy. Dla obrazu o szerokosci 6000 pikseli przy 150 DPI: 6000 / 150 = 40 cali, 40 / 12 = 3.33 stopy. Jesli obliczony rozmiar jest mniejszy niz pozadany wydruk, potrzebujesz obrazu zrodlowego o wyzszej rozdzielczosci lub musisz zaakceptowac nizszy DPI (co jest akceptowalne przy ogladaniu z daleka). Wiekszosc drukarn moze doradzic w kwestii minimalnego akceptowalnego DPI dla okreslonych odleglosci ogladania.",
      heading6: "Jaka rozdzielczosc produkuja profesjonalne aparaty w stopach?",
      li9: "24 MP DSLR (6000 x 4000) — 3.33 x 2.22 stop przy 150 DPI",
      li10: "45 MP bezlusterkowy (8192 x 5464) — 4.55 x 3.04 stop przy 150 DPI",
      li11: "61 MP (9504 x 6336) — 5.28 x 3.52 stop przy 150 DPI",
      li12: "100 MP srednioformatowy (11 648 x 8 736) — 6.47 x 4.85 stop przy 150 DPI",
    },
  },
  id: {
    faq: [
      {
        question: "Bagaimana cara mengonversi pixels ke feet?",
        answer:
          "Bagi jumlah pixels dengan DPI, lalu bagi dengan 12. Misalnya, 3.456 pixels pada 96 DPI sama dengan 3 feet (3.456 / 96 / 12 = 3).",
      },
      {
        question: "Berapa feet gambar selebar 1920 pixels?",
        answer:
          "Pada 96 DPI, gambar selebar 1920 pixels mencakup sekitar 1.67 feet (sekitar 20 inches). Pada 300 DPI, mencakup sekitar 0.53 feet (sekitar 6.4 inches). Ukuran fisik tergantung pada DPI.",
      },
      {
        question: "Bisakah saya mencetak gambar web sebagai spanduk besar?",
        answer:
          "Tergantung jumlah pixels. Gambar 1920 x 1080 pada 150 DPI akan tercetak sekitar 12.8 x 7.2 inci, yang hanya sekitar 1 foot lebarnya. Untuk spanduk 4 feet, Anda membutuhkan setidaknya lebar 7.200 pixels pada 150 DPI.",
      },
      {
        question: "Resolusi berapa yang dibutuhkan untuk cetakan terbaca pada 3 feet?",
        answer:
          "Untuk cetakan yang dilihat dari 3-5 feet, 150 DPI sudah cukup. Cetakan selebar 3 feet pada 150 DPI membutuhkan lebar 5.400 pixels. Untuk tampilan lebih dekat, gunakan 300 DPI yang membutuhkan 10.800 pixels.",
      },
      {
        question:
          "Bagaimana menghitung ukuran cetak maksimum gambar saya?",
        answer:
          "Bagi lebar gambar dalam pixels dengan DPI target, lalu bagi dengan 12 untuk mendapatkan feet. Misalnya, gambar 6000 pixels pada 150 DPI dapat dicetak hingga 3.33 feet lebar (6000 / 150 / 12 = 3.33).",
      },
    ],
    body: {
      heading1: "Cara kerja konversi pixels ke feet",
      p1: "Mengonversi pixels ke feet membantu memahami skala fisik desain digital, terutama untuk proyek format besar. Rumusnya adalah:",
      formula: "Feet = Pixels / (DPI x 12)",
      p2: "Ini pertama mengonversi pixels ke inches (pixels / DPI), lalu inches ke feet (inches / 12).",
      heading2: "Kasus penggunaan umum",
      li1: "Estimasi ukuran cetak: Menentukan seberapa besar gambar digital akan tercetak dalam feet.",
      li2: "Pemeriksaan resolusi: Memverifikasi apakah gambar memiliki cukup pixels untuk ukuran cetak target.",
      li3: "Perencanaan format besar: Merencanakan dimensi spanduk, poster, dan papan nama.",
      li4: "Pembesaran foto: Menghitung ukuran pembesaran maksimum sebelum kualitas menurun.",
      heading3: "Resolusi gambar ke ukuran cetak (pada 150 DPI)",
      li5: "1920 x 1080 px — 1.07 x 0.6 feet (sekitar 12.8 x 7.2 inches)",
      li6: "3840 x 2160 px — 2.13 x 1.2 feet (sekitar 25.6 x 14.4 inches)",
      li7: "7200 x 4800 px — 4 x 2.67 feet (48 x 32 inches)",
      li8: "10800 x 7200 px — 6 x 4 feet (72 x 48 inches)",
      heading4: "Bisakah Anda mencetak foto smartphone sebagai spanduk besar?",
      p3: "Kamera smartphone 12 MP menghasilkan gambar sekitar 4.000 x 3.000 pixels. Pada 150 DPI (cocok untuk display pameran), tercetak pada 2.22 x 1.67 feet, sekitar 26 x 20 inches. Pada 72 DPI (dapat diterima untuk billboard), gambar yang sama membentang hingga 4.63 x 3.47 feet. Kamera telepon 48 MP menangkap 8.000 x 6.000 pixels, yang tercetak pada 4.44 x 3.33 feet pada 150 DPI. Telepon modern bermegapiksel tinggi dapat menghasilkan cetakan yang sangat besar, tetapi kualitas tergantung pada ukuran sensor, kondisi pencahayaan, dan noise gambar.",
      heading5: "Bagaimana menghitung ukuran cetak maksimum dari jumlah pixels?",
      p4: "Ambil lebar gambar dalam pixels, bagi dengan DPI target, lalu bagi dengan 12 untuk mendapatkan feet. Untuk gambar selebar 6.000 pixels pada 150 DPI: 6.000 / 150 = 40 inches, 40 / 12 = 3.33 feet. Jika ukuran yang dihitung lebih kecil dari cetakan yang diinginkan, Anda membutuhkan gambar sumber beresolusi lebih tinggi atau harus menerima DPI yang lebih rendah (yang dapat diterima untuk tampilan dari jauh). Sebagian besar percetakan dapat memberi saran tentang DPI minimum yang dapat diterima untuk jarak pandang tertentu.",
      heading6: "Resolusi berapa yang dihasilkan kamera profesional dalam feet?",
      li9: "DSLR 24 MP (6000 x 4000) — 3.33 x 2.22 feet pada 150 DPI",
      li10: "Mirrorless 45 MP (8192 x 5464) — 4.55 x 3.04 feet pada 150 DPI",
      li11: "61 MP (9504 x 6336) — 5.28 x 3.52 feet pada 150 DPI",
      li12: "Medium format 100 MP (11.648 x 8.736) — 6.47 x 4.85 feet pada 150 DPI",
    },
  },
  ru: {
    faq: [
      {
        question: "Kak konvertirovat' pikseli v futy?",
        answer:
          "Razdelite kolichestvo pikselej na DPI, zatem razdelite na 12. Naprimer, 3456 pikselej pri 96 DPI ravno 3 futam (3456 / 96 / 12 = 3).",
      },
      {
        question: "Skol'ko fut v izobrazhenii shirinoj 1920 pikselej?",
        answer:
          "Pri 96 DPI izobrazhenie shirinoj 1920 pikselej zanimaet okolo 1.67 fut (okolo 20 dyujmov). Pri 300 DPI — okolo 0.53 fut (okolo 6.4 dyujmov). Fizicheskij razmer zavisit ot DPI.",
      },
      {
        question: "Mogu li ya raspetchat' veb-izobrazhenie kak bol'shoj banner?",
        answer:
          "Zavisit ot kolichestva pikselej. Izobrazhenie 1920 x 1080 pri 150 DPI napechataetsya priblizitel'no 12.8 x 7.2 dyujmov, chto sostavlyaet tol'ko okolo 1 futa v shirinu. Dlya bannera shirinoj 4 futa vam ponadobitsya ne menee 7200 pikselej v shirinu pri 150 DPI.",
      },
      {
        question: "Kakoe razreshenie nuzhno dlya chitaemoj pechati na 3 futah?",
        answer:
          "Dlya pechati, prosmatrivaemoj s 3-5 fut, 150 DPI dostatochno. Pechat' shirinoj 3 futa pri 150 DPI trebuet 5400 pikselej v shirinu. Dlya bolee blizkogo prosmotra ispol'zujte 300 DPI, chto trebuet 10800 pikselej.",
      },
      {
        question:
          "Kak rasschitat' maksimal'nyj razmer pechati moego izobrazheniya?",
        answer:
          "Razdelite shirinu izobrazheniya v pikselyah na celevoj DPI, zatem razdelite na 12, chtoby poluchit' futy. Naprimer, izobrazhenie shirinoj 6000 pikselej pri 150 DPI mozhet byt' napechatano shirinoj do 3.33 fut (6000 / 150 / 12 = 3.33).",
      },
    ],
    body: {
      heading1: "Kak rabotaet konversiya pikselej v futy",
      p1: "Konversiya pikselej v futy pomogaet ponyat' fizicheskij masshtab cifrovykh dizajnov, osobenno dlya krupnoformatnykh proektov. Formula:",
      formula: "Futy = Pikseli / (DPI x 12)",
      p2: "Snachala pikseli preobrazuyutsya v dyujmy (pikseli / DPI), zatem dyujmy v futy (dyujmy / 12).",
      heading2: "Rasprostranennye scenarii ispol'zovaniya",
      li1: "Ocenka razmera pechati: Opredelenie togo, naskolko bol'shim budet otpechatok cifrovogo izobrazheniya v futah.",
      li2: "Proverka razresheniya: Proverka nalichiya dostatochnogo kolichestva pikselej dlya celevogo razmera pechati.",
      li3: "Planirovanie krupnogo formata: Planirovanie razmerov bannerov, plakatov i vyvesok.",
      li4: "Uvelichenie fotografij: Raschet maksimal'nogo razmera uvelicheniya do ukhudsheniya kachestva.",
      heading3: "Razreshenie izobrazheniya k razmeru pechati (pri 150 DPI)",
      li5: "1920 x 1080 px — 1.07 x 0.6 fut (okolo 12.8 x 7.2 dyujmov)",
      li6: "3840 x 2160 px — 2.13 x 1.2 fut (okolo 25.6 x 14.4 dyujmov)",
      li7: "7200 x 4800 px — 4 x 2.67 fut (48 x 32 dyujmov)",
      li8: "10800 x 7200 px — 6 x 4 fut (72 x 48 dyujmov)",
      heading4: "Mozhno li napechatat' foto so smartfona kak bol'shoj banner?",
      p3: "Kamera smartfona na 12 MP sozdaet izobrazheniya okolo 4000 x 3000 pikselej. Pri 150 DPI (podhodyashchij dlya vystavochnykh stendov) eto pechatayetsya na 2.22 x 1.67 fut, primerno 26 x 20 dyujmov. Pri 72 DPI (priemlemyj dlya bilbordov) to zhe izobrazhenie rastyagivaetsya do 4.63 x 3.47 fut. Kamera telefona na 48 MP snimayat 8000 x 6000 pikselej, chto pechatayetsya na 4.44 x 3.33 fut pri 150 DPI. Sovremennye telefony s vysokim kolichestvom megapikselej mogut sozdavat' udivitel'no bol'shie otpechatki, no kachestvo zavisit ot razmera sensora, uslovij osveshcheniya i shuma izobrazheniya.",
      heading5: "Kak rasschitat' maksimal'nyj razmer pechati po kolichestvu pikselej?",
      p4: "Voz'mite shirinu izobrazheniya v pikselyah, razdelite na celevoj DPI, zatem razdelite na 12, chtoby poluchit' futy. Dlya izobrazheniya shirinoj 6000 pikselej pri 150 DPI: 6000 / 150 = 40 dyujmov, 40 / 12 = 3.33 fut. Yesli rasschetnyj razmer men'she zhelaemogo otpechatka, vam nuzhno izobrazhenie-istochnik s bolee vysokim razresheniem ili pridetsya soglasit'sya s bolee nizkim DPI (chto priemlemmo dlya dal'nego prosmotra). Bol'shinstvo tipografij mogut posovetovat' minimal'no dopustimyj DPI dlya konkretnykh rasstoyanij prosmotra.",
      heading6: "Kakoe razreshenie professionalnye kamery dayut v futah?",
      li9: "DSLR 24 MP (6000 x 4000) — 3.33 x 2.22 fut pri 150 DPI",
      li10: "Bezzerkal'nyj 45 MP (8192 x 5464) — 4.55 x 3.04 fut pri 150 DPI",
      li11: "61 MP (9504 x 6336) — 5.28 x 3.52 fut pri 150 DPI",
      li12: "Srednij format 100 MP (11 648 x 8 736) — 6.47 x 4.85 fut pri 150 DPI",
    },
  },
};
