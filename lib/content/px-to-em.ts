import type { LocalizedDocMap } from "./doc-types";

export const content: LocalizedDocMap = {
  "en": {
    "faq": [
      {
        "question": "What is the difference between em and rem?",
        "answer": "EM is relative to the parent element's font size, while REM is relative to the root (html) element's font size. EM compounds - if a parent is 2em inside another 2em parent, it becomes 4x the root size. REM always references the root, avoiding compounding."
      },
      {
        "question": "How do I convert px to em?",
        "answer": "Divide the pixel value by the parent element's font size. If the parent is 16px: 24px / 16 = 1.5em. If the parent is 20px: 24px / 20 = 1.2em. The parent context matters for em calculations."
      },
      {
        "question": "When should I use em instead of rem?",
        "answer": "Use em when you want sizing relative to the component's own font size. For example, padding of 1em around text always creates proportional spacing regardless of the text size. Use rem for consistent sizing across the entire page."
      },
      {
        "question": "Why is em useful for component design?",
        "answer": "EM allows components to scale proportionally. A button with font-size, padding, and border-radius all in em units will scale up or down uniformly when you change just the font-size, making responsive component design easier."
      },
      {
        "question": "What is the compounding problem with em?",
        "answer": "When nested elements use em, sizes multiply. A 1.5em font inside a 1.5em container becomes 2.25x the root size (1.5 x 1.5). This cascading effect can cause unexpected sizing. REM solves this by always referencing the root element."
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
        "question": "¿Cuál es la diferencia entre em y rem?",
        "answer": "EM es relativo al tamaño de fuente del elemento principal, mientras que REM es relativo al tamaño de fuente del elemento raíz (html). Compuestos EM: si un padre está 2 em dentro de otro padre de 2 em, se vuelve 4 veces el tamaño de la raíz. REM siempre hace referencia a la raíz, evitando la combinación."
      },
      {
        "question": "¿Cómo convierto px a em?",
        "answer": "Divida el valor del píxel por el tamaño de fuente del elemento principal. Si el padre es de 16 px: 24 px/16 = 1,5 em. Si el padre es de 20 px: 24 px/20 = 1,2 em. El contexto principal es importante para los cálculos de em."
      },
      {
        "question": "¿Cuándo debo usar em en lugar de rem?",
        "answer": "Úselo cuando desee un tamaño relativo al tamaño de fuente del propio componente. Por ejemplo, el relleno de 1 em alrededor del texto siempre crea un espaciado proporcional independientemente del tamaño del texto. Utilice rem para lograr un tamaño uniforme en toda la página."
      },
      {
        "question": "¿Por qué es útil em para el diseño de componentes?",
        "answer": "EM permite que los componentes escale proporcionalmente. Un botón con tamaño de fuente, relleno y radio de borde, todo en unidades em, aumentará o disminuirá uniformemente cuando cambies solo el tamaño de fuente, lo que facilitará el diseño de componentes responsivos."
      },
      {
        "question": "¿Cuál es el problema de composición con em?",
        "answer": "Cuando los elementos anidados usan em, los tamaños se multiplican. Una fuente de 1,5 em dentro de un contenedor de 1,5 em se convierte en 2,25 veces el tamaño de la raíz (1,5 x 1,5). Este efecto en cascada puede provocar un tamaño inesperado. REM resuelve esto haciendo siempre referencia al elemento raíz."
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
        "question": "Quelle est la différence entre em et rem ?",
        "answer": "EM est relatif à la taille de police de l'élément parent, tandis que REM est relatif à la taille de police de l'élément racine (html). Composés EM - si un parent est 2em à l'intérieur d'un autre parent 2em, il devient 4x la taille de la racine. REM fait toujours référence à la racine, évitant ainsi la composition."
      },
      {
        "question": "Comment convertir px en em ?",
        "answer": "Divisez la valeur du pixel par la taille de police de l'élément parent. Si le parent fait 16px : 24px / 16 = 1,5em. Si le parent fait 20px : 24px / 20 = 1,2em. Le contexte parent est important pour les calculs em."
      },
      {
        "question": "Quand dois-je utiliser em au lieu de rem ?",
        "answer": "Utilisez em lorsque vous souhaitez un dimensionnement par rapport à la taille de police du composant. Par exemple, un remplissage de 1em autour du texte crée toujours un espacement proportionnel quelle que soit la taille du texte. Utilisez rem pour un dimensionnement cohérent sur toute la page."
      },
      {
        "question": "Pourquoi em est-il utile pour la conception de composants ?",
        "answer": "EM permet aux composants d'évoluer proportionnellement. Un bouton avec la taille de la police, le remplissage et le rayon de bordure, le tout en unités em, augmentera ou diminuera uniformément lorsque vous modifierez uniquement la taille de la police, ce qui facilitera la conception de composants réactifs."
      },
      {
        "question": "Quel est le problème de composition avec les em ?",
        "answer": "Lorsque les éléments imbriqués les utilisent, les tailles se multiplient. Une police de 1,5 em dans un conteneur de 1,5 em devient 2,25 fois la taille de la racine (1,5 x 1,5). Cet effet en cascade peut entraîner un dimensionnement inattendu. REM résout ce problème en faisant toujours référence à l'élément racine."
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
        "question": "Was ist der Unterschied zwischen em und rem?",
        "answer": "EM ist relativ zur Schriftgröße des übergeordneten Elements, während REM relativ zur Schriftgröße des Stammelements (HTML) ist. EM-Verbindungen - wenn ein Elternteil 2em innerhalb eines anderen 2em-Elternteils liegt, erhält es die vierfache Wurzelgröße. REM verweist immer auf die Wurzel und vermeidet so Zusammenfügungen."
      },
      {
        "question": "Wie konvertiere ich px in em?",
        "answer": "Dividieren Sie den Pixelwert durch die Schriftgröße des übergeordneten Elements. Wenn das übergeordnete Element 16 Pixel groß ist: 24 Pixel / 16 = 1,5 Em. Wenn das übergeordnete Element 20 Pixel groß ist: 24 Pixel / 20 = 1,2 Em. Der übergeordnete Kontext ist für em-Berechnungen wichtig."
      },
      {
        "question": "Wann sollte ich em anstelle von rem verwenden?",
        "answer": "Verwenden Sie em, wenn Sie die Größe relativ zur eigenen Schriftgröße der Komponente festlegen möchten. Wenn Sie beispielsweise den Text um 1em auffüllen, entsteht immer ein proportionaler Abstand, unabhängig von der Textgröße. Verwenden Sie rem für eine einheitliche Größe auf der gesamten Seite."
      },
      {
        "question": "Warum ist em für das Komponentendesign nützlich?",
        "answer": "EM ermöglicht die proportionale Skalierung von Komponenten. Eine Schaltfläche mit Schriftgröße, Abstand und Randradius, die alle in Geviert-Einheiten angegeben sind, wird gleichmäßig vergrößert oder verkleinert, wenn Sie nur die Schriftgröße ändern, was das responsive Komponentendesign erleichtert."
      },
      {
        "question": "Was ist das Verbindungsproblem mit Geviert?",
        "answer": "Wenn verschachtelte Elemente Geviert verwenden, vervielfachen sich die Größen. Eine 1,5-em-Schriftart in einem 1,5-em-Container erhält das 2,25-fache der Stammgröße (1,5 x 1,5). Dieser Kaskadeneffekt kann zu unerwarteten Größenanpassungen führen. REM löst dieses Problem, indem es immer auf das Stammelement verweist."
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
        "question": "Qual é a diferença entre em e rem?",
        "answer": "EM é relativo ao tamanho da fonte do elemento pai, enquanto REM é relativo ao tamanho da fonte do elemento raiz (html). Compostos EM - se um pai estiver 2em dentro de outro pai 2em, ele se tornará 4x o tamanho da raiz. REM sempre faz referência à raiz, evitando composição."
      },
      {
        "question": "Como faço para converter px em em?",
        "answer": "Divida o valor do pixel pelo tamanho da fonte do elemento pai. Se o pai tiver 16px: 24px/16 = 1,5em. Se o pai for 20px: 24px/20 = 1,2em. O contexto pai é importante para os cálculos em."
      },
      {
        "question": "Quando devo usar em em vez de rem?",
        "answer": "Use em quando quiser dimensionar em relação ao tamanho da fonte do próprio componente. Por exemplo, o preenchimento de 1em ao redor do texto sempre cria um espaçamento proporcional, independentemente do tamanho do texto. Use rem para dimensionamento consistente em toda a página."
      },
      {
        "question": "Por que em é útil para design de componentes?",
        "answer": "EM permite que os componentes sejam dimensionados proporcionalmente. Um botão com tamanho da fonte, preenchimento e raio da borda, todos em unidades em, aumentará ou diminuirá uniformemente quando você alterar apenas o tamanho da fonte, facilitando o design do componente responsivo."
      },
      {
        "question": "Qual é o problema de composição com em?",
        "answer": "Quando elementos aninhados usam em, os tamanhos se multiplicam. Uma fonte de 1,5em dentro de um contêiner de 1,5em torna-se 2,25x o tamanho da raiz (1,5 x 1,5). Este efeito em cascata pode causar dimensionamento inesperado. REM resolve isso sempre referenciando o elemento raiz."
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
        "question": "एम और रेम में क्या अंतर है?",
        "answer": "EM मूल तत्व के फ़ॉन्ट आकार से संबंधित है, जबकि REM रूट (html) तत्व के फ़ॉन्ट आकार से संबंधित है। ईएम यौगिक - यदि एक माता-पिता दूसरे 2em माता-पिता के अंदर 2em है, तो यह मूल आकार 4x हो जाता है। REM हमेशा कंपाउंडिंग से बचते हुए रूट को संदर्भित करता है।"
      },
      {
        "question": "मैं px को em में कैसे परिवर्तित करूं?",
        "answer": "पिक्सेल मान को मूल तत्व के फ़ॉन्ट आकार से विभाजित करें। यदि पेरेंट 16px है: 24px / 16 = 1.5em. यदि पैरेंट 20px है: 24px / 20 = 1.2em. ईएम गणना के लिए मूल संदर्भ मायने रखता है।"
      },
      {
        "question": "मुझे रेम के स्थान पर एम का उपयोग कब करना चाहिए?",
        "answer": "जब आप घटक के स्वयं के फ़ॉन्ट आकार के सापेक्ष आकार चाहते हैं तो em का उपयोग करें। उदाहरण के लिए, टेक्स्ट के चारों ओर 1em की पैडिंग हमेशा टेक्स्ट आकार की परवाह किए बिना आनुपातिक रिक्ति बनाती है। संपूर्ण पृष्ठ पर एकसमान आकार के लिए रेम का उपयोग करें।"
      },
      {
        "question": "घटक डिज़ाइन के लिए ईएम उपयोगी क्यों है?",
        "answer": "ईएम घटकों को आनुपातिक रूप से स्केल करने की अनुमति देता है। जब आप केवल फ़ॉन्ट-आकार बदलते हैं, तो ईएम इकाइयों में फ़ॉन्ट-आकार, पैडिंग और बॉर्डर-त्रिज्या वाला एक बटन समान रूप से ऊपर या नीचे स्केल करेगा, जिससे प्रतिक्रियाशील घटक डिज़ाइन आसान हो जाएगा।"
      },
      {
        "question": "उनके साथ कंपाउंडिंग समस्या क्या है?",
        "answer": "जब नेस्टेड तत्व ईएम का उपयोग करते हैं, तो आकार कई गुना बढ़ जाता है। 1.5em कंटेनर के अंदर 1.5em फ़ॉन्ट मूल आकार का 2.25x (1.5 x 1.5) हो जाता है। यह व्यापक प्रभाव अप्रत्याशित आकार का कारण बन सकता है। REM हमेशा मूल तत्व को संदर्भित करके इसे हल करता है।"
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
        "question": "em と rem の違いは何ですか?",
        "answer": "EM は親要素のフォント サイズを基準とするのに対し、REM はルート (html) 要素のフォント サイズを基準とします。 EM コンパウンド - 親が別の 2em 親の中に 2em ある場合、ルート サイズの 4 倍になります。 REM は常にルートを参照し、複合を回避します。"
      },
      {
        "question": "px を em に変換するにはどうすればよいですか?",
        "answer": "ピクセル値を親要素のフォント サイズで除算します。親が 16px の場合: 24px / 16 = 1.5em。親が 20px の場合: 24px / 20 = 1.2em。 em の計算には親コンテキストが重要です。"
      },
      {
        "question": "rem の代わりに em を使用する必要があるのはどのような場合ですか?",
        "answer": "コンポーネント自体のフォント サイズに応じてサイズを変更したい場合は em を使用してください。たとえば、テキストの周囲に 1em のパディングを行うと、テキスト サイズに関係なく常に比例した間隔が作成されます。ページ全体で一貫したサイズ設定を行うには、rem を使用します。"
      },
      {
        "question": "em がコンポーネント設計に役立つのはなぜですか?",
        "answer": "EM を使用すると、コンポーネントを比例的に拡大縮小できます。フォント サイズ、パディング、境界線の半径がすべて em 単位で設定されているボタンは、フォント サイズだけを変更すると均一に拡大または縮小するため、レスポンシブ コンポーネントのデザインが容易になります。"
      },
      {
        "question": "em に関する複雑な問題は何ですか?",
        "answer": "ネストされた要素で em を使用すると、サイズが倍増します。 1.5em コンテナ内の 1.5em フォントは、ルート サイズの 2.25 倍 (1.5 x 1.5) になります。このカスケード効果により、予期しないサイジングが発生する可能性があります。 REM は常にルート要素を参照することでこの問題を解決します。"
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
        "question": "em과 rem의 차이점은 무엇입니까?",
        "answer": "EM은 상위 요소의 글꼴 크기에 상대적인 반면, REM은 루트(html) 요소의 글꼴 크기에 상대적입니다. EM 화합물 - 상위 항목이 다른 2em 상위 항목 안에 2em인 경우 루트 크기의 4배가 됩니다. REM은 합성을 피하면서 항상 루트를 참조합니다."
      },
      {
        "question": "px를 em으로 어떻게 변환합니까?",
        "answer": "픽셀 값을 상위 요소의 글꼴 크기로 나눕니다. 상위 항목이 16px인 경우: 24px / 16 = 1.5em. 부모가 20px인 경우: 24px / 20 = 1.2em. em 계산에서는 상위 컨텍스트가 중요합니다."
      },
      {
        "question": "rem 대신 em을 사용해야 하는 경우는 언제입니까?",
        "answer": "구성 요소 자체 글꼴 크기에 따라 크기를 조정하려면 em을 사용하십시오. 예를 들어 텍스트 주위에 1em을 채우면 텍스트 크기에 관계없이 항상 비례적인 간격이 생성됩니다. 전체 페이지에서 일관된 크기를 지정하려면 rem을 사용하세요."
      },
      {
        "question": "em이 구성 요소 설계에 유용한 이유는 무엇입니까?",
        "answer": "EM을 사용하면 구성 요소의 크기를 비례적으로 조정할 수 있습니다. 글꼴 크기, 패딩 및 테두리 반경이 모두 em 단위로 포함된 버튼은 글꼴 크기만 변경하면 균일하게 확대 또는 축소되므로 반응형 구성 요소 디자인이 더 쉬워집니다."
      },
      {
        "question": "em의 복합적인 문제는 무엇입니까?",
        "answer": "중첩된 요소에서 em을 사용하면 크기가 배가됩니다. 1.5em 컨테이너 내의 1.5em 글꼴은 루트 크기(1.5 x 1.5)의 2.25배가 됩니다. 이러한 계단식 효과로 인해 예기치 않은 크기 조정이 발생할 수 있습니다. REM은 항상 루트 요소를 참조하여 이 문제를 해결합니다."
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
        "question": "Qual è la differenza tra em e rem?",
        "answer": "EM è relativo alla dimensione del carattere dell'elemento genitore, mentre REM è relativo alla dimensione del carattere dell'elemento root (html). Composti EM: se un genitore è 2em all'interno di un altro genitore 2em, diventa 4 volte la dimensione della radice. REM fa sempre riferimento alla radice, evitando la composizione."
      },
      {
        "question": "Come faccio a convertire px in em?",
        "answer": "Dividi il valore dei pixel per la dimensione del carattere dell'elemento genitore. Se il genitore è 16px: 24px / 16 = 1,5em. Se il genitore è 20px: 24px / 20 = 1.2em. Il contesto principale è importante per i calcoli em."
      },
      {
        "question": "Quando dovrei utilizzare em invece di rem?",
        "answer": "Utilizza em quando si desidera il dimensionamento relativo alla dimensione del carattere del componente. Ad esempio, il riempimento di 1em attorno al testo crea sempre una spaziatura proporzionale indipendentemente dalla dimensione del testo. Utilizza rem per un dimensionamento coerente nell'intera pagina."
      },
      {
        "question": "Perché em è utile per la progettazione dei componenti?",
        "answer": "EM consente ai componenti di ridimensionarsi proporzionalmente. Un pulsante con dimensione del carattere, riempimento e raggio del bordo tutti in unità em verrà ridimensionato in modo uniforme quando si modifica solo la dimensione del carattere, rendendo più semplice la progettazione dei componenti reattivi."
      },
      {
        "question": "Qual è il problema di composizione con em?",
        "answer": "Quando gli elementi nidificati utilizzano em, le dimensioni si moltiplicano. Un carattere da 1,5 em all'interno di un contenitore da 1,5 em diventa 2,25 volte la dimensione della radice (1,5 x 1,5). Questo effetto a cascata può causare dimensionamenti imprevisti. REM risolve questo problema facendo sempre riferimento all'elemento root."
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
        "question": "Wat is het verschil tussen em en rem?",
        "answer": "EM is relatief ten opzichte van de lettergrootte van het bovenliggende element, terwijl REM relatief is ten opzichte van de lettergrootte van het hoofdelement (html). EM-verbindingen - als een ouder 2em is binnen een andere 2em-ouder, wordt deze 4x de wortelgrootte. REM verwijst altijd naar de root en vermijdt samengestelde elementen."
      },
      {
        "question": "Hoe converteer ik px naar em?",
        "answer": "Deel de pixelwaarde door de lettergrootte van het bovenliggende element. Als de ouder 16px is: 24px / 16 = 1,5em. Als de ouder 20px is: 24px / 20 = 1,2em. De bovenliggende context is van belang voor em-berekeningen."
      },
      {
        "question": "Wanneer moet ik em gebruiken in plaats van rem?",
        "answer": "Gebruik em als u de grootte wilt aanpassen aan de eigen lettergrootte van de component. Met een opvulling van 1em rondom tekst ontstaat bijvoorbeeld altijd een proportionele spatiëring, ongeacht de tekstgrootte. Gebruik rem voor consistente grootte over de hele pagina."
      },
      {
        "question": "Waarom is em nuttig voor componentontwerp?",
        "answer": "EM zorgt ervoor dat componenten proportioneel kunnen worden geschaald. Een knop met lettergrootte, opvulling en randradius allemaal in em-eenheden zal uniform omhoog of omlaag schalen als je alleen de lettergrootte wijzigt, waardoor het ontwerpen van responsieve componenten eenvoudiger wordt."
      },
      {
        "question": "Wat is het samengestelde probleem met em?",
        "answer": "Als geneste elementen em gebruiken, vermenigvuldigen de afmetingen zich. Een lettertype van 1,5 em in een container van 1,5 em wordt 2,25x de hoofdgrootte (1,5 x 1,5). Dit trapsgewijze effect kan onverwachte afmetingen veroorzaken. REM lost dit op door altijd te verwijzen naar het rootelement."
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
        "question": "ما الفرق بين em و rem؟",
        "answer": "EM يتعلق بحجم خط العنصر الأصلي، بينما REM يتعلق بحجم خط العنصر الجذر (html). مركبات EM - إذا كان أحد الوالدين 2em داخل أصل 2em آخر، يصبح حجم الجذر 4x. تشير REM دائمًا إلى الجذر، مع تجنب التركيب."
      },
      {
        "question": "كيف يمكنني تحويل px إلى em؟",
        "answer": "اقسم قيمة البكسل على حجم خط العنصر الأصلي. إذا كان الوالد 16 بكسل: 24 بكسل / 16 = 1.5em. إذا كان الأصل 20 بكسل: 24 بكسل / 20 = 1.2em. السياق الأصلي مهم لحسابات em."
      },
      {
        "question": "متى يجب أن أستخدم em بدلاً من rem؟",
        "answer": "استخدم em عندما تريد تغيير الحجم بالنسبة لحجم الخط الخاص بالمكون. على سبيل المثال، تؤدي المساحة المتروكة بمقدار 1em حول النص دائمًا إلى إنشاء تباعد متناسب بغض النظر عن حجم النص. استخدم rem للتحجيم المتسق عبر الصفحة بأكملها."
      },
      {
        "question": "لماذا يعد em مفيدًا لتصميم المكونات؟",
        "answer": "يسمح EM للمكونات بالتحجيم بشكل متناسب. سيتم تكبير حجم الزر الذي يحتوي على حجم الخط والحشو ونصف القطر في وحدات em بشكل موحد عند تغيير حجم الخط فقط، مما يجعل تصميم المكونات المستجيبة أسهل."
      },
      {
        "question": "ما هي المشكلة المركبة مع em؟",
        "answer": "عندما تستخدم العناصر المتداخلة em، تتضاعف الأحجام. الخط 1.5em داخل حاوية 1.5em يصبح 2.25x حجم الجذر (1.5 × 1.5). يمكن أن يتسبب هذا التأثير المتتالي في تغيير حجم غير متوقع. REM يحل هذه المشكلة عن طريق الرجوع دائمًا إلى العنصر الجذر."
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
        "question": "Em ve rem arasındaki fark nedir?",
        "answer": "EM ana öğenin yazı tipi boyutuna göredir, REM ise kök (html) öğenin yazı tipi boyutuna bağlıdır. EM bileşikleri - eğer bir ebeveyn başka bir 2em ebeveynin içinde 2em ise, kök boyutunun 4 katı olur. REM, bileşik oluşturmayı önleyerek her zaman köke başvurur."
      },
      {
        "question": "Pxx'i em'ye nasıl dönüştürebilirim?",
        "answer": "Piksel değerini ana öğenin yazı tipi boyutuna bölün. Ebeveyn 16px ise: 24px / 16 = 1,5em. Ebeveyn 20px ise: 24px / 20 = 1,2em. Ana bağlam, em hesaplamaları için önemlidir."
      },
      {
        "question": "Rem yerine ne zaman em kullanmalıyım?",
        "answer": "Boyutlandırmanın bileşenin kendi yazı tipi boyutuna göre olmasını istediğinizde em kullanın. Örneğin, metnin etrafındaki 1 em'lik dolgu, metin boyutundan bağımsız olarak her zaman orantılı boşluk oluşturur. Sayfanın tamamında tutarlı boyutlandırma için rem kullanın."
      },
      {
        "question": "Bileşen tasarımı için neden faydalıdır?",
        "answer": "EM, bileşenlerin orantılı olarak ölçeklenmesine olanak tanır. Tamamı em birimlerinde olan yazı tipi boyutu, dolgusu ve kenarlık yarıçapına sahip bir düğme, yalnızca yazı tipi boyutunu değiştirdiğinizde eşit şekilde yukarı veya aşağı ölçeklenir, bu da duyarlı bileşen tasarımını kolaylaştırır."
      },
      {
        "question": "Onlarla ilgili bileşik sorun nedir?",
        "answer": "Yuvalanmış öğeler em kullandığında boyutlar artar. 1,5em'lik bir kabın içindeki 1,5em'lik bir yazı tipi, kök boyutunun 2,25 katı olur (1,5 x 1,5). Bu basamaklı etki beklenmeyen boyutlandırmaya neden olabilir. REM bu sorunu her zaman kök öğeye referans vererek çözer."
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
        "question": "Jaka jest różnica między em i rem?",
        "answer": "EM zależy od rozmiaru czcionki elementu nadrzędnego, podczas gdy REM zależy od rozmiaru czcionki elementu głównego (html). Związki EM - jeśli rodzic ma 2 em w innym 2 em rodzicu, staje się 4-krotnie większy od rozmiaru korzenia. REM zawsze odwołuje się do korzenia, unikając łączenia."
      },
      {
        "question": "Jak przekonwertować px na em?",
        "answer": "Podziel wartość piksela przez rozmiar czcionki elementu nadrzędnego. Jeśli element nadrzędny ma rozmiar 16 pikseli: 24 pikseli / 16 = 1,5 em. Jeśli element nadrzędny ma rozmiar 20 pikseli: 24 pikseli / 20 = 1,2 em. Kontekst nadrzędny ma znaczenie dla obliczeń em."
      },
      {
        "question": "Kiedy powinienem używać em zamiast rem?",
        "answer": "Użyj em, jeśli chcesz dostosować rozmiar czcionki do własnego rozmiaru czcionki komponentu. Na przykład dopełnienie tekstu wynoszące 1 em zawsze tworzy proporcjonalne odstępy, niezależnie od rozmiaru tekstu. Użyj rem, aby uzyskać spójny rozmiar na całej stronie."
      },
      {
        "question": "Dlaczego jest przydatny przy projektowaniu komponentów?",
        "answer": "EM umożliwia proporcjonalne skalowanie komponentów. Przycisk z rozmiarem czcionki, dopełnieniem i promieniem obramowania, wszystkie w jednostkach em, będzie równomiernie skalowany w górę lub w dół po zmianie samego rozmiaru czcionki, co ułatwi projektowanie responsywnych komponentów."
      },
      {
        "question": "Jaki jest problem z ich łączeniem?",
        "answer": "Gdy zagnieżdżone elementy ich używają, rozmiary się mnożą. Czcionka 1,5 em w kontenerze 1,5 em staje się 2,25 razy większa od rozmiaru głównego (1,5 x 1,5). Ten efekt kaskadowy może powodować nieoczekiwane zmiany rozmiaru. REM rozwiązuje ten problem, zawsze odwołując się do elementu głównego."
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
        "question": "Apa perbedaan antara em dan rem?",
        "answer": "EM relatif terhadap ukuran font elemen induk, sedangkan REM relatif terhadap ukuran font elemen root (html). Senyawa EM - jika suatu induk mempunyai 2em di dalam induk 2em yang lain, maka ukuran akarnya menjadi 4x. REM selalu mereferensikan root, menghindari penggabungan."
      },
      {
        "question": "Bagaimana cara mengonversi px ke em?",
        "answer": "Bagi nilai piksel dengan ukuran font elemen induk. Jika induknya 16px: 24px / 16 = 1,5em. Jika induknya 20px: 24px / 20 = 1.2em. Konteks induk penting untuk perhitungan em."
      },
      {
        "question": "Kapan saya harus menggunakan em daripada rem?",
        "answer": "Gunakan em ketika Anda ingin ukuran relatif terhadap ukuran font komponen itu sendiri. Misalnya, padding 1em di sekitar teks selalu menciptakan spasi proporsional terlepas dari ukuran teksnya. Gunakan rem untuk ukuran yang konsisten di seluruh halaman."
      },
      {
        "question": "Mengapa em berguna untuk desain komponen?",
        "answer": "EM memungkinkan komponen untuk diskalakan secara proporsional. Tombol dengan ukuran font, padding, dan radius batas yang semuanya berada dalam satuan em akan diperbesar atau diperkecil secara seragam saat Anda hanya mengubah ukuran font, sehingga membuat desain komponen responsif menjadi lebih mudah."
      },
      {
        "question": "Apa masalah penggabungan em?",
        "answer": "Saat elemen bertumpuk menggunakan em, ukurannya berlipat ganda. Font 1,5em di dalam wadah 1,5em menjadi 2,25x ukuran root (1,5 x 1,5). Efek berjenjang ini dapat menyebabkan ukuran yang tidak terduga. REM menyelesaikan masalah ini dengan selalu mereferensikan elemen root."
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
        "question": "В чем разница между em и rem?",
        "answer": "EM относится к размеру шрифта родительского элемента, а REM - к размеру шрифта корневого элемента (html). EM-соединения - если родительский элемент имеет размер 2em внутри другого родителя размером 2em, он становится в 4 раза больше размера корня. REM всегда ссылается на корень, избегая объединения."
      },
      {
        "question": "Как преобразовать px в em?",
        "answer": "Делите значение пикселя на размер шрифта родительского элемента. Если родительский элемент имеет размер 16 пикселей: 24 пикселей/16 = 1,5em. Если родительский элемент имеет размер 20 пикселей: 24 пикселей/20 = 1,2em. Родительский контекст имеет значение для вычислений em."
      },
      {
        "question": "Когда мне следует использовать em вместо rem?",
        "answer": "Используйте em, если вам нужно изменить размер относительно собственного размера шрифта компонента. Например, заполнение 1em вокруг текста всегда создает пропорциональный интервал независимо от размера текста. Используйте rem для одинакового размера по всей странице."
      },
      {
        "question": "Почему em полезен для проектирования компонентов?",
        "answer": "EM позволяет компонентам масштабироваться пропорционально. Кнопка с размером шрифта, отступом и радиусом границы, выраженными в единицах em, будет равномерно масштабироваться вверх или вниз при изменении только размера шрифта, что упрощает разработку адаптивного компонента."
      },
      {
        "question": "В чем проблема с объединением em?",
        "answer": "Когда вложенные элементы используют em, размеры умножаются. Шрифт размером 1,5em внутри контейнера размером 1,5em становится в 2,25 раза больше корневого размера (1,5 x 1,5). Этот каскадный эффект может привести к неожиданному изменению размера. REM решает эту проблему, всегда ссылаясь на корневой элемент."
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
