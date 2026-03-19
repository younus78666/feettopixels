#!/usr/bin/env python
"""Generate content translation files for calculator/checker pages."""
import os

BASE = os.path.dirname(os.path.abspath(__file__))

def w(name, content):
    path = os.path.join(BASE, name)
    with open(path, "w", encoding="utf-8", newline="\n") as f:
        f.write(content)
    print(f"Created {name}")

# Use French typographic apostrophe \u2019 to avoid conflicts with JS quotes
# This is actually the correct Unicode character for French

w("screen-resolution-checker.ts", r'''import type { PageContentMap } from "./types";

export const content: PageContentMap = {
  en: {
    faq: [
      { question: "What is the difference between screen resolution and CSS pixels?", answer: "Screen resolution is the physical pixel count of your display. CSS pixels are the logical pixels used by browsers. On a device with 2x pixel ratio (like Retina displays), 1 CSS pixel equals 4 physical pixels (2x2). This is why CSS pixel dimensions are often half the physical resolution." },
      { question: "What is Device Pixel Ratio (DPR)?", answer: "Device Pixel Ratio is the ratio between physical pixels and CSS pixels. A DPR of 1 means each CSS pixel maps to one physical pixel. A DPR of 2 (Retina) means each CSS pixel uses a 2x2 grid of physical pixels for sharper rendering." },
      { question: "Why does my screen show a different resolution than expected?", answer: "Your operating system may be using display scaling (e.g., 125% or 150% on Windows). This changes the effective CSS resolution while the physical resolution stays the same. The reported values reflect your current scaling settings." },
      { question: "What is color depth?", answer: "Color depth indicates how many bits are used to represent each pixel\u2019s color. 24-bit (8 bits per channel) supports 16.7 million colors and is standard. 30-bit (10 bits per channel) supports 1.07 billion colors for HDR content." },
      { question: "How do I check my actual monitor resolution?", answer: "This tool detects the resolution reported by your browser. For the true physical resolution, check your monitor specifications or operating system display settings. If scaling is applied, multiply the CSS resolution by the device pixel ratio." },
    ],
    body: {
      heading1: "Understanding Screen Resolution",
      p1: "Screen resolution defines the number of pixels your display can show. Higher resolution means more detail and sharper images. Modern displays range from HD (720p) to 8K, with 4K becoming increasingly common.",
      heading2: "Resolution Standards",
      li1: "HD (720p): 1280x720 \u2014 Entry-level for small screens and streaming.",
      li2: "Full HD (1080p): 1920x1080 \u2014 The most common standard for monitors and TVs.",
      li3: "QHD (1440p): 2560x1440 \u2014 Popular for gaming monitors and laptops.",
      li4: "4K UHD: 3840x2160 \u2014 Professional and entertainment standard with 4x the pixels of 1080p.",
      li5: "5K: 5120x2880 \u2014 Used in professional displays like the Apple Studio Display.",
      heading3: "Device Pixel Ratio Explained",
      p2: "Modern high-resolution devices use a device pixel ratio (DPR) greater than 1. A DPR of 2 means the screen has 2x the pixels in each dimension, rendering everything at double density for sharper visuals. Web developers use this to serve appropriately sized images.",
    },
  },
  es: { faq: [{ question: "\u00bfCu\u00e1l es la diferencia entre resoluci\u00f3n de pantalla y p\u00edxeles CSS?", answer: "La resoluci\u00f3n de pantalla es la cantidad f\u00edsica de p\u00edxeles de tu pantalla." }], body: { heading1: "Entendiendo la resoluci\u00f3n de pantalla", p1: "La resoluci\u00f3n de pantalla define la cantidad de p\u00edxeles que puede mostrar tu pantalla." } },
  fr: { faq: [{ question: "Quelle est la diff\u00e9rence entre la r\u00e9solution d\u2019\u00e9cran et les pixels CSS\u00a0?", answer: "La r\u00e9solution d\u2019\u00e9cran est le nombre physique de pixels de votre \u00e9cran." }], body: { heading1: "Comprendre la r\u00e9solution d\u2019\u00e9cran", p1: "La r\u00e9solution d\u2019\u00e9cran d\u00e9finit le nombre de pixels que votre \u00e9cran peut afficher." } },
  de: { faq: [{ question: "Was ist der Unterschied zwischen Bildschirmaufl\u00f6sung und CSS-Pixeln?", answer: "Die Bildschirmaufl\u00f6sung ist die physische Pixelanzahl Ihres Displays." }], body: { heading1: "Bildschirmaufl\u00f6sung verstehen", p1: "Die Bildschirmaufl\u00f6sung definiert die Anzahl der Pixel, die Ihr Display anzeigen kann." } },
  pt: { faq: [{ question: "Qual \u00e9 a diferen\u00e7a entre resolu\u00e7\u00e3o de tela e pixels CSS?", answer: "A resolu\u00e7\u00e3o de tela \u00e9 a contagem f\u00edsica de pixels do seu display." }], body: { heading1: "Entendendo a resolu\u00e7\u00e3o de tela", p1: "A resolu\u00e7\u00e3o de tela define o n\u00famero de pixels que sua tela pode exibir." } },
  hi: { faq: [], body: { heading1: "\u0938\u094d\u0915\u094d\u0930\u0940\u0928 \u0930\u093f\u091c\u093c\u0949\u0932\u094d\u092f\u0942\u0936\u0928 \u0915\u094b \u0938\u092e\u091d\u0928\u093e", p1: "\u0938\u094d\u0915\u094d\u0930\u0940\u0928 \u0930\u093f\u091c\u093c\u0949\u0932\u094d\u092f\u0942\u0936\u0928 \u0906\u092a\u0915\u0947 \u0921\u093f\u0938\u094d\u092a\u094d\u0932\u0947 \u0926\u094d\u0935\u093e\u0930\u093e \u0926\u093f\u0916\u093e\u090f \u091c\u093e \u0938\u0915\u0928\u0947 \u0935\u093e\u0932\u0947 \u092a\u093f\u0915\u094d\u0938\u0947\u0932 \u0915\u0940 \u0938\u0902\u0916\u094d\u092f\u093e \u0915\u094b \u092a\u0930\u093f\u092d\u093e\u0937\u093f\u0924 \u0915\u0930\u0924\u093e \u0939\u0948\u0964" } },
  ja: { faq: [], body: { heading1: "\u753b\u9762\u89e3\u50cf\u5ea6\u3092\u7406\u89e3\u3059\u308b", p1: "\u753b\u9762\u89e3\u50cf\u5ea6\u306f\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u304c\u8868\u793a\u3067\u304d\u308b\u30d4\u30af\u30bb\u30eb\u6570\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002" } },
  ko: { faq: [], body: { heading1: "\ud654\uba74 \ud574\uc0c1\ub3c4 \uc774\ud574\ud558\uae30", p1: "\ud654\uba74 \ud574\uc0c1\ub3c4\ub294 \ub514\uc2a4\ud50c\ub808\uc774\uac00 \ud45c\uc2dc\ud560 \uc218 \uc788\ub294 \ud53d\uc140 \uc218\ub97c \uc815\uc758\ud569\ub2c8\ub2e4." } },
  it: { faq: [], body: { heading1: "Capire la risoluzione dello schermo", p1: "La risoluzione dello schermo definisce il numero di pixel che il tuo display pu\u00f2 mostrare." } },
  nl: { faq: [], body: { heading1: "Schermresolutie begrijpen", p1: "Schermresolutie definieert het aantal pixels dat uw display kan tonen." } },
  ar: { faq: [], body: { heading1: "\u0641\u0647\u0645 \u062f\u0642\u0629 \u0627\u0644\u0634\u0627\u0634\u0629", p1: "\u062a\u062d\u062f\u062f \u062f\u0642\u0629 \u0627\u0644\u0634\u0627\u0634\u0629 \u0639\u062f\u062f \u0627\u0644\u0628\u0643\u0633\u0644\u0627\u062a \u0627\u0644\u062a\u064a \u064a\u0645\u0643\u0646 \u0644\u0634\u0627\u0634\u062a\u0643 \u0639\u0631\u0636\u0647\u0627." } },
  tr: { faq: [], body: { heading1: "Ekran \u00e7\u00f6z\u00fcn\u00fcrl\u00fc\u011f\u00fcn\u00fc anlama", p1: "Ekran \u00e7\u00f6z\u00fcn\u00fcrl\u00fc\u011f\u00fc ekran\u0131n\u0131z\u0131n g\u00f6sterebilece\u011fi piksel say\u0131s\u0131n\u0131 tan\u0131mlar." } },
  pl: { faq: [], body: { heading1: "Zrozumienie rozdzielczo\u015bci ekranu", p1: "Rozdzielczo\u015b\u0107 ekranu definiuje liczb\u0119 pikseli." } },
  id: { faq: [], body: { heading1: "Memahami resolusi layar", p1: "Resolusi layar menentukan jumlah piksel yang dapat ditampilkan layar Anda." } },
  ru: { faq: [], body: { heading1: "\u041f\u043e\u043d\u0438\u043c\u0430\u043d\u0438\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f \u044d\u043a\u0440\u0430\u043d\u0430", p1: "\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u044d\u043a\u0440\u0430\u043d\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0438\u043a\u0441\u0435\u043b\u0435\u0439." } },
};
''')

