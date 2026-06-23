'use client'

import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import type { GalleryItem } from './products-data'

type UtensiliosCarouselProps = {
  items: readonly GalleryItem[]
}

export function UtensiliosCarousel({ items }: UtensiliosCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeItem = items[activeIndex]

  const goPrev = () => {
    setActiveIndex((value) => (value === 0 ? items.length - 1 : value - 1))
  }

  const goNext = () => {
    setActiveIndex((value) => (value === items.length - 1 ? 0 : value + 1))
  }

  return (
    <div className="utensilios-hero-slider">
      <div className="utensilios-hero-slide">
        <div className="utensilios-hero-overlay" />

        <div className="utensilios-hero-content">
          <div className="utensilios-hero-copy">
            <p className="eyebrow">Utensilios</p>
            <h2>{activeItem.title}</h2>
            <p>{activeItem.caption}</p>
            {activeItem.buttonLabel ? (
              <a
                className="utensilios-hero-button"
                href={activeItem.href ?? 'https://wa.me/59894009370'}
                target="_blank"
                rel="noreferrer"
              >
                {activeItem.buttonLabel}
              </a>
            ) : null}
          </div>

          <div className="utensilios-hero-media">
            <button
              type="button"
              className="utensilios-hero-nav utensils-hero-nav-left"
              onClick={goPrev}
              aria-label="Ver slide anterior"
            >
              <ChevronLeft size={24} />
            </button>
            {activeItem.image ? (
              <Image
                src={activeItem.image}
                alt={activeItem.title}
                width={900}
                height={1200}
                className="utensilios-hero-image utensils-hero-image-primary"
                priority
              />
            ) : null}
            <button
              type="button"
              className="utensilios-hero-nav utensils-hero-nav-right"
              onClick={goNext}
              aria-label="Ver slide siguiente"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="utensilios-hero-dots">
          {items.map((item, index) => (
            <button
              key={`${item.title}-${index}`}
              type="button"
              className={`utensilios-hero-dot${index === activeIndex ? ' is-active' : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Ir al slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
