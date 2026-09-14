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
  ArrowRight,
  ArrowUpRight,
  PenLine,
} from "lucide-react";

import logo from "@/assets/logo-vicencio.png";
import abogadoImg from "@/assets/abogado.jpg.asset.json";
import heroImg from "@/assets/hero-justice.jpg.asset.json";
import tituloFilosofia from "@/assets/titulo-filosofia-1997.jpg.asset.json";
import tituloFamilia from "@/assets/titulo-familia-2003.jpg.asset.json";
import tituloTrabajo2005 from "@/assets/titulo-trabajo-2005.jpg.asset.json";
import tituloTrabajo2012 from "@/assets/titulo-trabajo-2012.jpg.asset.json";
import tituloLey15057 from "@/assets/titulo-ley15057-2026.jpg.asset.json";

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
        src={logo}
        alt="Estudio Vicencio"
        className="h-12 w-auto object-contain"
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
      <div className="relative mx-auto flex max-w-7xl items-center px-6 py-6 lg:justify-between lg:px-12">
        <div className="flex w-full justify-center lg:w-auto lg:justify-start">
          <Logo />
        </div>
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
          className="absolute right-6 top-1/2 -translate-y-1/2 text-primary-foreground lg:static lg:right-auto lg:translate-y-0 lg:hidden"
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

const practicas = [
  { icon: Briefcase, label: "Accidentes de trabajo", sub: "ART" },
  { icon: Users, label: "Divorcios", sub: "Cuota alimentaria" },
  { icon: FileText, label: "Sucesiones", sub: null },
  { icon: PenLine, label: "Contratos", sub: null },
];