w("image-dpi-checker.ts", r'''import type { PageContentMap } from "./types";

export const content: PageContentMap = {
  en: {
    faq: [
      { question: "Can this tool read the DPI metadata from an image?", answer: "Browser-based tools cannot directly read EXIF DPI metadata. This tool reads the pixel dimensions and calculates maximum print sizes at various DPI settings." },
      { question: "What resolution is needed for quality printing?", answer: "Professional printing requires 300 DPI. For a 4x6 inch print, you need at least 1200x1800 pixels. For an 8x10 print, you need 2400x3000 pixels." },
      { question: "Is my image good enough for a specific print size?", answer: "Upload your image and check the maximum print size table at 300 DPI. If the listed dimensions are larger than your desired print size, the image has sufficient resolution." },
      { question: "What is the difference between web and print quality images?", answer: "Web images typically need only 72-96 pixels per inch since screens display at fixed pixel density. Print images need 300 pixels per inch for sharp output." },
      { question: "Does this tool upload my image to a server?", answer: "No. All processing happens locally in your browser. Your image never leaves your device." },
    ],
    body: {
      heading1: "How the Image DPI Checker Works",
      p1: "This tool reads your image\u2019s pixel dimensions directly in the browser and calculates print sizes at various DPI settings.",
      heading2: "Quality Assessment Criteria",
      li1: "Print Quality (2+ MP): Sufficient pixels for a 5x7 inch print or larger at 300 DPI.",
      li2: "Medium Quality (0.5-2 MP): Good for web use and small prints.",
      li3: "Web Only (under 0.5 MP): Best suited for web thumbnails and social media.",
      heading3: "Print Size Guidelines",
      li4: "4x6 photo: Minimum 1200x1800 pixels (2.16 MP)",
      li5: "8x10 photo: Minimum 2400x3000 pixels (7.2 MP)",
      li6: "11x14 print: Minimum 3300x4200 pixels (13.86 MP)",
      li7: "16x20 poster: Minimum 4800x6000 pixels (28.8 MP)",
      heading4: "Privacy",
      p2: "Your images are processed entirely in the browser. No data is uploaded to any server.",
    },
  },
  es: { faq: [], body: { heading1: "C\u00f3mo funciona el verificador de DPI", p1: "Esta herramienta lee las dimensiones en p\u00edxeles de su imagen directamente en el navegador." } },
  fr: { faq: [], body: { heading1: "Comment fonctionne le v\u00e9rificateur DPI d\u2019image", p1: "Cet outil lit les dimensions en pixels de votre image directement dans le navigateur." } },
  de: { faq: [], body: { heading1: "So funktioniert der Bild-DPI-Checker", p1: "Dieses Tool liest die Pixelabmessungen Ihres Bildes direkt im Browser." } },
  pt: { faq: [], body: { heading1: "Como funciona o verificador de DPI", p1: "Esta ferramenta l\u00ea as dimens\u00f5es em pixels da sua imagem diretamente no navegador." } },
  hi: { faq: [], body: { heading1: "\u0907\u092e\u0947\u091c DPI \u091a\u0947\u0915\u0930 \u0915\u0948\u0938\u0947 \u0915\u093e\u092e \u0915\u0930\u0924\u093e \u0939\u0948", p1: "\u092f\u0939 \u091f\u0942\u0932 \u0906\u092a\u0915\u0940 \u0907\u092e\u0947\u091c \u0915\u0947 \u092a\u093f\u0915\u094d\u0938\u0947\u0932 \u0906\u092f\u093e\u092e \u0938\u0940\u0927\u0947 \u092c\u094d\u0930\u093e\u0909\u091c\u093c\u0930 \u092e\u0947\u0902 \u092a\u0922\u093c\u0924\u093e \u0939\u0948\u0964" } },
  ja: { faq: [], body: { heading1: "\u753b\u50cfDPI\u30c1\u30a7\u30c3\u30ab\u30fc\u306e\u4ed5\u7d44\u307f", p1: "\u3053\u306e\u30c4\u30fc\u30eb\u306f\u753b\u50cf\u306e\u30d4\u30af\u30bb\u30eb\u5bf8\u6cd5\u3092\u30d6\u30e9\u30a6\u30b6\u3067\u76f4\u63a5\u8aad\u307f\u53d6\u308a\u307e\u3059\u3002" } },
  ko: { faq: [], body: { heading1: "\uc774\ubbf8\uc9c0 DPI \uccb4\ucee4 \uc791\ub3d9 \ubc29\uc2dd", p1: "\uc774 \ub3c4\uad6c\ub294 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \uc774\ubbf8\uc9c0\uc758 \ud53d\uc140 \uce58\uc218\ub97c \uc9c1\uc811 \uc77d\uc2b5\ub2c8\ub2e4." } },
  it: { faq: [], body: { heading1: "Come funziona il verificatore DPI", p1: "Questo strumento legge le dimensioni in pixel della tua immagine direttamente nel browser." } },
  nl: { faq: [], body: { heading1: "Hoe de DPI-checker werkt", p1: "Deze tool leest de pixelafmetingen van uw afbeelding direct in de browser." } },
  ar: { faq: [], body: { heading1: "\u0643\u064a\u0641 \u064a\u0639\u0645\u0644 \u0641\u0627\u062d\u0635 DPI \u0644\u0644\u0635\u0648\u0631", p1: "\u062a\u0642\u0631\u0623 \u0647\u0630\u0647 \u0627\u0644\u0623\u062f\u0627\u0629 \u0623\u0628\u0639\u0627\u062f \u0627\u0644\u0628\u0643\u0633\u0644 \u0644\u0635\u0648\u0631\u062a\u0643 \u0645\u0628\u0627\u0634\u0631\u0629 \u0641\u064a \u0627\u0644\u0645\u062a\u0635\u0641\u062d." } },
  tr: { faq: [], body: { heading1: "G\u00f6r\u00fcnt\u00fc DPI denetleyicisi nas\u0131l \u00e7al\u0131\u015f\u0131r", p1: "Bu ara\u00e7, g\u00f6r\u00fcnt\u00fcn\u00fcz\u00fcn piksel boyutlar\u0131n\u0131 do\u011frudan taray\u0131c\u0131da okur." } },
  pl: { faq: [], body: { heading1: "Jak dzia\u0142a sprawdzacz DPI obrazu", p1: "To narz\u0119dzie odczytuje wymiary pikselowe obrazu bezpo\u015brednio w przegl\u0105darce." } },
  id: { faq: [], body: { heading1: "Cara kerja pemeriksa DPI gambar", p1: "Alat ini membaca dimensi piksel gambar Anda langsung di browser." } },
  ru: { faq: [], body: { heading1: "\u041a\u0430\u043a \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 DPI \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f", p1: "\u042d\u0442\u043e\u0442 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0435\u0442 \u0440\u0430\u0437\u043c\u0435\u0440\u044b \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0432 \u043f\u0438\u043a\u0441\u0435\u043b\u044f\u0445 \u043d\u0435\u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435." } },
};
''')

