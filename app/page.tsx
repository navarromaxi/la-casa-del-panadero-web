import {
  ArrowRight,
  ChevronRight,
  Clock3,
  CreditCard,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Settings,
  ShieldCheck,
  Truck,
  Wrench,
} from 'lucide-react'
import Image from 'next/image'
import { ContactForm } from './contact-form'
import { topLevelProductCategories } from './products-data'

const brands = [
  { name: 'Bassanina Baking', src: '/bassanina-baking.png', width: 210, height: 84, href: 'https://www.bassanina.com/en-us/' },
  { name: 'LP Group', src: '/lp-group.png', width: 180, height: 78, href: 'https://www.lpgroup.it/es/' },
  { name: 'RAM', src: '/ram.png', width: 180, height: 84, href: 'https://www.ram.com.pe/' },
  { name: 'Delfin', src: '/delfin.png', width: 190, height: 78, href: 'https://www.delfingroupco.com.pe/' },
  {
    name: 'JAC',
    src: '/jac.png',
    width: 126,
    height: 126,
    href: 'https://jac.com.uy/empresa?gad_source=1&gad_campaignid=2085060885&gbraid=0AAAAACzhLakzzPK-G6a39CkqQobfbUTil&gclid=Cj0KCQjwxvjRBhC2ARIsAI7KJa154yTORVUp8uQGwr68uSzEMNtifW0PaeLYqOvIsAcqsH5NUY_4LUIaAll8EALw_wcB',
  },
  { name: 'Bake Off Italiana', src: '/bake-off.png', width: 210, height: 84, href: 'https://gastronomia.crandon.edu.uy/tag/bake-off-uruguay/' },
  { name: 'Mamoli', src: '/mamoli.png', width: 180, height: 90, href: 'https://www.mamoli.com/' },
  { name: 'Ferneto', src: '/ferneto.png', width: 210, height: 84, href: 'https://ferneto.com/es/bienvenido-ferneto/' },
  { name: 'Ciberpan', src: '/ciberpan.png', width: 190, height: 78, href: 'https://ciberpan.com/' },
  { name: 'Cool Water', src: '/cool-water.png', width: 210, height: 78, href: 'https://industrialcoldwater.cl/' },
  { name: 'Rueda Maquinaria', src: '/rueda-maquinaria.png', width: 200, height: 78, href: 'https://ruedamaquinaria.com/es/' },
  { name: 'Colip', src: '/colip.png', width: 190, height: 78, href: 'https://www.colip.com/es/' },
]

const featuredBrands = brands.slice(0, 5)
const moreBrands = brands.slice(5)

const highlights = [
  {
    title: 'Ofertas del mes',
    text: 'Espacio para destacar una promoción puntual o una línea de equipos que quieran empujar.',
  },
  {
    title: 'Equipos recomendados',
    text: 'Bloque para rotar maquinaria, productos de cuadra o líneas destacadas con foco comercial.',
  },
  {
    title: 'Nueva financiación',
    text: 'Tarjeta, cuotas o condiciones especiales que quieran anunciar sin tocar toda la home.',
  },
]

const advantages = [
  {
    icon: <Truck size={20} />,
    title: 'Entrega ágil en Montevideo',
    text: 'Envíos gratis con pago anticipado y coordinación rápida para comercios.',
  },
  {
    icon: <Wrench size={20} />,
    title: 'Service técnico propio',
    text: 'Soporte postventa, mantenimiento y taller especializado para tus equipos.',
  },
  {
    icon: <CreditCard size={20} />,
    title: 'Opciones de pago claras',
    text: 'Contado, transferencia, cheques, crédito italiano y tarjetas hasta en 6 pagos sin recargo.',
  },
  {
    icon: <ShieldCheck size={20} />,
    title: 'Marcas y respaldo',
    text: 'Asesoramiento honesto para elegir maquinaria según producción y presupuesto.',
  },
]

