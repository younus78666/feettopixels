import type { LocalizedDocMap } from "./doc-types";

export const content: LocalizedDocMap = {
  "en": {
    "faq": [
      {
        "question": "What happens when I convert from 72 DPI to 300 DPI?",
        "answer": "The pixel count stays the same, but the physical print size decreases. A 10-inch wide image at 72 DPI (720 pixels) becomes only 2.4 inches wide at 300 DPI, because more pixels are packed into each inch."
      },
      {
        "question": "Can I increase DPI without losing quality?",
        "answer": "Simply changing the DPI metadata does not add pixels - it only changes how densely existing pixels are printed. To maintain print size at a higher DPI, you would need to upscale the image, which may reduce quality unless done with AI upscaling tools."
      },
      {
        "question": "What DPI should I use for printing?",
        "answer": "300 DPI is the standard for professional printing (brochures, magazines, photos). 150 DPI is acceptable for large-format posters viewed from a distance. Billboard printing can use as low as 30-50 DPI."
      },
      {
        "question": "What DPI are web images typically?",
        "answer": "Web images are typically 72 or 96 DPI. However, DPI does not matter on screen - only pixel dimensions matter for web display. A 1000px wide image appears the same on screen whether it is set to 72, 96, or 300 DPI."
      },
      {
        "question": "How do I convert a web image for print?",
        "answer": "Enter the web DPI (usually 72) as current DPI and 300 as target DPI, along with the current print size. The calculator shows the new (smaller) print size. If the result is too small, you will need a higher-resolution source image."
      }
    ],
    "sections": [
      {
        "id": "how-it-works",
        "title": "How the DPI Converter Works",
        "paragraphs": [
          "The DPI Converter changes the DPI metadata tag of an image without touching its pixel data. This sounds like a minor operation, but it fundamentally changes how a printer interprets the file. An image has two separate properties: pixel dimensions (how many pixels wide and tall) and DPI (how many of those pixels get packed into one printed inch). Only the second number changes when you 'convert' DPI. The formula relating them is: print-size-in-inches = pixel-dimension / DPI. Double the DPI and the print becomes half as wide for the same pixel count.",
          "Consider a 3000 x 2000 pixel image. At 72 DPI it prints at 3000/72 = 41.7 inches by 27.8 inches - a poster. Change the metadata to 300 DPI and those same pixels now print at 3000/300 = 10 inches by 6.67 inches - a letter-size photo. The file is byte-for-byte identical; only the printing software reads a different density. No pixels are created, destroyed, or resampled. This is why professional printers always request the pixel dimensions in addition to DPI.",
          "For the underlying math behind DPI itself, see what-is-dpi. For calculating DPI from resolution and screen size, use the dpi-calculator. For pure print resolution planning, see pixels-per-inch."
        ]
      },
      {
        "id": "when-to-use",
        "title": "When to Use the DPI Converter",
        "paragraphs": [
          "Changing DPI metadata is most useful when a printer, stock photo site, or client workflow insists on a specific DPI flag even though the pixel data is already adequate. Common situations include:"
        ],
        "list": [
          "Submitting artwork to Adobe Stock, Shutterstock, or other marketplaces that require 300 DPI files.",
          "Preparing press-ready PDFs for a print shop whose preflight checker rejects anything below 300 DPI.",
          "Fixing a phone photo that exports at 72 DPI but is plenty large in pixels for professional print.",
          "Converting scanned documents so they open at the intended physical size in Word or InDesign.",
          "Matching a company brand-asset standard that mandates 300 DPI for all production files.",
          "Preparing fine-art giclee prints where the RIP software uses the embedded DPI to determine paper size."
        ]
      },
      {
        "id": "practical-examples",
        "title": "Practical Examples",
        "paragraphs": [
          "The table below shows how the same 3000 x 2000 pixel image prints at various DPI settings. Pixel count does not change - only the physical print dimensions shift."
        ],
        "table": {
          "headers": ["DPI Setting", "Print Width", "Print Height", "Typical Use"],
          "rows": [
            ["72 DPI", "41.67 in", "27.78 in", "Web/legacy default (do not use for print)"],
            ["96 DPI", "31.25 in", "20.83 in", "CSS reference / Windows default"],
            ["150 DPI", "20.00 in", "13.33 in", "Large poster viewed from 3+ feet"],
            ["200 DPI", "15.00 in", "10.00 in", "Newspaper / low-cost flyer"],
            ["240 DPI", "12.50 in", "8.33 in", "Photo inkjet, minimum quality"],
            ["300 DPI", "10.00 in", "6.67 in", "Professional offset print standard"],
            ["400 DPI", "7.50 in", "5.00 in", "Fine art / coffee-table book"],
            ["600 DPI", "5.00 in", "3.33 in", "Line art / technical illustration"]
          ]
        }
      },
      {
        "id": "common-mistakes",
        "title": "Common Mistakes to Avoid",
        "paragraphs": [
          "The single biggest misconception about DPI is that changing the metadata improves image quality. It does not. A 500 x 500 pixel image tagged as 3000 DPI still prints a blurry postage stamp at 3000 DPI."
        ],
        "list": [
          "Thinking DPI conversion increases resolution - it only relabels existing pixels.",
          "Uploading a 72 DPI image at 800 x 600 pixels and expecting a quality 10-inch photo print (you would need 3000 x 2250 pixels at 300 DPI).",
          "Relying on Photoshop's 'Resample Image' toggle to rescue low-resolution files - upscaling adds pixels by interpolation, not detail.",
          "Saving web images at 300 DPI 'just in case' - web browsers ignore DPI entirely; only pixel dimensions matter on screen.",
          "Confusing DPI with PPI when talking to a print vendor - most shops use them interchangeably, but clarify to avoid confusion.",
          "Forgetting to re-export after changing DPI in the Image Size dialog - some tools only update on save."
        ]
      }
    ]
  },
  "es": {
    "faq": [
      {
        "question": "¿Qué sucede cuando convierto de 72 DPI a 300 DPI?",
        "answer": "El número de píxeles permanece igual, pero el tamaño físico de impresión disminuye. Una imagen de 10 pulgadas de ancho a 72 DPI (720 píxeles) se convierte en solo 2,4 pulgadas de ancho a 300 DPI, porque hay más píxeles en cada pulgada."
      },
      {
        "question": "¿Puedo aumentar el DPI sin perder calidad?",
        "answer": "Simplemente cambiar los metadatos de DPI no agrega píxeles; solo cambia la densidad de los píxeles existentes que se imprimen. Para mantener el tamaño de impresión en un DPI más alto, necesitarás mejorar la imagen, lo que puede reducir la calidad a menos que se haga con herramientas de mejora de IA."
      },
      {
        "question": "¿Qué DPI debo usar para imprimir?",
        "answer": "300 DPI es el estándar para la impresión profesional (folletos, revistas, fotografías). 150 DPI es aceptable para carteles de gran formato vistos desde lejos. La impresión de vallas publicitarias puede utilizar tan solo 30-50 DPI."
      },
      {
        "question": "¿Qué DPI suelen ser las imágenes web?",
        "answer": "Las imágenes web suelen tener 72 o 96 DPI. Sin embargo, el DPI no importa en la pantalla; solo las dimensiones en píxeles importan para la visualización web. Una imagen de 1000 píxeles de ancho aparece igual en la pantalla ya sea que esté configurada en 72, 96 o 300 DPI."
      },
      {
        "question": "¿Cómo convierto una imagen web para imprimir?",
        "answer": "Ingrese el DPI web (generalmente 72) como DPI actual y 300 como DPI objetivo, junto con el tamaño de impresión actual. La calculadora muestra el nuevo tamaño de impresión (más pequeño). Si el resultado es demasiado pequeño, necesitarás una imagen fuente de mayor resolución."
      }
    ],
    "sections": [
      {
        "id": "overview",
        "title": "Descripción general",
        "paragraphs": []
      }
    ]
  },
  "fr": {
    "faq": [
      {
        "question": "Que se passe-t-il lorsque je passe de 72 DPI à 300 DPI ?",
        "answer": "Le nombre de pixels reste le même, mais la taille physique de l'impression diminue. Une image de 10 pouces de large à 72 DPI (720 pixels) ne fait que 2,4 pouces de large à 300 DPI, car chaque pouce contient davantage de pixels."
      },
      {
        "question": "Puis-je augmenter le DPI sans perdre en qualité ?",
        "answer": "La simple modification des métadonnées DPI n'ajoute pas de pixels : elle modifie uniquement la densité d'impression des pixels existants. Pour maintenir la taille d'impression à un DPI plus élevé, vous devrez mettre à l'échelle l'image, ce qui peut réduire la qualité à moins d'utiliser les outils de mise à l'échelle de l'IA."
      },
      {
        "question": "Quel DPI dois-je utiliser pour l'impression ?",
        "answer": "300 DPI est la norme pour l'impression professionnelle (brochures, magazines, photos). 150 DPI est acceptable pour les affiches grand format vues de loin. Billboard printing can use as low as 30-50 DPI."
      },
      {
        "question": "What DPI are web images typically?",
        "answer": "Web images are typically 72 or 96 DPI. Cependant, le DPI n'a pas d'importance à l'écran : seules les dimensions en pixels comptent pour l'affichage sur le Web. Une image de 1 000 px de large apparaît de la même manière à l'écran, qu'elle soit réglée sur 72, 96 ou 300 DPI."
      },
      {
        "question": "Comment convertir une image Web pour l'impression ?",
        "answer": "Entrez le DPI Web (généralement 72) comme DPI actuel et 300 comme DPI cible, ainsi que la taille d'impression actuelle. La calculatrice affiche la nouvelle taille d'impression (plus petite). Si le résultat est trop petit, vous aurez besoin d'une image source de plus haute résolution."
      }
    ],
    "sections": [
      {
        "id": "overview",
        "title": "Présentation",
        "paragraphs": []
      }
    ]
  },
  "de": {
    "faq": [
      {
        "question": "Was passiert, wenn ich von 72 DPI auf 300 DPI konvertiere?",
        "answer": "Die Pixelanzahl bleibt gleich, aber die physische Druckgröße nimmt ab. Ein 10 Zoll breites Bild bei 72 DPI (720 Pixel) wird bei 300 DPI nur 2,4 Zoll breit, weil in jeden Zoll mehr Pixel gepackt werden."
      },
      {
        "question": "Kann ich die DPI erhöhen, ohne an Qualität zu verlieren?",
        "answer": "Eine einfache Änderung der DPI-Metadaten fügt keine Pixel hinzu - es ändert nur, wie dicht vorhandene Pixel gedruckt werden. Um die Druckgröße bei einer höheren DPI beizubehalten, müssten Sie das Bild hochskalieren, was die Qualität beeinträchtigen kann, sofern dies nicht mit KI-Hochskalierungstools durchgeführt wird."
      },
      {
        "question": "Welche DPI sollte ich zum Drucken verwenden?",
        "answer": "300 DPI ist der Standard für professionellen Druck (Broschüren, Zeitschriften, Fotos). Für großformatige Poster aus der Ferne sind 150 DPI akzeptabel. Für den Plakatdruck können nur 30 - 50 DPI verwendet werden."
      },
      {
        "question": "Welche DPI haben Webbilder normalerweise?",
        "answer": "Webbilder haben normalerweise 72 oder 96 DPI. Allerdings spielt die DPI auf dem Bildschirm keine Rolle - für die Webdarstellung sind nur die Pixelabmessungen von Bedeutung. Ein 1000 Pixel breites Bild erscheint auf dem Bildschirm gleich, egal ob es auf 72, 96 oder 300 DPI eingestellt ist."
      },
      {
        "question": "Wie konvertiere ich ein Webbild für den Druck?",
        "answer": "Geben Sie den Web-DPI (normalerweise 72) als aktuellen DPI und 300 als Ziel-DPI zusammen mit der aktuellen Druckgröße ein. Der Rechner zeigt die neue (kleinere) Druckgröße an. Wenn das Ergebnis zu klein ist, benötigen Sie ein höher aufgelöstes Quellbild."
      }
    ],
    "sections": [
      {
        "id": "overview",
        "title": "Übersicht",
        "paragraphs": []
      }
    ]
  },
  "pt": {
    "faq": [
      {
        "question": "O que acontece quando eu converto de 72 DPI para 300 DPI?",
        "answer": "A contagem de pixels permanece a mesma, mas o tamanho físico da impressão diminui. Uma imagem de 10 polegadas de largura a 72 DPI (720 pixels) torna-se apenas 2,4 polegadas de largura a 300 DPI, porque mais pixels são compactados em cada polegada."
      },
      {
        "question": "Posso aumentar o DPI sem perder qualidade?",
        "answer": "Simplesmente alterar os metadados de DPI não adiciona pixels - apenas altera a densidade dos pixels existentes são impressos. Para manter o tamanho de impressão em um DPI mais alto, você precisaria aumentar a escala da imagem, o que pode reduzir a qualidade, a menos que seja feito com ferramentas de aumento de escala de IA."
      },
      {
        "question": "Qual DPI devo usar para impressão?",
        "answer": "300 DPI é o padrão para impressão profissional (brochuras, revistas, fotos). 150 DPI é aceitável para pôsteres de grande formato vistos à distância. A impressão de outdoors pode usar de 30 a 50 DPI."
      },
      {
        "question": "Qual DPI normalmente são as imagens da web?",
        "answer": "As imagens da web normalmente têm 72 ou 96 DPI. No entanto, o DPI não importa na tela - apenas as dimensões em pixels são importantes para a exibição na web. Uma imagem de 1000 pixels de largura aparece da mesma forma na tela, esteja definida como 72, 96 ou 300 DPI."
      },
      {
        "question": "Como faço para converter uma imagem da web para impressão?",
        "answer": "Insira o DPI da web (geralmente 72) como DPI atual e 300 como DPI alvo, junto com o tamanho de impressão atual. A calculadora mostra o novo tamanho de impressão (menor). Se o resultado for muito pequeno, você precisará de uma imagem de origem com resolução mais alta."
      }
    ],
    "sections": [
      {
        "id": "overview",
        "title": "Visão geral",
        "paragraphs": []
      }
    ]
  },
  "hi": {
    "faq": [
      {
        "question": "जब मैं 72 डीपीआई से 300 डीपीआई में परिवर्तित करता हूं तो क्या होता है?",
        "answer": "पिक्सेल गणना वही रहती है, लेकिन भौतिक प्रिंट आकार घट जाता है। 72 डीपीआई (720 पिक्सल) पर 10 इंच चौड़ी छवि 300 डीपीआई पर केवल 2.4 इंच चौड़ी हो जाती है, क्योंकि प्रत्येक इंच में अधिक पिक्सल भरे होते हैं।"
      },
      {
        "question": "क्या मैं गुणवत्ता खोए बिना डीपीआई बढ़ा सकता हूँ?",
        "answer": "केवल DPI मेटाडेटा को बदलने से पिक्सेल नहीं जुड़ते - यह केवल यह बदलता है कि मौजूदा पिक्सेल कितनी सघनता से मुद्रित होते हैं। उच्च डीपीआई पर प्रिंट आकार बनाए रखने के लिए, आपको छवि को अपस्केल करने की आवश्यकता होगी, जो कि एआई अपस्केलिंग टूल के साथ न किए जाने पर गुणवत्ता कम हो सकती है।"
      },
      {
        "question": "मुद्रण के लिए मुझे किस डीपीआई का उपयोग करना चाहिए?",
        "answer": "300 डीपीआई पेशेवर मुद्रण (ब्रोशर, पत्रिकाएं, फोटो) के लिए मानक है। दूर से देखे गए बड़े प्रारूप वाले पोस्टरों के लिए 150 डीपीआई स्वीकार्य है। बिलबोर्ड प्रिंटिंग में कम से कम 30-50 डीपीआई का उपयोग किया जा सकता है।"
      },
      {
        "question": "आमतौर पर वेब छवियां कौन सी डीपीआई होती हैं?",
        "answer": "वेब छवियां आम तौर पर 72 या 96 डीपीआई होती हैं। हालाँकि, स्क्रीन पर DPI कोई मायने नहीं रखता - वेब डिस्प्ले के लिए केवल पिक्सेल आयाम मायने रखते हैं। 1000px चौड़ी छवि स्क्रीन पर समान दिखाई देती है, चाहे वह 72, 96, या 300 DPI पर सेट हो।"
      },
      {
        "question": "मैं किसी वेब छवि को प्रिंट के लिए कैसे परिवर्तित करूं?",
        "answer": "वर्तमान प्रिंट आकार के साथ वेब डीपीआई (आमतौर पर 72) को वर्तमान डीपीआई के रूप में और 300 को लक्ष्य डीपीआई के रूप में दर्ज करें। कैलकुलेटर नया (छोटा) प्रिंट आकार दिखाता है। यदि परिणाम बहुत छोटा है, तो आपको उच्च-रिज़ॉल्यूशन स्रोत छवि की आवश्यकता होगी।"
      }
    ],
    "sections": [
      {
        "id": "overview",
        "title": "सिंहावलोकन",
        "paragraphs": []
      }
    ]
  },
  "ja": {
    "faq": [
      {
        "question": "72 DPI から 300 DPI に変換するとどうなりますか?",
        "answer": "ピクセル数は変わりませんが、物理的な印刷サイズは小さくなります。 72 DPI (720 ピクセル) で幅 10 インチの画像は、各インチにより多くのピクセルが詰め込まれるため、300 DPI では幅わずか 2.4 インチになります。"
      },
      {
        "question": "品質を落とさずに DPI を増やすことはできますか?",
        "answer": "DPI メタデータを変更するだけではピクセルは追加されません。既存のピクセルが印刷される密度が変更されるだけです。より高い DPI で印刷サイズを維持するには、画像をアップスケーリングする必要がありますが、AI アップスケーリング ツールを使用しない限り、品質が低下する可能性があります。"
      },
      {
        "question": "印刷にはどの DPI を使用すればよいですか?",
        "answer": "300 DPI は、プロフェッショナルな印刷 (パンフレット、雑誌、写真) の標準です。 150 DPI は、遠くから見る大判ポスターの場合に許容されます。看板の印刷では、30～50 DPI という低い DPI を使用できます。"
      },
      {
        "question": "Web 画像の一般的な DPI は何ですか?",
        "answer": "Web 画像の一般的な DPI は 72 または 96 DPI です。ただし、画面上では DPI は重要ではありません。Web 表示ではピクセル寸法のみが重要です。幅 1000 ピクセルの画像は、72、96、または 300 DPI に設定されていても、画面上では同じように表示されます。"
      },
      {
        "question": "Web 画像を印刷用に変換するにはどうすればよいですか?",
        "answer": "現在の DPI として Web DPI (通常は 72) を入力し、ターゲット DPI として 300 を、現在の印刷サイズとともに入力します。計算機には、新しい (小さい) 印刷サイズが表示されます。結果が小さすぎる場合は、より高解像度のソース画像が必要になります。"
      }
    ],
    "sections": [
      {
        "id": "overview",
        "title": "概要",
        "paragraphs": []
      }
    ]
  },
  "ko": {
    "faq": [
      {
        "question": "72 DPI에서 300 DPI로 변환하면 어떻게 되나요?",
        "answer": "픽셀 수는 동일하게 유지되지만 실제 인쇄 크기는 줄어듭니다. 72 DPI(720픽셀)의 10인치 너비 이미지는 300 DPI에서 너비가 2.4인치에 불과합니다. 각 인치에 더 많은 픽셀이 포함되기 때문입니다."
      },
      {
        "question": "품질 저하 없이 DPI를 높일 수 있습니까?",
        "answer": "단순히 DPI 메타데이터를 변경하면 픽셀이 추가되지 않고 기존 픽셀의 밀도만 변경됩니다. 더 높은 DPI에서 인쇄 크기를 유지하려면 이미지를 업스케일해야 하며, AI 업스케일링 도구를 사용하지 않으면 품질이 저하될 수 있습니다."
      },
      {
        "question": "인쇄에는 어떤 DPI를 사용해야 합니까?",
        "answer": "300 DPI는 전문 인쇄(브로셔, 잡지, 사진)의 표준입니다. 멀리서 보는 대형 포스터에는 150DPI가 적합합니다. 빌보드 인쇄에서는 30~50DPI 정도를 사용할 수 있습니다."
      },
      {
        "question": "웹 이미지는 일반적으로 어떤 DPI입니까?",
        "answer": "웹 이미지는 일반적으로 72 또는 96DPI입니다. 그러나 DPI는 화면에서는 중요하지 않습니다. 웹 디스플레이에서는 픽셀 크기만 중요합니다. 1000픽셀 너비의 이미지는 72, 96, 300 DPI로 설정되어 있는지에 관계없이 화면에 동일하게 나타납니다."
      },
      {
        "question": "인쇄용 웹 이미지를 어떻게 변환합니까?",
        "answer": "현재 인쇄 크기와 함께 웹 DPI(보통 72)를 현재 DPI로, 300을 대상 DPI로 입력합니다. 계산기에는 새로운(더 작은) 인쇄 크기가 표시됩니다. 결과가 너무 작으면 더 높은 해상도의 소스 이미지가 필요합니다."
      }
    ],
    "sections": [
      {
        "id": "overview",
        "title": "개요",
        "paragraphs": []
      }
    ]
  },
  "it": {
    "faq": [
      {
        "question": "Cosa succede quando converto da 72 DPI a 300 DPI?",
        "answer": "Il conteggio dei pixel rimane lo stesso, ma la dimensione fisica della stampa diminuisce. Un'immagine larga 10 pollici a 72 DPI (720 pixel) diventa larga solo 2,4 pollici a 300 DPI, perché in ogni pollice sono racchiusi più pixel."
      },
      {
        "question": "Posso aumentare i DPI senza perdere qualità?",
        "answer": "La semplice modifica dei metadati DPI non aggiunge pixel, ma cambia solo la densità dei pixel esistenti che vengono stampati. Per mantenere le dimensioni di stampa a un DPI più elevato, è necessario eseguire l'upscaling dell'immagine, il che potrebbe ridurre la qualità a meno che non venga eseguito con strumenti di upscaling AI."
      },
      {
        "question": "Quali DPI dovrei utilizzare per la stampa?",
        "answer": "300 DPI è lo standard per la stampa professionale (brochure, riviste, foto). 150 DPI sono accettabili per poster di grande formato visualizzati a distanza. La stampa di cartelloni pubblicitari può utilizzare un minimo di 30-50 DPI."
      },
      {
        "question": "Quali DPI sono in genere le immagini Web?",
        "answer": "Le immagini Web sono in genere 72 o 96 DPI. Tuttavia, i DPI non contano sullo schermo: solo le dimensioni dei pixel contano per la visualizzazione sul web. Un'immagine di larghezza 1000 px appare identica sullo schermo indipendentemente dal fatto che sia impostata su 72, 96 o 300 DPI."
      },
      {
        "question": "Come faccio a convertire un'immagine web per la stampa?",
        "answer": "Inserisci il DPI web (solitamente 72) come DPI corrente e 300 come DPI di destinazione, insieme alla dimensione di stampa corrente. La calcolatrice mostra la nuova dimensione di stampa (più piccola). Se il risultato è troppo piccolo, avrai bisogno di un'immagine sorgente con una risoluzione più elevata."
      }
    ],
    "sections": [
      {
        "id": "overview",
        "title": "Panoramica",
        "paragraphs": []
      }
    ]
  },
  "nl": {
    "faq": [
      {
        "question": "Wat gebeurt er als ik converteer van 72 DPI naar 300 DPI?",
        "answer": "Het aantal pixels blijft hetzelfde, maar het fysieke afdrukformaat neemt af. Een afbeelding van 10 inch breed bij 72 DPI (720 pixels) wordt bij 300 DPI slechts 2,4 inch breed, omdat er meer pixels in elke inch zitten."
      },
      {
        "question": "Kan ik de DPI verhogen zonder kwaliteit te verliezen?",
        "answer": "Het simpelweg wijzigen van de DPI-metagegevens voegt geen pixels toe; het verandert alleen hoe dicht de bestaande pixels worden afgedrukt. Om het afdrukformaat op een hogere DPI te behouden, moet je de afbeelding opschalen, wat de kwaliteit kan verminderen, tenzij je dit doet met AI-opschalingstools."
      },
      {
        "question": "Welke DPI moet ik gebruiken voor afdrukken?",
        "answer": "300 DPI is de standaard voor professioneel afdrukken (brochures, tijdschriften, foto's). 150 DPI is acceptabel voor posters van groot formaat, bekeken vanaf een afstand. Bij het afdrukken van billboards kan een snelheid van slechts 30-50 DPI worden gebruikt."
      },
      {
        "question": "Welke DPI zijn webafbeeldingen doorgaans?",
        "answer": "Webafbeeldingen zijn doorgaans 72 of 96 DPI. DPI doet er echter niet toe op het scherm; alleen pixelafmetingen zijn van belang voor webweergave. Een afbeelding van 1000 px breed verschijnt hetzelfde op het scherm, ongeacht of deze is ingesteld op 72, 96 of 300 DPI."
      },
      {
        "question": "Hoe converteer ik een webafbeelding om af te drukken?",
        "answer": "Voer de web-DPI in (meestal 72) als huidige DPI en 300 als doel-DPI, samen met het huidige afdrukformaat. De rekenmachine toont het nieuwe (kleinere) afdrukformaat. Als het resultaat te klein is, heeft u een bronafbeelding met een hogere resolutie nodig."
      }
    ],
    "sections": [
      {
        "id": "overview",
        "title": "Overzicht",
        "paragraphs": []
      }
    ]
  },
  "ar": {
    "faq": [
      {
        "question": "ماذا يحدث عندما أقوم بالتحويل من 72 نقطة لكل بوصة إلى 300 نقطة لكل بوصة؟",
        "answer": "يظل عدد البكسل كما هو، لكن حجم الطباعة الفعلي ينخفض. الصورة ذات العرض 10 بوصة بدقة 72 نقطة لكل بوصة (720 بكسل) تصبح عرضها 2.4 بوصة فقط عند 300 نقطة لكل بوصة، نظرًا لأنه يتم تعبئة المزيد من البكسل في كل بوصة."
      },
      {
        "question": "هل يمكنني زيادة DPI دون فقدان الجودة؟",
        "answer": "لا يؤدي تغيير البيانات التعريفية لـ DPI ببساطة إلى إضافة وحدات بكسل - بل يغير فقط مدى كثافة طباعة وحدات البكسل الموجودة. للحفاظ على حجم الطباعة عند DPI أعلى، ستحتاج إلى ترقية الصورة، الأمر الذي قد يقلل من الجودة ما لم يتم ذلك باستخدام أدوات رفع مستوى الذكاء الاصطناعي."
      },
      {
        "question": "ما هي DPI التي يجب أن أستخدمها للطباعة؟",
        "answer": "300 DPI هي المعيار للطباعة الاحترافية (الكتيبات والمجلات والصور). 150 نقطة في البوصة مقبولة للملصقات كبيرة الحجم التي يتم عرضها من مسافة بعيدة. يمكن أن تستخدم طباعة اللوحات الإعلانية ما يصل إلى 30-50 نقطة لكل بوصة."
      },
      {
        "question": "ما هي DPI التي تمثل صور الويب عادةً؟",
        "answer": "تكون صور الويب عادةً 72 أو 96 نقطة لكل بوصة. ومع ذلك، لا يهم DPI على الشاشة - فقط أبعاد البكسل هي التي تهم لعرض الويب. تظهر الصورة بعرض 1000 بكسل كما هي على الشاشة سواء تم ضبطها على 72 أو 96 أو 300 نقطة في البوصة."
      },
      {
        "question": "كيف يمكنني تحويل صورة ويب للطباعة؟",
        "answer": "أدخل DPI على الويب (عادةً 72) باعتبارها DPI الحالية و300 كنقطة لكل بوصة مستهدفة، بالإضافة إلى حجم الطباعة الحالي. تعرض الآلة الحاسبة حجم الطباعة الجديد (الأصغر). إذا كانت النتيجة صغيرة جدًا، فستحتاج إلى صورة مصدر ذات دقة أعلى."
      }
    ],
    "sections": [
      {
        "id": "overview",
        "title": "نظرة عامة",
        "paragraphs": []
      }
    ]
  },
  "tr": {
    "faq": [
      {
        "question": "72 DPI'dan 300 DPI'ya dönüştürdüğümde ne olur?",
        "answer": "Piksel sayısı aynı kalır ancak fiziksel baskı boyutu azalır. 72 DPI'da (720 piksel) 10 inç genişliğinde bir görüntü, 300 DPI'da yalnızca 2,4 inç genişliğe dönüşür, çünkü her inçte daha fazla piksel bulunur."
      },
      {
        "question": "Kaliteyi kaybetmeden DPI'yi artırabilir miyim?",
        "answer": "DPI meta verilerini yalnızca değiştirmek piksel eklemez; yalnızca mevcut piksellerin ne kadar yoğun yazdırıldığını değiştirir. Baskı boyutunu daha yüksek bir DPI'da korumak için görüntünün ölçeğini yükseltmeniz gerekir; bu, AI yükseltme araçlarıyla yapılmadığı sürece kaliteyi düşürebilir."
      },
      {
        "question": "Yazdırma için hangi DPI'yı kullanmalıyım?",
        "answer": "300 DPI, profesyonel baskı (broşürler, dergiler, fotoğraflar) için standarttır. Uzaktan bakıldığında geniş formatlı posterler için 150 DPI kabul edilebilir bir değerdir. Billboard baskısında 30-50 DPI kadar düşük bir değer kullanılabilir."
      },
      {
        "question": "Web görselleri genellikle hangi DPI'dır?",
        "answer": "Web görselleri genellikle 72 veya 96 DPI'dır. Ancak DPI ekranda önemli değildir; web görüntüsü için yalnızca piksel boyutları önemlidir. 1000 piksel genişliğinde bir görüntü, 72, 96 veya 300 DPI'ye ayarlanmış olsun, ekranda aynı şekilde görünür."
      },
      {
        "question": "Bir web görüntüsünü yazdırma için nasıl dönüştürebilirim?",
        "answer": "Geçerli DPI olarak web DPI'sını (genellikle 72) ve hedef DPI olarak 300'ü, geçerli baskı boyutuyla birlikte girin. Hesap makinesi yeni (daha küçük) baskı boyutunu gösterir. Sonuç çok küçükse daha yüksek çözünürlüklü bir kaynak görsele ihtiyacınız olacaktır."
      }
    ],
    "sections": [
      {
        "id": "overview",
        "title": "Genel Bakış",
        "paragraphs": []
      }
    ]
  },
  "pl": {
    "faq": [
      {
        "question": "Co się stanie, gdy przekonwertuję z 72 DPI na 300 DPI?",
        "answer": "Liczba pikseli pozostaje taka sama, ale fizyczny rozmiar wydruku zmniejsza się. Szeroki obraz o przekątnej 10 cali przy 72 DPI (720 pikseli) ma tylko 2,4 cala przy 300 DPI, ponieważ w każdym calu mieści się więcej pikseli."
      },
      {
        "question": "Czy mogę zwiększyć DPI bez utraty jakości?",
        "answer": "Zwykła zmiana metadanych DPI nie powoduje dodania pikseli - zmienia jedynie gęstość drukowania istniejących pikseli. Aby zachować rozmiar wydruku przy wyższej rozdzielczości DPI, konieczne byłoby przeskalowanie obrazu, co może obniżyć jakość, jeśli nie zostanie to zrobione za pomocą narzędzi do zwiększania skali AI."
      },
      {
        "question": "Jakiej rozdzielczości DPI powinienem używać do drukowania?",
        "answer": "300 DPI to standard w przypadku profesjonalnego druku (broszury, czasopisma, zdjęcia). W przypadku plakatów wielkoformatowych oglądanych z dużej odległości akceptowalna jest rozdzielczość 150 DPI. Do drukowania billboardów można używać rozdzielczości od 30 do 50 DPI."
      },
      {
        "question": "Jakiego DPI są zazwyczaj obrazy internetowe?",
        "answer": "Obrazy internetowe mają zazwyczaj rozdzielczość 72 lub 96 DPI. Jednak DPI nie ma znaczenia na ekranie - w przypadku wyświetlania w Internecie liczą się tylko wymiary w pikselach. Obraz o szerokości 1000 pikseli wygląda tak samo na ekranie, niezależnie od tego, czy jest ustawiony na 72, 96 czy 300 DPI."
      },
      {
        "question": "Jak przekonwertować obraz internetowy do druku?",
        "answer": "Wprowadź internetowe DPI (zwykle 72) jako bieżące DPI i 300 jako docelowe DPI, wraz z bieżącym rozmiarem wydruku. Kalkulator pokazuje nowy (mniejszy) rozmiar wydruku. Jeśli wynik jest za mały, potrzebny będzie obraz źródłowy o wyższej rozdzielczości."
      }
    ],
    "sections": [
      {
        "id": "overview",
        "title": "Przegląd",
        "paragraphs": []
      }
    ]
  },
  "id": {
    "faq": [
      {
        "question": "Apa yang terjadi jika saya mengonversi dari 72 DPI ke 300 DPI?",
        "answer": "Jumlah piksel tetap sama, namun ukuran cetak fisiknya berkurang. Gambar berukuran 10 inci pada 72 DPI (720 piksel) menjadi hanya berukuran 2,4 inci pada 300 DPI, karena semakin banyak piksel yang dimasukkan ke dalam setiap inci."
      },
      {
        "question": "Dapatkah saya meningkatkan DPI tanpa kehilangan kualitas?",
        "answer": "Hanya dengan mengubah metadata DPI tidak akan menambah piksel - ini hanya mengubah seberapa padat piksel yang ada yang dicetak. Untuk mempertahankan ukuran cetakan pada DPI yang lebih tinggi, Anda perlu meningkatkan gambar, yang dapat mengurangi kualitas kecuali jika dilakukan dengan alat peningkatan AI."
      },
      {
        "question": "DPI apa yang harus saya gunakan untuk mencetak?",
        "answer": "300 DPI adalah standar untuk pencetakan profesional (brosur, majalah, foto). 150 DPI dapat diterima untuk poster format besar yang dilihat dari jarak jauh. Pencetakan reklame hanya dapat menggunakan 30-50 DPI."
      },
      {
        "question": "Berapa DPI yang biasanya digunakan pada gambar web?",
        "answer": "Gambar web biasanya berukuran 72 atau 96 DPI. Namun, DPI tidak menjadi masalah di layar - hanya dimensi piksel yang penting untuk tampilan web. Gambar dengan lebar 1000 piksel tampak sama di layar, baik diatur ke 72, 96, atau 300 DPI."
      },
      {
        "question": "Bagaimana cara mengonversi gambar web untuk dicetak?",
        "answer": "Masukkan DPI web (biasanya 72) sebagai DPI saat ini dan 300 sebagai DPI target, bersama dengan ukuran cetakan saat ini. Kalkulator menunjukkan ukuran cetakan baru (lebih kecil). Jika hasilnya terlalu kecil, Anda memerlukan gambar sumber dengan resolusi lebih tinggi."
      }
    ],
    "sections": [
      {
        "id": "overview",
        "title": "Ikhtisar",
        "paragraphs": []
      }
    ]
  },
  "ru": {
    "faq": [
      {
        "question": "Что произойдет, если я перейду с 72 DPI на 300 DPI?",
        "answer": "Количество пикселей останется прежним, но физический размер печати уменьшится. Изображение шириной 10 дюймов при разрешении 72 точек на дюйм (720 пикселей) становится шириной всего 2,4 дюйма при разрешении 300 точек на дюйм, поскольку в каждый дюйм упаковывается больше пикселей."
      },
      {
        "question": "Могу ли я увеличить разрешение без потери качества?",
        "answer": "Простое изменение метаданных DPI не добавляет пикселей - оно только меняет плотность печати существующих пикселей. Чтобы сохранить размер отпечатка с более высоким разрешением, вам потребуется увеличить изображение, что может снизить качество, если это не будет сделано с помощью инструментов масштабирования AI."
      },
      {
        "question": "Какое разрешение мне следует использовать для печати?",
        "answer": "300 DPI - это стандарт для профессиональной печати (брошюр, журналов, фотографий). Разрешение 150 DPI приемлемо для широкоформатных плакатов, просматриваемых на расстоянии. Для печати рекламных щитов можно использовать всего 30 - 50 точек на дюйм."
      },
      {
        "question": "Какое обычно разрешение у веб-изображений?",
        "answer": "Веб-изображения обычно имеют разрешение 72 или 96 точек на дюйм. Однако DPI не имеет значения на экране - для веб-отображения важны только размеры в пикселях. Изображение шириной 1000 пикселей отображается на экране одинаково независимо от того, установлено ли для него разрешение 72, 96 или 300 точек на дюйм."
      },
      {
        "question": "Как преобразовать веб-изображение для печати?",
        "answer": "Введите веб-DPI (обычно 72) в качестве текущего разрешения и 300 в качестве целевого значения DPI вместе с текущим размером печати. Калькулятор показывает новый (меньший) размер печати. Если результат слишком мал, вам понадобится исходное изображение с более высоким разрешением."
      }
    ],
    "sections": [
      {
        "id": "overview",
        "title": "Обзор",
        "paragraphs": []
      }
    ]
  }
};
