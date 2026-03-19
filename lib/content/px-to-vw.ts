import type { LocalizedDocMap } from "./doc-types";

export const content: LocalizedDocMap = {
  "en": {
    "faq": [
      {
        "question": "What is vw in CSS?",
        "answer": "VW (viewport width) is a CSS unit equal to 1% of the viewport's width. If the viewport is 1440px wide, 1vw = 14.4px. VW units create fluid layouts that scale proportionally with the browser window width."
      },
      {
        "question": "How do I convert px to vw?",
        "answer": "Divide the pixel value by the viewport width, then multiply by 100. For example, on a 1440px viewport: 100px / 1440 x 100 = 6.944vw. The result changes based on the viewport width you design for."
      },
      {
        "question": "Should I use vw for font sizes?",
        "answer": "Pure vw font sizes can be too small on mobile or too large on wide screens. Best practice is to use CSS clamp(): clamp(1rem, 2.5vw, 2rem). This sets minimum and maximum sizes while scaling fluidly between breakpoints."
      },
      {
        "question": "What is the difference between vw and percentage?",
        "answer": "VW is always relative to the viewport width, regardless of parent element. Percentage (%) is relative to the parent element's width. In most cases for width, they produce similar results, but vw ignores container constraints."
      },
      {
        "question": "Does vw include the scrollbar width?",
        "answer": "Yes, vw includes the scrollbar. On Windows (where scrollbars take space), 100vw is wider than the visible area. This can cause horizontal scrolling. Use width: 100% instead of 100vw for full-width elements to avoid this issue."
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
        "question": "¿Qué es vw en CSS?",
        "answer": "VW (ancho de la ventana gráfica) es una unidad CSS igual al 1% del ancho de la ventana gráfica. Si la ventana gráfica tiene 1440 px de ancho, 1vw = 14,4 px. Las unidades VW crean diseños fluidos que escalan proporcionalmente con el ancho de la ventana del navegador."
      },
      {
        "question": "¿Cómo convierto px a vw?",
        "answer": "Divida el valor de píxel por el ancho de la ventana gráfica, luego multiplique por 100. Por ejemplo, en una ventana gráfica de 1440px: 100px / 1440 x 100 = 6.944vw. El resultado cambia según el ancho de la ventana gráfica para el que diseña."
      },
      {
        "question": "¿Debo usar vw para los tamaños de fuente?",
        "answer": "Los tamaños de fuente puros vw pueden ser demasiado pequeños en dispositivos móviles o demasiado grandes en pantallas anchas. La mejor práctica es utilizar CSS abrazadera(): abrazadera(1rem, 2.5vw, 2rem). Esto establece los tamaños mínimo y máximo mientras escala con fluidez entre puntos de interrupción."
      },
      {
        "question": "¿Cuál es la diferencia entre vw y porcentaje?",
        "answer": "VW siempre es relativo al ancho de la ventana gráfica, independientemente del elemento principal. El porcentaje (%) es relativo al ancho del elemento principal. En la mayoría de los casos, para el ancho, producen resultados similares, pero vw ignora las restricciones del contenedor."
      },
      {
        "question": "¿Vw incluye el ancho de la barra de desplazamiento?",
        "answer": "Sí, vw incluye la barra de desplazamiento. En Windows (donde las barras de desplazamiento ocupan espacio), 100vw es más ancho que el área visible. Esto puede provocar un desplazamiento horizontal. Utilice ancho: 100% en lugar de 100vw para elementos de ancho completo para evitar este problema."
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
        "question": "Qu'est-ce que vw en CSS ?",
        "answer": "VW (largeur de la fenêtre) est une unité CSS égale à 1 % de la largeur de la fenêtre. Si la fenêtre d'affichage a une largeur de 1 440 px, 1vw = 14,4 px. Les unités VW créent des mises en page fluides qui évoluent proportionnellement à la largeur de la fenêtre du navigateur."
      },
      {
        "question": "Comment convertir des px en vw ?",
        "answer": "Divisez la valeur du pixel par la largeur de la fenêtre d'affichage, puis multipliez-la par 100. Par exemple, sur une fenêtre d'affichage de 1 440 px : 100 px / 1 440 x 100 = 6,944vw. Le résultat change en fonction de la largeur de la fenêtre pour laquelle vous concevez."
      },
      {
        "question": "Dois-je utiliser vw pour les tailles de police ?",
        "answer": "Les tailles de police pures vw peuvent être trop petites sur mobile ou trop grandes sur des écrans larges. La meilleure pratique consiste à utiliser CSS clamp() : clamp(1rem, 2.5vw, 2rem). Cela définit les tailles minimales et maximales tout en évoluant de manière fluide entre les points d'arrêt."
      },
      {
        "question": "Quelle est la différence entre vw et pourcentage ?",
        "answer": "VW est toujours relatif à la largeur de la fenêtre d'affichage, quel que soit l'élément parent. Le pourcentage (%) est relatif à la largeur de l'élément parent. Dans la plupart des cas pour la largeur, ils produisent des résultats similaires, mais vw ignore les contraintes de conteneur."
      },
      {
        "question": "Vw inclut-il la largeur de la barre de défilement ?",
        "answer": "Oui, vw inclut la barre de défilement. Sous Windows (où les barres de défilement prennent de la place), 100vw est plus large que la zone visible. Cela peut provoquer un défilement horizontal. Utilisez width : 100 % au lieu de 100vw pour les éléments pleine largeur afin d'éviter ce problème."
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
        "question": "Was ist vw in CSS?",
        "answer": "VW (Ansichtsfensterbreite) ist eine CSS-Einheit, die 1 % der Breite des Ansichtsfensters entspricht. Wenn das Ansichtsfenster 1440 Pixel breit ist, ist 1vw = 14,4 Pixel. VW-Einheiten erstellen fließende Layouts, die proportional zur Breite des Browserfensters skalieren."
      },
      {
        "question": "Wie konvertiere ich px in vw?",
        "answer": "Teilen Sie den Pixelwert durch die Breite des Ansichtsfensters und multiplizieren Sie ihn dann mit 100. Beispiel: Bei einem 1440-Pixel-Ansichtsfenster: 100 Pixel / 1440 x 100 = 6,944 vw. Das Ergebnis ändert sich basierend auf der Breite des Ansichtsfensters, für die Sie entwerfen."
      },
      {
        "question": "Soll ich vw für Schriftgrößen verwenden?",
        "answer": "Reine vw-Schriftgrößen können auf Mobilgeräten zu klein oder auf breiten Bildschirmen zu groß sein. Die beste Vorgehensweise ist die Verwendung von CSS „clamp()“: „clamp(1rem, 2.5vw, 2rem)“. Dadurch werden minimale und maximale Größen festgelegt, während zwischen Haltepunkten fließend skaliert wird."
      },
      {
        "question": "Was ist der Unterschied zwischen vw und Prozentsatz?",
        "answer": "VW ist immer relativ zur Breite des Ansichtsfensters, unabhängig vom übergeordneten Element. Der Prozentsatz (%) ist relativ zur Breite des übergeordneten Elements. In den meisten Fällen liefern sie hinsichtlich der Breite ähnliche Ergebnisse, aber vw ignoriert Containerbeschränkungen."
      },
      {
        "question": "Enthält vw die Breite der Bildlaufleiste?",
        "answer": "Ja, vw enthält die Bildlaufleiste. Unter Windows (wo Bildlaufleisten Platz beanspruchen) ist 100vw breiter als der sichtbare Bereich. Dies kann zu horizontalem Scrollen führen. Verwenden Sie width: 100 % statt 100 vw für Elemente voller Breite, um dieses Problem zu vermeiden."
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
        "question": "O que é vw em CSS?",
        "answer": "VW (largura da janela de visualização) é uma unidade CSS igual a 1% da largura da janela de visualização. Se a janela de visualização tiver 1440px de largura, 1vw = 14,4px. As unidades VW criam layouts fluidos que são dimensionados proporcionalmente à largura da janela do navegador."
      },
      {
        "question": "Como faço para converter px em vw?",
        "answer": "Divida o valor do pixel pela largura da janela de visualização e multiplique por 100. Por exemplo, em uma janela de visualização de 1440px: 100px / 1440 x 100 = 6,944vw. O resultado muda com base na largura da janela de visualização que você projetou."
      },
      {
        "question": "Devo usar vw para tamanhos de fonte?",
        "answer": "Os tamanhos de fonte vw puros podem ser muito pequenos em dispositivos móveis ou muito grandes em telas largas. A melhor prática é usar CSS clamp(): clamp(1rem, 2.5vw, 2rem). Isso define os tamanhos mínimo e máximo enquanto dimensiona com fluidez entre os pontos de interrupção."
      },
      {
        "question": "Qual é a diferença entre vw e porcentagem?",
        "answer": "VW é sempre relativo à largura da janela de visualização, independentemente do elemento pai. A porcentagem (%) é relativa à largura do elemento pai. Na maioria dos casos, para largura, eles produzem resultados semelhantes, mas vw ignora as restrições do contêiner."
      },
      {
        "question": "O vw inclui a largura da barra de rolagem?",
        "answer": "Sim, o vw inclui a barra de rolagem. No Windows (onde as barras de rolagem ocupam espaço), 100vw é mais largo que a área visível. Isso pode causar rolagem horizontal. Use width: 100% em vez de 100vw para elementos de largura total para evitar esse problema."
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
        "question": "CSS में vw क्या है?",
        "answer": "VW (व्यूपोर्ट चौड़ाई) व्यूपोर्ट की चौड़ाई के 1% के बराबर एक CSS इकाई है। यदि व्यूपोर्ट 1440px चौड़ा है, तो 1vw = 14.4px। VW इकाइयाँ तरल लेआउट बनाती हैं जो ब्राउज़र विंडो की चौड़ाई के साथ आनुपातिक रूप से बढ़ती हैं।"
      },
      {
        "question": "मैं px को vw में कैसे परिवर्तित करूं?",
        "answer": "पिक्सेल मान को व्यूपोर्ट की चौड़ाई से विभाजित करें, फिर 100 से गुणा करें। उदाहरण के लिए, 1440px व्यूपोर्ट पर: 100px / 1440 x 100 = 6.944vw। आपके द्वारा डिज़ाइन की गई व्यूपोर्ट चौड़ाई के आधार पर परिणाम बदलता है।"
      },
      {
        "question": "क्या मुझे फ़ॉन्ट आकार के लिए vw का उपयोग करना चाहिए?",
        "answer": "शुद्ध vw फ़ॉन्ट आकार मोबाइल पर बहुत छोटा या चौड़ी स्क्रीन पर बहुत बड़ा हो सकता है। सर्वोत्तम अभ्यास सीएसएस क्लैंप() का उपयोग करना है: क्लैंप (1rem, 2.5vw, 2rem)। यह ब्रेकप्वाइंट के बीच तरलता से स्केलिंग करते हुए न्यूनतम और अधिकतम आकार निर्धारित करता है।"
      },
      {
        "question": "VW और प्रतिशत के बीच क्या अंतर है?",
        "answer": "मूल तत्व की परवाह किए बिना VW हमेशा व्यूपोर्ट की चौड़ाई से संबंधित होता है। प्रतिशत (%) मूल तत्व की चौड़ाई से संबंधित है। चौड़ाई के अधिकांश मामलों में, वे समान परिणाम देते हैं, लेकिन vw कंटेनर बाधाओं को अनदेखा करता है।"
      },
      {
        "question": "क्या vw में स्क्रॉलबार की चौड़ाई शामिल है?",
        "answer": "हाँ, vw में स्क्रॉलबार शामिल है। विंडोज़ पर (जहां स्क्रॉलबार जगह लेते हैं), 100vw दृश्य क्षेत्र से अधिक चौड़ा है। इससे क्षैतिज स्क्रॉलिंग हो सकती है. इस समस्या से बचने के लिए पूर्ण-चौड़ाई वाले तत्वों के लिए 100vw के बजाय width: 100% का उपयोग करें।"
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
        "question": "CSS の vw とは何ですか?",
        "answer": "VW (ビューポート幅) は、ビューポートの幅の 1% に等しい CSS 単位です。ビューポートの幅が 1440 ピクセルの場合、1vw = 14.4 ピクセルになります。 VW ユニットは、ブラウザ ウィンドウの幅に比例して拡大縮小する流動的なレイアウトを作成します。"
      },
      {
        "question": "ピクセルを vw に変換するにはどうすればよいですか?",
        "answer": "ピクセル値をビューポートの幅で割り、100 を掛けます。たとえば、1440 ピクセルのビューポートの場合: 100px / 1440 x 100 = 6.944vw。結果は、デザイン対象のビューポート幅に基づいて変わります。"
      },
      {
        "question": "フォント サイズには vw を使用する必要がありますか?",
        "answer": "純粋な vw フォント サイズは、モバイルでは小さすぎるか、ワイド スクリーンでは大きすぎる可能性があります。ベストプラクティスは、CSS のクランプ(): クランプ(1rem, 2.5vw, 2rem) を使用することです。これにより、ブレークポイント間で流動的に拡大縮小しながら、最小サイズと最大サイズが設定されます。"
      },
      {
        "question": "vw とパーセントの違いは何ですか?",
        "answer": "VW は、親要素に関係なく、常にビューポートの幅を基準にしています。パーセンテージ (%) は、親要素の幅に対する相対値です。ほとんどの場合、幅については同様の結果が生成されますが、vw はコンテナーの制約を無視します。"
      },
      {
        "question": "vw にはスクロールバーの幅が含まれますか?",
        "answer": "はい、vw にはスクロールバーが含まれます。 Windows (スクロールバーがスペースを占める場所) では、100vw は表示領域よりも広いです。これにより、水平スクロールが発生する可能性があります。この問題を回避するには、全幅要素には 100vw ではなく width: 100% を使用してください。"
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
        "question": "CSS에서 vw란 무엇인가요?",
        "answer": "VW(뷰포트 너비)는 뷰포트 너비의 1%에 해당하는 CSS 단위입니다. 뷰포트 너비가 1440px인 경우 1vw = 14.4px입니다. VW 장치는 브라우저 창 너비에 비례하여 크기가 조정되는 유동적인 레이아웃을 만듭니다."
      },
      {
        "question": "px를 vw로 어떻게 변환합니까?",
        "answer": "픽셀 값을 뷰포트 너비로 나눈 다음 100을 곱합니다. 예를 들어 1440px 뷰포트에서는 100px / 1440 x 100 = 6.944vw입니다. 결과는 디자인한 뷰포트 너비에 따라 변경됩니다."
      },
      {
        "question": "글꼴 크기에 vw를 사용해야 합니까?",
        "answer": "순수한 vw 글꼴 크기는 모바일에서는 너무 작을 수도 있고 와이드 스크린에서는 너무 클 수도 있습니다. 가장 좋은 방법은 CSS 클램프()를 사용하는 것입니다: 클램프(1rem, 2.5vw, 2rem). 이는 중단점 사이에서 유동적으로 크기를 조정하면서 최소 및 최대 크기를 설정합니다."
      },
      {
        "question": "vw와 백분율의 차이점은 무엇입니까?",
        "answer": "VW는 상위 요소에 관계없이 항상 뷰포트 너비를 기준으로 합니다. 백분율(%)은 상위 요소의 너비를 기준으로 합니다. 대부분의 경우 너비에 대해서는 비슷한 결과가 생성되지만 vw는 컨테이너 제약 조건을 무시합니다."
      },
      {
        "question": "vw에 스크롤 막대 너비가 포함됩니까?",
        "answer": "예, vw에는 스크롤 막대가 포함됩니다. 스크롤바가 공간을 차지하는 Windows에서는 100vw가 보이는 영역보다 넓습니다. 이로 인해 가로 스크롤이 발생할 수 있습니다. 이 문제를 방지하려면 전체 너비 요소에 대해 100vw 대신 width: 100%를 사용하세요."
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
        "question": "Cos'è vw nei CSS?",
        "answer": "VW (larghezza del viewport) è un'unità CSS pari all'1% della larghezza del viewport. Se il viewport è largo 1440px, 1vw = 14,4px. Le unità VW creano layout fluidi che si ridimensionano proporzionalmente alla larghezza della finestra del browser."
      },
      {
        "question": "Come converto px in vw?",
        "answer": "Dividi il valore in pixel per la larghezza del viewport, quindi moltiplicalo per 100. Ad esempio, su un viewport di 1440px: 100px / 1440 x 100 = 6,944vw. Il risultato cambia in base alla larghezza del viewport per cui progetti."
      },
      {
        "question": "Devo utilizzare vw per le dimensioni dei caratteri?",
        "answer": "Le dimensioni dei caratteri vw puri possono essere troppo piccole sui dispositivi mobili o troppo grandi sugli schermi ampi. La procedura migliore è utilizzare CSS clamp(): clamp(1rem, 2.5vw, 2rem). Imposta le dimensioni minima e massima mentre si ridimensiona in modo fluido tra i punti di interruzione."
      },
      {
        "question": "Qual è la differenza tra vw e percentuale?",
        "answer": "VW è sempre relativo alla larghezza del viewport, indipendentemente dall'elemento principale. La percentuale (%) è relativa alla larghezza dell'elemento genitore. Nella maggior parte dei casi per la larghezza, producono risultati simili, ma vw ignora i vincoli del contenitore."
      },
      {
        "question": "vw include la larghezza della barra di scorrimento?",
        "answer": "Sì, vw include la barra di scorrimento. Su Windows (dove le barre di scorrimento occupano spazio), 100vw è più largo dell'area visibile. Ciò può causare lo scorrimento orizzontale. Utilizza larghezza: 100% anziché 100vw per gli elementi a larghezza intera per evitare questo problema."
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
        "question": "Wat is vw in CSS?",
        "answer": "VW (viewportbreedte) is een CSS-eenheid die gelijk is aan 1% van de breedte van de viewport. Als de viewport 1440px breed is, is 1vw = 14,4px. VW-eenheden creëren vloeiende lay-outs die proportioneel schalen met de breedte van het browservenster."
      },
      {
        "question": "Hoe converteer ik px naar vw?",
        "answer": "Verdeel de pixelwaarde door de breedte van de viewport en vermenigvuldig deze vervolgens met 100. Bijvoorbeeld op een viewport van 1440px: 100px / 1440 x 100 = 6,944vw. Het resultaat verandert op basis van de viewportbreedte waarvoor u ontwerpt."
      },
      {
        "question": "Moet ik vw gebruiken voor lettergroottes?",
        "answer": "Pure vw-lettergroottes kunnen te klein zijn op mobiele apparaten of te groot op brede schermen. De beste praktijk is om CSS klem(): klem(1rem, 2.5vw, 2rem) te gebruiken. Hiermee worden de minimum- en maximumgrootten ingesteld terwijl er vloeiend wordt geschaald tussen breekpunten."
      },
      {
        "question": "Wat is het verschil tussen vw en percentage?",
        "answer": "VW is altijd relatief ten opzichte van de breedte van de viewport, ongeacht het bovenliggende element. Het percentage (%) is relatief ten opzichte van de breedte van het bovenliggende element. In de meeste gevallen leveren ze voor de breedte vergelijkbare resultaten op, maar vw negeert containerbeperkingen."
      },
      {
        "question": "Heeft vw de breedte van de schuifbalk opgenomen?",
        "answer": "Ja, vw bevat de schuifbalk. Op Windows (waar schuifbalken ruimte innemen) is 100vw breder dan het zichtbare gebied. Dit kan horizontaal scrollen veroorzaken. Gebruik breedte: 100% in plaats van 100vw voor elementen met volledige breedte om dit probleem te voorkomen."
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
        "question": "ما هو vw في CSS؟",
        "answer": "VW (عرض إطار العرض) هو وحدة CSS تساوي 1% من عرض إطار العرض. إذا كان عرض إطار العرض 1440 بكسل، فإن 1vw = 14.4 بكسل. تنشئ وحدات VW تخطيطات مرنة تتناسب مع عرض نافذة المتصفح."
      },
      {
        "question": "كيف يمكنني تحويل px إلى vw؟",
        "answer": "اقسم قيمة البكسل على عرض إطار العرض، ثم اضربها في 100. على سبيل المثال، في إطار عرض 1440 بكسل: 100px / 1440 x 100 = 6.944vw. تتغير النتيجة بناءً على عرض إطار العرض الذي تصمم له."
      },
      {
        "question": "هل يجب أن أستخدم vw لأحجام الخطوط؟",
        "answer": "يمكن أن تكون أحجام خطوط vw النقية صغيرة جدًا على الهاتف المحمول أو كبيرة جدًا على الشاشات العريضة. أفضل الممارسات هي استخدام CSS المشبك (): المشبك (1rem، 2.5vw، 2rem). يؤدي هذا إلى تعيين الحد الأدنى والحد الأقصى للحجم أثناء القياس بسلاسة بين نقاط التوقف."
      },
      {
        "question": "ما هو الفرق بين vw والنسبة المئوية؟",
        "answer": "VW دائمًا ما يكون متعلقًا بعرض إطار العرض، بغض النظر عن العنصر الأصلي. النسبة المئوية (%) مرتبطة بعرض العنصر الأصلي. في معظم الحالات بالنسبة للعرض، فإنها تنتج نتائج مماثلة، لكن vw يتجاهل قيود الحاوية."
      },
      {
        "question": "هل يتضمن vw عرض شريط التمرير؟",
        "answer": "نعم، يتضمن vw شريط التمرير. في نظام التشغيل Windows (حيث تشغل أشرطة التمرير مساحة)، تكون 100vw أوسع من المنطقة المرئية. يمكن أن يسبب هذا التمرير الأفقي. استخدم width: 100% بدلاً من 100vw للعناصر ذات العرض الكامل لتجنب هذه المشكلة."
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
        "question": "CSS'de vw nedir?",
        "answer": "VW (görüntü alanı genişliği), görünüm genişliğinin %1'ine eşit bir CSS birimidir. Görünüm 1440 piksel genişliğindeyse 1vw = 14,4 pikseldir. VW üniteleri, tarayıcı penceresi genişliğiyle orantılı olarak ölçeklenen akıcı düzenler oluşturur."
      },
      {
        "question": "Pxx'i vw'ye nasıl dönüştürebilirim?",
        "answer": "Piksel değerini görüntü alanı genişliğine bölün ve ardından 100 ile çarpın. Örneğin, 1440 piksellik bir görüntü alanında: 100px / 1440 x 100 = 6,944vw. Sonuç, tasarladığınız görünüm genişliğine göre değişir."
      },
      {
        "question": "Yazı tipi boyutları için vw kullanmalı mıyım?",
        "answer": "Saf vw yazı tipi boyutları mobil cihazlarda çok küçük veya geniş ekranlarda çok büyük olabilir. En iyi uygulama CSS kelepçesini () kullanmaktır: kelepçe(1rem, 2.5vw, 2rem). Bu, kesme noktaları arasında akıcı bir şekilde ölçeklendirme yaparken minimum ve maksimum boyutları belirler."
      },
      {
        "question": "vw ve yüzde arasındaki fark nedir?",
        "answer": "VW, üst öğeden bağımsız olarak her zaman görünüm alanı genişliğine göredir. Yüzde (%) ana öğenin genişliğine göredir. Çoğu durumda genişlik için benzer sonuçlar üretirler ancak vw kapsayıcı kısıtlamalarını göz ardı eder."
      },
      {
        "question": "vw kaydırma çubuğu genişliğini içeriyor mu?",
        "answer": "Evet, vw kaydırma çubuğunu içeriyor. Windows'ta (kaydırma çubuklarının yer kapladığı yerde), 100vw görünür alandan daha geniştir. Bu yatay kaydırmaya neden olabilir. Bu sorunu önlemek için tam genişlikli öğeler için genişlik: 100vw yerine %100 kullanın."
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
        "question": "Co to jest vw w CSS?",
        "answer": "VW (szerokość rzutni) to jednostka CSS równa 1% szerokości rzutni. Jeśli rzutnia ma szerokość 1440 pikseli, 1vw = 14,4 piksela. Jednostki VW tworzą płynne układy, które skalują się proporcjonalnie do szerokości okna przeglądarki."
      },
      {
        "question": "Jak przekonwertować px na vw?",
        "answer": "Podziel wartość piksela przez szerokość widocznego obszaru, a następnie pomnóż przez 100. Na przykład w rzutni 1440px: 100px / 1440 x 100 = 6,944vw. Wynik zmienia się w zależności od szerokości widocznego obszaru, dla którego projektujesz."
      },
      {
        "question": "Czy powinienem używać vw do określania rozmiarów czcionek?",
        "answer": "Rozmiary czcionek samego vw mogą być za małe na urządzeniach mobilnych lub za duże na szerokich ekranach. Najlepszą praktyką jest użycie CSS zacisk(): zacisk(1rem, 2.5vw, 2rem). Ustawia minimalny i maksymalny rozmiar podczas płynnego skalowania pomiędzy punktami przerwania."
      },
      {
        "question": "Jaka jest różnica między vw a procentem?",
        "answer": "VW jest zawsze zależne od szerokości rzutni, niezależnie od elementu nadrzędnego. Procent (%) odnosi się do szerokości elementu nadrzędnego. W większości przypadków w przypadku szerokości dają podobne wyniki, ale vw ignoruje ograniczenia kontenera."
      },
      {
        "question": "Czy vw uwzględnia szerokość paska przewijania?",
        "answer": "Tak, vw uwzględnia pasek przewijania. W systemie Windows (gdzie paski przewijania zajmują miejsce) 100vw jest szersze niż widoczny obszar. Może to powodować przewijanie w poziomie. Aby uniknąć tego problemu, użyj szerokości: 100% zamiast 100vw dla elementów o pełnej szerokości."
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
        "question": "Apa itu vw di CSS?",
        "answer": "VW (lebar viewport) adalah unit CSS yang sama dengan 1% dari lebar viewport. Jika area pandang lebarnya 1440px, 1vw = 14,4px. Unit VW membuat tata letak yang dapat disesuaikan dengan skala yang proporsional dengan lebar jendela browser."
      },
      {
        "question": "Bagaimana cara mengonversi px ke vw?",
        "answer": "Bagi nilai piksel dengan lebar area pandang, lalu kalikan dengan 100. Misalnya, pada area pandang 1440 piksel: 100 piksel / 1440 x 100 = 6,944vw. Hasilnya berubah berdasarkan lebar viewport yang Anda desain."
      },
      {
        "question": "Haruskah saya menggunakan vw untuk ukuran font?",
        "answer": "Ukuran font vw murni bisa terlalu kecil di perangkat seluler atau terlalu besar di layar lebar. Praktik terbaiknya adalah menggunakan CSS penjepit(): penjepit(1rem, 2.5vw, 2rem). Ini menetapkan ukuran minimum dan maksimum sambil melakukan penskalaan dengan lancar di antara titik henti sementara."
      },
      {
        "question": "Apa perbedaan antara vw dan persentase?",
        "answer": "VW selalu relatif terhadap lebar area pandang, apa pun elemen induknya. Persentase (%) relatif terhadap lebar elemen induk. Dalam kebanyakan kasus untuk lebar, hasilnya serupa, namun vw mengabaikan batasan container."
      },
      {
        "question": "Apakah vw menyertakan lebar scrollbar?",
        "answer": "Ya, vw menyertakan lebar scrollbar. Di Windows (di mana scrollbar memakan ruang), 100vw lebih lebar dari area yang terlihat. Hal ini dapat menyebabkan pengguliran horizontal. Gunakan lebar: 100% alih-alih 100vw untuk elemen lebar penuh guna menghindari masalah ini."
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
        "question": "Что такое vw в CSS?",
        "answer": "VW (ширина области просмотра) — это единица измерения CSS, равная 1 % ширины области просмотра. Если ширина области просмотра составляет 1440 пикселей, 1vw = 14,4 пикселя. Модули VW создают гибкие макеты, которые масштабируются пропорционально ширине окна браузера."
      },
      {
        "question": "Как преобразовать пиксели в vw?",
        "answer": "Разделите значение пикселя на ширину области просмотра, а затем умножьте на 100. Например, в области просмотра 1440 пикселей: 100 пикселей / 1440 x 100 = 6,944vw. Результат меняется в зависимости от ширины области просмотра, для которой вы проектируете."
      },
      {
        "question": "Следует ли использовать vw для размеров шрифта?",
        "answer": "Размеры шрифтов Pure vw могут быть слишком маленькими на мобильных устройствах или слишком большими на широких экранах. Лучше всего использовать CSS-зажим(): зажим(1rem, 2.5vw, 2rem). Это устанавливает минимальный и максимальный размеры при плавном масштабировании между точками останова."
      },
      {
        "question": "В чем разница между vw и процентом?",
        "answer": "VW всегда относительно ширины области просмотра, независимо от родительского элемента. Процент (%) относится к ширине родительского элемента. В большинстве случаев для ширины они дают аналогичные результаты, но vw игнорирует ограничения контейнера."
      },
      {
        "question": "Включает ли vw ширину полосы прокрутки?",
        "answer": "Да, vw включает полосу прокрутки. В Windows (где полосы прокрутки занимают место) 100vw шире видимой области. Это может вызвать горизонтальную прокрутку. Чтобы избежать этой проблемы, используйте ширину: 100% вместо 100vw для элементов полной ширины."
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
