import type { LocalizedDocMap } from "./doc-types";

export const content: LocalizedDocMap = {
  "en": {
    "faq": [
      {
        "question": "What is the difference between screen resolution and CSS pixels?",
        "answer": "Screen resolution is the physical pixel count of your display. CSS pixels are the logical pixels used by browsers. On a device with 2x pixel ratio (like Retina displays), 1 CSS pixel equals 4 physical pixels (2x2). This is why CSS pixel dimensions are often half the physical resolution."
      },
      {
        "question": "What is Device Pixel Ratio (DPR)?",
        "answer": "Device Pixel Ratio is the ratio between physical pixels and CSS pixels. A DPR of 1 means each CSS pixel maps to one physical pixel. A DPR of 2 (Retina) means each CSS pixel uses a 2x2 grid of physical pixels for sharper rendering."
      },
      {
        "question": "Why does my screen show a different resolution than expected?",
        "answer": "Your operating system may be using display scaling (e.g., 125% or 150% on Windows). This changes the effective CSS resolution while the physical resolution stays the same. The reported values reflect your current scaling settings."
      },
      {
        "question": "What is color depth?",
        "answer": "Color depth indicates how many bits are used to represent each pixel's color. 24-bit (8 bits per channel) supports 16.7 million colors and is standard. 30-bit (10 bits per channel) supports 1.07 billion colors for HDR content."
      },
      {
        "question": "How do I check my actual monitor resolution?",
        "answer": "This tool detects the resolution reported by your browser. For the true physical resolution, check your monitor specifications or operating system display settings. If scaling is applied, multiply the CSS resolution by the device pixel ratio."
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
        "question": "¿Cuál es la diferencia entre la resolución de pantalla y los píxeles CSS?",
        "answer": "La resolución de pantalla es el recuento físico de píxeles de su pantalla. Los píxeles CSS son los píxeles lógicos utilizados por los navegadores. En un dispositivo con una proporción de píxeles de 2x (como las pantallas Retina), 1 píxel CSS equivale a 4 píxeles físicos (2x2). Esta es la razón por la que las dimensiones de los píxeles CSS suelen ser la mitad de la resolución física."
      },
      {
        "question": "¿Qué es la relación de píxeles del dispositivo (DPR)?",
        "answer": "La relación de píxeles del dispositivo es la relación entre los píxeles físicos y los píxeles CSS. Un DPR de 1 significa que cada píxel CSS se asigna a un píxel físico. Un DPR de 2 (Retina) significa que cada píxel CSS usa una cuadrícula de 2x2 de píxeles físicos para una representación más nítida."
      },
      {
        "question": "¿Por qué mi pantalla muestra una resolución diferente a la esperada?",
        "answer": "Es posible que su sistema operativo esté usando escala de pantalla (por ejemplo, 125 % o 150 % en Windows). Esto cambia la resolución CSS efectiva mientras que la resolución física permanece igual. Los valores informados reflejan su configuración de escala actual."
      },
      {
        "question": "¿Qué es la profundidad de color?",
        "answer": "La profundidad de color indica cuántos bits se utilizan para representar el color de cada píxel. 24 bits (8 bits por canal) admite 16,7 millones de colores y es estándar. 30 bits (10 bits por canal) admiten 1,07 mil millones de colores para contenido HDR."
      },
      {
        "question": "¿Cómo verifico la resolución real de mi monitor?",
        "answer": "Esta herramienta detecta la resolución informada por su navegador. Para conocer la verdadera resolución física, verifique las especificaciones de su monitor o la configuración de pantalla del sistema operativo. Si se aplica escala, multiplique la resolución CSS por la proporción de píxeles del dispositivo."
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
        "question": "Quelle est la différence entre la résolution d'écran et les pixels CSS ?",
        "answer": "La résolution d'écran est le nombre de pixels physiques de votre écran. Les pixels CSS sont les pixels logiques utilisés par les navigateurs. Sur un appareil avec un ratio de pixels 2x (comme les écrans Retina), 1 pixel CSS équivaut à 4 pixels physiques (2x2). C'est pourquoi les dimensions des pixels CSS représentent souvent la moitié de la résolution physique."
      },
      {
        "question": "Qu'est-ce que le ratio de pixels du périphérique (DPR) ?",
        "answer": "Le ratio de pixels du périphérique est le rapport entre les pixels physiques et les pixels CSS. Un DPR de 1 signifie que chaque pixel CSS correspond à un pixel physique. Un DPR de 2 (Retina) signifie que chaque pixel CSS utilise une grille de 2 x 2 pixels physiques pour un rendu plus net."
      },
      {
        "question": "Pourquoi mon écran affiche-t-il une résolution différente de celle attendue ?",
        "answer": "Votre système d'exploitation utilise peut-être une mise à l'échelle de l'affichage (par exemple, 125 % ou 150 % sous Windows). Cela modifie la résolution CSS effective tandis que la résolution physique reste la même. Les valeurs signalées reflètent vos paramètres de mise à l'échelle actuels."
      },
      {
        "question": "Qu'est-ce que la profondeur de couleur ?",
        "answer": "La profondeur de couleur indique le nombre de bits utilisés pour représenter la couleur de chaque pixel. 24 bits (8 bits par canal) prend en charge 16,7 millions de couleurs et est standard. Le format 30 bits (10 bits par canal) prend en charge 1,07 milliard de couleurs pour le contenu HDR."
      },
      {
        "question": "Comment puis-je vérifier la résolution réelle de mon écran ?",
        "answer": "Cet outil détecte la résolution indiquée par votre navigateur. Pour connaître la véritable résolution physique, vérifiez les spécifications de votre moniteur ou les paramètres d’affichage du système d’exploitation. Si une mise à l'échelle est appliquée, multipliez la résolution CSS par le rapport de pixels de l'appareil."
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
        "question": "Was ist der Unterschied zwischen Bildschirmauflösung und CSS-Pixeln?",
        "answer": "Die Bildschirmauflösung ist die physische Pixelanzahl Ihres Displays. CSS-Pixel sind die logischen Pixel, die von Browsern verwendet werden. Auf einem Gerät mit 2x Pixelverhältnis (wie Retina-Displays) entspricht 1 CSS-Pixel 4 physischen Pixeln (2x2). Aus diesem Grund betragen die CSS-Pixelabmessungen häufig die Hälfte der physischen Auflösung."
      },
      {
        "question": "Was ist das Device Pixel Ratio (DPR)?",
        "answer": "Das Device Pixel Ratio ist das Verhältnis zwischen physischen Pixeln und CSS-Pixeln. Ein DPR von 1 bedeutet, dass jedes CSS-Pixel einem physischen Pixel zugeordnet ist. Ein DPR von 2 (Retina) bedeutet, dass jedes CSS-Pixel ein 2x2-Raster physischer Pixel für eine schärfere Darstellung verwendet."
      },
      {
        "question": "Warum zeigt mein Bildschirm eine andere Auflösung als erwartet an?",
        "answer": "Ihr Betriebssystem verwendet möglicherweise eine Anzeigeskalierung (z. B. 125 % oder 150 % unter Windows). Dadurch ändert sich die effektive CSS-Auflösung, während die physikalische Auflösung gleich bleibt. Die gemeldeten Werte spiegeln Ihre aktuellen Skalierungseinstellungen wider."
      },
      {
        "question": "Was ist Farbtiefe?",
        "answer": "Die Farbtiefe gibt an, wie viele Bits zur Darstellung der Farbe jedes Pixels verwendet werden. 24-Bit (8 Bit pro Kanal) unterstützt 16,7 Millionen Farben und ist Standard. 30-Bit (10 Bit pro Kanal) unterstützt 1,07 Milliarden Farben für HDR-Inhalte."
      },
      {
        "question": "Wie überprüfe ich meine tatsächliche Monitorauflösung?",
        "answer": "Dieses Tool erkennt die von Ihrem Browser gemeldete Auflösung. Die tatsächliche physikalische Auflösung finden Sie in den Spezifikationen Ihres Monitors oder in den Anzeigeeinstellungen Ihres Betriebssystems. Wenn Skalierung angewendet wird, multiplizieren Sie die CSS-Auflösung mit dem Pixelverhältnis des Geräts."
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
        "question": "Qual é a diferença entre resolução de tela e pixels CSS?",
        "answer": "A resolução da tela é a contagem física de pixels da sua tela. Pixels CSS são os pixels lógicos usados ​​pelos navegadores. Em um dispositivo com proporção de pixels de 2x (como telas Retina), 1 pixel CSS equivale a 4 pixels físicos (2x2). É por isso que as dimensões dos pixels CSS geralmente são metade da resolução física."
      },
      {
        "question": "O que é a proporção de pixels do dispositivo (DPR)?",
        "answer": "A proporção de pixels do dispositivo é a proporção entre pixels físicos e pixels CSS. Um DPR de 1 significa que cada pixel CSS é mapeado para um pixel físico. Um DPR de 2 (Retina) significa que cada pixel CSS usa uma grade 2x2 de pixels físicos para uma renderização mais nítida."
      },
      {
        "question": "Por que minha tela mostra uma resolução diferente da esperada?",
        "answer": "Seu sistema operacional pode estar usando escala de exibição (por exemplo, 125% ou 150% no Windows). Isso altera a resolução CSS efetiva enquanto a resolução física permanece a mesma. Os valores informados refletem suas configurações de escala atuais."
      },
      {
        "question": "O que é profundidade de cor?",
        "answer": "A profundidade de cor indica quantos bits são usados ​​para representar a cor de cada pixel. 24 bits (8 bits por canal) suporta 16,7 milhões de cores e é padrão. 30 bits (10 bits por canal) suporta 1,07 bilhão de cores para conteúdo HDR."
      },
      {
        "question": "Como verifico a resolução real do meu monitor?",
        "answer": "Esta ferramenta detecta a resolução informada pelo seu navegador. Para obter a verdadeira resolução física, verifique as especificações do monitor ou as configurações de exibição do sistema operacional. Se o dimensionamento for aplicado, multiplique a resolução CSS pela proporção de pixels do dispositivo."
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
        "question": "स्क्रीन रिज़ॉल्यूशन और सीएसएस पिक्सल के बीच क्या अंतर है?",
        "answer": "स्क्रीन रिज़ॉल्यूशन आपके डिस्प्ले की भौतिक पिक्सेल गणना है। सीएसएस पिक्सेल ब्राउज़र द्वारा उपयोग किए जाने वाले तार्किक पिक्सेल हैं। 2x पिक्सेल अनुपात (जैसे रेटिना डिस्प्ले) वाले डिवाइस पर, 1 सीएसएस पिक्सेल 4 भौतिक पिक्सेल (2x2) के बराबर होता है। यही कारण है कि सीएसएस पिक्सेल आयाम अक्सर भौतिक रिज़ॉल्यूशन के आधे होते हैं।"
      },
      {
        "question": "डिवाइस पिक्सेल अनुपात (डीपीआर) क्या है?",
        "answer": "डिवाइस पिक्सेल अनुपात भौतिक पिक्सेल और सीएसएस पिक्सेल के बीच का अनुपात है। 1 की डीपीआर का मतलब है कि प्रत्येक सीएसएस पिक्सेल एक भौतिक पिक्सेल पर मैप होता है। 2 (रेटिना) की डीपीआर का मतलब है कि प्रत्येक सीएसएस पिक्सेल तेज रेंडरिंग के लिए भौतिक पिक्सल के 2x2 ग्रिड का उपयोग करता है।"
      },
      {
        "question": "मेरी स्क्रीन अपेक्षा से भिन्न रिज़ॉल्यूशन क्यों दिखाती है?",
        "answer": "हो सकता है कि आपका ऑपरेटिंग सिस्टम डिस्प्ले स्केलिंग का उपयोग कर रहा हो (उदाहरण के लिए, विंडोज़ पर 125% या 150%)। यह प्रभावी सीएसएस रिज़ॉल्यूशन को बदल देता है जबकि भौतिक रिज़ॉल्यूशन वही रहता है। रिपोर्ट किए गए मान आपकी वर्तमान स्केलिंग सेटिंग्स को दर्शाते हैं।"
      },
      {
        "question": "रंग की गहराई क्या है?",
        "answer": "रंग की गहराई इंगित करती है कि प्रत्येक पिक्सेल के रंग को दर्शाने के लिए कितने बिट्स का उपयोग किया जाता है। 24-बिट (प्रति चैनल 8 बिट) 16.7 मिलियन रंगों का समर्थन करता है और मानक है। 30-बिट (प्रति चैनल 10 बिट) एचडीआर सामग्री के लिए 1.07 बिलियन रंगों का समर्थन करता है।"
      },
      {
        "question": "मैं अपने वास्तविक मॉनिटर रिज़ॉल्यूशन की जाँच कैसे करूँ?",
        "answer": "यह टूल आपके ब्राउज़र द्वारा रिपोर्ट किए गए रिज़ॉल्यूशन का पता लगाता है। वास्तविक भौतिक रिज़ॉल्यूशन के लिए, अपने मॉनिटर विनिर्देशों या ऑपरेटिंग सिस्टम डिस्प्ले सेटिंग्स की जाँच करें। यदि स्केलिंग लागू की जाती है, तो सीएसएस रिज़ॉल्यूशन को डिवाइस पिक्सेल अनुपात से गुणा करें।"
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
        "question": "画面解像度と CSS ピクセルの違いは何ですか?",
        "answer": "画面解像度は、ディスプレイの物理的なピクセル数です。 CSS ピクセルは、ブラウザーによって使用される論理ピクセルです。ピクセル比が 2 倍のデバイス (Retina ディスプレイなど) では、1 CSS ピクセルは 4 物理ピクセル (2x2) に相当します。 CSS ピクセルの寸法が物理解像度の半分になることが多いのはこのためです。"
      },
      {
        "question": "デバイス ピクセル比 (DPR) とは何ですか?",
        "answer": "デバイス ピクセル比は、物理ピクセルと CSS ピクセルの比率です。 DPR が 1 の場合は、各 CSS ピクセルが 1 つの物理ピクセルにマップされることを意味します。 DPR 2 (Retina) は、各 CSS ピクセルが、より鮮明なレンダリングのために物理ピクセルの 2x2 グリッドを使用することを意味します。"
      },
      {
        "question": "画面に予想とは異なる解像度が表示されるのはなぜですか?",
        "answer": "オペレーティング システムがディスプレイ スケーリング (例: Windows では 125% または 150%) を使用している可能性があります。これにより、物理的な解像度は同じままで、実効的な CSS 解像度が変更されます。報告される値は、現在のスケーリング設定を反映しています。"
      },
      {
        "question": "色深度とは何ですか?",
        "answer": "色深度は、各ピクセルの色を表すために使用されるビット数を示します。 24 ビット (チャネルあたり 8 ビット) は 1,670 万色をサポートし、標準です。 30 ビット (チャンネルあたり 10 ビット) は、HDR コンテンツの 10 億 7000 万色をサポートします。"
      },
      {
        "question": "実際のモニターの解像度を確認するにはどうすればよいですか?",
        "answer": "このツールは、ブラウザによって報告された解像度を検出します。実際の物理解像度については、モニターの仕様またはオペレーティング システムのディスプレイ設定を確認してください。スケーリングが適用される場合は、CSS 解像度にデバイスのピクセル比を掛けます。"
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
        "question": "화면 해상도와 CSS 픽셀의 차이점은 무엇입니까?",
        "answer": "화면 해상도는 디스플레이의 실제 픽셀 수입니다. CSS 픽셀은 브라우저에서 사용되는 논리적 픽셀입니다. 2x 픽셀 비율의 장치(예: Retina 디스플레이)에서 1 CSS 픽셀은 4 실제 픽셀(2x2)과 같습니다. 이것이 CSS 픽셀 크기가 실제 해상도의 절반인 경우가 많은 이유입니다."
      },
      {
        "question": "장치 픽셀 비율(DPR)이란 무엇입니까?",
        "answer": "장치 픽셀 비율은 실제 픽셀과 CSS 픽셀 간의 비율입니다. DPR이 1이면 각 CSS 픽셀이 하나의 물리적 픽셀에 매핑된다는 의미입니다. DPR이 2(Retina)라는 것은 각 CSS 픽셀이 더 선명한 렌더링을 위해 2x2 격자의 물리적 픽셀을 사용한다는 의미입니다."
      },
      {
        "question": "화면에 예상과 다른 해상도가 표시되는 이유는 무엇입니까?",
        "answer": "운영 체제에서 디스플레이 배율 조정(예: Windows의 경우 125% 또는 150%)을 사용하고 있을 수 있습니다. 이렇게 하면 실제 해상도가 동일하게 유지되는 동안 효과적인 CSS 해상도가 변경됩니다. 보고된 값은 현재 스케일링 설정을 반영합니다."
      },
      {
        "question": "색상 심도란 무엇입니까?",
        "answer": "색상 심도는 각 픽셀의 색상을 표현하는 데 사용되는 비트 수를 나타냅니다. 24비트(채널당 8비트)는 1,670만 색상을 지원하며 표준입니다. 30비트(채널당 10비트)는 HDR 콘텐츠에 대해 10억 7천만 색상을 지원합니다."
      },
      {
        "question": "실제 모니터 해상도를 확인하려면 어떻게 해야 합니까?",
        "answer": "이 도구는 브라우저에서 보고한 해상도를 감지합니다. 실제 물리적 해상도를 확인하려면 모니터 사양이나 운영 체제 디스플레이 설정을 확인하세요. 크기 조정이 적용되는 경우 CSS 해상도에 장치 픽셀 비율을 곱합니다."
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
        "question": "Qual è la differenza tra risoluzione dello schermo e pixel CSS?",
        "answer": "La risoluzione dello schermo è il numero di pixel fisici del display. I pixel CSS sono i pixel logici utilizzati dai browser. Su un dispositivo con rapporto pixel 2x (come i display Retina), 1 pixel CSS equivale a 4 pixel fisici (2x2). Questo è il motivo per cui le dimensioni dei pixel CSS sono spesso la metà della risoluzione fisica."
      },
      {
        "question": "Cos'è il Device Pixel Ratio (DPR)?",
        "answer": "Il Device Pixel Ratio è il rapporto tra pixel fisici e pixel CSS. Un DPR pari a 1 significa che ogni pixel CSS è mappato su un pixel fisico. Un DPR pari a 2 (Retina) significa che ogni pixel CSS utilizza una griglia 2x2 di pixel fisici per un rendering più nitido."
      },
      {
        "question": "Perché il mio schermo mostra una risoluzione diversa da quella prevista?",
        "answer": "Il tuo sistema operativo potrebbe utilizzare il ridimensionamento dello schermo (ad es. 125% o 150% su Windows). Ciò modifica la risoluzione CSS effettiva mentre la risoluzione fisica rimane la stessa. I valori riportati riflettono le impostazioni di ridimensionamento attuali."
      },
      {
        "question": "Cos'è la profondità del colore?",
        "answer": "La profondità del colore indica quanti bit vengono utilizzati per rappresentare il colore di ciascun pixel. La versione a 24 bit (8 bit per canale) supporta 16,7 milioni di colori ed è standard. La risoluzione a 30 bit (10 bit per canale) supporta 1,07 miliardi di colori per i contenuti HDR."
      },
      {
        "question": "Come posso verificare la risoluzione effettiva del mio monitor?",
        "answer": "Questo strumento rileva la risoluzione segnalata dal tuo browser. Per la vera risoluzione fisica, controlla le specifiche del monitor o le impostazioni di visualizzazione del sistema operativo. Se viene applicato il ridimensionamento, moltiplicare la risoluzione CSS per il rapporto pixel del dispositivo."
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
        "question": "Wat is het verschil tussen schermresolutie en CSS-pixels?",
        "answer": "Schermresolutie is het fysieke aantal pixels van uw beeldscherm. CSS-pixels zijn de logische pixels die door browsers worden gebruikt. Op een apparaat met een pixelverhouding van 2x (zoals Retina-displays) is 1 CSS-pixel gelijk aan 4 fysieke pixels (2x2). Dit is de reden waarom CSS-pixelafmetingen vaak de helft van de fysieke resolutie zijn."
      },
      {
        "question": "Wat is Device Pixel Ratio (DPR)?",
        "answer": "Device Pixel Ratio is de verhouding tussen fysieke pixels en CSS-pixels. Een DPR van 1 betekent dat elke CSS-pixel wordt toegewezen aan één fysieke pixel. Een DPR van 2 (Retina) betekent dat elke CSS-pixel een raster van 2x2 fysieke pixels gebruikt voor een scherpere weergave."
      },
      {
        "question": "Waarom toont mijn scherm een ​​andere resolutie dan verwacht?",
        "answer": "Uw besturingssysteem maakt mogelijk gebruik van beeldschermschaling (bijvoorbeeld 125% of 150% op Windows). Dit verandert de effectieve CSS-resolutie terwijl de fysieke resolutie hetzelfde blijft. De gerapporteerde waarden weerspiegelen uw huidige schaalinstellingen."
      },
      {
        "question": "Wat is kleurdiepte?",
        "answer": "Kleurdiepte geeft aan hoeveel bits worden gebruikt om de kleur van elke pixel weer te geven. 24-bit (8 bits per kanaal) ondersteunt 16,7 miljoen kleuren en is standaard. 30-bit (10 bits per kanaal) ondersteunt 1,07 miljard kleuren voor HDR-inhoud."
      },
      {
        "question": "Hoe controleer ik mijn werkelijke monitorresolutie?",
        "answer": "Deze tool detecteert de resolutie die door uw browser wordt gerapporteerd. Voor de werkelijke fysieke resolutie controleert u de monitorspecificaties of de weergave-instellingen van uw besturingssysteem. Als schaling wordt toegepast, vermenigvuldigt u de CSS-resolutie met de pixelverhouding van het apparaat."
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
        "question": "ما الفرق بين دقة الشاشة وبكسلات CSS؟",
        "answer": "دقة الشاشة هي عدد وحدات البكسل الفعلية لشاشتك. بكسلات CSS هي وحدات البكسل المنطقية التي تستخدمها المتصفحات. على جهاز به نسبة بكسل 2x (مثل شاشات Retina)، فإن 1 بكسل CSS يساوي 4 بكسلات فعلية (2x2). هذا هو السبب في أن أبعاد بكسل CSS غالبًا ما تكون نصف الدقة الفعلية."
      },
      {
        "question": "ما هي نسبة بكسل الجهاز (DPR)؟",
        "answer": "نسبة بكسل الجهاز هي النسبة بين وحدات البكسل المادية وبكسلات CSS. يعني DPR بقيمة 1 أن كل بكسل CSS يتم تعيينه إلى بكسل فعلي واحد. DPR بقيمة 2 (Retina) يعني أن كل بكسل CSS يستخدم شبكة 2x2 من وحدات البكسل الفعلية لعرض أكثر وضوحًا."
      },
      {
        "question": "لماذا تظهر شاشتي دقة مختلفة عن المتوقع؟",
        "answer": "قد يستخدم نظام التشغيل الخاص بك تحجيم العرض (على سبيل المثال، 125% أو 150% على نظام التشغيل Windows). يؤدي هذا إلى تغيير دقة CSS الفعالة بينما تظل الدقة الفعلية كما هي. تعكس القيم المبلغ عنها إعدادات القياس الحالية."
      },
      {
        "question": "ما هو عمق اللون؟",
        "answer": "يشير عمق اللون إلى عدد البتات المستخدمة لتمثيل لون كل بكسل. 24 بت (8 بت لكل قناة) يدعم 16.7 مليون لون وهو قياسي. يدعم 30 بت (10 بت لكل قناة) 1.07 مليار لون لمحتوى HDR."
      },
      {
        "question": "كيف أتحقق من دقة الشاشة الفعلية؟",
        "answer": "تكتشف هذه الأداة الدقة التي أبلغ عنها متصفحك. للحصول على الدقة الفعلية، تحقق من مواصفات شاشتك أو إعدادات عرض نظام التشغيل. إذا تم تطبيق القياس، فاضرب دقة CSS بنسبة بكسل الجهاز."
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
        "question": "Ekran çözünürlüğü ile CSS pikselleri arasındaki fark nedir?",
        "answer": "Ekran çözünürlüğü, ekranınızın fiziksel piksel sayısıdır. CSS pikselleri tarayıcılar tarafından kullanılan mantıksal piksellerdir. 2x piksel oranına sahip bir cihazda (Retina ekranlar gibi), 1 CSS pikseli 4 fiziksel piksele (2x2) eşittir. Bu nedenle CSS piksel boyutları genellikle fiziksel çözünürlüğün yarısı kadardır."
      },
      {
        "question": "Cihaz Piksel Oranı (DPR) nedir?",
        "answer": "Cihaz Piksel Oranı, fiziksel pikseller ile CSS pikselleri arasındaki orandır. DPR'nin 1 olması, her CSS pikselinin bir fiziksel pikselle eşleştiği anlamına gelir. 2 DPR (Retina), her CSS pikselinin daha keskin görüntü oluşturma için 2x2 fiziksel piksel ızgarası kullandığı anlamına gelir."
      },
      {
        "question": "Ekranım neden beklenenden farklı bir çözünürlük gösteriyor?",
        "answer": "İşletim sisteminiz ekran ölçeklendirmeyi kullanıyor olabilir (ör. Windows'ta %125 veya %150). Bu, fiziksel çözünürlük aynı kalırken etkili CSS çözünürlüğünü değiştirir. Bildirilen değerler mevcut ölçeklendirme ayarlarınızı yansıtır."
      },
      {
        "question": "Renk derinliği nedir?",
        "answer": "Renk derinliği, her pikselin rengini temsil etmek için kaç bit kullanıldığını gösterir. 24 bit (kanal başına 8 bit) 16,7 milyon rengi destekler ve standarttır. 30 bit (kanal başına 10 bit), HDR içeriği için 1,07 milyar rengi destekler."
      },
      {
        "question": "Gerçek monitör çözünürlüğümü nasıl kontrol ederim?",
        "answer": "Bu araç, tarayıcınız tarafından bildirilen çözünürlüğü algılar. Gerçek fiziksel çözünürlük için monitörünüzün özelliklerini veya işletim sisteminizin görüntü ayarlarını kontrol edin. Ölçeklendirme uygulandıysa CSS çözünürlüğünü cihazın piksel oranıyla çarpın."
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
        "question": "Jaka jest różnica między rozdzielczością ekranu a pikselami CSS?",
        "answer": "Rozdzielczość ekranu to fizyczna liczba pikseli wyświetlacza. Piksele CSS to logiczne piksele używane przez przeglądarki. Na urządzeniu o współczynniku pikseli 2x (takim jak wyświetlacze Retina) 1 piksel CSS równa się 4 pikselom fizycznym (2x2). To dlatego wymiary w pikselach CSS często stanowią połowę rozdzielczości fizycznej."
      },
      {
        "question": "Co to jest współczynnik pikseli urządzenia (DPR)?",
        "answer": "Współczynnik pikseli urządzenia to stosunek pikseli fizycznych do pikseli CSS. DPR równy 1 oznacza, że ​​każdy piksel CSS jest mapowany na jeden piksel fizyczny. DPR wynoszący 2 (Retina) oznacza, że ​​każdy piksel CSS wykorzystuje siatkę fizycznych pikseli 2x2 w celu ostrzejszego renderowania."
      },
      {
        "question": "Dlaczego mój ekran wyświetla inną rozdzielczość niż oczekiwano?",
        "answer": "Twój system operacyjny może używać skalowania wyświetlacza (np. 125% lub 150% w systemie Windows). Zmienia to efektywną rozdzielczość CSS, podczas gdy rozdzielczość fizyczna pozostaje taka sama. Podane wartości odzwierciedlają Twoje bieżące ustawienia skalowania."
      },
      {
        "question": "Co to jest głębia kolorów?",
        "answer": "Głębia kolorów wskazuje, ile bitów jest używanych do przedstawienia koloru każdego piksela. 24-bitowy (8 bitów na kanał) obsługuje 16,7 miliona kolorów i jest standardem. Wersja 30-bitowa (10 bitów na kanał) obsługuje 1,07 miliarda kolorów dla treści HDR."
      },
      {
        "question": "Jak sprawdzić rzeczywistą rozdzielczość mojego monitora?",
        "answer": "To narzędzie wykrywa rozdzielczość zgłaszaną przez Twoją przeglądarkę. Aby uzyskać rzeczywistą rozdzielczość fizyczną, sprawdź specyfikacje monitora lub ustawienia wyświetlania systemu operacyjnego. Jeśli stosowane jest skalowanie, pomnóż rozdzielczość CSS przez współczynnik pikseli urządzenia."
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
        "question": "Apa perbedaan antara resolusi layar dan piksel CSS?",
        "answer": "Resolusi layar adalah jumlah piksel fisik tampilan Anda. Piksel CSS adalah piksel logis yang digunakan oleh browser. Pada perangkat dengan rasio piksel 2x (seperti layar Retina), 1 piksel CSS sama dengan 4 piksel fisik (2x2). Inilah sebabnya mengapa dimensi piksel CSS sering kali berukuran setengah resolusi fisik."
      },
      {
        "question": "Apa yang dimaksud dengan Rasio Piksel Perangkat (DPR)?",
        "answer": "Rasio Piksel Perangkat adalah rasio antara piksel fisik dan piksel CSS. DPR sebesar 1 berarti setiap piksel CSS dipetakan ke satu piksel fisik. DPR sebesar 2 (Retina) berarti setiap piksel CSS menggunakan kisi piksel fisik berukuran 2x2 untuk rendering yang lebih tajam."
      },
      {
        "question": "Mengapa layar saya menampilkan resolusi berbeda dari yang diharapkan?",
        "answer": "Sistem operasi Anda mungkin menggunakan penskalaan tampilan (misalnya, 125% atau 150% di Windows). Ini mengubah resolusi CSS efektif sementara resolusi fisik tetap sama. Nilai yang dilaporkan mencerminkan pengaturan penskalaan Anda saat ini."
      },
      {
        "question": "Apa yang dimaksud dengan kedalaman warna?",
        "answer": "Kedalaman warna menunjukkan berapa banyak bit yang digunakan untuk mewakili warna setiap piksel. 24-bit (8 bit per saluran) mendukung 16,7 juta warna dan merupakan standar. 30-bit (10 bit per saluran) mendukung 1,07 miliar warna untuk konten HDR."
      },
      {
        "question": "Bagaimana cara memeriksa resolusi monitor saya yang sebenarnya?",
        "answer": "Alat ini mendeteksi resolusi yang dilaporkan oleh browser Anda. Untuk resolusi fisik sebenarnya, periksa spesifikasi monitor atau pengaturan tampilan sistem operasi Anda. Jika penskalaan diterapkan, kalikan resolusi CSS dengan rasio piksel perangkat."
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
        "question": "В чем разница между разрешением экрана и пикселями CSS?",
        "answer": "Разрешение экрана — это физическое количество пикселей вашего дисплея. CSS-пиксели — это логические пиксели, используемые браузерами. На устройстве с соотношением пикселей 2x (например, дисплеях Retina) 1 пиксель CSS равен 4 физическим пикселям (2x2). Вот почему размеры пикселей CSS часто вдвое меньше физического разрешения."
      },
      {
        "question": "Что такое соотношение пикселей устройства (DPR)?",
        "answer": "Соотношение пикселей устройства — это соотношение между физическими пикселями и пикселями CSS. DPR, равный 1, означает, что каждый пиксель CSS соответствует одному физическому пикселю. DPR, равный 2 (Retina), означает, что каждый пиксель CSS использует сетку физических пикселей 2x2 для более четкого рендеринга."
      },
      {
        "question": "Почему мой экран показывает разрешение, отличное от ожидаемого?",
        "answer": "Ваша операционная система может использовать масштабирование дисплея (например, 125% или 150% в Windows). Это изменит эффективное разрешение CSS, в то время как физическое разрешение останется прежним. Сообщенные значения отражают ваши текущие настройки масштабирования."
      },
      {
        "question": "Что такое глубина цвета?",
        "answer": "Глубина цвета указывает, сколько бит используется для представления цвета каждого пикселя. 24-битный (8 бит на канал) поддерживает 16,7 миллионов цветов и является стандартным. 30-битный режим (10 бит на канал) поддерживает 1,07 миллиарда цветов для HDR-контента."
      },
      {
        "question": "Как проверить фактическое разрешение монитора?",
        "answer": "Этот инструмент определяет разрешение, сообщаемое вашим браузером. Чтобы узнать истинное физическое разрешение, проверьте характеристики вашего монитора или настройки дисплея операционной системы. Если применяется масштабирование, умножьте разрешение CSS на соотношение пикселей устройства."
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
