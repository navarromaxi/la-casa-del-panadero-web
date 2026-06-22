export const productCategories = [
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

export const categoryDetails: Record<
  string,
  {
    intro: string
    bullets: string[]
  }
> = {
  amasadoras: {
    intro:
      'Página preparada para cargar amasadoras disponibles, fichas técnicas, capacidades y opciones de consulta.',
    bullets: [
      'Espacio para modelos disponibles',
      'Capacidad y tipo de uso',
      'Consulta directa por WhatsApp',
    ],
  },
  sobadoras: {
    intro:
      'Página preparada para exhibir sobadoras con foco en producción, potencia y trabajo continuo.',
    bullets: [
      'Equipos para distintos volúmenes',
      'Comparación de formatos',
      'Consulta comercial rápida',
    ],
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
