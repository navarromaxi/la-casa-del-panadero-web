import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ChevronRight, MessageCircle } from 'lucide-react'
import {
  categoryDetails,
  getCategoryHref,
  isBrowsableCategory,
  productCategories,
  productCategoryChildren,
  salesWhatsAppUrl,
} from '../../products-data'

type ProductPageProps = {
  params: Promise<{
    slug: string
  }>
}

const fallbackBullets = [
  'Asesoramiento comercial según producción, espacio y necesidad operativa.',
  'Base preparada para sumar modelos, marcas y fichas técnicas.',
  'Consulta directa para avanzar con una propuesta concreta.',
]

export async function generateStaticParams() {
  return productCategories.filter(isBrowsableCategory).map((category) => ({ slug: category.slug }))
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params
  const category = productCategories.find((item) => item.slug === slug)

  if (!category) {
    return {
      title: 'Productos | La Casa del Panadero',
    }
  }

  return {
    title: `${category.name} | La Casa del Panadero`,
    description: category.summary,
  }
}

export default async function ProductCategoryPage({ params }: ProductPageProps) {
  const { slug } = await params
  const category = productCategories.find((item) => item.slug === slug)

  if (!category || !isBrowsableCategory(category)) {
    return null
  }

  const details = categoryDetails[slug]
  const childCategories = (productCategoryChildren[slug] ?? []).filter(isBrowsableCategory)

  return (
    <main className="category-page">
      <section className="category-hero">
        <div className="container category-hero-inner">
          <Link className="back-link" href="/#productos">
            <ArrowLeft size={18} />
            Volver a productos
          </Link>
          <p className="eyebrow">Categoría</p>
          <h1>{category.name}</h1>
          <p className="lead">{category.summary}</p>
        </div>
      </section>

      <section className="section">
        <div className="container category-grid">
          <div className="category-copy">
            <p className="eyebrow">Descripción general</p>
            <h2>{category.name} para producción profesional</h2>
            <p>{details?.intro ?? category.summary}</p>
            {details?.note ? <p>{details.note}</p> : null}
          </div>

          <div className="category-panel">
            <p className="eyebrow">Consulta comercial</p>
            <h3>Te asesoramos según tu producción</h3>
            <p>
              Si querés conocer disponibilidad, capacidades o alternativas dentro de esta categoría,
              escribinos y te orientamos según tu necesidad real.
            </p>
            <ul>
              {(details?.bullets ?? fallbackBullets).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a className="btn btn-primary" href={salesWhatsAppUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={18} /> Consultar esta categoría
            </a>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container product-description-grid">
          <div className="product-description-card">
            <p className="eyebrow">Cómo lo trabajamos</p>
            <h3>Una landing simple, clara y lista para crecer</h3>
            <p>
              Dejamos esta categoría con una estructura limpia para poder sumar después modelos,
              marcas, fichas, fotos y comparativas sin volver a reorganizar toda la navegación.
            </p>
            <p>
              De esta forma ya queda publicada la categoría dentro del menú y también una base
              ordenada para avanzar con el contenido definitivo.
            </p>
          </div>

          <div className="product-description-card">
            <p className="eyebrow">Siguiente paso</p>
            <h3>Completamos la ficha según prioridad comercial</h3>
            <ul className="product-spec-list">
              <li>Agregar marcas o modelos destacados.</li>
              <li>Sumar fichas técnicas y aplicaciones reales.</li>
              <li>Incorporar fotos cuando definamos el material visual.</li>
            </ul>
          </div>
        </div>
      </section>

      {childCategories.length ? (
        <section className="section alt">
          <div className="container">
            <p className="eyebrow">Subcategorías</p>
            <h2>Explorá las líneas disponibles dentro de {category.name.toLowerCase()}</h2>
            <div className="special-category-grid">
              {childCategories.map((child) => (
                <Link className="special-category-card" key={child.slug} href={getCategoryHref(child)}>
                  <div>
                    <span>{child.name}</span>
                    <small>{child.summary}</small>
                  </div>
                  <span className="special-category-link">
                    Ver categoría <ChevronRight size={16} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  )
}
