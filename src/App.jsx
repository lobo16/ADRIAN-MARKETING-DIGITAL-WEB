import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Bot, CheckCircle2, Clock3, Gift, Globe2, MessageCircle, MousePointerClick, PenTool, Search, ShieldCheck, Sparkles, Target, TrendingUp } from "lucide-react";

const gold = "#D8B45B";

export default function AdrianMarketingDigitalLanding() {
  const services = [
    {
      icon: <Globe2 className="h-6 w-6" />,
      title: "Páginas web profesionales",
      text: "Creamos una web clara, elegante y enfocada a convertir visitas en contactos. Preparada para explicar bien tu negocio y generar confianza.",
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "Posicionamiento en Google",
      text: "Trabajamos la presencia de tu negocio en buscadores para que te encuentren personas que ya están buscando servicios como el tuyo.",
    },
    {
      icon: <PenTool className="h-6 w-6" />,
      title: "Redes sociales orgánicas",
      text: "Organizamos tu contenido, mejoramos la imagen de tu perfil y creamos publicaciones con intención, no contenido vacío por rellenar.",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Campañas publicitarias",
      text: "Lanzamos campañas en Meta Ads para atraer contactos reales, medir resultados y optimizar el presupuesto según el objetivo del negocio.",
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Estrategias de venta",
      text: "Preparamos mensajes, ofertas, guiones y procesos personalizados para convertir conversaciones en clientes sin sonar forzado.",
    },
    {
      icon: <Bot className="h-6 w-6" />,
      title: "IA y automatización",
      text: "Próximamente: chatbots, respuestas inteligentes e implementación de IA para ahorrar tiempo y mejorar la atención al cliente.",
    },
  ];

  const process = [
    "Analizamos tu negocio, tus servicios y el tipo de cliente que quieres atraer.",
    "Preparamos una estrategia clara: oferta, web, Google, redes, anuncios, mensajes y seguimiento.",
    "Lanzamos las acciones y medimos qué está funcionando de verdad.",
    "Revisamos a diario las campañas y ajustamos lo necesario para mejorar resultados mes a mes.",
  ];

  const benefits = [
    "Estrategia clara, sin humo ni tecnicismos innecesarios.",
    "Enfoque en clientes reales, no solo en likes o visitas vacías.",
    "Comunicación cercana y seguimiento del proceso.",
    "Diseñado especialmente para autónomos, profesionales y negocios locales.",
  ];

  return (
    <div className="min-h-screen bg-[#070707] text-white selection:bg-[#D8B45B] selection:text-black">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-180px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#D8B45B]/10 blur-3xl" />
        <div className="absolute bottom-[-220px] right-[-160px] h-[460px] w-[460px] rounded-full bg-white/5 blur-3xl" />
      </div>

      <header className="relative z-10 border-b border-white/10 bg-black/30 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
<div className="flex items-center gap-3">
  <img
    src="/logo_guion_solo_guion_símbolo.png"
    alt="Adrián Marketing Digital"
    className="h-14 w-14 rounded-full object-contain"
  />

  <div>
    <p className="text-sm font-semibold tracking-[0.22em] text-white">
      ADRIÁN
    </p>

    <p className="text-xs tracking-[0.28em] text-[#D8B45B]">
      MARKETING DIGITAL
    </p>
  </div>
</div>

          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="#servicios" className="transition hover:text-white">Servicios</a>
            <a href="#oferta" className="transition hover:text-white">Prueba inicial</a>
            <a href="#proceso" className="transition hover:text-white">Proceso</a>
            <a href="#contacto" className="transition hover:text-white">Contacto</a>
          </nav>

          <a
            href="#contacto"
            className="hidden rounded-full border border-[#D8B45B]/60 px-5 py-2 text-sm font-medium text-[#D8B45B] transition hover:bg-[#D8B45B] hover:text-black md:inline-flex"
          >
            Pedir análisis
          </a>
        </div>
      </header>

      <main className="relative z-10">
        <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-16 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:pb-28 md:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#D8B45B]/30 bg-[#D8B45B]/10 px-4 py-2 text-sm text-[#E9D398]">
              <Sparkles className="h-4 w-4" />
              Prueba inicial: 15 días de gestión sin pagar honorarios.
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-white md:text-7xl">
              Convierte tu presencia online en una entrada real de clientes.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68 md:text-xl">
              En Adrián Marketing Digital ayudamos a profesionales, autónomos y negocios locales a mejorar su imagen, lanzar campañas y transformar visitas en conversaciones con intención de compra. Empieza con una prueba inicial: solo pagas la inversión publicitaria.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/34000000000?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20marketing%20digital"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#D8B45B] px-7 py-4 font-semibold text-black shadow-[0_0_40px_rgba(216,180,91,0.18)] transition hover:scale-[1.02] hover:bg-[#e7c76e]"
              >
                Solicitar prueba inicial
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Ver servicios
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-6">
              <div>
                <p className="text-2xl font-semibold text-white">+Clientes</p>
                <p className="mt-1 text-sm text-white/50">Captación</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-white">+Orden</p>
                <p className="mt-1 text-sm text-white/50">Estrategia</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-white">+Ventas</p>
                <p className="mt-1 text-sm text-white/50">Seguimiento</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative flex items-center justify-center"
          >
            <div className="absolute inset-0 rounded-[2rem] bg-[#D8B45B]/10 blur-3xl" />
            <div className="relative w-full rounded-[2rem] border border-white/10 bg-[#111]/80 p-5 shadow-2xl backdrop-blur-xl">
              <div className="rounded-[1.5rem] border border-[#D8B45B]/20 bg-black/50 p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/50">Panel de crecimiento</p>
                    <h2 className="mt-1 text-2xl font-semibold">Estrategia activa</h2>
                  </div>
                  <div className="rounded-full bg-[#D8B45B]/15 p-3 text-[#D8B45B]">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    ["Seguimiento diario", "Control constante de campañas"],
                    ["Optimización continua", "Ajustes y mejoras reales"],
                    ["Estrategia personalizada", "Adaptada a cada negocio"],
                  ].map(([title, description]) => (
                    <div key={title} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-[#D8B45B]/15 text-[#D8B45B]">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>

                      <div>
                        <h3 className="font-semibold text-white">{title}</h3>
                        <p className="mt-1 text-sm leading-6 text-white/55">{description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <MousePointerClick className="mb-3 h-5 w-5 text-[#D8B45B]" />
                    <p className="text-sm text-white/50">Objetivo</p>
                    <p className="mt-1 font-semibold">Más contactos útiles</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <TrendingUp className="mb-3 h-5 w-5 text-[#D8B45B]" />
                    <p className="text-sm text-white/50">Prioridad</p>
                    <p className="mt-1 font-semibold">Medir y mejorar</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.025]">
          <div className="mx-auto grid max-w-7xl gap-6 px-5 py-10 md:grid-cols-4 md:px-8">
            {benefits.map((item) => (
              <div key={item} className="flex gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#D8B45B]" />
                <p className="text-sm leading-6 text-white/68">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="oferta" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <div className="overflow-hidden rounded-[2rem] border border-[#D8B45B]/25 bg-gradient-to-br from-[#17120a] via-[#0d0d0d] to-black p-6 shadow-[0_0_80px_rgba(216,180,91,0.08)] md:p-10">
            <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D8B45B]/30 bg-[#D8B45B]/10 px-4 py-2 text-sm text-[#E9D398]">
                  <Gift className="h-4 w-4" />
                  Oferta de entrada para nuevos clientes
                </div>
                <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Prueba el servicio antes de comprometerte.</h2>
                <p className="mt-5 text-lg leading-8 text-white/65">
                  Durante los primeros 15 días trabajamos tu captación sin cobrar honorarios de gestión. Tú solo pagas la inversión que vaya directamente a Meta para poner en marcha los anuncios.
                </p>
                <p className="mt-4 text-base leading-7 text-white/48">
                  Pasados esos 15 días, o al alcanzar 1.000 € de facturación generada, revisamos resultados y decides si quieres continuar con el servicio mensual.
                </p>
              </div>

              <div className="grid gap-4">
                <div className="rounded-[1.5rem] border border-white/10 bg-black/35 p-5">
                  <div className="mb-3 flex items-center gap-3 text-[#D8B45B]">
                    <Clock3 className="h-5 w-5" />
                    <p className="font-semibold">15 días iniciales</p>
                  </div>
                  <p className="leading-7 text-white/62">Probamos estrategia, anuncios y mensajes sin que tengas que pagar la gestión desde el primer día.</p>
                </div>

                <div className="rounded-[1.5rem] border border-white/10 bg-black/35 p-5">
                  <div className="mb-3 flex items-center gap-3 text-[#D8B45B]">
                    <Target className="h-5 w-5" />
                    <p className="font-semibold">Solo inversión publicitaria</p>
                  </div>
                  <p className="leading-7 text-white/62">El presupuesto de anuncios va para Meta. Nuestros honorarios empiezan solo si decides seguir trabajando con nosotros.</p>
                </div>

                <div className="rounded-[1.5rem] border border-[#D8B45B]/25 bg-[#D8B45B]/10 p-5">
                  <div className="mb-3 flex items-center gap-3 text-[#D8B45B]">
                    <ShieldCheck className="h-5 w-5" />
                    <p className="font-semibold">Sin permanencia durante la prueba</p>
                  </div>
                  <p className="leading-7 text-white/68">Si no te convence, paras ahí. Sin compromiso largo, sin letra pequeña y sin presión.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#D8B45B]">Servicios</p>
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Todo lo necesario para dejar de improvisar tu marketing.</h2>
            <p className="mt-5 text-lg leading-8 text-white/62">Cada servicio puede contratarse como un paquete independiente o combinarse dentro de una estrategia completa. No trabajamos con precios cerrados genéricos: cada propuesta se adapta al negocio, al volumen de clientes que necesita, al tipo de campaña y al trabajo real que haya que hacer.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-[#D8B45B]/40 hover:bg-white/[0.06]">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D8B45B]/12 text-[#D8B45B]">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 leading-7 text-white/58">{service.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#0d0d0d] py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2 md:px-8">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#D8B45B]">Enfoque</p>
              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">No dejamos tu marketing funcionando en piloto automático.</h2>
            </div>
            <div className="space-y-6 text-lg leading-8 text-white/64">
              <p>
                Muchas empresas preparan una campaña, la lanzan y la dejan estática. Si funciona, bien. Si no funciona, el cliente se queda pagando sin entender qué está pasando.
              </p>
              <p>
                Nuestro enfoque es distinto: hacemos seguimiento diario de las campañas, revisamos resultados, detectamos problemas y ajustamos lo necesario para que el presupuesto trabaje en las mejores condiciones posibles.
              </p>
              <p>
                Ese seguimiento constante es lo que da sentido al servicio mensual: no pagas solo por una campaña creada una vez, pagas por estrategia, control, optimización y acompañamiento real.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D8B45B]/12 text-[#D8B45B]">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-semibold">Seguimiento diario</h3>
              <p className="mt-4 leading-7 text-white/60">Controlamos cómo avanzan las campañas para detectar rápido si algo no está funcionando como debería.</p>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D8B45B]/12 text-[#D8B45B]">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-semibold">Optimización continua</h3>
              <p className="mt-4 leading-7 text-white/60">Ajustamos anuncios, públicos, mensajes y presupuesto para mejorar el rendimiento con el paso de los días.</p>
            </div>

            <div className="rounded-[1.5rem] border border-[#D8B45B]/25 bg-[#D8B45B]/10 p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-black/30 text-[#D8B45B]">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-semibold">Estrategia personalizada</h3>
              <p className="mt-4 leading-7 text-white/68">Cada negocio necesita una ruta distinta: oferta, tipo de cliente, volumen deseado, canales y proceso de venta.</p>
            </div>
          </div>
        </section>

        <section id="proceso" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#D8B45B]">Proceso</p>
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Un método simple, pero bien pensado.</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-4">
            {process.map((step, index) => (
              <div key={step} className="relative rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-6">
                <div className="mb-8 text-5xl font-semibold text-[#D8B45B]/30">0{index + 1}</div>
                <p className="leading-7 text-white/68">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8 md:pb-28">
          <div className="overflow-hidden rounded-[2rem] border border-[#D8B45B]/20 bg-gradient-to-br from-[#17120a] to-[#090909] p-8 md:p-12">
            <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">
              <div>
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D8B45B]/15 text-[#D8B45B]">
                  <ShieldCheck className="h-7 w-7" />
                </div>
                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Paquetes a medida, no precios genéricos.</h2>
              </div>
              <p className="text-lg leading-8 text-white/68">
                Podemos trabajar solo una parte —web, Google, redes, campañas o automatización— o construir un sistema completo. El presupuesto se prepara después de entender tu negocio, tu objetivo y el volumen de trabajo necesario. Así pagas por lo que realmente necesitas, no por un paquete estándar que no encaja contigo.
              </p>
            </div>
          </div>
        </section>

        <section id="contacto" className="border-t border-white/10 bg-black px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#D8B45B]">Contacto</p>
            <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">¿Quieres que revisemos cómo conseguir más clientes para tu negocio?</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/62">
              Escríbenos y cuéntanos qué haces, dónde trabajas y qué objetivo tienes. Prepararemos una primera orientación para saber qué camino tiene más sentido.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="https://wa.me/34000000000?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20Adri%C3%A1n%20Marketing%20Digital"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D8B45B] px-8 py-4 font-semibold text-black transition hover:scale-[1.02] hover:bg-[#e7c76e]"
              >
                <MessageCircle className="h-5 w-5" />
                Contactar por WhatsApp
              </a>
              <a
                href="mailto:contacto@adrianmarketingdigital.com"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Enviar email
              </a>
            </div>

            <p className="mt-6 text-sm text-white/40">WhatsApp, email y enlaces definitivos pendientes de configurar.</p>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-[#050505] px-5 py-8 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-white/45 md:flex-row">
          <p>© 2026 Adrián Marketing Digital. Todos los derechos reservados.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">WhatsApp</a>
            <a href="#" className="hover:text-white">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
