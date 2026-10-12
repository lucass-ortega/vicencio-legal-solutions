// Tipos globales para la etiqueta de Google Ads (AW-16912464372), que se
// inyecta desde el script de arranque en src/routes/__root.tsx.
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    __vicoAdsLoaded?: boolean;
    __vicoAds?: { load: () => void; prompt: (() => void) | null };
  }
}

export {};