w("pixel-ruler.ts", r'''import type { PageContentMap } from "./types";

export const content: PageContentMap = {
  en: {
    faq: [
      { question: "How accurate is the on-screen ruler?", answer: "Without calibration, accuracy depends on your operating system\u2019s reported PPI. After calibrating with a credit card or other known-size object, accuracy improves significantly to within 1-2% for most displays." },
      { question: "How do I calibrate the ruler?", answer: "Place a standard credit card (3.375 inches / 85.6mm wide) against your screen. Adjust the calibration slider until the colored bar matches the card\u2019s width exactly, then click Calibrate." },
      { question: "Why do pixels not correspond to real-world measurements?", answer: "Pixels are digital units with no fixed physical size. Their physical size depends on the screen\u2019s PPI (pixels per inch)." },
      { question: "Can I use this ruler to measure physical objects?", answer: "Yes, after calibrating. Place the object against the screen and read the measurement." },
      { question: "Does display scaling affect the ruler?", answer: "Yes, operating system scaling (e.g., 125% on Windows) changes the relationship between CSS pixels and physical pixels. Calibration accounts for this automatically." },
    ],
    body: {
      heading1: "How the Pixel Ruler Works",
      p1: "The on-screen ruler renders tick marks at intervals based on your screen\u2019s pixel density. By default, it assumes 96 PPI (the CSS standard).",
      heading2: "Calibration Method",
      p2: "The calibration uses a standard credit card width (3.375 inches / 85.6mm, per ISO/IEC 7810).",
      heading3: "Measurement Units",
      li1: "Pixels: Major ticks every 100px, minor ticks every 50px.",
      li2: "Inches: Major ticks every inch, minor ticks every quarter inch.",
      li3: "Centimeters: Major ticks every centimeter, minor ticks every half centimeter.",
      heading4: "Use Cases",
      li4: "UI design: Measure element spacing and sizing in pixels.",
      li5: "Quick measurements: Measure small objects without a physical ruler.",
      li6: "Screen calibration: Determine your actual screen PPI for accurate design work.",
      li7: "Accessibility testing: Verify minimum touch target sizes meet guidelines.",
    },
  },
  es: { faq: [], body: { heading1: "C\u00f3mo funciona la regla de p\u00edxeles", p1: "La regla en pantalla dibuja marcas a intervalos basados en la densidad de p\u00edxeles de su pantalla." } },
  fr: { faq: [], body: { heading1: "Comment fonctionne la r\u00e8gle en pixels", p1: "La r\u00e8gle \u00e0 l\u2019\u00e9cran affiche des graduations \u00e0 intervalles bas\u00e9s sur la densit\u00e9 de pixels de votre \u00e9cran." } },
  de: { faq: [], body: { heading1: "So funktioniert das Pixel-Lineal", p1: "Das Bildschirmlineal zeichnet Markierungen in Intervallen basierend auf der Pixeldichte Ihres Bildschirms." } },
  pt: { faq: [], body: { heading1: "Como funciona a r\u00e9gua de pixels", p1: "A r\u00e9gua na tela renderiza marcas em intervalos baseados na densidade de pixels da sua tela." } },
  hi: { faq: [], body: { heading1: "\u092a\u093f\u0915\u094d\u0938\u0947\u0932 \u0930\u0942\u0932\u0930 \u0915\u0948\u0938\u0947 \u0915\u093e\u092e \u0915\u0930\u0924\u093e \u0939\u0948", p1: "\u0911\u0928-\u0938\u094d\u0915\u094d\u0930\u0940\u0928 \u0930\u0942\u0932\u0930 \u0906\u092a\u0915\u0940 \u0938\u094d\u0915\u094d\u0930\u0940\u0928 \u0915\u0940 \u092a\u093f\u0915\u094d\u0938\u0947\u0932 \u0918\u0928\u0924\u094d\u0935 \u0915\u0947 \u0906\u0927\u093e\u0930 \u092a\u0930 \u091f\u093f\u0915 \u092e\u093e\u0930\u094d\u0915 \u092c\u0928\u093e\u0924\u093e \u0939\u0948\u0964" } },
  ja: { faq: [], body: { heading1: "\u30d4\u30af\u30bb\u30eb\u5b9a\u898f\u306e\u4ed5\u7d44\u307f", p1: "\u753b\u9762\u4e0a\u306e\u5b9a\u898f\u306f\u753b\u9762\u306e\u30d4\u30af\u30bb\u30eb\u5bc6\u5ea6\u306b\u57fa\u3065\u3044\u305f\u9593\u9694\u3067\u76ee\u76db\u308a\u3092\u63cf\u753b\u3057\u307e\u3059\u3002" } },
  ko: { faq: [], body: { heading1: "\ud53d\uc140 \ub208\uae08\uc790 \uc791\ub3d9 \ubc29\uc2dd", p1: "\ud654\uba74 \ub208\uae08\uc790\ub294 \ud654\uba74\uc758 \ud53d\uc140 \ubc00\ub3c4\uc5d0 \uae30\ubc18\ud55c \uac04\uaca9\uc73c\ub85c \ub208\uae08 \ud45c\uc2dc\ub97c \ub80c\ub354\ub9c1\ud569\ub2c8\ub2e4." } },
  it: { faq: [], body: { heading1: "Come funziona il righello in pixel", p1: "Il righello sullo schermo visualizza segni di graduazione a intervalli basati sulla densit\u00e0 di pixel del tuo schermo." } },
  nl: { faq: [], body: { heading1: "Hoe de pixelliniaal werkt", p1: "De liniaal op het scherm toont streepjes op intervallen gebaseerd op de pixeldichtheid van uw scherm." } },
  ar: { faq: [], body: { heading1: "\u0643\u064a\u0641 \u062a\u0639\u0645\u0644 \u0645\u0633\u0637\u0631\u0629 \u0627\u0644\u0628\u0643\u0633\u0644", p1: "\u062a\u0639\u0631\u0636 \u0627\u0644\u0645\u0633\u0637\u0631\u0629 \u0639\u0644\u0649 \u0627\u0644\u0634\u0627\u0634\u0629 \u0639\u0644\u0627\u0645\u0627\u062a \u062a\u062f\u0631\u064a\u062c \u0639\u0644\u0649 \u0641\u062a\u0631\u0627\u062a \u0628\u0646\u0627\u0621\u064b \u0639\u0644\u0649 \u0643\u062b\u0627\u0641\u0629 \u0627\u0644\u0628\u0643\u0633\u0644." } },
  tr: { faq: [], body: { heading1: "Piksel cetveli nas\u0131l \u00e7al\u0131\u015f\u0131r", p1: "Ekran cetveli, ekran\u0131n\u0131z\u0131n piksel yo\u011funlu\u011funa g\u00f6re aral\u0131klarla i\u015faret \u00e7izgileri \u00e7izer." } },
  pl: { faq: [], body: { heading1: "Jak dzia\u0142a linijka pikselowa", p1: "Linijka na ekranie rysuje znaczniki w odst\u0119pach opartych na g\u0119sto\u015bci pikseli ekranu." } },
  id: { faq: [], body: { heading1: "Cara kerja penggaris piksel", p1: "Penggaris di layar menampilkan tanda garis pada interval berdasarkan kepadatan piksel layar Anda." } },
  ru: { faq: [], body: { heading1: "\u041a\u0430\u043a \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043f\u0438\u043a\u0441\u0435\u043b\u044c\u043d\u0430\u044f \u043b\u0438\u043d\u0435\u0439\u043a\u0430", p1: "\u042d\u043a\u0440\u0430\u043d\u043d\u0430\u044f \u043b\u0438\u043d\u0435\u0439\u043a\u0430 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442 \u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0447\u0435\u0440\u0435\u0437 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u044b." } },
};
''')

