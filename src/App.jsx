import React from "react";
import { motion } from "framer-motion";
import logoAMD from "./assets/logo-final.png";
import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  Clock3,
  Gift,
  Globe2,
  MessageCircle,
  MousePointerClick,
  PenTool,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

export default function AdrianMarketingDigitalLanding() {
  const services = [
    {
      icon: <Globe2 className="h-5 w-5 md:h-6 md:w-6" />,
      title: "Páginas web profesionales",
      text: "Web clara, elegante y enfocada a convertir visitas en contactos.",
    },
    {
      icon: <Search className="h-5 w-5 md:h-6 md:w-6" />,
      title: "Posicionamiento en Google",
      text: "Presencia en buscadores para que te encuentren clientes reales.",
    },
    {
      icon: <PenTool className="h-5 w-5 md:h-6 md:w-6" />,
      title: "Redes sociales orgánicas",
      text: "Contenido con intención, imagen cuidada y perfiles más profesionales.",
    },
    {
      icon: <Target className="h-5 w-5 md:h-6 md:w-6" />,
      title: "Campañas publicitarias",
      text: "Meta Ads para atraer contactos reales y optimizar presupuesto.",
    },
    {
      icon: <MessageCircle className="h-5 w-5 md:h-6 md:w-6" />,
      title: "Estrategias de venta",
      text: "Mensajes, ofertas y procesos para convertir conversaciones en clientes.",
    },
    {
      icon: <Bot className="h-5 w-5 md:h-6 md:w-6" />,
      title: "Automatización",
      text: "Procesos preparados para ahorrar tiempo y mejorar la atención.",
    },
  ];

  const process = [
    "Analizamos tu negocio y el tipo de cliente que quieres atraer.",
    "Preparamos oferta, web, anuncios, mensajes y seguimiento.",
    "Lanzamos acciones y medimos qué funciona de verdad.",
    "Optimizamos campañas para mejorar resultados mes a mes.",
  ];

  const benefits = [
    "Estrategia clara, sin humo.",
    "Clientes reales, no likes vacíos.",
    "Comunicación cercana.",
    "Pensado para negocios locales.",
  ];

  return (
    <div className="min-h-screen bg-[#070707] text-white selection:bg-[#D8B45B] selection:text-black">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-180px] h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-[#D8B45B]/10 blur-3xl md:h-[420px] md:w-[420px]" />
        <div className="absolute bottom-[-220px] right-[-160px] h-[360px] w-[360px] rounded-full bg-white/5 blur-3xl md:h-[460px] md:w-[460px]" />
      </div>

      <header className="relative z-10 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8 md:py-5">
          <div className="flex items-center gap-2 md:gap-3">
        <img
        src={logoAMD}
        alt="AMD Logo"
        className="h-16 w-16 object-contain md:h-20 md:w-20"
        />
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-white md:text-sm md:tracking-[0.22em]">
                ADRIÁN
              </p>
              <p className="text-[10px] tracking-[0.22em] text-[#D8B45B] md:text-xs md:tracking-[0.28em]">
                MARKETING DIGITAL
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="#servicios" className="transition hover:text-white">
              Servicios
            </a>
            <a href="#oferta" className="transition hover:text-white">
              Prueba inicial
            </a>
            <a href="#proceso" className="transition hover:text-white">
              Proceso
            </a>
            <a href="#contacto" className="transition hover:text-white">
              Contacto
            </a>
          </nav>

          <a
            href="#contacto"
            className="rounded-full border border-[#D8B45B]/60 px-4 py-2 text-xs font-medium text-[#D8B45B] transition hover:bg-[#D8B45B] hover:text-black md:px-5 md:text-sm"
          >
            Análisis
          </a>
        </div>
      </header>

      <main className="relative z-10">
        <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-12 pt-10 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:pb-28 md:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-[#D8B45B]/30 bg-[#D8B45B]/10 px-3 py-2 text-xs text-[#E9D398] md:px-4 md:text-sm">
              <Sparkles className="h-4 w-4" />
             Prueba inicial: 15 días o hasta generar 1.000 €.
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.04] tracking-tight text-white md:text-7xl">
              Convierte tu presencia online en una entrada real de clientes.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/68 md:mt-7 md:text-xl md:leading-8">
              Ayudamos a profesionales, autónomos y negocios locales a mejorar su imagen, lanzar campañas y transformar visitas en conversaciones con intención de compra.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row md:mt-9 md:gap-4">
              <a
                href="https://wa.me/34000000000?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20marketing%20digital"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#D8B45B] px-6 py-4 text-sm font-semibold text-black shadow-[0_0_40px_rgba(216,180,91,0.18)] transition hover:scale-[1.02] hover:bg-[#e7c76e] md:text-base"
              >
                Solicitar prueba inicial
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10 md:text-base"
              >
                Ver servicios
              </a>
            </div>

            <div className="mt-8 grid max-w-xl grid-cols-3 gap-3 border-t border-white/10 pt-5 md:mt-10 md:gap-4 md:pt-6">
              <div>
                <p className="text-lg font-semibold text-white md:text-2xl">+Clientes</p>
                <p className="mt-1 text-xs text-white/50 md:text-sm">Captación</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-white md:text-2xl">+Orden</p>
                <p className="mt-1 text-xs text-white/50 md:text-sm">Estrategia</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-white md:text-2xl">+Ventas</p>
                <p className="mt-1 text-xs text-white/50 md:text-sm">Seguimiento</p>
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
            <div className="relative w-full rounded-[1.5rem] border border-white/10 bg-[#111]/80 p-3 shadow-2xl backdrop-blur-xl md:rounded-[2rem] md:p-5">
              <div className="rounded-[1.2rem] border border-[#D8B45B]/20 bg-black/50 p-4 md:rounded-[1.5rem] md:p-6">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-white/50 md:text-sm">Panel de crecimiento</p>
                    <h2 className="mt-1 text-xl font-semibold md:text-2xl">
                      Estrategia activa
                    </h2>
                  </div>
                  <div className="rounded-full bg-[#D8B45B]/15 p-3 text-[#D8B45B]">
                    <BarChart3 className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                </div>

                <div className="grid gap-3">
                  {[
                    ["Seguimiento diario", "Control de campañas"],
                    ["Optimización", "Ajustes reales"],
                    ["Estrategia", "Adaptada a cada negocio"],
                  ].map(([title, description]) => (
                    <div
                      key={title}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3 md:gap-4 md:p-4"
                    >
                      <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#D8B45B]/15 text-[#D8B45B] md:h-10 md:w-10">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold text-white md:text-base">
                          {title}
                        </h3>
                        <p className="mt-1 text-xs leading-5 text-white/55 md:text-sm md:leading-6">
                          {description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3 md:mt-6 md:gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 md:p-4">
                    <MousePointerClick className="mb-2 h-5 w-5 text-[#D8B45B] md:mb-3" />
                    <p className="text-xs text-white/50 md:text-sm">Objetivo</p>
                    <p className="mt-1 text-sm font-semibold md:text-base">
                      Contactos útiles
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 md:p-4">
                    <TrendingUp className="mb-2 h-5 w-5 text-[#D8B45B] md:mb-3" />
                    <p className="text-xs text-white/50 md:text-sm">Prioridad</p>
                    <p className="mt-1 text-sm font-semibold md:text-base">
                      Medir y mejorar
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.025]">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-8 md:grid-cols-4 md:gap-6 md:px-8 md:py-10">
            {benefits.map((item) => (
              <div key={item} className="flex gap-2 md:gap-3">
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#D8B45B] md:h-5 md:w-5" />
                <p className="text-xs leading-5 text-white/68 md:text-sm md:leading-6">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="oferta" className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-28">
          <div className="overflow-hidden rounded-[1.5rem] border border-[#D8B45B]/25 bg-gradient-to-br from-[#17120a] via-[#0d0d0d] to-black p-5 shadow-[0_0_80px_rgba(216,180,91,0.08)] md:rounded-[2rem] md:p-10">
            <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-10">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D8B45B]/30 bg-[#D8B45B]/10 px-3 py-2 text-xs text-[#E9D398] md:px-4 md:text-sm">
                  <Gift className="h-4 w-4" />
                  Oferta para nuevos clientes
                </div>
                <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
                  Prueba el servicio antes de comprometerte.
                </h2>
                <p className="mt-4 text-base leading-7 text-white/65 md:mt-5 md:text-lg md:leading-8">
                  Durante los primeros 15 días trabajamos tu captación sin cobrar honorarios de gestión. Tú solo pagas la inversión que vaya directamente a Meta.
                </p>
                <p className="mt-4 text-sm leading-6 text-white/48 md:text-base md:leading-7">
                  Pasados esos 15 días, o al alcanzar 1.000 € de facturación generada, revisamos resultados y decides si quieres continuar, si decides continuar, el mes se factura completo desde el inicio del periodo trabajado.
Si no decides continuar no tienes que pagar nada.
                </p>
              </div>

              <div className="grid gap-3 md:gap-4">
                {[
                  ["15 días iniciales", "Probamos estrategia, anuncios y mensajes sin cobrar gestión desde el primer día.", <Clock3 className="h-5 w-5" />],
                  ["Solo inversión publicitaria", "El presupuesto de anuncios va para Meta. Nuestros honorarios empiezan si decides seguir.", <Target className="h-5 w-5" />],
                  ["Sin permanencia", "Si no te convence, paras ahí. Sin compromiso largo y sin presión.", <ShieldCheck className="h-5 w-5" />],
                ].map(([title, text, icon]) => (
                  <div
                    key={title}
                    className="rounded-[1.2rem] border border-white/10 bg-black/35 p-4 md:rounded-[1.5rem] md:p-5"
                  >
                    <div className="mb-2 flex items-center gap-3 text-[#D8B45B] md:mb-3">
                      {icon}
                      <p className="font-semibold">{title}</p>
                    </div>
                    <p className="text-sm leading-6 text-white/62 md:text-base md:leading-7">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <motion.section
  id="servicios"
  initial={{ opacity: 0, y: 35 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.2 }}
  className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-28"
>
          <div className="mb-8 max-w-3xl md:mb-12">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#D8B45B] md:text-sm md:tracking-[0.28em]">
              Servicios
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              Todo lo necesario para dejar de improvisar tu marketing.
            </h2>
            <p className="mt-4 text-base leading-7 text-white/62 md:mt-5 md:text-lg md:leading-8">
              Cada servicio puede contratarse por separado o combinarse dentro de una estrategia completa.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-[1.2rem] border border-white/10 bg-white/[0.04] p-4 transition hover:-translate-y-1 hover:border-[#D8B45B]/40 hover:bg-white/[0.06] md:rounded-[1.5rem] md:p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#D8B45B]/12 text-[#D8B45B] md:mb-5 md:h-12 md:w-12">
                  {service.icon}
                </div>
                <h3 className="text-base font-semibold md:text-xl">{service.title}</h3>
                <p className="mt-2 text-xs leading-5 text-white/58 md:mt-3 md:text-base md:leading-7">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        <section className="bg-[#0d0d0d] py-12 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-7 px-4 md:grid-cols-2 md:gap-10 md:px-8">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#D8B45B] md:text-sm md:tracking-[0.28em]">
                Enfoque
              </p>
              <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
                No dejamos tu marketing funcionando en piloto automático.
              </h2>
            </div>
            <div className="space-y-4 text-base leading-7 text-white/64 md:space-y-6 md:text-lg md:leading-8">
              <p>
                Muchas empresas preparan una campaña, la lanzan y la dejan estática.
              </p>
              <p>
                Nuestro enfoque es distinto: hacemos seguimiento diario, revisamos resultados y ajustamos lo necesario.
              </p>
              <p>
                No pagas solo por una campaña creada una vez. Pagas por estrategia, control y optimización.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-28">
          <div className="grid gap-3 md:grid-cols-3 md:gap-6">
            {[
              ["Seguimiento diario", "Detectamos rápido si algo no está funcionando.", <BarChart3 className="h-6 w-6" />],
              ["Optimización continua", "Ajustamos anuncios, públicos, mensajes y presupuesto.", <TrendingUp className="h-6 w-6" />],
              ["Estrategia personalizada", "Cada negocio necesita una ruta distinta.", <ShieldCheck className="h-6 w-6" />],
            ].map(([title, text, icon]) => (
              <div
                key={title}
                className="rounded-[1.2rem] border border-white/10 bg-white/[0.035] p-5 md:rounded-[1.5rem] md:p-6"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#D8B45B]/12 text-[#D8B45B] md:mb-5 md:h-12 md:w-12">
                  {icon}
                </div>
                <h3 className="text-xl font-semibold md:text-2xl">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/60 md:mt-4 md:text-base md:leading-7">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="proceso" className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-28">
          <div className="mb-8 max-w-3xl md:mb-12">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#D8B45B] md:text-sm md:tracking-[0.28em]">
              Proceso
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              Un método simple, pero bien pensado.
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
            {process.map((step, index) => (
              <div
                key={step}
                className="relative rounded-[1.2rem] border border-white/10 bg-white/[0.035] p-4 md:rounded-[1.5rem] md:p-6"
              >
                <div className="mb-4 text-3xl font-semibold text-[#D8B45B]/30 md:mb-8 md:text-5xl">
                  0{index + 1}
                </div>
                <p className="text-xs leading-5 text-white/68 md:text-base md:leading-7">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-12 md:px-8 md:pb-28">
          <div className="overflow-hidden rounded-[1.5rem] border border-[#D8B45B]/20 bg-gradient-to-br from-[#17120a] to-[#090909] p-5 md:rounded-[2rem] md:p-12">
            <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-10">
              <div>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D8B45B]/15 text-[#D8B45B] md:h-14 md:w-14">
                  <ShieldCheck className="h-6 w-6 md:h-7 md:w-7" />
                </div>
                <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
                  Paquetes a medida, no precios genéricos.
                </h2>
              </div>
              <p className="text-base leading-7 text-white/68 md:text-lg md:leading-8">
                Podemos trabajar solo una parte —web, Google, redes o campañas— o construir un sistema completo. El presupuesto se prepara después de entender tu negocio, tu objetivo y el volumen de trabajo necesario.
              </p>
            </div>
          </div>
        </section>

        <section id="contacto" className="border-t border-white/10 bg-black px-4 py-14 md:px-8 md:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#D8B45B] md:text-sm md:tracking-[0.28em]">
              Contacto
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-6xl">
              ¿Quieres que revisemos cómo conseguir más clientes para tu negocio?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/62 md:mt-6 md:text-lg md:leading-8">
              Escríbenos y cuéntanos qué haces, dónde trabajas y qué objetivo tienes.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row md:mt-9 md:gap-4">
              <a
                href="https://wa.me/34000000000?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20Adri%C3%A1n%20Marketing%20Digital"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D8B45B] px-7 py-4 text-sm font-semibold text-black transition hover:scale-[1.02] hover:bg-[#e7c76e] md:px-8 md:text-base"
              >
                <MessageCircle className="h-5 w-5" />
                Contactar por WhatsApp
              </a>
              <a
                href="mailto:contacto@adrianmarketingdigital.com"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10 md:px-8 md:text-base"
              >
                Enviar email
              </a>
            </div>

            <p className="mt-5 text-xs text-white/40 md:mt-6 md:text-sm">
              WhatsApp, email y enlaces definitivos pendientes de configurar.
            </p>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-[#050505] px-4 py-8 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center text-xs text-white/45 md:flex-row md:text-left md:text-sm">
          <p>© 2026 Adrián Marketing Digital. Todos los derechos reservados.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white">
              Instagram
            </a>
            <a href="#" className="hover:text-white">
              WhatsApp
            </a>
            <a href="#" className="hover:text-white">
              Email
            </a>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/34000000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_30px_rgba(37,211,102,0.45)] transition hover:scale-110"
      >
        <FaWhatsapp className="h-8 w-8" />
      </a>
    </div>
  );
}