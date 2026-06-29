export const salesWhatsAppUrl = 'https://wa.me/59894009370'

export type ProductCategory = {
  slug: string
  name: string
  summary: string
  parentSlug?: string
  href?: string
  external?: boolean
  ctaLabel?: string
}

export type CategoryDetails = {
  intro: string
  bullets: string[]
  note?: string
}

export type GalleryItem = {
  title: string
  caption: string
  image?: string
  secondaryImage?: string
  buttonLabel?: string
  href?: string
}

export const productCategories: readonly ProductCategory[] = [
  {
    slug: 'amasadoras',
    name: 'Amasadoras',
    summary: 'Equipos para amasado parejo, continuo y adaptado al volumen real de producción.',
  },
  {
    slug: 'armadoras-de-pan',
    name: 'Armadoras de pan',
    summary: 'Soluciones para formado uniforme y mayor ritmo de trabajo en panadería.',
  },
  {
    slug: 'batidoras',
    name: 'Batidoras',
    summary: 'Opciones para panadería, pastelería y gastronomía con distintos niveles de capacidad.',
  },
  {
    slug: 'camaras-de-fermentacion',
    name: 'Cámaras de fermentación',
    summary: 'Equipos para controlar tiempos, temperatura y desarrollo de la masa.',
  },
  {
    slug: 'cortadoras-de-pan',
    name: 'Cortadoras de pan',
    summary: 'Corte prolijo y parejo para panaderías, supermercados y producción comercial.',
  },
  {
    slug: 'depositadoras',
    name: 'Depositadoras',
    summary: 'Automatización de dosificado para mejorar precisión, velocidad y repetibilidad.',
  },
  {
    slug: 'descortezadora-pan-de-miga',
    name: 'Descortezadora pan de miga',
    summary: 'Equipos orientados a producciones específicas de pan de miga con terminación prolija.',
  },
  {
    slug: 'divisoras',
    name: 'Divisoras',
    summary: 'División uniforme de masa para optimizar tiempos y mantener consistencia.',
  },
  {
    slug: 'enfriadores-de-agua',
    name: 'Enfriadores de agua',
    summary: 'Control de temperatura para mejorar estabilidad en amasados y procesos.',
  },
  {
    slug: 'galleteras',
    name: 'Galleteras',
    summary: 'Soluciones para producción de galletitas y piezas repetitivas con mejor rendimiento.',
  },
  {
    slug: 'grisineras',
    name: 'Grisineras',
    summary: 'Líneas para formado continuo de grisines y productos similares.',
  },
  {
    slug: 'hornos',
    name: 'Hornos',
    summary: 'Categoría preparada para desplegar sublíneas y asesorar según tipo de cocción.',
  },
  {
    slug: 'laminadoras',
    name: 'Laminadoras',
    summary: 'Laminado uniforme para panadería y pastelería con mejor control del proceso.',
  },
  {
    slug: 'lineas-industriales',
    name: 'Líneas industriales',
    summary: 'Proyectos integrales y soluciones a medida para plantas o producciones de mayor escala.',
    href: salesWhatsAppUrl,
    external: true,
    ctaLabel: 'Consultar línea industrial',
  },
  {
    slug: 'ralladoras-de-pan',
    name: 'Ralladoras de pan',
    summary: 'Equipos para procesar pan rallado con continuidad y practicidad operativa.',
  },
  {
    slug: 'sobadoras',
    name: 'Sobadoras',
    summary: 'Máquinas para sobado uniforme, trabajo continuo y terminación consistente.',
  },
  {
    slug: 'sobasolas',
    name: 'Sobasolas',
    summary: 'Alternativas compactas para panaderías y obradores que buscan practicidad.',
  },
  {
    slug: 'trenes-de-laboreo',
    name: 'Trenes de laboreo',
    summary: 'Líneas de trabajo para ordenar y agilizar el proceso productivo.',
  },
  {
    slug: 'varios-utiles-de-cuadra',
    name: 'Varios útiles de cuadra',
    summary: 'Accesorios, complementos y útiles para resolver necesidades puntuales del obrador.',
    href: salesWhatsAppUrl,
    external: true,
    ctaLabel: 'Consultar útiles de cuadra',
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
      'Reunimos soluciones para amasado profesional pensadas para panaderías, confiterías y producciones que necesitan rendimiento estable, buen desarrollo de masa y una elección coherente con su volumen de trabajo.',
    bullets: [
      'Asesoramiento según kilos por tanda y tipo de masa.',
      'Opciones para producción artesanal, semiindustrial o industrial.',
      'Evaluación comercial y técnica antes de definir capacidad o formato.',
    ],
    note: 'Esta landing queda preparada para sumar modelos, fichas y marcas cuando definamos el contenido final.',
  },
  'armadoras-de-pan': {
    intro:
      'Esta categoría está orientada al formado de piezas con mayor uniformidad, continuidad y velocidad operativa, especialmente útil para negocios que buscan ordenar procesos y mejorar terminación.',
    bullets: [
      'Soluciones para distintos formatos de pan y volúmenes de producción.',
      'Mejora del ritmo de trabajo con menor variación entre piezas.',
      'Acompañamiento comercial para elegir la configuración correcta.',
    ],
  },
  batidoras: {
    intro:
      'Las batidoras están pensadas para cubrir necesidades de panadería, pastelería y gastronomía, contemplando desde usos más puntuales hasta procesos más intensivos y continuos.',
    bullets: [
      'Modelos orientados a mezcla, batido y emulsión según el producto final.',
      'Selección por capacidad, frecuencia de uso y tipo de preparación.',
      'Espacio previsto para sumar modelos y especificaciones más adelante.',
    ],
  },
  'camaras-de-fermentacion': {
    intro:
      'Las cámaras de fermentación permiten trabajar con mayor control sobre temperatura, humedad y tiempos, ayudando a ordenar la producción y a lograr resultados más consistentes.',
    bullets: [
      'Control de proceso para mejorar regularidad y planificación.',
      'Asesoramiento según escala de producción y espacio disponible.',
      'Base lista para incorporar variantes y detalles técnicos en una segunda etapa.',
    ],
  },
  'cortadoras-de-pan': {
    intro:
      'Esta línea está pensada para panaderías, supermercados y puntos de venta que necesitan un corte prolijo, rápido y uniforme, cuidando presentación y productividad.',
    bullets: [
      'Soluciones según tipo de pan, volumen y formato de despacho.',
      'Equipos orientados a operación comercial continua.',
      'Consulta directa para definir prestaciones y respaldo postventa.',
    ],
  },
  depositadoras: {
    intro:
      'Las depositadoras permiten automatizar el dosificado de masas, rellenos o preparaciones repetitivas, mejorando precisión, velocidad y consistencia en la producción.',
    bullets: [
      'Muy útiles para líneas con necesidad de repetibilidad y orden.',
      'Selección según tipo de producto, textura y ritmo requerido.',
      'Landing preparada para ampliar con modelos específicos más adelante.',
    ],
  },
  'descortezadora-pan-de-miga': {
    intro:
      'Esta categoría responde a producciones específicas de pan de miga donde la terminación, la uniformidad y la velocidad del proceso tienen un peso operativo clave.',
    bullets: [
      'Equipos orientados a procesos concretos y de nicho.',
      'Evaluación según volumen, formato del producto y flujo de trabajo.',
      'Espacio previsto para sumar información técnica y ejemplos de uso.',
    ],
  },
  divisoras: {
    intro:
      'Las divisoras permiten ganar uniformidad en el porcionado de masa, ahorrar tiempo de trabajo manual y ordenar mejor la producción diaria del obrador.',
    bullets: [
      'División más consistente para mejorar rendimiento y estandarización.',
      'Opciones para diferentes escalas de trabajo y tipos de masa.',
      'Asesoramiento inicial para definir la alternativa más conveniente.',
    ],
  },
  'enfriadores-de-agua': {
    intro:
      'Los enfriadores de agua ayudan a estabilizar la temperatura en el amasado y a sostener mejores condiciones de trabajo, especialmente cuando el clima o la exigencia productiva afectan el proceso.',
    bullets: [
      'Mejora del control térmico en panadería y producción continua.',
      'Selección según consumo, instalación y ritmo operativo.',
      'Categoría abierta para completar luego con modelos y capacidades.',
    ],
  },
  galleteras: {
    intro:
      'Esta línea está pensada para producciones de galletitas y piezas repetitivas donde importa mantener forma, velocidad y uniformidad sin perder practicidad de uso.',
    bullets: [
      'Alternativas para producción artesanal-profesional o de mayor escala.',
      'Asesoramiento según variedad de productos y nivel de automatización.',
      'Contenido listo para crecer con fichas y ejemplos concretos.',
    ],
  },
  grisineras: {
    intro:
      'Las grisineras están orientadas a negocios que buscan mecanizar el formado y sostener una producción más continua en líneas de grisines y productos similares.',
    bullets: [
      'Mayor continuidad y repetibilidad en piezas alargadas.',
      'Consulta según volumen objetivo y características del producto.',
      'Base simple para completar con modelos o configuraciones futuras.',
    ],
  },
  hornos: {
    intro:
      'La categoría hornos queda preparada para desplegar subcategorías específicas apenas definamos la estructura final, manteniendo desde ahora un acceso claro dentro del menú.',
    bullets: [
      'Espacio reservado para sumar las distintas líneas de hornos.',
      'Asesoramiento comercial según tipo de cocción, producción y espacio.',
      'Estructura lista para agregar un segundo nivel de navegación.',
    ],
    note: 'Cuando nos pases el detalle de hornos, lo convertimos en un submenú real dentro de esta misma base.',
  },
  laminadoras: {
    intro:
      'Las laminadoras están orientadas a panadería y pastelería profesional, buscando uniformidad de espesor, continuidad de trabajo y mejor control en masas laminadas.',
    bullets: [
      'Opciones para distintos ritmos de producción y nivel de automatización.',
      'Asesoramiento según espacio, tipo de masa y flujo operativo.',
      'Landing lista para sumar modelos concretos en la próxima etapa.',
    ],
  },
  'ralladoras-de-pan': {
    intro:
      'Esta categoría contempla equipos para procesar pan rallado de forma ordenada y continua, pensando en negocios que buscan resolver una necesidad puntual con criterio productivo.',
    bullets: [
      'Soluciones específicas para procesos concretos dentro del obrador.',
      'Consulta según volumen, frecuencia de uso y formato de trabajo.',
      'Espacio preparado para incorporar detalles de equipos más adelante.',
    ],
  },
  sobadoras: {
    intro:
      'Las sobadoras siguen siendo una categoría central para panaderías y obradores que buscan regularidad, buena terminación y continuidad en el manejo de la masa.',
    bullets: [
      'Equipos para distintos volúmenes y exigencias de trabajo.',
      'Orientación comercial y técnica según uso real del negocio.',
      'Base lista para volver a sumar modelos destacados si lo definimos.',
    ],
  },
  sobasolas: {
    intro:
      'Las sobasolas ofrecen una alternativa más compacta para ciertas dinámicas de trabajo, manteniendo foco en practicidad, ocupación de espacio y rendimiento operativo.',
    bullets: [
      'Opciones pensadas para producciones que valoran agilidad y simpleza.',
      'Evaluación según espacio disponible y tipo de masa habitual.',
      'Landing preparada para completar luego con ejemplos y fichas.',
    ],
  },
  'trenes-de-laboreo': {
    intro:
      'Esta categoría agrupa soluciones para ordenar etapas del proceso productivo y mejorar la continuidad del trabajo cuando la operación necesita mayor integración entre equipos.',
    bullets: [
      'Pensado para líneas de producción más organizadas y eficientes.',
      'Asesoramiento según flujo, espacio y objetivo operativo.',
      'Contenido base listo para profundizar por etapas más adelante.',
    ],
  },
}

export function getCategoryHref(category: ProductCategory) {
  return category.href ?? `/productos/${category.slug}`
}

export function isBrowsableCategory(category: ProductCategory) {
  return !category.external
}
