'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import {
  getCategoryHref,
  productCategories,
  productCategoryChildren,
  salesWhatsAppUrl,
  topLevelProductCategories,
} from './products-data'

const INSTAGRAM_URL = 'https://www.instagram.com/lacasadelpanaderouy/'

function InstagramGlyph({ size = 16 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4.25" />
      <circle cx="18" cy="6" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function WhatsAppGlyph({ size = 16 }: { size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.07 0C5.5 0 .16 5.34.16 11.91c0 2.1.55 4.15 1.6 5.97L0 24l6.31-1.66a11.86 11.86 0 0 0 5.76 1.47h.01c6.57 0 11.91-5.34 11.91-11.91 0-3.18-1.24-6.17-3.47-8.42Zm-8.45 18.3h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.75.99 1-3.65-.24-.37a9.88 9.88 0 0 1-1.52-5.26c0-5.46 4.44-9.9 9.91-9.9 2.65 0 5.14 1.03 7.02 2.9a9.85 9.85 0 0 1 2.89 7.01c0 5.47-4.44 9.91-9.89 9.91Zm5.43-7.39c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.19.3-.77.96-.94 1.16-.17.2-.35.22-.65.08-.3-.15-1.27-.47-2.42-1.5-.89-.79-1.49-1.76-1.67-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.21-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.52.08-.79.37-.27.3-1.04 1.01-1.04 2.46s1.06 2.86 1.21 3.06c.15.2 2.08 3.18 5.05 4.46.71.31 1.26.49 1.69.63.71.23 1.35.2 1.86.12.57-.08 1.77-.72 2.02-1.41.25-.69.25-1.28.17-1.41-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  )
}

export function SiteHeader() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [openMobileParentSlug, setOpenMobileParentSlug] = useState<string | null>(null)

  const activeCategory = useMemo(() => {
    return productCategories.find((category) => pathname === `/productos/${category.slug}`) ?? null
  }, [pathname])

  const activeCategorySlug = activeCategory?.slug ?? null
  const activeParentSlug = activeCategory?.parentSlug ?? activeCategory?.slug ?? null

  const closeMobileMenu = () => {
    setMenuOpen(false)
    setProductsOpen(Boolean(activeCategorySlug))
    setOpenMobileParentSlug(activeParentSlug)
  }

  useEffect(() => {
    setMenuOpen(false)
    setProductsOpen(Boolean(activeCategorySlug))
    setOpenMobileParentSlug(activeParentSlug)
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
          <div className="topbar-meta">
            <div className="topbar-copy">
              <span>Fernandez Crespo 2099, Montevideo</span>
              <span>Lunes a viernes de 8 a 17 hs</span>
            </div>
            <div className="topbar-social">
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram">
                <InstagramGlyph size={16} />
              </a>
              <a href={salesWhatsAppUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <WhatsAppGlyph size={16} />
              </a>
            </div>
          </div>
          <div className="topbar-line" />
        </div>
      </header>

      <nav className="navbar">
        <div className="container nav-inner">
          <Link className="brand" href="/">
            <Image
              src="/logo-la-casa-del-panadero.png"
              alt="La Casa del Panadero"
              width={320}
              height={96}
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
                    if (category.external) {
                      return (
                        <a
                          key={category.slug}
                          href={getCategoryHref(category)}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {category.name}
                        </a>
                      )
                    }

                    return (
                      <Link
                        key={category.slug}
                        href={getCategoryHref(category)}
                        className={activeCategorySlug === category.slug ? 'nav-dropdown-item-active' : undefined}
                      >
                        {category.name}
                      </Link>
                    )
                  }

                  return (
                    <div className="nav-subdropdown" key={category.slug}>
                      <Link
                        href={getCategoryHref(category)}
                        className={isParentActive ? 'nav-dropdown-item-active nav-subdropdown-trigger' : 'nav-subdropdown-trigger'}
                      >
                        <span>{category.name}</span>
                        <ChevronRight size={15} />
                      </Link>
                      <div className="nav-subdropdown-menu">
                        {children.map((child) =>
                          child.external ? (
                            <a key={child.slug} href={getCategoryHref(child)} target="_blank" rel="noreferrer">
                              {child.name}
                            </a>
                          ) : (
                            <Link
                              key={child.slug}
                              href={getCategoryHref(child)}
                              className={activeCategorySlug === child.slug ? 'nav-dropdown-item-active' : undefined}
                            >
                              {child.name}
                            </Link>
                          ),
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <a href="/#service">Service tecnico</a>
            <a href="/#historia">Nuestra empresa</a>
            <a href="/#contacto">Contacto</a>
          </div>

          <div className="nav-actions">
            <button
              type="button"
              className={`mobile-menu-toggle${menuOpen ? ' is-open' : ''}`}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Cerrar menu' : 'Abrir menu'}
              onClick={() => setMenuOpen((value) => !value)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {menuOpen ? (
          <button
            type="button"
            className="mobile-nav-backdrop"
            aria-label="Cerrar menu"
            onClick={() => setMenuOpen(false)}
          />
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
                    const isOpen = openMobileParentSlug === category.slug

                    if (!children.length) {
                      if (category.external) {
                        return (
                          <a
                            key={category.slug}
                            href={getCategoryHref(category)}
                            target="_blank"
                            rel="noreferrer"
                            onClick={closeMobileMenu}
                          >
                            {category.name}
                          </a>
                        )
                      }

                      return (
                        <Link
                          key={category.slug}
                          href={getCategoryHref(category)}
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
                            href={getCategoryHref(category)}
                            className={isParentActive ? 'mobile-submenu-item-active mobile-submenu-parent-link' : 'mobile-submenu-parent-link'}
                            onClick={closeMobileMenu}
                          >
                            {category.name}
                          </Link>
                          <button
                            type="button"
                            className={`mobile-submenu-toggle mobile-submenu-nested-toggle${isOpen ? ' is-open' : ''}`}
                            aria-expanded={isOpen}
                            onClick={() =>
                              setOpenMobileParentSlug((value) => (value === category.slug ? null : category.slug))
                            }
                          >
                            <ChevronDown size={16} className={isOpen ? 'is-open' : ''} />
                          </button>
                        </div>
                        {isOpen ? (
                          <div className="mobile-submenu mobile-submenu-nested">
                            {children.map((child) =>
                              child.external ? (
                                <a
                                  key={child.slug}
                                  href={getCategoryHref(child)}
                                  target="_blank"
                                  rel="noreferrer"
                                  onClick={closeMobileMenu}
                                >
                                  {child.name}
                                </a>
                              ) : (
                                <Link
                                  key={child.slug}
                                  href={getCategoryHref(child)}
                                  className={activeCategorySlug === child.slug ? 'mobile-submenu-item-active' : undefined}
                                  onClick={closeMobileMenu}
                                >
                                  {child.name}
                                </Link>
                              ),
                            )}
                          </div>
                        ) : null}
                      </div>
                    )
                  })}
                </div>
              ) : null}
              <a href="/#service" onClick={closeMobileMenu}>
                Service tecnico
              </a>
              <a href="/#historia" onClick={closeMobileMenu}>
                Nuestra empresa
              </a>
              <a href="/#contacto" onClick={closeMobileMenu}>
                Contacto
              </a>
              <div className="mobile-social-row">
                <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram">
                  <InstagramGlyph size={18} />
                  Instagram
                </a>
                <a href={salesWhatsAppUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                  <WhatsAppGlyph size={18} />
                  WhatsApp
                </a>
              </div>
              <a className="btn btn-dark mobile-whatsapp" href={salesWhatsAppUrl} target="_blank" rel="noreferrer">
                WhatsApp ventas
              </a>
            </div>
          </div>
        ) : null}
      </nav>
    </>
  )
}
