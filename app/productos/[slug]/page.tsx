import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react'
import { categoryDetails, productCategories } from '../../products-data'

type ProductPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return productCategories.map((category) => ({ slug: category.slug }))
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params
  const category = productCategories.find((item) => item.slug === slug)

  if (!category) {
    return {
      title: 'Producto | La Casa del Panadero',
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

  if (!category) {
    return null
  }

  const details = categoryDetails[slug]

  return (
    <main className="category-page">
      <section className="category-hero">
        <div className="container category-hero-inner">
          <Link className="back-link" href="/">
            <ArrowLeft size={18} />
            Volver al inicio
          </Link>
          <p className="eyebrow">Categoría de productos</p>
          <h1>{category.name}</h1>
          <p className="lead">{category.summary}</p>
        </div>
      </section>

      <section className="section">
        <div className="container category-grid">
          <div className="category-copy">
            <h2>Landing lista para cargar productos reales</h2>
            <p>{details.intro}</p>
            <div className="category-list">
              {details.bullets.map((bullet) => (
                <div className="category-list-item" key={bullet}>
                  <CheckCircle2 size={18} />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
            <div className="hero-actions">
              <a className="btn btn-primary" href="https://wa.me/59894009370" target="_blank" rel="noreferrer">
                Consultar esta categoría <MessageCircle size={18} />
              </a>
              <Link className="btn btn-outline" href="/#contacto">
                Pedir presupuesto <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <div className="category-panel">
            <p className="eyebrow">Próxima etapa</p>
            <h3>Qué conviene cargar acá</h3>
            <ul>
              <li>Nombre del producto</li>
              <li>Foto o imagen técnica</li>
              <li>Descripción breve</li>
              <li>Marca</li>
              <li>Consulta por WhatsApp</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
