export type ProductCategory = {
  slug: string
  name: string
  summary: string
  parentSlug?: string
}

export type FeaturedProduct = {
  name: string
  brand: string
  model: string
  image: string
  imageAlt: string
  badge?: string
  shortDescription: string
  capacities?: string[]
  highlights: string[]
  description: string[]
  specsTitle?: string
  specs: string[]
  notesTitle?: string
  notes: string[]
}

export type CategoryDetails = {
  intro: string
  bullets: string[]
  featuredProduct?: FeaturedProduct
}

export const productCategories: readonly ProductCategory[] = [
  {
    slug: 'amasadoras',
    name: 'Amasadoras',
    summary: 'Equipos pensados para distintos volúmenes de producción y tipos de masa.',
  },
  {
    slug: 'sobadoras',
    name: 'Sobadoras',
    summary: 'Soluciones para panaderías y plantas que necesitan uniformidad y ritmo de trabajo.',
  },
  {
    slug: 'batidoras',
    name: 'Batidoras',
    summary: 'Opciones para pastelería, confitería y producción gastronómica.',
  },
  {
    slug: 'multidrop',
    name: 'Multidrop',
    summary: 'Equipos para líneas de producción que requieren precisión y repetibilidad.',
  },
  {
    slug: 'maquinaria-especial',
    name: 'Maquinaria Especial',
    summary: 'Categoría orientada a equipos específicos, complementarios o de producción especializada.',
  },
  {
    slug: 'laminadoras',
    name: 'Laminadoras',
    summary: 'Equipos para laminar masa con espesor parejo y ritmo constante de trabajo.',
    parentSlug: 'maquinaria-especial',
  },
  {
    slug: 'armadoras',
    name: 'Armadoras',
    summary: 'Soluciones para formado y armado de piezas con producción más uniforme.',
    parentSlug: 'maquinaria-especial',
  },
  {
    slug: 'cortadoras-de-pan',
    name: 'Cortadoras de pan',
    summary: 'Equipos para corte prolijo, rápido y repetitivo en panadería y retail.',
    parentSlug: 'maquinaria-especial',
  },
  {
    slug: 'grupo-croissant',
    name: 'Grupo Croissant',
    summary: 'Línea pensada para armado, laminado y trabajo específico de croissant y viennoiserie.',
    parentSlug: 'maquinaria-especial',
  },
  {
    slug: 'utensilios',
    name: 'Utensilios',
    summary: 'Complementos y accesorios para la operación diaria del negocio.',
  },
] as const

export const topLevelProductCategories = productCategories.filter((category) => !category.parentSlug)

export const productCategoryChildren: Record<string, ProductCategory[]> = productCategories.reduce<
  Record<string, ProductCategory[]>
>((acc, category) => {
  if (!category.parentSlug) {
    return acc
  }

  acc[category.parentSlug] ??= []
  acc[category.parentSlug].push(category)
  return acc
}, {})

