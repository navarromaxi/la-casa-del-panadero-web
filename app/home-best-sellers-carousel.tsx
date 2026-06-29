'use client'

import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'

type HomeCarouselSlide = {
  eyebrow: string
  title: string
  text: string
  cta: string
  href: string
  external?: boolean
  products: Array<{
    name: string
    image: string
    alt: string
  }>
}

const slides: HomeCarouselSlide[] = [
  {
    eyebrow: 'Más vendidos',
    title: 'Amasado, sobado y ritmo de trabajo',
    text: 'Equipos elegidos por panaderías que necesitan producción constante y respaldo técnico.',
    cta: 'Ver productos',
    href: '#productos',
    products: [
      { name: 'Amasadora espiral', image: '/amasadora-start-plus.jpg', alt: 'Amasadora espiral industrial' },
      { name: 'Sobadora pesada', image: '/sobadora-pesada.jpg', alt: 'Sobadora pesada industrial' },
    ],
  },
  {
    eyebrow: 'Más vendidos',
    title: 'Batido, dosificado y pastelería',
    text: 'Una selección pensada para laboratorios y cocinas de producción que buscan practicidad.',
    cta: 'Consultar ventas',
    href: 'https://wa.me/59894009370',
    external: true,
    products: [
      { name: 'Batidora MR EVO', image: '/batidora-mr-evo.jpg', alt: 'Batidora planetaria MR EVO' },
      { name: 'Depositadora', image: '/multidrop.jpg', alt: 'Depositadora multidrop' },
    ],
  },
  {
    eyebrow: 'Más vendidos',
    title: 'Formado y corte para salida comercial',
    text: 'Soluciones buscadas por negocios que quieren uniformidad, velocidad y mejor terminación.',
    cta: 'Ver categorías',
    href: '#productos',
    products: [
      { name: 'Armadora de pan', image: '/armadora-de-pan.jpg', alt: 'Armadora automática de pan' },
      { name: 'Cortadora JAC', image: '/cortadora-jac.jpeg', alt: 'Cortadora de pan JAC' },
    ],
  },
  {
    eyebrow: 'Más vendidos',
    title: 'Laminado y líneas especiales',
    text: 'Equipos de alta consulta para quienes buscan crecer, diversificar y profesionalizar producción.',
    cta: 'Pedir asesoramiento',
    href: 'https://wa.me/59894009370',
    external: true,
    products: [
      { name: 'Laminadora', image: '/laminadora-beta-tower-660-real.jpg', alt: 'Laminadora industrial' },
      { name: 'Grupo croissant', image: '/grupo-croissant-avant-530.png', alt: 'Grupo croissant industrial' },
    ],
  },
]

export function HomeBestSellersCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length)
    }, 5200)

    return () => window.clearInterval(timer)
  }, [])

  const goPrev = () => {
    setActiveIndex((current) => (current === 0 ? slides.length - 1 : current - 1))
  }

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % slides.length)
  }

  return (
    <section className="home-carousel" aria-label="Artículos más vendidos">
      <div className="home-carousel-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {slides.map((slide) => (
          <article className="home-carousel-slide" key={slide.title}>
            <div className="home-carousel-copy">
              <p className="eyebrow">{slide.eyebrow}</p>
              <h2>{slide.title}</h2>
              <p>{slide.text}</p>
              <a
                className="home-carousel-cta"
                href={slide.href}
                target={slide.external ? '_blank' : undefined}
                rel={slide.external ? 'noreferrer' : undefined}
              >
                {slide.cta}
              </a>
            </div>

            <div className="home-carousel-products" aria-hidden="true">
              {slide.products.map((product, index) => (
                <div className={`home-carousel-product-card home-carousel-product-${index + 1}`} key={product.name}>
                  <Image
                    src={product.image}
                    alt={product.alt}
                    width={1100}
                    height={1100}
                    className="home-carousel-image"
                    priority={activeIndex === 0}
                  />
                  <span>{product.name}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>

      <button
        type="button"
        className="home-carousel-nav home-carousel-nav-left"
        aria-label="Slide anterior"
        onClick={goPrev}
      >
        <ChevronLeft size={20} />
      </button>

      <button
        type="button"
        className="home-carousel-nav home-carousel-nav-right"
        aria-label="Slide siguiente"
        onClick={goNext}
      >
        <ChevronRight size={20} />
      </button>

      <div className="home-carousel-dots" aria-label="Paginación del carrusel">
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            className={`home-carousel-dot${index === activeIndex ? ' is-active' : ''}`}
            aria-label={`Ir al slide ${index + 1}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  )
}
