'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { productCategories, productCategoryChildren, topLevelProductCategories } from './products-data'

export function SiteHeader() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [specialProductsOpen, setSpecialProductsOpen] = useState(false)

  const activeCategory = useMemo(() => {
    return productCategories.find((category) => pathname === `/productos/${category.slug}`) ?? null
  }, [pathname])

  const activeCategorySlug = activeCategory?.slug ?? null
  const activeParentSlug = activeCategory?.parentSlug ?? activeCategory?.slug ?? null
  const specialChildren = productCategoryChildren['maquinaria-especial'] ?? []

  const closeMobileMenu = () => {
    setMenuOpen(false)
    setProductsOpen(Boolean(activeCategorySlug))
    setSpecialProductsOpen(activeParentSlug === 'maquinaria-especial')
  }

  useEffect(() => {
    setMenuOpen(false)
    setProductsOpen(Boolean(activeCategorySlug))
    setSpecialProductsOpen(activeParentSlug === 'maquinaria-especial')
  }, [pathname, activeCategorySlug, activeParentSlug])

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
              <a className={activeCategorySlug ? 'nav-link-active' : undefined} href="/#productos">
                Productos <ChevronDown size={16} />
              </a>
              <div className="nav-dropdown-menu">
                {topLevelProductCategories.map((category) => {
                  const children = productCategoryChildren[category.slug] ?? []
                  const isParentActive = activeParentSlug === category.slug

                  if (!children.length) {
                    return (
                      <Link
                        key={category.slug}
                        href={`/productos/${category.slug}`}
                        className={activeCategorySlug === category.slug ? 'nav-dropdown-item-active' : undefined}
                      >
                        {category.name}
                      </Link>
                    )
                  }

                  return (
                    <div className="nav-subdropdown" key={category.slug}>
                      <Link
                        href={`/productos/${category.slug}`}
                        className={isParentActive ? 'nav-dropdown-item-active nav-subdropdown-trigger' : 'nav-subdropdown-trigger'}
                      >
                        <span>{category.name}</span>
                        <ChevronRight size={15} />
                      </Link>
                      <div className="nav-subdropdown-menu">
                        {children.map((child) => (
                          <Link
                            key={child.slug}
                            href={`/productos/${child.slug}`}
                            className={activeCategorySlug === child.slug ? 'nav-dropdown-item-active' : undefined}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )
                })}
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

        {menuOpen ? (
          <button type="button" className="mobile-nav-backdrop" aria-label="Cerrar menú" onClick={() => setMenuOpen(false)} />
        ) : null}

        {menuOpen ? (
          <div className="mobile-nav">
            <div className="container mobile-nav-inner">
              <a href="/#propuesta" onClick={closeMobileMenu}>
                Propuesta
              </a>
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
                  {topLevelProductCategories.map((category) => {
                    const children = productCategoryChildren[category.slug] ?? []
                    const isParentActive = activeParentSlug === category.slug

                    if (!children.length) {
                      return (
                        <Link
                          key={category.slug}
                          href={`/productos/${category.slug}`}
                          className={activeCategorySlug === category.slug ? 'mobile-submenu-item-active' : undefined}
                          onClick={closeMobileMenu}
                        >
                          {category.name}
                        </Link>
                      )
                    }

                    return (
                      <div className="mobile-submenu-group" key={category.slug}>
                        <div className="mobile-submenu-parent-row">
                          <Link
                            href={`/productos/${category.slug}`}
                            className={isParentActive ? 'mobile-submenu-item-active mobile-submenu-parent-link' : 'mobile-submenu-parent-link'}
                            onClick={closeMobileMenu}
                          >
                            {category.name}
                          </Link>
                          <button
                            type="button"
                            className={`mobile-submenu-toggle mobile-submenu-nested-toggle${specialProductsOpen ? ' is-open' : ''}`}
                            aria-expanded={specialProductsOpen}
                            onClick={() => setSpecialProductsOpen((value) => !value)}
                          >
                            <ChevronDown size={16} className={specialProductsOpen ? 'is-open' : ''} />
                          </button>
                        </div>
                        {specialProductsOpen ? (
                          <div className="mobile-submenu mobile-submenu-nested">
                            {children.map((child) => (
                              <Link
                                key={child.slug}
                                href={`/productos/${child.slug}`}
                                className={activeCategorySlug === child.slug ? 'mobile-submenu-item-active' : undefined}
                                onClick={closeMobileMenu}
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    )
                  })}
                </div>
              ) : null}
              <a href="/#service" onClick={closeMobileMenu}>
                Service
              </a>
              <a href="/#historia" onClick={closeMobileMenu}>
                Historia
              </a>
              <a href="/#contacto" onClick={closeMobileMenu}>
                Contacto
              </a>
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
