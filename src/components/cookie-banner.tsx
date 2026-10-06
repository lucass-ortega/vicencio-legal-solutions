import { useEffect, useState } from "react";

import {
  loadAdsTag,
  openCookieSettings,
  PURPOSES,
  readConsent,
  RECIPIENTS,
  saveConsent,
  type ConsentRecord,
} from "@/lib/cookie-consent";

export function CookieBanner() {
  const [mode, setMode] = useState<"hidden" | "notice" | "settings">("hidden");
  const [country, setCountry] = useState<string | undefined>(undefined);
  const [saved, setSaved] = useState<ConsentRecord | null>(null);

  useEffect(() => {
    setSaved(readConsent());

    // El script del <head> pudo detectar la región antes de la hidratación.
    if (window.__vicoAds?.prompt) {
      setCountry(window.__vicoAds.prompt.country);
      setMode("notice");
    }

    const onPrompt = () => {
      if (window.__vicoAds?.prompt) {
        setCountry(window.__vicoAds.prompt.country);
        setMode("notice");
      }
    };
    const onSettings = () => {
      setSaved(readConsent());
      setMode("settings");
    };

    window.addEventListener("vico:cookie-prompt", onPrompt);
    window.addEventListener("vico:cookie-settings", onSettings);
    return () => {
      window.removeEventListener("vico:cookie-prompt", onPrompt);
      window.removeEventListener("vico:cookie-settings", onSettings);
    };
  }, []);

  const accept = () => {
    const record = saveConsent("granted", country ?? saved?.country);
    setSaved(record);
    loadAdsTag();
    setMode("hidden");
  };

  const deny = () => {
    setSaved(saveConsent("denied", country ?? saved?.country));
    setMode("hidden");
  };

  if (mode === "hidden") return null;

  const isSettings = mode === "settings";

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Configuración de cookies"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-primary-foreground/10 bg-navy-deep/95 backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-12">
        <div className="lg:max-w-2xl">
          {isSettings ? (
            <>
              <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
                Cookies · Configuración
              </p>
              <p className="mt-2 text-sm leading-relaxed font-light text-primary-foreground/75">
                {saved
                  ? `Tu elección actual es: ${saved.decision === "granted" ? "aceptada" : "rechazada"}. Podés cambiarla en cualquier momento.`
                  : "Todavía no elegiste. Podés cambiar esta preferencia en cualquier momento."}
              </p>
              <ul className="mt-3 space-y-1 text-xs leading-relaxed font-light text-primary-foreground/55">
                <li>· Finalidad: {PURPOSES[0].toLowerCase()}.</li>
                <li>· Destinatario: {RECIPIENTS[0]}.</li>
                <li>
                  · Más detalles en la{" "}
                  <a
                    href="/privacidad"
                    className="text-accent underline underline-offset-2 hover:text-accent/80"
                  >
                    política de privacidad
                  </a>
                  .
                </li>
              </ul>
            </>
          ) : (
            <>
              <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
                Cookies
              </p>
              <p className="mt-2 text-sm leading-relaxed font-light text-primary-foreground/75">
                Usamos cookies de Google Ads para medir el rendimiento de nuestras campañas
                publicitarias. Podés aceptar o rechazar; esta preferencia podés cambiarla en
                cualquier momento desde el enlace “Cookies” del pie de página.
              </p>
            </>
          )}
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:items-center">
          <button
            type="button"
            onClick={accept}
            className="inline-flex items-center justify-center rounded-[10px] bg-accent px-8 py-3 text-xs font-semibold tracking-[0.18em] text-accent-foreground uppercase shadow-[0_3px_0_0_rgb(167_90_28)] transition-transform hover:-translate-y-0.5"
          >
            Aceptar
          </button>
          <button
            type="button"
            onClick={deny}
            className="inline-flex items-center justify-center rounded-[10px] border-2 border-accent px-8 py-3 text-xs font-semibold tracking-[0.18em] text-accent uppercase transition-colors hover:bg-accent hover:text-white"
          >
            Rechazar
          </button>
          {isSettings ? (
            <button
              type="button"
              onClick={() => setMode("hidden")}
              className="text-xs font-light tracking-[0.18em] text-primary-foreground/50 uppercase transition-colors hover:text-primary-foreground/80"
            >
              Cerrar
            </button>
          ) : (
            <a
              href="/privacidad"
              className="text-center text-xs font-light tracking-[0.18em] text-primary-foreground/50 uppercase underline-offset-4 transition-colors hover:text-primary-foreground/80 sm:text-left"
            >
              Más información
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// Reexporta el disparador para usarlo desde otros módulos sin importar el componente.
export { openCookieSettings };