const process = [
  'Contanos qué necesitás para tu panadería, confitería o cocina de producción.',
  'Te orientamos sobre equipos y productos de cuadra según tu escala.',
  'Coordinamos presupuesto, entrega y soporte técnico si el equipo lo requiere.',
]

const showcaseItems = [
  {
    title: 'Equipamiento para abrir, renovar o ampliar la producción.',
    text: 'Te ayudamos a definir maquinaria según el tamaño de tu operación, el ritmo de trabajo y la etapa en la que está tu negocio.',
  },
  {
    title: 'Productos de cuadra, insumos y accesorios de uso diario.',
    text: 'Centralizamos soluciones para el funcionamiento cotidiano con insumos y complementos necesarios para no frenar la producción.',
  },
  {
    title: 'Asistencia técnica cuando el equipo necesita mantenimiento o ajuste.',
    text: 'Nuestro servicio técnico acompaña la postventa con diagnóstico, mantenimiento y respuesta cuando la operación necesita continuidad.',
  },
]

const storyIntro = [
  'En La Casa del Panadero llevamos más de 35 años acompañando los sueños, desafíos y el crecimiento de quienes apuestan cada día por el mundo de la panificación y la gastronomía.',
  'Nuestra historia comenzó en 1989, con una convicción muy clara: brindar soluciones confiables y de calidad a través de la reparación de maquinaria industrial y semiindustrial. Con esfuerzo, dedicación y una fuerte vocación de servicio, fuimos dando nuestros primeros pasos fabricando equipos nacionales como sobadoras, orgullosos de contribuir al desarrollo de la industria uruguaya.',
]

const storyBody = [
  'La confianza de nuestros clientes fue el motor que impulsó nuestro crecimiento. Gracias a ella, ampliamos nuestras fronteras, incorporamos nuevas tecnologías y establecimos alianzas estratégicas con reconocidas marcas internacionales, acercando al mercado local equipamiento de primer nivel.',
  'Hoy somos una empresa consolidada y referente en el sector, especializada en la comercialización, instalación y servicio técnico de maquinaria para panaderías, confiterías, supermercados, plantas industriales y emprendimientos gastronómicos en general. Además, contamos con la representación de destacadas marcas del mundo, entre ellas la prestigiosa firma italiana Bassanina, reconocida por su innovación y excelencia.',
  'Pero más allá de los equipos que ofrecemos, creemos que nuestro mayor valor está en las personas. En escuchar, asesorar y acompañar a cada cliente como si su proyecto fuera también parte del nuestro. Porque entendemos que detrás de cada panadería, confitería, supermercado, panificadora y cada emprendimiento, hay historias de trabajo, esfuerzo y sueños por cumplir.',
  'La calidad, la atención personalizada, el compromiso y el respaldo técnico han sido los pilares que nos han acompañado durante todos estos años y que continúan guiando nuestro camino.',
  'En La Casa del Panadero no solo vendemos maquinaria: construimos relaciones de confianza, brindamos soluciones y seguimos trabajando, como desde el primer día, para estar al lado de quienes hacen crecer esta gran industria.',
]

const storyQuote =
  '"No nos vendieron solo una máquina; nos dieron respaldo, experiencia y la tranquilidad de saber que siempre están cuando los necesitamos."'

const storySignoff = 'Ese es, y seguirá siendo, nuestro mayor orgullo.'

