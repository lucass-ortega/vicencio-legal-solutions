import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Scale,
  Briefcase,
  Users,
  Car,
  FileText,
  MessageCircle,
  ShieldCheck,
  Clock,
  HeartHandshake,
  MapPin,
  Mail,
  Phone,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

import logo from "@/assets/logo-vicencio.png";
import heroImg from "@/assets/hero-justice.jpg.asset.json";
import abogadoImg from "@/assets/abogado.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Estudio Vicencio | Dr. Martín Vicencio, Abogado en José C. Paz" },
      {
        name: "description",
        content:
          "Estudio jurídico del Dr. Martín Vicencio en José C. Paz: derecho civil, laboral, familia, tránsito y asesoramiento legal. Atención personalizada y respuesta ágil.",
      },
      { property: "og:title", content: "Estudio Vicencio | Abogado Martín Vicencio" },
      {
        property: "og:description",
        content:
          "Soluciones legales claras, efectivas y a tu medida. Consultá por WhatsApp con el Dr. Martín Vicencio.",
      },
    ],
  }),
  component: Index,
});

const WHATSAPP = "https://wa.me/5491163817775";

const nav = [
  { label: "Servicios", href: "#servicios" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Por qué elegirme", href: "#beneficios" },
  { label: "Contacto", href: "#contacto" },
];

const servicios = [
  {
    icon: Scale,
    title: "Derecho Civil",
    text: "Contratos, daños y perjuicios, sucesiones, desalojos y reclamos patrimoniales con estrategia clara.",
  },
  {
    icon: Briefcase,
    title: "Derecho Laboral",
    text: "Despidos, trabajo no registrado, accidentes y enfermedades laborales. Defensa del trabajador.",
  },
  {
    icon: Users,
    title: "Derecho de Familia",
    text: "Divorcios, cuota alimentaria, régimen de comunicación y acuerdos con enfoque humano.",
  },
  {
    icon: Car,
    title: "Accidentes y Tránsito",
    text: "Reclamos por siniestros viales, gestiones ante aseguradoras e indemnizaciones justas.",
  },
  {
    icon: FileText,
    title: "Asesoramiento Legal",
    text: "Consultas preventivas, revisión de documentación y acompañamiento continuo para tus decisiones.",
  },
];

const beneficios = [
  {
    icon: MessageCircle,
    title: "Comunicación directa",
    text: "Hablás siempre con el abogado, sin intermediarios ni respuestas automáticas.",
  },
  {
    icon: ShieldCheck,
    title: "Confidencialidad",
    text: "Cada consulta se trata con reserva absoluta y el resguardo que corresponde.",
  },
  {
    icon: Clock,
    title: "Respuesta ágil",
    text: "Seguimiento permanente del expediente y novedades a tiempo, sin demoras.",
  },
  {
    icon: HeartHandshake,
    title: "Compromiso real",
    text: "Estrategias honestas, expectativas claras y dedicación a cada caso.",
  },
];

function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <a href="#inicio" className="flex items-center gap-3">
      <img
        src={logo.url}
        alt="Estudio Vicencio"
        width={132}
        height={72}
        className="h-11 w-auto rounded-sm object-contain"
      />
      <span className="sr-only">Estudio Vicencio</span>
      <span
        className={`hidden text-xs tracking-[0.3em] uppercase sm:block ${
          tone === "light" ? "text-primary-foreground/60" : "text-muted-foreground"
        }`}
      >
        Estudio Vicencio & Asociados
      </span>
    </a>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-12">
        <Logo />
        <nav className="hidden items-center gap-10 lg:flex">
          {nav.map((i) => (
            <a
              key={i.href}
              href={i.href}
              className="text-sm font-light tracking-wide text-primary-foreground/75 transition-colors hover:text-accent"
            >
              {i.label}
            </a>
          ))}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="border border-accent/60 px-6 py-2.5 text-xs tracking-[0.2em] text-accent uppercase transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Consultar
          </a>
        </nav>
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menú"
          className="text-primary-foreground lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-primary-foreground/10 bg-navy-deep/95 px-6 py-6 backdrop-blur lg:hidden">
          <div className="flex flex-col gap-5">
            {nav.map((i) => (
              <a
                key={i.href}
                href={i.href}
                onClick={() => setOpen(false)}
                className="text-sm tracking-wide text-primary-foreground/80"
              >
                {i.label}
              </a>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="border border-accent/60 px-6 py-3 text-center text-xs tracking-[0.2em] text-accent uppercase"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-navy-deep">
      <Navbar />
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 pt-40 pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:pt-48 lg:pb-32">
        <div>
          <p className="eyebrow text-accent">Estudio jurídico · José C. Paz</p>
          <div className="hairline mt-6 h-px w-24" />
          <h1 className="mt-8 text-[2.6rem] leading-[1.05] text-primary-foreground sm:text-6xl lg:text-[4.2rem]">
            Asesoramiento jurídico personalizado en derecho civil, laboral, familia y accidentes.
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed font-light text-primary-foreground/65">
            ACCIDENTES DE TRABAJO - DIVORCIOS - SUCESIONES - CONTRATOS
          </p>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent px-9 py-4 text-xs tracking-[0.2em] text-accent-foreground uppercase transition-opacity hover:opacity-90"
            >
              Consultar ahora <ArrowUpRight size={15} />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center border border-primary-foreground/25 px-9 py-4 text-xs tracking-[0.2em] text-primary-foreground/85 uppercase transition-colors hover:border-accent hover:text-accent"
            >
              Ver servicios
            </a>
          </div>
          <div className="mt-14 flex flex-wrap gap-10 border-t border-primary-foreground/10 pt-8">
            {[
              ["+15", "Años de ejercicio"],
              ["100%", "Atención directa"],
              ["24 h", "Primera respuesta"],
            ].map(([n, l]) => (
              <div key={l}>
                <p className="font-serif text-3xl text-accent">{n}</p>
                <p className="mt-1 text-xs tracking-widest text-primary-foreground/50 uppercase">
                  {l}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-3 border border-accent/25" aria-hidden />
          <img
            src={heroImg.url}
            alt="Tribunales de Justicia"
            width={736}
            height={491}
            className="relative h-[420px] w-full object-cover sm:h-[560px] lg:h-[640px]"
          />
        </div>
      </div>
    </section>
  );
}

function Servicios() {
  return (
    <section id="servicios" className="bg-beige/40 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-accent">Áreas de práctica</p>
          <h2 className="mt-6 text-4xl leading-tight text-foreground lg:text-5xl">
            Servicios jurídicos modernos y precisos
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed font-light text-muted-foreground">
            Un enfoque integral en los conflictos más frecuentes, con foco en resultados concretos
            y en la tranquilidad de quien consulta.
          </p>
        </div>
        <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {servicios.map((s) => (
            <article
              key={s.title}
              className="group flex flex-col items-center rounded-[1.75rem] bg-card p-9 text-center shadow-[0_1px_2px_oklch(0.26_0.05_252/0.04),0_24px_50px_-30px_oklch(0.26_0.05_252/0.28)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10">
                <s.icon size={26} strokeWidth={1.2} className="text-accent" />
              </div>
              <h3 className="mt-7 text-2xl font-medium text-foreground">{s.title}</h3>
              <p className="mt-4 flex-1 text-base leading-relaxed text-foreground/75">
                {s.text}
              </p>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 text-xs font-semibold tracking-[0.18em] text-accent-foreground uppercase shadow-[0_10px_24px_-10px_oklch(0.68_0.14_55/0.6)] transition-opacity hover:opacity-90"
              >
                Consultar
              </a>
            </article>
          ))}
          <div className="flex flex-col justify-center rounded-[1.75rem] bg-navy p-9 text-center">
            <span className="font-serif text-6xl leading-none text-accent" aria-hidden>
              &ldquo;
            </span>
            <p className="mt-2 font-serif text-2xl leading-snug text-primary-foreground">
              Cada expediente tiene una persona detrás.
            </p>
            <p className="mt-6 text-xs tracking-[0.2em] text-accent uppercase">
              Dr. Martín Vicencio
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SobreMi() {
  return (
    <section id="sobre-mi" className="bg-beige py-28 lg:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-12">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-3 border border-navy/15" aria-hidden />
          <img
            src={abogadoImg.url}
            alt="Dr. Martín Vicencio, abogado"
            loading="lazy"
            width={1008}
            height={1264}
            className="relative h-[460px] w-full object-cover object-top shadow-[var(--shadow-soft)] sm:h-[600px]"
          />
        </div>
        <div className="order-1 lg:order-2">
          <p className="eyebrow text-accent">Sobre mí</p>
          <h2 className="mt-6 text-4xl leading-tight text-foreground lg:text-5xl">
            Dr. Martín Vicencio
          </h2>
          <p className="mt-3 text-sm tracking-[0.2em] text-muted-foreground uppercase">
            Abogado · Matrícula vigente
          </p>
          <div className="mt-8 space-y-6 text-base leading-relaxed font-light text-foreground/80">
            <p>
              Desde hace más de quince años acompaño a personas y familias del oeste bonaerense en
              los momentos en que la ley se vuelve necesaria. Mi trabajo comienza escuchando: sin un
              diagnóstico honesto no hay estrategia posible.
            </p>
            <p>
              Ejerzo en derecho civil, laboral, familia y accidentes de tránsito, con presencia
              activa en cada instancia del proceso. Prefiero un estudio de escala humana, donde el
              cliente conoce a su abogado y entiende cada paso que se da en su nombre.
            </p>
            <p>
              El compromiso es simple: información clara, plazos reales y una defensa sostenida
              hasta el final.
            </p>
          </div>
          <div className="mt-10 grid gap-6 border-t border-navy/10 pt-8 sm:grid-cols-2">
            {[
              ["Formación", "Abogacía · Ejercicio en la Provincia de Buenos Aires"],
              ["Enfoque", "Trato personal, estrategia y seguimiento del expediente"],
            ].map(([t, d]) => (
              <div key={t}>
                <p className="text-xs tracking-[0.2em] text-accent uppercase">{t}</p>
                <p className="mt-2 text-sm font-light text-foreground/75">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Beneficios() {
  return (
    <section id="beneficios" className="bg-background py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-2xl">
          <p className="eyebrow text-accent">Por qué elegirme</p>
          <h2 className="mt-6 text-4xl leading-tight text-foreground lg:text-5xl">
            Una forma distinta de ejercer la abogacía
          </h2>
        </div>
        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {beneficios.map((b) => (
            <div key={b.title}>
              <div className="flex h-14 w-14 items-center justify-center border border-accent/40">
                <b.icon size={22} strokeWidth={1.2} className="text-accent" />
              </div>
              <h3 className="mt-7 text-xl text-foreground">{b.title}</h3>
              <p className="mt-3 text-sm leading-relaxed font-light text-muted-foreground">
                {b.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="bg-navy-deep py-24 lg:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="eyebrow text-accent">Primera consulta</p>
        <h2 className="mt-6 text-4xl leading-tight text-primary-foreground lg:text-5xl">
          Contame tu situación por WhatsApp
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed font-light text-primary-foreground/65">
          Escribime y en pocas horas vas a tener una respuesta clara sobre cómo continuar. Sin
          compromiso y con total confidencialidad.
        </p>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="mt-12 inline-flex items-center gap-3 bg-accent px-10 py-4 text-xs tracking-[0.2em] text-accent-foreground uppercase transition-opacity hover:opacity-90"
        >
          <MessageCircle size={16} /> Escribir por WhatsApp
        </a>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="bg-background py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-accent">Contacto</p>
            <h2 className="mt-6 text-4xl leading-tight text-foreground lg:text-5xl">
              Dónde encontrarme
            </h2>
            <div className="mt-12 space-y-10">
              <div className="flex gap-5">
                <MapPin size={20} strokeWidth={1.2} className="mt-1 shrink-0 text-accent" />
                <div>
                  <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                    Estudio
                  </p>
                  <p className="mt-2 font-light text-foreground">
                    Zuviría y Ruta 197, Galería Nahuel,
                    <br />
                    1° piso, oficina B — José C. Paz, Buenos Aires (1665)
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <Phone size={20} strokeWidth={1.2} className="mt-1 shrink-0 text-accent" />
                <div>
                  <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                    Teléfonos
                  </p>
                  <p className="mt-2 font-light text-foreground">
                    <a href={WHATSAPP} target="_blank" rel="noreferrer" className="hover:text-accent">
                      15-6381-7775 (WhatsApp)
                    </a>
                    <br />
                    <a href="tel:02320424413" className="hover:text-accent">
                      02320-424413
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <Mail size={20} strokeWidth={1.2} className="mt-1 shrink-0 text-accent" />
                <div>
                  <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">Email</p>
                  <a
                    href="mailto:estudio.vicencio@gmail.com"
                    className="mt-2 block font-light text-foreground hover:text-accent"
                  >
                    estudio.vicencio@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex gap-5">
                <Clock size={20} strokeWidth={1.2} className="mt-1 shrink-0 text-accent" />
                <div>
                  <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                    Horarios
                  </p>
                  <p className="mt-2 font-light text-foreground">
                    Lunes a viernes, 9:00 a 18:00 h — con turno previo
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 border border-border" aria-hidden />
            <iframe
              title="Ubicación del Estudio Vicencio en José C. Paz"
              src="https://www.google.com/maps?q=Zuvir%C3%ADa%20y%20Ruta%20197%2C%20Jos%C3%A9%20C.%20Paz%2C%20Buenos%20Aires&output=embed"
              loading="lazy"
              className="relative h-[420px] w-full grayscale-[0.35] lg:h-full lg:min-h-[520px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy-deep">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-6 max-w-xs text-sm leading-relaxed font-light text-primary-foreground/55">
              Estudio jurídico del Dr. Martín Vicencio. Atención personalizada en José C. Paz y zona
              oeste del Gran Buenos Aires.
            </p>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] text-accent uppercase">Secciones</p>
            <ul className="mt-5 space-y-3">
              {nav.map((i) => (
                <li key={i.href}>
                  <a
                    href={i.href}
                    className="text-sm font-light text-primary-foreground/60 hover:text-accent"
                  >
                    {i.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] text-accent uppercase">Información legal</p>
            <p className="mt-5 text-sm leading-relaxed font-light text-primary-foreground/55">
              Abogado matriculado en la Provincia de Buenos Aires. El contenido de este sitio tiene
              carácter informativo y no constituye asesoramiento legal ni genera relación
              profesional.
            </p>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-primary-foreground/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-light text-primary-foreground/40">
            © {new Date().getFullYear()} Estudio Vicencio. Todos los derechos reservados.
          </p>
          <p className="text-xs font-light text-primary-foreground/40">
            José C. Paz, Buenos Aires, Argentina
          </p>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="scroll-smooth">
      <Hero />
      <Servicios />
      <SobreMi />
      <Beneficios />
      <CTA />
      <Contacto />
      <Footer />
    </main>
  );
}