function HeroExtras({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {practicas.map((p) => (
          <a
            key={p.label}
            href="#servicios"
            className="group relative flex flex-col items-center justify-center rounded-[14px] border border-accent p-6 text-center shadow-[0_0_18px_-2px_rgba(227,130,48,0.45)] transition-all hover:shadow-[0_0_24px_-1px_rgba(227,130,48,0.7)]"
          >
            <p.icon size={26} strokeWidth={1.4} className="text-accent" />
            <span className="mt-6 text-xs font-semibold tracking-[0.16em] text-accent uppercase">
              {p.label}
            </span>
            {p.sub && (
              <span className="mt-2 text-xs font-semibold tracking-[0.16em] text-accent uppercase">
                {p.sub}
              </span>
            )}
            <ArrowRight
              size={16}
              className="absolute bottom-4 right-4 shrink-0 text-accent transition-transform group-hover:translate-x-1"
            />
          </a>
        ))}
      </div>

      <div className="mt-16 grid border-t border-primary-foreground/10 pt-10 sm:grid-cols-3">
        {[
          ["+15", "Años de experiencia"],
          ["100%", "Atención personalizada"],
          ["+1k", "Casos acompañados"],
        ].map(([n, l], idx) => (
          <div
            key={l}
            className={`px-4 py-4 text-center ${
              idx > 0 ? "sm:border-l sm:border-primary-foreground/10" : ""
            }`}
          >
            <p className="font-serif text-4xl text-accent">{n}</p>
            <p className="mt-2 text-xs tracking-[0.2em] text-primary-foreground/55 uppercase">
              {l}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  const heroCopy = (
    <>
      <div className="flex items-center gap-5">
        <span className="h-px w-10 bg-accent/70" aria-hidden />
        <p className="text-xs tracking-[0.35em] text-accent uppercase">
          Estudio jurídico · Buenos Aires
        </p>
      </div>

      <h1 className="mt-10 max-w-4xl font-serif text-[3rem] leading-[1.02] text-primary-foreground sm:text-7xl lg:mt-8 lg:max-w-xl lg:text-[4.25rem] lg:leading-[1.05]">
        Tu tranquilidad legal, nuestro <em className="italic text-accent">compromiso.</em>
      </h1>

      <div className="mt-12 h-px w-12 bg-accent/70 lg:mt-8" aria-hidden />

      <p className="mt-8 max-w-lg text-base leading-relaxed font-light text-primary-foreground/80 lg:mt-6 lg:text-primary-foreground/70">
        Brindamos asesoramiento jurídico personalizado en derecho civil, laboral, familia y
        patrimonial. Estrategia, claridad y comunicación directa.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row lg:mt-8">
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-3 rounded-[10px] bg-accent px-8 py-4 text-xs font-semibold tracking-[0.18em] text-white uppercase shadow-[0_3px_0_0_rgb(167_90_28)] transition-transform hover:-translate-y-0.5"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-[1em] w-[1em]" aria-hidden>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.82 11.82 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.89-11.893a11.82 11.82 0 0 0-3.48-8.413Z" />
          </svg>
          Hacer consulta <ArrowRight size={16} />
        </a>
        <a
          href="#servicios"
          className="inline-flex items-center justify-center gap-3 rounded-[10px] border-2 border-accent px-8 py-4 text-xs font-semibold tracking-[0.18em] text-accent uppercase shadow-[0_3px_0_0_rgb(167_90_28)] transition-colors hover:bg-accent hover:text-white"
        >
          Ver áreas de práctica <ArrowRight size={16} />
        </a>
      </div>
    </>
  );

  return (
    <section id="inicio" className="relative overflow-hidden bg-navy-deep">
      <Navbar />
      <div className="relative lg:hidden">
        <img
          src={heroImg.url}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-navy-deep/75" />
        <div className="relative px-6 pt-40 pb-16 text-center">
          <div className="mx-auto max-w-xl [&>div:first-child]:justify-center [&>div:nth-child(3)]:mx-auto">
            {heroCopy}
          </div>
        </div>
      </div>

      <div className="mx-auto hidden max-w-6xl px-12 pt-36 lg:block">
        <div className="grid grid-cols-2 items-center gap-16">
          <div>{heroCopy}</div>

          <div>
            <div className="relative h-[540px] overflow-hidden rounded-2xl border border-primary-foreground/10 shadow-soft">
              <img
                src={heroImg.url}
                alt="Edificio de justicia"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-navy-deep/10 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 pt-14 pb-24 lg:hidden">
        <HeroExtras />
      </div>

      <div className="hidden lg:block">
        <HeroExtras className="mx-auto max-w-6xl px-12 pt-16 pb-20" />
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

function GoogleG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.06l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z" />
    </svg>
  );
}

const reviews = [
  {
    initial: "M",
    name: "María González",
    time: "Hace 2 semanas",
    color: "#45413D",
    text: "Una atención excelente. El Dr. Vicencio me acompañó en todo el proceso de mi divorcio con mucha humanidad y claridad. Siempre supe qué paso seguía y me sentí respaldada en cada momento.",
  },
  {
    initial: "C",
    name: "Carlos Fernández",
    time: "Hace 1 mes",
    color: "#1A3A31",
    text: "Me asesoró tras un accidente de trabajo y consiguió lo que me correspondía. Profesional, directo y siempre disponible para responder mis dudas. Lo recomiendo sin dudarlo.",
  },
  {
    initial: "A",
    name: "Andrea López",
    time: "Hace 3 semanas",
    color: "#534686",
    text: "Tramitamos una sucesión familiar que parecía interminable y la resolvió con una eficiencia admirable. Trato personal y honesto, algo que hoy se agradece mucho.",
  },
  {
    initial: "R",
    name: "Roberto Díaz",
    time: "Hace 1 mes",
    color: "#3A5693",
    text: "Revisó un contrato que iba a firmar y me evitó un problema grande. Su asesoramiento preventivo vale oro. Comunicación directa y respuestas rápidas en todo momento.",
  },
];

function Opiniones() {
  return (
    <section id="opiniones" className="bg-[#F9F9F9] py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-accent">Opiniones de clientes</p>
          <h2 className="mt-6 font-serif text-4xl leading-tight text-navy-deep lg:text-5xl">
            La confianza de quienes ya nos eligieron
          </h2>
          <div className="mt-7 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-accent/50" aria-hidden />
            <Scale size={20} strokeWidth={1.2} className="text-accent" />
            <span className="h-px w-12 bg-accent/50" aria-hidden />
          </div>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed font-light text-muted-foreground">
            Cada caso representa una persona y una historia. Estas son algunas de las
            experiencias compartidas por quienes confiaron en el estudio.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center gap-3">
          <div className="flex items-center gap-4">
            <GoogleG className="h-7 w-7" />
            <span className="font-serif text-4xl text-navy-deep">5,0</span>
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} viewBox="0 0 20 20" className="h-5 w-5 fill-accent" aria-hidden>
                  <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.77l-5.2 2.73.99-5.79-4.21-4.1 5.82-.85L10 1.5z" />
                </svg>
              ))}
            </div>
          </div>
          <p className="text-sm font-light text-muted-foreground">
            Basado en 23 reseñas de Google
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r) => (
            <article
              key={r.name}
              className="flex flex-col rounded-lg border border-border bg-card p-7"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-full font-sans text-base font-semibold text-white"
                    style={{ backgroundColor: r.color }}
                  >
                    {r.initial}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-navy-deep">{r.name}</p>
                    <p className="text-xs font-light text-muted-foreground">{r.time}</p>
                  </div>
                </div>
                <GoogleG className="h-5 w-5 shrink-0" />
              </div>
              <div className="mt-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-accent" aria-hidden>
                    <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.77l-5.2 2.73.99-5.79-4.21-4.1 5.82-.85L10 1.5z" />
                  </svg>
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed font-light text-foreground/75">
                {r.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-8 rounded-lg bg-navy-deep px-8 py-10 text-center sm:flex-row sm:text-left lg:px-12">
          <div className="flex items-center gap-5">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent/50">
              <Scale size={22} strokeWidth={1.2} className="text-accent" />
            </span>
            <p className="max-w-2xl text-sm leading-relaxed font-light text-primary-foreground/80">
              Nuestro compromiso es que cada cliente se sienta escuchado, informado y
              acompañado durante todo el proceso. La confianza es la base de nuestro trabajo.
            </p>
          </div>
          <a
            href="https://www.google.com/search?q=Estudio+Vicencio+Jos%C3%A9+C.+Paz+rese%C3%B1as"
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-2 border border-primary-foreground/40 px-6 py-3 text-xs tracking-[0.18em] text-primary-foreground uppercase transition-colors hover:bg-primary-foreground hover:text-navy-deep"
          >
            Ver más reseñas en Google <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

const titulos: { img: string; alt: string; caption: string }[] = [
  {
    img: tituloFilosofia.url,
    alt: "Certificado XVIII Congreso Mundial de Filosofía Jurídica y Social, 1997",
    caption: "XVIII Congreso Mundial de Filosofía Jurídica y Social · 1997",
  },
  {
    img: tituloFamilia.url,
    alt: "Certificado Tribunales de Familia, Círculo de Abogados, 2003",
    caption: "Tribunales de Familia · Círculo de Abogados · 2003",
  },
  {
    img: tituloTrabajo2005.url,
    alt: "Certificado Foro de Institutos de Derecho del Trabajo, 2005",
    caption: "Foro de Institutos de Derecho del Trabajo · 2005",
  },
  {
    img: tituloTrabajo2012.url,
    alt: "Certificado XIV Encuentro Foro de Derecho del Trabajo, 2012",
    caption: "XIV Encuentro Foro de Derecho del Trabajo · 2012",
  },
  {
    img: tituloLey15057.url,
    alt: "Certificado Ley 15.057 y Modernización Laboral, Colegio de Abogados de San Martín, 2026",
    caption: "Ley 15.057 y Modernización Laboral · 2026",
  },
  {
    img: tituloLey15057.url,
    alt: "Certificado Ley 15.057 y Modernización Laboral, Colegio de Abogados de San Martín, 2026",
    caption: "Ley 15.057 y Modernización Laboral · 2026",
  },
];

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
              Desde hace más de quince años acompaño junto a mi equipo de abogados a personas y
              familias de la localidad de José C. Paz y zonas aledañas en los momentos en que la ley
              se vuelve necesaria. Nuestro trabajo comienza escuchando: sin un diagnóstico honesto no
              hay estrategia posible.
            </p>
            <p>
              Ejerzo en derecho civil, laboral, familia y accidentes de tránsito, con presencia
              activa en cada instancia del proceso. Preferimos un estudio de escala humana, donde el
              cliente conoce a su abogado y entiende cada paso que se da en su nombre.
            </p>
            <p>
              El compromiso es simple: información clara, plazos reales y una defensa sostenida
              hasta el final.
            </p>
          </div>
          <div className="mt-10 grid gap-6 border-t border-navy/10 pt-8 sm:grid-cols-2">
            {[
              ["Formación", "Abogacía - Ejercicio en la Provincia de Buenos Aires y Capital Federal"],
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

      <div className="mx-auto mt-24 max-w-7xl px-6 lg:mt-32 lg:px-12">
        <div className="max-w-2xl">
          <p className="eyebrow text-accent">Formación complementaria</p>
          <h3 className="mt-6 text-3xl leading-tight text-foreground lg:text-4xl">
            Títulos y certificaciones
          </h3>
          <p className="mt-5 text-base leading-relaxed font-light text-foreground/75">
            Capacitación continua en derecho civil, laboral, de familia y filosofía jurídica a lo
            largo de más de veinticinco años de ejercicio profesional.
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {titulos.map((t, index) => (
            <figure key={`${t.caption}-${index}`} className="group">
              <div className="relative overflow-hidden border border-navy/15 bg-white p-3 shadow-[var(--shadow-soft)] transition-shadow duration-300 group-hover:shadow-lg">
                <div className="overflow-hidden">
                  <img
                    src={t.img}
                    alt={t.alt}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </div>
              <figcaption className="mt-4 text-center text-xs leading-relaxed font-light text-foreground/70">
                {t.caption}
              </figcaption>
            </figure>
          ))}
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
                      15-63817775 (WhatsApp)
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
                    Lunes a Viernes. 10:00 a 19;00 h - sin turno previo, con
                    previo aviso vía WhatsApp
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 border border-border" aria-hidden />
            <iframe
              title="Ubicación del Estudio Vicencio en José C. Paz"
              src="https://www.google.com/maps?q=ESTUDIO%20JURIDICO%20DR%20VICENCIO%2C%20Zuvir%C3%ADa%20y%20Ruta%20197%2C%20Jos%C3%A9%20C.%20Paz%2C%20Buenos%20Aires&z=17&output=embed"
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
      <Opiniones />
      <SobreMi />
      <Beneficios />
      <CTA />
      <Contacto />
      <Footer />
    </main>
  );
}