export default function Home() {
  return (
    <main>
      <section className="mobile-spotlight">
        <div className="container">
          <div className="mobile-spotlight-card">
            <div className="mobile-spotlight-copy">
              <p className="eyebrow">La Casa del Panadero</p>
              <h2>Lo que vos necesitás</h2>
              <p>Maquinaria, respaldo técnico y asesoramiento para mover tu producción.</p>
            </div>
            <Image
              src="/utensilio-grupo-croissant-recorte.png"
              alt="Maquinaria para panadería"
              width={900}
              height={900}
              className="mobile-spotlight-image"
              priority
            />
          </div>
        </div>
      </section>

      <section id="inicio" className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Equipamiento para panaderías, confiterías y gastronomía</p>
            <h1>Todo para tu negocio, con respaldo técnico y atención de verdad.</h1>
            <p className="lead">
              Desde 1989 acompañamos a negocios del rubro con maquinaria, productos de cuadra,
              servicio técnico y asesoramiento cercano para que cada compra tenga sentido operativo.
            </p>
            <div className="hero-points">
              <span>Venta de maquinaria</span>
              <span>Productos de cuadra</span>
              <span>Service técnico</span>
            </div>
            <div className="hero-actions">
              <a className="btn btn-primary" href="https://wa.me/59894009370" target="_blank" rel="noreferrer">
                Consultar por ventas <ArrowRight size={18} />
              </a>
              <a className="btn btn-outline" href="#productos">
                Ver productos
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="badge">Envíos gratis en Montevideo con pago anticipado</div>
            <h2>Showroom, taller y seguimiento postventa</h2>
            <p>
              Atención comercial y técnica en un mismo lugar para resolver compras, consultas y
              mantenimiento sin vueltas.
            </p>
            <div className="hero-metrics">
              <div>
                <strong>1989</strong>
                <span>Trayectoria</span>
              </div>
              <div>
                <strong>6 pagos</strong>
                <span>Sin recargo</span>
              </div>
              <div>
                <strong>2 vías</strong>
                <span>Ventas + service</span>
              </div>
            </div>
            <div className="contact-row">
              <Phone size={18} />
              <span>Ventas: 094 009 370</span>
            </div>
            <div className="contact-row">
              <Settings size={18} />
              <span>Asistencia técnica: 091 319 531</span>
            </div>
            <div className="contact-row">
              <MapPin size={18} />
              <a
                href="https://www.google.com/maps/search/?api=1&query=Fernandez+Crespo+2099+Montevideo"
                target="_blank"
                rel="noreferrer"
              >
                Cómo llegar al showroom
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container feature-grid">
          {advantages.map((item) => (
            <Feature key={item.title} icon={item.icon} title={item.title} text={item.text} />
          ))}
        </div>
      </section>

      <section id="productos" className="section">
        <div className="container products-section-intro">
          <p className="eyebrow">Productos de cuadra</p>
          <h2>Categorías de equipamiento para ordenar la búsqueda desde el primer vistazo</h2>
          <p className="products-section-copy">
            Seleccionamos las líneas principales para que la navegación sea clara desde el comienzo.
            Cada categoría abre una página propia, lista para sumar productos, marcas y consultas a
            medida.
          </p>
        </div>
        <div className="container product-grid">
          {topLevelProductCategories.map((product) => (
            <a className="product-card" key={product.slug} id={product.slug} href={`/productos/${product.slug}`}>
              <div>
                <span>{product.name}</span>
                <small>{product.summary}</small>
              </div>
              <span className="product-card-link">Ver categoría</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section payment-strip">
        <div className="container payment-grid">
          <div className="payment-card">
            <p className="eyebrow">Showroom</p>
            <h3>Pagá hasta en 6 cuotas sin recargo</h3>
            <p>Disponible en nuestro showroom para facilitar compras planificadas y opciones de crédito italiano.</p>
          </div>
          <div className="payment-card">
            <p className="eyebrow">Formas de pago</p>
            <h3>Contado, cheques, transferencia, crédito italiano y tarjetas</h3>
            <p>Información clara y comercial para una web informativa orientada a consulta.</p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container brands-section">
          <p className="eyebrow">Marcas</p>
          <h2>Trabajamos con marcas reconocidas del rubro</h2>
          <p className="section-intro">
            Estas son algunas de las marcas que acompañan nuestro trabajo y refuerzan la confianza
            que brindamos en cada proyecto.
          </p>
          <div className="logo-grid desktop-only">
            {brands.map((brand) => (
              <div className="logo-card brand-logo-card" key={brand.name}>
                {brand.href ? (
                  <a href={brand.href} target="_blank" rel="noreferrer" aria-label={brand.name}>
                    <Image
                      className="brand-logo-image"
                      src={brand.src}
                      alt={brand.name}
                      width={brand.width}
                      height={brand.height}
                    />
                  </a>
                ) : (
                  <Image
                    className="brand-logo-image"
                    src={brand.src}
                    alt={brand.name}
                    width={brand.width}
                    height={brand.height}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="mobile-only">
            <div className="logo-grid brand-grid-mobile-base">
              {featuredBrands.map((brand) => (
                <div className="logo-card brand-logo-card" key={brand.name}>
                  {brand.href ? (
                    <a href={brand.href} target="_blank" rel="noreferrer" aria-label={brand.name}>
                      <Image
                        className="brand-logo-image"
                        src={brand.src}
                        alt={brand.name}
                        width={brand.width}
                        height={brand.height}
                      />
                    </a>
                  ) : (
                    <Image
                      className="brand-logo-image"
                      src={brand.src}
                      alt={brand.name}
                      width={brand.width}
                      height={brand.height}
                    />
                  )}
                </div>
              ))}
            </div>
            <details className="mobile-expand-section">
              <summary className="mobile-expand-toggle">Ver más</summary>
              <div className="logo-grid mobile-expand-content">
                {moreBrands.map((brand) => (
                  <div className="logo-card brand-logo-card" key={brand.name}>
                    {brand.href ? (
                      <a href={brand.href} target="_blank" rel="noreferrer" aria-label={brand.name}>
                        <Image
                          className="brand-logo-image"
                          src={brand.src}
                          alt={brand.name}
                          width={brand.width}
                          height={brand.height}
                        />
                      </a>
                    ) : (
                      <Image
                        className="brand-logo-image"
                        src={brand.src}
                        alt={brand.name}
                        width={brand.width}
                        height={brand.height}
                      />
                    )}
                  </div>
                ))}
              </div>
            </details>
          </div>
        </div>
      </section>

      <section id="propuesta" className="section alt">
        <div className="container showcase-grid">
          <div>
            <p className="eyebrow">Qué resolvemos</p>
            <h2>Venta, reposición y soporte para negocios que no pueden frenar</h2>
          </div>
          <div className="showcase-list">
            {showcaseItems.map((item) => (
              <details className="showcase-item" key={item.title}>
                <summary className="showcase-summary">
                  <ChevronRight size={18} />
                  <span>{item.title}</span>
                </summary>
                <p className="showcase-detail">{item.text}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="service" className="section service">
        <div className="container service-grid">
          <div>
            <p className="eyebrow">Servicio técnico propio</p>
            <h2>Asistencia, mantenimiento y respaldo después de la compra</h2>
            <p>
              Además de vender equipos, La Casa del Panadero cuenta con taller propio para dar
              continuidad operativa a sus clientes y resolver incidencias con contexto real del
              rubro.
            </p>
            <a className="btn btn-primary" href="https://wa.me/59891319531" target="_blank" rel="noreferrer">
              <MessageCircle size={18} /> Contactar asistencia técnica
            </a>
          </div>

          <div className="info-box service-box">
            <h3>Taller</h3>
            <p>Jorge Isaacs 3831</p>
            <p>Tel: 2215 5207</p>
            <div className="service-steps">
              {process.map((step) => (
                <div className="service-step" key={step}>
                  <span />
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="historia" className="section">
        <div className="container story-card">
          <p className="eyebrow">Nuestra historia</p>
          <h2>Más de 35 años acompañando el crecimiento de la panificación y la gastronomía</h2>
          {storyIntro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <div className="desktop-only">
            {storyBody.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <blockquote className="story-quote">{storyQuote}</blockquote>
            <p className="story-signoff">{storySignoff}</p>
          </div>

          <details className="mobile-expand-section story-more mobile-only">
            <summary className="mobile-expand-toggle">Ver más</summary>
            <div className="mobile-expand-content">
              {storyBody.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <blockquote className="story-quote">{storyQuote}</blockquote>
              <p className="story-signoff">{storySignoff}</p>
            </div>
          </details>
        </div>
      </section>

      <section className="section alt news-section">
        <div className="container news-section-intro">
          <p className="eyebrow">Destacados</p>
          <h2>Un espacio simple para ir moviendo ofertas, novedades o financiación</h2>
          <p className="section-intro">
            Este espacio puede usarse para comunicar promociones, equipos sugeridos o nuevas
            condiciones de pago sin necesidad de modificar el resto del sitio.
          </p>
          <div className="highlight-grid">
            {highlights.map((item) => (
              <div className="news-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="section contact-section">
        <div className="container contact-grid">
          <div>
            <p className="eyebrow">Pedir presupuesto</p>
            <h2>Dejanos tu consulta y te respondemos a la brevedad</h2>
            <p>
              También podés contactarnos directamente por WhatsApp para ventas o asistencia
              técnica.
            </p>
            <div className="contact-buttons">
              <a className="btn btn-primary" href="https://wa.me/59894009370" target="_blank" rel="noreferrer">
                WhatsApp ventas
              </a>
              <a className="btn btn-outline" href="https://wa.me/59891319531" target="_blank" rel="noreferrer">
                WhatsApp service
              </a>
            </div>
            <p className="contact-note">
              Para una web informativa, los botones de WhatsApp probablemente conviertan mejor que
              depender solo del formulario.
            </p>
            <div className="contact-list">
              <p>
                <MapPin size={18} /> Showroom: Fernández Crespo 2099
              </p>
              <p>
                <Phone size={18} /> 2924 8307
              </p>
              <p>
                <Mail size={18} /> info@lacasadelpanadero.com.uy
              </p>
              <p>
                <Clock3 size={18} /> Lunes a viernes de 8 a 17 hs
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-intro">
            <strong>La Casa del Panadero</strong>
            <p>Equipamiento, productos de cuadra y servicio técnico para negocios del rubro.</p>
            <p>Ventas, showroom, taller propio y acompañamiento postventa en un mismo lugar.</p>
          </div>

          <div className="footer-location-card">
            <h3>Showroom</h3>
            <p>
              <MapPin size={17} /> Fernández Crespo 2099, Montevideo
            </p>
            <p>
              <Phone size={17} /> 2924 8307
            </p>
            <p>
              <Mail size={17} /> info@lacasadelpanadero.com.uy
            </p>
            <p>
              <Clock3 size={17} /> Lunes a viernes de 8 a 17 hs
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Fernandez+Crespo+2099+Montevideo"
              target="_blank"
              rel="noreferrer"
            >
              Cómo llegar al showroom
            </a>
          </div>

          <div className="footer-location-card">
            <h3>Taller</h3>
            <p>
              <MapPin size={17} /> Jorge Isaacs 3831, Montevideo
            </p>
            <p>
              <Phone size={17} /> 2215 5207
            </p>
            <p>
              <Phone size={17} /> 091 319 531
            </p>
            <p>
              <Mail size={17} /> info@lacasadelpanadero.com.uy
            </p>
            <p>
              <Clock3 size={17} /> Lunes a viernes de 8 a 17 hs
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Jorge+Isaacs+3831+Montevideo"
              target="_blank"
              rel="noreferrer"
            >
              Cómo llegar al taller
            </a>
          </div>

          <div className="footer-payments">
            <h3>Información útil</h3>
            <p>Contado · Cheques · Transferencia bancaria · Crédito italiano · Tarjetas hasta en 6 pagos sin recargo</p>
            <p>También podés escribirnos por WhatsApp para ventas o asistencia técnica.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

function Feature({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="feature-card">
      {icon}
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}
