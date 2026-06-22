import type { Metadata } from 'next'
import { Bricolage_Grotesque, Manrope } from 'next/font/google'
import './globals.css'
import { SiteHeader } from './site-header'

const headingFont = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-heading',
})

const bodyFont = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'La Casa del Panadero | Equipamiento y servicio técnico para panaderías',
  description:
    'Desde 1989 abasteciendo a panaderías, confiterías y empresas gastronómicas. Venta de maquinaria, productos de cuadra, service oficial y asesoramiento técnico.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-UY">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        <SiteHeader />
        {children}
      </body>
    </html>
  )
}