export const categoryDetails: Record<string, CategoryDetails> = {
  amasadoras: {
    intro:
      'Dentro de esta línea hoy contamos con una amasadora espiral orientada a panaderías, pastelerías y producciones que necesitan un trabajo homogéneo en masas de hidratación media.',
    bullets: [
      'Amasado parejo para producción artesanal o semiindustrial',
      'Opciones de capacidad según necesidad operativa',
      'Consulta directa para disponibilidad, precio y asesoramiento',
    ],
    featuredProduct: {
      name: 'Amasadora espiral',
      brand: 'Mixer',
      model: 'Start Plus',
      image: '/amasadora-start-plus.jpg',
      imageAlt: 'Amasadora espiral Start Plus',
      badge: 'Producto destacado',
      shortDescription:
        'Línea de amasadoras espirales pensada para laboratorios de panadería y pastelería que trabajan principalmente con masas de hidratación media.',
      capacities: ['35 kg', '50 kg', '60 kg', '80 kg'],
      highlights: [
        'Inversión del sentido de giro de la cuba para un trabajo más homogéneo.',
        'Adecuada para pequeñas cantidades de masa sin perder calidad de mezclado.',
        'Estructura elevada del suelo para facilitar la limpieza del área de trabajo.',
      ],
      description: [
        'La línea Start Plus fue desarrollada para ofrecer una solución concreta, esencial y confiable para el trabajo diario de panaderías y pastelerías.',
        'Está especialmente orientada a masas de hidratación media y fue ensayada para lograr buenos resultados incluso con preparaciones que se acercan al 75% de líquido.',
        'Es una opción muy útil como amasadora principal en pequeños talleres o como segundo equipo de apoyo en producciones que necesitan flexibilidad para tandas más chicas.',
      ],
      specsTitle: 'Características principales',
      specs: [
        'Amasadora espiral con inversión de giro de cuba.',
        'Modelos disponibles en capacidades de 35, 50, 60 y 80.',
        'Pensada para panadería, pastelería y producciones artesanales.',
        'Configuración funcional y robusta con foco en relación calidad-precio.',
      ],
      notesTitle: 'Aplicaciones recomendadas',
      notes: [
        'Masas de media hidratación.',
        'Producciones pequeñas o complementarias dentro del obrador.',
        'Emprendimientos que buscan un equipo confiable y simple de operar.',
      ],
    },
  },
  sobadoras: {
    intro:
      'Dentro de esta categoría hoy presentamos una sobadora pesada orientada a panadería y pastelería, preparada para trabajo continuo y regulación precisa del cilindro.',
    bullets: [
      'Equipos para distintos volúmenes',
      'Comparación de formatos',
      'Consulta comercial rápida',
    ],
    featuredProduct: {
      name: 'Sobadora pesada',
      brand: 'La Casa del Panadero',
      model: 'Super Silenciosa',
      image: '/sobadora-pesada.jpg',
      imageAlt: 'Sobadora pesada super silenciosa',
      badge: 'Producto destacado',
      shortDescription:
        'Sobadora de construcción robusta, pensada para panaderías y producciones que necesitan uniformidad, seguridad y un trabajo silencioso con regulación amplia del cilindro.',
      capacities: ['Pastelera', 'Panadera', '50 posiciones'],
      highlights: [
        '50 posiciones de regulación del cilindro para ajustar el trabajo según el tipo de masa.',
        'Transmisión por engranajes helicoidales en baño de grasa para un funcionamiento confiable.',
        'Bandejas y laterales en acero inoxidable con barra de pare de seguridad incorporada.',
      ],
      description: [
        'La sobadora Super Silenciosa fue desarrollada para ofrecer un trabajo continuo, parejo y seguro dentro del obrador.',
        'Su construcción está orientada a facilitar el manejo diario de la masa, incorporando rodillo de apoyo para deslizamiento, bandeja de excedente de harina y una estructura sólida para uso intensivo.',
        'La ficha técnica distingue versiones para pastelería y panadería, lo que permite evaluar la alternativa más conveniente según potencia, cilindro y dimensiones de máquina.',
      ],
      specsTitle: 'Características principales',
      specs: [
        '50 posiciones de regulación de cilindro.',
        'Transmisión por engranajes helicoidales en baño de grasa.',
        'Montaje de ejes sobre bujes de bronce fosforoso antifricción.',
        'Bandeja depositadora de excedente de harina.',
        'Rodillo para facilitar el deslizamiento de la masa.',
        'Bandejas de entrada y salida de masa y laterales en acero inoxidable.',
        'Barra de pare de seguridad incorporada.',
      ],
      notesTitle: 'Versiones y datos técnicos',
      notes: [
        'Modelo Pastelera: sistema a cadena, potencia de 2 HP, cilindro de 140 mm x 500 mm, medidas 900 x 1200 x 1300 mm, peso 170 kg.',
        'Modelo Panadera: sistema engranado, potencia de 5.5 HP, cilindro de 170 mm x 600 mm, medidas 1200 x 1250 x 1600 mm, peso 370 kg.',
        'Consulta recomendada para definir versión según tipo de producción y espacio disponible.',
      ],
    },
  },
  batidoras: {
    intro:
      'Dentro de esta categoría hoy presentamos una mezcladora planetaria industrial orientada a procesos exigentes de panadería, pastelería y producción alimentaria.',
    bullets: [
      'Modelos por capacidad',
      'Aplicaciones recomendadas',
      'Solicitud de presupuesto',
    ],
    featuredProduct: {
      name: 'Mezcladora planetaria',
      brand: 'Mixer',
      model: 'MR EVO',
      image: '/batidora-mr-evo.jpg',
      imageAlt: 'Batidora planetaria Mixer MR EVO',
      badge: 'Producto destacado',
      shortDescription:
        'Batidora planetaria de doble herramienta y estructura de puente, pensada para mezcla rápida de ingredientes sólidos y líquidos en producciones de alto nivel.',
      capacities: ['150 L', '280 L', '400 L', '600 L', '800 L'],
      highlights: [
        'Versatilidad de uso para distintos procesos de mezcla y emulsión.',
        'Velocidad regulable de forma continua para adaptar el trabajo a cada preparación.',
        'Compatible con múltiples utensilios para ampliar aplicaciones dentro de la producción.',
      ],
      description: [
        'La MR EVO es una mezcladora planetaria industrial diseñada para ofrecer rapidez, versatilidad y consistencia en líneas de producción exigentes.',
        'Su configuración de doble utensilio a puente permite trabajar con diferentes recetas y texturas, facilitando desde mezclas simples hasta procesos más específicos.',
        'La ficha original destaca además opciones de automatización, accesorios y configuraciones especiales para adaptar el equipo a cada necesidad operativa.',
      ],
      specsTitle: 'Características principales',
      specs: [
        'Mezcladora planetaria a doble utensilio.',
        'Capacidades disponibles: 150, 280, 400, 600 y 800 litros.',
        'Regulación continua de velocidad de rotación de utensilios y porta-utensilios.',
        'Sistema preparado para diferentes tipos de amasados, emulsiones y mezclas.',
        'Cierre hermético de cuba para procesos controlados y más estables.',
      ],
      notesTitle: 'Opciones y aplicaciones',
      notes: [
        'Posibilidad de trabajar con distintos utensilios según el producto final buscado.',
        'Opcionales orientados a refrigeración, lavado, pesaje y carga/descarga de ingredientes.',
        'Equipo apto para panadería, pastelería y procesos alimentarios con mayor nivel de automatización.',
      ],
    },
  },
  multidrop: {
    intro:
      'Dentro de esta categoría hoy presentamos una línea de dosificadoras multidrop orientada a panaderías, confiterías y producciones que necesitan velocidad, repetibilidad y versatilidad en masas dulces o saladas.',
    bullets: [
      'Automatización de procesos',
      'Detalle de prestaciones',
      'Asesoramiento técnico-comercial',
    ],
    featuredProduct: {
      name: 'Dosificadora multidrop',
      brand: 'Mimac / Unique',
      model: 'Línea compacta',
      image: '/multidrop.jpg',
      imageAlt: 'Equipo multidrop compacto para dosificación de masas',
      badge: 'Producto destacado',
      shortDescription:
        'Equipo pensado para automatizar la dosificación y formado de galletitas, masas de repostería y productos similares, con un formato compacto adaptable a obradores de escala artesanal-industrial.',
      capacities: ['Compacta', 'Hasta 120 porciones/min', 'Bandejas 40x60 / 45x65'],
      highlights: [
        'Ideal para panaderías y confiterías que buscan mayor velocidad con producción uniforme.',
        'Muy útil para masas dulces y saladas con enfoque versátil y formato compacto.',
        'Posibilidad de coordinar demostraciones para probar la máquina con tu propia masa.',
      ],
      description: [
        'Dentro del mercado regional, las multidrop son una solución muy buscada para acelerar procesos de dosificación y mantener consistencia en piezas repetitivas.',
        'En este segmento suelen destacarse líneas compactas como Mimac BabyDrop o Maxx, además de modelos tipo Unique, valorados por su velocidad de producción y su buena adaptación a espacios de trabajo más acotados.',
        'Para el mercado uruguayo, una de las claves es validar la compatibilidad de la máquina con las bandejas utilizadas en el horno y con el tipo de masa real de cada cliente.',
      ],
      specsTitle: 'Características principales',
      specs: [
        'Equipo orientado a dosificación automática y repetitiva.',
        'Apto para panadería, confitería y repostería artesanal-industrial.',
        'Formato compacto para espacios de trabajo reducidos.',
        'Producción alta según modelo, con referencias de hasta 120 porciones por minuto.',
        'Versatilidad para masas dulces o saladas según configuración.',
      ],
      notesTitle: 'Recomendaciones de compra',
      notes: [
        'Coordinar una demo para testear el comportamiento del cabezal con tu propia masa.',
        'Confirmar compatibilidad con bandejas de 40 x 60 cm o 45 x 65 cm según tu línea de trabajo.',
        'Consultar disponibilidad y modelo según el nivel de producción que necesitás cubrir.',
      ],
    },
  },
  'maquinaria-especial': {
    intro:
      'Esta categoría reúne equipos específicos que amplían la capacidad del obrador y resuelven etapas particulares de la producción, el formado o el acabado del producto.',
    bullets: [
      'Subcategorías especializadas por tipo de proceso',
      'Equipos para producción complementaria',
      'Asesoramiento según espacio, volumen y uso',
    ],
  },
  laminadoras: {
    intro:
      'Página preparada para laminadoras orientadas a masas finas, trabajo de capas y producción con espesor constante.',
    bullets: [
      'Equipos para laminado uniforme',
      'Aplicación en panadería y pastelería',
      'Consulta comercial según producción',
    ],
  },
  armadoras: {
    intro:
      'Página preparada para armadoras pensadas para mejorar el formado y la repetibilidad de piezas dentro de la línea de producción.',
    bullets: [
      'Formado más uniforme',
      'Ritmo de trabajo sostenido',
      'Asesoramiento según tipo de pieza',
    ],
  },
  'cortadoras-de-pan': {
    intro:
      'Página preparada para cortadoras de pan con foco en velocidad, seguridad y corte parejo para despacho o exhibición.',
    bullets: [
      'Corte prolijo y repetitivo',
      'Uso en panadería y retail',
      'Consulta por formato de pan y capacidad',
    ],
  },
  'grupo-croissant': {
    intro:
      'Dentro de esta subcategoría hoy presentamos una línea específica para la producción de croissant, pensada para obradores que necesitan ritmo, precisión de formado y calidad constante en piezas laminadas.',
    bullets: [
      'Procesos específicos para croissant',
      'Producción más consistente',
      'Asesoramiento para línea de viennoiserie',
    ],
    featuredProduct: {
      name: 'Grupo para croissant',
      brand: 'Pasticc',
      model: '530 Avant',
      image: '/grupo-croissant-avant-530.png',
      imageAlt: 'Grupo Croissant Pasticc 530 Avant',
      badge: 'Producto destacado',
      shortDescription:
        'Equipo concebido para combinar alta producción con calidad final de producto, especialmente orientado a líneas de croissant y viennoiserie en espacios de trabajo contenidos.',
      capacities: ['2 a 6 filas', '2000 a 6000 croissants/h', 'Formato compacto'],
      highlights: [
        'Permite programar diferentes medidas de base del triángulo según el producto a fabricar.',
        'Configuración variable de trabajo entre 2 y 6 filas para adaptar la producción.',
        'Diseño orientado a alta productividad sin resignar precisión en el formado.',
      ],
      description: [
        'El modelo 530 Avant fue desarrollado para resolver la producción de croissant con una combinación equilibrada entre rendimiento, calidad de formado y aprovechamiento del espacio.',
        'La ficha técnica destaca especialmente la galería con orientación variable del triángulo de masa, que permite distintas configuraciones de trabajo manteniendo un sistema compacto.',
        'A través de su panel de control es posible programar medidas de base del triángulo, lo que aporta flexibilidad para distintos formatos y necesidades de producción.',
      ],
      specsTitle: 'Características principales',
      specs: [
        'Equipo específico para producción de croissant.',
        'Trabajo configurable entre 2 y 6 filas.',
        'Producción horaria estimada entre 2000 y 6000 croissants.',
        'Programación de medidas mediante panel de control.',
        'Diseño compacto para líneas de trabajo con espacio optimizado.',
      ],
      notesTitle: 'Aplicaciones y consulta',
      notes: [
        'Pensado para obradores y líneas que trabajan croissant y viennoiserie de forma regular.',
        'Útil para quienes necesitan mejorar ritmo, repetibilidad y presentación final del producto.',
        'Consulta recomendada para evaluar configuración, espacio disponible y capacidad objetivo.',
      ],
    },
  },
  utensilios: {
    intro:
      'Página preparada para utensilios, accesorios y complementos de uso diario en producción.',
    bullets: [
      'Listado por tipo de utensilio',
      'Productos de apoyo para cuadra',
      'Consulta simple por disponibilidad',
    ],
  },
}
