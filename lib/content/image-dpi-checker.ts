import type { LocalizedDocMap } from "./doc-types";

export const content: LocalizedDocMap = {
  "en": {
    "faq": [
      {
        "question": "Can this tool read the DPI metadata from an image?",
        "answer": "Yes, for common formats. This tool reads embedded DPI or density metadata from JPEG, PNG, WebP, and BMP files when that metadata is present. If a file has no usable physical-density metadata, the tool falls back to pixel dimensions and shows print size at common target DPI settings."
      },
      {
        "question": "What resolution is needed for quality printing?",
        "answer": "Professional printing requires 300 DPI. For a 4x6 inch print, you need at least 1200x1800 pixels. For an 8x10 print, you need 2400x3000 pixels. Images below these thresholds will appear pixelated when printed."
      },
      {
        "question": "Is my image good enough for a specific print size?",
        "answer": "Upload your image and check the maximum print size table at 300 DPI. If the listed dimensions are larger than your desired print size, the image has sufficient resolution. If smaller, the print may appear blurry."
      },
      {
        "question": "What is the difference between web and print quality images?",
        "answer": "Web images typically need only 72-96 pixels per inch since screens display at fixed pixel density. Print images need 300 pixels per inch for sharp output. A 1000x1000 web image prints at only 3.3x3.3 inches at professional quality."
      },
      {
        "question": "Does this tool upload my image to a server?",
        "answer": "No. All processing happens locally in your browser. Your image never leaves your device. The tool uses browser APIs to read image dimensions, file size, and embedded density metadata directly on your device."
      }
    ],
    "sections": [
      {
        "id": "overview",
        "title": "What an Image DPI Checker Does",
        "paragraphs": [
          "An image DPI checker inspects an image file and reports its pixel dimensions, file size, aspect ratio, and embedded DPI metadata (when present). It tells you immediately whether a file has enough pixels for a specific print size at a specific quality level.",
          "This tool works entirely in your browser. Your images never leave your device, no upload, no server storage, no third-party processing. The browser's built-in Image and File APIs read the pixel dimensions and file structure locally, which means it works offline once the page has loaded and respects your privacy completely."
        ]
      },
      {
        "id": "what-it-reads",
        "title": "What Metadata This Tool Reads",
        "paragraphs": [
          "Every uploaded image is analyzed for pixel width, pixel height, megapixel count (width × height ÷ 1,000,000), file size in bytes, file type (JPEG, PNG, WebP, BMP), and aspect ratio (simplified via greatest common divisor).",
          "When the file includes density metadata, the EXIF or APP0 JFIF tags in JPEGs, the pHYs chunk in PNGs, the VP8X chunk in WebPs, the tool reads the embedded DPI directly. Files without density metadata fall back to showing print-size estimates at common DPI values (72, 150, 300, 600)."
        ]
      },
      {
        "id": "print-size-table",
        "title": "How to Read the Print Size Results",
        "paragraphs": [
          "After analysis, the tool shows the maximum clean print size at each common DPI tier. At 300 DPI (professional print), divide the pixel width by 300 to get inches, e.g. 3000 pixels = 10 inches at professional quality. At 150 DPI (large posters), the same 3000 pixels prints 20 inches wide. At 72 DPI (screen/web-only), the same file prints 41 inches wide but looks pixelated when printed.",
          "Below the maximum sizes, the tool flags which print sizes your image can handle confidently and which are too ambitious. A 2-megapixel image is print-quality at 4x6 inch but struggles beyond 8x10 at 300 DPI. A 12-megapixel image handles prints up to 13x19 at 300 DPI, or 26x38 at 150 DPI for posters."
        ]
      },
      {
        "id": "quality-thresholds",
        "title": "Quality Thresholds by Use Case",
        "table": {
          "headers": ["Use Case", "Minimum Pixels", "Quality"],
          "rows": [
            ["Avatar / thumbnail", "400 x 400", "Fine"],
            ["Social media post", "1080 x 1080", "Fine"],
            ["Web hero image", "1920 x 1080", "Fine"],
            ["4x6 photo print (300 DPI)", "1200 x 1800", "Professional"],
            ["8x10 photo print (300 DPI)", "2400 x 3000", "Professional"],
            ["Magazine page (300 DPI)", "2550 x 3300", "Professional"],
            ["11x17 poster (200 DPI)", "2200 x 3400", "Excellent"],
            ["A2 poster (150 DPI)", "2480 x 3508", "Great"],
            ["Trade show banner (100 DPI)", "4800 x 9600", "Good (far viewing)"],
            ["Billboard (30 DPI)", "3600 x 7200", "Fine (50+ ft away)"]
          ]
        }
      },
      {
        "id": "common-mistakes",
        "title": "Common Mistakes This Tool Catches",
        "paragraphs": [
          "The most common issue: someone downloads a web image and tries to print it poster-sized. A 1200 x 800 image fills a screen beautifully but prints only 4 x 2.7 inches at professional quality. Stretched larger, it pixelates visibly.",
          "Another common issue: high-megapixel camera files where the embedded DPI reads 72 instead of 300. The pixels are there, but the metadata tells print software to lay the image out huge. Most print workflows read image size from pixel count anyway, so this is usually fixable in export settings.",
          "Finally, many images from stock photo sites are served at web-optimized dimensions. Before buying or licensing, use this tool to verify the file has enough pixels for your intended use, 2000 pixels is rarely enough for print, even if it looks fine on a screen."
        ]
      },
      {
        "id": "privacy",
        "title": "Privacy and Local Processing",
        "paragraphs": [
          "Your image data stays on your device. This tool uses the browser's standard File and Image APIs to read pixel dimensions and metadata locally. Nothing is uploaded to any server. Nothing is cached in external services. Nothing is logged by analytics. You can run this tool offline after the page loads.",
          "For sensitive images, medical scans, confidential design mockups, client work under NDA, this local-only processing is essential. Competing online DPI checkers often upload images to a server for processing, which makes them unsuitable for confidential material."
        ]
      }
    ]
  },
  "es": {
    "faq": [
      {
        "question": "¿Puede esta herramienta leer los metadatos de DPI de una imagen?",
        "answer": "Sí, para formatos comunes. Esta herramienta lee metadatos integrados de DPI o densidad en archivos JPEG, PNG, WebP y BMP cuando esos datos están presentes. Si un archivo no tiene metadatos físicos de densidad utilizables, la herramienta usa las dimensiones en píxeles y muestra el tamaño de impresión con ajustes de DPI habituales."
      },
      {
        "question": "¿Qué resolución se necesita para una impresión de calidad?",
        "answer": "La impresión profesional requiere 300 DPI. Para una impresión de 4x6 pulgadas, necesita al menos 1200x1800 píxeles. Para una impresión de 8x10, necesita 2400x3000 píxeles. Las imágenes por debajo de estos umbrales aparecerán pixeladas cuando se impriman."
      },
      {
        "question": "¿Mi imagen es lo suficientemente buena para un tamaño de impresión específico?",
        "answer": "Cargue su imagen y verifique la tabla de tamaños de impresión máximos a 300 DPI. Si las dimensiones enumeradas son mayores que el tamaño de impresión deseado, la imagen tiene suficiente resolución. Si es más pequeña, la impresión puede aparecer borrosa."
      },
      {
        "question": "¿Cuál es la diferencia entre imágenes con calidad de impresión y web?",
        "answer": "Las imágenes web normalmente solo necesitan entre 72 y 96 píxeles por pulgada, ya que las pantallas se muestran con una densidad de píxeles fija. Las imágenes impresas necesitan 300 píxeles por pulgada para obtener resultados nítidos. Una imagen web de 1000x1000 se imprime a solo 3,3x3,3 pulgadas con calidad profesional."
      },
      {
        "question": "¿Esta herramienta carga mi imagen a un servidor?",
        "answer": "No. Todo el procesamiento ocurre localmente en tu navegador. Tu imagen nunca sale de tu dispositivo. La herramienta usa APIs del navegador para leer las dimensiones de la imagen, el tamaño del archivo y los metadatos de densidad integrados directamente en tu dispositivo."
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
        "question": "Cet outil peut-il lire les métadonnées DPI d'une image ?",
        "answer": "Oui, pour les formats courants. Cet outil lit les métadonnées DPI ou de densité intégrées dans les fichiers JPEG, PNG, WebP et BMP lorsque ces données sont présentes. Si un fichier ne contient pas de métadonnées physiques de densité exploitables, l'outil se rabat sur les dimensions en pixels et affiche la taille d'impression selon des réglages DPI courants."
      },
      {
        "question": "Quelle résolution est nécessaire pour une impression de qualité ?",
        "answer": "L'impression professionnelle nécessite 300 DPI. Pour une impression 4x6 pouces, vous avez besoin d'au moins 1200x1800 pixels. Pour une impression 8x10, vous avez besoin de 2400x3000 pixels. Les images inférieures à ces seuils apparaîtront pixélisées une fois imprimées."
      },
      {
        "question": "Mon image est-elle suffisamment bonne pour une taille d'impression spécifique ?",
        "answer": "Téléchargez votre image et vérifiez le tableau des tailles d'impression maximales à 300 DPI. Si les dimensions indiquées sont supérieures à la taille d'impression souhaitée, l'image a une résolution suffisante. Si elle est plus petite, l'impression peut paraître floue."
      },
      {
        "question": "Quelle est la différence entre les images de qualité Web et celles d'impression ?",
        "answer": "Les images Web n'ont généralement besoin que de 72 à 96 pixels par pouce, car les écrans s'affichent avec une densité de pixels fixe. Les images imprimées nécessitent 300 pixels par pouce pour une sortie nette. Une image Web de 1 000 x 1 000 s'imprime à seulement 3,3 x 3,3 pouces avec une qualité professionnelle."
      },
      {
        "question": "Cet outil télécharge-t-il mon image sur un serveur ?",
        "answer": "Non. Tout le traitement s'effectue localement dans votre navigateur. Votre image ne quitte jamais votre appareil. L'outil utilise les API du navigateur pour lire les dimensions de l'image, la taille du fichier et les métadonnées de densité intégrées directement sur votre appareil."
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
        "question": "Kann dieses Tool die DPI-Metadaten eines Bildes lesen?",
        "answer": "Ja, für gängige Formate. Dieses Tool liest eingebettete DPI- oder Dichte-Metadaten aus JPEG-, PNG-, WebP- und BMP-Dateien, wenn diese Daten vorhanden sind. Wenn eine Datei keine nutzbaren physischen Dichte-Metadaten enthält, verwendet das Tool die Pixelabmessungen und zeigt Druckgrößen für gängige DPI-Einstellungen an."
      },
      {
        "question": "Welche Auflösung ist für hochwertiges Drucken erforderlich?",
        "answer": "Für professionelles Drucken sind 300 DPI erforderlich. Für einen 4x6 Zoll großen Druck benötigen Sie mindestens 1200x1800 Pixel. Für einen 8x10-Druck benötigen Sie 2400x3000 Pixel. Bilder unterhalb dieser Grenzwerte werden beim Drucken verpixelt angezeigt."
      },
      {
        "question": "Ist mein Bild gut genug für eine bestimmte Druckgröße?",
        "answer": "Laden Sie Ihr Bild hoch und überprüfen Sie die Tabelle mit der maximalen Druckgröße bei 300 DPI. Wenn die aufgeführten Abmessungen größer als Ihr gewünschtes Druckformat sind, verfügt das Bild über eine ausreichende Auflösung. Wenn es kleiner ist, erscheint der Druck möglicherweise verschwommen."
      },
      {
        "question": "Was ist der Unterschied zwischen Bildern in Web- und Druckqualität?",
        "answer": "Webbilder benötigen normalerweise nur 72 - 96 Pixel pro Zoll, da Bildschirme mit einer festen Pixeldichte angezeigt werden. Für eine scharfe Ausgabe benötigen Druckbilder 300 Pixel pro Zoll. Ein 1000x1000-Webbild wird mit nur 3,3x3,3 Zoll in professioneller Qualität gedruckt."
      },
      {
        "question": "Ladet dieses Tool mein Bild auf einen Server hoch?",
        "answer": "Nein. Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser. Ihr Bild verlässt nie Ihr Gerät. Das Tool verwendet Browser-APIs, um Bildabmessungen, Dateigröße und eingebettete Dichte-Metadaten direkt auf Ihrem Gerät zu lesen."
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
        "question": "Esta ferramenta pode ler os metadados DPI de uma imagem?",
        "answer": "Sim, para formatos comuns. Esta ferramenta lê metadados incorporados de DPI ou densidade em arquivos JPEG, PNG, WebP e BMP quando esses dados estão presentes. Se um arquivo não tiver metadados físicos de densidade utilizáveis, a ferramenta usa as dimensões em pixels e mostra o tamanho de impressão com configurações comuns de DPI."
      },
      {
        "question": "Qual resolução é necessária para uma impressão de qualidade?",
        "answer": "A impressão profissional requer 300 DPI. Para uma impressão de 4 x 6 polegadas, você precisa de pelo menos 1200 x 1800 pixels. Para uma impressão 8x10, você precisa de 2.400x3.000 pixels. Imagens abaixo desses limites aparecerão pixeladas quando impressas."
      },
      {
        "question": "Minha imagem é boa o suficiente para um tamanho de impressão específico?",
        "answer": "Carregue sua imagem e verifique a tabela de tamanho máximo de impressão em 300 DPI. Se as dimensões listadas forem maiores que o tamanho de impressão desejado, a imagem terá resolução suficiente. Se for menor, a impressão pode parecer borrada."
      },
      {
        "question": "Qual é a diferença entre imagens com qualidade da Web e de impressão?",
        "answer": "As imagens da Web normalmente precisam de apenas 72 a 96 pixels por polegada, já que as telas são exibidas com densidade fixa de pixels. As imagens impressas precisam de 300 pixels por polegada para uma saída nítida. Uma imagem da Web de 1000 x 1000 é impressa em apenas 3,3 x 3,3 polegadas com qualidade profissional."
      },
      {
        "question": "Essa ferramenta carrega minha imagem em um servidor?",
        "answer": "Não. Todo o processamento acontece localmente no seu navegador. Sua imagem nunca sai do seu dispositivo. A ferramenta usa APIs do navegador para ler as dimensões da imagem, o tamanho do arquivo e os metadados de densidade incorporados diretamente no seu dispositivo."
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
        "question": "क्या यह उपकरण किसी छवि से DPI मेटाडेटा पढ़ सकता है?",
        "answer": "हाँ, सामान्य फ़ॉर्मैट के लिए। यह उपकरण JPEG, PNG, WebP और BMP फ़ाइलों में मौजूद एम्बेडेड DPI या density metadata पढ़ सकता है। यदि किसी फ़ाइल में उपयोगी physical-density metadata नहीं है, तो यह उपकरण pixel dimensions का उपयोग करता है और सामान्य DPI settings पर print size दिखाता है।"
      },
      {
        "question": "गुणवत्ता मुद्रण के लिए किस रिज़ॉल्यूशन की आवश्यकता है?",
        "answer": "पेशेवर मुद्रण के लिए 300 DPI की आवश्यकता होती है। 4x6 इंच प्रिंट के लिए, आपको कम से कम 1200x1800 पिक्सेल की आवश्यकता है। 8x10 प्रिंट के लिए, आपको 2400x3000 पिक्सेल की आवश्यकता होगी। मुद्रित होने पर इन सीमाओं के नीचे की छवियां पिक्सेलयुक्त दिखाई देंगी।"
      },
      {
        "question": "क्या मेरी छवि एक विशिष्ट प्रिंट आकार के लिए पर्याप्त है?",
        "answer": "अपनी छवि अपलोड करें और 300 डीपीआई पर अधिकतम प्रिंट आकार तालिका की जांच करें। यदि सूचीबद्ध आयाम आपके इच्छित प्रिंट आकार से बड़े हैं, तो छवि का रिज़ॉल्यूशन पर्याप्त है। यदि छोटा है, तो प्रिंट धुंधला दिखाई दे सकता है।"
      },
      {
        "question": "वेब और प्रिंट गुणवत्ता छवियों के बीच क्या अंतर है?",
        "answer": "वेब छवियों को आमतौर पर केवल 72-96 पिक्सेल प्रति इंच की आवश्यकता होती है क्योंकि स्क्रीन निश्चित पिक्सेल घनत्व पर प्रदर्शित होती हैं। तेज आउटपुट के लिए प्रिंट छवियों को 300 पिक्सेल प्रति इंच की आवश्यकता होती है। एक 1000x1000 वेब छवि व्यावसायिक गुणवत्ता पर केवल 3.3x3.3 इंच पर प्रिंट होती है।"
      },
      {
        "question": "क्या यह उपकरण मेरी छवि को किसी सर्वर पर अपलोड करता है?",
        "answer": "नहीं। सारी प्रोसेसिंग आपके ब्राउज़र में स्थानीय रूप से होती है। आपकी छवि आपके डिवाइस से कभी बाहर नहीं जाती। यह उपकरण browser APIs का उपयोग करके image dimensions, file size और embedded density metadata सीधे आपके डिवाइस पर पढ़ता है।"
      }
    ],
    "sections": [
      {
        "id": "overview",
        "title": "अवलोकन",
        "paragraphs": []
      }
    ]
  },
  "ja": {
    "faq": [
      {
        "question": "このツールは画像から DPI メタデータを読み取ることができますか?",
        "answer": "はい、一般的な形式であれば可能です。このツールは、JPEG、PNG、WebP、BMP ファイルに埋め込まれた DPI または密度メタデータを、存在する場合に読み取ります。使える物理密度メタデータがない場合は、ピクセル寸法をもとに一般的な DPI 設定での印刷サイズを表示します。"
      },
      {
        "question": "高品質の印刷にはどのくらいの解像度が必要ですか?",
        "answer": "プロフェッショナルな印刷には 300 DPI が必要です。 4x6 インチのプリントには、少なくとも 1200x1800 ピクセルが必要です。 8x10 の印刷には、2400x3000 ピクセルが必要です。これらのしきい値を下回る画像は、印刷時にピクセル化されて表示されます。"
      },
      {
        "question": "私の画像は特定の印刷サイズに十分ですか?",
        "answer": "画像をアップロードし、300 DPI での最大印刷サイズの表を確認してください。リストされている寸法が希望の印刷サイズより大きい場合、画像には十分な解像度があります。これより小さいと、印刷がぼやけて見えることがあります。"
      },
      {
        "question": "ウェブ画像と印刷品質の違いは何ですか?",
        "answer": "ウェブ画像は画面が固定ピクセル密度で表示されるため、通常、1 インチあたり 72 ～ 96 ピクセルしか必要としません。印刷画像を鮮明に出力するには、1 インチあたり 300 ピクセルが必要です。 1000x1000 の Web 画像は、プロの品質でわずか 3.3x3.3 インチで印刷されます。"
      },
      {
        "question": "このツールは画像をサーバーにアップロードしますか?",
        "answer": "いいえ。すべての処理はブラウザ内でローカルに行われます。画像がデバイスから外部に送信されることはありません。このツールはブラウザ API を使って、画像の寸法、ファイルサイズ、埋め込み密度メタデータをデバイス上で直接読み取ります。"
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
        "question": "이 도구는 이미지에서 DPI 메타데이터를 읽을 수 있습니까?",
        "answer": "예, 일반적인 형식에서는 가능합니다. 이 도구는 JPEG, PNG, WebP, BMP 파일에 포함된 DPI 또는 밀도 메타데이터가 있을 때 이를 읽습니다. 파일에 사용할 수 있는 물리적 밀도 메타데이터가 없으면 픽셀 크기를 기준으로 일반적인 DPI 설정에서의 인쇄 크기를 보여줍니다."
      },
      {
        "question": "고품질 인쇄를 위해서는 어떤 해상도가 필요합니까?",
        "answer": "전문 인쇄에는 300 DPI가 필요합니다. 4x6인치 인쇄의 경우 최소 1200x1800픽셀이 필요합니다. 8x10 인쇄에는 2400x3000픽셀이 필요합니다. 이러한 임계값 미만의 이미지는 인쇄 시 픽셀화되어 나타납니다."
      },
      {
        "question": "내 이미지가 특정 인쇄 크기에 충분합니까?",
        "answer": "이미지를 업로드하고 300DPI에서 최대 인쇄 크기 표를 확인하세요. 나열된 치수가 원하는 인쇄 크기보다 크면 이미지의 해상도가 충분한 것입니다. 더 작을 경우 인쇄물이 흐릿하게 나타날 수 있습니다."
      },
      {
        "question": "웹 품질 이미지와 인쇄 품질 이미지의 차이점은 무엇입니까?",
        "answer": "웹 이미지는 화면이 고정된 픽셀 밀도로 표시되므로 일반적으로 인치당 72~96픽셀만 필요합니다. 선명한 출력을 위해서는 인쇄 이미지에 인치당 300픽셀이 필요합니다. 1000x1000 웹 이미지는 전문가 품질로 3.3x3.3인치로 인쇄됩니다."
      },
      {
        "question": "이 도구가 내 이미지를 서버에 업로드합니까?",
        "answer": "아니요. 모든 처리는 브라우저에서 로컬로 이루어집니다. 이미지가 기기를 떠나지 않습니다. 이 도구는 브라우저 API를 사용해 이미지 크기, 파일 크기, 내장된 밀도 메타데이터를 기기에서 직접 읽습니다."
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
        "question": "Questo strumento può leggere i metadati DPI da un'immagine?",
        "answer": "Sì, per i formati più comuni. Questo strumento legge i metadati DPI o di densità incorporati nei file JPEG, PNG, WebP e BMP quando questi dati sono presenti. Se un file non contiene metadati fisici di densità utilizzabili, lo strumento usa le dimensioni in pixel e mostra la dimensione di stampa con impostazioni DPI comuni."
      },
      {
        "question": "Quale risoluzione è necessaria per una stampa di qualità?",
        "answer": "La stampa professionale richiede 300 DPI. Per una stampa da 4x6 pollici sono necessari almeno 1200x1800 pixel. Per una stampa 8x10 sono necessari 2400x3000 pixel. Le immagini al di sotto di queste soglie appariranno pixelate una volta stampate."
      },
      {
        "question": "La mia immagine è abbastanza buona per una dimensione di stampa specifica?",
        "answer": "Carica la tua immagine e controlla la tabella delle dimensioni massime di stampa a 300 DPI. Se le dimensioni elencate sono maggiori della dimensione di stampa desiderata, l'immagine ha una risoluzione sufficiente. Se più piccole, la stampa potrebbe apparire sfocata."
      },
      {
        "question": "Qual è la differenza tra immagini di qualità web e di stampa?",
        "answer": "Le immagini web in genere richiedono solo 72-96 pixel per pollice poiché gli schermi vengono visualizzati con una densità di pixel fissa. Le immagini di stampa necessitano di 300 pixel per pollice per un risultato nitido. Un'immagine web 1000x1000 viene stampata a soli 3,3x3,3 pollici con qualità professionale."
      },
      {
        "question": "Questo strumento carica la mia immagine su un server?",
        "answer": "No. Tutta l'elaborazione avviene localmente nel tuo browser. La tua immagine non lascia mai il tuo dispositivo. Lo strumento usa le API del browser per leggere le dimensioni dell'immagine, la dimensione del file e i metadati di densità incorporati direttamente sul tuo dispositivo."
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
        "question": "Kan deze tool de DPI-metagegevens van een afbeelding lezen?",
        "answer": "Ja, voor gangbare bestandsformaten. Deze tool leest ingesloten DPI- of dichtheidsmetadata uit JPEG-, PNG-, WebP- en BMP-bestanden wanneer die gegevens aanwezig zijn. Als een bestand geen bruikbare fysieke dichtheidsmetadata heeft, gebruikt de tool de pixelafmetingen en toont hij afdrukformaten bij veelgebruikte DPI-instellingen."
      },
      {
        "question": "Welke resolutie is nodig voor kwaliteitsafdrukken?",
        "answer": "Voor professioneel afdrukken is 300 DPI vereist. Voor een afdruk van 4x6 inch heb je minimaal 1200x1800 pixels nodig. Voor een afdruk van 8x10 heb je 2400x3000 pixels nodig. Afbeeldingen onder deze drempelwaarden zien er korrelig uit wanneer ze worden afgedrukt."
      },
      {
        "question": "Is mijn afbeelding goed genoeg voor een specifiek afdrukformaat?",
        "answer": "Upload uw afbeelding en controleer de tabel met maximale afdrukformaten op 300 DPI. Als de vermelde afmetingen groter zijn dan het door u gewenste afdrukformaat, heeft de afbeelding voldoende resolutie. Als deze kleiner zijn, kan de afdruk wazig lijken."
      },
      {
        "question": "Wat is het verschil tussen afbeeldingen van webkwaliteit en afdrukkwaliteit?",
        "answer": "Webafbeeldingen hebben doorgaans slechts 72-96 pixels per inch nodig, omdat schermen met een vaste pixeldichtheid worden weergegeven. Afgedrukte afbeeldingen hebben 300 pixels per inch nodig voor scherpe afdrukken. Een webafbeelding van 1000 x 1000 wordt afgedrukt op slechts 3,3 x 3,3 inch en met professionele kwaliteit."
      },
      {
        "question": "Uploadt deze tool mijn afbeelding naar een server?",
        "answer": "Nee. Alle verwerking gebeurt lokaal in uw browser. Uw afbeelding verlaat uw apparaat nooit. De tool gebruikt browser-API's om afbeeldingsafmetingen, bestandsgrootte en ingesloten dichtheidsmetadata direct op uw apparaat te lezen."
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
        "question": "هل يمكن لهذه الأداة قراءة البيانات التعريفية DPI من الصورة؟",
        "answer": "نعم، بالنسبة إلى التنسيقات الشائعة. تقرأ هذه الأداة بيانات DPI أو بيانات الكثافة المضمنة من ملفات JPEG وPNG وWebP وBMP عندما تكون هذه البيانات موجودة. وإذا لم يحتوي الملف على بيانات كثافة فعلية قابلة للاستخدام، فتعتمد الأداة على أبعاد البكسل وتعرض حجم الطباعة وفق إعدادات DPI الشائعة."
      },
      {
        "question": "ما الدقة المطلوبة للطباعة عالية الجودة؟",
        "answer": "تتطلب الطباعة الاحترافية 300 نقطة في البوصة. للحصول على طباعة مقاس 4 × 6 بوصة، تحتاج إلى 1200 × 1800 بكسل على الأقل. للحصول على طباعة مقاس 8 × 10، تحتاج إلى 2400 × 3000 بكسل. ستظهر الصور الموجودة أسفل هذه الحدود منقطة عند طباعتها."
      },
      {
        "question": "هل صورتي جيدة بما يكفي لحجم طباعة محدد؟",
        "answer": "قم بتحميل صورتك وتحقق من جدول الحد الأقصى لحجم الطباعة عند 300 نقطة لكل بوصة. إذا كانت الأبعاد المدرجة أكبر من حجم الطباعة المطلوب، فستكون الصورة ذات دقة كافية. إذا كانت الطباعة أصغر حجمًا، فقد تظهر الطباعة ضبابية."
      },
      {
        "question": "ما الفرق بين صور الويب وجودة الطباعة؟",
        "answer": "تحتاج صور الويب عادةً إلى 72-96 بكسل فقط لكل بوصة نظرًا لأن الشاشات تعرض بكثافة بكسلات ثابتة. تحتاج الصور المطبوعة إلى 300 بكسل لكل بوصة للحصول على مخرجات واضحة. تتم طباعة صورة ويب مقاس 1000 × 1000 بحجم 3.3 × 3.3 بوصة فقط بجودة احترافية."
      },
      {
        "question": "هل تقوم هذه الأداة بتحميل صورتي إلى خادم؟",
        "answer": "لا. تتم جميع عمليات المعالجة محليًا داخل متصفحك. صورتك لا تغادر جهازك أبدًا. تستخدم الأداة واجهات برمجة المتصفح لقراءة أبعاد الصورة وحجم الملف وبيانات الكثافة المضمنة مباشرة على جهازك."
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
        "question": "Bu araç bir görüntüden DPI meta verilerini okuyabilir mi?",
        "answer": "Evet, yaygın dosya biçimleri için okuyabilir. Bu araç, JPEG, PNG, WebP ve BMP dosyalarında yer alan gömülü DPI veya yoğunluk meta verilerini mevcut olduğunda okur. Bir dosyada kullanılabilir fiziksel yoğunluk meta verisi yoksa araç piksel boyutlarını kullanır ve yaygın DPI ayarlarında baskı boyutunu gösterir."
      },
      {
        "question": "Kaliteli baskı için hangi çözünürlük gereklidir?",
        "answer": "Profesyonel baskı için 300 DPI gerekir. 4x6 inçlik bir baskı için en az 1200x1800 piksele ihtiyacınız vardır. 8x10 baskı için 2400x3000 piksele ihtiyacınız vardır. Bu eşiklerin altındaki resimler yazdırıldığında pikselli görünecektir."
      },
      {
        "question": "Resmim belirli bir baskı boyutu için yeterince iyi mi?",
        "answer": "Görüntünüzü yükleyin ve 300 DPI'da maksimum baskı boyutu tablosunu kontrol edin. Listelenen boyutlar istediğiniz baskı boyutundan daha büyükse görüntünün yeterli çözünürlüğü vardır. Daha küçükse, baskı bulanık görünebilir."
      },
      {
        "question": "Web ve baskı kalitesindeki görseller arasındaki fark nedir?",
        "answer": "Ekranlar sabit piksel yoğunluğunda görüntülendiğinden, web görselleri genellikle inç başına yalnızca 72-96 piksele ihtiyaç duyar. Baskı görüntülerinin keskin çıktı için inç başına 300 piksele ihtiyacı vardır. 1000x1000 boyutunda bir web resmi yalnızca 3,3x3,3 inç boyutunda profesyonel kalitede yazdırılır."
      },
      {
        "question": "Bu araç resmimi bir sunucuya yüklüyor mu?",
        "answer": "Hayır. Tüm işlemler tarayıcınızda yerel olarak gerçekleşir. Görüntünüz cihazınızdan ayrılmaz. Araç, görüntü boyutlarını, dosya boyutunu ve gömülü yoğunluk meta verilerini doğrudan cihazınızda okumak için tarayıcı API'lerini kullanır."
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
        "question": "Czy to narzędzie może odczytać metadane DPI z obrazu?",
        "answer": "Tak, w przypadku popularnych formatów. To narzędzie odczytuje osadzone metadane DPI lub gęstości z plików JPEG, PNG, WebP i BMP, gdy takie dane są dostępne. Jeśli plik nie ma użytecznych fizycznych metadanych gęstości, narzędzie korzysta z wymiarów w pikselach i pokazuje rozmiar wydruku dla typowych ustawień DPI."
      },
      {
        "question": "Jaka rozdzielczość jest potrzebna do drukowania wysokiej jakości?",
        "answer": "Profesjonalne drukowanie wymaga rozdzielczości 300 DPI. Do wydruku o wymiarach 4 x 6 cali potrzebne są co najmniej 1200 x 1800 pikseli. Do wydruku 8x10 potrzebujesz 2400x3000 pikseli. Obrazy poniżej tych progów po wydrukowaniu będą miały piksele."
      },
      {
        "question": "Czy mój obraz jest wystarczająco dobry, aby wydrukować go w określonym rozmiarze?",
        "answer": "Prześlij swój obraz i sprawdź tabelę maksymalnego rozmiaru wydruku przy rozdzielczości 300 DPI. Jeśli podane wymiary są większe niż żądany rozmiar wydruku, obraz ma wystarczającą rozdzielczość. Jeśli jest mniejszy, wydruk może wydawać się niewyraźny."
      },
      {
        "question": "Jaka jest różnica między obrazami w jakości internetowej i do druku?",
        "answer": "Obrazy internetowe zazwyczaj potrzebują tylko 72 - 96 pikseli na cal, ponieważ ekrany wyświetlają się ze stałą gęstością pikseli. Aby wydruki były ostre, obrazy drukowane wymagają rozdzielczości 300 pikseli na cal. Obraz internetowy o wymiarach 1000 x 1000 jest drukowany w formacie zaledwie 3,3 x 3,3 cala w profesjonalnej jakości."
      },
      {
        "question": "Czy to narzędzie przesyła mój obraz na serwer?",
        "answer": "Nie. Całe przetwarzanie odbywa się lokalnie w Twojej przeglądarce. Twój obraz nigdy nie opuszcza urządzenia. Narzędzie używa interfejsów API przeglądarki do odczytywania wymiarów obrazu, rozmiaru pliku i osadzonych metadanych gęstości bezpośrednio na Twoim urządzeniu."
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
        "question": "Bisakah alat ini membaca metadata DPI dari suatu gambar?",
        "answer": "Ya, untuk format umum. Alat ini membaca metadata DPI atau densitas yang tertanam pada file JPEG, PNG, WebP, dan BMP saat data tersebut tersedia. Jika file tidak memiliki metadata densitas fisik yang bisa digunakan, alat ini memakai dimensi piksel dan menampilkan ukuran cetak pada pengaturan DPI yang umum."
      },
      {
        "question": "Resolusi apa yang diperlukan untuk pencetakan berkualitas?",
        "answer": "Pencetakan profesional memerlukan 300 DPI. Untuk cetakan 4x6 inci, Anda memerlukan setidaknya 1200x1800 piksel. Untuk cetakan 8x10, Anda memerlukan 2400x3000 piksel. Gambar di bawah ambang batas ini akan tampak berpiksel saat dicetak."
      },
      {
        "question": "Apakah gambar saya cukup bagus untuk ukuran cetak tertentu?",
        "answer": "Unggah gambar Anda dan periksa tabel ukuran cetak maksimum pada 300 DPI. Jika dimensi yang tercantum lebih besar dari ukuran cetak yang Anda inginkan, gambar memiliki resolusi yang memadai. Jika lebih kecil, hasil cetak mungkin tampak buram."
      },
      {
        "question": "Apa perbedaan antara gambar berkualitas web dan cetak?",
        "answer": "Gambar web biasanya hanya memerlukan 72-96 piksel per inci karena layar ditampilkan pada kerapatan piksel tetap. Gambar cetak membutuhkan 300 piksel per inci untuk hasil yang tajam. Gambar web 1000x1000 dicetak hanya dengan ukuran 3,3x3,3 inci dengan kualitas profesional."
      },
      {
        "question": "Apakah alat ini mengunggah gambar saya ke server?",
        "answer": "Tidak. Semua pemrosesan terjadi secara lokal di browser Anda. Gambar Anda tidak pernah meninggalkan perangkat Anda. Alat ini menggunakan API browser untuk membaca dimensi gambar, ukuran file, dan metadata densitas tertanam langsung di perangkat Anda."
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
        "question": "Может ли этот инструмент читать метаданные DPI из изображения?",
        "answer": "Да, для распространенных форматов. Этот инструмент считывает встроенные метаданные DPI или плотности из файлов JPEG, PNG, WebP и BMP, когда такие данные присутствуют. Если в файле нет пригодных физических метаданных плотности, инструмент использует размеры в пикселях и показывает размер печати при стандартных настройках DPI."
      },
      {
        "question": "Какое разрешение необходимо для качественной печати?",
        "answer": "Для профессиональной печати требуется разрешение 300 DPI. Для печати размером 4x6 дюймов вам потребуется не менее 1200x1800 пикселей. Для печати 8x10 вам потребуется 2400x3000 пикселей. Изображения ниже этих пороговых значений при печати будут выглядеть пикселизированными."
      },
      {
        "question": "Достаточно ли мое изображение для печати определенного размера?",
        "answer": "Загрузите свое изображение и проверьте таблицу максимального размера печати при разрешении 300 точек на дюйм. Если указанные размеры больше желаемого размера печати, изображение имеет достаточное разрешение. При меньшем размере отпечаток может выглядеть размытым."
      },
      {
        "question": "В чем разница между изображениями веб-качества и качества печати?",
        "answer": "Веб-изображениям обычно требуется только 72 - 96 пикселей на дюйм, поскольку экраны отображают с фиксированной плотностью пикселей. Для печати изображений требуется 300 пикселей на дюйм для четкого вывода. Веб-изображение размером 1000x1000 печатается размером всего 3,3x3,3 дюйма с профессиональным качеством."
      },
      {
        "question": "Загружает ли этот инструмент мое изображение на сервер?",
        "answer": "Нет. Вся обработка происходит локально в вашем браузере. Ваше изображение никогда не покидает устройство. Инструмент использует API браузера, чтобы читать размеры изображения, размер файла и встроенные метаданные плотности прямо на вашем устройстве."
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