w("megapixel-calculator.ts", r'''import type { PageContentMap } from "./types";

export const content: PageContentMap = {
  en: {
    faq: [
      { question: "What is a megapixel?", answer: "A megapixel (MP) equals one million pixels. A 12 MP camera produces images with 12 million total pixels. The actual dimensions depend on the aspect ratio." },
      { question: "Do more megapixels mean better photo quality?", answer: "Not necessarily. Megapixels determine resolution (detail and print size), but image quality also depends on sensor size, lens quality, image processing, and dynamic range." },
      { question: "How many megapixels do I need for printing?", answer: "At 300 DPI (professional quality): 2 MP for a 4x6 print, 7 MP for an 8x10 print, 14 MP for an 11x14 print, and 29 MP for a 16x20 print." },
      { question: "Why does aspect ratio affect pixel dimensions?", answer: "Megapixels define total pixel count (width x height), not the shape. The aspect ratio determines how those pixels are distributed between width and height." },
      { question: "How do phone camera megapixels compare to DSLRs?", answer: "Modern phones range from 12 MP to 200 MP, while professional DSLRs typically use 20-60 MP. Despite higher megapixel counts, phone sensors are much smaller." },
    ],
    body: {
      heading1: "Understanding Megapixels",
      p1: "Megapixels measure the total number of pixels a camera sensor or image contains. One megapixel equals one million pixels.",
      heading2: "The Math Behind Megapixels",
      p2: "Given megapixels (MP) and aspect ratio (W:H): height = sqrt(MP x 1,000,000 x H / W) and width = height x W / H.",
      heading3: "Camera Megapixel Guide",
      li1: "8 MP \u2014 Entry-level smartphones. Good for social media and small prints up to 5x7.",
      li2: "12 MP \u2014 Standard for iPhones and many flagship phones. Excellent for 8x10 prints.",
      li3: "24-26 MP \u2014 Standard for mid-range DSLRs and mirrorless cameras.",
      li4: "48 MP \u2014 Common in modern smartphones with pixel binning.",
      li5: "108 MP \u2014 High-end smartphone sensors. Massive detail for cropping and large prints.",
      heading4: "Megapixels vs Print Size",
      p3: "Print quality depends on both megapixels and print DPI. Professional printing at 300 DPI requires more pixels per inch than web display at 96 DPI.",
    },
  },
  es: { faq: [], body: { heading1: "Entendiendo los megap\u00edxeles", p1: "Los megap\u00edxeles miden el n\u00famero total de p\u00edxeles que contiene un sensor de c\u00e1mara o una imagen." } },
  fr: { faq: [], body: { heading1: "Comprendre les m\u00e9gapixels", p1: "Les m\u00e9gapixels mesurent le nombre total de pixels qu\u2019un capteur d\u2019appareil photo ou une image contient." } },
  de: { faq: [], body: { heading1: "Megapixel verstehen", p1: "Megapixel messen die Gesamtzahl der Pixel, die ein Kamerasensor oder Bild enth\u00e4lt." } },
  pt: { faq: [], body: { heading1: "Entendendo megapixels", p1: "Megapixels medem o n\u00famero total de pixels que um sensor de c\u00e2mera ou imagem cont\u00e9m." } },
  hi: { faq: [], body: { heading1: "\u092e\u0947\u0917\u093e\u092a\u093f\u0915\u094d\u0938\u0947\u0932 \u0915\u094b \u0938\u092e\u091d\u0928\u093e", p1: "\u092e\u0947\u0917\u093e\u092a\u093f\u0915\u094d\u0938\u0947\u0932 \u0915\u0948\u092e\u0930\u093e \u0938\u0947\u0902\u0938\u0930 \u092f\u093e \u0907\u092e\u0947\u091c \u092e\u0947\u0902 \u092a\u093f\u0915\u094d\u0938\u0947\u0932 \u0915\u0940 \u0915\u0941\u0932 \u0938\u0902\u0916\u094d\u092f\u093e \u0915\u094b \u092e\u093e\u092a\u0924\u0947 \u0939\u0948\u0902\u0964" } },
  ja: { faq: [], body: { heading1: "\u30e1\u30ac\u30d4\u30af\u30bb\u30eb\u3092\u7406\u89e3\u3059\u308b", p1: "\u30e1\u30ac\u30d4\u30af\u30bb\u30eb\u306f\u30ab\u30e1\u30e9\u30bb\u30f3\u30b5\u30fc\u307e\u305f\u306f\u753b\u50cf\u304c\u542b\u3080\u30d4\u30af\u30bb\u30eb\u306e\u7dcf\u6570\u3092\u6e2c\u5b9a\u3057\u307e\u3059\u3002" } },
  ko: { faq: [], body: { heading1: "\uba54\uac00\ud53d\uc140 \uc774\ud574\ud558\uae30", p1: "\uba54\uac00\ud53d\uc140\uc740 \uce74\uba54\ub77c \uc13c\uc11c\ub098 \uc774\ubbf8\uc9c0\uac00 \ud3ec\ud568\ud558\ub294 \ucd1d \ud53d\uc140 \uc218\ub97c \uce21\uc815\ud569\ub2c8\ub2e4." } },
  it: { faq: [], body: { heading1: "Capire i megapixel", p1: "I megapixel misurano il numero totale di pixel che un sensore fotografico o un\u2019immagine contiene." } },
  nl: { faq: [], body: { heading1: "Megapixels begrijpen", p1: "Megapixels meten het totale aantal pixels dat een camerasensor of afbeelding bevat." } },
  ar: { faq: [], body: { heading1: "\u0641\u0647\u0645 \u0627\u0644\u0645\u064a\u062c\u0627\u0628\u0643\u0633\u0644", p1: "\u062a\u0642\u064a\u0633 \u0627\u0644\u0645\u064a\u062c\u0627\u0628\u0643\u0633\u0644 \u0627\u0644\u0639\u062f\u062f \u0627\u0644\u0625\u062c\u0645\u0627\u0644\u064a \u0644\u0644\u0628\u0643\u0633\u0644\u0627\u062a." } },
  tr: { faq: [], body: { heading1: "Megapikselleri anlama", p1: "Megapikseller, bir kamera sens\u00f6r\u00fcn\u00fcn veya g\u00f6r\u00fcnt\u00fcn\u00fcn i\u00e7erdi\u011fi toplam piksel say\u0131s\u0131n\u0131 \u00f6l\u00e7er." } },
  pl: { faq: [], body: { heading1: "Zrozumienie megapikseli", p1: "Megapiksele mierz\u0105 \u0142\u0105czn\u0105 liczb\u0119 pikseli, kt\u00f3re zawiera matryca aparatu lub obraz." } },
  id: { faq: [], body: { heading1: "Memahami megapiksel", p1: "Megapiksel mengukur jumlah total piksel yang terkandung dalam sensor kamera atau gambar." } },
  ru: { faq: [], body: { heading1: "\u041f\u043e\u043d\u0438\u043c\u0430\u043d\u0438\u0435 \u043c\u0435\u0433\u0430\u043f\u0438\u043a\u0441\u0435\u043b\u0435\u0439", p1: "\u041c\u0435\u0433\u0430\u043f\u0438\u043a\u0441\u0435\u043b\u0438 \u0438\u0437\u043c\u0435\u0440\u044f\u044e\u0442 \u043e\u0431\u0449\u0435\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0438\u043a\u0441\u0435\u043b\u0435\u0439 \u0432 \u0441\u0435\u043d\u0441\u043e\u0440\u0435 \u043a\u0430\u043c\u0435\u0440\u044b \u0438\u043b\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0438." } },
};
''')

