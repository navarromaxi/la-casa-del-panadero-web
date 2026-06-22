'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { productCategories } from './products-data'

export function SiteHeader() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  const activeCategory = useMemo(() => {
    return productCategories.find((category) => pathname === `/productos/${category.slug}`)?.slug ?? null
  }, [pathname])

  useEffect(() => {
    setMenuOpen(false)
    setProductsOpen(Boolean(activeCategory))
  }, [pathname, activeCategory])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <header className="topbar">
        <div className="container topbar-inner">
          <span>Showroom: Fernández Crespo 2099 · Lunes a viernes de 8 a 17 hs</span>
          <div>
            <a href="tel:29248307">2924 8307</a>
            <span> · </span>
            <a href="mailto:info@lacasadelpanadero.com.uy">info@lacasadelpanadero.com.uy</a>
          </div>
        </div>
      </header>

      <nav className="navbar">
        <div className="container nav-inner">
          <Link className="brand" href="/">
            <Image
              src="/logo-la-casa-del-panadero.png"
              alt="La Casa del Panadero"
              width={228}
              height={68}
              priority
            />
          </Link>

          <div className="nav-links">
            <a href="/#propuesta">Propuesta</a>
            <div className="nav-dropdown">
              <a className={activeCategory ? 'nav-link-active' : undefined} href="/#productos">
                Productos <ChevronDown size={16} />
              </a>
              <div className="nav-dropdown-menu">
                {productCategories.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/productos/${category.slug}`}
                    className={activeCategory === category.slug ? 'nav-dropdown-item-active' : undefined}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
            <a href="/#service">Service</a>
            <a href="/#historia">Historia</a>
            <a href="/#contacto">Contacto</a>
          </div>

          <div className="nav-actions">
            <a className="btn btn-dark nav-whatsapp" href="https://wa.me/59894009370" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <button
              type="button"
              className={`mobile-menu-toggle${menuOpen ? ' is-open' : ''}`}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              onClick={() => setMenuOpen((value) => !value)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {menuOpen ? <button type="button" className="mobile-nav-backdrop" aria-label="Cerrar menú" onClick={() => setMenuOpen(false)} /> : null}

        {menuOpen ? (
          <div className="mobile-nav">
            <div className="container mobile-nav-inner">
              <a href="/#propuesta">Propuesta</a>
              <button
                type="button"
                className={`mobile-submenu-toggle${productsOpen ? ' is-open' : ''}`}
                aria-expanded={productsOpen}
                onClick={() => setProductsOpen((value) => !value)}
              >
                <span>Productos</span>
                <ChevronDown size={16} className={productsOpen ? 'is-open' : ''} />
              </button>
              {productsOpen ? (
                <div className="mobile-submenu">
                  {productCategories.map((category) => (
                    <Link
                      key={category.slug}
                      href={`/productos/${category.slug}`}
                      className={activeCategory === category.slug ? 'mobile-submenu-item-active' : undefined}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              ) : null}
              <a href="/#service">Service</a>
              <a href="/#historia">Historia</a>
              <a href="/#contacto">Contacto</a>
              <a className="btn btn-dark mobile-whatsapp" href="https://wa.me/59894009370" target="_blank" rel="noreferrer">
                WhatsApp ventas
              </a>
            </div>
          </div>
        ) : null}
      </nav>
    </>
  )
}
