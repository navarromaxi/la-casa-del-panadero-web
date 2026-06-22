'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import type { GalleryItem } from './products-data'

type UtensiliosCarouselProps = {
  items: readonly GalleryItem[]
}

export function UtensiliosCarousel({ items }: UtensiliosCarouselProps) {
  const [startIndex, setStartIndex] = useState(0)
  const visibleCount = 2

  const canGoPrev = startIndex > 0
  const canGoNext = startIndex + visibleCount < items.length
  const visibleItems = items.slice(startIndex, startIndex + visibleCount)

  return (
    <div className="utensilios-carousel">
      <div className="utensilios-carousel-header">
        <div>
          <p className="eyebrow">Galería</p>
          <h2>Algunos utensilios y líneas que podés consultar</h2>
        </div>
        <div className="utensilios-carousel-actions">
          <button
            type="button"
            className="utensilios-carousel-button"
            onClick={() => setStartIndex((value) => Math.max(0, value - visibleCount))}
            disabled={!canGoPrev}
            aria-label="Ver fotos anteriores"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            className="utensilios-carousel-button"
            onClick={() => setStartIndex((value) => Math.min(items.length - visibleCount, value + visibleCount))}
            disabled={!canGoNext}
            aria-label="Ver fotos siguientes"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="utensilios-carousel-track">
        {visibleItems.map((item, index) => (
          <article className="utensilios-slide" key={`${item.title}-${index}`}>
            <div className="utensilios-slide-media">
              <div className="utensilios-slide-placeholder">
                <span>{item.title}</span>
              </div>
            </div>
            <div className="utensilios-slide-copy">
              <strong>{item.title}</strong>
              <p>{item.caption}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