w("pixel-converter.ts", r'''import type { PageContentMap } from "./types";

export const content: PageContentMap = {
  en: {
    faq: [],
    body: {
      heading1: "About Pixel Conversion",
      p1: "Pixel conversion is the process of translating between digital pixel dimensions and physical measurements like inches, centimeters, millimeters, and feet. The bridge between these two worlds is DPI (dots per inch), which defines how many pixels fit into one physical inch.",
      p2: "Understanding pixel conversion is critical for anyone working across digital and physical media.",
      heading2: "Key Concepts",
      li1: "DPI (Dots Per Inch): The number of individual dots (or pixels) that fit within a one-inch line. Higher DPI means more detail in the same physical space.",
      li2: "96 DPI: The standard for web design, used by Windows and most browsers for CSS pixel calculations.",
      li3: "300 DPI: The professional standard for print output, providing sharp detail at normal viewing distances.",
      li4: "PPI vs DPI: PPI (pixels per inch) refers to screen displays, while DPI technically refers to print output. For conversion purposes, they function identically.",
      heading3: "When to Use Each Converter",
      p3: "Choose the converter that matches your source and target units.",
    },
  },
  es: { faq: [], body: { heading1: "Acerca de la conversi\u00f3n de p\u00edxeles", p1: "La conversi\u00f3n de p\u00edxeles es el proceso de traducir entre dimensiones digitales en p\u00edxeles y medidas f\u00edsicas." } },
  fr: { faq: [], body: { heading1: "\u00c0 propos de la conversion de pixels", p1: "La conversion de pixels est le processus de traduction entre les dimensions num\u00e9riques en pixels et les mesures physiques." } },
  de: { faq: [], body: { heading1: "\u00dcber Pixel-Konvertierung", p1: "Pixel-Konvertierung ist der Prozess der \u00dcbersetzung zwischen digitalen Pixelabmessungen und physischen Ma\u00dfen." } },
  pt: { faq: [], body: { heading1: "Sobre convers\u00e3o de pixels", p1: "Convers\u00e3o de pixels \u00e9 o processo de traduzir entre dimens\u00f5es digitais em pixels e medidas f\u00edsicas." } },
  hi: { faq: [], body: { heading1: "\u092a\u093f\u0915\u094d\u0938\u0947\u0932 \u0930\u0942\u092a\u093e\u0902\u0924\u0930\u0923 \u0915\u0947 \u092c\u093e\u0930\u0947 \u092e\u0947\u0902", p1: "\u092a\u093f\u0915\u094d\u0938\u0947\u0932 \u0930\u0942\u092a\u093e\u0902\u0924\u0930\u0923 \u0921\u093f\u091c\u093f\u091f\u0932 \u092a\u093f\u0915\u094d\u0938\u0947\u0932 \u0906\u092f\u093e\u092e\u094b\u0902 \u0914\u0930 \u092d\u094c\u0924\u093f\u0915 \u092e\u093e\u092a\u094b\u0902 \u0915\u0947 \u092c\u0940\u091a \u0905\u0928\u0941\u0935\u093e\u0926 \u0915\u0940 \u092a\u094d\u0930\u0915\u094d\u0930\u093f\u092f\u093e \u0939\u0948\u0964" } },
  ja: { faq: [], body: { heading1: "\u30d4\u30af\u30bb\u30eb\u5909\u63db\u306b\u3064\u3044\u3066", p1: "\u30d4\u30af\u30bb\u30eb\u5909\u63db\u306f\u30c7\u30b8\u30bf\u30eb\u30d4\u30af\u30bb\u30eb\u5bf8\u6cd5\u3068\u7269\u7406\u7684\u306a\u6e2c\u5b9a\u5024\u306e\u9593\u3092\u5909\u63db\u3059\u308b\u30d7\u30ed\u30bb\u30b9\u3067\u3059\u3002" } },
  ko: { faq: [], body: { heading1: "\ud53d\uc140 \ubcc0\ud658\uc5d0 \ub300\ud558\uc5ec", p1: "\ud53d\uc140 \ubcc0\ud658\uc740 \ub514\uc9c0\ud138 \ud53d\uc140 \uce58\uc218\uc640 \ubb3c\ub9ac\uc801 \uce21\uc815\uac12 \uc0ac\uc774\ub97c \ubcc0\ud658\ud558\ub294 \uacfc\uc815\uc785\ub2c8\ub2e4." } },
  it: { faq: [], body: { heading1: "Informazioni sulla conversione dei pixel", p1: "La conversione dei pixel \u00e8 il processo di traduzione tra le dimensioni digitali in pixel e le misure fisiche." } },
  nl: { faq: [], body: { heading1: "Over pixelconversie", p1: "Pixelconversie is het proces van het vertalen tussen digitale pixelafmetingen en fysieke metingen." } },
  ar: { faq: [], body: { heading1: "\u062d\u0648\u0644 \u062a\u062d\u0648\u064a\u0644 \u0627\u0644\u0628\u0643\u0633\u0644", p1: "\u062a\u062d\u0648\u064a\u0644 \u0627\u0644\u0628\u0643\u0633\u0644 \u0647\u0648 \u0639\u0645\u0644\u064a\u0629 \u0627\u0644\u062a\u0631\u062c\u0645\u0629 \u0628\u064a\u0646 \u0623\u0628\u0639\u0627\u062f \u0627\u0644\u0628\u0643\u0633\u0644 \u0627\u0644\u0631\u0642\u0645\u064a\u0629 \u0648\u0627\u0644\u0642\u064a\u0627\u0633\u0627\u062a \u0627\u0644\u0641\u0639\u0644\u064a\u0629." } },
  tr: { faq: [], body: { heading1: "Piksel d\u00f6n\u00fc\u015ft\u00fcrme hakk\u0131nda", p1: "Piksel d\u00f6n\u00fc\u015ft\u00fcrme, dijital piksel boyutlar\u0131 ile fiziksel \u00f6l\u00e7\u00fcmler aras\u0131nda \u00e7eviri yapma s\u00fcrecidir." } },
  pl: { faq: [], body: { heading1: "O konwersji pikseli", p1: "Konwersja pikseli to proces t\u0142umaczenia mi\u0119dzy cyfrowymi wymiarami w pikselach a fizycznymi pomiarami." } },
  id: { faq: [], body: { heading1: "Tentang konversi piksel", p1: "Konversi piksel adalah proses menerjemahkan antara dimensi piksel digital dan pengukuran fisik." } },
  ru: { faq: [], body: { heading1: "\u041e \u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0430\u0446\u0438\u0438 \u043f\u0438\u043a\u0441\u0435\u043b\u0435\u0439", p1: "\u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0430\u0446\u0438\u044f \u043f\u0438\u043a\u0441\u0435\u043b\u0435\u0439 \u2014 \u044d\u0442\u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0430 \u043c\u0435\u0436\u0434\u0443 \u0446\u0438\u0444\u0440\u043e\u0432\u044b\u043c\u0438 \u0440\u0430\u0437\u043c\u0435\u0440\u0430\u043c\u0438 \u0432 \u043f\u0438\u043a\u0441\u0435\u043b\u044f\u0445 \u0438 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0438\u043c\u0438 \u0438\u0437\u043c\u0435\u0440\u0435\u043d\u0438\u044f\u043c\u0438." } },
};
''')

print("All 5 files created successfully!")
