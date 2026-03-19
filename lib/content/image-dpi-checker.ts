import type { LocalizedDocMap } from "./doc-types";

export const content: LocalizedDocMap = {
  "en": {
    "faq": [
      {
        "question": "Can this tool read the DPI metadata from an image?",
        "answer": "Browser-based tools cannot directly read EXIF DPI metadata. This tool reads the pixel dimensions and calculates maximum print sizes at various DPI settings. For embedded DPI metadata, use desktop software like Photoshop or GIMP."
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
        "answer": "No. All processing happens locally in your browser. Your image never leaves your device. The tool uses the browser's Image API to read dimensions and the File API to read the file size."
      }
    ],
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "paragraphs": []
      }
    ]
  },
  "es": {
    "faq": [
      {
        "question": "¿Puede esta herramienta leer los metadatos de DPI de una imagen?",
        "answer": "Las herramientas basadas en navegador no pueden leer directamente los metadatos de DPI EXIF. Esta herramienta lee las dimensiones en píxeles y calcula los tamaños máximos de impresión en varias configuraciones de DPI. Para metadatos de DPI integrados, utilice software de escritorio como Photoshop o GIMP."
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
        "answer": "No. Todo el procesamiento ocurre localmente en su navegador. Tu imagen nunca sale de tu dispositivo. La herramienta utiliza la API de imágenes del navegador para leer las dimensiones y la API de archivos para leer el tamaño del archivo."
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
        "answer": "Les outils basés sur un navigateur ne peuvent pas lire directement les métadonnées EXIF ​​DPI. Cet outil lit les dimensions des pixels et calcule les tailles d'impression maximales avec différents paramètres DPI. Pour les métadonnées DPI intégrées, utilisez un logiciel de bureau comme Photoshop ou GIMP."
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
        "answer": "Non. Tout le traitement s'effectue localement dans votre navigateur. Votre image ne quitte jamais votre appareil. L'outil utilise l'API Image du navigateur pour lire les dimensions et l'API File pour lire la taille du fichier."
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
        "answer": "Browserbasierte Tools können EXIF-DPI-Metadaten nicht direkt lesen. Dieses Tool liest die Pixelabmessungen und berechnet maximale Druckgrößen bei verschiedenen DPI-Einstellungen. Für eingebettete DPI-Metadaten verwenden Sie Desktop-Software wie Photoshop oder GIMP."
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
        "answer": "Nein. Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser. Ihr Bild verlässt nie Ihr Gerät. Das Tool verwendet die Bild-API des Browsers zum Lesen von Abmessungen und die Datei-API zum Lesen der Dateigröße."
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
        "answer": "As ferramentas baseadas em navegador não podem ler diretamente os metadados EXIF ​​DPI. Esta ferramenta lê as dimensões em pixels e calcula os tamanhos máximos de impressão em várias configurações de DPI. Para metadados de DPI incorporados, use software de desktop como Photoshop ou GIMP."
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
        "answer": "Não. Todo o processamento acontece localmente no seu navegador. Sua imagem nunca sai do seu dispositivo. A ferramenta usa a API Image do navegador para ler as dimensões e a API File para ler o tamanho do arquivo."
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
        "answer": "ब्राउज़र-आधारित उपकरण सीधे EXIF ​​DPI मेटाडेटा नहीं पढ़ सकते हैं। यह उपकरण पिक्सेल आयामों को पढ़ता है और विभिन्न डीपीआई सेटिंग्स पर अधिकतम प्रिंट आकार की गणना करता है। एम्बेडेड DPI मेटाडेटा के लिए, फ़ोटोशॉप या GIMP जैसे डेस्कटॉप सॉफ़्टवेयर का उपयोग करें।"
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
        "answer": "नहीं। सारी प्रोसेसिंग आपके ब्राउज़र में स्थानीय रूप से होती है। आपकी छवि आपके डिवाइस को कभी नहीं छोड़ती। उपकरण आयामों को पढ़ने के लिए ब्राउज़र की छवि एपीआई और फ़ाइल आकार को पढ़ने के लिए फ़ाइल एपीआई का उपयोग करता है।"
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
        "answer": "ブラウザベースのツールは EXIF DPI メタデータを直接読み取ることができません。このツールは、ピクセル寸法を読み取り、さまざまな DPI 設定での最大印刷サイズを計算します。埋め込み DPI メタデータの場合は、Photoshop や GIMP などのデスクトップ ソフトウェアを使用してください。"
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
        "answer": "いいえ。すべての処理はブラウザ内でローカルに行われます。画像がデバイスから離れることはありません。このツールはブラウザの画像 API を使用して寸法を読み取り、ファイル API を使用してファイル サイズを読み取ります。"
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
        "answer": "브라우저 기반 도구는 EXIF ​​DPI 메타데이터를 직접 읽을 수 없습니다. 이 도구는 픽셀 크기를 읽고 다양한 DPI 설정에서 최대 인쇄 크기를 계산합니다. 내장된 DPI 메타데이터의 경우 Photoshop 또는 GIMP와 같은 데스크톱 소프트웨어를 사용하십시오."
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
        "answer": "아니요. 모든 처리는 귀하의 브라우저에서 로컬로 이루어집니다. 귀하의 이미지는 귀하의 장치를 떠나지 않습니다. 이 도구는 브라우저의 이미지 API를 사용하여 치수를 읽고 파일 API를 사용하여 파일 크기를 읽습니다."
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
        "answer": "Gli strumenti basati su browser non possono leggere direttamente i metadati DPI EXIF. Questo strumento legge le dimensioni in pixel e calcola le dimensioni massime di stampa con varie impostazioni DPI. Per i metadati DPI incorporati, utilizza un software desktop come Photoshop o GIMP."
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
        "answer": "No. Tutta l'elaborazione avviene localmente nel tuo browser. La tua immagine non lascia mai il tuo dispositivo. Lo strumento utilizza l'API Image del browser per leggere le dimensioni e l'API File per leggere la dimensione del file."
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
        "answer": "Browsergebaseerde tools kunnen de EXIF ​​DPI-metagegevens niet rechtstreeks lezen. Deze tool leest de pixelafmetingen en berekent de maximale printformaten bij verschillende DPI-instellingen. Voor ingebedde DPI-metagegevens gebruikt u desktopsoftware zoals Photoshop of GIMP."
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
        "answer": "Nee. Alle verwerking gebeurt lokaal in uw browser. Uw afbeelding verlaat nooit uw apparaat. De tool gebruikt de Image API van de browser om afmetingen te lezen en de File API om de bestandsgrootte te lezen."
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
        "answer": "لا يمكن للأدوات المستندة إلى المستعرض قراءة البيانات التعريفية EXIF ​​DPI مباشرة. تقرأ هذه الأداة أبعاد البكسل وتحسب الحد الأقصى لأحجام الطباعة في إعدادات DPI المختلفة. بالنسبة للبيانات التعريفية المضمنة لـ DPI، استخدم برامج سطح المكتب مثل Photoshop أو GIMP."
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
        "answer": "لا. تتم جميع عمليات المعالجة محليًا في متصفحك. صورتك لا تترك جهازك أبدًا. تستخدم الأداة واجهة برمجة تطبيقات الصور الخاصة بالمتصفح لقراءة الأبعاد وواجهة برمجة تطبيقات الملفات لقراءة حجم الملف."
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
        "answer": "Tarayıcı tabanlı araçlar EXIF ​​DPI meta verilerini doğrudan okuyamaz. Bu araç piksel boyutlarını okur ve çeşitli DPI ayarlarında maksimum baskı boyutlarını hesaplar. Gömülü DPI meta verileri için Photoshop veya GIMP gibi masaüstü yazılımlarını kullanın."
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
        "answer": "Hayır. Tüm işlemler tarayıcınızda yerel olarak gerçekleşir. Resminiz asla cihazınızdan ayrılmaz. Araç, boyutları okumak için tarayıcının Görüntü API'sini ve dosya boyutunu okumak için Dosya API'sini kullanır."
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
        "answer": "Narzędzia oparte na przeglądarce nie mogą bezpośrednio odczytać metadanych EXIF ​​​​DPI. To narzędzie odczytuje wymiary w pikselach i oblicza maksymalne rozmiary wydruku przy różnych ustawieniach DPI. W przypadku osadzonych metadanych DPI użyj oprogramowania komputerowego, takiego jak Photoshop lub GIMP."
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
        "answer": "Nie. Całe przetwarzanie odbywa się lokalnie w Twojej przeglądarce. Twój obraz nigdy nie opuszcza Twojego urządzenia. Narzędzie wykorzystuje interfejs Image API przeglądarki do odczytywania wymiarów oraz File API do odczytywania rozmiaru pliku."
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
        "answer": "Alat berbasis browser tidak dapat langsung membaca metadata DPI EXIF. Alat ini membaca dimensi piksel dan menghitung ukuran cetak maksimum pada berbagai pengaturan DPI. Untuk metadata DPI yang tersemat, gunakan perangkat lunak desktop seperti Photoshop atau GIMP."
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
        "answer": "Tidak. Semua pemrosesan terjadi secara lokal di browser Anda. Gambar Anda tidak pernah meninggalkan perangkat Anda. Alat ini menggunakan Image API browser untuk membaca dimensi dan File API untuk membaca ukuran file."
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
        "answer": "Инструменты на основе браузера не могут напрямую читать метаданные EXIF ​​DPI. Этот инструмент считывает размеры в пикселях и рассчитывает максимальные размеры печати при различных настройках DPI. Для встроенных метаданных DPI используйте настольное программное обеспечение, например Photoshop или GIMP."
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
        "answer": "Нет. Вся обработка происходит локально в вашем браузере. Ваше изображение никогда не покидает ваше устройство. Инструмент использует API изображений браузера для чтения размеров и API файлов для чтения размера файла."
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
