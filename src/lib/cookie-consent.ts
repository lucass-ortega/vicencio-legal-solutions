// Consentimiento de cookies para la etiqueta de Google Ads (AW-16912464372).
// Solo medición de anuncios. Sin Google Analytics ni Google Tag Manager.

export const CONSENT_VERSION = 1;
export const CONSENT_KEY = "vicencio-cookie-consent";

export const NOTICE_TEXT =
  "Usamos cookies de Google Ads para medir el rendimiento de nuestras campañas publicitarias (visitas, clics y consultas que llegan desde los anuncios). Podés aceptar o rechazar este uso.";

export const PURPOSES = ["Medición de rendimiento de anuncios (Google Ads)"];

export const RECIPIENTS = ["Google Ireland Ltd. / Google LLC (Google Ads)"];

export type ConsentDecision = "granted" | "denied";

export type ConsentRecord = {
  v: number;
  decision: ConsentDecision;
  country?: string;
  at: string;
  notice: string;
  purposes: string[];
  recipients: string[];
};

declare global {
  interface Window {
    __vicoAds?: {
      load: () => void;
      prompt?: { country?: string } | null;
    };
    __vicoAdsLoaded?: boolean;
  }
}

export function readConsent(): ConsentRecord | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentRecord;
    if (parsed && parsed.v === CONSENT_VERSION && parsed.decision) return parsed;
    return null;
  } catch {
    return null;
  }
}

export function saveConsent(decision: ConsentDecision, country?: string): ConsentRecord {
  const record: ConsentRecord = {
    v: CONSENT_VERSION,
    decision,
    country,
    at: new Date().toISOString(),
    notice: NOTICE_TEXT,
    purposes: [...PURPOSES],
    recipients: [...RECIPIENTS],
  };
  try {
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify(record));
  } catch {
    // sin storage disponible: la decisión vale solo para esta visita
  }
  return record;
}

/** Carga la etiqueta de Google Ads (idempotente; la implementación vive en el script del <head>). */
export function loadAdsTag(): void {
  if (typeof window === "undefined") return;
  window.__vicoAds?.load();
}

/** Abre el panel de cookies desde cualquier parte del sitio (p. ej. el pie de página). */
export function openCookieSettings(): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("vico:cookie-settings"));
}
