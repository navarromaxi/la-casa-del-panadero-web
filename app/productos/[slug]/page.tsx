import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ChevronRight, MessageCircle } from 'lucide-react'
import { categoryDetails, productCategories, productCategoryChildren } from '../../products-data'

type ProductPageProps = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return productCategories.map((category) => ({ slug: category.slug }))
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

  if (!category) {
    return null
  }

  const details = categoryDetails[slug]
  const featuredProduct = details?.featuredProduct
  const childCategories = productCategoryChildren[slug] ?? []

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
            <p>{details.intro}</p>
          </div>

          <div className="category-panel">
            <p className="eyebrow">Consulta comercial</p>
            <h3>Te asesoramos según tu producción</h3>
            <p>
              Si querés conocer disponibilidad, capacidades o precio, podés escribirnos y te
              orientamos según el tipo de masa, volumen y espacio de trabajo.
            </p>
            <ul>
              <li>Ventas por WhatsApp</li>
              <li>Asesoramiento para elegir capacidad</li>
              <li>Coordinación de presupuesto</li>
            </ul>
            <a
              className="btn btn-primary"
              href="https://wa.me/59894009370"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={18} /> Consultar este producto
            </a>
          </div>
        </div>
      </section>

      {featuredProduct ? (
        <section className="section alt">
          <div className="container product-detail-layout">
            <div className="product-visual-card">
              <div className="product-image-frame">
                <Image
                  src={featuredProduct.image}
                  alt={featuredProduct.imageAlt}
                  width={1280}
                  height={1707}
                  className="product-main-image"
                  priority
                />
              </div>
            </div>

            <div className="product-detail-copy">
              {featuredProduct.badge ? <p className="eyebrow">{featuredProduct.badge}</p> : null}
              <h2>
                {featuredProduct.brand} {featuredProduct.model}
              </h2>
              <p className="product-model-line">{featuredProduct.name}</p>
              <p>{featuredProduct.shortDescription}</p>

              {featuredProduct.capacities?.length ? (
                <div className="product-capacities">
                  {featuredProduct.capacities.map((capacity) => (
                    <span key={capacity}>{capacity}</span>
                  ))}
                </div>
              ) : null}

              <div className="product-feature-list">
                {featuredProduct.highlights.map((highlight) => (
                  <div className="product-feature-item" key={highlight}>
                    <span />
                    <p>{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="container product-description-grid">
            <div className="product-description-card">
              <p className="eyebrow">Ficha traducida</p>
              <h3>Resumen del equipo</h3>
              {featuredProduct.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="product-description-card">
              <p className="eyebrow">{featuredProduct.specsTitle ?? 'Características'}</p>
              <h3>Datos principales</h3>
              <ul className="product-spec-list">
                {featuredProduct.specs.map((spec) => (
                  <li key={spec}>{spec}</li>
                ))}
              </ul>

              <p className="eyebrow secondary-eyebrow">{featuredProduct.notesTitle ?? 'Aplicaciones'}</p>
              <ul className="product-spec-list">
                {featuredProduct.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ) : null}

      {childCategories.length ? (
        <section className="section alt">
          <div className="container">
            <p className="eyebrow">Accesos rápidos</p>
            <h2>Explorá las líneas de maquinaria especial</h2>
            <div className="special-category-grid">
              {childCategories.map((child) => (
                <Link className="special-category-card" key={child.slug} href={`/productos/${child.slug}`}>
                  <div>
                    <span>{child.name}</span>
                    <small>{child.summary}</small>
                  </div>
                  <span className="special-category-link">
                    Ver landing <ChevronRight size={16} />
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
