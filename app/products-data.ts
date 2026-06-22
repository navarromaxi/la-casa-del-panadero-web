export type ProductCategory = {
  slug: string
  name: string
  summary: string
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
    summary: 'Categoría preparada para equipos específicos o soluciones a medida.',
  },
  {
    slug: 'utensilios',
    name: 'Utensilios',
    summary: 'Complementos y accesorios para la operación diaria del negocio.',
  },
] as const

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
      'Página preparada para sumar batidoras orientadas a confitería, panadería y gastronomía.',
    bullets: [
      'Modelos por capacidad',
      'Aplicaciones recomendadas',
      'Solicitud de presupuesto',
    ],
  },
  multidrop: {
    intro:
      'Página preparada para mostrar líneas multidrop, funciones y posibilidades de producción.',
    bullets: [
      'Automatización de procesos',
      'Detalle de prestaciones',
      'Asesoramiento técnico-comercial',
    ],
  },
  'maquinaria-especial': {
    intro:
      'Página preparada para equipos especiales, importados o soluciones más específicas del rubro.',
    bullets: [
      'Soluciones a medida',
      'Equipos especiales por necesidad',
      'Contacto personalizado',
    ],
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
