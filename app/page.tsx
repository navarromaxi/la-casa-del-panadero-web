import {
  ArrowRight,
  CheckCircle2,
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
import { ContactForm } from './contact-form'
import { productCategories } from './products-data'

const brands = [
  'Logo de marca 1',
  'Logo de marca 2',
  'Logo de marca 3',
  'Logo de marca 4',
  'Logo de marca 5',
  'Logo de marca 6',
]

const clients = ['Cliente 1', 'Cliente 2', 'Cliente 3', 'Cliente 4', 'Cliente 5', 'Cliente 6']

const highlights = [
  {
    title: 'Ofertas del mes',
    text: 'Espacio para destacar una promoción puntual o una línea de equipos que quieran empujar.',
  },
  {
    title: 'Equipos recomendados',
    text: 'Bloque para rotar maquinaria, productos de cuadra o repuestos con foco comercial.',
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
    text: 'Contado, transferencia, cheques y tarjetas hasta en 6 pagos sin recargo.',
  },
  {
    icon: <ShieldCheck size={20} />,
    title: 'Marcas y respaldo',
    text: 'Asesoramiento honesto para elegir maquinaria según producción y presupuesto.',
  },
]

const process = [
  'Contanos qué necesitás para tu panadería, confitería o cocina de producción.',
  'Te orientamos sobre equipos, repuestos o productos de cuadra según tu escala.',
  'Coordinamos presupuesto, entrega y soporte técnico si el equipo lo requiere.',
]

export default function Home() {
  return (
    <main>
      <section id="inicio" className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Equipamiento para panaderías, confiterías y gastronomía</p>
            <h1>Todo para tu negocio, con respaldo técnico y atención de verdad.</h1>
            <p className="lead">
              Desde 1989 acompañamos a negocios del rubro con maquinaria, productos de cuadra,
              repuestos y asesoramiento cercano para que cada compra tenga sentido operativo.
            </p>
            <div className="hero-points">
              <span>Venta de maquinaria</span>
              <span>Productos de cuadra</span>
              <span>Repuestos y service</span>
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

      <section id="propuesta" className="features">
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
          {productCategories.map((product, index) => (
            <a className="product-card" key={product.slug} id={product.slug} href={`/productos/${product.slug}`}>
              <div className="product-card-top">
                <span className="product-card-kicker">Categoría {String(index + 1).padStart(2, '0')}</span>
                <CheckCircle2 size={18} />
              </div>
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
            <p>Disponible en nuestro showroom para facilitar compras planificadas.</p>
          </div>
          <div className="payment-card">
            <p className="eyebrow">Formas de pago</p>
            <h3>Contado, cheques, transferencia y tarjetas</h3>
            <p>Información clara y comercial para una web informativa orientada a consulta.</p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <p className="eyebrow">Marcas</p>
          <h2>Trabajamos con marcas reconocidas del rubro</h2>
          <p className="section-intro">
            Acá van los logos reales que te van a pasar en PNG. Por ahora quedan placeholders para
            mantener la estructura lista.
          </p>
          <div className="logo-grid">
            {brands.map((brand) => (
              <div className="logo-card" key={brand}>
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container showcase-grid">
          <div>
            <p className="eyebrow">Qué resolvemos</p>
            <h2>Venta, reposición y soporte para negocios que no pueden frenar</h2>
          </div>
          <div className="showcase-list">
            <div className="showcase-item">
              <ChevronRight size={18} />
              <span>Equipamiento para abrir, renovar o ampliar la producción.</span>
            </div>
            <div className="showcase-item">
              <ChevronRight size={18} />
              <span>Reposición de repuestos, insumos y accesorios de uso diario.</span>
            </div>
            <div className="showcase-item">
              <ChevronRight size={18} />
              <span>Asistencia técnica cuando el equipo necesita mantenimiento o ajuste.</span>
            </div>
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
          <h2>Desde 1989 vinculados al crecimiento de la industria panadera</h2>
          <p>
            Nuestros comienzos datan del año 1989, cuando iniciamos la empresa dentro de la
            industria panadera, enfocados en la reparación de maquinaria industrial y
            semiindustrial. En esa primera etapa también fabricábamos amasadoras, sobadoras,
            batidoras y armadoras, desarrollando una industria nacional que fue consolidando su
            calidad junto al respaldo de la clientela local.
          </p>
          <p>
            Con el crecimiento de la empresa llegaron los primeros vínculos comerciales con
            Argentina y Brasil, abriendo paso a la importación de maquinaria terminada en origen y a
            una expansión más fuerte hacia el MERCOSUR. Ese proceso los llevó a representar marcas
            internacionales y a ampliar su alcance hacia panaderías, confiterías, supermercados,
            líneas industriales y también gastronomía.
          </p>
          <p>
            Hoy La Casa del Panadero trabaja con marcas de distintos países, sostiene el valor del
            servicio postventa como parte central de su propuesta y continúa creciendo con un equipo
            distribuido entre dirección, administración, ventas y servicio técnico. La experiencia,
            la atención personalizada y el respaldo técnico siguen siendo la base de su prestigio.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Clientes</p>
          <h2>Algunos de nuestros clientes</h2>
          <p className="section-intro">
            Esta sección queda pronta para reemplazar con los nombres y logos que te compartan.
          </p>
          <div className="logo-grid">
            {clients.map((client) => (
              <div className="logo-card client-card" key={client}>
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt news-section">
        <div className="container">
          <p className="eyebrow">Destacados</p>
          <h2>Un espacio simple para ir moviendo ofertas, novedades o financiación</h2>
          <p className="section-intro">
            Esta sección está ubicada debajo de Clientes y antes del bloque de contacto. La dejé
            preparada para que puedan cambiar solo estos destacados cuando quieran empujar algo.
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
          <div>
            <strong>La Casa del Panadero</strong>
            <p>Equipamiento, productos de cuadra y servicio técnico para negocios del rubro.</p>
          </div>
          <div>
            <p>Contado · Cheques · Transferencia bancaria · Tarjetas hasta en 6 pagos sin recargo</p>
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
