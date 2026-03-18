import type { Dictionary } from "./en";

export const es: Dictionary = {
  site: {
    name: "FeetToPixels",
    tagline: "Herramientas Gratuitas de Conversión de Píxeles",
    description:
      "Herramientas gratuitas de conversión de píxeles con reconocimiento de DPI. Convierte entre píxeles, pulgadas, centímetros, rem, em y más.",
  },
  nav: {
    tools: "Herramientas",
    learn: "Aprender",
    about: "Acerca de",
    search: "Buscar",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    skipToContent: "Saltar al contenido",
    onThisPage: "En esta página",
    tableOfContents: "Tabla de contenidos",
  },
  categories: {
    physical: "Conversores Físicos",
    css: "Conversores CSS",
    calculators: "Calculadoras",
    guides: "Guías",
    references: "Referencias",
  },
  tool: {
    enterValue: "Ingrese un valor",
    result: "Resultado",
    dpi: "DPI",
    customDpi: "DPI personalizado",
    swap: "Intercambiar",
    copy: "Copiar",
    copied: "¡Copiado!",
    formula: "Fórmula",
    conversionTable: "Tabla de Conversión",
    relatedTools: "Herramientas Relacionadas",
    faq: "Preguntas Frecuentes",
    readyToConvert: "¿Listo para convertir?",
    relatedArticles: "Artículos Relacionados",
  },
  home: {
    freeOnlineTools: "Herramientas Gratuitas en Línea",
    hero: "Conversiones de Píxeles, Simplificadas",
    heroSub:
      "Convierte entre píxeles, pulgadas, centímetros, rem, em y más. Cada herramienta tiene reconocimiento de DPI y está diseñada para diseñadores y desarrolladores.",
    browseTools: "Ver Todas las Herramientas",
    learnDpi: "Aprende Sobre DPI",
    conversionTools: "Herramientas de Conversión",
    whyTitle: "¿Por Qué FeetToPixels?",
    whySub:
      "Cada calculadora tiene reconocimiento de DPI, es responsiva y gratuita. Sin registros, sin límites, sin anuncios.",
    dpiAware: "Reconocimiento de DPI",
    dpiAwareDesc:
      "Configura tu DPI objetivo para conversiones precisas de físico a digital cada vez.",
    instant: "Resultados Instantáneos",
    instantDesc:
      "Ve las conversiones actualizarse en tiempo real mientras escribes. Sin esperas, sin recargas de página.",
    devFriendly: "Amigable para Desarrolladores",
    devFriendlyDesc:
      "Valores CSS listos para copiar, explicaciones de fórmulas y tablas de conversión de referencia.",
  },
  footer: {
    rights: "Todos los derechos reservados.",
    privacy: "Política de Privacidad",
    terms: "Términos de Servicio",
  },
  notFound: {
    title: "Página No Encontrada",
    description:
      "La página que buscas no existe o ha sido movida. Prueba una de nuestras herramientas populares a continuación, o regresa a la página de inicio.",
    backHome: "Volver al Inicio",
  },
  contact: {
    title: "Contáctanos",
    description:
      "¿Tienes una pregunta, sugerencia o encontraste un error? Nos encantaría saber de ti. Completa el formulario a continuación y te responderemos lo antes posible.",
    name: "Nombre",
    namePlaceholder: "Tu nombre",
    nameRequired: "El nombre es obligatorio.",
    email: "Correo electrónico",
    emailPlaceholder: "tu@ejemplo.com",
    emailRequired: "El correo electrónico es obligatorio.",
    emailInvalid: "Por favor ingresa un correo electrónico válido.",
    message: "Mensaje",
    messagePlaceholder: "¿Cómo podemos ayudarte?",
    messageRequired: "El mensaje es obligatorio.",
    messageMinLength: "El mensaje debe tener al menos 10 caracteres.",
    sendMessage: "Enviar Mensaje",
    messageSent: "Mensaje Enviado",
    thankYou:
      "Gracias por contactarnos. Responderemos dentro de 1-2 días hábiles.",
  },
  pages: {
    home: {
      title: "FeetToPixels",
      description:
        "Herramientas gratuitas de conversión de píxeles con reconocimiento de DPI.",
      extractive: "",
    },
    "pixels-to-inches": {
      title: "Conversor de Píxeles a Pulgadas",
      description:
        "Convierte píxeles a pulgadas con cualquier configuración de DPI. Calculadora gratuita en línea.",
      extractive:
        "Para convertir píxeles a pulgadas, divide el número de píxeles entre el DPI. A 96 DPI (estándar web), 960 píxeles equivalen a 10 pulgadas. A 300 DPI (calidad de impresión), 960 píxeles equivalen a 3.2 pulgadas.",
    },
    "inches-to-pixels": {
      title: "Conversor de Pulgadas a Píxeles",
      description:
        "Convierte pulgadas a píxeles con cualquier DPI. Calculadora gratuita en línea.",
      extractive:
        "Para convertir pulgadas a píxeles, multiplica el valor en pulgadas por el DPI. A 96 DPI, 10 pulgadas equivalen a 960 píxeles. A 300 DPI, 10 pulgadas equivalen a 3000 píxeles.",
    },
    "pixels-to-cm": {
      title: "Conversor de Píxeles a CM",
      description:
        "Convierte píxeles a centímetros con soporte de DPI. Calculadora gratuita en línea.",
      extractive:
        "Para convertir píxeles a centímetros, multiplica los píxeles por 2.54 y divide entre el DPI. A 96 DPI, 960 píxeles equivalen a 25.4 cm.",
    },
    "cm-to-pixels": {
      title: "Conversor de CM a Píxeles",
      description:
        "Convierte centímetros a píxeles con control de DPI. Calculadora gratuita en línea.",
      extractive:
        "Para convertir centímetros a píxeles, multiplica cm por DPI y divide entre 2.54. A 96 DPI, 10 cm equivalen a aproximadamente 378 píxeles.",
    },
    "pixels-to-mm": {
      title: "Conversor de Píxeles a MM",
      description:
        "Convierte píxeles a milímetros con DPI ajustable. Calculadora gratuita en línea.",
      extractive:
        "Para convertir píxeles a milímetros, multiplica los píxeles por 25.4 y divide entre el DPI. A 96 DPI, 96 píxeles equivalen a 25.4 mm.",
    },
    "mm-to-pixels": {
      title: "Conversor de MM a Píxeles",
      description:
        "Convierte milímetros a píxeles con cualquier DPI. Calculadora gratuita en línea.",
      extractive:
        "Para convertir milímetros a píxeles, multiplica mm por DPI y divide entre 25.4. A 96 DPI, 25.4 mm equivalen a 96 píxeles.",
    },
    "feet-to-pixels": {
      title: "Conversor de Pies a Píxeles",
      description:
        "Convierte pies a píxeles para diseño de gran formato y señalización.",
      extractive:
        "Para convertir pies a píxeles, multiplica los pies por 12 y luego por el DPI. A 96 DPI, 1 pie equivale a 1152 píxeles. A 300 DPI, 1 pie equivale a 3600 píxeles.",
    },
    "pixels-to-feet": {
      title: "Conversor de Píxeles a Pies",
      description:
        "Convierte píxeles a pies para salidas de gran formato.",
      extractive:
        "Para convertir píxeles a pies, divide los píxeles entre el DPI y luego entre 12. A 96 DPI, 1152 píxeles equivalen a 1 pie.",
    },
    "px-to-rem": {
      title: "Conversor de PX a REM",
      description:
        "Convierte píxeles a unidades rem para CSS responsivo.",
      extractive:
        "Para convertir píxeles a rem, divide el valor en píxeles entre el tamaño de fuente raíz (generalmente 16px). Así, 32px equivale a 2rem con base de 16px.",
    },
    "px-to-em": {
      title: "Conversor de PX a EM",
      description:
        "Convierte píxeles a unidades em para dimensionamiento relativo en CSS.",
      extractive:
        "Para convertir píxeles a em, divide el valor en píxeles entre el tamaño de fuente del elemento padre. Con padre de 16px, 24px equivale a 1.5em.",
    },
    "px-to-pt": {
      title: "Conversor de PX a PT",
      description:
        "Convierte píxeles a puntos tipográficos.",
      extractive:
        "Para convertir píxeles a puntos, multiplica los píxeles por 0.75 (a 96 DPI). Así, 16px equivale a 12pt.",
    },
    "px-to-vw": {
      title: "Conversor de PX a VW",
      description:
        "Convierte píxeles a unidades de ancho de ventana gráfica.",
      extractive:
        "Para convertir píxeles a vw, divide el valor en píxeles entre el ancho de la ventana gráfica y multiplica por 100. En una ventana de 1920px, 192px equivale a 10vw.",
    },
    "dpi-calculator": {
      title: "Calculadora de DPI",
      description:
        "Calcula el DPI de cualquier pantalla ingresando ancho, alto y tamaño diagonal.",
      extractive:
        "Para calcular el DPI, usa la fórmula: DPI = sqrt(ancho² + alto²) / diagonal. Por ejemplo, un monitor de 24 pulgadas 1080p tiene un DPI de 91.79.",
    },
    "ppi-calculator": {
      title: "Calculadora de PPI",
      description:
        "Calcula el PPI de cualquier pantalla. Ingresa la resolución y el tamaño de pantalla.",
      extractive:
        "El PPI se calcula igual que el DPI para pantallas: PPI = sqrt(ancho² + alto²) / diagonal. Una pantalla 4K de 27 pulgadas tiene 163 PPI.",
    },
    "dpi-converter": {
      title: "Conversor de DPI",
      description:
        "Convierte imágenes entre diferentes resoluciones de DPI.",
      extractive:
        "Para convertir entre configuraciones de DPI, multiplica la dimensión por el nuevo DPI y divide entre el DPI anterior. Cambiar de 72 a 300 DPI reduce el tamaño de impresión en aproximadamente un 76%.",
    },
    "aspect-ratio-calculator": {
      title: "Calculadora de Relación de Aspecto",
      description:
        "Calcula y convierte relaciones de aspecto. Encuentra dimensiones para cualquier proporción.",
      extractive:
        "Para calcular la relación de aspecto, divide el ancho entre la altura y simplifica. 1920x1080 tiene una relación 16:9.",
    },
    "image-size-calculator": {
      title: "Calculadora de Tamaño de Imagen",
      description:
        "Calcula dimensiones de imagen y tamaño de archivo basado en resolución.",
      extractive:
        "El tamaño del archivo de imagen depende de las dimensiones en píxeles, la profundidad de color y la compresión. Una imagen 1920x1080 de 24 bits sin comprimir pesa aproximadamente 6.2 MB.",
    },
    "screen-resolution-checker": {
      title: "Verificador de Resolución de Pantalla",
      description:
        "Verifica tu resolución de pantalla actual, proporción de píxeles y tamaño de ventana gráfica.",
      extractive:
        "Esta herramienta detecta la resolución de tu pantalla, la proporción de píxeles del dispositivo y las dimensiones de la ventana gráfica disponibles.",
    },
    "image-dpi-checker": {
      title: "Verificador de DPI de Imagen",
      description:
        "Verifica el DPI de cualquier archivo de imagen. Sube una imagen para ver la resolución.",
      extractive:
        "Sube una imagen para verificar sus metadatos de DPI. La mayoría de las imágenes web tienen 72 o 96 DPI; las imágenes para impresión deben tener 300 DPI.",
    },
    "pixel-ruler": {
      title: "Regla de Píxeles",
      description:
        "Mide píxeles directamente en tu pantalla. Una regla virtual calibrada.",
      extractive:
        "La regla de píxeles te permite medir elementos en pantalla en píxeles. Calibra con tu monitor para mediciones físicas precisas.",
    },
    "megapixel-calculator": {
      title: "Calculadora de Megapíxeles",
      description:
        "Convierte megapíxeles a dimensiones en píxeles y viceversa.",
      extractive:
        "Los megapíxeles equivalen al ancho por la altura dividido entre un millón. Una cámara de 12 MP produce imágenes de 4000x3000 píxeles.",
    },
    "pixel-converter": {
      title: "Conversor de Píxeles",
      description:
        "Conversor de píxeles todo en uno. Convierte entre píxeles, pulgadas, centímetros, milímetros y pies.",
      extractive:
        "Convierte entre píxeles y unidades físicas con reconocimiento de DPI. Selecciona una conversión o usa el conversor rápido.",
    },
    "what-is-dpi": {
      title: "¿Qué Es DPI?",
      description:
        "Aprende qué significa DPI, cómo afecta la calidad de impresión e imagen, y los valores estándar de DPI.",
      extractive:
        "DPI (puntos por pulgada) mide la resolución de impresión — cuántos puntos de tinta coloca una impresora en una pulgada lineal. El DPI estándar de impresión es 300 para fotos, 150 para documentos y 72 para carteles grandes.",
    },
    "what-is-ppi": {
      title: "¿Qué Es PPI?",
      description:
        "Aprende qué significa PPI (píxeles por pulgada) para pantallas y cómo difiere del DPI.",
      extractive:
        "PPI (píxeles por pulgada) mide la densidad de píxeles de la pantalla. Mayor PPI significa pantallas más nítidas. Los teléfonos modernos tienen más de 400 PPI.",
    },
    "what-is-a-pixel": {
      title: "¿Qué Es un Píxel?",
      description:
        "Aprende qué es un píxel, cómo funcionan en las pantallas digitales y por qué importan.",
      extractive:
        "Un píxel es el elemento más pequeño direccionable en una pantalla digital. Cada píxel contiene subpíxeles rojo, verde y azul que se combinan para producir cualquier color visible.",
    },
    "dpi-vs-ppi": {
      title: "DPI vs PPI",
      description:
        "Entiende las diferencias clave entre DPI y PPI, cuándo usar cada término y por qué importa.",
      extractive:
        "DPI (puntos por pulgada) se refiere a la resolución de impresión mientras que PPI (píxeles por pulgada) se refiere a la resolución de pantalla. Para conversiones, funcionan de manera idéntica.",
    },
    "pixels-per-inch": {
      title: "Píxeles Por Pulgada",
      description:
        "Guía de referencia completa sobre píxeles por pulgada (PPI) para pantallas e impresión.",
      extractive:
        "Los píxeles por pulgada (PPI) determinan la nitidez de la pantalla. El estándar web es 96 PPI, el legado Mac es 72 PPI y las pantallas Retina superan los 200 PPI.",
    },
    "em-vs-rem": {
      title: "EM vs REM",
      description:
        "Compara las unidades CSS em y rem. Entiende cuándo usar cada una.",
      extractive:
        "EM es relativo al tamaño de fuente del elemento padre, mientras que REM es relativo al tamaño de fuente raíz. REM es más predecible para el dimensionamiento de diseño.",
    },
    "best-dpi-for-printing": {
      title: "Mejor DPI para Impresión",
      description:
        "Encuentra el DPI recomendado para cada tipo de impresión: fotos, carteles, tarjetas de visita y más.",
      extractive:
        "Usa 300 DPI para impresiones fotográficas estándar y folletos, 150 DPI para carteles grandes y 600 DPI para reproducción de arte fino.",
    },
    "best-dpi-for-web": {
      title: "Mejor DPI para Web",
      description:
        "Guía de resolución de imágenes web y DPI. Aprende por qué 72 y 96 DPI son estándares web.",
      extractive:
        "Las imágenes web deben optimizarse por dimensiones en píxeles, no por DPI. Los navegadores renderizan basándose en la cantidad de píxeles. 96 DPI es el estándar CSS.",
    },
    "paper-sizes-in-pixels": {
      title: "Tamaños de Papel en Píxeles",
      description:
        "Encuentra A4, Carta, A3 y todos los tamaños de papel estándar en píxeles a cualquier DPI.",
      extractive:
        "El papel A4 (210x297mm) a 300 DPI es 2480x3508 píxeles. El tamaño Carta US (8.5x11 pulgadas) a 300 DPI es 2550x3300 píxeles.",
    },
    "standard-image-sizes": {
      title: "Tamaños de Imagen Estándar",
      description:
        "Referencia de tamaños estándar de impresión fotográfica (4x6, 5x7, 8x10) en píxeles a cualquier DPI.",
      extractive:
        "Una foto 4x6 a 300 DPI es 1200x1800 píxeles. Una 5x7 a 300 DPI es 1500x2100 píxeles. Una 8x10 a 300 DPI es 2400x3000 píxeles.",
    },
    "social-media-image-sizes": {
      title: "Tamaños de Imagen para Redes Sociales",
      description:
        "Guía completa de dimensiones de imagen para Instagram, Facebook, YouTube, Twitter/X y LinkedIn.",
      extractive:
        "Las publicaciones de Instagram son 1080x1080px, las Historias son 1080x1920px. Las fotos de portada de Facebook son 820x312px. Las miniaturas de YouTube son 1280x720px.",
    },
    "common-resolutions": {
      title: "Resoluciones Comunes",
      description:
        "Guía de referencia de resoluciones de pantalla comunes: 720p, 1080p, 1440p, 4K, 5K y 8K.",
      extractive:
        "1080p (Full HD) es 1920x1080 píxeles. 4K (UHD) es 3840x2160 píxeles. 5K es 5120x2880 píxeles. 8K es 7680x4320 píxeles.",
    },
    "dpi-conversion-table": {
      title: "Tabla de Conversión DPI",
      description:
        "Tabla de referencia rápida para conversiones de píxeles a físicas en valores DPI comunes.",
      extractive:
        "A 96 DPI: 1 pulgada = 96px, 1 cm = 37.8px. A 300 DPI: 1 pulgada = 300px, 1 cm = 118.1px.",
    },
    "passport-photo-size": {
      title: "Tamaño de Foto de Pasaporte",
      description:
        "Requisitos de tamaño de foto para pasaportes y documentos de identidad en píxeles.",
      extractive:
        "Las fotos de pasaporte de EE.UU. deben ser de 2x2 pulgadas. A 300 DPI eso es 600x600 píxeles. Las fotos de pasaporte del Reino Unido son 35x45mm (413x531 píxeles a 300 DPI).",
    },
    "pixels-per-cm": {
      title: "Píxeles Por CM",
      description:
        "Guía de referencia de píxeles por centímetro en valores DPI comunes.",
      extractive:
        "Los píxeles por centímetro dependen del DPI. A 96 DPI, hay 37.8 píxeles por cm. A 300 DPI, hay 118.1 píxeles por cm.",
    },
    "pixels-per-mm": {
      title: "Píxeles Por MM",
      description:
        "Guía de referencia de píxeles por milímetro en valores DPI comunes.",
      extractive:
        "Los píxeles por milímetro dependen del DPI. A 96 DPI, hay 3.78 píxeles por mm. A 300 DPI, hay 11.81 píxeles por mm.",
    },
    "pixels-per-foot": {
      title: "Píxeles Por Pie",
      description:
        "Guía de referencia de píxeles por pie en valores DPI comunes.",
      extractive:
        "Los píxeles por pie dependen del DPI. A 96 DPI, un pie equivale a 1152 píxeles. A 300 DPI, un pie equivale a 3600 píxeles.",
    },
    about: {
      title: "Acerca de FeetToPixels",
      description:
        "FeetToPixels ofrece herramientas gratuitas y precisas de conversión de píxeles con reconocimiento de DPI.",
      extractive: "",
    },
    privacy: {
      title: "Política de Privacidad",
      description:
        "Política de privacidad de FeetToPixels.com. Aprende cómo manejamos tus datos.",
      extractive: "",
    },
    terms: {
      title: "Términos de Servicio",
      description:
        "Términos de servicio de FeetToPixels.com. Entiende las reglas para usar nuestras herramientas.",
      extractive: "",
    },
    contact: {
      title: "Contáctanos",
      description:
        "Ponte en contacto con el equipo de FeetToPixels. Preguntas, sugerencias e informes de errores son bienvenidos.",
      extractive: "",
    },
  },
  navDescriptions: {
    "pixels-to-inches": "Convierte px a pulgadas con control de DPI",
    "inches-to-pixels": "Convierte pulgadas a px con cualquier DPI",
    "cm-to-pixels": "Convierte centímetros a px",
    "pixels-to-cm": "Convierte px a centímetros",
    "mm-to-pixels": "Convierte milímetros a px",
    "pixels-to-mm": "Convierte px a milímetros",
    "feet-to-pixels": "Convierte pies a px para gran formato",
    "pixels-to-feet": "Convierte px a pies",
    "px-to-rem": "Convierte píxeles a unidades rem",
    "px-to-em": "Convierte píxeles a unidades em",
    "px-to-pt": "Convierte píxeles a puntos tipográficos",
    "px-to-vw": "Convierte píxeles a ancho de ventana",
    "dpi-calculator": "Calcula puntos por pulgada",
    "ppi-calculator": "Calcula píxeles por pulgada",
    "dpi-converter": "Convierte entre ajustes de DPI",
    "aspect-ratio-calculator": "Encuentra y convierte relaciones de aspecto",
    "image-size-calculator": "Calcula dimensiones y tamaño de archivo",
    "screen-resolution-checker": "Verifica tu resolución de pantalla",
    "image-dpi-checker": "Verifica el DPI de cualquier imagen",
    "pixel-ruler": "Mide píxeles en pantalla",
    "megapixel-calculator": "Convierte megapíxeles a resolución",
    "pixel-converter": "Centro de conversión todo en uno",
    "what-is-dpi": "Entendiendo los puntos por pulgada",
    "what-is-ppi": "Entendiendo los píxeles por pulgada",
    "what-is-a-pixel": "La base de las imágenes digitales",
    "dpi-vs-ppi": "Diferencias clave explicadas",
    "pixels-per-inch": "Guía completa de referencia PPI",
    "em-vs-rem": "Guía comparativa de unidades CSS",
    "best-dpi-for-printing": "Guía de resolución para impresiones nítidas",
    "best-dpi-for-web": "Guía de resolución de imágenes web",
    "paper-sizes-in-pixels": "A4, Carta, A3 en cada DPI",
    "standard-image-sizes": "4x6, 5x7, 8x10 en píxeles",
    "social-media-image-sizes": "Tamaños para Instagram, Facebook, YouTube",
    "common-resolutions": "1080p, 4K, 5K explicados",
    "dpi-conversion-table": "Tabla de referencia rápida",
    "passport-photo-size": "Tamaños de foto para pasaportes e IDs",
  },
};
