import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacidad")({
  head: () => ({
    meta: [
      { title: "Política de privacidad — Estudio Vicencio & Asociados" },
      {
        name: "description",
        content:
          "Cómo usamos las cookies de medición de Google Ads en este sitio, qué datos se comparten con Google y cómo cambiar tu consentimiento.",
      },
      { property: "og:title", content: "Política de privacidad — Estudio Vicencio & Asociados" },
      {
        property: "og:description",
        content:
          "Cómo usamos las cookies de medición de Google Ads en este sitio y cómo cambiar tu consentimiento.",
      },
    ],
  }),
  component: Privacidad,
});

const sections: { title: string; paragraphs: string[]; list?: string[] }[] = [
  {
    title: "Responsable",
    paragraphs: [
      "Estudio Vicencio & Asociados — Dr. Martín Vicencio, José C. Paz, Provincia de Buenos Aires, Argentina.",
    ],
  },
  {
    title: "Qué datos usamos y para qué",
    paragraphs: [
      "Este sitio utiliza la etiqueta de Google Ads únicamente para medir el rendimiento de nuestras campañas publicitarias: cuántos visitantes llegan desde un anuncio, qué páginas ven y si luego nos contactan. No usamos Google Analytics ni Google Tag Manager, ni vendemos ni cedemos datos personales.",
    ],
    list: [
      "Cookies y identificadores publicitarios de Google asociados a la visita.",
      "Dirección IP y datos técnicos derivados de la conexión, tratados por Google.",
      "Interacciones con anuncios de Google Ads (clics, impresiones) y eventos de conversión que se activen en campañas futuras (por ejemplo, contactos por WhatsApp originados en un anuncio).",
    ],
  },
  {
    title: "Destinatario y transferencia internacional",
    paragraphs: [
      "Los datos de medición se procesan por Google Ireland Ltd. y/o Google LLC dentro del marco de Google Ads. Esto implica transferencia internacional de datos hacia servidores de Google. Podés consultar cómo Google trata esos datos en policies.google.com/technologies/ads.",
    ],
  },
  {
    title: "Consentimiento y cómo cambiarlo",
    paragraphs: [
      "Solo mostramos el aviso de cookies a visitantes de regiones donde la ley exige consentimiento para esta medición; en esos casos, la medición queda bloqueada hasta que aceptás.",
      "Desde cualquier región podés cambiar tu elección en cualquier momento con el enlace “Cookies” del pie de página: aceptar habilita la medición y rechazar la desactiva en este navegador. Guardamos tu decisión, la fecha y el texto del aviso que viste en tu navegador.",
    ],
  },
  {
    title: "Tus derechos",
    paragraphs: [
      "Podés ejercer tus derechos de acceso, rectificación y supresión de tus datos personales, y solicitar el cese del tratamiento, escribiéndonos al WhatsApp 15-63817775 o al email del sitio. Si te encontrás en la Unión Europea o el Reino Unido, también podés reclamar ante tu autoridad de protección de datos local.",
    ],
  },
];

function Privacidad() {
  return (
    <main className="min-h-screen bg-background">
      <section className="bg-navy-deep px-6 pt-32 pb-16 lg:px-12 lg:pt-40">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs tracking-[0.35em] text-accent uppercase">Información legal</p>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-primary-foreground lg:text-5xl">
            Política de privacidad
          </h1>
          <p className="mt-4 text-sm font-light text-primary-foreground/60">
            Última actualización: octubre 2026
          </p>
        </div>
      </section>
      <section className="px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-3xl space-y-12">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="font-serif text-2xl text-foreground lg:text-3xl">{s.title}</h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed font-light text-foreground/80">
                {s.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                {s.list ? (
                  <ul className="mt-2 space-y-2 text-sm text-foreground/75">
                    {s.list.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          ))}
          <div className="rounded-[1.75rem] bg-beige p-8 text-center">
            <p className="text-sm leading-relaxed font-light text-foreground/75">
              ¿Tenés alguna consulta sobre este aviso?
            </p>
            <Link
              to="/"
              className="mt-5 inline-flex items-center justify-center rounded-[10px] bg-accent px-8 py-3 text-xs font-semibold tracking-[0.18em] text-accent-foreground uppercase shadow-[0_3px_0_0_rgb(167_90_28)] transition-transform hover:-translate-y-0.5"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
